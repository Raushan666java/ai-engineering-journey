# Agent Platforms — Harness & Orchestration

## Learning Objectives

| LO | Description |
|----|-------------|
| LO1 | Distinguish agent harnesses (OpenClaw, Hermes) from orchestrators (Paperclip, Dify, CrewAI, AutoGen) |
| LO2 | Implement a custom OpenClaw skill with cron scheduling, tools, and persistent memory |
| LO3 | Use Hermes Agent's self-improvement loop to auto-create skills from experience |
| LO4 | Orchestrate a multi-agent company in Paperclip with org charts, budgets, and goal alignment |
| LO5 | Compare Dify, CrewAI, and AutoGen for no-code vs code-first multi-agent patterns |

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 2.1 | OpenClaw | Personal agent harness, SOUL.md, ClawHub, heartbeat cron |
| 2.2 | Hermes Agent | Self-improving, FTS5 memory, subagents, Desktop GUI |
| 2.3 | Paperclip | "Agent company", org charts, budgets, governance |
| 2.4 | Dify | Visual LLM app builder, RAG pipeline, agent workflow |
| 2.5 | CrewAI, AutoGen & Comparison | Code-first multi-agent frameworks |

## Chapter Roadmap

```mermaid
flowchart TD
    subgraph Harness[Agent Harnesses — Run a single agent]
        OC[OpenClaw<br/>Personal, multi-channel, SOUL.md]
        HA[Hermes Agent<br/>Self-improving, learning loop]
    end
    subgraph Orchestrate[Orchestrators — Manage many agents]
        PC[Paperclip<br/>Companies, budgets, governance]
        DF[Dify<br/>Visual app builder, RAG]
        CA[CrewAI<br/>Code-first teams]
        AG[AutoGen<br/>Microsoft multi-agent]
    end
    subgraph Stack[Full Stack]
        LLM[LLM Provider]
        SK[Skills / Tools]
        MEM[Memory]
        CH[Channels]
    end
    Harness --> LLM
    Orchestrate --> Harness
    Harness --> SK
    Harness --> MEM
    Harness --> CH
```

## 2.1 OpenClaw — Personal AI Agent Harness

OpenClaw (346k+ GitHub stars, MIT license, created by Peter Steinberger) is the most-starred open-source project of 2026. It started as Clawdbot in late 2025 and became a phenomenon — a personal AI agent that lives in your messaging apps and executes tasks autonomously.

**Philosophy**: OpenClaw is an **employee** — a single agent that connects to WhatsApp, Telegram, Signal, Slack, Discord, and iMessage through a unified gateway. It maintains persistent memory (MEMORY.md), runs skills on a heartbeat cron, and stores everything as plain Markdown files on your disk.

```typescript
interface SkillConfig {
    name: string
    description: string
    tools: ToolDef[]
    cron?: string
    memoryScope: 'session' | 'persistent'
}

interface ToolDef {
    name: string
    description: string
    exec: 'shell' | 'http' | 'file' | 'script'
    parameters: Record<string, string>
}

interface SkillContext {
    memory: string[]
    conversation: { role: string; content: string }[]
    lastRun: Date | null
}

class OpenClawSkill {
    protected config: SkillConfig
    protected context: SkillContext = { memory: [], conversation: [], lastRun: null }

    constructor(config: SkillConfig) {
        this.config = config
    }

    getName(): string { return this.config.name }

    shouldRun(lastHeartbeat: Date): boolean {
        if (!this.config.cron) return false
        const parts = this.config.cron.split(' ')
        if (parts.length < 2) return false
        const intervalMin = parseInt(parts[0]) || 60
        const elapsed = (Date.now() - lastHeartbeat.getTime()) / 60000
        return elapsed >= intervalMin
    }

    async execute(input: string): Promise<string> {
        this.context.conversation.push({ role: 'user', content: input })
        const result = await this.run(input)
        this.context.conversation.push({ role: 'assistant', content: result })
        this.context.lastRun = new Date()
        if (this.config.memoryScope === 'persistent') {
            await this.writeMemory(result)
        }
        return result
    }

    protected async run(_input: string): Promise<string> {
        throw new Error('Subclasses must implement run()')
    }

    protected async readMemory(): Promise<string[]> {
        try {
            const data = localStorage.getItem(`claw_memory_${this.config.name}`)
            return data ? JSON.parse(data) : []
        } catch { return [] }
    }

    protected async writeMemory(entry: string): Promise<void> {
        this.context.memory.push(entry)
        localStorage.setItem(`claw_memory_${this.config.name}`, JSON.stringify(this.context.memory.slice(-100)))
    }

    getToolDefs(): ToolDef[] { return this.config.tools }
}
```

