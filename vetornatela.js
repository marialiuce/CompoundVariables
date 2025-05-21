let valores = [8, 1, 7, 4, 2, 9]
valores.sort() // Ordena o vetor em ordem crescente

/*
console.log(valores) // Mostra o vetor
console.log(valores[0]) // Mostra o primeiro valor do vetor
*/ 

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // Mostra todos os valores do vetor
 */ 

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // Mostra todos os valores do vetor