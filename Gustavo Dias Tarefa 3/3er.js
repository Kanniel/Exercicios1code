let a = 0;
let b = 1;
while (b <= 1000) {
  console.log(b);
  let temp = a + b;
  a = b;
  b = temp;
}
