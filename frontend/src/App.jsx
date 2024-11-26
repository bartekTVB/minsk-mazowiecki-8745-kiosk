import { useState, useEffect, useRef } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import Header from './components/Header/Header';
import GlobalStyle from './assets/styles/Global.style';
import theme from './assets/styles/Themes.style';
import Loader from './components/Loader/Loader';
import { Transition } from 'react-transition-group';
import FontFaceObserver from 'fontfaceobserver';
import imagesLoaded from 'imagesloaded';
import {
  StyledApp, transitionStyles, defaultStyle, duration, StyledImagesLoaded
} from './App.style';

export default function App({ config }) {
  const [breadcrumb, setBreadcrumb] = useState([]);
  const [loader, setLoader] = useState(true);
  const imageContainerRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const font = new FontFaceObserver('RobotoCondensed');
    const galleryElement = galleryRef.current;
    let count = 2;

    const checkImgsFontsLoaded = () => --count || setLoader(false);

    font.load()
      .then(() => checkImgsFontsLoaded())
      .catch(() => checkImgsFontsLoaded());

    const handleImagesLoaded = () => checkImgsFontsLoaded();

    const imagesLoadedInstance = imagesLoaded(galleryElement);
    imagesLoadedInstance.on('done', handleImagesLoaded);

    const disableLoaderOnPageShow = event => {
      if (event.persisted) setLoader(false);
    };

    window.addEventListener('pageshow', disableLoaderOnPageShow);

    return () => {
      window.removeEventListener('pageshow', disableLoaderOnPageShow);
      imagesLoadedInstance.off('done', handleImagesLoaded);
    };
  }, []);

  return (
    <StyledImagesLoaded ref={galleryRef}>
      <ThemeProvider theme={theme.light}>
        <HashRouter>
          <GlobalStyle />
          <StyledApp ref={imageContainerRef}>
            <Header
              config={config}
              breadcrumb={breadcrumb}
              setLoader={setLoader}
            />
            <AnimatedRoutes
              config={config}
              setBreadcrumb={setBreadcrumb}
              setLoader={setLoader}
            />
          </StyledApp>
        </HashRouter>
        <Transition
          in={loader}
          timeout={duration}
          unmountOnExit={true}
        >
          {
            state => (
              <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}>
                <Loader />
              </div>
            )
          }
        </Transition>
      </ThemeProvider>
    </StyledImagesLoaded>
  )
}