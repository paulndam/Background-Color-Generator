import './App.css';
import Color from './component/Color';
import ColorDisplay from './component/ColorDisplay';
import React, {useState} from 'react';

function App () {
  const [currentColor, setcurrentColor] = useState ('');

  const choosingColor = newColor => {
    setcurrentColor (newColor);
  };

  return (
    <div className="App">
      <Color newColor={choosingColor} />
      <ColorDisplay theColor={currentColor} />

    </div>
  );
}

export default App;
