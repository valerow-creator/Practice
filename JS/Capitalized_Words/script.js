const wordsNotCapitalized = 'I have learned something new today';

const wordsNotCapitalizedConvertedIntoAnArray = wordsNotCapitalized.split(' ');

for (let i = 0; i < wordsNotCapitalizedConvertedIntoAnArray.length; i++) {
  wordsNotCapitalizedConvertedIntoAnArray[i] =
    wordsNotCapitalizedConvertedIntoAnArray[i].charAt(0).toUpperCase() +
    wordsNotCapitalizedConvertedIntoAnArray[i].slice(1);
}

const wordsCapitalized = wordsNotCapitalizedConvertedIntoAnArray.join(' ');

const clickMe = document.querySelector('.click');
clickMe.addEventListener('click', newWord);

function newWord() {
  document.querySelector('.to').innerHTML = 'To: ' + wordsCapitalized;
}
