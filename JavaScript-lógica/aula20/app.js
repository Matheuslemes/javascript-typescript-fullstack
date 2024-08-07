// Escreva uma função que recebe dois números e retorne o maior deles!

function recebeN (x, y) {
    if (x > y) {
        return console.log(x);
    } else {
        return console.log(y);
    }
}

recebeN(69, 98);

// resolução do professor

function max (x, y){
    return x > y ? x : y;
}

const max2 = (x, y) => x > y ? x : y;

console.log(max(10, 2));