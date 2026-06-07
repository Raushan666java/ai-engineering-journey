# Week 1 — CrewAI

**Goal:** Multi-agent systems with CrewAI
**Output:** Content creation crew, support crew, research team

---

## Day 1 — CrewAI Basics

```python
# pip install crewai
# pip install 'crewai[tools]'

from crewai import Agent, Task, Crew, Process
from crewai_tools import SerperDevTool, ScrapeWebsiteTool
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(model="gpt-4o", temperature=0.7)

"""
CrewAI ke 4 building blocks:

Agent → Ek specific role wala AI worker
Task → Ek specific kaam jo agent karega
Crew → Agents + Tasks ka group
Process → Kaam kaise hoga (sequential/hierarchical)
"""
```

### Agent Configuration

```python
researcher = Agent(
    role="Senior Research Analyst",
    goal="Find accurate, up-to-date information on given topics",
    backstory="""You are an expert research analyst at ApexPillar.
    You have 10 years of experience in market research and data analysis.
    You find information that others miss.""",
    llm=llm,
    verbose=True,
    allow_delegation=False,
    max_iter=15,
    memory=True,
)

writer = Agent(
    role="Content Writer",
    goal="Write engaging, well-researched content based on research",
    backstory="""You are a senior content writer specializing in tech content.
    You transform complex research into readable, engaging articles.
    Your writing style is clear, concise, and professional.""",
    llm=llm,
    verbose=True,
    allow_delegation=False,
)

editor = Agent(
    role="Senior Editor",
    goal="Review and polish content to publication quality",
    backstory="""You have 15 years of editing experience.
    You catch every grammar mistake and ensure content flows perfectly.
    You maintain consistent tone and style throughout.""",
    llm=llm,
    verbose=True,
    allow_delegation=True,  # Can delegate back to writer
)
```

### Task Configuration

```python
research_task = Task(
    description="Research the latest trends in AI for ERP systems in 2024-2025",
    expected_output="A detailed research document with key findings, statistics, and sources",
    agent=researcher,
)

writing_task = Task(
    description="Write a 1000-word blog post about AI in ERP systems based on research",
    expected_output="A well-structured blog post with introduction, body, and conclusion",
    agent=writer,
    context=[research_task],  # Depends on research_task
)

editing_task = Task(
    description="Edit and polish the blog post for grammar, style, and flow",
    expected_output="Final polished blog post ready for publication",
    agent=editor,
    context=[writing_task],  # Depends on writing_task
)
```

### Crew Execution

```python
# Create crew
crew = Crew(
    agents=[researcher, writer, editor],
    tasks=[research_task, writing_task, editing_task],
    process=Process.sequential,  # One after another
    verbose=True,
)

# Execute
result = crew.kickoff()
print("Final Output:", result)
```

---

## Day 2 — Agent Roles & Goals

### Role Design Principles

```
Har agent ko do:
1. ROLE → Kya hai? (expert, analyst, manager)
2. GOAL → Kya achieve karna hai?
3. BACKSTORY → Personality, experience
4. TOOLS → Kya use kar sakta hai?
5. CONSTRAINTS → Kya nahi kar sakta?
```

### Role Examples

```python
# Role 1: Analyst
analyst = Agent(
    role="Data Analyst",
    goal="Extract actionable insights from raw data",
    backstory="""You specialize in finding patterns in data.
    You have worked with Fortune 500 companies on data strategy.
    You prefer numbers over opinions.""",
    llm=ChatOpenAI(model="gpt-4o", temperature=0.1),  # Low temp for accuracy
    verbose=True,
)

# Role 2: Creative
creative = Agent(
    role="Creative Director",
    goal="Generate innovative ideas and creative solutions",
    backstory="""You are a creative genius who thinks outside the box.
    Your campaigns have won multiple awards.
    You believe there are no bad ideas, only unexplored ones.""",
    llm=ChatOpenAI(model="gpt-4o", temperature=0.9),  # High temp for creativity
    verbose=True,
)

# Role 3: Reviewer
reviewer = Agent(
    role="Quality Assurance Lead",
    goal="Ensure output meets quality standards and is error-free",
    backstory="""You are meticulous and detail-oriented.
    You never let a mistake slip through.
    Your reviews are thorough yet constructive.""",
    llm=ChatOpenAI(model="gpt-4o", temperature=0),
    verbose=True,
)
```

