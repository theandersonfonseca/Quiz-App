import styled from 'styled-components';

export const StyledStartButton = styled.button`
  padding: 1.5rem 2rem;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.colors.green};
  border: none;
  outline: none;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 600;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.greenDark};
  }
`;
