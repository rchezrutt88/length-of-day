import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useTimeToSolstice } from './useTimeToSolstice'
import { useLengthOfDay } from './useLengthOfDay'

function App () {
  const milliSecondsToSummerSolstice = useTimeToSolstice()
  const millisecondsFromWinterSolstice = (31556952000 / 2) -
    milliSecondsToSummerSolstice
  const percentageToSolstice = millisecondsFromWinterSolstice /
    (31556952000 / 2)

  const lengthOfDays = useLengthOfDay()
  return (
    <div className="App">
      <header className="App-header">
        <p style={{fontFamily: 'monospace'}}>
          {percentageToSolstice.toPrecision(10)}
        </p>
        <p>
          Today is {lengthOfDays.diffFromYesterday} longer than yesterday
        </p>
        <p>
          Tomorrow will be {lengthOfDays.diffFromTomorrow} longer than today
        </p>
      </header>
    </div>
  )
}

export default App
