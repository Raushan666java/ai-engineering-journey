---
title: "10 - Signals, Noise and Modulation"
sidebar_label: "ch10 - Signals and Modulation"
description: "Analogue and digital signals, dB and noise, sampling and PCM, AM and FM, ASK/FSK/PSK/QAM, and Shannon capacity - the numerical core of the Basic Telecommunications block."
---

# 10 - Signals, Noise and Modulation

## Learning Objectives

By the end of this chapter you should be able to:

1. Describe a signal in the time and frequency domains and state its bandwidth.
2. Convert between power ratios and decibels (dB, dBm, dBW) quickly and correctly.
3. Name the three noise types, write the thermal noise formula, and compute a cascaded noise figure.
4. Apply the Nyquist sampling theorem, choose a sampling rate, and predict the alias frequency when it is violated.
5. Compute PCM bit rate and quantisation SNR using 6.02n + 1.76 dB, and invert the formula for a target SNR.
6. Compute AM modulation index, sideband power, efficiency and bandwidth, and apply Carson's rule to FM.
7. Convert between bits per symbol and symbol rate for ASK, FSK, BPSK, QPSK and 16/64/256-QAM, and read a constellation.
8. Use the Shannon-Hartley theorem to find capacity and to judge whether a scheme fits a channel.

## Introduction

Basic Telecommunications carries 15 percent of the BSNL SET paper, which is 24 questions out of 200. It is the most numerical block on the paper. In other blocks you can often reason to an answer from a definition; here you either know that FM bandwidth is 2(df + fm) or you do not, and general knowledge will not rescue you.

The arithmetic is school level: multiplication, division, logarithms, and about twenty formulas. The difficulty is threefold. First, **formula selection** - the paper mixes similar-looking quantities, so an AM question and an FM question can arrive with the same two numbers and different answers. Second, **unit discipline** - bits per second versus symbols per second, Hz versus kHz, dB versus dBm. Third, **constant recall** - 6.02n + 1.76, 8000 samples/s, 64 kbps, 2.048 Mbps, log2(1000) = 9.97. These turn a two-minute question into a ten-second one.

The marking scheme rewards that discipline. Each question is 1 mark and a wrong answer costs 0.25, so blind guessing on 8 questions has an expected value near zero. The gain comes entirely from converting "I can almost do this" into "I can do this in 40 seconds and I know it is right". This block also supplies the vocabulary the wireless block assumes: if you cannot move between bit rate, symbol rate and bandwidth here, ch12 and ch13 become memorisation.

## Prerequisites

- **Powers of two:** 2^4 = 16, 2^6 = 64, 2^8 = 256, 2^10 = 1024. Needed instantly for QAM.
- **Logarithms:** log10(2) = 0.301 and log2(x) = 3.32 x log10(x). Anchors: log2(100) = 6.64, log2(1000) = 9.97.
- **Sines as building blocks:** you need only that a sum of sinusoids is a signal, and that multiplying two sinusoids gives sum and difference frequencies.
- **Electrical units:** volt, ampere, watt, ohm, hertz, second, and P = V^2 / R.
- **Ratio arithmetic:** modulation index, efficiency and roll-off are all plain ratios.

## Key Terminology

| Term | Meaning |
|---|---|
| Signal | A physical quantity that varies with time and carries information |
| Bandwidth | The range of frequencies a signal occupies, or a channel passes; in Hz |
| Baseband | The signal in its original band near 0 Hz, before a carrier is applied |
| Passband | The band after modulation, centred on the carrier fc |
| dB | Ten times the base-10 log of a power ratio; a relative unit |
| dBm | Power relative to 1 mW: 10 log10(P / 1 mW); an absolute unit |
| Thermal noise | Random noise from electron motion in a conductor; N = kTB |
| Noise figure | SNR degradation caused by a component; F = SNRin / SNRout |
| Sampling | Taking snapshots at intervals Ts = 1/fs |
| Aliasing | A high frequency appearing at a false low frequency because fs was too low |
| Quantisation | Rounding each sample to one of 2^n levels |
| Companding | Compressing large amplitudes and expanding small ones before transmission |
| Modulation index | AM: m = Vm/Vc. FM: beta = deviation / modulating frequency |
| Constellation | A plot of the allowed symbol states in the I-Q plane |

## Theory

### 10.1 Analogue and digital signals

An **analogue** signal varies continuously in both amplitude and time: microphone voltage is defined at every instant and takes any value in a range. A **digital** signal takes one of a finite set of values and changes only at defined instants. A third category, the discrete-time analogue signal, appears in sampling theory - samples discrete in time but still continuous in amplitude - and PCM makes the amplitude discrete as well.

The practical difference matters for three reasons. **Regeneration:** analogue noise accumulates and cannot be removed, whereas a digital signal only needs to be recognised as a 0 or a 1 at each decision instant, so it can be regenerated exactly at every repeater. **Multiplexing and switching:** digitised streams can be time-interleaved and switched by memory, far cheaper than handling analogue channels in the frequency domain. **Error control:** digital systems can detect and correct errors with coding; analogue systems cannot.

### 10.2 Time domain and frequency domain

The same signal has two equivalent descriptions: amplitude against time, and amplitude against frequency. Neither holds more information, but each answers different questions. The time domain shows what a scope displays and where a pulse edge falls; the frequency domain shows how much spectrum the signal occupies and whether it fits a channel.

The key intuition is reciprocity: a signal narrow in time is wide in frequency, and vice versa. A very short pulse has a broad spectrum; a pure sine wave lasting forever is a single spectral line of zero width. Practical signals are finite in both, and that width is what bandwidth measures.

### 10.3 Bandwidth and spectrum

Bandwidth has three meanings in telecom, and questions exploit the overlap:

1. **Signal bandwidth** - the width the signal occupies. An AM signal with a 5 kHz tone occupies 10 kHz.
2. **Channel bandwidth** - the width allocated to one channel, for example 200 kHz per GSM carrier or 20 MHz per LTE carrier.
3. **Minimum (Nyquist) bandwidth** - the smallest channel that carries a symbol rate Rs without intersymbol interference: Rs in passband, Rs/2 in baseband.

The **spectrum** is the whole picture of what occupies which frequencies, usually a regulatory allocation chart such as 935-960 MHz for GSM downlink in India. Two derived quantities appear constantly. **Spectral efficiency** is bit rate divided by bandwidth in bit/s/Hz - 64-QAM at 30 Mbit/s in 5 MHz is 6 bit/s/Hz (L4 numerical). **Occupied bandwidth** is the width holding 99 percent of the power, which is what regulators police.

### 10.4 Fourier intuition without the maths

You do not need to evaluate an integral. The usable statements are:

- **Every practical signal is a sum of sinusoids.** A periodic signal is a fundamental plus harmonics: a square wave of frequency f contains f, 3f, 5f, 7f and so on, with falling amplitude.
- **Sharp edges need high frequencies.** A perfect square wave has infinitely fast transitions and needs infinitely many harmonics. Truncate them and the edges round off - which is why cable length limits rise time.
- **Multiplication shifts spectrum.** Multiplying a signal by a carrier moves it up to sit around the carrier. This one sentence is the whole principle of modulation, and multiplying cosines at f1 and f2 gives components at f1 + f2 and f1 - f2, which is where AM sidebands come from.
- **A band-limited signal cannot change instantaneously** - the time-domain face of the sampling theorem.

One consequence to memorise: a baseband signal occupying 0 to fm, multiplied by a carrier at fc, occupies fc - fm to fc + fm. The width doubles from fm to 2fm, and every AM bandwidth result follows from that.

### 10.5 Signal power and the dB family (L4 numerical)

Power ratios multiply along a chain, which is awkward; in dB they add. That is the entire reason for the unit.

- **dB (relative):** ratio_dB = 10 log10(P2 / P1)
- **dBm (referred to 1 mW):** P_dBm = 10 log10(P / 1 mW)
- **dBW (referred to 1 W):** P_dBW = P_dBm - 30
- **Voltage ratios:** 20 log10(V2 / V1) at equal resistance, because power goes as voltage squared

Anchors to memorise: 2 is 3 dB, 4 is 6 dB, 10 is 10 dB, 100 is 20 dB, 1000 is 30 dB, 0.5 is -3 dB. In absolute terms: 1 mW = 0 dBm, 10 mW = 10 dBm, 1 W = 30 dBm, 10 W = 40 dBm, 1 uW = -30 dBm, 1 pW = -90 dBm. A sensitivity of -100 dBm is 10^-13 W, that is 0.1 pW; in dBm it is easy to add gains and losses along a chain, whereas in watts the same number invites an order-of-magnitude error.

### 10.6 Noise: thermal, shot and interference (L4 numerical)

**Thermal (Johnson) noise** comes from random electron motion in any conductor above absolute zero. It is present in every resistor, white up to very high frequencies, and its available power is

    N = k x T x B

with k = 1.38 x 10^-23 J/K, T in kelvin and B in Hz. At the reference temperature T0 = 290 K the spectral density kT is about 4 x 10^-21 W/Hz, or -174 dBm/Hz. A 1 MHz channel at 290 K therefore carries about -114 dBm of thermal noise.

**Shot noise** arises where charge crosses a barrier as discrete carriers - a photodiode, a junction, a vacuum tube. Its power is proportional to average current and it is also white; in optical links it is often the dominant limit.

**Interference** is not random in origin: it is another signal. Co-channel interference comes from reuse of the same frequency; adjacent-channel interference comes from a neighbour's spectrum spilling over. Interference is why cellular systems plan reuse distance and why filters have roll-off, and unlike thermal noise it can sometimes be cancelled, scheduled around, or reduced by antenna pattern.

**Signal-to-noise ratio** is SNR_dB = 10 log10(S/N). **Noise figure** measures SNR degradation with input noise at the reference temperature: F = SNR_in / SNR_out and NF = 10 log10 F. An ideal amplifier has F = 1 (0 dB); a real LNA might be 1 dB, a mixer 10 dB, a lossy cable equal to its loss in dB.

**Cascaded noise figure (Friis):**

    F_total = F1 + (F2 - 1)/G1 + (F3 - 1)/(G1 x G2) + ...

The first stage dominates, which explains the front-end rule: put a low-noise amplifier first, before any lossy element, because later noise contributions are divided by the gain ahead of them.

### 10.7 Sampling theorem and aliasing (L4 numerical)

The **Nyquist-Shannon theorem** states that a signal containing no frequency above fmax can be reconstructed exactly from samples taken at

    fs >= 2 x fmax

The rate 2 x fmax is the Nyquist rate and fs/2 is the Nyquist (folding) frequency. Sampling faster is oversampling; sampling slower destroys information irreversibly.

**Why:** sampling multiplies the signal by an impulse train, which replicates the spectrum at every multiple of fs. The replicas sit at 0, +/-fs, +/-2fs and so on. If the original band 0 to fmax is wider than fs/2, adjacent replicas overlap and the overlap cannot be undone.

**Aliasing arithmetic:** a component at f sampled at fs appears at f_alias = |f - k x fs|, choosing the integer k that lands the result in 0 to fs/2. A 3 kHz tone sampled at 5 kHz appears at 2 kHz and is indistinguishable from a genuine 2 kHz tone. No filter after the sampler can remove it, which is why the anti-alias filter sits **before** the sampler.

