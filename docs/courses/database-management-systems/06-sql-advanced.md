# Chapter 6: Advanced SQL â€” Subqueries, CTEs, Window Functions, Pivot, MERGE, Dynamic SQL, Stored Procedures, Functions, Triggers, Views, Temp Tables

> **Previous:** [Chapter 5: SQL Joins and Subqueries](./05-sql-joins.md) | **Next:** [Chapter 7: Normalization](./07-normalization.md)

---

## 6.1 Subqueries

A **subquery** (inner query / nested query) is a query embedded inside another query (outer query). Subqueries can return scalar values, single rows, tables, or be correlated to the outer query.

### Real-World Analogy

> **Scalar Subquery** = Asking "What's the average salary in this company?" before deciding your salary negotiation. One number.
> **Row Subquery** = Asking "What's the full profile of the top performer?" â€” one complete row.
> **Table Subquery** = Asking "Which departments have above-average headcount?" â€” a whole result set.
> **Correlated Subquery** = Asking "For each employee, how does their salary compare to THEIR department's average?" â€” the question changes per employee.

### 6.1.1 Scalar Subquery

Returns exactly **one column and one row** (single value). Used anywhere a single value is allowed: SELECT, WHERE, HAVING, SET.

**Steps:**
1. DBMS executes the inner subquery first (execution-order characteristic, though optimizer may rewrite).
2. The single scalar result replaces the subquery in the outer query.
3. Outer query proceeds using that value.

**Pseudocode:**
```
function scalar_subquery():
    inner_result = execute("SELECT AVG(salary) FROM employees")
    // inner_result = 75000 (single value)
    outer_query = "SELECT name, salary FROM employees WHERE salary > " + inner_result
    return execute(outer_query)
```

**SQL:**
```sql
-- Sample data
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);
INSERT INTO employees VALUES
(1, 'Alice',   'Engineering', 95000),
(2, 'Bob',     'Engineering', 72000),
(3, 'Charlie', 'Sales',       68000),
(4, 'Diana',   'Sales',       88000),
(5, 'Eve',     'Marketing',   52000);

-- Scalar subquery in WHERE
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
-- AVG(salary) = (95000+72000+68000+88000+52000)/5 = 75000
-- Result: Alice (95000), Diana (88000)

-- Scalar subquery in SELECT
SELECT name, salary,
       (SELECT AVG(salary) FROM employees) AS company_avg,
       salary - (SELECT AVG(salary) FROM employees) AS diff_from_avg
FROM employees;

-- Scalar subquery in HAVING
SELECT department, AVG(salary) AS dept_avg
FROM employees
GROUP BY department
HAVING AVG(salary) > (SELECT AVG(salary) FROM employees);
-- Only departments above company avg
```

**Dry Run Trace Table (Scalar Subquery):**

| Step | Operation | Result |
|------|-----------|--------|
| 1 | Execute inner: `SELECT AVG(salary) FROM employees` | 75000.00 |
| 2 | Rewrite outer: `SELECT name, salary FROM employees WHERE salary > 75000` | â€” |
| 3 | Check Alice: 95000 > 75000 | INCLUDE |
| 4 | Check Bob: 72000 > 75000 | EXCLUDE |
| 5 | Check Charlie: 68000 > 75000 | EXCLUDE |
| 6 | Check Diana: 88000 > 75000 | INCLUDE |
| 7 | Check Eve: 52000 > 75000 | EXCLUDE |
| 8 | Return result set | Alice, Diana |

**C++ Implementation:**
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <numeric>
#include <algorithm>

struct Employee {
    int id;
    std::string name;
    std::string dept;
    double salary;
};

class ScalarSubquerySimulator {
    std::vector<Employee> data;
public:
    ScalarSubquerySimulator(std::vector<Employee> d) : data(std::move(d)) {}

    double computeAvg() {
        if (data.empty()) return 0.0;
        double sum = std::accumulate(data.begin(), data.end(), 0.0,
            [](double acc, const Employee& e) { return acc + e.salary; });
        return sum / data.size();
    }

    std::vector<Employee> aboveAvg() {
        double avg = computeAvg();
        std::vector<Employee> result;
        std::copy_if(data.begin(), data.end(), std::back_inserter(result),
            [avg](const Employee& e) { return e.salary > avg; });
        return result;
    }

    void display(const std::vector<Employee>& v) {
        for (auto& e : v)
            std::cout << e.name << " : " << e.salary << "\n";
    }
};

int main() {
    std::vector<Employee> emps = {
        {1,"Alice","Engineering",95000},
        {2,"Bob","Engineering",72000},
        {3,"Charlie","Sales",68000},
        {4,"Diana","Sales",88000},
        {5,"Eve","Marketing",52000}
    };
    ScalarSubquerySimulator sim(emps);
    std::cout << "Company Avg: " << sim.computeAvg() << "\n";
    auto result = sim.aboveAvg();
    std::cout << "Employees above avg:\n";
    sim.display(result);
    return 0;
}
```

**Python Implementation:**
```python
from dataclasses import dataclass
from statistics import mean

@dataclass
class Employee:
    emp_id: int
    name: str
    department: str
    salary: float

employees = [
    Employee(1, "Alice", "Engineering", 95000),
    Employee(2, "Bob", "Engineering", 72000),
    Employee(3, "Charlie", "Sales", 68000),
    Employee(4, "Diana", "Sales", 88000),
    Employee(5, "Eve", "Marketing", 52000),
]

# Scalar subquery analog
avg_salary = mean(e.salary for e in employees)
above_avg = [e for e in employees if e.salary > avg_salary]
print(f"Company average: {avg_salary:.2f}")
print("Above average:")
for e in above_avg:
    print(f"  {e.name}: {e.salary}")
```

**Complexity:**
- **Time:** O(n + m) where n = inner query rows, m = outer query rows. The scalar subquery runs once (O(n)), then the outer query uses the result for filtering (O(m)).
- **Space:** O(1) â€” only the single scalar value is stored between executions.
- **Why linear?** Both queries are full table scans in the worst case. If indexes exist on WHERE columns, can drop to O(log n).

**Edge Cases:**
- **No rows returned:** Scalar subquery returns NULL. If used with `>` comparison, result is empty (NULL comparison yields unknown).
- **Multiple rows:** Runtime error â€” scalar subquery must return exactly one row. Use `MAX()` or `TOP 1` to guarantee singleness.
- **NULLs in AVG:** AVG ignores NULLs. `AVG(salary)` with one NULL among five values still divides by 5.

---

### 6.1.2 Row Subquery

Returns a **single row** with multiple columns. Used with row constructors `(col1, col2) = (subquery)`.

**Steps:**
1. Inner query produces one row (multiple columns).
2. Outer query compares using row comparison operators.
3. Returns all rows matching the composite comparison.

**Pseudocode:**
```
function row_subquery():
    row = execute("SELECT MAX(salary), MIN(salary) FROM employees")
    // row = (95000, 52000)
    return execute("SELECT * FROM employees WHERE (salary, 0) > (" + row.salary + ", " + row.minsalary + ")")
```

**SQL:**
```sql
-- Find employees earning exactly the max salary
SELECT name, salary, department
FROM employees
WHERE (salary, department) = (
    SELECT MAX(salary), 'Engineering' FROM employees
);
-- Returns Alice with (95000, Engineering)

-- Row comparison: find employees with the same salary AND department as a given employee
SELECT e1.name, e1.salary, e1.department
FROM employees e1
WHERE (e1.salary, e1.department) IN (
    SELECT e2.salary, e2.department
    FROM employees e2
    WHERE e2.emp_id <> e1.emp_id
);
```

**C++ Implementation:**
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <tuple>
#include <algorithm>

struct Employee {
    int id; std::string name; std::string dept; double salary;
};

struct RowSubqueryResult {
    double maxSalary;
    std::string dept;
};

RowSubqueryResult executeRowSubquery(const std::vector<Employee>& data) {
    auto it = std::max_element(data.begin(), data.end(),
        [](const Employee& a, const Employee& b) { return a.salary < b.salary; });
    return {it->salary, it->dept};
}

int main() {
    std::vector<Employee> data = {
        {1,"Alice","Engineering",95000},{2,"Bob","Engineering",72000},
        {3,"Charlie","Sales",68000},{4,"Diana","Sales",88000}
    };
    auto row = executeRowSubquery(data);
    std::cout << "Max salary row: (" << row.maxSalary << ", " << row.dept << ")\n";
    for (auto& e : data)
        if (std::tie(e.salary, e.dept) == std::tie(row.maxSalary, row.dept))
            std::cout << "Match: " << e.name << "\n";
    return 0;
}
```

**Python Implementation:**
```python
employees = [
    {"id":1,"name":"Alice","dept":"Engineering","salary":95000},
    {"id":2,"name":"Bob","dept":"Engineering","salary":72000},
    {"id":3,"name":"Charlie","dept":"Sales","salary":68000},
    {"id":4,"name":"Diana","dept":"Sales","salary":88000},
]
max_salary_emp = max(employees, key=lambda e: e["salary"])
max_row = (max_salary_emp["salary"], max_salary_emp["dept"])
for e in employees:
    if (e["salary"], e["dept"]) == max_row:
        print(f"Match: {e['name']}")
```

**Complexity:** O(n) â€” finding max requires a full scan. Row comparison is O(m) with m matching constraints.

---

### 6.1.3 Table Subquery

Returns **multiple rows and columns**. Used in FROM clause (derived table) or IN / EXISTS / JOIN.

**Steps:**
1. Inner query executes, producing a temporary result set (derived table).
2. Outer query treats it as a regular table (must be aliased in FROM).
3. Subsequent operations (WHERE, JOIN, GROUP BY) apply normally.

**Pseudocode:**
```
function table_subquery():
    derived = execute("SELECT department, AVG(salary) as avg_sal FROM employees GROUP BY department")
    // derived = {(Engineering, 83500), (Sales, 78000), (Marketing, 52000)}
    return execute("SELECT e.name, e.salary, d.avg_sal FROM employees e JOIN " + derived + " d ON e.department = d.department")
```

**SQL:**
```sql
-- Table subquery in FROM (derived table)
SELECT e.name, e.salary, dept_stats.avg_salary, e.salary - dept_stats.avg_salary AS diff
FROM employees e
JOIN (
    SELECT department, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
) dept_stats ON e.department = dept_stats.department;

-- Table subquery with IN
SELECT name, salary
FROM employees
WHERE department IN (
    SELECT department
    FROM employees
    GROUP BY department
    HAVING AVG(salary) > 70000
);

-- Table subquery as derived table with filtering
SELECT department, max_sal
FROM (
    SELECT department, MAX(salary) AS max_sal
    FROM employees
    GROUP BY department
) dept_max
WHERE max_sal > 80000;
```

**Dry Run Trace Table (Table Subquery):**

| Step | Operation | Intermediate Result |
|------|-----------|-------------------|
| 1 | Execute inner: GROUP BY department, AVG(salary) | Engineering: 83500, Sales: 78000, Marketing: 52000 |
| 2 | Outer query joins employees with derived table | â€” |
| 3 | Alice: 95000 vs Engineering: 83500 â†’ diff = 11500 | INCLUDE |
| 4 | Bob: 72000 vs Engineering: 83500 â†’ diff = -11500 | INCLUDE |
| 5 | Charlie: 68000 vs Sales: 78000 â†’ diff = -10000 | INCLUDE |
| 6 | Diana: 88000 vs Sales: 78000 â†’ diff = 10000 | INCLUDE |
| 7 | Return all rows with computed diff | 5 rows |

**C++ Implementation:**
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <numeric>

struct Employee { int id; std::string name; std::string dept; double salary; };

struct DeptStats { double avgSalary; };

std::unordered_map<std::string, DeptStats> computeDeptStats(const std::vector<Employee>& data) {
    std::unordered_map<std::string, std::pair<double, int>> acc;
    for (auto& e : data) {
        acc[e.dept].first += e.salary;
        acc[e.dept].second++;
    }
    std::unordered_map<std::string, DeptStats> result;
    for (auto& [dept, pair] : acc)
        result[dept] = {pair.first / pair.second};
    return result;
}

int main() {
    std::vector<Employee> data = {
        {1,"Alice","Engineering",95000},{2,"Bob","Engineering",72000},
        {3,"Charlie","Sales",68000},{4,"Diana","Sales",88000},{5,"Eve","Marketing",52000}
    };
    auto stats = computeDeptStats(data);
    for (auto& e : data)
        std::cout << e.name << " | salary=" << e.salary
                  << " | dept_avg=" << stats[e.dept].avgSalary
                  << " | diff=" << (e.salary - stats[e.dept].avgSalary) << "\n";
    return 0;
}
```

**Python Implementation:**
```python
from statistics import mean

employees = [
    {"id":1,"name":"Alice","dept":"Engineering","salary":95000},
    {"id":2,"name":"Bob","dept":"Engineering","salary":72000},
    {"id":3,"name":"Charlie","dept":"Sales","salary":68000},
    {"id":4,"name":"Diana","dept":"Sales","salary":88000},
    {"id":5,"name":"Eve","dept":"Marketing","salary":52000},
]
dept_stats = {}
for e in employees:
    dept_stats.setdefault(e["dept"], []).append(e["salary"])
dept_avg = {d: mean(sals) for d, sals in dept_stats.items()}
for e in employees:
    diff = e["salary"] - dept_avg[e["dept"]]
    print(f"{e['name']}: {e['salary']} vs dept avg {dept_avg[e['dept']]:.0f}, diff={diff:.0f}")
```

**Complexity:**
- **Time:** O(n + d Ã— m) where n = inner rows, d = distinct groups, m = outer rows matching. GROUP BY is O(n log n) worst case (sorting) or O(n) with hash aggregation.
- **Space:** O(d) â€” the derived table occupies memory proportional to distinct groups.
- **Why O(n log n) for GROUP BY?** Sorting-based aggregation is the default in most RDBMS when memory permits hashing.

---

### 6.1.4 Correlated Subquery

References columns from the **outer query**. Executed **once per outer row** â€” the inner query depends on the current outer row's value.

**Real-World Analogy:** For each employee, check if their salary exceeds THEIR department's average. The question changes per department.

**Steps:**
1. Outer query fetches one row.
2. Inner query executes using a value from that outer row (correlation).
3. WHERE/HAVING condition evaluated with the inner result.
4. Repeat for every outer row â€” O(n Ã— m) complexity.

**Pseudocode:**
```
function correlated_subquery(outer_rows):
    result = []
    for each row in outer_rows:                    // O(n)
        inner_result = execute(
            "SELECT AVG(salary) FROM employees e2 WHERE e2.department = " + row.department
        )                                           // O(m) per iteration
        if row.salary > inner_result:               // total O(n Ã— m)
            result.append(row)
    return result
```

**SQL:**
```sql
-- Find employees earning more than their department average
SELECT e1.name, e1.salary, e1.department
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department = e1.department
);

-- Correlated EXISTS: departments that have at least one employee earning > 90000
SELECT DISTINCT e1.department
FROM employees e1
WHERE EXISTS (
    SELECT 1
    FROM employees e2
    WHERE e2.department = e1.department
      AND e2.salary > 90000
);

