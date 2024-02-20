const films = [
    "De volta para o futuro",
    "Os caça fanstasmas",
    "O exterminador do futuro",
    "Rock",
    "Rambo",
    "O guarda-costas"
];

const newFilms = films.map((film) => film.toUpperCase());
console.log(newFilms);

const arrayDollar = [1, 2, 3000];
const realConverted = arrayDollar.map((value) => value * 4.915);

console.log(realConverted);

["A", "B", "C"].map((value, index, array) => {
    console.log({value, index, array});

});

const rectangles = [
    {widht: 4, height: 5},
    {widht: 7, height: 3},
    {widht: 8, height: 5},
];

const areas = rectangles.map((rectangle, index) => {
    return {
        name: `Retangulo ${index +1}`,
        area: rectangle.widht * rectangle.height + "m²",
    }
});

console.log(areas);
console.table(areas);

