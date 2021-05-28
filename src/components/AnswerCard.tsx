import React from "react";
import styled from "styled-components";
import { shuffleArray } from "../api/testsApi";
import { AnswerObject } from "../pages/Test";
import { Test } from "../utils/interfaces";

type Props = {
  question: any;
  answers: any;
  callback: (e: React.MouseEvent<HTMLElement>) => void;
  totalQuestions: number;
};

const AnswerCard: React.FC<Props> = ({ question: {text}, answers:{options}, totalQuestions, callback}) => {
  return (
    <>
      <h5>{text}</h5>
      <ul className="answers">
        {
            options.map(option => {
                return (
                    <li onClick={() => callback(option)} key={option}>{option}</li>
                )
            })
        }


        {/* <li className="correct">asd</li>
                   <li className="incorrect">asd</li>
                   <li>asd</li>
                   <li>asd</li> */}
      </ul>
      {/*<div>*/}
      {/*    {*/}
      {/*        props.correctAnswer ?*/}
      {/*        'Правильно Відповідь!' : */}
      {/*        props.clickedAnswer ? 'Неправильна відповідь!' : ''*/}
      {/*    }*/}
      {/*</div>
                <Wrapper>
                    {/* <p className="number">
                        Питання: {questionNumber} / {totalQuestions}
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: question }}/>
                    <div>
                        {answers.map(answer => (
                            <ButtonWrapper
                                correct={userAnswer?.correctAnswer === answer}
                                userClicked={userAnswer?.answer === answer}
                                key={answer}>
                                <button disabled={!!userAnswer} value={answer} onClick={callback}>
                                    <span dangerouslySetInnerHTML={{ __html: answer}} />
                                </button>
                            </ButtonWrapper>
                        ))}
                    </div> */}
      {/* </Wrapper> */}
    </>
  );
};

export const Wrapper = styled.div`
  //max-width: 1100px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56FFA4, #59BC86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #FF5656, #C16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;

export default AnswerCard;
