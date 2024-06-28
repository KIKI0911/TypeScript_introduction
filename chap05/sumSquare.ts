export {};

let total = 0;
for (let i = 1; i <= 10; i++) {
  console.log(`${i}回目`);
  let ans = i ** 2;
  total += ans;
  console.log(`値：${total}`);
}
