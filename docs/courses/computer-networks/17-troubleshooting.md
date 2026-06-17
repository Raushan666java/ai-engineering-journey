# Chapter 17: Network Troubleshooting

## Learning Objectives

1. Use ping and traceroute to diagnose reachability and path issues.
2. Capture and analyze packets with tcpdump and Wireshark.
3. Inspect local network state using netstat and ss.
4. Measure network performance with iperf and MTR.
5. Diagnose common network problems: latency, packet loss, MTU mismatches, and DNS failures.

## 17.1 Diagnostic Tools

![Network Troubleshooting: Tools, Common Issues and Methodology](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/computer-networks/ch11-troubleshooting.png)

### 17.1.1 ping

`ping` sends ICMP Echo Request packets and measures round-trip time (RTT). It tests basic IP connectivity and provides latency measurements.

```
$ ping -c 5 google.com
PING google.com (142.250.80.14) 56(84) bytes of data.
64 bytes from 142.250.80.14: icmp_seq=1 ttl=118 time=12.3 ms
64 bytes from 142.250.80.14: icmp_seq=2 ttl=118 time=11.8 ms
64 bytes from 142.250.80.14: icmp_seq=3 ttl=118 time=13.1 ms
64 bytes from 142.250.80.14: icmp_seq=4 ttl=118 time=12.5 ms
64 bytes from 142.250.80.14: icmp_seq=5 ttl=118 time=12.0 ms
--- google.com ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4005ms
rtt min/avg/max/mdev = 11.800/12.340/13.100/0.475 ms
```

Interpreting ping output:
- **Packet loss**: indicates network congestion, link errors, or firewall filtering.
- **High RTT**: caused by long propagation distance, router queuing, or link congestion.
- **TTL**: decremented by each router; starting TTL minus observed TTL is the hop count.
- **Varying RTT (jitter)**: may indicate congestion or route changes.

Some networks block ICMP Echo Requests, causing false positives. Always use additional tools.

### 17.1.2 traceroute / tracert

`traceroute` discovers the path packets take to a destination by sending packets with increasing TTL values. Each router that decrements TTL to zero returns an ICMP Time Exceeded message.

```
$ traceroute -n google.com
traceroute to google.com (142.250.80.14), 30 hops max, 60 byte packets
 1  192.168.1.1    1.2 ms   1.0 ms   1.1 ms
 2  10.0.0.1      3.1 ms   3.0 ms   3.2 ms
 3  72.14.237.65  10.2 ms  10.5 ms  10.1 ms
 4  108.170.252.1 12.3 ms  12.1 ms  12.5 ms
 5  216.239.48.74 15.1 ms  15.3 ms  15.0 ms
 6  142.250.80.14 12.0 ms  12.2 ms  12.1 ms
```

The `-n` flag skips DNS resolution, revealing raw IP addresses. Three probes per hop show RTT variation. Asterisks indicate no response (firewall filtering or packet loss). Modern ICMP-based traceroute works best; some versions use UDP (Linux default) or TCP (Windows tracert).

**MTR (My TraceRoute)** combines ping and traceroute. It runs continuously, showing per-hop loss and latency statistics over time, making it ideal for intermittent problems.

### 17.1.3 tcpdump

`tcpdump` captures packets at the network interface for offline or real-time analysis.

```
# Capture all packets on eth0
tcpdump -i eth0

# Capture HTTP traffic to a specific host
tcpdump -i eth0 host 93.184.216.34 and port 80

# Capture with verbosity and hex dump
tcpdump -i eth0 -X -v tcp port 443

# Write to file for Wireshark analysis
tcpdump -i eth0 -w capture.pcap

# Read from file
tcpdump -r capture.pcap

# Capture SYN packets only
tcpdump -i eth0 'tcp[13] & 2 != 0'
```

Key tcpdump expressions:
- `host`, `src`, `dst`: filter by IP address.
- `port`, `src port`, `dst port`: filter by port number.
- `tcp`, `udp`, `icmp`: filter by protocol.
- `and`, `or`, `not`: boolean combinators.
- `tcp[13]`: access byte 13 of TCP header (flags).
- `ip[6:2]`: access fragment offset field.