**The voice case:** speech is band-limited to 300-3400 Hz, so fmax = 3.4 kHz, the Nyquist rate is 6.8 kHz, and ITU-T uses 8000 samples/s. The extra 1.2 kHz is guard band for the finite roll-off of real filters. The sampling interval is 1/8000 s = 125 us, and that one number drives every PCM calculation in the exam.

```mermaid
flowchart LR
    A["Analogue input<br/>300-3400 Hz"] --> B["Anti-alias LPF<br/>cutoff 3.4 kHz"]
    B --> C["Sampler<br/>8000 samples/s"]
    C --> D["Quantiser<br/>2^n levels"]
    D --> E["Encoder<br/>n bits per sample"]
    E --> F["Line coder<br/>HDB3 / AMI"]
    F --> G["Channel"]
    G --> H["Regenerator"]
    H --> I["Decoder"]
    I --> J["Reconstruction LPF"]
    J --> K["Analogue output"]
```

The order matters: filter, sample, quantise, encode, line-code. Questions often ask what happens if the filter is omitted (aliasing) or whether sampler and quantiser can be swapped (they cannot - a value must be sampled before it can be quantised).

### 10.8 Quantisation and quantisation noise (L4 numerical)

A quantiser maps an amplitude range of 2V (from -V to +V) onto 2^n levels, so the step size is delta = 2V / 2^n = 2V / L with L = 2^n. Each sample is rounded to the nearest level, so the error is at most delta/2. Modelling the error as uniform over +/- delta/2 gives noise power

    Nq = delta^2 / 12

For a full-scale sinusoid of amplitude V, signal power is V^2/2 and the ratio works out to the classic result

    SQNR_dB = 6.02 n + 1.76

Read it as: **each bit buys about 6 dB**. Eight bits give 49.9 dB, twelve give 74.0 dB, sixteen give 98.1 dB. This is the most examined formula in the block, and the most often misremembered as 6n. The constant 1.76 comes from the crest factor of a sine wave (10 log10 1.5 = 1.76); a signal with a higher crest factor, such as speech, gets less in practice, which is why companding exists.

Quantisation noise is spread roughly uniformly across 0 to fs/2, so sampling faster spreads the same noise power over a wider band and reduces the in-band part after the reconstruction filter - the mechanism behind oversampling converters.

### 10.9 PCM bit rate arithmetic (L4 numerical)

Pulse Code Modulation is sampling, quantising and encoding, in that order. The bit rate is

    Rb = fs x n

For standard telephony, fs = 8000 and n = 8: Rb = 8000 x 8 = 64,000 bit/s = 64 kbps. That 64 kbps channel is the DS0 of the digital hierarchy, and everything above it is a multiple.

**E1 (ITU-T G.704, used in India):** 32 timeslots of 8 bits at 8000 frames per second gives 32 x 8 x 8000 = 2,048,000 bit/s = 2.048 Mbps. TS0 carries framing and alarms, TS16 carries signalling, leaving 30 voice channels and a payload of 30 x 64 = 1920 kbps; the remaining 128 kbps is overhead. The frame lasts 125 us, exactly the sampling interval, because one frame carries one sample of every channel.

**T1 (North America):** 24 channels plus one framing bit per frame gives (24 x 8 + 1) x 8000 = 1,544,000 bit/s.

Given a total rate and asked for channels, divide and subtract overhead; given channels and asked for the rate, multiply and add overhead. Both directions appear.

### 10.10 Companding: A-law and mu-law (awareness level)

Uniform quantisation gives equal steps, so small signals get poor SNR: a signal 40 dB below full scale loses 40 dB of SQNR. Speech spends most of its time at low amplitude, so uniform PCM sounds noisy in quiet passages.

**Companding** (compress plus expand) passes the signal through a non-linear curve before quantisation that boosts small amplitudes and attenuates large ones, with the inverse applied at the receiver. The result is roughly constant SNR in dB across the dynamic range, at the cost of coarser resolution for large signals - an acceptable trade, since large signals already have margin.

Both curves are specified in ITU-T G.711:

| Law | Region | Parameter | Notes |
|---|---|---|---|
| A-law | Europe, India, most of the world | A = 87.6 | Linear segment for small signals, log above |
| mu-law | North America, Japan | mu = 255 | Fully logarithmic |

Both run at 8 bits and 8000 samples/s for 64 kbps, and both give roughly 38-40 dB SNR over a wide range, comparable to about 12-bit uniform PCM. They are not bit-compatible, so a gateway between them must transcode - a real source of delay and cost in international voice. Anchors for the exam: G.711, 8 kHz x 8 bit = 64 kbps, A-law in India, mu-law in North America.

### 10.11 Line coding (awareness level)

Line coding maps bits onto voltage or light levels for the medium. The exam expects recognition, not design.

| Code | Rule | Property |
|---|---|---|
| NRZ | 1 high, 0 low for the whole bit | Simple, DC component, no self-clocking |
| RZ | Returns to zero mid-bit | Self-clocking, needs more bandwidth |
| Manchester | Mid-bit transition; direction encodes the bit | Self-clocking, DC-free, double bandwidth |
| AMI | 1 alternates +V / -V, 0 is zero | DC-free, long zero runs lose timing |
| HDB3 | AMI with violations breaking runs of four zeros | DC-free and self-clocking; used for E1 |
| 2B1Q | Two bits to one of four levels | Halves the symbol rate; used in ISDN and HDSL |

Two properties are asked repeatedly. **DC balance** matters because transformers and AC-coupled equipment cannot pass DC, and a DC offset wastes power. **Self-clocking** matters because the receiver recovers timing from the data itself, and long runs of identical symbols starve the clock recovery circuit. HDB3 exists to fix exactly that weakness in AMI.

