// Uppgift 2

// Simpel funktion som tar emot två parametrar som sen går igenom den matematiska formeln. Svaret skrivs ut i konsolen i slutet.

function pytagoras(a, b){
    c = Math.pow(a, 2)+Math.pow(b, 2)
    return Math.sqrt(c);
}

console.log(pytagoras(5, 10));
