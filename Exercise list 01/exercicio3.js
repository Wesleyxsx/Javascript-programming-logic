// velocidade máxima de até 70
// a cada 5km acima do limite de velocidade ganha 1 ponto na carteira
// Math.Floor() para arredontar numeros decimais para inteiros
// caso o pontos seja maior que 12 -> "Carteira Suspendida"


verificadorVelocidade(72);

function verificadorVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('Dentro do limite de velocidade' , velocidade);
    else {
        if (velocidade > velocidadeMaxima)
            pontos = Math.ceil(((velocidade / kmPorPonto) - (velocidadeMaxima / kmPorPonto)))
            pontosNaCarteira(pontos);
            console.log('Acima do limite de velocidade' , velocidade);
    }
}


function pontosNaCarteira(pontos){
    if (pontos >= 12)
        console.log('Carteira Suspensa');
    else{
        console.log('Pontos sofridos na carteira', pontos);
    }
}
