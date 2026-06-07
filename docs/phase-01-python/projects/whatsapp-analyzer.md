# Project: WhatsApp Chat Analyzer

**Duration:** 5–7 days (Phase 1 ke baad ya parallel)
**Difficulty:** Intermediate
**Goal:** Real-world Python project — file I/O, regex, pandas, matplotlib

---

## Kya Hai Ye?

WhatsApp chat export (`.txt` file) lo aur usse analyze karo:

- Kaun kitna chat karta hai?
- Sabse zyada use hone wale words kaun se?
- Kaun se emoji sabse zyada use hote hain?
- Kis time sabse zyada chat hoti hai?
- Weekly/monthly activity trends kya hain?

Laravel mein aisa project: Export process karo, queue mein daalo, charts banao, report generate karo. Lekin Python mein seedha script se kaam ho jayega.

---

## Features

### Core Features
- Parse WhatsApp exported chat (`.txt`)
- Message count per user
- Word frequency analysis (stop words hatake)
- Emoji frequency analysis
- Daily/weekly/monthly message timeline
- CSV export of all stats

### Extension Ideas
- Word cloud generation
- Sentiment analysis (positive/negative messages)
- Most active hours heatmap
- Response time analysis (kaun jaldi reply karta hai)
- Media vs text message ratio
- Group vs personal chat analysis
- Message length trends over time

---

## Tech Stack

| Library | Purpose | Install |
|---------|---------|---------|
| `pandas` | Data manipulation | `pip install pandas` |
| `matplotlib` | Charts & plots | `pip install matplotlib` |
| `emoji` | Emoji detection | `pip install emoji` |
| `wordcloud` | Word cloud (extension) | `pip install wordcloud` |
| `textblob` | Sentiment (extension) | `pip install textblob` |
| `click` or `argparse` | CLI interface | Built-in / `pip install click` |

---

## WhatsApp Export Kaise Nikale

```
1. WhatsApp mein group ya chat kholo
2. Three dots (⋮) → More → Export chat
3. "Without media" select karo (media nahi chahiye)
4. File save karo: whatsapp_chat.txt
```

### Export Format

Android export format:
```
6/15/26, 10:30 AM - Raushan: Hello everyone!
6/15/26, 10:31 AM - Priya: Hi Raushan! Kaise ho?
6/15/26, 10:32 AM - Raushan: Main theek hoon, tum batao
6/16/26, 9:00 AM - Raj: Good morning guys!
```

iPhone format thoda different hota hai:
```
[6/15/26, 10:30:00 AM] Raushan: Hello everyone!
[6/15/26, 10:31:00 AM] Priya: Hi Raushan! Kaise ho?
```

Dono formats handle karne honge.

---

## Project Structure

```
whatsapp-analyzer/
├── pyproject.toml
├── README.md
├── data/
│   ├── my_chat.txt          # Input file (gitignore mein)
│   └── sample_chat.txt      # Sample chat for testing
├── output/
│   ├── stats.csv
│   ├── message_timeline.png
│   ├── word_frequency.png
│   ├── emoji_frequency.png
│   └── activity_heatmap.png  # Extension
├── src/
│   └── whatsapp_analyzer/
│       ├── __init__.py
│       ├── cli.py            # CLI entry point
│       ├── parser.py         # Chat parser
│       ├── analyzer.py       # Stats & analysis
│       ├── visualizer.py     # Charts & plots
│       └── exporter.py       # CSV export
└── tests/
    ├── __init__.py
    ├── test_parser.py
    ├── test_analyzer.py
    └── sample_chat.txt       # Test data
```

---

## Implementation Guide

### Step 1: Parse WhatsApp Chat

