console.log('Pedro');
console.log("Pedro");
console.log(`Pedro`);
let course = "Desenvolvimento Web"
console.log("Turma de " + course); // concatenation

let num1 = "10";
let num2 = 20;

num1 = Number(num1); // type conversion

console.log(num1 + num2); //type coersion

// grouping operator
console.log("A soma de Num1 e Num2 é " + (num1 + num2));

// interpolation
console.log("A soma de " + num1 + " e " + num2 + " = " + (num1 + num2));

// template literals
let sumNumbers = num1 + num2;
console.log(`A soma de ${num1} e ${num2} = ${sumNumbers}`);