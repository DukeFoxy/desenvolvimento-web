// immutable
const filteredNumbers = numbers.filter((value) => value < 5);

console.log(numbers);
console.log(filteredNumbers);

//  const filteredStudants = students.filter((student) => student.grade >= 9)

const studentName = prompt("digite o nem do aluno: ");
const filteredStudents = students.filter((student) => 

student.name.tolowerCase().includes(studentName.toLowerCase())
);

console.table(filteredStudents);