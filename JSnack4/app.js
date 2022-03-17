/*
Snack4 (Bonus)
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. 
Interrompi il ciclo appena il nome è stato trovato.
*/

let invitati = ["Matteo", "Alex", "Chiara", "Roberta", "Giulia", "Federica", "Francesco", "Luigi", "Carola", "Elisabetta", "Goku"]

let q = prompt('Quale è il tuo nome?'); 

let i = 0;

do {
    if (q == invitati[i]) {
        alert('Sei nella lista')
    } else {
        i++   
    }
} while (q == invitati[i]);
