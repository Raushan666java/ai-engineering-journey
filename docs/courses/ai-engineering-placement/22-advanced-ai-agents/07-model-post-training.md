# Model Post-Training for Agents

## Learning Objectives

| LO | Description |
|----|-------------|
| LO1 | Understand the three-stage training pipeline: pre-training, SFT, RL |
| LO2 | Compare Supervised Fine-Tuning (SFT) vs Reinforcement Learning (RL) for agent tasks |
| LO3 | Implement RLHF and DAPO for agent behavior optimization |
| LO4 | Design tool-augmented reasoning training pipelines |
| LO5 | Measure and compare post-training methods for agent performance |

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 7.1 | The Three-Stage Pipeline | Pre-training → SFT → RL |
| 7.2 | SFT for Agents | Teaching format, tool use, and task structure |
| 7.3 | RL for Agents | Teaching behavior, exploration, and optimization |
| 7.4 | SFT vs RL Comparison | When to choose each method |
| 7.5 | DAPO Algorithm | Constrained optimization for agent tasks |
| 7.6 | Tool-Augmented Reasoning | Training models to use tools effectively |

## Chapter Roadmap

```mermaid
flowchart LR
    subgraph Stage1[Pre-training]
        PT[Raw Data] -->|Next Token Prediction| BASE[Base Model]
    end
    subgraph Stage2[SFT]
        BASE -->|Supervised Fine-Tuning| SFT_MODEL[SFT Model]
        DEMOS[Expert Demonstrations] --> SFT_MODEL
    end
    subgraph Stage3[RL]
        SFT_MODEL -->|Reinforcement Learning| FINAL[Final Agent Model]
        PREFS[Human Preferences] --> FINAL
        RL_ALGO[DAPO / PPO / GRPO] --> FINAL
    end
    Stage1 --> Stage2 --> Stage3
```

## 7.1 The Three-Stage Pipeline

Every production agent model goes through three training stages, each serving a distinct purpose.

```typescript
interface TrainingStage {
    name: string
    dataType: string
    objective: string
    computeCost: string
}

class TrainingPipeline {
    stages: TrainingStage[] = [
        {
            name: 'Pre-training',
            dataType: 'Trillions of tokens (web, books, code)',
            objective: 'Learn language, facts, and patterns via next-token prediction',
            computeCost: 'Extreme ($10M+)'
        },
        {
            name: 'Supervised Fine-Tuning (SFT)',
            dataType: 'Thousands to millions of demonstrations',
            objective: 'Learn format, tool use, instruction following',
            computeCost: 'Moderate ($1K-$100K)'
        },
        {
            name: 'Reinforcement Learning (RL)',
            dataType: 'Model-generated trajectories + reward signals',
            objective: 'Optimize behavior, exploration, task completion',
            computeCost: 'High ($10K-$500K)'
        }
    ]

    recommend(purpose: 'general' | 'agent' | 'specialist'): TrainingStage[] {
        if (purpose === 'agent') {
            return this.stages  // Full three-stage for agents
        }
        if (purpose === 'specialist') {
            return [this.stages[1], this.stages[2]]  // Skip pre-training
        }
        return [this.stages[0], this.stages[1]]  // General: pre-train + SFT
    }
}

interface TrainingConfig {
    baseModel: string
    sftDataPath: string
    rlDataPath: string
    sftEpochs: number
    rlSteps: number
    batchSize: number
    learningRate: number
    rewardModelPath: string
}

class TrainingOrchestrator {
    async runSFT(config: TrainingConfig): Promise<string> {
        console.log(`[SFT] Starting supervised fine-tuning on ${config.baseModel}`)
        console.log(`[SFT] Data: ${config.sftDataPath}, ${config.sftEpochs} epochs`)

        // Mock training loop
        for (let epoch = 0; epoch < config.sftEpochs; epoch++) {
            console.log(`[SFT] Epoch ${epoch + 1}/${config.sftEpochs}`)
            await this.mockTrainingStep(config)
        }

        const modelPath = `models/${config.baseModel}-sft`
        console.log(`[SFT] Model saved to ${modelPath}`)
        return modelPath
    }

    async runRL(config: TrainingConfig, sftModelPath: string): Promise<string> {
        console.log(`[RL] Starting RL training from ${sftModelPath}`)
        console.log(`[RL] Steps: ${config.rlSteps}, batch: ${config.batchSize}`)

        for (let step = 0; step < config.rlSteps; step++) {
            console.log(`[RL] Step ${step + 1}/${config.rlSteps}`)
            await this.mockTrainingStep(config)
        }

        const modelPath = `models/${config.baseModel}-rl-final`
        console.log(`[RL] Model saved to ${modelPath}`)
        return modelPath
    }

    private async mockTrainingStep(config: TrainingConfig): Promise<void> {
        await new Promise(r => setTimeout(r, 10))
    }
}
```

