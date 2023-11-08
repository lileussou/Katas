import {
    CREATE_MAP,
    ADD_OBSTACLE,
    DELETE_OBSTACLE,
} from '../actions/constant';

export const mapReducer = (state = [], action) => {
    switch (action.type) {  
        case CREATE_MAP :
            return {
                ...state,
                longitude: action.payload.Longitude,
                latitude: action.payload.Latitude,
            }
        default:
            return state;
    }
}

export const obstacleReducer = (state = [], action) => {
    switch (action.type) {  
        case ADD_OBSTACLE :
            return {
                ...state,
                obstacleList : [
                    ...state.obstacles,
                    action.payload
                ]
            }
        case DELETE_OBSTACLE : {
            return {
                ...state,
                obstacleList : action.payload,
            }
        }
        default:
            return state;
    }
}

export default mapReducer;
