import React, { useState } from "react";

function Carousel() {
  const cards = [
    { title: "Card 1", description: "Description for Card 1" },
    { title: "Card 2", description: "Description for Card 2" },
    { title: "Card 3", description: "Description for Card 3" },
  ];
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    cardTitle: {
      fontSize: "2rem",
      fontWeight: "800",
      padding: "16px",
    },
    cardDescription: {
      fontSize: "1.5rem",
    },
    pagination: {
      display: "flex",
      flexDirection: "row",
      padding: "16px",
    },
    pageIndicator: {
      padding: "0 16px",
    },
  };

  const [currentPage, setCurrentPage] = useState(1);
  const currentCard = cards[currentPage - 1];

  const handleIncrease = () => {
    if (currentPage < cards.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleDecrease = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (!cards.length) return "No cards available";

  return (
    <div style={styles.mainContainer}>
      <div style={styles.cardContainer}>
        <div style={styles.cardTitle}>{currentCard.title}</div>
        <div style={styles.cardDescription}>{currentCard.description}</div>
      </div>
      <div style={styles.pagination}>
        <button disabled={currentPage <= 1} onClick={handleDecrease}>
          Previous
        </button>
        <div style={styles.pageIndicator}>{currentPage} of 3</div>
        <button disabled={currentPage >= cards.length} onClick={handleIncrease}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
