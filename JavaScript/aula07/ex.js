// exercicio

// luiz otavio miranda tem 30 anos, pesa 84 kg 
// tem 1.8 de altura e seu imc é de 25....

const nome = 'Matheus Silva';
const sobreNome = 'Lemes';
const idade = 23;
const peso = 102;
const alturaEmM = 1.80;
let imc;
let anoNascimento = 2024 - idade;

imc = peso / (alturaEmM * alturaEmM);

//console.log(nome, sobreNome, 'tem', idade, 'anos, ', 'pesa', peso , 'kg, ', 'tem', altura, 'de altura e seu imc é', imc);


// template string
console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome}, nasceu em ${anoNascimento}.`);