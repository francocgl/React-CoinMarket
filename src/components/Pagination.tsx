import React, { useState, ReactElement } from "react";

interface PaginationProps {
  coinsPerPage: any;
  totalCoins: any;
  paginate: (page: number) => void;
}

const Pagination = ({
  coinsPerPage,
  totalCoins,
  paginate,
}: PaginationProps): ReactElement => {
  const pageNumbers: number[] = [];
  const [active, setActive] = useState(0);

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number, index) => (
          <li
            key={number}
            className={active === index ? "page-item active" : "page-item"}
          >
            <span
              onClick={() => {
                paginate(index * coinsPerPage);
                setActive(index);
              }}
              className="page-link"
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
