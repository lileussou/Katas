export default function Add (numbers) {
    if (numbers === "") {
        return 0;
    }

    const isStringHaveADelimiter = numbers[0] === '/';
    let calculatedString = [];
    if (isStringHaveADelimiter) {
        let splitedString = numbers.split(/[\n]/);
        let delimiterString = splitedString[0].substr(2);
        calculatedString = splitedString[1].split(delimiterString);
    } else {
        calculatedString = numbers.split(/[\n,]/);
    }

    const initialValue = 0;
    const sumOfElements = calculatedString.reduce((currentSum, currentValue) => currentSum + parseInt(currentValue), initialValue);

    return sumOfElements;
}