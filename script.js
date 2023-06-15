// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedStr = ""; // Your Result goes here
  // Only change code below this line
	for (var i = 0; i < encodedStr.length; i++) {
    var char = encodedStr[i];
    var charCode = encodedStr.charCodeAt(i);

    // Check uppercase
    if (charCode >= 65 && charCode <= 90) {
      // Decode the character by shifting it back 13 places
      var decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
      var decodedChar = String.fromCharCode(decodedCharCode);
      decodedStr += decodedChar;
    } else {
      // Pass non-alphabetic characters as they are
      decodedStr += char;
    }
  }

  return decodedStr; //return decodedArr
}
// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
