import {
    getRoverPosition,
    changeRoverPosition,
    Directions,
    Commands,
    Latitude,
    Longitude,
} from './roverMars';

describe ('Test the current position of the rover', () => {
    it ('Given no command return "{latitude : 1, longitude : 1, facing: N}"', () => {
        //Given
        const noCommand = [''];
        //When 
        const defaultState = getRoverPosition(noCommand);
        //Then
        expect(defaultState).toStrictEqual({latitude : Latitude.One, longitude : Longitude.One, facing: Directions.N});
    });

    it ('Given command "=>" receive return "{latitude : 1, longitude : 1, facing: E}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnRight = [Commands.Right];
        //When 
        const facingEast = changeRoverPosition(currentRoverPosition, turnRight);
        //Then
        expect(facingEast).toStrictEqual({latitude : Latitude.One, longitude : Longitude.One, facing: Directions.E});
    });

    it ('Given command "<=" receive return "{latitude : 1, longitude : 1, facing: N}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnLeft = [Commands.Left];
        //When 
        const facingNorth = changeRoverPosition(currentRoverPosition, turnLeft);
        //Then
        expect(facingNorth).toStrictEqual({latitude : Latitude.One, longitude : Longitude.One, facing: Directions.N});
    });

    it ('Given command "["<=", "<="]" receive return "{latitude : 1, longitude : 1, facing: S}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnLeftTwice = [Commands.Left, Commands.Left];
        //When 
        const facingSouth = changeRoverPosition(currentRoverPosition, turnLeftTwice);
        //Then
        expect(facingSouth).toStrictEqual({latitude : Latitude.One, longitude : Longitude.One, facing: Directions.S});
    });

    it ('Given command "["<=", "=>", "=>", "=>"]" receive return "{latitude : 1, longitude : 1, facing: N}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const turnLeftOnceAndRightTwice = [Commands.Left, Commands.Right, Commands.Right, Commands.Right];
        //When 
        const facingNorth = changeRoverPosition(currentRoverPosition, turnLeftOnceAndRightTwice);
        //Then
        expect(facingNorth).toStrictEqual({latitude : Latitude.One, longitude : Longitude.One, facing: Directions.N});
    });

    it ('Given command "["F"]" receive return "{latitude : 1, longitude : 2, facing: N}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveForward = [Commands.Forward];
        //When 
        const facingNorthForward = changeRoverPosition(currentRoverPosition, moveForward);
        //Then
        expect(facingNorthForward).toStrictEqual({latitude : Latitude.One, longitude : Longitude.Two, facing: Directions.N});
    });

    it ('Given command "["B"]" receive return "{latitude : 1, longitude : 1, facing: N}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveBackward = [Commands.BackWard];
        //When 
        const facingNorthBackward = changeRoverPosition(currentRoverPosition, moveBackward);
        //Then
        expect(facingNorthBackward).toStrictEqual({latitude : Latitude.One, longitude : Longitude.One, facing: Directions.N});
    }); 

    
    it ('Given command "["F", "F", "=>" , "F", "=>", "B"]" receive return "{latitude : 2, longitude : 4, facing: S}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveToTwoFourFacingSouth= [Commands.Forward, Commands.Forward,Commands.Right, Commands.Forward, Commands.Right, Commands.BackWard];
        //When 
        const facingSouthAtTwoFour = changeRoverPosition(currentRoverPosition, moveToTwoFourFacingSouth);
        //Then
        expect(facingSouthAtTwoFour).toStrictEqual({latitude : Latitude.Two, longitude : Longitude.Four, facing: Directions.S});
    }); 

    it ('Given command "["B"]" receive return "{latitude : 2, longitude : 1, facing: S}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveToTwoOneFacingSouth= [Commands.BackWard];
        //When 
        const facingSouthAtTwoOne = changeRoverPosition(currentRoverPosition, moveToTwoOneFacingSouth);
        //Then
        expect(facingSouthAtTwoOne).toStrictEqual({latitude : Latitude.Two, longitude : Longitude.One, facing: Directions.S});
    });

    it ('Given command "["=>", "F", "F"]" receive return "{latitude : 4, longitude : 1, facing: W}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveToFourOneFacingWest= [Commands.Right, Commands.Forward, Commands.Forward];
        //When 
        const facingWestAtFourOne = changeRoverPosition(currentRoverPosition, moveToFourOneFacingWest);
        //Then
        expect(facingWestAtFourOne).toStrictEqual({latitude : Latitude.Four, longitude : Longitude.One, facing: Directions.W});
    });

    it ('Given command "["<=", "F"]" receive return "{latitude : 4, longitude : 4, facing: S}"', () => {
        //Given
        const currentRoverPosition = getRoverPosition();
        const moveToFourFourFacingSouth= [Commands.Left, Commands.Forward];
        //When 
        const facingSouthAtFourFour = changeRoverPosition(currentRoverPosition, moveToFourFourFacingSouth);
        //Then
        expect(facingSouthAtFourFour).toStrictEqual({latitude : Latitude.Four, longitude : Longitude.Four, facing: Directions.S});
    });  
})