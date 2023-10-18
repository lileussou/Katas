import Map from "../objects/map";
import Obstacle from "../objects/obstacle";

export function getMap(latitude, longitude) {
    if(latitude === 0 || longitude ===0) {
        throw new Error ("Error: map cannot be build");
    }
    return new Map(latitude, longitude);
}

export function createObstacle(longitude, latitude, map, rover) {
    if (longitude > map.longitude || longitude < 1 
        || latitude > map.latitude || latitude < 1) {
        throw new Error ("Error: obtacle cannot be build because coordinates are outside the map");
    }
    return new Obstacle(longitude, latitude);
}