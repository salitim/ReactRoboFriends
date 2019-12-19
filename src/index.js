import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CardList from "./CardList";
import "tachyons";
import { robots } from "./robot";
import registerServiceWorker from "./registerServiceWorker";

const rootElement = document.getElementById("root");
ReactDOM.render(<CardList robots={robots} />, rootElement);

registerServiceWorker();
