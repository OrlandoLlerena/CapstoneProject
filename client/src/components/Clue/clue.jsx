// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// function Popup({ clue, onClick }) {
//   return (
//     <>
//       <div className="Overlay" onClick={onClick} />
//       <div className="Popup" onClick={onClick}>
//         {clue}
//       </div>
//     </>
//   );
// }

// function Board({ data }) {
//   const [popupState, setPopupState] = React.useState({ open: false });

//   return (
//     <div className="Board">
//       {data.map((item, i) => (
//         <div className="Board__question" onClick={showClue(item.clue)}>
//           {item.question}
//         </div>
//       ))}
//       {popupState.open === true && (
//         <Popup
//           clue={popupState.clue}
//           onClick={() => setPopupState({ open: false })}
//         />
//       )}
//     </div>
//   );

//   function showClue(clue) {
//     return () => setPopupState({ open: true, clue });
//   }
// }

// const data = [
//   { question: "Hey?", clue: "Ho" },
//   { question: "Let's?", clue: "Go" }
// ];

// function App() {
//   return (
//     <div className="App">
//       <Board data={data} />
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
