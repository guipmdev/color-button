import { fireEvent, render, screen } from '@testing-library/react'
import { App, replaceCamelWithSpaces } from './App'

test('button has correct initial color, and updates when clicked', () => {
  render(<App />)

  // find an element with a role of button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  })

  // expect the background color to be Medium Violet Red
  expect(colorButton).toHaveStyle({ 'background-color': 'MediumVioletRed' })

  // click button
  fireEvent.click(colorButton)

  // expect the background color to be Midnight Blue
  expect(colorButton).toHaveStyle({ 'background-color': 'MidnightBlue' })

  // expect the button text to be 'Change to Medium Violet Red'
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red')
})

test('initial conditions', () => {
  render(<App />)

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  })
  expect(colorButton).toBeEnabled()

  // check that the checkbox out unchecked
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  expect(checkbox).not.toBeChecked()
})

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  // disable button
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()

  // re-enable button
  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})

test('disabled button has gray background and reverts to Medium Violet Red', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  // disable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ 'background-color': 'gray' })

  // re-enable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ 'background-color': 'MediumVioletRed' })
})

test('clicked disabled button has gray background and reverts to Midnight Blue', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  // change button to Midnight Blue
  fireEvent.click(colorButton)

  // disable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ 'background-color': 'gray' })

  // re-enable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ 'background-color': 'MidnightBlue' })
})

describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letter', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })

  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})
