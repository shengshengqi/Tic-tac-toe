import React from "react";

export default props => {
  return (
    <button
      className="square"
      onClick={props.onClick}
      style={{color: props.strcolor}}
    >
      {props.value}
    </button>
  );
}
