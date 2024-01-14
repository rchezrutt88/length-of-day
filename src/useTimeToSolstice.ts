import { useEffect, useState } from 'react'

export const useTimeToSolstice = () => {
  const [millisecondsToSolstice, setMillisecondsToSolstice] = useState(timeToSolstice())
  useEffect(() => {
    const interval = setInterval(() => {
      setMillisecondsToSolstice(timeToSolstice())
    }, 100);
    return () => clearInterval(interval)
  }, [])
  return millisecondsToSolstice
}

const timeToSolstice = () => {
  const now = new Date()
  const solstice = new Date(2024, 5, 20, 20, 51)
  return solstice.getTime() - now.getTime()
}