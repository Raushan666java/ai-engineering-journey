# AI Developer Toolkits & Workflows

## Learning Objectives

| LO | Description |
|----|-------------|
| LO1 | Use Claude Code and OpenAI Codex CLI as terminal-based coding agents |
| LO2 | Build visual AI agent workflows with n8n's AI Agent node and code nodes |
| LO3 | Design multi-step automation pipelines in Activepieces |
| LO4 | Implement streaming AI chat with tool calling using Vercel AI SDK |
| LO5 | Choose the right developer toolkit for a given AI integration task |

## Introduction

Understanding ai developer toolkits workflows is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering ai developer toolkits workflows.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 3.1 | Claude Code | Anthropic's terminal coding agent, MCP, Computer Use |
| 3.2 | OpenAI Codex CLI | Open-source coding agent with sandbox execution |
| 3.3 | n8n | Visual AI agent workflows, 1500+ integrations, code nodes |
| 3.4 | Activepieces | Open-source Zapier alternative with AI capabilities |
| 3.5 | Vercel AI SDK | Streaming AI primitives for web applications |

## Chapter Roadmap

```mermaid
flowchart LR
    subgraph Coding[AI Coding Agents]
        CC[Claude Code<br/>Terminal Agent]
        CX[Codex CLI<br/>Sandboxed Coding]
    end
    subgraph Workflow[Workflow Automation]
        N8[n8n<br/>Visual AI Workflows]
        AP[Activepieces<br/>Open-source Auto]
    end
    subgraph Web[Web AI Tools]
        VAS[Vercel AI SDK<br/>Streaming + Tools]
    end
    subgraph Integration[Integration Layer]
        API[External APIs]
        DB[(Database)]
        LLM[LLM Providers]
    end
    Coding --> Workflow
    Workflow --> Web
    Coding --> Integration
    Workflow --> Integration
    Web --> Integration
```text

## 3.1 Claude Code — Terminal Coding Agent

Claude Code (by Anthropic) is an agentic coding tool that runs in your terminal. It understands your codebase, executes shell commands, edits files, manages git branches, and handles complex multi-step engineering tasks — all through natural language conversations.

**Installation**:

```bash
## macOS / Linux
curl -fsSL https://claude.ai/install.sh | bash

## Windows
irm https://claude.ai/install.ps1 | iex

## Homebrew
brew install --cask claude-code
```text

```typescript
interface ClaudeCodeConfig {
    projectDir: string
    apiKey: string
    maxTokens?: number
}

interface ClaudeCodeResult {
    output: string
    filesModified: string[]
    commandsRun: string[]
    exitCode: number
}

class ClaudeCodeSession {
    private config: ClaudeCodeConfig
    private conversation: { role: string; content: string }[] = []

    constructor(config: ClaudeCodeConfig) {
        this.config = config
    }

    async plan(task: string): Promise<string> {
        const response = await this.send(`Plan the implementation for: ${task}\n
List the files to create/modify, the approach, and any risks.`)
        return response
    }

    async implement(task: string): Promise<ClaudeCodeResult> {
        const plan = await this.plan(task)
        const execution = await this.send(`Now implement the plan. ${task}`)
        return {
            output: execution,
            filesModified: this.extractFilePaths(execution),
            commandsRun: this.extractCommands(execution),
            exitCode: 0
        }
    }

    async review(codePath: string): Promise<string> {
        return this.send(`Review the code in ${codePath} for bugs, security issues, and improvements.`)
    }

    private async send(message: string): Promise<string> {
        const res = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.config.apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: this.config.maxTokens || 8192,
                messages: [...this.conversation, { role: 'user', content: message }]
            })
        })
        const data = await res.json()
        const reply = data.content[0].text
        this.conversation.push({ role: 'user', content: message })
        this.conversation.push({ role: 'assistant', content: reply })
        return reply
    }

    private extractFilePaths(text: string): string[] {
        const regex = /[\w/.-]+\.[a-z]+/g
        return [...new Set(text.match(regex) || [])]
            .filter(f => /\.(ts|js|py|rs|go|md|json|yaml)$/i.test(f))
    }

    private extractCommands(text: string): string[] {
        const regex = /```(?:bash|shell)\n([\s\S]*?)```/g
        const commands: string[] = []
        let match
        while ((match = regex.exec(text)) !== null) {
            commands.push(match[1].trim())
        }
        return commands
    }
}
```text


## Overview
### MCP Integration