```python
# src/whatsapp_analyzer/parser.py
import re
from datetime import datetime
from typing import List, Dict, Optional

class WhatsAppParser:
    """WhatsApp exported chat parser"""

    # Android format: "6/15/26, 10:30 AM - Raushan: message"
    ANDROID_PATTERN = re.compile(
        r"(\d{1,2}/\d{1,2}/\d{2,4}),\s(\d{1,2}:\d{2}(?::\d{2})?\s?[APap][Mm]?)\s-\s([^:]+):\s(.+)"
    )

    # iPhone format: "[6/15/26, 10:30:00 AM] Raushan: message"
    IPHONE_PATTERN = re.compile(
        r"\[(\d{1,2}/\d{1,2}/\d{2,4}),\s(\d{1,2}:\d{2}:\d{2}\s?[APap][Mm]?)\]\s([^:]+):\s(.+)"
    )

    def __init__(self, file_path: str):
        self.file_path = file_path

    def parse(self) -> List[Dict]:
        """Parses WhatsApp chat file and returns list of messages"""
        messages = []
        with open(self.file_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue

                msg = self._parse_line(line)
                if msg:
                    messages.append(msg)
        return messages

    def _parse_line(self, line: str) -> Optional[Dict]:
        """Parse a single chat line"""
        for pattern in [self.ANDROID_PATTERN, self.IPHONE_PATTERN]:
            match = pattern.match(line)
            if match:
                date_str, time_str, sender, message = match.groups()
                return {
                    "date": self._parse_date(date_str),
                    "time": time_str.strip(),
                    "sender": sender.strip(),
                    "message": message.strip(),
                    "timestamp": self._to_timestamp(date_str, time_str),
                }
        return None

    def _parse_date(self, date_str: str) -> str:
        """Normalize date to YYYY-MM-DD"""
        parts = date_str.split("/")
        if len(parts) == 3:
            month, day, year = parts
            if len(year) == 2:
                year = "20" + year
            return f"{year}-{month.zfill(2)}-{day.zfill(2)}"
        return date_str

    def _to_timestamp(self, date_str: str, time_str: str) -> datetime:
        """Convert to datetime object"""
        date_part = date_str.replace(",", "").strip()
        # Handle AM/PM
        time_clean = time_str.replace("\u202f", " ").strip()
        datetime_str = f"{date_part} {time_clean}"
        for fmt in [
            "%m/%d/%y %I:%M %p",
            "%m/%d/%Y %I:%M %p",
            "%m/%d/%y %I:%M:%S %p",
            "%m/%d/%Y %I:%M:%S %p",
        ]:
            try:
                return datetime.strptime(datetime_str, fmt)
            except ValueError:
                continue
        return datetime.now()
```

### Step 2: Analyze Messages

```python
# src/whatsapp_analyzer/analyzer.py
import pandas as pd
from collections import Counter
from typing import List, Dict, Tuple
import emoji

class Analyzer:
    """Analyze parsed WhatsApp messages"""

    STOP_WORDS = {
        "the", "a", "an", "is", "are", "was", "were", "be", "been",
        "i", "you", "he", "she", "it", "we", "they", "me", "him",
        "her", "us", "them", "my", "your", "his", "its", "our",
        "their", "this", "that", "these", "those", "and", "but",
        "or", "in", "on", "at", "to", "for", "of", "with", "by",
        "from", "as", "into", "through", "during", "before", "after",
        "above", "below", "between", "out", "off", "over", "under",
        "again", "further", "then", "once", "here", "there", "when",
        "where", "why", "how", "all", "each", "every", "both",
        "few", "more", "most", "other", "some", "such", "no", "nor",
        "not", "only", "own", "same", "so", "than", "too", "very",
        "just", "because", "do", "does", "did", "doing", "done",
        "have", "has", "had", "having",
        # Hindi/common words
        "hai", "hain", "ho", "ka", "ki", "ke", "ko", "se", "mein",
        "me", "par", "pe", "aur", "to", "bhi", "tha", "the",
        "thi", "tho", "ye", "wo", "vo", "kya", "jo", "nahi",
        "na", "kiya", "karo", "kar", "raha", "rahe", "rahi",
        "aap", "tum", "main", "tere", "mera", "teri", "meri",
        "apna", "apni", "apne", "is", "us", "in", "un",
    }

    def __init__(self, messages: List[Dict]):
        self.df = pd.DataFrame(messages)
        if not self.df.empty:
            self.df["timestamp"] = pd.to_datetime(self.df["timestamp"])

    def messages_per_user(self) -> pd.Series:
        return self.df["sender"].value_counts()

    def words_per_user(self) -> Dict[str, int]:
        """Count total words per user"""
        result = {}
        for sender, group in self.df.groupby("sender"):
            words = sum(len(msg.split()) for msg in group["message"])
            result[sender] = words
        return result

    def word_frequency(self, top_n: int = 20) -> List[Tuple[str, int]]:
        """Most common words (excluding stop words)"""
        all_words = []
        for msg in self.df["message"]:
            words = msg.lower().split()
            all_words.extend(w.strip(".,!?;:\"'()[]{}") for w in words if w not in self.STOP_WORDS)
        return Counter(all_words).most_common(top_n)

    def emoji_frequency(self, top_n: int = 10) -> List[Tuple[str, int]]:
        """Most common emojis"""
        all_emojis = []
        for msg in self.df["message"]:
            all_emojis.extend(c for c in msg if emoji.is_emoji(c))
        return Counter(all_emojis).most_common(top_n)

    def timeline(self, freq: str = "D") -> pd.Series:
        """Messages over time (D=daily, W=weekly, M=monthly)"""
        return self.df.set_index("timestamp").resample(freq).size()

    def hourly_distribution(self) -> pd.Series:
        """Messages per hour of day"""
        return self.df["timestamp"].dt.hour.value_counts().sort_index()

    def weekday_distribution(self) -> pd.Series:
        """Messages per day of week"""
        return self.df["timestamp"].dt.day_name().value_counts()

    def avg_message_length(self) -> Dict[str, float]:
        """Average message length per user"""
        self.df["msg_length"] = self.df["message"].str.len()
        return self.df.groupby("sender")["msg_length"].mean().to_dict()

    def get_summary(self) -> Dict:
        """Full summary statistics"""
        if self.df.empty:
            return {"error": "No messages found"}

        total_messages = len(self.df)
        total_users = self.df["sender"].nunique()
        date_range = f"{self.df['date'].min()} to {self.df['date'].max()}"

        return {
            "total_messages": total_messages,
            "total_users": total_users,
            "date_range": date_range,
            "messages_per_day": round(total_messages / max(self.df["date"].nunique(), 1), 1),
            "top_user": self.messages_per_user().index[0] if total_users > 0 else "N/A",
            "top_emoji": self.emoji_frequency(1)[0][0] if self.emoji_frequency(1) else "N/A",
        }
```

