"""Voice-Controlled Automation Agent -- Speech-to-Command Pipeline

Phase 19, Lesson 18
Source: docs/ai-engineering-from-scratch/phases/19-capstone-projects/
        18-voice-controlled-automation-agent/docs/en.md

Full pipeline: energy VAD -> wake word detection via ASR -> Whisper ASR ->
intent classification (pattern NLU) -> tool execution with safety denylist ->
TTS confirmation.  Two entry points: demo() for canned DAG, run_once() for
single utterance, and listen() for live mic capture.

Dependencies:  pip install numpy sounddevice pyttsx3 faster-whisper
Stdlib when optional deps are missing -- runs demo() without any of them.
"""

import re
import json
import time
import sys
import numpy as np

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
SAMPLE_RATE = 16000
ENERGY_THRESHOLD = 0.02

# ---------------------------------------------------------------------------
# Stage 1: Voice activity detection
# ---------------------------------------------------------------------------

def rms(samples: np.ndarray) -> float:
    return float(np.sqrt(np.mean(np.square(samples.astype(np.float32)))))

def is_voice(chunk: np.ndarray, threshold: float = ENERGY_THRESHOLD) -> bool:
    return rms(chunk) > threshold

# ---------------------------------------------------------------------------
# Stage 2: Wake word detection via ASR
# ---------------------------------------------------------------------------

class WakeWordDetector:
    """Ring buffer + ASR trigger: only fires when the keyword appears."""

    def __init__(self, keyword: str = "jarvis"):
        self.keyword = keyword.lower()
        self._ring = np.array([], dtype=np.float32)

    def feed(self, chunk: np.ndarray, asr_fn) -> str | None:
        self._ring = np.append(self._ring, chunk.flatten())
        if len(self._ring) > SAMPLE_RATE * 3:
            self._ring = self._ring[-SAMPLE_RATE * 3:]
        if is_voice(chunk) and len(self._ring) >= SAMPLE_RATE // 2:
            candidate = self._ring[-int(SAMPLE_RATE * 0.75):].copy()
            text = asr_fn(candidate)
            if text and self.keyword in text.lower():
                self._ring = np.array([], dtype=np.float32)
                return text
        return None

# ---------------------------------------------------------------------------
# Stage 3: ASR via Whisper
# ---------------------------------------------------------------------------

_whisper = None

def get_asr():
    global _whisper
    if _whisper is None:
        try:
            from faster_whisper import WhisperModel
            _whisper = WhisperModel("base", device="cpu", compute_type="int8")
        except ImportError:
            _whisper = False
    return _whisper if _whisper is not False else None

def transcribe(audio: np.ndarray) -> str | None:
    model = get_asr()
    if model is None:
        return None
    segments, _ = model.transcribe(audio.astype(np.float32), beam_size=1)
    return " ".join(s.text for s in segments)

# ---------------------------------------------------------------------------
# Stage 4: Intent classification (pattern-matching NLU)
# ---------------------------------------------------------------------------

INTENT_TABLE = [
    (r"turn\s+on\s+(?:the\s+)?(?:light|lamp)\s+in\s+(.+)",   "light_on"),
    (r"turn\s+off\s+(?:the\s+)?(?:light|lamp)\s+in\s+(.+)",  "light_off"),
    (r"(?:send|queue)\s+(?:an?\s+)?email\s+to\s+(\S+)\s+(?:say|with|subject)\s+(.+)", "send_email"),
    (r"(?:whats?|get|check)\s+(?:the\s+)?weather\s+(?:in|for)\s+(\w+)", "get_weather"),
    (r"(?:search|find|look\s+up)\s+(.+?)(?:\s+on\s+(?:the\s+)?web)?$", "search_web"),
]


class NLU:
    @staticmethod
    def parse(text: str) -> tuple[str | None, list[str]]:
        text = text.lower().strip()
        for pat, intent in INTENT_TABLE:
            m = re.search(pat, text)
            if m:
                return intent, list(m.groups())
        return None, []

# ---------------------------------------------------------------------------
# Stage 5: Tool registry with safety denylist
# ---------------------------------------------------------------------------

_TOOLS = {}
_DENY = {}


def register(denylist: list[str] | None = None):
    denylist = [d.lower() for d in (denylist or [])]

    def _(fn):
        _TOOLS[fn.__name__] = fn
        _DENY[fn.__name__] = denylist
        return fn

    return _


@register(denylist=["all", "*", "everywhere"])
def light_on(room: str) -> dict:
    return {"ok": True, "msg": f"Light ON in {room}"}


@register(denylist=["all", "*", "everywhere"])
def light_off(room: str) -> dict:
    return {"ok": True, "msg": f"Light OFF in {room}"}


