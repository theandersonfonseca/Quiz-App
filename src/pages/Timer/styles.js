import styled from 'styled-components';

export const StyledTimer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 2.2rem;
  margin-top: 3rem;
`;

export const Time = styled.span`
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme.colors.blue};
  border-radius: 0.4rem;
  margin-left: 1.5rem;
`;
