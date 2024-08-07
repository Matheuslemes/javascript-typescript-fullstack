// Break e Continue

const numeros = [1,,2,3,4,5,6,7,8,9];

for (let numeros of numeros) {
    
    if (numeros === 2) {
        console.log('Pulou 2')
        continue; // pula para a próxima interação e continua a execução
    }

    if (numeros === 7) {
        console.log('7 encontrado, saindo!')
        break; // termina a execução
    }

    console.log(numeros);
}