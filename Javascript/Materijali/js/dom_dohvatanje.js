var i, naslov, crtaniDetaljno, bambi, pan, panDetaljno, panDetaljnoText;
// Dohvatamo element sa zadatim atributom id
naslov = document.getElementById("naslov");

// Ispisujemo tekstualni sadrzaj elementa
console.log(naslov.textContent);

// Dohvatamo sve elemente koji imaju zadatu klasu (dobijamo niz)
crtaniDetaljno = document.getElementsByClassName("link");

// Ispisujemo sadrzaj elemenata
for(i = 0; i < crtaniDetaljno.length; i++) {
    // Ispisujemo tekstualni sadrzaj
    console.log("textContent: ", crtaniDetaljno[i].textContent);
    /*
        Ispisujemo HTML sadrzaj,
        primetimo da se tekstualni i HTML sadrzaj razlikuju
    */
    console.log("innerHtml: ", crtaniDetaljno[i].innerHTML);
}

// Dohvatamo element na osnovu selektora
bambi = document.querySelector("ul #bambi");
// Ispisujemo id elementa
console.log("Bambijev id: ", bambi.id);

// Dohvatamo sve elemente na osnovu selektora
crtaniDetaljno = document.querySelectorAll("ul li.link");

for(i = 0; i < crtaniDetaljno.length; i++) {
    if(crtaniDetaljno[i].hasAttribute("id") && crtaniDetaljno[i].getAttribute("id") === "aladin")
        crtaniDetaljno[i].innerHTML += " <span class='umanjeno'> omiljeni </span>";
}

// Dohvatamo li element petra pana
pan = document.getElementById("pan");

// Pravimo element a 
panDetaljno = document.createElement("a");

// Postavljamo mu atribut href 
panDetaljno.setAttribute("href", "http://www.imdb.com/title/tt0046183/");

// Pravimo tekstualni element sa sadrzajem "detaljno"
panDetaljnoText = document.createTextNode("[detaljno]");

// Postavljamo tekstualni element kao dete elementu a
panDetaljno.appendChild(panDetaljnoText);

// Postavljamo element a kao dete li elementa
pan.appendChild(panDetaljno);