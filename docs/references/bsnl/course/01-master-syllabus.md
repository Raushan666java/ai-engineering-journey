---
title: "01 — Master Syllabus: Every Topic, Mapped and Rated"
sidebar_label: "01 · Master Syllabus"
description: The complete BSNL SET (Telecom) topic tree, each sub-topic mapped to a chapter, a depth rating (L1 recall to L4 numerical), and the question style the paper uses.
---

# 01 — Master Syllabus: Every Topic, Mapped and Rated

## How to read this document

Every sub-topic carries:

- **Depth** — the level you must reach, not the level you must read.
  - `L1` = recall a fact or definition
  - `L2` = explain a mechanism or a why
  - `L3` = apply a rule to a scenario
  - `L4` = compute a number
- **Chapter** — where it is taught.
- **Ask** — the shape of the question the paper tends to use.

If a topic is marked `L1`, do not spend three days on it. If it is marked `L4`, do not stop at reading.

---

## Block 1 — IP / Data Networks (15% · 24 marks)

| Sub-topic | Depth | Chapter | Ask |
|---|---|---|---|
| OSI seven layers, PDUs, encapsulation | L2 | ch01 | "Which layer does X belong to?" |
| TCP/IP model, mapping to OSI | L1 | ch01 | Layer-to-layer matching |
| IPv4 header fields, fragmentation | L2 | ch01 | "Which field prevents loops?" (TTL) |
| IPv4 addressing, classes, private ranges | L1 | ch01 | Range identification |
| **Subnetting, VLSM, CIDR** | **L4** | ch01 | Hosts per subnet, network/broadcast ID |
| IPv6 header, address types, transition | L2 | ch01 | "Which is not an IPv6 type?" |
| NAT/PAT, DHCP, DNS, ARP | L2 | ch01 | Function identification |
| Static vs dynamic routing | L1 | ch02 | Concept |
| RIP, OSPF, BGP — metrics and scope | L2 | ch02 | "Which protocol is inter-AS?" |
| Switching, MAC learning, VLAN, STP | L2 | ch02 | Loop prevention, VLAN tagging |
| **MPLS: label stack, LSP, LER/LSR, VPN** | L2 | ch02 | Label operations (push/swap/pop) |
| QoS: classification, marking, queuing, shaping | L2 | ch02 | "Which mechanism delays excess traffic?" |
| Firewalls: packet filter, stateful, proxy, NGFW | L2 | ch03 | Type identification |
| IDS vs IPS, DDoS, spoofing, MITM | L1 | ch03 | Attack-to-defence mapping |
| VPN, IPsec (AH/ESP), TLS handshake | L2 | ch03 | "Which provides confidentiality?" |
| Caching, CDN, proxy, load balancer | L2 | ch03 | Purpose identification |

## Block 2 — Emerging Technologies (15% · 24 marks)

| Sub-topic | Depth | Chapter | Ask |
|---|---|---|---|
| IoT reference architecture (device/gateway/network/application) | L2 | ch04 | Layer placement |
| M2M vs IoT, communication models | L1 | ch04 | Difference |
| LPWAN, NB-IoT, LoRa, Zigbee, BLE | L2 | ch04 | Range/power trade-off |
| Edge vs fog vs cloud computing | L2 | ch04 | Latency rationale |
| Cloud service models (IaaS/PaaS/SaaS), deployment models | L1 | ch04 | Model identification |
| Virtualisation, hypervisor, containers | L2 | ch04 | Type 1 vs Type 2 |
| Data-centre design: tiers, cooling, redundancy, power | L2 | ch04 | Tier meaning |
| **SDN: control/data/application planes, OpenFlow** | L2 | ch05 | "Where does the controller sit?" |
| SDN controllers (ONOS, ODL), southbound/northbound APIs | L1 | ch05 | API direction |
| **NFV, VNF, MANO, ETSI framework** | L2 | ch05 | "NFV decouples what from what?" |
| Network slicing: isolation, SLA, 5G use | L2 | ch05 | Slice characteristics |
| Blockchain: blocks, hashing, consensus, smart contracts | L1 | ch05 | Property identification |
| AI/ML in telecom: predictive maintenance, SON, churn, anomaly | L2 | ch05 | Use-case mapping |

## Block 3 — Wireline Technologies (15% · 24 marks)

