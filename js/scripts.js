
// UI logic
//First Task
const sentence = window.prompt("Please provide a sentence to be ciphered");

window.alert("your sentence was " + sentence + ".");

window.alert(typeof parseInt(sentence.length))

// Business logic
function capitalize(sentence, size) {
  const firstlast = sentence.slice(0,1) + sentence.slice(-1);
  return firstlast.toUpperCase();
}

function reverse(ciphFirstLast){
  const ciphFirst = ciphFirstLast.slice(-1);
  const ciphLast = ciphFirstLast.slice(0,1);
  return ciphFirst+ciphLast;
}

function adder(sent, ciphFirstLast){
  return sent + ciphFirstLast;
}

function halfPt(){

}

let ciphFirstLast = capitalize(sentence);
adder(sentence,reverse(ciphFirstLast));
