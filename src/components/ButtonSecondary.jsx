import React from "react";

const ButtonSecondary = (props) => {
  return (
    <>
      <a className="btn btn-outline-primary ms-4">{props.children}</a>
    </>
  );
};

export default ButtonSecondary;
