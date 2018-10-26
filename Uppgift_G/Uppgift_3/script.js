// Uppgift 3

// Funktionen börjar med att ta fram en prompt där man får skriva in radien på cirkeln. Detta går sedan igenom den matematiska formeln för att sedan skrivas ut som:
//  "Omkrets: x"
//  "Area: x"

function cirkel(){
    let radie = prompt("Skriv in radien");
    return alert("Omkrets: "+(2*Math.PI*radie).toFixed(2)+".\n"+"Area: "+(Math.PI*Math.pow(radie, 2)).toFixed(2)+".");
}
cirkel();