function encontrarPalavraMaisLonga(arr) {
    let palavraMaisLonga = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > palavraMaisLonga.length) {
        palavraMaisLonga = arr[i];
      }
    }
    return palavraMaisLonga;
  }
  
  const palavras = ["cachorro", "gato", "elefante", "pássaro"];
  const maisLonga = encontrarPalavraMaisLonga(palavras);
  console.log("A palavra mais longa é: " + maisLonga);
  