import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";

// import Title from "../../assets/Images/jeopardy-logo-wtvd-img.jpg";

function Home() {
  return (
    <section className="home-background">
      {/* <img className="title" src={Title} alt="title" /> */}
      <div className="buttons-container">
        <Link to="/game">
          <button className="guest">PLAY AS GUEST</button>
        </Link>

        <button className="signup">SIGN UP</button>

        <button className="login">LOGIN</button>
      </div>
    </section>
  );
}

export default Home;
