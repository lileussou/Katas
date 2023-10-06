import {
    getRoverPosition,
    changeRoverPosition,
    Directions,
    Commands,
} from './roverMars';

describe ('Test the current position of the rover', () => {
    it ('Given no command return "{x : 1, y : 1, facing: Directions.N}"', () => {
        //Given
        const noCommand = [''];
        //When 
        const defaultState = getRoverPosition(noCommand);
        //Then
        expect(defaultState).toStrictEqual({x : 1, y : 1, facing: Directions.N});
    });

    it ('Given command "=>" receive return "{x : 1, y : 1, facing: Directions.E}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnRight = [Commands.Right];
        //When 
        const facingEast = changeRoverPosition(currentRoverPosition, turnRight);
        //Then
        expect(facingEast).toStrictEqual({x : 1, y : 1, facing: Directions.E});
    });

    it ('Given command "<=" receive return "{x : 1, y : 1, facing: Directions.N}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnLeft = [Commands.Left];
        //When 
        const facingNorth = changeRoverPosition(currentRoverPosition, turnLeft);
        //Then
        expect(facingNorth).toStrictEqual({x : 1, y : 1, facing: Directions.N});
    });

    it ('Given command "["<=", "<="]" receive return "{x : 1, y : 1, facing: Directions.S}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnLeftTwice = [Commands.Left, Commands.Left];
        //When 
        const facingSouth = changeRoverPosition(currentRoverPosition, turnLeftTwice);
        //Then
        expect(facingSouth).toStrictEqual({x : 1, y : 1, facing: Directions.S});
    });

    it ('Given command "["<=", "=>", "=>", "=>"]" receive return "{x : 1, y : 1, facing: Directions.N}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnLeftOnceAndRightTwice = [Commands.Left, Commands.Right, Commands.Right, Commands.Right];
        //When 
        const facingNorth = changeRoverPosition(currentRoverPosition, turnLeftOnceAndRightTwice);
        //Then
        expect(facingNorth).toStrictEqual({x : 1, y : 1, facing: Directions.N});
    });

    it ('Given command "["F"]" receive return "{x : 1, y : 2, facing: Directions.N}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveForward = [Commands.Forward];
        //When 
        const facingNorthForward = changeRoverPosition(currentRoverPosition, moveForward);
        //Then
        expect(facingNorthForward).toStrictEqual({x : 1, y : 2, facing: Directions.N});
    });

    it ('Given command "["B"]" receive return "{x : 1, y : 1, facing: Directions.N}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveBackward = [Commands.BackWard];
        //When 
        const facingNorthBackward = changeRoverPosition(currentRoverPosition, moveBackward);
        //Then
        expect(facingNorthBackward).toStrictEqual({x : 1, y : 1, facing: Directions.N});
    }); 

    
    it ('Given command "["F", "F", "=>" , "F", "=>", "B"]" receive return "{x : 2, y : 4, facing: Directions.S}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveToTwoFourFacingSouth= [Commands.Forward, Commands.Forward,Commands.Right, Commands.Forward, Commands.Right, Commands.BackWard];
        //When 
        const facingSouthAtTwoFour = changeRoverPosition(currentRoverPosition, moveToTwoFourFacingSouth);
        //Then
        expect(facingSouthAtTwoFour).toStrictEqual({x : 2, y : 4, facing: Directions.S});
    });
})

// [roverPosition, setRoverPosition] = useState([x : 1, y : 1]);,