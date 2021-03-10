import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LoginForm from "./js/components/LoginForm";
import TwitterSearch from "./js/pages/TwitterSearch";
function App(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <div className='App'>

            {isLoggedIn ?
                <BrowserRouter basename={""}>
                    <Switch>
                        <Route path="/twitter">
                            <TwitterSearch />
                        </Route>
                        <Route path="/facebook">
                            <Link to={"/twitter"}>TWITTER SEARCH</Link>
                            <Link to={"/facebook"}>FACEBOOK SEARCH</Link>
                            <div>FACEBOOK PAGE</div>
                        </Route>
                    </Switch>
                </BrowserRouter>
            :
                <LoginForm onLogin={() => setIsLoggedIn(true)}/>
            }
        </div>
    );
}

export default App;
