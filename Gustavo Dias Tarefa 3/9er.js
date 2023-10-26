let n = parseInt(prompt("Digite um número:"));
let a = 0;
let b = 1;
while (b <= n) {
  console.log(b);
  let temp = a + b;
  a = b;
  b = temp;
}
