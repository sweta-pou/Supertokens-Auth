import React from "react";
import SuperTokens, {
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import EmailPassword, {
  EmailPasswordAuth,
} from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Game from "./component/Game/Game";

interface Props {
  version: string;
}
SuperTokens.init({
  appInfo: {
    appName: "Tic-Tac-Toe",
    apiDomain: process.env.REACT_APP_API_apiDomain as string,
    websiteDomain: process.env.REACT_APP_API_websiteDomain as string,
  },
  recipeList: [EmailPassword.init(), Session.init()],
});
function App(props: Props) {
  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <div className="content">
        <Router>
          <Switch>
            {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"))}
            <Route path="/">
              <EmailPasswordAuth>
                <Game />
              </EmailPasswordAuth>
            </Route>
          </Switch>
        </Router>
      </div>
      <div className="footer">
        <p>v {props.version}</p>
      </div>
    </div>
  );
}

export default App;
