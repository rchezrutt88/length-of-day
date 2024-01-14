import React from 'react';
import * as SunCalc from 'suncalc'
import { render, screen } from '@testing-library/react';
import App from './App';
import * as dateFns from 'date-fns'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('length of day difference', () =>  {
  const lat = 42.3601
  const lng = -71.057083
  const lengthOfToday = (() => {
    const {sunrise, sunset} = SunCalc.getTimes(new Date(), lat, lng)
    return sunset.getTime() - sunrise.getTime()
  })()
  const lengthOfYesterday = (() => {
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
    const {sunrise, sunset} = SunCalc.getTimes(yesterday, lat, lng)
    return sunset.getTime() - sunrise.getTime()
  })()
  const diff = Math.abs(lengthOfToday - lengthOfYesterday)
  const time = (() => {
    const dayWithOffset = dateFns.setMilliseconds(dateFns.startOfDay(new Date()), diff)
    return dateFns.formatISO9075(dayWithOffset, {representation: 'time'})
  })()
  expect(time).toEqual('')
})
