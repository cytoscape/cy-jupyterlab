import React from "react";

const TitleBar = (props: any) => {
  return (
    <div
      style={{
        background: "#555555",
        color: "#FFFFFF",
        height: "3em",
          fontSize: "1em",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>{props.title}</div>
    </div>
  );
};

export default TitleBar;
