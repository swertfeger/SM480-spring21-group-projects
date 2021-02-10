import React, { useState } from "react";
import "./Input.scss";
import PropTypes from "prop-types";
function Input(props) {
  return (
    <div className='input'>
      <label htmlFor='' className='input__label'>
        {props.label}
      </label>
      <input
        type='text'
        className='input__field'
        placeholder={props.placeholder}
        value={props.value}
      />
      <div className='input__error'>
        <div className='input__error-icon'></div>
        <div className='input__error-message'>{props.error}</div>
      </div>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

export default Input;
