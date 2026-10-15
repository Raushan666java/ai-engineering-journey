/**
 * Validate every ```mermaid block in docs/ using Mermaid's own parser.
 *
 * The site renders these through Docusaurus's Mermaid component, which
 * throws on a syntax error and leaves an empty diagram box. Nothing in the
 * build fails, so a broken diagram ships silently. Mermaid's parse() is the
 * same parser the renderer uses, so this catches exactly what will fail.
 *
 * Usage:
 *   node scripts/validate_mermaid.mjs                 # report
 *   node scripts/validate_mermaid.mjs --json out.json
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DOCS = path.join(ROOT, "docs");
// Import mermaid's package entry directly. A directory import is rejected by
// the ESM loader, so resolve the manifest's main/module field first.
const mermaidPkgPath = path.join(ROOT, "site", "node_modules", "mermaid", "package.json");
const mermaidPkg = JSON.parse(fs.readFileSync(mermaidPkgPath, "utf8"));
const MERMAID = pathToFileURL(
  path.join(ROOT, "site", "node_modules", "mermaid", mermaidPkg.module || mermaidPkg.main)
).href;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "node_modules" || e.name === ".git") continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".md")) out.push(p);
  }
  return out;
}

/** Pull fenced mermaid blocks with their line numbers. */
function extract(text) {
  const lines = text.split(/\r?\n/);
  const blocks = [];
  let cur = null;
  for (let i = 0; i < lines.length; i++) {
    const fence = lines[i].match(/^\s*```(mermaid)\s*$/i);
    if (fence && !cur) {
      cur = { start: i + 1, body: [] };
      continue;
    }
    if (cur && /^\s*```\s*$/.test(lines[i])) {
      blocks.push({ startLine: cur.start, body: cur.body.join("\n") });
      cur = null;
      continue;
    }
    if (cur) cur.body.push(lines[i]);
  }
  return blocks;
}

async function main() {
  const argv = process.argv.slice(2);
  const jsonOut = argv.includes("--json")
    ? argv[argv.indexOf("--json") + 1]
    : null;

  // Mermaid's parser needs a DOM-ish global; jsdom-free shims are enough for
  // parse(), which does not render or measure.
  globalThis.window = globalThis.window || {};
  // Mermaid's module top-level calls window.addEventListener on import, so the
  // shim must exist before the dynamic import, not just before initialize().
  if (typeof globalThis.window.addEventListener !== "function") {
    globalThis.window.addEventListener = () => {};
    globalThis.window.removeEventListener = () => {};
    globalThis.window.matchMedia =
      globalThis.window.matchMedia ||
      (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }));
    globalThis.window.location = globalThis.window.location || { href: "http://localhost" };
  }
  globalThis.document = globalThis.document || {
    createElement: () => ({ style: {}, setAttribute() {}, appendChild() {}, getAttribute: () => null }),
    body: { appendChild() {}, removeChild() {} },
    querySelector: () => null,
    querySelectorAll: () => [],
    documentElement: { style: {} },
  };
  // Node 21+ defines navigator as a getter-only global, so assigning throws.
  // Only define it when it is genuinely absent.
  if (typeof globalThis.navigator === "undefined") {
    Object.defineProperty(globalThis, "navigator", {
      value: { userAgent: "node" },
      configurable: true,
    });
  }

  const mermaid = (await import(MERMAID)).default;
  mermaid.initialize({ startOnLoad: false, securityLevel: "strict" });

  const files = walk(DOCS);
  const failures = [];
  let total = 0;

  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    for (const b of extract(text)) {
      total++;
      if (!b.body.trim()) continue;
      try {
        await mermaid.parse(b.body);
      } catch (err) {
        failures.push({
          file: path.relative(ROOT, file).replace(/\\/g, "/"),
          line: b.startLine,
          error: String(err?.message || err).split("\n").slice(0, 3).join(" | "),
          firstLine: b.body.split("\n")[0].slice(0, 90),
        });
      }
    }
  }

  console.log("=".repeat(70));
  console.log(`MERMAID VALIDATION - ${total} blocks in ${files.length} files`);
  console.log("=".repeat(70));
  console.log(`valid   : ${total - failures.length}`);
  console.log(`invalid : ${failures.length}`);

  // Group by error signature so systematic causes surface first.
  const bySig = new Map();
  for (const f of failures) {
    const sig = f.error.replace(/\d+/g, "N").slice(0, 110);
    bySig.set(sig, (bySig.get(sig) || 0) + 1);
  }
  if (bySig.size) {
    console.log("\nfailure signatures:");
    [...bySig.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12)
      .forEach(([sig, n]) => console.log(`  ${String(n).padStart(4)}  ${sig}`));
  }

  console.log("\nfirst failures:");
  failures.slice(0, 25).forEach((f) =>
    console.log(`  ${f.file}:${f.line}  ${f.error.slice(0, 100)}`)
  );

  if (jsonOut) fs.writeFileSync(jsonOut, JSON.stringify(failures, null, 2));
  console.log("=".repeat(70));
  process.exit(failures.length ? 1 : 0);
}

main().catch((e) => {
  console.error("validator failed:", e);
  process.exit(2);
});