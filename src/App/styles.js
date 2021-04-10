import styled from 'styled-components';

export const StyledApp = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10rem;
`;