---

## Day 3 — Sequential Process

### Content Creation Crew

```python
class ContentCreationCrew:
    """
    End-to-end content creation pipeline.
    Researcher → Writer → Editor → Publisher
    """
    
    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-4o", temperature=0.7)
        
        # Agents
        self.researcher = Agent(
            role="Research Specialist",
            goal="Gather comprehensive information on assigned topics",
            backstory="Expert researcher with access to latest sources",
            llm=self.llm,
        )
        
        self.writer = Agent(
            role="Content Writer",
            goal="Create engaging, well-structured content",
            backstory="Professional writer specializing in tech",
            llm=self.llm,
        )
        
        self.editor = Agent(
            role="Editor",
            goal="Polish content to publication standard",
            backstory="Senior editor with perfectionist standards",
            llm=ChatOpenAI(model="gpt-4o", temperature=0.2),
        )
        
        self.publisher = Agent(
            role="Publisher",
            goal="Format and prepare content for final delivery",
            backstory="Expert in content formatting and distribution",
            llm=self.llm,
        )
    
    def create_content(self, topic: str) -> str:
        tasks = [
            Task(
                description=f"Research: {topic}. Find key points, statistics, expert opinions",
                expected_output="Research brief with 5-7 key points",
                agent=self.researcher,
            ),
            Task(
                description=f"Write a 500-word blog on: {topic}",
                expected_output="Well-written blog post with intro, sections, conclusion",
                agent=self.writer,
            ),
            Task(
                description="Edit the blog for grammar, style, tone, and flow",
                expected_output="Clean, error-free blog post",
                agent=self.editor,
            ),
            Task(
                description="Format with proper headings, tags, and meta description",
                expected_output="Ready-to-publish formatted content",
                agent=self.publisher,
            ),
        ]
        
        crew = Crew(
            agents=[self.researcher, self.writer, self.editor, self.publisher],
            tasks=tasks,
            process=Process.sequential,
        )
        
        return crew.kickoff()

# Usage
crew = ContentCreationCrew()
result = crew.create_content("AI in ERP Systems for 2025")
```

---

## Day 4 — Hierarchical Process

```python
class ResearchTeamCrew:
    """
    Hierarchical process:
    Manager assigns tasks → Workers execute → Manager reviews
    """
    
    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-4o", temperature=0.5)
        
        # Manager agent
        self.manager = Agent(
            role="Research Manager",
            goal="Coordinate research efforts and ensure quality output",
            backstory="""You manage a team of research analysts.
            You assign tasks based on expertise and ensure deadlines are met.
            You review all output before delivery.""",
            llm=ChatOpenAI(model="gpt-4o", temperature=0.3),
            allow_delegation=True,
        )
        
        # Worker agents
        self.analyst_1 = Agent(
            role="Market Research Analyst",
            goal="Analyze market trends and competitor data",
            backstory="MBA graduate with 5 years in market research",
            llm=llm,
        )
        
        self.analyst_2 = Agent(
            role="Technical Research Analyst",
            goal="Research technical specifications and architecture",
            backstory="Computer science background with 8 years in tech",
            llm=llm,
        )
        
        self.analyst_3 = Agent(
            role="Customer Research Analyst",
            goal="Gather customer insights and feedback data",
            backstory="Expert in user research and customer behavior",
            llm=llm,
        )
    
    def research(self, topic: str) -> str:
        # Manager assigns sub-topics to analysts
        tasks = [
            Task(
                description=f"Analyze market trends for: {topic}",
                expected_output="Market analysis report with statistics",
                agent=self.analyst_1,
            ),
            Task(
                description=f"Research technical aspects of: {topic}",
                expected_output="Technical research document",
                agent=self.analyst_2,
            ),
            Task(
                description=f"Research customer perspective on: {topic}",
                expected_output="Customer insights report",
                agent=self.analyst_3,
            ),
            Task(
                description=f"Synthesize all research into final report on: {topic}",
                expected_output="Comprehensive final report",
                agent=self.manager,
            ),
        ]
        
        crew = Crew(
            agents=[self.manager, self.analyst_1, self.analyst_2, self.analyst_3],
            tasks=tasks,
            process=Process.hierarchical,
            manager_agent=self.manager,
        )
        
        return crew.kickoff()

# Usage
team = ResearchTeamCrew()
report = team.research("ERP market in India 2025")
```

