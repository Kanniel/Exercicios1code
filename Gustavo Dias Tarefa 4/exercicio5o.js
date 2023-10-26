let carro = {
    marca: "Ford",
    modelo: "Fiesta",
    ano: 2022,
    exibirInformacoes: function () {
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Ano: " + this.ano);
    }
};

carro.exibirInformacoes();
