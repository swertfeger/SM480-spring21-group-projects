import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./js/components/LoginForm";
import ConnectPopUp from "./js/components/ConnectPopUp";
import Button from "./js/components/Button";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const onButtonClick = () => {
    console.log("onButtonClick");
    setShowPopup(true);
  }
  return (
    <div className='App'>
      <LoginForm />
      <ConnectPopUp show={showPopup} onClose={() => setShowPopup(false)}/>
    </div>
  );
}

export default App;
