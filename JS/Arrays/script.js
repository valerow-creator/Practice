const characters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
  },
];

///////////////////////////// MAP /////////////////////////////

// 1 Get an array of all names
const charactersGetAllNames = characters.map((character) => character.name);
// 1.1 Select the button
const mapOne = document.querySelector('.name__button__map__li__1');

// 1.2 Add an event listener to the button
mapOne.addEventListener('click', getNames);

// 1.3 Inject the names in the li
function getNames() {
  document.querySelector('.cards__map__li__1').innerHTML =
    charactersGetAllNames.join(', ');
}

// 2 Get an array of all heights
const allHeights = characters.map((heights) => heights.height);

// 2.1 Select the button
const mapTwo = document.querySelector('.name__button__map__li__2');

// 2.2 Add an event listener to the button
mapTwo.addEventListener('click', getHeights);

// 2.3 Inject the names in the li
function getHeights() {
  document.querySelector('.cards__map__li__2').innerHTML =
    allHeights.join(', ');
}

// 3 Get an array of objects with just name and height properties
const nameAndHeights = characters.map((character) => ({
  Name: character.name,
  Height: character.height,
}));

// 3.1 Select the button
const mapThree = document.querySelector('.name__button__map__li__3');

// 3.2 Add an event listener to the button
mapThree.addEventListener('click', nameAndHeightsFunction);

// 3.3 Inject the names in the li
function nameAndHeightsFunction(params) {
  document.querySelector('.cards__map__li__3').innerHTML =
    nameAndHeights.join(', ');
}

// 4 Get an array of all first names
const firstNames = characters.map((firstName) => firstName.name.split(' ')[0]);

// 4.1 Select the button
const mapFour = document.querySelector('.name__button__map__li__4');

// 4.2 Add an event listener to the button
mapFour.addEventListener('click', firstNamesFunction);

// 4.3 Inject the names in the li
function firstNamesFunction() {
  document.querySelector('.cards__map__li__4').innerHTML =
    firstNames.join(', ');
}

///////////////////////////// REDUCE /////////////////////////////

// 1 Get the total mass of all characters:
const initialValue = 0;
const totalMass = characters.reduce(
  (accumulator, currentValue) => accumulator + currentValue.mass,
  initialValue
);
// 1.1. Select the button
const reduceOne = document.querySelector('.name__button__reduce__li__1');

// 1.2 Add an event listener to the button
reduceOne.addEventListener('click', totalMassFunction);

// 1.3 Inject the mass to the li
function totalMassFunction() {
  document.querySelector('.cards__reduce__li__1').innerHTML = totalMass;
}

// 2 Get the total height of all characters:
const initialValueHeight = 0;
const totalHeightOfAllCharacters = characters.reduce(
  (accumulator, currentValue) => accumulator + currentValue.height,
  initialValue
);

// 2.1. Select the button
const reduceTwo = document.querySelector('.name__button__reduce__li__2');

// 2.2 Add an event listener to the button
reduceTwo.addEventListener('click', totalHeightFunction);

// 2.3 Inject the mass to the li
function totalHeightFunction() {
  document.querySelector('.cards__reduce__li__2').innerHTML =
    totalHeightOfAllCharacters;
}

// 3 Get the total number of characters in all the character names:
const totalNames = characters.reduce(
  (accumulator, currentValue) => accumulator + currentValue.name.length,
  0
);

// 3.1. Select the button
const reduceThree = document.querySelector('.name__button__reduce__li__3');

// 3.2 Add an event listener to the button
reduceThree.addEventListener('click', totalNamesCharacters);

// 3.3 Inject the mass to the li
function totalNamesCharacters() {
  document.querySelector('.cards__reduce__li__3').innerHTML = totalNames;
}

// 4 Get the total number of characters by eye color (hint. a map of eye color to count):
const charactersByEyeColor = characters.reduce((accumulator, currentValue) => {
  const color = currentValue.eye_color;
  if (accumulator[color]) {
    accumulator[color]++;
  } else {
    accumulator[color] = 1;
  }
  return accumulator;
}, {});

