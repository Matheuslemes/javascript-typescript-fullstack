/*
Operadores lógicos
&& -> AND -> E -> todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> necessário apenas uma expressão ser verdadeira para retornar true
! -> NOT -> NÃO -> inverte o valor de uma expressão
*/

const expressao01 = true && true && false && true; // &&
console.log(expressao01);

const expressao02 = true || false;// OR
console.log(expressao02);

const expressao03 = true; // NOT
console.log(!expressao03);