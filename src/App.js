import { useState } from 'react';

import Rover from './objects/rover';
import {Directions} from './models/directions';
import roverMarsImg from './image/roverMarsImg.png';
import './App.css';

function App() {

  const [roverMars, setRoverMars] = useState(new Rover(1, 1, Directions.N));

  return (
    <>
      <div>
      <div>
        <img alt='roverMarsImg' src={roverMarsImg} />
      </div>
      <div role='rover'>
        {JSON.stringify(roverMars)}
      </div>
      </div>
    </>
  );
}

export default App;
