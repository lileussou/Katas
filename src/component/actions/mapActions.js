
import {
    CREATE_MAP,
    ADD_OBSTACLE,
    DELETE_OBSTACLE,
} from './constant';

import {
    createMapRepository,
} from '../repository/mapRepository';

import {
    addNewObstacleRepository,
    deleteObstacleRepository,
} from '../repository/obstacleRepository';

const CREATE_MAP_ACTION = (payload) => {
    return {
        type: CREATE_MAP,
        payload: payload
    }
}

const ADD_OBSTACLE_ACTION = (payload) => {
    return {
        type: ADD_OBSTACLE,
        payload: payload
    }
}

const DELETE_OBSTACLE_ACTION = (payload) => {
    return {
        type: DELETE_OBSTACLE,
        payload: payload
    }
}

export const createMapAction = (longitude, latitude) => async dispatch => {
    try {
        const createMap = await createMapRepository(longitude, latitude);
        dispatch(CREATE_MAP_ACTION(createMap));
    } catch (e) {
        throw new Error('The map could not be created');
    }
}

export const addNewObstacleAction = (longitude, latitude, rover, map, obstacles) => async dispatch => {
    try {
        const newObstacle = await addNewObstacleRepository(longitude, latitude, rover, map, obstacles);
        dispatch(ADD_OBSTACLE_ACTION(newObstacle));
    } catch (e) {
        throw new Error('The obstacle could not be created');
    }
}

export const deleteObstacleAction = (longitude, latitude, obstacles) => async dispatch => {
    try {
        const newObstacleList = await deleteObstacleRepository(longitude, latitude, obstacles);
        dispatch(DELETE_OBSTACLE_ACTION(newObstacleList));
    } catch (e) {
        throw new Error('The obstacle could not be deleted');
    }
}