function isPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) return false;
    }
    return true;
  }
  
  let produto = 1;
  for (let i = 1; i <= 20; i++) {
    if (isPrimo(i)) {
      produto *= i;
    }
  }
  console.log("O produto dos números primos é: " + produto);
  