import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./gameboard.scss";
import axios from "axios";
import { shuffle } from "../../helper/helper";
import ClueModal from "../../components/ClueModal/ClueModal";

const Gameboard = () => {
  // setting the state using hooks below
  // const [player, setPlayer] = useState(null);
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState(null);
  const [clue, setClue] = useState(null);
  const [current, setCurrent] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [correct, setCorrect] = useState(null);
  const [used, setUsed] = useState(false);

  // populates the category
  const catAndQuestions = async () => {
    const { data } = await axios.get(
      "http://jservice.io/api/categories?count=5&offset=305"
    );
    const categoryIds = data.map((category) => category.id);
    categoryIds.map((id) => {
      return id;
    });
    getClues(categoryIds);
  };

  // populates the questions
  async function getClues(ids) {
    let categoryArray = [];
    let clueObj = {};
    try {
      const temp = ids.map(async (id) => {
        return new Promise((resolve, reject) => {
          axios.get(`http://jservice.io/api/category?id=${id}`).then((data) => {
            resolve(data);
          });
        });
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
                id: modalId,
                question: hint.question,
                answer: hint.answer,
                value: (index + 1) * 100,
              };
            });
          categoryArray.push(newCategory);
        });
        setCategory(categoryArray);
        setClue(clueObj);
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = (question) => {
    console.log(question);
    setCurrent(question);
    setModalShow(true);
    setCorrect(null);
    setUsed(true);
  };

  const handleSubmit = (userAnswer) => {
    if (userAnswer === current.answer) {
      //handle logic if its true
      setScore(current.value + score);
      setCorrect(true);
    } else {
      //handle logic if its false
      setScore(score - current.value);
      setCorrect(false);
    }
  };

  const handleModalClose = () => {
    setModalShow(false);
  };

  // Use effects and useState will go here
  useEffect(() => {
    catAndQuestions();
  }, []);

  return (
    <section className="boardcontainer">
      <div>
        <Link to="/" className="exit">
          HOME
        </Link>
      </div>
      <div className="header-container">
        <h1 className="player">Guest Player</h1>
        <p className="score">
          Score <span className="score-counter">{score}</span>
        </p>
      </div>

      <section className="board">
        <div className="category-box">
          <div className="boardbox">
            {category?.map((cat, i) => {
              let uppercaseCategory = cat.title.toUpperCase();
              return (
                <div>
                  <div>
                    <h5 key={i} className="category">
                      {uppercaseCategory}
                    </h5>
                  </div>
                  {cat.clue.map((id, i) => {
                    let question = clue?.[id];
                    return (
                      <div className="boardbox">
                        <h5
                          key={i}
                          className="money"
                          // className={used === true ? "used" : "money"}
                          onClick={() => {
                            handleClick(question);
                          }}
                        >
                          ${question?.value}
                        </h5>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ClueModal
        onHide={handleModalClose}
        show={modalShow}
        close={handleModalClose}
        current={current}
        handleSubmit={handleSubmit}
        correct={correct}
      />
    </section>
  );
};

export default Gameboard;
