import styled from 'styled-components';
import iconsWeather from '../../assets/images/icons_weather.png';

const StyledWeather = styled.div`
  color: ${({ theme }) => theme.gray600};
  display: flex;
  
  & > div:first-child {
    margin-top: .5rem;
  }
  
  // wrapper temperature
  & > div:last-child {
    padding-left: 2rem;
    text-align: right;
    
    // label
    & > div:nth-child(1) {
      font-weight: bold;
      font-size: 2rem;
      padding-bottom: 1rem;
    }

    // temp. max
    & > div:nth-child(n+2) {
      font-size: 1.6rem;
      display: flex;
      justify-content: end;
      align-items: center;

      & > span {
        font-size: 2.6rem;
        font-weight: bold;
        padding: 0 .5rem;
        margin-left: 1rem;
        width: 8rem;
      }
    }

  }

`;

const StyledIcon = styled.div`
  width: 7rem;
  height: 7rem;
  background: url(${iconsWeather}) no-repeat;
  background-position-x: ${({ index }) => -index * 7 + 'rem'};
`;

export default StyledWeather;
export { StyledIcon };