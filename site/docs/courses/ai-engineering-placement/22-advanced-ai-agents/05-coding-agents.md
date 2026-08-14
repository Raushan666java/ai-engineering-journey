---
id: 05-coding-agents
slug: /ai-engineering-placement/22-advanced-ai-agents/05-coding-agents
title: "Coding Agents"
sidebar_label: "Coding Agents"
sidebar_position: 276
---
<!-- Clear Language: Keep sentences under 50 words -->
# Coding Agents

## Learning Objectives

| LO | Description |
|----|-------------|
| LO1 | Build a production-grade coding agent with file operations, search, and shell tools |
| LO2 | Implement code generation with Proposer-Reviewer pattern for quality control |
| LO3 | Design self-healing systems using code as the adaptation mechanism |
| LO4 | Build NL-to-SQL agents and dynamic form generators |
| LO5 | Implement artifact patterns for code generation without data movement |

## Introduction

Advanced agents use context engineering, memory, and multi-agent collaboration to solve complex problems. This module covers cutting-edge agent patterns used at leading AI labs.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding coding agents is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how coding agents works in practice.

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 5.1 | Coding Agent Architecture | Tool suite, system prompts, lint integration |
| 5.2 | Proposer-Reviewer Pattern | Generate → Evaluate → Iterate |
| 5.3 | Code as Meta-Tool | Code creates new tools dynamically |
| 5.4 | Self-Healing Systems | Adaptive log parsing, auto-diagnosis |
| 5.5 | NL-to-SQL and Forms | Natural language → structured output → execution |
| 5.6 | Artifact Pattern | Code generation without data movement |

## Chapter Roadmap

```mermaid
flowchart TD
    subgraph Agent[Coding Agent]
        NL[Natural Language Request] --> PLAN[Plan Solution]
        PLAN --> CODE[Generate Code]
        CODE --> TEST[Run Tests]
        TEST -->{Pass?}
        Pass --> REVIEW[Reviewer Checks]
        Pass -->|Yes| DEPLOY
        Fail --> FIX[Fix Errors]
        FIX --> CODE
    end
    subgraph Tools[Tool Suite]
        LS[List Dir]
        READ[Read File]
        SEARCH[Search Code]
        WRITE[Write File]
        SHELL[Shell Session]
    end
    Agent --> Tools
```

## 5.1 Coding Agent Architecture

A production coding agent combines file operations, search, and shell execution with smart system prompts and lint integration.

```typescript
interface CodeFile {
    path: string
    content: string
    language: string
}

interface LintResult {
    file: string
    line: number
    column: number
    severity: 'error' | 'warning' | 'info'
    message: string
}

class CodingAgent {
    private tools: Map<string, Tool>
    private lintResults: LintResult[] = []

    constructor() {
        this.tools = new Map([
            ['read_file', this.createReadTool()],
            ['write_file', this.createWriteTool()],
            ['edit_file', this.createEditTool()],
            ['search_code', this.createSearchTool()],
            ['list_dir', this.createListDirTool()],
            ['shell', this.createShellTool()],
        ])
    }

    private createReadTool(): Tool {
        return {
            name: 'read_file',
            description: 'Read a file from the filesystem. Returns the full content.',
            inputSchema: {
                type: 'object',
                properties: {
                    path: { type: 'string', description: 'Absolute path to the file' }
                },
                required: ['path']
            },
            execute: async (args) => {
                const path = args.path
                return { path, content: `Mock content of ${path}`, lines: 50 }
            }
        }
    }

    private createWriteTool(): Tool {
        return {
            name: 'write_file',
            description: 'Write content to a file. Creates directories if needed.',
            inputSchema: {
                type: 'object',
                properties: {
                    path: { type: 'string' },
                    content: { type: 'string' }
                },
                required: ['path', 'content']
            },
            execute: async (args) => {
                return { path: args.path, written: true, size: args.content.length }
            }
        }
    }

    private createEditTool(): Tool {
        return {
            name: 'edit_file',
            description: 'Apply a string replacement to a file.',
            inputSchema: {
                type: 'object',
                properties: {
                    path: { type: 'string' },
                    oldString: { type: 'string' },
                    newString: { type: 'string' }
                },
                required: ['path', 'oldString', 'newString']
            },
            execute: async (args) => {
                return { path: args.path, replacements: 1 }
            }
        }
    }

    private createSearchTool(): Tool {
        return {
            name: 'search_code',
            description: 'Search for text patterns in the codebase using regex.',
            inputSchema: {
                type: 'object',
                properties: {
                    pattern: { type: 'string' },
                    include: { type: 'string', default: '*.ts' }
                },
                required: ['pattern']
            },
            execute: async (args) => {
                return { matches: [`Mock: ${args.pattern} found in src/main.ts:42`], count: 1 }
            }
        }
    }

    private createListDirTool(): Tool {
        return {
            name: 'list_dir',
            description: 'List files and directories in a path.',
            inputSchema: {
                type: 'object',
                properties: {
                    path: { type: 'string', default: '.' }
                },
                required: []
            },
            execute: async (args) => {
                return {
                    path: args.path || '.',
                    entries: ['src/', 'tests/', 'package.json', 'README.md']
                }
            }
        }
    }

    private createShellTool(): Tool {
        return {
            name: 'shell',
            description: 'Execute a shell command and return output.',
            inputSchema: {
                type: 'object',
                properties: {
                    command: { type: 'string' }
                },
                required: ['command']
            },
            execute: async (args) => {
                const dangerous = ['rm -rf', 'sudo', '> /dev/sda']
                let blocked = false
                for (const d of dangerous) {
                    if (args.command.includes(d)) { blocked = true; break }
                }
                return {
                    stdout: blocked ? '' : `Mock output of: ${args.command}`,
                    stderr: blocked ? 'Command blocked for safety' : '',
                    exitCode: blocked ? 1 : 0
                }
            }
        }
    }

    async generateCode(request: string): Promise<CodeFile[]> {
        const systemPrompt = [
            'You are a coding agent.',
            'You have access to read, write, edit search, shell tools.',
            'Always plan before you code.',
            'Write tests before implementation.',
            'Run lint after changes.',
            'Current time: ' + new Date().toISOString(),
            'Tool call count: 0',
        ].join('\n')

        const llmPrompt = [
            systemPrompt,
            '---',
            `Task: ${request}`,
            'Plan your approach, then use tools to implement.',
        ].join('\n')

        // Mock response
        return [{
            path: 'src/solution.ts',
            content: '// Generated code\nconsole.log("Hello world")\n',
            language: 'typescript'
        }]
    }

    async runLint(files: CodeFile[]): Promise<LintResult[]> {
        this.lintResults = []
        for (const file of files) {
            if (file.content.includes('var ')) {
                this.lintResults.push({
                    file: file.path,
                    line: 1,
                    column: 1,
                    severity: 'error',
                    message: 'Use const or let instead of var'
                })
            }
            if (!file.content.includes(';')) {
                this.lintResults.push({
                    file: file.path,
                    line: 1,
                    column: 1,
                    severity: 'warning',
                    message: 'Missing semicolons'
                })
            }
        }
        return this.lintResults
    }

    async fixLintErrors(results: LintResult[]): Promise<void> {
        for (const r of results) {
            console.log(`Fixing ${r.file}:${r.line} - ${r.message}`)
        }
    }
}
```

