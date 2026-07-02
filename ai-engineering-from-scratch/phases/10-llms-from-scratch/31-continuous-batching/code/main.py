# docs/ai-engineering-from-scratch/phases/10-llms-from-scratch/31-continuous-batching/code/main.py
# Continuous batching scheduler with static, vLLM, and Sarathi policies.
# References: Yu et al. 2022 (Orca), Kwon et al. 2023 (vLLM), Agrawal et al. 2023 (Sarathi)

import numpy as np
from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Sequence:
    seq_id: int
    prompt_len: int
    decode_len: int
    tokens_generated: int = 0
    total_tokens: int = 0
    finished: bool = False
    prefill_remaining: int = 0
    kv_blocks: list[int] = field(default_factory=list)


@dataclass
class BlockTable:
    num_physical: int
    block_size: int = 16
    free_blocks: set[int] = field(default_factory=set)

    def __post_init__(self):
        self.free_blocks = set(range(self.num_physical))

    def alloc(self, num_blocks: int) -> list[int]:
        needed = min(num_blocks, len(self.free_blocks))
        if needed == 0:
            return []
        blocks = list(self.free_blocks)[:needed]
        self.free_blocks -= set(blocks)
        return blocks

    def free(self, blocks: list[int]):
        self.free_blocks |= set(blocks)

    def needed_blocks(self, num_tokens: int) -> int:
        return max(0, (num_tokens + self.block_size - 1) // self.block_size)


@dataclass
class SchedulerConfig:
    max_batch: int = 8
    max_sequences: int = 64
    sarathi_chunk: Optional[int] = None


class ContinuousBatchingScheduler:
    def __init__(self, config: SchedulerConfig, block_table: BlockTable):
        self.config = config
        self.blocks = block_table
        self.waiting: list[Sequence] = []
        self.running: list[Sequence] = []
        self.completed: list[Sequence] = []
        self.steps: int = 0
        self.total_decode_tokens: int = 0
        self.total_prefill_tokens: int = 0
        self.preemption_count: int = 0

    def add_requests(self, sequences: list[Sequence]):
        self.waiting.extend(sequences)

    @property
    def total_tokens(self):
        return self.total_prefill_tokens + self.total_decode_tokens

    def _is_finished(self, seq: Sequence) -> bool:
        return seq.finished or seq.tokens_generated >= seq.decode_len

    def _can_fit(self, seq: Sequence) -> bool:
        needed = self.blocks.needed_blocks(seq.prompt_len)
        return len(self.blocks.free_blocks) >= needed

    def _allocate_kv_blocks(self, seq: Sequence, up_to_tokens: int):
        needed = self.blocks.needed_blocks(up_to_tokens)
        have = self.blocks.needed_blocks(len(seq.kv_blocks) * self.blocks.block_size)
        extra = needed - have
        if extra > 0:
            blocks = self.blocks.alloc(extra)
            seq.kv_blocks.extend(blocks)

    def _preempt_one(self):
        if not self.running:
            return None
        self.running.sort(key=lambda s: s.total_tokens)
        seq = self.running.pop(0)
        self.blocks.free(seq.kv_blocks)
        seq.kv_blocks = []
        seq.tokens_generated = 0
        seq.prefill_remaining = seq.prompt_len
        seq.finished = False
        self.preemption_count += 1
        return seq

    def step(self) -> list[Sequence]:
        self.steps += 1

        # Preempt running sequences to make room for waiting sequences.
        # Preempted sequences go to the back of the queue so the original
        # waiting sequence (which triggered preemption) gets admitted first.
        while self.waiting and not self._can_fit(self.waiting[0]) and self.running:
            seq = self._preempt_one()
            if seq:
                self.waiting.append(seq)

        # Admit as many waiting sequences as the batch slot allows
        while len(self.running) < self.config.max_batch and self.waiting:
            if not self._can_fit(self.waiting[0]):
                break
            seq = self.waiting.pop(0)
            self._allocate_kv_blocks(seq, seq.prompt_len)
            seq.prefill_remaining = seq.prompt_len
            self.running.append(seq)

        if not self.running:
            return []

        batch = []
        for seq in list(self.running):
            if self._is_finished(seq):
                seq.finished = True
                continue
            if seq.prefill_remaining > 0 and self.config.sarathi_chunk is not None:
                chunk = min(self.config.sarathi_chunk, seq.prefill_remaining)
                seq.prefill_remaining -= chunk
                seq.total_tokens += chunk
                self.total_prefill_tokens += chunk
            elif seq.prefill_remaining > 0:
                seq.total_tokens += seq.prefill_remaining
                self.total_prefill_tokens += seq.prefill_remaining
                seq.prefill_remaining = 0
            else:
                seq.tokens_generated += 1
                seq.total_tokens += 1
                self.total_decode_tokens += 1
                self._allocate_kv_blocks(seq, seq.tokens_generated)
            batch.append(seq)

        still_running = []
        for seq in self.running:
            if self._is_finished(seq):
                self.blocks.free(seq.kv_blocks)
                seq.kv_blocks = []
                self.completed.append(seq)
            else:
                still_running.append(seq)
        self.running = still_running

        return batch


@dataclass
class SimulationResult:
    name: str
    total_steps: int
    total_prefill: int
    total_decode: int
    decode_per_step: float
    idle_fraction: float

    @property
    def total_tokens(self):
        return self.total_prefill + self.total_decode


def simulate(name: str, scheduler: ContinuousBatchingScheduler, requests: list[Sequence], max_steps: int = 500) -> SimulationResult:
    scheduler.add_requests(requests)
    steps_with_work = 0
    for _ in range(max_steps):
        batch = scheduler.step()
        if batch:
            steps_with_work += 1
        if not scheduler.running and not scheduler.waiting:
            break
    idle = 1.0 - steps_with_work / max(scheduler.steps, 1)
    return SimulationResult(
        name=name,
        total_steps=scheduler.steps,
        total_prefill=scheduler.total_prefill_tokens,
        total_decode=scheduler.total_decode_tokens,
        decode_per_step=scheduler.total_decode_tokens / max(scheduler.steps, 1),
        idle_fraction=idle,
    )


def make_requests(n: int, seed: int = 42) -> list[Sequence]:
    rng = np.random.default_rng(seed)
    requests = []
    for i in range(n):
        prompt = int(max(32, rng.zipf(1.5) * 50))
        decode = int(max(8, rng.zipf(1.8) * 30))
        requests.append(Sequence(seq_id=i, prompt_len=prompt, decode_len=decode))
    return requests


def run_static_baseline(requests: list[Sequence]) -> SimulationResult:
    total_decode = sum(s.decode_len for s in requests)
    max_decode = max(s.decode_len for s in requests)
    n = len(requests)
    idle = 1.0 - (total_decode / max_decode) / n if (max_decode * n) > 0 else 0.0
    return SimulationResult(
        name="Static batching",
        total_steps=max_decode,
        total_prefill=sum(s.prompt_len for s in requests),
        total_decode=total_decode,
        decode_per_step=total_decode / max(max_decode, 1),
        idle_fraction=idle,
    )


def copy_requests(requests: list[Sequence]) -> list[Sequence]:
    return [Sequence(seq_id=s.seq_id, prompt_len=s.prompt_len, decode_len=s.decode_len) for s in requests]


def main():
    base_requests = make_requests(16)

    static = run_static_baseline(base_requests)

    requests = copy_requests(base_requests)
    print(f"=== Static batching ===")
    print(f"  Steps (wall time):        {static.total_steps}")
    print(f"  Decode tokens produced:   {static.total_decode}")
    print(f"  Useful decode/step:       {static.decode_per_step:.2f}")
    print(f"  Idle fraction:            {static.idle_fraction:.2%}")

    config_vllm = SchedulerConfig(max_batch=8, sarathi_chunk=None)
    blocks_vllm = BlockTable(num_physical=1024)
    sched_vllm = ContinuousBatchingScheduler(config_vllm, blocks_vllm)
    vllm = simulate("vLLM", sched_vllm, requests)
    print(f"\n=== vLLM (iteration-level) ===")
    print(f"  Steps (wall time):        {vllm.total_steps}")
    print(f"  Decode tokens produced:   {vllm.total_decode}")
    print(f"  Useful decode/step:       {vllm.decode_per_step:.2f}")
    print(f"  Decode speedup vs static: {vllm.total_decode / static.total_decode:.2f}x decode/step")

    config_sarathi = SchedulerConfig(max_batch=8, sarathi_chunk=64)
    blocks_sarathi = BlockTable(num_physical=1024)
    sched_sarathi = ContinuousBatchingScheduler(config_sarathi, blocks_sarathi)
    sarathi = simulate("Sarathi", sched_sarathi, copy_requests(base_requests))
    print(f"\n=== Sarathi (chunked prefill) ===")
    print(f"  Steps (wall time):        {sarathi.total_steps}")
    print(f"  Decode tokens produced:   {sarathi.total_decode}")
    print(f"  Useful decode/step:       {sarathi.decode_per_step:.2f}")
    print(f"  Decode speedup vs static: {sarathi.total_decode / static.total_decode:.2f}x decode/step")


if __name__ == "__main__":
    main()
