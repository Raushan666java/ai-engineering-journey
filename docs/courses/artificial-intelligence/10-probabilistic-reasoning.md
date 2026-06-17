# Chapter 10: Probabilistic Reasoning Over Time

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) formulate temporal models for filtering, prediction, and smoothing; (2) implement the forward-backward algorithm for HMMs; (3) apply the Viterbi algorithm for most likely state sequences; (4) implement particle filtering for approximate inference; (5) formulate and solve Markov decision processes.

## 10.1 Temporal Models

![Probabilistic Reasoning Over Time](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/artificial-intelligence/ch10-probabilistic-reasoning.png)

Temporal probabilistic models treat the state as evolving over discrete time steps $t = 1, 2, \ldots, T$. The **state random variable** $X_t$ represents the true (hidden) state at time $t$; the **evidence variable** $E_t$ represents the observation.

The temporal model is defined by:
- **Transition model:** $P(X_t \mid X_{t-1})$ -- how the state evolves.
- **Sensor model:** $P(E_t \mid X_t)$ -- how observations relate to state.
- **Initial distribution:** $P(X_1)$.

The **stationarity assumption** holds that transition and sensor models are identical across time steps.

### Inference Tasks

Four principal inference tasks arise in temporal models:

1. **Filtering (state estimation):** Compute $P(X_t \mid e_{1:t})$, the belief state given all evidence up to current time.
2. **Prediction:** Compute $P(X_{t+k} \mid e_{1:t})$ for $k > 0$.
3. **Smoothing:** Compute $P(X_k \mid e_{1:t})$ for $k < t$, estimating the past given full evidence.
4. **Most likely explanation:** Compute $\arg\max_{x_{1:t}} P(x_{1:t} \mid e_{1:t})$, the most probable state trajectory.

## 10.2 Hidden Markov Models (HMMs)

An HMM is a DBN with discrete state $X_t \in \{1, \ldots, n\}$ and evidence $E_t \in \{1, \ldots, m\}$.

### 10.2.1 Forward Algorithm (Filtering)

The forward recursion computes the belief state:

$$P(X_{t+1} \mid e_{1:t+1}) \propto P(e_{t+1} \mid X_{t+1}) \sum_{x_t} P(X_{t+1} \mid x_t) P(x_t \mid e_{1:t})$$

In matrix form: $\mathbf{f}_{1:t+1} \propto \mathbf{O}_{t+1} \mathbf{T}^\top \mathbf{f}_{1:t}$, where $\mathbf{O}_{t+1}$ is the diagonal observation matrix for $e_{t+1}$ and $\mathbf{T}$ is the transition matrix.

### 10.2.2 Backward Algorithm (Smoothing)

The backward recursion computes future evidence given state:

$$\mathbf{b}_{k+1:t} = P(e_{k+1:t} \mid X_k)$$

The smoothed estimate is:

$$P(X_k \mid e_{1:t}) \propto \mathbf{f}_{1:k} \odot \mathbf{b}_{k+1:t}$$

where $\odot$ denotes element-wise multiplication.

### 10.2.3 Viterbi Algorithm (Most Likely Explanation)

The Viterbi algorithm finds the most likely state sequence using dynamic programming:

```
function VITERBI(T, E, π, T_matrix, E_matrix) returns path
    for each state s do
        m[1, s] ← log π[s] + log E_matrix[s, E[1]]
        backpointer[1, s] ← 0
    for t = 2 to T do
        for each state s do
            m[t, s] ← max_{s'} (m[t-1, s'] + log T_matrix[s', s]) + log E_matrix[s, E[t]]
            backpointer[t, s] ← argmax_{s'} (m[t-1, s'] + log T_matrix[s', s])
    best_path[T] ← argmax_s m[T, s]
    for t = T down to 2 do
        best_path[t-1] ← backpointer[t, best_path[t]]
    return best_path
```

### 10.2.4 Particle Filtering

Particle filtering approximates the belief state with $N\) weighted samples (particles). Each particle represents a hypothesized state.

```
function PARTICLE-FILTERING(particles, E_t, N) returns new_particles
    weights ← array of size N
    new_particles ← array of size N
    for i = 1 to N do
        x' ← sample from P(X_t | particles[i])
        weights[i] ← P(E_t | x')
    normalize weights
    for i = 1 to N do
        new_particles[i] ← sample from particles with probability proportional to weights
    return new_particles
```

