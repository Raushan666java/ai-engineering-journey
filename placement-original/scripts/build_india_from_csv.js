#!/usr/bin/env node

/*
 * build_india_from_csv.js
 *
 * Usage examples:
 *   # Use local CSV files
 *   node build_india_from_csv.js \
 *     --states data/states.csv \
 *     --districts data/districts.csv \
 *     --blocks data/blocks.csv \
 *     --panchayats data/panchayats.csv \
 *     --output database/sql/india_from_csv.sql
 *
 *   # Download CSVs from datameet (if paths are known) and generate SQL
 *   node build_india_from_csv.js --download --output database/sql/india_from_csv.sql
 *
 * What it does:
 * - Reads CSV files (or downloads from URLs if provided)
 * - Attempts to auto-detect standard column names for linking (state_code, state_name, district_code, district_name, block_code, block_name, etc.)
 * - Generates CREATE TABLE statements (if requested) and INSERT IGNORE INTO statements matching your schema
 * - Writes a single SQL file ready for import
 *
 * Notes:
 * - The script is conservative about IDs: if CSV contains an `id` column it will use that; otherwise it will assign sequential IDs per table starting from configurable offsets.
 * - You can pass --country-id to set the India country id (default 6).
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const { parse } = require("csv-parse/sync");
const args = require("minimist")(process.argv.slice(2), {
  string: [
    "states",
    "districts",
    "blocks",
    "panchayats",
    "output",
    "states-url",
    "districts-url",
    "blocks-url",
    "panchayats-url",
  ],
  boolean: ["download", "include-creates", "use-gemini"],
  default: {
    output: path.join(process.cwd(), "india_from_csv.sql"),
    "include-creates": true,
    "country-id": "6",
  },
});

function fetch(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

function existsLocal(p) {
  try {
    return fs.existsSync(p);
  } catch (e) {
    return false;
  }
}

function normalizeKey(k) {
  return k
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function getVal(obj, names) {
  for (const n of names) {
    if (n in obj && obj[n] !== undefined && obj[n] !== "") return obj[n];
  }
  return null;
}

function escapeSql(s) {
  if (s === null || s === undefined) return "NULL";
  // ensure string
  s = String(s);
  // escape single quotes and backslashes
  s = s.replace(/\\/g, "\\\\").replace(/'/g, "''");
  return "'" + s + "'";
}

async function loadCsvFromArg(argPathOrUrl) {
  if (!argPathOrUrl) return null;
  if (
    argPathOrUrl.startsWith("http://") ||
    argPathOrUrl.startsWith("https://")
  ) {
    const data = await fetch(argPathOrUrl);
    return parse(data, { columns: true, skip_empty_lines: true });
  }
  if (existsLocal(argPathOrUrl)) {
    const txt = fs.readFileSync(argPathOrUrl, "utf8");
    return parse(txt, { columns: true, skip_empty_lines: true });
  }
  return null;
}

function detectCol(row, candidates) {
  const map = {};
  for (const k of Object.keys(row)) {
    map[normalizeKey(k)] = k;
  }
  for (const c of candidates) {
    if (map[normalizeKey(c)]) return map[normalizeKey(c)];
  }
  return null;
}

(async () => {
  const outputPath = path.resolve(args.output);
  const countryId = parseInt(args["country-id"], 10) || 6;

  // Try to load CSVs: prefer explicit file paths then explicit URLs
  let states = null;
  let districts = null;
  let blocks = null;
  let panchayats = null;

  // Try local args
  if (args.states) states = await loadCsvFromArg(args.states);
  if (args.districts) districts = await loadCsvFromArg(args.districts);
  if (args.blocks) blocks = await loadCsvFromArg(args.blocks);
  if (args.panchayats) panchayats = await loadCsvFromArg(args.panchayats);

  // Try explicit url args
  if (!states && args["states-url"])
    states = await loadCsvFromArg(args["states-url"]);
  if (!districts && args["districts-url"])
    districts = await loadCsvFromArg(args["districts-url"]);
  if (!blocks && args["blocks-url"])
    blocks = await loadCsvFromArg(args["blocks-url"]);
  if (!panchayats && args["panchayats-url"])
    panchayats = await loadCsvFromArg(args["panchayats-url"]);

  // If user asked to --download and no explicit urls were given, try several known datameet paths
  if (args.download) {
    const base = "https://raw.githubusercontent.com/datameet/maps/master";
    const candidates = {
      states: [
        base + "/website/docs/data/csv/statesCensus.csv",
        base + "/docs/data/csv/statesCensus.csv",
        base + "/States/states.csv",
        base + "/states/states.csv",
      ],
      districts: [
        base + "/website/docs/data/csv/dists.csv",
        base + "/docs/data/csv/dists.csv",
        base + "/Districts/districts.csv",
        base + "/districts/districts.csv",
      ],
      blocks: [
        base + "/website/docs/data/csv/blocks.csv",
        base + "/docs/data/csv/blocks.csv",
        base + "/blocks/blocks.csv",
      ],
      panchayats: [
        base + "/website/docs/data/csv/pc_14.csv",
        base + "/docs/data/csv/pc_14.csv",
        base + "/pc_14.csv",
      ],
    };

    async function tryList(list) {
      for (const u of list) {
        try {
          const data = await loadCsvFromArg(u);
          if (data) return { data, url: u };
        } catch (e) {
          // continue
        }
      }
      return null;
    }

    const s = await tryList(candidates.states);
    if (s) {
      states = s.data;
      console.log("Downloaded states CSV from:", s.url);
    }
    const d = await tryList(candidates.districts);
    if (d) {
      districts = d.data;
      console.log("Downloaded districts CSV from:", d.url);
    }
    const b = await tryList(candidates.blocks);
    if (b) {
      blocks = b.data;
      console.log("Downloaded blocks CSV from:", b.url);
    }
    const p = await tryList(candidates.panchayats);
    if (p) {
      panchayats = p.data;
      console.log("Downloaded panchayats CSV from:", p.url);
    }
  }

  if (!states && !districts && !blocks && !panchayats) {
    console.error(
      "No CSV data found. Provide file paths or use --download with working URLs.",
    );
    process.exit(1);
  }

  // Prepare maps for matching
  const stateMapByCode = new Map(); // code -> { id, name, code }
  const stateMapByName = new Map();
  const statesRows = [];
  let nextStateId = 1;
  if (states) {
    for (const r of states) {
      const codeCol = detectCol(r, [
        "state_code",
        "scode",
        "code",
        "st_code",
        "statecode",
      ]);
      const nameCol = detectCol(r, ["state_name", "name", "state", "st_name"]);
      const idCol = detectCol(r, ["id", "state_id"]);
      const code = codeCol ? r[codeCol].trim() : null;
      const name = nameCol ? r[nameCol].trim() : null;
      const id = idCol && r[idCol] ? parseInt(r[idCol], 10) : nextStateId++;
      const entry = { id, name, code };
      statesRows.push(entry);
      if (code) stateMapByCode.set(code.toLowerCase(), entry);
      if (name) stateMapByName.set(name.toLowerCase(), entry);
    }
  }

  // helper to normalize place names for fuzzy matching
  function normalizeName(n) {
    if (!n) return null;
    return String(n)
      .toLowerCase()
      .replace(/[\u0300-\u036f]/g, "") // remove diacritics
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  // small trigram similarity for fuzzy matching
  function trigramSimilarity(a, b) {
    if (!a || !b) return 0;
    a = a.toLowerCase();
    b = b.toLowerCase();
    function trigrams(s) {
      const t = new Set();
      const s2 = `  ${s} `;
      for (let i = 0; i < s2.length - 2; i++) t.add(s2.substr(i, 3));
      return t;
    }
    const A = trigrams(a);
    const B = trigrams(b);
    let inter = 0;
    for (const x of A) if (B.has(x)) inter++;
    if (A.size + B.size === 0) return 0;
    return (2 * inter) / (A.size + B.size);
  }

  // small delay helper
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // keep a report of rows we could not match
  const mappingReport = {
    unmatchedDistricts: [],
    unmatchedBlocks: [],
    unmatchedPanchayats: [],
    geminiCache: {},
  };

  // Gemini (Google Generative) client
  async function callGemini(prompt) {
    const key = process.env.GEMINI_API_KEY;
    const model = process.env.GEMINI_MODEL || "text-bison-001";
    if (!key)
      throw new Error("GEMINI_API_KEY is not set in environment variables");
    const url = `https://generativelanguage.googleapis.com/v1beta2/models/${model}:generateText?key=${key}`;
    const body = JSON.stringify({
      prompt: { text: prompt },
      maxOutputTokens: 100,
    });
    return new Promise((resolve, reject) => {
      const https = require("https");
      const u = new URL(url);
      const opts = {
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
      };
      const req = https.request(opts, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            const doc = JSON.parse(data);
            let out = null;
            if (doc.candidates && doc.candidates.length > 0)
              out = doc.candidates[0].content;
            else if (doc.output && doc.output.text) out = doc.output.text;
            if (out) return resolve(out.trim());
            return resolve(null);
          } catch (e) {
            return reject(e);
          }
        });
      });
      req.on("error", reject);
      req.write(body);
      req.end();
    });
  }

  // districts
  const districtRows = [];
  let nextDistrictId = 1;
  if (districts) {
    for (const r of districts) {
      const codeCol = detectCol(r, [
        "district_code",
        "dcode",
        "code",
        "districtcode",
      ]);
      const nameCol = detectCol(r, [
        "district_name",
        "name",
        "district",
        "dist",
        "dist_name",
      ]);
      // sometimes district CSVs include a state column called "state" or "st" or the full state name
      const stateCodeCol = detectCol(r, ["state_code", "scode", "state", "st"]);
      const stateNameCol = detectCol(r, ["state_name", "st_name", "state"]);
      const idCol = detectCol(r, ["id", "district_id"]);
      const code = codeCol ? r[codeCol].trim() : null;
      const name = nameCol ? r[nameCol].trim() : null;
      const stateCode = stateCodeCol ? r[stateCodeCol].trim() : null;
      const stateName = stateNameCol ? r[stateNameCol].trim() : null;
      const id = idCol && r[idCol] ? parseInt(r[idCol], 10) : nextDistrictId++;
      // resolve state id
      let stateEntry = null;
      if (stateCode) stateEntry = stateMapByCode.get(stateCode.toLowerCase());
      if (!stateEntry && stateName)
        stateEntry = stateMapByName.get(stateName.toLowerCase());
      const state_id = stateEntry ? stateEntry.id : null;
      // skip completely empty rows
      if (!name && !code) continue;
      // if no state_id was resolved, record it for reporting
      if (!state_id) mappingReport.unmatchedDistricts.push({ id, name, code });
      districtRows.push({ id, name, code, state_id });
    }
  }

  // If requested, try to resolve unmatched districts using Gemini
  if (args["use-gemini"]) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn(
        "--use-gemini requested but GEMINI_API_KEY is not set; skipping Gemini resolution.",
      );
    } else if (mappingReport.unmatchedDistricts.length === 0) {
      console.log("No unmatched districts to resolve with Gemini.");
    } else {
      console.log(
        `Attempting to resolve ${mappingReport.unmatchedDistricts.length} unmatched districts using Gemini`,
      );
      for (const item of mappingReport.unmatchedDistricts) {
        const name = item.name;
        if (!name) continue;
        const cacheKey = normalizeName(name);
        if (mappingReport.geminiCache[cacheKey] === undefined) {
          const prompt = `Which Indian state does the district named '${name}' belong to? Answer with only the state name or UNKNOWN.`;
          try {
            const ans = await callGemini(prompt);
            let suggestedLocal = null;
            if (ans) {
              const first = ans.split(/\r?\n/)[0].trim();
              if (first && first.toUpperCase() !== "UNKNOWN")
                suggestedLocal = first;
            }
            mappingReport.geminiCache[cacheKey] = suggestedLocal || null;
          } catch (e) {
            console.warn("Gemini request failed for", name, e.message);
            mappingReport.geminiCache[cacheKey] = null;
          }
          // be polite
          await sleep(250);
        }

        const suggested = mappingReport.geminiCache[cacheKey];
        if (suggested) {
          const norm = normalizeName(suggested);
          // best-effort matching to known states
          let matched = null;
          for (const [k, v] of stateMapByName.entries()) {
            if (k === norm) {
              matched = v;
              break;
            }
          }
          if (!matched) {
            for (const [k, v] of stateMapByName.entries()) {
              if (
                k.startsWith(norm) ||
                norm.startsWith(k) ||
                k.includes(norm) ||
                norm.includes(k)
              ) {
                matched = v;
                break;
              }
            }
          }
          if (!matched) {
            // try trigram similarity
            let best = null;
            let bestScore = 0;
            for (const [k, v] of stateMapByName.entries()) {
              const score = trigramSimilarity(k, norm);
              if (score > bestScore) {
                bestScore = score;
                best = v;
              }
            }
            if (best && bestScore > 0.6) matched = best;
          }

          if (matched) {
            // apply matched state id to districtRows
            const dr = districtRows.find((d) => d.id === item.id);
            if (dr) dr.state_id = matched.id;
          }
        }
      }
    }
  }

  // blocks
  const blockRows = [];
  let nextBlockId = 1;
  if (blocks) {
    for (const r of blocks) {
      const codeCol = detectCol(r, [
        "block_code",
        "bcode",
        "code",
        "blockcode",
      ]);
      const nameCol = detectCol(r, ["block_name", "name", "block"]);
      const districtCodeCol = detectCol(r, ["district_code", "dcode"]);
      const districtNameCol = detectCol(r, ["district_name", "district"]);
      const stateCodeCol = detectCol(r, ["state_code", "scode"]);
      const idCol = detectCol(r, ["id", "block_id"]);
      const code = codeCol ? r[codeCol].trim() : null;
      const name = nameCol ? r[nameCol].trim() : null;
      const districtCode = districtCodeCol ? r[districtCodeCol].trim() : null;
      const districtName = districtNameCol ? r[districtNameCol].trim() : null;
      const stateCode = stateCodeCol ? r[stateCodeCol].trim() : null;
      const id = idCol && r[idCol] ? parseInt(r[idCol], 10) : nextBlockId++;
      // resolve district id
      let districtEntry = null;
      if (districtCode)
        districtEntry = districtRows.find(
          (d) => d.code && d.code.toLowerCase() === districtCode.toLowerCase(),
        );
      if (!districtEntry && districtName)
        districtEntry = districtRows.find(
          (d) => d.name && d.name.toLowerCase() === districtName.toLowerCase(),
        );
      // if still not found and stateCode is present, try to find district under that state
      if (!districtEntry && stateCode)
        districtEntry = districtRows.find(
          (d) =>
            d.state_id &&
            stateMapByCode.get(stateCode.toLowerCase()) &&
            d.state_id === stateMapByCode.get(stateCode.toLowerCase()).id,
        );
      const district_id = districtEntry ? districtEntry.id : null;
      blockRows.push({ id, name, code, district_id });
    }
  }

  // panchayats
  const panchayatRows = [];
  let nextPanchayatId = 1;
  if (panchayats) {
    // detect if file is actually parliamentary constituency data (pc_14.csv) and skip as it's not panchayats
    const keysSample = panchayats.length
      ? Object.keys(panchayats[0]).join(" ").toLowerCase()
      : "";
    if (/pc\s*name|pc no\.|pc name|pc type/.test(keysSample)) {
      console.warn(
        "Downloaded 'panchayats' CSV looks like parliamentary constituencies (pc_14.csv). Skipping panchayat import. Provide a real panchayat CSV if you need panchayats.",
      );
    } else {
      for (const r of panchayats) {
        const codeCol = detectCol(r, ["panchayat_code", "pcode", "code"]);
        const nameCol = detectCol(r, [
          "panchayat_name",
          "name",
          "panchayat",
          "gp",
          "village",
        ]);
        const blockCodeCol = detectCol(r, ["block_code", "bcode", "blockcode"]);
        const blockNameCol = detectCol(r, [
          "block_name",
          "block",
          "tehsil",
          "taluka",
        ]);
        const idCol = detectCol(r, ["id", "panchayat_id"]);
        const code = codeCol && r[codeCol] ? r[codeCol].trim() : null;
        const name = nameCol && r[nameCol] ? r[nameCol].trim() : null;
        const blockCode =
          blockCodeCol && r[blockCodeCol] ? r[blockCodeCol].trim() : null;
        const blockName =
          blockNameCol && r[blockNameCol] ? r[blockNameCol].trim() : null;
        const id =
          idCol && r[idCol] ? parseInt(r[idCol], 10) : nextPanchayatId++;
        // resolve block id
        let blockEntry = null;
        if (blockCode)
          blockEntry = blockRows.find(
            (b) => b.code && normalizeName(b.code) === normalizeName(blockCode),
          );
        if (!blockEntry && blockName)
          blockEntry = blockRows.find(
            (b) => b.name && normalizeName(b.name) === normalizeName(blockName),
          );
        const block_id = blockEntry ? blockEntry.id : null;
        if (!name && !code) continue; // skip empty rows
        if (!block_id)
          mappingReport.unmatchedPanchayats.push({
            id,
            name,
            code,
            blockName,
            blockCode,
          });
        panchayatRows.push({ id, name, code, block_id });
      }
    }
  }

  // Build SQL
  const parts = [];
  parts.push("-- Generated by build_india_from_csv.js");
  parts.push(
    `-- Source files: states=${args.states || args["states-url"] || "n/a"} districts=${args.districts || args["districts-url"] || "n/a"} blocks=${args.blocks || args["blocks-url"] || "n/a"} panchayats=${args.panchayats || args["panchayats-url"] || "n/a"}`,
  );
  parts.push("SET FOREIGN_KEY_CHECKS=0;");

  if (args["include-creates"]) {
    parts.push(
      `
-- CREATE TABLE for countries
CREATE TABLE IF NOT EXISTS ` +
        "`countries`" +
        ` (
  ` +
        "`id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT," +
        `
  ` +
        "`name` varchar(255) NOT NULL," +
        `
  ` +
        "`code` varchar(255) NOT NULL," +
        `
  ` +
        "`phone_code` varchar(255) DEFAULT NULL," +
        `
  ` +
        "`currency` varchar(255) DEFAULT NULL," +
        `
  ` +
        "`currency_symbol` varchar(255) DEFAULT NULL," +
        `
  ` +
        "`status` tinyint(1) NOT NULL DEFAULT 1," +
        `
  ` +
        "`created_by` bigint(20) UNSIGNED DEFAULT NULL," +
        `
  ` +
        "`updated_by` bigint(20) UNSIGNED DEFAULT NULL," +
        `
  ` +
        "`created_at` timestamp NULL DEFAULT NULL," +
        `
  ` +
        "`updated_at` timestamp NULL DEFAULT NULL," +
        `
  PRIMARY KEY (` +
        "`id`" +
        `)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,
    );

    parts.push(
      `
-- CREATE TABLE for states
CREATE TABLE IF NOT EXISTS ` +
        "`states`" +
        ` (
  ` +
        "`id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT," +
        `
  ` +
        "`name` varchar(255) NOT NULL," +
        `
  ` +
        "`code` varchar(255) NOT NULL," +
        `
  ` +
        "`country_id` bigint(20) UNSIGNED NOT NULL," +
        `
  ` +
        "`status` tinyint(1) NOT NULL DEFAULT 1," +
        `
  ` +
        "`created_by` bigint(20) UNSIGNED DEFAULT NULL," +
        `
  ` +
        "`updated_by` bigint(20) UNSIGNED DEFAULT NULL," +
        `
  ` +
        "`created_at` timestamp NULL DEFAULT NULL," +
        `
  ` +
        "`updated_at` timestamp NULL DEFAULT NULL," +
        `
  PRIMARY KEY (` +
        "`id`" +
        `)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,
    );

    parts.push(
      `
-- CREATE TABLE for districts
CREATE TABLE IF NOT EXISTS ` +
        "`districts`" +
        ` (
  ` +
        "`id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT," +
        `
  ` +
        "`name` varchar(255) NOT NULL," +
        `
  ` +
        "`code` varchar(255) NOT NULL," +
        `
  ` +
        "`state_id` bigint(20) UNSIGNED NOT NULL," +
        `
  ` +
        "`status` tinyint(1) NOT NULL DEFAULT 1," +
        `
  ` +
        "`created_by` bigint(20) UNSIGNED DEFAULT NULL," +
        `
  ` +
        "`updated_by` bigint(20) UNSIGNED DEFAULT NULL," +
        `
  ` +
        "`created_at` timestamp NULL DEFAULT NULL," +
        `
  ` +
        "`updated_at` timestamp NULL DEFAULT NULL," +
        `
  PRIMARY KEY (` +
        "`id`" +
        `)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,
    );

    parts.push(
      `
-- CREATE TABLE for blocks
CREATE TABLE IF NOT EXISTS ` +
        "`blocks`" +
        ` (
  ` +
        "`id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT," +
        `
  ` +
        "`name` varchar(255) NOT NULL," +
        `
  ` +
        "`code` varchar(255) NOT NULL," +
        `
  ` +
        "`state_id` bigint(20) UNSIGNED DEFAULT NULL," +
        `
  ` +
        "`district_id` bigint(20) UNSIGNED NOT NULL," +
        `
  ` +
        "`status` tinyint(1) NOT NULL DEFAULT 1," +
        `
  ` +
        "`created_by` bigint(20) UNSIGNED DEFAULT NULL," +
        `
  ` +
        "`updated_by` bigint(20) UNSIGNED DEFAULT NULL," +
        `
  ` +
        "`created_at` timestamp NULL DEFAULT NULL," +
        `
  ` +
        "`updated_at` timestamp NULL DEFAULT NULL," +
        `
  PRIMARY KEY (` +
        "`id`" +
        `)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,
    );

    parts.push(
      `
-- CREATE TABLE for panchayats
CREATE TABLE IF NOT EXISTS ` +
        "`panchayats`" +
        ` (
  ` +
        "`id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT," +
        `
  ` +
        "`name` varchar(255) NOT NULL," +
        `
  ` +
        "`state_id` varchar(50) DEFAULT NULL," +
        `
  ` +
        "`code` varchar(255) NOT NULL," +
        `
  ` +
        "`block_id` bigint(20) UNSIGNED NOT NULL," +
        `
  ` +
        "`status` tinyint(1) NOT NULL DEFAULT 1," +
        `
  ` +
        "`created_by` bigint(20) UNSIGNED DEFAULT NULL," +
        `
  ` +
        "`updated_by` bigint(20) UNSIGNED DEFAULT NULL," +
        `
  ` +
        "`created_at` timestamp NULL DEFAULT NULL," +
        `
  ` +
        "`updated_at` timestamp NULL DEFAULT NULL," +
        `
  PRIMARY KEY (` +
        "`id`" +
        `)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,
    );
  }

  // Country insert
  parts.push("\n-- INSERT country (India)\n");
  parts.push(
    `INSERT IGNORE INTO \`countries\` (\`id\`, \`name\`, \`code\`, \`phone_code\`, \`currency\`, \`currency_symbol\`, \`status\`, \`created_by\`, \`updated_by\`, \`created_at\`, \`updated_at\`) VALUES (${countryId}, 'India', '+91', NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL);`,
  );

  // States inserts (batching)
  if (statesRows.length) {
    const chunks = [];
    for (let i = 0; i < statesRows.length; i += 500)
      chunks.push(statesRows.slice(i, i + 500));
    parts.push(`\n-- INSERTS for states (${statesRows.length})`);
    for (const chunk of chunks) {
      const vals = chunk
        .map(
          (s) =>
            `(${s.id}, ${escapeSql(s.name)}, ${escapeSql(s.code || s.name)}, ${countryId}, 1, NULL, NULL, NULL, NULL)`,
        )
        .join(",\n");
      parts.push(
        `INSERT IGNORE INTO ` +
          "`states`" +
          ` (\`id\`,\`name\`,\`code\`,\`country_id\`,\`status\`,\`created_by\`,\`updated_by\`,\`created_at\`,\`updated_at\`) VALUES\n${vals};`,
      );
    }
  }

  // Districts
  if (districtRows.length) {
    const chunks = [];
    for (let i = 0; i < districtRows.length; i += 500)
      chunks.push(districtRows.slice(i, i + 500));
    parts.push(`\n-- INSERTS for districts (${districtRows.length})`);
    for (const chunk of chunks) {
      const vals = chunk
        .map(
          (d) =>
            `(${d.id}, ${escapeSql(d.name)}, ${escapeSql(d.code || d.name)}, ${d.state_id || "NULL"}, 1, NULL, NULL, NULL, NULL)`,
        )
        .join(",\n");
      parts.push(
        `INSERT IGNORE INTO ` +
          "`districts`" +
          ` (\`id\`,\`name\`,\`code\`,\`state_id\`,\`status\`,\`created_by\`,\`updated_by\`,\`created_at\`,\`updated_at\`) VALUES\n${vals};`,
      );
    }
  }

  // Blocks
  if (blockRows.length) {
    const chunks = [];
    for (let i = 0; i < blockRows.length; i += 500)
      chunks.push(blockRows.slice(i, i + 500));
    parts.push(`\n-- INSERTS for blocks (${blockRows.length})`);
    for (const chunk of chunks) {
      const vals = chunk
        .map(
          (b) =>
            `(${b.id}, ${escapeSql(b.name)}, ${escapeSql(b.code || b.name)}, NULL, ${b.district_id || "NULL"}, 1, NULL, NULL, NULL, NULL)`,
        )
        .join(",\n");
      parts.push(
        `INSERT IGNORE INTO ` +
          "`blocks`" +
          ` (\`id\`,\`name\`,\`code\`,\`state_id\`,\`district_id\`,\`status\`,\`created_by\`,\`updated_by\`,\`created_at\`,\`updated_at\`) VALUES\n${vals};`,
      );
    }
  }

  // Panchayats
  if (panchayatRows.length) {
    const chunks = [];
    for (let i = 0; i < panchayatRows.length; i += 500)
      chunks.push(panchayatRows.slice(i, i + 500));
    parts.push(`\n-- INSERTS for panchayats (${panchayatRows.length})`);
    for (const chunk of chunks) {
      const vals = chunk
        .map(
          (p) =>
            `(${p.id}, ${escapeSql(p.name)}, NULL, ${escapeSql(p.code || p.name)}, ${p.block_id || "NULL"}, 1, NULL, NULL, NULL, NULL)`,
        )
        .join(",\n");
      parts.push(
        `INSERT IGNORE INTO ` +
          "`panchayats`" +
          ` (\`id\`,\`name\`,\`state_id\`,\`code\`,\`block_id\`,\`status\`,\`created_by\`,\`updated_by\`,\`created_at\`,\`updated_at\`) VALUES\n${vals};`,
      );
    }
  }

  parts.push("SET FOREIGN_KEY_CHECKS=1;");

  fs.writeFileSync(outputPath, parts.join("\n\n"), "utf8");
  console.log("SQL file written to:", outputPath);
  if (statesRows.length) console.log("States:", statesRows.length);
  if (districtRows.length) console.log("Districts:", districtRows.length);
  if (blockRows.length) console.log("Blocks:", blockRows.length);
  if (panchayatRows.length) console.log("Panchayats:", panchayatRows.length);

  // write mapping report
  try {
    const reportPath = outputPath + ".mapping-report.json";
    fs.writeFileSync(
      reportPath,
      JSON.stringify(mappingReport, null, 2),
      "utf8",
    );
    console.log("Mapping report written to:", reportPath);
  } catch (e) {
    console.warn("Failed to write mapping report:", e.message);
  }
})();
