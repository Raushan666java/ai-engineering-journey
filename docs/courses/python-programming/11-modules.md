# Chapter 11: Modules and Packages

## Learning Objectives

By the end of this chapter, students will be able to:
- Create and import modules using various import mechanisms
- Use the `if __name__ == "__main__"` guard correctly
- Organise code into packages with `__init__.py`
- Distinguish absolute and relative imports
- Manage `sys.path` and third-party dependencies with pip
- Build and distribute packages using setuptools

![Modules and Packages](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/11-modules.png)

## 11.1 Module Basics

A module is a `.py` file containing Python definitions and statements. The filename (without `.py`) is the module name:

```python
# mymodule.py
def greet(name):
    return f"Hello, {name}!"

PI = 3.14159

class Circle:
    def __init__(self, radius):
        self.radius = radius

print("mymodule loaded")
```

Import it in another file:

```python
# main.py
import mymodule

print(mymodule.greet("Alice"))   # Hello, Alice!
print(mymodule.PI)               # 3.14159
circle = mymodule.Circle(5)
```

When a module is imported, Python executes all of its code. Subsequent imports use a cached version from `sys.modules`:

```python
import mymodule  # prints "mymodule loaded"
import mymodule  # no output â€” already cached
```

## 11.2 Import Mechanisms

### 11.2.1 Basic Import

```python
import math            # imports the module object
print(math.sqrt(16))   # 4.0
```

### 11.2.2 Import with Alias

```python
import numpy as np
print(np.array([1, 2, 3]))
```

### 11.2.3 Import Specific Names

```python
from math import sqrt, pi
print(sqrt(25))   # 5.0
print(pi)         # 3.14159
```

### 11.2.4 Import All Names

```python
from math import *   # imports all public names (discouraged)
print(sin(0))        # 0.0
```

Avoid `import *` because it pollutes the namespace and can silently override existing names.

### 11.2.5 Import with Alias for Specific Names

```python
from math import sqrt as square_root
print(square_root(9))  # 3.0
```

## 11.3 if __name__ == "__main__"

The `__name__` variable is `"__main__"` when the file is executed directly, and the module name when imported:

```python
# calculator.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

if __name__ == "__main__":
    # Test code â€” runs only when executed directly
    print(add(2, 3))       # 5
    print(subtract(10, 4)) # 6
```

```python
# main.py
import calculator         # does NOT run the test block
print(calculator.add(5, 3))  # 8
```

This guard allows a file to serve both as a reusable module and as a standalone script.

## 11.4 Packages

A package is a directory containing an `__init__.py` file (possibly empty) and submodules:

```
mypackage/
    __init__.py
    math_ops.py
    string_ops.py
```

```python
# mypackage/__init__.py
from .math_ops import add, subtract
from .string_ops import uppercase

# mypackage/math_ops.py
def add(a, b): return a + b
def subtract(a, b): return a - b

# mypackage/string_ops.py
def uppercase(s): return s.upper()
def reverse(s): return s[::-1]
```

Usage:

```python
import mypackage
print(mypackage.add(3, 4))       # 7
print(mypackage.uppercase("hi")) # HI

from mypackage import math_ops
print(math_ops.subtract(10, 3))  # 7

from mypackage.math_ops import add
print(add(1, 2))                # 3
```

In Python 3.3+, `__init__.py` is optional for namespace packages (used for splitting a package across directories). However, explicit `__init__.py` is still recommended for regular packages.

## 11.5 Absolute vs Relative Imports

### 11.5.1 Absolute Imports

Absolute imports use the full path from the project root or from a package root:

```python
from package.submodule import function

# Examples
import os
from collections import OrderedDict
from myproject.utils.helpers import format_date
```

Absolute imports are explicit and unambiguous.

### 11.5.2 Relative Imports

Relative imports use dots to indicate the current package:

```python
# Inside mypackage/math_ops.py
from . import config              # sibling module
from .string_ops import reverse   # sibling
from .. import parent_module      # parent package
from ..other import something     # sibling of parent
```

- `.` â€” current package
- `..` â€” parent package
- `...` â€” grandparent package

Relative imports cannot be used in scripts executed directly (only in modules within a package).

## 11.6 sys.path and Module Search

Python searches for modules in `sys.path`, which includes:

