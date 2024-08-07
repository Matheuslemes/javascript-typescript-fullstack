// Escreva uma função chamada ePaisagem que
// recebe dois argumentos, largura e altura de uma imagem (number).
// retorna true se a imagem estiver no modo paisagem 

function ePaisagem (altura, largura){
    return altura < largura ? true : false;
}

console.log(ePaisagem(200, 110));

// resolução professor

function ePaisagem02 (largura, altura) {
    return largura > altura;
}

console.log(ePaisagem(1920,1080));
