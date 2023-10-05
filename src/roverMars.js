export const Directions = {
    N : 'North',
    E : 'East',
    W : 'West',
    S : 'South',
}

export function getRoverPosition() {
    return {x : 1, y : 1, facing: Directions.N};
};