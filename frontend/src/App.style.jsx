import styled from "styled-components";

const duration = 300;

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20rem 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.white};
`;

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const StyledImagesLoaded = styled.div`
  width: 100%;
  height: 100%;
`;

export {
  StyledApp,
  transitionStyles,
  defaultStyle,
  duration,
  StyledImagesLoaded
};