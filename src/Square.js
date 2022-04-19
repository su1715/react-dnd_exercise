import React from "react";

export default function Square({ black, children }) {
  const fill = black ? "black" : "white";
  const color = black ? "white" : "black";
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: fill,
        color: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {children}
    </div>
  );
}
