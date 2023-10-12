import Map from "../objects/map";

export function getMap(latitude, longitude) {
    if(latitude === 0 || longitude ===0) {
        throw new Error ("Error: map cannot be build");
    }
    return new Map(latitude, longitude);
}