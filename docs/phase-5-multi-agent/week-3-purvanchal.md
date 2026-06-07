# Week 3: Purvanchal Flow Studio

**Duration:** October 13-19, 2026 | **Hours:** 35

---

## Project: Automated Music Pipeline

End-to-end automated Bhojpuri music content generation.

### Pipeline

```text
Topic Input
    ↓
Lyrics Agent (LLM + Bhojpuri prompt)
    ↓
Review Agent (Quality check)
    ↓
ACE-Step (Music generation)
    ↓
FFmpeg (Audio processing)
    ↓
Thumbnail Agent (FLUX/SDXL)
    ↓
Upload Agent (YouTube + Instagram)
    ↓
Analytics Agent (Track performance)
```

### Build Steps

| Day | Task |
|-----|------|
| 1-2 | ACE-Step setup + lyrics agent |
| 3-4 | Audio pipeline (FFmpeg) |
| 5 | Thumbnail automation |
| 6 | YouTube upload API |
| 7 | Full integration test |

### Tools

- ACE-Step (self-hosted music AI)
- FFmpeg (audio processing)
- FLUX/SD (thumbnail generation)
- YouTube Data API v3
- n8n (orchestration)
