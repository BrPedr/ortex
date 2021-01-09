import styled from "styled-components";

export const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 2em;

  margin-bottom: -1.5em;

  font-family: "Comfortaa", sans-serif;

  background-color: rgba(255, 184, 184, 0.4);
  border-radius: 15px;

  &:hover,
  :focus {
    background-color: rgba(255, 184, 184, 0.2);
  }
`;
