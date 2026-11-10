import { readFileSync, existsSync } from "node:fs";
import { Script } from "node:vm";
import assert from "node:assert/strict";

const html = readFileSync("index.html", "utf8");
const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];

assert.equal(scripts.length, 1, "Expected one inline application script.");
for (const [index, match] of scripts.entries()) {
  new Script(match[1], { filename: "index.html:inline-script-" + (index + 1) });
}

const expectedProjectIds = [
  "personal-context-layer",
  "product",
  "agent-workflow-governance",
];
const start = html.indexOf("const HOME_PROJECTS = [");
const end = html.indexOf("\n]", start);
assert.notEqual(start, -1, "HOME_PROJECTS declaration is missing.");
assert.notEqual(end, -1, "HOME_PROJECTS array is not closed.");
const homeProjects = html.slice(start, end);
const actualProjectIds = [...homeProjects.matchAll(/caseId:\s*"([^"]+)"/g)].map((match) => match[1]);

assert.deepEqual(actualProjectIds, expectedProjectIds, "Homepage project order or membership changed.");
assert.ok(html.includes('id="home-projects"'), "Homepage project mount point is missing.");
assert.ok(html.includes("renderProjectCards('home-projects')"), "Homepage project renderer is not called.");
assert.ok(html.includes("function navigate("), "Case navigation handler is missing.");
assert.ok(existsSync("cases/laya/index.html"), "Standalone Laya casebook page is missing.");
assert.ok(html.includes('href="./cases/laya/"'), "Homepage Laya casebook link is missing.");

console.log("Portfolio static validation: PASS");
console.log("Inline scripts parsed: " + scripts.length);
console.log("Homepage projects: " + actualProjectIds.join(" → "));
console.log("Laya standalone route: present");
