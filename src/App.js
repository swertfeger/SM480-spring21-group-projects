import React from "react";
import {Route, Switch, Redirect} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {hot} from "react-hot-loader";
import "./App.scss";
import LoginForm from "./js/components/LoginForm";
import Button from "./js/components/Button";

function App() {
  return (
    <div className='App'>
      <Button buttontype="secondary-button half" buttontext="Hello" />
      <LoginForm />
    </div>
  );
}

export default App;
