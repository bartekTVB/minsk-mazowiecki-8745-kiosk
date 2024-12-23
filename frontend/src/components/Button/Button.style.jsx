import styled from 'styled-components';
import icons from '../../assets/images/icons.png';

const StyledButton = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 2rem 0;
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => `linear-gradient(to bottom, ${theme.buttonGreen1}, ${theme.buttonGreen2})`};
  border-radius: .5rem;
  margin: 1.5rem;
  cursor: pointer;
  transition: all 0.2s;

  /* btn name */
  & > div:nth-child(2) {
    height: 7rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
  }

  &:active {
    transform: scale(.97);
  }
`;

const StyledIcon = styled.div`
  width: 10rem;
  height: 9.5rem;
  margin: 0 auto;
  background: url(${icons}) no-repeat center;
  background-position:  ${({ iconNo }) => `${(iconNo * (-10)) + 10}rem`};
`;

export { StyledButton, StyledIcon };