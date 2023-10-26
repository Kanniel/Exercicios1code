let a = 0;
let b = 1;
for (let i = 1; i <= 20; i++) {
  console.log(a);
  let temp = 2 * b + a;
  a = b;
  b = temp;
}
