document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('.preview-active'); // Opsætter variable op for at åbne vores modal
  const closeButtons = document.querySelectorAll('.buttonClose'); // Opsætter variable op for at lukke vores modal

  
  openButtons.forEach(btn => { // Laver en forEach for hver knap der skal åbnes.
    btn.addEventListener('click', function (e) {  // Lytter efter et klik.
      e.preventDefault(); // har en prevent default for ikke at hoppe til toppen af siden så vi istedet kan se vinduet for et modal.
      const modalId = this.dataset.modal; // Henter data attributen for "data-modal" inde på HTML cardet, når man klikker på knappen. F.x data-modal="modal-1"
      const modal = document.getElementById(modalId); // Henter vores ID fra vores modal preview inde på HTML'en. F.x ID = "modal-1"
      if (modal) modal.style.display = 'block'; // Hvis der bliver fundet et ID, skal vores preview af ønsket card vises.
    });
  });


  closeButtons.forEach(btn => { // Laver en forEach på hver modal knap 
    btn.addEventListener('click', function () { // Lytter efter klik 
      this.closest('.hytte_preview').style.display = 'none';  // Når man trykker på krydset inde på modalet, vil class .hytte_preview ikke bliver vist. 
    });
  });
});