### 10.12 Analogue modulation: AM (L4 numerical)

Amplitude modulation varies carrier amplitude in step with the message:

    s(t) = Ac [1 + m cos(2 pi fm t)] cos(2 pi fc t)

where **m = Vm / Vc** is the modulation index. Expanding the product gives three components: the carrier at fc with amplitude Ac, and two sidebands at fc +/- fm, each with amplitude m x Ac / 2.

**Bandwidth:** the sidebands sit fm above and below the carrier, so BW_AM = 2 x fm. A 5 kHz tone gives 10 kHz regardless of carrier frequency.

**Power**, with carrier power Pc:

    P_total = Pc (1 + m^2 / 2)
    P_sidebands = Pc x m^2 / 2
    Efficiency = m^2 / (2 + m^2)

At m = 1 the efficiency is 1/3 = 33.3 percent: two-thirds of the power sits in a carrier that carries no information. That is why single-sideband exists - it removes the carrier and one sideband, cutting bandwidth to fm and putting all power into information.

**Overmodulation:** if m > 1 the envelope crosses zero and the carrier phase reverses, producing distortion that a simple envelope detector cannot recover. Broadcast AM is held below m = 1, typically 0.8 to 0.9 for headroom. Variants: DSB-SC suppresses the carrier and needs coherent detection; SSB keeps one sideband; VSB keeps a vestige of the second, which is why analogue television used it.

### 10.13 FM and Carson's rule (L4 numerical)

Frequency modulation varies instantaneous frequency: f(t) = fc + df cos(2 pi fm t), where **df** is peak deviation. Two quantities describe the signal:

    beta = df / fm
    Carson BW = 2 (df + fm) = 2 fm (beta + 1)

**Carson's rule** contains about 98 percent of the power and is what the exam wants. Note the structure: twice the sum, not twice the deviation alone, and not twice the modulating frequency. beta much less than 1 is narrowband FM, with bandwidth about 2fm, the same as AM. beta much greater than 1 is wideband FM.

Broadcast FM uses df = 75 kHz and fm up to 15 kHz, so beta = 5 and Carson gives 2(75 + 15) = 180 kHz; the 200 kHz channel spacing leaves room for that plus guard band.

**Why FM resists noise:** the information is in the frequency, so the receiver's limiter discards amplitude noise entirely, and output SNR improves roughly as 3 beta^2 (beta + 1) for high beta. Widening the deviation buys noise immunity at the price of bandwidth - the classic bandwidth-for-SNR trade. AM cannot make that trade because its information is in the amplitude, which is exactly what noise attacks. FM also has a threshold effect: below roughly 10 dB input CNR the output SNR collapses abruptly, which is why FM links are designed with margin and why cellular systems ultimately chose linear digital modulation.

### 10.14 Digital modulation: ASK, FSK, PSK (L4 numerical)

| Scheme | Parameter varied | Bits per symbol (binary) | Notes |
|---|---|---|---|
| ASK / OOK | Amplitude | 1 | Simple, poor in fading; optical and RFID |
| FSK | Frequency | 1 (M-ary possible) | Constant envelope, robust |
| BPSK | Phase, 2 states | 1 | Most robust PSK, 180 deg separation |
| QPSK | Phase, 4 states | 2 | Same bandwidth as BPSK, double the rate |
| 8-PSK | Phase, 8 states | 3 | 45 deg separation, diminishing returns |
| 16-QAM | Amplitude and phase | 4 | Standard workhorse |
| 64-QAM | 64 states | 6 | Needs good SNR |
| 256-QAM | 256 states | 8 | High SNR only |

For an M-ary scheme, n = log2(M) bits per symbol and Rb = Rs x n. Bandwidth is set by the **symbol rate**, not the bit rate:

    B_min = Rs   (passband, ideal Nyquist filtering)
    B = Rs (1 + alpha)   (practical raised-cosine roll-off)

This is the central insight of the block: doubling the constellation size doubles the bit rate in the same bandwidth, but costs roughly 3 to 4 dB more SNR per step for the same error rate.

**ASK** is AM with a digital message; on-off keying is the binary case. It is spectrally inefficient and fragile in fading, but trivially simple, which is why it survives in optical links and cheap RFID. **FSK** shifts the carrier between frequencies; the constant envelope allows a saturated class C amplifier and makes it insensitive to amplitude distortion. Binary FSK needs at least 1/(2T) separation for orthogonality, and MSK is the case with separation exactly half the bit rate - GMSK, its Gaussian-filtered form, is what GSM uses.

**BPSK and QPSK** encode phase. BPSK uses 0 and 180 deg; QPSK uses 0, 90, 180, 270. QPSK gives the same bit error performance as BPSK at the same Eb/N0 while doubling throughput in the same bandwidth, which is why it is the default for satellite links and control channels.

### 10.15 QAM and constellation diagrams (L4 numerical)

QAM combines amplitude and phase on two orthogonal carriers, I (in-phase) and Q (quadrature):

    s(t) = I cos(2 pi fc t) - Q sin(2 pi fc t)

Any point (I, Q) is reachable, so 16-QAM is a 4 x 4 grid, 64-QAM an 8 x 8 grid, 256-QAM a 16 x 16 grid. Each point is one symbol carrying n bits, with M = 2^n.

Reading a constellation: **distance from the origin** is that symbol's amplitude; **angle** is its phase; **minimum distance between adjacent points** sets noise immunity; **decision regions** are the Voronoi cells, so the receiver picks the nearest point and a noise vector that crosses a boundary causes an error. For the same average power, more points means a denser grid, smaller minimum distance, and more errors at a given SNR.

