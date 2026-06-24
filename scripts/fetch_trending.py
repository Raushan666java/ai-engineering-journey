#!/usr/bin/env python3
"""
Daily snapshot of trending repos, frameworks, and tech news.
Writes docs/assets/data/trending-snapshot.json for the static site.
"""

import json, os, sys, urllib.request, urllib.error
from datetime import datetime, timedelta
from collections import OrderedDict

OUT_DIR = "docs/assets/data"
OUT_FILE = os.path.join(OUT_DIR, "trending-snapshot.json")
GH_HEADERS = {
    "Accept": "application/vnd.github.v3+json",
    "User-Agent": "ai-engineering-journey/1.0",
}
DEVTO_HEADERS = {"User-Agent": "ai-engineering-journey/1.0"}


def fetch_json(url, headers=None):
    req = urllib.request.Request(url, headers=headers or {})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return json.loads(resp.read().decode())
    except Exception as e:
        print(f"  WARN: {url} -> {e}", file=sys.stderr)
        return None


def gh_search(query, sort="stars", order="desc", per_page=12):
    url = f"https://api.github.com/search/repositories?q={urllib.request.quote(query)}&sort={sort}&order={order}&per_page={per_page}"
    data = fetch_json(url, GH_HEADERS)
    if data and "items" in data:
        return data["items"]
    return []


def clean_repo(r):
    return OrderedDict([
        ("full_name", r.get("full_name", "")),
        ("html_url", r.get("html_url", "")),
        ("description", r.get("description") or ""),
        ("stargazers_count", r.get("stargazers_count", 0)),
        ("forks_count", r.get("forks_count", 0)),
        ("language", r.get("language") or ""),
        ("updated_at", r.get("updated_at", "")),
    ])


def fetch_hn_top(n=10):
    ids = fetch_json("https://hacker-news.firebaseio.com/v0/topstories.json")
    if not ids:
        return []
    stories = []
    for sid in ids[:n]:
        s = fetch_json(f"https://hacker-news.firebaseio.com/v0/item/{sid}.json")
        if s and s.get("title"):
            stories.append({
                "title": s["title"],
                "url": s.get("url", f"https://news.ycombinator.com/item?id={sid}"),
                "by": s.get("by", ""),
                "score": s.get("score", 0),
                "descendants": s.get("descendants", 0),
            })
    return stories


def fetch_devto(tag="ai", per_page=8):
    url = f"https://dev.to/api/articles?tag={tag}&per_page={per_page}"
    articles = fetch_json(url, DEVTO_HEADERS)
    if not articles:
        return []
    result = []
    for a in articles:
        result.append({
            "title": a.get("title", ""),
            "url": a.get("url", ""),
            "tags": a.get("tags", ""),
            "user": a.get("user", {}).get("name", "") if a.get("user") else "",
            "published_at": a.get("published_at", ""),
            "positive_reactions_count": a.get("positive_reactions_count", 0),
        })
    return result


def days_ago(n):
    return (datetime.utcnow() - timedelta(days=n)).strftime("%Y-%m-%d")


def main():
    os.makedirs(OUT_DIR, exist_ok=True)

    snapshot = OrderedDict()
    snapshot["_generated_at"] = datetime.utcnow().isoformat() + "Z"
    snapshot["_note"] = "Auto-generated daily by fetch_trending.py via GitHub Actions"

    print("Fetching most starred (7 days)...")
    snapshot["most_starred"] = [
        clean_repo(r)
        for r in gh_search(f"created:>{days_ago(7)}", per_page=12)
    ]

    languages = ["python", "typescript", "javascript", "rust", "go", "swift", "java", "kotlin"]
    snapshot["by_language"] = {}
    for lang in languages:
        print(f"  Fetching {lang}...")
        repos = gh_search(f"language:{lang}+created:>{days_ago(7)}", per_page=8)
        snapshot["by_language"][lang] = [clean_repo(r) for r in repos]

    print("Fetching AI/ML repos...")
    snapshot["aiml"] = [
        clean_repo(r)
        for r in gh_search(f"topic:ai+topic:machine-learning+topic:llm+created:>{days_ago(14)}", per_page=10)
    ]

    print("Fetching Hacker News...")
    snapshot["hacker_news"] = fetch_hn_top(10)

    print("Fetching DEV.to...")
    snapshot["devto"] = fetch_devto("ai")

    with open(OUT_FILE, "w", encoding="utf-8") as f:
        json.dump(snapshot, f, indent=2, ensure_ascii=False)

    print(f"Written {OUT_FILE} ({os.path.getsize(OUT_FILE)} bytes)")
    print(f"  most_starred: {len(snapshot['most_starred'])} repos")
    for lang, repos in snapshot["by_language"].items():
        print(f"  {lang}: {len(repos)} repos")
    print(f"  aiml: {len(snapshot['aiml'])} repos")
    print(f"  hacker_news: {len(snapshot['hacker_news'])} stories")
    print(f"  devto: {len(snapshot['devto'])} articles")


if __name__ == "__main__":
    main()
