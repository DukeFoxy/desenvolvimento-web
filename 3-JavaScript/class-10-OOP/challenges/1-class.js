// Crie uma classe "Animal" com as caracteristicas raça (race) e nome (name), depois crie uma classse "Dog" que herde os atributos da classe pai "Animel" e tenha o metodo "action". Passe os valores via argumento quando criar o objeto


class Animal {
    constructor(name, race) {
        this.name = "Draktar"
        this.race = "Canideo";
        this.skin = "Pelo"
        this.sound = "Uivando"
    }
    action() {
        return `Voçê afagou ${this.name} ele está ${this.sound}`
    }
}

class Dog extends Animal {
    constructor(name, race, sound) {
        super(name, race)
        this.sound = sound
        this.name = "Cacau"
    }
    action() {
        return `Voçê afagou ${this.name} ela está ${this.sound}`;
    }
}

const myDog = new Dog("Cacau", "Vira-lata", "latindo");
const myAnimal = new Animal("Draktar, Wolf, Uivando");

console.log(myDog.name);
console.log(myDog.race);
console.log(myDog.action());
console.log(myDog.skin);

console.log(myAnimal.name);
console.log(myAnimal.race);
console.log(myAnimal.skin);
console.log(myAnimal.action());

// class Lobo {

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }

//     getNome() {
//         return this.nome;
//     }

//     getIdade() {
//         return this.idade;
//     }

//     emitirSom() {
//         return "Uivo";
//     }
// }

// class Cachorro extends Lobo {

//     constructor(nome, idade, raca) {
//         super(nome, idade);
//         this.raca = raca;
//     }

//     getRaca() {
//         return this.raca;
//     }

//     emitirSom() {
//         return "Latido";
//     }
// }

// const lobo = new Lobo("Sebastião", 5);
// const cachorro = new Cachorro("Totó", 2, "Poodle");

// console.log(lobo.getNome()); // Sebastião
// console.log(lobo.getIdade()); // 5
// console.log(lobo.emitirSom()); // Uivo

// console.log(cachorro.getNome()); // Totó
// console.log(cachorro.getIdade()); // 2
// console.log(cachorro.getRaca()); // Poodle
// console.log(cachorro.emitirSom()); // Latido