// atribuição via desestruturação(arrays)

let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, dois, tres, ... resto] = numeros;
console.log(um, dois, tres);
console.log(resto); 