import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import OAuth2Login from 'react-simple-oauth2-login';
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
    const onSuccess = (response) => console.log("SUCCESS: ", response);
    const onFailure = (response) => console.error("ERROR: ", response);

    const [showPass, setShowPass] = useState(false);

    const onContinueClick = () => {
        setShowPass(true);
    }

    const onButtonClick = (popupId) => {
        console.log(popupId);
        switch(popupId) {
            case "apple":
                console.log("IM APPLE");
                setShowPopup(true);
                setNamePopup("WHAT THE WHAT APPLE????");
                return;
            default:
                console.log("HUH?");
                setShowPopup(true);
                // changes the service name
                setNamePopup(popupId);
        }

    }

    const handleLogin = () => {
        props.onLogin();
    }

    if (!showPass) {
        return (
          <div className="login-form">
              <ConnectPopUp
                  show={showPopup}
                  serviceName={ popupName }
                  hidePopUp={() => setShowPopup(false)}
                  onClose={() => setShowPopup(false)}
              />
            <Card>
              <Input label="Email" placeholder="your@email.com" />
              <p>Can't log in?<a href="#">Recover Account</a></p>
              <Button buttontype='primary' full onClick={onContinueClick}>
                Continue
              </Button>
              <p>Or log in with</p>
              <Button buttontype='secondary' icon='google' full onClick={() => onButtonClick("Google")}>
                Continue with Google
              </Button>
              <Button buttontype='secondary' icon='twitter' full onClick={() => onButtonClick("Twitter")}>
                Continue with Twitter
              </Button>
              <Button buttontype='secondary' icon='facebook' full onClick={() => onButtonClick("Facebook")}>
                Continue with Facebook
              </Button>
              <Button id="apple" buttontype='secondary' icon='apple' full onClick={onButtonClick}>
                Continue with Apple
              </Button>
              <Button buttontype='secondary' icon='pinterest' full onClick={() => onButtonClick("Pinterest")}>
                Continue with Pinterest
              </Button>
              <p>Don't have an account?<a href="#">Sign up</a></p>
            </Card>
          </div>
        );
    }

    return (
        <div className="login-form">
          <Card>
            <Button buttontype='secondary' icon='arrow-left'/>
            <Input label="Password" placeholder=" " />
            <p>Forgot password?<a href="#">Recover password</a></p>
            <Button buttontype='primary' full onClick={handleLogin}>
              Submit
            </Button>
          </Card>
        </div>
    )

        {/* <div>
          <OAuth2Login
            authorizationUrl='https://accounts.spotify.com/authorize'
            responseType='token'
            clientId='9822046hvr4lnhi7g07grihpefahy5jb'
            redirectUri='http://localhost:3000/oauth-callback'
            onSuccess={onSuccess}
            onFailure={onFailure}
            buttonText={props.loginBtnText}
            className={"oAuthLogin"}
          />
        </div>

        <div
          className={classnames("fb-login-button", "fbButton")}
          data-width=''
          data-size='large'
          data-button-type='login_with'
          data-layout='rounded'
          data-auto-logout-link='false'
          data-use-continue-as='false'
        /> */}
}


LoginForm.propTypes = {
    loginBtnText: PropTypes.string.isRequired,
    onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
