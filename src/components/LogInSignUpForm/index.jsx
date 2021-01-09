import React, { useState } from "react";

import { auth, signInWithGoogle } from "../../firebase";

import { FormButton, StyledForm, Divider, StyledInput } from "./styles";

const LogInSignUpForm = ({ setModalIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInWithGoogle = async () => {
    signInWithGoogle().catch((error) => {
      alert(error.message);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(event);
  };

  const handleSignIn = async () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    auth.onAuthStateChanged((user) => {
      if (user) {
        setEmail("");
        setPassword("");
      }
    });
  };

  const handleRegister = async () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          setEmail("");
          setPassword("");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      <StyledForm method="post" onSubmit={(event) => handleSubmit(event)}>
        <h2>Welcome to Ortex</h2>
        <FormButton color="black" onClick={() => handleSignInWithGoogle()}>
          Log in with Google
        </FormButton>
        <div>
          <Divider></Divider>
          <h3>or</h3>
          <Divider></Divider>
        </div>
        <StyledInput
          type="email"
          name="email"
          placeholder="Email"
          label="Email"
          value={email}
          onChange={(event) => handleChange(event)}
          required
        />
        <StyledInput
          type="password"
          name="password"
          placeholder="Password"
          label="Password"
          value={password}
          autocomplete="current-password"
          onChange={(event) => handleChange(event)}
          required
        />
        <div>
          <FormButton
            type="submit"
            color={"var(--white)"}
            onClick={() => handleRegister()}
          >
            Sign Up
          </FormButton>
          <FormButton
            type="submit"
            color={"var(--white)"}
            onClick={() => handleSignIn()}
          >
            Log In
          </FormButton>
        </div>
        <Divider />
        <h3 onClick={() => setModalIsOpen(true)} style={{ cursor: "pointer" }}>
          Forgot your password?
        </h3>
      </StyledForm>
    </>
  );
};

export default LogInSignUpForm;
