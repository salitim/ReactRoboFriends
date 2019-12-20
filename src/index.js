import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import registerServiceWorker from "./registerServiceWorker";
import App from "./containers/App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

registerServiceWorker();
