import styled from 'styled-components';

export const StyledQuiz = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 0.4rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  width: 60rem;
  max-width: 100%;
  max-width: 100%;
  margin-top: 3rem;
  pointer-events: ${({ quizClass }) => (quizClass ? 'none' : 'initial')};
  border: 0.3rem solid transparent;
  border: ${({ quizClass, theme }) =>
    quizClass === 'correct' && `.3rem solid ${theme.colors.green}`};
  border: ${({ quizClass, theme }) =>
    quizClass === 'wrong' && `.3rem solid ${theme.colors.red}`};
`;

export const Question = styled.h2`
  font-size: 3rem;
`;

export const Option = styled.span`
  margin-top: 2rem;
  font-size: 1.8rem;
  background: ${({ theme }) => theme.colors.dark};
  padding: 2rem;
  cursor: pointer;
  transition: 0.4s;
  word-break: break-all;

  &:hover {
    background: ${({ theme }) => theme.colors.gray};
  }
`;
