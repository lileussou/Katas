class Map {
    constructor(longitude, latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.longitudeArray = Array.from({length: longitude}, (_, i) => i + 1);
        this.latitudeArray = Array.from({length: latitude}, (_, i) => i + 1);
    }

    get onlyCoordinates() {
        return {longitude : this.longitude, latitude: this.latitude}
    }
}

export default Map;