/*
Snack1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.*/

const list = [];
let sum = 0;

while (sum < 50) {
    let x = parseInt(prompt('Inserisci un numero'))
    if (isNaN(x)) {
        alert('hai inserito un dato non valido')
    } else {
        sum += x;
    } if (sum < 50) {
        list.push(x);
    } else {
        alert('Hai sforato!')
    }
    
}

console.log(list);