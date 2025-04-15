import useProductsList from "@/entities/products/model/services/useProductsList";
import { columns } from "@/entities/products/model/table-columns";
import { DataTable } from "@/shared/ui/data-table";
import ProductsFilters from "./ProductsFilters";
import { useSearchParams } from "react-router-dom";
import { QueryParamKeys } from "@/shared/queryParamKeys";

export default function ProductsTable() {
  const [searchParams] = useSearchParams();

  const { products, isProductsLoading } = useProductsList({
    categoryId: searchParams.get(QueryParamKeys.Category)
      ? Number(searchParams.get(QueryParamKeys.Category))
      : undefined,
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h1 className="font-bold text-lg min-w-48">Список товаров</h1>

        <ProductsFilters />
      </div>
      <DataTable
        columns={columns}
        data={products ?? []}
        isLoading={isProductsLoading}
      />
    </div>
  );
}
