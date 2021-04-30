import React, { useState, useRef } from "react";
import "./ClueModal.scss";
import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";

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

  return (
    <div className="question-modal">
      <div>
        <Modal
          className="screen"
          {...props}
          dialogClassName="modal-90w"
          // aria-labelledby="example-custom-modal-styling-title"
        >
          {/* <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Clue
            </Modal.Title>
          </Modal.Header> */}

          <Modal.Body className="modal-custom">
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
              <div className="results">
                <div
                  className={
                    props.correct === true ? "results-correct" : "none"
                  }
                >
                  <p>CORRECT</p>
                  <span className="results-answer-sytle">{answer}</span>
                </div>

                <div
                  className={props.correct === false ? "results-wrong" : "none"}
                >
                  <p>INCORRECT</p>
                  <p className="results-answer">
                    The correct answer is:
                    <br />
                    <span className="results-answer-sytle">{answer}</span>
                  </p>
                </div>
              </div>
            </div>
          </Modal.Body>

          <button
            className="custom-submit"
            type="submit"
            onClick={() => props.handleSubmit(userAnswer)}
          >
            Answer
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default ClueModal;
