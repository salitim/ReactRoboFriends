import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "tachyons";
import registerServiceWorker from "./registerServiceWorker";
import App from "./containers/App";
import { searchRobots } from "./reducers";

const store = createStore(searchRobots);
ReactDOM.render(<App store={store} />, document.getElementById("root"));

registerServiceWorker();
