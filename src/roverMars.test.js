import {
    getRoverPosition,
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
        const turnLeft = '=>';
        //When 
        const facingEast = getRoverPosition(turnLeft);
        //Then
        expect(facingEast).toStrictEqual({x : 1, y : 1, facing: Directions.E});
    });
})

// [roverPosition, setRoverPosition] = useState([x : 1, y : 1]);