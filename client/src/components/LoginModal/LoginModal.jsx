import React from "react";
import Modal from "react-bootstrap/Modal";
import "./LoginModal.scss";
import Button from "react-bootstrap/Button";

const LoginModal = (props) => {
  return (
    <section className="signup-modal">
      <div>
        <Button variant="primary" onClick={() => setShow(true)}>
          Custom Width Modal
        </Button>

        <Modal
          {...props}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>this shit is for real</p>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
};

export default LoginModal;
