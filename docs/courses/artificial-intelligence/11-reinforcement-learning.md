# Chapter 11: Reinforcement Learning

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) describe the reinforcement learning framework and its components; (2) implement model-based and model-free RL algorithms; (3) apply temporal-difference learning methods; (4) implement Q-learning and SARSA; (5) understand deep reinforcement learning architectures including DQN and policy gradients.

## 11.1 The Reinforcement Learning Framework

![Reinforcement Learning](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/artificial-intelligence/ch11-rl.png)

Reinforcement Learning (RL) studies how an **agent** learns to make sequential decisions by interacting with an **environment**. At each discrete time step $t$, the agent observes state $S_t \in \mathcal{S}$, selects action $A_t \in \mathcal{A}$, receives reward $R_{t+1} \in \mathcal{R}$, and transitions to state $S_{t+1}$.

The agent's objective is to maximize the expected cumulative discounted reward:

$$G_t = \sum_{k=0}^\infty \gamma^k R_{t+k+1}$$

where $\gamma \in [0, 1]$ is the discount factor.

RL differs from supervised learning in several key respects: there is no instructional signal (only rewards); feedback is delayed; the agent influences the data distribution through its own actions; and the agent must balance exploration with exploitation.

### 11.1.1 Key Components

- **Policy** $\pi(a \mid s)$: The agent's behavior, mapping states to action probabilities.
- **Value function** $V_\pi(s) = \mathbb{E}_\pi[G_t \mid S_t = s]$: Expected return from state $s$ under policy $\pi$.
- **Action-value function** $Q_\pi(s, a) = \mathbb{E}_\pi[G_t \mid S_t = s, A_t = a]$: Expected return from taking action $a$ in state $s$ and following $\pi$ thereafter.
- **Model:** The agent's representation of the environment's transition and reward structure.

## 11.2 Exploration vs Exploitation

The exploration-exploitation dilemma: the agent must try unknown actions (exploration) to discover better returns while also selecting known good actions (exploitation) to maximize reward.

Standard exploration strategies:
- **$\epsilon$-greedy:** With probability $\epsilon$, choose a random action; otherwise, choose the greedy action.
- **Softmax (Boltzmann):** Select action $a$ with probability proportional to $\exp(Q(s, a) / \tau)$, where $\tau$ controls exploration temperature.
- **Upper Confidence Bound (UCB):** $A_t = \arg\max_a \left[ Q_t(a) + c \sqrt{\frac{\ln t}{N_t(a)}} \right]$

## 11.3 Passive Reinforcement Learning

In passive RL, the agent follows a fixed policy $\pi$ and learns the value function $V^\pi$.

**Temporal-Difference (TD) Learning** updates the value estimate toward the observed reward plus the discounted value of the next state:

$$V(S_t) \leftarrow V(S_t) + \alpha [R_{t+1} + \gamma V(S_{t+1}) - V(S_t)]$$

where $\alpha \in (0, 1]$ is the learning rate. TD learning combines the ideas of dynamic programming (bootstrapping) and Monte Carlo methods (sampling).

The TD error $\delta_t = R_{t+1} + \gamma V(S_{t+1}) - V(S_t)$ signals the discrepancy between the estimated and actual return.

## 11.4 Active Reinforcement Learning

Active RL agents must learn both the value function and which actions to take.

### 11.4.1 Q-Learning

Q-learning (Watkins, 1989) learns the optimal action-value function directly, without requiring a model of the environment:

$$Q(S_t, A_t) \leftarrow Q(S_t, A_t) + \alpha [R_{t+1} + \gamma \max_a Q(S_{t+1}, a) - Q(S_t, A_t)]$$

Q-learning is **off-policy**: it learns the optimal policy while following an exploratory policy (e.g., $\epsilon$-greedy).

```
function Q-LEARNING(env, γ, α, ε, episodes) returns Q
    Q(s, a) ← 0 for all s, a
    for each episode do
        s ← env.RESET()
        while not TERMINAL(s) do
            a ← ε-GREEDY(s, Q, ε)
            s', r ← env.STEP(a)
            Q(s, a) ← Q(s, a) + α[r + γ max_{a'} Q(s', a') - Q(s, a)]
            s ← s'
    return Q
```

**Convergence guarantee:** Q-learning converges to $Q^*$ with probability 1 if each state-action pair is visited infinitely often and $\alpha$ decreases appropriately.

### 11.4.2 SARSA

SARSA (State-Action-Reward-State-Action) is **on-policy**: it learns the value of the policy being followed:

$$Q(S_t, A_t) \leftarrow Q(S_t, A_t) + \alpha [R_{t+1} + \gamma Q(S_{t+1}, A_{t+1}) - Q(S_t, A_t)]$$

SARSA accounts for the exploration policy, making it more cautious in environments where exploration could lead to dangerous states.

