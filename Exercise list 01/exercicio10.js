const celular = {
    marcarCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria : 5000,
    ligar : function(){
        console.log('fazendo ligação...')
    }
}

// Factory funcions(Função de fábrica)
function criarCelular(marcarCelular, tamanhoTela, capacidadeBateria){
    return {
        marcarCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('fazendo ligação...')
        }
    }
}

const celular1 = criarCelular('Zenfone',5.5,5000);
console.log(celular1);