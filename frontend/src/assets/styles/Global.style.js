import { createGlobalStyle } from 'styled-components';

// import RobotoCondensedLight from '../../assets/fonts/RobotoCondensed-Light.woff2';
import RobotoCondensedRegular from '../../assets/fonts/RobotoCondensed-Regular.woff2';
import RobotoCondensedBold from '../../assets/fonts/RobotoCondensed-Bold.woff2';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'RobotoCondensed';
    src: local('RobotoCondensed Regular'), local('RobotoCondensed-Regular'),
    url(${RobotoCondensedRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'RobotoCondensed';
    src: local('RobotoCondensed Bold'), local('RobotoCondensed-Bold'),
    url(${RobotoCondensedBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  html {
    font-size: .625rem;
    height: 100%;
    background-color: #ccc;
  }
  
  body {
    margin: 0 auto;
    width: 128rem;
    height: 102.4rem;
    overflow: hidden;
    font-family: 'RobotoCondensed', sans-serif;
  }

  * {
    box-sizing: border-box;
    user-select: none;
    user-drag: none;
  }

  a {
    text-decoration: none;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`

export default GlobalStyle;