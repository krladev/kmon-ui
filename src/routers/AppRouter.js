import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import { Welcome } from "../components/Welcome";
import { ChallengerRouter } from "./ChallengerRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const { session } = useContext(AuthContext);

    return (
        <Router>
          <div>
            {/* <Navbar /> */}

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <PublicRoute exact path="/" component={ Welcome } isAuth={ session.auth } />
              <PrivateRoute path="*" component={ ChallengerRouter } isAuth={ session.auth } />
            </Switch>
          </div>
        </Router>
      );
}
