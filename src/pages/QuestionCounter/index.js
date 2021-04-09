import React from 'react';
import { StyledQuestionCounter, Text, ProgressBar } from './styles';

const QuestionCounter = ({ currentQuestionIndex, totalQuestions }) => {
  const progressBarPercentage = (currentQuestionIndex / totalQuestions) * 100;

  return (
    <StyledQuestionCounter>
      <Text>{`Questão ${currentQuestionIndex} de ${totalQuestions}`}</Text>
      <ProgressBar progressBarPercentage={progressBarPercentage}></ProgressBar>
    </StyledQuestionCounter>
  );
};

export default QuestionCounter;
