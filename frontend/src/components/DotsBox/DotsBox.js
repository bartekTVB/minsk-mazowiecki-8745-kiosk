import StyledDot from './DotsBox.style';

function DotsBox({ slickMax, slickActive, setSlickActive }) {
  const dots = [];

  if (slickMax > 1) {
    for (let i = 0; i < slickMax; i++) {
      dots.push(
        <StyledDot
          key={i}
          active={i === slickActive}
          onClick={setSlickActive.bind(null, i)}
        />
      );
    }
  }

  return <div>{dots}</div>
}

export default DotsBox;