/*
    Zadatak je da sortiramo leksikografski
    i ispisemo imena i prezimena korisnika.
*/


// Funkcija koja poredi dva stringa (imena ili prezimena)
function poredi(el1, el2) {
    /*
        Poredjenje stringova leksikografski operatorima < i >
        Treba imati u vidu kako se pojedinacni karakteri porede:

        0 < 1 < 2 ... < 10 
        
        A < B < C < D...X < Y < Z < a < b < c < d...x < y < z

        Stringovi se porede tako sto se prvo porede njihova prva slova,
        ukoliko su jednaka, onda se porede druga slova,
        ukoliko su jednaka, onda treca i tako sve dok se ne dodje do kraja

        Razmotrimo par slucajeva poredjenja:

            "Ana" < "ana"   - true
            "Ana" < "bojan" - true
            "Ana" < "Bojan" - true
            "ANA" < "Ana"   - true
            "Lana" < "Rade" - true
            "ANA"  < "ANA1" - true

        Zelimo da stringove "ana" i "Ana" tretiramo kao jednake
        zbog toga prvo prebacimo sva slova u velika
        "ANA" i "ANA" jesu jednaki
    */
    if(el1.toUpperCase() < el2.toUpperCase())
        return -1;
    else if(el1.toUpperCase() > el2.toUpperCase())
        return 1;
    else    
        return 0;
}

/*
    Funkcija koja pravi li elemente
    postavlja im sadrzaj (tekst imena ili prezimena) 
    koji se nalazi u prosledjenom nizu tekstNiz
    i lepi ih u listu lista
*/
function nalepiElementeListe(tekstNiz, lista) {
    var i, elem;
    for(i = 0; i < tekstNiz.length; i++) {
        elem = document.createElement("li");
        elem.textContent = tekstNiz[i];
        lista.appendChild(elem);
    }
    
}

// Funkcija koja sortira imena i prezimena
function sortirajImenaPrezimena() {
    /*
        Dohvatamo:
            niz li elemenata sa korisnicima
            listu gde cemo smestiti imena
            listu gde cemo smestiti prezimena
    */
    var korisnici, imena, prezimena, imenaNiz, prezimenaNiz, i, elem;

    korisnici = document.querySelectorAll("#lista li");
    imena = document.getElementById("imena");
    prezimena = document.getElementById("prezimena");
    imenaNiz = []; 
    prezimenaNiz = [];

    // Prolazimo kroz niz li elemenata sa korisnicima
    for(i = 0; i < korisnici.length; i++) {
        /*
            Uzimamo njihov tekstualni sadrzaj 
            (jedan string koji sadrzi 
            ime, razmak " " i prezime)
        */
        elem = korisnici[i].textContent;
        /*
            Razdvajamo string po karakteru " "
            tako da dobijemo niz sa elementima
            niz[0] - ime
            niz[1] - prezime 
        */
        niz = elem.split(" ");
        // Dodajemo ime u niz imena
        imenaNiz.push(niz[0]);
        // Dodajemo prezime u niz prezimena
        prezimenaNiz.push(niz[1]);
    }
        
    // Sortiramo imena sa nasom funkcijom poredjenja
    imenaNiz.sort(poredi);
    // Sortiramo prezimena sa nasom funkcijom poredjenja
    prezimenaNiz.sort(poredi);
    
    // Lepimo imena u listu imena
    nalepiElementeListe(imenaNiz, imena);
    // Lepimo prezimena u listu prezimena
    nalepiElementeListe(prezimenaNiz, prezimena);
}

sortirajImenaPrezimena()