'use strict';

const modal = document.querySelector(`.modal`);
const overLay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);
const openModal = function () {
  modal.classList.remove(`hidden`);
  overLay.classList.remove(`hidden`);
};
const closeModal = function () {
  modal.classList.add(`hidden`);
  overLay.classList.add(`hidden`);
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);
}

overLay.addEventListener(`click`, closeModal);
modal.addEventListener(`click`, closeModal);
document.addEventListener(`keydown`, function (e) {
  console.log(e);
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
