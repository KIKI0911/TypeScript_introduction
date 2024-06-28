export {};

const year = Math.round(Math.random() * 70) + 1950;
if (year % 4 == 0) {
  console.log(`${year}は閏年`);
} else {
  console.log(`${year}は閏年ではない`);
}
