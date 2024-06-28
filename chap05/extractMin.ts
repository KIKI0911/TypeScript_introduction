export {};

let min = 100;

for (let i = 1; i <= 10; i++) {
  let num = Math.round(Math.random() * 100);
  console.log(`${i}回目: 乱数：${num}`);
  if (num < min) {
    min = num;
  }
}

console.log(`最小値：${min}`);
