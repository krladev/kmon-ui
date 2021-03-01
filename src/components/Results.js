import React, { useContext } from 'react'
import { FaCheck, FaTimes} from 'react-icons/fa'

import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types';

export const Results = ({ history }) => {
    const { session, dispatch } = useContext(AuthContext);
    const challenger = session.challenger;

    const handleFinish = () => {
        dispatch({
            type: types.logout
        });

        history.push('/');
    }

    return (
        <div className="kui-results">
            <div className="row kui-progress">
                <div className="d-none d-sm-block col-md-10 kui-question-counter">
                    <u>{ session.name }</u> good job!
                </div>
                <div className="col-6 col-lg-1 col-md-2 kui-finish">
                    <button className="nav-item nav-link btn" onClick={ handleFinish }>Finish</button>
                </div>
            </div>

            <div className="kui-summary mt-4">
                <p className="line">Your score</p>
                <p className="bigger">{ challenger.score } / { challenger.questions.length }</p>
                <hr />
                <p className="line">You were tested adding numbers based on</p>
                <p className="bigger">{ challenger.baseNumber }</p>
                <hr />
                <ul className="kui-answer-sheet">
                {
                    challenger.questions.map((question, index) => {
                        const isCorrect = challenger.userAnswers[index] === challenger.correctAnswers[index];

                        return <li key={ index } className={ isCorrect ? "success":"error" }>
                            { question } + { challenger.baseNumber } = { challenger.userAnswers[index] }
                            &nbsp;
                            {
                                isCorrect
                                ? <span><FaCheck /></span>
                                : <><span><FaTimes /></span> <span className="correct-answer">({ challenger.correctAnswers[index] })</span></>
                            }
                        </li>
                    })
                }
                </ul>
            </div>

            <div className="row d-block d-sm-none kui-progress-bar">
            </div>
        </div>
    )
}
