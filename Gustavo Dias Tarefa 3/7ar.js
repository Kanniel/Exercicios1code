function encontrarNumerosPares(arr) {
    return arr.filter(numero => numero % 2 === 0);
  }
  
  const numeros = [5, 12, 8, 17, 24, 30];
  const pares = encontrarNumerosPares(numeros);
  console.log("Números pares: " + pares);
  