1. The directory containing the script (or current directory in interactive mode)
2. Directories in the `PYTHONPATH` environment variable
3. Standard library directories
4. Site-packages directories (third-party packages)

```python
import sys
for path in sys.path:
    print(path)
```

Modify `sys.path` to add custom search paths:

```python
import sys
sys.path.append("/path/to/my/modules")

import mymodule  # now found
```

This is fragile â€” prefer installing modules properly or using `PYTHONPATH`.

## 11.7 Third-Party Packages with pip

```bash
pip install requests
pip install "requests>=2.28,<3.0"
pip install numpy pandas matplotlib
```

### requirements.txt

```
requests==2.31.0
numpy>=1.24,<2.0
pandas>=2.0
```

```bash
pip install -r requirements.txt
pip freeze > requirements.txt  # snapshot current environment
```

### Common Commands

| Command | Purpose |
|---------|---------|
| `pip install <pkg>` | Install package |
| `pip install -e .` | Install current package in editable mode |
| `pip uninstall <pkg>` | Remove package |
| `pip list` | List installed packages |
| `pip show <pkg>` | Package details |
| `pip check` | Verify dependencies are compatible |

## 11.8 Wheel vs Source Distribution

- **Source distribution (sdist)**: `.tar.gz` containing source code; requires a build step.
- **Wheel**: `.whl` containing pre-built files; installs without compilation.

```bash
# Build distributions
python -m pip install build
python -m build
```

This creates both `dist/mypackage-1.0.0.tar.gz` and `dist/mypackage-1.0.0-py3-none-any.whl`.

Prioritise wheel packages â€” they install faster and avoid build-time dependency issues.

## 11.9 Creating a Distributable Package

Project structure for distribution:

```
myproject/
    pyproject.toml
    README.md
    src/
        myproject/
            __init__.py
            core.py
            utils.py
    tests/
        test_core.py
```

Minimal `pyproject.toml`:

```toml
[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"

[project]
name = "myproject"
version = "0.1.0"
description = "My awesome project"
requires-python = ">=3.10"
dependencies = [
    "requests>=2.28",
]
```

Install in editable mode during development:

```bash
pip install -e .
```

This makes the package importable and reflects local changes immediately.

## 11.10 Module Recursion and Circular Imports

A circular import occurs when two modules import each other:

```python
# a.py
import b
X = "from a"

# b.py
import a
Y = "from b"
```

This can cause `ImportError` or `AttributeError`. Solutions:

1. Restructure code to remove the cycle.
2. Move the import inside the function (lazy import):

```python
# b.py
def get_x():
    import a  # imported only when called
    return a.X
```

3. Use a shared third module for common dependencies.

Lazy imports are a workaround, not a design â€” restructure to eliminate cycles.

## Summary

- Modules are `.py` files; packages are directories with `__init__.py`.
- Import styles: `import m`, `from m import n`, `import m as alias`.
- `if __name__ == "__main__"` guards script-only code.
- Relative imports use dots; absolute imports use full paths.
- `sys.path` controls module search order.
- pip installs from PyPI; use `requirements.txt` to pin dependencies.
- Wheels are preferred over source distributions for faster installation.
- Circular imports indicate design issues.

## Exercises

### Review Questions

1. What is the purpose of `if __name__ == "__main__"`?
2. What is the difference between absolute and relative imports?
3. Why is `from module import *` discouraged?
4. What goes into a `requirements.txt` file?
5. What is the difference between a wheel and a source distribution?

### Application Problems

1. Create a package `geometry` with submodules `shapes` (Circle, Rectangle, Triangle classes with area methods) and `utils` (a `distance` function). Write `__init__.py` to expose the main classes at the package level. Write a script that uses the package.
2. Take an existing script and refactor it into a package with `pyproject.toml` and proper module structure. Install it in editable mode and verify imports work.
3. Split a module with circular imports into three modules (a shared base, and two modules that import the base but not each other).

### Challenge Problem

Build a plugin system using `importlib`. Create a `PluginManager` that scans a `plugins/` directory for modules with a `register()` function, calls it, and stores the result. Load plugins dynamically using `importlib.import_module()`. Support enabling and disabling plugins at runtime. Demonstrate with at least two plugins that register different handlers.