## 11.5 Function Approximation in RL

Tabular RL becomes infeasible for large or continuous state spaces. **Function approximation** generalizes across states using a parameterized function $Q(s, a; \theta) \approx Q^*(s, a)$.

**Linear function approximation:** Represent the state-action value as a linear combination of features $\phi(s, a)$:

$$Q(s, a; \theta) = \theta^\top \phi(s, a)$$

Update: $\theta \leftarrow \theta + \alpha [R + \gamma \max_a Q(s', a'; \theta) - Q(s, a; \theta)] \nabla_\theta Q(s, a; \theta)$

## 11.6 Deep Q-Networks (DQN)

DQN (Mnih et al., 2015) uses a deep neural network to approximate $Q(s, a; \theta)$. Key innovations stabilize learning:

1. **Experience replay:** Store transitions $(s, a, r, s')$ in a replay buffer. Sample mini-batches uniformly to train the network, breaking temporal correlations.

2. **Target network:** Maintain a separate network $Q(s, a; \theta^-)$ for computing TD targets. Periodically copy $\theta$ to $\theta^-$ to reduce moving-target instability.

```
function DQN-TRAIN(env, buffer_size, batch_size, γ)
    initialize Q-network with random θ
    initialize target network θ⁻ ← θ
    initialize replay buffer D with capacity buffer_size
    for episode = 1 to MAX_EPISODES do
        s ← env.RESET()
        while not TERMINAL(s) do
            a ← ε-GREEDY(s, Q, ε)
            s', r ← env.STEP(a)
            store (s, a, r, s') in D
            if len(D) ≥ batch_size then
                sample batch B from D
                y_i = r_i + γ max_{a'} Q(s'_i, a'; θ⁻)
                minimize (y_i - Q(s_i, a_i; θ))² over batch B
            s ← s'
        every C episodes: θ⁻ ← θ
```

DQN achieved human-level performance on 49 Atari games using only pixel input and game score.

## 11.7 Policy Gradient Methods

Policy gradient methods directly optimize the policy $\pi_\theta(a \mid s)$ without learning a value function. The objective is to maximize expected return $J(\theta) = \mathbb{E}_{\pi_\theta}[G_0]$.

The **policy gradient theorem** provides the gradient:

$$\nabla_\theta J(\theta) = \mathbb{E}_{\pi_\theta} [\nabla_\theta \log \pi_\theta(a \mid s) \, Q^{\pi_\theta}(s, a)]$$

**REINFORCE** (Williams, 1992) uses Monte Carlo returns:

$$\nabla_\theta J(\theta) \approx \frac{1}{N} \sum_{i=1}^N \sum_{t=0}^{T_i} \nabla_\theta \log \pi_\theta(a_{i,t} \mid s_{i,t}) \, G_{i,t}$$

## 11.8 Actor-Critic Methods

Actor-critic methods combine value-based and policy-based approaches:
- **Actor:** The policy $\pi_\theta(a \mid s)$, updated via policy gradient.
- **Critic:** The value function $V_\phi(s)$, updated via TD learning, reducing variance in the gradient estimate.

**Advantage Actor-Critic (A2C)** uses the advantage function $A(s, a) = Q(s, a) - V(s)$ to reduce variance further.

**Proximal Policy Optimization (PPO)** (Schulman et al., 2017) clips policy updates to prevent destructively large policy changes:

$$L^{\text{CLIP}}(\theta) = \mathbb{E}_t \left[ \min(r_t(\theta) \hat{A}_t, \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon) \hat{A}_t) \right]$$

where $r_t(\theta) = \pi_\theta(a_t \mid s_t) / \pi_{\theta_{\text{old}}}(a_t \mid s_t)$.

## 11.9 Summary

Reinforcement learning enables agents to learn optimal behavior through interaction. Model-free methods (Q-learning, SARSA) learn value functions without environment models. Deep RL scales these algorithms to high-dimensional state spaces. Policy gradient and actor-critic methods handle continuous action spaces and stochastic policies.

## Exercises

### Review Questions

1. Distinguish on-policy and off-policy learning. When is each preferred?
2. Explain the role of experience replay in DQN. Why does it improve stability?
3. Compare value-based and policy-based RL methods. What are the advantages of each?

### Application Problems

4. Implement Q-learning for the FrozenLake environment (4x4 grid). Report the learned policy and convergence rate with $\epsilon$-greedy exploration at $\epsilon = 0.1, 0.3, 0.5$.
5. Implement a linear function approximator for the MountainCar continuous state problem. Compare with tabular Q-learning after discretizing the state space.

### Challenge Problem

6. Implement DQN for the CartPole environment. Tune the replay buffer size, target network update frequency, and learning rate. Produce learning curves showing average episode return over 500 episodes.
