"use strict";

function shiftCipher(isDecrypt) {
  var inputText = document.getElementById("inputTextShift").value;
  var dropDown = document.getElementById("shiftKey");
  var shiftKey = parseInt(dropDown.options[dropDown.selectedIndex].text);
  var outputText = "";
  if (isDecrypt === true) {
    shiftKey = (26 - shiftKey) % 26;
  }
  for (var i = 0; i < inputText.length; i++) {
    var character = inputText[i];
    var characterCode = inputText.charCodeAt(i);
    //Check if uppercase letter
    if ((characterCode >= 65) && (characterCode <= 90)) {
      outputText += String.fromCharCode(((characterCode - 65 + shiftKey) % 26) + 65);
    }
    //Check if lowercase letter
    else if ((characterCode >= 97) && (characterCode <= 122)) {
      outputText += String.fromCharCode(((characterCode - 97 + shiftKey) % 26) + 97);
    }
    //Otherwise append it as it is
    else {
      outputText += character;
    }
  }
  document.getElementById("outputTextShift").innerHTML = outputText;
}

function vigenereCipher(isDecrypt) {
  var inputText = document.getElementById("inputTextVigenere").value;
  var vigenereKeyWord = document.getElementById("vigenereKey").value;
  //We change the input text and the key word to be all uppercase for simplicity
  inputText = inputText.toUpperCase();
  vigenereKeyWord = vigenereKeyWord.toUpperCase();
  var outputText = "";
  // The vigenere key codes will be the key word letter's ASCII code - 65;
  var vigenereKeyCode;
  for (var i = 0, j = 0 ; i < inputText.length; i++) {
    var vigenereKeyCode = vigenereKeyWord.charCodeAt(j % vigenereKeyWord.length) - 65;
    var character = inputText[i];
    var characterCode = inputText.charCodeAt(i);
    //Check if letter
    if ((characterCode >= 65) && (characterCode <= 90)) {
      if (isDecrypt === true) {
        vigenereKeyCode = (26 - vigenereKeyCode) % 26;
      }
      outputText += String.fromCharCode((characterCode - 65 + vigenereKeyCode) % 26 + 65);
      j++;
      }
      //Otherwise leave it as it is
      else {
        outputText += character;
      }
    }
    document.getElementById("outputTextVigenere").innerHTML = outputText;
  }

function gcd(){
    var a = parseInt(document.getElementById("gcdFirstNr").value);
    var b = parseInt(document.getElementById("gcdSecondNr").value);
    var r;
    while (b > 0){
      r = a % b;
      a = b;
      b = r;
    }
    document.getElementById("gcdResult").innerHTML = a;
}