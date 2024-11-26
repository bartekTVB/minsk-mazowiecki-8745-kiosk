import styled from 'styled-components';

const StyledBankBranches = styled.div`
  padding: 5rem 10rem;
  font-size: 2rem;
  overflow-x: auto;
  height: 100%;
`;

const StyledSection = styled.div`
  display: flex;
  border-bottom: .2rem solid ${({ theme }) => theme.gray300};

  & > div {
    width: 50%;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  text-align: center;

  & td {
    padding: 1rem 0;
    vertical-align: middle;
    background: white;
    background: ${({ theme }) => theme.gray200};
  }
`;

const StyledLink = styled.div`
  margin: 2rem 0;
  width: 17rem;
  height: 4.5rem;
  font-size: 2.2rem;
  transition: background .2s;
  display: flex;
  justify-content: center;
  align-items: center;
    
  & > a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.gray};
    transition: background .2s;

    &:hover {
      background: ${({ theme }) => theme.orange};
    }
  }
`;

export { StyledBankBranches, StyledSection, StyledTable, StyledLink };