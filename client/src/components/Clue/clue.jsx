// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// <div className="question-modal">
//         <div className="modal-inner">
//           <h2 className="clue-info">
//             {/* the clue will be poplulated in this area */}
//           </h2>

//           <form>
//             {/* this is where some of the difficulty would be presented, multiple choice for easier mode, filled in for medium and hard mode */}
//             {/* easy mode will need its own data for multiple choice or will need to pull in random answers from api*/}
//             <input className="player-answer" type="text" />
//             <button className="button" type="submit">
//               ANSWER
//             </button>
//           </form>

//           <div className="results">
//             <p className="results-correct">CORRECT</p>
//             <p className="results-wrong">INCORRECT</p>
//             <p className="results-answer">
//               The correct answer is{" "}
//               <span className="results-answer-sytle">
//                 {/* this is where the actual answer will be shown*/}
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>

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
