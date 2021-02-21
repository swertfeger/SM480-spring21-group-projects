<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React from 'react';
import ReactDOM from 'react-dom';
import OAuth2Login from 'react-simple-oauth2-login';
import classnames from "classnames";
import PropTypes from "prop-types";
import Input from './Input';

function LoginForm(props) {

    const onSuccess = response => console.log("SUCCESS: ", response);
    const onFailure = response => console.error("ERROR: ", response);
    
    return (
        <div className={"root"}>
=======
=======
>>>>>>> Stashed changes
import React, { useState } from "react";
import ReactDOM from "react-dom";
import OAuth2Login from "react-simple-oauth2-login";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./LoginForm.scss";
import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import ConnectPopUp from "./ConnectPopUp";
import { getAllByPlaceholderText } from "@testing-library/react";

function LoginForm(props) {
    // varibles for popups
    const [showPopup, setShowPopup] = useState(false);
    const [popupName, setNamePopup] = useState(false);

    const onButtonClick = (popupName) => {
        // makes popup show
        setShowPopup(true);
        // changes the service name
        setNamePopup(popupName);
    }      
  const onSuccess = (response) => console.log("SUCCESS: ", response);
  const onFailure = (response) => console.error("ERROR: ", response);
 


  return (
      <div className="login-form">
      {/*  importing ConnectPopUp  */}
      <ConnectPopUp 
        show={showPopup} 
        serviceName={ popupName }  
        hidePopUp={() => setShowPopup(false)} 
        onClose={() => setShowPopup(false)}/>
      <Card>

        {/* Login w/ service name buttons */}
<<<<<<< Updated upstream
        <Button buttontype='secondary' full>
          Continue
        </Button>

=======
        <Button buttontype='primary' full>
          Continue
        </Button>

        <p> or login with</p>

>>>>>>> Stashed changes
        {/* Google */}
        <Button buttontype='secondary' icon='google' full>
            {/* onclick event to make popup show w/ google */}
            <a href="#" onClick={() => onButtonClick("Google")}>Continue with Google</a>
        </Button>

        {/* Twitter */}
        <Button buttontype='secondary' icon='twitter' full>
            {/* onclick event to make popup show w/ twittter */}
            <a href="#" onClick={() => onButtonClick("Twitter")}>Continue with Twitter</a>
        </Button>

        {/* Facebook */}
        <Button buttontype='secondary' icon='facebook' full>
            {/* onclick event to make popup show w/ facebook */}
            <a href="#" onClick={() => onButtonClick("Facebook")}>Continue with Facebook</a>
        </Button>

        {/* Apple */}
        <Button buttontype='secondary' icon='apple' full>
            {/* onclick event to make popup show w/ apple */}
            <a href="#" onClick={() => onButtonClick("Apple")}>Continue with Apple</a>
        </Button>
>>>>>>> Stashed changes

            <div>
                <OAuth2Login
                    authorizationUrl="https://accounts.spotify.com/authorize"
                    responseType="token"
                    clientId="9822046hvr4lnhi7g07grihpefahy5jb"
                    redirectUri="http://localhost:3000/oauth-callback"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    buttonText={props.loginBtnText}
                    className={"oAuthLogin"}
                />
            </div>

            <div 
                className={classnames("fb-login-button", "fbButton")}
                data-width=""
                data-size="large" 
                data-button-type="login_with"
                data-layout="rounded"
                data-auto-logout-link="false"
                data-use-continue-as="false"
            />
<<<<<<< Updated upstream

=======
            </Card>
>>>>>>> Stashed changes
        </div>
    )
}

LoginForm.propTypes = {
    loginBtnText: PropTypes.string.isRequired,
}

export default LoginForm;