import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./gameboard.scss";
import axios from "axios";
import { shuffle } from "../../helper/helper";

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
    // setCategory(data);
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
    let categoryArray = [];
    let clueObj = {};
    try {
      const temp = ids.map(async (id) => {
        // const { data } = await axios.get(
        //   `http://jservice.io/api/category?id=${id}`
        // );
        // clueArray.push(data.clues);
        return new Promise((resolve, reject) => {
          axios.get(`http://jservice.io/api/category?id=${id}`).then((data) => {
            resolve(data);
          });
        });
        // console.log(data.clues);
      });
      Promise.all(temp).then((result) => {
        result.forEach((result, categoryIndex) => {
          let newCategory = {
            title: result.data.title,
            clue: [],
          };

          let newClue = shuffle(result.data.clues)
            .splice(0, 5)
            .forEach((hint, index) => {
              let modalId = categoryIndex + "-" + index;
              newCategory.clue.push(modalId);

              clueObj[modalId] = {
                question: hint.question,
                answer: hint.answer,
                value: (index + 1) * 100,
              };
            });
          categoryArray.push(newCategory);
          // console.log(categoryArray);
          // console.log(clueObj);
        });
        setCategory(categoryArray);
        setClue(clueObj);
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Use effects and useState will go here
  useEffect(() => {
    catAndQuestions();
    // getClues();
  }, []);

  return (
    <section className="boardcontainer">
      <div>
        <Link to="/" className="exit">
          HOME
        </Link>
      </div>
      <div className="header-container">
        <h1 className="player">Player Name</h1>
        <p className="score">
          Score <span className="score-counter">00000</span>
        </p>
      </div>

      <section className="board">
        <div className="category-box">
          <div className="boardbox">
            {category?.map((cat, i) => {
              let uppercaseCategory = cat.title.toUpperCase();
              console.log(cat.clue);
              return (
                <div>
                  <div>
                    <h5 key={i} className="category">
                      {uppercaseCategory}
                    </h5>
                  </div>
                  {cat.clue.map((id) => {
                    let question = clue?.[id];
                    return (
                      <div className="boardbox">
                        <h5 className="money">${question?.value}</h5>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* <div className="boardbox">
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
          </div> */}
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
    </section>
  );
};

export default Gameboard;
