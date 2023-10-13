import { useState } from 'react';

import Rover from './objects/rover';
import Map from './objects/map';
import {Directions} from './models/directions';
import roverMarsImg from './image/roverMarsImg.png';
import './App.css';

function App() {

  const [roverMars, setRoverMars] = useState(new Rover(1, 1, Directions.N));
  const mapMars = new Map(4,4);

  return (
    <>
      <div>
      <div>
        <img alt='roverMarsImg' src={roverMarsImg} />
      </div>
      <div role='rover'>
        {JSON.stringify(roverMars)}
      </div>
      <div role='marsMap'>
        {JSON.stringify(mapMars)}
      </div>
      </div>
    </>
  );
}

export default App;
