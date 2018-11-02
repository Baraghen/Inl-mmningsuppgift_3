while(true){
  let siffra = prompt("Skriv in valfri siffra mellan 1-1000");
  if(siffra > 1000 || isNaN(siffra) || siffra < 0){
    alert("Felaktig inmatning")
  }
  else{
    let svar = fakultet(siffra);
    if(svar !== Infinity){
      document.getElementById("svar").innerHTML = "Svaret blir: "+svar;
      break;
    }
    else if(svar === Infinity){
      alert("Tal över 170 är för stora att räkna ut.");
    }
  }
}
function fakultet(siffra)
{
    if (siffra == 0)
      { return  1; }
    else
      { return  siffra * fakultet( siffra - 1 ); }
}