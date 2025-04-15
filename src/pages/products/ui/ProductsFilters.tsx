import { useUpdateQueryParams } from "@/shared/hooks/useUpdateQueryParams";
import { QueryParamKeys } from "@/shared/queryParamKeys";
import CategorySelect from "@/widgets/category-select/ui/CategorySelect";
import { FunnelIcon, FunnelXIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function ProductsFilters() {
  const [searchParams] = useSearchParams();

  const udpateQueryParams = useUpdateQueryParams();

  const hasFilters = searchParams.toString().length > 0;

  const handleClear = () => {
    udpateQueryParams({
      [QueryParamKeys.Category]: undefined,
      [QueryParamKeys.Order]: undefined,
      [QueryParamKeys.OrderBy]: undefined,
    });
  };

  return (
    <div className="w-full flex items-center justify-end space-x-3">
      {hasFilters ? (
        <FunnelXIcon
          className="w-5 text-muted-foreground cursor-pointer"
          onClick={handleClear}
        />
      ) : (
        <FunnelIcon className="w-5 text-muted-foreground" />
      )}
      <CategorySelect
        value={searchParams.get(QueryParamKeys.Category) ?? undefined}
      />
    </div>
  );
}
