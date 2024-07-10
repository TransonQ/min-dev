import { MockTableData } from "@/mocks";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { IndexTableHeader } from "../shared/index-table-header";

export const exampleColumns: ColumnDef<MockTableData>[] = [
  {
    id: "id",
    accessorKey: "id",
    enableSorting: false,
    // enableHiding: false,
    header: ({ column }) => {
      return <IndexTableHeader column={column} title="ID" />;
    },
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },
  {
    id: "name",
    accessorKey: "name",
    // enableSorting: false,
    enableHiding: false,
    header: ({ column }) => {
      return <IndexTableHeader column={column} title="Name" />;
    },
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    id: "email",
    accessorKey: "email",
    enableSorting: false,
    // enableHiding: false,
    header: ({ column }) => {
      return <IndexTableHeader column={column} title="Email" />;
    },
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    id: "address",
    accessorKey: "address",
    enableSorting: false,
    // enableHiding: false,
    header: ({ column }) => {
      return <IndexTableHeader column={column} title="Address" />;
    },
    cell: ({ row }) => <div>{row.getValue("address")}</div>,
  },
  {
    id: "city",
    accessorKey: "city",
    enableSorting: false,
    // enableHiding: false,
    header: ({ column }) => {
      return <IndexTableHeader column={column} title="City" />;
    },
    cell: ({ row }) => <div>{row.getValue("city")}</div>,
  },
  {
    id: "state",
    accessorKey: "state",
    enableSorting: false,
    // enableHiding: false,
    header: ({ column }) => {
      return <IndexTableHeader column={column} title="State" />;
    },
    cell: ({ row }) => <div>{row.getValue("state")}</div>,
  },
  {
    id: "zip",
    accessorKey: "zip",
    enableSorting: false,
    // enableHiding: false,
    header: ({ column }) => {
      return <IndexTableHeader column={column} title="Zip" />;
    },
    cell: ({ row }) => <div>{row.getValue("zip")}</div>,
  },
  {
    id: "date",
    accessorKey: "date",
    enableSorting: true,
    // enableHiding: false,
    header: ({ column }) => {
      return <IndexTableHeader column={column} title="Date" />;
    },
    cell: ({ row }) => <div>{format(row.getValue("date"), "yyyy-MM-dd")}</div>,
  },
];