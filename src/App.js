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
      <Button onClick={onButtonClick} buttontype="primary-button" full>
        <p>Continue</p>
      </Button>
      <Button buttontype="secondary-button" icon="google" full>
        <p>Continue with Google</p>
      </Button>
      <Button buttontype="secondary-button" icon="twitter" full>
        <p>Continue with Twitter</p>
      </Button>
      <Button buttontype="secondary-button" icon="facebook" full>
        <p>Continue with Facebook</p>
      </Button>
      <Button buttontype="secondary-button" icon="apple" full>
        <p>Continue with Apple</p>
      </Button>
      <LoginForm />
      <a onClick={onButtonClick}>POPUP</a>
      <ConnectPopUp show={showPopup} onClose={() => setShowPopup(false)}/>
    </div>
  );
}

export default App;
