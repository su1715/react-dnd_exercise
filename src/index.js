import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Board from "./Board";
import { observe } from "./Game";

const root = ReactDOM.createRoot(document.getElementById("root"));
observe(knightPosition =>
  root.render(<Board knightPosition={knightPosition} />)
);
