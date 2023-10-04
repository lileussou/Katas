export default function Add (numbers) {
    if (numbers === "") {
        return 0;
    }

    const isStringHaveADelimiter = numbers[0] === '/';
    let calculatedString = [];
    let splitedString = numbers.split(/[\n]/);
    let delimiters = [];
    let regex = '';
    if (isStringHaveADelimiter) {
        delimiters = getDelimiters(splitedString[0]);
        for(let i = 0; i < delimiters.length; i++) {
            let currentRegex = '(?:';
            let splitedDelimiter = delimiters[i].split('');
            for (let j = 0; j < splitedDelimiter.length; j ++) {
                currentRegex += "\\" + splitedDelimiter[j];
            }
            i === delimiters.length - 1 ? regex += currentRegex + ')' : regex += currentRegex + ')|';
        }
        console.log(regex);
        const newRegex = new RegExp(regex, 'g');
        console.log(newRegex)
        calculatedString = splitedString[1].split(newRegex);
        console.log(calculatedString);
    } else {
        calculatedString = numbers.split(/[\n,]/);;
    }

    return sumOfElements(calculatedString);
}   

function getDelimiters(firstString) {
    let hasAtLeastLongDelimiter = firstString.includes('[');
    let delimitersList = [];
    if(hasAtLeastLongDelimiter) {
        let currentStartDelimiter = 0;
        for(let i = 0; i < firstString.length; i++) {
            if (firstString[i] === '[') {
                currentStartDelimiter = i+1;
            } 
            if (firstString[i] === ']') {
                delimitersList.push(firstString.substring(currentStartDelimiter, i))
            }
        }
    } else {
        let delimiterStart = 2;
        let delimiterEnd = firstString.length;
        delimitersList.push(firstString.substring(delimiterStart, delimiterEnd));
    }
    return delimitersList;
}

function sumOfElements(calculatedString) {

    let finalString = [];
    let errorString = [];

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