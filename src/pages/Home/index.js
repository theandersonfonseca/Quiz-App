import React from 'react';
import { StyledStartButton } from './styles';

function StartButton({ startQuiz }) {
  return (
    <StyledStartButton onClick={() => startQuiz()}>Começar</StyledStartButton>
  );
}

export default StartButton;
