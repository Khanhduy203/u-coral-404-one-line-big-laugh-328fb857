import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I asked AI to write my wedding vows and it suggested I promise to love her until the subscription renews or the terms change.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
