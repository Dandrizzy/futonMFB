import styled from "styled-components";

const SuccessBtn = styled.button`
 border: none;
  border-radius: 50px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  color: rgb(220 252 231);
    background: rgb(21 128 61);
    border: 1px solid rgb(21 128 61);

    &:hover {
      background-color: rgb(22 101 52);
    }
     font-size: 0.75rem;
    padding: 0.4rem 0.6rem;
    text-transform: uppercase;
    /* font-weight: 600; */
    text-align: center;
`;

export default SuccessBtn;