const numbers = [2, 5, 7, 20, 6, 30, 22];

console.log(numbers.reduce((a, b) => a + b));
console.log(numbers.reduce((a, b) => a - b));
console.log(numbers.reduce((a, b) => a * b));

const employeers = [
    { id: 1, name: "Pedro", salary: 6000 },
    { id: 2, name: "Natan", salary: 7000 },
    { id: 3, name: "Pablo", salary: 9000 },
    { id: 4, name: "Emanuel", salary: 10000 },
    { id: 5, name: "Franciele", salary: 9000 },
    { id: 6, name: "Amilton", salary: 10000 },
    { id: 7, name: "Matheus", salary: 10000 },
];

console.log(employeers.reduce((a, b) => a + b.salary, 0));

let count = 0;
for (let i = 0; i < employeers.length; i++){
    count += employeers[i].salary;
}

console.log(count);