### Step 3: Visualize Results

```python
# src/whatsapp_analyzer/visualizer.py
import matplotlib.pyplot as plt
import matplotlib
import pandas as pd
from pathlib import Path
from typing import Optional, List, Tuple

matplotlib.use("Agg")  # Server-friendly (no display needed)
matplotlib.rcParams["figure.figsize"] = (12, 6)
matplotlib.rcParams["font.size"] = 12

class Visualizer:
    def __init__(self, output_dir: str = "output"):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(exist_ok=True)

    def message_timeline(self, timeline: pd.Series, title: str = "Message Timeline") -> str:
        """Line chart of messages over time"""
        fig, ax = plt.subplots()
        ax.plot(timeline.index, timeline.values, marker="o", linestyle="-", linewidth=2, markersize=4)
        ax.set_title(title, fontsize=16, fontweight="bold")
        ax.set_xlabel("Date")
        ax.set_ylabel("Messages")
        ax.grid(True, alpha=0.3)
        plt.xticks(rotation=45)
        plt.tight_layout()

        path = self.output_dir / "message_timeline.png"
        plt.savefig(path, dpi=150, bbox_inches="tight")
        plt.close()
        return str(path)

    def messages_per_user(self, data: pd.Series, title: str = "Messages Per User") -> str:
        """Bar chart of messages per user"""
        fig, ax = plt.subplots()
        colors = plt.cm.Set2(range(len(data)))
        bars = ax.bar(data.index, data.values, color=colors)
        ax.set_title(title, fontsize=16, fontweight="bold")
        ax.set_xlabel("User")
        ax.set_ylabel("Messages")
        ax.tick_params(axis="x", rotation=45)

        # Value labels on bars
        for bar, val in zip(bars, data.values):
            ax.text(bar.get_x() + bar.get_width() / 2, bar.get_height() + 0.5,
                    str(val), ha="center", va="bottom")

        plt.tight_layout()
        path = self.output_dir / "messages_per_user.png"
        plt.savefig(path, dpi=150, bbox_inches="tight")
        plt.close()
        return str(path)

    def word_frequency(self, words: List[Tuple[str, int]], top_n: int = 20,
                       title: str = "Top Words") -> str:
        """Horizontal bar chart of most common words"""
        fig, ax = plt.subplots(figsize=(10, max(6, top_n * 0.4)))
        labels = [w[0] for w in words[:top_n]][::-1]
        values = [w[1] for w in words[:top_n]][::-1]

        ax.barh(labels, values, color="coral", edgecolor="darkred")
        ax.set_title(title, fontsize=16, fontweight="bold")
        ax.set_xlabel("Frequency")
        plt.tight_layout()

        path = self.output_dir / "word_frequency.png"
        plt.savefig(path, dpi=150, bbox_inches="tight")
        plt.close()
        return str(path)

    def emoji_frequency(self, emojis: List[Tuple[str, int]], top_n: int = 10,
                        title: str = "Top Emojis") -> str:
        """Bar chart of most common emojis"""
        fig, ax = plt.subplots()
        labels = [f"{e[0]} ({e[1]})" for e in emojis[:top_n]][::-1]
        values = [e[1] for e in emojis[:top_n]][::-1]

        ax.barh(labels, values, color="gold", edgecolor="orange")
        ax.set_title(title, fontsize=16, fontweight="bold")
        ax.set_xlabel("Frequency")
        plt.tight_layout()

        path = self.output_dir / "emoji_frequency.png"
        plt.savefig(path, dpi=150, bbox_inches="tight")
        plt.close()
        return str(path)

    def hourly_activity(self, hourly: pd.Series, title: str = "Activity by Hour") -> str:
        """Bar chart of messages per hour"""
        fig, ax = plt.subplots()
        hours = list(range(24))
        values = [hourly.get(h, 0) for h in hours]

        colors = ["#ff6b6b" if v == max(values) else "#4ecdc4" for v in values]
        ax.bar(hours, values, color=colors)
        ax.set_title(title, fontsize=16, fontweight="bold")
        ax.set_xlabel("Hour of Day")
        ax.set_ylabel("Messages")
        ax.set_xticks(hours)
        ax.grid(True, alpha=0.3)
        plt.tight_layout()

        path = self.output_dir / "hourly_activity.png"
        plt.savefig(path, dpi=150, bbox_inches="tight")
        plt.close()
        return str(path)
```

