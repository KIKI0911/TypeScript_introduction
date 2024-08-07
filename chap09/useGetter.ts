export {};

class Student {
  name: string = "";
  english: number = 0;
  math: number = 0;
  japanese: number = 0;

  constructor(name: string, english: number, math: number, japanese: number) {
    this.name = name;
    this.english = english;
    this.math = math;
    this.japanese = japanese;
  }

  showScoreSum() {
    console.log(`${this.name}の合計点数:${this.total}`);
  }

  showScoreAvg() {
    const avg = Math.round((this.total / 3) * 10) / 10;
    console.log(`${this.name}の平均点:${avg}`);
  }

  get total(): number {
    return this.english + this.math + this.japanese;
  }
}

const taro = new Student("宮本太郎", 78, 82, 85);
taro.showScoreSum();
taro.showScoreAvg();
console.log(`合計値: ${taro.total}`);
