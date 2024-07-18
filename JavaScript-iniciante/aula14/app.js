// arrays
// são indexados como as strings, são objetos
const letras = ['a', 'b', 'c'];
console.log(letras[2]);
console.log(letras);

letras[0] = 'i'; // altera o dado do indice referenciado
console.log(letras.length); // para saber o tamanho do array
letras.push['d']; // adiciona no fim 
letras[letras.length] = 'r'; // adiciona no fim
letras[4] = 'o'; // adicionando 
letras.unshift['y']; // adiciona no inicio
letras.pop(); // remove o ultimo indice e seu elemento 
letras.shift(); // remove o primeiro indice e seu elemento
delete letras[2]; // remove o elemento do indice e deixa o indice vazio