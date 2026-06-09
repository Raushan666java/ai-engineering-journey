# Software Metrics

## Learning Objectives

After completing this chapter, the student will be able to: explain the purpose of software measurement; measure product metrics including lines of code, cyclomatic complexity, Halstead metrics, function points, and object-oriented metrics; measure process metrics including defect removal efficiency and process maturity; measure project metrics using earned value analysis and burn-down charts; and interpret metric data to support decision making.

## Theory

### The Purpose of Software Measurement

Software measurement is the process of assigning numbers to attributes of software products, processes, and projects. Measurement provides the quantitative basis for understanding, controlling, and improving software development.

The fundamental axiom of software measurement is that what cannot be measured cannot be controlled or improved. However, measurement is not an end in itself — it is a means to support decision making. Metrics must be interpreted in context and used to guide action, not merely to generate numbers.

Software metrics are classified into three categories: product metrics, which measure attributes of the software artefact; process metrics, which measure attributes of the development process; and project metrics, which measure attributes of the project and its environment.

### Product Metrics

Product metrics quantify characteristics of the software itself, including its size, complexity, and quality.

#### Lines of Code

Lines of code (LOC) is the most basic size metric. It measures the physical length of the source code. Variants include: source lines of code (SLOC), which counts only executable source statements; physical lines of code, which counts all lines including blanks and comments; and logical lines of code, which counts statements regardless of layout.

LOC is easily measured and widely understood, but it is language-dependent, sensitive to coding style, and provides no information about functionality or complexity. LOC should not be used for productivity comparisons across different languages.

#### McCabe's Cyclomatic Complexity

Cyclomatic complexity, developed by McCabe, measures the complexity of a program's control flow. It is calculated from the program's control flow graph as: M = E - N + 2P, where E is the number of edges, N is the number of nodes, and P is the number of connected components. For a single program, P equals one, giving M = E - N + 2.

Cyclomatic complexity can be more intuitively understood as the number of linearly independent paths through the program. It is also equal to the number of decision points plus one: M = number of decision points + 1. Decision points include conditions in if statements, loops, and case statements.

The value of cyclomatic complexity provides guidance for testing: the value indicates the number of test cases needed to achieve branch coverage. Industry guidelines recommend that cyclomatic complexity should not exceed ten per module. Higher values indicate that the module should be refactored or at least subjected to intensive testing.

#### Halstead's Software Science

Halstead's metrics are based on counting operators and operands in a program. The fundamental counts are: n1, the number of distinct operators; n2, the number of distinct operands; N1, the total number of operator occurrences; and N2, the total number of operand occurrences.

From these counts, Halstead derived: program vocabulary n = n1 + n2; program length N = N1 + N2; program volume V = N * log2(n), which measures the size of the implementation; program difficulty D = (n1 / 2) * (N2 / n2), which measures the difficulty of writing or understanding the program; and effort E = V * D, which measures the mental effort required to develop the program.

The validity of Halstead's metrics has been debated. The counts are sensitive to language and programming style, and the theoretical basis has been questioned. However, the metrics provide insight into the cognitive complexity of code.

#### Function Points

Function points measure the functional size of a system from the user's perspective. The unadjusted function point count is computed by counting five function types: external inputs, external outputs, external inquiries, internal logical files, and external interface files. Each function type is classified as simple, average, or complex, and assigned a weight.

The unadjusted count is adjusted by a value adjustment factor (VAF) computed from fourteen general system characteristics, each rated on a scale of zero to five. The VAF ranges from 0.65 to 1.35. The final function point count is: FP = UFP * VAF.

Function points are language-independent, can be estimated from requirements before implementation, and provide a basis for productivity and quality comparisons across projects. However, counting function points requires training and judgment, and function points are less intuitive than lines of code.

#### Object-Oriented Metrics

Traditional metrics require adaptation for object-oriented systems. Chidamber and Kemerer proposed six OO metrics: Weighted Methods per Class (WMC), which counts the number of methods in a class; Depth of Inheritance Tree (DIT), which measures the length of the inheritance chain; Number of Children (NOC), which counts immediate subclasses; Coupling Between Objects (CBO), which counts classes coupled to a given class; Response for a Class (RFC), which counts the number of methods that can be invoked in response to a message; and Lack of Cohesion of Methods (LCOM), which measures the degree to which methods share instance variables.

These metrics provide insights into class complexity, coupling, cohesion, and inheritance depth. Empirically derived thresholds can flag classes that may need redesign.

### Process Metrics

Process metrics measure attributes of the development process.

Defect removal efficiency (DRE) measures the proportion of defects found before delivery: DRE = (defects found during development) / (defects found during development + defects found after delivery). A higher DRE indicates a more effective quality process. Industry benchmarks suggest DRE targets of ninety-five per cent or higher for mature processes.

Process maturity metrics assess the capability of the organisation's processes using frameworks such as CMMI. The maturity level provides a high-level indicator of process quality and predictability.

