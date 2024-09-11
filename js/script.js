console.log("-----------------------");
console.log("Exemplos Variáveis");
console.log("-----------------------");

console.log("Exemplo 1 - Var");
console.log("-----------------------");

var nome = "Beatriz";
console.log(nome);

console.log("-----------------------");

console.log("Exemplo 2 - Var");
console.log("-----------------------");

var idade = 25;
console.log(idade);

console.log("-----------------------");

console.log("Exemplo 1 - Let");
console.log("-----------------------");

for (let i = 0; i < 7; i++) {
  console.log(i);
}

console.log("-----------------------");

console.log("Exemplo 2 - Let");
console.log("-----------------------");

let count = 20;
console.log(count);

count = 30;
console.log(count);

console.log("-----------------------");

console.log("Exemplo 1 - Const");
console.log("-----------------------");

const arr1 = ["história", "matemática", "geografia", "biologia"];
console.log(arr1.toString());
arr1[2] = "física"; // pode alterar valores internos de arrays, mesmo sendo const
console.log(arr1.toString());

console.log("-----------------------");

console.log("Exemplo 2 - Const");
console.log("-----------------------");

const mult = 5;
function multiplyByConst(value) {
  return value * mult;
}
console.log(multiplyByConst(8));

console.log("-----------------------");

console.log("Exemplos Objetos");
console.log("-----------------------");

console.log("Exemplo 1 - JS Objects");
console.log("-----------------------");

let maca = {
  cor: "verde",
  sabor: "adocicado",
};
console.log(maca);

console.log("-----------------------");

console.log("Exemplo 2 - JS Objects");
console.log("-----------------------");

const pessoa = {
  nome: "Ana",
  idade: 25,
};
console.log(pessoa.nome);
console.log(pessoa.idade);

console.log("-----------------------");

console.log("Exemplo 1 - JS Object Properties");
console.log("-----------------------");

console.log(maca.cor);

console.log("-----------------------");

console.log("Exemplo 2 - JS Object Properties");
console.log("-----------------------");

console.log(maca["cor"]);

console.log("-----------------------");

console.log("Exemplo - Relacionado a propriedade");
console.log("-----------------------");

maca.textura = "lisa";
maca.cor = "azul";
console.log(maca.textura);
console.log(maca.cor);

console.log("-----------------------");

console.log("Exemplo 1 - JS Object Methods");
console.log("-----------------------");

const pessoas = {
  nome: "Carlos",
  saudacao: function () {
    return `Olá, meu nome é ${this.nome}!`;
  },
};

console.log(pessoas.saudacao());

console.log("-----------------------");

console.log("Exemplo 2 - JS Object Methods");
console.log("-----------------------");

const carro = {
  marca: "Ford",
  modelo: "Mustang",
  detalhes: function () {
    return `Carro: ${this.marca} ${this.modelo}`;
  },
};

console.log(carro.detalhes());

console.log("-----------------------");

console.log("Exemplo 1 - JS Object Display");
console.log("-----------------------");

const carros = {
  marca: "Honda",
  modelo: "Civic",
};

console.log(carros);
console.log(JSON.stringify(carros));

console.log("-----------------------");

console.log("Exemplo 2 - JS Object Display");
console.log("-----------------------");

const produto = {
  nome: "Notebook",
  preco: 3000,
};

console.log(produto);

console.log("-----------------------");

console.log("Exemplo 1 - JS Object Constructors");
console.log("-----------------------");

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const pessoa1 = new Pessoa("Maria", 28);
const pessoa2 = new Pessoa("João", 35);

console.log(pessoa1.nome);
console.log(pessoa2.idade);

console.log("-----------------------");

console.log("Exemplo 2 - JS Object Constructors");
console.log("-----------------------");

function Animal(tipo, som) {
  this.tipo = tipo;
  this.som = som;
}

const cachorro = new Animal("Cachorro", "Latido");
const gato = new Animal("Gato", "Miau");

console.log(cachorro.som);
console.log(gato.tipo);

console.log("-----------------------");

console.log("Exemplos Decisão");
console.log("-----------------------");

console.log("Exemplo 1 - if / Else / Else if");
console.log("-----------------------");

let pontos = 90;
if (pontos > 95) {
  console.log("Está na liderança.");
} else {
  console.log("Não está na liderança.");
}

console.log("-----------------------");

console.log("Exemplo 2 - if / Else / Else if");
console.log("-----------------------");

let ponto = 100;
if (ponto > 90) {
  console.log("Está no topo.");
} else if (ponto > 50) {
  console.log("Está no meio.");
} else {
  console.log("Está embaixo.");
}

console.log("-----------------------");

console.log("Exemplo 1 - Switch");
console.log("-----------------------");

const veiculo = 1;
switch (veiculo) {
  case 0:
    console.log("carro");
    break;
  case 1:
    console.log("moto");
    break;
  case 2:
    console.log("barco");
    break;
  case 3:
    console.log("avião");
    break;
  default:
    console.log("veículo inválido");
}

console.log("-----------------------");

console.log("Exemplo 2 - Switch");
console.log("-----------------------");

