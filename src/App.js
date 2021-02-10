import React from "react";
import {Route, Switch, Redirect} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {hot} from "react-hot-loader";
import "./App.scss";
import LoginForm from "./js/components/LoginForm";
import ConnectPopUp from "./js/components/ConnectPopUp";

function App() {
  return (
    <div className='App'>
      <LoginForm />
      <ConnectPopUp/>
    </div>
  );
}

export default App;