-- Correlated NOT EXISTS: employees who are the only one in their department
SELECT e1.name, e1.department
FROM employees e1
WHERE NOT EXISTS (
    SELECT 1
    FROM employees e2
    WHERE e2.department = e1.department
      AND e2.emp_id <> e1.emp_id
);
```

**Dry Run Trace Table (Correlated Subquery):**

| Outer Row | Correlation Value | Inner Query (AVG for dept) | Condition (salary > avg) | Result |
|-----------|-----------------|---------------------------|--------------------------|--------|
| Alice (Eng, 95K) | Engineering | (95K+72K)/2 = 83500 | 95000 > 83500 âœ“ | INCLUDE |
| Bob (Eng, 72K) | Engineering | 83500 | 72000 > 83500 âœ— | EXCLUDE |
| Charlie (Sales, 68K) | Sales | (68K+88K)/2 = 78000 | 68000 > 78000 âœ— | EXCLUDE |
| Diana (Sales, 88K) | Sales | 78000 | 88000 > 78000 âœ“ | INCLUDE |
| Eve (Mktg, 52K) | Marketing | 52000 | 52000 > 52000 âœ— | EXCLUDE |

**C++ Implementation:**
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <numeric>

struct Employee { int id; std::string name; std::string dept; double salary; };

class CorrelatedSubquerySim {
    std::vector<Employee> data;
    // Cache dept averages to simulate DBMS optimization (avoid recomputing)
    std::unordered_map<std::string, double> deptAvgCache;

    double getDeptAvg(const std::string& dept) {
        if (deptAvgCache.count(dept)) return deptAvgCache[dept];
        double sum = 0; int count = 0;
        for (auto& e : data)
            if (e.dept == dept) { sum += e.salary; count++; }
        deptAvgCache[dept] = (count > 0) ? sum / count : 0;
        return deptAvgCache[dept];
    }

public:
    CorrelatedSubquerySim(std::vector<Employee> d) : data(std::move(d)) {}

    std::vector<Employee> aboveDeptAvg() {
        std::vector<Employee> result;
        for (auto& e : data)                      // O(n) outer
            if (e.salary > getDeptAvg(e.dept))     // O(m) per call, amortized O(1) with cache
                result.push_back(e);
        return result;
    }
};

int main() {
    std::vector<Employee> data = {
        {1,"Alice","Engineering",95000},{2,"Bob","Engineering",72000},
        {3,"Charlie","Sales",68000},{4,"Diana","Sales",88000},{5,"Eve","Marketing",52000}
    };
    CorrelatedSubquerySim sim(data);
    for (auto& e : sim.aboveDeptAvg())
        std::cout << e.name << " (" << e.dept << "): " << e.salary << "\n";
    return 0;
}
```

**Python Implementation:**
```python
from statistics import mean

employees = [
    {"id":1,"name":"Alice","dept":"Engineering","salary":95000},
    {"id":2,"name":"Bob","dept":"Engineering","salary":72000},
    {"id":3,"name":"Charlie","dept":"Sales","salary":68000},
    {"id":4,"name":"Diana","dept":"Sales","salary":88000},
    {"id":5,"name":"Eve","dept":"Marketing","salary":52000},
]

# Simulating a correlated subquery (naive O(n*m) approach)
def above_dept_avg(rows):
    result = []
    for e in rows:  # O(n)
        dept_salaries = [e2["salary"] for e2 in rows if e2["dept"] == e["dept"]]
        dept_avg = mean(dept_salaries)  # O(m) each iteration
        if e["salary"] > dept_avg:
            result.append(e)
    return result

for e in above_dept_avg(employees):
    print(f"{e['name']}: {e['salary']} in {e['dept']}")
```

**Complexity:**
- **Time:** O(n Ã— m) worst case â€” inner query runs n times, each scanning m rows. Best case O(n Ã— log m) with index on correlation column.
- **Space:** O(1) per iteration, no accumulation beyond outer result set.
- **WHY correlated subqueries can be slow:** The inner query is re-executed per outer row. DBMS optimizers often rewrite correlated subqueries to JOINs. Always EXPLAIN ANALYZE correlated subqueries.
- **Optimization:** Add index on the correlation column (e.g., `department`). This reduces inner query from O(m) to O(log m).

---

### 6.1.5 EXISTS / NOT EXISTS

EXISTS returns TRUE if the subquery returns **at least one row**. NOT EXISTS returns TRUE if the subquery returns **zero rows**.

**Real-World Analogy:** "Does at least one student have a perfect score?" â€” you stop checking as soon as you find one.

**Steps:**
1. For each row in the outer query, the subquery executes.
2. If ANY row satisfies the subquery, EXISTS returns TRUE immediately (short-circuit).
3. The outer row is included/excluded based on EXISTS/NOT EXISTS.

**SQL:**
```sql
-- Departments with at least one high earner
SELECT d.department_name
FROM departments d
WHERE EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.department_id = d.department_id
      AND e.salary > 100000
);

-- Customers who have placed NO orders
SELECT c.customer_id, c.name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id
);

-- EXISTS is more efficient than IN when the subquery is large
-- IN materializes the whole subquery; EXISTS can short-circuit
SELECT *
FROM products p
WHERE EXISTS (
    SELECT 1
    FROM order_items oi
    WHERE oi.product_id = p.product_id
      AND oi.quantity > 100
);
```

**Dry Run Trace Table (EXISTS):**

| Outer Row | Subquery Check | Short-Circuit | Result |
|-----------|---------------|---------------|--------|
| Engineering | EXISTS(SELECT 1 FROM emp WHERE dept='Engineering' AND salary>90K) | Alice matches â†’ stop | TRUE â†’ INCLUDE |
| Sales | EXISTS(SELECT 1 FROM emp WHERE dept='Sales' AND salary>90K) | No match | FALSE â†’ EXCLUDE |
| Marketing | EXISTS(SELECT 1 FROM emp WHERE dept='Marketing' AND salary>90K) | No match | FALSE â†’ EXCLUDE |

**C++ Implementation:**
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

struct Employee { int id; std::string name; std::string dept; double salary; };

bool existsHighEarner(const std::vector<Employee>& data, const std::string& dept, double threshold) {
    return std::any_of(data.begin(), data.end(),
        [&](const Employee& e) { return e.dept == dept && e.salary > threshold; });
}

int main() {
    std::vector<Employee> data = {
        {1,"Alice","Engineering",95000},{2,"Bob","Engineering",72000},
        {3,"Charlie","Sales",68000},{4,"Diana","Sales",88000}
    };
    std::vector<std::string> depts = {"Engineering","Sales","Marketing"};
    for (auto& d : depts)
        std::cout << d << ": " << (existsHighEarner(data, d, 90000) ? "HAS high earner" : "NO high earner") << "\n";
    return 0;
}
```

**Python Implementation:**
```python
employees = [
    {"dept":"Engineering","salary":95000},
    {"dept":"Engineering","salary":72000},
    {"dept":"Sales","salary":68000},
    {"dept":"Sales","salary":88000},
]
def exists_high_earner(dept, threshold=90000):
    return any(e["dept"] == dept and e["salary"] > threshold for e in employees)

for d in ["Engineering","Sales","Marketing"]:
    print(f"{d}: {'HAS high earner' if exists_high_earner(d) else 'NO high earner'}")
```

**Complexity:**
- **Time:** Best case O(1) if first row matches (short-circuit). Worst case O(n) if no match (full scan). With index on correlation column + salary: O(log n) per lookup.
- **Space:** O(1) â€” EXISTS does not materialize the subquery.
- **WHY EXISTS beats IN for large subqueries:** IN must compute and store the entire subquery result set. EXISTS can short-circuit on the first match.

---

### 6.1.6 ANY / ALL

Used with comparison operators: `= ANY` (same as IN), `> ANY` (greater than at least one), `> ALL` (greater than all).

**Real-World Analogy:** "ANY = beat at least one person in the race" vs "ALL = beat everyone in the race."

**Steps:**
1. Subquery executes, producing a list of values.
2. For ANY: condition is TRUE if comparison holds for AT LEAST ONE value in the list.
3. For ALL: condition is TRUE if comparison holds for EVERY value in the list.

**SQL:**
```sql
-- ANY: salary greater than ANY salary in Sales
SELECT name, salary
FROM employees
WHERE salary > ANY (
    SELECT salary FROM employees WHERE department = 'Sales'
);
-- Sales salaries: 68000, 88000
-- > ANY (68000, 88000) means > 68000
-- Returns: Alice (95000), Bob (72000), Diana (88000)

-- ALL: salary greater than ALL salaries in Sales
SELECT name, salary
FROM employees
WHERE salary > ALL (
    SELECT salary FROM employees WHERE department = 'Sales'
);
-- > ALL (68000, 88000) means > 88000
-- Returns: Alice (95000)

-- = ANY is equivalent to IN
SELECT * FROM employees
WHERE department = ANY (
    SELECT department FROM employees WHERE salary > 90000
);
-- Same as: WHERE department IN (SELECT department FROM employees WHERE salary > 90000)
```

**Dry Run Trace Table (ANY/ALL):**

| Employee | Salary | `> ANY Sales` (threshold: > 68000) | `> ALL Sales` (threshold: > 88000) |
|----------|--------|------------------------------------|------------------------------------|
| Alice | 95000 | 95000 > 68000 âœ“ | 95000 > 88000 âœ“ |
| Bob | 72000 | 72000 > 68000 âœ“ | 72000 > 88000 âœ— |
| Charlie | 68000 | 68000 > 68000 âœ— | 68000 > 88000 âœ— |
| Diana | 88000 | 88000 > 68000 âœ“ | 88000 > 88000 âœ— |
| Eve | 52000 | 52000 > 68000 âœ— | 52000 > 88000 âœ— |

**C++ Implementation:**
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

bool anyGreater(const std::vector<double>& values, double threshold) {
    return std::any_of(values.begin(), values.end(),
        [threshold](double v) { return v > threshold; });
}

bool allGreater(const std::vector<double>& values, double threshold) {
    return std::all_of(values.begin(), values.end(),
        [threshold](double v) { return v > threshold; });
}

int main() {
    std::vector<double> sales = {68000, 88000};
    double alice = 95000, bob = 72000, eve = 52000;
    for (auto [name, sal] : {std::pair{"Alice",alice},{"Bob",bob},{"Eve",eve}})
        std::cout << name << ": > ANY Sales=" << (sal > *std::min_element(sales.begin(), sales.end()))
                  << ", > ALL Sales=" << (sal > *std::max_element(sales.begin(), sales.end())) << "\n";
}
```

**Python Implementation:**
```python
sales_salaries = [68000, 88000]
employees = [("Alice",95000),("Bob",72000),("Charlie",68000),("Diana",88000),("Eve",52000)]
for name, sal in employees:
    any_gt = sal > min(sales_salaries)  # > ANY = greater than minimum
    all_gt = sal > max(sales_salaries)  # > ALL = greater than maximum
    print(f"{name}: > ANY Sales={any_gt}, > ALL Sales={all_gt}")
```

**Complexity:** O(n) to compute subquery result set, then O(1) for ANY/ALL evaluation (MIN/MAX optimization: `> ANY x` = `> MIN(x)`, `> ALL x` = `> MAX(x)`).

---

### 6.1.7 Subquery Types Comparison

| Property | Scalar | Row | Table | Correlated |
|----------|--------|-----|-------|------------|
| **Returns** | Single value | Single row | Multiple rows/cols | Depends on context |
| **Rows returned** | 1 | 1 | 0..N | 0..N |
| **Columns returned** | 1 | 1..N | 1..N | 1..N |
| **Executed** | Once | Once | Once | Per outer row |
| **Runtime** | O(n) | O(n) | O(n) | O(n Ã— m) worst |
| **Use in SELECT** | âœ“ | âœ— | âœ— | âœ“ |
| **Use in FROM** | âœ“ (as value) | âœ— | âœ“ (derived table) | âœ— |
| **Use in WHERE** | âœ“ | âœ“ (row constructors) | âœ“ (IN/EXISTS) | âœ“ |
| **Can use outer refs** | âœ— | âœ— | âœ— | âœ“ |
| **NULL handling** | NULL if no rows | NULL row if no rows | Empty set if no rows | Depends on comparison |
| **Optimization** | Index on aggregated column | Index on compared columns | Index on GROUP BY/WHERE | Index on correlation column |

---

## 6.2 Common Table Expressions (CTEs)

A CTE (`WITH` clause) defines a **temporary named result set** that exists only within the execution scope of the query. CTEs improve readability, enable recursion, and allow referencing the same subquery multiple times.

### Real-World Analogy

> **CTE** = A sticky note you write an intermediate calculation on, then use to build your final answer. You throw the sticky note away after you're done.
> **Recursive CTE** = Russian nesting dolls â€” opening each doll reveals a smaller doll inside, until you reach the smallest one (anchor), then you close them back up (recursion unwind).

### 6.2.1 Basic CTE

**Steps:**
1. Define the CTE using `WITH cte_name AS (subquery)`.
2. The CTE materializes (or inlines) as a temporary result.
3. Reference the CTE by name in the main query â€” can reference it multiple times.

**SQL:**
```sql
WITH high_earners AS (
    SELECT name, salary, department
    FROM employees
    WHERE salary > 75000
)
SELECT department, COUNT(*) AS count, AVG(salary) AS avg_salary
FROM high_earners
GROUP BY department
ORDER BY avg_salary DESC;
```

### 6.2.2 Multiple CTEs

```sql
WITH
dept_stats AS (
    SELECT department, AVG(salary) AS avg_sal, COUNT(*) AS headcount
    FROM employees
    GROUP BY department
),
dept_ranking AS (
    SELECT department, avg_sal, headcount,
           RANK() OVER (ORDER BY avg_sal DESC) AS rank
    FROM dept_stats
)
SELECT department, avg_sal, headcount, rank
FROM dept_ranking
WHERE rank <= 2;
```

**Dry Run Trace Table (Multiple CTEs):**

| CTE Step | Operation | Result |
|----------|-----------|--------|
| dept_stats | GROUP BY department | Eng: (83500,2), Sales: (78000,2), Mktg: (52000,1) |
| dept_ranking | RANK OVER (ORDER BY avg_sal DESC) | Eng:1, Sales:2, Mktg:3 |
| Main query | WHERE rank <= 2 | Eng: (83500,2,1), Sales: (78000,2,2) |

### 6.2.3 Recursive CTEs

A recursive CTE references **itself**. It has two parts:
1. **Anchor member:** The base result set (non-recursive initial query).
2. **Recursive member:** References the CTE by name, building on the previous iteration.

**Steps:**
1. Execute the anchor member â†’ result set R0.
2. Execute the recursive member using R0 â†’ result set R1.
3. Execute recursive member using R1 â†’ R2.
4. Repeat until the recursive member returns **zero rows**.
5. **UNION ALL** all result sets (R0 âˆª R1 âˆª R2 âˆª ...).

**Pseudocode:**
```
function recursive_cte(anchor_query, recursive_query, max_iterations=1000):
    result = execute(anchor_query)          // R0: anchor
    previous = result
    iteration = 1
    while iteration < max_iterations:
        current = execute(recursive_query using previous)
        if current is empty:
            break
        result = result UNION ALL current
        previous = current
        iteration++
    return result
```

