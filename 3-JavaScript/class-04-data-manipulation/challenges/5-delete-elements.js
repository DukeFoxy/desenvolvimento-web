// ⚠️ Desafio 12: Crie uma função que remova um elemento específico de um Array. Insira o nome do elemento e o array via parâmetros depois retorne o array com valor atualizado

let meuArray = [1, 2, 3, 4, 5];
let elementoARemover = 3;
console.log(removerElemento(meuArray, elementoARemover)); // O array resultante será [1, 2, 4, 5]

function removerElemento(array, elemento) {
    const index = array.indexOf(elemento);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }