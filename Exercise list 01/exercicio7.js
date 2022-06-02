// Média escolar
// Obter a média a partir de um array

// 0-59 : F
// 60-69 : D
// 70-79 : C
// 80-89 : B
// 90-100 : A

const array = [70,70,80];

console.log(mediaDoAluno(array));
console.log(array)

// primeiro metodo
// function mediaDoAluno(notas) {
//     let soma = 0;
//     for (let nota of notas) {
//         soma += nota;
//         console.log(soma)
//     }
//     const media = soma/(notas.length);

//     if (media < 59) return 'F';
//     if (media < 69) return 'D';
//     if (media < 79) return 'C';
//     if (media < 89) return 'B';
//     return 'A'
// }


// segundo metodo
function mediaDoAluno(notas) {
    const media = calculadoraMedia(notas);
    let soma = 0;

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A'
}
function calculadoraMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma/(array.length);
}