var broj, odgovor, vrednost;

broj = document.getElementById('random');
odgovor = document.getElementById('odgovor');

/* 
    Generisemo nasumican broj od 0 - 10 i smestamo ga u element
    funkcija Math.random() vraca broj u opsegu 0-1,
    koji mnozimo sa 10 i skidamo mu decimale

    Primetimo da ce rezultat izracunavanja sa desne strane
    biti tipa broj koji cemo sacuvati u element 
    kao tekstualni sadrzaj odnosno tip string  
*/
broj.textContent = Math.floor(Math.random() * 10);

// Konvertujemo sacuvan broj iz tekstualnog tipa u tip broj
vrednost = Number(broj.textContent);

if (vrednost < 5) 
    odgovor.textContent = "- Broj je manji od 5";
else if (vrednost == 5)
    odgovor.textContent = "- Broj je jednak 5";
else
    odgovor.textContent = "- Broj je veći od 5";
