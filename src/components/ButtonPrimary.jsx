import React from "react";

const ButtonPrimary = (props) => {
  return (
    <>
      <a className="btn btn-primary">{props.children}</a>
    </>
  );
};

export default ButtonPrimary;
