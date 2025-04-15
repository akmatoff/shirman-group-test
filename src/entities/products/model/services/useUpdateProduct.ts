import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IProduct } from "../types";
import updateProduct from "../api/updateProduct";
import { toast } from "sonner";
import { QUERY_KEYS } from "@/shared/queryKeys";

interface Params {
  id: number;
  onSuccess?: () => void;
}

export default function useUpdateProduct(params: Params) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: Partial<IProduct>) => updateProduct(params.id, data),
    onSuccess: (data) => {
      params?.onSuccess?.();
      toast.success("Обновлено успешно!");

      queryClient
        .getQueriesData<IProduct[]>({ queryKey: [QUERY_KEYS.PRODUCTS_LIST] })
        .forEach(([queryKey, oldData]) => {
          if (!oldData) return;

          const updatedData = oldData.map((product) =>
            product.id === params.id ? { ...product, ...data } : product
          );

          queryClient.setQueryData(queryKey, updatedData);
        });
    },
    onError: () => {
      toast.error("Произошла ошибка при обновлении!");
    },
  });

  return {
    updateProduct: mutate,
    isUpdatingProduct: isPending,
  };
}
