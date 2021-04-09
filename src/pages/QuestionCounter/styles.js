import styled from 'styled-components';

export const StyledQuestionCounter = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  border: 0.3rem solid ${(props) => props.theme.colors.blue};
  border-radius: 4rem;
  width: 30rem;
  max-width: 100%;
  height: 5rem;
  position: relative;
  text-align: center;
  padding: 0.3rem;
`;

export const Text = styled.p`
  font-size: 2.4rem;
  position: absolute;
  top: -5.5rem;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
`;

export const ProgressBar = styled.span`
  width: ${(props) => `${props.progressBarPercentage}%`};
  height: 100%;
  background: ${(props) => props.theme.colors.blue};
  border-radius: 4rem;
`;
