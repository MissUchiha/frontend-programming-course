function ispisiNiz(niz) {
    console.log("Ispisujemo niz:");
    /*
        i - redni broj (indeks) elemenata u nizu 
        niz.length - duzina niza
        
        Petlja ima onoliko koraka koliko ima elemenata u nizu
        zbog toga i ide od 0 do duzine niza.
    */
    for(var i = 0; i < niz.length; i++) {
        console.log(niz[i]);
    }
}

var brojevi = [4,8,16,0,9,1,23,2,14,5,3,7];

ispisiNiz(brojevi);

var voce = ["banana", "ananas", "dinja", "mango", "tresnja", "jagoda", "kajsija", "jabuka"];

ispisiNiz(voce);

// Sklanjamo poslednji element iz niza "jabuka"
voce.pop();
// Stavljamo element "limun" na kraj niza 
voce.push("limun");
ispisiNiz(voce);

// Ispisujemo indeks elementa u nizu
console.log("Tresnja je na indeksu:", voce.indexOf("tresnja"));
// Ukoliko element ne postoji indeks ce biti -1
console.log("Nar je na indeksu:", voce.indexOf("nar"));

/*
    Spajamo sve elemente niza u jedan string.
    Spajamo ih stringom " -- ".
    */
console.log("Spojeno voce:");
console.log(voce.join(" -- "));

var povrce = ["kupus", "cvekla", "luk", "grasak", "boranija", "celer"];

var hrana = voce.concat(povrce);
ispisiNiz(hrana);

// Izdvajamo elemente od 5 do 9 indeksa
ispisiNiz(hrana.slice(5,9));

/* 
    Sortiramo elemente niza leksikografski
    Primetimo da se usled sortiranja brojevi 14 i 16
    nalaze pre broja 2 jer su leksikografski ispred 
*/
brojevi.sort();
ispisiNiz(brojevi);

/*
    Ako zelimo da sortiramo elemente niza po velicini
    mozemo napraviti nasu funkciju za poredjenje dva elementa iz niza
    i nju proslediti funkciji sort , tako da se elementi sortiraju u tom poretku.

    Funkcija poredi mora da ima dva argumenta (elementi koji se porede) 
    i da vraca rezultat:
        1  - prvi element ide pre drugog
        -1 - drugi element ide pre prvog
        0  - redosled nije bitan 
*/
function poredi(el1, el2) {
    if(el1 > el2)
        return 1;
    else if(el2 > el1)
        return -1;
    else
        return 0;
}

brojevi.sort(poredi);
ispisiNiz(brojevi);

/*
    Filtriramo niz odnosno pravimo novi niz 
    u kome su izbaceni elemente i koji ne zadovoljavaju zadat uslov.
    Uslov zadajemo kao funkciju koja ispituje da li element treba da ostane u nizu. 
    Funkcija mora da ima jedan argument (element cije ostajanje u nizu ispitujemo)
    i da vraca:
        true  - element treba da ostane u nizu
        false - element ne treba da ostane u nizu
*/

function ispitaj(el) {
    if(el >= 10)
        return true;
    else
        return false;
}

var dvocifreni = brojevi.filter(ispitaj);
ispisiNiz(dvocifreni);

