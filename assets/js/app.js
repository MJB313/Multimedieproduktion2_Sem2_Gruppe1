document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('.preview-active');
  const closeButtons = document.querySelectorAll('.buttonClose');

  // Open modal
  openButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const modalId = this.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'block';
    });
  });

  // Close modal
  closeButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      this.closest('.hytte_preview').style.display = 'none';
    });
  });
});