Particle filtering is widely used in robot localization (Monte Carlo localization), tracking, and financial modeling.

## 10.3 Kalman Filters

The **Kalman filter** (Kalman, 1960) provides exact closed-form filtering for continuous state spaces under linear Gaussian assumptions:

$$X_{t+1} = \mathbf{F} X_t + \mathbf{B} u_t + \epsilon_t \quad \epsilon_t \sim \mathcal{N}(0, \Sigma_x)$$
$$E_t = \mathbf{H} X_t + \delta_t \quad \delta_t \sim \mathcal{N}(0, \Sigma_e)$$

The belief state $P(X_t \mid e_{1:t})$ is Gaussian, parameterized by mean $\mu_t$ and covariance $\Sigma_t$. The update equations (prediction and correction steps) have closed-form matrix expressions.

**Extended Kalman Filter (EKF)** handles nonlinear transition and sensor models via local linearization.

## 10.4 Decision Making Under Uncertainty

### 10.4.1 Utility Theory

**Utility** quantifies an agent's preferences over outcomes. The **expected utility** of an action $a$ under uncertainty about outcome $o$ is:

$$\text{EU}(a) = \sum_o P(o \mid a) \, U(o)$$

The principle of **maximum expected utility (MEU)** dictates that a rational agent chooses the action maximizing expected utility.

### 10.4.2 Decision Networks

A **decision network** (influence diagram) extends Bayesian networks with:
- **Decision nodes** (rectangles): actions under the agent's control.
- **Utility nodes** (diamonds): the utility function.

Inference in decision networks evaluates the expected utility of each decision alternative given available evidence.

### 10.4.3 Markov Decision Processes (MDP)

An MDP models sequential decision-making under uncertainty. It is defined by:
- **State space** $\mathcal{S}$.
- **Action space** $\mathcal{A}$.
- **Transition model** $P(s' \mid s, a)$.
- **Reward function** $R(s, a, s')$.
- **Discount factor** $\gamma \in [0, 1)$.

A **policy** $\pi: \mathcal{S} \to \mathcal{A}$ maps states to actions. The **value function** $V^\pi(s)$ is the expected discounted return from state $s$ following $\pi$:

$$V^\pi(s) = \mathbb{E}\left[ \sum_{t=0}^\infty \gamma^t R(s_t, \pi(s_t), s_{t+1}) \mid s_0 = s \right]$$

### 10.4.4 Value Iteration

Value iteration computes the optimal value function via dynamic programming:

$$V_{k+1}(s) = \max_a \sum_{s'} P(s' \mid s, a) [R(s, a, s') + \gamma V_k(s')]$$

Convergence to $V^*$ is guaranteed in the limit. The **Bellman residual** $\|V_{k+1} - V_k\|_\infty$ measures convergence.

### 10.4.5 Policy Iteration

Policy iteration alternates between policy evaluation and policy improvement:

1. **Policy evaluation:** Solve $\sum_{s'} P(s' \mid s, \pi(s)) [R(s, \pi(s), s') + \gamma V^\pi(s')] - V^\pi(s) = 0$ for all $s$.
2. **Policy improvement:** $\pi'(s) = \arg\max_a \sum_{s'} P(s' \mid s, a) [R(s, a, s') + \gamma V^\pi(s')]$.

Policy iteration typically converges in fewer iterations than value iteration.

## 10.5 Summary

Probabilistic temporal models support filtering, prediction, and smoothing in sequential domains. HMMs and Kalman filters provide tractable inference for discrete and continuous state spaces, respectively. MDPs extend decision-making to sequential settings, with value and policy iteration providing optimal solutions.

## Exercises

### Review Questions

1. Distinguish filtering, prediction, and smoothing. Provide a practical example of each.
2. Explain why particle filtering may be preferred over exact inference for large state spaces.
3. Compare value iteration and policy iteration. Under what conditions does each converge faster?

### Application Problems

4. Implement the forward-backward algorithm for an HMM with 3 hidden states and 4 observation symbols. Test on a sequence of length 10.
5. Formulate a robot navigation task as an MDP with a $4 \times 4$ grid, obstacles, and a goal state. Solve using value iteration with $\gamma = 0.95$.

### Challenge Problem

6. Implement particle filtering for robot localization in a $10 \times 10$ grid with noisy range sensors. Evaluate accuracy as a function of particle count ($N = 10, 100, 1000$). Compare computational cost and estimation error.
