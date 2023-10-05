import {
    getRoverPosition,
    changeRoverPosition,
    Directions,
} from './roverMars';

describe ('Test the current position of the rover', () => {
    it ('Given no command return "{x : 1, y : 1, facing: Directions.N}"', () => {
        //Given
        const noCommand = '';
        //When 
        const defaultState = getRoverPosition(noCommand);
        //Then
        expect(defaultState).toStrictEqual({x : 1, y : 1, facing: Directions.N});
    });

    it ('Given command "=>" receive return "{x : 1, y : 1, facing: Directions.E}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnRight = '=>';
        //When 
        const facingEast = changeRoverPosition(currentRoverPosition, turnRight);
        //Then
        expect(facingEast).toStrictEqual({x : 1, y : 1, facing: Directions.E});
    });

    it ('Given command "<=" receive return "{x : 1, y : 1, facing: Directions.W}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnLeft = '<=';
        //When 
        const facingWest = changeRoverPosition(currentRoverPosition, turnLeft);
        //Then
        expect(facingWest).toStrictEqual({x : 1, y : 1, facing: Directions.W});
    });
})

// [roverPosition, setRoverPosition] = useState([x : 1, y : 1]);