function Stadistics(props) {
  const {good, bad, neutral} = props
  const totalComments =  good + neutral + bad

  return ( 
    <div>

      <h2>Stadistics</h2>
        {
          totalComments !== 0 ?
          <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>

            <p>Total comments: {totalComments}</p>
            <p>Average: {(good - bad) / (good + neutral + bad)} </p>
            <p>Total Positive comments: { isNaN((good / (good + neutral + bad))) ? 0 : Math.round(good / (good + neutral + bad) * 100) } %</p>
          </>
          : <p>No feedback given</p>
        }
    </div>
   );
}

export default Stadistics;
