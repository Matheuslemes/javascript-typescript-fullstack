const elementos = [
    {tag: 'p', texto: 'Qualquer coisa.'},
    {tag: 'duv', texto: 'Qualquer coisa.'},
    {tag: 'section', texto: 'Qualquer coisa.'},
    {tag: 'footer', texto: 'Qualquer coisa.'},
];

const container = document.querySelector('.container');
const div =document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada  = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
    console.log(tag);
}

container.appendChild(div);