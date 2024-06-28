export {};

const year = Math.round(Math.random() * 121) + 1900;
console.log(`yearは${year}年`);

if (year >= 1912 && year < 1926) {
  console.log("大正");
} else if (year >= 1926 && year < 1989) {
  console.log("昭和");
} else if (year >= 1989 && year < 2019) {
  console.log("平成");
} else if (year >= 2019) {
  console.log("令和");
} else {
  console.log("明治");
}
