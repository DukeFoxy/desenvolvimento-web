console.log(Number (""));
console.log(Number (" "));
console.log(Number ("Pedro"));
console.log(typeof Number ("Pedro"));

console.log(isNaN(Number ("Pedro")));

console.log(Number (null));
console.log(Number (true));
console.log(Number (false));
console.log(Number (undefined));

let num1 = 7.997;
let num2 = 14706247692672942482;

console.log(parseInt(num1));
console.log(parseFloat(num2));

console.log(String(num1).replace(".",""));

//R$ 7,997
console.log("R$ " + String(num1).replace(".", ","));
console.log(num1.toLocaleString("pt-br",{style: "currency", currency: "brl"}));
console.log(num1.toLocaleString("pt-br",{style: "currency", currency: "usd"}));

// Math functions

console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(9));
console.log(Math.abs(num1));

const numbers = [2,8,20,4,6,8]
console.log(...numbers);
console.log(Math.max(...numbers)); // spread
console.log(Math.min(...numbers)); // spread

// 0-4 => embaixo 5-9 => em cima
console.log(Math.round(2.4));
console.log(Math.round(2.5));
console.log(Math.floor(2.9999999));
console.log(Math.ceil(2.9999999));

console.log(Math.round(Math.random() * 10)); // 0-10
console.log(Math.ceil(Math.random() * 10)); // 1-10
console.log(Math.floor(Math.random() * 10)); // 0-9 
console.log(Math.ceil(Math.random() * 25)); // 1-25