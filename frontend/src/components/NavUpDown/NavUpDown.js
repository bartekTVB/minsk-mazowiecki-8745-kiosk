import StyledNavUpDown from './NavUpDown.style';

function NavUpDown({ onClickSlickUp, onClickSlickDown }) {
  return (
    <StyledNavUpDown>
      <div onClick={onClickSlickUp} />
      <div onClick={onClickSlickDown} />
    </StyledNavUpDown>
  )
}

export default NavUpDown;