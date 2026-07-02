"""Tests for the voice-controlled automation agent pipeline.

Phase 19, Lesson 18
docs/ai-engineering-from-scratch/phases/19-capstone-projects/
    18-voice-controlled-automation-agent/docs/en.md
"""

import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

import unittest
from main import (
    rms,
    is_voice,
    NLU,
    safety_check,
    light_on,
    light_off,
    send_email,
    get_weather,
    search_web,
    Pipeline,
    run_once,
)

import numpy as np


class TestVAD(unittest.TestCase):
    def test_rms_silence(self):
        self.assertAlmostEqual(rms(np.zeros(1600, dtype=np.float32)), 0.0)

    def test_rms_noise(self):
        self.assertGreater(rms(np.random.randn(1600).astype(np.float32)), 0.0)

    def test_is_voice_false(self):
        self.assertFalse(is_voice(np.zeros(1600, dtype=np.float32)))

    def test_is_voice_true(self):
        loud = np.ones(1600, dtype=np.float32) * 0.5
        self.assertTrue(is_voice(loud))


class TestNLU(unittest.TestCase):
    def setUp(self):
        self.nlu = NLU()

    def test_light_on(self):
        intent, args = self.nlu.parse("turn on the light in kitchen")
        self.assertEqual(intent, "light_on")
        self.assertEqual(args, ["kitchen"])

    def test_light_off(self):
        intent, args = self.nlu.parse("turn off the lamp in living room")
        self.assertEqual(intent, "light_off")
        self.assertEqual(args, ["living room"])

    def test_weather(self):
        intent, args = self.nlu.parse("whats the weather in Tokyo")
        self.assertEqual(intent, "get_weather")
        self.assertEqual(args, ["tokyo"])

    def test_email(self):
        intent, args = self.nlu.parse(
            "send email to bob@example.com say meeting at 3"
        )
        self.assertEqual(intent, "send_email")
        self.assertIn("bob@example.com", args)

    def test_search(self):
        intent, args = self.nlu.parse("search latest AI papers")
        self.assertEqual(intent, "search_web")
        self.assertIn("latest ai papers", args)

    def test_unrecognized(self):
        intent, args = self.nlu.parse("do something random")
        self.assertIsNone(intent)


class TestSafetyCheck(unittest.TestCase):
    def test_clean_command(self):
        check = safety_check("light_on", ["kitchen"])
        self.assertTrue(check["allowed"])

    def test_denylist_all(self):
        check = safety_check("light_on", ["all"])
        self.assertFalse(check["allowed"])

    def test_search_deny_rm(self):
        check = safety_check("search_web", ["rm -rf /"])
        self.assertFalse(check["allowed"])

    def test_email_deny_drop(self):
        check = safety_check("send_email", ["hacker@evil.com", "drop table users"])
        self.assertFalse(check["allowed"])


class TestTools(unittest.TestCase):
    def test_light_on(self):
        self.assertTrue(light_on("kitchen")["ok"])

    def test_light_off(self):
        self.assertTrue(light_off("bedroom")["ok"])

    def test_email_allowed_domain(self):
        result = send_email("alice@example.com", "hello")
        self.assertTrue(result["ok"])

    def test_email_blocked_domain(self):
        result = send_email("alice@evil.com", "hello")
        self.assertFalse(result["ok"])

    def test_get_weather(self):
        result = get_weather("Tokyo")
        self.assertTrue(result["ok"])
        self.assertIn("Tokyo", result["msg"])

    def test_search_web(self):
        result = search_web("AI 2026")
        self.assertTrue(result["ok"])


class TestPipeline(unittest.TestCase):
    def test_pipeline_light_on(self):
        result = run_once("turn on the light in kitchen")
        self.assertTrue(result["ok"])

    def test_pipeline_weather(self):
        result = run_once("whats the weather in London")
        self.assertTrue(result["ok"])

    def test_pipeline_unrecognized(self):
        result = run_once("do something random")
        self.assertFalse(result["ok"])
        self.assertEqual(result.get("stage"), "nlu")

    def test_pipeline_blocked_domain(self):
        result = run_once(
            "send email to hacker@evil.com say drop table users"
        )
        self.assertFalse(result["ok"])

    def test_pipeline_blocked_denylist(self):
        result = run_once("search rm -rf everything")
        self.assertFalse(result["ok"])
        self.assertEqual(result.get("stage"), "safety")


if __name__ == "__main__":
    unittest.main()
