import React from "react";
import ReactDOM from "react-dom";
import OAuth2Login from "react-simple-oauth2-login";
import "./Input.scss";
import classnames from "classnames";

function Input() {
  return (
    <div className='input'>
      <label htmlFor='' className='input__label' />
      <input type='text' className='input__field' />
      <div className='input__error'></div>
    </div>
  );
}

export default Input;
