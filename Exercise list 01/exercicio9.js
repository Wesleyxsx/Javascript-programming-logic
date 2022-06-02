//Números primos

//Criar uma função para mostrar os números primos

//Primos
//Compostos

exibirNumerosPrimos(70);

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        let ehPrimo = true;
        for (let divisor = 2; divisor < numero; divisor++){
            if (numero % divisor === 0){
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) console.log(numero);
    }
}
