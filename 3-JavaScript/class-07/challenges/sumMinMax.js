// ⚠️ Desafio 18: Faça uma função que receba um array de números
// Retorne um objeto com a soma dos 3 maiores e 3 menos números

const numbers = [10, 2, 3, 4, 5];

function sumMinMax(numbers) {
    numbers.sort((a, b) => a - b)

    const maxNumbers = numbers.slice(0, 3).reduce((a, b) => a + b)

    const minNumbers = numbers.slice(-3).reduce((a, b) => a + b)

    console.log(minNumbers);
    console.log(maxNumbers);
    
}

sumMinMax(numbers);
