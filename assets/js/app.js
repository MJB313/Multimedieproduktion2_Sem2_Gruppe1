const modal = document.querySelector('.hytte_preview');
const openBtn = document.querySelector('.preview-active');
const closeBtn = modal.querySelector('.buttonClose');

// Open modal
openBtn.addEventListener('click', function (e) {
  e.preventDefault();
  modal.style.display = 'flex';
});

// Close modal
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});