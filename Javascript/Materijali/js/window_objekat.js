// window objekat nam je globalno dostupan i predstavlja prozor browsera

console.log("Vrednost svojstva location u window objektu:", window.location);

console.log("Istorija pretrazivanja koja se nalazi u window objektu:", window.history);

console.log("Visina ekrana:", window.screen.height);

console.log("Sirina ekrana:", window.screen.width);

window.alert("Otvorio se alert prozorcic");
window.confirm("Otvorio se confirm prozorcic");

// Cuvamo vrednost koja se upise u prozorcic u promenljivoj
var godine = window.prompt("Koliko imate godina", "22");

console.log("Uneli ste sledeci broj godina: ", godine);