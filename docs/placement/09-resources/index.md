# Resources — Padhai Ka Samaan

Ye page sab resources ka index hai — books, PDFs, online courses, tools, cheat sheets, aur communities. Sab kuch ek jagah. Reference `Placement/Placement-01/09-Resources/Learning-Resources.md` mein detailed hai.

## Books & PDFs

### Handwritten Notes

| PDF | Location | Pages |
|-----|----------|-------|
| **DSA Handwritten Notes** | `Placement/study-doc/Data Structure and Algorithms Handwritten Notes.!!.pdf` | ~200 |
| **JavaScript Handwritten Notes** | `Placement/study-doc/JavaScript Handwritten Notes.pdf` | ~150 |
| **UI Notes** | `Placement/study-doc/User Interface Notes.pdf` | ~100 |

### Study Documents

- `Placement/study-doc/` — All PDFs and notes
- `Placement/project-study-doc/` — Project-specific documentation
- `Placement/Learning_Course/` — Complete course structure + AI-enhanced learning

## Online Courses

### Free Platforms

| Platform | Best For |
|----------|----------|
| **YouTube** | DSA, Web Dev, System Design (free channels) |
| **GeeksforGeeks** | CS theory + DSA problems |
| **FreeCodeCamp** | Full-stack projects |
| **Khan Academy** | Math + Algorithm basics |

### Paid Platforms

| Platform | Cost | Why |
|----------|------|-----|
| **LeetCode Premium** | ~₹2,500/yr | DSA practice + company questions |
| **Educative** | ~$30/mo | Grokking System Design |
| **Udemy** | ~₹500/course | Web dev, DevOps courses |
| **AlgoExpert** | ~$90/yr | DSA interview prep |

## Tools & Software

### IDEs

| Tool | Use For |
|------|---------|
| VS Code | General purpose (PHP, JS, Python) |
| PHPStorm | Laravel development (recommended) |
| IntelliJ IDEA | Java development |
| WebStorm | JavaScript/React development |
| PyCharm | Python/ML development |

### Dev Tools

- **Git**: Version control
- **Docker Desktop**: Containerization
- **Postman**: API testing
- **MySQL Workbench**: Database management
- **Redis Insight**: Cache management
- **TablePlus**: DB GUI client

### Productivity

- **Notion**: Notes + project management
- **Obsidian**: Knowledge management
- **Anki**: Spaced repetition flashcards
- **Toggl Track**: Time tracking

## Communities

| Platform | Link / How to Join |
|----------|-------------------|
| Discord | `Placement` workspace mein channel hai |
| LinkedIn | Connect with Raushan and placement group |
| Reddit | r/developersIndia, r/learnprogramming |
| WhatsApp | Placement study groups (check Plan/ folder) |

## Cheat Sheets

### Git

```bash
git status                    # Check working tree
git add .                     # Stage all
git commit -m "message"       # Commit
git push origin main          # Push to remote
git pull origin main           # Pull from remote
git branch feature-x          # Create branch
git checkout feature-x        # Switch branch
git merge feature-x           # Merge branch
```

### SQL

```sql
SELECT * FROM users WHERE status = 'active';
SELECT u.name, o.total FROM users u JOIN orders o ON u.id = o.user_id;
INSERT INTO users (name, email) VALUES ('Raushan', 'raushan@example.com');
UPDATE users SET status = 'inactive' WHERE id = 1;
DELETE FROM users WHERE id = 1;
```

### JavaScript ES6+

```javascript
// Arrow functions
const add = (a, b) => a + b;

// Destructuring
const { name, age } = user;
const [first, second] = arr;

// Spread operator
const newArr = [...oldArr, newItem];

// Async/Await
const fetchData = async () => {
    const res = await fetch(url);
    return res.json();
};
```

### Python

```python
# List comprehension
squares = [x**2 for x in range(10)]

# Lambda
add = lambda a, b: a + b

# Pandas basic
import pandas as pd
df = pd.read_csv('data.csv')
df.groupby('category').mean()
```

### Linux Commands

```bash
ls -la       # List files
cd dir       # Change directory
pwd          # Print working directory
cat file     # Show file content
grep pattern # Search in files
chmod 755    # Set permissions
ps aux       # List processes
```

## Reference: `resources/cheatsheets.md`

Complete cheat sheets available in main site docs.

## Learning Path

Resources ka sahi istemal kaise kare:

```
1. Concept samajhna: YouTube / GFG / handwritten notes
2. Practice karna: LeetCode / HackerRank
3. Deep dive karna: Paid courses / books
4. Real project: Tools + documentation
5. Community help: Discord / forums
```

## Checklist

- [ ] DSA handwritten notes PDF download kiye
- [ ] JavaScript handwritten notes PDF download kiye
- [ ] LeetCode profile banaya + practice shuru kiya
- [ ] IDEs install kiye (VS Code + PHPStorm)
- [ ] Git cheat sheet yaad hai
- [ ] SQL cheat sheet yaad hai
- [ ] Linux basic commands aate hain
- [ ] Discord/LinkedIn communities join kiye
- [ ] Spaced repetition (Anki) setup kiya
