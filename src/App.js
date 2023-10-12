import { useState } from 'react';

import Rover from './objects/rover';
import {Directions} from './models/directions';
import './App.css';

function App() {

  const [roverMars, setRoverMars] = useState(new Rover(1, 1, Directions.N));

  return (
    <>
      <div>
        <h1>{JSON.stringify(roverMars)}</h1>
      </div>
    </>
  );
}

export default App;
