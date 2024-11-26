import BtnRoundStyle from './BtnRound.style';

function BtnRound({ handleUp, handleDown }) {
  return (
    <BtnRoundStyle>
      <button onClick={handleUp} />
      <button onClick={handleDown} />
    </BtnRoundStyle>
  )
}

export default BtnRound