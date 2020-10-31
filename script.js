// Arabic to Roman

const arabicInput = document.getElementById("arabicInput");
const arabicButton = document.getElementById("arabicButton");
const resultRoman = document.getElementById("resultRoman");

arabicButton.addEventListener("click", convertRoman);

const RomanNumerals = { 
    M: 1000, 
    CM: 900, 
    D: 500, 
    CD: 400, 
    C: 100, 
    XC: 90, 
    L: 50, 
    XL: 40, 
    X: 10, 
    IX: 9, 
    V: 5, 
    IV: 4, 
    I: 1 
};

function convertRoman() {
    romanNumber = "";
    resultRoman.innerHTML = "";
    arabicValue = arabicInput.value;

    for (let i in RomanNumerals) {
        while (arabicValue >= RomanNumerals[i]) {
            romanNumber += i;
            arabicValue -= RomanNumerals[i];
        }
    }
    resultRoman.innerHTML = romanNumber;
}

// Roman to Arabic




