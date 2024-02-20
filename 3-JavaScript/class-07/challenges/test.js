const numbers = [10, 2, 3, 4, 5];

function sumMinMax(numbers) {
    numbers.sort((a, b) => a - b)
    const maxNumbers = numbers.slice(numbers.length - 3, numbers.length)
    const minNumbers = numbers.slice(0, 3)
    return{
        maxSum: maxNumbers.reduce((a, b) => a + b),
        minSum: minNumbers.reduce((a, b) => a + b)
    };
}