### Concrete Skill: Morning Briefing

A typical OpenClaw use case — a skill that runs on a cron heartbeat:

```typescript
class MorningBriefingSkill extends OpenClawSkill {
    constructor() {
        super({
            name: 'morning-briefing',
            description: 'Fetches weather, calendar events, and top news each morning',
            cron: '1440 */6 * * *',
            memoryScope: 'persistent',
            tools: [
                { name: 'get_weather', description: 'Get current weather', exec: 'http', parameters: { city: 'string' } },
                { name: 'get_calendar', description: 'Get today\'s calendar events', exec: 'http', parameters: {} },
                { name: 'get_headlines', description: 'Get top news headlines', exec: 'http', parameters: { category: 'string' } }
            ]
        })
    }

    async run(input: string): Promise<string> {
        const previousBriefings = await this.readMemory()
        const weather = await this.callTool('get_weather', { city: 'San Francisco' })
        const calendar = await this.callTool('get_calendar', {})
        const headlines = await this.callTool('get_headlines', { category: 'technology' })
        const summary = [
            `☀️ **Morning Briefing**`,
            `Weather: ${weather}`,
            `📅 Calendar: ${calendar}`,
            `📰 Tech News: ${headlines}`,
            previousBriefings.length > 0 ? `📊 Previous briefings: ${previousBriefings.length}` : ''
        ].filter(Boolean).join('\n\n')
        return summary
    }

    private async callTool(name: string, args: Record<string, any>): Promise<string> {
        const tool = this.config.tools.find(t => t.name === name)
        if (!tool) return `Unknown tool: ${name}`
        const url = `https://api.mock-tool.com/${name}?${new URLSearchParams(args).toString()}`
        try {
            const res = await fetch(url)
            return await res.text()
        } catch {
            return `[${name} returned mock data]`
        }
    }
}
```

The skill registers with the OpenClaw gateway and runs automatically on its cron schedule. All memory is persisted as Markdown on disk — zero cloud dependency.

## 2.2 Hermes Agent — Self-Improving Agent

Hermes Agent (217k+ stars, Nous Research) is the **self-improving agent**. Unlike OpenClaw's static skills, Hermes has a built-in learning loop — it creates new skills from experience, improves existing skills during use, and persists knowledge across sessions via FTS5 search.

```typescript
interface HermesSkill {
    name: string
    version: number
    code: string
    usageCount: number
    successRate: number
    lastImproved: Date
}

interface HermesMemory {
    sessionSummary: string
    keyFacts: string[]
    userPreferences: Record<string, any>
    skillRegistry: HermesSkill[]
}

class HermesAgentClient {
    private skills: Map<string, HermesSkill> = new Map()
    private memory: HermesMemory = { sessionSummary: '', keyFacts: [], userPreferences: {}, skillRegistry: [] }
    private learningEnabled = true

    constructor() {
        this.loadMemory()
    }

    private loadMemory(): void {
        try {
            const data = localStorage.getItem('hermes_memory')
            if (data) this.memory = JSON.parse(data)
        } catch { /* fresh start */ }
    }

    private saveMemory(): void {
        localStorage.setItem('hermes_memory', JSON.stringify(this.memory))
    }

    async runTask(task: string): Promise<string> {
        const existingSkill = this.findBestSkill(task)
        if (existingSkill) {
            try {
                const result = await this.executeSkill(existingSkill, task)
                existingSkill.usageCount++
                existingSkill.successRate = (existingSkill.successRate * (existingSkill.usageCount - 1) + 1) / existingSkill.usageCount
                this.saveMemory()
                return result
            } catch {
                existingSkill.successRate = (existingSkill.successRate * (existingSkill.usageCount - 1)) / Math.max(existingSkill.usageCount, 1)
            }
        }
        const result = await this.generalExecute(task)
        if (this.learningEnabled && this.shouldCreateSkill(task, result)) {
            const newSkill = this.createSkill(task, result)
            this.skills.set(newSkill.name, newSkill)
            if (!this.memory.skillRegistry.find(s => s.name === newSkill.name)) {
                this.memory.skillRegistry.push(newSkill)
            }
            this.saveMemory()
        }
        return result
    }

