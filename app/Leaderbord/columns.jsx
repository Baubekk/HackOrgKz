'use client';

import { ColumnDef } from "@tanstack/react-table";

// This is used to define the shape of your data.
export const columns = [
  {
    accessorKey: "ranking",
    header: "RANKING",
  },
  {
    accessorKey: "status",
    header: "Название команды",
  },
  {
    accessorKey: "email",
    header: "Имена участников",
  },
  {
    accessorKey: "amount",
    header: "Очки",
  },
];
