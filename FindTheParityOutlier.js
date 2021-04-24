/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number) 

explicacion: dado un array de todos los elementos son  impares o pares menos uno, encontrar ese numero segun si el array es impar o par

https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
*/

const findOutlier = (integers) => {
	//your code here
	return (integers = integers.reduce(
		(acc, el, i, arr) => {
			el % 2 === 0 ? acc[0].push(el) : acc[1].push(el); // Dividimos en modulo de 2 cada elemento para saber si es par o impar y pusheamos
			i === arr.length - 1 // si el index es el ultimo elemento...
				? acc[0].length > acc[1].length // le preguntamos cual de los dos array tiene mas elemento
					? (acc = acc[1][0]) // si el primero tiene mas, entonces el numero que no va es impar y esta en el segundo array
					: (acc = acc[0][0]) // si el segundo tiene mas, entonces el numero que no va es par y esta en el primer array
				: null;
			return acc;
		},
		[[], []]
	));
};

//-------------------------------TEST CONSOLE LOG-----------------------------------

//----------------------RESPUESTAS ALTERNATIVAS DE OTROS------------------------

/* 
FORMA MAS RESUMIDA CON FILTER

function findOutlier(int) {
	var even = int.filter((a) => a % 2 == 0);
	var odd = int.filter((a) => a % 2 !== 0);
	return even.length == 1 ? even[0] : odd[0];
} */
