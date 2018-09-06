var datum, godina, caseDnevno, brojGodina, buducaGodina, caseUkupno, litara,
    godinaSpan, caseDnevnoSpan, brojGodinaSpan, buducaGodinaSpan, caseUkupnoSpan, litaraSpan;

// Pravimo objekat datuma koji sadrzi danasnji datum
datum = new Date();
// Izvlacimo godinu
godina = datum.getFullYear();
/* 
    Pitamo korisnika da unese podatke o vodi i godinama
    koji ce se sacuvati kao (tekstualne) string vrednosti
    tako da ih moramo konvertovati u celobrojnu (int) vrednost
*/
caseDnevno = window.prompt("Koliko casa vode pijete dnevno?");
brojGodina = window.prompt("Unesite broj za koliko godina zelite da izracunamo kolicinu popijene vode");

// Konvertujemo string vrednosti u integer
caseDnevno = Number.parseInt(caseDnevno);
brojGodina = Number.parseInt(brojGodina);

// Izracunavamo godinu do koje cemo racunati broj popijenih casa vode 
buducaGodina = godina + brojGodina

// Funkcija koja racuna koliko ce casa biti popijeno do buduce godine
function izracunajCaseUkupno(caseDnev, god, buducaGod) {
    var caseUk = 0, i;
    /*
        Za svaku godinu dodajemo
        dodajemo 365 dana * broj casa dnevno
        a ukoliko je godina prestupna 
        onda dodajemo 366 
    */
    for(i = god; i <= buducaGod; i++)
        if(( (i % 4 === 0) && (i % 100 !== 0) ) || ( (i % 400) === 0) )
            caseUk += 366*caseDnev;
        else
            caseUk += 365*caseDnev;

    return caseUk;
}

// Izracunavamo broj casa i cuvamo rezultat
caseUkupno = izracunajCaseUkupno(caseDnevno, godina, buducaGodina);

/*
    Racunamo broj litara,
    pretpostavimo da 1 litar sadrzi 4 case
    i zaokruzujemo broj  
*/
litara = Math.round(caseUkupno / 4);

// Dohvatamo elemente gde cemo smestiti vrednosti
godinaSpan = document.getElementById("godina");
caseDnevnoSpan = document.getElementById("br-casa-dnevno");
buducaGodinaSpan = document.getElementById("buduca-godina");
caseUkupnoSpan = document.getElementById("br-casa-ukupno");
litaraSpan = document.getElementById("br-litara");

// Smestamo izracunate vrednosti
godinaSpan.textContent = godina;
caseDnevnoSpan.textContent = caseDnevno;
buducaGodinaSpan.textContent = buducaGodina;
caseUkupnoSpan.textContent = caseUkupno;
litaraSpan.textContent = litara;