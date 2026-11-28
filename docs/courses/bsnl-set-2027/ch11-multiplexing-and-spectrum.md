---
title: "ch11 - Multiplexing, Multiple Access and Spectrum"
sidebar_label: "ch11 - Multiplexing, Multiple Access and Spectrum"
description: "FDM, TDM, WDM and OFDM, FDMA/TDMA/CDMA/OFDMA, FDD versus TDD, spectrum regulation in India, and the arithmetic of subcarriers, guard bands and processing gain."
---

# ch11 - Multiplexing, Multiple Access and Spectrum

## Learning Objectives

After this chapter you will be able to:

1. State the difference between multiplexing and multiple access, and why the same four letters appear in both.
2. Compare FDM, synchronous TDM, statistical TDM, WDM, DWDM, CWDM and OFDM on the axis each was invented to fix.
3. Explain orthogonality and the cyclic prefix, and compute an OFDM symbol duration from a subcarrier spacing.
4. Distinguish FDMA, TDMA, CDMA and OFDMA by what is shared and what is scheduled.
5. Compute CDMA processing gain and explain why spreading buys interference tolerance rather than capacity for free.
6. Choose FDD or TDD for a stated traffic pattern and justify it with the guard-band and reciprocity arguments.
7. Describe how spectrum is regulated: ITU regions, ITU-R, national administration, WPC in India, licensed versus de-licensed bands.
8. Explain the four standard fading mitigations (equalisation, diversity, interleaving, coding) and which impairment each addresses.
9. Solve the numerical families here: TDM capacity, statistical multiplexing gain, guard-band channel count, OFDM symbol timing, resource-block throughput, processing gain and WDM channel count.

## Introduction

Basic Telecommunications is a 15 percent block, about 24 questions, and it is the most numerical block on the paper. ch10 covers signals, sampling, PCM and modulation. This chapter covers what you do with those signals once you have them: **share a medium** (multiplexing), **share it among users** (multiple access), **separate directions** (duplexing), and **get permission to use the frequencies at all** (spectrum regulation).

This block is the single most learnable part of the technical paper. The reasons:

- **It is arithmetic, not vocabulary.** A TDM slot count or an OFDM symbol duration has one right answer, and you can check it. There is no plausible distractor to fall for once you can compute.
- **The formulas are few.** Seven formulas cover almost everything, and they are listed in the formula sheet at the end of this chapter.
- **The concepts are shared with ch12 and ch13.** OFDMA and TDD are not extra material here; they are the vocabulary that makes LTE and 5G readable later.

The trap in this block is not difficulty, it is **confusing near-identical names**. TDM and TDMA are not the same thing; WDM and FDM are the same idea at different frequencies; OFDM and OFDMA differ by one letter and one concept. This chapter is built around those distinctions.

## Prerequisites

- Sampling, quantisation and PCM bit rate (ch10). A TDM channel is a PCM channel.
- Bandwidth and the time-domain versus frequency-domain view (ch10).
- The Nyquist and Shannon results (ch10), because OFDM and CDMA are both argued from them.
- Basic logarithms for the decibel work, and the idea of a symbol as distinct from a bit.

## Key Terminology

- **Multiplexing:** combining several independent signals onto one medium so they can travel together.
- **Multiple access:** letting several users share one medium, where the sharing is arbitrated by a protocol rather than by fixed wiring.
- **Guard band:** unused spectrum between channels, kept empty so adjacent channels do not interfere.
- **Guard time (cyclic prefix):** a repeated tail appended to an OFDM symbol so that multipath echoes land inside it instead of corrupting the next symbol.
- **Orthogonality:** the property that two subcarriers do not interfere even though their spectra overlap, because over one symbol period their integral of the product is zero.
- **Duplexing:** separating the two directions of a link, by frequency (FDD) or by time (TDD).
- **Processing gain:** the ratio of chip rate to information rate in a spread-spectrum system, which is how much interference the receiver can tolerate.
- **Resource block:** the LTE and 5G unit of scheduling, 12 subcarriers by one slot, 180 kHz wide at 15 kHz spacing.
- **Licensed band:** spectrum granted to one operator by the regulator, with exclusivity and obligations.
- **De-licensed band:** spectrum anyone may use, subject to power and duty-cycle limits and to sharing etiquette.

## Theory

### 1. Multiplexing versus multiple access

Both words describe sharing. The difference is *who arbitrates*.

