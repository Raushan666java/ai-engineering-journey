# Project Management

## Learning Objectives

After completing this chapter, the student will be able to: explain the activities involved in software project planning; estimate software project effort using function points and COCOMO; construct a project schedule using PERT and Gantt charts; identify and analyse project risks; describe team organisation patterns for software projects; and explain earned value management for project tracking.

## Theory

![Project Management Process](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/software-engineering/ch-08-project-management.png)

### The Nature of Software Project Management

Software project management is the discipline of planning, organising, monitoring, and controlling software projects. Unlike many engineering disciplines, software projects are characterised by high uncertainty, rapid technological change, and the difficulty of measuring progress. Software project management must balance the competing constraints of scope, time, cost, and quality.

The Standish Group's CHAOS reports have historically reported that a significant proportion of software projects fail to meet their objectives. Common causes of failure include inadequate requirements, poor estimation, insufficient risk management, and weak stakeholder engagement. Effective project management addresses these risks through structured planning and control.

### Project Planning

Project planning begins with defining the project scope â€” the boundary between what the project will deliver and what it will not deliver. The scope is documented in a project charter or statement of work.

Planning activities include: defining the project objectives and success criteria; identifying the deliverables; decomposing the work into manageable units through a Work Breakdown Structure (WBS); estimating the effort required for each work unit; identifying dependencies between work units; allocating resources; producing a schedule; identifying risks; and developing a communication plan.

### Estimation

Software estimation is the process of predicting the effort, time, and cost required to develop a software system. Estimation is inherently uncertain, particularly in the early stages of a project when requirements are poorly understood. Estimates should be expressed as ranges reflecting confidence levels.

Expert judgement relies on the experience of knowledgeable individuals. The Delphi technique refines expert judgement through structured, anonymous rounds of estimation with feedback. Planning poker is a team-based estimation technique used in agile projects.

Algorithmic estimation uses mathematical models derived from historical data.

Function points (FP) measure the functionality delivered by a system in terms of the number and complexity of inputs, outputs, inquiries, files, and interfaces. The unadjusted function point count is calculated by summing the weighted counts of each function type. The result is adjusted by a value adjustment factor based on fourteen general system characteristics. Function points are language-independent and can be estimated early in the project.

COCOMO (Constructive COst MOdel), developed by Boehm, is a hierarchical family of estimation models. The basic COCOMO model estimates effort as a function of estimated source lines of code. The intermediate COCOMO model adds fifteen cost drivers reflecting product, hardware, personnel, and project attributes. The detailed COCOMO model incorporates phase-sensitive effort multipliers.

COCOMO II, developed to address modern development practices, provides three submodels: the application composition model for projects built with integrated tools; the early design model for architectural design stage estimation; and the post-architecture model for detailed estimation. COCOMO II's effort equation is: Effort = A * (Size)^B * M, where A is a constant, Size is in thousands of source lines of code or function points, B represents the economy or diseconomy of scale, and M is the product of effort multipliers.

### Scheduling

Scheduling assigns time to the work identified in the WBS. The schedule must respect dependencies between activities and resource constraints.

A Gantt chart displays activities as horizontal bars against a time axis. The length of each bar represents the duration of the activity. Gantt charts are intuitive and widely used but do not clearly show dependencies or critical paths.

PERT (Program Evaluation and Review Technique) models the project as a network of activities and events. Each activity has three time estimates: optimistic, most likely, and pessimistic. The expected duration is calculated as (optimistic + 4 * most likely + pessimistic) / 6. The critical path is the longest path through the network; activities on the critical path determine the project duration.

CPM (Critical Path Method) is similar to PERT but uses single-point duration estimates. CPM identifies the critical path and calculates float â€” the amount of schedule slack for non-critical activities. Activities with zero float are critical and must be managed carefully.

### Risk Management

Risk management is the systematic process of identifying, analysing, and responding to project risks. A risk is a potential event that could negatively affect the project. Risk management is proactive â€” it attempts to prevent problems before they occur.

The risk management process comprises: risk identification, where potential risks are identified through checklists, brainstorming, and analysis of similar projects; risk analysis, where risks are assessed for probability and impact; risk prioritisation, where risks are ranked by exposure (probability * impact); risk planning, where response strategies are developed for high-priority risks; and risk monitoring, where risks are tracked and responses are adjusted.

Risk response strategies include: avoidance, which eliminates the risk by changing the project approach; mitigation, which reduces the probability or impact of the risk; transfer, which shifts the risk to a third party, such as through insurance or fixed-price contracts; and acceptance, where the risk is acknowledged and a contingency plan is prepared.

### Team Organisation

Software development teams can be organised according to different models.

The chief programmer team, proposed by Mills, centralises authority in a single senior developer who makes all critical technical decisions. The chief programmer is supported by a backup programmer, a librarian, and specialists. This model works well when the chief programmer has exceptional ability, but it creates a single point of failure.

