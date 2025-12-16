/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60

Buon lavoro! */

//Km da percorrere input
const numChilometri = parseInt(prompt('Quanti Chilometri vuoi percorrere?'));
console.log('numChilometri: ', numChilometri);

//Età passeggero input
const numAgePassenger = parseInt(prompt('Inserisci la tua età'));
console.log('numAgepassenger: ', numAgePassenger);

//Prezzo per km

const priceForKm = 0.21;
console.log(priceForKm, typeof priceForKm);

//Calcolo

const priceTicket = numChilometri * priceForKm;
console.log('priceTicket', priceTicket, typeof priceTicket);

//If in base all'età inserita

let outputPrezzo;

//Calcolo se minorenne
if (numAgePassenger <= 17) {
  outputPrezzo = priceTicket - priceTicket * 0.2;
  console.log('€ ', outputPrezzo.toFixed(2));
} /* Calcolo se Over 65 */ else if (numAgePassenger > 65) {
  outputPrezzo = priceTicket - priceTicket * 0.4;
  console.log('€ ', outputPrezzo.toFixed(2));
} /* Se nessuno dei due */ else {
  outputPrezzo = priceTicket;
  console.log('€ ', outputPrezzo);
}
