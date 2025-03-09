const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
 const capitalAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")

export function caesarCipher(string, shiftFactor) {
  let encryptedString = "";


  string.split("").forEach((letter) => {
    let alphabet = null;
    if(lowercaseAlphabet.includes(letter)) {
      alphabet = lowercaseAlphabet
    } else if(capitalAlphabet.includes(letter)) {
      alphabet = capitalAlphabet
    } else {
      encryptedString += letter;
      return
    }

    alphabet.forEach((alphabetLetter, alphabetIndex) => {
      if(letter === alphabetLetter) {
        let encryptionIndex = alphabetIndex + shiftFactor;

        if (encryptionIndex > 25) { encryptionIndex -= 26;}

        encryptedString += alphabet[encryptionIndex];
      }
    })
  })


  return encryptedString;
}
