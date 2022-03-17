/*
Snack3
Il software deve chiedere per 5 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti.
*/

let n = 5;
let sum = 0;

let i = 0;
while (i < n) {
    let x = parseInt(prompt('Inserisci un numero'));
    sum += x;
    i++
}
console.log(sum)