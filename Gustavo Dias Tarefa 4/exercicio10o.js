function ordenarObjetos(arrayDeObjetos, propriedade) {
    arrayDeObjetos.sort(function (a, b) {
        return a[propriedade] - b[propriedade];
    });
}

let pessoas = [
    { nome: "Alice", idade: 30 },
    { nome: "Bob", idade: 25 },
    { nome: "Carlos", idade: 35 }
];

ordenarObjetos(pessoas, "idade");
console.log(pessoas);
