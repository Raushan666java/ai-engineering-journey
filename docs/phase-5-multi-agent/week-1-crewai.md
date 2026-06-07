# Week 1: CrewAI

**Duration:** September 29 - October 5, 2026 | **Hours:** 35

---

## Day 1: Setup & First Crew

```python
from crewai import Agent, Task, Crew

researcher = Agent(
    role="Research Analyst",
    goal="Find accurate information",
    backstory="Expert researcher",
)

writer = Agent(
    role="Content Writer", 
    goal="Write engaging content",
    backstory="Experienced writer",
)

research_task = Task(
    description="Research latest AI trends",
    expected_output="10 key findings",
    agent=researcher
)

crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task],
    verbose=True
)

result = crew.kickoff()
```

## Day 2: Custom Tools

```python
from crewai_tools import tool

@tool("Search Web")
def search_web(query: str) -> str:
    """Search internet for information."""
    # Your search implementation
    return results
```

## Day 3: Hierarchical Process

```python
crew = Crew(
    agents=[researcher, writer, reviewer],
    tasks=[research_task, write_task, review_task],
    process=Process.hierarchical,
    manager_llm=ChatOpenAI(model="gpt-4o")
)
```

## Day 4-5: Memory Integration

```python
crew = Crew(
    agents=agents,
    tasks=tasks,
    memory=True,
    verbose=True
)
```

## Day 6-7: Build Content Crew

- Research agent → searches web
- Writer agent → creates blog post
- Reviewer agent → improves quality
