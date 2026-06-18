# Quality Management

## Learning Objectives

After completing this chapter, the student will be able to: explain the principles of software quality management; describe the requirements of ISO 9001 for software organisations; describe the five maturity levels of the Capability Maturity Model Integration; explain the Six Sigma approach and the DMAIC cycle; define quality metrics including defect density, mean time between failures, and customer satisfaction; distinguish between walkthroughs, inspections, and technical reviews; and describe approaches to continuous process improvement.

## Theory

![Quality Management Framework](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/software-engineering/ch-09-quality-management.png)

### The Concept of Software Quality

Software quality has been defined in multiple ways. The transcendental view sees quality as something that can be recognised but not defined. The user view sees quality as fitness for purpose. The manufacturing view sees quality as conformance to specification. The product view sees quality as the presence of desirable attributes. The value-based view sees quality as the degree to which a product provides value for its cost.

A comprehensive definition is provided by ISO 25010, which defines quality in terms of eight characteristics: functional suitability, performance efficiency, compatibility, usability, reliability, security, maintainability, and portability. Each characteristic is further divided into subcharacteristics. This model provides a framework for specifying and evaluating software quality.

### Quality Management Principles

Quality management encompasses three primary activities: quality assurance, which defines the processes and standards to be followed; quality planning, which selects appropriate quality procedures and standards for a project and defines how they will be implemented; and quality control, which monitors the software and its development to ensure that it conforms to planned quality standards.

The fundamental premise of quality management in software is the prevention principle: it is more cost-effective to prevent defects than to detect and correct them. This principle motivates investment in activities such as requirements validation, design review, and static analysis.

### ISO 9001

ISO 9001 is an international standard that specifies requirements for a quality management system. While it is not specific to software, ISO 9001 can be applied to software development organisations. The standard is based on quality management principles including customer focus, leadership, engagement of people, process approach, improvement, evidence-based decision making, and relationship management.

ISO 9001 requires organisations to: establish a quality policy and quality objectives; document their quality management system; plan and control processes; manage resources; plan and implement product realisation; measure, analyse, and improve processes; and conduct internal audits and management reviews.

Certification to ISO 9001 demonstrates that an organisation has implemented a compliant quality management system. However, certification does not guarantee the quality of any specific product â€” it indicates that the organisation follows defined processes.

### Capability Maturity Model Integration

CMMI is a process improvement framework developed by the Software Engineering Institute. It provides a structured approach for assessing and improving an organisation's software processes. CMMI defines five maturity levels.

Level 1 â€” Initial: Processes are ad hoc, chaotic, and reactive. Success depends on individual heroics rather than organisational capability. There are no defined processes, and the organisation cannot reliably repeat successful projects.

Level 2 â€” Managed: Basic project management processes are established. Projects are planned, performed, measured, and controlled. The organisation can repeat successful practices from similar projects. Requirements management, project planning, project monitoring and control, supplier agreement management, measurement and analysis, process and product quality assurance, and configuration management are practised.

Level 3 â€” Defined: Processes are documented, standardised, and integrated across the organisation. All projects use approved customisations of the organisation's standard processes. The organisation has a defined process asset library, and processes are tailored per project.

Level 4 â€” Quantitatively Managed: Quantitative objectives for quality and process performance are established and used to manage projects. Subprocesses are selected and controlled using statistical techniques. The organisation can predict process performance within established bounds.

Level 5 â€” Optimising: The organisation continuously improves its processes based on quantitative understanding. Process improvement is institutionalised as a core organisational competency. The organisation can rapidly adapt to changes and exploit improvement opportunities.

CMMI is available in two representations: staged, which uses the five maturity levels, and continuous, which uses capability levels for individual process areas. The staged representation provides a roadmap for process improvement, while the continuous representation allows organisations to target specific process areas.

### Six Sigma

Six Sigma is a data-driven methodology for eliminating defects and reducing variation in processes. The term "Six Sigma" refers to a statistical target â€” 3.4 defects per million opportunities â€” which corresponds to six standard deviations between the process mean and the nearest specification limit.

The DMAIC cycle is the core improvement methodology of Six Sigma: Define, where the problem, goals, and project scope are defined; Measure, where baseline data is collected and the current process performance is quantified; Analyse, where root causes of defects are identified through data analysis; Improve, where solutions are designed and implemented to address root causes; and Control, where the improved process is monitored to sustain the gains.

Six Sigma roles include: Champions, who sponsor and support improvement projects; Master Black Belts, who serve as coaches and experts; Black Belts, who lead improvement projects full-time; and Green Belts, who participate in projects while maintaining their regular responsibilities.

### Quality Metrics

Quality metrics provide quantitative data for assessing and controlling quality.

Defect density measures the number of defects per unit of product size, typically per thousand lines of code or per function point. It can be used to compare the quality of different modules or to track quality trends over time.

Mean time between failures (MTBF) measures the average time between system failures. It is used primarily for reliability assessment in operational systems. Related metrics include mean time to failure (MTTF) and mean time to repair (MTTR).

