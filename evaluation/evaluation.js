// Avaliação JavaScript

// Questão 1 (Data Types):

// Declare as seguntes variáveis e atribua os valores por tipo:
// Sting, Number, Boolean, Function, Array, Object

// String
let nome = "Pedro";

// Number
let idade = 22;

// Boolean
let solteiro = true;

// Function
let soma = function(a, b) {
  return a + b;
};

// Array
let numeros = [1, 2, 3, 4, 5];

// Object
let pessoa = {
  nome: "Pedro",
  idade: 22,
  solteiro: true,
};

console.log(soma(3, 2));
console.log({nome, idade, solteiro, numeros, pessoa});

// Questão 2 (Operators):

// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 2 e 3 e raiz quadrada de 144

let num1 = 2
let num2 = 3
let num3= 144

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);
console.log(num3 **(1/2));

// Questão 3 (Functions):

// Crie e execute uma função de nome 'test" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno

function test (valor) {
    return "JavaScript" + valor
}
console.log(test(" é dificil"));

// Questão 4 (Data Manipulation):

// Usando os métodos FIFO e LIFO, crie um array com 3 valor e posteriormente insira mais um valor no final e substitua o do início por outro

const games = ["lethal company", "Dead by Daylight", "Overwatch"]

games.push ("Minecraft")
console.log(games);

games.shift();
games.unshift("7 days to die");
console.log(games);

// Questão 5 (for):

// Liste todos os valores do array criado na questão anterior ultilizando o for

for (let index = 4; index < games.length; index++) {
    const element = games["lethal company", "Dead by Daylight", "Overwatch"];
    console.log(element);
}
// Questão 6 (while):

// Escreva os números de 0 a 100 sem os que pertencem à familía do 40, do 50 e do 60

let count = 0

while (count <= 100);
    if (count >= 40 && count >= 50 && count >= 60) {
        count++
    }
console.log();

// Questão 7 (if):

    //
    
    

let motorista = 0


// Questão 8 (array methods):

//Uma empresa vai dar 10% de aumento para seus funcionários
//Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

// const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];

