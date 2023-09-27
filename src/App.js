import React, {useCallback, useState} from 'react';
import './App.css';
import convert from './romanNumerals';

function App() {

  const [constCurrentRomanLetter, setCurrentRomanLetter] = useState();

  const handleOnChange = useCallback((e) => {
    setCurrentRomanLetter(convert(e));
  }, []);

  return (
    <div>
      <header>
        <div>
          <label>Enter Modern Letter : <input type="text" name="modernLetter" onChange={e => handleOnChange(e.target.value)} /></label> 
        </div>

        <div>
          <label>Return Roman Letter : {constCurrentRomanLetter}</label> 
        </div>
      </header>
    </div>
  );
}

export default App;
