import Map from '../objects/map';
import {getMap} from '../controller/mapMars';

describe ('Test the current map size', () => {
    it('Given x = 1, y = 1 return "{longitudeSize : 1, latitudeSize:1)', () => {
        //Given
        const x = 1;
        const y = 1;
        const expectedMap = new Map(x, y);
        //When
        const returnedMap = getMap(x,y);
        //Then
        expect(returnedMap).toMatchObject(expectedMap);
    }); 
});