### Step 4: CLI Interface

```python
# src/whatsapp_analyzer/cli.py
import click
from pathlib import Path
from .parser import WhatsAppParser
from .analyzer import Analyzer
from .visualizer import Visualizer
from .exporter import Exporter

@click.command()
@click.argument("chat_file", type=click.Path(exists=True))
@click.option("--output", "-o", default="output", help="Output directory")
@click.option("--top-words", default=20, help="Number of top words")
@click.option("--top-emojis", default=10, help="Number of top emojis")
@click.option("--export-csv", is_flag=True, help="Export stats to CSV")
def analyze(chat_file: str, output: str, top_words: int, top_emojis: int, export_csv: bool):
    """Analyze WhatsApp chat export file"""

    click.echo("🔍 Parsing WhatsApp chat...")
    parser = WhatsAppParser(chat_file)
    messages = parser.parse()
    click.echo(f"✅ Found {len(messages)} messages")

    click.echo("📊 Analyzing...")
    analyzer = Analyzer(messages)

    # Summary
    summary = analyzer.get_summary()
    click.echo("\n📋 Summary:")
    click.echo(f"   Total messages: {summary['total_messages']}")
    click.echo(f"   Total users: {summary['total_users']}")
    click.echo(f"   Date range: {summary['date_range']}")
    click.echo(f"   Messages/day: {summary['messages_per_day']}")

    # Top users
    click.echo("\n👤 Messages per user:")
    for user, count in analyzer.messages_per_user().items():
        click.echo(f"   {user}: {count}")

    # Top words
    click.echo(f"\n📝 Top {top_words} words:")
    for word, count in analyzer.word_frequency(top_words):
        click.echo(f"   {word}: {count}")

    # Top emojis
    click.echo(f"\n😊 Top {top_emojis} emojis:")
    for emoji_char, count in analyzer.emoji_frequency(top_emojis):
        click.echo(f"   {emoji_char}: {count}")

    # Visualize
    click.echo("\n📈 Generating charts...")
    vis = Visualizer(output)

    timeline_path = vis.message_timeline(analyzer.timeline("D"))
    click.echo(f"   ✅ Timeline: {timeline_path}")

    user_path = vis.messages_per_user(analyzer.messages_per_user())
    click.echo(f"   ✅ User stats: {user_path}")

    words_path = vis.word_frequency(analyzer.word_frequency(top_words), top_words)
    click.echo(f"   ✅ Word cloud: {words_path}")

    emoji_path = vis.emoji_frequency(analyzer.emoji_frequency(top_emojis), top_emojis)
    click.echo(f"   ✅ Emoji stats: {emoji_path}")

    hourly_path = vis.hourly_activity(analyzer.hourly_distribution())
    click.echo(f"   ✅ Hourly activity: {hourly_path}")

    # CSV export
    if export_csv:
        click.echo("\n📄 Exporting CSV...")
        exporter = Exporter(output)
        path = exporter.export_all(analyzer)
        click.echo(f"   ✅ CSV: {path}")

    click.echo("\n✅ Done! Sab charts output folder mein hain.")

if __name__ == "__main__":
    analyze()
```

