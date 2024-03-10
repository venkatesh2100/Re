import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import logo from "./logo.svg"
import reportWebVitals from "./reportWebVitals";

export default function NavBar() {
  return (
    <div className="App-Navbar">
      <div className="App-head">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>ReactFacts</h2>
      </div>
      <h3>React Course-project 1</h3>
    </div>
  );
}
