// Introdução a Arrays 3:36min

// Add novos elementos
// Encontrar elementos
// Remover elementos
// Dividir elementos
// Dividir Arrays
// Combinar Arrays

const numeros = [1, 2, 3, 1];

// inicio
numeros.unshift(0);
// meio
numeros.splice(1, 0, 'a'); //1 = local, 0 = deletar itens, 'a' o item
// final
numeros.push(5);

// Encontrando elementos

console.log(numeros.indexOf(2)); // se retornar -1 é pq não existe
console.log(numeros.lastIndexOf(1)); // vai da a localização do ultimo numero encontrado
console.log(numeros.includes(2)); // Retorna um boolean

// Encontrando elementos Tipos de referencia

const marcas = [
    {id : 1, nome : 'a'},
    {id : 2, nome : 'b'}
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});

console.log(marca);

// arrow functions

console.log(marcas.find(marca => marca.nome === 'a'));

// removendo elementos de Array
// Final 
const ultimo = numeros.pop();
// inicio
const primeiro = numeros.shift();
// meio
const meio = numeros.splice(0, 2); //0 = local, 2 = quantidade
console.log(numeros);
console.log(meio);


// esvanziando um Array 
// Solução 1 o numero precisa ter um Let antes de ser um array
// let numeros = [...]

let numeros1 = [1, 2, 3, 4, 5, 6];
numeros1 = [];
console.log(numeros1);


// Solução 2 não precisa ter o Let
numeros1.length = 0;
console.log(numeros1);

// numeros.length = 0;
// console.log(numeros);

// Solução 3 também não precisa de let

numeros.splice(0, numeros.length);
console.log(numeros);

// Solução 4 custa muita memória para fazer esse
while (numeros.length > 0)
    numeros.pop();

// Combinando e Cortando Arrays

const segundo = [1 , 2 , 3];
const terceiro = [4 , 5 , 6];
// combinar
const combinando = segundo.concat(terceiro);
console.log(combinando); 
// dividir
const dividir = combinando.slice(2 , 5 );
console.log(dividir);

// operador spread
 
const clonado = [...combinando, ...dividir];
console.log(clonado);

// Iterando um Array
const alunos = ['Carla', 'Hiroito', 'Wesley', 'Wallace', 'Norma <3']
for (aluno of alunos)
    console.log(aluno);

// ForEach

alunos.forEach(function(aluno){
    console.log(aluno)
})

// ForEach com arrow
alunos.forEach((aluno, indice) => console.log(aluno, indice))

// Combinando Array e incluindo varias vezes um elemento

const classe = [...alunos].join(' ');
console.log(classe);

const frase = 'olá bem vindo ao estudo';
const resultado = frase.split(' ');
console.log(resultado);

console.log(resultado.join('-'));