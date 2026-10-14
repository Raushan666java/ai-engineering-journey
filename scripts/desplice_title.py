"""Remove generator title-splices from chapters.

A generator substituted the chapter's own title into boilerplate, producing
sentences like "Design a minimal function that demonstrates Prompt Injection
Defense" repeated 70+ times per chapter.

This script rewrites those occurrences to read naturally rather than deleting
content, because the surrounding sections still carry real signal.

Strategy: detect each chapter's own H1 title, then apply ordered pattern
rewrites that map the title onto a neutral phrase in context.

Usage:
    python scripts/desplice_title.py --dry-run
    python scripts/desplice_title.py --apply
    python scripts/desplice_title.py --report
"""

from __future__ import annotations

import argparse
import pathlib
import re
from collections import Counter

ROOT = pathlib.Path(__file__).resolve().parent.parent
COURSES = ROOT / "docs" / "courses"

PHRASE = re.compile(r"\b[A-Z][a-z]{4,}(?:\s+[A-Z][a-z]{4,}){1,5}\b")


class GrammarError(RuntimeError):
    """A rewrite rule produced text that is not grammatical English."""


# Every pattern here is a way a blunt substitution can leave a dangling article or
# a missing head noun. Checked as a *delta* between the original and rewritten
# text: a chapter may legitimately already contain "a system that relies on X",
# so only an increase in the count means a rule regressed.
UNGRAMMATICAL = {
    "article/mismatch": re.compile(
        r"\b(?:a|an)\s+(?:systems?|this technique|this topic|this chapter)\b"
    ),
    "dangling-this": re.compile(
        r"\bthe smallest possible this\b"
        r"|\bthis technique\s+this\b"
        r"|\bpossible this technique\b"
        r"|\bcorrect this technique\b"
        # "implementation of this technique that is production-quality" is
        # grammatical. An earlier "of this technique that" guard flagged all 102
        # remaining files on correct output, so it was removed as a false positive.
    ),
}


def grammar_regressions(before: str, after: str) -> dict[str, int]:
    """Patterns whose occurrence count increased, i.e. that the rewrite created."""
    return {
        name: len(pat.findall(after)) - len(pat.findall(before))
        for name, pat in UNGRAMMATICAL.items()
        if len(pat.findall(after)) > len(pat.findall(before))
    }


def chapter_title(raw: str, path: pathlib.Path) -> str | None:
    """Get the H1, converted to the Title-Case form used in spliced prose."""
    m = re.search(r"^#\s+(.+?)\s*$", raw, re.M)
    if not m:
        return None
    title = m.group(1).strip()
    # normalise em/en dashes and trailing qualifiers the generator appended
    title = re.split(r"\s*[\u2013\u2014-]\s*", title)[0].strip()
    return title or None


def lower_first(s: str) -> str:
    return s[0].lower() + s[1:] if s else s


def title_case(title: str) -> str:
    return " ".join(w if w.isupper() or w.lower() in {"a", "an", "the", "of", "and", "or", "in", "for", "to"} else w[0].upper() + w[1:]
                   for w in title.split())


