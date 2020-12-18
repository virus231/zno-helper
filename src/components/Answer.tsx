import React from 'react';
// import './Answer.css';

const Answer = (props) => {
        return (
            <>
                <ul className="answers">
                    <li className="correct">asd</li>
                    <li className="incorrect">asd</li>
                    <li>asd</li>
                    <li>asd</li>

                </ul>
                <div>
                    {
                        props.correctAnswer ?
                        'Правильно Відповідь!' : 
                        props.clickedAnswer ? 'Неправильна відповідь!' : ''
                    }
                </div>
            </>
        );
}

export default Answer;