---

## Day 5 — Task Dependencies & Delegation

```python
class CustomerSupportCrew:
    """
    Customer support system with task dependencies.
    """
    
    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-4o", temperature=0.3)
        
        self.triage_agent = Agent(
            role="Triage Specialist",
            goal="Categorize and prioritize customer inquiries",
            backstory="Expert at understanding customer needs quickly",
            llm=self.llm,
        )
        
        self.support_agent = Agent(
            role="Technical Support Engineer",
            goal="Resolve technical issues and provide solutions",
            backstory="Senior support engineer with deep product knowledge",
            llm=self.llm,
        )
        
        self.billing_agent = Agent(
            role="Billing Specialist",
            goal="Handle payment, invoice, and subscription queries",
            backstory="Expert in billing systems and financial processes",
            llm=self.llm,
        )
        
        self.escalation_agent = Agent(
            role="Escalation Manager",
            goal="Handle complex issues that need senior attention",
            backstory="15 years experience, handles toughest cases",
            llm=ChatOpenAI(model="gpt-4o", temperature=0.2),
        )
    
    def handle_query(self, query: str) -> str:
        """
        Task flow with dependencies:
        1. Triage → categorize
        2. Based on category → specific agent
        3. If complex → escalate
        """
        
        triage_task = Task(
            description=f"Categorize this query: {query}. Categories: technical, billing, general, escalation",
            expected_output="Category: [category]. Priority: [high/medium/low]",
            agent=self.triage_agent,
        )
        
        # These tasks depend on triage result
        resolve_task = Task(
            description=f"Resolve this customer query: {query}",
            expected_output="Resolution with clear steps",
            agent=self.support_agent,
            context=[triage_task],  # Depends on triage
        )
        
        billing_task = Task(
            description=f"Handle billing query: {query}",
            expected_output="Billing resolution with details",
            agent=self.billing_agent,
            context=[triage_task],
        )
        
        escalation_task = Task(
            description=f"Handle escalated complex issue: {query}",
            expected_output="Complete resolution for complex issue",
            agent=self.escalation_agent,
            context=[triage_task],
        )
        
        crew = Crew(
            agents=[self.triage_agent, self.support_agent, self.billing_agent, self.escalation_agent],
            tasks=[triage_task, resolve_task, billing_task, escalation_task],
            process=Process.sequential,
        )
        
        return crew.kickoff()
```

---

## Day 6 — Tool Sharing & Memory

