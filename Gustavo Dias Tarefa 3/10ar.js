function somaNumerosImpares(arr) {
    return arr.filter(numero => numero % 2 !== 0).reduce((acumulador, numero) => acumulador + numero, 0);
  }
  
  const numeros = [5, 12, 8, 17, 24, 30];
  const somaImpares = somaNumerosImpares(numeros);
  console.log("A soma dos números ímpares é: " + somaImpares);
  