// ⚠️ Desafio 14: Crie uma função para converter média para o sistema de caracteres ABC
// Depois diga se o aluno foi aprovado caso A, B e C ou reprovado caso D e F
// Insira validações para notas strings e fora do range.

// A: 90 - 100
// B: 80 - 90
// C: 70 - 80
// D: 60 - 70
// F:  < - 60

function convertABC(average) {
  if (average >= 90 && average <= 100) {
    return "A";
  } else if (average >= 80 && average < 90) {
    return "B";
  } else if (average >= 70 && average < 80) {
    return "C";
  } else if (average >= 60 && average < 70) {
    return "D";
  } else if (average >= 0 && average < 60) {
    return "F";
  } else {
    return "Media fora do intervalo de 0 a 100"
  }
}

const convertedEverage = convertABC("70 ");
console.log(convertedEverage);

switch (convertedEverage) {
  case "A":
    console.log("Exelente, aprovado com A!");
    break;
  case "B":
    console.log("Exelente, aprovado com B!");
    break;
  case "C":
    console.log("Aprovado com C!");
    break;    
  case "D":
    console.log("Estude mais, aprovado com D!");
    break;
  case "F":
    console.log("Reprovado com F!");
    break;          
  default:
    break;
}
