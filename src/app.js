import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css"; //using this will let all browsers start from a same style. Any existing style will not be initialized
import "./styles/styles.scss";

ReactDOM.render(
  <IndecisionApp></IndecisionApp>,
  document.getElementById("app")
);
