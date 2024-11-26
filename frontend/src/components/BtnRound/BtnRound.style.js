import styled from 'styled-components';

const StyledBtnRound = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 40%;
  overflow: hidden;
  box-shadow: 0 0 0 .4rem rgba(255, 255, 255, 1);
  
  & > button {
    background: ${({ theme }) => theme.orange};
    width: 100%;
    height: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    
    &::before {
      content: '';
      display: block;
      width: 2rem;
      height: 2rem;
      background-image: url("data:image/svg+xml, %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='7.205px' height='12.289px' viewBox='0 0 7.205 12.289' enable-background='new 0 0 7.205 12.289' %3E%3Cg%3E%3Cpolyline fill='none' stroke='%23FFFFFF' stroke-width='1.5' stroke-miterlimit='10' points='0.53,0.53 6.145,6.144 0.53,11.758 ' /%3E%3C/g%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
      transform: rotate(-90deg);
      transition: transform .3s ease;
    }

    &:hover {
      &::before {
        transform: rotate(-90deg) translateX(.8rem);
      }
    }
  }

  & > button:nth-child(2) {
    &:before {
      transform: rotate(90deg);
    }

    &:hover {
      &::before {
        transform: rotate(90deg) translateX(.8rem);
      }
    }
  }
`
export default StyledBtnRound;