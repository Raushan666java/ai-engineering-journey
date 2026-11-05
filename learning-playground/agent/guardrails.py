"""Guardrails: input scanning and output redaction.

The model is not a security boundary. These functions are deterministic and
run in code, before and after the model.
"""

import re

INJECTION_PATTERNS = [
    r"ignore (all )?(previous|prior|above) (instructions|rules)",
    r"you are now|act as|pretend to be",
    r"system\s*:|developer mode|jailbreak",
    r"reveal (your )?(system )?prompt|print your instructions",
    r"disregard (the )?(policy|rules)",
]

HOMOGLYPHS = str.maketrans({"0": "o", "1": "i", "3": "e", "@": "a", "$": "s"})

PII_PATTERNS = {
    "email": r"[\w.+-]+@[\w-]+\.[\w.]+",
    "phone": r"\b(?:\+91[-\s]?)?[6-9]\d{9}\b",
    "card": r"\b(?:\d[ -]*?){13,16}\b",
}


def scan_input(text: str) -> tuple[bool, str]:
    normalized = text.lower().translate(HOMOGLYPHS)
    for pattern in INJECTION_PATTERNS:
        if re.search(pattern, normalized):
            return False, f"blocked: injection pattern ({pattern})"
    return True, "clean"


def redact(text: str) -> str:
    for label, pattern in PII_PATTERNS.items():
        text = re.sub(pattern, f"[REDACTED_{label.upper()}]", text)
    return text
