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

    it ('given [4,9,40,90,400,900] it should return ["IV","IX","XL","XC","CD","CM"]', () => {
        //Given
        const convertedNumeralsList = [];
        const fourToNineHundredList = [4,9,40,90,400,900];

        //When
        fourToNineHundredList.forEach(element => {
            const currentNumerals = convert(element);
            convertedNumeralsList.push(currentNumerals)
        });

        //Then
        expect(convertedNumeralsList).toStrictEqual(["IV","IX","XL","XC","CD","CM"]);
    });

    it ('given [3861] it should return ["MMMDCCCLXI"]', () => {
        //Given
        const convertedNumeralsList = [];
        const threeThousandEigthHundredSixtyOneList = [3861];

        //When
        threeThousandEigthHundredSixtyOneList.forEach(element => {
            const currentNumerals = convert(element);
            convertedNumeralsList.push(currentNumerals)
        });

        //Then
        expect(convertedNumeralsList).toStrictEqual(["MMMDCCCLXI"]);
    });
});