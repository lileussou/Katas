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
        let hasMultipleDelimiter = firstString.includes('][');
        if(hasMultipleDelimiter) {
            const delimiters = getDelimiters(firstString);
            const regex = new RegExp('[' + delimiters + ']');
            let calculatedString = splitedString[1].split(regex); 
            let sumOfElements = calculatedString.reduce((currentSum, currentValue) => currentSum + parseInt(currentValue), 0);
            return sumOfElements;
        }
        let delimiterStart = firstString[2] === '[' ? 3 : 2;
        let delimiterEnd = firstString.indexOf(']') > 0 ? firstString.indexOf(']') : firstString.length;
        let delimiterString = firstString.substring(delimiterStart, delimiterEnd);
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

function getDelimiters(firstString) {
    let delimitersList = [];
    let currentStartDelimiter = 0;
    for(let i = 0; i < firstString.length; i++) {
        if (firstString[i] === '[') {
            currentStartDelimiter = i+1;
        } 
        if (firstString[i] === ']') {
            delimitersList.push(firstString.substring(currentStartDelimiter, i))
        }
    }
    return delimitersList;
}