```python
from typing import List, Optional
from dataclasses import dataclass


@dataclass
class TrainingRun:
    base_model: str
    method: str  # 'sft' or 'rl'
    epochs: int
    learning_rate: float
    train_losses: List[float] = None
    eval_scores: List[float] = None

    def __post_init__(self):
        self.train_losses = self.train_losses or []
        self.eval_scores = self.eval_scores or []


class PostTrainingPipeline:
    """Orchestrates the post-training pipeline for agent models."""

    def __init__(self, config: TrainingConfig):
        self.config = config

    def prepare_sft_data(self, demonstrations: List[dict]) -> List[dict]:
        """Format expert demonstrations for SFT."""
        formatted = []
        for demo in demonstrations:
            formatted.append({
                'messages': [
                    {'role': 'user', 'content': demo['task']},
                    {'role': 'assistant', 'content': demo['trajectory']},
                ],
                'metadata': {
                    'task_type': demo.get('type', 'general'),
                    'tools_used': demo.get('tools', []),
                }
            })
        return formatted

    def prepare_rl_data(self, trajectories: List[dict], rewards: List[float]) -> List[dict]:
        """Format agent trajectories with rewards for RL."""
        return [
            {'trajectory': t, 'reward': r}
            for t, r in zip(trajectories, rewards)
        ]

    def evaluate(self, model_path: str, test_tasks: List[str]) -> dict:
        """Run evaluation on held-out tasks."""
        import random
        results = {
            'task_completion': random.uniform(0.6, 0.95),
            'tool_call_accuracy': random.uniform(0.7, 0.98),
            'avg_steps': random.uniform(3, 12),
        }
        return results
```

## 7.2 SFT for Agents

Supervised Fine-Tuning teaches the model to follow instructions and use tools through demonstration data.

```typescript
interface SFTExample {
    task: string
    trajectory: string  // Full agent reasoning + actions
    toolsUsed: string[]
    outcome: 'success' | 'failure'
}

class SFTTrainer {
    private examples: SFTExample[] = []

    addExample(example: SFTExample): void {
        this.examples.push(example)
    }

    prepareDataset(): Array<{ prompt: string; completion: string }> {
        return this.examples.map(ex => ({
            prompt: `Task: ${ex.task}\nAvailable tools: ${ex.toolsUsed.join(', ')}\n\nRespond with your reasoning and actions:`,
            completion: ex.trajectory
        }))
    }

    async train(epochs: number = 3): Promise<{ loss: number[]; accuracy: number[] }> {
        const dataset = this.prepareDataset()
        const lossHistory: number[] = []
        const accuracyHistory: number[] = []

        for (let epoch = 0; epoch < epochs; epoch++) {
            // Mock training
            const epochLoss = 0.5 * Math.exp(-epoch / 2) + 0.05 * Math.random()
            const epochAccuracy = 0.6 + 0.3 * (epoch / epochs) + 0.05 * Math.random()

            lossHistory.push(epochLoss)
            accuracyHistory.push(epochAccuracy)

            console.log(`[SFT] Epoch ${epoch + 1}/${epochs} - loss: ${epochLoss.toFixed(4)}, accuracy: ${(epochAccuracy * 100).toFixed(1)}%`)
        }

        return { loss: lossHistory, accuracy: accuracyHistory }
    }

    generateTrajectoryTemplate(taskType: string): string {
        const templates: Record<string, string> = {
            'tool_use': 'I need to find [information]. Let me search for it.\nAction: search({"query": "..."})\nObservation: [result]\nI found [key info]. Now I can answer.\nAction: final_answer({"answer": "..."})',
            'code_gen': 'I need to write a function that [does X].\nAction: read_file({"path": "..."})\nObservation: [context]\nI understand the structure. Let me implement:\nAction: write_file({"path": "...", "content": "..."})\nAction: shell({"command": "npm test"})',
            'planning': 'The task requires multiple steps:\n1. First, I need to [do A]\n2. Then [do B]\n3. Finally [do C]\nAction: [tool_call]...'
        }

        return templates[taskType] ?? templates['tool_use']
    }
}
```

