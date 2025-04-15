import CategorySelect from "@/widgets/category-select/ui/CategorySelect";
import { FunnelIcon } from "lucide-react";

export default function ProductsFilters() {
  return (
    <div className="w-full flex items-center justify-end space-x-3">
      <FunnelIcon className="w-5 text-muted-foreground" />
      <CategorySelect />
    </div>
  );
}
