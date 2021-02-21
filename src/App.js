import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./js/components/LoginForm";
import Button from "./js/components/Button";

function App() {
  
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
    </div>
  );
}

export default App;
