import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";

import { auth } from "../../firebase";

import Button from "../Button";

import { makeStyles } from "@material-ui/core/styles";
import { StyledInput } from "./styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 300,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 5, 2),
    backgroundColor: "var(--white)",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    color: "black",
    fontFamily: '"Comfortaa", sans-serif',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const PasswordModal = ({ modalIsOpen, setModalIsOpen }) => {
  const [email, setEmail] = useState("");
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        alert("Email was sent");

        setModalIsOpen(false);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  const handleClose = () => {
    setModalIsOpen(false);
  };

  const body = (
    <form
      style={modalStyle}
      className={classes.paper}
      onSubmit={(event) => handleSubmit(event)}
    >
      <h3 style={{ paddingBottom: "30px" }} id="recoverModal">
        Recover your password
      </h3>
      <h4 style={{ paddingBottom: "30px" }}>
        Enter your email address to get reset instructions sent to you.
      </h4>
      <StyledInput
        type="email"
        name="email"
        placeholder="Email"
        label="Email"
        required
        onChange={(event) => setEmail(event.target.value)}
        style={{ marginBottom: "1em" }}
      />
      <Button type="submit">Recover</Button>
    </form>
  );

  return (
      <Modal
        open={modalIsOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
  );
};

export default PasswordModal;
