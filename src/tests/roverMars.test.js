import {
    getRoverPosition,
    changeRoverPosition,
} from '../controller/roverMars';
import Rover from '../objects/rover';
import {Directions} from '../models/directions';
import {Commands} from '../models/commands';

describe ('Test the current position of the rover', () => {
    it ('Given no command return "{latitude : 1, longitude : 1, facing: N}"', () => {
        //Given
        const noCommand = [''];
        const expectedRover = new Rover(1,1,Directions.N);
        //When 
        const defaultState = getRoverPosition(noCommand);
        //Then
        expect(defaultState).toMatchObject(expectedRover);
    });

    it ('Given command "=>" receive return "{latitude : 1, longitude : 1, facing: E}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnRight = [Commands.Right];
        const expectedRover = new Rover(1,1,Directions.E);
        //When 
        const facingEast = changeRoverPosition(currentRoverPosition, turnRight);
        //Then
        expect(facingEast).toStrictEqual(expectedRover);
    });

    it ('Given command "<=" receive return "{latitude : 1, longitude : 1, facing: N}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnLeft = [Commands.Left];
        const expectedRover = new Rover(1,1,Directions.N);
        //When 
        const facingNorth = changeRoverPosition(currentRoverPosition, turnLeft);
        //Then
        expect(facingNorth).toStrictEqual(expectedRover);
    });

    it ('Given command "["<=", "<="]" receive return "{latitude : 1, longitude : 1, facing: S}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnLeftTwice = [Commands.Left, Commands.Left];
        const expectedRover = new Rover(1,1,Directions.S);
        //When 
        const facingSouth = changeRoverPosition(currentRoverPosition, turnLeftTwice);
        //Then
        expect(facingSouth).toStrictEqual(expectedRover);
    });

    it ('Given command "["<=", "=>", "=>", "=>"]" receive return "{latitude : 1, longitude : 1, facing: N}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnLeftOnceAndRightTwice = [Commands.Left, Commands.Right, Commands.Right, Commands.Right];
        const expectedRover = new Rover(1,1,Directions.N);
        //When 
        const facingNorth = changeRoverPosition(currentRoverPosition, turnLeftOnceAndRightTwice);
        //Then
        expect(facingNorth).toStrictEqual(expectedRover);
    });

    it ('Given command "["F"]" receive return "{latitude : 1, longitude : 2, facing: N}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveForward = [Commands.Forward];
        const expectedRover = new Rover(1,2,Directions.N);
        //When 
        const facingNorthForward = changeRoverPosition(currentRoverPosition, moveForward);
        //Then
        expect(facingNorthForward).toStrictEqual(expectedRover);
    });

    it ('Given command "["B"]" receive return "{latitude : 1, longitude : 1, facing: N}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveBackward = [Commands.BackWard];
        const expectedRover = new Rover(1,1,Directions.N);
        //When 
        const facingNorthBackward = changeRoverPosition(currentRoverPosition, moveBackward);
        //Then
        expect(facingNorthBackward).toStrictEqual(expectedRover);
    }); 

    
    it ('Given command "["F", "F", "=>" , "F", "=>", "B"]" receive return "{latitude : 2, longitude : 4, facing: S}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveToTwoFourFacingSouth= [Commands.Forward, Commands.Forward,Commands.Right, Commands.Forward, Commands.Right, Commands.BackWard];
        const expectedRover = new Rover(2,4,Directions.S);
        //When 
        const facingSouthAtTwoFour = changeRoverPosition(currentRoverPosition, moveToTwoFourFacingSouth);
        //Then
        expect(facingSouthAtTwoFour).toStrictEqual(expectedRover);
    }); 

    it ('Given command "["B"]" receive return "{latitude : 2, longitude : 1, facing: S}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveToTwoOneFacingSouth= [Commands.BackWard];
        const expectedRover = new Rover(2,1,Directions.S);
        //When 
        const facingSouthAtTwoOne = changeRoverPosition(currentRoverPosition, moveToTwoOneFacingSouth);
        //Then
        expect(facingSouthAtTwoOne).toStrictEqual(expectedRover);
    });

    it ('Given command "["=>", "F", "F"]" receive return "{latitude : 4, longitude : 1, facing: W}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveToFourOneFacingWest= [Commands.Right, Commands.Forward, Commands.Forward];
        const expectedRover = new Rover(4,1,Directions.W);
        //When 
        const facingWestAtFourOne = changeRoverPosition(currentRoverPosition, moveToFourOneFacingWest);
        //Then
        expect(facingWestAtFourOne).toStrictEqual(expectedRover);
    });

    it ('Given command "["<=", "F"]" receive return "{latitude : 4, longitude : 4, facing: S}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveToFourFourFacingSouth= [Commands.Left, Commands.Forward];
        const expectedRover = new Rover(4,4,Directions.S);
        //When 
        const facingSouthAtFourFour = changeRoverPosition(currentRoverPosition, moveToFourFourFacingSouth);
        //Then
        expect(facingSouthAtFourFour).toStrictEqual(expectedRover);
    });

    it ('Given command "["<=", "F"]" receive return "{latitude : 1, longitude : 4, facing: E}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveToOneFourFacingEast= [Commands.Left, Commands.Forward];
        const expectedRover = new Rover(1,4,Directions.E);
        //When 
        const facingEastAtOneFour = changeRoverPosition(currentRoverPosition, moveToOneFourFacingEast);
        //Then
        expect(facingEastAtOneFour).toStrictEqual(expectedRover);
    });
})