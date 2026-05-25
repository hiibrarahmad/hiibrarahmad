// Updates the <!--START_SECTION:activity--> ... <!--END_SECTION:activity-->
// block in README.md with the user's last N public events.
//
// Supports: PushEvent, CreateEvent, DeleteEvent, ForkEvent, WatchEvent,
// IssuesEvent, IssueCommentEvent, PullRequestEvent, ReleaseEvent,
// PublicEvent, MemberEvent.

import { readFile, writeFile } from "node:fs/promises";

const USER       = process.env.GH_USERNAME      || "hiibrarahmad";
const TARGET     = process.env.TARGET_FILE      || "README.md";
const MAX_LINES  = Number(process.env.MAX_LINES || 5);
const TOKEN      = process.env.GITHUB_TOKEN;

if (!TOKEN) {
  console.error("GITHUB_TOKEN missing");
  process.exit(1);
}

const repoUrl = (full) => `[${full}](https://github.com/${full})`;
const shortSha = (sha) => sha.slice(0, 7);
const ago = (iso) => {
  const diff = (Date.now() - new Date(iso).getTime()) / 1000;
  if (diff < 60)        return `${Math.floor(diff)}s ago`;
  if (diff < 3600)      return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400)     return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 86400 * 7) return `${Math.floor(diff / 86400)}d ago`;
  return new Date(iso).toISOString().slice(0, 10);
};

const renderers = {
  PushEvent: (e) => {
    const commits = e.payload.commits || [];
    const count   = e.payload.distinct_size ?? e.payload.size ?? commits.length;
    const last    = commits[commits.length - 1];
    const branch  = (e.payload.ref || "").replace(/^refs\/heads\//, "");
    const tail    = last ? ` — *${last.message.split("\n")[0].slice(0, 70)}*` : "";
    return `⬆️ Pushed \`${count}\` commit${count === 1 ? "" : "s"} to \`${branch}\` in ${repoUrl(e.repo.name)}${tail}`;
  },
  CreateEvent: (e) => {
    const t = e.payload.ref_type;
    if (t === "repository") return `✨ Created repo ${repoUrl(e.repo.name)}`;
    if (t === "branch")     return `🌱 Created branch \`${e.payload.ref}\` in ${repoUrl(e.repo.name)}`;
    if (t === "tag")        return `🏷️ Tagged \`${e.payload.ref}\` in ${repoUrl(e.repo.name)}`;
    return `✨ Created ${t} in ${repoUrl(e.repo.name)}`;
  },
  DeleteEvent: (e) => `🗑️ Deleted ${e.payload.ref_type} \`${e.payload.ref}\` in ${repoUrl(e.repo.name)}`,
  ForkEvent: (e)   => `🍴 Forked ${repoUrl(e.repo.name)}`,
  WatchEvent: (e)  => `⭐ Starred ${repoUrl(e.repo.name)}`,
  PublicEvent: (e) => `🌍 Made ${repoUrl(e.repo.name)} public`,
  MemberEvent: (e) => `👥 ${e.payload.action === "added" ? "Added" : "Updated"} a collaborator on ${repoUrl(e.repo.name)}`,

  IssuesEvent: (e) => {
    const a = e.payload.action;
    const emoji = a === "opened" ? "❗" : a === "closed" ? "🔒" : a === "reopened" ? "🔓" : "ℹ️";
    return `${emoji} ${cap(a)} issue [#${e.payload.issue.number}](${e.payload.issue.html_url}) in ${repoUrl(e.repo.name)}`;
  },
  IssueCommentEvent: (e) =>
    `🗣️ Commented on [#${e.payload.issue.number}](${e.payload.comment.html_url}) in ${repoUrl(e.repo.name)}`,
  PullRequestEvent: (e) => {
    const a = e.payload.action;
    const merged = e.payload.pull_request?.merged;
    const emoji = merged ? "🎉" : a === "opened" ? "💪" : a === "closed" ? "❌" : "🔄";
    const label = merged ? "Merged" : cap(a);
    return `${emoji} ${label} PR [#${e.payload.pull_request.number}](${e.payload.pull_request.html_url}) in ${repoUrl(e.repo.name)}`;
  },
  ReleaseEvent: (e) =>
    `🚀 ${cap(e.payload.action)} release [${e.payload.release.tag_name}](${e.payload.release.html_url}) in ${repoUrl(e.repo.name)}`,
};

function cap(s) { return s ? s[0].toUpperCase() + s.slice(1) : s; }

const res = await fetch(`https://api.github.com/users/${USER}/events/public?per_page=30`, {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "User-Agent": "github-activity-updater",
    Accept: "application/vnd.github+json",
  },
});

if (!res.ok) {
  console.error("GitHub API error:", res.status, await res.text());
  process.exit(1);
}

const events = await res.json();
const lines = [];
const seen  = new Set();

for (const e of events) {
  if (lines.length >= MAX_LINES) break;
  const r = renderers[e.type];
  if (!r) continue;
  const line = r(e);
  // dedupe by rendered line (collapses identical-looking pushes to same branch)
  if (seen.has(line)) continue;
  seen.add(line);
  lines.push(`- ${line} · _${ago(e.created_at)}_`);
}

if (lines.length === 0) {
  lines.push("- _(no recent public activity yet — check back soon!)_");
}

const block =
  `<!--START_SECTION:activity-->\n` +
  lines.join("\n") + "\n" +
  `<!--END_SECTION:activity-->`;

const readme  = await readFile(TARGET, "utf8");
const updated = readme.replace(
  /<!--START_SECTION:activity-->[\s\S]*?<!--END_SECTION:activity-->/,
  block,
);

if (updated === readme) {
  console.log("No changes.");
  process.exit(0);
}

await writeFile(TARGET, updated);
console.log(`Updated ${TARGET} with ${lines.length} activity line(s).`);
