import React, { useState, useRef } from "react";
import "./ClueModal.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ClueModal = (props) => {
  const [userAnswer, setUserAnswer] = useState("");
  const inputRef = useRef(null);
  // this area is reserved for hooks if needed:
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // this area is too be used for functions if needed

  // this is the area reserved for useEffectsif needed
  let question = props.current?.question.toUpperCase();
  let answer = props.current?.answer.toUpperCase();

  const validation = () => {
    props.handleAnswer();
    // props.close();
  };

  return (
    <div className="question-modal">
      <div>
        <Modal
          {...props}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Clue
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1 className="clue-info">{question}</h1>
            <form onSubmit={props.handleSubmit} ref={inputRef}>
              <input
                className="player-answer"
                type="text"
                name="inputAnswer"
                onChange={(e) => setUserAnswer(e.target.value)}
              />
            </form>
            <div className="modal-inner">
              <h2 className="clue-info">
                {/* the clue will be poplulated in this area */}
              </h2>

              <div className="results">
                <p className="results-correct">CORRECT</p>
                <p className="results-wrong">INCORRECT</p>
                <p className="results-answer">
                  The correct answer is:
                  <br />
                  <span className="results-answer-sytle">{answer}</span>
                </p>
              </div>
            </div>
          </Modal.Body>
          {/* <Button variant="secondary" onClick={props.close}>
        Close
      </Button> */}
          <Button
            variant="primary"
            type="submit"
            onClick={() => props.handleSubmit(userAnswer)}
          >
            Answer
          </Button>
        </Modal>
      </div>
    </div>
  );
};

export default ClueModal;

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
