import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles.css";

function Accordion() {
  const items = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript.",
    },
    {
      title: "React.js Overview",
      content: "Understand components, state, and props in React.",
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js.",
    },
    {
      title: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items.length) {
    return <p>No items available</p>;
  }

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button
            className="accordion-title"
            onClick={() => handleClick(index)}
          >
            {item.title}
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
