// ⚠️ Desafio 10: Crie uma função capaz de retornar um número aleatório dentro de um intervalo determinado por parâmetros min(mínimo) e max(máximo).

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(numeroAleatorio(1, 10));