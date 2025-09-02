/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//Inserimento parola Utente
let parolaUtente = prompt("inserisci una parola per verificare se palindroma")

/* Per preverinire che l'utente inserisca maiuscole o minuscole rendo tutto in maiuscolo una volta inserito */
let parolaUtenteMaiuscolo = parolaUtente.toUpperCase()
console.log(`La parola dell'utente è ${parolaUtenteMaiuscolo}`);
/* Usare funzione per invertire la parola */

console.log(reverseWord(parolaUtenteMaiuscolo));
// let parolaInversa = (reverseWord(parolaUtenteMaiuscolo))

/* Usare la funzione per controllare se palindroma */

// verificaSePalindroma(parolaInversa, parolaUtenteMaiuscolo)

let isPalindroma = verificaSePalindroma(parolaUtenteMaiuscolo);

if(isPalindroma == true) {
    console.log('La parola è palindroma')
} else {
    console.log("la parola non è palindroma");
    
}








/* Funzioni */

// funzione di revert parola
function reverseWord(word) {
    // var di stringa revertata
    let revertedWord = "";

    // ciclo la stringa
    for (let i = word.length - 1; i >= 0; i--) {
        let letteraIesima = word[i];

        revertedWord += letteraIesima;
    }

    return revertedWord
}

/* Funzione per verificare se la parola è palindroma */
/* function verificaSePalindroma(parolaUtenteMaiuscolo, parolaInversa) {
        if (parolaUtenteMaiuscolo === parolaInversa) {
    console.log("LA PAROLA è PALINDROMA");
    } else {
        console.log("LA PAROLA NON è PALINDROMA");
        
    }
} */

function verificaSePalindroma(parolaUtenteMaiuscolo) {

    let parolaInversa = reverseWord(parolaUtenteMaiuscolo);

    if (parolaUtenteMaiuscolo === parolaInversa) {
        return true;
    } else {
        return false;
    }
}