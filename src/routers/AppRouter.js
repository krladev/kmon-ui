import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Welcome } from "../components/Welcome";
import { ChallengerRouter } from "./ChallengerRouter";

export const AppRouter = () => {
    return (
        <Router>
          <div>
            {/* <Navbar /> */}

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/" component={ Welcome } />
              <Route path="*" component={ ChallengerRouter } />
            </Switch>
          </div>
        </Router>
      );
}
