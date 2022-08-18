
// UI logic
const sentence = window.prompt("Please provide a sentence to be ciphered");

window.alert("your sentence was " + sentence + ".");

// Business logic
function capitalize(sentence) {
  let firstlast = sentence.charAt(0) + sentence.charAt(-1);
  return firstlast.toUpper();
}

let ciphFirstLast = capitalize(sentence);

function reverse(ciphFirstLast){

}



