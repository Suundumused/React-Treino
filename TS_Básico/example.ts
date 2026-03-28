let precoProduto: number = 199.99;
let quantidadeEstoque: number = 50;

console.log(`1. Preço: ${precoProduto} - Quantidade em Estoque: ${quantidadeEstoque}`);

let nomeUsuario: string = "Alice";
let emailUsuario: string = "alice@example.com";

let saudacao: string = `bla bla bl, ${nomeUsuario}, ${emailUsuario}!`;

console.log(`2. Saudação: ${saudacao}`);


function isAdmin(admin: boolean): string {
    return admin ? "Sim" : "Não";
}

interface Pessoa {
    cpf: string;
}

let cpf: string | number | null | Pessoa; //variável com vários tipos (incluindo classe), incluindo nulável...

cpf = 0;


let categoria: "carro" | "caminhão" | "ônibus"; //Enumerados = Union Types --> valores que a variável pode assumir.

const myTuple: [number, string] = [3, 'a'];

const tupleOfTuples: [number, string][] = [
    [1, "Jane"],
    [2, "Doe"]
];

enum Direction { //enumeradores
    Up = 1,
    Down = 2
};
const direction = Direction.Up;


const productName:any = "Tauba"; // Type Assertion
let itemId = productName as string; // ...
itemId = <string>productName; // ...