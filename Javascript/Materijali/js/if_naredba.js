var rezultat = 88;
var bonus = 0;

/*
    Ispitujemo uslov da li je rezultat veci od 50,
    ukoliko jeste, igrac je pobedio i ispisujemo cestitku
    inace nije pobedio i ispisujemo poruku 
*/
if(rezultat > 50) 
    window.alert("Cestitamo, pobedili ste!");
else
    window.alert("Vise srece drugi put");


/* 
    Mozemo ispitivati vise uslova,
    izvrsice se onaj blok naredbi kod uslova koji je prvi ispunjen.
    Primetimo da ukoliko imamo vise naredbi moramo ih okruziti { i }
    dok ako imamo jednu naredbu, nju mozemo i ne moramo okruziti
*/
if(rezultat >= 85) {
    bonus += 5;
    console.log("Bravo! Imali ste preko 85 poena, osvojili ste 5 bonus poena!");
}
else if(rezultat > 50) {   
    console.log("Cestitamo, pobedili ste!");
}
else {
    console.log("Vise srece drugi put");
}

/*
    Uslov moze da bude bilo koji izraz koji kao rezultat daje true ili false
*/
if((rezultat + bonus) <= 50) {
    console.log("Nazalost vas rezultat sa dodatnim bonusom nije bio dovoljan. Vise srece drugi put.")
}

/*
    Postoje dva tipa operatora jednakosti
    Ne striktan == i striktan ===
*/
if(9 == 9) {
    console.log("9 == 9 je tacno");
}
else {
    console.log("9 == 9 je netacno");    
}

if(9 == '9') {
    console.log("9 == \"9\" je tacno");    
}
else {
    console.log("9 == \"9\" je netacno");    
}

if(9 === 9) {
    console.log("9 === 9 je tacno");
}
else {
    console.log("9 === 9 je netacno");    
}

if(9 === "9") {
    console.log("9 === \"9\" je tacno");    
}
else {
    console.log("9 === \"9\" je netacno");    
}

/*
    Mozemo povezivati operatore poredjenja (>, <, >=, <=, ==, !==, ===, !==)
    logickim operatorima (&& - i, || - ili, ! - ne)

    Ako je rezultat razlicit od nule i bonus veci od 5

*/

if(bonus != 0 && (rezultat + bonus > 100)) {
    rezultat = 100;
    console.log("Ne mozete imati vise od 100 poena.");
}
else {
    rezultat = rezultat + bonus;
    bonus = 0;
    console.log("Uz bonus vas rezultat je:", rezultat);
}