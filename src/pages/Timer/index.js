import React from 'react';
import { StyledTimer, Time } from './styles';

const Timer = ({ time }) => {
  return (
    <StyledTimer>
      {`Tempo Restante: `}
      <Time>{time}</Time>
    </StyledTimer>
  );
};

export default Timer;
