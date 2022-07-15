
function Buttons(props){

  const { handleIncrementGood,handleIncrementNeutral, handleIncrementBad} = props
  return(
    <div>
      <div>
        <button onClick={handleIncrementGood}>Good</button>
        <button onClick={handleIncrementNeutral}>Neutral</button>
        <button onClick={handleIncrementBad}>Bad</button>
      </div>
    </div>
  )
}
export default Buttons
