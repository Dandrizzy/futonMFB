import styled from "styled-components";

const SecondaryBtn = styled.button`
 border: none;
  border-radius: 50px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  color: #4b5563;
    background: #fff;
    border: 1px solid #e5e7eb;

    &:hover {
      background-color: #f9fafb;
    }
     font-size: 0.75rem;
    padding: 0.4rem 0.6rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
`;

export default SecondaryBtn;