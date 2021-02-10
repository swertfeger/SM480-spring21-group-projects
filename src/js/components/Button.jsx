import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import styles from '../../scss/global.scss';
import classnames from 'classnames';
import Icon from './Icon';

function Button(props) {

    return (
        <button className={classnames(
            props.buttontype,
            {["half"]: props.half},
            {["full"]: props.full}
        )}>
            {props.icon && <Icon type={props.icon} />}
            {props.children}
        </button>
    )

}

Button.propTypes = {
    buttontype: PropTypes.oneOf(["primary-button", "secondary-button"]),
    icon: PropTypes.string
}

export default Button;