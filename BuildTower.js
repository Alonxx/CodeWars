/* Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).
https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
 */

const towerBuilder = (nFloors) => {
	let floors = Array.from({length: nFloors}, (_, i) => i + 1); // Hago un array from con un length de el numero de nFloors que me den, y hago un map para que cada elemento del array sea el numero
	let sign = '*';
	let result = floors.reduce(
		(acc, el, i, arr) => {
			i === 0 // Si i es igual a 0
				? (acc[0] = // entonces igualamos a ...
						' '.repeat(arr[arr.length - 1] - el) + // hacemos un repeat de un espacio (' ') tantas veces sea el maximo del array menos el elemento actual  (siempre sera 1 en pos[0])
						sign +
						' '.repeat(arr[arr.length - 1] - el))
                        //Si no hacemos un push con un repeat del espacio (' ') y en el medio el sign repetido
				: acc.push( 
						' '.repeat(arr[arr.length - 1] - el) +
							sign.repeat(el + arr[i - 1]) + // El sign se repite tantas veces sea el elemento actual mas el numero anterior en el array eje: [1,2] sign.repeat(2 + 1)
							' '.repeat(arr[arr.length - 1] - el)
				  );
			return acc;
		},
		['*']
	);

	return result;
};

//-------------------------------TEST CONSOLE LOG-----------------------------------

console.log(towerBuilder(1), ['*']);
console.log(towerBuilder(2), [' * ', '***']);
console.log(towerBuilder(3), ['  *  ', ' *** ', '*****'])