import {
    getRoverPosition,
    Directions,
} from './roverMars';

describe ('Test the current position of the rover', () => {
    it ('Given no command receive return "{x : 1, y : 1, facing: Directions.N}"', () => {
        //Given
        const noCommand = '';
        //When 
        const defaultState = getRoverPosition(noCommand);
        //Then
        expect(defaultState).toStrictEqual({x : 1, y : 1, facing: Directions.N});
    });
})

// [roverPosition, setRoverPosition] = useState([x : 1, y : 1]);