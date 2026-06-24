(function () {
  "use strict";

  /* ── helpers ── */
  const $ = (s, p) => (p || document).querySelector(s);
  const $$ = (s, p) => [...(p || document).querySelectorAll(s)];

  function ago(dateStr) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const hours = Math.floor(diff / 3_600_000);
    if (hours < 1) return "less than an hour ago";
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  }

  function fmtStars(n) {
    if (n >= 1000) return (n / 1000).toFixed(1) + "k";
    return String(n);
  }

  /* ── GitHub search wrapper (no auth, 60 req/hr limit) ── */
  async function ghSearch(query, sort = "stars", order = "desc", per_page = 15) {
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=${sort}&order=${order}&per_page=${per_page}`;
    const res = await fetch(url, {
      headers: { Accept: "application/vnd.github.v3+json" },
    });
    if (!res.ok) {
      // rate limit or error — fall back to cached data
      console.warn("GitHub API error:", res.status, res.statusText);
      return null;
    }
    const data = await res.json();
    return data.items || [];
  }

  /* ── render a repo list into a container ── */
  function renderRepos(repos, container) {
    if (!repos || repos.length === 0) {
      container.innerHTML = `<p style="color:var(--md-default-fg-color--light);">No data available right now — the daily snapshot may not be ready yet.</p>`;
      return;
    }
    container.innerHTML = repos
      .map(
        (r) => `
      <div class="repo-card">
        <div class="repo-header">
          <span class="repo-name"><a href="${r.html_url}" target="_blank">${r.full_name}</a></span>
          <span class="repo-stars">★ ${fmtStars(r.stargazers_count)}</span>
        </div>
        ${
          r.description
            ? `<div class="repo-desc">${escapeHtml(r.description)}</div>`
            : ""
        }
        <div class="repo-meta">
          ${r.language ? `<span>🔷 ${r.language}</span>` : ""}
          <span>Updated ${ago(r.updated_at)}</span>
          ${r.forks_count ? `<span>⑂ ${r.forks_count} forks</span>` : ""}
        </div>
      </div>`
      )
      .join("");
  }

  function escapeHtml(text) {
    const d = document.createElement("div");
    d.textContent = text;
    return d.innerHTML;
  }

  /* ── News renderers ── */
  function renderDevToNews(articles, container) {
    if (!articles || articles.length === 0) return;
    const html = articles
      .slice(0, 8)
      .map(
        (a) => `
      <div class="news-card">
        <div class="news-title"><a href="${a.url}" target="_blank">${escapeHtml(
          a.title
        )}</a></div>
        <div class="news-meta">
          ${a.user ? escapeHtml(a.user.name) : ""}
          ${a.tags ? " · " + a.tags.split(", ").slice(0, 3).join(", ") : ""}
          · ${ago(a.published_at)}
          ${a.positive_reactions_count ? " · ❤️ " + a.positive_reactions_count : ""}
        </div>
      </div>`
      )
      .join("");
    container.insertAdjacentHTML("beforeend", html);
  }

  async function renderHackerNews(container) {
    try {
      const resp = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      const ids = await resp.json();
      const top = ids.slice(0, 10);
      const stories = await Promise.all(
        top.map((id) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
            (r) => r.json()
          )
        )
      );
      const html = stories
        .filter((s) => s && s.title)
        .map(
          (s) => `
        <div class="news-card">
          <div class="news-title">
            <a href="${s.url || "https://news.ycombinator.com/item?id=" + s.id}" target="_blank">${escapeHtml(s.title)}</a>
          </div>
          <div class="news-meta">
            ${s.by ? "by " + escapeHtml(s.by) : ""}
            · ${s.score} points · ${s.descendants || 0} comments
          </div>
        </div>`
        )
        .join("");
      if (html) container.insertAdjacentHTML("beforeend", html);
    } catch (e) {
      console.warn("HN fetch failed:", e);
    }
  }

  /* ── Main ── */
  async function load() {
    // 1. timestamp
    const updated = document.getElementById("trending-updated");
    if (updated) {
      updated.textContent = `Last refreshed: ${new Date().toLocaleString()}`;
    }

    // 2. most starred (last 7 days)
    const msContainer = document.getElementById("section-most-starred");
    if (msContainer) {
      // try snapshot first
      msContainer.innerHTML = `<div class="trending-loading">Loading most starred repos...</div>`;
      const repos = await ghSearch(
        "created:>" + daysAgo(7),
        "stars",
        "desc",
        12
      );
      if (repos) {
        renderRepos(repos, msContainer);
      } else {
        msContainer.innerHTML = `<p style="color:var(--md-default-fg-color--light);">GitHub API rate limit reached. Try again later or check the <a href="https://github.com/trending" target="_blank">GitHub Trending</a> page directly.</p>`;
      }
    }

    // 3. by language — default Python
    const langContainer = document.getElementById("section-by-language");
    let currentLang = "python";
    async function loadLang(lang) {
      if (!langContainer) return;
      langContainer.innerHTML = `<div class="trending-loading">Loading repos for <strong>${lang}</strong>...</div>`;
      const repos = await ghSearch(
        `language:${lang}+created:>${daysAgo(7)}`,
        "stars",
        "desc",
        10
      );
      renderRepos(repos, langContainer);
    }
    await loadLang(currentLang);

    // tab switching
    $$(".trending-tab").forEach((btn) => {
      btn.addEventListener("click", async function () {
        $$(".trending-tab").forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
        currentLang = this.dataset.lang;
        await loadLang(currentLang);
      });
    });

    // 4. AI/ML repos
    const aiContainer = document.getElementById("section-aiml");
    if (aiContainer) {
      const repos = await ghSearch(
        "topic:ai+topic:machine-learning+topic:llm+created:>" +
          daysAgo(14),
        "stars",
        "desc",
        10
      );
      renderRepos(repos, aiContainer);
    }

    // 5. news — DEV.to
    const newsContainer = document.getElementById("section-news");
    if (newsContainer) {
      newsContainer.innerHTML = `<div class="trending-loading">Loading tech news...</div>`;
      try {
        const devResp = await fetch(
          "https://dev.to/api/articles?tag=ai&per_page=10"
        );
        const devArticles = await devResp.json();
        newsContainer.innerHTML = "";
        if (devArticles && devArticles.length) {
          const devSection = document.createElement("div");
          const heading = document.createElement("h4");
          heading.textContent = "DEV.to — #ai";
          heading.style.marginBottom = "0.5em";
          devSection.appendChild(heading);
          newsContainer.appendChild(devSection);
          renderDevToNews(devArticles, devSection);
        }
      } catch (e) {
        console.warn("DEV.to fetch failed:", e);
      }
      // HN section
      try {
        const hnSection = document.createElement("div");
        hnSection.style.marginTop = "1.5em";
        const hnHeading = document.createElement("h4");
        hnHeading.textContent = "Hacker News — Top Stories";
        hnHeading.style.marginBottom = "0.5em";
        hnSection.appendChild(hnHeading);
        newsContainer.appendChild(hnSection);
        await renderHackerNews(hnSection);
      } catch (e) {
        console.warn("HN render failed:", e);
      }
    }
  }

  function daysAgo(n) {
    const d = new Date();
    d.setDate(d.getDate() - n);
    return d.toISOString().split("T")[0];
  }

  // go
  if (document.getElementById("trending-root")) {
    load();
  }
})();
