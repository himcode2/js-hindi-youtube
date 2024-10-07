// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// The reason why comparison and equality check works diffrenetly is that 
// Comparison coverts ull to number, treating it as zero
// Whereas equality check dosent convert null to a number 
console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); // true

// undefined is not converted to a number in both the checks.
console.log(undefined == 0); //fasle
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === this checks the type as well as its value whereas == checks only value 
console.log("2" === 2); // false
console.log("2" == 2); // true
