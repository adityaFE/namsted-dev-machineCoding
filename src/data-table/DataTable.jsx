import React, { useState, useMemo } from "react";
import "./styles.css";

function DataTable() {
  const sampleData = useMemo(
    () => [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie", age: 22 },
      { id: 4, name: "David", age: 28 },
      { id: 5, name: "Eve", age: 27 },
      { id: 6, name: "Frank", age: 33 },
      { id: 7, name: "Grace", age: 24 },
      { id: 8, name: "Hank", age: 26 },
      { id: 9, name: "Ivy", age: 21 },
      { id: 10, name: "Jack", age: 29 },
      { id: 11, name: "Charlie", age: 22 },
      { id: 12, name: "David", age: 28 },
      { id: 13, name: "Eve", age: 27 },
      { id: 14, name: "Frank", age: 33 },
      { id: 15, name: "Grace", age: 24 },
      { id: 16, name: "Hank", age: 26 },
      { id: 17, name: "Ivy", age: 21 },
      { id: 18, name: "Jack", age: 29 },
      { id: 19, name: "Ivy", age: 21 },
      { id: 20, name: "Jack", age: 29 },
    ],
    []
  );

  // let dataToShow = [...sampleData];

  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil(sampleData.length / itemsPerPage);
  console.log(totalPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sampleData.slice(start, start + itemsPerPage);
  }, [sampleData, currentPage, itemsPerPage]);

  const handlePageChange = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    sampleData.slice(0, value);
    setCurrentPage(1);
  };

  const handleIncreasePage = () => {
    setCurrentPage(currentPage + 1);
    sampleData.slice(itemsPerPage, itemsPerPage + itemsPerPage);
  };

  const handleDecreasePage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <table>
        <caption>Data Table</caption>
        <thead className="table-head">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="navigation-features">
        <div>
          <button disabled={currentPage == 1} onClick={handleDecreasePage}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPage}
          </span>
          <button
            disabled={currentPage == totalPage}
            onClick={handleIncreasePage}
          >
            Next
          </button>
        </div>
        <div>
          <label>Rows per page:</label>
          <select value={itemsPerPage} onChange={handlePageChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
