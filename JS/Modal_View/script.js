'use strict';
// GENERAL SELECTORS //
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

// HTML BUTTON //
const showHtml = document.querySelector('.show-html');
const modalHtml = document.querySelector('.modal-html');

showHtml.addEventListener('click', openHtml);

function openHtml() {
  modalHtml.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// CSS BUTTON //
const showCss = document.querySelector('.show-css');
const modalCss = document.querySelector('.modal-css');

showCss.addEventListener('click', openCss);

function openCss() {
  modalCss.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// JS BUTTON //
const showJs = document.querySelector('.show-js');
const modalJs = document.querySelector('.modal-js');

showJs.addEventListener('click', openJs);

function openJs() {
  modalJs.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// CLOSE BUTTON //
const closeButton = document.querySelectorAll('.close-modal');

for (let i = 0; i < closeButton.length; i++)
  closeButton[i].addEventListener('click', function () {
    modalHtml.classList.add('hidden');
    modalCss.classList.add('hidden');
    modalJs.classList.add('hidden');
    overlay.classList.add('hidden');
  });

overlay.addEventListener('click', remove);

function remove() {
  overlay.classList.add('hidden');
  modalHtml.classList.add('hidden');
  modalCss.classList.add('hidden');
  modalJs.classList.add('hidden');
}

// CLOSE MODAL AND OVERLAY WITH ANY KEY IN THE KEYBOARD //
document.addEventListener('keydown', function () {
  overlay.classList.add('hidden');
  modalHtml.classList.add('hidden');
  modalCss.classList.add('hidden');
  modalJs.classList.add('hidden');
});
