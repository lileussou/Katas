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

    it ('Given "1,2,3,4" string return 10', () => {
        //Given
        const oneToFourString = "1,2,3,4";
        //When
        const returnedAddition = Add(oneToFourString);
        //Then
        expect(returnedAddition).toBe(10);
    });

    it ('Given "1,2\n3" string return 6', () => {
        //Given
        const oneToThreeString = "1,2\n3";
        //When
        const returnedAddition = Add(oneToThreeString);
        //Then
        expect(returnedAddition).toBe(6);
    });

    it ('Given "1,\n" string return NaN', () => {
        //Given
        const oneToFailString = "1,\n";
        //When
        const returnedAddition = Add(oneToFailString);
        //Then
        expect(returnedAddition).toBe(NaN);
    });

    it ('Given "//,\n1,2" string return 3', () => {
        //Given
        const delimiterString = "//;\n1;2";
        //When
        const returnedAddition = Add(delimiterString);
        //Then
        expect(returnedAddition).toBe(3);
    });
    
    it ('Given "//,\n1,2,-4" string return “negatives not allowed -4”', () => {
        //Given
        let expectedError = new Error('negatives not allowed -4');
        let returnedError;
        const negativeNotAllowedString = "//,\n1,2,-4";
        //When
        try {
            Add(negativeNotAllowedString)
        } catch (error) {
            returnedError = error;
        }
        //Then
        expect(returnedError).toStrictEqual(expectedError);
    });

        
    it ('Given "//,\n1,-2,-4" string return “negatives not allowed -2, negatives not allowed -4”', () => {
        //Given
        let expectedError = new Error('negatives not allowed -2,-4');
        let returnedError;
        const negativeNotAllowedString = "//,\n1,-2,-4";
        //When
        try {
            Add(negativeNotAllowedString)
        } catch (error) {
            returnedError = error;
        }
        //Then
        expect(returnedError).toStrictEqual(expectedError);
    });

    it ('Given "//,\n2,1001" string return “2”', () => {
        //Given
        const numeberTwoAndBig = "//,\n2,1001";
        //When
        const returnedAddition = Add(numeberTwoAndBig);
        //Then
        expect(returnedAddition).toBe(2);
    });
});