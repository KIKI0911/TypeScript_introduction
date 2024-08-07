export {};

function showRoundElement(
  currentValue: number,
  index: number,
  array: number[]
) {
  const roundedElement = Math.round(currentValue);
  console.log(
    `${index + 1}個目の要素${currentValue}の丸め処理後:${roundedElement}`
  );
}

const numList = [45.112, 78.567, 66.891, 12.223, 28.341];
numList.forEach(showRoundElement);
