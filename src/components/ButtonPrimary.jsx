import React from "react";
import { ButtonPrim } from "./styles/Button.styled";

const ButtonPrimary = (props) => {
  return (
    <>
      <ButtonPrim className="btn btn-primary">{props.children}</ButtonPrim>
    </>
  );
};

export default ButtonPrimary;
