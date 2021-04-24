/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: etc.a = 1, b = 2, c = 3

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
 */

 const high = (x) => {
	// Primero hacemos un split al array para que nos quede separada por palabras, luego un reduce...
	let respond = x.split(' ').reduce((acc, el, i, arr) => {
		acc.push(arr[i].split('')); // pusheamos al acc un split a la palabra para que nos quede por letra
		acc[i] = acc[i] // le hacemos ...
			.map((el) => el.charCodeAt(0) - 96) // un .map donde le buscamos el numero ASCII de cada letra y lo restamos 96 (asi queda 1, 2 3..)
			.reduce((prev, el) => prev + el); // a ese resultado le hacemos un reduce para que quede la suma de todas las letras en el array
		return acc;
	}, []); // Luego de esto el array queda algo como [50,88,27] donde cada numero es la suma de todas las letras de cada palabra del array original

	let result = respond.reduce((prev, el, i) => (prev > el ? prev : el)); // Hacemos un reduce al resultado para buscar el numero mayor en el array de respond ([50,88,27] => 88)
	return x.split(' ')[respond.indexOf(result)]; // hacemos un split al array que nos entra por argumento, y coincidimos el index de la palabra del array original con el index del numero mayor de nuestro array de la operacion hecha en "respond" para asi obtener la palabra con mas "Scoring"
};


//-------------------------------TEST CONSOLE LOG-----------------------------------

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano');
//----------------------RESPUESTAS ALTERNATIVAS DE OTROS------------------------
/* 

FORMA MAS CORTA

function high(x) {


	const score = (s) =>
		s.split('').reduce((m, i) => m + i.charCodeAt(0) - 96, 0);


	return x.split(' ').reduce((s, n) => (score(s) < score(n) ? n : s));
}
 */
