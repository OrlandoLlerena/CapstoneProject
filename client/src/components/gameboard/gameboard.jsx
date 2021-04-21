import React, { useState, useEffect } from "react";

import "./gameboard.scss";

const gameboard = () => {
  // gonna add the hookin in this section here

  // const [category, setCategory] = useState([]);
  // const [clue, setClue] = useState([]);

  // Use effects and useState will go here
  // useEffect(() => {
  //   axios
  //     .get(`add an api request here`)
  //     .then((resp) => {
  //       setCategory(resp.data.category);
  //       setClue(resp.data.clue);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

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
        <div className="category-box">
          <div className="boardbox">
            <h5 className="category">CATEGORY 1</h5>
            <h5 className="category">CATEGORY 2</h5>
            <h5 className="category">CATEGORY 3</h5>
            <h5 className="category">CATEGORY 4</h5>
            <h5 className="category">CATEGORY 5</h5>
          </div>
          <div className="boardbox">
            <h5 className="money">$100</h5>
            <h5 className="money">$100</h5>
            <h5 className="money">$100</h5>
            <h5 className="money">$100</h5>
            <h5 className="money">$100</h5>
          </div>
          <div className="boardbox">
            <h5 className="money">$200</h5>
            <h5 className="money">$200</h5>
            <h5 className="money">$200</h5>
            <h5 className="money">$200</h5>
            <h5 className="money">$200</h5>
          </div>
          <div className="boardbox">
            <h5 className="money">$300</h5>
            <h5 className="money">$300</h5>
            <h5 className="money">$300</h5>
            <h5 className="money">$300</h5>
            <h5 className="money">$300</h5>
          </div>
          <div className="boardbox">
            <h5 className="money">$400</h5>
            <h5 className="money">$400</h5>
            <h5 className="money">$400</h5>
            <h5 className="money">$400</h5>
            <h5 className="money">$400</h5>
          </div>
          <div className="boardbox">
            <h5 className="money">$500</h5>
            <h5 className="money">$500</h5>
            <h5 className="money">$500</h5>
            <h5 className="money">$500</h5>
            <h5 className="money">$500</h5>
          </div>
        </div>
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
