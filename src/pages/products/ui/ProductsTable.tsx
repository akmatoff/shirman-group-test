import useProductsList from "@/entities/products/model/services/useProductsList";
import { columns } from "@/entities/products/model/table-columns";
import { DataTable } from "@/shared/ui/data-table";

export default function ProductsTable() {
  const { products, isProductsLoading } = useProductsList();

  return (
    <div className="p-6">
      <h1 className="font-bold mb-3">Список товаров</h1>
      <DataTable
        columns={columns}
        data={products ?? []}
        isLoading={isProductsLoading}
      />
    </div>
  );
}
