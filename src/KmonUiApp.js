import React from 'react'

import { FaCheck, FaTimes} from 'react-icons/fa'


import './css/app.css';

export const KmonUiApp = () => {
    return (
        <div class="container-fluid">
            <div className="row kui-progress">
                <div className="d-none d-sm-block col-sm-8 kui-question-counter">
                    Abi, only 12 questions to go!
                </div>
                <div className="col-12 col-sm-4 kui-score">
                    Score: <span className="kui-score-right">2</span> / <span className="kui-score-wrong">0</span>
                </div>                
            </div>

            <div className="kui-qna">                
                <div className="row kui-question">
                    <div className="col-sm-5 text-center kui-number"><div>8</div></div>
                    <div className="col-sm-2 text-center kui-operator"><div>+</div></div>
                    <div className="col-sm-5 text-center kui-number"><div>6</div></div>
                </div>

                <div className="row kui-answers">
                    <div className="col-6 col-sm-3 text-center kui-answer"><div>22</div></div>
                    <div className="col-6 col-sm-3 text-center kui-answer"><div>22</div></div>
                    <div className="col-6 col-sm-3 text-center kui-answer"><div>22</div></div>
                    <div className="col-6 col-sm-3 text-center kui-answer"><div>22</div></div>
                </div>
            </div>

            <div className="row d-block d-sm-none kui-progress-bar">
            </div>

            <div className="kui-feedback d-none kui-feedback-check">
                <div><FaCheck /></div>
            </div>
            <div className="kui-feedback d-none kui-feedback-cross">
                <div><FaTimes /></div>
            </div>
        </div>
    )
}
