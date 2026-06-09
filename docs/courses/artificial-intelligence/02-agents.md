# Chapter 2: Intelligent Agents

---

## Learning Objectives

- Define the concept of an "agent" and its interaction with an "environment."
- Distinguish between a "rational agent" and other types of behavioral models.
- Analyze the PEAS (Performance, Environment, Actuators, Sensors) framework for task environments.
- Categorize environments based on their properties (e.g., observability, determinism).
- Identify and compare the four basic types of agent programs: simple reflex, model-based reflex, goal-based, and utility-based.

---

## Theory

### Agents and Environments
An **agent** is anything that can be viewed as perceiving its **environment** through **sensors** and acting upon that environment through **actuators**. The **agent function** maps any given percept sequence to an action. The **agent program** is the concrete implementation of this function running on an architecture.

### Rationality
A **rational agent** is one that acts so as to achieve the best outcome or, when there is uncertainty, the best expected outcome. Rationality depends on:
1. The performance measure that defines the criterion of success.
2. The agent's prior knowledge of the environment.
3. The actions that the agent can perform.
4. The agent's percept sequence to date.

### Task Environments (PEAS)
To design an agent, we must specify the **PEAS** for the task environment:
- **Performance**: The metric for success (e.g., safety, speed, profit).
- **Environment**: The external world where the agent operates (e.g., roads, digital stock market).
- **Actuators**: The mechanisms for acting (e.g., wheels, steering, display).
- **Sensors**: The mechanisms for perceiving (e.g., cameras, microphones, keyboard).

### Environment Properties
Environments are characterized by several dimensions:
- **Observable**: Fully vs. Partially. Does the agent have access to the complete state?
- **Deterministic**: Deterministic vs. Stochastic. Does the next state depend solely on the current state and action?
- **Episodic**: Episodic vs. Sequential. Is the current decision independent of previous ones?
- **Static**: Static vs. Dynamic. Does the environment change while the agent is thinking?
- **Discrete**: Discrete vs. Continuous. Are the states and actions finite and distinct?
- **Agents**: Single-agent vs. Multi-agent. Are there other agents operating in the environment?

---

## Examples

### Example 1: Vacuum-Cleaner Agent
A simple agent that operates in a world with two rooms (A and B).
- **PEAS**:
  - **Performance**: Number of clean squares in a given time.
  - **Environment**: Rooms A and B, dirt.
  - **Actuators**: Move Left, Move Right, Suck.
  - **Sensors**: Location sensor, Dirt sensor.
- **Code snippet (Python Reflex Agent)**:
```python
def reflex_vacuum_agent(location, status):
    if status == 'Dirty':
        return 'Suck'
    elif location == 'A':
        return 'Right'
    elif location == 'B':
        return 'Left'

percept = ('A', 'Dirty')
action = reflex_vacuum_agent(*percept)
print(f"Percept: {percept}, Action: {action}")
```
- **Expected output**: `Percept: ('A', 'Dirty'), Action: Suck`
- **What it demonstrates**: A simple reflex agent that bases its decision only on the current percept.

### Example 2: Automated Taxi Driver
A highly complex agent requiring sophisticated sensors and actuators.
- **PEAS**:
  - **Performance**: Safe, fast, legal, comfortable trip, maximize profits.
  - **Environment**: Roads, other traffic, pedestrians, weather.
  - **Actuators**: Steering, accelerator, brake, signal, horn, display.
  - **Sensors**: Cameras, LIDAR, speedometer, GPS, odometer, engine sensors.
- **Environment Properties**: Partially observable, stochastic, sequential, dynamic, continuous, multi-agent.
- **What it demonstrates**: The application of agent theory to high-stakes, real-world problems.

---

## Summary

- Agents interact with environments via sensors and actuators.
- Rationality is not perfection; it is maximizing expected performance based on available information.
- The PEAS framework is the standard method for specifying an agent's task.
- Understanding environment properties is crucial for selecting the right agent architecture.
- Agent programs range from simple reflex systems to complex utility-based learners.
- The "Internal State" in model-based agents allows them to handle partially observable environments.

---

## Exercises

### Review Questions
1. Define the "Agent Function" vs. the "Agent Program."
2. What makes an agent "autonomous"?
3. List the six properties used to characterize a task environment.
4. Explain why a utility-based agent is often more flexible than a goal-based agent.

### Application Problems
1. Provide the PEAS description for a medical diagnosis system.
2. Characterize the environment of a Chess game according to the six properties.
3. Draw a diagram of a Model-based Reflex Agent and explain the role of the "State."

### Challenge Problem
1. Design a Performance Measure for an internet shopping agent. Explain how your measure prevents the agent from simply buying everything it finds regardless of price or quality, and how it balances speed versus cost-savings.