The democratic team, also called the egoless team, distributes responsibility and authority across all team members. Decisions are made by consensus, and code is collectively owned. This model is effective for fostering creativity and buy-in, but it can be slow and may lack clear accountability.

The described patterns can be combined with the organisational structures defined by the project's needs. Agile teams are typically small (five to nine members), cross-functional, and self-organising. The team collectively owns the work and makes decisions through consensus.

Watson's hierarchy of team structure describes team maturity as a progression through four levels: the closed team, which follows a traditional, manager-led structure; the random team, which operates with loose structure and individual autonomy; the open team, which combines structure with flexibility; and the synchronous team, which operates with high cohesion and shared mental models.

### Earned Value Analysis

Earned value analysis (EVA) integrates scope, schedule, and cost data to provide a comprehensive view of project performance. EVA compares the planned value (PV), which is the budgeted cost of work scheduled; the earned value (EV), which is the budgeted cost of work performed; and the actual cost (AC), which is the actual cost of work performed.

Key EVA metrics include: schedule variance (SV = EV - PV), which indicates whether the project is ahead or behind schedule; cost variance (CV = EV - AC), which indicates whether the project is under or over budget; schedule performance index (SPI = EV / PV), which measures schedule efficiency; and cost performance index (CPI = EV / AC), which measures cost efficiency.

EVA enables the project manager to quantify performance objectively and to forecast the cost at completion (EAC = BAC / CPI) and the time at completion based on current trends.

## Examples

### Case Study: COCOMO II Estimation

A team estimated a 50,000-line web application using COCOMO II. The post-architecture model was applied with the following parameters: scale factors were rated for precedentedness, development flexibility, architecture and risk resolution, team cohesion, and process maturity; effort multipliers were adjusted for product complexity, required reusability, documentation match to lifecycle needs, execution time constraint, main storage constraint, platform volatility, analyst capability, programmer capability, personnel continuity, applications experience, platform experience, language and tool experience, use of software tools, multisite development, and required development schedule.

### Schedule Template: Gantt Chart

| ID | Activity | Duration | Dependencies |
|----|----------|----------|--------------|
| 1 | Requirements | 4 weeks | â€” |
| 2 | Architecture | 3 weeks | 1 |
| 3 | Sprint 1 | 3 weeks | 2 |
| 4 | Sprint 2 | 3 weeks | 3 |
| 5 | Sprint 3 | 3 weeks | 4 |
| 6 | System test | 2 weeks | 3, 4, 5 |
| 7 | Deployment | 1 week | 6 |

### Risk Register Template

| Risk | Probability | Impact | Exposure | Response |
|------|-------------|--------|----------|----------|
| Key developer leaves | 0.3 | 0.8 | 0.24 | Mitigate via knowledge sharing |
| Requirements change significantly | 0.5 | 0.6 | 0.30 | Avoid via incremental delivery |
| Database performance inadequate | 0.2 | 0.9 | 0.18 | Mitigate via early prototyping |

## Summary

Software project management addresses the challenges of planning, estimating, scheduling, and controlling software projects. Estimation techniques range from expert judgement to algorithmic models such as function points and COCOMO. Scheduling methods include Gantt charts, PERT, and CPM. Risk management identifies and addresses potential problems proactively. Team organisation patterns balance authority and collaboration. Earned value analysis provides objective performance tracking by integrating scope, schedule, and cost.

## Exercises

### Review Questions

1. What is a Work Breakdown Structure, and why is it important for project planning?
2. What are function points, and what five function types do they count?
3. Write the COCOMO II effort equation and explain each term.
4. How is the expected duration calculated in PERT?
5. What is the critical path in a project network?
6. Distinguish between risk mitigation and risk avoidance.
7. Describe the chief programmer team model and its limitations.
8. What does a schedule performance index value of less than 1.0 indicate?
9. How is cost variance calculated in earned value analysis?

### Application Problems

1. Develop a WBS for a project to build a mobile banking application. Decompose the work to at least three levels.
2. Calculate function points for a system with 12 external inputs (4 simple, 5 average, 3 complex), 8 external outputs (3 simple, 3 average, 2 complex), 5 external inquiries (2 simple, 2 average, 1 complex), 3 internal logical files (1 simple, 2 complex), and 2 external interface files (1 simple, 1 average). Apply a value adjustment factor of 1.10.
3. Construct a PERT network for a project with the following activities and estimate the critical path: A (duration 5, no dependencies), B (8, depends on A), C (3, depends on A), D (7, depends on B), E (4, depends on C), F (6, depends on D and E).

### Challenge Problem

You are appointed project manager for a critical software system that must be delivered in nine months for regulatory compliance. The initial estimate using COCOMO II indicates the project requires twelve months with the current team. The stakeholders refuse to accept a later deadline and insist that the scope cannot be reduced. Develop a realistic project plan that addresses this situation. Analyse the options available to you â€” including staff addition, process improvement, scope negotiation, risk acceptance, and schedule compression techniques â€” and propose a specific course of action with justification. Include a risk analysis and a contingency plan.
