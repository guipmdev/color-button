import { useState } from 'react'

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const [disabled, setDisabled] = useState(false)

  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'

  function handleChangeButtonColor() {
    setButtonColor(newButtonColor)
  }

  function handleChangeButtonStatus(event) {
    setDisabled(event.currentTarget.checked)
  }

  return (
    <div className='App'>
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        disabled={disabled}
        onClick={handleChangeButtonColor}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>

      <input
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={disabled}
        onChange={handleChangeButtonStatus}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  )
}

export default App