Practical constraints: 256-QAM needs high SNR, low phase noise, a linear amplifier and accurate channel estimation. It appears in fixed broadband, short-range Wi-Fi and DOCSIS, not at the cell edge. Adaptive modulation and coding - QPSK at the edge, 256-QAM near the base station - is the standard response.

### 10.16 Eb/N0 and bit error rate intuition

**Eb/N0** is energy per bit over noise spectral density. It is the fundamental figure of merit because it normalises away bandwidth and rate: two systems with the same Eb/N0 have the same BER whatever their speed or channel width.

    Eb/N0 = (S/N) x (B/Rb)
    Eb/N0 (dB) = SNR (dB) + 10 log10(B / Rb)

Approximate Eb/N0 for BER = 10^-5, coherent detection, no coding:

| Scheme | Eb/N0 (approx) |
|---|---|
| BPSK | 9.6 dB |
| QPSK | 9.6 dB |
| 16-QAM | 13.4 dB |
| 64-QAM | 17.5 dB |
| 256-QAM | about 21.5 dB |

The pattern: BPSK and QPSK are equal, and each fourfold increase in constellation size costs roughly 4 dB. That is why cell edges use QPSK and cell centres use 256-QAM, and why more bits per symbol is never free. The waterfall is steep - a 1 dB improvement can drop BER by an order of magnitude - so link budgets are computed in fractions of a dB, and coding shifts the whole curve left by several dB at the cost of rate.

### 10.17 Shannon-Hartley capacity (L4 numerical)

Shannon's theorem gives the maximum error-free rate over a band-limited AWGN channel:

    C = B x log2(1 + S/N)

with C in bit/s, B in Hz and S/N a **linear** power ratio. It is an upper bound: no scheme exceeds it, and turbo and LDPC codes approach it within a fraction of a dB.

- Capacity is **linear in bandwidth** and only **logarithmic in SNR**. Doubling bandwidth doubles capacity; doubling power adds about 1 bit/s/Hz at high SNR.
- Each 3 dB of extra SNR buys about 1 bit/s/Hz at high SNR - the "3 dB per bit" rule of thumb.
- The Shannon limit at low SNR is Eb/N0 = -1.59 dB; no system operates below it, however wide the band.
- Spectral efficiency is C/B = log2(1 + SNR), exactly the ceiling that QAM orders chase.

Typical exam values: 20 MHz at 30 dB SNR gives 20e6 x log2(1001) = about 199 Mbit/s; the same channel at 10 dB gives 20e6 x log2(11) = about 69 Mbit/s. A factor of three for 20 dB of SNR is the logarithm at work, and the paper likes this question.

### 10.18 Where this leads: multiplexing

Everything so far is one signal on one channel. Real networks put many signals on one medium, which is multiplexing: FDM shares frequency, TDM shares time, WDM shares wavelength, OFDM shares a set of orthogonal subcarriers. Chapter 11 builds each of those, then the multiple access variants (FDMA, TDMA, CDMA, OFDMA) and the regulatory layer of spectrum management. Read it immediately after this chapter, while the bandwidth and symbol-rate arithmetic is fresh.

## Worked Examples

### Example 1 - Sampling rate and aliasing

**Problem.** A voice channel is band-limited to 300-3400 Hz. (a) Minimum sampling rate? (b) Why is 8000 Hz used? (c) A 3 kHz tone sampled at 5 kHz - what is reconstructed?

**Step 1.** The highest frequency present is 3400 Hz, so fmax = 3.4 kHz. fs_min = 2 x 3400 Hz = 6800 Hz = 6.8 kHz.

**Step 2.** 8000 Hz leaves 8000 - 6800 = 1200 Hz of guard band, which lets a gradual and cheap anti-alias filter work. Sampling interval = 1/8000 s = 125 us.

**Step 3.** f_alias = |3000 - 5000| Hz = 2000 Hz.

**Answer.** 6.8 kHz; guard band with 125 us per sample; a false 2 kHz tone that cannot be removed after sampling.

### Example 2 - PCM bit rate and E1 capacity

**Problem.** PCM uses 8000 samples/s and 8 bits per sample. (a) One channel's bit rate? (b) E1 with 32 timeslots? (c) Voice channels and payload?

**Step 1.** Rb = 8000 x 8 = 64,000 bit/s = 64 kbps.

**Step 2.** Rb = 32 x 8 x 8000 = 2,048,000 bit/s = 2.048 Mbps. Frame duration = 125 us.

**Step 3.** TS0 is framing and TS16 is signalling, so 30 voice channels. Payload = 30 x 64 kbps = 1920 kbps. Overhead = 2048 - 1920 = 128 kbps, matching two 64 kbps timeslots.

**Answer.** 64 kbps; 2.048 Mbps; 30 channels and 1920 kbps of payload.

### Example 3 - Quantisation SNR and bit count

**Problem.** (a) SQNR of 8-bit PCM? (b) Bits for at least 60 dB? (c) Bit rate at 8 kHz?

**Step 1.** SQNR = 6.02 x 8 + 1.76 = 48.16 + 1.76 = 49.92 dB.

**Step 2.** n = (60 - 1.76)/6.02 = 58.24/6.02 = 9.67. Bits are integers, so round up to 10. Check: 6.02 x 10 + 1.76 = 61.96 dB, which clears 60 dB. Nine bits would give 55.94 dB and fail.

**Step 3.** Rb = 8000 x 10 = 80,000 bit/s = 80 kbps.

**Answer.** 49.92 dB; 10 bits; 80 kbps.

### Example 4 - AM modulation index, power and bandwidth

**Problem.** AM with a 10 V peak carrier, a 6 V peak tone at 5 kHz, fc = 1 MHz, Pc = 100 W. Find m, total power, sideband power, efficiency, bandwidth and sideband frequencies.