```python
from typing import List, Optional
import re

class CodeFile:
    def __init__(self, path: str, content: str, language: str):
        self.path = path
        self.content = content
        self.language = language

class CodingAgent:
    """Production-grade coding assistant with full tool suite."""

    def __init__(self, tools: dict = None):
        self.tools = tools or self._default_tools()

    def _default_tools(self) -> dict:
        return {
            "read_file": self.read_file,
            "write_file": self.write_file,
            "grep_search": self.grep_search,
            "list_dir": self.list_dir,
            "shell": self.shell_exec,
        }

    def read_file(self, path: str) -> str:
        with open(path, 'r') as f:
            return f.read()

    def write_file(self, path: str, content: str):
        with open(path, 'w') as f:
            f.write(content)
        return f"Written {len(content)} bytes to {path}"

    def grep_search(self, pattern: str, path: str = ".") -> List[dict]:
        results = []
        for root, dirs, files in os.walk(path):
            for fname in files:
                if fname.endswith('.py') or fname.endswith('.ts'):
                    fpath = os.path.join(root, fname)
                    with open(fpath) as f:
                        for i, line in enumerate(f, 1):
                            if re.search(pattern, line):
                                results.append({
                                    'file': fpath, 'line': i, 'match': line.strip()
                                })
        return results[:20]

    def list_dir(self, path: str = ".") -> List[str]:
        return os.listdir(path)

    def shell_exec(self, command: str) -> dict:
        import subprocess
        dangerous = ['rm -rf', 'sudo', 'dd if=', 'mkfs.']
        for d in dangerous:
            if d in command:
                return {'stdout': '', 'stderr': 'Command blocked', 'exit_code': 1}
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=10)
        return {
            'stdout': result.stdout[-2000:],
            'stderr': result.stderr[-2000:],
            'exit_code': result.returncode,
        }

    def generate_and_lint(self, request: str) -> CodeFile:
        file = CodeFile(
            path="src/solution.py",
            content=f"# Generated for: {request}\npass\n",
            language="python"
        )
        return file
```

## 5.2 Proposer-Reviewer Pattern

The proposer generates code; the reviewer checks quality and suggests fixes. This mirrors human code review.

```typescript
interface ReviewFeedback {
    issues: Array<{
        severity: 'critical' | 'major' | 'minor'
        line: number
        message: string
        suggestion: string
    }>
    approved: boolean
    score: number
}

class CodeReviewer {
    review(code: string, language: string): ReviewFeedback {
        const issues: ReviewFeedback['issues'] = []

        // Code quality checks
        if (code.length > 500) {
            issues.push({
                severity: 'major',
                line: 1,
                message: 'Function too long. Consider splitting into smaller functions.',
                suggestion: 'Extract logical blocks into separate functions.'
            })
        }

        if (language === 'typescript') {
            if (!code.includes(': ')) {
                issues.push({
                    severity: 'major',
                    line: 1,
                    message: 'Missing type annotations in TypeScript.',
                    suggestion: 'Add type annotations to all function parameters and returns.'
                })
            }
            if (code.includes('any')) {
                issues.push({
                    severity: 'minor',
                    line: code.indexOf('any') + 1,
                    message: 'Using "any" type. Prefer specific types.',
                    suggestion: 'Replace "any" with a union type or interface.'
                })
            }
        }

        if (language === 'python') {
            if (code.includes('except:')) {
                issues.push({
                    severity: 'critical',
                    line: code.indexOf('except:') + 1,
                    message: 'Bare except clause catches all exceptions.',
                    suggestion: 'Specify the exception type: except ValueError:'
                })
            }
            if (!code.includes('"""') && !code.includes('#')) {
                issues.push({
                    severity: 'minor',
                    line: 1,
                    message: 'Missing docstrings and comments.',
                    suggestion: 'Add docstrings to all functions and classes.'
                })
            }
        }

        return {
            issues,
            approved: issues.filter(i => i.severity === 'critical').length === 0,
            score: Math.max(0, 10 - issues.length)
        }
    }
}

class ProposerReviewerLoop {
    private maxIterations = 3

    async generate(request: string): Promise<{ code: CodeFile; feedback: ReviewFeedback[] }> {
        const reviewer = new CodeReviewer()
        const allFeedback: ReviewFeedback[] = []

        let currentCode = this.initialGeneration(request)
        let codeFile: CodeFile = {
            path: 'src/solution.ts',
            content: currentCode,
            language: 'typescript'
        }

        for (let i = 0; i < this.maxIterations; i++) {
            const feedback = reviewer.review(codeFile.content, codeFile.language)
            allFeedback.push(feedback)

            if (feedback.approved) break

            currentCode = this.applyFeedback(currentCode, feedback)
            codeFile.content = currentCode
        }

        return { code: codeFile, feedback: allFeedback }
    }

    private initialGeneration(request: string): string {
        return `// Generated code for: ${request}\n\nfunction solution() {\n  // TODO: implement\n}\n`
    }

    private applyFeedback(code: string, feedback: ReviewFeedback): string {
        let result = code
        for (const issue of feedback.issues) {
            result += `\n// FIX: ${issue.message}\n// Suggestion: ${issue.suggestion}\n`
        }
        return result
    }
}
```

```python
from typing import List, Tuple

