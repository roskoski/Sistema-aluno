function calcularNota() {

    //const -> valor fixo
    const mediaMinima =7;

    //let -> valores que podem mudar
    let nome = prompt("Digite o nome do aluno:");

    let nota1 = Number(prompt("Digite a primeira nota:"));
    let nota2 = Number(prompt("Digite a segunda nota:"));
    let nota3 = Number(prompt("Digite a terceira nota:"));

    //operadores aritméticos
    let soma = nota1 + nota2 + nota3;
    let media = soma / 3;

    //operadores relacionais + lógicos

    let aprovado = media >= mediaMinima;
    let recuperacao = media >= 5 && media < 7;
    let reprovado = media < 5;

    let ResultadoFinal = "";

    if (aprovado) {
        ResultadoFinal = "aprovado";
    } else if (recuperacao) {
        ResultadoFinal="recuperação";
    } else if (reprovado) {
        ResultadoFinal="reprovado";
    }

    document.getElementById("resultado").innerHTML = 
         ´Aluno : ${nome} <hr>
         media</hr>
 }