    spawnSubAgent(task: string, context: string): HermesAgentClient {
        const sub = new HermesAgentClient()
        sub.memory.keyFacts = [...this.memory.keyFacts, `Context: ${context}`]
        sub.learningEnabled = false
        return sub
    }

    private findBestSkill(task: string): HermesSkill | undefined {
        const lower = task.toLowerCase()
        return Array.from(this.skills.values())
            .filter(s => lower.includes(s.name.toLowerCase()))
            .sort((a, b) => b.successRate - a.successRate)[0]
    }

    private async executeSkill(skill: HermesSkill, task: string): Promise<string> {
        const fn = new Function('task', skill.code)
        return fn(task)
    }

    private shouldCreateSkill(task: string, result: string): boolean {
        return task.length > 50 && result.length > 100 && this.skills.size < 10
    }

    private createSkill(task: string, result: string): HermesSkill {
        return {
            name: `auto_skill_${this.skills.size + 1}`,
            version: 1,
            code: `return "Executed: ${task.slice(0, 40)}..."`,
            usageCount: 1,
            successRate: 1.0,
            lastImproved: new Date()
        }
    }

    private async generalExecute(task: string): Promise<string> {
        return `[Hermes] Processed: ${task}`
    }

    queryMemory(query: string): string[] {
        const lower = query.toLowerCase()
        return this.memory.keyFacts.filter(f => f.toLowerCase().includes(lower))
    }
}
```

### Hermes Desktop

Hermes Desktop is an Electron-based GUI (macOS, Windows, Linux) that wraps the Hermes agent in a native window with chat, streaming tool output, file browser, voice input/output, and side-by-side previews. Install with `hermes desktop` from the CLI.

## 2.3 Paperclip — Multi-Agent Orchestration

Paperclip (74k+ stars, launched March 2026, by Nate Herk) solves the problem of managing **many** agents. The mantra: "OpenClaw is an employee — Paperclip is the company." It provides a dashboard where agents are employees with org charts, budgets, goals, and governance.

```typescript
interface CompanyConfig {
    name: string
    mission: string
    budget: number
    agents: AgentConfig[]
    projects: ProjectConfig[]
}

interface AgentConfig {
    id: string
    role: string
    model: string
    budget: number
    soul: string
    heartbeat: string
    tools: string[]
    teamId: string
}

interface ProjectConfig {
    name: string
    goal: string
    deadline: Date
    assignedAgentIds: string[]
    status: 'active' | 'completed' | 'blocked'
}

class PaperclipCompany {
    private config: CompanyConfig
    private issueCounter = 0

    constructor(config: CompanyConfig) {
        this.config = config
    }

    hireAgent(agent: AgentConfig): string {
        this.config.agents.push(agent)
        return agent.id
    }

    assignGoal(project: ProjectConfig): void {
        this.config.projects.push(project)
        for (const agentId of project.assignedAgentIds) {
            const issue = this.createIssue(project.name, `Work on: ${project.goal}`, agentId)
            console.log(`[Paperclip] Issue #${issue.id} assigned to agent ${agentId}`)
        }
    }

    private createIssue(title: string, description: string, assigneeId: string): { id: string; title: string; status: string } {
        this.issueCounter++
        return { id: `ISS-${this.issueCounter}`, title, status: 'open' }
    }

    trackBudget(): { total: number; spent: number; remaining: number } {
        const total = this.config.budget
        const spent = this.config.agents.reduce((sum, a) => sum + a.budget, 0)
        return { total, spent, remaining: total - spent }
    }

    getOrgChart(): string {
        const teams = new Map<string, AgentConfig[]>()
        for (const agent of this.config.agents) {
            const team = teams.get(agent.teamId) || []
            team.push(agent)
            teams.set(agent.teamId, team)
        }
        let chart = `🏢 ${this.config.name}\nMission: ${this.config.mission}\n\n`
        for (const [teamId, members] of teams) {
            chart += `  📁 Team ${teamId}\n`
            for (const m of members) {
                chart += `    👤 ${m.role} (${m.id}) — $${\n                    m.budget}\n`
            }
        }
        return chart
    }
}
```

### Paperclip Agent Config Generator

Paperclip agents are configured with 4 files. This generator produces them:

```typescript
interface AgentConfigFiles {
    soul: string
    heartbeat: string
    agents: string
    tools: string
}

