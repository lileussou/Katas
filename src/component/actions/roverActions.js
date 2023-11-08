import {
    createRoverRepository,
    changeRoverPositionRepository,
    getRoverAngleRepository,
} from '../repository/roverRepository';
import {
    CREATE_ROVER,
    CHANGE_ROVER_POSITION,
    ROVER_ANGLE,
} from './constant';

const CREATE_ROVER_ACTION = (payload) => {
    return {
        type: CREATE_ROVER,
        payload: payload
    }
}

const CHANGE_ROVER_POSITION_ACTION = (payload) => {
    return {
        type: CHANGE_ROVER_POSITION,
        payload: payload
    }
}

const ROVER_ANGLE_ACTION = (payload) => {
    return {
        type: ROVER_ANGLE, 
        payload: payload
    }
}

export const createRoverAction = () => async dispatch => {
    try {
        const createRover = await createRoverRepository();
        dispatch(CREATE_ROVER_ACTION(createRover));
    } catch (e) {
        throw new Error('The rover could not be created');
    }
}

export const changeRoverPositionAction = (rover, commands, map) => async dispatch => {
    try {
        const changeRoverPosition = await changeRoverPositionRepository(rover, commands, map);
        dispatch(CHANGE_ROVER_POSITION_ACTION(changeRoverPosition));
    } catch (e) {
        throw new Error('The rover could not move');
    }
}

export const getRoverAngleAction = (rover) => async dispatch => {
    try {
        const getRoverAngle = await getRoverAngleRepository(rover);
        dispatch(ROVER_ANGLE_ACTION(getRoverAngle));
    } catch (e) {
        throw new Error('The rover could not change his angle');
    }
}