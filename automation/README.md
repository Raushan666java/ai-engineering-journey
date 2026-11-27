# Growth autopilot

Turns the 322-chapter placement course in `docs/courses/ai-engineering-placement/`
into scheduled Instagram carousels — generated, rendered, queued, and (optionally)
published through Meta's official API.

No scraping. No fake engagement. No password stored anywhere.

```
chapter.md  ──►  plan  ──►  queue/<id>.json  ──►  render  ──►  out/<id>/slide-*.jpg
                                   │
                                   └──►  dashboard.html   (review, then approve)
                                   │
                                   └──►  publish  ──►  Instagram Graph API
```

---

## Quick start

```powershell
cd C:\xampp\htdocs\ai-engineering-journey

node automation/src/plan.ts --count 7   # pick next 7 unposted chapters, assign slots
node automation/src/render.ts           # draw the carousels
node automation/src/dashboard.ts        # review everything in a browser
```

Open the review page:

```powershell
start automation/out/dashboard.html
```

Happy with a post? Approve it:

```powershell
node automation/src/manage.ts approve <id>
node automation/src/manage.ts list
```

Then publish (dry run unless `--real`):

```powershell
node automation/src/publish.ts                # shows what would go out
node automation/src/publish.ts --real         # actually posts
```

`npm run cycle` from inside `automation/` does plan + render + dashboard in one go.

---

## Commands

| Command | What it does |
|---|---|
| `plan.ts --count N` | Takes the next N unqueued chapters, writes queue items with real posting slots. `--dry` previews. `--all` queues every remaining chapter. `--topup N` fills the queue up to N upcoming posts (what the cron job uses). |
| `render.ts` | Renders every `queued`/`approved` item to `out/<id>/slide-NN.jpg` + `caption.txt` + `reel-script.md`. `--force` redraws. `--id X` renders one. |
| `dashboard.ts` | Writes `out/dashboard.html` — slides, caption, hashtags, reel script, status for every post. |
| `manage.ts list` | Queue with status and scheduled time. |
| `manage.ts approve <id\|next>` | Marks a post ready to publish. |
| `manage.ts skip <id>` | Buries a post permanently. |
| `manage.ts retry <id\|all>` | Re-queues failed posts. |
| `publish.ts` | Publishes due, approved posts. Dry run by default. |
| `insights.ts` | Pulls followers + per-post metrics into `out/insights.md`. |

Node ≥ 22.6 runs the `.ts` files directly — no build step, no ts-node.

---

## How scheduling works

`config/brand.json → schedule`:

```json
{ "timezone": "Asia/Kolkata", "slots": ["09:30", "19:00"], "startAfterHours": 2 }
```

Slots are computed in your timezone and stored as UTC ISO strings, so a cron job
running on UTC servers publishes at the right local hour. If a slot is already
taken by a queued post, the planner skips to the next one.

---

## Publishing setup (one-time, ~20 minutes, all in a browser)

Publishing needs Meta's official API. This is the only part that can't be
automated for you, because it involves your account and app review.

1. **Instagram → Creator account** (you are already set once you switch).
2. **Create a Facebook Page** and connect the Instagram account to it
   (Page settings → Linked accounts → Instagram).
3. **Create a Meta app**: <https://developers.facebook.com/apps> → *Business* type.
4. Add the **Instagram Graph API** product.
5. In **Graph API Explorer**, request a token with these permissions:
   - `instagram_basic`
   - `instagram_content_publish`
   - `pages_show_list`
   - `pages_read_engagement`
6. Exchange the short-lived token for a **long-lived** one (60 days) via
   `GET /oauth/access_token?grant_type=fb_exchange_token&...`. Put a reminder in
   your calendar — expired tokens are the #1 cause of "it stopped working".
7. Get the **Instagram business account id**:
   `GET /me/accounts` → page id → `GET /{page-id}?fields=instagram_business_account`
8. Copy `.env.example` → `.env` and fill in `IG_USER_ID` + `IG_ACCESS_TOKEN`.

**Media host:** the API accepts only a *public image URL*, never a file upload.
Either point `MEDIA_PUBLIC_BASE_URL` at somewhere you already host `out/`, or use
Supabase Storage (free tier): create a bucket called `social`, make it public,
and set `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`, `SUPABASE_BUCKET`.

> Never paste tokens into a chat, an issue, or a commit. `.env` is gitignored.

---

## Making it run unattended

Two switches, both deliberate:

1. `publishing.autoApprove: true` in `config/brand.json`
   — publishes queued posts without per-post approval.
2. `.github/workflows/social-autopilot.yml` + repo secrets
   (`IG_USER_ID`, `IG_ACCESS_TOKEN`, `SUPABASE_*`).

Then the workflow:

- **09:15 IST daily** — plans 7 more posts, renders, rebuilds the dashboard, commits the queue.
- **every 3 hours** — publishes anything due and approved.

Start with `autoApprove: false` for the first 3–5 posts. Auto-posting a design
flaw for a week is much more expensive than two minutes of review.

---

## What this deliberately does not do

| Not automated | Why |
|---|---|
| Reels video | The API publishes video, but nothing generates a good video file. Each queue item includes `reel-script.md` — record it in 5 minutes. |
| Auto-DM / auto-follow / auto-comment | Against Instagram's terms. It's also the fastest way to get the account suppressed. |
| Logging into your account for you | Nobody should have your password, and scripted account actions trip bot detection. |
| Replying to comments | The single highest-leverage thing you can do by hand. Don't outsource it. |

---

## Guardrails built in

- **Dry run by default** — `publish.ts` prints intent and sends nothing without `--real`.
- **`autoApprove: false`** — a human approves the first posts.
- **`maxPerRun: 1`** — the API allows ~25 posts/24h; this keeps bursts impossible.
- **Per-post ledger** — `queue/<id>.json` holds status, `igMediaId`, `publishedAt`, error, attempts. Nothing double-posts, everything is revertible via git.
- **Failures don't cascade** — one bad post is marked `failed` and the rest continue.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| `Cannot find package 'sharp'` | `npm install sharp` in the repo root |
| `No media host configured` | Set `MEDIA_PUBLIC_BASE_URL` or the Supabase vars |
| `Graph API 400: (#10) Application does not have permission` | Token missing `instagram_content_publish`, or app not in Live mode |
| `Container ... failed with status ERROR` | Usually a JPEG that isn't 1080×1350 or an unreachable `image_url` — open the URL in a browser |
| Publish job never fires | Repo → Actions → the workflow may be disabled after 60 days of inactivity |
| `gh` push rejected for the workflow file | Adding `.github/workflows/*` needs the `workflow` OAuth scope — add the file through the GitHub web UI instead |

---

## Files

```
automation/
  config/brand.json      brand colours, fonts, posting slots, safety switches
  src/core.ts            paths, queue store, timezone-correct slot allocation
  src/chapter.ts         chapter discovery + markdown parsing (fence-aware)
  src/content.ts         slides, caption, hashtags, reel script
  src/render.ts          1080x1350 SVG → JPEG design system
  src/plan.ts            queue builder
  src/manage.ts          approve / skip / retry / list
  src/publish.ts         Instagram Graph API publisher
  src/insights.ts        metrics pull-back
  src/dashboard.ts       review page generator
  queue/<id>.json        one file per post — committed, reviewable
  out/                   rendered slides + dashboard (gitignored)
```