// 4.1. Select the button
const reduceFour = document.querySelector('.name__button__reduce__li__4');

// 4.2 Add an event listener to the button
reduceFour.addEventListener('click', totalEyeColor);

// 4.3 Inject the mass to the li
function totalEyeColor() {
  document.querySelector('.cards__reduce__li__4').innerHTML =
    charactersByEyeColor;
}

///////////////////////////// FILTER /////////////////////////////

// 1 Get characters with mass greater than 100
const greaterThan100 = characters.filter((word) => word.mass > 100);

// 1.1 Select the button
const filterOne = document.querySelector('.name__button__filter__li__1');

// 1.2 Add an event listener to the button
filterOne.addEventListener('click', greaterthan100Funcion);

// 1.3 Inject the names in the li
function greaterthan100Funcion(params) {
  document.querySelector('.cards__filter__li__1').innerHTML = greaterThan100;
}

// 2 Get characters with height less than 200
const lessThan200 = characters.filter((word) => word.height > 200);

// 2.1 Select the button
const filterTwo = document.querySelector('.name__button__filter__li__2');

// 2.2 Add an event listener to the button
filterTwo.addEventListener('click', lessThan200Funcion);

// 2.3 Inject the names in the li
function lessThan200Funcion(params) {
  document.querySelector('.cards__filter__li__2').innerHTML = lessThan200;
}

// 3 Get all male characters
const allMaleCharacters = characters.filter((word) => word.gender === 'male');

// 3.1 Select the button
const filterThree = document.querySelector('.name__button__filter__li__3');

// 3.2 Add an event listener to the button
filterThree.addEventListener('click', allMales);

// 3.3 Inject the names in the li
function allMales(params) {
  document.querySelector('.cards__filter__li__3').innerHTML = allMaleCharacters;
}

// 4 Get all female characters
const allFemaleCharacters = characters.filter(
  (word) => word.gender === 'female'
);

// 4.1 Select the button
const filterFour = document.querySelector('.name__button__filter__li__4');

// 4.2 Add an event listener to the button
filterFour.addEventListener('click', allFemales);

// 4.3 Inject the names in the li
function allFemales(params) {
  document.querySelector('.cards__filter__li__4').innerHTML =
    allFemaleCharacters;
}

///////////////////////////// SORT /////////////////////////////

// 1 Sort by name
const sortByName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});

// 1.1 Select the button
const sortOne = document.querySelector('.name__button__sort__li__1');

// 1.2 Add an event listener to the button
sortOne.addEventListener('click', sortOneFunction);

// 1.3 Inject the names in the li
function sortOneFunction() {
  document.querySelector('.cards__sort__li__1').innerHTML = sortByName;
}

// 2 Sort by mass
const sortByMass = characters.sort((a, b) => {
  return a.mass - b.mass;
});

// 2.1 Select the button
const sortTwo = document.querySelector('.name__button__sort__li__2');

// 2.2 Add an event listener to the button
sortTwo.addEventListener('click', sortTwoFunction);

// 2.3 Inject the names in the li
function sortTwoFunction() {
  document.querySelector('.cards__sort__li__2').innerHTML = sortByMass;
}

// 3 Sort by height
const sortByheight = characters.sort((a, b) => {
  return a.height - b.height;
});

// 3.1 Select the button
const sortThree = document.querySelector('.name__button__sort__li__3');

// 3.2 Add an event listener to the button
sortThree.addEventListener('click', sortThreeFunction);

// 3.3 Inject the names in the li
function sortThreeFunction(params) {
  document.querySelector('.cards__sort__li__3').innerHTML = sortByheight;
}
// 4 Sort by gender
const sortByGender = characters.sort((a, b) => {
  if (a.gender < b.gender) return -1;
  return 1;
});

// 3.1 Select the button
const sortFourth = document.querySelector('.name__button__sort__li__4');

// 3.2 Add an event listener to the button
sortFourth.addEventListener('click', sortFourthFunction);

