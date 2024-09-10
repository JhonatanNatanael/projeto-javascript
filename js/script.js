// Exemplos 

console.log("-----------------------");
console.log("Exemplo 1 - While");
console.log("-----------------------");

let i = 0;
    while (i < 5) {
    console.log(i);
    i++;
    }
 
console.log("-----------------------");

//-----------------------------------------

console.log("Exemplo 2 - While");
console.log("-----------------------");

let num = 10;
    while (num > 0) { 
    console.log(num);
    num -= 2;
}
 
console.log("-----------------------");

//-----------------------------------------

console.log("Exemplo 1 - For");
console.log("-----------------------");

for (let i = 0; i < 5; i++) {
    console.log(i);
    }
 
console.log("-----------------------");

//-----------------------------------------

console.log("Exemplo 2 - For");
console.log("-----------------------");

const frutas = ["maçã", "banana", "uva"];
    for (let i = 0; i < frutas.length; i++) { 
    console.log(frutas[i]);
    }
 
console.log("-----------------------");

//-----------------------------------------

console.log("Exemplo 1 - .map");
console.log("-----------------------");

const numeros = [1, 2, 3];
    const dobrados = numeros.map(num => num * 2);
    console.log(dobrados);
 
console.log("-----------------------");

//-----------------------------------------

console.log("Exemplo 2 - .map");
console.log("-----------------------");

const nomes = ["Ana", "Beto", "Carla"];
    const cumprimentos = nomes.map(nome => `Olá, ${nome}!`);
    console.log(cumprimentos);
 
console.log("-----------------------");

//-----------------------------------------

console.log("Exemplo 1 - .filter");
console.log("-----------------------");

const numero = [1, 2, 3, 4, 5];
    const pares = numero.filter(num => num % 2 === 0);
    console.log(pares);
 
console.log("-----------------------");

//-----------------------------------------

console.log("Exemplo 2 - .filter");
console.log("-----------------------");

const palavras = ["árvore", "flor", "sol", "lua"];
    const palavrasComO = palavras.filter(palavra => palavra.includes("o"));
    console.log(palavrasComO);
 
console.log("-----------------------");


