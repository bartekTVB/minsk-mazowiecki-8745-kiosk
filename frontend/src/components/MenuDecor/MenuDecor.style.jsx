import styled from 'styled-components';

const StyledMenuDecor = styled.div`
  position: absolute;
  top: -3rem;
  right: -2rem;
  height: 10rem;
  width: 18rem;
  display: flex;
  transform: translateY(3rem);
  animation: fade .5s .1s forwards ease-out;

  & > div:nth-child(1),
  & > div:nth-child(2) {
    width: 9rem;
    height: 9rem;
    border: 1.5rem solid ${({ theme }) => theme.green};
    border-radius: 50%;
  }

  & > div:nth-child(1) {
    position: relative;
    left: 1.7rem;
  }

  & > div:nth-child(2) {
    border-color: ${({ theme }) => theme.lightGreen};
  }

  & > div:nth-child(3) {
    position: absolute;
    top: calc(50% - 2rem);
    width: 18rem;
    height: 3rem;
    background: ${({ theme }) => theme.white};
  }

  @keyframes fade {
    from {
      transform: translateY(3rem);
    }
    to {
      transform: translateY(0);
    }
}
`;
export default StyledMenuDecor;