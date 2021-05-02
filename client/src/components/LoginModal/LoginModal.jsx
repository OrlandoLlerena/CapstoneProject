import React from "react";
import Modal from "react-bootstrap/Modal";
import "./LoginModal.scss";

const LoginModal = (props) => {
  return (
    <section className="signup-modal">
      <div>
        <Modal
          {...props}
          backdrop="static"
          dialogClassName="modal-90w"
          centered
        >
          <Modal.Header className="custom" closeButton>
            <Modal.Title id="custom-modal">Member Login screen</Modal.Title>
          </Modal.Header>

          <Modal.Body className="custom">
            <div>
              <p>Welcome back member please login below:</p>
              <form>
                <h4>Email</h4>
                <input type="text" placeholder="Enter Email" />
                <h4>Password</h4>
                <input type="text" placeholder="Enter Password" />
              </form>
            </div>
            <div className="btn-container">
              <div className="btn-box">
                <button className="close-btn">Close</button>
                <button className="submit-btn">Submit</button>
              </div>
            </div>
            <p>
              If you are not a member please <a>Sign Up Now!</a>
            </p>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
};

export default LoginModal;
