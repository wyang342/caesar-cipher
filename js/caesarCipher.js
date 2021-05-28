exports.caesarCipher = function (initialStr, shiftAmount) {
  let shiftedStr = "";
  shiftAmount = shiftAmount % 26;  // since there're 26 letters, if shiftAmount >= 26, then we can mod it to get a shiftAmount < 26.

  for (let i = 0; i < initialStr.length; i++) {
    let char = initialStr[i];
    let currentCharCode = char.charCodeAt();
    currentCharCode += shiftAmount;
    if (/[^A-Za-z]/.test(char)) {  // if char is not a letter
      shiftedStr += char;
      continue;
    }
    else if (char === char.toUpperCase()) {
      if (currentCharCode < 65) {
        currentCharCode = 90 - (65 - currentCharCode) + 1;
      } else if (currentCharCode > 90) {
        currentCharCode = 65 + (currentCharCode - 90) - 1;
      }
    } else {  // if char is lowercase
      if (currentCharCode < 97) {
        currentCharCode = 122 - (97 - currentCharCode) + 1;
      } else if (currentCharCode > 122) {
        currentCharCode = 97 + (currentCharCode - 122) - 1;
      }
    }

    shiftedChar = String.fromCharCode(currentCharCode);
    shiftedStr += shiftedChar;
  }

  return shiftedStr;
};


console.log(exports.caesarCipher("Boy! What a string!", -5));