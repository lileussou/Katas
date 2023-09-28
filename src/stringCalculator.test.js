import Add from './stringCalculator';

describe ('string calculator tests', () => {
    it ('Given empty string return 0', () => {
        //Given
        const empty = "";
        //When
        const returnedAddition = Add(empty);
        //Then
        expect(returnedAddition).toBe(0);
    });

    it ('Given "1" string return 1', () => {
        //Given
        const oneString = "1";
        //When
        const returnedAddition = Add(oneString);
        //Then
        expect(returnedAddition).toBe(1);
    });

    it ('Given "1,2" string return 3', () => {
        //Given
        const oneAndTwoString = "1,2";
        //When
        const returnedAddition = Add(oneAndTwoString);
        //Then
        expect(returnedAddition).toBe(3);
    });
});