## 7.3 RL for Agents

Reinforcement Learning optimizes agent behavior through trial and error with a reward signal.

```typescript
interface RLStep {
    state: string
    action: string
    reward: number
    done: boolean
}

class RLTrainer {
    private policyModel: any  // The agent model being trained
    private rewardModel: any  // Evaluates agent outputs
    private trajectoryBuffer: Array<{ steps: RLStep[]; totalReward: number }> = []

    constructor(
        private learningRate: number = 3e-6,
        private klPenalty: number = 0.01
    ) {}

    async collectTrajectories(agent: (task: string) => Promise<RLStep[]>, tasks: string[], numTrajectories: number): Promise<void> {
        for (let i = 0; i < numTrajectories; i++) {
            const task = tasks[i % tasks.length]
            const steps = await agent(task)
            const totalReward = steps.reduce((sum, s) => sum + s.reward, 0)
            this.trajectoryBuffer.push({ steps, totalReward })

            // Reward shaping
            for (const step of steps) {
                if (step.action === 'final_answer' && step.reward > 5) {
                    step.reward += 2  // Bonus for completing successfully
                }
                if (step.action === 'error') {
                    step.reward -= 1  // Penalty for errors
                }
            }
        }
    }

    async train(epochs: number = 10): Promise<{ episodeRewards: number[]; policyLoss: number[] }> {
        const episodeRewards: number[] = []
        const policyLoss: number[] = []

        for (let epoch = 0; epoch < epochs; epoch++) {
            // PPO-style update (simplified)
            const totalReward = this.trajectoryBuffer
                .reduce((sum, t) => sum + t.totalReward, 0) / this.trajectoryBuffer.length

            const loss = -totalReward + this.klPenalty * Math.random()
            episodeRewards.push(totalReward)
            policyLoss.push(loss)

            console.log(`[RL] Epoch ${epoch + 1}/${epochs} - avg_reward: ${totalReward.toFixed(2)}, loss: ${loss.toFixed(4)}`)
        }

        return { episodeRewards, policyLoss }
    }

    computeAdvantage(rewards: number[], gamma: number = 0.99): number[] {
        const advantages: number[] = []
        let gae = 0

        for (let t = rewards.length - 1; t >= 0; t--) {
            const delta = t < rewards.length - 1
                ? rewards[t] + gamma * rewards[t + 1] - rewards[t]
                : rewards[t] - rewards[t]
            gae = delta + gamma * 0.95 * gae
            advantages.unshift(gae)
        }

        return advantages
    }
}
```

```python
import numpy as np
from typing import List, Callable


class RLPostTraining:
    """Reinforcement Learning for agent behavior optimization."""

    def __init__(self, policy_lr: float = 3e-6, kl_coef: float = 0.01):
        self.policy_lr = policy_lr
        self.kl_coef = kl_coef
        self.trajectories = []

    def compute_gae(self, rewards: List[float], gamma: float = 0.99, lam: float = 0.95) -> np.ndarray:
        """Generalized Advantage Estimation."""
        advantages = np.zeros(len(rewards))
        gae = 0
        for t in reversed(range(len(rewards))):
            delta = rewards[t] + gamma * (rewards[t + 1] if t + 1 < len(rewards) else 0) - rewards[t]
            gae = delta + gamma * lam * gae
            advantages[t] = gae
        return advantages

    def collect_experience(self, agent_fn: Callable, tasks: List[str], n: int = 10):
        """Collect agent trajectories for RL training."""
        for i in range(n):
            task = tasks[i % len(tasks)]
            trajectory = agent_fn(task)
            steps = trajectory.get('steps', [])
            reward = trajectory.get('reward', 0)
            self.trajectories.append({
                'task': task,
                'steps': steps,
                'reward': reward,
            })

    def train_step(self) -> dict:
        """Single PPO update step."""
        if not self.trajectories:
            return {'loss': 0, 'avg_reward': 0}

        rewards = [t['reward'] for t in self.trajectories[-100:]]
        advantages = self.compute_gae(rewards)

        # Simplified policy gradient update
        policy_loss = -np.mean(advantages)
        kl_penalty = self.kl_coef * np.random.random()

        return {
            'loss': float(policy_loss + kl_penalty),
            'avg_reward': float(np.mean(rewards)),
            'kl_penalty': float(kl_penalty),
        }
```