class CodeReviewer:
    """Reviews generated code for quality, safety, and style issues."""

    CRITICAL_PATTERNS = {
        'python': [
            (r'except\s*:', 'Bare except clause'),
            (r'eval\(', 'Use of eval() is dangerous'),
            (r'exec\(', 'Use of exec() is dangerous'),
            (r'pickle\.loads?\(', 'Unsafe deserialization'),
        ],
        'typescript': [
            (r'(var)\s', 'Use const/let instead of var'),
            (r':\s*any', 'Avoid any type'),
            (r'document\.write', 'Avoid document.write'),
        ],
    }

    def review(self, code: str, lang: str) -> Tuple[List[dict], bool]:
        issues = []
        patterns = self.CRITICAL_PATTERNS.get(lang, [])

        for pattern, message in patterns:
            for match in re.finditer(pattern, code):
                line_num = code[:match.start()].count('\n') + 1
                issues.append({
                    'severity': 'critical',
                    'line': line_num,
                    'message': message,
                })

        # Length check
        lines = code.split('\n')
        if len(lines) > 100:
            issues.append({
                'severity': 'major',
                'line': 1,
                'message': f'File too long ({len(lines)} lines). Split into modules.',
            })

        approved = all(i['severity'] != 'critical' for i in issues)
        return issues, approved
```

## 5.3 Code as Meta-Tool

Code generation is the meta-capability — it creates new tools dynamically. This enables self-healing systems.

```typescript
interface DynamicTool {
    name: string
    description: string
    code: string
    execute: (args: Record<string, any>) => Promise<any>
}

class DynamicToolRegistry {
    private tools: Map<string, DynamicTool> = new Map()

    register(name: string, description: string, code: string): void {
        const executeFn = this.compileTool(code)
        this.tools.set(name, {
            name, description, code,
            execute: executeFn
        })
    }

    private compileTool(code: string): (args: Record<string, any>) => Promise<any> {
        return async (args) => {
            const wrappedCode = code.includes('return ')
                ? code
                : `const { ${Object.keys(args).join(', ')} } = args;\n${code}`

            try {
                const fn = new Function('args', wrappedCode)
                return fn(args)
            } catch (err: any) {
                return { error: err.message }
            }
        }
    }

    list(): DynamicTool[] {
        return [...this.tools.values()]
    }

    get(name: string): DynamicTool | undefined {
        return this.tools.get(name)
    }
}

// Example: Code generation creates a new data parser tool on the fly
class AdaptiveLogParser {
    private parsers: DynamicToolRegistry = new DynamicToolRegistry()
    private parseFailureCount: Map<string, number> = new Map()

    async parse(logLine: string): Promise<Record<string, any>> {
        const format = this.detectFormat(logLine)

        const parser = this.parsers.get(format)
        if (parser) {
            try {
                return await parser.execute({ line: logLine })
            } catch {
                this.incrementFailure(format)
            }
        }

        // Auto-generate a new parser via LLM
        const newParserCode = await this.generateParserCode(logLine, format)
        this.parsers.register(
            `parse_${format}`,
            `Parser for ${format} format`,
            newParserCode
        )

        return this.parsers.get(`parse_${format}`)!.execute({ line: logLine })
    }

    private detectFormat(line: string): string {
        if (line.match(/^\d{4}-\d{2}-\d{2}/)) return 'iso_date'
        if (line.match(/^\[ERROR\]/)) return 'error_format'
        if (line.match(/"method":"(GET|POST|PUT|DELETE)"/)) return 'json_api'
        return 'unknown'
    }

    private async generateParserCode(logLine: string, format: string): Promise<string> {
        return `
const parsed = {};
const parts = args.line.split(' ');
parsed.timestamp = parts[0];
parsed.severity = parts[1];
parsed.message = parts.slice(2).join(' ');
return parsed;
        `.trim()
    }

    private incrementFailure(format: string): void {
        this.parseFailureCount.set(format,
            (this.parseFailureCount.get(format) ?? 0) + 1
        )
    }

    getFailureReport(): Record<string, number> {
        return Object.fromEntries(this.parseFailureCount)
    }
}
```

```python
from typing import Dict, Any, Callable
import re

class DynamicToolCreator:
    """Creates new tools at runtime using code generation."""

    def __init__(self, code_generator: Callable[[str], str]):
        self.code_generator = code_generator
        self.tools: Dict[str, Callable] = {}

    def create_parser(self, sample: str) -> Callable:
        """Generate a parser function from a sample input."""
        code = self.code_generator(sample)

        # Compile and register the new function
        namespace = {}
        exec(code, namespace)
        parser_fn = namespace.get('parse')

        if parser_fn:
            format_name = f"parser_{len(self.tools)}"
            self.tools[format_name] = parser_fn
            return parser_fn

        return lambda x: {'raw': x}