**SQL:**
```sql
-- Generate number sequence 1 to 10
WITH RECURSIVE numbers(n) AS (
    SELECT 1                           -- Anchor
    UNION ALL
    SELECT n + 1 FROM numbers WHERE n < 10  -- Recursive
)
SELECT n FROM numbers;

-- Employee org chart with level and path
WITH RECURSIVE org_chart AS (
    -- Anchor: top-level managers
    SELECT emp_id, name, manager_id, 0 AS level,
           CAST(name AS VARCHAR(500)) AS path
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive: direct reports
    SELECT e.emp_id, e.name, e.manager_id, oc.level + 1,
           CAST(oc.path || ' -> ' || e.name AS VARCHAR(500))
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.emp_id
)
SELECT * FROM org_chart ORDER BY path;

-- Date range generation
WITH RECURSIVE dates(d) AS (
    SELECT DATE('2026-01-01')
    UNION ALL
    SELECT d + INTERVAL 1 DAY FROM dates WHERE d < DATE('2026-12-31')
)
SELECT d FROM dates;
```

**Dry Run Trace Table (Recursive CTE â€” Numbers 1..5):**

| Iteration | Set | Operation | Produced Rows | Accumulated Result |
|-----------|-----|-----------|---------------|-------------------|
| Anchor | R0 | SELECT 1 | (1) | {1} |
| 1 | R1 | SELECT n+1 FROM numbers WHERE n<5 using R0 | (2) | {1, 2} |
| 2 | R2 | SELECT n+1 WHERE n<5 using R1 | (3) | {1, 2, 3} |
| 3 | R3 | SELECT n+1 WHERE n<5 using R2 | (4) | {1, 2, 3, 4} |
| 4 | R4 | SELECT n+1 WHERE n<5 using R3 | (5) | {1, 2, 3, 4, 5} |
| 5 | R5 | SELECT n+1 WHERE n<5 using R4 (n=5, not <5) | () empty | {1, 2, 3, 4, 5} |
| End | â€” | Empty result set â†’ stop | â€” | {1, 2, 3, 4, 5} |

**Dry Run Trace Table (Org Chart):**

| Iteration | Working Set | New Rows | Path |
|-----------|------------|----------|------|
| Anchor | {CEO(id=1)} | CEO (level=0) | "CEO" |
| 1 | {CEO} | VP Eng(id=2), VP Sales(id=3) | "CEO -> VP Eng", "CEO -> VP Sales" |
| 2 | {VP Eng, VP Sales} | Eng Mgr(id=4) | "CEO -> VP Eng -> Eng Mgr" |
| 3 | {Eng Mgr} | Alice(id=5) | "CEO -> VP Eng -> Eng Mgr -> Alice" |
| 4 | {Alice} | (empty) | â€” |

**C++ Implementation (Recursive CTE Simulator):**
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <variant>

struct Employee {
    int id; std::string name; int managerId; // 0 = no manager
};

struct OrgNode {
    int id; std::string name; int level; std::string path;
};

class RecursiveCTESim {
    std::vector<Employee> data;
public:
    RecursiveCTESim(std::vector<Employee> d) : data(std::move(d)) {}

    std::vector<OrgNode> traverse() {
        std::vector<OrgNode> result;
        std::vector<OrgNode> working;

        // Anchor: top-level (no manager)
        for (auto& e : data)
            if (e.managerId == 0)
                working.push_back({e.id, e.name, 0, e.name});

        // Recursive loop
        while (!working.empty()) {
            result.insert(result.end(), working.begin(), working.end());
            std::vector<OrgNode> next;
            for (auto& w : working) {
                for (auto& e : data) {
                    if (e.managerId == w.id)
                        next.push_back({e.id, e.name, w.level + 1, w.path + " -> " + e.name});
                }
            }
            working = std::move(next);
        }
        return result;
    }
};

int main() {
    std::vector<Employee> data = {
        {1,"CEO",0},{2,"VP Eng",1},{3,"VP Sales",1},
        {4,"Eng Mgr",2},{5,"Alice",4},{6,"Bob",4}
    };
    RecursiveCTESim sim(data);
    for (auto& n : sim.traverse())
        std::cout << std::string(n.level * 2, ' ') << n.name << " (lv" << n.level << ") " << n.path << "\n";
    return 0;
}
```

**Python Implementation (Recursive CTE Simulator):**
```python
from dataclasses import dataclass

@dataclass
class Employee:
    emp_id: int
    name: str
    manager_id: int  # 0 means top-level

employees = [
    Employee(1, "CEO", 0),
    Employee(2, "VP Eng", 1),
    Employee(3, "VP Sales", 1),
    Employee(4, "Eng Mgr", 2),
    Employee(5, "Alice", 4),
    Employee(6, "Bob", 4),
]

def recursive_cte_simulation(rows):
    result = []
    # Anchor
    working = [(e.emp_id, e.name, 0, e.name) for e in rows if e.manager_id == 0]
    while working:
        result.extend(working)
        next_level = []
        for eid, name, level, path in working:
            for e in rows:
                if e.manager_id == eid:
                    next_level.append((e.emp_id, e.name, level+1, f"{path} -> {e.name}"))
        working = next_level
    return result

for node in recursive_cte_simulation(employees):
    eid, name, level, path = node
    indent = "  " * level
    print(f"{indent}{name} (lv{level}) [{path}]")
```

**Complexity:**
- **Time:** O(n Ã— d) where n = total rows and d = tree depth. Each level processes its parent set. For a balanced tree, O(n log n); for a chain, O(nÂ²).
- **Space:** O(n) â€” the accumulated result set plus the current working set.
- **WHY recursive CTEs have depth limits:** Most DBMS cap recursion at 100-1000 iterations (PostgreSQL: default 100, set with `SET max_recursive_iterations = 2000`). Infinite loops are prevented by this limit; if exceeded, the query errors out.
- **MAX_RECURSION (SQL Server):** `OPTION (MAXRECURSION 0)` for unlimited (use cautiously).

---

### 6.2.4 CTE vs Subquery vs Temp Table

| Aspect | CTE | Subquery | Temp Table |
|--------|-----|----------|------------|
| **Scope** | Single query only | Single query only | Session-wide |
| **Reusable across queries** | No | No | Yes |
| **Indexable** | No (inlined) | No | Yes |
| **Recursion support** | Yes (WITH RECURSIVE) | No | No |
| **Readability** | Best for complex queries | Can nest deeply | Good (separate steps) |
| **Debugging** | Hard (cannot SELECT from alone in all DBMS) | Hard | Easy (can inspect) |
| **Performance** | Optimizer inlines (no materialization typically) | May be materialized or inlined | Always materialized (disk/memory) |
| **When to use** | Complex queries, recursion, readability | Simple lookups, EXISTS | Large intermediate results, multiple references |
| **Transaction support** | N/A (part of query) | N/A (part of query) | Yes (can rollback) |

---

## 6.3 Window Functions

Window functions perform calculations across a set of rows **related to the current row** without collapsing rows (unlike GROUP BY). The "window" is defined by PARTITION BY, ORDER BY, and frame clauses.

### Real-World Analogy

> **Window function** = Standing in a line and asking: "What's my height rank? How tall is the person before me? What's the average height of everyone in my row?" The line stays intact, and each person gets their answer alongside their own data.

### Syntax

```sql
function_name() OVER (
    [PARTITION BY col1, col2, ...]
    [ORDER BY col1 [ASC|DESC], ...]
    [frame_clause]
) AS alias
```

**Partitioning:** Divides the result set into groups. The window function resets for each partition.
**Ordering:** Defines the logical order within each partition.
**Frame Clause:** `ROWS | RANGE BETWEEN start AND end` where start/end are UNBOUNDED PRECEDING, n PRECEDING, CURRENT ROW, n FOLLOWING, UNBOUNDED FOLLOWING.

### 6.3.1 ROW_NUMBER

Assigns a **unique sequential integer** to each row within a partition, starting at 1.

**Steps:**
1. Sort rows within each partition by ORDER BY columns.
2. Assign 1 to the first row, 2 to the second, etc.
3. Ties are broken arbitrarily (non-deterministic unless ORDER BY is unique).

**SQL:**
```sql
-- Sample data
CREATE TABLE sales (
    emp_name VARCHAR(50),
    department VARCHAR(50),
    amount DECIMAL(10,2),
    sale_date DATE
);
INSERT INTO sales VALUES
('Alice', 'Engineering', 15000, '2026-01-15'),
('Bob',   'Engineering', 12000, '2026-02-20'),
('Alice', 'Engineering', 18000, '2026-03-10'),
('Charlie', 'Sales',     22000, '2026-01-20'),
('Diana', 'Sales',       19000, '2026-02-28'),
('Charlie', 'Sales',     25000, '2026-03-15');

-- ROW_NUMBER: unique rank within department by amount
SELECT
    emp_name,
    department,
    amount,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY amount DESC) AS row_num
FROM sales;

-- Top 2 per department (using subquery)
SELECT * FROM (
    SELECT *, ROW_NUMBER() OVER (PARTITION BY department ORDER BY amount DESC) AS rn
    FROM sales
) ranked
WHERE rn <= 2;
```

**Dry Run Trace Table (ROW_NUMBER):**

| Department | Sorted Employees (by amount DESC) | row_num |
|-----------|-----------------------------------|---------|
| Engineering | Alice (18000), Alice (15000), Bob (12000) | 1, 2, 3 |
| Sales | Charlie (25000), Diana (19000), Charlie (22000â†’wait, let me re-sort) | 1, 2, 3 |

Actually, let me re-sort properly:

| Department | Sorted (amount DESC) | ROW_NUMBER |
|-----------|---------------------|------------|
| Engineering | Alice / 18000 (Mar) | 1 |
| Engineering | Alice / 15000 (Jan) | 2 |
| Engineering | Bob / 12000 (Feb) | 3 |
| Sales | Charlie / 25000 (Mar) | 1 |
| Sales | Charlie / 22000 (Jan) | 2 |
| Sales | Diana / 19000 (Feb) | 3 |

### 6.3.2 RANK / DENSE_RANK

**RANK:** Same value for ties, **skips** numbers after ties (1,1,3,4).
**DENSE_RANK:** Same value for ties, **no skipping** (1,1,2,3).

**SQL:**
```sql
SELECT
    emp_name,
    department,
    amount,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY amount DESC) AS row_num,
    RANK() OVER (PARTITION BY department ORDER BY amount DESC) AS rank,
    DENSE_RANK() OVER (PARTITION BY department ORDER BY amount DESC) AS dense_rank
FROM sales;
```

**Output:**

| emp_name | department | amount | row_num | rank | dense_rank |
|----------|-----------|--------|---------|------|------------|
| Alice | Engineering | 18000 | 1 | 1 | 1 |
| Alice | Engineering | 15000 | 2 | 2 | 2 |
| Bob | Engineering | 12000 | 3 | 3 | 3 |
| Charlie | Sales | 25000 | 1 | 1 | 1 |
| Charlie | Sales | 22000 | 2 | 2 | 2 |
| Diana | Sales | 19000 | 3 | 3 | 3 |

With tied values:

| emp_name | department | amount | row_num | rank | dense_rank |
|----------|-----------|--------|---------|------|------------|
| Alice | Engineering | 18000 | 1 | 1 | 1 |
| Bob | Engineering | 18000 | 2 | 1 | 1 |
| Charlie | Engineering | 15000 | 3 | 3 | 2 |
| Diana | Engineering | 12000 | 4 | 4 | 3 |

### 6.3.3 NTILE

Divides rows into **N approximately equal buckets**.

**Steps:**
1. Count rows in partition â†’ `total_rows`.
2. Bucket size = `total_rows / N`. If not divisible, first `total_rows % N` buckets get one extra row.
3. Assign bucket number 1 to N sequentially.

**SQL:**
```sql
SELECT
    emp_name,
    amount,
    NTILE(4) OVER (ORDER BY amount DESC) AS quartile,
    NTILE(10) OVER (ORDER BY amount DESC) AS decile
FROM sales;

-- Top quartile sales
SELECT * FROM (
    SELECT *, NTILE(4) OVER (ORDER BY amount DESC) AS quartile
    FROM sales
) ranked
WHERE quartile = 1;
```

**Dry Run Trace Table (NTILE(4) with 10 rows):**
- Total = 10 rows, N = 4 buckets
- Base size = floor(10/4) = 2, remainder = 10 % 4 = 2
- First 2 buckets get 3 rows each; last 2 buckets get 2 rows each
- Buckets: [1: rows 1-3], [2: rows 4-6], [3: rows 7-8], [4: rows 9-10]

### 6.3.4 LAG / LEAD

**LAG(col, n, default):** Access the value from **n rows before** the current row.
**LEAD(col, n, default):** Access the value from **n rows after** the current row.

**SQL:**
```sql
SELECT
    emp_name,
    sale_date,
    amount,
    LAG(amount, 1, 0) OVER (PARTITION BY emp_name ORDER BY sale_date) AS prev_amount,
    LEAD(amount, 1, 0) OVER (PARTITION BY emp_name ORDER BY sale_date) AS next_amount,
    amount - LAG(amount, 1, 0) OVER (PARTITION BY emp_name ORDER BY sale_date) AS growth
