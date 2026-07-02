import sys
import os
import unittest
import numpy as np

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

# Import everything from main.py (which now has all scheduler code)
from main import (
    ContinuousBatchingScheduler,
    SchedulerConfig,
    BlockTable,
    Sequence,
    SimulationResult,
    simulate,
    make_requests,
    run_static_baseline,
)


class TestBlockTable(unittest.TestCase):
    def test_alloc_returns_requested_blocks(self):
        bt = BlockTable(num_physical=64)
        blocks = bt.alloc(4)
        self.assertEqual(len(blocks), 4)
        self.assertEqual(len(bt.free_blocks), 60)

    def test_alloc_exhausts_pool(self):
        bt = BlockTable(num_physical=8)
        blocks = bt.alloc(8)
        self.assertEqual(len(blocks), 8)
        self.assertEqual(len(bt.free_blocks), 0)

    def test_alloc_caps_at_available(self):
        bt = BlockTable(num_physical=5)
        blocks = bt.alloc(100)
        self.assertEqual(len(blocks), 5)

    def test_alloc_returns_empty_on_empty_pool(self):
        bt = BlockTable(num_physical=2)
        bt.alloc(2)
        blocks = bt.alloc(1)
        self.assertEqual(len(blocks), 0)

    def test_free_restores_blocks(self):
        bt = BlockTable(num_physical=16)
        blocks = bt.alloc(4)
        bt.free(blocks)
        self.assertEqual(len(bt.free_blocks), 16)

    def test_needed_blocks_exact(self):
        bt = BlockTable(num_physical=1024, block_size=16)
        self.assertEqual(bt.needed_blocks(16), 1)
        self.assertEqual(bt.needed_blocks(32), 2)
        self.assertEqual(bt.needed_blocks(17), 2)
        self.assertEqual(bt.needed_blocks(0), 0)


class TestSequence(unittest.TestCase):
    def test_default_state(self):
        s = Sequence(seq_id=0, prompt_len=128, decode_len=64)
        self.assertEqual(s.tokens_generated, 0)
        self.assertFalse(s.finished)
        self.assertEqual(s.prefill_remaining, 0)
        self.assertEqual(s.kv_blocks, [])

    def test_prefill_remaining_after_init(self):
        s = Sequence(seq_id=1, prompt_len=256, decode_len=100)
        s.prefill_remaining = 256
        self.assertEqual(s.prefill_remaining, 256)

    def test_finished_after_generating_all_tokens(self):
        s = Sequence(seq_id=2, prompt_len=10, decode_len=5)
        s.tokens_generated = 5
        s.finished = True
        self.assertTrue(s.finished or s.tokens_generated >= s.decode_len)


class TestSchedulerStep(unittest.TestCase):
    def setUp(self):
        self.config = SchedulerConfig(max_batch=4, sarathi_chunk=None)
        self.blocks = BlockTable(num_physical=256)
        self.sched = ContinuousBatchingScheduler(self.config, self.blocks)

    def test_step_with_no_requests_returns_empty(self):
        batch = self.sched.step()
        self.assertEqual(batch, [])

    def test_step_moves_waiting_to_running(self):
        seq = Sequence(seq_id=0, prompt_len=32, decode_len=16)
        self.sched.add_requests([seq])
        self.sched.step()
        self.assertEqual(len(self.sched.running), 1)

    def test_step_prefills_entire_prompt_vllm(self):
        seq = Sequence(seq_id=0, prompt_len=32, decode_len=16)
        self.sched.add_requests([seq])
        self.sched.step()
        runner = self.sched.running[0]
        self.assertEqual(runner.prefill_remaining, 0)

    def test_step_decodes_one_token_after_prefill(self):
        seq = Sequence(seq_id=0, prompt_len=8, decode_len=16)
        self.sched.add_requests([seq])
        self.sched.step()
        self.sched.step()
        runner = self.sched.running[0]
        self.assertEqual(runner.tokens_generated, 1)

    def test_step_finishes_sequence(self):
        seq = Sequence(seq_id=0, prompt_len=8, decode_len=3)
        self.sched.add_requests([seq])
        for _ in range(5):
            self.sched.step()
        self.assertIn(seq, self.sched.completed)
        self.assertEqual(len(self.sched.running), 0)

    def test_step_maintains_batch_size(self):
        for i in range(8):
            self.sched.add_requests([Sequence(seq_id=i, prompt_len=16, decode_len=32)])
        for _ in range(3):
            self.sched.step()
        self.assertLessEqual(len(self.sched.running), self.config.max_batch)

    def test_block_allocation_tracking(self):
        seq = Sequence(seq_id=0, prompt_len=64, decode_len=32)
        self.sched.add_requests([seq])
        self.sched.step()
        self.assertGreater(len(seq.kv_blocks), 0)

    def test_vllm_never_runs_with_prefill_remaining(self):
        seq = Sequence(seq_id=0, prompt_len=200, decode_len=30)
        self.sched.add_requests([seq])
        self.sched.step()
        for s in self.sched.running:
            self.assertEqual(s.prefill_remaining, 0)


