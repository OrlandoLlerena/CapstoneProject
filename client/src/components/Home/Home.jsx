import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";

// import Title from "../../assets/Images/jeopardy-logo-wtvd-img.jpg";

function Home() {
  return (
    <section className="tbd">
      {/* <img className="title" src={Title} alt="title" /> */}
      <Link to="/game">
        <button className="guest">Play as guest</button>
      </Link>
      <button className="login">Login</button>
    </section>
  );
}

export default Home;
