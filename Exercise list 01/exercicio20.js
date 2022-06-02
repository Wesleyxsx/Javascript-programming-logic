// Montagem de postagem de Blog

// Eu quero que você crie neste exercício um objeto de postagem de blog que vai conter as seguintes propriedades
// postagem
/* titulo
mensagem
autor
visualizações
comentários
    (autor, mensagem)
estaAoVivo */

let postagem = {
    titulo : 'a',
    mensagem : 'b',
    autor : 'c',
    visualizações : 10, 
    comentários : [
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo : true
}

console.log(postagem);