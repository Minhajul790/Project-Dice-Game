import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <div>
      <RulesContainer>
        <h1>How You Can Play This Game</h1>
        <p className="text">Select any number you want</p>
        <p>Click on the dice image</p>
        <p>
            after clicking on dice if selected number is equal to dice number you will get same point as dice{""}
        </p>
        <p>if your guess becomes wrong, then 2 points will be deducted</p>
      </RulesContainer>
    </div>
  )
}

export default Rules


const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
background-color: #fbf1f1;
padding: 20px;
border-radius: 10px;
h2{
    font-size: 24px;
}
.text{
    margin-top: 24px;
}
`