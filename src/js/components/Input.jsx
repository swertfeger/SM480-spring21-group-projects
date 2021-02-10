import React, { useState, useEffect } from "react";
import "./Input.scss";
import PropTypes from "prop-types";
function Input(props) {
  const { inputValue, setInputValue } = useState("");

  useEffect(() => {
    if (props.onUpdate) {
      props.onUpdate(inputValue);
    }
  }, [inputValue, props]);

  return (
    <div className='input'>
      <label htmlFor='' className='input__label'>
        {props.label}
      </label>
      <input
        type='text'
        className='input__field'
        placeholder={props.placeholder}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
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
  onUpdate: PropTypes.func,
};

export default Input;
