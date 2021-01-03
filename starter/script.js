'use strict';
const hidden = document.querySelector('.hidden');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');
const show_modal = document.querySelectorAll('.show-modal');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < show_modal.length; i++) {
  show_modal[i].addEventListener('click', openModal);
}
close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal); // xử lý khi click vào phần ngoài của cái tab
//nhấn nút esc để thoát tab
document.addEventListener('keydown', function (btn) {
  if (btn.key === 'Escape') {
    closeModal();
  }
});