### Step 5: CSV Export

```python
# src/whatsapp_analyzer/exporter.py
import csv
from pathlib import Path
from .analyzer import Analyzer

class Exporter:
    def __init__(self, output_dir: str = "output"):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(exist_ok=True)

    def export_all(self, analyzer: Analyzer) -> str:
        """Export all stats to a single CSV file"""
        path = self.output_dir / "whatsapp_stats.csv"

        with open(path, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)

            # Summary
            writer.writerow(["=== Summary ==="])
            summary = analyzer.get_summary()
            for key, value in summary.items():
                writer.writerow([key, value])

            writer.writerow([])

            # Messages per user
            writer.writerow(["=== Messages Per User ==="])
            writer.writerow(["User", "Messages"])
            for user, count in analyzer.messages_per_user().items():
                writer.writerow([user, count])

            writer.writerow([])

            # Word frequency
            writer.writerow(["=== Top Words ==="])
            writer.writerow(["Word", "Frequency"])
            for word, count in analyzer.word_frequency(50):
                writer.writerow([word, count])

            writer.writerow([])

            # Emoji frequency
            writer.writerow(["=== Top Emojis ==="])
            writer.writerow(["Emoji", "Frequency"])
            for emoji_char, count in analyzer.emoji_frequency(20):
                writer.writerow([emoji_char, count])

        return str(path)
```

---

## Running the Project

```bash
# Setup
git clone https://github.com/raushan/whatsapp-analyzer
cd whatsapp-analyzer
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Run
python -m src.whatsapp_analyzer.cli data/my_chat.txt

# With options
python -m src.whatsapp_analyzer.cli data/my_chat.txt \
  --output my_analysis \
  --top-words 30 \
  --top-emojis 15 \
  --export-csv

# Install as package
pip install -e .
whatsapp-analyzer data/my_chat.txt
```

---

## Extension Ideas

### 1. Word Cloud

```python
from wordcloud import WordCloud
import matplotlib.pyplot as plt

def generate_wordcloud(self, words: List[Tuple[str, int]]) -> str:
    word_freq = dict(words)
    wc = WordCloud(
        width=1200, height=800,
        background_color="white",
        colormap="viridis",
        max_words=100,
    ).generate_from_frequencies(word_freq)

    fig, ax = plt.subplots()
    ax.imshow(wc, interpolation="bilinear")
    ax.axis("off")
    ax.set_title("Most Used Words", fontsize=16, fontweight="bold")

    path = self.output_dir / "wordcloud.png"
    plt.savefig(path, dpi=150, bbox_inches="tight")
    plt.close()
    return str(path)
```

### 2. Sentiment Analysis

```python
from textblob import TextBlob

def sentiment_analysis(self) -> Dict[str, float]:
    """Average sentiment per user (-1 to +1)"""
    sentiments = {}
    for sender, group in self.df.groupby("sender"):
        scores = []
        for msg in group["message"]:
            if msg.strip():
                blob = TextBlob(msg)
                scores.append(blob.sentiment.polarity)
        sentiments[sender] = sum(scores) / len(scores) if scores else 0
    return sentiments

# Positive: > 0.1, Negative: < -0.1, Neutral: in between
```

### 3. Most Active Hours Heatmap

