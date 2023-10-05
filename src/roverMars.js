export const Directions = {
    N : 'North',
    E : 'East',
    W : 'West',
    S : 'South',
}

export function getRoverPosition(command) {
    if (command === '=>') {
        return {x : 1, y : 1, facing: Directions.E};
    }
    return {x : 1, y : 1, facing: Directions.N};
};