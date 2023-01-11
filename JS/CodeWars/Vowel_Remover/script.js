'use strict';

// Selecting the items
const search = document.querySelector('.enter');
const reset = document.querySelector('.reset');
const result = document.querySelector('.result');
const emptyValue = '';
const myInput = document.querySelector('.myInput');

// Press the buttom
search.addEventListener('click', shortcut);

function shortcut() {
  // Save the word into a variable
  const inputWord = document.querySelector('.myInput').value;

  // Remove vowels
  const replacement = inputWord.replace(/[aeiou]/gi, '');

  // Print the result
  result.textContent = replacement;
}

reset.addEventListener('click', restart);

function restart() {
  myInput.value = 'Enter a word';
  result.textContent = emptyValue;
}
