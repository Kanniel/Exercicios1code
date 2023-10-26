function numerosMaioresQueDez(arr) {
    return arr.filter(numero => numero > 10);
  }
  
  const numeros = [5, 15, 3, 12, 8, 20];
  const maioresQueDez = numerosMaioresQueDez(numeros);
  console.log("Números maiores que 10: " + maioresQueDez);
  