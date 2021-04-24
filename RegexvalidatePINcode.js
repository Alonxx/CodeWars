/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false */

const validatePIN = (pin) => {
	//return true or false
	pin = pin.toString();

	let reg_ex = /^\d+$/; // reggex de solo numeros de inicio a fin
	return pin.length === 4
		? pin.search(reg_ex) !== -1
			? true
			: false
		: pin.length === 6
		? pin.search(reg_ex) !== -1
			? true
			: false
		: false;
};
console.log(validatePIN('1234'), true);
console.log(validatePIN('123-'), false);
console.log(validatePIN('12.3'), false);
