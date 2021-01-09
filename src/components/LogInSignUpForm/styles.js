import styled from "styled-components";

import { StyledButton } from "../Button/styles";

export const StyledForm = styled.form`
  width: 35em;
  height: 40em;
  padding: 1.5em 3.1em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background-color: var(--white);
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h2,
  h3 {
    font-family: "Comfortaa", sans-serif;
  }

  h2 {
    padding-bottom: 1em;

    font-weight: bold;
    font-size: 2em;
    line-height: 40px;
  }

  h3 {
    padding: 0 1em;

    font-size: 1em;
    color: var(--grey);
  }

  div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FormButton = styled(StyledButton)`
  width: 100%;

  background-color: ${(props) => props.color};
  border: ${(props) =>
    props.color === "black" ? null : "2px solid var(--black)"};

  color: ${(props) =>
    props.color === "black" ? "var(--white)" : "var(--black)"};
`;

export const Divider = styled.div`
  width: 1px;
  height: 0.1em;

  background-color: var(--grey);
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 2em;

  margin-bottom: -1.5em;

  background-color: rgba(255, 184, 184, 0.4);
  border-radius: 15px;

  &:hover,
  :focus {
    background-color: rgba(255, 184, 184, 0.2);
  }
`;

