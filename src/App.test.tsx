import React from 'react';
import * as SunCalc from 'suncalc'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('length of day difference', () =>  {
  const lat = 42.3601
  const lng = -71.057083
  const date = new Date()
  const lengthOfYesterday = SunCalc.getTimes(date.setDate(date.getDate() - 1), lat, lng)
expect(SunCalc.getTimes(new Date(), 51.5, -0.1)).toEqual(1)
})
