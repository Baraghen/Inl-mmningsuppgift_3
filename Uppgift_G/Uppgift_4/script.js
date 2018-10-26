// Uppgift 4

// Simpel funktion som tar emot en parameter som sen går igenom den matematiska formeln. Svaret skrivs ut i konsolen i slutet.

function sfär(radie){
    console.log(("Volym: "+((4/3)*Math.PI*Math.pow(radie, 3)).toFixed(2)));
}
sfär(5);