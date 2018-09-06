var red = document.querySelector(".row");

// Vezujemo funkciju za pocetak pritiska tastera na tastaturi
document.onkeydown = function(event) {
    // Pravimo nov element
    var div = document.createElement("div");
    // Postavljamo mu klase za stilizovanje
    div.setAttribute("class","col-1 slovo");
    // Postavljamo tekst slova koji smo pritisnuli
    div.textContent = event.key;
    // Dodajemo element sa slovom
    red.appendChild(div);
    console.log("Onkeydown  --- slovo ", event.key)
}


// Vezujemo funkciju za dogadjaj pritiska tastera na tastaturi
document.onkeypress = function(event) {
    console.log("Onkeypress --- slovo ", event.key)
}

// Vezujemo funkciju za dogadjaj pustanja pritiska tastera na tastaturi
document.onkeyup = function(event) {
    console.log("Onkeyup    --- slovo ", event.key)
}