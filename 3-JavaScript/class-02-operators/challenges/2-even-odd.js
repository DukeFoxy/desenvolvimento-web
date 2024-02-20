const number = Number(prompt("Digite um numero"))

const result = number % 2 == 0? "Par" : number % 2 == 1 ? "Impar" : "Invalido";

window.alert(`O numero ${number} é ${result}!`)