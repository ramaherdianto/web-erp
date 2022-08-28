import React from "react";
import styled from "styled-components";

const Button = styled.a`
  background: #3366ff;
  padding: 10px 20px;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
    background-color: transparent;
    border-color: #3366ff;
`;

const ButtonPrimary = (props) => {
  return (
    <>
      <Button className="btn btn-primary">{props.children}</Button>
    </>
  );
};

export default ButtonPrimary;
