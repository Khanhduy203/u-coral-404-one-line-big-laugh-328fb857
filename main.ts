import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I let AI write my wedding vows: 'I do, subject to the terms and conditions I didn't read.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
