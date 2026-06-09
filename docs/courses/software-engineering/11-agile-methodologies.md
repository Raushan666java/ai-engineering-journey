# Agile Methodologies

## Learning Objectives

After completing this chapter, the student will be able to: explain the Scrum framework including roles, events, and artefacts; describe the Kanban method and its core principles; compare Scrum and Kanban; explain scaled agile frameworks SAFe and LeSS; estimate agile projects using planning poker, story points, and velocity; and describe agile testing practices and their integration with development.

## Theory

### Agile Fundamentals

Agile methodologies are founded on the values and principles of the Agile Manifesto. While the manifesto provides the philosophical foundation, specific methodologies translate these values into concrete practices. The most widely adopted agile methodologies are Scrum and Kanban, each with its own emphasis and practices.

The agile approach is distinguished from traditional plan-driven approaches by its iterative nature, its focus on delivering value incrementally, its embrace of changing requirements, and its emphasis on team empowerment and customer collaboration.

### Scrum

Scrum is a lightweight framework for managing complex work. It is founded on the principles of transparency, inspection, and adaptation. Scrum is not a prescriptive methodology; it provides a minimal set of roles, events, and artefacts within which teams can adopt appropriate practices.

#### Scrum Roles

The Product Owner is responsible for maximising the value of the product resulting from the work of the Development Team. The Product Owner manages the Product Backlog, clearly expresses backlog items, orders them to achieve goals, and ensures that the backlog is visible and understood. The Product Owner is a single person, not a committee.

The Development Team consists of professionals who deliver potentially releasable increments at the end of each Sprint. Development Teams are self-organising — they decide how to best accomplish their work — and cross-functional — they possess all the skills necessary to create the product increment. The optimal team size is small enough to remain nimble but large enough to complete significant work, typically three to nine members.

The Scrum Master is responsible for ensuring that Scrum is understood and enacted. The Scrum Master serves the Product Owner by facilitating stakeholder collaboration and backlog management, serves the Development Team by coaching self-organisation and removing impediments, and serves the organisation by leading Scrum adoption.

#### Scrum Events

The Sprint is the heart of Scrum. A Sprint is a time-boxed period of one month or less during which a usable product increment is created. Sprints have consistent durations throughout development. Each Sprint begins with Sprint Planning and ends with Sprint Review and Sprint Retrospective.

Sprint Planning establishes the work to be performed in the Sprint. The Product Owner presents the highest-priority Product Backlog items, and the Development Team selects the items they can complete. The team defines a Sprint Goal that provides guidance for why the Sprint is valuable. Sprint Planning is time-boxed to a maximum of eight hours for a one-month Sprint.

The Daily Scrum is a fifteen-minute event for the Development Team to synchronise activities and plan the next twenty-four hours. Each team member typically answers three questions: what was accomplished since the last Daily Scrum, what will be done before the next Daily Scrum, and what impediments are in the way.

The Sprint Review is held at the end of the Sprint to inspect the increment and adapt the Product Backlog. The team presents what was accomplished, and stakeholders provide feedback. The Sprint Review is a working session, not a presentation.

The Sprint Retrospective is an opportunity for the team to inspect itself and create a plan for improvements. The team discusses what went well, what could be improved, and what will be committed to in the next Sprint.

#### Scrum Artefacts

The Product Backlog is an ordered list of everything that might be needed in the product. It is dynamic, evolving as the product and the environment evolve. Items at the top of the backlog are more detailed and better understood than items at the bottom. The Product Owner is responsible for backlog management, including prioritisation and refinement.

The Sprint Backlog is the set of Product Backlog items selected for the Sprint plus a plan for delivering them. The Development Team owns the Sprint Backlog and updates it throughout the Sprint. The Sprint Backlog provides a real-time picture of the work the team plans to accomplish.

The Increment is the sum of all Product Backlog items completed during a Sprint, integrated with the work of all previous Sprints. Each Increment is potentially releasable, meaning it meets the team's definition of done.

### Kanban

Kanban is an agile method for managing work with an emphasis on just-in-time delivery and the limitation of work in progress. Kanban originated from the Toyota Production System and was adapted for software development by Anderson.

The core principles of Kanban are: start with existing roles and processes; agree to pursue incremental change; respect current roles and responsibilities; and encourage acts of leadership at all levels.

The core practices of Kanban are: visualise the workflow using a Kanban board; limit work in progress to reduce multitasking and improve flow; manage flow by monitoring metrics; make process policies explicit; implement feedback loops; and improve collaboratively.

The Kanban board visualises the workflow as columns representing stages such as "To Do", "In Progress", "In Review", and "Done". Work items move through the columns as they progress. Work in progress limits are shown at the top of each column.

Key Kanban metrics include: lead time, the total time from a work item being requested to its delivery; cycle time, the time from when work starts on an item to its delivery; throughput, the number of items delivered per unit time; and cumulative flow diagrams, which visualise the flow of work over time.

### Scrum versus Kanban

Scrum and Kanban differ in several important dimensions. Scrum operates in fixed-length iterations; Kanban operates with continuous flow. Scrum constrains the work in a Sprint; Kanban constrains work in progress. Scrum prescribes roles; Kanban does not prescribe roles. Scrum does not allow items to be added to an ongoing Sprint; Kanban allows items to be added at any time if capacity permits.

The choice between Scrum and Kanban depends on the context. Scrum is well suited to product development where work can be planned in iterations. Kanban is well suited to support and maintenance work where requests arrive unpredictably and prioritisation changes frequently. Hybrid approaches, sometimes called Scrumban, combine elements of both.

### Scaled Agile Frameworks

When agile methods are applied at the enterprise level with multiple teams, scaling frameworks provide guidance for coordination and alignment.

