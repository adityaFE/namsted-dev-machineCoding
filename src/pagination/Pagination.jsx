import { useState, useEffect } from "react";
import "./styles.css";
import ProductCard from "./ProductCard";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const PAGE_SIZE = 10;
const URL = `https://dummyjson.com/products?limit=200`;

const Pagination = () => {
  const [products, setProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isActive, setIsActive] = useState(1);

  const fetchData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!products) return <p>Loading...</p>;

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentItems = products.slice(startIndex, startIndex + PAGE_SIZE);
  const buttons = [];

  const handleFetchPageData = (i) => {
    setCurrentPage(i);
    setIsActive(i);
  };

  for (let i = 1; i < totalPages + 1; i++) {
    buttons.push(
      <button
        key={i}
        className={isActive === i ? "active-button" : ""}
        onClick={() => handleFetchPageData(i)}
      >
        {i}
      </button>
    );
  }

  const handleLeftClick = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
      setIsActive(currentPage - 1);
    }
  };

  const handleRightClick = () => {
    if (currentPage != totalPages) {
      setCurrentPage(currentPage + 1);
      setIsActive(currentPage + 1);
    }
  };

  return (
    <div className="main-container">
      <h1>Pagination</h1>
      <div className="button-container">
        <button
          id="previous"
          onClick={handleLeftClick}
          disabled={currentPage === 1}
        >
          <FiChevronsLeft />
        </button>
        {buttons}
        <button
          id="next"
          onClick={handleRightClick}
          disabled={currentPage === totalPages}
        >
          <FiChevronsRight />
        </button>
      </div>
      <div className="product-container">
        {!currentItems.length ? (
          <h1>No products found</h1>
        ) : (
          currentItems.map((item) => {
            return (
              <ProductCard
                key={item.id}
                image={item.images[0]}
                title={item.title}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
export default Pagination;
