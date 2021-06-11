import React, { useState, useRef } from "react";
import "./ClueModal.scss";
import Modal from "react-bootstrap/Modal";

const ClueModal = (props) => {
  const [userAnswer, setUserAnswer] = useState("");

  let question = props.current?.question.toUpperCase();
  let answer = props.current?.answer.toUpperCase();

  return (
    <div className="question-modal">
      <div>
        <Modal
          className="screen"
          {...props}
          dialogClassName="modal-90w"
          centered
          size="lg"
        >
          <Modal.Body className="modal-custom">
            <h1 className="clue-info">{question}</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              // onSubmit={() => props.handleSubmit(userAnswer)}
              // onSubmit={props.handleSubmit}
            >
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
                  <p className="result-correct">CORRECT</p>
                  <span className="results-answer-sytle">{answer}</span>
                </div>
                <div
                  className={props.correct === false ? "results-wrong" : "none"}
                >
                  <p className="result-wrong">INCORRECT</p>
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
            className={props.correct === null ? "custom-submit" : "none"}
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
