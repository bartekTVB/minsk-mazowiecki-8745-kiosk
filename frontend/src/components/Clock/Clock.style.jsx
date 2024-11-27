import styled from 'styled-components';

const StyledClock = styled.div`
  min-width: 24rem;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.gray600};
  transform: translateY(-1rem);
  
  & > div:first-child {
    font-size: 6.5rem;

    & > span:nth-child(2) {
      animation: tick 1s infinite;
    }
  }

  & > div:last-child {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.gray600};
  }

  @keyframes tick {
    0% { opacity: 1; }
    49% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 0; }
  }
`

export default StyledClock;