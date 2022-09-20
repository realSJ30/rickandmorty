import React from "react";
import { IPage } from "../../interface/utils.interface";
import PaginationEllipsis from "./PaginationEllipsis";
import PaginationItem from "./PaginationItem";

function Pagination(props: IPage) {
  const { currentPage, pageSize, setPage } = props;

  const renderPages = () => {
    const pages = [];
    const totalPages = pageSize ? pageSize : 1;
    if (totalPages > 10) {
      const midpoint = pageSize ? pageSize / 2 : 1; //default 1
      pages.push(
        <PaginationItem
          currentPage={currentPage}
          key={1}
          setPage={setPage}
          page={1}
        />
      );
      pages.push(<PaginationEllipsis key={0} />);
      for (let i = midpoint; i <= midpoint + 3; i++) {
        pages.push(
          <PaginationItem
            page={i}
            currentPage={currentPage}
            key={i}
            setPage={setPage}
          />
        );
      }
      pages.push(<PaginationEllipsis key={2} />);
      pages.push(
        <PaginationItem
          page={pageSize}
          currentPage={currentPage}
          key={pageSize}
          setPage={setPage}
        />
      );
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationItem
            page={i}
            currentPage={currentPage}
            key={i}
            setPage={setPage}
          />
        );
      }
    }
    return pages;
  };

  const handleNextPage = (): void => {
    const totalPage = pageSize ? pageSize : 1;
    if (currentPage < totalPage) setPage(currentPage + 1);
  };

  const handlePrevPage = (): void => {
    if (currentPage > 1) setPage(currentPage - 1);
  };

  if (!pageSize) {
    return <></>;
  }

  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <button onClick={handlePrevPage} className="pagination-previous">
        Previous
      </button>
      <button onClick={handleNextPage} className="pagination-next">
        Next page
      </button>
      <ul className="pagination-list">{renderPages()}</ul>
    </nav>
  );
}

export default Pagination;
