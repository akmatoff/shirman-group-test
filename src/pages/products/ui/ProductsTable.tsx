import useProductsList from "@/entities/products/model/services/useProductsList";
import { columns } from "@/entities/products/model/table-columns";
import { DataTable } from "@/shared/ui/data-table";
import ProductsFilters from "./ProductsFilters";
import { useSearchParams } from "react-router-dom";
import { QueryParamKeys } from "@/shared/queryParamKeys";
import { IProduct } from "@/entities/products/model/types";
import { useState } from "react";
import UpdateProductModal from "./UpdateProductModal";

export default function ProductsTable() {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<
    IProduct | undefined
  >();

  const [searchParams] = useSearchParams();

  const { products, isProductsLoading } = useProductsList({
    category: searchParams.get(QueryParamKeys.Category) ?? undefined,
    sortBy: searchParams.get(QueryParamKeys.OrderBy) ?? undefined,
    order: searchParams.get(QueryParamKeys.Order) ?? undefined,
  });

  const handleRowClick = (product: IProduct) => {
    setIsUpdateModalOpen(true);
    setSelectedProduct(product);
  };

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
        onRowClick={handleRowClick}
      />

      {!!selectedProduct && (
        <UpdateProductModal
          isOpen={isUpdateModalOpen}
          onOpenChange={setIsUpdateModalOpen}
          product={selectedProduct}
        />
      )}
    </div>
  );
}
