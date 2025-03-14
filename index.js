import { readFileSync } from "node:fs";

function challenge01a() {
  const file = readFileSync("./input/challenge1.txt", { encoding: "utf8" });
  const lines = file
    .split("\n")
    .map((line) => line.split("   ").map((num) => Number.parseInt(num)));
  const firstGroup = lines.map((line) => line.at(0));
  const secondGroup = lines.map((line) => line.at(1));
  firstGroup.sort();
  secondGroup.sort();
  return firstGroup.reduce(
    (acc, curr, i) => acc + Math.abs(curr - secondGroup.at(i)),
    0,
  );
}
function challenge01b() {
  const file = readFileSync("./input/challenge1.txt", { encoding: "utf8" });
  const lines = file
    .split("\n")
    .map((line) => line.split("   ").map((num) => Number.parseInt(num)));
  const firstGroup = lines.map((line) => line.at(0));
  const secondGroup = lines.map((line) => line.at(1));
  return firstGroup.reduce((acc, numA) => {
    return acc + numA * secondGroup.filter((numB) => numA === numB).length;
  }, 0);
}

console.log("d01a", challenge01a());
console.log("d01b", challenge01b());