const nota = 5;
switch (true) {
  case nota >= 6:
    console.log("aprovado!");
    break;
  default:
    console.log("Reprovado");
}

console.log("-----------------------");

console.log("Exemplo 1 - Operador Ternário");
console.log("-----------------------");

let duracao = 50;
let serie = "Gray's Anatomy";
let tipoEpisodio = duracao <= 30 ? "curto" : "longo";
console.log(`O episódio de ${serie} é ${tipoEpisodio}.`);

console.log("-----------------------");

console.log("Exemplo 2 - Operador Ternário");
console.log("-----------------------");

let classificacao = 18;
let filme = "Deadpool";
let mensagem =
  classificacao <= 12
    ? `${filme} é adequado para crianças.`
    : `${filme} não é adequado para crianças.`;
console.log(mensagem);

console.log("-----------------------");

console.log("Exemplos Laços de repetição");
console.log("-----------------------");

console.log("Exemplo 1 - While");
console.log("-----------------------");

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

console.log("-----------------------");

console.log("Exemplo 2 - While");
console.log("-----------------------");

let num = 10;
while (num > 0) {
  console.log(num);
  num -= 2;
}

console.log("-----------------------");

console.log("Exemplo 1 - For");
console.log("-----------------------");

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("-----------------------");

console.log("Exemplo 2 - For");
console.log("-----------------------");

const frutas = ["maçã", "banana", "uva"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

console.log("-----------------------");

console.log("Exemplo 1 - .map");
console.log("-----------------------");

const numeros = [1, 2, 3];
const dobrados = numeros.map((num) => num * 2);
console.log(dobrados);

console.log("-----------------------");

console.log("Exemplo 2 - .map");
console.log("-----------------------");

const nomes = ["Ana", "Beto", "Carla"];
const cumprimentos = nomes.map((nome) => `Olá, ${nome}!`);
console.log(cumprimentos);

console.log("-----------------------");

console.log("Exemplo 1 - .filter");
console.log("-----------------------");

const numero = [1, 2, 3, 4, 5];
const pares = numero.filter((num) => num % 2 === 0);
console.log(pares);

console.log("-----------------------");

console.log("Exemplo 2 - .filter");
console.log("-----------------------");

const palavras = ["árvore", "flor", "sol", "lua"];
const palavrasComO = palavras.filter((palavra) => palavra.includes("o"));
console.log(palavrasComO);

console.log("-----------------------");

console.log("Exemplo 1 - for of (iterable) array");
console.log("-----------------------");

const frutass = ["maçã", "banana", "laranja"];
for (let fruta of frutass) {
  console.log(fruta);
}

console.log("-----------------------");

console.log("Exemplo 2 - for of (iterable) array");
console.log("-----------------------");

const tarefas = [
  "Lavar a louça",
  "Passar roupa",
  "Estudar JavaScript",
  "Fazer compras",
];
for (let tarefa of tarefas) {
  console.log(tarefa);
}

console.log("-----------------------");

console.log("Exemplo 1 - string");
console.log("-----------------------");

let nomesStr = "Maria";
let frase = "Hoje é um dia lindo!";
let caminho = "C:\\Users\\Usuario\\Documentos";

console.log(nomesStr);

console.log("-----------------------");

console.log("Exemplo 2 - string");
console.log("-----------------------");

let parte1 = "Olá, ";
let parte2 = "mundo!";
let fraseCompleta = parte1 + parte2;

console.log(fraseCompleta);

console.log("-----------------------");

console.log("Exemplo 1 - .reduce");
console.log("-----------------------");

const fruits = ["apple", "banana", "apple", "orange", "banana", "banana"];
const frequency = fruits.reduce((accumulator, fruit) => {
  if (accumulator[fruit]) {
    accumulator[fruit]++;
  } else {
    accumulator[fruit] = 1;
  }
  return accumulator;
}, {});
console.log(frequency);

console.log("-----------------------");

console.log("Exemplo 2 - .reduce");
console.log("-----------------------");

const number = [3, 5, 7, 2, 8, 1, 4];
const max = number.reduce((maxValue, currentValue) => {
  return currentValue > maxValue ? currentValue : maxValue;
}, number[0]);
console.log(max);

console.log("-----------------------");

console.log("Exemplo 1 - for in");
console.log("-----------------------");

const person = {
  name: "Maria",
  age: 24,
  occupation: "Engineer",
};
for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

console.log("-----------------------");

console.log("Exemplo 2 - for in");
console.log("-----------------------");

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
};
let propertyCount = 0;
for (const key in car) {
  if (Object.hasOwnProperty.call(car, key)) {
    propertyCount++;
  }
}
console.log(propertyCount);

console.log("-----------------------");

console.log("Exemplo 1 - forEach");
console.log("-----------------------");

const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numberss.forEach((number) => {
  console.log(number);
});

console.log("-----------------------");

console.log("Exemplo 2 - forEach");
console.log("-----------------------");

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const doubledNumbers = [];
numbersArr.forEach((number) => {
  doubledNumbers.push(number * 2);
});
console.log(doubledNumbers);

console.log("-----------------------");