Customer satisfaction metrics are collected through surveys that measure attributes such as product reliability, usability, performance, and support quality. The Net Promoter Score (NPS) measures the likelihood that customers would recommend the product.

### Reviews

Software reviews are a static verification technique in which the software work products are examined by people other than the author. Reviews are the most effective technique for detecting defects in requirements and design artefacts.

Walkthroughs are informal reviews where the author presents the work product to colleagues. The presentation is unstructured, and the goal is to find defects and to familiarise participants with the work product. Walkthroughs are low-cost and easy to organise.

Technical reviews are more formal than walkthroughs. The review team, which includes peers and possibly management, examines the work product against defined criteria. A technical review verifies that the work product meets its specification and conforms to standards.

Inspections are the most formal review technique, following a defined process with trained moderators, defined roles, and formal documentation of defects. The inspection process comprises: planning, where the moderator selects the inspection team and distributes the work product; overview, where the author presents background; preparation, where each inspector examines the work product individually; the inspection meeting, where defects are identified and recorded; rework, where the author corrects defects; and follow-up, where the moderator verifies corrections.

Fagan inspections, developed at IBM, are the original formal inspection methodology. Their effectiveness has been extensively validated: inspections can detect sixty to ninety per cent of defects in inspected artefacts.

### Process Improvement

Process improvement is the systematic approach to increasing an organisation's capability to deliver quality software. The IDEAL model, from the SEI, provides a five-phase improvement framework: Initiating, where the improvement infrastructure is established; Diagnosing, where the current process maturity is assessed; Establishing, where improvement plans are developed; Acting, where improvements are implemented; and Leveraging, where lessons are learned and improvements are institutionalised.

## Examples

### Case Study: CMMI Level 5 Organisation

A defence software contractor achieved CMMI Level 5 certification. At Level 5, the organisation used statistical process control on key subprocesses, maintained a quantitative process database, and continuously improved productivity and quality. Defect density was reduced from 2.5 defects per KLOC to 0.4 defects per KLOC over three years.

### Template: Inspection Checklist for Requirements

- Is each requirement uniquely identified?
- Is each requirement testable?
- Are terms defined consistently throughout?
- Are all stakeholder categories represented?
- Are conflicts between requirements resolved?
- Is the rationale for each requirement documented?
- Are performance requirements expressed quantitatively?
- Are boundary conditions specified?

### Template: Quality Metrics Dashboard

| Metric | Target | Current | Trend |
|--------|--------|---------|-------|
| Defect density (per KLOC) | < 1.0 | 0.8 | Improving |
| Test coverage | > 85% | 82% | Stable |
| Build success rate | > 95% | 97% | Improving |
| Customer satisfaction | > 4.0 | 4.2 | Stable |

## Summary

Software quality management encompasses quality assurance, planning, and control. ISO 9001 provides a framework for quality management systems. CMMI defines five maturity levels for process improvement, from Initial to Optimising. Six Sigma and DMAIC provide a data-driven approach to defect reduction. Quality metrics enable objective measurement of product and process quality. Reviews â€” walkthroughs, technical reviews, and inspections â€” are the most effective techniques for detecting defects in early work products. Continuous process improvement is essential for organisational growth.

## Exercises

### Review Questions

1. What are the eight quality characteristics defined by ISO 25010?
2. Distinguish between quality assurance and quality control.
3. What are the seven quality management principles underlying ISO 9001?
4. Describe the five maturity levels of CMMI.
5. What distinguishes Level 3 (Defined) from Level 4 (Quantitatively Managed)?
6. State the Six Sigma target in defects per million opportunities.
7. Describe the five phases of the DMAIC cycle.
8. How does an inspection differ from a walkthrough?
9. List the roles in a Fagan inspection.
10. Describe the five phases of the IDEAL improvement model.

### Application Problems

1. An organisation at CMMI Level 2 wants to advance to Level 3. Identify the process areas that must be addressed and describe the changes required.
2. A project has a defect density of 3.2 per KLOC at the end of system testing. Industry benchmarks suggest a target of 0.5 per KLOC for the type of product being developed. Develop a Six Sigma DMAIC plan to achieve the target.
3. Design a quality management plan for a medical device software project. Address quality standards, review processes, testing strategy, and metrics. Consider the regulatory requirements of FDA or equivalent bodies.

### Challenge Problem

A medium-sized software company (200 employees) is struggling with quality problems. Customer support tickets are rising, software releases frequently introduce regressions, and the development team is spending increasing time on rework rather than new features. The company has no formal quality management system. The CEO has asked you to develop a comprehensive quality improvement programme. Propose a staged approach that delivers visible improvements within six months while building toward long-term organisational maturity. Address how you will gain buy-in from developers who resist formal processes, what metrics you will use to demonstrate improvement, which review practices you will introduce and in what order, and how you will sustain improvements over time. Justify your recommendations with reference to quality management frameworks.