class PaperclipAgentConfig {
    static generate(role: string, goal: string, tools: string[]): AgentConfigFiles {
        return {
            soul: `# SOUL.md — ${role}\n## Identity\nYou are ${role}, working for an AI company.\n## Goal\n${goal}\n## Constraints\nStay within budget. Report blockers immediately.`,
            heartbeat: `# HEARTBEAT.md — Wake Checklist\n1. Check for new issues\n2. Review project status\n3. Execute next action\n4. Update issue tracker\n5. Log progress`,
            agents: `# AGENTS.md — Collaboration\nYou report to: CEO\nYou collaborate with: ${tools.filter(t => t !== role).join(', ') || 'none'}`,
            tools: `# TOOLS.md — Available Tools\n${tools.map(t => `- ${t}: [capability]`).join('\n')}`
        }
    }
}
```

Paperclip's killer feature is **budget governance** — each agent has a spend cap, and the platform auto-pauses agents that exceed it. Combined with goal alignment, this makes Paperclip the standard for teams running multiple concurrent AI agents.

## 2.4 Dify — Visual LLM App Builder

Dify (60k+ stars) is an open-source visual platform for building LLM applications. Unlike OpenClaw (single agent) or Paperclip (agent orchestration), Dify focuses on **applications** — chatbots, AI assistants, RAG pipelines, and agent workflows built through a drag-and-drop interface.

```typescript
interface DifyAppConfig {
    name: string
    mode: 'chat' | 'agent' | 'workflow'
    model: string
    promptTemplate: string
    tools: DifyToolConfig[]
    knowledgeBases: string[]
}

interface DifyToolConfig {
    type: 'builtin' | 'api' | 'code'
    name: string
    config: Record<string, any>
}

class DifyAppBuilder {
    private apps: Map<string, DifyAppConfig> = new Map()

    createApp(config: DifyAppConfig): string {
        this.apps.set(config.name, config)
        return config.name
    }

    async runApp(name: string, input: string): Promise<string> {
        const app = this.apps.get(name)
        if (!app) throw new Error(`App ${name} not found`)
        if (app.mode === 'agent') {
            return this.runAgentMode(app, input)
        }
        return this.runChatMode(app, input)
    }

    private async runChatMode(app: DifyAppConfig, input: string): Promise<string> {
        return `[${app.name}] Response: ${input}`
    }

    private async runAgentMode(app: DifyAppConfig, input: string): Promise<string> {
        let result = `Thinking about: ${input}\n`
        for (const tool of app.tools) {
            result += `  → Using tool: ${tool.name}\n`
        }
        result += `Final answer: ${input} processed.`
        return result
    }
}
```

Dify's key advantage is accessibility — non-developers can build AI apps without writing code, while developers can extend with custom tools and API integrations.

## 2.5 CrewAI, AutoGen & Comparison

| Feature | CrewAI | AutoGen (AG2) | OpenClaw | Paperclip |
|---------|--------|---------------|----------|-----------|
| Stars | 60k+ | 56k+ | 346k+ | 74k+ |
| Approach | Code-first (Python) | Code-first (Python) | Config-first (SOUL.md) | Dashboard-first (React UI) |
| Focus | Role-based agent teams | Multi-agent conversations | Single agent harness | Agent company management |
| Learning Curve | Medium | Medium | Low | Low |
| Best For | Developers building agent teams | Research & complex conversations | Personal automation | Business agent operations |

```typescript
type Framework = 'crewai' | 'autogen' | 'openclaw' | 'paperclip'

interface FrameworkRecommendation {
    framework: Framework
    useCase: string
    complexity: number
    teamSize: number
    codeRequired: boolean
}

