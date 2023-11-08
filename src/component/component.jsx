import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Map from '../objects/map';
import Rover from '../objects/rover';
import { 
  selectorCreateMap, 
  selectorCreateRover,
  selectorAngle,
  selectorObstacleList,
} from '../app/selector';
import { 
  createRoverAction,
  changeRoverPositionAction,
  getRoverAngleAction,
} from './actions/roverActions';
import {
  createMapAction,
  addNewObstacleAction,
  deleteObstacleAction,
} from './actions/mapActions';
import {Commands} from '../models/commands';
import roverMarsImg from '../image/roverMarsImg.png';
import mapMarsImg from '../image/mapMarsImg.png';
import obstacleMarsImg from '../image/obstacleMarsImg.png';
import upArrow from '../image/upArrow.png';
import downArrow from '../image/downArrow.png';
import rightArrow from '../image/rightArrow.png';
import leftArrow from '../image/leftArrow.png';
import '../App.css';

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

function Component() {

  const dispatch = useDispatch();

  const roverMars = useSelector(selectorCreateRover);
  const mapMars = new Map(4, 4);
  const angle = useSelector(selectorAngle);
  const obstacleList = useSelector(selectorObstacleList);
  const [currentObstacleLongitude, setCurrentObstacleLongitude] = useState('');
  const [currentObstacleLatitude, setCurrentObstacleLatitude] = useState('');
  

  useEffect(() => {
    dispatch(createRoverAction());
    dispatch(getRoverAngleAction(new Rover(1, 1, 'EAST')));
  }, []);

  const moveRover = useCallback((command) => {
    dispatch(changeRoverPositionAction(roverMars, [command], mapMars));
    dispatch(getRoverAngleAction(roverMars));
  }, [dispatch, mapMars, roverMars]);

  const addObstacle = useCallback(() => {
    dispatch(addNewObstacleAction(currentObstacleLongitude, currentObstacleLatitude, roverMars, mapMars, obstacleList));
  }, [roverMars, currentObstacleLongitude, currentObstacleLatitude, mapMars, obstacleList]);

  const deleteObstacle = useCallback((index) => {
    dispatch(deleteObstacleAction(obstacleList[index].longitude, obstacleList[index].latitude, obstacleList));
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
            <img alt='upArrow' src={upArrow} className='arrows' onClick={() => moveRover(Commands.FORWARD)}/>
          </div>
          <div>
            <img alt='leftArrow' src={leftArrow} className='arrows' onClick={() => moveRover(Commands.LEFT)}/>
            <img alt='downArrow' src={downArrow} className='arrows' onClick={() => moveRover(Commands.BACKWARD)}/>
            <img alt='rightArrow' src={rightArrow} className='arrows' onClick={() => moveRover(Commands.RIGHT)}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Component;
