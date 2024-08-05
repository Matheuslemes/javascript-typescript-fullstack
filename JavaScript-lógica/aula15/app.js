// For in - estrutura de repetição

const frutas = ['pera', 'maçã', 'uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(i);
}

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'fred',
    sobrenome: 'silva', 
    idade: 20
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}