| | Multiplexing | Multiple access |
|---|---|---|
| Where it sits | Point to point, inside one link | Between many terminals and one base station or node |
| Arbitration | Fixed by the multiplexer design | By a protocol: scheduling, contention, codes |
| Failure mode | One channel breaks, others unaffected | One terminal misbehaves, all are affected |
| Example | 30 voice channels on one E1 | 100 phones sharing one LTE cell |

**The exam version of this distinction:** FDM, TDM and WDM are multiplexing. FDMA, TDMA, CDMA and OFDMA are multiple access. Same underlying resource, different arbitration layer.

### 2. Frequency division multiplexing

FDM gives each signal its own slice of spectrum, separated by guard bands, and all signals travel simultaneously.

```
|--ch1--|g|--ch2--|g|--ch3--|g|--ch4--|   frequency ->
```

Capacity arithmetic is trivial and therefore examinable:

```
channels = (total bandwidth - guard bands) / (channel bandwidth + guard band)
```

The weakness is that guard bands are pure waste, and the waste grows as a fraction when channels are narrow.

### 3. Time division multiplexing

TDM gives each signal the whole band for a short slice of time, in a repeating frame.

| Variant | How slots are assigned | Efficiency | Problem |
|---|---|---|---|
| Synchronous TDM | Fixed slot per source, always | Predictable, low | Wasted slots when a source is idle |
| Statistical TDM | Slots on demand, with addresses | High | Needs buffering, can drop under overload |

**The canonical example, and it will appear on the paper:** an E1 carries 32 timeslots of 8 bits at 8,000 frames per second.

```
per timeslot = 8 bit x 8,000 = 64,000 bit/s = 64 kbps
total        = 32 x 64 kbps = 2,048 kbps = 2.048 Mbps
```

Of those 32 slots, TS0 carries framing and TS16 carries signalling, leaving **30 voice channels**. That is why "E1 gives 30 voice channels" is a fact worth memorising, and why a question saying "32 voice channels" is a distractor.

### 4. Wavelength division multiplexing

WDM is FDM in the optical domain: several wavelengths share one fibre, each carrying its own modulated signal.

| Variant | Channel spacing | Typical count | Where used |
|---|---|---|---|
| CWDM | 20 nm | up to 18 | Short reach, metro, low cost |
| DWDM (50 GHz) | 0.4 nm | up to about 80 in C-band | Long haul, high capacity |
| DWDM (100 GHz) | 0.8 nm | up to about 40 in C-band | Long haul, simpler optics |

The conversion worth memorising: on the ITU-T G.694.1 grid, **100 GHz spacing equals 0.8 nm near 1550 nm, and 50 GHz equals 0.4 nm**. So a 35 nm C-band window holds about 43 channels at 100 GHz or about 87 at 50 GHz, minus edges.

### 5. OFDM: orthogonality and the cyclic prefix

OFDM is the reason 4G and 5G exist in the form they do. Three ideas, in order.

**Idea 1 - many slow subcarriers beat one fast carrier.** If you split a wide band into hundreds of narrow subcarriers, each one is slow, so each symbol is long, so a multipath echo is a small fraction of a symbol instead of a large one.

**Idea 2 - orthogonality removes the guard bands.** Choose subcarrier spacing so that over one symbol period each subcarrier completes an integer number of cycles more than its neighbour. Then their spectra can overlap without interfering. FDM needs guard bands; OFDM does not.

**Idea 3 - the cyclic prefix absorbs the echo.** Copy the tail of the symbol to its front. Any echo that arrives within the prefix window is discarded with the prefix, so the useful part is clean. The cost is a few percent of throughput.

```mermaid
flowchart LR
    B["Serial bits"] --> M["Constellation map<br/>QAM"]
    M --> S["Serial to parallel"]
    S --> I["IFFT"]
    I --> CP["Add cyclic prefix"]
    CP --> P["Parallel to serial"]
    P --> T["Transmit"]
    T --> R["Receive"]
    R --> RCP["Remove prefix"]
    RCP --> F["FFT"]
    F --> E["Equalise per subcarrier"]
    E --> D["Demap and decide"]
```

The IFFT and FFT are the implementation: OFDM is cheap because a 2,048-point FFT is a well-optimised primitive, not because the mathematics is simple.

**The arithmetic you must be able to do:**

```
symbol duration (useful) = 1 / subcarrier spacing
total symbol duration     = useful duration + cyclic prefix
symbols per second        = 1 / total symbol duration
```

