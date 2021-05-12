const sumArray = (array) => {
	let result = 0;

	if (array.length < 1) return result;

	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			result += sumArray(array[i]);
		} else {
			result += array[i];
		}
	}
	return result;
};
//O(N) 

console.log(0, sumArray([]));
console.log(14, sumArray([[2, 4], [1], [4, 2, 1]]));
console.log(26, sumArray([2, [3, 4], 5, [-3, [6, [4, 5]]]]));
