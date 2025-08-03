import { useState } from "react";
import "./styles.css";

const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

const Checkboxes = ({ data }) => {
  return <div></div>;
};

export default function NestedCheckbox() {
  return (
    <div>
      <h2>Nested Checkbox</h2>
      <Checkboxes data={CheckboxesData} />
    </div>
  );
}
