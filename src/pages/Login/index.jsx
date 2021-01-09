import React, { useState } from "react";

import LogInSignUpForm from "../../components/LogInSignUpForm";
import PasswordModal from "../../components/PasswordModal";

import { Container } from "./styles";

const SignInPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Container>
      <LogInSignUpForm setModalIsOpen={setModalIsOpen} />
      <PasswordModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </Container>
  );
};

export default SignInPage;
