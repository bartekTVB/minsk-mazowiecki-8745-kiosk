import styled from 'styled-components';

const StyledCarousel = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  z-index: 100;

  /* btn */
  & > a {
    position: absolute;
    bottom: .5rem;
    left: 2rem;
    background: ${({ theme }) => theme.gray};
    width: 17rem;
    height: 4.5rem;
    border-radius: 1rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.white};
    transition: background .2s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${({ theme }) => theme.orange};
    }
  }

  /* btn round */
  & > div:nth-child(2) {
    width: 10rem;
    height: 10rem;
    position: absolute;
    z-index: 1100;
    bottom: -5rem;
    right: 1rem;
    transform: rotate(90deg);
  }
`

const Slider = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  transition: opacity 1s;
  opacity:  ${({ show }) => show ? 1 : 0};


  & > div:first-child {
    width: 50%;
    max-height: 100%;
    padding: 2rem 1rem .5rem 2rem;

    /* title */
    & > div:first-child {
      font-size: 2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.gray};
    }

    /* txt1 */
    & > div:nth-child(2) {
      font-size: 1.6rem;
      font-weight: lighter;
      margin-top: 1rem;
    }

    /* txt1 */
    & > div:nth-child(3) {
      font-size: 1.4rem;
      font-weight: lighter;
    }
  }

  & > div:last-child {
    width: 50%;
    position: relative;
    
    & > img {
      border-radius: 30%;
      z-index: 1050;
      position: absolute;
      top: 2rem;
      right: 5rem;
      box-shadow: 0 0 0 .2rem rgba(255, 255, 255, .7), -1rem 0 0rem 0 rgba(83, 90, 95, .1);
    }
  }

`

export { StyledCarousel, Slider };
