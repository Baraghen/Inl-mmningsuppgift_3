let siffra = prompt("Skriv in valfri siffra");
function fakultet(siffra)
{
    if (siffra == 0)
      { return  1; }
    else
      { return  siffra * fakultet( siffra - 1 ); }
}
document.getElementById("svar").innerHTML = "Svaret blir: "+fakultet(siffra);