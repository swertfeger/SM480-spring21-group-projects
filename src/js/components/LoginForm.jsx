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

function LoginForm(props) {
  const onSuccess = (response) => console.log("SUCCESS: ", response);
  const onFailure = (response) => console.error("ERROR: ", response);
  const [showPopup, setShowPopup] = useState(false);
  const onButtonClick = () => {
    console.log("onButtonClick");
    setShowPopup(true);
  }
  const [showPass, setShowPass] = useState(false);
  const onContinueClick = () => {
    setShowPass(true);
  }

  if (setShowPass) {
    return (
      <div className="login-form">
        <Card>
          <Input label="Email" placeholder="your@email.com" />
          <p>Can't log in?<a href="#">Recover Account</a></p>
          <Button buttontype='primary' full onClick={onContinueClick}>
            Continue
          </Button>
          <p>Or log in with</p>
          <Button buttontype='secondary' icon='google' full onClick={onButtonClick}>
            Continue with Google
          </Button>
          <Button buttontype='secondary' icon='twitter' full>
            Continue with Twitter
          </Button>
          <Button buttontype='secondary' icon='facebook' full>
            Continue with Facebook
          </Button>
          <Button buttontype='secondary' icon='apple' full>
            Continue with Apple
          </Button>
          <Button buttontype='secondary' icon='pinterest' full>
            Continue with Pinterest
          </Button>
          <p>Don't have an account?<a href="#">Sign up</a></p>
        </Card>
        <ConnectPopUp show={showPopup} onClose={() => setShowPopup(false)}/>
      </div>
    );
  }
  return (
    <div className="login-form">
      <Card>
        <Button buttontype='secondary' icon='arrow-left'/>
        <Input label="Password" placeholder=" " />
        <p>Forgot password?<a href="#">Recover password</a></p>
      </Card>
    </div>
  )

        /* <div>
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
        /> */
}


LoginForm.propTypes = {
  loginBtnText: PropTypes.string.isRequired,
};

export default LoginForm;
