import { ColumnDef } from "@tanstack/react-table";
import { IProduct } from "./types";

export const columns: ColumnDef<IProduct>[] = [
  {
    accessorKey: "image",
    header: "",
    cell: ({ row }) => (
      <div className="flex justify-center">
        <img src={row.original.image} className="max-w-16" />
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: "Название",
  },
  {
    accessorKey: "price",
    header: "Цена",
  },
  {
    accessorKey: "category",
    header: "Категория",
  },
];
