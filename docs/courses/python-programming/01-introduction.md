# Chapter 1: Introduction to Python

## Learning Objectives

By the end of this chapter, students will be able to:
- Summarise the history and design philosophy of Python
- Install Python and configure a development environment
- Execute Python code using the interactive REPL and script files
- Write syntactically correct Python with proper indentation and comments
- Create and manage virtual environments with venv and conda
- Install third-party packages using pip

![Python Ecosystem](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/python-programming/01-introduction.png)

## 1.1 A Brief History of Python

Python was conceived in the late 1980s by Guido van Rossum at Centrum Wiskunde & Informatica in the Netherlands as a successor to the ABC language. The first public release, Python 0.9.0, appeared in 1991 and already included exception handling, functions, and the core data types list, dict, and str.

Python 2.0 was released in 2000, introducing list comprehensions and garbage collection. Python 3.0 (2008) was a major, backward-incompatible revision that cleaned up language inconsistencies. Python 2 reached end-of-life on January 1, 2020. All modern development uses Python 3. The language is now maintained by the Python Software Foundation and follows PEP 8 (style guide) and PEP 572 (walrus operator) among hundreds of enhancement proposals.

The design philosophy is captured in The Zen of Python (PEP 20), which emphasises readability, simplicity, and explicitness over implicit behaviour.

## 1.2 Installing Python

### 1.2.1 Official Distribution

Download the latest installer from python.org. Verify the installation:

```bash
python --version
```

On Windows, ensure "Add Python to PATH" is checked during installation. On macOS, consider using Homebrew: `brew install python@3.12`. On Linux, use the system package manager: `sudo apt install python3 python3-pip`.

### 1.2.2 Alternative Distributions

Anaconda and Miniconda bundle Python with data-science libraries and the conda package manager. These are popular in scientific computing but are heavier than the official distribution.

```bash
# Miniconda installation
# Download from docs.conda.io, then:
conda --version
```

## 1.3 The Python REPL

The Read-Eval-Print Loop (REPL) is an interactive environment for experimenting with Python. Start it by typing `python` (or `python3`) in a terminal:

```python
Python 3.12.0 (main, Oct  2 2023, 12:22:05)
[Clang 15.0.0] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> 2 + 2
4
>>> print("Hello, world!")
Hello, world!
>>> exit()
```

The REPL evaluates expressions immediately. Use `exit()` or Ctrl+D (Unix) / Ctrl+Z + Enter (Windows) to quit. The underscore `_` holds the last evaluated result in interactive mode.

```python
>>> 42 * 3
126
>>> _ * 2
252
```

## 1.4 First Program

Create a file named `hello.py`:

```python
# hello.py
print("Hello, world!")
```

Execute it:

```bash
python hello.py
```

The `print()` function outputs its argument to the terminal followed by a newline. Unlike many compiled languages, Python is interpreted: the source file is compiled to bytecode (.pyc files stored in `__pycache__/`) automatically, then executed by the Python Virtual Machine.

## 1.5 Indentation and Block Structure

Python uses indentation (typically four spaces) to delimit blocks rather than curly braces or keywords. Consistent indentation is mandatory:

```python
x = 10
if x > 5:
    print("x is greater than 5")
    print("This is still inside the if block")
print("This is outside the if block")
```

Mixing tabs and spaces is an error (PEP 8 recommends spaces only). The standard indentation width is four spaces. Most editors can be configured to insert spaces when the Tab key is pressed.

```python
# This will cause IndentationError
if True:
    print("indented with one tab")
    print("indented with four spaces")
```

## 1.6 Comments

Comments explain code to human readers and are ignored by the interpreter:

```python
# This is a single-line comment

x = 5  # inline comment

"""
Multi-line string literals used as docstrings
(or simply multi-line comments when not assigned
to anything). These are parsed but not executed.
"""
```

Triple-quoted strings at the top of a module, class, or function become docstrings accessible via `help()`.

## 1.7 Integrated Development Environments

| IDE / Editor | Key Features |
|--------------|--------------|
| PyCharm | Full-featured, refactoring, debugging, Django support |
| VS Code | Lightweight, Python extension, Jupyter notebook integration |
| IDLE | Built-in, minimal, sufficient for learning |
| Jupyter Lab | Cell-based execution, great for data exploration |

VS Code with the Python extension (by Microsoft) is recommended for this course. Install it and configure the Python interpreter path:

```json
// .vscode/settings.json
{
    "python.defaultInterpreterPath": ".venv/bin/python",
    "editor.formatOnSave": true
}
```

## 1.8 Virtual Environments

Virtual environments isolate project dependencies so that different projects can use different package versions.

### 1.8.1 venv (Built-in)

```bash
# Create a virtual environment
python -m venv .venv

# Activate (Unix/macOS)
source .venv/bin/activate

# Activate (Windows)
.venv\Scripts\activate

# Deactivate
deactivate
```

Once activated, `pip install` places packages inside `.venv/` rather than the global site-packages.

### 1.8.2 Conda Environments

```bash
conda create --name myenv python=3.12
conda activate myenv
conda install numpy pandas
conda deactivate
```

Conda environments can mix Python and non-Python dependencies (e.g., CUDA, C libraries). They are heavier but more powerful for data-science workflows.

## 1.9 pip: The Package Installer

pip installs packages from the Python Package Index (PyPI, pypi.org):

```bash
pip install requests        # latest version
pip install requests==2.31.0  # specific version
pip install "requests>=2.28"   # version constraint
pip list                     # show installed packages
pip freeze > requirements.txt  # export dependencies
pip install -r requirements.txt  # install from file
```

Common commands:

- `pip install --upgrade pip` — upgrade pip itself
- `pip show <package>` — package metadata
- `pip uninstall <package>` — remove a package
- `pip cache purge` — reclaim disk space

## 1.10 Running Python Scripts

Beyond `python script.py`, Python supports several invocation modes:

```bash
# Run module as script
python -m http.server 8000

# Execute a string
python -c "print(sum(range(10)))"

# Interactive mode after executing a script
python -i script.py
```

The `-m` flag runs a library module as a script. The `-c` flag executes the given string. The `-i` flag drops into the REPL after the script finishes, which is useful for debugging.

## Summary

- Python is an interpreted, dynamically typed language emphasising readability.
- The REPL provides interactive experimentation.
- Indentation (four spaces) defines block structure.
- `venv` and `conda` provide environment isolation.
- `pip` manages third-party packages from PyPI.

## Exercises

### Review Questions

1. What does REPL stand for and what is its purpose?
2. Why does Python use indentation instead of braces?
3. What is the difference between `venv` and `conda`?
4. How do you check which packages are installed in the current environment?
5. What does `python -m http.server 8000` do?

### Application Problems

1. Install Python 3.10 or later. Create a virtual environment named `.venv` and activate it. Run `pip list` to show the baseline packages.
2. Write a script that prints your name, age, and favourite programming language. Execute it from the terminal.
3. Use the REPL to compute the factorial of 10 (hint: use `math.factorial` after importing `math`). Use the underscore variable to double the result.

### Challenge Problem

Write a script that creates a virtual environment, installs the `requests` and `pandas` packages, generates a `requirements.txt` file, then deactivates and removes the environment — all using `subprocess.run` or `os.system`. Verify each step with print statements.