class AgentFrameworkSelector {
    private recommendations: FrameworkRecommendation[] = [
        { framework: 'crewai', useCase: 'Task-specific agent teams with defined roles', complexity: 3, teamSize: 5, codeRequired: true },
        { framework: 'autogen', useCase: 'Research, multi-agent conversation, debugging', complexity: 4, teamSize: 4, codeRequired: true },
        { framework: 'openclaw', useCase: 'Single personal agent across messaging channels', complexity: 1, teamSize: 1, codeRequired: false },
        { framework: 'paperclip', useCase: 'Multi-agent business operations with budgets', complexity: 2, teamSize: 10, codeRequired: false }
    ]

    recommend(task: string, teamSize: number, noCode: boolean): FrameworkRecommendation[] {
        return this.recommendations
            .filter(r => r.teamSize >= teamSize)
            .filter(r => !noCode || !r.codeRequired)
            .sort((a, b) => a.complexity - b.complexity)
    }
}
```

**CrewAI** excels at role-based agent teams where each agent has a defined persona (Researcher, Writer, Critic) working on a shared goal. **AutoGen** is more flexible for research-style multi-agent conversations with dynamic agent discovery. Both require Python coding, while OpenClaw and Paperclip offer config-first or UI-first approaches.

## Summary

- **OpenClaw** is the #1 personal agent harness — ideal for a single always-on assistant across messaging channels
- **Hermes Agent** adds a closed learning loop that auto-creates and improves skills from experience
- **Paperclip** orchestrates many agents into a company with org charts, budgets, and goal governance
- **Dify** enables no-code LLM application building with RAG and agent workflows
- **CrewAI/AutoGen** are code-first frameworks for teams needing fine-grained multi-agent control

## Practical Takeaways

- Start with OpenClaw for personal automation, migrate to Paperclip when managing 3+ agents
- Enable Hermes Agent's learning loop for long-running autonomous systems
- Set per-agent budgets in Paperclip to prevent runaway API costs
- Use Dify for prototyping LLM apps without writing code, then migrate to code if needed
- CrewAI is better for structured role-based teams; AutoGen for exploratory multi-agent conversations

## Chapter Quiz

**Q1:** What distinguishes OpenClaw from other agent platforms?

A) It has the largest context window
B) It is a multi-channel personal agent harness with persistent disk-based memory
C) It only supports OpenAI models
D) It requires cloud deployment

<details><summary>Answer</summary>B — OpenClaw connects to WhatsApp, Telegram, Slack, etc. and stores all data as plain Markdown files on disk.</details>

**Q2:** Hermes Agent's self-improvement loop refers to:

A) Automatically updating its own code from GitHub
B) Creating and improving skills based on usage patterns
C) Rewriting its own prompts every hour
D) Migrating to better hardware automatically

<details><summary>Answer</summary>B — Hermes autonomously creates skills from complex tasks and improves their success rate over time.</details>

**Q3:** Paperclip's core value proposition is:

A) Running a single agent faster than OpenClaw
B) Orchestrating multiple AI agents with org charts, budgets, and governance
C) Providing the cheapest LLM API access
D) Building chatbots without code

<details><summary>Answer</summary>B — Paperclip manages agent teams like a company with organizational structure and financial controls.</details>

**Q4:** Which platform is best suited for a non-developer building a custom AI chatbot?

A) CrewAI
B) OpenClaw
C) Dify
D) AutoGen

<details><summary>Answer</summary>C — Dify provides a visual drag-and-drop interface for building LLM applications without coding.</details>

**Q5:** When should you choose CrewAI over Paperclip?

A) When you need a dashboard UI
B) When you need fine-grained Python control over agent roles and interactions
C) When you need multi-channel messaging
D) When you need budget governance

<details><summary>Answer</summary>B — CrewAI offers code-first role-based agent teams for developers who need programmatic control.</details>

## Exercises

1. **OpenClaw Skill**: Create a `DailyDigestSkill` that fetches weather, news, and calendar, runs on a 12-hour cron, and persists a summary to memory
2. **Hermes Sub-Agent**: Spawn a Hermes sub-agent for a specific research task, give it context from the parent agent, and return structured findings
3. **Paperclip Company**: Design a 4-agent company (CEO, Engineer, QA, Marketer) with budgets, assign a project, and print the org chart
4. **Dify Workflow**: Model a customer support triage workflow with classification → knowledge base search → escalation rules using Dify's app configuration DSL
5. **Comparison Report**: Given a scenario (2 developers, 5 agents, $500/month budget, need Slack integration), recommend the optimal platform mix and justify
