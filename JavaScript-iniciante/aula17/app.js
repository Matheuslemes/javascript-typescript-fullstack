/*
Dados primitivos(imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mútavel) - array, object e function
*/

let a = 'A';
let b = a; // cópia, somente quando o dado for primitivo
console.log(a, b);

a = 'outra coisa';
console.log(a, b);

let aa = [1,2,3];
let bb = a; // aponta para o mesmo local na meméria, se alterar 'aa', 'bb' também é alterado
console.log(a, b);

aa.push(4);
console.log(aa, bb);

let cc = [...aa]; // valor de aa é atribuido a cc