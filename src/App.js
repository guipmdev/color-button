import { useState } from 'react';
import './App.css';

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
        style={{backgroundColor: buttonColor}}
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
    </div>
  );
}

export default App;
