import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import "./ConnectPopUp.scss";
<<<<<<< Updated upstream
import Icon from "./Icon";
import LoginForm from "./LoginForm";
=======
import Button from "./Button"
>>>>>>> Stashed changes

function ConnectPopUp(props) {

    // Decides if the popup should show or not
    if(!props.show) {
        return null;
    }

    return (
        <div className="pop-up">
            
            {/* Popup header */}
            <h1 className="pop-up-header"> Connect account? {props.name}</h1>

            {/* Popup  paragraph */}
            <p className="pop-up-para">You have previously logged in with your email. Would you like to connect your {props.serviceName} account to your App account?</p>

            {/* Popup Buttons */}
            <div className="pop-up-button">

                {/* No button */}
<<<<<<< Updated upstream
                <button className="no-button">
                    <a href="#" onClick={props.hidePopUp}>
                        No, thanks
                    </a>
                </button>

                {/* Connect button */}
                <button className="connect-button">
                    <a href="#" onClick={props.hidePopUp}>
                        Connect
                    </a>
                </button>
=======
                <Button buttontype='secondary'>
                    <a href="#" onClick={props.hidePopUp}>
                        No, thanks
                    </a>
                </Button>

                {/* Connect button */}
                <Button buttontype='secondary'>
                    <a href="#" onClick={props.hidePopUp}>
                        Connect
                    </a>
                </Button>
>>>>>>> Stashed changes
            </div>
        </div>
    )
}

ConnectPopUp.propTypes = {
    // profile name
    name: PropTypes.string.isRequired,
    // product name i.e. google, twitter, ect
    serviceName: PropTypes.string,
    show: PropTypes.bool,
    // for hiding pop up
    hidePopUp: PropTypes.func,
}

export default ConnectPopUp;