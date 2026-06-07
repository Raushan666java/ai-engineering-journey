#!/usr/bin/env node

/*
 * generate_india_sql.js
 *
 * Usage:
 *   node generate_india_sql.js --input path/to/your_dump.sql --output path/to/india_locations_full.sql
 *
 * What it does:
 * - Reads an SQL dump file
 * - Extracts CREATE TABLE and INSERT statements for the target tables
 * - Sanitizes CREATE statements to use `IF NOT EXISTS`
 * - Converts `INSERT INTO` -> `INSERT IGNORE INTO` to avoid duplicate key failures
 * - Writes an output SQL file that toggles FOREIGN_KEY_CHECKS for safe import
 *
 * Target tables: countries, states, districts, blocks, panchayats
 */

const fs = require("fs");
const path = require("path");

const args = require("minimist")(process.argv.slice(2), {
  string: ["input", "output"],
  alias: { i: "input", o: "output" },
  default: {
    output: path.join(process.cwd(), "india_locations_full.sql"),
  },
});

if (!args.input) {
  console.error("Error: --input path/to/dump.sql is required.");
  process.exit(1);
}

const inputPath = path.resolve(args.input);
const outputPath = path.resolve(args.output);

if (!fs.existsSync(inputPath)) {
  console.error(`Error: Input file not found: ${inputPath}`);
  process.exit(1);
}

const sql = fs.readFileSync(inputPath, "utf8");

const tables = ["countries", "states", "districts", "blocks", "panchayats"];

function extractCreate(sqlText, table) {
  // Match CREATE TABLE `table` ... ; (greedy until the semicolon that terminates the CREATE)
  const re = new RegExp(
    `CREATE TABLE ` + "`" + table + "`" + "[\\s\\S]*?;",
    "i",
  );
  const m = sqlText.match(re);
  return m ? m[0] : null;
}

function extractInserts(sqlText, table) {
  const re = new RegExp(
    `INSERT INTO ` + "`" + table + "`" + "[\\s\\S]*?;",
    "ig",
  );
  const matches = sqlText.match(re);
  return matches || [];
}

let outParts = [];
outParts.push("-- Auto-generated sanitized import for India locations");
outParts.push("-- Source: " + inputPath);
outParts.push("SET FOREIGN_KEY_CHECKS=0;");

let totalInserts = 0;
let foundCreate = 0;

for (const table of tables) {
  const createStmt = extractCreate(sql, table);
  if (createStmt) {
    foundCreate++;
    // Add IF NOT EXISTS to CREATE TABLE
    const sanitizedCreate = createStmt.replace(
      /CREATE TABLE\s+`/i,
      "CREATE TABLE IF NOT EXISTS `",
    );
    outParts.push("\n-- DDL for " + table);
    outParts.push(sanitizedCreate.trim());
  } else {
    outParts.push(`\n-- CREATE TABLE for ${table} not found in dump`);
  }

  const inserts = extractInserts(sql, table);
  if (inserts.length) {
    outParts.push("\n-- INSERTS for " + table);
    for (const ins of inserts) {
      // convert to INSERT IGNORE
      const ign = ins.replace(/INSERT INTO/gi, "INSERT IGNORE INTO");
      outParts.push(ign.trim());
      // crude count of rows: count "),(" occurrences + 1
      const valuePart = ins.substring(ins.indexOf("VALUES"));
      const rowCount = (valuePart.match(/\),\(/g) || []).length + 1;
      totalInserts += rowCount;
    }
  } else {
    outParts.push(`\n-- No INSERT statements found for ${table}`);
  }
}

outParts.push("\nSET FOREIGN_KEY_CHECKS=1;");

const outputSql = outParts.join("\n\n");
fs.writeFileSync(outputPath, outputSql, "utf8");

console.log("Sanitized SQL written to:", outputPath);
console.log(
  "Tables processed:",
  tables.length,
  "| CREATE statements found:",
  foundCreate,
);
console.log("Approx inserted rows (sum of VALUES groups):", totalInserts);
console.log(
  "Tip: Review the output SQL file and run it with: mysql -u user -p database <",
  outputPath,
);

// Return success code
process.exit(0);
