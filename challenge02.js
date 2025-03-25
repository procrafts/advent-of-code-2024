import { readFileSync } from "node:fs";

function checkLine(numArray) {
  let isAscending;
  let isDescending;
  numArray.forEach((num, i) => {
    if (i === 0) {
      return;
    }
    const prev = numArray[i - 1];
    if (num > prev && num - prev <= 3 && isAscending !== false) {
      isAscending = true;
      isDescending = false;
    } else if (num < prev && prev - num <= 3 && isDescending !== false) {
      isAscending = false;
      isDescending = true;
    } else {
      isAscending = false;
      isDescending = false;
    }
  });
  return isAscending || isDescending;
}

function a() {
  const file = readFileSync("./input/challenge02.txt", { encoding: "utf8" });
  const lines = file
    .split("\n")
    .map((line) => line.split(" ").map((num) => Number.parseInt(num)));
  let count = 0;
  lines.forEach((line) => {
    if (checkLine(line)) {
      count++;
    }
  });
  return count;
}

function b() {
  const file = readFileSync("./input/challenge02.txt", { encoding: "utf8" });
  const lines = file
    .split("\n")
    .map((line) => line.split(" ").map((num) => Number.parseInt(num)));
  const groups = lines.map((line) =>
    line.reduce((acc, curr, i, arr) => acc.concat([arr.toSpliced(i, 1)]), []),
  );
  let count = 0;
  groups.forEach((group) => {
    if (group.some((item) => checkLine(item))) {
      count++;
    }
  });
  return count;
}

export const challenge02 = { a, b };
