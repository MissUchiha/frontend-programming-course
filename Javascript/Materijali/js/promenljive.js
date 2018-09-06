/*
    Pravimo promenljivu sa imenom tekst
    ovo se takodje naziva deklarisanje promenljive
*/
var tekst;

/*
    Promenljivoj sa imenom tekst 
    dodeljujemo vrednost teksta Hello world
    koji ce da cuva
*/ 
tekst = 'Hello world!';

// Ispisujemo vrednost promenljive
console.log("Vrednost promenljive tekst:");
console.log(tekst);

/*
    Ukoliko pokusamo da ispisemo vrednost promenljive kojoj nismo dodelili vrednost
    ispisace se undefined
*/
var prazna;
console.log("Vrednost promenljive prazna:");
console.log(prazna);

// Promenljivoj mozemo dodeliti vrednost cim je napravimo
var tekst2 = "Zdravo svima!"
console.log("Vrednost promenljive tekst2:");
console.log(tekst2);

// Promenljivoj mozemo promeniti vrednost 
tekst = "Good night!"
console.log("Vrednost promenljive tekst nakon sto smo je promenili je:");
console.log(tekst);

