
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
