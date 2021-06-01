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
  userAnswer: AnswerObject | undefined;

};

const AnswerCard: React.FC<Props> = ({ question: {text}, answers:{options}, totalQuestions, callback, userAnswer}) => {
  return (
    <>
      <h3 className="my-5 text-white">{text}</h3>
      <ul className="answers">
        {
            options.map(option => {
                return (
                    <ButtonWrapper
                        correct={userAnswer?.correctAnswer === option}
                        userClicked={userAnswer?.answer === option}
                        key={option}>
                        <li onClick={() => callback(option)} key={option}>{option}</li>
                    </ButtonWrapper>
                )
            })
        }
      </ul>
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
  li {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    padding: 5px;
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
