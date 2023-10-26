function encontrarMaiorNumero(arr) {
    let maior = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maior) {
        maior = arr[i];
      }
    }
    return maior;
  }
  
  const numeros = [12, 45, 7, 23, 56, 31];
  const maiorNumero = encontrarMaiorNumero(numeros);
  console.log("O maior número é: " + maiorNumero);
  