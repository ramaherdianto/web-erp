import React from "react";
import { ButtonSec } from "./styles/Button.styled";

const ButtonSecondary = (props) => {
  return (
    <>
      <ButtonSec className="btn btn-outline-primary ms-4">{props.children}</ButtonSec>
    </>
  );
};

export default ButtonSecondary;
