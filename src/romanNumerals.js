export default function convert(int) {
    
    const convertedRomanLetter = [
        {modernLetter: 1000, romanLetter: "M"},
        {modernLetter: 900, romanLetter: "CM"},
        {modernLetter: 500, romanLetter: "D"},
        {modernLetter: 400, romanLetter: "CD"},
        {modernLetter: 100, romanLetter: "C"},
        {modernLetter: 90, romanLetter: "XC"},
        {modernLetter: 50, romanLetter: "L"},
        {modernLetter: 40, romanLetter: "XL"},
        {modernLetter: 10, romanLetter: "X"},
        {modernLetter: 9, romanLetter: "IX"},
        {modernLetter: 5, romanLetter: "V"},
        {modernLetter: 4, romanLetter: "IV"},
        {modernLetter: 1, romanLetter: "I"},
    ];

    let count = int;

    let romanLetterConverted = '';

    while (count > 0) {
        const currentLetter = convertedRomanLetter.find((element) => count - element.modernLetter >= 0);
        const currentModernLetter = currentLetter.modernLetter;   
        const currentRomanLetter = currentLetter.romanLetter;
        
        count -= currentModernLetter;
        romanLetterConverted += currentRomanLetter;
    };

    return romanLetterConverted;

    /*
    if (int === 1) {
        return "I";
    }
    if (int === 2) {
        return "II";
    }
    if (int === 4) {
        return "IV";
    }
    if (int === 5) {
        return "V";
    }
    if (int === 6) {
        return "VI";
    }
    if (int === 9) {
        return "IX";
    }
    if (int === 10) {
        return "X";
    }
    if (int === 40) {
        return "XL";
    }
    if (int === 50) {
        return "L";
    }
    if (int === 90) {
        return "XC";
    }
    if (int === 100) {
        return "C";
    }
    if (int === 400) {
        return "CD";
    }
    if (int === 500) {
        return "D";
    }
    if (int === 900) {
        return "CM";
    }
    return "M";
    */
};