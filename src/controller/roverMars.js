import Rover from '../objects/rover';
import {Directions} from '../models/directions';
import {Commands} from '../models/commands';
import {Longitude, Latitude} from '../models/map';

const roverPrototype = new Rover(1, 1, Directions.N);

export function getRoverPosition() {
    return roverPrototype;
};

export function changeRoverPosition(currentRoverPosition, commands) {
    const keys = Object.keys(Directions);
    for (let command of commands) {
        if (command === Commands.Left) {
            const currentPositionIndex = keys.indexOf(currentRoverPosition.facing);
            const newIndexPosition = currentPositionIndex === 0 ? keys.length -1 : currentPositionIndex -1;
            const newFacing = Directions[keys[newIndexPosition]];
            currentRoverPosition.facing = newFacing;
        }
        if (command === Commands.Right) {
            const currentPositionIndex = keys.indexOf(currentRoverPosition.facing);
            const newIndexPosition = currentPositionIndex === 3 ? 0 : currentPositionIndex +1;
            const newFacing = Directions[keys[newIndexPosition]];
            currentRoverPosition.facing = newFacing;
        }
        if (command === Commands.Forward) {
            switch (currentRoverPosition.facing) {
                case Directions.N : 
                currentRoverPosition.latitude = currentRoverPosition.latitude + 1 ;
                break;
                case Directions.E : 
                currentRoverPosition.longitude = currentRoverPosition.longitude + 1 ;
                break;
                case Directions.S : 
                currentRoverPosition.latitude = currentRoverPosition.latitude - 1 ;
                break;
                default :
                currentRoverPosition.longitude = currentRoverPosition.longitude - 1 ;
                break;
            } 
        }
        if (command === Commands.BackWard) {
            switch (currentRoverPosition.facing) {
                case Directions.N : 
                currentRoverPosition.latitude = currentRoverPosition.latitude - 1 ;
                break;
                case Directions.E : 
                currentRoverPosition.longitude = currentRoverPosition.longitude - 1 ;
                break;
                case Directions.S : 
                currentRoverPosition.latitude = currentRoverPosition.latitude + 1 ;
                break;
                default :
                currentRoverPosition.longitude = currentRoverPosition.longitude + 1 ;
                break;
            }
        }
        checkIfRoverMoveOutOfEdge(currentRoverPosition);
    }
    return currentRoverPosition
};

export function checkIfRoverMoveOutOfEdge(currentRoverPosition) {
    if (currentRoverPosition.longitude > Longitude.length) {
        currentRoverPosition.longitude = 1 ;
    }
    if (currentRoverPosition.latitude < 1) {
        currentRoverPosition.latitude = 4;
    }
    if (currentRoverPosition.longitude < 1) {
        currentRoverPosition.longitude = 4;
    }
    if (currentRoverPosition.latitude > Latitude.length) {
        currentRoverPosition.latitude = 1 ;
    }
}

export function angleBasedOnDirection(currentFacing) {
    let roverAngle = 0;
    switch (currentFacing) {
        case 'E' :
            roverAngle = 90;
            break;
        case 'S' : 
            roverAngle = 180;
            break;
        case 'W' : 
            roverAngle = 270;
            break;
        default :
            roverAngle = 0;
            break;
    } 
    return roverAngle;
}