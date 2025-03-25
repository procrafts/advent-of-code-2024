import { readFileSync } from "node:fs";

export function readText(challenge, demo = false) {
  return readFileSync(
    `./input/${demo ? "demo" : "challenge"}${challenge}.txt`,
    { encoding: "utf8" },
  );
}