At 15 kHz spacing, the useful duration is 1 / 15,000 = 66.67 us. With a normal prefix of about 4.7 us, the total is about 71.4 us, and a 1 ms subframe holds 14 symbols. That is LTE numerology, and 5G scales it: 30 kHz halves the durations and doubles the symbols per subframe.

### 6. Multiple access

| Scheme | Shared resource | Separation | Strength | Weakness |
|---|---|---|---|---|
| FDMA | Frequency | Different band per user | Simple, no timing | Guard bands, poor for bursts |
| TDMA | Time | Different slot per user | One carrier, one amplifier | Needs tight synchronisation |
| CDMA | Code | Different spreading code per user | Interference tolerance, soft handover | Near-far problem, code management |
| OFDMA | Frequency and time | Subcarrier groups per user per slot | Fine scheduling granularity, works with OFDM | Higher signalling overhead, PAPR |

**CDMA in one paragraph.** Every user transmits across the whole band at once, but each multiplies their signal by a fast pseudo-random code. A receiver that knows the code can despread it; everyone else's signal appears as noise. The tolerance to interference is quantified by the processing gain:

```
processing gain = chip rate / information rate
```

For UMTS, 3.84 Mcps over a 12.2 kbps voice channel gives 315, or about 25 dB. That number is why CDMA can tolerate a signal-to-interference ratio well below 0 dB, and it is the single most examinable number in the scheme.

**OFDMA versus SC-FDMA.** LTE uses OFDMA in the downlink and SC-FDMA (also called DFT-spread OFDM) in the uplink. The reason is peak-to-average power ratio: OFDMA has a high PAPR, which is fine at a base station with a big amplifier and wasteful in a handset battery. SC-FDMA has a lower PAPR. That is a favourite exam question and the answer is entirely about the handset's power amplifier.

### 7. Duplexing

| | FDD | TDD |
|---|---|---|
| Separation | Frequency: separate uplink and downlink bands | Time: alternating slots on one band |
| Guard | Duplex gap between the bands | Guard period between uplink and downlink |
| Spectrum efficiency for asymmetric traffic | Poor (bands are fixed) | Good (slot split is adjustable) |
| Channel reciprocity | No (different frequencies) | Yes (same frequency, so the uplink channel estimates the downlink) |
| Synchronisation need | Low between cells | High, or cells interfere |
| Typical use | Wide-area macro coverage, voice | Dense small cells, unpaired spectrum, massive MIMO |

**The reciprocity point is the one candidates miss.** In TDD the base station can estimate the downlink channel from the uplink, because it is the same frequency. That is what makes large-scale beamforming practical in TDD 5G. In FDD it would require feedback.

### 8. Spectrum management

Spectrum is a national resource, coordinated internationally so that a handset works across borders.

| Layer | Body | Job |
|---|---|---|
| International | ITU, with the ITU-R sector | Allocates bands to services; Radio Regulations treaty |
| Regional | ITU regions 1, 2 and 3 | Region-specific allocation and coordination |
| National | Administration (in India, the WPC under DoT) | Licensing, band plans, coordination, enforcement |
| Operator | The licensee | Deployment within licence conditions |

Three facts worth carrying:

1. **India is in ITU Region 3.** Region 1 is Europe, Africa and the Middle East; Region 2 is the Americas.
2. **The WPC (Wireless Planning and Coordination wing) under the Department of Telecommunications** administers spectrum in India, and TRAI advises on pricing and allocation. Do not attribute licensing to TRAI; that is a classic distractor.
3. **De-licensed bands** (2.4 GHz and 5 GHz for Wi-Fi, and the 865 to 867 MHz band for short-range devices in India) are open subject to power limits. Everything a mobile operator uses is licensed, typically won at auction with rollout obligations.

| Band | Character | Typical use |
|---|---|---|
| 700 MHz | Long range, good in-building penetration | Wide-area coverage, expensive |
| 1800 / 2100 MHz | Balanced | 4G coverage and capacity |
| 2300 MHz | Capacity, shorter range | Dense urban 4G |
| 3300 to 3670 MHz | 5G mid-band | 5G coverage and capacity balance |
| 24 to 28 GHz | Very high capacity, short range | 5G hotspots, fixed wireless |
| 2.4 / 5 GHz | De-licensed | Wi-Fi |

### 9. Interference and coexistence

