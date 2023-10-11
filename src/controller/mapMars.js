import Map from "../objects/map";

export function getMap(latitude, longitude) {
    return new Map(latitude, longitude);
}