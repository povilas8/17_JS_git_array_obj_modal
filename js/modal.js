'use strict';
console.log('modal.js file was loaded');

// taikomes
const els = {
  showBnt: document.getElementById('show'),
  cancelBnt: document.getElementById('cancel'),
  modalEl: document.getElementById('modal'),
  backdropEl: document.getElementById('backdrop'),
  textChangeBtn: document.getElementById('fieldsetBtn'),
  textInput: document.getElementById('typeText'),
};

// event listeners
els.showBnt.addEventListener('click', showModal);
els.cancelBnt.addEventListener('click', hideModal);
els.backdropEl.addEventListener('click', hideModal);
els.textChangeBtn.addEventListener('click', textInputToTitle);

// functions
// showModal() - nuimti d-none nuo modalo
function showModal() {
  console.log('showing modal');
  els.modalEl.classList.remove('d-none');
  els.backdropEl.classList.remove('d-none');
  els.textInput;
}
// hideModal() - uzdeti d-none ant modalo
function hideModal() {
  console.log('hiding modal');
  els.modalEl.classList.add('d-none');
  els.backdropEl.classList.add('d-none');
}

function displayInModal(title, subtitle) {
  // irasyti title i h2
  els.modalEl.querySelector('h2').textContent = title;
  // irasyti subtitle i p
  els.modalEl.querySelector('p').textContent = subtitle;
  // parodyti modala
  showModal();
}

function textInputToTitle() {
  console.log('changing title');
  const ivestis = els.textInput.value;
  displayInModal(ivestis);

  //paimti inputo reiksme, inputo elementas . value
  //irasyti inputo reiksme i modala(displayInModal funckija)
}

// displayInModal('Svarbu', 'An apple a day you die anyway');
// displayInModal('Klaida', 'visi laukai privalomi');

// <button id="showError">Pranesti apie klaida</button> mygtuko paspaudimu
// parodyti modal apie klaida, 'Klaida', 'visi laukai privalomi'
