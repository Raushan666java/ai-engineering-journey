import {
  formatSlot,
  listQueue,
  loadConfig,
  saveItem,
  type ItemStatus,
  type QueueItem,
} from "./core.ts";

const COMMANDS = ["list", "approve", "unapprove", "skip", "retry", "status"] as const;
type Command = (typeof COMMANDS)[number];

function resolve(items: QueueItem[], selector: string): QueueItem | null {
  if (selector === "next") {
    return items.find((item) => item.status === "queued") ?? null;
  }
  if (selector === "all") return null;
  const exact = items.find((item) => item.id === selector);
  if (exact) return exact;
  const prefixed = items.filter((item) => item.id.startsWith(selector));
  return prefixed.length === 1 ? prefixed[0] : null;
}

function setStatus(item: QueueItem, status: ItemStatus): void {
  item.status = status;
  if (status !== "failed") item.error = null;
  saveItem(item);
}

const BADGE: Record<string, string> = {
  queued: "queued ",
  approved: "APPROVED",
  published: "PUBLISHED",
  failed: "FAILED ",
  skipped: "skipped",
  draft: "draft  ",
};

function printList(items: QueueItem[]): void {
  const cfg = loadConfig();
  if (!items.length) {
    console.log("Queue is empty. Run: npm run plan");
    return;
  }
  console.log("");
  for (const item of items) {
    const when = formatSlot(item.scheduledFor, cfg.schedule.timezone);
    console.log(
      `${BADGE[item.status] ?? item.status}  ${when.padEnd(22)}  ${item.id}`,
    );
  }
  const counts = items.reduce<Record<string, number>>((acc, item) => {
    acc[item.status] = (acc[item.status] ?? 0) + 1;
    return acc;
  }, {});
  console.log(
    `\nTotal ${items.length} — ` +
      Object.entries(counts)
        .map(([status, n]) => `${status}: ${n}`)
        .join(", "),
  );
}

function main(): void {
  const [rawCommand, selector] = process.argv.slice(2);
  const command = (rawCommand ?? "list") as Command;

  if (!COMMANDS.includes(command)) {
    console.error(`Unknown command "${command}". Use: ${COMMANDS.join(", ")}`);
    process.exit(1);
  }

  const items = listQueue();

  if (command === "list" || command === "status") {
    printList(items);
    return;
  }

  if (command === "retry") {
    const failed = items.filter((item) => item.status === "failed");
    if (selector !== "all" && !selector) {
      failed.forEach((item) => setStatus(item, "queued"));
      console.log(`Re-queued ${failed.length} failed item(s).`);
      return;
    }
    const target = resolve(items, selector);
    if (!target) {
      console.error(`No item matched "${selector}"`);
      process.exit(1);
    }
    setStatus(target, "queued");
    console.log(`Re-queued ${target.id}`);
    return;
  }

  if (!selector) {
    console.error(`Usage: npm run manage ${command} <id|next>`);
    process.exit(1);
  }

  const target = resolve(items, selector);
  if (!target) {
    console.error(`No item matched "${selector}"${selector.startsWith("all") ? "" : " (id prefix must be unique)"}`);
    process.exit(1);
  }

  const map: Record<string, ItemStatus> = {
    approve: "approved",
    unapprove: "queued",
    skip: "skipped",
  };

  setStatus(target, map[command]);
  console.log(`${command} → ${target.id} (${target.status})`);
}

main();
