import axios from "axios";
import {apiRoutes} from '../apiRoutes/apiRoutes';

export const createRoverRepository = async() => {
    const response = await axios.get(apiRoutes.ROVER.CREATE_ROVER);

    return response.data;
} 

export const changeRoverPositionRepository = async(rover, commands, map) => {
    let data = {
        rover : {
            Longitude: rover.longitude, 
            Latitude: rover.latitude,
            Facing: rover.facing
        },  
        commands : commands,
        map : {
            Longitude: map.longitude,
            Latitude: map.latitude,
        }
    }

    const response = await axios.get(apiRoutes.ROVER.CHANGE_ROVER, data);

    return response.data;
}

export const getRoverAngleRepository = async(rover) => {
    const data = {facing : rover.facing}
    const response = await axios.post(apiRoutes.ROVER.ANGLE_ROVER, data);

    return response.data;
} 