let num = [5, 8, 2, 9, 3]
num[5] = 6 // Acrescentar um número em uma posiçao;
num.push(1) // Acrescentar um valor no array;
num.length // Descobrir o comprimento do Vetor;
num.sort() // Colocar os elementos em ordem crescente;

console.log(num)

let pos = num.indexOf(9)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else{
    console.log(`O valor está na posição ${pos}`)
}




/*
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}


for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}
console.log(`Nosso vetor é o ${num} e tem o comprimento de ${num.length}`)
*/
