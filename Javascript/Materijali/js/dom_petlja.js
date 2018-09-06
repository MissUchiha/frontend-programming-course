var jedna, dve, tri, clearTacka, i, j, k;

jedna = document.getElementById("jedna");
dve = document.getElementById("dve");
tri = document.getElementById("tri");
clearTacka = "<div class='clear-tacka'></div>";
    
// Ispisujemo jedan red tackica sa bojama
for(i = 0; i <= 255; i += 8) {
    jedna.innerHTML += '<div class="tacka" style="background:rgb(0,0,'+i+')"></div>'
}

/*
    Ispisujemo matricu tackica sa bojama.

    Prva petlja zavisi od promenljive i druga od j. 
    i i j se menjaju na sledeci nacin:

    i = 0
        j = 0
        j = 16
        j = 32
        j = 48
        ...
        j = 256
        uslov da je j <= 255 ne vazi
        izlazimo iz druge petlje
        izvrsava se dodavanje clearTacka
        povecava se i += 16
    
    i = 16
        j = 0
        j = 16
        j = 32
        j = 48
        ...
        j = 256
        uslov da je j <= 255 ne vazi
        izlazimo iz druge petlje
        izvrsava se dodavanje clearTacka
        povecava se i += 16
    
    i = 32
        j = 0
        j = 16
        j = 32
        j = 48
        ...
        j = 256
        uslov da je j <= 255 ne vazi
        izlazimo iz druge petlje
        izvrsava se dodavanje clearTacka
        povecava se i += 16
    
    ...

    i = 256
    uslov da je i <= 255 ne vazi
    izlazimo iz prve petlje
    kraj.
*/
for(i = 0; i <= 255; i += 16) {
    for(j = 0; j <= 255; j += 16) {
        dve.innerHTML += '<div class="tacka" style="background:rgb('+j+',0 ,'+i+')"></div>'
    }
    dve.innerHTML += clearTacka;
}


/*
    Ispisujemo niz matrica sa tackicama sa bojama.

    Prva petlja zavisi od promenljive i druga od j. 
    i i j se menjaju na sledeci nacin:

    i = 0
        j = 0
            k = 0
            k = 16
            ...
            k = 256
            uslov da je k <= 255 ne vazi
            izlazimo iz trece petlje
            izvrsava se dodavanje clearTacka
            povecava se j += 16
    
        j = 16
            k = 0
            k = 16
            ...
            k = 256
            uslov da je k <= 255 ne vazi
            izlazimo iz trece petlje
            izvrsava se dodavanje clearTacka
            povecava se j += 16        
    
        ...
    
        j = 240
            k = 0
            k = 16
            ...
            k = 256
            uslov da je k <= 255 ne vazi
            izlazimo iz trece petlje
            izvrsava se dodavanje clearTacka
            povecava se j += 16
        
        j = 256
        uslov da je j <= 255 ne vazi
        izlazimo iz druge petlje
        povecava se i += 16

    i = 16
        j = 0
            k = 0
            k = 16
            ...
            k = 256
            uslov da je k <= 255 ne vazi
            izlazimo iz trece petlje
            izvrsava se dodavanje clearTacka
            povecava se j += 16
        
        j = 16
            k = 0
            k = 16
            ...
            k = 256
            uslov da je k <= 255 ne vazi
            izlazimo iz trece petlje
            izvrsava se dodavanje clearTacka
            povecava se j += 16        
    
        ...
    
        j = 240
            k = 0
            k = 16
            ...
            k = 256
            uslov da je k <= 255 ne vazi
            izlazimo iz trece petlje
            izvrsava se dodavanje clearTacka
            povecava se j += 16
        
        j = 256
        uslov da je j <= 255 ne vazi
        izlazimo iz druge petlje
        povecava se i += 16
    
    ...

    i = 240
        j = 0
            k = 0
            k = 16
            ...
            k = 256
            uslov da je k <= 255 ne vazi
            izlazimo iz trece petlje
            izvrsava se dodavanje clearTacka
            povecava se j += 16
        
        ...
    
        j = 240
            k = 0
            k = 16
            ...
            k = 256
            uslov da je k <= 255 ne vazi
            izlazimo iz trece petlje
            izvrsava se dodavanje clearTacka
            povecava se j += 16
        
        j = 256
        uslov da je j <= 255 ne vazi
        izlazimo iz druge petlje
        povecava se i += 16
    
    i = 256
    uslov da je i <= 255 ne vazi
    izlazimo iz prve petlje
    kraj.
*/
for(i = 0; i <= 255; i += 64) {
    for(j = 0; j <= 255; j += 64) {
        for(k = 0; k <= 255; k += 64) {
            tri.innerHTML += '<div class="tacka" style="background:rgb('+i+','+j+','+k+')"></div>'
        }
        tri.innerHTML += clearTacka;
    }
}
