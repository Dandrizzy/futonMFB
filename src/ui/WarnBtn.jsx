import styled from "styled-components";

const WarnBtn = styled.button`
 border: none;
  border-radius: 50px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  color: rgb(254 249 195);
    background: rgb(249 115 22);
    border: 1px solid rgb(249 115 22);

    &:hover {
      background-color: rgb(234 88 12);
    }
     font-size: 0.75rem;
    padding: 0.4rem 0.6rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
`;

export default WarnBtn;