FROM sales
ORDER BY emp_name, sale_date;
```

**Output for Alice:**

| emp_name | sale_date | amount | prev_amount | next_amount | growth |
|----------|-----------|--------|-------------|-------------|--------|
| Alice | 2026-01-15 | 15000 | 0 | 18000 | 15000 |
| Alice | 2026-03-10 | 18000 | 15000 | 0 | 3000 |

**Dry Run Trace Table (LAG):**

| Step | Process | Result |
|------|---------|--------|
| 1 | Partition by emp_name, order by sale_date | Alice group sorted by date |
| 2 | Row 1 (Alice, Jan): LAG = 0 (default) | prev_amount = 0 |
| 3 | Row 2 (Alice, Mar): LAG looks 1 row back â†’ 15000 | prev_amount = 15000 |
| 4 | Row 1 (Alice, Jan): LEAD looks 1 row forward â†’ 18000 | next_amount = 18000 |
| 5 | Row 2 (Alice, Mar): LEAD = 0 (no next row) | next_amount = 0 |

### 6.3.5 FIRST_VALUE / LAST_VALUE

**FIRST_VALUE(col):** First value in the window frame.
**LAST_VALUE(col):** Last value in the window frame (frame-sensitive â€” needs RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING to get true last value of partition).

**SQL:**
```sql
SELECT
    emp_name, department, amount, sale_date,
    FIRST_VALUE(amount) OVER (
        PARTITION BY department ORDER BY amount DESC
    ) AS highest_in_dept,
    LAST_VALUE(amount) OVER (
        PARTITION BY department ORDER BY amount DESC
        RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS lowest_in_dept,
    amount - FIRST_VALUE(amount) OVER (
        PARTITION BY department ORDER BY amount DESC
    ) AS gap_from_highest
FROM sales;
```

### 6.3.6 Aggregate Window Functions (SUM/AVG OVER)

Standard aggregates (SUM, AVG, COUNT, MIN, MAX) used with OVER compute **cumulative** or **moving** aggregations.

**SQL:**
```sql
SELECT
    emp_name, department, amount, sale_date,
    SUM(amount) OVER (PARTITION BY department ORDER BY sale_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_total,
    AVG(amount) OVER (PARTITION BY department ORDER BY sale_date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_avg_3,
    COUNT(*) OVER (PARTITION BY department) AS dept_count,
    amount / SUM(amount) OVER (PARTITION BY department) * 100 AS pct_of_dept
FROM sales;
```

**Output for Engineering:**

| emp_name | sale_date | amount | running_total | moving_avg_3 | dept_count | pct_of_dept |
|----------|-----------|--------|---------------|--------------|------------|-------------|
| Alice | 2026-01-15 | 15000 | 15000 | 15000 | 3 | 33.33 |
| Bob | 2026-02-20 | 12000 | 27000 | 13500 | 3 | 26.67 |
| Alice | 2026-03-10 | 18000 | 45000 | 15000 | 3 | 40.00 |

**Dry Run Trace Table (Running Total):**

| Row | Current Row: amount | Frame (UNBOUNDED PRECEDING TO CURRENT) | SUM | Running Total |
|-----|--------------------|----------------------------------------|-----|---------------|
| 1 | 15000 | {15000} | 15000 | 15000 |
| 2 | 12000 | {15000, 12000} | 27000 | 27000 |
| 3 | 18000 | {15000, 12000, 18000} | 45000 | 45000 |

### 6.3.7 Window Functions Comparison

| Function | Purpose | Handles Ties | Skips Numbers | Requires ORDER BY |
|----------|---------|-------------|---------------|-------------------|
| **ROW_NUMBER** | Unique sequential number | N/A (unique) | N/A | Usually |
| **RANK** | Ranking with gaps | Same rank | Yes | Yes |
| **DENSE_RANK** | Ranking without gaps | Same rank | No | Yes |
| **NTILE(n)** | Row distribution into n buckets | Approx equal | N/A | Usually |
| **LAG(col, n)** | Access previous row value | N/A | N/A | Yes |
| **LEAD(col, n)** | Access next row value | N/A | N/A | Yes |
| **FIRST_VALUE(col)** | First value in frame | N/A | N/A | No (needs order for meaningful result) |
| **LAST_VALUE(col)** | Last value in frame | N/A | N/A | No |
| **SUM/AVG OVER** | Cumulative/moving aggregate | N/A | N/A | For running totals |

### C++ Implementation (Window Function Simulator)

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <numeric>
#include <map>

struct Sale {
    std::string name;
    std::string dept;
    double amount;
    std::string date;

    // For ordering
    bool operator<(const Sale& o) const { return date < o.date; }
};

class WindowFunctionSim {
    std::vector<Sale> data;
public:
    WindowFunctionSim(std::vector<Sale> d) : data(std::move(d)) {}

    void simulateRanking() {
        // Group by department
        std::map<std::string, std::vector<Sale>> groups;
        for (auto& s : data) groups[s.dept].push_back(s);

        for (auto& [dept, sales] : groups) {
            std::sort(sales.begin(), sales.end(),
                [](auto& a, auto& b) { return a.amount > b.amount; });

            for (size_t i = 0; i < sales.size(); i++) {
                auto& s = sales[i];
                std::cout << s.name << " | " << dept << " | " << s.amount
                          << " | ROW_NUM=" << (i + 1);
                if (i > 0 && sales[i].amount == sales[i-1].amount)
                    std::cout << " | RANK=(same as prev)";
                else
                    std::cout << " | RANK=" << (i + 1);
                std::cout << "\n";
            }
        }
    }

    void simulateRunningTotal() {
        std::sort(data.begin(), data.end());
        double running = 0;
        for (auto& s : data) {
            running += s.amount;
            std::cout << s.date << " | " << s.name << " | " << s.amount
                      << " | running_total=" << running << "\n";
        }
    }
};
```

### Python Implementation (Window Function Simulator)

```python
from dataclasses import dataclass
from itertools import groupby
from operator import attrgetter

@dataclass
class Sale:
    name: str
    dept: str
    amount: float
    date: str

sales = [
    Sale("Alice", "Engineering", 15000, "2026-01-15"),
    Sale("Bob", "Engineering", 12000, "2026-02-20"),
    Sale("Alice", "Engineering", 18000, "2026-03-10"),
    Sale("Charlie", "Sales", 22000, "2026-01-20"),
    Sale("Diana", "Sales", 19000, "2026-02-28"),
    Sale("Charlie", "Sales", 25000, "2026-03-15"),
]

def simulate_row_number(rows, partition_by, order_by):
    rows_sorted = sorted(rows, key=attrgetter(partition_by, order_by))
    result = []
    for dept, group in groupby(rows_sorted, key=attrgetter(partition_by)):
        for i, item in enumerate(group, 1):
            result.append((item, i))
    return result

def simulate_lag(rows, partition_by, order_by, n=1):
    rows_sorted = sorted(rows, key=attrgetter(partition_by, order_by))
    groups = {}
    for k, g in groupby(rows_sorted, key=attrgetter(partition_by)):
        groups[k] = list(g)
    result = []
    for dept, items in groups.items():
        for i, item in enumerate(items):
            prev_val = items[i-n].amount if i >= n else 0
            result.append((item, prev_val))
    return result

for item, rank in simulate_row_number(sales, "dept", "amount"):
    print(f"{item.dept} | {item.name} | {item.amount} | rn={rank}")
```

### Complexity Analysis of Window Functions

| Function | Time Complexity | Space Complexity | WHY |
|----------|---------------|-----------------|-----|
| **ROW_NUMBER** | O(n log n) | O(n) | Sorting within each partition dominates |
| **RANK** | O(n log n) | O(n) | Same sorting requirement |
| **DENSE_RANK** | O(n log n) | O(n) | Identical sorting + tie detection |
| **NTILE** | O(n) after sort | O(n) | Simple arithmetic distribution |
| **LAG/LEAD** | O(n) | O(n) | Single pass after ordering |
| **FIRST_VALUE** | O(n) | O(n) | Track first value in partition |
| **LAST_VALUE** | O(n) | O(n) | Requires full partition scan |
| **SUM/AVG OVER** | O(n) | O(n) | Cumulative scan |

### Window Functions â€” Edge Cases

- **Empty partition:** Returns no rows.
- **NULLs in ORDER BY:** Default behavior depends on DBMS (NULLS FIRST/LAST in PostgreSQL, NULLS FIRST in MySQL).
- **Frame clause with RANGE vs ROWS:** RANGE treats ties as a single group; ROWS treats them as individual rows.
- **LAG/LEAD with non-existent row:** Returns default value (NULL if not specified). Always provide a default for non-optional columns.
- **NTILE with fewer rows than buckets:** Some buckets will be empty. Remaining rows distributed one per bucket.

---

## 6.4 PIVOT / UNPIVOT

Transforms rows into columns (PIVOT) and columns into rows (UNPIVOT). SQL Server has native operators; PostgreSQL uses crosstab (tablefunc extension); MySQL uses CASE with aggregation.

### Real-World Analogy

> **PIVOT** = Turning a shopping list (item, store, price) into a price comparison table where stores are columns: you can see all prices at once.
> **UNPIVOT** = Taking that price comparison table and turning it back into a list format.

### 6.4.1 PIVOT (SQL Server)

```sql
-- Sample data: monthly sales by product category
CREATE TABLE monthly_sales (
    category VARCHAR(50),
    month INT,
    revenue DECIMAL(10,2)
);
INSERT INTO monthly_sales VALUES
('Electronics', 1, 50000), ('Electronics', 2, 55000),
('Clothing', 1, 30000),    ('Clothing', 2, 28000),
('Books', 1, 15000),       ('Books', 2, 18000);

-- SQL Server PIVOT
SELECT *
FROM monthly_sales
PIVOT (
    SUM(revenue)
    FOR month IN ([1], [2])
) AS pvt;

-- Output:
-- category   | 1      | 2
-- Electronics| 50000  | 55000
-- Clothing   | 30000  | 28000
-- Books      | 15000  | 18000
```

### 6.4.2 PIVOT using CASE (MySQL / PostgreSQL compatible)

```sql
SELECT
    category,
    SUM(CASE WHEN month = 1 THEN revenue ELSE 0 END) AS "Jan",
    SUM(CASE WHEN month = 2 THEN revenue ELSE 0 END) AS "Feb",
    AVG(CASE WHEN month = 1 THEN revenue ELSE NULL END) AS "Jan_avg"
FROM monthly_sales
GROUP BY category;
```

### 6.4.3 PIVOT using crosstab (PostgreSQL)

```sql
CREATE EXTENSION IF NOT EXISTS tablefunc;

SELECT *
FROM crosstab(
    'SELECT category, month::TEXT, SUM(revenue)::NUMERIC
     FROM monthly_sales
     GROUP BY category, month
     ORDER BY category, month',
    'SELECT generate_series(1, 2)::TEXT'
) AS ct(category TEXT, jan NUMERIC, feb NUMERIC);
```

### 6.4.4 UNPIVOT (SQL Server)

```sql
-- Sample data: pivoted format
CREATE TABLE quarterly_sales (
    product VARCHAR(50),
    q1 DECIMAL(10,2),
    q2 DECIMAL(10,2),
    q3 DECIMAL(10,2),
    q4 DECIMAL(10,2)
);

INSERT INTO quarterly_sales VALUES
('Widget', 10000, 12000, 11000, 13000);

-- UNPIVOT columns to rows
SELECT product, quarter, sales
FROM quarterly_sales
UNPIVOT (
    sales FOR quarter IN (q1, q2, q3, q4)
) AS unpvt;

-- Output:
-- product | quarter | sales
-- Widget  | q1      | 10000
-- Widget  | q2      | 12000
-- Widget  | q3      | 11000
-- Widget  | q4      | 13000
```

### 6.4.5 UNPIVOT using UNION ALL (cross-DBMS)

```sql
SELECT product, 'Q1' AS quarter, q1 AS sales FROM quarterly_sales
UNION ALL
SELECT product, 'Q2', q2 FROM quarterly_sales
UNION ALL
SELECT product, 'Q3', q3 FROM quarterly_sales
UNION ALL
SELECT product, 'Q4', q4 FROM quarterly_sales;
```

**Python Implementation (PIVOT):**
```python
import pandas as pd
data = [
    ("Electronics", 1, 50000), ("Electronics", 2, 55000),
    ("Clothing", 1, 30000), ("Clothing", 2, 28000),
    ("Books", 1, 15000), ("Books", 2, 18000),
]
df = pd.DataFrame(data, columns=["category", "month", "revenue"])
pivoted = df.pivot_table(index="category", columns="month", values="revenue", aggfunc="sum")
print(pivoted)
```

**Complexity:** O(n) â€” PIVOT scans once, groups, and distributes into columns. The number of pivot columns is known at query time; the GROUP BY is O(n) with hash aggregation.

---

## 6.5 MERGE / UPSERT

MERGE (aka UPSERT) performs INSERT, UPDATE, or DELETE based on whether a matching row exists. Use it to synchronize two tables.

### Real-World Analogy

> = Updating your address book: if the contact already exists, update their info. If not, add a new entry. One operation, not two.

### SQL (SQL Server / PostgreSQL)

```sql
-- Target table: product_inventory (current stock)
-- Source table: daily_shipments (new stock arrivals)

MERGE INTO product_inventory AS target
USING daily_shipments AS source
ON target.product_id = source.product_id

WHEN MATCHED THEN
    UPDATE SET
        target.quantity = target.quantity + source.quantity,
        target.last_updated = CURRENT_TIMESTAMP

WHEN NOT MATCHED THEN
    INSERT (product_id, product_name, quantity, last_updated)
    VALUES (source.product_id, source.product_name, source.quantity, CURRENT_TIMESTAMP)

WHEN NOT MATCHED BY SOURCE THEN
    DELETE  -- Remove products no longer in source (optional)

OUTPUT $action, inserted.product_id, deleted.quantity, inserted.quantity;
```

### PostgreSQL INSERT ... ON CONFLICT (Simpler UPSERT)

```sql
INSERT INTO product_inventory (product_id, product_name, quantity)
VALUES (101, 'Widget', 50)
ON CONFLICT (product_id)
DO UPDATE SET
    quantity = product_inventory.quantity + EXCLUDED.quantity,
    last_updated = CURRENT_TIMESTAMP;

-- ON CONFLICT DO NOTHING (silently skip)
INSERT INTO employees (emp_id, name, email)
VALUES (100, 'John', 'john@example.com')
ON CONFLICT (emp_id) DO NOTHING;
```

### MySQL INSERT ... ON DUPLICATE KEY UPDATE

```sql
INSERT INTO product_inventory (product_id, product_name, quantity)
VALUES (101, 'Widget', 50)
ON DUPLICATE KEY UPDATE
    quantity = quantity + 50,
    last_updated = NOW();
```

### Steps for MERGE Execution:

1. **Join phase:** Source and target are joined on the match condition.
2. **Matched rows:** For rows that exist in both, execute WHEN MATCHED actions.
3. **Not matched (target):** For rows in source but not in target, execute WHEN NOT MATCHED (INSERT).
4. **Not matched by source:** For rows in target but not in source, execute WHEN NOT MATCHED BY SOURCE (DELETE or UPDATE).

**Dry Run Trace Table (MERGE):**

| Row | Source product_id | Target exists? | Action | Result |
|-----|------------------|---------------|--------|--------|
| 1 | 101 | Yes, qty=10 | UPDATE: qty = 10 + 50 = 60 | Updated |
| 2 | 102 | No | INSERT: (102, 'Gadget', 30) | Inserted |
| 3 | â€” | product 103 in target only | DELETE: remove 103 | Deleted |

**Complexity:** O(n + m) where n = source rows, m = target rows for the join. A hash join on the match column is O(n + m). The MERGE is a single pass; no separate SELECT + UPDATE + INSERT needed.

### Edge Cases:
- **Multiple matches:** If source has multiple rows matching one target row, the MERGE fails with a "multiple rows in source match same target row" error.
- **Concurrent MERGE:** Race conditions â€” two concurrent MERGE statements can produce unexpected results. Use SERIALIZABLE isolation or application-level locking.
- **Trigger firing:** MERGE fires INSERT, UPDATE, and DELETE triggers on the target table.

---

## 6.6 Dynamic SQL

Dynamic SQL constructs and executes SQL statements **at runtime** using string building. Used for dynamic table names, dynamic WHERE clauses, pivot queries, and DDL operations.

### Real-World Analogy

> = Writing a fill-in-the-blank form where you decide which blanks to fill based on user input. "SELECT * FROM [you_pick_the_table] WHERE [you_pick_the_column] = [you_pick_the_value]."

### SQL Server (sp_executesql)

```sql
CREATE PROCEDURE search_employees
    @column_name NVARCHAR(50),
    @search_value NVARCHAR(100)
AS
BEGIN
    DECLARE @sql NVARCHAR(MAX);
    SET @sql = N'
        SELECT emp_id, name, department, salary
        FROM employees
        WHERE ' + QUOTENAME(@column_name) + ' = @val';

    EXEC sp_executesql @sql, N'@val NVARCHAR(100)', @val = @search_value;
END;

-- Usage: EXEC search_employees 'department', 'Engineering';
```

### PostgreSQL (EXECUTE)

```sql
CREATE OR REPLACE FUNCTION search_table(
    table_name TEXT,
    column_name TEXT,
    search_value TEXT
) RETURNS SETOF RECORD AS $$
BEGIN
    RETURN QUERY EXECUTE format(
        'SELECT * FROM %I WHERE %I = %L',
        table_name, column_name, search_value
    );
END;
$$ LANGUAGE plpgsql;
```

### Security: Always Use QUOTENAME / format with %I

```sql
-- VULNERABLE (SQL injection):
SET @sql = 'SELECT * FROM ' + @table_name + ' WHERE id = ' + @id;

-- SAFE (SQL Server):
SET @sql = 'SELECT * FROM ' + QUOTENAME(@table_name) + ' WHERE id = @id';

-- SAFE (PostgreSQL):
EXECUTE format('SELECT * FROM %I WHERE id = %L', table_name, id);
```

### Python Implementation (Dynamic SQL Builder):

```python
import sqlite3

class DynamicQueryBuilder:
    def __init__(self, conn):
        self.conn = conn

    def build_select(self, table, columns=None, where=None, order_by=None, limit=None):
        cols = ", ".join(columns) if columns else "*"
        sql = f"SELECT {cols} FROM {table}"

        if where:
            clauses = []
            params = []
            for col, val in where.items():
                clauses.append(f"{col} = ?")
                params.append(val)
            sql += " WHERE " + " AND ".join(clauses)

        if order_by:
            sql += f" ORDER BY {order_by}"

        if limit:
            sql += f" LIMIT {limit}"

        return sql, params

    def execute(self, sql, params=None):
        cursor = self.conn.cursor()
        cursor.execute(sql, params or [])
        return cursor.fetchall()

conn = sqlite3.connect(":memory:")
builder = DynamicQueryBuilder(conn)
sql, params = builder.build_select("employees", where={"department": "Engineering", "salary": 50000})
print(f"SQL: {sql}, Params: {params}")
```

**Complexity:** O(n) â€” the SQL string is constructed in O(k) where k is the number of dynamic parts, then the query executes at normal complexity.

**Edge Cases:**
- **SQL Injection:** NEVER concatenate user input directly. Use parameterized queries or QUOTENAME.
- **Syntax errors at runtime:** Dynamic SQL fails are not caught at compile time. Always test with representative inputs.
- **Performance:** Each execution may need a new query plan. Parameterized dynamic SQL allows plan reuse.

---

## 6.7 Stored Procedures

A **stored procedure** is a pre-compiled collection of SQL statements stored on the database server. It can accept parameters, perform complex operations, and return results.

### Real-World Analogy

> = A saved recipe in the restaurant kitchen. Instead of telling the chef the steps each time ("chop onions, sautÃ©, add tomatoes, simmer"), you just say "make marinara sauce." The recipe is pre-written, pre-practiced, and ready to execute.

### SQL Server Example

```sql
CREATE PROCEDURE sp_GetDepartmentSummary
    @dept_id INT,
    @min_salary DECIMAL(10,2) = 0  -- Optional parameter with default
AS
BEGIN
    SET NOCOUNT ON;

    -- Result set 1: department info
    SELECT d.department_name, d.location, COUNT(e.emp_id) AS headcount
    FROM departments d
    LEFT JOIN employees e ON d.department_id = e.department_id
    WHERE d.department_id = @dept_id
    GROUP BY d.department_name, d.location;

    -- Result set 2: employees in department
    SELECT emp_id, name, salary, hire_date
    FROM employees
    WHERE department_id = @dept_id
      AND salary >= @min_salary
    ORDER BY salary DESC;

    -- Return value: total salary expenditure
    SELECT @total = SUM(salary)
    FROM employees
    WHERE department_id = @dept_id;

    RETURN @total;
END;

-- Execute
DECLARE @result INT;
EXEC @result = sp_GetDepartmentSummary @dept_id = 3, @min_salary = 50000;
PRINT 'Total salary: ' + CAST(@result AS VARCHAR);
```

### MySQL Example

```sql
DELIMITER //

CREATE PROCEDURE GetDepartmentSummary(
    IN dept_id INT,
    IN min_salary DECIMAL(10,2),
    OUT total_salary DECIMAL(10,2)
)
BEGIN
    SELECT d.department_name, COUNT(e.emp_id) AS headcount
    FROM departments d
    LEFT JOIN employees e ON d.department_id = e.department_id
    WHERE d.department_id = dept_id
    GROUP BY d.department_name;

    SELECT emp_id, name, salary
    FROM employees
    WHERE department_id = dept_id AND salary >= min_salary;

    SELECT SUM(salary) INTO total_salary
    FROM employees
    WHERE department_id = dept_id;
END//

DELIMITER ;

CALL GetDepartmentSummary(3, 50000, @total);
SELECT @total;
```

### PostgreSQL Example (plpgsql)

```sql
CREATE OR REPLACE FUNCTION get_department_summary(
    dept_id INT,
    min_salary DECIMAL DEFAULT 0,
    OUT total_salary DECIMAL
) RETURNS DECIMAL AS $$
BEGIN
    RETURN QUERY
    SELECT d.department_name, COUNT(e.emp_id)::INT AS headcount
    FROM departments d
    LEFT JOIN employees e ON d.department_id = e.department_id
    WHERE d.department_id = dept_id
    GROUP BY d.department_name;

    SELECT SUM(salary) INTO total_salary
    FROM employees
    WHERE department_id = dept_id AND salary >= min_salary;
END;
$$ LANGUAGE plpgsql;
```

### C++ Implementation (Stored Procedure Executor)

```cpp
#include <iostream>
#include <functional>
#include <map>
#include <vector>
#include <string>
#include <any>

struct ResultSet {
    std::vector<std::string> columns;
    std::vector<std::vector<std::any>> rows;
};

class StoredProcedure {
public:
    std::string name;
    std::function<ResultSet(std::map<std::string, std::any>)> body;

    StoredProcedure(const std::string& n,
        std::function<ResultSet(std::map<std::string, std::any>)> b)
        : name(n), body(std::move(b)) {}

    ResultSet execute(std::map<std::string, std::any> params) {
        return body(std::move(params));
    }
};

class StoredProcedureEngine {
    std::map<std::string, StoredProcedure> procedures;
public:
    void registerProcedure(StoredProcedure sp) {
        procedures[sp.name] = std::move(sp);
    }

    ResultSet call(const std::string& name, std::map<std::string, std::any> params) {
        auto it = procedures.find(name);
        if (it == procedures.end())
            throw std::runtime_error("Procedure not found: " + name);
        return it->second.execute(std::move(params));
    }
};

int main() {
    StoredProcedureEngine engine;

    // Register a mock procedure
    engine.registerProcedure(StoredProcedure("get_employee_count", [](auto params) {
        ResultSet rs;
        rs.columns = {"department", "count"};
        std::string dept = std::any_cast<std::string>(params["dept"]);
        rs.rows.push_back({dept, 42});
        return rs;
    }));

    auto result = engine.call("get_employee_count", {{"dept", std::string("Engineering")}});
    for (auto& row : result.rows) {
        std::cout << std::any_cast<std::string>(row[0]) << ": "
                  << std::any_cast<int>(row[1]) << "\n";
    }
    return 0;
}
```

### Python Implementation (Stored Procedure Executor)

```python
from typing import Any, Callable
import sqlite3

class StoredProcedure:
    def __init__(self, name: str, sql: str, param_names: list[str] = None):
        self.name = name
        self.sql = sql
        self.param_names = param_names or []

class StoredProcedureEngine:
    def __init__(self, conn: sqlite3.Connection):
        self.conn = conn
        self.procedures: dict[str, StoredProcedure] = {}

    def register(self, sp: StoredProcedure):
        self.procedures[sp.name] = sp

    def call(self, name: str, **kwargs) -> list[tuple]:
        sp = self.procedures.get(name)
        if not sp:
            raise ValueError(f"Procedure '{name}' not found")
        params = [kwargs[p] for p in sp.param_names]
        cursor = self.conn.execute(sp.sql, params)
        return cursor.fetchall()

conn = sqlite3.connect(":memory:")
conn.execute("CREATE TABLE employees (id INT, name TEXT, dept TEXT, salary REAL)")
conn.execute("INSERT INTO employees VALUES (1, 'Alice', 'Engineering', 95000)")
conn.execute("INSERT INTO employees VALUES (2, 'Bob', 'Engineering', 72000)")

engine = StoredProcedureEngine(conn)
engine.register(StoredProcedure(
    "dept_employees",
    "SELECT name, salary FROM employees WHERE dept = ?",
    ["department"]
))

results = engine.call("dept_employees", department="Engineering")
for row in results:
    print(f"{row[0]}: {row[1]}")
```

### Complexity & Benefits

| Aspect | Details |
|--------|---------|
| **Compilation** | Compiled once, executed many times â€” plan reuse |
| **Network traffic** | Only the CALL/EXEC statement is sent, not the entire SQL |
| **Security** | Users can EXECUTE without underlying table permissions |
| **Maintenance** | Centralized logic; change one procedure, all callers benefit |
| **Time complexity** | O(n) for execution; compilation overhead is one-time |

**Edge Cases:**
- **Nested procedures:** Up to 32 levels in SQL Server. Monitor for deep nesting causing stack overflow.
- **Transaction management:** Procedures can have explicit BEGIN TRAN/COMMIT. Ensure error handling with TRY/CATCH.
- **Side effects:** Procedures may modify database state. Use WITH EXECUTE AS / SECURITY DEFINER for permissions.

---

## 6.8 User-Defined Functions (UDFs)

Functions return a **single value** (scalar) or a **table** (table-valued). Unlike stored procedures, functions:
- **Must** return a value.
- **Cannot** have side effects (no INSERT/UPDATE/DELETE on tables â€” with exceptions in some DBMS).
- **Can** be used inside SELECT statements.

### Real-World Analogy

> = A calculator button. You input numbers, get a result. It doesn't change anything outside the calculator. Pressing "sqrt(25)" always returns 5, no side effects.

### Scalar Function (SQL Server)

```sql
CREATE FUNCTION dbo.CalculateBonus(
    @salary DECIMAL(10,2),
    @performance_rating INT
)
RETURNS DECIMAL(10,2)
AS
BEGIN
    DECLARE @bonus DECIMAL(10,2);
    SET @bonus = @salary *
        CASE
            WHEN @performance_rating >= 5 THEN 0.20
            WHEN @performance_rating >= 3 THEN 0.10
            ELSE 0.05
        END;
    RETURN @bonus;
END;

-- Usage in SELECT
SELECT name, salary,
       dbo.CalculateBonus(salary, performance_rating) AS bonus
FROM employees;
```

### Table-Valued Function (SQL Server)

```sql
CREATE FUNCTION GetEmployeesByDepartment(@dept_id INT)
RETURNS TABLE
AS
RETURN (
    SELECT emp_id, name, salary, hire_date
    FROM employees
    WHERE department_id = @dept_id
);

-- Usage: treat like a table with parameters
SELECT * FROM GetEmployeesByDepartment(3) WHERE salary > 50000;
```

### PostgreSQL Function

```sql
CREATE OR REPLACE FUNCTION calculate_bonus(
    salary DECIMAL,
    rating INT
) RETURNS DECIMAL AS $$
BEGIN
    RETURN salary *
        CASE
            WHEN rating >= 5 THEN 0.20
            WHEN rating >= 3 THEN 0.10
            ELSE 0.05
        END;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- IMMUTABLE tells the optimizer the result depends only on inputs (can be precomputed)
```

### Deterministic vs Non-Deterministic

| Function Type | Examples | Caching |
|--------------|----------|---------|
| **DETERMINISTIC** | `ABS()`, `UPPER()`, `CalculateBonus(salary, rating)` | Can be indexed, precomputed |
| **NOT DETERMINISTIC** | `GETDATE()`, `RAND()`, `NEWID()` | Cannot be indexed, computed each time |

### Complexity

| Function Type | Execution Pattern | Performance |
|--------------|------------------|-------------|
| **Scalar (row-level)** | Called per row â€” O(n) | Can be slow for large result sets; use carefully in WHERE/SELECT |
| **Table-valued (inline)** | Expanded into outer query â€” optimized | Fast â€” optimizer inlines like a view |
| **Table-valued (multi-stmt)** | Materialized â€” temp table | Slower â€” always materializes |

### Python Implementation (UDF Simulator)

```python
from typing import Callable, Any
import sqlite3

class UDFRegistry:
    def __init__(self, conn: sqlite3.Connection):
        self.conn = conn
        self.udfs: dict[str, Callable] = {}

    def register(self, name: str, func: Callable, num_params: int):
        self.udfs[name] = func
        self.conn.create_function(name, num_params, func)

conn = sqlite3.connect(":memory:")
conn.execute("CREATE TABLE emp(id, name, salary, rating)")
conn.execute("INSERT INTO emp VALUES (1,'Alice',95000,5),(2,'Bob',72000,3),(3,'Charlie',68000,2)")

registry = UDFRegistry(conn)
def calculate_bonus(salary, rating):
    if rating >= 5: return salary * 0.20
    elif rating >= 3: return salary * 0.10
    else: return salary * 0.05

registry.register("bonus", calculate_bonus, 2)
cursor = conn.execute("SELECT name, salary, bonus(salary, rating) FROM emp")
for row in cursor:
    print(f"{row[0]}: salary={row[1]}, bonus={row[2]:.0f}")
```

---

## 6.9 Triggers

A **trigger** is a stored procedure that automatically executes (fires) in response to DML events (INSERT, UPDATE, DELETE) or DDL events on a table or view.

### Real-World Analogy

> = A motion-sensor light. You don't flip a switch â€” the light automatically turns on when someone enters the room (event), checks the time (condition), and turns on (action). All happens without human intervention.

### Types of Triggers

| Type | Timing | Use Case |
|------|--------|----------|
| **BEFORE / FOR EACH ROW** | Before row modification | Validation, default values |
| **AFTER / FOR EACH ROW** | After row modification | Audit logging, cascading changes |
| **INSTEAD OF** | Replaces the operation | View updates, complex logic |
| **DDL Trigger** | Schema changes | Prevent DROP TABLE, audit schema changes |

### BEFORE Trigger (MySQL)

```sql
DELIMITER //
CREATE TRIGGER before_employee_update
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
    -- Log the old salary
    INSERT INTO salary_audit(emp_id, old_salary, new_salary, changed_by, changed_at)
    VALUES (OLD.emp_id, OLD.salary, NEW.salary, CURRENT_USER(), NOW());

    -- Prevent salary decrease
    IF NEW.salary < OLD.salary THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Salary cannot be decreased';
    END IF;
END//
DELIMITER ;
```

### AFTER Trigger (SQL Server)

```sql
CREATE TRIGGER trg_EmployeeAudit
ON employees
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO employee_changes(emp_id, old_name, new_name, old_salary, new_salary,
                                 change_type, changed_by, changed_at)
    SELECT
        COALESCE(i.emp_id, d.emp_id),
        d.name, i.name,
        d.salary, i.salary,
        CASE
            WHEN i.emp_id IS NOT NULL AND d.emp_id IS NOT NULL THEN 'UPDATE'
            WHEN i.emp_id IS NOT NULL THEN 'INSERT'
            ELSE 'DELETE'
        END,
        CURRENT_USER,
        GETDATE()
    FROM inserted i
    FULL OUTER JOIN deleted d ON i.emp_id = d.emp_id;
END;
```

### INSTEAD OF Trigger (SQL Server â€” for Views)

```sql
CREATE VIEW emp_view AS
SELECT emp_id, name, salary, department_id FROM employees;

CREATE TRIGGER trg_emp_view_insert
ON emp_view
INSTEAD OF INSERT
AS
BEGIN
    -- Validate and transform before inserting into base table
    INSERT INTO employees(emp_id, name, salary, department_id, created_at)
    SELECT emp_id, name,
           CASE WHEN salary < 0 THEN 0 ELSE salary END,
           department_id, GETDATE()
    FROM inserted;
END;

-- Now INSERT INTO emp_view works (normally views are not updatable if complex)
INSERT INTO emp_view(emp_id, name, salary, department_id) VALUES (100, 'John', -5000, 1);
-- Actually inserts with salary=0
```

### Trigger Execution Order (SQL Server)

```
BEFORE triggers (not in SQL Server â€” check constraints fire first)
â†’ INSTEAD OF trigger (replaces the operation entirely)
â†’ CHECK CONSTRAINTS
â†’ Primary Key / Foreign Key validation
â†’ AFTER triggers (multiple, ordered by sp_settriggerorder)
```

### C++ Implementation (Trigger Engine)

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <functional>

enum class TriggerEvent { INSERT, UPDATE, DELETE };
enum class TriggerTiming { BEFORE, AFTER, INSTEAD_OF };

struct Row {
    std::vector<std::pair<std::string, std::string>> columns;
    std::string get(const std::string& col) {
        for (auto& c : columns) if (c.first == col) return c.second;
        return "";
    }
};

struct TriggerContext {
    TriggerEvent event;
    TriggerTiming timing;
    Row oldRow;  // For UPDATE/DELETE
    Row newRow;  // For INSERT/UPDATE
};

class Trigger {
public:
    std::string name;
    TriggerEvent event;
    TriggerTiming timing;
    std::function<bool(TriggerContext&)> action;

    Trigger(std::string n, TriggerEvent e, TriggerTiming t,
            std::function<bool(TriggerContext&)> a)
        : name(n), event(e), timing(t), action(std::move(a)) {}
};

class TriggerEngine {
    std::vector<Trigger> triggers;
public:
    void addTrigger(Trigger t) { triggers.push_back(std::move(t)); }

    bool fire(TriggerEvent event, TriggerTiming timing, Row& oldRow, Row& newRow) {
        TriggerContext ctx{event, timing, oldRow, newRow};
        for (auto& t : triggers) {
            if (t.event == event && t.timing == timing) {
                if (!t.action(ctx)) return false;  // Trigger prevented operation
            }
        }
        return true;
    }
};

int main() {
    TriggerEngine engine;
    engine.addTrigger(Trigger("prevent_salary_decrease", TriggerEvent::UPDATE,
        TriggerTiming::BEFORE, [](TriggerContext& ctx) {
            double oldSal = std::stod(ctx.oldRow.get("salary"));
            double newSal = std::stod(ctx.newRow.get("salary"));
            if (newSal < oldSal) {
                std::cout << "Trigger: Cannot decrease salary!\n";
                return false;
            }
            return true;
        }));

    Row oldR, newR;
    oldR.columns = {{"salary", "100000"}};
    newR.columns = {{"salary", "80000"}};

    if (engine.fire(TriggerEvent::UPDATE, TriggerTiming::BEFORE, oldR, newR))
        std::cout << "Update allowed\n";
    else
        std::cout << "Update rejected by trigger\n";

    return 0;
}
```

### Python Implementation (Trigger Simulator)

```python
from enum import Enum
from typing import Callable

class TriggerEvent(Enum):
    INSERT = 1
    UPDATE = 2
    DELETE = 3

class TriggerTiming(Enum):
    BEFORE = 1
    AFTER = 2
    INSTEAD_OF = 3

class Trigger:
    def __init__(self, name: str, event: TriggerEvent, timing: TriggerTiming,
                 action: Callable[..., bool]):
        self.name = name
        self.event = event
        self.timing = timing
        self.action = action

class TriggerEngine:
    def __init__(self):
        self.triggers: list[Trigger] = []

    def add(self, trigger: Trigger):
        self.triggers.append(trigger)

    def fire(self, event: TriggerEvent, timing: TriggerTiming, old_row=None, new_row=None) -> bool:
        for t in self.triggers:
            if t.event == event and t.timing == timing:
                if not t.action(old_row, new_row):
                    return False
        return True

engine = TriggerEngine()

def audit_log(old, new):
    print(f"[AUDIT] Row changed: old={old}, new={new}")
    return True

def prevent_salary_decrease(old, new):
    if old and new and new.get("salary", 0) < old.get("salary", 0):
        print("[TRIGGER] Cannot decrease salary!")
        return False
    return True

engine.add(Trigger("audit", TriggerEvent.UPDATE, TriggerTiming.AFTER, audit_log))
engine.add(Trigger("no_paycut", TriggerEvent.UPDATE, TriggerTiming.BEFORE, prevent_salary_decrease))

old_emp = {"emp_id": 1, "salary": 100000}
new_emp = {"emp_id": 1, "salary": 80000}
engine.fire(TriggerEvent.UPDATE, TriggerTiming.BEFORE, old_emp, new_emp)
```

### Trigger Complexity & Considerations

| Aspect | Details |
|--------|---------|
| **Time complexity** | O(t) where t = operations within the trigger body. Triggers add overhead to every DML operation |
| **Recursive triggers** | A trigger that modifies the same table causing itself to fire again. SQL Server default: recursive_triggers = OFF |
| **Nested triggers** | Trigger on Table A modifies Table B which has its own trigger. Default nesting level: 32 |
| **Trigger recursion depth** | MySQL max_sp_recursion_depth; PostgreSQL no recursion by default; SQL Server up to 32 levels |
| **Performance impact** | Triggers run within the same transaction â€” they hold locks until complete |

---

## 6.10 Views & Indexed Views

A **view** is a saved query definition that behaves like a virtual table. An **indexed view** (materialized view) stores the query result physically.

### Real-World Analogy

> **Regular view** = A saved search filter on a dating app. You define "age 25-35, non-smoker" once, and it always shows current results.
> **Indexed view** = A printed photo album. It's fast to browse but you need to take new photos when people change.

### Creating Views

```sql
CREATE VIEW sales_summary AS
SELECT
    c.category_name,
    COUNT(DISTINCT o.order_id) AS order_count,
    SUM(oi.quantity * oi.unit_price) AS total_revenue,
    AVG(oi.quantity * oi.unit_price) AS avg_order_value
FROM categories c
JOIN products p ON c.category_id = p.category_id
JOIN order_items oi ON p.product_id = oi.product_id
JOIN orders o ON oi.order_id = o.order_id
WHERE o.status = 'completed'
GROUP BY c.category_name;

-- Querying is simple:
SELECT * FROM sales_summary WHERE total_revenue > 10000 ORDER BY total_revenue DESC;
```

### View Security (Column-Level Masking)

```sql
CREATE VIEW employee_public AS
SELECT emp_id, name, department_id
FROM employees;
-- Excludes salary, ssn, birth_date â€” sensitive columns hidden

CREATE VIEW employee_hr AS
SELECT * FROM employees;
-- HR sees everything
```

### Indexed Views (SQL Server)

```sql
-- Must be created WITH SCHEMABINDING
CREATE VIEW dbo.monthly_sales WITH SCHEMABINDING AS
SELECT
    product_id,
    COUNT_BIG(*) AS transaction_count,
    SUM(quantity) AS total_quantity,
    SUM(quantity * unit_price) AS total_revenue
FROM dbo.order_items
GROUP BY product_id;

-- Create unique clustered index on the view
CREATE UNIQUE CLUSTERED INDEX IX_monthly_sales_product
ON dbo.monthly_sales(product_id);

-- Now the view is materialized â€” queries use the index directly
```

### Materialized Views (PostgreSQL)

```sql
CREATE MATERIALIZED VIEW monthly_sales_mv AS
SELECT
    EXTRACT(YEAR FROM order_date) AS year,
    EXTRACT(MONTH FROM order_date) AS month,
    COUNT(*) AS order_count,
    SUM(total_amount) AS revenue
FROM orders
WHERE status = 'completed'
GROUP BY 1, 2
WITH DATA;  -- Populate immediately

-- Refresh (blocking â€” table is locked during refresh)
REFRESH MATERIALIZED VIEW monthly_sales_mv;

-- Refresh concurrently (non-blocking, requires unique index)
CREATE UNIQUE INDEX idx_monthly_sales_mv ON monthly_sales_mv(year, month);
REFRESH MATERIALIZED VIEW CONCURRENTLY monthly_sales_mv;
```

### Updatable Views

Simple views can support INSERT/UPDATE/DELETE if they:
1. Reference only one base table.
2. Do not use GROUP BY, DISTINCT, aggregate functions.
3. Do not include computed columns.
4. Include all NOT NULL columns without defaults.

```sql
-- Updatable view
CREATE VIEW engineering_dept AS
SELECT emp_id, name, salary, hire_date
FROM employees
WHERE department_id = 3;

-- These modify the underlying employees table
INSERT INTO engineering_dept VALUES (101, 'John', 85000, '2026-06-01');
UPDATE engineering_dept SET salary = 90000 WHERE emp_id = 101;
DELETE FROM engineering_dept WHERE emp_id = 101;
```

### C++ Implementation (View Materialization)

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <memory>

struct Row {
    std::vector<std::pair<std::string, std::string>> data;
    std::string operator[](const std::string& col) const {
        for (auto& [k, v] : data) if (k == col) return v;
        return "";
    }
};

class BaseTable {
public:
    std::string name;
    std::vector<Row> rows;
    BaseTable(std::string n) : name(std::move(n)) {}
};

class View {
public:
    std::string name;
    std::vector<std::string> columns;
    std::function<std::vector<Row>(const std::vector<std::shared_ptr<BaseTable>>&)> query;

    std::vector<Row> execute(const std::vector<std::shared_ptr<BaseTable>>& tables) {
        return query(tables);
    }
};

class MaterializedView : public View {
    std::vector<Row> materialized_data;
    bool is_stale = true;
public:
    void refresh(const std::vector<std::shared_ptr<BaseTable>>& tables) {
        materialized_data = query(tables);
        is_stale = false;
        std::cout << "Materialized view '" << name << "' refreshed (" 
                  << materialized_data.size() << " rows)\n";
    }

    std::vector<Row> query_data() {
        if (is_stale)
            std::cout << "WARNING: View '" << name << "' is stale. Call refresh().\n";
        return materialized_data;
    }
};

int main() {
    auto orders = std::make_shared<BaseTable>("orders");
    orders->rows = {{ {{"id","1"},{"amount","100"},{"status","completed"}} }};

    MaterializedView mv;
    mv.name = "completed_orders";
    mv.query = [](const auto& tables) {
        std::vector<Row> result;
        for (auto& t : tables)
            for (auto& r : t->rows)
                if (r["status"] == "completed")
                    result.push_back(r);
        return result;
    };

    mv.refresh({orders});
    auto data = mv.query_data();
    for (auto& r : data)
        std::cout << "Order " << r["id"] << ": $" << r["amount"] << "\n";

    return 0;
}
```

### Python Implementation (View Abstraction)

```python
from dataclasses import dataclass, field
from typing import Callable

@dataclass
class Row:
    data: dict

@dataclass
class BaseTable:
    name: str
    rows: list[Row] = field(default_factory=list)

@dataclass
class View:
    name: str
    query_func: Callable  # Takes list of tables, returns list of Rows

    def query(self, tables: list[BaseTable]) -> list[Row]:
        return self.query_func(tables)

class MaterializedView(View):
    def __init__(self, name: str, query_func: Callable):
        super().__init__(name, query_func)
        self._data: list[Row] = []
        self._is_stale = True

    def refresh(self, tables: list[BaseTable]):
        self._data = self.query_func(tables)
        self._is_stale = False
        print(f"Refreshed '{self.name}' ({len(self._data)} rows)")

    def get_data(self) -> list[Row]:
        if self._is_stale:
            print(f"WARNING: '{self.name}' is stale")
        return self._data

orders = BaseTable("orders")
orders.rows = [Row({"id":"1","amount":"100","status":"completed"})]

completed_view = MaterializedView("completed_orders", lambda tables: [
    r for t in tables for r in t.rows if r.data.get("status") == "completed"
])
completed_view.refresh([orders])
for r in completed_view.get_data():
    print(f"Order {r.data['id']}: ${r.data['amount']}")
```

### View Complexity

| Aspect | Regular View | Indexed/Materialized View |
|--------|-------------|---------------------------|
| **Storage** | None (query definition only) | Disk space for result set |
| **Query time** | O(n) â€” runs underlying query each access | O(log n) with index â€” precomputed |
| **Freshness** | Always current | Stale until refresh |
| **DML impact** | None | Refresh overhead; updates to base table may fail (SQL Server indexed view restrictions) |
| **Index support** | No | Yes |
| **Use case** | Abstraction, security, simplicity | Performance, data warehouse, heavy aggregations |

---

## 6.11 Temporary Tables & Table Variables

Temporary tables store intermediate results for the **duration of a session** or **scope of a batch**. Table variables are similar but scoped to a **batch, function, or stored procedure**.

### Real-World Analogy

> **Temp Table** = A whiteboard in a meeting room. You write intermediate results, erase when the meeting ends. Anyone in the meeting can see and modify it.
> **Table Variable** = A personal notepad. You scribble intermediate notes for yourself, and it's thrown away when you leave the room.

### 6.11.1 Local Temporary Tables (#temp)

```sql
-- Create local temp table (single # â€” visible only to current session)
CREATE TABLE #dept_summary (
    department_id INT,
    department_name VARCHAR(100),
    employee_count INT,
    total_salary DECIMAL(12,2),
    created_at DATETIME DEFAULT GETDATE()
);

-- Insert into temp table
INSERT INTO #dept_summary (department_id, department_name, employee_count, total_salary)
SELECT
    d.department_id,
    d.department_name,
    COUNT(e.emp_id),
    ISNULL(SUM(e.salary), 0)
FROM departments d
LEFT JOIN employees e ON d.department_id = e.department_id
GROUP BY d.department_id, d.department_name;

-- Use the temp table in subsequent queries
SELECT * FROM #dept_summary WHERE total_salary > 500000;

-- Temp table is automatically dropped when session ends
-- But explicit drop is good practice:
DROP TABLE IF EXISTS #dept_summary;
```

### 6.11.2 Global Temporary Tables (##temp)

```sql
-- Global temp table (## â€” visible to ALL sessions)
CREATE TABLE ##global_temp_errors (
    error_id INT IDENTITY,
    error_message VARCHAR(500),
    error_time DATETIME DEFAULT GETDATE(),
    session_id INT
);

INSERT INTO ##global_temp_errors (error_message, session_id)
VALUES ('Division by zero', @@SPID);

-- Any session can query it:
SELECT * FROM ##global_temp_errors;

-- Drops when creating session ends AND no other sessions reference it
```

### 6.11.3 Table Variables

```sql
-- Declare a table variable (scoped to batch/procedure)
DECLARE @ProductSales TABLE (
    product_id INT PRIMARY KEY,
    product_name NVARCHAR(100),
    total_sold INT,
    total_revenue DECIMAL(12,2)
);

INSERT INTO @ProductSales (product_id, product_name, total_sold, total_revenue)
SELECT
    p.product_id,
    p.product_name,
    SUM(oi.quantity),
    SUM(oi.quantity * oi.unit_price)
FROM products p
JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_id, p.product_name;

-- Query the table variable
SELECT * FROM @ProductSales ORDER BY total_revenue DESC;
```

### 6.11.4 Temp Table vs Table Variable Comparison

| Aspect | Temp Table (#) | Table Variable (@) |
|--------|---------------|-------------------|
| **Scope** | Current session | Current batch/procedure |
| **Location** | tempdb (disk) | tempdb (mostly memory) |
| **Indexes** | Can create explicit indexes | Only PRIMARY KEY / UNIQUE constraints |
| **Statistics** | Yes â€” optimizer has histogram | No â€” optimizer assumes 1 row (can cause bad plans) |
| **Transactions** | Participates â€” can rollback | Participates â€” can rollback |
| **Explicit DROP** | Optional (auto-dropped) | Not needed (auto-cleared) |
| **Nested procedures** | Visible to inner procedures | Not visible to inner procedures |
| **When to use** | Large datasets, need indexes, multiple scopes | Small datasets ( < 100 rows ), simple lookups |
| **Performance** | Better for large data (stats help optimizer) | Better for small data (less overhead, mostly in memory) |

### C++ Implementation (Temp Table Simulation)

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
#include <memory>
#include <any>

class Row {
public:
    std::unordered_map<std::string, std::any> columns;
    template<typename T>
    T get(const std::string& col) const {
        return std::any_cast<T>(columns.at(col));
    }
};

class TempTable {
    std::string name;
    bool isGlobal;
    std::vector<Row> rows;
public:
    TempTable(const std::string& n, bool global = false)
        : name(n), isGlobal(global) {}

    void insert(Row r) { rows.push_back(std::move(r)); }

    std::vector<Row> query(const std::string& condition) {
        std::vector<Row> result;
        for (auto& r : rows) {
            result.push_back(r);
        }
        return result;
    }

    size_t size() const { return rows.size(); }
    void clear() { rows.clear(); }
};

class TempTableManager {
    std::unordered_map<std::string, std::unique_ptr<TempTable>> localTables;
public:
    TempTable* create(const std::string& name, bool global = false) {
        auto tt = std::make_unique<TempTable>(name, global);
        auto* ptr = tt.get();
        localTables[name] = std::move(tt);
        return ptr;
    }

    void drop(const std::string& name) {
        localTables.erase(name);
    }

    void clearSession() {
        localTables.clear();
    }

    template<typename Func>
    std::vector<Row> withTempTable(const std::string& name, Func setup, Func query) {
        TempTable tt(name);
        setup(tt);
        return query(tt);
    }
};

int main() {
    TempTableManager mgr;
    TempTable* deptSummaries = mgr.create("#dept_summary");

    Row r1, r2;
    r1.columns = {{"dept_id", 1}, {"name", std::string("Engineering")}, {"count", 42}};
    r2.columns = {{"dept_id", 2}, {"name", std::string("Sales")}, {"count", 30}};
    deptSummaries->insert(r1);
    deptSummaries->insert(r2);

    std::cout << "Temp table has " << deptSummaries->size() << " rows\n";
    mgr.clearSession();
    return 0;
}
```

### Python Implementation (Temp Table Simulator)

```python
from dataclasses import dataclass, field
from typing import Any, Optional

@dataclass
class TempTable:
    name: str
    is_global: bool = False
    rows: list[dict[str, Any]] = field(default_factory=list)

    def insert(self, row: dict):
        self.rows.append(row)

    def query(self, condition: Optional[callable] = None) -> list[dict]:
        if condition:
            return [r for r in self.rows if condition(r)]
        return self.rows.copy()

    @property
    def size(self) -> int:
        return len(self.rows)

class TempTableManager:
    def __init__(self):
        self._tables: dict[str, TempTable] = {}

    def create(self, name: str, global_: bool = False) -> TempTable:
        tt = TempTable(name, global_)
        self._tables[name] = tt
        return tt

    def drop(self, name: str):
        self._tables.pop(name, None)

    def clear_session(self):
        self._tables.clear()

# Usage
mgr = TempTableManager()
dept_summary = mgr.create("#dept_summary")
dept_summary.insert({"dept_id": 1, "name": "Engineering", "count": 42})
dept_summary.insert({"dept_id": 2, "name": "Sales", "count": 30})
print(f"Rows: {dept_summary.size}")

# Query like a temp table
for row in dept_summary.query(lambda r: r["count"] > 35):
    print(f"  {row['name']}: {row['count']} employees")

mgr.clear_session()
```

---

## 6.12 Procedure vs Function vs Trigger Comparison

| Feature | Stored Procedure | Function (UDF) | Trigger |
|---------|-----------------|-----------------|---------|
| **Returns** | Zero or more result sets, output params, return code | Single scalar value or table | N/A (fires implicitly) |
| **Can be called from SELECT** | No (use EXEC/CALL) | Yes (in SELECT, WHERE, etc.) | No (automatic) |
| **Side effects** | Yes (INSERT/UPDATE/DELETE) | Limited (cannot modify tables in most DBMS) | Yes (within same transaction) |
| **Transaction control** | Yes (BEGIN TRAN, COMMIT, ROLLBACK) | No (runs within caller's transaction) | Yes (runs within firing transaction) |
| **Parameters** | IN, OUT, INOUT | IN only | N/A (OLD/NEW implicit) |
| **Compilation** | Compiled, plan cached | Compiled, plan cached | Compiled, plan cached |
| **Exception handling** | Yes (TRY/CATCH) | Yes (EXCEPTION blocks) | Yes (SIGNAL, THROW) |
| **Nesting depth** | Up to 32 levels | Limited (function call stack) | Up to 32 levels |
| **Use case** | Business logic, batch ops | Computations, data transformations | Auditing, validation, cascading |
| **Deterministic** | No | Can be (IMMUTABLE) | No |
| **Can be indexed** | No | Yes (deterministic functions in computed columns) | No |

---

## 6.13 View vs Temp Table vs CTE Comparison

| Feature | View | Temp Table | CTE |
|---------|------|------------|-----|
| **Definition** | Saved query definition | Temporary storage | Named query expression |
| **Lifetime** | Permanent (until dropped) | Session/batch | Single query execution |
| **Storage** | None (virtual) | tempdb (disk/memory) | None (inlined or materialized by optimizer) |
| **Reusable across queries** | Yes | Yes | No |
| **Indexable** | Yes (indexed/materialized views only) | Yes | No |
| **Recursion** | No | No | Yes (WITH RECURSIVE) |
| **Modifiable (DML)** | Limited (simple views only) | Yes | No |
| **Statistics** | No (query definition) | Yes (tempdb stats) | No |
| **Parameterizable** | No (needs function for params) | No (can use variables) | No |
| **Readability** | High (encapsulates complexity) | Medium (separate DDL) | High (inline with main query) |
| **Performance best for** | Frequent queries on complex joins | Multi-step ETL, large intermediate sets | Single-query complex logic, recursion |
| **Overhead** | Minimal (query expansion) | Significant (DDL + I/O) | Minimal (optimizer decides) |

---

## 6.14 Interview Corner

### Q1: What is the maximum recursion depth for CTEs?

Most DBMS enforce a default limit to prevent infinite recursion:
- **SQL Server:** Default 100, max 32767 (`OPTION (MAXRECURSION 32767)`). Use `MAXRECURSION 0` for unlimited (dangerous).
- **PostgreSQL:** Default 100 (set by `max_recursive_iterations` GUC). No hard limit, but stack overflow may occur around 1000+ iterations.
- **MySQL:** 8.0+ supports recursive CTEs with `cte_max_recursion_depth` (default 1000, max 4294967295).
- **Oracle:** Default unlimited but limited by system resources.

**Interview answer:** "Recursive CTE depth is capped to prevent infinite loops. Default is 100 in most systems. Always use a termination condition (`WHERE n < limit`) and consider whether a set-based approach (hierarchyid, nested sets) might be more performant for deep hierarchies."

### Q2: Correlated vs Non-correlated subquery â€” performance difference?

**Non-correlated:** Inner query runs **once**. Example: `WHERE salary > (SELECT AVG(salary) FROM employees)` â€” AVG is computed once.
**Correlated:** Inner query runs **once per outer row**. Example: `WHERE salary > (SELECT AVG(e2.salary) FROM employees e2 WHERE e2.dept_id = e1.dept_id)` â€” AVG computed per department.

**Interview answer:** "Non-correlated subqueries execute once and are generally faster. Correlated subqueries execute for each outer row and can be O(nÂ²). The optimizer may rewrite correlated subqueries to joins or apply caching (subquery decorrelation). Always check the execution plan. When possible, rewrite correlated subqueries to window functions or JOINs with GROUP BY."

### Q3: Can you create an index on a view?

**Regular view:** No â€” it's just a stored query; there's nothing to index.
**Indexed view (SQL Server) / Materialized view (PostgreSQL/Oracle):** Yes â€” creates a physical copy with a clustered index.

Requirements for indexed views in SQL Server:
- `WITH SCHEMABINDING`
- No subqueries in the view definition (unless using EXISTS)
- No UNION, EXCEPT, INTERSECT
- No DISTINCT, TOP, OFFSET
- No outer joins (LEFT/RIGHT JOIN)
- First index must be UNIQUE CLUSTERED

**Interview answer:** "You cannot index a regular view. For materialized views, you create a unique clustered index which physically stores the view's result set. This dramatically speeds up queries against the view but adds overhead to base table modifications."

### Q4: Trigger vs CHECK constraint â€” which to use for validation?

**CHECK constraint:** Simple, declarative, fast. Best for: column-level validation, domain integrity.
**Trigger:** Complex, procedural, flexible. Best for: cross-table validation, business rules, audit logging.

```sql
-- CHECK constraint: salary must be positive (simple, fast)
ALTER TABLE employees ADD CONSTRAINT ck_salary_positive CHECK (salary > 0);

-- Trigger: salary cannot decrease (complex, needs cross-row reference)
CREATE TRIGGER trg_no_salary_decrease ON employees
INSTEAD OF UPDATE AS
BEGIN
    IF EXISTS (SELECT 1 FROM inserted i JOIN deleted d ON i.emp_id = d.emp_id
               WHERE i.salary < d.salary)
        THROW 50000, 'Salary cannot decrease', 1;
END;
```

**Interview answer:** "Use CHECK constraints for simple, single-row validation â€” they're declarative, faster, and the optimizer understands them. Use triggers only for complex business rules that span rows or tables, or when you need side effects like audit logging."

### Q5: What happens with NULLs in window function ORDER BY?

- **PostgreSQL:** NULLS LAST by default (ASC), NULLS FIRST by default (DESC).
- **SQL Server:** NULLS FIRST (ASC), NULLS LAST (DESC).
- **MySQL:** NULLS FIRST by default.
- Impact: ROW_NUMBER assigns 1 to the first row in sort order; RANK/DENSE_RANK may group NULLs together.

**Interview answer:** "NULL handling in window functions follows the database's NULL sort order. This affects ROW_NUMBER assignment â€” if you're ranking salaries and some are NULL, they'll appear at the start or end depending on the DBMS. Use ORDER BY with NULLS LAST/NULLS FIRST for explicit control."

### Q6: Why would a MERGE statement fail with "multiple rows in source match same target"?

MERGE requires a 1:1 or 0:1 relationship between source and target on the join condition. If the source has duplicates on the join key, the DBMS cannot determine which source row to use for the UPDATE.

```sql
-- This fails if source has duplicate product_ids
MERGE INTO inventory AS target
USING (
    SELECT product_id, SUM(quantity) AS qty
    FROM shipments
    GROUP BY product_id  -- Ensure uniqueness
) AS source
ON target.product_id = source.product_id
WHEN MATCHED THEN UPDATE SET quantity = quantity + source.qty;
```

**Interview answer:** "MERGE requires a unique join between source and target. Aggregating the source to remove duplicates before the MERGE or adding a DISTINCT resolves this. Always ensure the source has unique rows on the join key."

### Q7: Can a CTE be used in multiple queries?

No â€” a CTE is scoped to the **single** statement that follows the WITH clause. For multiple queries, use a temp table or a view.

```sql
WITH cte AS (SELECT * FROM employees WHERE salary > 80000)
SELECT * FROM cte;          -- First query uses CTE

-- SELECT * FROM cte;       -- ERROR: CTE no longer in scope
-- CREATE VIEW ...          -- Use view instead for reusability
```

### Q8: Dynamic SQL â€” why is QUOTENAME important?

Without QUOTENAME, a malicious user can perform SQL injection:

```sql
-- VULNERABLE: @table_name from user input
SET @sql = 'SELECT * FROM ' + @table_name;
-- Input: 'employees; DROP TABLE employees; --'

-- SAFE: QUOTENAME escapes and brackets the name
SET @sql = 'SELECT * FROM ' + QUOTENAME(@table_name);
-- Output: SELECT * FROM [employees; DROP TABLE employees; --]
--                      ^^^ entire input is treated as ONE identifier ^^^
```

---

## 6.15 Applications in Real Systems

### PostgreSQL Window Functions

PostgreSQL's window function support is the gold standard â€” it supports ALL standard SQL:2003 window functions plus extensions.

**Real Use Case: Stock Market Technical Analysis**
```sql
-- Compute 50-day and 200-day moving averages for stock signals
SELECT
    symbol,
    trade_date,
    close_price,
    AVG(close_price) OVER (
        PARTITION BY symbol ORDER BY trade_date
        ROWS BETWEEN 49 PRECEDING AND CURRENT ROW
    ) AS sma_50,
    AVG(close_price) OVER (
        PARTITION BY symbol ORDER BY trade_date
        ROWS BETWEEN 199 PRECEDING AND CURRENT ROW
    ) AS sma_200
FROM daily_prices
WHERE symbol = 'AAPL'
ORDER BY trade_date DESC;

-- Find the first and last price of each month (monthly OHLC summary)
SELECT DISTINCT ON (symbol, DATE_TRUNC('month', trade_date))
    symbol,
    DATE_TRUNC('month', trade_date) AS month,
    FIRST_VALUE(close_price) OVER w AS month_open,
    LAST_VALUE(close_price) OVER w AS month_close,
    MAX(high_price) OVER w AS month_high,
    MIN(low_price) OVER w AS month_low
FROM daily_prices
WINDOW w AS (PARTITION BY symbol, DATE_TRUNC('month', trade_date)
             ORDER BY trade_date
             RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING);
```

### SQL Server Stored Procedures in Production

SQL Server stored procedures are the backbone of enterprise applications for encapsulating business logic.

**Real Use Case: Order Processing Pipeline**
```sql
CREATE PROCEDURE sp_ProcessOrder
    @customer_id INT,
    @order_date DATETIME = NULL,
    @order_id INT OUTPUT
AS
BEGIN
    SET XACT_ABORT ON;  -- Auto-rollback on error
    BEGIN TRY
        BEGIN TRANSACTION;

        -- 1. Validate customer credit
        DECLARE @credit_limit DECIMAL(12,2), @current_balance DECIMAL(12,2);
        SELECT @credit_limit = credit_limit, @current_balance = balance
        FROM customers WHERE customer_id = @customer_id;

        IF @current_balance >= @credit_limit
            THROW 50001, 'Customer exceeds credit limit', 1;

        -- 2. Create the order
        INSERT INTO orders (customer_id, order_date, status)
        VALUES (@customer_id, ISNULL(@order_date, GETDATE()), 'Pending');
        SET @order_id = SCOPE_IDENTITY();

        -- 3. Reserve inventory (pessimistic locking)
        -- (calls sp_ReserveInventory for each item in application layer)

        -- 4. Update customer balance
        UPDATE customers
        SET balance = balance + @order_total,
            last_order_date = GETDATE()
        WHERE customer_id = @customer_id;

        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;
        THROW;
    END CATCH;
END;
```

### MySQL Triggers for Data Sync

MySQL triggers are commonly used for denormalization, audit trails, and cross-table synchronization.

**Real Use Case: Materialized Aggregate Cache**
```sql
-- Maintain a running aggregate table that avoids expensive COUNT/SUM queries
CREATE TABLE product_stats (
    product_id INT PRIMARY KEY,
    total_units_sold INT DEFAULT 0,
    total_revenue DECIMAL(12,2) DEFAULT 0,
    last_sale_date DATETIME
);

DELIMITER //
CREATE TRIGGER trg_after_order_item_insert
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
    INSERT INTO product_stats (product_id, total_units_sold, total_revenue, last_sale_date)
    VALUES (NEW.product_id, NEW.quantity, NEW.quantity * NEW.unit_price, NOW())
    ON DUPLICATE KEY UPDATE
        total_units_sold = total_units_sold + NEW.quantity,
        total_revenue = total_revenue + (NEW.quantity * New.unit_price),
        last_sale_date = NOW();
END//

CREATE TRIGGER trg_after_order_item_delete
AFTER DELETE ON order_items
FOR EACH ROW
BEGIN
    UPDATE product_stats
    SET total_units_sold = total_units_sold - OLD.quantity,
        total_revenue = total_revenue - (OLD.quantity * OLD.unit_price)
    WHERE product_id = OLD.product_id;
END//
DELIMITER ;
```

### Dynamic SQL in Search Applications

**Real Use Case: Dynamic Filter Builder**
```sql
CREATE PROCEDURE sp_SearchProducts
    @category_id INT = NULL,
    @min_price DECIMAL(10,2) = NULL,
    @max_price DECIMAL(10,2) = NULL,
    @in_stock BIT = NULL,
    @search_term NVARCHAR(200) = NULL,
    @sort_column NVARCHAR(50) = 'product_name',
    @sort_direction NVARCHAR(4) = 'ASC',
    @page INT = 1,
    @page_size INT = 20
AS
BEGIN
    DECLARE @sql NVARCHAR(MAX);
    DECLARE @params NVARCHAR(MAX);
    DECLARE @offset INT = (@page - 1) * @page_size;

    SET @sql = N'SELECT product_id, product_name, price, stock_quantity
                 FROM products WHERE 1=1';

    SET @params = N'@cat INT, @min DECIMAL, @max DECIMAL, @stock BIT, @term NVARCHAR(200)';

    IF @category_id IS NOT NULL
        SET @sql += N' AND category_id = @cat';
    IF @min_price IS NOT NULL
        SET @sql += N' AND price >= @min';
    IF @max_price IS NOT NULL
        SET @sql += N' AND price <= @max';
    IF @in_stock IS NOT NULL
        SET @sql += N' AND (stock_quantity > 0) = @stock';
    IF @search_term IS NOT NULL
        SET @sql += N' AND product_name LIKE N''%'' + @term + N''%''';

    -- Validate sort column to prevent injection
    IF @sort_column NOT IN ('product_name', 'price', 'stock_quantity')
        SET @sort_column = 'product_name';
    IF @sort_direction NOT IN ('ASC', 'DESC')
        SET @sort_direction = 'ASC';

    SET @sql += N' ORDER BY ' + QUOTENAME(@sort_column) + N' ' + @sort_direction;
    SET @sql += N' OFFSET @offset ROWS FETCH NEXT @pagesize ROWS ONLY';

    SET @params += N', @offset INT, @pagesize INT';

    EXEC sp_executesql @sql, @params,
        @cat = @category_id, @min = @min_price, @max = @max_price,
        @stock = @in_stock, @term = @search_term,
        @offset = @offset, @pagesize = @page_size;
END;
```

### Recursive CTE in Organization Management

**Real Use Case: Access Control Hierarchy Resolution**
```sql
-- Given a user's role, find all permissions including inherited ones
WITH RECURSIVE role_permissions AS (
    -- Direct permissions for the user's role
    SELECT rp.role_id, rp.permission_id, p.permission_name, 0 AS inheritance_depth
    FROM role_permissions rp
    JOIN permissions p ON rp.permission_id = p.permission_id
    WHERE rp.role_id = @user_role_id

    UNION ALL

    -- Permissions inherited from parent roles
    SELECT rp.role_id, rp.permission_id, p.permission_name, rp.inheritance_depth + 1
    FROM role_hierarchy rh
    JOIN role_permissions rp ON rh.parent_role_id = rp.role_id
    JOIN permissions p ON rp.permission_id = p.permission_id
)
SELECT DISTINCT permission_name
FROM role_permissions;
```

### MERGE in Data Warehousing (Slowly Changing Dimensions)

```sql
-- Type 2 SCD: track historical changes to customer data
MERGE INTO dim_customer AS target
USING staging_customer AS source
ON target.customer_bk = source.customer_id
   AND target.is_current = 1

WHEN MATCHED AND (
    target.name <> source.name OR
    target.address <> source.address OR
    target.phone <> source.phone
) THEN
    -- Close the current record
    UPDATE SET
        is_current = 0,
        valid_to = GETDATE()

WHEN NOT MATCHED THEN
    -- Insert new record
    INSERT (customer_bk, name, address, phone, valid_from, valid_to, is_current)
    VALUES (source.customer_id, source.name, source.address, source.phone,
            GETDATE(), '9999-12-31', 1)

WHEN NOT MATCHED BY SOURCE AND target.is_current = 1 THEN
    -- Customer no longer exists in source
    UPDATE SET
        is_current = 0,
        valid_to = GETDATE();
```

---

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| **Subqueries** | Nested queries returning scalar/row/table/correlated results | Correlated subqueries = O(nÂ²); prefer JOINs or window functions |
| **EXISTS/NOT EXISTS** | Short-circuit existence check | EXISTS > IN for large subqueries due to early termination |
| **ANY/ALL** | Compare against any or all values in a set | `> ANY` = `> MIN()`; `> ALL` = `> MAX()` |
| **CTEs** | Named temporary result sets within a single query | Use for readability, recursion, multiple references |
| **Recursive CTEs** | Self-referencing queries for hierarchies | Anchor + UNION ALL + recursive member; mind depth limits |
| **Window Functions** | Per-row analytic calculations without grouping | Replace 80% of self-join and subquery use cases |
| **PIVOT/UNPIVOT** | Row-to-column and column-to-row transformation | CASE-based PIVOT is cross-DBMS compatible |
| **MERGE** | Synchronize tables with INSERT/UPDATE/DELETE | Ensure unique source; watch for concurrency issues |
| **Dynamic SQL** | Runtime SQL construction | Always use QUOTENAME/parameters; never concatenate input |
| **Stored Procedures** | Pre-compiled server-side logic | Use for transactions, security boundaries, performance |
| **Functions** | Deterministic computations inside queries | Scalar UDFs can be slow per-row; inline TVFs are optimized |
| **Triggers** | Automatic execution on DML events | Use sparingly â€” they add latency and can cause recursion |
| **Views** | Virtual tables for abstraction and security | Indexed views for performance; regular views for encapsulation |
| **Indexed Views** | Materialized query results with clustered index | Great for aggregations; adds base table update overhead |
| **Temp Tables** | Session-scoped intermediate storage | Use for large datasets; statistics help optimizer |
| **Table Variables** | Batch-scoped lightweight storage | Use for small datasets (< 100 rows) |

---

## SQL Execution Order

```
FROM / JOIN      â†’ Determines source tables and joins
WHERE            â†’ Filters rows BEFORE grouping
GROUP BY         â†’ Partitions rows into groups
HAVING           â†’ Filters groups AFTER aggregation
SELECT           â†’ Projects columns; computes window functions
ORDER BY         â†’ Sorts the final result set
LIMIT / OFFSET   â†’ Pagination
```

---

## Quick Reference

| Window Function | Purpose | Example |
|----------------|---------|---------|
| ROW_NUMBER() | Unique sequential number per partition | `ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC)` |
| RANK() | Rank with gaps for ties | `RANK() OVER (ORDER BY score DESC)` â†’ 1,1,3,4 |
| DENSE_RANK() | Rank without gaps for ties | `DENSE_RANK() OVER (ORDER BY score DESC)` â†’ 1,1,2,3 |
| NTILE(n) | Distribute into n buckets | `NTILE(4) OVER (ORDER BY amount)` â†’ quartiles |
| LAG(col, n, d) | Previous row value | `LAG(salary, 1, 0) OVER (ORDER BY hire_date)` |
| LEAD(col, n, d) | Next row value | `LEAD(price, 1) OVER (ORDER BY trade_date)` |
| FIRST_VALUE(col) | First value in frame | `FIRST_VALUE(price) OVER (ORDER BY date)` |
| LAST_VALUE(col) | Last value in full frame | `LAST_VALUE(price) OVER (ORDER BY date RANGE BETWEEN ... )` |

| Subquery Type | Returns | Location | Executed |
|--------------|---------|----------|----------|
| Scalar | 1 value (1x1) | SELECT/WHERE/HAVING | Once |
| Row | 1 row (1xN) | WHERE (row constructors) | Once |
| Table | Multiple rows (NxM) | FROM (derived table) | Once |
| Correlated | Dependent value | SELECT/WHERE/HAVING | Per outer row |

---

## Chapter Quiz

1. **What does a scalar subquery return?**
   a) Multiple rows and columns
   b) One row with multiple columns
   c) One column and one row (single value)
   d) A boolean value

2. **What is the main difference between a correlated and non-correlated subquery?**
   a) Correlated subqueries are faster
   b) Correlated subqueries reference the outer query and execute per outer row
   c) Non-correlated subqueries execute per outer row
   d) There is no difference

3. **True or False: A recursive CTE must contain UNION ALL.**

4. **Which window function would you use to find the top 3 sales per region?**
   a) SUM() OVER()
   b) ROW_NUMBER() OVER()
   c) AVG() OVER()
   d) LAG() OVER()

5. **What happens when a source table has duplicates on the MERGE join key?**
   a) MERGE succeeds, updating the target with the first match
   b) MERGE succeeds, updating the target with the last match
   c) MERGE fails with "multiple rows in source match same target row"
   d) MERGE ignores duplicates silently

6. **What's the key difference between RANK() and DENSE_RANK()?**
   a) RANK is faster
   b) DENSE_RANK skips numbers; RANK does not
   c) RANK skips numbers after ties; DENSE_RANK does not
   d) The functions are identical

7. **Which trigger type can be used to make a non-updatable view updatable?**
   a) AFTER INSERT
   b) BEFORE UPDATE
   c) INSTEAD OF
   d) DDL trigger

8. **Dynamic SQL risk: What does QUOTENAME protect against?**
   a) Syntax errors
   b) SQL injection by safely quoting identifiers
   c) Performance degradation
   d) Data type mismatches

9. **A materialized view differs from a regular view because:**
   a) It is always current
   b) It stores results physically
   c) It cannot be queried
   d) It supports INSERT/UPDATE/DELETE automatically

10. **When should you use a table variable instead of a temp table?**
    a) For large datasets needing indexes
    b) For small datasets (< 100 rows) in a single batch
    c) When you need cross-session visibility
    d) When you need statistics for the optimizer

**Answers:** 1-c, 2-b, 3-True, 4-b, 5-c, 6-c, 7-c, 8-b, 9-b, 10-b

---

## Summary

- **Subqueries** (scalar, row, table, correlated) â€” nested queries for single values, row comparisons, derived tables, and per-row lookups. Correlated subqueries run once per outer row; prefer JOINs when possible.
- **EXISTS / NOT EXISTS** â€” short-circuit existence checks. More efficient than IN for large subqueries.
- **ANY / ALL** â€” compare a value against any one or all values from a subquery. `> ANY = > MIN(); > ALL = > MAX()`.
- **CTEs (WITH clause)** â€” named temporary result sets for readability, reuse, and recursion. Recursive CTEs require an anchor, UNION ALL, and a recursive member. Depth is capped (default 100).
- **Window Functions** (ROW_NUMBER, RANK, DENSE_RANK, NTILE, LAG, LEAD, FIRST_VALUE, LAST_VALUE, SUM/AVG OVER) â€” per-row calculations across partitions without collapsing rows.
- **PIVOT / UNPIVOT** â€” transform rows to columns and vice versa. CASE-based PIVOT is most portable.
- **MERGE / UPSERT** â€” single-statement INSERT, UPDATE, DELETE synchronization. Ensure unique source join keys.
- **Dynamic SQL** â€” runtime SQL construction. Always parameterize or use QUOTENAME to prevent injection.
- **Stored Procedures** â€” compiled server-side logic with transactions, error handling, and reusable execution plans.
- **Functions (UDFs)** â€” deterministic computations usable inside queries. Scalar UDFs run per-row; inline TVFs are optimized into outer queries.
- **Triggers** â€” automatic event-driven execution. Use for auditing, validation, cascading. Avoid complex logic that slows DML.
- **Views** â€” virtual tables for abstraction and security. Indexed/materialized views store results physically for performance.
- **Temp Tables & Table Variables** â€” session-scoped intermediate storage. Temp tables suit large datasets; table variables suit small ones.

---

## Exercises

### Basic

1. Write a scalar subquery to find all employees whose salary is above the company average. Include the average in the output.

2. Write a query using EXISTS to find all departments that have at least one employee.

3. Create a CTE that calculates the total sales per customer, then select customers with total sales > $500.

4. Create a view named `recent_orders` showing all orders from the last 30 days.

5. Write a query using ROW_NUMBER to find the top 3 highest-paid employees in each department.

### Intermediate

6. Write a recursive CTE that generates dates from January 1, 2026 to December 31, 2026.

7. Find employees whose salary is above their department's average salary. Write this using: a) a correlated subquery, b) a window function. Compare the approaches.

8. Write a MERGE statement that synchronizes a product_inventory table with new shipments, updating quantities for existing products and inserting new ones.

9. Create a trigger that logs all salary changes to a salary_audit table, capturing old and new values along with the timestamp.

10. Write a dynamic SQL procedure that accepts a table name and column name, and returns the MIN, MAX, AVG of that column.

### Advanced

11. Write a query using LAG to compute the day-over-day percentage change in stock price. Schema: `prices(symbol, date, close_price)`. Return symbol, date, price, and pct_change.

12. Using a recursive CTE, find the management chain (all ancestors) for a given employee. Schema: `employees(emp_id, name, manager_id)`. Show the full chain from employee to CEO.

13. Create a stored procedure with TRY/CATCH that processes an order within a transaction, validating customer credit, reserving inventory, and handling errors gracefully.

14. Implement a Type 2 slowly changing dimension using MERGE to track historical changes to customer addresses.

15. Write a query using NTILE(4) to find the top quartile of products by revenue, then use window functions to compare each product's revenue to the quartile average.

16. Compare the performance of a regular view vs. a materialized view for a sales reporting query that aggregates millions of rows. Under what circumstances would you use each?

17. Design a trigger-based solution that prevents a user from deleting their account if they have active orders. Ensure referential integrity is maintained.

