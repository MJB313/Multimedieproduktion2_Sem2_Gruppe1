
//Hent data med API
const domain ="https://mmd2.jqt-website.com/";
const postsEndpoint = "wp-json/wp/v2/posts";
const getRealImageUrls = "&acf_format=standard";

async function getData(){
    const res =await fetch(domain +postsEndpoint);
    const dataWordpress = await res.json();
    console.log('dataWordpress:', dataWordpress)
    return dataWordpress;
}
getData();


// //Sætte hentet data ind i DOM på MINIGOLF siden
// const AktivitetIndhold = document.querySelector(".Aktivitet-indhold")
// function renderActivities (dataWordpress){
//     if(Array.isArray(dataWordpress)){
//         dataWordpress.forEach(post => {
//             AktivitetIndhold.innerHTML += `
//           <h1 class="overskrift">${post.acf.titel}</h1>
//           <img src="${post.acf.sektion_1.billede_desktop.url}" alt="">
//           <p class="beskrivelse">${post.acf.sektion_1.beskrivelse}</p>
//         `
//         })
//     }
// }
// async function init() {

//     const data = await getData()
//     renderActivities(data);

// }
// init()


//Sætte hentet data ind i DOM på MINIGOLF siden
const AktivitetIndhold = document.querySelector(".Aktivitet-indhold")
function renderActivities(data) {
    const activite =data[6];
        AktivitetIndhold.innerHTML += `
          <h1 class="overskrift">${activite.acf.titel}</h1>
          <img src="${activite.acf.sektion_1.billede_desktop.url}" alt="">
          <p class="beskrivelse">${activite.acf.sektion_1.beskrivelse}</p>
        `
}
async function init() {

    const data = await getData()
    renderActivities(data);

}
init()

//kan vi indsætte alt data evt med en for loop if key = sektion. 

//
//JS Accordion
//
// rammer alle med querySelectorAll med class accordion .forEach loop kører for hver knap/button tilføjes en EventListener der lytter efter klik på button.//
document.querySelectorAll(".accordion").forEach(button => {
    button.addEventListener("click", ()=>{
        //erklære at accodionContent er det næste element ved siden af, her vores indhold under knappen.//
        const accordionContent = button.nextElementSibling;
        // hvis indholdet har class open, så skal den fjernes, da CSS har display: none. vises indholdet ikke
        if(accordionContent.classList.contains("open")){
            accordionContent.classList.remove("open");
            /*fjerner class til knappen også så de runde kanter kommer på igen hvis den er åben */
            button.classList.remove("open");
        //ellers tilføj class open. Dette åbner vores indhold, da class i vores CSS har display: block
        } else {
            accordionContent.classList.add("open");
            /*tilføjer class til knappen også så de runde kanter fjernes når accordion er åben */
            button.classList.add("open");
        }
    });
    });




/*Indsætter indhold på priser siden */
const prisData = document.querySelector(".priserData")
function renderActivities(data) {
    const prisData =data[0]
        AktivitetIndhold.innerHTML += `
          <h1 class="overskrift">${activite.acf.titel}</h1>
          <img src="${activite.acf.sektion_1.billede_desktop.url}" alt="">
          <p class="beskrivelse">${activite.acf.sektion_1.beskrivelse}</p>
        `
}















































































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
