import React, { Component } from "react";

import "./gameboard.scss";

const gameboard = () => {
  // gonna add the hookin in this section here

  return (
    <section className="boardcontainer">
      {/* got to decide if there will be a header with this info or will it appear as a podium somewhere below the board */}
      <div>
        <h1>Player Name</h1>
        <p className="score">
          Score <span className="score-counter"></span>
        </p>
      </div>
      <section className="board">
        {/* categories will go here, static to start them use api to randomize them */}
      </section>

      {/* container for the card prompt, these should come up upon selection, will try to animate */}
      <div className="question-modal">
        <div className="modal-inner">
          <h2 className="clue-info">
            {/* the clue will be poplulated in this area */}
          </h2>
          <form>
            {/* this is where some of the difficulty would be presented, multiple choice for easier mode, filled in for medium and hard mode */}
            {/* easy mode will need its own data for multiple choice or will need to pull in random answers from api*/}
            <input className="player-answer" type="text" />
            <button className="button" type="submit">
              ANSWER
            </button>
          </form>
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
    </section>
  );
};

export default gameboard;
