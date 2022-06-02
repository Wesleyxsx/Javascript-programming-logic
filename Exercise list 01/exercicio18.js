//  Montador de enderoço (mini-projeto) 3:10

//Criar um objeto endereço que contenha: 
// Rua
// Cidade
// CEP
// exibirEndereço(endereço)

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

function exibirEndereço(endereco) {
    for (let chave in endereco)
    console.log(chave, endereco[chave]);
}

exibirEndereço(endereco);