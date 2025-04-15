import { useUpdateQueryParams } from "@/shared/hooks/useUpdateQueryParams";
import { QueryParamKeys } from "@/shared/queryParamKeys";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function PriceTableHeader() {
  const [searchParams] = useSearchParams();

  const updateQueryParams = useUpdateQueryParams();

  const orderParam = searchParams.get(QueryParamKeys.Order);

  const handleSortChange = () =>
    updateQueryParams({
      [QueryParamKeys.OrderBy]: "price",
      [QueryParamKeys.Order]:
        orderParam === "asc" || orderParam === undefined ? "desc" : "asc",
    });

  return (
    <div
      className="flex items-center space-x-1 cursor-pointer"
      onClick={handleSortChange}
    >
      <div>Цена</div>

      {orderParam === "asc" || !orderParam ? (
        <ArrowUpIcon className="w-4 h-4 text-primary" />
      ) : (
        <ArrowDownIcon className="w-4 h-4 text-primary" />
      )}
    </div>
  );
}
