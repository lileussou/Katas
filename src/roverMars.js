export const Directions = {
    N : 'N',
    E : 'E',
    S : 'S',
    W : 'W',
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

export function changeRoverPosition(currentRoverPosition, command) {
    const keys = Object.keys(Directions);
    if (command === "<=") {
        const currentPositionIndex = keys.indexOf(currentRoverPosition.facing);
        const newIndexPosition = currentPositionIndex === 0 ? keys.length -1 : currentPositionIndex -1;
        const newFacing = Directions[keys[newIndexPosition]];
        Rover.facing = newFacing;
        return Rover;
    }
    if (command === "=>") {
        const currentPositionIndex = keys.indexOf(currentRoverPosition.facing);
        const newIndexPosition = currentPositionIndex === 3 ? 0 : currentPositionIndex +1;
        const newFacing = Directions[keys[newIndexPosition]];
        Rover.facing = newFacing;
        return Rover;
    }
    return {x : 1, y : 1, facing: Directions.S}
};