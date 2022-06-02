//  Encontrar a igualdade de objetos

class Endereco {
    constructor(rua, cidade, cep) {
        this.rua = rua,
        this.cidade = cidade,
        this.cep = cep
    }
}

const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('a','b','c');
const endereco3 = endereco1;
 
function saoIguais(endereco1, endereco2){
    // comprar se as propriedade são iguais
    return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep
}

console.log(saoIguais(endereco1, endereco2))

function temEnderecoMemoriaIguais(endereco1, endereco2){
    // comprando se a referencia do objeto aponta para o mesmo local na memória
    return endereco1 === endereco2;

    // o endereço da memória é a própria variavél, ou seja tem que ser o mesmo local.
}

console.log(temEnderecoMemoriaIguais(endereco1, endereco2));

function temEnderecoMemoriaIguais2(endereco1, endereco3){
    return endereco1 === endereco3;

    // agora ele retorna com TRUE, Porque são exatamente os mesmos objetos do mesmo local "variável"
}

console.log(temEnderecoMemoriaIguais2(endereco1, endereco3));
