import { ColumnDef } from "@tanstack/react-table";
import { IProduct } from "./types";
import { MoreHorizontalIcon } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

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
    header: "Цена",
    cell: ({ row }) => <span>${row.original.price}</span>,
  },
  {
    accessorKey: "category",
    header: "Категория",
    cell: ({ row }) => row.original.title,
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => (
      <div>
        <Button variant="outline" className="rounded-full px-2">
          <MoreHorizontalIcon />
        </Button>
      </div>
    ),
  },
];
