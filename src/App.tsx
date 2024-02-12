import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useTimeToSolstice } from './useTimeToSolstice'
import { useLengthOfDay } from './useLengthOfDay'
import {StatusBar} from "./statusBar";

function App () {
  const milliSecondsToSummerSolstice = useTimeToSolstice()
  const millisecondsFromWinterSolstice = (31556952000 / 2) -
    milliSecondsToSummerSolstice
  const percentageToSolstice = millisecondsFromWinterSolstice /
    (31556952000 / 2)
  const lengthOfDays = useLengthOfDay()
  return (
    <div className="App" style={{fontFamily: 'monospace'}}>
      <header className="App-header">
        <p>
          {(percentageToSolstice * 100).toPrecision(7)}% of the way
          <br/>
         from the winter solstice to the summer solstice
        </p>
        <StatusBar percent={percentageToSolstice}/>
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
