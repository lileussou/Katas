export default function Add (numbers) {
    if (numbers === "") {
        return 0;
    }
    let splitedString = numbers.split(',');
    
    const initialValue = 0;
    const sumOfElements = splitedString.reduce((currentSum, currentValue) => currentSum + parseInt(currentValue), initialValue);

    return sumOfElements;
}