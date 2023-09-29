import convert from './romanNumerals';

describe ( 'Roman numeral test', () => {
    it ('given [1,5,10,50,100,500,1000] it should return ["I","V","X","L","C","D","M"]', () => {
        //Given
        const convertedNumeralsList = [];
        const oneToHundredList = [1, 5, 10, 50, 100, 500, 1000];

        //When
        oneToHundredList.forEach(element => {
            const currentNumerals = convert(element);
            convertedNumeralsList.push(currentNumerals)
        });

        //Then
        expect(convertedNumeralsList).toStrictEqual(["I","V","X","L","C","D","M"]);
    });
    
    it ('given [2,6] it should return ["II","VI"]', () => {
        //Given
        const convertedNumeralsList = [];
        const twoToSixList = [2,6];

        //When
        twoToSixList.forEach(element => {
            const currentNumerals = convert(element);
            convertedNumeralsList.push(currentNumerals)
        });

        //Then
        expect(convertedNumeralsList).toStrictEqual(["II","VI"]);
    });

    it ('given 4 it should return IV', () => {
        //Given
        const four = 4;

        //When
        const convertedNumeralsFour = convert(four);

        //Then
        expect(convertedNumeralsFour).toBe("IV");
    });

    it ('given 9 it should return IX', () => {
        //Given
        const neuf = 9;

        //When
        const convertedNumeralsNeuf = convert(neuf);

        //Then
        expect(convertedNumeralsNeuf).toBe("IX");
    });

    it ('given 40 it should return XL', () => {
        //Given
        const quarante = 40;

        //When
        const convertedNumeralsQuarante = convert(quarante);

        //Then
        expect(convertedNumeralsQuarante).toBe("XL");
    });

    it ('given 90 it should return XC', () => {
        //Given
        const ninety = 90;

        //When
        const convertedNumeralsNinety = convert(ninety);

        //Then
        expect(convertedNumeralsNinety).toBe("XC");
    });

    it ('given 400 it should return CD', () => {
        //Given
        const fourHundred = 400;

        //When
        const convertedNumeralsFourHundred = convert(fourHundred);

        //Then
        expect(convertedNumeralsFourHundred).toBe("CD");
    });

    it ('given 900 it should return CM', () => {
        //Given
        const nineHundred = 900;

        //When
        const convertedNumeralsNineHundred = convert(nineHundred);

        //Then
        expect(convertedNumeralsNineHundred).toBe("CM");
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