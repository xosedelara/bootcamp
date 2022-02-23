/* eslint-disable no-console */
const cipher = {
  encode: (offset, textToCipher) => {
    let cipheredMsg = '';
    if (offset === null || offset === 0) {
      throw TypeError("Ingresa por favor una clave");
    } else {
      for (let a = 0; a < textToCipher.length; a++) {
        let asciiNum = textToCipher.charCodeAt(a);
        if (asciiNum >= 65 && asciiNum <= 90) {
          let cipheredAscii = ((asciiNum - 65 + parseInt(offset)) % 26 + 65);
          let cipheredLetter = String.fromCharCode(cipheredAscii);
          cipheredMsg += cipheredLetter;
        } else if (asciiNum >= 48 && asciiNum <= 57) {
          cipheredMsg += String.fromCharCode((asciiNum - 48 + parseInt(offset)) % 10 + 48);
        } else if (asciiNum >= 34 && asciiNum <= 47) {
          cipheredMsg += String.fromCharCode((asciiNum - 34 + parseInt(offset)) % 14 + 34);
        } else if (asciiNum >= 91 && asciiNum <= 96) {
          cipheredMsg += String.fromCharCode((asciiNum - 91 + parseInt(offset)) % 6 + 91);
        } else if (asciiNum >= 123 && asciiNum <= 126) {
          cipheredMsg += String.fromCharCode((asciiNum - 123 + parseInt(offset)) % 4 + 123);
        } else if (asciiNum >= 97 && asciiNum <= 122) {
          cipheredMsg += String.fromCharCode((asciiNum - 97 + parseInt(offset)) % 26 + 97);
        } else if (asciiNum >= 58 && asciiNum <= 63) {
          cipheredMsg += String.fromCharCode((asciiNum - 58 + parseInt(offset)) % 6 + 58);
        } else {
          cipheredMsg = cipheredMsg + textToCipher[a];
        }
        console.log(cipheredMsg)
      } return cipheredMsg;
    }
  },
  decode: (offset, textToDecipher) => {
    let decipheredMsg = '';
    if (offset.value === null || textToDecipher === 0) {
      throw TypeError("Ingresa por favor la clave");
    } else {
      for (let a = 0; a < textToDecipher.length; a++) {
        let asciiNum = textToDecipher.charCodeAt(a);
        if (asciiNum >= 65 && asciiNum <= 90) {
          let decipheredAscii = ((asciiNum - 90 - parseInt(offset)) % 26 + 90);
          let decipheredLetter = String.fromCharCode(decipheredAscii);
          decipheredMsg += decipheredLetter;
        } else if (asciiNum >= 48 && asciiNum <= 57) {
          decipheredMsg += String.fromCharCode((asciiNum - 57 - parseInt(offset)) % 10 + 57);
        } else if (asciiNum >= 34 && asciiNum <= 47) {
          decipheredMsg += String.fromCharCode((asciiNum - 47 - parseInt(offset)) % 14 + 47);
        } else if (asciiNum >= 91 && asciiNum <= 96) {
          decipheredMsg += String.fromCharCode((asciiNum - 96 - parseInt(offset)) % 6 + 96);
        } else if (asciiNum >= 123 && asciiNum <= 126) {
          decipheredMsg += String.fromCharCode((asciiNum - 126 - parseInt(offset)) % 4 + 126);
        } else if (asciiNum >= 97 && asciiNum <= 122) {
          decipheredMsg += String.fromCharCode((asciiNum - 122 - parseInt(offset)) % 26 + 122);
        } else if (asciiNum >= 58 && asciiNum <= 63) {
          decipheredMsg += String.fromCharCode((asciiNum - 63 - parseInt(offset)) % 6 + 63);
        } else {
          decipheredMsg = decipheredMsg + textToDecipher[a];
        }
        console.log(decipheredMsg)
      } return decipheredMsg;
    }
  }
}
export default cipher