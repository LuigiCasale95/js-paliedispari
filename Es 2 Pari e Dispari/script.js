/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


//Numero estratto dall'utente
let numeroUtente = parseInt (prompt("Scegli un numero da 1 a 5"))
console.log(`Il numero scelto dall'utente è **${numeroUtente}**`);

/* Scelta utente tra pari e dispari */
let sceltaUtentePariDispari = prompt("Sceri se pari o dispari")
console.log(`L'utente ha scelto ${sceltaUtentePariDispari}`);

//Numero random estratto dal PC
 let NumeroPc = randomPcNum()
 console.log(`Il numero scelto dal pc è ${NumeroPc}`)

 /* Somma dei numeri scelti */
 let somma = (numeroUtente + NumeroPc)
 console.log(`Il totale è ${somma}`);

 /* Verifica del numero, se pari o dispari */
console.log("Ha vinto il " + pariOppureDispari(somma))

 //Elezione del vincitore










 //Funzioni
function randomPcNum() {
    let number = Math.floor(Math.random() * 5 ) + 1;
    console.log(number);
    
    return number
}

function pariOppureDispari(somma) {
    if (somma % 2 === 0) {
        return "PARI"
   } else {
        return "DISPARI"
     }
}