**Step 1.** m = Vm/Vc = 6/10 = 0.6. Since m < 1 there is no overmodulation.

**Step 2.** P_total = Pc (1 + m^2/2) = 100 x (1 + 0.18) = 118 W.

**Step 3.** P_sb = 100 x 0.18 = 18 W, that is 9 W per sideband. Efficiency = 18/118 = 0.1525 = 15.25 percent. Check: m^2/(2 + m^2) = 0.36/2.36 = 0.1525.

**Step 4.** BW = 2 fm = 2 x 5 kHz = 10 kHz. Sidebands at 1000 +/- 5 kHz, so 995 kHz and 1005 kHz.

**Answer.** m = 0.6; 118 W total; 18 W in sidebands; 15.25 percent efficient; 10 kHz wide; 995 and 1005 kHz.

### Example 5 - Carson's rule for FM

**Problem.** Broadcast FM with peak deviation 75 kHz and maximum modulating frequency 15 kHz. (a) beta? (b) Carson bandwidth? (c) Classification? (d) Bandwidth for a 3 kHz tone at the same deviation?

**Step 1.** beta = df/fm = 75/15 = 5.

**Step 2.** BW = 2(df + fm) = 2 x (75 + 15) kHz = 180 kHz.

**Step 3.** beta = 5 is much greater than 1, so wideband FM. Narrowband would mean beta < 1 and BW about 2fm.

**Step 4.** At 3 kHz: beta = 75/3 = 25, BW = 2 x (75 + 3) = 156 kHz. The deviation term dominates, so the bandwidth barely falls.

**Step 5.** An AM signal with 15 kHz modulation needs 30 kHz. FM needs six times more, buying roughly 3 beta^2 (beta + 1) = 3 x 25 x 6 = 450, about 26.5 dB of output SNR improvement.

**Answer.** beta = 5; 180 kHz; wideband; 156 kHz for the 3 kHz tone.

### Example 6 - QAM bits per symbol, symbol rate and bandwidth

**Problem.** 64-QAM at 30 Mbit/s with alpha = 0.2. (a) Bits per symbol? (b) Symbol rate? (c) Bandwidth? (d) Spectral efficiency? (e) Same for 256-QAM?

**Step 1.** n = log2(64) = 6 bit/symbol.

**Step 2.** Rs = Rb/n = 30e6/6 = 5e6 symbol/s = 5 Msym/s.

**Step 3.** B = Rs (1 + alpha) = 5e6 x 1.2 = 6 MHz.

**Step 4.** 30 Mbit/s / 6 MHz = 5 bit/s/Hz. The 64-QAM ceiling at high SNR is 6 bit/s/Hz, so the roll-off costs about one bit.

**Step 5.** 256-QAM: n = 8, Rs = 30e6/8 = 3.75 Msym/s, B = 3.75e6 x 1.2 = 4.5 MHz, or 6.67 bit/s/Hz - at roughly 4 dB more Eb/N0 for the same BER.

**Answer.** 6 bit/symbol; 5 Msym/s; 6 MHz; 5 bit/s/Hz; 256-QAM needs 3.75 Msym/s in 4.5 MHz.

### Example 7 - Shannon capacity

**Problem.** A 20 MHz channel with 30 dB SNR. (a) Capacity? (b) Capacity at 10 dB? (c) Can 256-QAM at 200 Mbit/s work at 10 dB?

**Step 1.** 30 dB = 10^(30/10) = 1000 linear.

**Step 2.** C = 20e6 x log2(1001). log2(1001) = 3.32 x 3.0004 = 9.97, so C = 20e6 x 9.97 = 199.4e6 bit/s, about 199 Mbit/s.

**Step 3.** At 10 dB, SNR = 10 and log2(11) = 3.32 x 1.0414 = 3.46, so C = 20e6 x 3.46 = 69.2 Mbit/s.

**Step 4.** At 10 dB the ceiling is 69 Mbit/s, so 200 Mbit/s is impossible whatever the modulation. Even at 30 dB, 200 Mbit/s needs 10 bit/s/Hz, above the 9.97 ceiling - which is why real systems sit just below Shannon.

**Answer.** About 199 Mbit/s; about 69 Mbit/s; no, it exceeds the bound by roughly three times.

### Example 8 - OFDM symbol duration from subcarrier spacing

**Problem.** OFDM with 15 kHz subcarrier spacing, a 4.7 us cyclic prefix, 1200 useful subcarriers and 64-QAM. (a) Useful symbol duration? (b) Total symbol duration? (c) Raw bit rate? (d) Subcarrier slots in 20 MHz?

**Step 1.** Tu = 1/15000 Hz = 66.67 us. Orthogonality requires spacing exactly 1/Tu, so each subcarrier completes a whole number of cycles per symbol and the subcarriers integrate to zero against each other.

**Step 2.** T = Tu + T_cp = 66.67 + 4.7 = 71.37 us. The CP costs 4.7/71.37 = 6.6 percent of the time.

**Step 3.** Symbol rate per subcarrier = 1/71.37 us = 14,011 sym/s. At 6 bits per symbol that is 84.1 kbps, and for 1200 subcarriers 1200 x 84.1 kbps = 100.9 Mbit/s raw.

**Step 4.** 20 MHz / 15 kHz = 1333 slots; using 1200 leaves about 2 MHz for guard band.

**Answer.** 66.67 us; 71.37 us; about 101 Mbit/s raw; 1333 slots.

## Formula Sheet

