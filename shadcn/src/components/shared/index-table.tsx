import { cn } from "@/lib";
import {
  ColumnDef,
  Table as ReactTable,
  flexRender,
} from "@tanstack/react-table";
import { LoaderCircleIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui";

interface IndexTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  table: ReactTable<TData>;
  stickyColumnIds?: string[];
  loading?: boolean;
  stickyLastColumn?: boolean;
}

export const IndexTable = <TData, TValue>({
  columns,
  table,
  stickyColumnIds = [],
  loading,
  stickyLastColumn,
}: IndexTableProps<TData, TValue>) => {
  return (
    <div className="rounded-md border relative">
      <div x-chunk="loading" className="relative h-0">
        {loading && <LoaderCircleIcon className="h-5 w-5 animate-spin" />}
      </div>
      <Table className="relative">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-muted/40">
              {headerGroup.headers.map((header, idx) => {
                const isSticky = stickyColumnIds.includes(header.id);
                const isLastSticky =
                  stickyLastColumn && idx === headerGroup.headers.length - 1;

                return (
                  <TableHead
                    key={header.id}
                    colSpan={header.colSpan}
                    className={cn(
                      isSticky && "sticky left-0 bg-background" /** 固定列 */,
                      isLastSticky &&
                        "rounded-r-md sticky right-0 bg-background"
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell, idx) => {
                  const isSticky = stickyColumnIds.includes(cell.column.id);
                  const isLastSticky =
                    stickyLastColumn &&
                    idx === row.getVisibleCells().length - 1;
                  return (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        "py-2",
                        isSticky && "sticky left-0 bg-background" /** 固定列 */,
                        isLastSticky &&
                          "rounded-r-md sticky right-0 bg-background"
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {"No results"}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