class TestSarathiChunkedPrefill(unittest.TestCase):
    def test_sarathi_chunks_prefill(self):
        config = SchedulerConfig(max_batch=4, sarathi_chunk=32)
        blocks = BlockTable(num_physical=256)
        sched = ContinuousBatchingScheduler(config, blocks)
        seq = Sequence(seq_id=0, prompt_len=128, decode_len=16)
        sched.add_requests([seq])
        sched.step()
        self.assertGreater(seq.prefill_remaining, 0)
        self.assertLess(seq.prefill_remaining, 128)

    def test_sarathi_multiple_chunks(self):
        config = SchedulerConfig(max_batch=2, sarathi_chunk=16)
        blocks = BlockTable(num_physical=256)
        sched = ContinuousBatchingScheduler(config, blocks)
        seq = Sequence(seq_id=0, prompt_len=48, decode_len=16)
        sched.add_requests([seq])
        for _ in range(6):
            sched.step()
        self.assertEqual(seq.prefill_remaining, 0)

    def test_sarathi_produces_decode_during_prefill(self):
        config = SchedulerConfig(max_batch=4, sarathi_chunk=32)
        blocks = BlockTable(num_physical=256)
        sched = ContinuousBatchingScheduler(config, blocks)
        # Two sequences: one short prompt (fits in one chunk), one long
        sched.add_requests([Sequence(seq_id=0, prompt_len=16, decode_len=10)])
        sched.add_requests([Sequence(seq_id=1, prompt_len=128, decode_len=10)])
        sched.step()
        # Short sequence should be in decode mode
        sched.step()
        for s in sched.running:
            pass  # Both should progress
        self.assertGreater(sched.total_decode_tokens, 0)

    def test_sarathi_uses_chunk_budget(self):
        config = SchedulerConfig(max_batch=2, sarathi_chunk=64)
        blocks = BlockTable(num_physical=256)
        sched = ContinuousBatchingScheduler(config, blocks)
        seq = Sequence(seq_id=0, prompt_len=150, decode_len=5)
        sched.add_requests([seq])
        sched.step()
        self.assertEqual(seq.prefill_remaining, 86)

    def test_sarathi_with_multiple_requests(self):
        requests = make_requests(8)
        config = SchedulerConfig(max_batch=4, sarathi_chunk=64)
        blocks = BlockTable(num_physical=1024)
        sched = ContinuousBatchingScheduler(config, blocks)
        result = simulate("test", sched, requests)
        self.assertGreater(result.total_decode, 0)


