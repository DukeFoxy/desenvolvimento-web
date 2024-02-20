// ⚠️ Desafio 15: Crie um programa que converta a temperatura Celsius ou Fahrenheit
// A temperatura de entrada e de saída deve conter a letra de referência ('C' ou 'F')
// O algoritmo deve ser capaz de interpretar o valor passado e converter para o outro (Ex: 10C = 50F)
// Deve funcionar com espaços, letras minúsculas e tratar dados inválidos (Throw, Try e Catch).

//F = C * 9/5 + 32
//C = (F - 32) * 5

function degreeConvert(degree) {
  const auxDegree = degree.split("");
  const scaleDegree = auxDegree.pop().toUpperCase();
  const newDegree = Number(auxDegree.join(""))

  if (isNaN(newDegree)) throw Error("Valor invalido")

  if (scaleDegree == "C") {
    return (newDegree * 9) / 5 + 32 + "F";
  } else if (scaleDegree == "F") {
    return ((newDegree - 32) * 5) / 9 + "C";
  } else {
    throw new Error("Escala invalida");
  }
}

try {
  const temperature = "34F"
  const convertedTemperature = degreeConvert(temperature);
  console.log(`${temperature} = ${convertedTemperature}`);
} catch (error) {
  console.error(error);
}
