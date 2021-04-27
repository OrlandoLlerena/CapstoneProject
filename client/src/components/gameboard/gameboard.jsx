import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./gameboard.scss";
import axios from "axios";

const Gameboard = () => {
  // gonna add the hooks in this section here
  const [player, setPlayer] = useState(null);
  const [score, setScore] = useState(null);
  const [category, setCategory] = useState(null);
  const [clue, setClue] = useState(null);

  // populates the category
  const catAndQuestions = async () => {
    const { data } = await axios.get(
      "http://jservice.io/api/categories?count=5&offset=100"
    );
    setCategory(data);
    const categoryIds = data.map((category) => category.id);
    categoryIds.map((id) => {
      // console.log(id);
      return id;
      // getClues(id);
    });
    // return categoryIds;
    getClues(categoryIds);
  };

  async function getClues(ids) {
    // const ids = await catAndQuestions();
    // console.log(ids);
    let clueArray = [];
    try {
      // let clueArray = [];
      ids.map(async (id) => {
        const { data } = await axios.get(
          `http://jservice.io/api/category?id=${id}`
        );
        // console.log(data.clues);
        clueArray.push(data.clues);
        // setClue(clueArray);
        console.log(clueArray);
        // console.log(clue[0][0].question);
      });
    } catch (error) {
      console.log(error);
    }
    setClue(clueArray);
  }

  // console.log(clue[0]?.[0]);

  // Use effects and useState will go here
  useEffect(() => {
    catAndQuestions();
    // getClues();
  }, []);

  console.log(clue);

  return (
    <section className="boardcontainer">
      {/* got to decide if there will be a header with this info or will it appear as a podium somewhere below the board */}
      <div>
        <h1>Player Name</h1>
        <p className="score">
          Score <span className="score-counter"></span>
        </p>
        <Link to="/">Main Page</Link>
      </div>

      <section className="board">
        {/* categories will go here, static to start them use api to randomize them */}
        <div className="category-box">
          <div className="boardbox">
            {category?.map((cat, i) => {
              let categoryClues = clue?.filter((singleClue) => {
                // console.log(singleClue.category_id);
                return cat.id === singleClue.category_id;
              });
              console.log(categoryClues);
              return (
                <div>
                  <h5 key={i} className="category">
                    {cat.title}
                  </h5>
                  <h5 key={i} className="money">
                    {clue?.[i]?.[0].question}
                  </h5>
                  <h5 key={i} className="money">
                    {clue?.[i]?.[1].question}
                  </h5>
                </div>
              );
            })}
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
      {/* 
      <section className="board-area">
        <table className="table">
          <th className="table-header">{category}</th>
          <th className="table-header">{category}</th>
          <th className="table-header">{category}</th>
          <th className="table-header">{category}</th>
          <th className="table-header">{category}</th>
          <tr>
            <td className="table-row">$200</td>
            <td className="table-row">$400</td>
            <td className="table-row">$600</td>
            <td className="table-row">$800</td>
            <td className="table-row">$1000</td>
          </tr>
        </table>
      </section> */}

      {/* container for the card prompt, these should come up upon selection, will try to animate */}
    </section>
  );
};

export default Gameboard;
