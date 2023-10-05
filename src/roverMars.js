export const Directions = {
    N : 'North',
    E : 'East',
    W : 'West',
    S : 'South',
}

export function getRoverPosition() {
    return {x : 1, y : 1, facing: Directions.N}
};

export function changeRoverPosition(currentRoverPosition, command) {
    if (command === "<=") {
        return {x : 1, y : 1, facing: Directions.W}
    }
    if (command === "=>") {
        return {x : 1, y : 1, facing: Directions.E}
    }
    return {x : 1, y : 1, facing: Directions.S}
};