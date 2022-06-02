// Faixa de preço 3:29
// Crie um array de objetos com uma faixa de preço,
// para que ele possa ser usado em um site de Mercadorias
// faixas, tooltip, mínimo e máximo

// Primeira opção

let faixas = [
    {tooltip : 'até R$700', minimo : 0, maximo : 700},
    {tooltip : 'de R$700 até R$1000', minimo : 700, maximo : 1000},
    {tooltip : 'de R$ 1000 ou mais', minimo : 1000, maximo : 999999}
];

// Segunda opção (Factory Function)
function criarFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaPreco('até R$700', 0, 700),
    criarFaixaPreco('de R$700 até R$1000', 700, 1000),
    criarFaixaPreco('de R$ 1000 ou mais', 1000, 999999)
]

console.log(faixas);
console.log(faixas2);

// terceira opção (Constructor Function)
class FaixaPreco{
    constructor (tooltip, minimo, maximo){
        this.tooltip = tooltip,
        this.minimo = minimo,
        this.maximo = maximo
    }
}

let faixas3 = [
    new FaixaPreco('d', 10, 20),
    new FaixaPreco('d', 20, 30),
    new FaixaPreco('d', 30, 40)
]

console.log(faixas3)