import React, { useContext, useState } from 'react'

import { AuthContext } from '../auth/AuthContext';
import { initChallenger } from '../engine/initChallenger';
import { storeChallenger } from '../engine/storeChallenger';
import { types } from '../types/types';

export const Welcome = ({ history }) => {
    const defaultNumQuestions = 10;

    const { dispatch } = useContext(AuthContext);

    const [name, setName] = useState('');
    const handleName = (e) => {
        setName(e.target.value);
    };

    const [numQuestions, setNumQuestions] = useState(defaultNumQuestions);
    const handleNumQuestions = (e) => {
        setNumQuestions(e.target.options[e.target.selectedIndex].value);
    };

    const [errorMsg, setErrorMsg] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if(name && numQuestions){
            setErrorMsg('');
            history.push('/challenger');
            const minBaseNumber = 4;
            const challenger = initChallenger({
                baseNumber: Math.ceil((Math.random() * 5) + minBaseNumber),
                numQuestions: numQuestions
            });
            storeChallenger(challenger);

            dispatch({
                type: types.login,
                payload: {
                    name: name,
                    numQuestions: numQuestions,
                    challenger: challenger
                }
            });
        }
        else{
            setErrorMsg('Please complete the form');
        }
    }

    return (
        <div className="kui-welcome">
            <h1 className="mb-4">Kumon Challenger</h1>
            { errorMsg.length ? <div className='alert alert-danger'>{ errorMsg }</div>:"" }
            <form onSubmit={ handleLogin }>
                <div className="form-group mb-2">
                    <label htmlFor="yourName" className="mb-1">Your Name</label>
                    <input type="text" className="form-control" id="yourName" aria-describedby="Your Name" placeholder="" value={name} onChange={ handleName } autoComplete="off" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="numQuestions" className="mb-1">Number of questions</label>
                    <select className="form-control" id="numQuestions" onChange={ handleNumQuestions }>
                        <option value={ defaultNumQuestions }>{defaultNumQuestions}</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                    </select>
                </div>
                <div className="button-box">
                    <button type="submit" className="btn btn-primary">Start</button>
                </div>
            </form>
        </div>
    )
}
