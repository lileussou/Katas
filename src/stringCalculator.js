export default function Add (numbers) {
    if (numbers === "") {
        return 0;
    }

    const isStringHaveADelimiter = numbers[0] === '/';
    let calculatedString = [];
    let finalString = [];
    let errorString = [];
    if (isStringHaveADelimiter) {
        let splitedString = numbers.split(/[\n]/);
        let firstString = splitedString[0];
        let delimiterStart = firstString[2] === '[' ? 3 : 2;
        let delimiterEnd = firstString.indexOf(']') > 0 ? firstString.indexOf(']') : firstString.length;
        let delimiterString = firstString.substring(delimiterStart, delimiterEnd);
        console.log(delimiterString);
        calculatedString = splitedString[1].split(delimiterString);
    } else {
        calculatedString = numbers.split(/[\n,]/);
    }

    for (const element of calculatedString) {
        if (element < 0) {
            errorString.push(element);
        }
        if (element < 1000) {
             finalString.push(element);
        }
    }

    if (errorString && errorString.length > 0) {
        throw new Error("negatives not allowed " + errorString);
    }

    const initialValue = 0;
    const sumOfElements = finalString.reduce((currentSum, currentValue) => currentSum + parseInt(currentValue), initialValue);

    return sumOfElements;
}