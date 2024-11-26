import styled from 'styled-components';

const StyledHeader = styled.div`
  border-bottom: .2rem solid ${({ theme }) => theme.gray};
  margin: 0 4rem;
  
  & > div:nth-child(1) {
    height: 15rem;
    padding-top: 3rem;
    display: flex;
    justify-content: space-between;

    & > div {
      display: flex;
    }
  }
`;

const StyledNav = styled.div`
  & > a {
    display: inline-block;
    padding: 1rem;
    height: 5rem;
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    font-size: 2rem;
    margin-right: .5rem;
    transition: background .2s, box-shadow .2s;
    background: ${({theme}) => theme.green};
    border-radius: .5rem .5rem 0 0;
  }

  & > a:last-child {
    box-shadow: 0 -.6rem 0 0 ${({ theme }) => theme.lightGreen};
  }

  & > a:active {
    background: ${({ theme }) => theme.buttonHover};
  }

`;

export { StyledHeader, StyledNav };