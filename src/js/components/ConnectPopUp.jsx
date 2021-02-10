import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import "./ConnectPopUp.scss";

function ConnectPopUp(props) {

    if(!props.show) {
        return null;
    }

    return (
        <div className="pop-up">
            <h1 className="pop-up-header"> Connect account? {props.name}</h1>
            <p className="pop-up-para">You have previously logged in with your email. Would you like to connect your {props.serviceName} account to your App account?</p>
            <div className="pop-up-button">
                <button className="no-button">No, thanks</button>
                <button className="connect-button">Connect</button>
            </div>
        </div>
    )
}

ConnectPopUp.propTypes = {
    name: PropTypes.string.isRequired,
    serviceName: PropTypes.string,
    show: PropTypes.bool,
}

export default ConnectPopUp;