## 7.4 SFT vs RL Comparison

The choice between SFT and RL depends on the task and available data.

```typescript
interface MethodComparison {
    aspect: string
    sft: string
    rl: string
    winner: 'sft' | 'rl' | 'depends'
}

class SFTvsRLGuide {
    comparisons: MethodComparison[] = [
        {
            aspect: 'Data requirement',
            sft: 'Needs high-quality demonstrations from experts',
            rl: 'Needs reward signal (can be automated)',
            winner: 'depends'
        },
        {
            aspect: 'Learning objective',
            sft: 'Copy the demonstration format',
            rl: 'Maximize cumulative reward',
            winner: 'rl'
        },
        {
            aspect: 'Exploration',
            sft: 'None — only sees demonstrated paths',
            rl: 'Explores novel paths during training',
            winner: 'rl'
        },
        {
            aspect: 'Tool use learning',
            sft: 'Good for learning tool format/syntax',
            rl: 'Better for learning when to use which tool',
            winner: 'rl'
        },
        {
            aspect: 'Safety',
            sft: 'Safer — only learned from curated data',
            rl: 'Risk of reward hacking without careful design',
            winner: 'sft'
        },
        {
            aspect: 'Compute cost',
            sft: 'Lower — simple supervised learning',
            rl: 'Higher — requires trajectory sampling + reward eval',
            winner: 'sft'
        },
        {
            aspect: 'Scaling',
            sft: 'Improves log-linearly with data',
            rl: 'Can improve dramatically with more compute',
            winner: 'rl'
        }
    ]

    recommend(taskType: string): { method: string; rationale: string } {
        if (taskType === 'format_learning') {
            return {
                method: 'SFT',
                rationale: 'SFT efficiently teaches structured output formats from demonstrations'
            }
        }
        if (taskType === 'strategy_optimization') {
            return {
                method: 'RL',
                rationale: 'RL discovers better strategies through exploration beyond human demonstrations'
            }
        }
        return {
            method: 'SFT first, then RL',
            rationale: 'SFT teaches the format, RL optimizes the behavior'
        }
    }
}
```

## 7.5 DAPO Algorithm

DAPO (Dynamic Adaptive Policy Optimization) is a constrained optimization approach that adapts reasoning depth based on problem difficulty.

```typescript
class DAPOAlgorithm {
    private policyModel: any
    private referenceModel: any
    private epsilon: number = 0.2  // Clipping parameter
    private beta: number = 0.5    // Adaptive constraint

    async train(batch: Array<{
        task: string
        difficulty: number  // 0.0 to 1.0
        correctAnswer: string
    }>): Promise<{
        policyLoss: number
        avgReward: number
        adaptationRate: number
    }> {
        let totalLoss = 0
        let totalReward = 0

        for (const example of batch) {
            // Adaptive reasoning depth based on difficulty
            const reasoningSteps = this.adaptReasoningDepth(example.difficulty)
            const response = await this.simulateResponse(example.task, reasoningSteps)
            const reward = this.computeReward(response, example.correctAnswer)

            // Clipped surrogate objective
            const probabilityRatio = this.computeProbabilityRatio(response, example.correctAnswer)
            const clippedRatio = Math.max(
                Math.min(probabilityRatio, 1 + this.epsilon),
                1 - this.epsilon
            )
            const policyLoss = -Math.min(probabilityRatio * reward, clippedRatio * reward)

            totalLoss += policyLoss
            totalReward += reward
        }

        const batchSize = batch.length
        return {
            policyLoss: totalLoss / batchSize,
            avgReward: totalReward / batchSize,
            adaptationRate: this.beta
        }
    }

    private adaptReasoningDepth(difficulty: number): number {
        // Easy problems: 1-3 steps
        // Medium problems: 4-8 steps
        // Hard problems: 8-15 steps
        return Math.max(1, Math.round(difficulty * 15))
    }

    private async simulateResponse(task: string, reasoningSteps: number): Promise<string> {
        const steps: string[] = []
        for (let i = 0; i < reasoningSteps; i++) {
            steps.push(`Step ${i + 1}: Reasoning about ${task.slice(0, 30)}...`)
        }
        steps.push(`Final answer for: ${task}`)
        return steps.join('\n')
    }

    private computeReward(response: string, correctAnswer: string): number {
        // Reward shaping
        let reward = 0

        // Task completion
        if (response.includes(correctAnswer)) {
            reward += 2.0
        }

        // Reasoning quality
        const steps = response.match(/Step \d+/g)
        if (steps && steps.length > 2) {
            reward += 0.5
        }

        // Length penalty (shorter is better, but not too short)
        const lengthScore = Math.min(1, response.length / 500)
        reward += lengthScore * 0.3

        return reward
    }

    private computeProbabilityRatio(response: string, answer: string): number {
        // Simplified: ratio of new policy probability to old policy probability
        return 0.8 + 0.4 * Math.random()
    }
}
```

