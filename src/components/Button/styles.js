import styled from "styled-components";

export const StyledButton = styled.button`
  width: 125px;
  height: 40px;

  display: ${(props) => (props.hidden ? "none" : null)};

  background-color: ${(props) =>
    props.color === "primary"
      ? "var(--white)"
      : props.color === "secondary"
      ? "var(--button)"
      : props.color === "black"
      ? "var(--black)"
      : "var(--quaternary)"};
  border: ${(props) =>
    props.color === "primary" ? "2px solid var(--primary)" : null};
  border-radius: 6px;

  color: ${(props) =>
    props.color === "primary" ? "var(--black)" : "var(--white)"};
  font-size: 15px;
  font-weight: medium;
  text-justify: center;

  cursor: pointer;
`;
