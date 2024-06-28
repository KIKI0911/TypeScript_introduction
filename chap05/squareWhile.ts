export {};

let i = 1;

while (i <= 10) {
  let ans = i ** 2;
  console.log(`${i}回目のansの値:${ans}`);
  i++;
}

for (let j = 1; j <= 10; j++) {
  let ans2 = j ** 2;
  console.log(`${j}回目のansの値:${ans2}`);
}