| Sub-topic | Depth | Chapter | Ask |
|---|---|---|---|
| PSTN structure, local loop, exchanges | L2 | ch06 | Element function |
| PCM, E1/T1 framing, 2.048 Mbps, timeslots | **L4** | ch06 | Bit-rate computation |
| NGN architecture, softswitch, media gateway | L2 | ch06 | "What replaced the Class-4/5 switch?" |
| **SS7 stack: MTP1-3, SCCP, TCAP, ISUP, INAP** | L2 | ch06 | Layer function mapping |
| **SIP: methods, responses, dialog, SDP** | L2 | ch06 | Method identification (INVITE/BYE/ACK) |
| Megaco/H.248, MGCP — gateway control | L1 | ch06 | Purpose |
| Call routing, numbering plan, translations | L2 | ch06 | Routing decision |
| **IMS: P-CSCF, I-CSCF, S-CSCF, HSS, PCRF** | L2 | ch07 | Element responsibility |
| IMS registration and session setup flow | L2 | ch07 | Sequence ordering |
| VoLTE vs CS fallback | L2 | ch07 | Architecture difference |
| xDSL, ADSL/VDSL, DMT, splitters | L2 | ch07 | Bandwidth/speed claims |
| Cable (DOCSIS), fibre access overview | L1 | ch07 | Medium identification |
| Broadband internet, PPPoE, AAA, CPE | L2 | ch07 | Function |
| FTTx topologies (FTTH/FTTB/FTTC), access vs core | L2 | ch07 | Topology selection |

## Block 4 — Transmission Infrastructure (15% · 24 marks)

| Sub-topic | Depth | Chapter | Ask |
|---|---|---|---|
| Fibre types: SMF vs MMF, core/cladding, windows | L1 | ch08 | Wavelength/type matching |
| **Loss, attenuation, dispersion (modal/chromatic/PMD)** | **L4** | ch08 | dB budget, distance limit |
| Optical sources/detectors: LED, laser, PIN, APD | L1 | ch08 | Pairing |
| **SDH: STM-1/4/16/64, frames, VC containers** | **L4** | ch08 | Rate computation (155.52 Mbps base) |
| **DWDM: channel spacing, C-band, ITU grid** | **L4** | ch08 | Channel count from band and spacing |
| OTN: ODU/OTU, FEC, grooming | L2 | ch08 | Layer purpose |
| Protection: 1+1, 1:1, MSP, SNCP, ring vs mesh | L2 | ch08 | Recovery behaviour |
| Link budget, OSNR, power margin | **L4** | ch08 | Received power |
| **GPON: 2.488/1.244 Gbps, split ratios, reach** | **L4** | ch09 | Split-ratio arithmetic |
| EPON vs GPON vs XGS-PON | L2 | ch09 | Comparison |
| FTTH: OLT, ONT/ONU, ODN, splitters, power budget | L2 | ch09 | Element function |
| Transmission media: copper, fibre, microwave, satellite | L1 | ch09 | Media selection |
| Leased lines, MPLS-TP, backhaul media | L2 | ch09 | Use case |

## Block 5 — Basic Telecommunications (15% · 24 marks)

| Sub-topic | Depth | Chapter | Ask |
|---|---|---|---|
| Signal types, time/frequency domain, bandwidth | L2 | ch10 | Concept |
| **Sampling theorem, aliasing, quantization, PCM bit rate** | **L4** | ch10 | 6.02n + 1.76 dB, bit rate |
| SNR, noise figure, Shannon capacity | **L4** | ch10 | Capacity computation |
| AM, FM — modulation index, bandwidth | **L4** | ch10 | Carson's rule |
| **ASK/FSK/PSK/QAM, constellation, bits per symbol** | **L4** | ch10 | Symbol rate vs bit rate |
| **FDM, TDM, WDM, OFDM** | L2 | ch11 | Comparison, subcarrier orthogonality |
| Multiple access: FDMA/TDMA/CDMA/OFDMA | L2 | ch11 | Access identification |
| Duplexing: TDD vs FDD, guard bands | L2 | ch11 | Band planning |
| Spectrum management: ITU regions, WPC, licensing, band plans | L2 | ch11 | Regulatory body identification |
| Noise, interference, fading, equalisation | L2 | ch11 | Mitigation matching |

## Block 6 — Wireless Technologies (15% · 24 marks)

