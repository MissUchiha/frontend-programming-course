var poruka;   
var nivo = 2;

/*
    Ispisujemo razlicitu poruku u zavisnosti od toga
    na kom se nivou igrac nalazi.

    TODO: Eksperimentisimo tako sto cemo ukloniti break naredbe.
    
    Ispisace se poruka Srecno!. 
    To se desava zato sto su se uslovi redom ispitivali,
    prvi nije tacan
    drugi jeste tacan, poruka postaje "Samo tako nastavi!"
    treci nije tacan
    cetvrti je default i on je uvek tacan, poruka postaje "Srecno!"
*/
switch (nivo) {
    case 1: {
        poruka = "Na pocetku si, srecno!";
        break;
    }
    case 2: {
        poruka = "Samo tako nastavi!";
        break;
    }
    case 3: {
        poruka = "Poslednji nivo, jos malo do kraja!";
        break;
    }
    default: {
        poruka = "Srecno!";
        break;
    }
}

console.log(poruka);

