import convert from './romanNumerals';

describe ( 'Roman numeral test', () => {
    it ('given 1 it should return I', () => {
        //Given
        const one = 1;

        //When
        const convertedNumeralOne = convert(one);

        //Then
        expect(convertedNumeralsOne).toBe("I");
    });

    it ('given 2 it should return II', () => {
        //Given
        const two = 2;

        //When
        const convertedNumeralsTwo = convert(two);

        //Then
        expect(convertedNumeralsTwo).toBe("II");
    });

    it ('given 4 it should return IV', () => {
        //Given
        const four = 4;

        //When
        const convertedNumeralsFour = convert(four);

        //Then
        expect(convertedNumeralsFour).toBe("IV");
    });

    it ('given 5 it should return V', () => {
        //Given
        const five = 5;

        //When
        const convertedNumeralsFive = convert(five);

        //Then
        expect(convertedNumeralsFive).toBe("V");
    });

    it ('given 6 it should return VI', () => {
        //Given
        const six = 6;

        //When
        const convertedNumeralsSix = convert(six);

        //Then
        expect(convertedNumeralsSix).toBe("VI");
    });

    it ('given 9 it should return IX', () => {
        //Given
        const neuf = 9;

        //When
        const convertedNumeralsNeuf = convert(neuf);

        //Then
        expect(convertedNumeralsNeuf).toBe("IX");
    });

    it ('given 10 it should return X', () => {
        //Given
        const dix = 10;

        //When
        const convertedNumeralsDix = convert(dix);

        //Then
        expect(convertedNumeralsDix).toBe("X");
    }); 

    it ('given 40 it should return XL', () => {
        //Given
        const quarante = 40;

        //When
        const convertedNumeralsQuarante = convert(quarante);

        //Then
        expect(convertedNumeralsQuarante).toBe("XL");
    });

    it ('given 50 it should return L', () => {
        //Given
        const cinquante = 50;

        //When
        const convertedNumeralsCinquante = convert(cinquante);

        //Then
        expect(convertedNumeralsCinquante).toBe("L");
    });

    it ('given 90 it should return XC', () => {
        //Given
        const ninety = 90;

        //When
        const convertedNumeralsNinety = convert(ninety);

        //Then
        expect(convertedNumeralsNinety).toBe("XC");
    });
    
    it ('given 100 it should return C', () => {
        //Given
        const hundred = 100;

        //When
        const convertedNumeralsHundred = convert(hundred);

        //Then
        expect(convertedNumeralsHundred).toBe("C");
    });

    it ('given 400 it should return CD', () => {
        //Given
        const fourHundred = 400;

        //When
        const convertedNumeralsFourHundred = convert(fourHundred);

        //Then
        expect(convertedNumeralsFourHundred).toBe("CD");
    });
    
    it ('given 500 it should return D', () => {
        //Given
        const fiveHundred = 500;

        //When
        const convertedNumeralsFiveHundred = convert(fiveHundred);

        //Then
        expect(convertedNumeralsFiveHundred).toBe("D");
    });

    it ('given 900 it should return CM', () => {
        //Given
        const nineHundred = 900;

        //When
        const convertedNumeralsNineHundred = convert(nineHundred);

        //Then
        expect(convertedNumeralsNineHundred).toBe("CM");
    });
    
    it ('given 1000 it should return M', () => {
        //Given
        const oneThousand = 1000;

        //When
        const convertedNumeralsOneThousand = convert(oneThousand);

        //Then
        expect(convertedNumeralsOneThousand).toBe("M");
    });

    it ('given 3861 it should return MMMDCCCLXI', () => {
        //Given
        const threeThousandEightHundredSixtyOne = 3861;

        //When
        const convertedNumeralsThreeThousandEightHundredSixtyOne = convert(threeThousandEightHundredSixtyOne);

        //Then
        expect(convertedNumeralsThreeThousandEightHundredSixtyOne).toBe("MMMDCCCLXI");
    });
});