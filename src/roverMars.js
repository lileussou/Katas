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

// class Rover {
//     constructor(x, y, facing) {
//         this.x = 1;
//         this.y = 1;
//         this.facing = Directions.N;
//     }
// }

var Rover = {
    x: 1,
    y: 1,
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
                Rover.y = Rover.y + 1;
                break;
                case Directions.E : 
                Rover.x = Rover.x + 1;
                break;
                case Directions.S : 
                Rover.y = Rover.y - 1;
                break;
                case Directions.W : 
                Rover.x = Rover.x - 1;
                break;
            } 
        }
        if (command === Commands.BackWard) {
            switch (Rover.facing) {
                case Directions.N : 
                Rover.y = Rover.y - 1;
                break;
                case Directions.E : 
                Rover.x = Rover.x - 1;
                break;
                case Directions.S : 
                Rover.y = Rover.y + 1;
                break;
                case Directions.W : 
                Rover.x = Rover.x + 1;
                break;
            }
        }
    }
    return Rover
};