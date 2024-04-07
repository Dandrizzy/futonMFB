import styled from "styled-components";

const Input = styled.input`
  border: 2px solid rgb(127 29 29);
  background-color: transparent;
  border-radius: 50px;
  padding: 0.5rem 1.2rem;
  margin: 2rem 0;
  box-shadow: 2px;
  outline: none;
  font-weight: 600;
  color: rgb(115 115 115);
  width: 80%;
  &::placeholder {
    color: rgb(115 115 115);
      font-weight: normal;

  }
`;

export default Input;
