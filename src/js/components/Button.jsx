import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./Button.scss";
import classnames from "classnames";
import Icon from "./Icon";
import ConnectPopUp from "./ConnectPopUp";

function Button(props) {
  return (
    <button
      className={classnames(
        "button",
        props.buttontype,
        { ["half"]: props.half },
        { ["full"]: props.full }
      )}
    >
      {props.icon && <Icon type={props.icon} />}
      {props.children}
    </button>
  );
}

Button.propTypes = {
  buttontype: PropTypes.oneOf(["primary", "secondary"]),
  icon: PropTypes.string,
};

Button.defaultProps = {
  buttontype: "primary",
};

export default Button;
