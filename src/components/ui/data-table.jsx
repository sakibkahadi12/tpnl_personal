"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as React from "react";
import { DataTablePagination } from "./data-table-pagination";
import { InputSearch } from "./input-search";
import { Button } from "./button";
import Image from "next/image";

export function DataTable({
  columns,
  data = [],
  allowRowSelect = false,
  customContent = <></>,
  search = true,
  title = "",
}) {
  const [sorting, setSorting] = React.useState([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const handleDownloadFile = () => {
    console.log("hi");
  };
  // Process columns to ensure proper sizing
  const processedColumns = React.useMemo(() => {
    return columns.map((column) => ({
      ...column,
      // Ensure size is defined properly
      meta: {
        ...column.meta,
        width: column.size ? `${column.size}px` : undefined,
      },
    }));
  }, [columns]);

  const table = useReactTable({
    data,
    columns: processedColumns,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: allowRowSelect ? setRowSelection : undefined,
    state: {
      sorting,
      globalFilter,
      columnVisibility,
      rowSelection,
    },
    globalFilterFn: (row, _columnIds, filterValue) => {
      return Object.values(row.original).some((value) =>
        String(value).toLowerCase().includes(filterValue.toLowerCase()),
      );
    },
  });

  const rows = table.getRowModel().rows || [];
  const hasRows = rows.length > 0;

  return (
    <div>
      {/* seacrh upload and optional add new */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-3 md:gap-6">
          {search && (
            <InputSearch
              placeholder={`Search ${title}`}
              value={globalFilter ?? ""}
              onChange={(event) => setGlobalFilter(event.target.value)}
              className="h-11 w-40 rounded-[10px] border border-[#2D77A8] bg-[#F1F1F2] text-[12px] font-normal text-[#868686] md:w-full md:text-[14px]"
            />
          )}
          {customContent}
        </div>{" "}
        {/* demo */}
        <div onClick={handleDownloadFile}>
          <Button
            variant="outline"
            className="flex h-11 cursor-pointer items-center space-x-2 rounded-[6px] border-2 border-[#9EC0D7] bg-transparent px-2.5 hover:border-2 hover:border-[#2D77A8]"
          >
            <span className="hidden text-[16px] font-medium text-[#303132] lg:block">
              Demo file
            </span>
            <Image
              src="/assets/images/icons/demo.svg"
              alt="upload-file"
              width={16}
              height={20}
            />
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table className="text-[14px] leading-[20px] font-medium text-white">
          {hasRows && (
            <TableHeader className="bg-[#9EC0D7]">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  className="border-none hover:bg-transparent"
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((header) => {
                    const width = header.column.columnDef.meta?.width;
                    return (
                      <TableHead
                        className="p-3 text-[14px] leading-[22px] font-[600] text-[#303132]"
                        key={header.id}
                        style={{
                          width: width,
                          minWidth: width,
                          maxWidth: width ? width : "auto",
                        }}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
          )}
          <TableBody className="border-[#9EC0D7] bg-white">
            {hasRows ? (
              rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className=" "
                >
                  {row.getVisibleCells().map((cell) => {
                    const width = cell.column.columnDef.meta?.width;
                    return (
                      <TableCell
                        className="p-3 text-[14px] leading-[22px] font-[400] text-[#303132]"
                        key={cell.id}
                        style={{
                          width: width,
                          minWidth: width,
                          maxWidth: width ? width : "auto",
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="py-5 text-center text-[14px] font-[400] text-[#303132]"
                >
                  No data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* paginate button */}
      <div className="mt-3 flex items-center justify-end">
        {hasRows && allowRowSelect && (
          <div className="flex-1 text-[12px] font-medium text-[#404B52]">
            {table.getFilteredSelectedRowModel().rows?.length || 0} of{" "}
            {table.getFilteredRowModel().rows?.length || 0} row(s) selected.
          </div>
        )}
        {hasRows && <DataTablePagination table={table} />}
      </div>
    </div>
  );
}
