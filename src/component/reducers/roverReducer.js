import {
    CHANGE_ROVER_POSITION,
    CREATE_ROVER,
    ROVER_ANGLE,
} from '../actions/constant';

export const roverReducer = (state = [], action) => {
    switch (action.type) {  
        case CREATE_ROVER :
            return {
                ...state,
                longitude: action.payload.Longitude,
                latitude: action.payload.Latitude,
                facing: action.payload.Facing,
            }
        case CHANGE_ROVER_POSITION : 
            return {
                ...state,
                longitude: action.payload.Longitude,
                latitude: action.payload.Latitude,
                facing: action.payload.Facing,
            }
        default:
            return state;
    }
}

export const angleReducer = (state = [], action) => {
    switch (action.type) {
        case ROVER_ANGLE: 
        return {
            ...state,
            angle: action.payload,
        }
        default:
            return state;
    }
}

export default roverReducer;