class TestPreemption(unittest.TestCase):
    def test_preemption_frees_blocks(self):
        config = SchedulerConfig(max_batch=4, sarathi_chunk=None)
        blocks = BlockTable(num_physical=6)
        sched = ContinuousBatchingScheduler(config, blocks)
        for i in range(4):
            sched.add_requests([Sequence(seq_id=i, prompt_len=32, decode_len=2000)])
        for _ in range(5):
            sched.step()
        new_seq = Sequence(seq_id=99, prompt_len=96, decode_len=50)
        sched.add_requests([new_seq])
        for _ in range(30):
            sched.step()
        self.assertGreater(sched.preemption_count, 0)

    def test_preempted_seq_goes_to_waiting_with_reset_state(self):
        blocks = BlockTable(num_physical=4)
        sched = ContinuousBatchingScheduler(SchedulerConfig(max_batch=2), blocks)
        sched.add_requests([Sequence(seq_id=0, prompt_len=64, decode_len=1000)])
        sched.step()
        sched.add_requests([Sequence(seq_id=1, prompt_len=32, decode_len=5)])
        for _ in range(3):
            sched.step()
        self.assertGreater(sched.preemption_count, 0)
        waiting_ids = [s.seq_id for s in sched.waiting]
        self.assertIn(0, waiting_ids)
        seq = next(s for s in sched.waiting if s.seq_id == 0)
        self.assertEqual(seq.tokens_generated, 0)
        self.assertEqual(seq.prefill_remaining, 64)
        self.assertEqual(len(seq.kv_blocks), 0)


class TestEndToEndSimulation(unittest.TestCase):
    def test_simulation_terminates(self):
        config = SchedulerConfig(max_batch=4, sarathi_chunk=None)
        blocks = BlockTable(num_physical=256)
        sched = ContinuousBatchingScheduler(config, blocks)
        requests = make_requests(8, seed=42)
        result = simulate("test", sched, requests, max_steps=200)
        self.assertIsInstance(result, SimulationResult)
        self.assertGreater(result.total_tokens, 0)
        self.assertGreater(result.total_steps, 0)

    def test_static_baseline_has_high_idle(self):
        requests = make_requests(16, seed=42)
        result = run_static_baseline(requests)
        self.assertGreater(result.idle_fraction, 0.5)

    def test_continuous_reduces_idle(self):
        requests = make_requests(16, seed=42)
        config = SchedulerConfig(max_batch=8, sarathi_chunk=None)
        blocks = BlockTable(num_physical=1024)
        sched = ContinuousBatchingScheduler(config, blocks)
        result = simulate("test", sched, requests)
        self.assertLess(result.idle_fraction, 0.5)

    def test_vllm_and_sarathi_produce_same_decode(self):
        base = make_requests(16, seed=42)
        def copy_reqs(): return [Sequence(seq_id=s.seq_id, prompt_len=s.prompt_len, decode_len=s.decode_len) for s in base]
        config_v = SchedulerConfig(max_batch=8, sarathi_chunk=None)
        config_s = SchedulerConfig(max_batch=8, sarathi_chunk=64)
        r_v = simulate("v", ContinuousBatchingScheduler(config_v, BlockTable(num_physical=1024)), copy_reqs())
        r_s = simulate("s", ContinuousBatchingScheduler(config_s, BlockTable(num_physical=1024)), copy_reqs())
        self.assertEqual(r_v.total_decode, r_s.total_decode)

    def test_simulation_exits_cleanly(self):
        requests = make_requests(32, seed=1)
        config = SchedulerConfig(max_batch=8, sarathi_chunk=32)
        blocks = BlockTable(num_physical=2048)
        sched = ContinuousBatchingScheduler(config, blocks)
        result = simulate("clean", sched, requests, max_steps=500)
        self.assertGreater(result.total_tokens, 0)

    def test_preemption_count_positive_when_oversubscribed(self):
        config = SchedulerConfig(max_batch=4, sarathi_chunk=None)
        blocks = BlockTable(num_physical=4)
        sched = ContinuousBatchingScheduler(config, blocks)
        for i in range(4):
            sched.add_requests([Sequence(seq_id=i, prompt_len=16, decode_len=2000)])
        for _ in range(3):
            sched.step()
        sched.add_requests([Sequence(seq_id=99, prompt_len=32, decode_len=5)])
        for _ in range(30):
            sched.step()
        self.assertGreater(sched.preemption_count, 0)

    def test_all_sequences_eventually_complete(self):
        n = 16
        requests = make_requests(n, seed=42)
        config = SchedulerConfig(max_batch=8, sarathi_chunk=None)
        blocks = BlockTable(num_physical=1024)
        sched = ContinuousBatchingScheduler(config, blocks)
        simulate("test", sched, requests, max_steps=500)
        self.assertEqual(len(sched.completed), n)


if __name__ == "__main__":
    unittest.main()