| Sub-topic | Depth | Chapter | Ask |
|---|---|---|---|
| Cellular concept, cell, cluster, **frequency reuse** | **L4** | ch12 | Reuse distance, capacity |
| Handover, roaming, cell splitting, sectorisation | L2 | ch12 | Mechanism |
| GSM architecture: BTS, BSC, MSC, HLR, VLR, AUC, EIR | L2 | ch12 | Node function |
| GSM channels, bursts, frame structure, 200 kHz | L2 | ch12 | Structure |
| GPRS/EDGE, SGSN/GGSN, packet core evolution | L2 | ch12 | Node mapping |
| UMTS/WCDMA: spreading, codes, RNC | L2 | ch12 | Code purpose |
| HSPA/HSPA+ | L1 | ch12 | Rate claims |
| LTE/EPS architecture: eNB, MME, SGW, PGW, HSS | L2 | ch13 | Element function |
| LTE radio: OFDMA downlink, SC-FDMA uplink, resource blocks | L2 | ch13 | "Why SC-FDMA uplink?" |
| VoLTE, IMS dependency, QoS bearers | L2 | ch13 | Dependency |
| **5G NR: numerology, subcarrier spacing, mmWave, massive MIMO** | L2 | ch13 | Parameter identification |
| **5G core: SBA, AMF/SMF/UPF/NRF, network slicing, MEC** | L2 | ch13 | Element function |
| SA vs NSA deployment | L2 | ch13 | Architecture difference |
| Antenna fundamentals: gain, dBi, beamwidth, polarisation | **L4** | ch14 | Gain/EIRP computation |
| MIMO, beamforming, massive MIMO | L2 | ch14 | Benefit rationale |
| Propagation: free-space loss, fading, path loss models | **L4** | ch14 | FSPL computation |
| Satellite: GEO/MEO/LEO, latency, footprint, VSAT | L2 | ch14 | Orbit comparison |
| Mobile backhaul: microwave, fibre, E-band, latency | L2 | ch14 | Media choice |

## Block 7 — Project Management (10% · 16 marks)

| Sub-topic | Depth | Chapter | Ask |
|---|---|---|---|
| Project lifecycle, phases, deliverables | L1 | ch15 | Phase identification |
| Project selection: NPV, IRR, payback, scoring models | **L4** | ch15 | NPV/IRR computation |
| WBS, responsibility matrix | L1 | ch15 | Purpose |
| **Gantt vs bar chart vs milestone chart** | L1 | ch15 | Chart selection |
| **PERT: three-point estimate, expected time, variance** | **L4** | ch15 | `(O+4M+P)/6` |
| **CPM: critical path, float/slack, crashing** | **L4** | ch15 | Path and float computation |
| Risk management: identify, assess, mitigate | L2 | ch15 | Response type |
| Cost control, earned value (awareness) | L2 | ch15 | Concept |

## Part I — Aptitude (40 marks)

| Area | Depth | Chapter | Ask |
|---|---|---|---|
| Percentages, ratio, averages, mixtures | L4 | ch16 | Standard word problems |
| Profit/loss, SI/CI, time-work, time-speed | L4 | ch16 | Shortcut problems |
| Number series, simplification, approximation | L3 | ch16 | Speed |
| Reasoning: series, coding, blood relations, seating, syllogism | L3 | ch16 | Pattern |
| Data interpretation: tables, bar, pie | L3 | ch16 | Calculation |
| English: grammar, vocabulary, comprehension | L3 | ch16 | Error spotting, RC |
| General awareness: current affairs, telecom awareness | L1 | ch16 | Fact |

---

## Coverage check

| Block | Sub-topics listed | Chapters | Marks |
|---|---|---|---|
| IP / Data Networks | 17 | 3 | 24 |
| Emerging Technologies | 13 | 2 | 24 |
| Wireline | 14 | 2 | 24 |
| Transmission | 13 | 2 | 24 |
| Basic Telecom | 10 | 2 | 24 |
| Wireless | 17 | 3 | 24 |
| Project Management | 8 | 1 | 16 |
| Aptitude | 7 | 1 | 40 |
| **Total** | **99** | **16** | **200** |

## Depth budget — how to spend 8 months

| Depth | Sub-topics | Study shape | Share of time |
|---|---|---|---|
| L1 | 21 | Flashcards, one pass | 10% |
| L2 | 46 | Textbook + diagram + explain aloud | 45% |
| L3 | 9 | Practice sets | 15% |
| **L4** | **23** | **Drill to reflex; timed** | **30%** |

The L4 list is the merit list. If you finish this course having read everything but drilled nothing, expect ~95–105. If you drill the 23 L4 families, expect 120+.

## Official sources to verify against

- SET scheme and syllabus PDF: `externalexam.bsnl.co.in/SET_Notification_with_Scheme_and_Syllabus.pdf`
- JTO notification (for comparison): `externalexam.bsnl.co.in/Examination notification DR JTO(T).pdf`

Weights and block names above are from the 2026 SET notification. **Re-check the 2027 PDF when it drops** — BSNL can adjust weights, and any change reorders your priority list.
