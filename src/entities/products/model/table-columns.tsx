import { ColumnDef } from "@tanstack/react-table";
import { IProduct } from "./types";
import PriceTableHeader from "./PriceTableHeader";

export const columns: ColumnDef<IProduct>[] = [
  {
    accessorKey: "image",
    header: "",
    cell: ({ row }) => (
      <div className="flex justify-center min-h-14">
        <img src={row.original.images[0]} className="max-w-16 rounded-lg" />
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: "Название",
  },
  {
    accessorKey: "price",
    header: () => <PriceTableHeader />,
    cell: ({ row }) => (
      <span className="bg-primary rounded-lg px-3 py-1 text-white">
        ${row.original.price}
      </span>
    ),
  },
  {
    accessorKey: "category",
    header: "Категория",
    cell: ({ row }) => row.original.title,
  },
];
