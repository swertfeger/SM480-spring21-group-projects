import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./js/components/LoginForm";

function App() {

  return (
    <div className='App'>
      <LoginForm />
    </div>
  );
}

export default App;
