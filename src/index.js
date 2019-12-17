import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Hello from "./Hello";
import "tachyons";

const rootElement = document.getElementById("root");
ReactDOM.render(<Hello greeting="React Ninja" />, rootElement);
