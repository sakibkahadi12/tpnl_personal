"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useEffect } from "react";

/* steps of pagination 

here table is a data object contain information about pagination data

1. props table data and setPageSize(value) in a useEffect

2. cuurrentPage = table.getState().pagination.pageIndex + 1;

3. const tablePages = table.getPageCount()

4. how to get page numbers. create a function =>{
  pages = [] 
  showPages = 3 here showing only 3 page at a time
  let start = Math.max(1, currentPage-1)
  let end = Math.min(totalPages, start+ showpages - 1)
  // adjust start if there are fewer than 3 pages before the current page
  if(end - start < showPages - 1){
  start = Math.max(1, end - showPages + 1);
  }
  for(let i = start; i<=end; i++){
  pages.push(i)};
  return pages;
  }
  // showing page number in client side 
  {
  getPageNumbers().map.((pageNumber)=>(
    <Button key={pageNumber} 
    className ={'${currentPage === pageNumber ? bg : bg'}
    onClick = {()=>table.setPageIndeex(pageNumber - 1)} > {pageNumber} </Button>
    ))}
*/

export function DataTablePagination({ table }) {
  useEffect(() => {
    table.setPageSize(5);
  }, [table]);

  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();
  const getPageNumber = () => {
    const pages = [];
    const showPages = 4;
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, start + showPages - 1);
    if (end - start < showPages - 1) {
      start = Math.max(1, end - showPages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2 lg:space-x-8">
        {/* <div className="flex items-center space-x-2">
          <p className="text-[12px] font-medium text-[#404B52]">
            Rows per page
          </p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
            className="border-none"
          >
            <SelectTrigger className="h-8 w-[70px] px-2.5">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent className={"bg-[#9EC0D7]"}>
              {[5, 25, 50, 100].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div> */}

        {/* <div className="text-[12px] font-medium text-[#404B52]">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div> */}

        <div className="flex items-center space-x-2">
          {/* <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft className="h-4 w-4" />
          </Button> */}
          {/* left button */}
          <Button
            variant="outline"
            className="h-8 w-8 border-none bg-[#F5F5F5] p-0 text-[#404B52]"
            onClick={() => table.previousPage()}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {getPageNumber().map((pageNum) => (
            <Button
              key={pageNum}
              className={`h-8 w-8 p-0 ${
                currentPage === pageNum
                  ? "bg-[#2D77A8] text-white"
                  : "bg-[#F5F5F5]"
              }`}
              onClick={() => table.setPageIndex(pageNum - 1)}
            >
              {pageNum}
            </Button>
          ))}

          {/* right button */}
          <Button
            variant="outline"
            className="h-8 w-8 border-none bg-[#F5F5F5] p-0 text-[#404B52]"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          {/* <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight className="h-4 w-4" />
          </Button> */}
        </div>
      </div>
    </div>
  );
}
