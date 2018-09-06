
// Probati bez onload i script nije na kraju body

/*
    Vezujemo funkciju za dogadjaj ucitavanja stranice
    Kada stranica bude ucitana, izvrsice se ova funkcija
*/
window.onload = function () {
    var kutija = document.querySelector("img");
    // Cuvamo podatak o tome da li je kutija zatvorena ili nije
    var zatvorena = true;

    /*
        Vezujemo funkciju za dogadjaj 
        ulazak kursora u prostor img elementa
        i sklanjamo atribut class
        tako da slicica dobije punu boju
    */
    kutija.addEventListener("mouseenter", function (event) {
        kutija.removeAttribute("class");
    });

    /*
        Vezujemo funkciju za dogadjaj 
        izlazak kursora iz prostora img elementa
        i dodajemo atribut class
        tako da slicica posvetli
    */
    kutija.addEventListener("mouseleave", function (event) {
        kutija.setAttribute("class", "providna");
    });

    // Vezujemo funkciju za dogadjaj klik na slicicu 
    kutija.addEventListener("click", function (event) {
        /*
            Ukoliko je slicica zatvorena, otvaramo je
            tako sto menjamo atribut src 
            i postavljamo slicicu otvorene kutije
            i menjamo indikator zatvorena
        */
        if (zatvorena) {
            kutija.setAttribute("src", "../../../Slike/boxopen.png");
            zatvorena = false;
        }
        /*
            Ukoliko je slicica otvorena, zatvaramo je
            tako sto menjamo atribut src 
            i postavljamo slicicu zatvorene kutije
            i menjamo indikator zatvorena
        */
        else {
            kutija.setAttribute("src", "../../../Slike/boxclose.png");
            zatvorena = true;
        }
    })
}