| Quantity | Formula | Symbols |
|---|---|---|
| Decibel (power) | dB = 10 log10(P2/P1) | same unit for P1, P2 |
| dBm | dBm = 10 log10(P / 1 mW) | P in mW |
| dBW | dBW = dBm - 30 | - |
| Thermal noise | N = k T B | k = 1.38e-23 J/K, T in K, B in Hz |
| Noise density at 290 K | -174 dBm/Hz | kT at T0 |
| SNR | SNR_dB = 10 log10(S/N) | S, N in W |
| Noise figure | F = SNR_in/SNR_out, NF = 10 log10 F | F linear |
| Friis cascade | F = F1 + (F2-1)/G1 + ... | F, G linear |
| Nyquist rate | fs >= 2 fmax | Hz |
| Alias | f_alias = abs(f - k fs) | k lands result in 0..fs/2 |
| Quantisation step | delta = 2V / 2^n | V = peak amplitude |
| Quantisation noise | Nq = delta^2 / 12 | W |
| SQNR | 6.02 n + 1.76 dB | n bits, full-scale sine |
| PCM bit rate | Rb = fs x n | bit/s |
| E1 rate | 32 x 8 x 8000 = 2.048 Mbps | 30 voice channels |
| AM index | m = Vm / Vc | m <= 1 |
| AM bandwidth | BW = 2 fm | Hz |
| AM total power | Pt = Pc (1 + m^2/2) | W |
| AM efficiency | m^2 / (2 + m^2) | ratio |
| FM index | beta = df / fm | dimensionless |
| Carson's rule | BW = 2 (df + fm) | Hz |
| Bits per symbol | n = log2 M | M = constellation size |
| Bit rate from symbols | Rb = Rs log2 M | Rs in sym/s |
| Bandwidth from symbols | B = Rs (1 + alpha) | alpha = roll-off |
| Eb/N0 | Eb/N0 = (S/N)(B/Rb) | linear |
| Shannon capacity | C = B log2(1 + S/N) | bit/s |
| Spectral efficiency | C/B = log2(1 + S/N) | bit/s/Hz |
| OFDM symbol period | Tu = 1 / subcarrier spacing | s |

## Exam Traps and Common Mistakes

1. **Confusing bit rate with baud rate.** They are equal only for binary schemes. At 16-QAM, 2400 baud carries 9600 bit/s.
2. **Using 2fm for FM bandwidth.** That is the AM formula and the narrowband approximation. With a stated deviation, Carson's rule is required, and distractors are built from both.
3. **Dropping the 1.76 constant.** 8-bit PCM is 49.92 dB, not 48.16 dB. Both values appear in the options.
4. **Rounding bits down.** (60 - 1.76)/6.02 = 9.67 means 10 bits. You cannot buy two-thirds of a bit, and 9 bits fails the specification.
5. **Sampling at exactly 2fmax.** The theorem needs fs strictly greater, plus filter guard band. Telephony uses 8 kHz for 3.4 kHz, never 6.8 kHz.
6. **Forgetting the factor of 2 in bandwidth.** A baseband width fm becomes 2fm after AM. Half the marks in this block are lost to a missing 2.
7. **Mixing dB and linear.** Shannon takes a linear ratio: 30 dB must become 1000 before the logarithm. Questions offering both 30 and 1000 are testing this.
8. **Assuming higher-order QAM is always better.** 256-QAM doubles the rate of 16-QAM in the same bandwidth but needs about 8 dB more Eb/N0, so at the cell edge it simply fails.
9. **Thinking a filter after the sampler fixes aliasing.** It cannot. The anti-alias filter must precede the sampler.
10. **Treating dBm as a ratio.** dBm is absolute, dB is relative, and adding 3 dBm to 3 dBm is meaningless.

## Summary

- Signals have equivalent time and frequency descriptions; bandwidth is width in the frequency view, and sharp edges need high frequencies.
- Multiplying by a carrier shifts the spectrum and doubles the width, which is why AM occupies 2fm.
- Decibels turn multiplication into addition: 3 dB doubles, 10 dB is tenfold, 30 dB is a thousandfold. dBm is absolute.
- Thermal noise is kTB, flat in frequency, -174 dBm/Hz at 290 K. Shot noise comes from discrete carriers; interference comes from other signals.
- In a cascade the first stage dominates noise figure, so the LNA goes first.
- Sampling needs fs >= 2 fmax; below that components fold to |f - fs| and are lost. The anti-alias filter precedes the sampler.
- Quantisation noise is delta^2/12, giving SQNR = 6.02n + 1.76 dB; each bit buys 6 dB.
- PCM bit rate is fs x n: 64 kbps telephony, 2.048 Mbps E1 with 30 voice channels. Companding (G.711 A-law or mu-law) equalises SNR across speech dynamics.
- AM: m = Vm/Vc, BW = 2fm, efficiency m^2/(2+m^2), at most 33 percent at m = 1.
- FM: beta = df/fm, Carson BW = 2(df + fm); wideband FM trades bandwidth for large noise immunity.
- Digital: n = log2 M bits per symbol, Rb = Rs x n, and bandwidth follows Rs, not Rb. BPSK and QPSK are equally efficient per bit; QAM trades power for rate.
- Eb/N0 normalises performance; BER falls steeply, and each 4x in constellation size costs roughly 4 dB.
- Shannon: C = B log2(1 + S/N) - linear in bandwidth, logarithmic in SNR, and the hard ceiling for every scheme.

## Practical Takeaways

