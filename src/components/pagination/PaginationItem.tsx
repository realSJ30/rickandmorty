import React from "react";
import { IPage } from "../../interface/utils.interface";

function PaginationItem(props: IPage) {
  const { page, currentPage, setPage } = props;

  return (
    <li>
      <button
        key={page}
        onClick={() => setPage(page)}
        className={`pagination-link ${
          page === currentPage ? "is-current" : ""
        }`}
        aria-label="Goto page 1"
      >
        {page}
      </button>
    </li>
  );
}

export default PaginationItem;
