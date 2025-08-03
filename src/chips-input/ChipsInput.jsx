// import React, { useState } from "react";
// import "../styles.css";

// function ChipComponent({ id, text, onRemove }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         backgroundColor: "gray",
//         margin: "16px",
//         borderRadius: "20px",
//         width: "100%",
//         textAlign: "center",
//         alignItems: "center",
//         justifyContent: "flex-end",
//       }}
//     >
//       {text}
//       <button
//         style={{
//           margin: "16px",
//           cursor: "pointer",
//         }}
//         onClick={() => onRemove(id)}
//       >
//         x
//       </button>
//     </div>
//   );
// }

// function ChipsInput() {
//   const [text, setText] = useState("");
//   const [chipsData, setChipsData] = useState([]);

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && text.trim() !== "") {
//       const newChip = { id: Date.now(), text: text.trim() };
//       setChipsData((prev) => [...prev, newChip]);
//       setText("");
//     }
//   };

//   const handleDelete = (id) => {
//     setChipsData((prev) => prev.filter((chip) => chip.id !== id));
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         margin: "40px 0",
//       }}
//     >
//       <h2>Chips Input</h2>
//       <input
//         type="text"
//         value={text}
//         placeholder="Type a chip and press tag"
//         style={{ padding: "8px", width: "200px" }}
//         onChange={(e) => setText(e.target.value)}
//         onKeyDown={handleKeyDown}
//       />
//       <div>
//         {chipsData &&
//           chipsData.map((chip) => {
//             return (
//               <ChipComponent
//                 key={chip.id}
//                 id={chip.id}
//                 text={chip.text}
//                 onRemove={handleDelete}
//               />
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// export default ChipsInput;

import React, { useState } from "react";

function ChipsInput() {
  const [list, setList] = useState([]);
  const [newChip, setnewChip] = useState("");

  const handleClick = (index) => {
    setList(list.filter((x) => list.indexOf(x) !== index));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setList([...list, newChip]);
          setnewChip("");
        }}
      >
        <input
          type="text"
          value={newChip}
          placeholder="Type a chip and press tag"
          style={{ padding: "8px", width: "200px" }}
          onChange={(e) => setnewChip(e.target.value)}
        />
      </form>
      <div style={{ display: "flex" }}>
        {list.map((chip, index) => {
          return (
            <div className="chip" key={index}>
              {chip}
              <button className="crossbtn" onClick={() => handleClick(index)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChipsInput;
