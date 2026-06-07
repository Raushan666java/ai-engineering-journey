# VS Code & AI Tools Mastery 🤖

## Complete Guide to Modern Development Tools

---

## Table of Contents

1. [VS Code Setup & Configuration](#vs-code-setup)
2. [Essential Extensions](#essential-extensions)
3. [Keyboard Shortcuts](#keyboard-shortcuts)
4. [AI Tools Integration](#ai-tools-integration)
5. [GitHub Copilot](#github-copilot)
6. [Code Snippets](#code-snippets)
7. [Debugging in VS Code](#debugging-in-vs-code)
8. [Terminal & Task Management](#terminal-task-management)
9. [Git Integration](#git-integration)
10. [Productivity Tips](#productivity-tips)

---

## VS Code Setup & Configuration

### Essential Settings (settings.json)

```json
{
    // Editor
    "editor.fontSize": 14,
    "editor.fontFamily": "'Fira Code', 'Cascadia Code', Consolas, monospace",
    "editor.fontLigatures": true,
    "editor.lineHeight": 1.6,
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "editor.detectIndentation": true,
    "editor.wordWrap": "on",
    "editor.minimap.enabled": true,
    "editor.rulers": [80, 120],
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.organizeImports": true
    },

    // Files
    "files.autoSave": "onFocusChange",
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/node_modules": true,
        "**/vendor": true,
        "**/.next": true,
        "**/dist": true,
        "**/build": true
    },

    // PHP
    "php.suggest.basic": false,
    "php.validate.enable": true,
    "php.validate.run": "onType",
    "[php]": {
        "editor.defaultFormatter": "bmewburn.vscode-intelephense-client",
        "editor.tabSize": 4
    },

    // JavaScript/TypeScript
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.tabSize": 2
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.tabSize": 2
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.tabSize": 2
    },

    // Terminal
    "terminal.integrated.fontSize": 13,
    "terminal.integrated.fontFamily": "MesloLGS NF",
    "terminal.integrated.cursorBlinking": true,
    "terminal.integrated.defaultProfile.linux": "bash",

    // Workbench
    "workbench.colorTheme": "One Dark Pro",
    "workbench.iconTheme": "material-icon-theme",
    "workbench.startupEditor": "newUntitledFile",
    "workbench.editor.enablePreview": false,

    // Git
    "git.autofetch": true,
    "git.confirmSync": false,
    "git.enableSmartCommit": true,

    // Emmet
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "typescript": "typescriptreact",
        "blade": "html"
    },

    // Intelephense (PHP)
    "intelephense.files.maxSize": 5000000,
    "intelephense.completion.triggerParameterHints": true,
    "intelephense.completion.insertUseDeclaration": true,

    // ESLint
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],

    // Prettier
    "prettier.semi": true,
    "prettier.singleQuote": true,
    "prettier.trailingComma": "es5",
    "prettier.printWidth": 100,

    // GitHub Copilot
    "github.copilot.enable": {
        "*": true,
        "yaml": true,
        "plaintext": false,
        "markdown": true
    }
}
```

---

## Essential Extensions

### Must-Have Extensions

#### 1. **PHP Development**

```
- PHP Intelephense (bmewburn.vscode-intelephense-client)
  → Intelligent PHP code completion, navigation, refactoring

- Laravel Extension Pack (onecentlin.laravel-extension-pack)
  → Complete Laravel development toolkit

- Laravel Blade Snippets (onecentlin.laravel-blade)
  → Blade syntax highlighting and snippets

- Laravel Goto View (codingyu.laravel-goto-view)
  → Jump to view files from controllers

- Laravel Artisan (ryannaddy.laravel-artisan)
  → Run Artisan commands from VS Code

- PHP Debug (xdebug.php-debug)
  → XDebug integration for PHP debugging
```

#### 2. **JavaScript/TypeScript/React**

```
- ES7+ React/Redux/React-Native snippets (dsznajder.es7-react-js-snippets)
  → React/Redux code snippets

- ESLint (dbaeumer.vscode-eslint)
  → JavaScript linting

- Prettier (esbenp.prettier-vscode)
  → Code formatting

- Auto Import (steoates.autoimport)
  → Automatically imports modules

- JavaScript (ES6) code snippets (xabikos.javascriptsnippets)
  → ES6 syntax snippets
```

#### 3. **AI & Productivity**

```
- GitHub Copilot (github.copilot)
  → AI pair programmer

- GitHub Copilot Chat (github.copilot-chat)
  → Conversational AI assistant

- Tabnine AI (tabnine.tabnine-vscode)
  → Alternative AI code completion

- CodeGPT (danielsanmedium.dscodegpt)
  → ChatGPT integration
```

#### 4. **Git & Version Control**

```
- GitLens (eamodio.gitlens)
  → Supercharged Git capabilities

- Git Graph (mhutchie.git-graph)
  → Visual Git history graph

- Git History (donjayamanne.githistory)
  → View git log and file history
```

#### 5. **Database**

```
- MySQL (cweijan.vscode-mysql-client2)
  → MySQL/MariaDB management

- SQLTools (mtxr.sqltools)
  → Database management for multiple databases

- Database Client (cweijan.vscode-database-client2)
  → Universal database client
```

#### 6. **Utilities**

```
- Path Intellisense (christian-kohler.path-intellisense)
  → Autocomplete file paths

- Auto Rename Tag (formulahendry.auto-rename-tag)
  → Rename paired HTML/XML tags

- Bracket Pair Colorizer (coenraads.bracket-pair-colorizer-2)
  → Colorize matching brackets

- Better Comments (aaron-bond.better-comments)
  → Improve code commenting

- Todo Tree (gruntfuggly.todo-tree)
  → Show TODO/FIXME in tree view

- Error Lens (usernamehw.errorlens)
  → Show errors inline

- Code Spell Checker (streetsidesoftware.code-spell-checker)
  → Spell checking for code
```

#### 7. **Themes & Icons**

```
- One Dark Pro (zhuangtongfa.material-theme)
- Material Icon Theme (pkief.material-icon-theme)
- Dracula Official (dracula-theme.theme-dracula)
```

---

## Keyboard Shortcuts

### Essential Shortcuts (Linux/Windows)

#### Navigation

```
Ctrl + P          → Quick file open
Ctrl + Shift + P  → Command palette
Ctrl + Tab        → Switch between open files
Ctrl + B          → Toggle sidebar
Ctrl + `          → Toggle terminal
Ctrl + \          → Split editor
Ctrl + W          → Close editor
Ctrl + K, Ctrl + W → Close all editors

F12              → Go to definition
Ctrl + Click     → Go to definition (alternative)
Alt + ←          → Go back
Alt + →          → Go forward
Ctrl + Shift + O → Go to symbol in file
Ctrl + T         → Go to symbol in workspace
```

#### Editing

```
Ctrl + D          → Select next occurrence
Ctrl + Shift + L  → Select all occurrences
Ctrl + /          → Toggle line comment
Ctrl + Shift + /  → Toggle block comment
Alt + ↑/↓         → Move line up/down
Ctrl + Shift + K  → Delete line
Ctrl + Enter      → Insert line below
Ctrl + Shift + Enter → Insert line above
Alt + Click       → Multi-cursor
Ctrl + Alt + ↑/↓  → Multi-cursor column

Ctrl + Space      → Trigger suggestions
Ctrl + Shift + Space → Trigger parameter hints
F2                → Rename symbol
Ctrl + .          → Quick fix
```

#### Search & Replace

```
Ctrl + F          → Find in file
Ctrl + H          → Replace in file
Ctrl + Shift + F  → Find in workspace
Ctrl + Shift + H  → Replace in workspace
F3                → Find next
Shift + F3        → Find previous
```

#### Terminal

```
Ctrl + `          → Toggle terminal
Ctrl + Shift + `  → Create new terminal
Ctrl + Shift + 5  → Split terminal
```

#### Debug

```
F5               → Start debugging
Shift + F5       → Stop debugging
F9               → Toggle breakpoint
F10              → Step over
F11              → Step into
Shift + F11      → Step out
```

### Custom Keybindings (keybindings.json)

```json
[
    // Duplicate line
    {
        "key": "ctrl+d",
        "command": "editor.action.copyLinesDownAction",
        "when": "editorTextFocus"
    },

    // Format document
    {
        "key": "ctrl+shift+f",
        "command": "editor.action.formatDocument",
        "when": "editorTextFocus"
    },

    // Run Artisan command
    {
        "key": "ctrl+shift+a",
        "command": "laravel.artisan",
        "when": "editorTextFocus"
    },

    // Toggle terminal
    {
        "key": "ctrl+j",
        "command": "workbench.action.terminal.toggleTerminal"
    }
]
```

---

## AI Tools Integration

### GitHub Copilot

#### 1. **Basic Usage**

```javascript
// Type a comment describing what you want, Copilot suggests code:

// Function to calculate compound interest
// Copilot will suggest:
function calculateCompoundInterest(principal, rate, time, frequency) {
    return principal * Math.pow(1 + rate / frequency, frequency * time);
}

// Create a React component for a login form
// Copilot will generate the complete component
```

#### 2. **Advanced Techniques**

**Context-Aware Completions:**

```typescript
// Copilot learns from your codebase context

// In your existing User model file:
interface User {
    id: number;
    name: string;
    email: string;
}

// When you type this elsewhere:
const users: User[] = // Copilot knows your User interface structure
```

**Multi-Line Suggestions:**

```php
// Start typing a function signature:
public function processOrder(Order $order)

// Press Tab to accept Copilot's full implementation suggestion
```

**Generate Tests:**

```typescript
// In your test file, type:
describe("UserService", () => {
    // test create user with valid data
    // Copilot generates complete test case
});
```

#### 3. **Copilot Chat Commands**

```
/explain - Explain selected code
/fix     - Fix problems in code
/tests   - Generate unit tests
/doc     - Generate documentation
/help    - Show all commands

Examples:
- Select code → Ctrl+I → "/explain"
- Select buggy code → "/fix this authentication issue"
- Select function → "/tests generate unit tests for this"
```

#### 4. **Best Practices with Copilot**

```
✅ DO:
- Write clear, descriptive comments
- Use meaningful variable/function names
- Review and test suggested code
- Use Copilot for boilerplate and repetitive code
- Learn from suggestions to improve your skills

❌ DON'T:
- Accept suggestions blindly
- Skip code review
- Ignore security implications
- Let it write everything (you still need to understand)
- Trust it with sensitive credentials
```

### Using AI Tools Effectively

#### 1. **ChatGPT/Claude for Code Review**

```
Prompt Template:
"Review this [language] code for [specific concern]:

[paste code]

Check for:
- Logic errors
- Security vulnerabilities
- Performance issues
- Best practices violations
- Code smell"
```

#### 2. **Debugging with AI**

```
Prompt Template:
"I'm getting this error in [Laravel/React]:

Error: [error message]

Context:
[relevant code]

Expected behavior: [describe]
Actual behavior: [describe]

Help me debug this."
```

#### 3. **Learning New Concepts**

```
Prompt Template:
"Explain [concept] in [technology] like I'm a developer with [experience level]:
- Basic explanation
- Code example
- Common pitfalls
- Best practices
- Real-world use case"
```

#### 4. **Code Refactoring**

```
Prompt Template:
"Refactor this code to:
- Follow SOLID principles
- Improve readability
- Optimize performance
- Add type safety

Current code:
[paste code]"
```

---

## Code Snippets

### Laravel Snippets

Create file: `~/.config/Code/User/snippets/php.json`

```json
{
    "Laravel Controller Method": {
        "prefix": "lcon",
        "body": [
            "public function ${1:method}(${2:Request} \\$request)",
            "{",
            "    ${3:// Implementation}",
            "    ",
            "    return response()->json([",
            "        'message' => '${4:Success}',",
            "        'data' => \\$${5:data}",
            "    ]);",
            "}"
        ]
    },

    "Laravel Resource": {
        "prefix": "lres",
        "body": [
            "<?php",
            "",
            "namespace App\\Http\\Resources;",
            "",
            "use Illuminate\\Http\\Resources\\Json\\JsonResource;",
            "",
            "class ${1:Model}Resource extends JsonResource",
            "{",
            "    public function toArray(\\$request): array",
            "    {",
            "        return [",
            "            'id' => \\$this->id,",
            "            ${2:// Add fields}",
            "            'created_at' => \\$this->created_at->toISOString(),",
            "        ];",
            "    }",
            "}"
        ]
    },

    "Laravel Service Class": {
        "prefix": "lserv",
        "body": [
            "<?php",
            "",
            "namespace App\\Services;",
            "",
            "use Illuminate\\Support\\Facades\\DB;",
            "",
            "class ${1:Name}Service",
            "{",
            "    public function __construct(",
            "        ${2:// Dependencies}",
            "    ) {}",
            "    ",
            "    public function ${3:method}(${4:params})",
            "    {",
            "        return DB::transaction(function () use (\\$${5:params}) {",
            "            ${6:// Implementation}",
            "        });",
            "    }",
            "}"
        ]
    }
}
```

### React/TypeScript Snippets

Create file: `~/.config/Code/User/snippets/typescriptreact.json`

```json
{
    "React Functional Component": {
        "prefix": "rfc",
        "body": [
            "import React from 'react';",
            "",
            "interface ${1:Component}Props {",
            "    ${2:// Props}",
            "}",
            "",
            "export function ${1:Component}({ ${3:props} }: ${1:Component}Props) {",
            "    return (",
            "        <div className=\"${4:container}\">",
            "            ${5:// Content}",
            "        </div>",
            "    );",
            "}"
        ]
    },

    "React Hook": {
        "prefix": "rhook",
        "body": [
            "import { useState, useEffect } from 'react';",
            "",
            "export function use${1:Name}() {",
            "    const [${2:state}, set${2/(.*)/${1:/capitalize}/}] = useState(${3:initialValue});",
            "    ",
            "    useEffect(() => {",
            "        ${4:// Effect}",
            "    }, [${5:dependencies}]);",
            "    ",
            "    return { ${2:state}, set${2/(.*)/${1:/capitalize}/} };",
            "}"
        ]
    },

    "useState": {
        "prefix": "ust",
        "body": [
            "const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState<${2:type}>(${3:initialValue});"
        ]
    },

    "useEffect": {
        "prefix": "uef",
        "body": [
            "useEffect(() => {",
            "    ${1:// Effect}",
            "    ",
            "    return () => {",
            "        ${2:// Cleanup}",
            "    };",
            "}, [${3:dependencies}]);"
        ]
    }
}
```

---

## Debugging in VS Code

### PHP/Laravel Debugging

#### 1. **XDebug Setup**

Install XDebug (Ubuntu/Debian):

```bash
sudo apt install php8.2-xdebug
```

Configure XDebug (`/etc/php/8.2/mods-available/xdebug.ini`):

```ini
zend_extension=xdebug.so
xdebug.mode=debug
xdebug.start_with_request=yes
xdebug.client_port=9003
xdebug.client_host=127.0.0.1
xdebug.log=/tmp/xdebug.log
```

#### 2. **VS Code Launch Configuration**

Create `.vscode/launch.json`:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Listen for XDebug",
            "type": "php",
            "request": "launch",
            "port": 9003,
            "pathMappings": {
                "/var/www/html/karmabhoomi_v1": "${workspaceFolder}"
            }
        },
        {
            "name": "Launch Built-in Server",
            "type": "php",
            "request": "launch",
            "runtimeArgs": [
                "-dxdebug.mode=debug",
                "-dxdebug.start_with_request=yes",
                "-S",
                "localhost:8000",
                "-t",
                "public"
            ],
            "program": "",
            "cwd": "${workspaceRoot}",
            "port": 9003
        }
    ]
}
```

#### 3. **Using Breakpoints**

```php
// Set breakpoint by clicking left of line number

public function store(Request $request)
{
    // Execution will pause here when breakpoint is hit
    $validated = $request->validate([...]);

    // Inspect variables in Debug panel
    $user = User::create($validated);

    // Step through code with F10 (Step Over), F11 (Step Into)
    return response()->json($user);
}
```

### JavaScript/React Debugging

#### 1. **Browser Debugging**

Create `.vscode/launch.json`:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome",
            "url": "http://localhost:5173",
            "webRoot": "${workspaceFolder}/resources/js",
            "sourceMapPathOverrides": {
                "webpack:///./resources/js/*": "${webRoot}/*"
            }
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Vitest Tests",
            "runtimeExecutable": "npm",
            "runtimeArgs": ["run", "test"],
            "console": "integratedTerminal"
        }
    ]
}
```

#### 2. **React DevTools Integration**

```typescript
// Use debugger statement
function UserProfile({ userId }: Props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        debugger; // Execution pauses here
        fetchUser(userId).then(setUser);
    }, [userId]);

    console.log('Rendered with:', { user, userId });

    return <div>{user?.name}</div>;
}
```

### Debug Console Tips

```javascript
// Evaluate expressions in Debug Console
>> user.email
"john@example.com"

>> users.filter(u => u.active).length
42

>> JSON.stringify(config, null, 2)
"{
  "apiUrl": "...",
  ...
}"
```

---

## Terminal & Task Management

### Integrated Terminal

#### Multiple Terminals

```bash
# Create named terminals for different tasks
Terminal 1: Laravel Server (php artisan serve)
Terminal 2: Vite Dev Server (npm run dev)
Terminal 3: Queue Worker (php artisan queue:work)
Terminal 4: General Commands
```

### Tasks Configuration

Create `.vscode/tasks.json`:

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Laravel: Serve",
            "type": "shell",
            "command": "php artisan serve",
            "isBackground": true,
            "problemMatcher": [],
            "presentation": {
                "reveal": "always",
                "panel": "dedicated"
            }
        },
        {
            "label": "Vite: Dev",
            "type": "shell",
            "command": "npm run dev",
            "isBackground": true,
            "problemMatcher": [],
            "presentation": {
                "reveal": "always",
                "panel": "dedicated"
            }
        },
        {
            "label": "Start All Servers",
            "dependsOn": ["Laravel: Serve", "Vite: Dev"],
            "problemMatcher": []
        },
        {
            "label": "Run Tests",
            "type": "shell",
            "command": "php artisan test",
            "group": "test",
            "presentation": {
                "reveal": "always"
            }
        }
    ]
}
```

Run tasks: `Ctrl+Shift+P` → "Tasks: Run Task"

---

## Git Integration

### GitLens Features

```
- Line blame annotations
- File history
- Commit search
- Branch comparison
- Interactive rebase
- Stash management
```

### Useful Git Commands in VS Code

```bash
# Stage changes
Ctrl+Shift+G → Stage individual files

# Commit
Ctrl+Shift+G → Type message → Ctrl+Enter

# View file history
Right-click file → "Git: View File History"

# Compare with previous version
Right-click file → "Git: Open Changes"

# Blame
Right-click line → "Git: Toggle Line Blame"
```

---

## Productivity Tips

### 1. **Multi-Cursor Editing**

```
Select word → Ctrl+D repeatedly → Edit all at once
Alt+Click → Place cursors manually
Ctrl+Alt+↑/↓ → Add cursor above/below
```

### 2. **Emmet Abbreviations**

```html
<!-- Type: div.container>ul>li*5>a -->
<!-- Expands to: -->
<div class="container">
    <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
    </ul>
</div>
```

### 3. **Workspace Shortcuts**

- Save workspace: File → Save Workspace As
- Quick project switching: Ctrl+R
- Search across files: Ctrl+Shift+F

### 4. **Zen Mode**

- Focus on code: Ctrl+K Z
- Exit: Press Esc twice

### 5. **Command Palette Power**

```
Ctrl+Shift+P:
- "Format Document"
- "Organize Imports"
- "Reload Window"
- "Toggle Word Wrap"
- "Transform to Uppercase/Lowercase"
```

---

## Advanced VS Code Features

### 1. **Workspace Settings**

Create `.vscode/settings.json` for project-specific settings:

```json
{
    "php.validate.executablePath": "/usr/bin/php",
    "intelephense.environment.phpVersion": "8.2.0",
    "files.associations": {
        "*.blade.php": "blade"
    }
}
```

### 2. **Workspace Snippets**

Project-specific snippets in `.vscode/*.code-snippets`

### 3. **Problem Matchers**

Automatically parse errors from build output

### 4. **Remote Development**

- SSH into servers
- Develop in containers
- WSL integration

---

**Next**: [Debugging Techniques →](./04_DEBUGGING_TECHNIQUES.md)
