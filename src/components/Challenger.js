import React, { useContext, useState } from 'react'

import { FaCheck, FaTimes} from 'react-icons/fa'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types';

export const Challenger = ({ history }) => {

    const { session, dispatch } = useContext(AuthContext);

    const [challenger, setChallenger] = useState(session.challenger);

    const [userAnswer, setUserAnswer] = useState();

    const question = challenger.questions[challenger.currentQuestion - 1];
    const answers = challenger.answers[challenger.currentQuestion - 1];

    const handleFinish = () => {
        dispatch({
            type: types.logout
        });

        history.push('/');
    }

    const recordAnswer = (e) => {
        const theAnswer = e.target.innerText * 1;
        setUserAnswer(theAnswer);

        const newChallenger = {...challenger};

        const currentIndex = newChallenger.currentQuestion - 1;
        newChallenger.userAnswers.push(theAnswer);

        const wasCorrect = newChallenger.correctAnswers[currentIndex] === theAnswer;

        newChallenger.score = wasCorrect
            ? newChallenger.score + 1
            : newChallenger.score;
        newChallenger.currentQuestion++;

        let secondsDelay = 0;

        if(wasCorrect){
            document.getElementById("audioSuccess").play();
            secondsDelay = 2;
        }
        else{
            document.getElementById("audioError").play();
            secondsDelay = 4;
        }

        window.setTimeout(() => {
            setChallenger(newChallenger);
            setUserAnswer(null);
        }, secondsDelay * 1000);
    }

    return (
        <div className="kui-challenger">
            <div className="row kui-progress">
                <div className="d-none d-sm-block col-md-6 kui-question-counter">
                    { session.name }, only { challenger.questions.length - (challenger.currentQuestion - 1) } questions to go!
                </div>
                <div className="col-6 col-lg-5 col-md-4 kui-score">
                    Score: <span className="kui-score-right">{ challenger.score }</span> / <span className="kui-score-wrong">{ challenger.questions.length }</span>
                </div>
                <div className="col-6 col-lg-1 col-md-2 kui-finish">
                    <button className="nav-item nav-link btn" onClick={ handleFinish }>Finish</button>
                </div>
            </div>

            <div className="kui-qna">
                <div className="row kui-question">
                    <div className="col-sm-5 text-center kui-number"><div>{ question }</div></div>
                    <div className="col-sm-2 text-center kui-operator"><div>+</div></div>
                    <div className="col-sm-5 text-center kui-number"><div>{ challenger.baseNumber }</div></div>
                </div>

                {
                    ! userAnswer ?
                        <div className="row kui-answers">
                            <div className="col-6 col-sm-3 text-center kui-answer"><div onClick={ recordAnswer }>{ answers[0] }</div></div>
                            <div className="col-6 col-sm-3 text-center kui-answer"><div onClick={ recordAnswer }>{ answers[1] }</div></div>
                            <div className="col-6 col-sm-3 text-center kui-answer"><div onClick={ recordAnswer }>{ answers[2] }</div></div>
                            <div className="col-6 col-sm-3 text-center kui-answer"><div onClick={ recordAnswer }>{ answers[3] }</div></div>
                        </div>
                        :
                        <div className="row kui-answers">
                            <div className="col-12 col-sm-3 text-center kui-your-answer"><div>{ userAnswer }</div></div>
                        </div>
                }
            </div>

            <div className="row d-block d-sm-none kui-progress-bar">
            </div>

            <div className="kui-feedback d-none kui-feedback-check">
                <div><FaCheck /></div>
            </div>
            <div className="kui-feedback d-none kui-feedback-cross">
                <div><FaTimes /></div>
            </div>

            <audio id="audioSuccess">
                <source src="assets/sounds/Ta Da-SoundBible.com-1884170640.mp3" type="audio/mpeg" />
            </audio>
            <audio id="audioError">
                <source src="assets/sounds/Sad_Trombone-Joe_Lamb-665429450.mp3" type="audio/mpeg" />
            </audio>
        </div>
    )
}
