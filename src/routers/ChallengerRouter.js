import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Challenger } from '../components/Challenger'
import { Results } from '../components/Results'

export const ChallengerRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/challenger" component={ Challenger } />
                <Route exact path="/results" component={ Results } />

                <Redirect to="/" />
            </Switch>
        </div>
    )
}
