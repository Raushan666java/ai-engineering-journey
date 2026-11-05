"""From opinion to position size. The bridge that keeps the model powerless.

The analyst says "bullish, 0.72 confident". This file turns that into a *weight*
and nothing more. The risk manager then clamps it and the broker executes it.
No path exists from model output to cash.
"""

from analyst import MIN_CONFIDENCE, Opinion

# Confidence at the threshold buys half the allowed position; certainty buys 90%.
BASE_WEIGHT = 0.50
MAX_WEIGHT = 0.90


def conviction(opinion: Opinion, min_confidence: float = MIN_CONFIDENCE) -> float:
    """Long-only. Bearish and neutral are the same action: hold cash."""
    if opinion.direction != "bullish" or opinion.confidence < min_confidence:
        return 0.0

    span = max(1e-9, 1.0 - min_confidence)
    scaled = BASE_WEIGHT + (MAX_WEIGHT - BASE_WEIGHT) * (opinion.confidence - min_confidence) / span
    return round(min(MAX_WEIGHT, scaled), 3)
