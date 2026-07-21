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

Understanding coding agents is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering coding agents.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding coding agents is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how coding agents works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind coding agents
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

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
```text

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
```text

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
```text

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
```text

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
```text

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
```text

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
```text

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
```text

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
```text

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
```text

## Summary

Coding agents represent the highest-value category of AI agents. The Proposer-Reviewer pattern ensures quality through automated code review. Code as a meta-tool enables self-healing systems that generate their own fixes. The artifact pattern (LLM generates code → client executes) saves tokens and improves security. Self-healing systems using adaptive log parsing and auto-diagnosis reduce operational burden.

## Practical Takeaways

1. Always include a reviewer step — generated code without review is tech debt
2. Use shell sessions (not one-shot commands) for longer coding tasks
3. Implement the artifact pattern for any LLM-generated code — the LLM creates, the client executes
4. Self-healing systems: when a component fails, generate a fix, test it, apply it
5. NL-to-SQL is the highest-ROI coding agent application

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

- Key concept 1: Core principle of 22-advanced-ai-agents
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 22-advanced-ai-agents. When would you choose one approach over another?
2. Design a system that efficiently handles 22-advanced-ai-agents at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 22-advanced-ai-agents. What was your approach and what was the result?
2. How would you explain 22-advanced-ai-agents to a non-technical stakeholder?

#### Microsoft Style
1. How does 22-advanced-ai-agents integrate with enterprise systems and cloud architectures?
2. What are the security implications of 22-advanced-ai-agents?

#### NVIDIA Style
1. How would you optimize 22-advanced-ai-agents for GPU-accelerated computing?
2. What parallel processing patterns apply to 22-advanced-ai-agents?

#### AI Startup Style
1. How would you implement 22-advanced-ai-agents in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 22-advanced-ai-agents?

### Resume Tips
- **Technical Skills**: List 22-advanced-ai-agents under relevant technical skills
- **Project Description**: "Implemented 22-advanced-ai-agents to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 22-advanced-ai-agents in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 22-advanced-ai-agents
- [ ] Practice 3-5 problems related to 22-advanced-ai-agents
- [ ] Prepare 2 real-world examples of using 22-advanced-ai-agents
- [ ] Know the time/space complexity of common 22-advanced-ai-agents operations
- [ ] Have questions ready about how the company uses 22-advanced-ai-agentsplies it.
