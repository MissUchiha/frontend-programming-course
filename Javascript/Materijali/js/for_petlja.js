// Ispisati brojeve od 0 do 5, neukljucujuci 5

console.log("-- Ispisati brojeve od 0 do 5 --");
console.log("Resenje bez petlje:");
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);

console.log("Resenje sa petljom:")
for(var i = 0; i < 5; i++) {
    console.log("Promenljiva i ima vrednost: ", i);
}

// Ispisati brojeve od 5 do 10, ukljucujuci 5 i neukljucujuci 10
console.log("-- Ispisati brojeve od 5 do 10 --");
for(var i = 5; i < 10; i++) {
    console.log(i);
}


// Ispisati parne brojeve od 0 do 10, ukljucujuci 10
console.log("-- Ispisati parne brojeve od 0 do 10 (1. nacin)--");
for(var i = 0; i <= 10; i = i + 2) {
    console.log(i);
}

console.log("-- Ispisati parne brojeve od 0 do 10 (2. nacin)--");
for(var i = 0; i <= 10; i++) {
    /*
        Naredbom continue preskacemo trenutni korak petlje
        i prelazimo na sledeci korak

        U nasem slucaju, zelimo da preskocimo korake 
        kada broj koji ispisujemo nije paran
        tj. ostatak pri deljenju i sa 2 nije 0
    */
    if(i % 2 != 0)
        continue;
    console.log(i);
}

// Ispisati zbir svih brojeva od 0 do 100 koji su puni kvadrati
var zbir = 0;
for(var i = 1; i <= 10; i++) {
    console.log("Dodajemo u zbir: ", i*i);
    zbir += i*i;
}
console.log("Zbir je:", zbir);