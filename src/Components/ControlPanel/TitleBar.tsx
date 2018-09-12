import React from "react";

const TitleBar = (props: any) => {
  return (
    <div
      style={{
        background: "teal",
        height: "4em",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ color: "#FFFFFF", fontSize: "1em" }}>{props.title}</div>
    </div>
  );
};

export default TitleBar;
