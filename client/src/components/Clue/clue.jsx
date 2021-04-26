import React, { useState } from "react";
import "./clue.scss";
// import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Clue = () => {
  //  this area is reserved for hooks that
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  // this is the area reserved for useEffects

  return (
    <div className="question-modal">
      <div>
        <Button variant="primary" onClick={() => setShow(true)}>
          Custom Width Modal
        </Button>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              "Like expectant women, pregnant cats can experience this A.M.
              ailment"
            </p>
            <form>
              {/* this is where some of the difficulty would be presented, multiple choice for easier mode, filled in for medium and hard mode */}
              {/* easy mode will need its own data for multiple choice or will need to pull in random answers from api*/}
              <input className="player-answer" type="text" />
            </form>
          </Modal.Body>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Answer
          </Button>
        </Modal>
      </div>
      <div className="modal-inner">
        <h2 className="clue-info">
          {/* the clue will be poplulated in this area */}
        </h2>

        <div className="results">
          <p className="results-correct">CORRECT</p>
          <p className="results-wrong">INCORRECT</p>
          <p className="results-answer">
            The correct answer is{" "}
            <span className="results-answer-sytle">
              {/* this is where the actual answer will be shown*/}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clue;

//  SEPARATE THIS INFORMATION
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
