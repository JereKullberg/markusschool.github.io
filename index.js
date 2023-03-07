document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
    if (localStorage.getItem("kirjautunut") === "kyllä") {
        console.log("Tervetuloa " + localStorage.getItem("kayttajanimi"))

        document.getElementById("käyttäjäNimiOikealaita").style.display = "";
        document.getElementById("käyttäjäNimiOikealaita").innerHTML = localStorage.getItem("kayttajanimi")

        document.getElementById("kirjauduNappi").style.display = "none";
        document.getElementById("rekisteroiNappi").style.display = "none";

        document.getElementById("kirjauduUlosNappi").style.display = "";
    }
    else {
        document.getElementById("kirjauduUlosNappi").style.display = "none";
        document.getElementById("käyttäjäNimiOikealaita").style.display = "none";
    }

}

function rekisteroi() {
    let nimi = document.getElementById("kayttajanimi").value;
    let salasana = document.getElementById("salasana").value;

    localStorage.setItem("kayttajanimi", nimi)
    localStorage.setItem("salasana", salasana)
    localStorage.setItem("kirjautunut", "kyllä")

}

function kirjaudu() {
    let kirjautumisNimi = document.getElementById("nimiTekstiboksi").value;
    let kirjautumisSalasana = document.getElementById("salasanaTekstiboksi").value;

    if(kirjautumisNimi === localStorage.getItem("kayttajanimi") && kirjautumisSalasana === localStorage.getItem("salasana")) {
        localStorage.setItem("kirjautunut", "kyllä")
        window.location.replace("index.html");
    } else {
        console.log("Käyttäjänimi tai salasana on väärin.")
    }
}

function ulos() {
    localStorage.setItem("kirjautunut", "ulos")
    document.getElementById("kirjauduNappi").style.display = "";
    document.getElementById("rekisteroiNappi").style.display = "";
    console.log("Poista tervetulo nappi")
    document.getElementById("kirjauduUlosNappi").style.display = "none";
    document.getElementById("käyttäjäNimiOikealaita").style.display = "none";
}   
