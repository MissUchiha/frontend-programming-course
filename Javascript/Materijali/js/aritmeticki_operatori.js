
var a = 3, b = 4, c;

c = a + b;
console.log("Sabiranje a+b=", c);

c = a - b;
console.log("Oduzimanje a-b=", c);

c = a * b;
console.log("Mnozenje a*b=", c);

c = a / b;
console.log("Deljenje a/b=", c);

c = a % b;
console.log("Ostatak pri deljenju a%b=", c);

c = a ** b;
console.log("Stepenovanje a**b=", c);

/*
    Primetimo da se vrednosti promenljivih a i b nisu promenile
    vec smo rezultate racunanja smestali u promenljivu c
*/

// Povecanje promenljive a za 1
a++;
// Sada se vrednost u promenljivoj a povecala
console.log("Povecanje za jedan a++ ", a);

// Umanjenje promenljive b za 1
b++;
// Sada se vrednost u promenljivoj b umanjila
console.log("Povecanje za jedan b-- ", b);

// Veliki izraz
c = ((a / 2) - c) * ((b ** 2) - (4 / a));
console.log("Veliki izraz ((a / 2) - c) * ((b ** 2) - (4 / a)) ", c);

/*
    Ako izraz ima zagrade, izracunava se prvo to sto je u zagradama.
    Ako izraz nema zagrade, stepenovanje ima veci prioritet od mnozenja i deljenja
    dok oni imaju veci prioritet od sabiranja i oduzimanja 
    tako da se u izrazu prvo izracunavaju operacije sa vecim prioritetom.
*/

c = a + b * 3;
// Ovde se prvo izvrsava b * 3, pa se onda dodaje a
console.log("a + b * 3 = ", c);


c = (a + b) * 3;
// Ovde se prvo izvrsava a + b , pa se onda mnozi sa 3
console.log("(a + b) * 3 = ", c);

// String operator

var ukus = "cokoladna";
var jelo = "torta";
var ukusnoJelo = ukus + " " + jelo;
console.log("Nadovezivanje stringova: ukus + \" \" + jelo = ", ukusnoJelo);