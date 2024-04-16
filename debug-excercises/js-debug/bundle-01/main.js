/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

/* RISPOSTE ESERCIZIO 1 
    1- questo codice stampa in console numeri all'infinito
    2- no
    3- si, perchè i cicli infinti creano dei problemi con il codice 
*/

//////////////////////////////////////////////////////////

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

/* RISPOSTE ESERCIZIO 2 
    1- questa funzione dovrebbe aggiungere 5 se il parametro della funione è un numero pari altrimenti non esgeue la somma 
    2- si, la condizione dovrebbe essere ---> (num % 2 === 0) potremmo anche scriverla cosi --> (num % 2)
    3- no
 */


//////////////////////////////////////////////////////////
    
// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

/* RISPOSTA ESERCIZIO 3
    1- questa funziona se invocata dovrebbe stampare in console 5 numeri da 0 a 4 
    2- si , nel ciclo for per separare le condizioni utilizziamo il punto e virgola e non la virgola 
    3- no
*/

//////////////////////////////////////////////////////////

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

/* RISPOSTE ESERCIZIO 4 
    1- la funziona una volta invocata dovrebbe aggiungere i numeri pari dell'array numbers nell'array evenNumbers 
    2- si nelle condizioni del for non c'è bisongo del punto e virgola finale e nelle condizioni del if bastarebbe scrivere (numbers % 2)
    3- dovremmo creare una variabile vuota per i numeri let num = ""; e poi  nella riga 64 dovremmo scrivere evenNumbers.push(num) 
        poi penso che il return alla riga 66 dovrebbe essere fuori dal ciclo for ma sempre all'interno della funzione.
        non riesco a trovare altri errori al momento.

*/

//////////////////////////////////////////////////////////