Claude Code supports the Model Context Protocol (MCP), allowing it to use external tools like databases, APIs, and file systems through a standardized interface:

```typescript
interface MCPServerConfig {
    command: string
    args: string[]
    env?: Record<string, string>
}

class MCPClient {
    private servers: Map<string, MCPServerConfig> = new Map()

    registerServer(name: string, config: MCPServerConfig): void {
        this.servers.set(name, config)
    }

    async callTool(serverName: string, toolName: string, args: Record<string, any>): Promise<any> {
        const server = this.servers.get(serverName)
        if (!server) throw new Error(`MCP server '${serverName}' not found`)
        const res = await fetch(`http://localhost:9090/mcp/${serverName}/${toolName}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(args)
        })
        return res.json()
    }
}
```text

Claude Code is ideal for complex multi-file changes, refactoring, and debugging — tasks that require understanding the full codebase context.

## 3.2 OpenAI Codex CLI

OpenAI's Codex CLI is an open-source coding agent alternative to Claude Code. It runs in a sandboxed environment, can execute code safely, and integrates with the OpenAI API for the underlying LLM intelligence.

```typescript
interface CodexCLIConfig {
    model?: string
    temperature?: number
    sandbox?: 'local' | 'docker' | 'e2b'
}

interface CodexTask {
    description: string
    files: { path: string; content: string }[]
    testCommand?: string
}

class CodexAgent {
    private config: CodexCLIConfig
    private apiKey: string

    constructor(config: CodexCLIConfig) {
        this.config = config
        this.apiKey = process.env.OPENAI_API_KEY || ''
    }

