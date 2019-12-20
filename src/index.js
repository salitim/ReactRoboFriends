import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

registerServiceWorker();
