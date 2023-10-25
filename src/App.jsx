import { useCallback, useState } from 'react';

import Rover from './objects/rover';
import Map from './objects/map';
import {
  changeRoverPosition,
  angleBasedOnDirection,
} from './controller/roverMars';
import {
  createObstacle
} from './controller/mapMars';
import {Directions} from './models/directions';
import {Commands} from './models/commands';
import roverMarsImg from './image/roverMarsImg.png';
import mapMarsImg from './image/mapMarsImg.png';
import obstacleMarsImg from './image/obstacleMarsImg.png';
import upArrow from './image/upArrow.png';
import downArrow from './image/downArrow.png';
import rightArrow from './image/rightArrow.png';
import leftArrow from './image/leftArrow.png';
import './App.css';

function currentCase(mapMarsLongitude, mapMarsLatitude, roverMars, obstacleMars, angle) {
  if (mapMarsLongitude === roverMars.longitude
    && mapMarsLatitude === roverMars.latitude) {
      return  <img alt='roverMarsImg' src={roverMarsImg} className='mapMarsImg' style={{ transform: `rotate(${angle}deg)`}} />;
  } else if (obstacleMars.find((element) => element.longitude == mapMarsLongitude 
    && element.latitude == mapMarsLatitude)) {
      return <img alt='obstacleMarsImg' src={obstacleMarsImg} className='mapMarsImg'/>;
  } else {
    return <img alt='mapMarsImg' src={mapMarsImg} className='mapMarsImg'/>;
  }
}

function App() {

  const mapMars = new Map(4,4);
  const [roverMars, setRoverMars] = useState(new Rover(1, 1, Directions.N));
  const [angle, setAngle] = useState(0);
  const [currentObstacleLongitude, setCurrentObstacleLongitude] = useState('');
  const [currentObstacleLatitude, setCurrentObstacleLatitude] = useState('');
  const [obstacleList, setObstacleList] = useState([]);
  
  const moveRover = useCallback((command) => {
    const currentRoverMars = new Rover(roverMars.longitude, roverMars.latitude, roverMars.facing);
    const newRover = changeRoverPosition(roverMars, [command]);
    if (obstacleList.find((element) => element.longitude == newRover.longitude 
      && element.latitude == newRover.latitude)) {
      setRoverMars(currentRoverMars);
      window.alert("Le rover ne peux avancer en raison d'un obstacle");
    } else {
      setRoverMars(new Rover(newRover.longitude, newRover.latitude, newRover.facing));
      setAngle(angleBasedOnDirection(newRover.facing));
    }
  }, [roverMars, obstacleList]);

  const addObstacle = useCallback(() => {
    const newObstacle = createObstacle(currentObstacleLongitude, currentObstacleLatitude, mapMars, roverMars);
    setObstacleList(obstacleList => [...obstacleList, {longitude: newObstacle.longitude, latitude: newObstacle.latitude}]);
  }, [obstacleList, currentObstacleLongitude, currentObstacleLatitude, mapMars]);

  const deleteObstacle = useCallback((index) => {
    const newObstacleList = obstacleList.toSpliced(index, 1);
    console.log(newObstacleList);
    setObstacleList(newObstacleList);
  }, [obstacleList]);

  return (
    <>
      <div>
        <div>
          <div className='parentDiv'>
            {mapMars.latitudeArray.map((latitudeElement, latitudeIndex) => (
              <div key = {latitudeIndex} className='latitude'> 
                {mapMars.longitudeArray.map((longitudeElement, longitudeIndex) => (
                  <div key = {`${longitudeIndex}, ${latitudeIndex}`} className='longitude' id= {`${longitudeIndex}, ${latitudeIndex}`}>
                    {currentCase(longitudeElement, latitudeElement, roverMars, obstacleList, angle)} 
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
        </div>
        <div>
          <label htmlFor="obstacleCoordinates">Longitude de l'obstacle:</label>
          <input type="number" id="obstacleLongitude" name="obstacleLongitude" min="1" max={`${mapMars.longitude}`} onChange={(e) => setCurrentObstacleLongitude(e.target.value)}/>

          <label htmlFor="obstacleCoordinates">Latitude de l'obstacle:</label>
          <input type="number" id="obstacleLatitude" name="obstacleLatitude" min="1" max={`${mapMars.latitude}`} onChange={(e) => setCurrentObstacleLatitude(e.target.value)}/>

          <input type="button" id="createObstacle" name="createObstacle" value="add" onClick={() => addObstacle()} />
        </div>
        <div>
          <ul>
            {obstacleList.map((obstacle, index) => (
              <li key = {`${obstacle} - ${index}`}>
                {JSON.stringify(obstacle)}
                <input type="button" id="deleteObstacle" name="deleteObstacle" value="x" onClick={() => deleteObstacle(index)} />
              </li>
            ))}
          </ul>
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