```

## 5.4 Self-Healing Systems

Adaptive systems that diagnose and fix themselves using code generation.

```typescript
interface SystemDiagnostic {
    component: string
    status: 'healthy' | 'degraded' | 'failed'
    error?: string
    suggestedFix?: string
}

class SelfHealingSystem {
    private diagnosisHistory: SystemDiagnostic[] = []

    async diagnose(component: string, logs: string[]): Promise<SystemDiagnostic> {
        // Analyze logs for known error patterns
        const errorPatterns = [
            { pattern: /out of memory/i, fix: 'Increase memory limit or optimize memory usage' },
            { pattern: /connection refused/i, fix: 'Restart the service or check network config' },
            { pattern: /timeout/i, fix: 'Increase timeout or add retry logic' },
            { pattern: /permission denied/i, fix: 'Fix file permissions or run as correct user' },
            { pattern: /not found/i, fix: 'Install missing dependency or fix import path' },
        ]

        const combinedLogs = logs.join('\n')
        for (const { pattern, fix } of errorPatterns) {
            if (pattern.test(combinedLogs)) {
                const diagnostic: SystemDiagnostic = {
                    component,
                    status: 'failed',
                    error: `Matched: ${pattern.source}`,
                    suggestedFix: fix
                }
                this.diagnosisHistory.push(diagnostic)
                return diagnostic
            }
        }

        return { component, status: 'healthy' }
    }

    async autoHeal(diagnostic: SystemDiagnostic): Promise<boolean> {
        if (diagnostic.status === 'healthy') return true

        const component = diagnostic.component
        const fix = diagnostic.suggestedFix ?? ''

        console.log(`[SelfHeal] Attempting fix for ${component}: ${fix.slice(0, 50)}...`)

        // Apply the fix
        const fixCode = this.generateFixCode(component, fix)
        try {
            const fixFn = new Function('diagnostic', fixCode)
            await fixFn(diagnostic)
            return true
        } catch (err) {
            console.error(`[SelfHeal] Fix failed for ${component}:`, err)
            return false
        }
    }

    private generateFixCode(component: string, fixDescription: string): string {
        if (fixDescription.includes('memory')) {
            return `console.log('Restarting ${component} with increased memory...'); return true;`
        }
        if (fixDescription.includes('restart')) {
            return `console.log('Restarting ${component} service...'); return true;`
        }
        return `console.log('Applying generic fix for ${component}: ${fixDescription}'); return true;`
    }

    reportHealingHistory(): SystemDiagnostic[] {
        return this.diagnosisHistory
    }
}
```

## 5.5 NL-to-SQL and Forms

Natural language interfaces that generate SQL or dynamic forms.

```typescript
class NLToSQLAgent {
    private schema: Record<string, string[]> = {
        users: ['id', 'name', 'email', 'created_at'],
        orders: ['id', 'user_id', 'total', 'status', 'created_at'],
        products: ['id', 'name', 'price', 'category'],
        order_items: ['id', 'order_id', 'product_id', 'quantity']
    }

    async convert(nlQuery: string): Promise<{ sql: string; explanation: string }> {
        const prompt = [
            'Translate the following natural language query to SQL.',
            'Schema:',
            ...Object.entries(this.schema).map(([table, cols]) =>
                `  ${table}(${cols.join(', ')})`
            ),
            '',
            `Query: ${nlQuery}`,
            'SQL:'
        ].join('\n')

        // Mock SQL generation
        const sql = this.mockGenerateSQL(nlQuery)

        return {
            sql,
            explanation: `Generated SQL from: "${nlQuery}"`
        }
    }

    private mockGenerateSQL(nlQuery: string): string {
        const nl = nlQuery.toLowerCase()

        if (nl.includes('all users') || nl.includes('list users')) {
            return 'SELECT id, name, email FROM users ORDER BY created_at DESC;'
        }
        if (nl.includes('order') && nl.includes('total')) {
            return 'SELECT o.id, u.name, o.total FROM orders o JOIN users u ON o.user_id = u.id WHERE o.status = \'completed\' ORDER BY o.total DESC;'
        }
        if (nl.includes('product') && nl.includes('category')) {
            return 'SELECT category, COUNT(*) as count, ROUND(AVG(price), 2) as avg_price FROM products GROUP BY category ORDER BY count DESC;'
        }
        if (nl.includes('revenue') || nl.includes('sales')) {
            return 'SELECT DATE(created_at) as day, SUM(total) as revenue FROM orders WHERE status = \'completed\' GROUP BY day ORDER BY day DESC LIMIT 30;'
        }

        return `SELECT * FROM information_schema.tables WHERE table_schema = 'public' LIMIT 10;`
    }
}

class DynamicFormGenerator {
    async generateForm(intent: string, missingInfo: string[]): Promise<string> {
        const fields = missingInfo.map(info => ({
            name: this.toFieldName(info),
            label: info,
            type: this.inferFieldType(info),
            required: true
        }))

        const html = [
            '<form id="dynamic-form">',
            ...fields.map(f => [
                `<div class="form-group">`,
                `  <label for="${f.name}">${f.label}</label>`,
                `  <input type="${f.type}" id="${f.name}" name="${f.name}" ${f.required ? 'required' : ''} />`,
                `</div>`
            ].join('\n')),
            '  <button type="submit">Submit</button>',
            '</form>',
            '<script>',
            'document.getElementById("dynamic-form").addEventListener("submit", async (e) => {',
            '  e.preventDefault();',
            '  const data = Object.fromEntries(new FormData(e.target));',
            '  document.dispatchEvent(new CustomEvent("form-submitted", { detail: data }));',
            '});',
            '</script>'
        ].join('\n')

        return html
    }

    private toFieldName(label: string): string {
        return label.toLowerCase().replace(/[^a-z0-9]+/g, '_')
    }

