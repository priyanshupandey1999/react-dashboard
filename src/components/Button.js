import React from "react";

function Button(props) {
  return (
    <>
      <button
        style={{
          backgroundColor: "#38cda6",
          borderRadius: "30px",
          padding: "3px 5px",
          color: "white",
          border: "none",
          verticalAlign: "super",
          marginLeft: "5px",
        }}
      >
        {props.text}
      </button>
    </>
  );
}

export default Button;
