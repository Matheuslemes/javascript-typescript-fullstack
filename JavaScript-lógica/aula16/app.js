// For of - Estrutura de repetição

const nomes = ['silva', 'lemes'];

for ( let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

for (let i in nomes) {
    console.log(nomes[i]);
}

for (let valor of nomes) {
    console.log(valor);
}

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

const pessoa = {
    nome: 'sila',
    sobrenome: 'lemes'
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
// com objetos usar o for of retorna que o objeto não um interável
// for comum - geralmente com interáveis(arrays e strings)
// for in - retorna o índice ou chave (string, array ou objetos)
// for of - retorna o valor em si (interáveis, arrays ou strings)
