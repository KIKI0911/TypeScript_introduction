export {};

for (let i = 1; i <= 5; i++) {
  let num1 = Math.round(Math.random() * 100);
  console.log(`num1: ${num1}`);
  if (num1 == 0) {
    break;
  }
  for (let j = 1; j <= 5; j++) {
    let num2 = Math.round(Math.random() * 100);
    console.log(`num2: ${num2}`);
    let divide = num2 / num1;
    console.log(`num2 / num1 = ${divide}`);
  }
}
