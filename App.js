import React, { useState } from 'react'

const Statistic = (props) => {
  return(
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}
const Statistics = (props) => {
  if(props.total=== 0){
    return(
      <p>No Feedback Given</p>
    )
  }
  else{
    return(
        <div>
        <Statistic text="good" value ={props.good} />
        <Statistic text="neutral" value ={props.neutral} />
        <Statistic text="bad" value ={props.bad} />
        <Statistic text="all" value ={props.total} />
        <Statistic text="average" value ={(props.good-props.bad)/props.total} />
        <Statistic text="positive" value ={((props.good)/props.total) *100} />
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const handleGoodClick = ()  => {
    setGood(good +1)
    setTotal(total+1)
  }
  const handleNeutralClick = ()  => {
    setNeutral(neutral +1)
    setTotal(total+1)
  }
  const handleBadClick = ()  => {
    setBad(bad +1)
    setTotal(total+1)
  }
  

  return (
    <div>
    code here
    <h1>give feedback</h1>
      <div>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}> bad</button>
      
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} total={total}></Statistics>
    </div>
  )
}

export default App