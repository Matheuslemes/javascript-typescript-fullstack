// exercicio 1

//const num01 = Number(prompt('Digite um número: '));
//const num02 = Number(prompt('Digite outro número: '));

//const result = num01 + num02;

//alert(`o resultado é : ${result}`);

// exercicio 2

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);