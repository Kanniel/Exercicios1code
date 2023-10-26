let aluno = {
    nome: "Gustavo",
    notas: [7.5, 8.0, 9.5],
    calcularMedia: function () {
        let soma = 0;
        for (let nota of this.notas) {
            soma += nota;
        }
        return soma / this.notas.length;
    }
};

console.log("Média das notas do aluno " + aluno.nome + ": " + aluno.calcularMedia());
