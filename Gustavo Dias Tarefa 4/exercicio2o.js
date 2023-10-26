function mostrarInfo(pessoa) {
    for (let propriedade in pessoa) {
        console.log(propriedade + ": " + pessoa[propriedade]);
    }
}

let pessoa = {
    nome: "Gustavo",
    idade: 17,
    cidade: "São Paulo"
};

mostrarInfo(pessoa);
