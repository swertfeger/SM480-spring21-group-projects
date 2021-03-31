import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LoginForm from "./js/components/LoginForm";
import TwitterSearch from "./js/pages/TwitterSearch";
import Homepage from "./js/pages/Homepage";

function App(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <div className='App'>

            {isLoggedIn ?
                <BrowserRouter basename={""}>
                    <Switch>
                        <Route path="/twitter" component={TwitterSearch} />
                        <Route path="/facebook">
                            <Link to={"/twitter"}>TWITTER SEARCH</Link>
                            <Link to={"/facebook"}>FACEBOOK SEARCH</Link>
                            <div>FACEBOOK PAGE</div>
                        </Route>
                        <Route path="/" component={Homepage} />
                    </Switch>
                </BrowserRouter>
            :
                <LoginForm onLogin={() => setIsLoggedIn(true)}/>
            }
        </div>
    );
}

export default App;
