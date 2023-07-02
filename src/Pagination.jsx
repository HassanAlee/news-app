import React, { useState, useEffect } from "react";

const Pagination = ({ currentPage, setCurrentPage, length }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(length / 25); i++) {
    pages.push(i);
  }
  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== pages.length) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changePage(page) {
    setCurrentPage(page);
  }
  return (
    <>
      <div className="flex items-center justify-center mb-8">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ${
            currentPage == 1
              ? "bg-gray-500 cursor-not-allowed hover:bg-gray-500"
              : "bg-blue-500 hover:bg-blue-700"
          } `}
          onClick={() => prevPage()}
        >
          Previous
        </button>

        <div className="flex">
          {pages.map((page, index) => {
            return (
              <>
                <button
                  onClick={() => changePage(page)}
                  key={index}
                  className={` text-white font-bold py-2 px-4 rounded mr-2 hidden md:block ${
                    currentPage !== page
                      ? "bg-blue-500 hover:bg-blue-700"
                      : "bg-yellow-500 hover:bg-yellow-700"
                  } `}
                >
                  {page}
                </button>
              </>
            );
          })}
        </div>
        <button
          className={` text-white font-bold py-2 px-4 rounded ${
            currentPage == pages.length
              ? "bg-gray-500 cursor-not-allowed hover:bg-gray-500"
              : "bg-blue-500 hover:bg-blue-700"
          } `}
          onClick={() => nextPage()}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