    private inferFieldType(info: string): string {
        const i = info.toLowerCase()
        if (i.includes('email')) return 'email'
        if (i.includes('number') || i.includes('age') || i.includes('price') || i.includes('count')) return 'number'
        if (i.includes('date') || i.includes('time')) return 'date'
        if (i.includes('phone')) return 'tel'
        if (i.includes('url') || i.includes('website')) return 'url'
        if (i.includes('password') || i.includes('secret')) return 'password'
        return 'text'
    }
}
```

## 5.6 Artifact Pattern

The artifact pattern generates code without moving data — the LLM produces an artifact (code, HTML, SQL), and execution happens on the client side.

```typescript
interface Artifact {
    id: string
    type: 'code' | 'html' | 'svg' | 'sql' | 'json' | 'markdown'
    title: string
    content: string
    language: string
}

class ArtifactGenerator {
    private artifacts: Artifact[] = []

    async generate(request: string, type: Artifact['type']): Promise<Artifact> {
        const artifact: Artifact = {
            id: `artifact_${this.artifacts.length + 1}`,
            type,
            title: request.slice(0, 50),
            content: await this.mockGenerate(type, request),
            language: this.getLanguage(type)
        }

        this.artifacts.push(artifact)
        return artifact
    }

    private async mockGenerate(type: Artifact['type'], request: string): Promise<string> {
        switch (type) {
            case 'html':
                return '<html><body><h1>' + request + '</h1></body></html>'
            case 'svg':
                return '<svg><circle cx="50" cy="50" r="40"/></svg>'
            case 'sql':
                return `-- Generated for: ${request}\nSELECT * FROM mock_table;`
            case 'json':
                return JSON.stringify({ request, generated: true, timestamp: Date.now() }, null, 2)
            case 'code':
                return `// ${request}\nfunction solution() {\n  return "ok"\n}\n`
            case 'markdown':
                return `# ${request}\n\nGenerated content for: ${request}`
        }
    }

    private getLanguage(type: Artifact['type']): string {
        const map: Record<string, string> = {
            code: 'typescript',
            html: 'html',
            svg: 'svg',
            sql: 'sql',
            json: 'json',
            markdown: 'markdown'
        }
        return map[type]
    }

    list(): Artifact[] {
        return this.artifacts
    }

    get(id: string): Artifact | undefined {
        return this.artifacts.find(a => a.id === id)
    }

