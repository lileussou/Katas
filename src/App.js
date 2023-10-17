import { useCallback, useState, useEffect } from 'react';

import Rover from './objects/rover';
import Map from './objects/map';
import {changeRoverPosition} from './controller/roverMars';
import {Directions} from './models/directions';
import {Commands} from './models/commands';
import roverMarsImg from './image/roverMarsImg.png';
import mapMarsImg from './image/mapMarsImg.png';
import upArrow from './image/upArrow.png';
import downArrow from './image/downArrow.png';
import rightArrow from './image/rightArrow.png';
import leftArrow from './image/leftArrow.png';
import './App.css';

function App() {

  const mapMars = new Map(4,4);
  const [roverMars, setRoverMars] = useState(new Rover(1, 1, Directions.N));
  
  const moveRover = useCallback((command) => {
    const newRover = changeRoverPosition(roverMars, [command]);
    setRoverMars(new Rover(newRover.longitude, newRover.latitude, newRover.facing));
  }, [roverMars]);

  return (
    <>
      <div>
        <div className='parentDiv'>
          {mapMars.latitudeArray.map((latitudeElement, latitudeIndex) => (
            <div key = {latitudeIndex} className='latitude'> 
              {mapMars.longitudeArray.map((longitudeElement, longitudeIndex) => (
                <div key = {`${longitudeIndex}, ${latitudeIndex}`} className='longitude' id= {`${longitudeIndex}, ${latitudeIndex}`}>
                  {longitudeElement === roverMars.longitude
                    && latitudeElement === roverMars.latitude ?
                      <img alt='roverMarsImg' src={roverMarsImg} className='mapMarsImg'/>
                      :
                      <img alt='mapMarsImg' src={mapMarsImg} className='mapMarsImg'/>
                  } 
                </div>
              ))}
            </div>
          ))}
        </div>
        <div role='rover'>
          Position du Rover : {JSON.stringify(roverMars)}
        </div>
        <div role='marsMap'>
          Taille de la map : {JSON.stringify(mapMars.onlyCoordinates)}
        </div>
        <div className='arrowDiv'>
          <div>
            <img alt='upArrow' src={upArrow} className='arrows' onClick={() => moveRover(Commands.Forward)}/>
          </div>
          <div>
            <img alt='leftArrow' src={leftArrow} className='arrows' onClick={() => moveRover(Commands.Left)}/>
            <img alt='downArrow' src={downArrow} className='arrows' onClick={() => moveRover(Commands.BackWard)}/>
            <img alt='rightArrow' src={rightArrow} className='arrows' onClick={() => moveRover(Commands.Right)}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
