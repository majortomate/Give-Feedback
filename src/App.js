import { useState } from 'react';
import './App.css';
import Stadistics from './components/Stadistics';
import Buttons from './components/Buttons';

function App() {

const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const handleIncrementGood = () =>{
 setGood(good + 1)
}
const handleIncrementNeutral = () =>{
  setNeutral(neutral + 1)
 }
 const handleIncrementBad = () =>{
  setBad(bad + 1)
 }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Give feedback</h1>
      <Buttons handleIncrementGood={handleIncrementGood} handleIncrementNeutral={handleIncrementNeutral} handleIncrementBad={handleIncrementBad}/> 
      <Stadistics good={good} neutral={neutral} bad={bad}/>
      </header>
    </div>
  );
}

export default App;
