const nameGame = prompt("Digite o nome do jogo");
const genreGame = prompt("Digite o genero do jogo");
const yearGame = prompt("Digite o ano de lançamento do jogo");
const gameDescrition = {
    name: nameGame,
    genre: genreGame,
    releaseYear: yearGame}

alert(`Jogo: ${nameGame} | Genero: ${genreGame} | Ano de lançamento: ${yearGame}`)

console.log(gameDescrition.name);
console.log(gameDescrition.genre);
console.log(gameDescrition.releaseYear);