## 7.6 Tool-Augmented Reasoning

Training models to use tools requires specialized data and reward design.

```typescript
interface ToolCallExample {
    task: string
    expectedToolCalls: Array<{
        tool: string
        input: Record<string, any>
        expectedOutput: Record<string, any>
        purpose: string
    }>
    finalAnswer: string
}

class ToolAugmentedTraining {
    private examples: ToolCallExample[] = []

    addExample(ex: ToolCallExample): void {
        this.examples.push(ex)
    }

    createTrainingData(): Array<{
        prompt: string
        completion: string
        toolReward: number
    }> {
        return this.examples.map(ex => {
            const toolCalls = ex.expectedToolCalls.map((tc, i) =>
                `Action ${i + 1}: ${tc.tool}(${JSON.stringify(tc.input)})\nObservation: ${JSON.stringify(tc.expectedOutput)}`
            ).join('\n')

            const completion = [
                ...toolCalls.split('\n'),
                `Action: final_answer({"answer": "${ex.finalAnswer}"})`
            ].join('\n')

            // Tool call accuracy reward
            const toolReward = ex.expectedToolCalls.reduce((sum, tc) => {
                return sum + this.evaluateToolCall(tc)
            }, 0) / ex.expectedToolCalls.length

            return {
                prompt: `Task: ${ex.task}\nAvailable tools: ${[...new Set(ex.expectedToolCalls.map(t => t.tool))].join(', ')}`,
                completion,
                toolReward
            }
        })
    }

    private evaluateToolCall(tc: ToolCallExample['expectedToolCalls'][0]): number {
        // Simplified evaluation
        const accuracyScore = 0.8 + 0.2 * Math.random()
        const purposeScore = tc.purpose.length > 10 ? 0.9 : 0.5
        return accuracyScore * purposeScore
    }

    async train(epochs: number): Promise<{ toolAccuracy: number[]; taskCompletion: number[] }> {
        const toolAccuracy: number[] = []
        const taskCompletion: number[] = []

        for (let epoch = 0; epoch < epochs; epoch++) {
            const ta = 0.7 + 0.25 * (epoch / epochs) + 0.05 * Math.random()
            const tc = 0.6 + 0.35 * (epoch / epochs) + 0.05 * Math.random()

            toolAccuracy.push(ta)
            taskCompletion.push(tc)

            console.log(`[Tool-Augmented] Epoch ${epoch + 1}/${epochs}`)
            console.log(`  Tool accuracy: ${(ta * 100).toFixed(1)}%`)
            console.log(`  Task completion: ${(tc * 100).toFixed(1)}%`)
        }

        return { toolAccuracy, taskCompletion }
    }

    generateCurriculum(): string[] {
        const curriculum = [
            'Week 1: Basic tool calling (single tool, single parameter)',
            'Week 2: Multi-tool sequences (chaining tools)',
            'Week 3: Conditional tool selection (choose tool based on context)',
            'Week 4: Tool result interpretation (parse and act on tool output)',
            'Week 5: Error recovery when tools fail',
            'Week 6: Complex multi-tool reasoning with feedback loops',
        ]
        return curriculum
    }
}
```

