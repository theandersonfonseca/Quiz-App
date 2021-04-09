import React from 'react';
import { StyledGameOver, Paragraph, Button } from './styles';

function GameOver({ corrects, totalQuestions, goToHome }) {
  return (
    <StyledGameOver>
      <Paragraph>{`Você acertou ${corrects} de ${totalQuestions}.`}</Paragraph>
      <Button onClick={goToHome}>Início</Button>
    </StyledGameOver>
  );
}

export default GameOver;
