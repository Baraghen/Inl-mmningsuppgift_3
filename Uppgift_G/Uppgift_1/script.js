// // Uppgift 1

// Här skapar jag objekt konstructorn.

function Person(namn, ePost, tel, gatuAdress, postNummer, ort){
    this.namn = namn;
    this.ePost = ePost;
    this.tel = tel;
    this.adress = {
        gata: gatuAdress,
        postNr: postNummer,
        orten: ort,
    }
// Här skapar jag funktionen som skriver ut all information man anropar inom objektet.
    this.print = function print(){
        console.log(this.namn+"\n"+this.ePost+"\n"+this.tel+"\n"+this.adress.gata+"\n"+this.adress.postNr+" "+this.adress.orten);
    }
}

// Här skapar jag två objekt med hjäpt utav konstruktorn från tidigare.

let samir = new Person("Samir Blom", "test@mail.com", "0723749585", "Hästgatan 42", "17123", "Kista");
let bengan = new Person("Bengan Svensson", "b.svensson@mail.com", "0723576545", "Västbackavägen 36", "16623", "Växsjö");

// De två objekten "samir" samt "bengan" skapas.

samir.print();
bengan.print();