Common uses: confirm whether packets leave the host, inspect TCP handshake timing, identify retransmissions (same sequence number observed multiple times), and verify MTU behavior.

### 17.1.4 Wireshark

Wireshark provides a graphical interface for packet analysis. Key features:

**Display filters.** More expressive than tcpdump capture filters:
- `http.request.method == "GET"`
- `tcp.analysis.retransmission`
- `ip.src == 10.0.0.1 and tcp.dstport == 443`
- `tls.handshake.type == 1` (TLS ClientHello)
- `dns.flags.response == 0` (DNS queries)

**Follow stream.** Reassembles TCP or UDP streams. Useful for inspecting HTTP request/response pairs, SMTP sessions, or TLS handshake details.

**Expert analysis.** Wireshark automatically flags anomalies: retransmissions, duplicate ACKs, zero windows, checksum errors, and TCP window scaling mismatches.

**Statistics.** Conversation matrix, protocol hierarchy, I/O graphs, and flow graphs provide aggregate traffic analysis.

### 17.1.5 netstat and ss

`netstat` displays network connections, routing tables, and interface statistics. `ss` (socket statistics) is its modern replacement on Linux.

```
# Show all listening TCP sockets
ss -tln

# Show all established TCP connections with process information
ss -tup

# Show socket statistics summarized by state
ss -s

# Show detailed TCP information
ss -tie

# With netstat (older systems)
netstat -an | grep ESTABLISHED
```

`ss` outputs:
- `Recv-Q`: bytes received but not yet read by the application.
- `Send-Q`: bytes sent but not yet acknowledged by the remote end.
- Large Send-Q suggests congestion or slow receiver.
- Connections stuck in FIN_WAIT_2 or CLOSE_WAIT indicate application bugs.

### 17.1.6 iperf / iperf3

`iperf` measures TCP and UDP throughput between two hosts.

```
# Server
iperf3 -s -p 5201

# Client (test TCP throughput for 30 seconds)
iperf3 -c server.example.com -t 30

# Client with parallel streams
iperf3 -c server.example.com -P 4 -t 30

# UDP test with target bandwidth
iperf3 -c server.example.com -u -b 100M -t 30

# Reverse test (server sends, client receives)
iperf3 -c server.example.com -R -t 30
```

Interpretation: reported throughput is the actual goodput. Compare to expected throughput (link speed minus overhead). Low throughput may indicate congestion, bufferbloat, or application-level bottlenecks. UDP tests show jitter and packet loss percentage.

## 17.2 Common Issues

### 17.2.1 High Latency

Symptoms: large RTT in ping, slow application response, timeouts.

Causes and diagnosis:
- **Geographic distance**: speed-of-light delay. Round-trip at 200 km/ms means a transatlantic hop (6000 km) adds at least 60 ms.
- **Serialization delay**: proportional to packet size divided by link speed. A 1500-byte packet on a 1 Mbps link takes 12 ms to serialize; on a 10 Gbps link, 1.2 microseconds.
- **Queuing delay**: packet buffers in routers and switches. Bufferbloat occurs when large buffers (100+ ms) cause excessive delay. Check with `ping` during throughput test.
- **Processing delay**: slow router CPU, NAT, encryption. Identify by hop-to-hop delay increase in traceroute.

### 17.2.2 Packet Loss

Symptoms: retransmissions, file transfer slows, choppy VoIP, web pages load slowly.