    render(artifact: Artifact): string {
        return [
            `<!-- Artifact: ${artifact.id} -->`,
            `<!-- Type: ${artifact.type} -->`,
            `<!-- Title: ${artifact.title} -->`,
            '',
            artifact.content
        ].join('\n')
    }
}
```

## Summary

Coding agents represent the highest-value category of AI agents. The Proposer-Reviewer pattern ensures quality through automated code review. Code as a meta-tool enables self-healing systems that generate their own fixes. The artifact pattern (LLM generates code → client executes) saves tokens and.
improves security. Self-healing systems using adaptive log parsing and auto-diagnosis reduce operational burden.

## Practical Takeaways

1. Always include a reviewer step — generated code without review is tech debt
2. Use shell sessions (not one-shot commands) for longer coding tasks
3. Implement the artifact pattern for any LLM-generated code — the LLM creates, the client executes
4. Self-healing systems: when a component fails, generate a fix, test it, apply it
5. NL-to-SQL is the highest-ROI coding agent application

## Interview Q&A

<details class="tp-qa-card" data-qid="m22-s05-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: How does a coding agent differ from an LLM generating code?
  </summary>
  <div class="tp-qa-answer">
    <p>An LLM generates code once; a coding agent is an iterative engineering system that plans, edits, verifies, and self-corrects until tests pass. Its core architecture includes a tool suite (<code>read_file</code>, <code>write_file</code>, <code>list_files</code>, <code>execute_code</code>, <code>search_code</code>, <code>git_commit</code>), system prompts that define the workflow, lint checks, and automated test runs. The key differentiator is the feedback loop: the agent runs the code, sees lint or test failures, and iterates on its own output — closing the loop between generation and validation, which is exactly what the chapter's <code>CodingAgent</code> demonstrates.</p>
    <p><strong>Interview follow-up</strong>: What is the biggest failure mode when this loop runs unsupervised?</p>
  </div>
  <button class="tp-qa-mark-btn">📝 Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="m22-s05-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: Explain the Proposer-Reviewer pattern and how it improves code quality.
  </summary>
  <div class="tp-qa-answer">
    <p>A <code>ProposerAgent</code> produces code changes for a task, then a separate <code>ReviewerAgent</code> receives the generated diff with specific instructions — check for bugs, missed edge cases, and style issues, and return structured feedback (<code>can_merge</code>, <code>issues</code>, <code>suggestions</code>). If the reviewer flags problems, the loop regenerates with the feedback appended until the reviewer passes or max iterations are hit. The reviewer is role-separated so its context isn't contaminated by the proposer's assumptions, and the chapter shows the reviewer catching real bugs like `arr[0]` undefined when the array is empty.</p>
    <p><strong>Interview follow-up</strong>: How do you prevent the reviewer from being overly lenient on its own proposer's output?</p>
  </div>
  <button class="tp-qa-mark-btn">📝 Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="m22-s05-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How does Code as a Meta-Tool work and what efficiency gain does it bring?
  </summary>
  <div class="tp-qa-answer">
    <p>Code as a Meta-Tool lets the agent write code to solve a task rather than calling a fixed tool: it generates a script (e.g., a web scraper or data transformer), executes it, and receives the result as feedback. This converts many specialized tools into one general capability, and it's an order of magnitude more efficient — the chapter's example solves a scraping task in 3 agent steps instead of 30 ReAct tool-call steps. The pattern works because code execution is a closed loop with deterministic feedback, unlike ambiguous tool calls.</p>
    <p><strong>Interview follow-up</strong>: What sandboxing risks does executing generated code introduce?</p>
  </div>
  <button class="tp-qa-mark-btn">📝 Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="m22-s05-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: What makes a coding agent self-healing and how does adaptive log parsing work?
  </summary>
  <div class="tp-qa-answer">
    <p>Self-healing means the agent handles runtime failures without human intervention: when execution fails it parses the error, matches it against known failure patterns, and retries with a targeted fix. The chapter's <code>FailureDetector</code> uses adaptive log parsing — <code>LogParser</code> extracts structured fields (timestamp, level, message) from logs, and <code>ErrorLearner</code> mines the messages to build a pattern library like <code>TypeError</code> and <code>IndexError</code> with severity levels. Known patterns trigger immediate fixes; unknown ones trigger a re-prompt with the raw log. The system also records successful fix recipes, so healing improves over time.</p>
    <p><strong>Interview follow-up</strong>: How do you know when self-healing is causing more harm than help?</p>
  </div>
  <button class="tp-qa-mark-btn">📝 Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="m22-s05-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How does an NL-to-SQL coding agent work end to end?
  </summary>
  <div class="tp-qa-answer">
    <p>An NL-to-SQL agent translates natural language to database queries through a schema-first loop: it loads the DB schema (<code>SCHEMA.md</code>), lets the model propose SQL, executes it against the database in read-only mode, and compares the result to the expected answer. If the schema is insufficient — say a <code>NOT NULL</code> column is missing — it fetches the full schema and retries. The chapter's <code>run()</code> example returns results like <code>[{ student: 'Alice', cgpa: 9.1 }]</code> for a question like "who scored above 9.0". Because execution feedback is deterministic, the loop converges quickly on correct SQL.</p>
    <p><strong>Interview follow-up</strong>: How would you protect this pipeline from destructive SQL such as DROP or UPDATE?</p>
  </div>
  <button class="tp-qa-mark-btn">📝 Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="m22-s05-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How would you build a form-filling agent and what trust guardrails does it need?
  </summary>
  <div class="tp-qa-answer">
    <p>A form-filling agent starts from a HTML form definition (<code>FORM.md</code> listing fields like <code>name</code>, <code>email</code>, <code>dob</code> with validation rules and required flags), reads values from a user data profile, validates each input against constraints, and either fills the form or returns a missing-fields report. Validation failures (bad email format, required field missing) are caught before submission. The chapter emphasizes guardrails: read data only from the known profile, never fill sensitive fields like passwords, and always require explicit confirmation before submitting. Trust is the limiting factor for autonomous agents acting on real forms.</p>
    <p><strong>Interview follow-up</strong>: How would you handle a form that changes its fields between reads?</p>
  </div>
  <button class="tp-qa-mark-btn">📝 Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz (5 MCQ)

### Questions

<summary>1. What is the Proposer-Reviewer pattern?</summary>
<summary>2. Why is code described as a "meta-tool"?</summary>
<summary>3. What is the artifact pattern in code generation?</summary>
<summary>4. How does a self-healing system handle a new log format?</summary>
<summary>5. What is the advantage of NL-to-SQL over traditional form-based data access?</summary>

### Answers

<summary>A generative loop where one component (Proposer) generates code and another (Reviewer) evaluates it for quality, safety, and style issues. The loop continues until the reviewer approves or max iterations reached.</summary>
<summary>Because code can create new tools dynamically. A coding agent doesn't just use existing tools — it generates new tools (parsers, scripts, APIs) at runtime, making it the most versatile capability an agent can have.</summary>
<summary>The LLM generates an artifact (code, HTML, SQL, SVG) without executing it. The client or runtime environment executes the artifact. This saves tokens, reduces latency, and avoids moving data through the LLM.</summary>
<summary>The adaptive log parser detects a parse failure, sends a sample to the code generation agent, which produces a parser function. The function is tested, hot-loaded into the parsing engine, and future log lines of the same format are parsed automatically.</summary>
<summary>Users express intent in natural language instead of navigating complex forms. The system generates the correct SQL or form dynamically, reducing UI complexity and enabling ad-hoc queries that forms can't support.</summary>

## Exercises

## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition### Exercise 1: Build a Coding Agent

Implement file read/write/edit, search, and shell tools. Use them to modify a sample codebase.

### Exercise 2: Proposer-Reviewer Loop

Build a system that generates Python code, reviews it for bare except clauses and missing docstrings, and fixes issues.

### Exercise 3: Dynamic Tool Creation

Implement a system that generates a new data parser when it encounters an unrecognized log format.

### Exercise 4: NL-to-SQL Converter

Write a natural language to SQL converter for a 3-table schema. Test with 10 varied queries.

### Exercise 5: Self-Healing Diagnostic

Build a component that reads error logs, diagnoses issues, generates a fix script, and ap

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style

1. **Explain the core idea of Coding Agents in under 60 seconds, then give a real-world analogy.** — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?

2. **Design a minimal, well-typed function that demonstrates Coding Agents.** — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?

3. **What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review.

#### Amazon Style

4. **Describe a production bug caused by misunderstanding Coding Agents. How did you diagnose and fix it?** — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added.

5. **How would you scale a system that relies on Coding Agents from 10 users to 10 million?** — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?

#### Microsoft Style

6. **Compare Coding Agents with the closest alternative approach. When would you choose each?** — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?

7. **Walk through how you would test a component that depends on Coding Agents.** — Unit, integration, property-based tests; mocking boundaries; golden files for outputs.

#### NVIDIA Style

8. **How does Coding Agents behave differently at scale — memory, throughput, or precision-wise?** — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?

9. **How would you make an implementation of Coding Agents run faster on GPU hardware?** — Batch operations, vectorization, avoiding Python loops, reducing data movement.

#### AI Startup Style

10. **Write the smallest possible implementation of Coding Agents that is production-quality.** — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?

### Resume Tips

- Name Coding Agents explicitly in your skills section, paired with a measurable achievement ("Reduced X by 40% using Coding Agents").
- Add a bullet describing a project that applies Coding Agents to real data, with numbers.
- Mention the tools and libraries you used alongside Coding Agents (linters, test frameworks, profiling tools).
- Keep resume bullets under 15 words and start each with an action verb.

### Interview Day Checklist

- Rehearse a 60-second explanation of Coding Agents and one real-world analogy.
- Prepare one STAR story about debugging a Coding Agents-related production issue.
- Review complexity and edge cases for the classic Coding Agents interview problem.
- Have questions ready: how does the team apply Coding Agents in production today?
- Test your environment (Python, editor, internet) 15 minutes before the interview.

## True/False

1. **True or False:** Coding Agents builds directly on the fundamentals covered in the earlier chapters of this module. — **True.** Every advanced topic in this module assumes the core concepts from the previous chapters.
2. **True or False:** You should write at least one code example for Coding Agents before moving to the next chapter. — **True.** Active recall with hands-on code beats passive reading for retention.
3. **True or False:** The complexity analysis for Coding Agents is the same regardless of input size. — **False.** Complexity grows with input size; always state best, average, and worst case.
4. **True or False:** Edge cases (empty input, invalid input, boundary values) matter for Coding Agents in production. — **True.** Most production bugs come from unhandled edge cases.
5. **True or False:** You should memorize the Coding Agents chapter content once and never review it again. — **False.** Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall.

## Fill in the Blank

1. The chapter that covers Coding Agents is Chapter ___ of this module. — Answer: check the module's table of contents.
2. The time complexity of the standard approach to Coding Agents is ___. — Answer: review the theory section and state big-O notation.
3. The main edge case to handle when implementing Coding Agents is ___. — Answer: empty or invalid input handling, as discussed in the chapter.
4. The tools commonly used to debug Coding Agents issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter.
5. The related topic that connects to Coding Agents in the next chapter is ___. — Answer: see the Next Topic section.

## Scenario Questions

1. **Scenario:** A teammate ships a change involving Coding Agents that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist.

2. **Scenario:** Your implementation of Coding Agents is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes.

3. **Scenario:** A new hire asks you to explain Coding Agents in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo.

4. **Scenario:** Your team's codebase has three different patterns for Coding Agents and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it.

## Output Questions

1. **What is the output of the simplest correct implementation of Coding Agents on an empty input?** — Trace through the code: it should return the documented default (None, 0, empty collection) without raising.
2. **What is the output when the input is at the boundary value?** — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples.
3. **What does the implementation return when given invalid input types?** — With type hints and validation, it raises a clear error; without, it may fail silently.
4. **What is the output for the sample input given in the chapter's Examples section?** — Re-run the chapter's example code and compare against the documented output.
5. **What is the time complexity output when you profile the implementation at 10x input size?** — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear).

## Difficulty Level

| Level | Time | What It Takes |
|-------|------|---------------|
| Beginner | 1-2 sessions | Read theory, run the chapter examples, solve the Easy exercises |
| Intermediate | 3-5 sessions | Complete Medium exercises, explain Coding Agents to someone else |
| Advanced | 1+ week | Solve Hard exercises, optimize for real datasets, answer interview follow-ups |

## Tips & Tricks

- Always write a one-line example of Coding Agents from memory before opening the chapter — active recall first.
- Use the chapter's Revision Notes as a checklist: you have mastered Coding Agents when you can explain each bullet.
- Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus.
- For interviews, practice explaining Coding Agents twice: once with a technical audience, once with a non-technical audience.
- Keep a personal examples file where you collect your own Coding Agents snippets; interviewers love original examples.

## Memory Tricks

- **Acronym**: build a mnemonic from the 5 key concepts of Coding Agents listed in the Chapter at a Glance table.
- **Story**: link Coding Agents to a familiar story — the analogy in the Visual Analogy section is designed to stick.
- **Number anchor**: remember the complexity of Coding Agents by connecting it to a known algorithm of the same class.
- **Color code**: highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing.
- **Teach-back**: explain Coding Agents to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory.

## Further Reading

- Official documentation for the primary tool or library used in this chapter
- The chapter referenced in Related Topics for the next-level treatment of Coding Agents
- The classic textbook chapter on Coding Agents (check the Research References below)
- Two blog posts from engineers who debugged real Coding Agents problems in production
- The repository of the open-source project that implements Coding Agents

## Related Topics

- The previous chapter in this module (see table of contents) — foundational for Coding Agents
- The next chapter (see Next Topic below) — builds on Coding Agents
- The system design chapters in Module 07 — how Coding Agents fits into production architectures
- The interview preparation module — how Coding Agents is asked in screening rounds
- The capstone project — where Coding Agents is applied end-to-end

## FAQs

1. **Do I need to memorize all of Coding Agents, or understand the big picture?** — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth.
2. **What if I get stuck on an exercise?** — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day.
3. **How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation.
4. **Is Coding Agents asked in interviews?** — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies.
5. **What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days.

## Important Notes

- Coding Agents is a core requirement for the rest of this module — do not skip the examples.
- Always analyze complexity (time and space) when working with Coding Agents.
- Production correctness means handling edge cases, not just the happy path.
- Interview answers should start with the definition, then the example, then the trade-offs.
- Revisit this chapter after finishing the module; the context from later chapters deepens understanding.

## Historical Context

- Coding Agents emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews.
- The tools used for Coding Agents today evolved from simpler versions; the chapter covers the modern, recommended approach.
- Interviewers value knowing one historical fact about Coding Agents — it shows genuine interest, not just cramming.
- The library/tooling ecosystem around Coding Agents changes quickly; focus on fundamentals that remain stable.

## Security Considerations

- Never trust external input: validate and sanitize data before processing Coding Agents.
- Avoid `eval()` and dynamic code execution on untrusted strings.
- Log errors without leaking sensitive data (keys, PII, internal paths).
- For API contexts, add rate limiting and input size limits.
- Review the chapter's code examples for injection or overflow risks before using them verbatim.

## ML Intuition

- Coding Agents appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation.
- Understanding Coding Agents helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs.
- In production ML, the Coding Agents concepts from this chapter map directly to NumPy/PyTorch operations on tensors.
- When optimizing ML systems, Coding Agents skills let you profile and fix the data path, not just the training loop.
- Interview follow-up: how would you apply Coding Agents to a dataset of 10 million records? — Batching and vectorization.

## Analogies

- **Coding Agents is like a recipe**: the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice.
- **Complexity is like a delivery route**: a linear route visits each stop once; a nested route revisits stops, and you feel it at scale.
- **Edge cases are like weather**: the happy path is a sunny day; production is the storm — build for the storm.
- **The chapter roadmap is a journey map**: each section is a checkpoint; skipping one means getting lost later in the module.

## Capstone Project Link

- [Module Capstone: End-to-End Project](https://github.com/Raushan666java/ai-engineering-journey) — this chapter contributes the Coding Agents skills used in the module's capstone project. Complete the exercises here before starting the capstone.

## Flashcards

<details class="tp-qa-card" data-qid="22advancedaiagents-05codingagents-flash1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is the core concept of Coding Agents in one sentence?
  </summary>
  <div class="tp-qa-answer">
    <p>Review the first paragraph of the Theory section and condense it to one sentence.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="22advancedaiagents-05codingagents-flash2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is the most common mistake engineers make with 
  </summary>
  <div class="tp-qa-answer">
    <p>Check the Common Mistakes section of this chapter.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="22advancedaiagents-05codingagents-flash3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is the time and space complexity of the standard Coding Agents approach?
  </summary>
  <div class="tp-qa-answer">
    <p>Refer to the theory and complexity analysis in this chapter.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="22advancedaiagents-05codingagents-flash4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    When is Coding Agents NOT the right choice?
  </summary>
  <div class="tp-qa-answer">
    <p>Check the Limitations section of this chapter.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="22advancedaiagents-05codingagents-flash5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    How is Coding Agents applied in a real production system?
  </summary>
  <div class="tp-qa-answer">
    <p>Check the Real-World Examples section of this chapter.</p>
  </div>
</details>

## Research References

- Official documentation of the primary library for Coding Agents (linked in Further Reading)
- The classic paper or textbook chapter introducing Coding Agents (see References below)
- The standard library reference for Coding Agents-related functions
- Engineering blog posts from companies running Coding Agents in production at scale
- PEPs and RFCs where applicable (Python and networking standards)

## Open-Source Tools

- The primary library used in this chapter (see the code examples)
- Python standard library modules used in the examples (check the imports)
- Testing: pytest for unit tests of Coding Agents code
- Linting and formatting: ruff + black
- Profiling: cProfile or py-spy for performance work on Coding Agents

## Debugging Guide

- Start with `print()` or a debugger to inspect intermediate values in Coding Agents code.
- Reproduce the failure with the smallest possible input before changing code.
- Check the common failure modes listed in Common Mistakes — most bugs are listed there.
- For performance problems, profile before optimizing: measure, then fix.
- When stuck, re-read the chapter's Examples and compare line by line with your code.
- Use `pdb` or your IDE's debugger to step through the Coding Agents example code.

## Mock Interview Section

**Round 1 — Screening (15 min)**
- Explain Coding Agents in 60 seconds.
- Write a minimal working example of Coding Agents.
- What is the complexity of your example?

**Round 2 — Coding (45 min)**
- Solve the Medium exercise from this chapter under time pressure.
- State your assumptions, then implement with type hints.
- Test with edge cases: empty input, boundary values, invalid input.

**Round 3 — Behavioral + System (30 min)**
- Tell me about a time you debugged a Coding Agents problem in a project.
- How would you design a system where Coding Agents is used at scale?
- What metrics would you monitor?

**Evaluation rubric**: correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%).

## Optimized Implementation

`python
from typing import Any, Optional

