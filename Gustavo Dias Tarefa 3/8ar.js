function verificarPresencaNome(arr, nome) {
    return arr.includes(nome);
  }
  
  const nomes = ["Alice", "Bob", "Carol", "David", "Eve"];
  const nomeProcurado = "Bob";
  if (verificarPresencaNome(nomes, nomeProcurado)) {
    console.log(nomeProcurado + " está presente no array.");
  } else {
    console.log(nomeProcurado + " não está presente no array.");
  }
  