function contarPropriedades(objeto) {
    let contador = 0;
    for (let propriedade in objeto) {
        contador++;
    }
    return contador;
}

let aluno = {
    nome: "Maria",
    idade: 20,
    nota: 8.5
};

console.log("Número de propriedades do objeto aluno: " + contarPropriedades(aluno));
