import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import styles from '../../scss/global.scss';
import classnames from 'classnames';

function Button(props) {

    return (
        <button className={classnames(
            props.buttontype,
            {["half"]: props.half},
            {["full"]: props.full}
        )}>
            {props.children}
        </button>
    )

}

Button.propTypes = {
    buttontype: PropTypes.oneOf(["primary-button", "secondary-button"])
}

export default Button;