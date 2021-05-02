import React from "react";
import Modal from "react-bootstrap/Modal";
import "./SignupModal.scss";
import Button from "react-bootstrap/Button";

const SignupModal = (props) => {
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
              SIGN UP
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
              <form>
                <p>
                  Welcome new Jeopardy Player. Please fill out the information
                  below in order to proceed.
                </p>
                <h4>First Name</h4>
                <input type="text" placeholder="First Name" />
                <h4>Last Name</h4>
                <input type="text" placeholder="Last Name" />
                <h4>Email</h4>
                <input type="text" placeholder="Email" />
                <h4>Password</h4>
                <input type="text" placeholder="Email" />
                <h4>Confirm Password</h4>
                <input type="text" placeholder="Email" />
                <h4>Topic a</h4>
                <input type="text" placeholder="Topic a" />
                <h4>Topic b</h4>
                <input type="text" placeholder="Topic b" />
                <h4>Topic c</h4>
                <input type="text" placeholder="Topic c" />
              </form>
            </div>
            <p> IF YOU'RE ALREADY A MEMBER PLEASE LOGIN IN HERE.</p>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
};

export default SignupModal;
