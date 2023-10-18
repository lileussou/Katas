import Obstacle from "../objects/obstacle";
import Map from "../objects/map";
import Rover from "../objects/rover";
import {createObstacle} from "../controller/mapMars";
import { Directions } from "../models/directions";

describe('the test to create and manage the differents obstacle', () => {
    it('given coordinates return "{longitude : 2, latitude : 2}"', () => {
        //Given
        const coordinatesLongitude = 2;
        const coordinatesLatitude = 2;
        const map = new Map(4,4);
        const rover = new Rover(1,1,Directions.N);
        const currentObstacle = new Obstacle(2,2);
        //when
        const returnedObstacle = createObstacle(coordinatesLongitude, coordinatesLatitude, map, rover);
        //Then
        expect(returnedObstacle).toStrictEqual(currentObstacle);
    })

    it('given coordinates return "Error: obtacle cannot be build because coordinates are outside the map"', () => {
        //Given
        const coordinatesLongitude = 5;
        const coordinatesLatitude = 2;
        const map = new Map(4,4);
        const rover = new Rover(1,1, Directions.N);
        const expectError = new Error ("Error: obtacle cannot be build because coordinates are outside the map");
        let retunedError;
        //when
        try {
            const returnedObstacle = createObstacle(coordinatesLongitude, coordinatesLatitude, map, rover);
        } catch (error) {
            retunedError = error;
        }
        //Then
        expect(retunedError).toMatchObject(expectError);
    })

})