/*
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
*/

/*
const arrGroceryList = [
	'pomodori',
	'latte',
	'patate',
	'pesce',
	'cereali',
	'carne',
	'dentifricio',
];
*/

const arrGroceryList = [];

/*
let item = prompt('inserisci qualcosa da comprare');
while (item != '') {
	arrGroceryList.push(item);
	item = prompt('inserisci un\'altra cosa da compore'); // variazione della variabile testata
}
*/

let item
do {
	item = prompt('inserisci qualcosa da comprre');
	arrGroceryList.push(item);
} while (item != ''  && arrGroceryList.length < 5)
if (!arrGroceryList[arrGroceryList.length - 1]) {
	arrGroceryList.pop();
}

const eleGroceryList = document.querySelector('.grocery-list');
const inputGroceryItem = document.querySelector('#input-grocery');
const eleGroceryForm = document.querySelector('form');

eleGroceryForm.addEventListener('submit', function(event) {
	event.preventDefault();

	if (inputGroceryItem.value) {
		// aggiornare i dati
		arrGroceryList.push(inputGroceryItem.value);

		// aggiornare l'interfaccia
		eleGroceryList.innerHTML += `<li>${inputGroceryItem.value}</li>`;

		// svuotare l'input
		inputGroceryItem.value = '';
	}
});

for (let i = 0; i < arrGroceryList.length; i++) {
	eleGroceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
}





for (let i = 1; i <= 10; i++) {
	console.log(i);
}

console.log('con while')

let i = 1
while (i <= 10) {
	console.log(i);
	i++;
}
