import React from "react";
import styled from "styled-components";

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

const ButtonSecondary = (props) => {
  return (
    <>
      <ButtonSec className="btn btn-outline-primary ms-4">{props.children}</ButtonSec>
    </>
  );
};

export default ButtonSecondary;
