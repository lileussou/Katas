import Rover from './objects/rover';
import {Directions} from './models/Directions';
import {Commands} from './models/commands';
import {Longitude, Latitude} from './models/map';

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
            roverPrototype.facing = newFacing;
        }
        if (command === Commands.Right) {
            const currentPositionIndex = keys.indexOf(currentRoverPosition.facing);
            const newIndexPosition = currentPositionIndex === 3 ? 0 : currentPositionIndex +1;
            const newFacing = Directions[keys[newIndexPosition]];
            roverPrototype.facing = newFacing;
        }
        if (command === Commands.Forward) {
            switch (roverPrototype.facing) {
                case Directions.N : 
                roverPrototype.longitude = roverPrototype.longitude + 1 ;
                break;
                case Directions.E : 
                roverPrototype.latitude = roverPrototype.latitude + 1 ;
                break;
                case Directions.S : 
                roverPrototype.longitude = roverPrototype.longitude - 1 ;
                break;
                case Directions.W : 
                roverPrototype.latitude = roverPrototype.latitude - 1 ;
                break;
            } 
        }
        if (command === Commands.BackWard) {
            switch (roverPrototype.facing) {
                case Directions.N : 
                roverPrototype.longitude = roverPrototype.longitude - 1 ;
                break;
                case Directions.E : 
                roverPrototype.latitude = roverPrototype.latitude - 1 ;
                break;
                case Directions.S : 
                roverPrototype.longitude = roverPrototype.longitude + 1 ;
                break;
                case Directions.W : 
                roverPrototype.latitude = roverPrototype.latitude + 1 ;
                break;
            }
        }
        checkIfRoverMoveOutOfEdge();
    }
    return roverPrototype
};

export function checkIfRoverMoveOutOfEdge() {
    if (roverPrototype.longitude > Longitude.length) {
        roverPrototype.longitude = 1 ;
    }
    if (roverPrototype.latitude < 1) {
        roverPrototype.latitude = 4;
    }
    if (roverPrototype.longitude < 1) {
        roverPrototype.longitude = 4;
    }
    if (roverPrototype.latitude > Latitude.length) {
        roverPrototype.latitude = 1 ;
    }
}