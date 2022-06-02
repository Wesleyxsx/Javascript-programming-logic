// Ex, Construction e Function

// Criar um objeto postagem
// Titulo, Mensagem, Autor, Visualizações, Comentários e estaoAoVivo

class Postagem {
    constructor(titulo, mensagem, autor) {
        this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor,
        this.visualizacoes = 0,
        this.comentarios = [],
        this.estaAoVivo = false;
    }
}

let postagem = new Postagem ('a', 'b', 'c');
console.log(postagem);