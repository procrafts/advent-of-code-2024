import { readText } from "./utils/read-text.js";
import { zip } from "ramda";

const text = readText("01");

function createGroups() {
  const lines = text
    .split("\n")
    .map((line) => line.split("   ").map((num) => Number.parseInt(num)));
  const firstGroup = lines.map((line) => line.at(0));
  const secondGroup = lines.map((line) => line.at(1));
  return [firstGroup, secondGroup];
}

function a() {
  const [firstGroup, secondGroup] = createGroups();
  return zip(firstGroup.toSorted(), secondGroup.toSorted()).reduce(
    (acc, [a, b]) => acc + Math.abs(a - b),
    0,
  );
}

function b() {
  const [firstGroup, secondGroup] = createGroups();
  const counts = firstGroup.reduce(
    (acc, curr) =>
      acc.get(curr) ??
      acc.set(curr, secondGroup.filter((num) => num === curr).length),
    new Map(),
  );
  return firstGroup.reduce((acc, curr) => {
    return acc + curr * counts.get(curr);
  }, 0);
}

export const day01 = { a, b };
