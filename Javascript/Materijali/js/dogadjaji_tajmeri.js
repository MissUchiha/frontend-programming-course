var button = document.querySelector("button");

// Vezujemo funkciju za dogadjaj klika na dugme
button.addEventListener("click", function() {
    var sekunde = document.getElementById("sekunde");

    /*
        Zakazujemo funkciju koja ce da se izvrsava na svakih 1000 milisekundi
        tj. na svaki sekund
    */
    var timer = setInterval(function() {
        // Pravimo integer vrednost od tekstualnog broja sekundi 
        var broj = Number.parseInt(sekunde.textContent);
        /*
            Ukoliko je broj sekundi veci od 0, 
            umanjujemo ga za 1 i ispisujemo u element sekunde
        */
        if(broj > 0)
            sekunde.textContent = Number.parseInt(sekunde.textContent) - 1;
    }, 1000);

    /*
        Zakazujemo funkciju koja ce da se izvrsi jedanput nakon 11000 milisekundi, 
        odnosno 11 sekundi, prikazace vatromet,
        i stopirace izvrsavanje prethodno zakazane funkcije na svaki 1 sekund
    */
    setTimeout(function() { 
        document.getElementById("slika").removeAttribute("class");
        clearInterval(timer);
    }, 11000);
});