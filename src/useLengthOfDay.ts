import SunCalc from 'suncalc'
import * as dateFns from 'date-fns'

export const useLengthOfDay = () => {
  const lengthOfYesterday = calcLengthOfDay(new Date(Date.now() - 86400000))
  const lengthOfDay = calcLengthOfDay(new Date())
  const lengthOfTomorrow = calcLengthOfDay(new Date(Date.now() + 86400000))
  return {
    diffFromYesterday: formatDuration(lengthOfDay - lengthOfYesterday),
    diffFromTomorrow: formatDuration(lengthOfTomorrow - lengthOfDay),
  }
}
const calcLengthOfDay = (date: Date) => {
  const lat = 42.3601
  const lng = -71.057083
  const { sunrise, sunset } = SunCalc.getTimes(date, lat, lng)
  return sunset.getTime() - sunrise.getTime()
}

const formatDuration = (duration: number) => {
  const date = dateFns.setMilliseconds(dateFns.startOfDay(new Date()), duration)
  return dateFns.formatISO9075(date, { representation: 'time' })
}