import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../../shared/queryKeys";
import getProductsList from "../api/getProductsList";

interface Params {
  category?: string;
  sortBy?: string;
  order?: string;
}

export default function useProductsList(params?: Params) {
  const { data, isPending } = useQuery({
    queryKey: [
      QUERY_KEYS.PRODUCTS_LIST,
      {
        category: params?.category,
        sortBy: params?.sortBy,
        order: params?.order,
      },
    ],
    queryFn: () => getProductsList(params),
  });

  return {
    products: data,
    isProductsLoading: isPending,
  };
}
