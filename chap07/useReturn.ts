export {};

function showSigma2N(n: number): number {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += i;
  }
  return ans;
}

const sigma100 = showSigma2N(100);
const sigma150 = showSigma2N(150);
const sigma200 = showSigma2N(200);

const total = sigma100 + sigma150 + sigma200;
console.log(`それぞれの足し算結果${total}`);
