import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CardList from "./CardList";
import "tachyons";
import { robots } from "./robot";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

registerServiceWorker();
