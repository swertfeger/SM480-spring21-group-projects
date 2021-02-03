import React from 'react';
import ReactDOM from 'react-dom';
import OAuth2Login from 'react-simple-oauth2-login';
import styles from "./LoginForm.scss";
import classnames from "classnames";

function LoginForm(props) {

    const onSuccess = response => console.log("SUCCESS: ", response);
    const onFailure = response => console.error("ERROR: ", response);
    
    return (
        <div className={styles.root}>

            <div className={styles.oAuthLogin}>
                <OAuth2Login
                    authorizationUrl="https://accounts.spotify.com/authorize"
                    responseType="token"
                    clientId="9822046hvr4lnhi7g07grihpefahy5jb"
                    redirectUri="http://localhost:3000/oauth-callback"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                />
            </div>

            <div 
                className={classnames("fb-login-button", styles.fbButton)}
                data-width=""
                data-size="large" 
                data-button-type="login_with"
                data-layout="rounded"
                data-auto-logout-link="false"
                data-use-continue-as="false"
            />

        </div>
    )
}

export default LoginForm;