```python
from crewai_tools import (
    SerperDevTool, ScrapeWebsiteTool,
    FileReadTool, DirectoryReadTool
)
from crewai import Agent, Task, Crew, Process

class ResearchWithTools:
    """
    Agents with shared tools and memory.
    """
    
    def __init__(self):
        # Shared tools
        search_tool = SerperDevTool()
        scrape_tool = ScrapeWebsiteTool()
        read_tool = FileReadTool()
        
        self.researcher = Agent(
            role="Web Researcher",
            goal="Find latest information from web sources",
            backstory="Expert web researcher",
            tools=[search_tool, scrape_tool],
            memory=True,  # Enable agent memory
            verbose=True,
            llm=ChatOpenAI(model="gpt-4o", temperature=0.3),
        )
        
        self.analyst = Agent(
            role="Data Analyst",
            goal="Analyze and synthesize research findings",
            backstory="Expert data analyst",
            tools=[read_tool],  # Can read saved files
            memory=True,
            verbose=True,
            llm=ChatOpenAI(model="gpt-4o", temperature=0.2),
        )
    
    def research_topic(self, topic: str) -> str:
        tasks = [
            Task(
                description=f"Search web for latest info on: {topic}",
                expected_output="Search results with key findings",
                agent=self.researcher,
            ),
            Task(
                description=f"Visit top 3 results and extract detailed info",
                expected_output="Detailed information from sources",
                agent=self.researcher,
            ),
            Task(
                description=f"Create summary report of findings",
                expected_output="Structured report with insights",
                agent=self.analyst,
            ),
        ]
        
        crew = Crew(
            agents=[self.researcher, self.analyst],
            tasks=tasks,
            process=Process.sequential,
            memory=True,  # Enable crew memory
            verbose=True,
        )
        
        return crew.kickoff()
```

---

## Day 7 — Practical: Complete Workflow

### Multi-Step Business Process

```python
class ApexERPOnboardingCrew:
    """
    Complete client onboarding workflow with CrewAI.
    """
    
    def onboard_client(self, company_name: str, industry: str, requirements: str):
        llm = ChatOpenAI(model="gpt-4o", temperature=0.5)
        
        # Agents
        intake_agent = Agent(
            role="Client Intake Specialist",
            goal="Understand client requirements completely",
            backstory="Expert at gathering and documenting requirements",
            llm=llm,
            memory=True,
        )
        
        solution_agent = Agent(
            role="Solution Architect",
            goal="Design optimal ERP solution for client needs",
            backstory="10 years experience designing ERP solutions",
            llm=llm,
            memory=True,
            allow_delegation=True,
        )
        
        implementation_agent = Agent(
            role="Implementation Manager",
            goal="Create implementation plan and timeline",
            backstory="Managed 50+ ERP implementations",
            llm=llm,
            memory=True,
        )
        
        # Tasks with dependencies
        intake_task = Task(
            description=f"""
            Gather requirements from {company_name} ({industry}).
            Requirements: {requirements}
            
            Document:
            1. Current systems in use
            2. Pain points
            3. Must-have features
            4. Budget range
            5. Timeline expectations
            """,
            expected_output="Complete requirements document",
            agent=intake_agent,
        )
        
        solution_task = Task(
            description=f"""
            Design ERP solution for {company_name}.
            Based on gathered requirements, recommend:
            1. Modules needed
            2. Customizations
            3. Integration approach
            4. Migration strategy
            """,
            expected_output="Solution architecture document",
            agent=solution_agent,
        )
        
        implementation_task = Task(
            description=f"""
            Create project plan for {company_name} implementation.
            Include:
            1. Phase-wise breakdown
            2. Timeline (weeks)
            3. Resource allocation
            4. Risk assessment
            5. Success metrics
            """,
            expected_output="Project plan with timeline",
            agent=implementation_agent,
        )
        
        # Execute
        crew = Crew(
            agents=[intake_agent, solution_agent, implementation_agent],
            tasks=[intake_task, solution_task, implementation_task],
            process=Process.sequential,
            verbose=True,
            memory=True,
        )
        
        return crew.kickoff()

# Usage
crew = ApexERPOnboardingCrew()
result = crew.onboard_client(
    company_name="PatnaTech Solutions",
    industry="IT Services",
    requirements="Need inventory, billing, and HR modules. Budget under 5 lakhs."
)
```

---

## Summary

```
Week 1 khatam:

✅ CrewAI Setup — Agent, Task, Crew, Process
✅ Agent Roles — Role, goal, backstory, tools
✅ Sequential Process — Step-by-step execution
✅ Hierarchical Process — Manager delegates to workers
✅ Task Dependencies — Tasks depend on previous results
✅ Tool Sharing — Common tools across agents
✅ Memory — Agent and crew level memory

Ab tu multi-agent systems bana sakta hai!
```
