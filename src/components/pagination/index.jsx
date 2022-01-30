import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li
              // className="page-item"
              key={number}
              onClick={() => paginate(number)}
              className={number === currentPage ? "current" : "page-item"}
            >
              {number}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
