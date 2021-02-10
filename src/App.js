import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import LoginForm from "./js/components/LoginForm";
import Button from "./js/components/Button";
import Icon from './js/components/Icon';

function App() {
  return (
    <div className='App'>
      <LoginForm />
    </div>
  );
}

export default App;