Causes and diagnosis:
- **Link errors**: high bit error rate on wireless, long copper runs, or faulty optics. Check interface error counters on switches/routers.
- **Congestion**: router queues overflow and tail-drop packets. Look at the TCP retransmission rate: `tcpdump` showing retransmissions > 1% of total segments.
- **Firewall filtering**: ICMP rate limiting or explicit drops. Traceroute showing asterisks at a specific hop.
- **MTU mismatches**: packets larger than the path MTU are fragmented or discarded. Diagnose with `ping` with DF (Don't Fragment) bit set and varying packet sizes.

### 17.2.3 MTU Issues

Path MTU discovery (PMTUD) determines the largest packet that can traverse a path without fragmentation. Problems arise when ICMP "Fragmentation Needed" messages are blocked by firewalls.

Diagnosis:
```
# Test with DF bit and varying sizes
ping -M do -s 1500 destination  # 1500 bytes payload + ICMP header
ping -M do -s 1472 destination  # Typical Ethernet MTU (1500 - 28)
ping -M do -s 1400 destination
```

If `ping -M do -s 1472` works but `-s 1500` fails, the path MTU is below 1500. Reduce the MTU on the interface or configure MSS clamping on the router.

### 17.2.4 DNS Problems

Symptoms: name resolution failures, wrong IP addresses, slow lookups.

Diagnosis:
```
# Query specific name server
nslookup example.com 8.8.8.8

# Verbose query
dig +trace example.com

# Check cache
dig example.com +short

# Reverse lookup
dig -x 93.184.216.34

# Query all record types
dig example.com ANY

# Check which DNS server is being used
cat /etc/resolv.conf
```

Common DNS issues:
- TTL misconfiguration (too long delays propagation, too short increases load).
- Missing PTR records causing reverse lookup failures.
- DNSSEC validation failures.
- Authoritative server unresponsiveness.
- Fragmentation over UDP (DNS response > 512 bytes without EDNS0).

## 17.3 Methodology

A systematic troubleshooting approach:

1. **Define the problem**: what is the symptom? What is the expected behavior?
2. **Check the obvious**: is the cable plugged in? Is there a firewall rule blocking traffic? Are services running?
3. **Isolate the scope**: is one host affected? One subnet? All traffic, or only specific protocols?
4. **Divide and conquer**: narrow the problem by testing at each layer — physical (link lights), data link (ARP), network (ping), transport (telnet port), application (application logs).
5. **Replicate**: create a minimal test case that reproduces the problem.
6. **Form a hypothesis**: what is the likely cause based on the evidence?
7. **Test the hypothesis**: use the appropriate diagnostic tool. If the hypothesis is wrong, return to step 3.
8. **Document**: record the root cause, resolution, and any preventive measures.

## Summary

Network troubleshooting requires a systematic methodology supported by diagnostic tools. ping and traceroute verify connectivity and measure latency. tcpdump and Wireshark capture and analyze packets at any protocol layer. netstat/ss inspect connection state. iperf measures throughput. Common issues include high latency (propagation, queuing, serialization), packet loss (congestion, errors, filtering), MTU mismatches (blocked ICMP), and DNS failures. A disciplined layer-by-layer approach isolates the root cause efficiently.

## Exercises

### Review Questions

1. What information does the TTL field in ping output provide about the network path?
2. How does traceroute discover the path to a destination?
3. What is the difference between Recv-Q and Send-Q in ss output?
4. Why might ping fail while web browsing works?
5. What is bufferbloat and how does it affect network performance?

### Application Problems

6. A user reports that accessing `https://example.com` is slow. Walk through the diagnostic steps, specifying which tool you use at each step and what output you expect.
7. You observe 10% packet loss on a WiFi link. List five possible causes and describe how to test each one.
8. A data transfer between two data centers achieves only 20 Mbps, while the link is 1 Gbps. The RTT between data centers is 40 ms, the TCP window is 64 KB, and there is no packet loss. Compute the expected TCP throughput. Is your computed value consistent with the observed throughput? If not, what might be the cause?

### Challenge Problem

9. **Root cause analysis of an application performance degradation.** An e-commerce platform becomes slow at 2 PM daily. Customers report slow page loads, checkout failures, and timeouts. The application is hosted on AWS with an ALB, EC2 instances, and an RDS database. The cloud team reports no resource exhaustion on any component. You have access to CloudWatch metrics, VPC flow logs, and can run diagnostic commands on the instances. Design the complete diagnostic procedure: list the metrics and logs you would examine, the commands you would run, and the hypotheses you would test at each stage. Provide decision trees that distinguish between: (a) network congestion, (b) DNS issues, (c) load balancer misconfiguration, (d) application code bottleneck, and (e) database query degradation.
