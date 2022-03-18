/*
Snack2
Fai inserire un numero, che chiameremo N, all’utente. 
Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
Ogni volta che ne crei uno, stampalo.
*/

let N = parseInt(prompt('Quante liste devo creare?'));
let i = 0
let stamp = document.getElementById('list')

while (i < N) {
    const list = [];
    for (let y = 0; y < 10; y++) {
        let x = Math.ceil(Math.random()* 100); 
        list.push(x);
    }
    console.log(list);
    stamp.innerHTML += `<li> ${list} </li>`
    i++
}
