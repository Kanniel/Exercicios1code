let n = 10000;
let pi = 0;
for (let i = 0; i < n; i++) {
  pi += 4 * Math.pow(-1, i) / (2 * i + 1);
}
console.log("Valor estimado de Pi: " + pi);
