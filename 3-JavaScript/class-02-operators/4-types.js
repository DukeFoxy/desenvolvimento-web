// Binary
let num1 = 3
let num2 = 2

console.log(num1 / num2);

//Unary

console.log(++num1);
console.log(typeof num2);
console.log(typeof + "10");

// Ternary
// test ? true : false;

console.log(2 > 3 ? "Sim" : "Não");

let average = 5;
console.log(average >= 7 ? "Aprovado" : "Reprovado");

// Truthy                Falsy
// 1, 1.5, -1            0
// " ", "0", "false"     ""
// {}                    null
// []                    undefined
// Infinity, -Infinity   NaN

console.log(1 ? "true" : "false");
console.log(-1 ? "true" : "false");
console.log(0 ? "true" : "false");
console.log("text" ? "true" : "false");
console.log(" " ? "true" : "false");
console.log({name: "Pedro"} ? "true" : "false");
console.log({} ? "true" : "false");
console.log([] ? "true" : "false");
console.log(null ? "true" : "false");
console.log(undefined ? "true" : "false");
console.log(Infinity ? "true" : "false");
console.log(-Infinity ? "true" : "false");
console.log(NaN ? "true" : "false");

//Nullish/Logical Coalescing Operator
console.log("Pedro" || "Test");
console.log("" || "Test");
console.log(0 || "Test");

console.log(0 ?? "Test");
console.log(false ?? "Test");
console.log(null ?? "Test");
console.log(undefined ?? "Test");