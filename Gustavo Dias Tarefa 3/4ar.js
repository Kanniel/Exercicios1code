function calcularMedia(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
      soma += arr[i];
    }
    return soma / arr.length;
  }
  
  const numeros = [10, 20, 30, 40, 50];
  const media = calcularMedia(numeros);
  console.log("A média dos números é: " + media);
  