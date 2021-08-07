import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

interface IState {
  version: string;
}
ReactDOM.render<IState>(
  <React.StrictMode>
    <App version={process.env.REACT_APP_VERSION!} />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
