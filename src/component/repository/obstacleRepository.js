import axios from "axios";
import { apiRoutes } from "../apiRoutes/apiRoutes";

export const addNewObstacleRepository = async(longitude, latitude, rover, map, obstacles) => {
    let data = {
        longitude: parseInt(longitude),
        latitude: parseInt(latitude),
        rover : {
            Longitude: rover.Longitude,
            Latitude: rover.Latitude,
            Facing: rover.Facing
        },
        map : {
            Longitude: map.Longitude,
            Latitude: map.Latitude
        },
        obstacles : obstacles,
    }

    const response = await axios.post(apiRoutes.OBSTACLE.CREATE_OBSTACLE, data, {"content-type": 'multipart/form-data'}).then(
        (res) => {
            console.log(res.response.data);
        }).catch((err) => {
            console.log(err.response.data);
        });

    return response.data;
} 


export const deleteObstacleRepository = async(longitude, latitude, obstacles) => {
    let data = {
        longitude: parseInt(longitude),
        latitude: parseInt(latitude),
        obstacles : obstacles,
    }

    const response = await axios.post(apiRoutes.OBSTACLE.DELETE_OBSTACLE, data, {"content-type": 'multipart/form-data'}).then(
        (res) => {
            console.log(res.response.data);
        }).catch((err) => {
            console.log(err.response.data);
        });

    return response.data;
} 