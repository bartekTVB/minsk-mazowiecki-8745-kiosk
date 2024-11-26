import styled from 'styled-components';
import flagsImg from '../../assets/images/flags.png';

const StyledCurrency = styled.div`
  width: 85%;
  padding: 4rem;
  overflow: hidden;
  margin: 0 auto;
  transform: translateY(3rem);
  opacity: 0;
  animation: init .5s forwards ease;

  & > h2 {
    font-size: 2rem;
    font-weight: normal;
    text-align: center;
  }
  
  & > table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    font-size: 1.6rem;
    text-align: center;
  
    & > thead {
      height: 8rem;
      background: ${({ theme }) => theme.green};
      color: ${({ theme }) => theme.white};
        
      & td {
        border-bottom: 1px solid ${({ theme }) => theme.greenBorder};
        border-left: 1px solid ${({ theme }) => theme.greenBorder};
      }
    }
  
    & > tbody {
      & > tr {
        border-bottom: 1px solid ${({ theme }) => theme.gray200};
        height: 5rem;
  
        & > td:nth-child(2) > div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  @keyframes init {
    from {
      transform: translateY(3rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const StyledFlag = styled.div`
  width: 4.6rem;
  height: 3.2rem;
  background: url(${flagsImg});
  background-position-x: ${({ index }) => -index * 4.6 + 'rem'};
  margin-right: 1rem;
`;

export default StyledCurrency;
export { StyledFlag };