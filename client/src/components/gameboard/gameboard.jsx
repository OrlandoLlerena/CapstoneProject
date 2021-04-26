import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./gameboard.scss";
import axios from "axios";

const Gameboard = () => {
  // gonna add the hookin in this section here

  const [player, setPlayer] = useState([]);
  const [score, setScore] = useState([]);
  const [category, setCategory] = useState([]);
  const [clue, setClue] = useState([]);

  // TODO: get the category to populate using static template first. read the information on bootstrap modal

  // let capital = category.map((title) => title.toUpperCase());
  // console.log(capital);

  // Use effects and useState will go here
  useEffect(() => {
    axios
      .get("http://jservice.io/api/categories?count=5&offset=100")
      // .get("http://jservice.io/api/category?id={id}")
      .then((resp) => {
        setCategory(resp.data);
        console.log(resp.data);
        // setClue(resp.data.clue);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            {category.map((cat, i) => {
              return (
                <h5 key={i} className="category">
                  {cat.title}
                </h5>
              );
            })}
            {/* <h5 className="category">Title</h5>
            <h5 className="category">Title</h5>
            <h5 className="category">Title</h5>
            <h5 className="category">Title</h5>
            <h5 className="category">Title</h5> */}
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
