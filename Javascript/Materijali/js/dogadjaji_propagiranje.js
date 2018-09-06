var body, div, p, button;

body = document.body;
div = document.querySelector("div");
p = document.querySelector("p");
button = document.querySelector("button");

/*
    Vezujemo funkcije za dogadjaj klik
    na razlicitim elementima
    u smeru ispaljivanja dogadjaja 
    od roditelja ka dete elementa
*/
body.addEventListener("click", function (event) {
    console.log("Capturing --- body \n e.target", event.target);
}, true);
div.addEventListener("click", function (event) {
    console.log("Capturing --- div \n e.target", event.target);
}, true);
p.addEventListener("click", function (event) {
    console.log("Capturing --- p \n e.target", event.target);
}, true);
button.addEventListener("click", function (event) {
    console.log("Capturing --- button  \n e.target", event.target);
}, true);

/*
    Vezujemo funkcije za dogadjaj klik
    na razlicitim elementima
    u smeru ispaljivanja dogadjaja 
    od dete elementa nazad ka roditelju
*/
body.addEventListener("click", function (event) {
    console.log("Bubbling  --- body \n e.target", event.target);
}, false);
div.addEventListener("click", function (event) {
    console.log("Bubbling  --- div \n e.target", event.target);
}, false);
p.addEventListener("click", function (event) {
    console.log("Bubbling  --- p \n e.target", event.target);
}, false);
button.addEventListener("click", function (event) {
    console.log("Bubbling  --- button \n e.target", event.target);
}, false);