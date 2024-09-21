"use client"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

import * as React from "react"
import {
  ChevronDownIcon,
  DotsHorizontalIcon,
  CaretSortIcon,
} from "@radix-ui/react-icons"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const formatDate = (dateString) => {
  if (!dateString) {
    return "Not Edited";
  }
  const options = { day: '2-digit', month: 'short', year: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-GB', options);
};
const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="border-[#474747]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-[#474747]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => <div>{row.getValue("description")}</div>,
  },
  {
    accessorKey: "pageName",
    header: "Page Name",
    cell: ({ row }) => (
      <Badge variant="outline">
        {row.getValue("pageName")}
      </Badge>
    ),
  },
  {
    accessorKey: "created",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Created
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <p className="text-start ml-4">{formatDate(row.getValue("created"))} </p>,
  },
  {
    accessorKey: "edited",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Edited
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <p className="text-start ml-4">{formatDate(row.getValue("edited"))}</p>,
  },
  {
    accessorKey: "linkCount",
    header: "Link Count",
    cell: ({ row }) => <div>{row.getValue("linkCount")}</div>,
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority")
      return priority === "high" ? (
        <Badge variant="destructive">High</Badge>
      ) : priority === "medium" ? (
        <Badge variant="secondary">Medium</Badge>
      ) : (
        <Badge variant="secondary">Low</Badge>
      )
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const bookmark = row.original

      const updatePriority = (newPriority) => {
        bookmark.priority = newPriority
        console.log(`Updated priority for ${bookmark.name}: ${bookmark.priority}`)
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(bookmark.id)}>
              Copy bookmark ID
            </DropdownMenuItem>
            <DropdownMenuItem>View bookmark details</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Update Priority</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onClick={() => updatePriority("high")}>
                    <div className="w-[10px] h-[10px] bg-red-600 rounded-full mr-2"></div> High Priority
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => updatePriority("medium")}>
                    <div className="w-[10px] h-[10px] bg-yellow-600 rounded-full mr-2"></div> Medium Priority
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => updatePriority("low")}>
                    <div className="w-[10px] h-[10px] bg-green-600 rounded-full mr-2"></div> Low Priority
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTableDemo({ data }) {
  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState([])
  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 8,
      },
    },
  })
 
  return (
    <div className="w-full border-[#474747]">
      <div className="flex items-center py-4 border-[#474747]">
        <Input
          placeholder="Filter bookmarks..."
          value={(table.getColumn("name")?.getFilterValue()) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border-[#474747]"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto border-[#474747] hover:bg-[#2a2a2a] focus:bg-[#2a2a2a]">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="border-[#474747] hover:bg-[#2a2a2a] focus:bg-[#2a2a2a]">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize border-[#474747] hover:bg-[#2a2a2a] focus:bg-[#2a2a2a]"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border border-[#474747]">
        <Table className="border-[#474747]">
          <TableHeader className="border-[#474747]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-[#474747]">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="border-[#474747]">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="border-[#474747]">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <ContextMenu key={row.id}>
                  <ContextMenuTrigger asChild>
                    <TableRow
                      data-state={row.getIsSelected() && "selected"}
                      className="border-[#474747] hover:bg-[#2a2a2a] data-[state=selected]:bg-[#212121]"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="border-[#474747]">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem onClick={() => navigator.clipboard.writeText(row.original.id)}>
                      Copy bookmark ID
                    </ContextMenuItem>
                    <ContextMenuItem>View bookmark details</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))
            ) : (
              <TableRow className="border-[#474747]">
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center border-[#474747]"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4 border-[#474747]">
        <div className="flex-1 text-sm text-muted-foreground border-[#474747]">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2 border-[#474747]">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="border-[#474747]"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="border-[#474747]"
          >
            Next
          </Button>
        </div>
      </div>
      </div>
  )
}

export default function AllList({ data , time }) {
  console.log("AllList", time);
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "pageName",
      header: "Page Name",
    },
    {
      accessorKey: "created",
      header: "Created",
      cell: ({ row }) => new Date(row.getValue("created")).toLocaleDateString(),
    },
    {
      accessorKey: "edited",
      header: "Edited",
      cell: ({ row }) => new Date(row.getValue("edited")).toLocaleDateString(),
    },
    {
      accessorKey: "linkCount",
      header: "Link Count",
    },
    {
      accessorKey: "priority",
      header: "Priority",
    },
  ];

  return (
    <div className="w-[94%] ml-auto mr-auto border-[#474747]">
      <div className="border-[#474747]">
        {data && data.length > 0 ? (
          <DataTableDemo data={data} />
        ) : (
          <div className="w-full mt-5 border-[#474747]">
            <div className="rounded-md border border-[#474747]">
              <Table className="border-[#474747]">
                <TableHeader className="border-[#474747]">
                  <TableRow className="border-[#474747]">
                    {columns.map((column) => (
                      <TableHead key={column.accessorKey} className="border-[#474747]">
                        {column.header}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody className="border-[#474747]">
                  <TableRow className="border-[#474747]">
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center border-[#474747] semibold"
                    >
                      No Bookmarks available. Add some bookmarks to see them here.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}