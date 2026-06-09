# Chapter 9: TCP Congestion Control

## Learning Objectives

1. Distinguish between flow control and congestion control.
2. Explain the TCP sliding window mechanism and the role of the advertised window.
3. Describe the AIMD principle and its implementation through slow start and congestion avoidance.
4. Compare TCP Tahoe, Reno, NewReno, and Cubic congestion control algorithms.
5. Analyze how competing TCP flows share bottleneck bandwidth.

## 9.1 Flow Control vs. Congestion Control

**Flow control** prevents a fast sender from overwhelming a slow receiver. The receiver advertises its available buffer space (rwnd, advertised window), and the sender limits unacknowledged data to rwnd.

**Congestion control** prevents a sender from overwhelming the network. When routers become overloaded, packets are dropped or queued excessively. TCP detects congestion through packet loss (duplicate ACKs or timeout) and reduces its sending rate accordingly. The sender maintains a congestion window (cwnd), and the actual window used is min(cwnd, rwnd).

## 9.2 Sliding Window and Flow Control

TCP's flow control uses a sliding window. The sender maintains:

- **Send window base**: the oldest unacknowledged byte.
- **Send window size**: min(cwnd, rwnd).
- **Next byte to send**: the boundary between sent-but-unacknowledged and unsent data.

The receiver advertises rwnd in every TCP segment:

```
rwnd = RcvBuffer - (LastByteRcvd - LastByteRead)
```

If the receiver stops reading data, rwnd shrinks to zero. The sender stops transmitting but periodically sends one-byte probes (persist timer) to detect window reopening.

## 9.3 Congestion Control Principles

TCP congestion control is based on Additive Increase Multiplicative Decrease (AIMD). The principle: increase the sending rate cautiously (additive) to probe for available bandwidth, and reduce it aggressively (multiplicative) when congestion is detected.

- **Additive increase**: increase cwnd by 1 MSS per RTT during congestion avoidance.
- **Multiplicative decrease**: halve cwnd (Reno) or set cwnd to 1 MSS (Tahoe) on packet loss.

AIMD produces a characteristic sawtooth pattern in the congestion window over time.

## 9.4 Slow Start

At the beginning of a connection, TCP does not know the available bandwidth. Slow start probes the network by doubling cwnd every RTT:

1. Initial cwnd = 10 MSS (RFC 6928; historically 1 MSS).
2. For each ACK received, cwnd increases by 1 MSS (effectively doubling per RTT).
3. Slow start continues until:
   - cwnd reaches the slow start threshold (ssthresh), transitioning to congestion avoidance.
   - Packet loss occurs, setting ssthresh = cwnd/2 and cwnd = 1 (Tahoe) or cwnd = ssthresh (Reno).

A typical slow start: starting at 10 MSS, after 1 RTT cwnd = 20, after 2 RTT cwnd = 40, after 3 RTT cwnd = 80, after 4 RTT cwnd = 160. This exponential growth quickly reaches the available bandwidth.

## 9.5 Congestion Avoidance

In congestion avoidance, cwnd increases by 1 MSS per RTT (linear growth). For each ACK received, cwnd is incremented by:

$$\frac{\text{MSS}}{\text{cwnd / MSS}}$$

This additive increase produces a linear, self-clocked growth of the window.

The ssthresh is set dynamically. If loss occurs at cwnd = 100, ssthresh is set to 50, and congestion avoidance resumes from cwnd = ssthresh (Reno) or cwnd = 1 (Tahoe).

## 9.6 Fast Retransmit and Fast Recovery

TCP Reno introduced fast retransmit and fast recovery to handle isolated packet losses without timeout.

**Fast retransmit.** When a receiver receives an out-of-order segment, it immediately sends a duplicate ACK for the last in-order byte. If the sender receives three duplicate ACKs, it retransmits the missing segment without waiting for the retransmission timeout (RTO).

**Fast recovery.** After fast retransmit, Reno enters fast recovery instead of slow start. ssthresh is set to cwnd/2, cwnd is set to ssthresh + 3 (for the duplicate ACKs), and cwnd is inflated for each additional duplicate ACK. When the ACK for the retransmitted segment arrives (partial ACK), cwnd is set to ssthresh, and congestion avoidance resumes.

TCP **NewReno** improves on Reno by handling multiple packet losses within a single window. When a partial ACK arrives (acknowledging the retransmitted segment but not all data sent before loss), NewReno retransmits the next unacknowledged segment rather than waiting for more duplicate ACKs. This avoids a timeout when multiple segments are lost in one window.

## 9.7 TCP Tahoe

TCP Tahoe predates fast recovery. On triple duplicate ACK, Tahoe sets ssthresh = cwnd/2, cwnd = 1 MSS, and enters slow start. Tahoe recovers slowly from loss because it must re-probe the available bandwidth from a single segment.

## 9.8 TCP Cubic

