const list = new Map();
list.set("い組", 35);
list.set("ろ組", 36);
list.set("は組", 37);
list.set("に組", 34);
list.set("ほ組", 36);

for (const [key, value] of list) {
  console.log(`${key}は${value}`);
}
