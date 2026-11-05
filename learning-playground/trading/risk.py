"""Execution + risk. This is the layer that decides whether you survive.

TradingAgents (and every LLM trading repo) gives you *opinions*.
This file gives you *limits*. The limits are not negotiable and never ask a model.

Rules encoded here:
  1. Max position size
  2. Max daily loss  -> stop for the day
  3. Max drawdown    -> kill switch, stop everything
  4. Max trades/day  -> anti-overtrading
"""

from dataclasses import dataclass


@dataclass
class RiskConfig:
    max_position_pct: float = 0.90     # never 100% invested
    max_daily_loss_pct: float = 0.03   # -3% in a day -> stop
    max_drawdown_pct: float = 0.15     # -15% from peak -> kill switch
    max_trades_per_day: int = 1        # daily bars only
    cost_bps: float = 9.0
    # What "stop for the day" means. The words are ambiguous and the choice is
    # worth points: "flatten" de-risks at the next open, "hold" keeps the
    # position and only blocks new entries.
    daily_loss_action: str = "flatten"


class RiskManager:
    def __init__(self, cfg: RiskConfig | None = None):
        self.cfg = cfg or RiskConfig()
        self.peak = 0.0
        self.killed = False
        self.reason = ""
        self.day = None
        self.day_start_equity = 0.0
        self.day_ref = 0.0            # equity the daily loss is measured from
        self.last_equity = 0.0        # previous mark, i.e. yesterday's close
        self.paused_reason = ""       # set when the daily loss limit fires
        self.trades_today = 0

    # -- session -------------------------------------------------
    def start_day(self, day: str, equity: float) -> None:
        if day != self.day:
            self.day = day
            self.day_start_equity = equity
            # Measure the day from the PREVIOUS mark, not from today's open.
            # Otherwise a -5% overnight gap resets the baseline to the gapped
            # price and the daily rule never sees the loss.
            self.day_ref = self.last_equity or equity
            self.trades_today = 0
            self.paused_reason = ""

    # -- monitoring ----------------------------------------------
    def update(self, equity: float) -> bool:
        """Call after every mark-to-market. Returns False if trading is halted."""
        self.peak = max(self.peak, equity)
        if self.killed:
            self.last_equity = equity
            return False

        if self.peak > 0:
            dd = (self.peak - equity) / self.peak
            if dd >= self.cfg.max_drawdown_pct:
                self.killed = True
                self.reason = f"kill switch: drawdown {dd:.1%} >= {self.cfg.max_drawdown_pct:.0%}"
                self.last_equity = equity
                return False

        if self.day_ref > 0:
            daily = (self.day_ref - equity) / self.day_ref
            if daily >= self.cfg.max_daily_loss_pct:
                self.reason = f"daily loss limit hit: {daily:.1%}"
                self.paused_reason = self.reason
                self.last_equity = equity
                return False

        self.last_equity = equity
        return True

    # -- permissions ---------------------------------------------
    def can_trade(self) -> bool:
        """False when killed, paused for the day, or the trade cap is reached."""
        return (not self.killed
                and not self.paused_reason
                and self.trades_today < self.cfg.max_trades_per_day)

    def record_trade(self) -> None:
        self.trades_today += 1

    def size(self, equity: float, price: float) -> int:
        """Whole units only. Never spend the buffer."""
        budget = equity * self.cfg.max_position_pct
        return max(0, int(budget // price))

    def size_for_weight(self, equity: float, price: float, weight: float) -> int:
        """A target weight from the strategy, clamped by the risk cap.

        This is the only door between an opinion and a position. The strategy
        cannot ask for 100%: the cap wins, and the cap is not promptable.
        """
        if price <= 0 or weight <= 0:
            return 0
        capped = min(float(weight), self.cfg.max_position_pct)
        return max(0, int((equity * capped) // price))

    def flatten_allowed(self) -> bool:
        """You must always be allowed to SELL, even when halted."""
        return True
