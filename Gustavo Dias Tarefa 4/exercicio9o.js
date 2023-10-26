let estoque = {
    produtos: {},
    adicionarProduto: function (nome, quantidade) {
        if (this.produtos[nome]) {
            this.produtos[nome] += quantidade;
        } else {
            this.produtos[nome] = quantidade;
        }
    },
    exibirQuantidade: function (nome) {
        if (this.produtos[nome]) {
            console.log("Quantidade de " + nome + " em estoque: " + this.produtos[nome]);
        } else {
            console.log("Produto não encontrado no estoque.");
        }
    }
};

estoque.adicionarProduto("Camiseta", 50);
estoque.adicionarProduto("Calça", 30);
estoque.exibirQuantidade("Camiseta");
estoque.exibirQuantidade("Sapato");
