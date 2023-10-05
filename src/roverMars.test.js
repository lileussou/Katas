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

    it ('Given command "<=" receive return "{x : 1, y : 1, facing: Directions.N}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnLeft = '<=';
        //When 
        const facingNorth = changeRoverPosition(currentRoverPosition, turnLeft);
        //Then
        expect(facingNorth).toStrictEqual({x : 1, y : 1, facing: Directions.N});
    });

    it ('Given command "["<=", "<="]" receive return "{x : 1, y : 1, facing: Directions.S}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnLeftTwice = ['<=', '<='];
        //When 
        const facingSouth = changeRoverPosition(currentRoverPosition, turnLeftTwice);
        //Then
        expect(facingSouth).toStrictEqual({x : 1, y : 1, facing: Directions.S});
    });
})

// [roverPosition, setRoverPosition] = useState([x : 1, y : 1]);