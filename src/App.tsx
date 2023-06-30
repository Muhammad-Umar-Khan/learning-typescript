import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Intro } from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Intro user_name="Umar" age={12} />
    </div>
  );
}

export default App;
