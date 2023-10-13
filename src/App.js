import { useState } from 'react';

import Rover from './objects/rover';
import Map from './objects/map';
import {Directions} from './models/directions';
import roverMarsImg from './image/roverMarsImg.png';
import mapMarsImg from './image/mapMarsImg.png';
import './App.css';

function App() {

  const [roverMars, setRoverMars] = useState(new Rover(1, 1, Directions.N));
  const mapMars = new Map(4,4);
  return (
    <>
      <div>
        <div className='parentDiv'>
          {mapMars.longitudeArray.map((longitudeElement, longitudeIndex) => (
            <div key = {longitudeIndex} className='longitude'> 
              {mapMars.latitudeArray.map((latitudeElement, latitudeIndex) => (
                <div key = {`${longitudeIndex}, ${latitudeIndex}`} className='latitude'>
                    <img alt='mapMarsImg' src={mapMarsImg} className='mapMarsImg'/>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          <img alt='roverMarsImg' src={roverMarsImg} />
        </div>
        <div role='rover'>
          Position du Rover : {JSON.stringify(roverMars)}
        </div>
        <div role='marsMap'>
          Taille de la map : {JSON.stringify(mapMars)}
        </div>
      </div>
    </>
  );
}

export default App;