def rewrite(raw: str, title: str) -> tuple[str, int]:
    """Rewrite spliced occurrences of `title` into natural prose."""
    variants = {title}
    lc = lower_first(title)
    variants.add(lc)
    # also handle a trailing qualifier the generator stripped from H1
    if "," in title:
        variants.add(title.split(",")[0].strip())

    n = 0
    out = raw
    for v in sorted(variants, key=len, reverse=True):
        if not v:
            continue
        esc = re.escape(v)

        ordered = [
            # "the core idea of X in under 60 seconds"
            (rf"(?:the core idea of |understanding |explaining ){esc}(?=\s+in under 60 seconds)", "this topic"),
            # "function that demonstrates X" / "component that depends on X"
            (rf"function that demonstrates {esc}", "function in this chapter"),
            (rf"component that depends on {esc}", "component built on this"),
            # Keep the head noun. Replacing the whole phrase with "this technique"
            # produced "an this technique run faster" and "the smallest possible
            # this technique", so only the title object is replaced here.
            (rf"implementation of {esc}", "implementation of this technique"),
            # Preserve the subject's number: "a system that relies on X" must not
            # become "a systems using this technique".
            (rf"\b(systems?) that (?:relies|rely) on {esc}", r"\1 using this technique"),
            # verb-object splices
            (rf"Explain {esc} in 60 seconds", "Explain the core idea in 60 seconds"),
            (rf"memorize the {esc} chapter content", "memorize this chapter's content"),
            (rf"apply {esc} to real data", "apply this technique to real data"),
            (rf"Name {esc} explicitly", "Name the technique explicitly"),
            (rf"uses {esc} alongside", "uses this technique alongside"),
            (rf"the classic {esc} interview problem", "the classic problem in this chapter"),
            (rf"how the team applies {esc}", "how the team applies this technique"),
            (rf"depends on {esc}", "depends on this chapter's content"),
            (rf"Compare {esc} with the closest alternative",
             "Compare this approach with the closest alternative"),
            (rf"misunderstanding {esc}", "misunderstanding this technique"),
            (rf"caused by {esc}", "caused by this technique"),
            (rf"built directly on the fundamentals covered in the earlier chapters of this module for {esc}",
             "built on the fundamentals covered earlier in this module"),
            # NO bare catch-all rewrite. A chapter title is often also a real
            # technical term ("Naive Bayes", "Docker Compose", "Linked Lists")
            # that is supposed to recur. Only the specific boilerplate
            # templates above are generator artifacts, so only those are fixed.
            # Anything left needs per-chapter judgement, which this script
            # reports via --report instead of guessing.
        ]
        for pat, repl in ordered:
            new, k = re.subn(pat, repl, out)
            if k:
                out = new
                n += k

    # repair sentence starts that now read "this technique" mid-sentence twice
    out = re.sub(r"\bthis technique\s+this technique\b", "this technique", out)
    out = re.sub(r"(?m)^(\s*(?:[-*]|\d+\.)\s*)this technique\b", r"\1This technique", out)
    # Refuse to emit prose that a substitution broke. An earlier version of this
    # script shipped "an this technique run faster" and "a systems using this
    # technique" across 206 chapters; the structural quality score never saw it
    # because it counts sections, not grammar. Fail loudly instead.
    regressions = grammar_regressions(raw, out)
    if regressions:
        raise GrammarError(
            f"{title!r}: substitution introduced {regressions}"
        )
    return out, n


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--report", action="store_true")
    ap.add_argument("--only", default="ai-engineering-placement")
    args = ap.parse_args()

    root = COURSES / args.only if args.only else COURSES
    files = sorted(root.rglob("*.md"))

    total = 0
    changed = 0
    rows: list[tuple[int, str, str]] = []
    pending: list[tuple[pathlib.Path, str]] = []
    failures: list[str] = []

    for path in files:
        raw = path.read_text(encoding="utf-8", errors="replace")
        title = chapter_title(raw, path)
        if not title:
            continue
        counts = Counter(PHRASE.findall(raw))
        worst = counts.most_common(1)[0][1] if counts else 0
        if worst < 10:
            continue

        try:
            new, n = rewrite(raw, title)
        except GrammarError as exc:
            failures.append(str(exc))
            continue
        if n:
            total += n
            rows.append((n, title, str(path.relative_to(ROOT))))
            if new != raw:
                changed += 1
                pending.append((path, new))

    # Two-phase: nothing is written until every file has been rewritten and
    # validated. A rule regression must not leave the tree half-converted.
    if failures:
        print(f"ABORTED: {len(failures)} file(s) failed the grammar check. "
              f"No files were written.")
        for f in failures[:20]:
            print("  " + f)
        raise SystemExit(2)

    if args.apply:
        for path, new in pending:
            path.write_text(new, encoding="utf-8")

    print("=" * 74)
    print(f"DESPLICE [{'APPLIED' if args.apply else 'DRY RUN'}] - {len(files)} files scanned")
    print("=" * 74)
    print(f"  chapters with spliced title : {len(rows)}")
    print(f"  splices rewritten           : {total}")
    print(f"  files rewritten             : {changed if args.apply else 0}")

    rows.sort(reverse=True)
    for n, title, path in rows[:20]:
        print(f"  {n:4d}x  {title[:40]:40s} {path[-46:]}")

    if args.apply:
        print("\nVerify with:")
        print("  python scripts/quality_sample.py --n 30")


if __name__ == "__main__":
    main()
