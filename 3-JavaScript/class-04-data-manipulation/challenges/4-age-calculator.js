// ⚠️ Desafio: Crie um programa que pergunte em que data (yyyy-mm-dd) o usuário nasceu, depois escreva na tela quantos anos ele tem  

const dateUser = prompt("Digite sua data de nascimento: ");

const date = new Date (dateUser);
const dateNow = new Date();
const userAge = Math.floor ((dateNow - date) / 1000 / 60 / 60 / 24 / 365.25);

console.log(dateNow);
console.log(date);
console.log(userAge);