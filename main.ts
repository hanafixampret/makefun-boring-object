import { writeFileSync, mkdirSync } from "node:fs";

const entry =
  "This teaspoon has stirred ten thousand cups of tea and has never once been offered a sip.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}
if (entry.includes("\n")) {
  throw new Error("entry must stay on one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
