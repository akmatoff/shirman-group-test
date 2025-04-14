import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../../shared/queryKeys";
import getProductsList from "../api/getProductsList";

export default function useProductsList() {
    const { data, isPending } = useQuery({
        queryKey: [QUERY_KEYS.PRODUCTS_LIST],
        queryFn: getProductsList
    })

    return {
        products: data,
        isProductsLoading: isPending
    }
}