    async code(task: CodexTask): Promise<{ files: { path: string; content: string }[]; testsPassed: boolean }> {
        const systemPrompt = `You are Codex CLI, an AI coding agent.
You will receive a task description and existing files.
Generate or modify files to complete the task.
Return your changes as a JSON array of {path, content} objects.`

        const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this.apiKey}` },
            body: JSON.stringify({
                model: this.config.model || 'gpt-5.5-codex',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: this.formatTask(task) }
                ],
                temperature: this.config.temperature || 0.2,
                response_format: { type: 'json_object' }
            })
        })
        const data = await res.json()
        const result = JSON.parse(data.choices[0].message.content)
        const files = result.files || result.changes || []
        let testsPassed = true
        if (task.testCommand) {
            testsPassed = await this.runTests(task.testCommand, files)
        }
        return { files, testsPassed }
    }

    async iterate(task: CodexTask, maxIterations = 3): Promise<{ files: { path: string; content: string }[]; testsPassed: boolean }> {
        for (let i = 0; i < maxIterations; i++) {
            const result = await this.code(task)
            if (result.testsPassed) return result
            task.files = result.files
        }
        return this.code(task)
    }

    private formatTask(task: CodexTask): string {
        const files = task.files.map(f => `--- ${f.path} ---\n${f.content}`).join('\n\n')
        return `Task: ${task.description}\n\nExisting files:\n${files}\n\n${task.testCommand ? `Tests: ${task.testCommand}` : ''}`
    }

    private async runTests(command: string, files: { path: string; content: string }[]): Promise<boolean> {
        try {
            const proc = await this.sandboxExec(command)
            return proc === 0
        } catch {
            return false
        }
    }

    private async sandboxExec(command: string): Promise<number> {
        console.log(`[Codex Sandbox] Running: ${command}`)
        return 0
    }
}
```text

Codex CLI's key advantage is its open-source nature and sandboxed execution environment, making it suitable for automated CI/CD pipelines and safe code generation at scale.

## 3.3 n8n — Visual AI Agent Workflows

n8n (197k+ stars) is a fair-code workflow automation platform with native AI capabilities. Unlike traditional automation tools (Zapier, Make), n8n provides a full AI Agent node backed by LangChain, allowing you to build autonomous agent pipelines with tool use, memory, and multi-step reasoning — all visually.

```typescript
interface N8nNodeConfig {
    type: string
    position: [number, number]
    parameters: Record<string, any>
}

interface N8nConnection {
    from: { node: string; output: string }
    to: { node: string; input: string }
}

interface N8nWorkflow {
    name: string
    nodes: N8nNodeConfig[]
    connections: N8nConnection[]
}

class N8nWorkflowBuilder {
    private nodes: N8nNodeConfig[] = []
    private connections: N8nConnection[] = []

    addTrigger(type: 'webhook' | 'schedule' | 'email', config: Record<string, any>): string {
        const id = `node_${this.nodes.length}`
        this.nodes.push({ type: `n8n-nodes-base.${type}`, position: [0, this.nodes.length * 200], parameters: config })
        return id
    }

    addAiAgent(name: string, config: {
        model: string
        systemPrompt: string
        tools: string[]
        memory?: 'buffer' | 'summary' | 'vector'
    }): string {
        const id = `node_${this.nodes.length}`
        this.nodes.push({
            type: '@n8n/n8n-nodes-langchain.aiAgent',
            position: [400, this.nodes.length * 200],
            parameters: {
                agentName: name,
                model: config.model,
                systemPrompt: config.systemPrompt,
                memory: config.memory || 'buffer',
                tools: config.tools
            }
        })
        return id
    }

    addCodeNode(name: string, code: string, language: 'javaScript' | 'python'): string {
        const id = `node_${this.nodes.length}`
        this.nodes.push({
            type: 'n8n-nodes-base.code',
            position: [800, this.nodes.length * 200],
            parameters: { language, code }
        })
        return id
    }

    addTool(name: string, type: 'httpRequest' | 'search' | 'database' | 'custom', config: Record<string, any>): string {
        const id = `node_${this.nodes.length}`
        this.nodes.push({
            type: `n8n-nodes-base.${type === 'httpRequest' ? 'httpRequest' : type}`,
            position: [1200, this.nodes.length * 200],
            parameters: config
        })
        return id
    }

    connect(fromId: string, toId: string, fromOutput = 'main', toInput = 'main'): void {
        this.connections.push({
            from: { node: fromId, output: fromOutput },
            to: { node: toId, input: toInput }
        })
    }

    build(name: string): N8nWorkflow {
        return { name, nodes: this.nodes, connections: this.connections }
    }

    exportJson(name: string): string {
        return JSON.stringify(this.build(name), null, 2)
    }
}
```text

### Example: Customer Support AI Agent Workflow

```typescript
class CustomerSupportWorkflow {
    static create(): string {
        const builder = new N8nWorkflowBuilder()
        const trigger = builder.addTrigger('webhook', { path: 'support-ticket', options: { method: 'POST' } })
        const classifier = builder.addAiAgent('Ticket Classifier', {
            model: 'gpt-4o',
            systemPrompt: 'Classify the incoming support ticket into: billing, technical, account, or general. Return JSON with category and priority.',
            tools: ['memory'],
            memory: 'buffer'
        })
        const codeNode = builder.addCodeNode('Route Ticket',
            `const category = $json.category;
switch(category) {
  case 'billing': return { channel: 'billing_team' };
  case 'technical': return { channel: 'tech_team' };
  default: return { channel: 'general' };
}`,
            'javaScript'
        )
        const searchTool = builder.addTool('Knowledge Base', 'httpRequest', {
            url: 'https://api.kb.internal/search',
            method: 'POST',
            body: { query: '={{ $json.category }}' }
        })
        builder.connect(trigger, classifier)
        builder.connect(classifier, codeNode)
        builder.connect(codeNode, searchTool)
        return builder.exportJson('Customer Support AI Agent')
    }
}
```text

n8n's AI Agent node can use any n8n node as a tool — database queries, HTTP requests, file operations, even other AI agents. This makes it the most flexible platform for building visual AI workflows without writing everything from scratch.

## 3.4 Activepieces

Activepieces (30k+ stars) is the fastest-growing open-source alternative to Zapier/Make. It offers a clean visual builder with AI capabilities including LLM nodes, classification, extraction, and vector store integration.

```typescript
interface ActivepiecePiece {
    name: string
    version: string
    actions: PieceAction[]
    triggers: PieceTrigger[]
}

interface PieceAction {
    name: string
    displayName: string
    config: Record<string, any>
}

interface ActivepieceFlow {
    displayName: string
    trigger: { type: string; settings: Record<string, any> }
    steps: FlowStep[]
}

interface FlowStep {
    type: 'piece' | 'router' | 'code' | 'loop'
    settings: Record<string, any>
    nextAction?: FlowStep
}

class ActivepiecesBuilder {
    private flow: ActivepieceFlow = { displayName: '', trigger: { type: '', settings: {} }, steps: [] }

    setTrigger(type: 'webhook' | 'schedule' | 'email', settings: Record<string, any>): this {
        this.flow.trigger = { type, settings }
        return this
    }

    addAiAction(name: string, model: string, prompt: string, responseType: 'text' | 'json' = 'text'): this {
        this.flow.steps.push({
            type: 'piece',
            settings: { piece: '@activepieces/piece-openai', action: 'ask-llm', input: { model, prompt, responseType } }
        })
        return this
    }

    addCode(code: string, language: 'javascript' | 'typescript' = 'javascript'): this {
        this.flow.steps.push({
            type: 'code',
            settings: { language, code, input: {} }
        })
        return this
    }

    addRouter(conditions: { field: string; operator: string; value: any }[]): this {
        this.flow.steps.push({
            type: 'router',
            settings: { conditions, branches: [] }
        })
        return this
    }

    build(): ActivepieceFlow {
        return this.flow
    }
}
```text

Activepieces excels at lightweight automation — connecting Slack, Gmail, Notion, and databases with AI processing steps. It's easier to set up than n8n but less powerful for complex agent workflows.

## 3.5 Vercel AI SDK

The Vercel AI SDK is the standard toolkit for adding streaming AI chat to web applications. It provides React/Vue/Svelte hooks, streaming infrastructure, and tool calling — all framework-agnostic at the core.

```typescript
import { z } from 'zod'

interface AIFunction {
    name: string
    description: string
    parameters: z.ZodObject<any>
    execute: (args: any) => Promise<string>
}

class AIAssistant {
    private functions: Map<string, AIFunction> = new Map()
    private apiKey: string

    constructor() {
        this.apiKey = process.env.OPENAI_API_KEY || ''
    }

    registerFunction(fn: AIFunction): void {
        this.functions.set(fn.name, fn)
    }

    async *streamChat(messages: { role: string; content: string }[]): AsyncGenerator<string> {
        const tools = Array.from(this.functions.values()).map(f => ({
            type: 'function' as const,
            function: {
                name: f.name,
                description: f.description,
                parameters: f.parameters
            }
        }))

        const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this.apiKey}` },
            body: JSON.stringify({
                model: 'gpt-4o',
                messages,
                tools: tools.length > 0 ? tools : undefined,
                stream: true
            })
        })

        const reader = res.body!.getReader()
        const decoder = new TextDecoder()
        let buffer = ''

        while (true) {
            const { done, value } = await reader.read()
            if (done) break
            buffer += decoder.decode(value, { stream: true })
            const lines = buffer.split('\n')
            buffer = lines.pop() || ''
            for (const line of lines) {
                if (line.startsWith('data: ') && line !== 'data: [DONE]') {
                    const json = JSON.parse(line.slice(6))
                    const delta = json.choices?.[0]?.delta
                    if (delta?.content) {
                        yield delta.content
                    }
                    if (delta?.tool_calls) {
                        for (const call of delta.tool_calls) {
                            const result = await this.handleToolCall(call)
                            yield `\n[Tool: ${call.function.name}] ${result}\n`
                        }
                    }
                }
            }
        }
    }

    private async handleToolCall(call: any): Promise<string> {
        const fn = this.functions.get(call.function.name)
        if (!fn) return `Unknown function: ${call.function.name}`
        try {
            const args = JSON.parse(call.function.arguments)
            return await fn.execute(args)
        } catch (e: any) {
            return `Error: ${e.message}`
        }
    }
}
```text

### Stream Chat UI Hook Pattern

```typescript
function useStreamChat() {
    const assistant = new AIAssistant()
    const messages: { role: string; content: string }[] = []

    return {
        async sendMessage(text: string, onChunk: (chunk: string) => void) {
            messages.push({ role: 'user', content: text })
            let fullResponse = ''
            for await (const chunk of assistant.streamChat(messages)) {
                fullResponse += chunk
                onChunk(fullResponse)
            }
            messages.push({ role: 'assistant', content: fullResponse })
        }
    }
}
```text

The Vercel AI SDK is the most popular way to add AI to web applications in 2026. It handles streaming, backpressure, tool calling, and fallbacks with minimal boilerplate.

## Summary

- **Claude Code** and **Codex CLI** are terminal-based coding agents for complex software engineering tasks
- **n8n** provides the most powerful visual AI agent workflow builder with 1500+ integrations
- **Activepieces** offers a lighter-weight open-source automation alternative
- **Vercel AI SDK** is the standard for adding streaming AI chat with tool calling to web apps
- The choice depends on task type: coding (Claude/Codex), workflow (n8n/Activepieces), or web (Vercel AI SDK)

## Practical Takeaways

- Use Claude Code for complex refactoring and debugging; Codex CLI for automated CI/CD code generation
- Build AI agent workflows in n8n first (visual debugging), then migrate to code if needed
- Activepieces is best for simple automations; n8n for complex agent pipelines
- Always use the Vercel AI SDK for web-based AI chat — it handles streaming, tool calls, and errors
- Combine tools: Claude Code generates the code → n8n orchestrates the deployment → Vercel AI SDK powers the frontend

## Chapter Quiz

**Q1:** Which tool provides a visual node-based editor for building AI agent workflows?

A) Claude Code
B) n8n
C) Codex CLI
D) Vercel AI SDK

<details><summary>Answer</summary>B — n8n offers a visual canvas where you connect AI Agent nodes, code nodes, and tool nodes.</details>

**Q2:** Claude Code's primary interface is:

A) A web dashboard
B) A terminal / CLI
C) A mobile app
D) A VS Code extension

<details><summary>Answer</summary>B — Claude Code runs in the terminal as an agentic coding tool.</details>

**Q3:** What makes the Vercel AI SDK the standard for web AI in 2026?

A) It is the only SDK that works with OpenAI
B) It provides framework-agnostic streaming, tool calling, and fallback infrastructure
C) It generates React components automatically
D) It includes a free LLM API

<details><summary>Answer</summary>B — The Vercel AI SDK abstracts streaming, tool calling, error handling, and fallbacks with hooks for React, Vue, and Svelte.</details>

**Q4:** Which tool is best suited for building a multi-step automation that triggers on a Slack message, classifies intent with AI, queries a database, and posts a response?

A) Codex CLI
B) Activepieces
C) Claude Code
D) Vercel AI SDK

<details><summary>Answer</summary>B — Activepieces (or n8n) excels at event-triggered multi-step automations with AI processing.</details>

**Q5:** A key differentiator of n8n's AI Agent node is:

A) It only works with OpenAI
B) Any n8n node can be used as a tool by the AI agent
C) It is the only no-code AI tool available
D) It requires a cloud subscription

<details><summary>Answer</summary>B — n8n's AI Agent can use any of its 1500+ integrations as tools, making it extremely flexible.</details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition1. **Claude Code Refactor**: Write a prompt that asks Claude Code to refactor a TypeScript class with 5 methods into separate modules, then run the refactoring
2. **n8n AI Workflow**: Design an n8n workflow with a webhook trigger → AI Agent (classify) → Code Node (route) → HTTP Request (action) → Slack output
3. **Activepieces Automation**: Build a flow: Gmail trigger (new email) → OpenAI LLM (summarize) → Notion (create page) → Slack (notify)
4. **Vercel AI Chat**: Implement a streaming chat endpoint with 3 registered tools (get_weather, search_docs, calculate) using the AIAssistant class
5. **Comparison Matrix**: Deploy a simple "summarize and post to Slack" pipeline in both n8n and Activepieces. Compare setup time, maintenance, and exte

## Revision Notes

- Key concept 1: Core principle of 23-trending-aiml-platforms
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 23-trending-aiml-platforms. When would you choose one approach over another?
2. Design a system that efficiently handles 23-trending-aiml-platforms at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 23-trending-aiml-platforms. What was your approach and what was the result?
2. How would you explain 23-trending-aiml-platforms to a non-technical stakeholder?

#### Microsoft Style
1. How does 23-trending-aiml-platforms integrate with enterprise systems and cloud architectures?
2. What are the security implications of 23-trending-aiml-platforms?

#### NVIDIA Style
1. How would you optimize 23-trending-aiml-platforms for GPU-accelerated computing?
2. What parallel processing patterns apply to 23-trending-aiml-platforms?

#### AI Startup Style
1. How would you implement 23-trending-aiml-platforms in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 23-trending-aiml-platforms?

### Resume Tips
- **Technical Skills**: List 23-trending-aiml-platforms under relevant technical skills
- **Project Description**: "Implemented 23-trending-aiml-platforms to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 23-trending-aiml-platforms in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 23-trending-aiml-platforms
- [ ] Practice 3-5 problems related to 23-trending-aiml-platforms
- [ ] Prepare 2 real-world examples of using 23-trending-aiml-platforms
- [ ] Know the time/space complexity of common 23-trending-aiml-platforms operations
- [ ] Have questions ready about how the company uses 23-trending-aiml-platformsnsibility
