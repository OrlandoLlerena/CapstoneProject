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
          aria-labelledby="example-custom-modal-styling-title"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Member Login screen
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
              <p>Welcome back member please login below:</p>
              <form>
                <h4>Email</h4>
                <input type="text" placeholder="Enter Email" />
                <h4>Password</h4>
                <input type="text" placeholder="Enter Password" />
              </form>
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