### Project Metrics

Project metrics track the progress and performance of individual projects.

Earned value analysis (EVA) integrates scope, schedule, and cost. The key metrics are: Planned Value (PV), the budgeted cost of work scheduled; Earned Value (EV), the budgeted cost of work performed; and Actual Cost (AC), the actual cost incurred. Variance metrics include Schedule Variance (SV = EV - PV) and Cost Variance (CV = EV - AC). Performance indices include Schedule Performance Index (SPI = EV / PV) and Cost Performance Index (CPI = EV / AC).

Burn-down charts track the amount of work remaining over time in an agile project. The chart shows the remaining effort on the vertical axis against time on the horizontal axis. The ideal burn-down is a straight line from the starting effort to zero at the Sprint's end. Actual burn-down that stays above the ideal line indicates the team is behind schedule.

Burn-up charts complement burn-down charts by showing both completed work and total work. As scope changes, the total work line moves, providing a more accurate picture of progress.

### Applying Metrics

Metrics should be collected consistently and interpreted in context. Guidelines for effective measurement include: measure what matters for decision making; collect data automatically where possible; validate metrics against actual outcomes; combine multiple metrics for a comprehensive view; present metrics visually for easier interpretation; and avoid using individual metrics for performance evaluation, which can lead to gaming.

The Goal-Question-Metric (GQM) approach helps ensure that metrics are aligned with goals. GQM works backwards from goals to questions to metrics. For example, given the goal "improve product quality," the questions might include "how many defects are found during testing?" and the metrics might include defect density and defect removal efficiency.

## Examples

### Case Study: Metrics-Driven Quality Improvement

A development team used cyclomatic complexity thresholds to identify modules requiring refactoring. Modules with complexity above fifteen were prioritised for redesign. Over six releases, the average module complexity decreased from fourteen to eight, and the defect rate in production decreased by forty-five per cent.

### Template: GQM for Test Effectiveness

Goal: Reduce production defects
Question: How effective is testing at finding defects?
Metric: Defect Removal Efficiency
Question: Which modules have the highest defect density?
Metric: Defects per KLOC per module
Goal: Improve test coverage
Question: What proportion of code is exercised by tests?
Metric: Statement coverage percentage

### Template: Object-Oriented Metrics Thresholds

| Metric | Low | Moderate | High | Interpretation |
|--------|-----|----------|------|----------------|
| WMC | < 10 | 10-20 | > 20 | High WMC indicates class complexity |
| DIT | < 3 | 3-5 | > 5 | Deep inheritance increases reuse but complexity |
| CBO | < 5 | 5-10 | > 10 | High coupling reduces maintainability |
| LCOM | < 40% | 40-60% | > 60% | Low cohesion indicates multiple responsibilities |

## Summary

Software metrics provide quantitative insight into products, processes, and projects. Product metrics such as LOC, cyclomatic complexity, Halstead metrics, function points, and object-oriented metrics measure size and complexity. Process metrics such as defect removal efficiency measure quality process effectiveness. Project metrics such as earned value and burn-down charts track progress. The GQM approach ensures metrics are aligned with goals. Metrics must be interpreted in context and used to support, not replace, human judgment.

## Exercises

### Review Questions

1. What are the three categories of software metrics?
2. How is McCabe's cyclomatic complexity calculated from a control flow graph?
3. What is the significance of a cyclomatic complexity value of ten?
4. What are the five function types counted in function point analysis?
5. What is the range of the value adjustment factor in function points?
6. What does the Weighted Methods per Class metric measure?
7. How is defect removal efficiency calculated?
8. What is the difference between a burn-down chart and a burn-up chart?
9. What does a cost performance index value of 0.9 indicate?
10. Describe the Goal-Question-Metric approach.

### Application Problems

1. Calculate the cyclomatic complexity of code containing an if-else statement with two conditions joined by AND, followed by a for loop, followed by a switch statement with three cases.
2. A 50,000-LOC project had 120 defects found during development and 15 defects reported in the first year after deployment. Calculate the defect removal efficiency and defect density.
3. At the end of Sprint 3, a team had planned to complete 30 story points across Sprints 1-3. They completed 8, 7, and 9 story points in Sprints 1, 2, and 3 respectively. Plot the burn-down chart and calculate the schedule variance. Predict the number of additional Sprints required to complete the remaining 60 story points.

### Challenge Problem

A software division is considering implementing a company-wide metrics programme. There are fifty development teams working on different products in different domains, using different technologies and process models. Design a metrics programme that balances consistency across teams with relevance to individual projects. Specify the mandatory metrics that all teams must collect, the optional metrics that teams may adopt based on context, and the metrics that should not be used due to risk of gaming. Address how you will ensure data quality, how you will present metrics to different audiences (developers, project managers, and executives), and how you will evolve the programme based on experience. Use the GQM approach to justify your recommended metrics.
