
// UI logic
//First Task
const sentence = window.prompt("Please provide a sentence to be ciphered");

window.alert("your sentence was " + sentence + ".");

// Business logic
function capitalize(sentence, size) {
  const firstlast = sentence.slice(0,1) + sentence.slice(-1);
  return firstlast.toUpperCase();
}

function reverseCiph(ciphFirstLast){
  const ciphFirst = ciphFirstLast.slice(-1);
  const ciphLast = ciphFirstLast.slice(0,1);
  return ciphFirst+ciphLast;
}

function adder(sent, ciphFirstLast){
  return sent + ciphFirstLast;
}

function halfPt(sent){
  let half = Math.floor((parseInt(sent.length)/2));
  return sent.charAt(half-1);
}

function finalReverse(cipher){
  return cipher.split("").reverse().join("");
}

let ciphFirstLast = capitalize(sentence);
let cipherSentence = adder(sentence,reverseCiph(ciphFirstLast));
cipherSentence= halfPt(sentence)+cipherSentence;
window.alert("Your ciphered sentence is: " + cipherSentence);
const finReverse = finalReverse(cipherSentence);
window.alert("Your final cipher is: " + finReverse);
