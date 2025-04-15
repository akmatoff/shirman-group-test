import { QUERY_KEYS } from "@/shared/queryKeys";
import { useQuery } from "@tanstack/react-query";
import getCategoriesList from "../api/getCategoriesList";

export default function useCategoriesList() {
  const { data, isPending } = useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES_LIST],
    queryFn: getCategoriesList,
  });

  return {
    categories: data,
    isCategoriesLoading: isPending,
  };
}
