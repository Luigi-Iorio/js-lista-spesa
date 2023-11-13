"use strict";

// dichiarazione/ assegnazione dell'array
const lista = [
  "Pasta",
  "Pane",
  "Vino",
  "Petto di pollo",
  "Mela",
  "Latte",
  "Biscotti",
];

// dichiarazione / assegnazione contatore
let i = 0;

// visualizzazione dell'array in console
console.log(lista);

// visualizzazione lunghezza della lista
console.log(`La lista delle spesa è composta da ${lista.length} elementi`);

// visualizzazione della lista stampata in console tramite ciclo while
while (i < lista.length) {
  console.log(`${lista[i]} è il ${i + 1}^ elemento della lista`);
  i++;
}