- **Build a formula card.** One A4 side with every formula above and its units. Rewrite it from memory daily for a week; that alone is worth several marks.
- **Drill the anchors, not the derivations.** 6.02, 1.76, 8000, 125 us, 64 kbps, 2.048 Mbps, 3 dB, 10 dB, log2(1000) = 9.97. Speed comes from these.
- **Check units before arithmetic.** If the answer must be in kHz and you hold Hz, stop and convert. Write units on every line of working, as the worked examples do.
- **Ask "is this a factor-of-two question?"** Bandwidth, sampling and symbol-rate questions almost always hinge on a 2 that candidates drop.
- **Sanity-check magnitudes.** A 20 MHz channel cannot carry 1 Gbit/s at 10 dB SNR; a 64 kbps channel cannot carry 128 kbps. If it looks too good, a ratio is inverted.
- **Keep the dB habit.** Express the whole chain in dB and dBm and add; it is how engineers work and it removes order-of-magnitude errors.
- **Read ch11 in the same sitting.** Multiplexing is applied bandwidth arithmetic, and the two chapters reinforce each other.

## Chapter Quiz

**Q1.** A 12-bit PCM system samples at 8000 samples/s. The bit rate is:

A. 12 kbps
B. 64 kbps
C. 96 kbps
D. 128 kbps

**Answer: C.** Rb = 8000 x 12 = 96,000 bit/s = 96 kbps. Option B is the 8-bit case, the most common wrong answer.

**Q2.** An FM signal has a peak deviation of 25 kHz and a modulating frequency of 5 kHz. Its bandwidth by Carson's rule is:

A. 10 kHz
B. 50 kHz
C. 60 kHz
D. 100 kHz

**Answer: C.** BW = 2(25 + 5) = 60 kHz. Option A is 2fm, option B is 2df alone, option D is 4df.

**Q3.** A 1 MHz channel has an SNR of 20 dB. The Shannon capacity is closest to:

A. 1.0 Mbit/s
B. 3.3 Mbit/s
C. 6.7 Mbit/s
D. 20 Mbit/s

**Answer: C.** 20 dB = 100 linear, so C = 1e6 x log2(101) = 1e6 x 6.66 = 6.66 Mbit/s. Option D treats dB as a linear ratio; B uses log10 instead of log2.

**Q4.** A 16-QAM system transmits 4800 symbols per second. The bit rate is:

A. 4.8 kbps
B. 9.6 kbps
C. 19.2 kbps
D. 76.8 kbps

**Answer: C.** n = log2(16) = 4, so Rb = 4800 x 4 = 19,200 bit/s. Option A ignores the modulation order.

**Q5.** For an AM signal at m = 1, which is correct?

A. Efficiency 50 percent, bandwidth fm
B. Efficiency 33.3 percent, bandwidth 2fm
C. Efficiency 66.7 percent, bandwidth 2fm
D. Carrier power is zero

**Answer: B.** Efficiency = 1/(2+1) = 33.3 percent and two sidebands at fm each give 2fm. The carrier is never removed in conventional AM; that is DSB-SC.

## Exercises

**E1.** A signal is band-limited to 4 kHz and sampled at 10 kHz. (a) Is the theorem satisfied? (b) Sampling interval? (c) Where does a 7 kHz component appear?

*Answer.* (a) Yes, 10 kHz > 8 kHz. (b) 1/10000 = 100 us. (c) |7 - 10| = 3 kHz.

**E2.** A PCM system needs 50 dB SQNR for a full-scale sine. Find the minimum bits and the bit rate at 8 kHz.

*Answer.* n = (50 - 1.76)/6.02 = 8.01, so 9 bits (8 bits gives 49.92 dB, just short; 9 gives 55.94 dB). Rb = 8000 x 9 = 72 kbps.

**E3.** An AM transmitter radiates 50 kW of carrier with m = 0.8. Find total power, sideband power and efficiency.

*Answer.* Pt = 50 x 1.32 = 66 kW; sidebands 16 kW; efficiency 0.32/1.32 = 24.2 percent.

**E4.** An FM transmitter has df = 60 kHz and fm = 12 kHz. Find beta, the Carson bandwidth, and classify it.

*Answer.* beta = 5; BW = 2(60 + 12) = 144 kHz; beta >> 1 so wideband.

**E5.** 256-QAM at 40 Mbit/s with alpha = 0.25. Find the symbol rate, bandwidth and spectral efficiency.

*Answer.* n = 8, Rs = 40e6/8 = 5 Msym/s, B = 5e6 x 1.25 = 6.25 MHz, efficiency = 6.4 bit/s/Hz.

**E6.** A 10 MHz channel carries a 25 dB SNR. Find the capacity and the maximum spectral efficiency.

*Answer.* 25 dB = 316.2; C = 10e6 x log2(317.2) = 10e6 x 8.31 = 83.1 Mbit/s; efficiency 8.31 bit/s/Hz.

**E7.** A 1 dB NF LNA with 15 dB gain feeds a 12 dB NF mixer. Find the overall noise figure.

*Answer.* F1 = 1.259, G1 = 31.6, F2 = 15.85; F = 1.259 + 14.85/31.6 = 1.729, so NF = 2.38 dB.

**E8.** OFDM with 30 kHz spacing, a 2.4 us cyclic prefix and 16-QAM. Find the useful symbol duration, the total duration and the raw rate per subcarrier.

*Answer.* Tu = 1/30000 = 33.33 us; T = 35.73 us; 27,986 sym/s; 16-QAM is 4 bit/symbol, so 111.9 kbps per subcarrier.

## Next

Chapter 11 multiplies this arithmetic: FDM, TDM, WDM and OFDM are four ways of sharing one medium, and each has a bandwidth cost you can now compute. It then moves up a level to multiple access (FDMA, TDMA, CDMA, OFDMA), duplexing (FDD versus TDD and the guard bands each needs), and the regulatory layer - ITU regions, India's WPC under the Department of Telecommunications, licensing versus de-licensing, and the 2.4 and 5 GHz unlicensed bands. Read it next, then attempt the mixed numerical set for the whole block.