| Interference type | Cause | Mitigation |
|---|---|---|
| Co-channel | Same frequency reused too close | Frequency planning, power control, sectorisation |
| Adjacent channel | Spectral leakage from a neighbour | Guard bands, filtering, tighter roll-off |
| Inter-symbol | Multipath delay spread | Cyclic prefix, equalisation |
| Inter-carrier | Frequency offset, Doppler | Synchronisation, wider subcarrier spacing at high speed |
| Cross-link (TDD) | Base stations with different slot patterns | Frame synchronisation across the network |

**Why 5G uses wider subcarrier spacing at high frequency** is a direct consequence of the last row: at 30 GHz and 100 km/h the Doppler shift is large, so 15 kHz subcarriers would lose orthogonality. 120 kHz spacing fixes it at the cost of shorter symbols.

### 10. Fading mitigation

Four tools, and each answers a different impairment. Examiners like matching them.

| Tool | What it does | Impairment addressed |
|---|---|---|
| Equalisation | Inverts the channel response at the receiver | Delay spread, frequency selectivity |
| Diversity | Sends or receives the same information over independent paths | Deep fades |
| Interleaving | Spreads burst errors over time before coding | Bursty errors from fades |
| Channel coding | Adds redundancy so errors can be corrected | Residual bit errors |

**Diversity order matters.** Two independent paths give roughly a 10 to 15 dB improvement in the probability of outage at a given threshold; the gain comes from needing *both* paths to fade simultaneously. That is why MIMO works and why "more antennas" is not marketing.

## Formula Sheet

| Quantity | Formula | Symbols |
|---|---|---|
| TDM channel rate | bits per slot x frames per second | 8 bit x 8,000 = 64 kbps |
| TDM aggregate | slots x channel rate | 32 x 64 kbps = 2.048 Mbps |
| FDM channel count | (band - guards) / (channel + guard) | all in the same unit |
| Statistical gain | peak rate / mean rate | dimension of the multiplexing |
| WDM channel count | usable band width / channel spacing | 0.8 nm per 100 GHz at 1550 nm |
| OFDM useful symbol | 1 / subcarrier spacing | 1 / 15 kHz = 66.67 us |
| OFDM total symbol | useful + cyclic prefix | about 71.4 us at 15 kHz |
| Symbols per subframe | subframe duration / total symbol | 1 ms / 71.4 us = 14 |
| Resource block | 12 subcarriers x 15 kHz | 180 kHz |
| OFDM bit rate | subcarriers x bits per subcarrier x symbols per second | before coding |
| Processing gain | chip rate / information rate | 3.84 Mcps / 12.2 kbps = 315 |
| Processing gain in dB | 10 log10(processing gain) | 25 dB |
| Spectral efficiency | bit rate / bandwidth | bit/s/Hz |

## Worked Examples

### Example 1 - TDM capacity of an E1 (L4 numerical)

**Part (a).** An E1 frame has 32 timeslots of 8 bits, repeated 8,000 times per second. What is the aggregate rate?

```
per slot = 8 x 8,000 = 64,000 bit/s
total    = 32 x 64,000 = 2,048,000 bit/s = 2.048 Mbps
```

**Part (b).** How many voice channels does it carry, and what is the efficiency?

```
voice channels = 32 - 2 (TS0 framing, TS16 signalling) = 30
payload        = 30 x 64 kbps = 1,920 kbps
efficiency     = 1,920 / 2,048 = 93.75 percent
```

**Part (c).** A carrier wants to transport 10 E1s over one link. What rate is needed?

```
10 x 2.048 Mbps = 20.48 Mbps
```

**Answer: 2.048 Mbps, 30 voice channels at 93.75 percent efficiency, 20.48 Mbps for ten E1s.** The 6.25 percent loss is the price of framing and signalling, and it is the same 6.25 percent in every E1 question.

### Example 2 - Statistical multiplexing gain (L4 numerical)

A statistical multiplexer serves 120 users, each with a 64 kbps peak rate, active 12 percent of the time. What is the mean rate, and what is the gain over synchronous TDM?

**Step 1 - synchronous requirement.** Each user gets a fixed 64 kbps slot.

```
synchronous = 120 x 64 kbps = 7,680 kbps = 7.68 Mbps
```

**Step 2 - mean demand under statistical multiplexing.**

```
mean = 120 x 64 x 0.12 = 921.6 kbps
```

**Step 3 - the gain.**

```
7,680 / 921.6 = 8.33x
```

