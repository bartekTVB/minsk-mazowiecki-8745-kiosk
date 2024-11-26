import StyledLoader from './Loader.style';

function Loader({ position }) {
  return (
    <StyledLoader $position={position}>
      <div>
        <div />
        <div />
      </div>
    </StyledLoader>
  )
}

export default Loader