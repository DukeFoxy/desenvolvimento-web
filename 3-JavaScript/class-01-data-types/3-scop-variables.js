let num = 10 //variavel global
const pi = 3.14;

var myName = "Pedro;"
{
    let num = 20; //variavel local
    var myName = "Pedro" // hoisting    
    

    num = 30;
    console.log(num);
    console.log(pi);
    console.log(myName);
}

num = 40;
// pi = 100; const error

console.log(num);
console.log(pi);

console.log(myName);