**Step 4 - the honest caveat.** Sizing the link at the mean guarantees heavy loss during simultaneous activity. Binomial statistics say the standard deviation is sqrt(n p (1-p)) = sqrt(120 x 0.12 x 0.88) = 3.56 users, so a design at mean + 3 standard deviations is:

```
(120 x 0.12 + 3 x 3.56) x 64 kbps = (14.4 + 10.7) x 64 = 1,606 kbps
```

**Answer: 7.68 Mbps synchronous, 0.92 Mbps at the mean, about 1.6 Mbps at a three-sigma design, a real gain of roughly 4.8x.** The 8.33x figure is the theoretical ceiling and it is what a careless answer would give; the three-sigma number is what a network engineer would build.

### Example 3 - Guard bands and channel count (L4 numerical)

A 20 MHz block is to be divided into 200 kHz channels, with a 100 kHz guard band at each end and a 20 kHz guard between channels.

**Step 1 - subtract the edge guards.**

```
usable = 20,000 kHz - 2 x 100 kHz = 19,800 kHz
```

**Step 2 - each channel costs its bandwidth plus its inter-channel guard.**

```
per channel = 200 + 20 = 220 kHz
```

**Step 3 - count.**

```
19,800 / 220 = 90 channels
```

**Step 4 - check the waste.**

```
used for channels = 90 x 200 = 18,000 kHz
waste             = 20,000 - 18,000 = 2,000 kHz = 10 percent
```

**Answer: 90 channels, with 10 percent of the block lost to guards.** This is the arithmetic that makes OFDM attractive: remove the inter-channel guards and the same 20 MHz yields 99 channels at 200 kHz.

### Example 4 - OFDM symbol timing and throughput (L4 numerical)

An OFDM system uses 15 kHz subcarrier spacing, a cyclic prefix of 4.7 us, 1,200 occupied subcarriers out of 2,048, 64-QAM modulation and a coding rate of 3/4. Compute the symbol duration, the symbols per 1 ms subframe and the throughput.

**Step 1 - useful symbol duration.**

```
1 / 15,000 = 66.67 us
```

**Step 2 - total symbol duration.**

```
66.67 + 4.7 = 71.37 us
```

**Step 3 - symbols per 1 ms subframe.**

```
1,000 us / 71.37 us = 14.01 -> 14 symbols
```

**Step 4 - bits per symbol before coding.** 64-QAM carries 6 bits per subcarrier.

```
1,200 x 6 = 7,200 bits per OFDM symbol
```

**Step 5 - after coding at 3/4.**

```
7,200 x 0.75 = 5,400 bits per symbol
```

**Step 6 - throughput.**

```
5,400 x 14 symbols per ms = 75,600 bits per ms
= 75.6 Mbps
```

**Answer: 66.67 us useful, 71.37 us total, 14 symbols per subframe, 75.6 Mbps.** Note that the cyclic prefix costs 4.7 / 71.37 = 6.6 percent of the raw capacity, which is the price of multipath immunity.

### Example 5 - Resource block and spectral efficiency (L4 numerical)

An LTE carrier is 20 MHz wide with 100 resource blocks. Each resource block is 12 subcarriers by 14 symbols in a 1 ms subframe, and carries 256-QAM at rate 0.9 with 4 of the 12 subcarriers reserved for reference signals in every symbol.

**Step 1 - resource elements per block per subframe.**

```
12 subcarriers x 14 symbols = 168 resource elements
```

**Step 2 - usable resource elements after reference signals.**

```
168 - (4 x 14) = 168 - 56 = 112 usable per block
```

**Step 3 - bits per usable element at 256-QAM** (8 bits) with rate 0.9:

```
112 x 8 x 0.9 = 806.4 bits per block per ms
```

**Step 4 - total throughput.**

```
806.4 x 100 blocks = 80,640 bits per ms = 80.6 Mbps
```

**Step 5 - spectral efficiency.**

```
80.6 Mbps / 20 MHz = 4.03 bit/s/Hz
```

**Answer: 80.6 Mbps, about 4 bit/s/Hz.** Real 20 MHz LTE delivers 100 to 150 Mbps with MIMO, because spatial layers multiply the figure; without MIMO the number above is the ceiling.

### Example 6 - CDMA processing gain and capacity (L4 numerical)

A WCDMA carrier runs at 3.84 Mcps and serves voice at 12.2 kbps with a required Eb/N0 of 5 dB. Compute the processing gain, the maximum number of users at that threshold, and the users at a realistic 60 percent load.

