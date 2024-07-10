import { cn } from "@/lib";
import type { DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Table as ReactTable } from "@tanstack/react-table";
import { GripVerticalIcon } from "lucide-react";
import { CSSProperties, useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface IndexTableColumnsProps<TData> {
  table: ReactTable<TData>;
  mactchingLabel?: (id: any) => string;
  width?: number;
}

export function IndexTableColumns<TData>({
  table,
  mactchingLabel,
  width,
}: IndexTableColumnsProps<TData>) {
  const tableRows = table.getAllColumns().filter((column) => {
    return typeof column.accessorFn !== "undefined"; //&& column.getCanHide()
  });

  const [sortColumns, setSortColumns] = useState(() => tableRows);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setSortColumns((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);
        const newItems = arrayMove(items, oldIndex, newIndex);
        /** 牛逼！！！！！关键中的关键 */
        table.setColumnOrder(newItems.map((item) => item.id));
        return newItems;
      });
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
        >
          <MixerHorizontalIcon className="mr-2 h-4 w-4" />
          {"Columns"}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        style={{ width: width }}
        className="w-[160px] p-0"
        align="end"
      >
        <DndContext
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          <SortableContext
            items={sortColumns}
            strategy={verticalListSortingStrategy}
          >
            {sortColumns.map((item) => {
              return (
                <SortItem
                  key={item.id}
                  id={item.id}
                  checked={item.getIsVisible()}
                  onChange={(value) => item.toggleVisibility(!!value)}
                  disabled={item.getCanHide() === false}
                >
                  <div className="line-clamp-2">
                    {mactchingLabel?.(item.id) ?? item.id}
                  </div>
                </SortItem>
              );
            })}
          </SortableContext>
        </DndContext>
      </PopoverContent>
    </Popover>
  );
}

function SortItem({
  children,
  id,
  checked = false,
  onChange,
  disabled = false,
}: {
  children: React.ReactNode;
  id: UniqueIdentifier;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}) {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style: CSSProperties = {
    opacity: isDragging ? 0.8 : 1,
    position: "relative",
    transform: CSS.Translate.toString(transform), // translate instead of transform to avoid squishing
    transition,
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <Label
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={cn("group flex items-center gap-2", "p-2", "hover:bg-muted")}
    >
      <Checkbox
        disabled={disabled}
        checked={checked}
        onCheckedChange={(value) => {
          onChange?.(!!value);
        }}
      />
      <GripVerticalIcon
        {...listeners}
        className="h-4 w-4 text-muted-foreground flex-shrink-0 group-hover:text-primary hover:cursor-grab"
      />
      <div className="line-clamp-2">{children}</div>
    </Label>
  );
}
