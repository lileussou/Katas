import {
    roverReducer,
    angleReducer,
} from '../component/reducers/roverReducer';
import {
    mapReducer,
    obstacleReducer,
} from '../component/reducers/mapReducer';
import { combineReducers } from 'redux';
 
const rootReducer = combineReducers({
    rover: roverReducer,
    angle: angleReducer,
    map: mapReducer,
    obstacle: obstacleReducer,
});
 
export default rootReducer;