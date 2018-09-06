var restoranMia = {
    // svojstva
    ime: "Mia",
    brojStolova: 20,
    zauzeto: 7,
    cigarete: true,
    jela: ["pizza", "lazanje", "pasta"],
    // metodi
    proveriSlobodne: function() {
        // this predstavlja objekat restoranMia
        return this.brojStolova - this.zauzeto;
    }
};

// Svojstvima i metodima pristupamo pomocu .ime_svojstva ili [ime_svojstva]
console.log("Ime restorana:", restoranMia.ime);
console.log("Dozvoljeno konzumiranje cigareta:", restoranMia["cigarete"]);
console.log("Broj slobodnih stolova:", restoranMia.proveriSlobodne());

// Mozemo menjati vrednosti svojstvima i metodima
restoranMia.zauzeto = 8;
console.log("Broj zauzetih stolova:", restoranMia.zauzeto);

// Mozemo dodavati nova svojstva i metode
restoranMia.pice = ["voda", "sok", "vino"];
console.log("Pice:", restoranMia.pice);

// Mozemo obrisati svojstva ili metode
delete restoranMia.cigarete;
// Ukoliko obrisemo neko svojstvo, ono ce imati vrednost undefined
console.log("Dozvoljeno konzumiranje cigareta:", restoranMia.cigarete);

/* 
    Mozemo napraviti konstruktor funkciju koja ce praviti objekat restorana
    na osnovu argumenata koje joj zadamo.
    Praksa je da imena konstruktor funkcija pocinju velikim slovom.
*/
function Restoran(ime, brStolova, zauzeto, cigarete, jela) {
    /*
        Na ovaj nacin kazemo da objekat koji se bude napravio
        (odnosno this) ce imati svojstvo ime, cija vrednost
        ce biti ona vrednost koju smo prosledili funkciji, itd.
    */
    this.ime = ime;
    this.brojStolova = brStolova;
    this.zauzeto = zauzeto;
    this.cigarete = cigarete;
    this.jela = jela;
    this.proveriSlobodne = function() {
        return this.brojStolova - this.zauzeto;
    }
}

// U ovom trenutku, objekat this ce da bude restoranHuros
var restoranHuros = new Restoran("Huros", 30, 0, false, ["nachos", "burito", "paelja"]);
console.log(restoranHuros);

// Mozemo napraviti i prazan objekat kome cemo dodavati svojstva i metode
var prazan1 = {};
// Funkcija Object vec postoji definisana u jeziku
var prazan2 = new Object();

/*
    Ako funkcija nije pozvana sa new ili definisana unutar nekog objekta
    this je onda globalni objekat window
*/
var cena = 125;
function izracunajCenu(kolicina) {
    return kolicina * this.cena;
}
console.log("Pozivanje funckije izracunajCenu koja je definisana van objekta:", izracunajCenu(1));

var cement = {
    cena: 225,
    // Ovde je objekat this - cement
    izracunajCenu: function(kolicina) { 
        return kolicina * this.cena;
    }
}
console.log("Pozivanje funckije izracunajCenu koja je definisana u objektu cement:", cement.izracunajCenu(1));

// Niz objekata
var slatkisi = [
    {ime: "Bananica", cena: 15},
    {ime: "Jaffa", cena: 85},
    {ime: "Noblice", cena: 105}
];

console.log("Ispisujemo prvi slatkis iz niza slatkisi:", slatkisi[0]);
console.log("Ispisujemo ime drugog slatkisa iz niza slatkisi:", slatkisi[1].ime);
console.log(slatkisi);

// Objekat unutar objekta
var firma = {
    ime: "Best",
    vlasnik: {
        ime: "Pera",
        prezime: "Peric"
    }
};

console.log("Objekat vlasnik unutar objekta firma:", firma.vlasnik);
console.log("Ime vlasnika:", firma.vlasnik.ime);
console.log(firma);
