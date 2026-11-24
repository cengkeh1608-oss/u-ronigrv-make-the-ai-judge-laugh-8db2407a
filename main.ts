import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I wrote the code, tested the code, reviewed the code, and approved the code. All four of me agree: ship it.";

// Winner over D14 ("hallucinated an API... team builds against it") and D3
// (context window ran out mid-sentence): D16 wins the tie-break because its
// four-role escalation lands on first read, the self-review angle is fresher
// than another context-window joke in a 546-entry field, and the punch
// ("All four of me agree") is the most quotable of the three 25/25 drafts.

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
