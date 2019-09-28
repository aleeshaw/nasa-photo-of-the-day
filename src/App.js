import React from "react";
import CardContainer from "./components/CardContainer.js";
import "./App.css";
import Button from "./components/Button.js";
import styled from 'styled-components';

//styles
const ButtonContainer = styled.div`
  width: 500px;
  margin: 0 auto 40px auto;
  display: flex;
  justify-content: space-between;


`;

function App() {

  return (
    <div className="App">
      <h1 className="title">Astronomy Photo of The Day</h1>
      <CardContainer />
      <ButtonContainer>
        <Button buttonVal={"\u2190"} aria-label="previous"/>
        <Button buttonVal={"\u2192"} aria-label="next"/>
      </ButtonContainer>
      <footer className="footer">Aleesha Wood 2019</footer>
    </div>
  );
}

export default App;
