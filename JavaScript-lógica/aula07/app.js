// operação ternária
// (condição) 'Valor para verdadeiro' : 'Valor para falso';


const pontuacao = 999;

const nivelUsuario = pontuacao >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario)


if (pontuacao >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal')
}
