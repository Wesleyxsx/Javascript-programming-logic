// Clonando Objetos

const celular = {
    marcarCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    ligar : function(){
        console.log('fazendo ligação...')
    }
}

const novoObjeto = Object.assign({
    bateria: 5000
}, celular);
console.log(novoObjeto);

const objeto2 = {...celular};
console.log(objeto2);