// 3.3 Inject the names in the li
function sortFourthFunction() {
  document.querySelector('.cards__sort__li__4').innerHTML = sortByGender;
}

///////////////////////////// EVERY /////////////////////////////

// 1 Does every character have blue eyes?
const blueEyes = characters.every(blueEyesFunction);

function blueEyesFunction() {
  return characters.eye_color === 'blue';
}

// 1.1 Select the button
const everyOne = document.querySelector('.name__button__every__li__1');

// 1.2 Add an event listener to the button
everyOne.addEventListener('click', everyOneFunction);

// 1.3 Inject the names in the li
function everyOneFunction() {
  document.querySelector('.cards__every__li__1').innerHTML = blueEyes;
}

// 2 Does every character have mass more than 40?
const massMore40 = characters.every((character) => character.mass > 40);

// 2.1 Select the button
const everyTwo = document.querySelector('.name__button__every__li__2');

// 2.2 Add an event listener to the button
everyTwo.addEventListener('click', everyTwoFunction);

// 2.3 Inject the names in the li
function everyTwoFunction() {
  document.querySelector('.cards__every__li__2').innerHTML = massMore40;
}

// 3 Is every character shorter than 200?
const shorterThan200 = characters.every((character) => character.height < 200);

// 3.1 Select the button
const everyThree = document.querySelector('.name__button__every__li__3');

// 3.2 Add an event listener to the button
everyThree.addEventListener('click', everyThreeFunction);

// 3.3 Inject the names in the li
function everyThreeFunction() {
  document.querySelector('.cards__every__li__3').innerHTML = shorterThan200;
}

// 4 Is every character male?
const allCharactersMales = characters.every(
  (character) => character.gender === 'male'
);

// 4.1 Select the button
const everyFourth = document.querySelector('.name__button__every__li__4');

// 4.2 Add an event listener to the button
everyFourth.addEventListener('click', everyFourthFunction);

function everyFourthFunction() {
  document.querySelector('.cards__every__li__4').innerHTML = allCharactersMales;
}
// 4.3 Inject the names in the li

///////////////////////////// SOME /////////////////////////////

// 1 Is there at least one male character?
const atLeastOneMale = characters.some(
  (character) => character.gender != 'male'
);
console.log(atLeastOneMale);

// 1.1 Select the button
const someOne = document.querySelector('.name__button__some__li__1');

// 1.2 Add an event listener to the button
someOne.addEventListener('click', someOneFunction);

// 1.3 Inject the names in the li
function someOneFunction() {
  document.querySelector('.cards__some__li__1').innerHTML = atLeastOneMale;
}

// 2 Is there at least one character with blue eyes?
const atLeastOneblueEyes = characters.some(
  (character) => character.eye_color === 'blue'
);

// 2.1 Select the button
const someTwo = document.querySelector('.name__button__some__li__2');

// 2.2 Add an event listener to the button
someTwo.addEventListener('click', someTwoFunction);

// 2.3 Inject the names in the li
function someTwoFunction() {
  document.querySelector('.cards__some__li__2').innerHTML = atLeastOneblueEyes;
}

// 3 Is there at least one character taller than 200?
const atLeastOneTallerThan200 = characters.some(
  (character) => character.mass > 200
);

// 1.1 Select the button
const someThree = document.querySelector('.name__button__some__li__3');

// 1.2 Add an event listener to the button
someThree.addEventListener('click', someThreeFunction);

// 1.3 Inject the names in the li
function someThreeFunction() {
  document.querySelector('.cards__some__li__3').innerHTML =
    atLeastOneTallerThan200;
}

// 4 Is there at least one character that has mass less than 50?
const atLeastOneMassLess50 = characters.some(
  (character) => character.mass < 50
);

// 1.1 Select the button
const someFourth = document.querySelector('.name__button__some__li__4');

// 1.2 Add an event listener to the button
someFourth.addEventListener('click', someFourthFunction);

// 1.3 Inject the names in the li
function someFourthFunction() {
  document.querySelector('.cards__some__li__4').innerHTML =
    atLeastOneMassLess50;
}
