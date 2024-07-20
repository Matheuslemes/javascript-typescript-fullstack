// objetos - básicos

//const pessoa1 = {
//    nome: 'Matheus',
//    sobrenome: 'lemes',
//    idade: 25
//};

//console.log(pessoa1.nome);

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    };
}

const pessoa1 = criaPessoa('Matheus', 'Lemes', 23);
const pessoa2 = criaPessoa('joao', 'Silva', 25);

console.log(pessoa1.nome, pessoa2.nome)

const pessoa3 = {
    nome: 'Leandro',
    sobrenome: 'junior',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} ${this.idade}`)
    },
};

pessoa3.fala();