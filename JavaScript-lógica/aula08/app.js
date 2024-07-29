// Objeto Date

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(); // função construtora
// const data = new Date(0 + tresHoras - umDia); // 01/01/1970 timestamp unix ou época unix
// const data = new Date(2019, 3, 20, 15, 14, 27);
// const data = new Date(2000, 3); // ano, mês, dia, hora, minuto, segundo, milesegundo
const data = new Date('2019-04-20 20:20:59:');
console.log('Dia', data.getDate);
console.log('Mês', data.getMonth);
console.log('Ano', data.getFullYear);
console.log('Hora', data.getHours);
console.log('Seg', data.getSeconds);
console.log('MS', data.getMilliseconds);
console.log('Dia da Semana', data.getDay);
console.log(data.toDateString());