**Step 1 - processing gain.**

```
3.84 x 10^6 / 12,200 = 314.8 -> about 315
```

**Step 2 - in decibels.**

```
10 log10(315) = 24.98 dB -> about 25 dB
```

**Step 3 - users from the pole capacity.** Ignoring other-cell interference and voice activity:

```
users = processing gain / (Eb/N0 as a linear ratio)
5 dB = 10^0.5 = 3.162
users = 315 / 3.162 = 99.6 -> about 99
```

**Step 4 - at 60 percent load.**

```
99 x 0.60 = 59 users
```

**Answer: 25 dB of processing gain, a pole capacity of about 99 voice users, and about 59 at a 60 percent load.** This is why CDMA systems are described as interference-limited rather than bandwidth-limited: capacity is a load target, not a hard number.

### Example 7 - WDM channel count (L4 numerical)

A C-band system uses the window 1530 to 1565 nm on the 100 GHz grid. How many channels fit, and how many at 50 GHz?

**Step 1 - window width.**

```
1565 - 1530 = 35 nm
```

**Step 2 - spacing conversion at 1550 nm.**

```
100 GHz = 0.8 nm
50 GHz  = 0.4 nm
```

**Step 3 - channel count.**

```
100 GHz: 35 / 0.8 = 43.75 -> 43 channels
50 GHz:  35 / 0.4 = 87.5  -> 87 channels
```

**Step 4 - reserve the edges.** Keeping 0.8 nm of margin at each end:

```
100 GHz: (35 - 1.6) / 0.8 = 41.75 -> 41 channels
```

**Answer: 43 channels at 100 GHz or 87 at 50 GHz in theory, about 41 usable with edge margin.** At 100 Gbps per channel the 50 GHz grid is a 8.7 Tbps fibre, which is the arithmetic behind every long-haul capacity claim.

## Exam Traps and Common Mistakes

- **Confusing TDM with TDMA.** TDM multiplexes channels on a point-to-point link; TDMA arbitrates users on a shared radio channel. Same time slicing, different problem.
- **Saying an E1 has 32 voice channels.** It has 32 timeslots and 30 voice channels, because TS0 is framing and TS16 is signalling.
- **Treating WDM as a different physics.** WDM is FDM at optical frequencies. Any conceptual difference you claim must be about components (lasers, filters, amplifiers), not about the principle.
- **Forgetting that 100 GHz equals 0.8 nm.** Without that conversion, no WDM channel-count question can be answered.
- **Saying OFDM subcarriers do not overlap.** Their spectra *do* overlap; orthogonality is what stops them interfering. The distinction is exactly what the question tests.
- **Confusing the cyclic prefix with a guard band.** The prefix is time-domain repetition inside a symbol; a guard band is unused frequency between channels.
- **Using 15 kHz subcarrier spacing for all of 5G.** 5G scales it to 30, 60 and 120 kHz; at 120 kHz the useful symbol is 1 / 120,000 = 8.33 us.
- **Saying SC-FDMA is used because it is faster.** It is used because it has a lower peak-to-average power ratio, which suits a handset amplifier. It is generally slower than OFDMA for the same bandwidth.
- **Attributing spectrum licensing in India to TRAI.** TRAI recommends; the WPC under DoT administers and licenses.
- **Saying TDD needs no guard period.** It needs a guard period between uplink and downlink, and network-wide frame synchronisation, or base stations interfere with each other.
- **Claiming CDMA capacity is fixed by the processing gain.** Processing gain gives the pole capacity; the usable capacity is a load fraction of it, reduced further by other-cell interference.
- **Confusing diversity with multiplexing.** Diversity sends the same data over independent paths for reliability; spatial multiplexing sends different data for capacity. Both use multiple antennas.

## Summary

Multiplexing shares a link; multiple access shares a medium among users. FDM divides frequency with guard bands, TDM divides time (synchronous or statistical), WDM is FDM in optics, and OFDM divides frequency into orthogonal subcarriers with a cyclic prefix so that neither guard bands nor multipath echoes cost much. FDMA, TDMA, CDMA and OFDMA are the multiple-access counterparts, and CDMA's tolerance comes from processing gain (chip rate over information rate, about 25 dB for WCDMA voice). FDD separates directions by frequency and TDD by time, with TDD offering adjustable asymmetry and channel reciprocity at the cost of synchronisation. Spectrum is allocated internationally by the ITU, administered nationally by the WPC under DoT in India, and either licensed at auction or de-licensed with power limits. Equalisation, diversity, interleaving and coding are the four answers to fading, and each targets a different impairment.