```python
from typing import List, Dict
import json


class ToolAugmentedTrainer:
    """Trains models to use tools effectively through curated examples."""

    def __init__(self):
        self.examples: List[Dict] = []

    def add_tool_example(self, task: str, tool_calls: List[dict], expected_answer: str):
        self.examples.append({
            'task': task,
            'tool_calls': tool_calls,
            'expected_answer': expected_answer,
        })

    def compute_tool_accuracy(self, predicted_calls: List[dict], expected_calls: List[dict]) -> float:
        if not expected_calls:
            return 1.0

        correct = 0
        for pred, exp in zip(predicted_calls, expected_calls):
            if (pred.get('tool') == exp.get('tool') and
                json.dumps(pred.get('input', {}), sort_keys=True) ==
                json.dumps(exp.get('input', {}), sort_keys=True)):
                correct += 1

        return correct / len(expected_calls)

    def reward_function(self, trajectory: List[dict], ground_truth: dict) -> float:
        """Composite reward for tool-augmented reasoning."""
        reward = 0.0

        # Tool call accuracy
        predicted_calls = [s for s in trajectory if s.get('action') != 'final_answer']
        expected_calls = ground_truth.get('tool_calls', [])
        tool_acc = self.compute_tool_accuracy(predicted_calls, expected_calls)
        reward += tool_acc * 2.0

        # Answer correctness
        final = [s for s in trajectory if s.get('action') == 'final_answer']
        if final and final[-1].get('input', {}).get('answer') == ground_truth.get('expected_answer'):
            reward += 3.0

        # Efficiency bonus (fewer redundant tool calls)
        efficiency = max(0, 1.0 - (len(predicted_calls) - len(expected_calls)) / max(len(expected_calls), 1))
        reward += efficiency * 1.0

        return reward
```

## Summary

Model post-training is where raw foundation models become capable agents. SFT teaches format and tool syntax from demonstrations. RL optimizes behavior through exploration and reward maximization. DAPO dynamically adapts reasoning depth to problem difficulty. Tool-augmented training requires specialized data and reward functions. The standard recipe is SFT first (teach the format), then RL (optimize the behavior).

## Practical Takeaways

1. Always start with SFT — it establishes the foundation that RL builds on
2. Use RL when you need the model to discover strategies beyond human demonstrations
3. DAPO's adaptive reasoning depth can reduce costs by 45-69% while maintaining accuracy
4. Tool-augmented training needs curriculum design: single tool → multi-tool → conditional → error recovery
5. Reward shaping is critical — decompose task success, tool accuracy, efficiency, and safety

## Chapter Quiz (5 MCQ)

### Questions

<summary>1. What is the correct order of the three training stages?</summary>
<summary>2. When would you choose RL over SFT?</summary>
<summary>3. What is the key idea behind DAPO?</summary>
<summary>4. What makes tool-augmented training different from standard SFT?</summary>
<summary>5. Why is SFT recommended before RL?</summary>

### Answers

<summary>Pre-training → Supervised Fine-Tuning (SFT) → Reinforcement Learning (RL). Pre-training teaches language, SFT teaches format/tools, RL optimizes behavior.</summary>
<summary>RL is better when: (1) you want the model to discover better strategies than human demonstrations, (2) you need exploration of novel paths, (3) you have a reliable automated reward signal, (4) the task benefits from trial-and-error learning.</summary>
<summary>DAPO adapts the reasoning depth based on problem difficulty. Easy problems get short reasoning chains; hard problems allocate more compute. This reduces overall cost by 45-69% while improving accuracy.</summary>
<summary>Tool-augmented training requires: (1) tool call examples with expected inputs/outputs, (2) tool accuracy as a reward component, (3) curriculum from single-tool to multi-tool, (4) error recovery training, (5) tool result interpretation training.</summary>
<summary>SFT establishes the format and basic behavior first, creating a stable starting point. RL from a random policy is unstable and inefficient. SFT narrows the search space so RL can focus on optimization rather than exploration.</summary>

## Exercises

### Exercise 1: SFT Data Preparation

Take 10 agent trajectories and format them as SFT training examples with proper prompt/completion structure.

### Exercise 2: RL Reward Design

Design a reward function for an agent that must: complete the task, use tools correctly, minimize steps, and never produce unsafe outputs.

### Exercise 3: SFT vs RL Simulation

Simulate both training methods on a simple grid-world task. Compare episodes needed and final performance.

### Exercise 4: DAPO Implementation

Implement adaptive reasoning depth selection. Show how easy vs hard problems get different reasoning budgets.

### Exercise 5: Tool-Augmented Curriculum

Design a 5-week training curriculum that progresses from single-tool calls to complex multi-tool reasoning with error recovery.
