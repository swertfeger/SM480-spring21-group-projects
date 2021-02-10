import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../scss/global.scss';
import classnames from 'classnames';

function Button(props) {

    return (
        <button className={props.buttontype}>
            <p>{props.buttontext}</p>
        </button>
    )

}

export default Button;