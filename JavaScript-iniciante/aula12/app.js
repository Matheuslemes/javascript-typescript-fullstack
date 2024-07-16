//numbers

let num01 = 1; // number
let num02 = 2.5; // number

console.log(num01.toString() + num02); // nessa linha o num01 é transformado em string

num01 = num01.toString(); // realmente altera o valor da variável

console.log(num01.toString(2)); // representação binnária da variável

console.log(num01.toFixed(2)); // arredonda o número da variável de acordo com quantas casas decimais passar entre parenteses

console.log(Number.isInteger(num01)); // retorna se o número é inteiro ou  não com true ou false

let temp = num01 * 'olá';
console.log(Number.isNaN(temp)); // retorna se a operação(conta) é válida ou não com true ou false