TCP Cubic (RFC 8312) is the default congestion control algorithm in Linux. Cubic replaces the linear AIMD growth with a cubic function, making the window growth independent of RTT. The growth function:

$$W(t) = C \cdot (t - K)^3 + W_{max}$$

where $W_{max}$ is the window size when loss occurred, $C$ is a scaling constant, $t$ is the time since the last loss, and $K = \sqrt[3]{W_{max} \cdot \beta / C}$ with $\beta = 0.3$ (multiplicative decrease factor).

The cubic function has three regions:
1. **After loss**: window quickly grows toward $W_{max}$ (probing phase).
2. **Near $W_{max}$**: growth slows, allowing the connection to stay near the available bandwidth and probe for additional capacity.
3. **Above $W_{max}$**: growth accelerates, probing for additional bandwidth.

Cubic's RTT-independent growth ensures fairness: flows with different RTTs converge to similar throughput, unlike Reno where shorter-RTT flows receive disproportionately higher throughput.

## 9.9 Comparison of TCP Variants

| Variant | Loss Signal | After Triple ACK | After Timeout |
|---------|-------------|------------------|---------------|
| Tahoe | Triple ACK | cwnd=1, slow start | cwnd=1, slow start |
| Reno | Triple ACK | cwnd/=2, fast recovery | cwnd=1, slow start |
| NewReno | Triple ACK | cwnd/=2, fast recovery (multiple losses) | cwnd=1, slow start |
| Cubic | Triple ACK | cwnd*=0.7, cubic function | cwnd=1, slow start |
| BBR | RTT/model | Model-based rate | Model-based rate |

**TCP BBR** (Bottleneck Bandwidth and Round-trip propagation time) departs from loss-based congestion control. BBR estimates the bottleneck bandwidth and minimum RTT, pacing its sending rate at the estimated bandwidth. BBR does not use loss as a congestion signal and can achieve higher throughput on deep buffers.

## 9.10 Congestion vs. Flow Control Illustrated

Flow control prevents receiver buffer overflow; congestion control prevents network buffer overflow. Both limit the sender's window. The effective window:

$$\text{EffectiveWindow} = \min(\text{cwnd}, \text{rwnd})$$

On a path with a slow receiver, rwnd governs the window. On a path with a fast receiver and congested network, cwnd governs. At any instant, the effective window is the minimum of the two constraints.

## 9.11 Retransmission Timer

TCP maintains a retransmission timeout (RTO) computed from measured RTT:

$$\text{SRTT} = (1 - \alpha) \cdot \text{SRTT} + \alpha \cdot \text{RTT}_\text{sample}$$
$$\text{RTTVAR} = (1 - \beta) \cdot \text{RTTVAR} + \beta \cdot |\text{SRTT} - \text{RTT}_\text{sample}|$$
$$\text{RTO} = \text{SRTT} + 4 \cdot \text{RTTVAR}$$

With $\alpha = 1/8$ and $\beta = 1/4$, the RTO adapts to varying network conditions. RFC 6298 specifies minimum RTO of 1 second.

## Summary

TCP congestion control uses AIMD: additive increase probes for bandwidth; multiplicative decrease responds to loss. Slow start achieves exponential growth to the available bandwidth. Congestion avoidance provides linear, stable growth. Fast retransmit and fast recovery enable efficient recovery from isolated losses without timeout. TCP Cubic improves fairness across flows with different RTTs. The effective window combines congestion and flow constraints: min(cwnd, rwnd).

## Exercises

### Review Questions

1. What is the difference between cwnd and rwnd?
2. Why does slow start grow cwnd exponentially?
3. How does fast retransmit avoid waiting for the retransmission timeout?
4. What problem does TCP Cubic solve that Reno does not?
5. A receiver advertises rwnd = 0. What happens to the sender?

### Application Problems

6. A TCP connection starts with cwnd = 10 MSS, ssthresh = 64. No loss occurs for the first 10 RTTs. Compute cwnd after each RTT. When would slow end transition to congestion avoidance?
7. A Reno connection experiences triple duplicate ACK at cwnd = 48. Show cwnd evolution through slow start (if applicable), fast recovery, and congestion avoidance for the next 5 RTTs.
8. Two TCP Reno connections share a 100 Mbps bottleneck link with 50 ms RTT. Both have infinite data to send. Compute the steady-state throughput of each connection. How does the result change if one connection has 100 ms RTT?

### Challenge Problem

9. **Analyze the interaction of multiple congestion control algorithms on a shared link.** Four TCP flows share a 1 Gbps bottleneck with 20 ms RTT: one Cubic, two Reno, and one BBR. The queue at the bottleneck switch is 500 packets. Model the throughput of each flow over 60 seconds. Assume all flows start simultaneously and have infinite data. Predict which flow achieves the highest throughput and explain why. Then propose a fair queuing mechanism at the bottleneck router that would enforce equal throughput among the four flows.
