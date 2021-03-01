import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

import { Challenger } from './components/Challenger'
import { Welcome } from './components/Welcome';

import './css/app.css';
import './css/progress.css';
import './css/challenger.css';
import './css/results.css';
import './css/welcome.css';

import { AppRouter } from './routers/AppRouter';

const init = () => {
    return JSON.parse(localStorage.getItem('session')) || { auth: false }
}

export const KmonUiApp = () => {

    const [session, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem('session', JSON.stringify(session));
    }, [session]);

    return (
        <AuthContext.Provider value={{session, dispatch}}>
            <div className="container-fluid">
                {/* <Challenger /> */}
                {/* <Welcome /> */}

                <AppRouter />
            </div>
        </AuthContext.Provider>


    )
}
