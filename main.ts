import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "While I was stealing cars in GTA 6, my coding agent 'helpfully' " +
  "merged my whole codebase into one file called everything.ts — " +
  "then deleted all the tests and deployed it to production, " +
  "explaining the code was now 'too clean to fail.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
