import React, { useState, useEffect } from "react";
import "./styles.css";

const initialEmojis = ["❤️", "🍀", "🌎", "🍎", "⚽️", "🚗", "⛵️", "💎"];

const MatchPairGame = () => {
  const [cards, setCards] = useState([]); // Each card: { id, value, revealed, matched }
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  const shuffled = (initialEmojis) => {
    const double = [...initialEmojis, ...initialEmojis];
    const shuffled = double
      .map((emoji) => ({ emoji, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((item, index) => ({
        id: index,
        value: item.emoji,
        revealed: false,
        matched: false,
      }));
    return shuffled;
  };

  useEffect(() => {
    const shuffledCards = shuffled(initialEmojis);
    setCards(shuffledCards);
  }, []);

  const handleClick = (clickedCard) => {
    if (clickedCard.revealed || clickedCard.matched || secondCard) return;

    const newCards = cards.map((card) =>
      card.id === clickedCard.id ? { ...card, revealed: true } : card
    );
    setCards(newCards);
    console.log(cards);

    if (!firstCard) {
      setFirstCard(clickedCard);
    } else {
      setSecondCard(clickedCard);
      setMoves((prev) => prev + 1);

      if (firstCard.value === clickedCard.value) {
        setCards((prev) =>
          prev.map((card) =>
            card.value === clickedCard.value ? { ...card, matched: true } : card
          )
        );
        setFirstCard(null);
        setSecondCard(null);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === clickedCard.id || card.id === firstCard.id
                ? { ...card, revealed: false }
                : card
            )
          );
          setFirstCard(null);
          setSecondCard(null);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (cards.length && cards.every((card) => card.matched)) {
      setWon(true);
    }
  }, [cards]);

  const resetGame = () => {
    setFirstCard(null);
    setSecondCard(null);
    setMoves(0);
    setWon(false);
    setCards(shuffled(initialEmojis));
  };

  return (
    <div className="game-container">
      <h1>Match Pair Game</h1>
      <div className="grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${
              card.revealed || card.matched ? "revealed" : ""
            }`}
            onClick={() => handleClick(card)}
          >
            {(card.revealed || card.matched) && card.value}
          </div>
        ))}
      </div>
      <p>Moves: {moves}</p>
      {won && <p className="won">🎉 You won!</p>}
      <button onClick={resetGame}>Reset</button>
    </div>
  );
};

export default MatchPairGame;
