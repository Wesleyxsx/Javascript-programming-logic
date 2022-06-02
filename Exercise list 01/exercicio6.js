// Criando uma função somar que retorna a soma de toso os múltiplos de 3 e 5
// multilpos de 3 (3 , 6, 9)
// multilpos de 5 (5 , 10)

// somando os multilpos (3 + 6 + 9 + 5 + 10 = 33)
// armazer os multiplos de 3
// armazer os multiplos de 5
// somar os dois


somar(10);
function somar(limite){
    let multilposDe3 = 0;
    let multilposDe5 = 0;
    for (i = 0; i <= limite; i++){
        if ( i % 3 === 0)
        multilposDe3 += i;
        if ( i % 5 === 0)
        multilposDe5 += i;
    }
    console.log(multilposDe3 + multilposDe5);
}
