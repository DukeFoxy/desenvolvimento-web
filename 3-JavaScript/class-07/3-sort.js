const numbers = [3,4,2,6,9,1]

console.log(numbers.sort((a,b) => a - b));
console.log(numbers);

const music = [
    "Robocop Gay",
    "oceano",
    "Menina Veneno",
    "O papa é pop",
    "Planeta de cores",
    "Zoio de lula",
    "ai se eu te pego"
]


const students = [
    { id: 1, name: "Pedro", grade: 6 },
    { id: 2, name: "Natan", grade: 7 },
    { id: 3, name: "Pablo", grade: 9 },
    { id: 4, name: "Emanuel", grade: 10 },
    { id: 5, name: "Franciele", grade: 9 },
    { id: 6, name: "Amilton", grade: 10 },
    { id: 7, name: "Matheus", grade: 10 },
];
console.log(students.sort((a,b) => {
    a = a.name.toLocaleLowerCase();
    b = b.name.toLocaleLowerCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
    })
);
console.table(students.sort((a, b) => a.name.localeCompare(b.name)));