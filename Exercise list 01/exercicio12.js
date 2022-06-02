// Natureza Dinâmica de objetos
const mouse = {
    cor : 'red',
    marca : 'dazz'
}

mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log('mudando DPI')
}

delete mouse.velocidade;
delete mouse.cor;
console.log(mouse);