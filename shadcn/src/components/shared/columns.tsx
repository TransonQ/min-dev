import { MockTableData } from "@/mocks";
import { ColumnDef } from "@tanstack/react-table";
import { IndexTableHeader } from "./index-table-header";

export const tableColumns: ColumnDef<MockTableData>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: ({ column }) => {
      return <IndexTableHeader column={column} title="ID" />;
    },
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },
  {
    id: "name",
    accessorKey: "name",
    header: ({ column }) => {
      return <IndexTableHeader column={column} title="Name" />;
    },
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    id: "email",
    accessorKey: "email",
    header: ({ column }) => {
      return <IndexTableHeader column={column} title="Email" />;
    },
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    id: "address",
    accessorKey: "address",
    header: ({ column }) => {
      return <IndexTableHeader column={column} title="Address" />;
    },
    cell: ({ row }) => <div>{row.getValue("address")}</div>,
  },
  {
    id: "city",
    accessorKey: "city",
    header: ({ column }) => {
      return <IndexTableHeader column={column} title="City" />;
    },
    cell: ({ row }) => <div>{row.getValue("city")}</div>,
  },
  {
    id: "state",
    accessorKey: "state",
    header: ({ column }) => {
      return <IndexTableHeader column={column} title="State" />;
    },
    cell: ({ row }) => <div>{row.getValue("state")}</div>,
  },
  {
    id: "zip",
    accessorKey: "zip",
    header: ({ column }) => {
      return <IndexTableHeader column={column} title="Zip" />;
    },
    cell: ({ row }) => <div>{row.getValue("zip")}</div>,
  },
];
