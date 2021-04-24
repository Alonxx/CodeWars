/* The goal of this exercise is to convert a string to a new string where each character in the new string is if that character appears only once in the original string, or if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate."("")"

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  */

const duplicateEncode = (word) => {
	// Tomamos el string, lo pasamos a minisculas y lo pasamos a aun array donde cada caracter es un elemento
	word = word
		.toLowerCase()
		.split('')
		.reduce((acc, el, i, array) => {
			array.indexOf(el, 0) !== i // Hacemos un indexOf de el elemento desde el index 0 del array, Si encuentra coincidencia y el index donde encuentra coincidencia es diferente al mismo..
				? acc.push(')') // Hacemos push...
				: array.indexOf(el, i + 1) !== -1 // Si no... hacemos un indexOf  del elemento desde el siguiente index desde donde estamos (i+1) si cuentra coincidencia..
				? acc.push(')') // Hacemos push...
				: acc.push('('); // Si no.. hacemos push de que no se repite el elemento
			return acc;
		}, [])
		.join('');
	return word
};
/* Test.assertEquals(duplicateEncode('din'), '(((');
Test.assertEquals(duplicateEncode('recede'), '()()()');
Test.assertEquals(duplicateEncode('Success'), ')())())', 'should ignore case');
Test.assertEquals(duplicateEncode('(( @'), '))(('); */

console.log(duplicateEncode('din'), 'esperado: (((');
console.log(duplicateEncode('Success'), 'esperado: )())())');
