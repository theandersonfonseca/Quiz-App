import styled from 'styled-components';

export const StyledGameOver = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 30px;
  text-transform: uppercase;
`;

export const Button = styled.button`
  margin-top: 3rem;
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  background: ${(props) => props.theme.colors.green};
  border: none;
  outline: none;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 600;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.greenDark};
  }
`;
