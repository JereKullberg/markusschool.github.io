// Tämä tapahtumankäsittelijä rekisteröidään ajettavaksi, kun DOM on valmis
document.addEventListener("DOMContentLoaded", onkoKirjautunut);

// Funktio, joka tarkistaa, onko käyttäjä kirjautunut ja piilottaa / näyttää sivuston osia sen mukaan
function onkoKirjautunut() {

    // Jos käyttäjä on kirjautunut sisään, näytä käyttäjänimi ja kirjaudu ulos -nappi
    if (localStorage.getItem("kirjautunut") === "kyllä") {

        document.getElementById("käyttäjäNimiOikealaita").style.display = "";
        document.getElementById("käyttäjäNimiOikealaita").innerHTML = localStorage.getItem("kayttajanimi")

        document.getElementById("kirjauduNappi").style.display = "none";
        document.getElementById("rekisteroiNappi").style.display = "none";

        document.getElementById("kirjauduUlosNappi").style.display = "";
    }

    // Jos käyttäjä ei ole kirjautunut sisään, piilota käyttäjänimi ja kirjaudu ulos -nappi
    else {
        document.getElementById("kirjauduUlosNappi").style.display = "none";
        document.getElementById("käyttäjäNimiOikealaita").style.display = "none";
    }
}

// Funktio, joka tallentaa käyttäjänimen, salasanan ja kirjautumistilan localStorageen rekisteröintilomakkeelta
function rekisteroi() {
    let nimi = document.getElementById("kayttajanimi").value;
    let salasana = document.getElementById("salasana").value;

    if(nimi && salasana) { // Katsoo jos nimi ja salasana kohdat eivät ole tyhjiä.
        localStorage.setItem("kayttajanimi", nimi)
        localStorage.setItem("salasana", salasana)
        localStorage.setItem("kirjautunut", "kyllä")  
        window.location.href = "index.html";  
    } 
}
//
// Funktio, joka tarkistaa käyttäjänimen ja salasanan localStoragesta ja kirjaa käyttäjän sisään, jos tiedot ovat oikein
function kirjaudu() {
    let kirjautumisNimi = document.getElementById("kayttajanimi").value;
    let kirjautumisSalasana = document.getElementById("salasana").value;
    let virheilmoitus = document.getElementById("virheilmoitus");
  
    if(kirjautumisNimi.toLowerCase() === localStorage.getItem("kayttajanimi").toLowerCase() && kirjautumisSalasana === localStorage.getItem("salasana")) {
      localStorage.setItem("kirjautunut", "kyllä")
      window.location.replace("index.html");
    }
    else {
      virheilmoitus.textContent = "Käyttäjänimi tai salasana on väärin.";
    }
  }

// Tehtävä: Käsittelee "kirjaudu ulos" -toimintoa.
function ulos() {
    // Asetetaan "kirjautunut" -avaimen arvoksi "ulos" LocalStorage -objektissa.
    localStorage.setItem("kirjautunut", "ulos")

    // Piilotetaan käyttäjän nimen oikealla puolella oleva elementti ja kirjaudu ulos -nappi.
    document.getElementById("kirjauduUlosNappi").style.display = "none";
    document.getElementById("käyttäjäNimiOikealaita").style.display = "none";

    // Näytetään sen sijaan kirjaudu- ja rekisteröi-napit.
    document.getElementById("kirjauduNappi").style.display = "";
    document.getElementById("rekisteroiNappi").style.display = "";
}

function pizzaJuttu() {

    /*

    VALMISTUAJAN KAAVAT

        Pizzojen valmistumisajan kaava:

        peruspizza: norm pohja 10 min, gluteeniton +3 min, lisätäyte + 1 min

        ”fantasia”-pizza: norm pohja 7 min, gluteeniton +3min, täytteet + 1 min

        Toimitus alle 3 km 5 min, 3-10 km 10min, 10-20km 20min, max 20 km
    */

}