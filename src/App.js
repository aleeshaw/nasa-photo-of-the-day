import React from "react";
import CardContainer from "./components/CardContainer.js";
import "./App.css";
import Button from "./components/Button.js";


function App() {
  return (
    <div className="App">
      <h1 className="title">Astronomy Photo of The Day</h1>
      <CardContainer />
      <div className="button-container">
        <Button />
        <Button />
      </div>
      <footer className="footer">Aleesha Wood 2019</footer>
    </div>
  );
}

export default App;
