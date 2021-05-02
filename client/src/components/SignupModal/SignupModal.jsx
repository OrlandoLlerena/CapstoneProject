import React from "react";
import Modal from "react-bootstrap/Modal";
import "./SignupModal.scss";

const SignupModal = (props) => {
  return (
    <section className="signup-modal">
      <div>
        <Modal
          {...props}
          backdrop="static"
          dialogClassName="modal-90w"
          className="custom-modal"
          centered
        >
          <Modal.Header className="custom" closeButton>
            <Modal.Title id="modal-title">SIGN UP</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom">
            <div>
              <form>
                <p>
                  Welcome new Jeopardy Player. Please fill out the information
                  below in order to proceed.
                </p>
                <h4>First Name</h4>
                <input
                  className="custom-field"
                  type="text"
                  placeholder="First Name"
                />
                <h4>Last Name</h4>
                <input
                  className="custom-field"
                  type="text"
                  placeholder="Last Name"
                />
                <h4>Email</h4>
                <input
                  className="custom-field"
                  type="text"
                  placeholder="Email"
                />
                <h4>Password</h4>
                <input
                  className="custom-field"
                  type="text"
                  placeholder="Password"
                />
                <h4>Confirm Password</h4>
                <input
                  className="custom-field"
                  type="text"
                  placeholder="Confirm Password"
                />
              </form>

              <div className="btn-container">
                <div className="btn-box">
                  <button className="close-btn">Close</button>
                  <button className="submit-btn">Submit</button>
                </div>
              </div>
            </div>
            <p> IF YOU'RE ALREADY A MEMBER PLEASE LOGIN IN HERE.</p>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
};

export default SignupModal;
