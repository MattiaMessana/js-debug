/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();


/* RISPOSTE ESERCIZIO 2 
    1- questa funzione dovrebbe controllare l'età dell'utente e dirci se l'utente è maggiorenne o meno 
    2- alla riga 16 la variabile  message dovrebbe essere dichiarata con un let
    3- alla riga 15 la variabile  my age dovrebbe esssere un prompt con il parseint per chiedere all'utente quale è l'età
*/



//////////////////////////////////////////////////////////

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

/* RISPOSTE ESERCIZIO 2
    1- questa funiona dovrebbe stampare in console un messaggio con dentro la lista dell'array 
    2- si nella riga 40 dovrebbe esserci scritto : ${colors.length}
    3- no 
*/

//////////////////////////////////////////////////////////

// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

/*  RISPOSTE ESERCIZIO 3 
    1- questa funzione chiede un numero all'utente e gli aggiunge 12 
    2- no 
    3- si il nella riga 54  nel prompt dovremmo inserire parseint perchè chiediamo all'utente di inserire un numero 
*/

//////////////////////////////////////////////////////////

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

/* RISPOSTE ESERCIZIO 4 
    1- questa funzione chiede all'utente di inserire il suo indirizzo mail e controllare se è inserito nel array della lista delle mail 
    2- si nella riga 77 e 74 i valori boolean non vanno tra virgolette 
    3- penso che potevamo utilizzare un solo if per controllare se l'email era nella lista ed in caso stampare in console  il messaggio pertinente 
*/

//////////////////////////////////////////////////////////


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();

/* RISPOSTE ESERCIZIO 5 
    1- questa funzione chiede di inserire una mail all'utente e controlla se sia nella lista 
    2- i valori bollean non hanno bisongo delle virgolette
       manca una parentesi graffa per chiudere la funzione 
    3- 
*/




























