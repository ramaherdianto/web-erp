import styled from "styled-components";

const ButtonPrim = styled.a`
  background: #3366ff;
  padding: 10px 20px;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
    background-color: transparent;
    border-color: #3366ff;
  }
`;

const ButtonSec = styled.a`
  background: transparent;
  padding: 10px 20px;
  border: none;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  color: #fff;

  &:hover {
    color: #3366ff;
    background: transparent;
  }
`;

export { ButtonPrim, ButtonSec };
