export {};

const num = Math.round(Math.random() * 9) + 1;
if (num <= 4) {
  console.log("四捨五入すると0");
} else {
  console.log("四捨五入すると10");
}
