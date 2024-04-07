import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
  width: 2rem;
  height: 2rem;
  color:   rgb(159 18 57);
  margin: 0 auto;
  animation: ${rotate} 1.5s infinite linear;
`;

export default SpinnerMini;
