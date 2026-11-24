// Till Firmware Do Us Part — one wedding vow spoken by a robot at its own wedding.
// The program writes the vow to entry.txt, then reads it back and checks it
// against the bounty gate: one line, 1-200 characters, no stray whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The vow itself: a machine frames love as its only running process, then
// lands the twist — the one file it refuses to delete is the vow. Funny
// because a robot talks about background processes, tender because even
// forgetting cannot erase it.
const VOW =
  "From today I run no background processes but loving you, and if my memory ever fails, let this vow be the one file I refuse to delete.";

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, VOW, "utf8");

// Read it back and validate what actually landed on disk.
const written = readFileSync(entryPath, "utf8");
if (written !== VOW) {
  throw new Error("entry.txt does not match the vow");
}
if (written.length < 1 || written.length > 200) {
  throw new Error(`vow length ${written.length} is outside 1-200 characters`);
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("vow must be a single line");
}
if (written !== written.trim()) {
  throw new Error("vow has leading or trailing whitespace");
}
if (written.includes("  ")) {
  throw new Error("vow contains a double space");
}
// The vow is plain ASCII and exactly one sentence: a second sentence
// terminator mid-line would break the "one sentence" rule, so count them.
if (!/^[\x20-\x7e]+$/.test(written)) {
  throw new Error("vow must be plain ASCII text");
}
if ((written.match(/[.!?]/g) ?? []).length !== 1) {
  throw new Error("vow must be exactly one sentence");
}
if (!/[.!?]$/.test(written)) {
  throw new Error("vow must end with punctuation");
}
console.log(`Wrote ${written.length}-character vow to ${entryPath}`);
