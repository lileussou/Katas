import axios from "axios";
import { apiRoutes } from "../apiRoutes/apiRoutes";

export const createMapRepository = async(longitude, latitude) => {

    const response = await axios.get(apiRoutes.MAP.CREATE_MAP, {longitude: longitude, latitude:latitude}, {"content-type": 'multipart/form-data'}).then(
        (res) => {
            console.log(res.response.data);
        }).catch((err) => {
            console.log(err.response.data);
        });

    return response.data;
}