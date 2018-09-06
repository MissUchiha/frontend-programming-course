/* 
    Definisanje funkcije, od ovog trenutka funkcija postoji 
    i mozemo je pozvati da uradi posao kada je potrebno.
    Dali smo joj ime ispisi_zdravo.
*/
function ispisiZdravo() {
    console.log("Zdravo :)");
}

// Poziv funkcije, u ovom trenutku se funkcija izvrsava
ispisiZdravo();

/*
    Funkcije mogu imati argumente, 
    podatke koje im prosledimo kada ih pozovemo.
    Argumentima dajemo ime, i to ime koristimo u funkciji.
*/
function ispisiZdravoImePrezime(ime, prezime) {
    /* 
        Argumenti ime i prezume su promenljive 
        koje ce dobiti vrednost kada se funkcija pozove
        tako da ce u trenutku ispisivanja
        imati vrednost koju smo prosledili kada smo pozvali funkciju
    */
    console.log("Zdravo", ime, prezime, ":)")
}

// Pozivamo funkciju i prosledjujemo joj vrednosti argumenata
ispisiZdravoImePrezime("Janko", "Petrovic");

/* 
    Funkcija racuna obim kruga, ciji precnik je prosledjen kao argument
    i vraca rezultat
*/
function izracunajObimKruga(r) {
    return 2 * r * 3.14;
} 

var precnik = 18;
var obim = izracunajObimKruga(precnik);
console.log("Obim kruga sa precnikom", precnik, "je", obim);

/*
    Funkcije mozemo definisati tako sto cemo napraviti anonimnu funkciju
    (funkciju koja nema ime) 
    i smestiti je u promenljivu kojoj cemo dati ime.
*/
var izracunajPovrsinuKruga = function(r) {
    return r * r * 3.14;
}

// Funkciju pozivamo na isti nacin
var povrsina = izracunajPovrsinuKruga(precnik);
console.log("Povrsina kruga sa precnikom", precnik, "je", povrsina);

/*
    Promenljive definisane ovako su globalne
    i mozemo ih koristiti u funkcijama
*/
var popust = 20;

function izracunajCenu(kolicina) {
    /* 
        Funkcije mogu imati svoje promenljive 
        koje su vidljive samo unutar funkcije
        i one se nazivaju lokalne promenljive
    */
    var jedinicnaCena = 128.5;
    var rezultatCena = (kolicina * jedinicnaCena) - popust;
    return rezultatCena;
}

console.log("Cena 10 proizvoda je:", izracunajCenu(10));
console.log("Globalna promenljiva je vidljiva svuda, popust:", popust);
console.log("Lokalna promenljiva je vidljiva u funkciji u kojoj je definisana, jedinicnaCena:", jedinicnaCena);

