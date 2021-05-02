import React, { useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import SignupModal from "../SignupModal/SignupModal";
import LoginModal from "../LoginModal/LoginModal";

// import Title from "../../assets/Images/jeopardy-logo-wtvd-img.jpg";

function Home() {
  const [showSignup, setSignupShow] = useState(false);
  const [showLogin, setLoginShow] = useState(false);

  // Signup modal functions
  const handleSinupModalOpen = () => {
    setSignupShow(true);
  };
  const handleSignupModalClose = () => {
    setSignupShow(false);
  };
  const handleSignupChange = () => {
    setSignupShow(false);
    setLoginShow(true);
  };

  // Login modal functions
  const handleLoginModalOpen = () => {
    setLoginShow(true);
  };
  const handleLoginModalClose = () => {
    setLoginShow(false);
  };
  const handleLoginModalChange = () => {
    setLoginShow(false);
    setSignupShow(true);
  };

  return (
    <section className="home-background">
      <div className="buttons-container">
        <Link to="/game">
          <button className="guest">PLAY AS GUEST</button>
        </Link>
        <button
          className="signup"
          onClick={() => {
            handleSinupModalOpen();
          }}
        >
          SIGN UP
        </button>

        <button
          className="login"
          onClick={() => {
            handleLoginModalOpen();
          }}
        >
          LOGIN
        </button>
      </div>
      <SignupModal
        onHide={handleSignupModalClose}
        show={showSignup}
        close={handleSignupModalClose}
        signupChange={handleSignupChange}
      />

      <LoginModal
        onHide={handleLoginModalClose}
        show={showLogin}
        close={handleLoginModalClose}
        loginChange={handleLoginModalChange}
      />
    </section>
  );
}

export default Home;
