let num = [5, 8, 9, 10, 12, 15]
num.push(1) // Adiciona o valor 1 ao vetor
num.sort() // Ordena o vetor em ordem crescente
console.log(num) // Mostra o vetor ordenado
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4) // Mostra a posição do valor 8 no vetor
if (pos == -1) { // Se o valor não estiver no vetor
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 8 está na posição ${pos}`) // Mostra a posição do valor 8 no vetor
}