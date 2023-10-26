function multiplicarArray(array, multiplicador) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
      resultado.push(array[i] * multiplicador);
    }
    return resultado;
  }
  