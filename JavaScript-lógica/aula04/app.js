/* 
if, else if e else - aula 01
if - pode ser utilizado sozinho, else sempre precisa vir depois de um if
else if - é permitido utilizar quantas vezes necessário 
else - só é permitido utilizar somente uma vez
*/

const hora = 20;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá');
}
