import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Monday, one star: my alarm hit snooze on me, my inbox held a meeting about meetings, and my coffee needed a coffee first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

// Clear only the contents of the output directory, never the directory itself.
for (const entry of readdirSync(outDir)) {
  rmSync(join(outDir, entry), { recursive: true, force: true });
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", { mode: 0o644 });
console.log(`Wrote entry.txt (${line.length} characters)`);
