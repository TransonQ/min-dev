import { mockOptions } from "@/mocks";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table as ReactTable } from "@tanstack/react-table";
import { FilterDateRange, FilterFaceted, IndexTableColumns } from "../shared";
import { Button, Input } from "../ui";

interface DataTableToolbarProps<TData> {
  table: ReactTable<TData>;
}

export function ExampleFilters<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-1 flex-wrap items-center gap-2">
        <Input
          placeholder={"search"}
          value={(table.getColumn("id")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            table.getColumn("id")?.setFilterValue(event.target.value);
            table.setPageIndex(0); // 搜索的时候自动跳转到第一页
          }}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("name") && (
          <FilterFaceted
            column={table.getColumn("name")}
            title={"Name"}
            options={mockOptions}
          />
        )}
        {table.getColumn("date") && (
          <FilterDateRange column={table.getColumn("date")} title={"date"} />
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            {"Clear all"}
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <IndexTableColumns table={table} width={180} />
    </div>
  );
}
