export {};

const A = Math.round(Math.random() * 68) + 1950;
const B = Math.round(Math.random() * 68) + 1950;

console.log(`Aさんの生まれ年は${A}年です`);
console.log(`Bさんの生まれ年は${B}年です`);

if (A >= 1989 && B >= 1989) {
  console.log("両方とも平成生まれ");
} else if (A >= 1989 || B >= 1989) {
  console.log("どちらかが平成生まれ");
} else {
  console.log("両方とも昭和生まれ");
}
