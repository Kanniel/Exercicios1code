function calcularTotal(produto) {
    return produto.preco * produto.quantidadeEstoque;
}

let total = calcularTotal(produto);
console.log("O valor total do produto em estoque é: " + total);
