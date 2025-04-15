import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../../shared/queryKeys";
import getProductsList from "../api/getProductsList";

interface Params {
  categoryId?: number;
}

export default function useProductsList(params?: Params) {
  const { data, isPending } = useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS_LIST, params?.categoryId],
    queryFn: () => getProductsList(params),
  });

  return {
    products: data,
    isProductsLoading: isPending,
  };
}
