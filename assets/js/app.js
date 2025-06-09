




















































































// Fanger elementerne

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".navLinks");


// Opsætter en event listener på vores burger menu, som har en klikfunktion, der tpggæer imellem at tilføje / fjerne en klasse.
burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// Fanger 2 elementer
const aktiviteter = document.querySelector(".aktiviteter");
const dropdown = aktiviteter.parentElement.querySelector(".dropdown");

// tjekker om aktiviteter findes, hvis ja, så sætter den en event listener på, som kun virker, hvis der er mindre end 1400 px på den gældne vindue, den er på. Herefter sætter vi prevent default på, så siden ikke opdaterer, når vi trykker os igennem. Herefter toggler vi classen "showDropdown".
if (aktiviteter) {
  aktiviteter.addEventListener("click", (e) => {
    if (window.innerWidth <= 1400) {
      e.preventDefault();
      dropdown.classList.toggle("showDropdown");
    }
  });
}


// Vi gør det samme hernede, som med den overstående. 
const omCampingpladsen = document.querySelector(".omCampingpladsen");
const omCampingDropdown = omCampingpladsen.parentElement.querySelector(".dropdown");

if (omCampingpladsen) {
  omCampingpladsen.addEventListener("click", (e) => {
    if (window.innerWidth <= 1400) {
      e.preventDefault();
      omCampingDropdown.classList.toggle("showDropdown");
    }
  });
}
