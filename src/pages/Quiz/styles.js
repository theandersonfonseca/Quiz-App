import styled from 'styled-components';

export const StyledQuiz = styled.div`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.blue};
  border-radius: 0.4rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  width: 60rem;
  max-width: 100%;
  max-width: 100%;
  margin-top: 3rem;
  pointer-events: ${(props) => (props.quizClass ? 'none' : 'initial')};
  border: 0.3rem solid transparent;
  border: ${(props) =>
    props.quizClass === 'correct' && `.3rem solid ${props.theme.colors.green}`};
  border: ${(props) =>
    props.quizClass === 'wrong' && `.3rem solid ${props.theme.colors.red}`};
`;

export const Question = styled.h2`
  font-size: 3rem;
`;

export const Option = styled.span`
  margin-top: 2rem;
  font-size: 1.8rem;
  background: ${(props) => props.theme.colors.dark};
  padding: 2rem;
  cursor: pointer;
  transition: 0.4s;
  word-break: break-all;

  &:hover {
    background: ${(props) => props.theme.colors.gray};
  }
`;
