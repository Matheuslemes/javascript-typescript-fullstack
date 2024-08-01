// atribuição via desestruturação - objetos

const pessoa = {
    nome: 'luiz',
    idade: 30,
    endereco: {
        rua: 'av brasil',
        numero: 222
    }
};

// Atribuição via desestruturação
const { nome } = pessoa
console.log(nome);