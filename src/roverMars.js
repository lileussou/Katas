export const Directions = {
    N : 'N',
    E : 'E',
    S : 'S',
    W : 'W',
}

export const Commands = {
    Left : '<=',
    Right : '=>',
    Forward : 'F',
    BackWard : 'B',
}

export const Latitude = [1, 2, 3, 4];
export const Longitude = [1, 2, 3, 4];

var Rover = {
    latitude: 1,
    longitude: 1,
    facing : Directions.N
};

export function getRoverPosition() {
    const rover = Rover;
    return rover;
};

export function changeRoverPosition(currentRoverPosition, commands) {
    const keys = Object.keys(Directions);
    for (let command of commands) {
        if (command === Commands.Left) {
            const currentPositionIndex = keys.indexOf(currentRoverPosition.facing);
            const newIndexPosition = currentPositionIndex === 0 ? keys.length -1 : currentPositionIndex -1;
            const newFacing = Directions[keys[newIndexPosition]];
            Rover.facing = newFacing;
        }
        if (command === Commands.Right) {
            const currentPositionIndex = keys.indexOf(currentRoverPosition.facing);
            const newIndexPosition = currentPositionIndex === 3 ? 0 : currentPositionIndex +1;
            const newFacing = Directions[keys[newIndexPosition]];
            Rover.facing = newFacing;
        }
        if (command === Commands.Forward) {
            switch (Rover.facing) {
                case Directions.N : 
                Rover.longitude = Rover.longitude + 1 ;
                break;
                case Directions.E : 
                Rover.latitude = Rover.latitude + 1 ;
                break;
                case Directions.S : 
                Rover.longitude = Rover.longitude - 1 ;
                break;
                case Directions.W : 
                Rover.latitude = Rover.latitude - 1 ;
                break;
            } 
        }
        if (command === Commands.BackWard) {
            switch (Rover.facing) {
                case Directions.N : 
                Rover.longitude = Rover.longitude - 1 ;
                break;
                case Directions.E : 
                Rover.latitude = Rover.latitude - 1 ;
                break;
                case Directions.S : 
                Rover.longitude = Rover.longitude + 1 ;
                break;
                case Directions.W : 
                Rover.latitude = Rover.latitude + 1 ;
                break;
            }
        }
        checkIfRoverMoveOutOfEdge();
    }
    return Rover
};

export function checkIfRoverMoveOutOfEdge() {
    if (Rover.longitude > Longitude.length) {
        Rover.longitude = 1 ;
    }
    if (Rover.latitude < 1) {
        Rover.latitude = 4;
    }
    if (Rover.longitude < 1) {
        Rover.longitude = 4;
    }
    if (Rover.latitude > Longitude.length) {
        Rover.latitude = 1 ;
    }
}