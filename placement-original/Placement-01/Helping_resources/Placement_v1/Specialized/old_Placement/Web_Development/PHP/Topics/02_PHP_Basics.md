# 2. PHP Basics

## PHP Tags
- Standard PHP tags: `<?php ?>` 
- Short echo tag: `<?= $variable ?>` (equivalent to `<?php echo $variable ?>`)
- Configuration option `short_open_tag` controls availability of `<? ?>` tags

## Output Methods
- `echo` - outputs one or more strings (not a function, no return value)
- `print` - outputs a string (returns 1)
- `print_r()` - prints human-readable information about a variable
- `var_dump()` - dumps information about a variable including type and value

## Variables
- Start with `$` symbol (e.g., `$name = "John";`)
- Case-sensitive (`$name` and `$Name` are different variables)
- Valid naming: letters, numbers, underscores (cannot start with a number)
- Variable variables: `$$var` (variable name stored in another variable)
- Variable scope: global, local, static

## Data Types
- **Scalar Types:**
  - `string` - sequence of characters
  - `integer` - whole numbers
  - `float` (or `double`) - decimal numbers
  - `boolean` - true or false
- **Compound Types:**
  - `array` - ordered map
  - `object` - instance of a class
- **Special Types:**
  - `NULL` - variable with no value
  - `resource` - reference to external resources

## Type Handling
- Weak typing (variables can change types)
- Type casting: `(int)$var`, `(string)$var`, `(array)$var`, etc.
- Type checking functions: `is_int()`, `is_string()`, `is_array()`, etc.
- `gettype()` - returns the type of a variable
- Strict typing (PHP 7+): `declare(strict_types=1);`

## Constants
- Defined with `define('NAME', value);` or `const NAME = value;`
- Cannot be changed once defined
- Naming convention: uppercase with underscores
- Predefined constants: `PHP_VERSION`, `PHP_OS`, `__FILE__`, `__LINE__`, etc.

## Operators
- **Arithmetic:** `+`, `-`, `*`, `/`, `%` (modulo), `**` (exponentiation)
- **Assignment:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`, etc.
- **Comparison:** `==`, `===` (identical), `!=`, `!==`, `<`, `>`, `<=`, `>=`, `<=>` (spaceship)
- **Logical:** `&&` (and), `||` (or), `!` (not), `and`, `or`, `xor`
- **String:** `.` (concatenation), `.=` (concatenation assignment)
- **Array:** `+` (union), `==` (equality), `===` (identity)
- **Increment/Decrement:** `++$var`, `$var++`, `--$var`, `$var--`
- **Bitwise:** `&`, `|`, `^`, `~`, `<<`, `>>`
- **Error Control:** `@` (suppresses error messages)
- **Execution:** `` (backticks - execute shell commands)
- **Ternary:** `? :` and null coalescing `??` (PHP 7+)

## Comments
- Single-line: `// comment` or `# comment`
- Multi-line: `/* comment */`
- PHPDoc style: `/** documentation */`

## PHP Superglobals
- `$_GET` - HTTP GET variables
- `$_POST` - HTTP POST variables
- `$_REQUEST` - HTTP Request variables (combination of GET, POST, COOKIE)
- `$_SERVER` - Server and execution environment information
- `$_SESSION` - Session variables
- `$_COOKIE` - HTTP Cookies
- `$_FILES` - HTTP File Upload variables
- `$_ENV` - Environment variables
- `$GLOBALS` - References all variables in global scope

## Best Learning Methods
- Practice declaring variables and using operators
- Experiment with different data types and type conversion
- Create simple scripts to understand variable scope
- Use `var_dump()` to inspect variables during development
- Reference: https://www.php.net/manual/en/language.types.php
