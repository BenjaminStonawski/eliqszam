function alapallas() {
    document.getElementById("aroma-gomb").onmouseleave = function() 
    {
        document.getElementById("aroma-gomb").style.backgroundColor = "#1d1d1d";
    }
    document.getElementById("aroma-gomb").style.backgroundColor = "#1d1d1d";
    document.getElementById("flaska-gomb").style.backgroundColor = "black";
    document.getElementById("flaska-gomb").onmouseover = function() 
    {
        document.getElementById("flaska-gomb").style.backgroundColor = "#1d1d1d";
    }
    document.getElementById("flaska-gomb").onmouseleave = function() 
    {
        document.getElementById("flaska-gomb").style.backgroundColor = "black";
    }
}

function aroma() {
    document.getElementById("aroma-gomb").onmouseleave = function() 
    {
        document.getElementById("aroma-gomb").style.backgroundColor = "#1d1d1d";
    }
    document.getElementById("aroma-gomb").style.backgroundColor = "#1d1d1d";
    document.getElementById("flaska-gomb").style.backgroundColor = "black";
    document.getElementById("flaska-gomb").onmouseover = function() 
    {
        document.getElementById("flaska-gomb").style.backgroundColor = "#1d1d1d";
    }
    document.getElementById("flaska-gomb").onmouseleave = function() 
    {
        document.getElementById("flaska-gomb").style.backgroundColor = "black";
    }

    document.getElementById("aroma-szam").style.display = "inline";
    document.getElementById("flaska-szam").style.display = "none";
    document.getElementById("veg").style.display = "none";
}

function flaska() {
    document.getElementById("flaska-gomb").onmouseleave = function() 
    {
        document.getElementById("flaska-gomb").style.backgroundColor = "#1d1d1d";
    }
    document.getElementById("aroma-gomb").style.backgroundColor = "black";
    document.getElementById("flaska-gomb").style.backgroundColor = "#1d1d1d";
    document.getElementById("aroma-gomb").onmouseover = function() 
    {
        document.getElementById("aroma-gomb").style.backgroundColor = "#1d1d1d";
    }
    document.getElementById("aroma-gomb").onmouseleave = function() 
    {
        document.getElementById("aroma-gomb").style.backgroundColor = "black";
    }

    document.getElementById("flaska-szam").style.display = "inline";
    document.getElementById("aroma-szam").style.display = "none";
    document.getElementById("veg").style.display = "none";
}

function aromaSzamitas() {
    let aroma;
    aroma = document.getElementById("aroma_input_field").value;

    let flaska;
    flaska = ((40/6)*aroma).toFixed(2);

    let alap;
    alap = (flaska/(120/121.74)).toFixed(2);
    if (alap%1 == 0) {
        alap = (flaska/(120/121.74)).toFixed(0);
    }

    document.getElementById("veg").style.display = "inline";
    if (!aroma) {
        document.getElementById("flaska-veg").innerHTML = "Hiba! Nem adott meg értéket."
        document.getElementById("aroma-veg").innerHTML = "";
        document.getElementById("alap-veg").innerHTML = "";
    }
    else if (aroma <= 0) {
        document.getElementById("flaska-veg").innerHTML = "Hiba! Az érték nem nagyobb 0-nál."
        document.getElementById("aroma-veg").innerHTML = "";
        document.getElementById("alap-veg").innerHTML = "";
    }
    else {
        document.getElementById("flaska-br").style.display = "none";
        document.getElementById("flaska-veg").style.display = "none";

        document.getElementById("aroma-veg").innerHTML = "Az aroma mennyisége: "+aroma+"g";
        document.getElementById("alap-veg").innerHTML = "Az alaplé mennyisége: "+alap+"g";
    }
} 

function flaskaSzamitas() {
    let flaska;
    flaska = document.getElementById("flaska_input_field").value;

    let aroma;
    aroma = (flaska/(40/6)).toFixed(2);
    if (aroma%1 == 0) {
        aroma = (flaska/(40/6)).toFixed(0);
    }

    let alap;
    alap = (flaska/(120/121.74)).toFixed(2);
    if (alap%1 == 0) {
        alap = (flaska/(120/121.74)).toFixed(0);
    }

    document.getElementById("veg").style.display = "inline";
    if (!flaska) {
        document.getElementById("flaska-veg").innerHTML = "Hiba! Nem adott meg értéket."
        document.getElementById("aroma-veg").innerHTML = "";
        document.getElementById("alap-veg").innerHTML = "";
    }
    else if (flaska <= 0) {
        document.getElementById("flaska-veg").innerHTML = "Hiba! Az érték nem nagyobb 0-nál."
        document.getElementById("aroma-veg").innerHTML = "";
        document.getElementById("alap-veg").innerHTML = "";
    }
    else {
        document.getElementById("flaska-br").style.display = "inline";
        document.getElementById("flaska-veg").style.display = "inline";
    
        document.getElementById("flaska-veg").innerHTML = "A flaska mérete: "+flaska+"ml";
        document.getElementById("aroma-veg").innerHTML = "Az aroma mennyisége: "+aroma+"g";
        document.getElementById("alap-veg").innerHTML = "Az alaplé mennyisége: "+alap+"g";
    
    }
}