SAFe (Scaled Agile Framework) organises development into three levels: Team, Program, and Portfolio. At the Team level, teams use Scrum or Kanban. At the Program level, teams are organised into Agile Release Trains (ARTs) that deliver value in Program Increments (PIs) of eight to twelve weeks. At the Portfolio level, strategic themes guide investment decisions and lean budgeting is applied. SAFe provides detailed guidance for roles, events, and artefacts at each level.

LeSS (Large-Scale Scrum) takes a different approach, scaling Scrum by keeping the framework as simple as possible. LeSS applies one Scrum team's worth of structure to multiple teams. All teams work from the same Product Backlog, and one Product Owner works with all teams. LeSS defines two frameworks: LeSS, for up to eight teams, and LeSS Huge, for up to several thousand people organised into requirement areas.

### Agile Estimation

Agile estimation techniques acknowledge the inherent uncertainty in software estimation and focus on relative sizing rather than absolute prediction.

Story points are a relative unit of measure for estimating the effort required to implement a user story. The team assigns points based on the story's complexity, effort, and risk relative to other stories. A story assigned one point is half as large as a story assigned two points. Common scales include the Fibonacci sequence (1, 2, 3, 5, 8, 13, 21) to reflect increasing uncertainty for larger stories.

Planning poker is a consensus-based estimation technique. Each estimator holds a deck of cards representing the estimation scale. For each story, estimators privately select a card, then reveal their estimates simultaneously. If estimates differ significantly, the high and low estimators explain their reasoning, and the group estimates again. The process continues until consensus is reached.

Velocity measures the number of story points a team completes per Sprint. Velocity is used for planning: if a team's historical velocity is thirty points per Sprint, they can plan to select approximately thirty points for the next Sprint. Velocity is specific to a team and should not be used for cross-team comparison.

### Agile Testing

Agile testing integrates testing into the development process rather than treating it as a separate phase. The agile testing quadrants, defined by Crispin and Gregory, classify tests into four categories: Q1 — technology-facing tests that support the team (unit tests, component tests); Q2 — business-facing tests that support the team (functional tests, story tests); Q3 — business-facing tests that critique the product (exploratory testing, usability testing); and Q4 — technology-facing tests that critique the product (performance testing, security testing).

In agile testing, the whole team is responsible for quality, not just testers. Test automation is essential, particularly for the Q1 and Q2 quadrants. The test automation pyramid applies: a broad base of unit tests, a middle layer of service tests, and a narrow layer of end-to-end tests.

Acceptance test-driven development (ATDD) writes acceptance tests before implementing the corresponding functionality. These tests serve as executable requirements and provide objective completion criteria.

## Examples

### Case Study: Scrum Adoption at a Startup

A twenty-person startup adopted Scrum to manage its SaaS product development. Two-week Sprints were used. The Product Owner maintained a prioritised backlog of user stories valued in business terms. The two development teams held daily stand-ups and bi-weekly retrospectives. After six months, the teams were reliably delivering each Sprint with a velocity of forty-five story points, and stakeholder satisfaction had improved due to regular demonstrations of working software.

### Template: Sprint Backlog

| Story | Points | Status | Owner |
|-------|--------|--------|-------|
| User registration | 5 | Done | Alice |
| Search by keyword | 8 | In Progress | Bob |
| Payment integration | 13 | In Review | Carol |
| Password reset | 3 | To Do | — |

### Template: Kanban Board

| To Do (WIP: 5) | In Dev (WIP: 3) | Review (WIP: 2) | Done |
|----------------|-----------------|-----------------|------|
| Story A | Story D | Story G | Story J |
| Story B | Story E | — | Story K |
| Story C | — | — | — |

## Summary

Agile methodologies translate the Agile Manifesto into practical frameworks. Scrum provides a structured approach with defined roles, events, and artefacts. Kanban emphasises continuous flow with work in progress limits. SAFe and LeSS address the challenges of scaling agile to multiple teams. Agile estimation uses relative sizing with story points and planning poker. Agile testing integrates testing throughout development. The choice of agile practices should be based on the specific context of the team and organisation.

## Exercises

### Review Questions

1. What are the three roles in Scrum, and what are their responsibilities?
2. Describe the five Scrum events and their purposes.
3. What is the Sprint Goal, and how is it established?
4. What are the core principles of Kanban?
5. What is the purpose of work in progress limits in Kanban?
6. Distinguish between lead time and cycle time in Kanban.
7. What is an Agile Release Train in SAFe?
8. How does LeSS scale Scrum differently from SAFe?
9. How is velocity used for Sprint planning?
10. Describe the four quadrants of the agile testing matrix.

### Application Problems

1. A support team handling an average of thirty tickets per week with unpredictable arrival patterns is considering agile methods. Compare the suitability of Scrum and Kanban for this context.
2. A team has a velocity of twenty-five story points per Sprint. The Product Backlog contains 150 story points of work. How many Sprints are required to complete the backlog? If a new urgent story of 8 points is added, what is the impact on the completion estimate?
3. Design a Sprint Retrospective format that includes techniques for identifying what went well, what could be improved, and what the team will commit to. Include specific activities for each section.

### Challenge Problem

A large financial services organisation is adopting agile across a programme involving eight development teams (sixty people total) building a new trading platform. The teams are located in three cities in two time zones. The organisation has a history of detailed upfront planning and monthly release cycles. Develop a scaled agile adoption plan. Address how you will structure the teams, what coordination mechanisms you will establish between teams, how you will manage dependencies, what governance you will need, how you will transition from the current monthly release cycle, and how you will measure the success of the adoption. Compare how SAFe and LeSS would approach this situation and recommend one approach with justification.