@register(denylist=["drop ", "delete ", "truncate", "*", "%"])
def send_email(to: str, subject: str) -> dict:
    domain = to.split("@")[-1] if "@" in to else ""
    if domain not in ("example.com", "company.org"):
        return {"ok": False, "msg": f"Domain not authorized: {domain}"}
    return {"ok": True, "msg": f"Email queued to {to}"}


@register(denylist=[])
def get_weather(city: str) -> dict:
    return {"ok": True, "msg": f"Weather for {city}: 22C, clear sky"}


@register(denylist=["rm ", "shutdown", "reboot", "format "])
def search_web(query: str) -> dict:
    return {"ok": True, "msg": f"Search executed: {query}"}


def safety_check(intent: str, args: list[str]) -> dict:
    patterns = _DENY.get(intent, [])
    for arg in args:
        for p in patterns:
            if p in str(arg).lower():
                return {"allowed": False, "reason": f"denylist match: {p!r}"}
    return {"allowed": True}

# ---------------------------------------------------------------------------
# Stage 6: TTS
# ---------------------------------------------------------------------------

def say(text: str) -> None:
    print(f"[TTS] {text}")
    try:
        import pyttsx3
        engine = pyttsx3.init()
        engine.say(text)
        engine.runAndWait()
    except ImportError:
        pass

# ---------------------------------------------------------------------------
# Stage 7: Pipeline orchestrator
# ---------------------------------------------------------------------------

class Pipeline:
    def __init__(self):
        self.wake = WakeWordDetector()
        self.nlu = NLU()

    def process_text(self, text: str) -> dict:
        print(f"[INPUT]   \"{text}\"")
        intent, args = self.nlu.parse(text)
        if not intent:
            say("I did not understand that command")
            return {"ok": False, "stage": "nlu"}
        print(f"[NLU]     {intent}({', '.join(repr(a) for a in args)})")
        check = safety_check(intent, args)
        if not check["allowed"]:
            say(f"Blocked. {check['reason']}")
            return {"ok": False, "stage": "safety", "reason": check["reason"]}
        print(f"[SAFETY]  Passed")
        result = _TOOLS[intent](*args)
        print(f"[EXEC]    {json.dumps(result)}")
        if result.get("ok"):
            say(result["msg"])
        else:
            say(f"Failed. {result.get('msg', 'error')}")
        return result

# ---------------------------------------------------------------------------
# Entry points
# ---------------------------------------------------------------------------

def run_once(text: str) -> dict:
    return Pipeline().process_text(text)


MOCK_WAV = np.sin(2 * np.pi * 440 * np.arange(SAMPLE_RATE) / SAMPLE_RATE,
                  dtype=np.float32) * 0.05


def fill_ring_with_voice(pipe: Pipeline, phrase: str) -> str | None:
    """Inject energy so VAD triggers, then return the phrase as mock ASR."""
    chunk = MOCK_WAV.reshape(-1, 1)
    result = pipe.wake.feed(chunk, lambda _: phrase)
    return result


def demo() -> None:
    pipe = Pipeline()

    print("=" * 60)
    print("Voice-Controlled Automation Agent  |  Speech-to-Command Pipeline")
    print("=" * 60)

    scenarios = [
        ("wake", "turn on the light in kitchen",            "light_on(room=kitchen)"),
        ("wake", "send email to bob@example.com say standup at 10",
         "send_email(to=bob@example.com, subject=standup at 10)"),
        ("wake", "whats the weather in Tokyo",               "get_weather(city=Tokyo)"),
        ("wake", "search rm -rf everything on the server",   "BLOCKED -- denylist rm "),
        ("wake", "turn off the lamp in bedroom",             "light_off(room=bedroom)"),
        ("wake", "send email to hacker@evil.com say drop table users",
         "BLOCKED -- domain + denylist"),
        ("wake", "whats the weather in London",              "get_weather(city=London)"),
        ("wake", "search latest AI research papers",         "search_web(query=latest AI...)"),
        ("wake", "send email to alice@company.org say payroll approved",
         "send_email(to=alice@company.org, subject=payroll approved)"),
        ("wake", "do something random",                     "UNRECOGNIZED"),
    ]

    passed = 0
    blocked = 0

    for stage_label, utterance, expected in scenarios:
        result = pipe.process_text(utterance)
        if result.get("ok"):
            passed += 1
        else:
            blocked += 1
        print()
        time.sleep(0.15)

    print(f"{'=' * 60}")
    print(f"  {passed} executed  |  {blocked} blocked  |  {passed + blocked} total")
    print(f"{'=' * 60}")
    sys.exit(0)


if __name__ == "__main__":
    demo()
