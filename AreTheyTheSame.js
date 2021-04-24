const comp = (array1, array2) => {
	if (array1 === null || array2 === null) return false; // Si alguno de los dos valores es null, entonces es false
	let narray1 = array1.sort((a, b) => a - b).map((el) => el ** 2); // Hacemos un sort de menor a mayor un map donde lleve al cuadradp a cada elemento
	array2.sort((a, b) => a - b); // un sort de menor a mayor
	let result = narray1.reduce((acc, el, i, array) => {
		// Hacemos un reduce a narra1
		array2.includes(el, i) ? acc.push(true) : acc.push(false); // Preguntamos si en array2 en la misma posicion existe el mimso numero entonces push un true, si no push un false
		return acc;
	}, []);

	return result.includes(false) ? false : true; // Si el array que hicimos tiene algun false, entonces todo es false, si no es true
};

//-------------------------------TEST CONSOLE LOG-----------------------------------

console.log(
	comp(
		[121, 144, 19, 161, 19, 144, 19, 11],
		[231, 14641, 20736, 361, 25921, 361, 20736, 361]
	),
	false
);

console.log(
	comp(
		[121, 144, 19, 161, 19, 144, 19, 11],
		[121, 14641, 20736, 36100, 25921, 361, 20736, 361]
	),
	false
);

console.log(
	comp(
		[10, 4, 3, 6, 6, 10, 8, 0, 10, 6, 5, 5, 7],
		[36, 100, 9, 64, 36, 100, 36, 100, 49, 25, 0, 25, 16]
	),
	true
);
console.log(comp([4, 4], [1, 31]), false);
console.log(comp(null, []), false);