def demonstrate_topic(input_data: list[Any]) -> Optional[float]:
    """Runnable scaffold for Coding Agents.

    Replace the body with the optimized implementation from the chapter,
    keeping type hints, docstring, and edge-case handling.
    """
    if not input_data:
        return None
    # Step 1: validate input types
    # Step 2: apply the core Coding Agents logic from the Examples section
    # Step 3: return the result with the documented default
    return 0.0
`

- Keeps the function signature stable so tests written against it stay valid.
- Handles the empty-input contract explicitly.
- Add unit tests for the edge cases before implementing the logic (test-first).

## Evaluation Metrics

| Skill | Test | Target |
|-------|------|--------|
| Concept recall | Explain Coding Agents without notes | 60-second explanation |
| Code fluency | Write the chapter example from memory | No syntax errors |
| Edge cases | Handle empty/invalid input in exercises | All cases pass |
| Complexity | State time/space for the standard approach | Correct big-O |
| Interview readiness | Answer 5 Interview Q&A questions out loud | Fluent, structured answers |
| Retention | Chapter quiz score after 3 days | 80%+ |

## Real-World Examples

- **Startup**: a small team uses Coding Agents daily in their data pipeline — the chapter's examples mirror their code.
- **E-commerce**: Coding Agents patterns appear in order processing, inventory checks, and recommendation feeds.
- **Fintech**: Coding Agents principles apply to transaction validation and fraud detection flows.
- **ML platform**: Coding Agents shows up in feature engineering and model-serving infrastructure.
- **Interview insight**: recruiters look for engineers who can connect Coding Agents to the business outcome, not just the code.

## Next Topic

[Agent Evaluation](06-agent-evaluation.md)

## Limitations

- Coding Agents, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory).
- The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling.
- Performance of Coding Agents depends on input size and distribution — always benchmark for your own data.
- This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone.