```python
def activity_heatmap(self) -> str:
    """Heatmap: Day of week × Hour of day"""
    self.df["day_of_week"] = self.df["timestamp"].dt.dayofweek
    self.df["hour"] = self.df["timestamp"].dt.hour

    heatmap_data = self.df.pivot_table(
        index="day_of_week", columns="hour",
        aggfunc="size", fill_value=0
    )

    fig, ax = plt.subplots(figsize=(14, 6))
    im = ax.imshow(heatmap_data.values, cmap="YlOrRd", aspect="auto")

    ax.set_xticks(range(24))
    ax.set_yticks(range(7))
    ax.set_yticklabels(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"])
    ax.set_title("Activity Heatmap (Day × Hour)", fontsize=16, fontweight="bold")

    plt.colorbar(im, ax=ax, label="Messages")
    plt.tight_layout()

    path = self.output_dir / "activity_heatmap.png"
    plt.savefig(path, dpi=150, bbox_inches="tight")
    plt.close()
    return str(path)
```

### 4. Response Time Analysis

```python
def response_time(self) -> Dict[str, float]:
    """Average response time in minutes per user"""
    self.df = self.df.sort_values("timestamp")
    results = {}

    for sender, group in self.df.groupby("sender"):
        response_times = []
        for i in range(1, len(group)):
            diff = (group.iloc[i]["timestamp"] - group.iloc[i - 1]["timestamp"]).total_seconds()
            if diff < 3600:  # Only if within 1 hour
                response_times.append(diff / 60)  # Convert to minutes

        results[sender] = sum(response_times) / len(response_times) if response_times else 0

    return results
```

### 5. Media vs Text Ratio

```python
def media_vs_text(self) -> Dict[str, Dict]:
    """Count media vs text messages per user"""
    media_patterns = ["<Media omitted>", "image omitted", "video omitted",
                      "document omitted", "audio omitted", "sticker omitted"]

    result = {}
    for sender, group in self.df.groupby("sender"):
        media_count = sum(
            1 for msg in group["message"]
            if any(pattern.lower() in msg.lower() for pattern in media_patterns)
        )
        text_count = len(group) - media_count
        result[sender] = {
            "total": len(group),
            "text": text_count,
            "media": media_count,
            "media_percent": round(media_count / len(group) * 100, 1) if len(group) > 0 else 0,
        }
    return result
```

---

## Learning Outcomes

After this project, you'll be comfortable with:

### Python Skills
- **File I/O**: Read and parse text files with different encodings
- **Regex**: Pattern matching for multiple date/time/user formats
- **pandas**: DataFrames, groupby, resample, value_counts
- **matplotlib**: Line charts, bar charts, heatmaps, customization
- **CLI apps**: click/argparse for command-line interfaces
- **Packaging**: pyproject.toml, installing locally
- **Testing**: pytest for data processing logic

### Engineering Skills
- **Data pipeline**: Raw data → parse → analyze → visualize → export
- **Error handling**: Handle malformed lines, missing data, edge cases
- **Code organization**: Separate parser, analyzer, visualizer modules
- **Type hints**: Full typing throughout
- **Documentation**: README, docstrings, type annotations

### AI Engineering Relevance
- This is your first real **data engineering** project
- Pattern used later in ML pipelines: ETL (Extract, Transform, Load)
- pandas + matplotlib = foundation for data science
- Same skills used in LLM data preprocessing

---

## Deliverables Checklist

- [ ] WhatsApp chat parser kaam kar raha hai (Android + iPhone format)
- [ ] Message count per user nikal raha hai
- [ ] Word frequency sahi aa rahi hai (stop words hatake)
- [ ] Emoji detection working hai
- [ ] Timeline chart generate ho raha hai
- [ ] CSV export sahi data de raha hai
- [ ] CLI se sab run ho raha hai
- [ ] Tests likhe hain
- [ ] GitHub pe push kiya hai
- [ ] README mein usage example hai

---

## Bonus Challenge

Apne WhatsApp group ka analysis karo aur report banao:

```
WhatsApp Group Analysis: "AI Engineers Group"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Total Messages: 12,450
👥 Active Members: 15
📅 Date Range: Jan 2026 – June 2026
📨 Messages/Day: 68.2

🏆 Top Chatty Members:
  1. Raushan — 3,420 msgs (27.5%)
  2. Priya — 2,150 msgs (17.3%)
  3. Raj — 1,890 msgs (15.2%)

😊 Top Emojis: 😂 (450), 🔥 (320), ❤️ (280)

⏰ Most Active Time: 9:00 PM – 11:00 PM
📈 Busiest Day: Sunday

📝 Most Used Words: python, api, learning, docker, fastapi
```

Yeh report generate karna seekh gaye to Phase 1 ka data analysis portion clear ✅