## Practical Takeaways

- E1: 32 timeslots, 30 voice channels, 2.048 Mbps, 93.75 percent payload efficiency.
- Guard bands are waste; orthogonality is how OFDM avoids that waste.
- 15 kHz spacing gives a 66.67 us useful symbol, about 71.4 us with prefix, 14 symbols per millisecond.
- A resource block is 180 kHz: 12 subcarriers by 15 kHz.
- Processing gain = chip rate / information rate; WCDMA voice is about 315, or 25 dB.
- TDD gives reciprocity and asymmetric slots; FDD gives simpler wide-area planning.
- India is ITU Region 3; the WPC under DoT licenses; TRAI only recommends.
- Equalisation for delay spread, diversity for deep fades, interleaving for bursts, coding for residual errors.
- Diversity repeats data; spatial multiplexing sends different data. Do not mix them up.

## Chapter Quiz



**Q1.** An E1 frame carries 32 timeslots of 8 bits at 8,000 frames per second. The number of voice channels available is:

A) 32

B) 31

C) 30

D) 24

**Answer: C** TS0 carries framing and TS16 carries signalling, leaving 30.

**Q2.** At 15 kHz subcarrier spacing with a 4.7 us cyclic prefix, the number of OFDM symbols in a 1 ms subframe is:

A) 7

B) 12

C) 14

D) 28

**Answer: C** Total symbol duration is about 71.37 us, and 1,000 / 71.37 = 14.01.

**Q3.** WCDMA runs at 3.84 Mcps and carries a 12.2 kbps voice channel. The processing gain is closest to:

A) 25

B) 100

C) 315

D) 3,150

**Answer: C** 3.84 x 10^6 / 12,200 = 314.8, which is about 25 dB.

**Q4.** Which duplexing scheme allows a base station to estimate the downlink channel from uplink measurements?

A) FDD

B) TDD

C) both equally

D) neither

**Answer: B** TDD uses the same frequency in both directions, so the channels are reciprocal. FDD does not.

**Q5.** In India, spectrum licensing and band-plan administration is the responsibility of:

A) TRAI

B) the WPC under DoT

C) the ITU

D) the operator's vendor

**Answer: B** TRAI recommends on pricing and policy; the Wireless Planning and Coordination wing administers and licenses.

## Exercises

1. Compute the aggregate bit rate and payload efficiency of a T1 (24 timeslots, 8 bits, 8,000 frames per second, one framing bit per frame). **Answer: 24 x 64 kbps + 8 kbps = 1.544 Mbps; payload 1.536 Mbps, so 99.5 percent.**
2. A 10 MHz block is divided into 100 kHz channels with a 50 kHz guard at each end and a 10 kHz inter-channel guard. How many channels? **Answer: (10,000 - 100) / 110 = 90 channels.**
3. An OFDM system uses 30 kHz spacing and a 2.4 us prefix with 600 occupied subcarriers at 16-QAM, rate 2/3. Compute the throughput. **Answer: useful 33.33 us, total 35.73 us, 28 symbols per ms; 600 x 4 x 0.667 = 1,600 bits per symbol; 1,600 x 28 = 44.8 Mbps.**
4. A statistical multiplexer serves 60 users at 128 kbps with 20 percent activity. Compute synchronous and mean rates, and the gain. **Answer: 7.68 Mbps synchronous, 1.536 Mbps mean, 5x.**
5. A C-band system uses 1530 to 1565 nm with 50 GHz spacing. How many channels at 100 Gbps each, and what total capacity? **Answer: about 87 channels, 8.7 Tbps.**
6. Explain in under 120 words why OFDM needs no inter-carrier guard bands while FDM does.
7. A rural operator has unpaired spectrum and asymmetric traffic (heavy downlink). Which duplexing scheme, and name two consequences for network planning.
8. Match each impairment to its mitigation and justify in one line: (a) delay spread, (b) deep fade, (c) burst error, (d) residual error.

## Next

Block 4 is complete. Chapter 12 opens Wireless Technologies with the cellular concept, frequency reuse arithmetic, the GSM architecture and its channel structure, and the WCDMA system that this chapter's processing gain makes readable.
