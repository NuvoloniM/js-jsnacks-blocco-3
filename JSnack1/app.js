/*
Snack1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.*/

const list = [];
let sum = 0;

while (sum < 50) {
    let x = parseInt(prompt('Inserisci un numero'))
    list.push(x);
    sum += x;
    console.log(sum);
}

console.log(list);