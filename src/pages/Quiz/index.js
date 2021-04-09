import React from 'react';
import { StyledQuiz, Question, Option } from './styles';

function Quiz({ quizClass, question, checkAnswer, options }) {
  return (
    <StyledQuiz quizClass={quizClass}>
      <Question>{question}</Question>

      {options.map((option) => (
        <Option key={option} onClick={checkAnswer}>
          {option}
        </Option>
      ))}
    </StyledQuiz>
  );
}

export default Quiz;
