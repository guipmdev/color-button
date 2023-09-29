import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const [disabled, setDisabled] = useState(false)

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  function handleChangeButtonColor() {
    setButtonColor(newButtonColor)
  }

  function handleChangeButtonStatus(event) {
    setDisabled(event.currentTarget.checked)
  }

  return (
    <div>
      <button
        style={{backgroundColor: disabled ? 'gray' : buttonColor}}
        disabled={disabled}
        onClick={handleChangeButtonColor}
      >
        Change to {newButtonColor}
      </button>

      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={handleChangeButtonStatus}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
