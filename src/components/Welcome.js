import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const Welcome = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const [name, setName] = useState('');
    const handleName = (e) => {
        setName(e.target.value);
    };

    const [parentEmail, setParentEmail] = useState('');
    const handleParentEmail = (e) => {
        setParentEmail(e.target.value);
    };

    const handleLogin = () => {
        history.push('/challenger');

        dispatch({
            type: types.login,
            payload: {
                name: name,
                parentEmail: parentEmail,
            }
        })
    }

    return (
        <div className="kui-welcome">
            <h1 className="mb-4">Kumon Challenger</h1>
            <form onSubmit={ handleLogin }>
                <div className="form-group mb-2">
                    <label for="yourName" className="mb-1">Your Name</label>
                    <input type="text" className="form-control" id="yourName" aria-describedby="Your Name" placeholder="" value={name} onChange={ handleName }/>
                </div>
                <div className="form-group mb-2">
                    <label for="parentEmail" className="mb-1">Your Parent's Email</label>
                    <input type="email" className="form-control" id="parentEmail" aria-describedby="Your Parent's Email" placeholder="" value={parentEmail} onChange={ handleParentEmail } />
                </div>
                <div className="button-box">
                    <button type="submit" className="btn btn-primary">Start</button>
                </div>
            </form>
        </div>
    )
}
