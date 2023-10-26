1. Soma Simples
const num1 = 5;
const num2 = 3;
const soma = num1 + num2;
console.log("1. Soma Simples:", soma);

2. Calculadora de Juros
const principal = 1000;
const taxaJuros = 0.05;
const anos = 3;
let montante = principal;
montante *= Math.pow(1 + taxaJuros, anos);
console.log("2. Calculadora de Juros:", montante);

3. Conversor de Temperatura
const celsius = 25;
const fahrenheit = (celsius * 9/5) + 32;
console.log("3. Conversor de Temperatura:", fahrenheit + "°F");

4. Cálculo de Média
const nota1 = 7;
const nota2 = 8;
const nota3 = 6;
const media = (nota1 + nota2 + nota3) / 3;
const situacao = media >= 7 ? "Aprovado" : "Reprovado";
console.log("4. Cálculo de Média:", `Média: {media.toFixed(2)}, Situação: {situacao}`);

5. Calculadora de IMC
const peso = 70;
const altura = 1.75;
const imc = peso / (altura * altura);
console.log("5. Calculadora de IMC:", `IMC: {imc.toFixed(2)}`);

6. Divisão e Resto
const numero1 = 20;
const numero2 = 7;
const divisao = numero1 / numero2;
const resto = numero1 % numero2;
console.log("6. Divisão e Resto:", `Divisão: {divisao.toFixed(2)}, Resto: {resto}`);

7. Calculadora de Desconto
const valorOriginal = 100;
const percentualDesconto = 20;
const valorComDesconto = valorOriginal - (valorOriginal * (percentualDesconto / 100));
console.log("7. Calculadora de Desconto:", `Valor com Desconto: R${valorComDesconto.toFixed(2)}`);

8. Conversor de Moeda
const valorEmDolar = 50;
const taxaDeCambio = 5.4; Exemplo de taxa de câmbio
const valorEmReal = valorEmDolar * taxaDeCambio;
console.log("8. Conversor de Moeda:", `Valor em Real: R${valorEmReal.toFixed(2)}`);

9. Tabuada
const numeroDaTabuada = 7;
console.log("9. Tabuada:");
console.log(`{numeroDaTabuada} x 1 = {numeroDaTabuada * 1}`);
console.log(`{numeroDaTabuada} x 2 = {numeroDaTabuada * 2}`);
console.log(`{numeroDaTabuada} x 3 = {numeroDaTabuada * 3}`);
console.log(`{numeroDaTabuada} x 4 = {numeroDaTabuada * 4}`);
console.log(`{numeroDaTabuada} x 5 = {numeroDaTabuada * 5}`);
console.log(`{numeroDaTabuada} x 6 = {numeroDaTabuada * 6}`);
console.log(`{numeroDaTabuada} x 7 = {numeroDaTabuada * 7}`);
console.log(`{numeroDaTabuada} x 8 = {numeroDaTabuada * 8}`);
console.log(`{numeroDaTabuada} x 9 = {numeroDaTabuada * 9}`);
console.log(`{numeroDaTabuada} x 10 = {numeroDaTabuada * 10}`);

10. Cálculo de Fatorial
const numeroParaCalcularFatorial = 5;
let fatorial = 1;
for (let i = 2; i <= numeroParaCalcularFatorial; i++) {fatorial *= i;}
console.log("10. Cálculo de Fatorial:", `Fatorial de {numeroParaCalcularFatorial} = {fatorial}`);