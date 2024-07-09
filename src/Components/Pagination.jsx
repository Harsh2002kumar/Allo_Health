import React from "react";

const Pagination = ({ foodPerPage, totalPages, paginate }) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(totalPages / foodPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-container">
      <ul className="pagination-list">
        {pageNumbers.map((num) => {
          return (
            <li key={num} onClick={() => paginate(num)} className="page-number">
              {num + 1}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
