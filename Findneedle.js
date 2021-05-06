/* Encontrar el indice de la primera aparición de un string (needle) dentro de otro (haystack).

Es decir, el objetivo del ejercicio es determinar si el primer string, needle, esta dentro del segundo, haystack, y en dicho caso, devolver el indice en el que esto ocurre.

Ejemplos
Lo encuentra
needle: redux
haystack: react-redux
output: 6

No lo encuentra
needle: puntual
haystack: pinky
output: -1

En este caso, como el needle no se encuentra en el haystack el valor de salida es -1. 

function FindNeedle(haystack, needle) 

needle: redux
haystack: react-redux


*/

const findNeedle = (haystack, needle) => {
	let result = '';
	for (let i = 0; i < haystack.length; i++) { // Recorremos el string haystack
		if (haystack[i] === needle[0]) { // Si la letra en i es igual a la primera letra en needle
			result = haystack.slice(i, i + needle.length); // Hacemos un slice de haystack por el length de la palabra entera en needle
			if (result === needle) { // Si ambas palabras son exactamente iguales
				return (result = i); // retornamos la posicion donde empieza la primera letra
			}
		}
		result = -1; //Si no son igual retornamos -1
	}
	return result;
};

console.log(6, findNeedle('react-redux', 'redux'));
console.log(-1, findNeedle('pinky', 'puntual'));
console.log(2, findNeedle('rereredux', 'reredux'));
