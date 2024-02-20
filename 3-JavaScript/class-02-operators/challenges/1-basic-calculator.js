// ⚠️Desafio 4: 
// Solicite 2 números e apresente:
// As operaçôes e os resultados escrevendo no documento (função write).
// Crie constantes e atribua as operações de:
// +, -, , /, %, * e raiz para os números solicitados.

const num1 = Number(prompt("Numero 1:"))
const num2 = Number(prompt("Numero 2:"))

const sum = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;
const rest = num1 % num2;
const pow = num1 ** num2;
const sqrt = num1 ** (1/num2);

document.write(`${num1} + ${num2} = ${sum} <br>`);
document.write(`${num1} - ${num2} = ${sub} <br>`);
document.write(`${num1} * ${num2} = ${mult} <br>`);
document.write(`${num1} / ${num2} = ${div.toFixed(2)} <br>`);
document.write(`${num1} % ${num2} = ${rest} <br>`);
document.write(`${num1} elevado a ${num2} = ${pow} <br>`);
document.write(`A raiz ${num1} de ${num2} = ${sqrt.toFixed(2)} <br>`);