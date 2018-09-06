/*
    Ukoliko uporedimo dve vrednosti koje nisu istog tipa
    Javascript ce pokusati da ih konvertuje tako da budu istog tipa
    i uporedi tako
*/
if("1" > 0) {
    console.log("\"1\" > 0 je tacno");
}
else {
    console.log("\"1\" > 0 je netacno");
}

var nedefinisana, prazna, notAnumber, beskonacno;

prazna = "";
notAnumber = 2 / 'a';
beskonacno = 2 / 0;

console.log("Nedefinisana:", nedefinisana);
console.log("Prazna:", prazna);
console.log("NotANumber:", notAnumber);
console.log("Beskonacno:", beskonacno);

/*
    Prilikom konverzija u boolean tip sledece vrednosti bivaju true:
*/
var tacno, broj, tekst;

tacno = true;
broj = 2;
tekst = "asdasd";

if(tacno && broj && tekst && beskonacno) {
    console.log(tacno, broj, tekst, beskonacno, "se konvertuju u true.");
}

var netacno, nula;

netacno = false;
nula = 0;

if(!nedefinisana && !prazna && !notAnumber && !netacno && !nula){
    console.log(nedefinisana, prazna, notAnumber, netacno, nula, "se konvertuju u false.");
}