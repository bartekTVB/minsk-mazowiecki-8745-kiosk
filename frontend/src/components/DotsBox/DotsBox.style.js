import styled from 'styled-components';

const StyledDot = styled.div`
  width: 5rem;
  height: 5rem;
  margin: .2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  
  &::before {
    content: '';
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    transition: background 1s;
    background: ${({ theme, active }) => active ? theme.green : theme.gray500};
  }
`

export default StyledDot;