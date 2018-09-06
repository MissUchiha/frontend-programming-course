// Ispisati brojeve od 0 do 5, neukljucujuci 5


console.log("Resenje sa petljom:")
var i = 0;
while(i < 5) {
    console.log("Promenljiva i ima vrednost: ", i);
    i++;
}


// Ispisati parne brojeve od 0 do 10, ukljucujuci 10
console.log("-- Ispisati parne brojeve od 0 do 10 (1. nacin)--");
i = 0; 
while(i <= 10) {
    console.log(i);
    i = i + 2;
}

console.log("-- Ispisati parne brojeve od 0 do 10 (2. nacin)--");
i = 0; 
while(i <= 10) {
    /*
        Primetimo da moramo povecati brojac pre continue naredbe
        jer se poslednja naredba i++ preskace ukoliko se izvrsi nareba continue
    */
    if(i % 2 != 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
