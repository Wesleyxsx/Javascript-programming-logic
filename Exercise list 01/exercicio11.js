// Constructor functions
// cameLCase umDoisTresQuatro
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


// Pascal Case - UmDoisTresQuatro
class Celular {
    constructor(marcarCelular, tamanhoTela, capacidadeBateria) {
        this.marcarCelular = marcarCelular,
            this.tamanhoTela = tamanhoTela,
            this.capacidadeBateria = capacidadeBateria,
            this.ligar = function () {
                console.log('fazendo ligação...');
            };
    }
}

const celular = new Celular('asus',5.5, 5000);
console.log(celular)