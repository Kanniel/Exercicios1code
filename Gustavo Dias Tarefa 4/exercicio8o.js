function clonarObjeto(objeto) {
    let clone = {};
    for (let propriedade in objeto) {
        clone[propriedade] = objeto[propriedade];
    }
    return clone;
}

let original = { a: 1, b: 2 };
let copia = clonarObjeto(original);
console.log(copia);
