export {};

const num = Math.round(Math.random() * 100);
console.log(num);
const rem = num % 2;
const cond: boolean = rem == 0;

if (cond) {
  console.log("偶数");
} else {
  console.log("奇数");
}
console.log("処理終了");
