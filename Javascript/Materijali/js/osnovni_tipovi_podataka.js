// Numericki podaci

// Celi brojevi
var ceo_broj = 432;
console.log("Ceo broj:");
console.log(ceo_broj);

// Negativni celi brojevi
var negativan_ceo_broj = -95;
console.log("Negativan ceo broj:");
console.log(negativan_ceo_broj);

// Decimalni brojevi
var decimalni_broj = 21.23;
console.log("Decimalni broj:");
console.log(decimalni_broj);

// Negativni decimalni brojevi
var negativan_decimalni_broj = -0.84;
console.log("Negativan decimalni broj:");
console.log(negativan_decimalni_broj);

// Tekstualni podaci - String

// Mozemo ih pisati izmedju dvostrukih navodnika
var tekst = "lalala";
console.log("Tekst izmedju dvostrukih navodnika:");
console.log(tekst);

// A mozemo ih pisati i izmedju jednostrukih navodnika
tekst = 'lalala';
console.log("Tekst izmedju jednostrukih navodnika:");
console.log(tekst);

// Ovo je pogresno
// tekst = 'lalala";
// tekst = "lalala';

// Boolean podaci

var tacno = true;
var netacno = false;
console.log("Vrednosti tacno i netacno:");
console.log(tacno);
console.log(netacno);

// Nizovi

// Niz stringova
var sastojci = ["jaja", "brasno", "secer", "puter", "slag", "jagode"];

// Ispisujemo elemente jedan po jedan
console.log("Elementi niza sastojci:");
console.log(sastojci[0]);
console.log(sastojci[1]);
console.log(sastojci[2]);
console.log(sastojci[3]);
console.log(sastojci[4]);
console.log(sastojci[5]);

// Ispisujemo ceo niz
console.log(sastojci);

// Dodajemo jos jedan sastojak u niz, na indeks 6
sastojci[6] = "cokolada";
// ispisujemo dodati element
console.log("Element koji smo dodali u niz sastojci:");
console.log(sastojci[6]);

console.log("Element na poziciji 5 u nizu sastojci pre promene:");
console.log(sastojci[5]);
// Menjamo vrednost elementa u nizu
sastojci[5] = "breskve";
console.log("Element na poziciji 5 u nizu sastojci nakon promene:");
console.log(sastojci[5]);

// Nizove mozemo praviti i pomocu konstrukcije new Array(elementi)
var zauzeteUcionice = new Array(1, 3, 4, 6);

// Niz moze sadrzati elemente bilo kog tipa
var kamate = [11.2, 10.9, 7, 6.5];
