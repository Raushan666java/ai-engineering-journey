"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[93776],{

/***/ 67314
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_digital_logic_13_dac_adc_md_fbe_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-digital-logic-13-dac-adc-md-fbe.json
const site_docs_courses_digital_logic_13_dac_adc_md_fbe_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/digital-logic/13-dac-adc","title":"Chapter 13: Digital-to-Analog and Analog-to-Digital Converters","description":"Prereq: Chapters 1?12 (digital logic fundamentals) ? DACs and ADCs bridge the digital and analog domains.","source":"@site/docs/courses/digital-logic/13-dac-adc.md","sourceDirName":"courses/digital-logic","slug":"/digital-logic/13-dac-adc","permalink":"/ai-engineering-journey/digital-logic/13-dac-adc","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-dac-adc","slug":"/digital-logic/13-dac-adc","title":"Chapter 13: Digital-to-Analog and Analog-to-Digital Converters","sidebar_label":"Chapter 13: Digital-to-Analog and Analog-to-Digital Converters","sidebar_position":13},"sidebar":"course-digital-logic","previous":{"title":"Chapter 12: Hardware Description Languages","permalink":"/ai-engineering-journey/digital-logic/12-hdl"},"next":{"title":"Chapter 14: Timing Analysis","permalink":"/ai-engineering-journey/digital-logic/14-timing-analysis"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/digital-logic/13-dac-adc.md


const frontMatter = {
	id: '13-dac-adc',
	slug: '/digital-logic/13-dac-adc',
	title: 'Chapter 13: Digital-to-Analog and Analog-to-Digital Converters',
	sidebar_label: 'Chapter 13: Digital-to-Analog and Analog-to-Digital Converters',
	sidebar_position: 13
};
const contentTitle = 'Chapter 13: Digital-to-Analog and Analog-to-Digital Converters';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "13.1 The Digital-Analog Interface",
  "id": "131-the-digital-analog-interface",
  "level": 2
}, {
  "value": "13.2 Sampling Theory",
  "id": "132-sampling-theory",
  "level": 2
}, {
  "value": "13.2.1 Nyquist-Shannon Theorem",
  "id": "1321-nyquist-shannon-theorem",
  "level": 3
}, {
  "value": "13.2.2 Anti-Aliasing Filter",
  "id": "1322-anti-aliasing-filter",
  "level": 3
}, {
  "value": "13.3 Quantisation",
  "id": "133-quantisation",
  "level": 2
}, {
  "value": "13.3.1 Quantisation Error",
  "id": "1331-quantisation-error",
  "level": 3
}, {
  "value": "13.3.2 Quantisation Noise",
  "id": "1332-quantisation-noise",
  "level": 3
}, {
  "value": "13.4 DAC Architectures",
  "id": "134-dac-architectures",
  "level": 2
}, {
  "value": "13.4.1 Binary-Weighted Resistor DAC",
  "id": "1341-binary-weighted-resistor-dac",
  "level": 3
}, {
  "value": "13.4.2 R-2R Ladder DAC",
  "id": "1342-r-2r-ladder-dac",
  "level": 3
}, {
  "value": "13.4.3 Sigma-Delta DAC",
  "id": "1343-sigma-delta-dac",
  "level": 3
}, {
  "value": "13.4.4 DAC Comparison",
  "id": "1344-dac-comparison",
  "level": 3
}, {
  "value": "13.5 ADC Architectures",
  "id": "135-adc-architectures",
  "level": 2
}, {
  "value": "13.5.1 Flash ADC",
  "id": "1351-flash-adc",
  "level": 3
}, {
  "value": "13.5.2 Successive Approximation Register (SAR) ADC",
  "id": "1352-successive-approximation-register-sar-adc",
  "level": 3
}, {
  "value": "13.5.3 Pipelined ADC",
  "id": "1353-pipelined-adc",
  "level": 3
}, {
  "value": "13.5.4 Sigma-Delta ADC",
  "id": "1354-sigma-delta-adc",
  "level": 3
}, {
  "value": "13.5.5 ADC Comparison",
  "id": "1355-adc-comparison",
  "level": 3
}, {
  "value": "13.6 Performance Metrics",
  "id": "136-performance-metrics",
  "level": 2
}, {
  "value": "13.6.1 Static Specifications",
  "id": "1361-static-specifications",
  "level": 3
}, {
  "value": "13.6.2 Dynamic Specifications",
  "id": "1362-dynamic-specifications",
  "level": 3
}, {
  "value": "13.7 Interface Circuits",
  "id": "137-interface-circuits",
  "level": 2
}, {
  "value": "13.7.1 Serial Peripheral Interface (SPI) for ADCs",
  "id": "1371-serial-peripheral-interface-spi-for-adcs",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Answers",
  "id": "answers",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-13-digital-to-analog-and-analog-to-digital-converters",
        children: "Chapter 13: Digital-to-Analog and Analog-to-Digital Converters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapters 1?12 (digital logic fundamentals) ? DACs and ADCs bridge the digital and analog domains.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 14 (Timing Analysis) ? understanding mixed-signal timing constraints."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student shall be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify DAC and ADC architectures by speed, resolution, and application"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and analyse R-2R ladder, binary-weighted, and sigma-delta DACs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare flash, SAR, pipelined, and sigma-delta ADC architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate quantisation error, SNR, ENOB, and THD for data converters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyse sampling theory, aliasing, and anti-aliasing filter requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the trade-offs between speed, resolution, and power consumption"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design interface circuits between converters and digital systems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "131-the-digital-analog-interface",
      children: "13.1 The Digital-Analog Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    A[Analog<br>Input] --> AF[Anti-Aliasing<br>Filter]\n    AF --> ADC[ADC]\n    ADC --> DSP[Digital Signal<br>Processing]\n    DSP --> DAC[DAC]\n    DAC --> RF[Reconstruction<br>Filter]\n    RF --> B[Analog<br>Output]\n    CLK[Sample<br>Clock] --> ADC\n    CLK --> DAC\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Continuous"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Discrete"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete-time (sampled)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Amplitude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous-amplitude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantised (finite levels)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Digital"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finite word width, clocked"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "132-sampling-theory",
      children: "13.2 Sampling Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1321-nyquist-shannon-theorem",
      children: "13.2.1 Nyquist-Shannon Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A signal with bandwidth B can be perfectly reconstructed from samples taken at a rate f_s > 2B."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "If f_s = 2B: aliasing occurs (high frequencies fold into the baseband)\nIf f_s > 2B: perfect reconstruction is possible (with an ideal reconstruction filter)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function nyquistRate(bandwidth: number): number {\n    return 2 * bandwidth;\n}\n\n// Example: audio signal with 20 kHz bandwidth\nconsole.log(`Nyquist rate for audio: ${nyquistRate(20000)} Hz`); // 40 kHz\n\n// Aliasing demonstration\nfunction sample(signalFreq: number, sampleFreq: number, duration: number): number[] {\n    const samples: number[] = [];\n    for (let t = 0; t < duration * sampleFreq; t++) {\n        const time = t / sampleFreq;\n        samples.push(Math.sin(2 * Math.PI * signalFreq * time));\n    }\n    return samples;\n}\n\n// A 9 kHz signal sampled at 8 kHz aliases to 1 kHz\nconst aliased = sample(9000, 8000, 0.001);\nconsole.log(`Aliased samples (first 8): ${aliased.slice(0, 8).map(v => v.toFixed(3)).join(', ')}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1322-anti-aliasing-filter",
      children: "13.2.2 Anti-Aliasing Filter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An anti-aliasing filter is a low-pass filter with cutoff at f_s/2. Practical filters have a transition band that limits the usable signal bandwidth."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class AntiAliasFilter {\n    readonly cutoff: number;\n    readonly order: number;\n\n    constructor(cutoff: number, order: number) {\n        this.cutoff = cutoff;\n        this.order = order;\n    }\n\n    attenuation(frequency: number): number {\n        if (frequency <= this.cutoff) return 0;\n        const ratio = frequency / this.cutoff;\n        return 20 * this.order * Math.log10(ratio); // dB\n    }\n}\n\nconst aaFilter = new AntiAliasFilter(20000, 4);\nconsole.log(`Attenuation at 24 kHz: ${aaFilter.attenuation(24000).toFixed(1)} dB`);\n// 4th order Butterworth: 24/20 = 1.2 ? 20?4?log10(1.2) ? 6.3 dB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "133-quantisation",
      children: "13.3 Quantisation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quantisation maps a continuous amplitude to one of 2? discrete levels."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1331-quantisation-error",
      children: "13.3.1 Quantisation Error"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Quantisation step size:  ? = V_ref / 2?\nMaximum quantisation error: ??/2 = ?V_ref / 2???\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function quantisationStep(refVoltage: number, bits: number): number {\n    return refVoltage / (1 << bits);\n}\n\nfunction quantise(signal: number, refVoltage: number, bits: number): { code: number; error: number } {\n    const levels = 1 << bits;\n    const step = refVoltage / levels;\n    const code = Math.round(signal / step);\n    const clampedCode = Math.max(0, Math.min(levels - 1, code));\n    const quantisedVoltage = clampedCode * step + step / 2;\n    return {\n        code: clampedCode,\n        error: quantisedVoltage - signal\n    };\n}\n\nconst result = quantise(2.7, 5.0, 8);\nconsole.log(`2.7 V ? code ${result.code} (${(result.code * 19.53 + 9.77).toFixed(2)} mV), error: ${result.error.toFixed(2)} V`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1332-quantisation-noise",
      children: "13.3.2 Quantisation Noise"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ideal SNR for an N-bit ADC:\nSNR = 6.02?N + 1.76 dB\n\nFor N = 8:  SNR = 49.9 dB\nFor N = 12: SNR = 74.0 dB\nFor N = 16: SNR = 98.1 dB\nFor N = 24: SNR = 146.3 dB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function idealSNR(bits: number): number {\n    return 6.02 * bits + 1.76;\n}\n\n// Effective Number of Bits (ENOB)\nfunction enobFromSNR(snr: number): number {\n    return (snr - 1.76) / 6.02;\n}\n\n// Total Harmonic Distortion + Noise (THD+N)\nfunction thdn(signalPower: number, noisePower: number, distortionPower: number): number {\n    return 10 * Math.log10((noisePower + distortionPower) / signalPower); // dB\n}\n\nfor (const bits of [8, 10, 12, 14, 16, 24]) {\n    console.log(`N=${bits}: SNR = ${idealSNR(bits).toFixed(1)} dB`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "134-dac-architectures",
      children: "13.4 DAC Architectures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1341-binary-weighted-resistor-dac",
      children: "13.4.1 Binary-Weighted Resistor DAC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uses resistors with binary-weighted values (R, 2R, 4R, ..., 2???R)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "V_out = -V_ref ? (b0/2 + b1/4 + ... + b??1/2?)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    VREF[V_ref] --> R1[1R]\n    VREF --> R2[2R]\n    VREF --> R3[4R]\n    VREF --> R4[8R]\n    R1 --> SW1[Switch<br>b0]\n    R2 --> SW2[Switch<br>b1]\n    R3 --> SW3[Switch<br>b2]\n    R4 --> SW4[Switch<br>b3]\n    SW1 --> SUM[Summing<br>Node]\n    SW2 --> SUM\n    SW3 --> SUM\n    SW4 --> SUM\n    SUM --> OPAMP[-<br>Op-Amp]\n    OPAMP --> VOUT[V_out]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class BinaryWeightedDAC {\n    readonly bits: number;\n    readonly refVoltage: number;\n\n    constructor(bits: number, refVoltage: number) {\n        this.bits = bits;\n        this.refVoltage = refVoltage;\n    }\n\n    convert(code: number): number {\n        const maxCode = (1 << this.bits) - 1;\n        const clamped = Math.max(0, Math.min(maxCode, code));\n        return (clamped / maxCode) * this.refVoltage;\n    }\n}\n\nconst dac8 = new BinaryWeightedDAC(8, 5.0);\nconsole.log(`DAC: code 128 ? ${dac8.convert(128).toFixed(3)} V`); // ~2.500 V\nconsole.log(`DAC: code 255 ? ${dac8.convert(255).toFixed(3)} V`); // ~5.000 V\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1342-r-2r-ladder-dac",
      children: "13.4.2 R-2R Ladder DAC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The R-2R ladder uses only two resistor values, making it practical for monolithic integration."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    VREF[V_ref] --> R1a[R]\n    R1a --> N1[Node 1]\n    N1 --> R2a[R]\n    R2a --> N2[Node 2]\n    N2 --> R3a[R]\n    R3a --> N3[Node 3]\n    N1 --> R1b[2R]\n    R1b --> S1[Switch<br>b0]\n    N2 --> R2b[2R]\n    R2b --> S2[Switch<br>b1]\n    N3 --> R3b[2R]\n    R3b --> S3[Switch<br>b2]\n    S1 --> GND[GND]\n    S2 --> GND\n    S3 --> GND\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class R2RLadderDAC {\n    readonly bits: number;\n    readonly refVoltage: number;\n\n    constructor(bits: number, refVoltage: number) {\n        this.bits = bits;\n        this.refVoltage = refVoltage;\n    }\n\n    convert(code: number): number {\n        let vout = 0;\n        for (let i = 0; i < this.bits; i++) {\n            const bit = (code >> (this.bits - 1 - i)) & 1;\n            if (bit) {\n                vout += this.refVoltage / (1 << (i + 1));\n            }\n        }\n        return vout;\n    }\n}\n\nconst r2r = new R2RLadderDAC(8, 5.0);\nconsole.log(`R-2R: code 128 ? ${r2r.convert(128).toFixed(3)} V`); // 2.500 V\nconsole.log(`R-2R: code 1 ? ${r2r.convert(1).toFixed(3)} V`);    // 0.0195 V\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1343-sigma-delta-dac",
      children: "13.4.3 Sigma-Delta DAC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Oversampling + noise shaping + 1-bit DAC achieves high resolution with relaxed analog precision."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SigmaDeltaDAC {\n    readonly oversampleRatio: number;\n    private integrator: number = 0;\n    private lastOutput: number = -1;\n\n    constructor(oversampleRatio: number) {\n        this.oversampleRatio = oversampleRatio;\n    }\n\n    convert(input: number): number {\n        // First-order sigma-delta modulator\n        const error = input - this.lastOutput;\n        this.integrator += error;\n        this.lastOutput = this.integrator > 0 ? 1 : -1;\n        return this.lastOutput;\n    }\n\n    // Decode: average the 1-bit stream over OSR samples\n    decode(bitstream: number[]): number {\n        const sum = bitstream.reduce((a, b) => a + b, 0);\n        return sum / bitstream.length;\n    }\n}\n\nconst sdDac = new SigmaDeltaDAC(64);\nconst testInput = 0.3;\nconst bitstream: number[] = [];\nfor (let i = 0; i < 128; i++) {\n    bitstream.push(sdDac.convert(testInput));\n}\nconsole.log(`SD DAC: input=${testInput}, decoded=${sdDac.decode(bitstream).toFixed(4)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1344-dac-comparison",
      children: "13.4.4 DAC Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Monotonic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary-weighted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8?12 bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R-2R ladder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8?16 bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PWM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8?16 bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tiny"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sigma-Delta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16?24 bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Segmented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12?16 bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Current-steering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8?14 bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "135-adc-architectures",
      children: "13.5 ADC Architectures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1351-flash-adc",
      children: "13.5.1 Flash ADC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The fastest ADC type, using 2?-1 comparators in parallel."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    VIN[V_in] --> CMP1[Comp 1]\n    VIN --> CMP2[Comp 2]\n    VIN --> CMP3[Comp N-2]\n    VIN --> CMPF[Comp N-1]\n    VREF[V_ref] --> R1[R]\n    R1 --> T1[Tap 1]\n    T1 --> CMP1\n    R1 --> R2[R]\n    R2 --> T2[Tap 2]\n    T2 --> CMP2\n    R2 --> R3[R]\n    R3 --> CMP3\n    CMP1 --> ENC[Priority<br>Encoder]\n    CMP2 --> ENC\n    CMP3 --> ENC\n    CMPF --> ENC\n    ENC --> CODE[N-bit<br>Output]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class FlashADC {\n    readonly bits: number;\n    readonly refVoltage: number;\n    private levels: number[];\n\n    constructor(bits: number, refVoltage: number) {\n        this.bits = bits;\n        this.refVoltage = refVoltage;\n        this.levels = [];\n        for (let i = 0; i < (1 << bits) - 1; i++) {\n            this.levels.push(((i + 1) / (1 << bits)) * refVoltage);\n        }\n    }\n\n    convert(voltage: number): number {\n        let thermometer = 0;\n        for (let i = 0; i < this.levels.length; i++) {\n            if (voltage >= this.levels[i]) {\n                thermometer |= (1 << i);\n            }\n        }\n\n        // Thermometer-to-binary using priority encoder\n        if (thermometer === 0) return 0;\n        let code = 0;\n        for (let i = this.levels.length - 1; i >= 0; i--) {\n            if ((thermometer >> i) & 1) {\n                code = i + 1;\n                break;\n            }\n        }\n        return code;\n    }\n\n    get area(): number {\n        // Area proportional to number of comparators\n        return (1 << this.bits) - 1;\n    }\n}\n\nconst flash = new FlashADC(3, 5.0);\nconsole.log(`Flash: 3.7 V ? code ${flash.convert(3.7)}`); // ~6 (out of 7)\nconsole.log(`Comparators: ${flash.area}`); // 7\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitation:"
      }), " A 10-bit flash ADC needs 1023 comparators. An N-bit flash uses O(2?) comparators ? impractical beyond 8 bits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1352-successive-approximation-register-sar-adc",
      children: "13.5.2 Successive Approximation Register (SAR) ADC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The SAR ADC uses a binary search algorithm with a single comparator and a DAC."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    VIN[V_in] --> CMP[Comparator]\n    VIN --> S[&]\n    CMP --> SAR[Successive<br>Approximation<br>Register]\n    SAR --> DAC[DAC]\n    DAC --> S\n    S --> CMP\n    CLK[Clock] --> SAR\n    SAR --> DOUT[N-bit<br>Output]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SARADC {\n    readonly bits: number;\n    readonly refVoltage: number;\n\n    constructor(bits: number, refVoltage: number) {\n        this.bits = bits;\n        this.refVoltage = refVoltage;\n    }\n\n    convert(voltage: number): number {\n        let code = 0;\n        for (let bit = this.bits - 1; bit >= 0; bit--) {\n            const trial = code | (1 << bit);\n            const trialVoltage = (trial / (1 << this.bits)) * this.refVoltage;\n            if (trialVoltage <= voltage) {\n                code = trial;\n            }\n        }\n        return code;\n    }\n\n    // Number of clock cycles per conversion = bits\n    get conversionCycles(): number {\n        return this.bits;\n    }\n}\n\nconst sar = new SARADC(12, 5.0);\nconsole.log(`SAR: 2.5 V ? code ${sar.convert(2.5)}`); // ~2048\nconsole.log(`SAR: conversion cycles: ${sar.conversionCycles}`); // 12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1353-pipelined-adc",
      children: "13.5.3 Pipelined ADC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The pipelined ADC divides the conversion across multiple stages, achieving high speed at medium resolution."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    S1[Stage 1<br>3-bit Flash] --> R1[Residue Amp<br>?2?] --> S2[Stage 2<br>3-bit Flash]\n    S1 --> D1[3 bits]\n    S2 --> R2[?2?] --> S3[Stage 3<br>3-bit Flash]\n    S2 --> D2[3 bits]\n    S3 --> S4[...]\n    S3 --> D3[3 bits]\n    D1 --> SYNC[Bit Alignment<br>+ Digital Correction]\n    D2 --> SYNC\n    D3 --> SYNC\n    SYNC --> OUT[N-bit Output]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class PipelinedADCStage {\n    readonly bits: number;\n    private subADC: FlashADC;\n    private subDAC: BinaryWeightedDAC;\n\n    constructor(bits: number, refVoltage: number) {\n        this.bits = bits;\n        this.subADC = new FlashADC(bits, refVoltage);\n        this.subDAC = new BinaryWeightedDAC(bits, refVoltage);\n    }\n\n    process(voltage: number): { code: number; residue: number } {\n        const code = this.subADC.convert(voltage);\n        const dacOut = this.subDAC.convert(code);\n        const residue = (voltage - dacOut) * (1 << this.bits);\n        return { code, residue };\n    }\n}\n\nclass PipelinedADC {\n    private stages: PipelinedADCStage[];\n    readonly totalBits: number;\n\n    constructor(stageBits: number[], refVoltage: number) {\n        this.stages = stageBits.map(b => new PipelinedADCStage(b, refVoltage));\n        this.totalBits = stageBits.reduce((a, b) => a + b, 0);\n    }\n\n    convert(voltage: number): number {\n        let code = 0;\n        let residue = voltage;\n        for (let i = 0; i < this.stages.length; i++) {\n            const result = this.stages[i].process(residue);\n            code = (code << this.stages[i].bits) | result.code;\n            residue = result.residue;\n        }\n        return code;\n    }\n}\n\nconst pipelined = new PipelinedADC([3, 3, 3, 3], 5.0);\nconsole.log(`Pipelined: 2.5 V ? code ${pipelined.convert(2.5)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1354-sigma-delta-adc",
      children: "13.5.4 Sigma-Delta ADC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Oversampling + noise shaping + digital decimation filter achieves very high resolution."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SigmaDeltaADC {\n    readonly oversampleRatio: number;\n    private integrator: number = 0;\n    private lastOutput: number = 0;\n\n    constructor(oversampleRatio: number) {\n        this.oversampleRatio = oversampleRatio;\n    }\n\n    modulatorSample(input: number): number {\n        const error = input - this.lastOutput;\n        this.integrator += error;\n        this.lastOutput = this.integrator > 0 ? 1 : 0;\n        return this.lastOutput;\n    }\n\n    convert(input: number): number {\n        let sum = 0;\n        for (let i = 0; i < this.oversampleRatio; i++) {\n            sum += this.modulatorSample(input);\n        }\n        return sum / this.oversampleRatio;\n    }\n}\n\nconst sdAdc = new SigmaDeltaADC(256);\nconsole.log(`SD ADC: 0.3 ? ${sdAdc.convert(0.3).toFixed(4)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1355-adc-comparison",
      children: "13.5.5 ADC Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed (MSPS)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Power"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4?8 bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very large"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8?18 bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1?100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pipelined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8?16 bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10?1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sigma-Delta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16?24 bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.001?10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OSR cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dual-slope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16?24 bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tiny"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time-interleaved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8?14 bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10000+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very large"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "136-performance-metrics",
      children: "13.6 Performance Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1361-static-specifications",
      children: "13.6.1 Static Specifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ADCStaticSpec {\n    dnl: number;  // Differential Non-Linearity (LSB)\n    inl: number;  // Integral Non-Linearity (LSB)\n    offset: number; // Offset error (LSB)\n    gain: number; // Gain error (%)\n}\n\nfunction effectiveResolution(actualSNR: number): number {\n    return (actualSNR - 1.76) / 6.02;\n}\n\n// Spurious-Free Dynamic Range (SFDR)\nfunction sfdr(fundamentalPower: number, maxSpurPower: number): number {\n    return fundamentalPower - maxSpurPower; // dB\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1362-dynamic-specifications",
      children: "13.6.2 Dynamic Specifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ADCDynamicSpec {\n    readonly bits: number;\n    readonly sampleRate: number; // Hz\n\n    constructor(bits: number, sampleRate: number) {\n        this.bits = bits;\n        this.sampleRate = sampleRate;\n    }\n\n    // Signal-to-Noise and Distortion Ratio (SINAD)\n    sinad(snr: number, thd: number): number {\n        return -10 * Math.log10(\n            Math.pow(10, -snr / 10) + Math.pow(10, -thd / 10)\n        );\n    }\n\n    // Effective Number of Bits\n    enob(sinadValue: number): number {\n        return (sinadValue - 1.76) / 6.02;\n    }\n\n    // Walden Figure of Merit\n    waldenFoM(power: number, enobValue: number): number {\n        return power / (Math.pow(2, enobValue) * 2 * this.sampleRate);\n    }\n\n    // Schreier Figure of Merit\n    schreierFoM(sdr: number, bandwidth: number, power: number): number {\n        return sdr + 10 * Math.log10(bandwidth / power);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "137-interface-circuits",
      children: "13.7 Interface Circuits"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1371-serial-peripheral-interface-spi-for-adcs",
      children: "13.7.1 Serial Peripheral Interface (SPI) for ADCs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SPI_ADC {\n    private adc: SARADC;\n    readonly bits: number;\n\n    constructor(bits: number, refVoltage: number) {\n        this.adc = new SARADC(bits, refVoltage);\n        this.bits = bits;\n    }\n\n    // SPI transaction: CS low ? SCLK pulses ? MOSI for config ? MISO for data\n    spiTransaction(cs: number, sclk: number, mosi: number): { miso: number; data: number } {\n        if (cs === 1) return { miso: 0, data: 0 };\n\n        // Simplified: read MISO on falling SCLK\n        let data = 0;\n        for (let i = this.bits - 1; i >= 0; i--) {\n            if (sclk === 0) {\n                const bit = (this.adc.convert(2.5) >> i) & 1;\n                data |= (bit << i);\n            }\n        }\n        return { miso: data, data };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rule of thumb: 6 dB/bit"
        }), " ? each extra bit adds 6 dB of SNR, but costs 2? comparator area (flash) or N extra cycles (SAR)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sigma-delta for high resolution, low speed"
        }), " ? perfect for audio (24-bit, 48 kHz); impractical for video"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SAR is the workhorse ADC"
        }), " ? 8?18 bit resolution, 1?100 MSPS, low power; dominates industrial and embedded applications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flash for the fastest conversions"
        }), " ? 4?8 bit, multi-GSPS; used in oscilloscopes and communication receivers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anti-alias filtering is mandatory"
        }), " ? without it, out-of-band signals alias into the passband and cannot be removed digitally"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Binary-Weighted DAC ===\nclass BinaryWeightedDAC {\n    constructor(private bits: number, private vRef: number) {}\n    convert(digital: number): number {\n        let vOut = 0;\n        for (let i = 0; i < this.bits; i++) {\n            const bit = (digital >> i) & 1;\n            vOut += bit * (this.vRef / Math.pow(2, this.bits - i));\n        }\n        return vOut;\n    }\n}\n\n// === R-2R Ladder DAC ===\nclass R2RDAC {\n    constructor(private bits: number, private vRef: number) {}\n    convert(digital: number): number {\n        let vOut = 0;\n        for (let i = 0; i < this.bits; i++) {\n            const bit = (digital >> (this.bits - 1 - i)) & 1;\n            vOut += bit * (this.vRef / Math.pow(2, i + 1));\n        }\n        return vOut;\n    }\n}\n\n// === Flash ADC (3-bit) ===\nclass FlashADC {\n    private comparators: number[];\n    constructor(bits: number, private vRef: number) {\n        const levels = (1 << bits);\n        this.comparators = Array.from({ length: levels - 1 }, (_, i) => (this.vRef / levels) * (i + 1));\n    }\n    convert(vIn: number): number {\n        let code = 0;\n        for (let i = this.comparators.length - 1; i >= 0; i--) {\n            if (vIn >= this.comparators[i]) { code = i + 1; break; }\n        }\n        return code;\n    }\n}\n\n// === SAR ADC (8-bit) ===\nclass SARADC {\n    private dac: BinaryWeightedDAC;\n    constructor(bits: number, private vRef: number) { this.dac = new BinaryWeightedDAC(bits, vRef); }\n    convert(vIn: number): number {\n        let result = 0;\n        for (let i = 7; i >= 0; i--) {\n            const trial = result | (1 << i);\n            const vDac = this.dac.convert(trial);\n            if (vDac <= vIn) result = trial;\n        }\n        return result;\n    }\n    conversionSteps(vIn: number): { step: number; trial: number; dacOut: number; decision: string }[] {\n        const steps: { step: number; trial: number; dacOut: number; decision: string }[] = [];\n        let result = 0;\n        for (let i = 7; i >= 0; i--) {\n            const trial = result | (1 << i);\n            const vDac = this.dac.convert(trial);\n            const keep = vDac <= vIn;\n            steps.push({ step: 7 - i, trial, dacOut: vDac, decision: keep ? 'keep' : 'skip' });\n            if (keep) result = trial;\n        }\n        return steps;\n    }\n}\n\n// === Sample-and-Hold ===\nclass SampleAndHold {\n    private held = 0;\n    private lastClk = 0;\n    sample(input: number, clk: number): number {\n        if (clk === 1 && this.lastClk === 0) this.held = input;\n        this.lastClk = clk;\n        return this.held;\n    }\n}\n\n// === Quantizer ===\nclass Quantizer {\n    constructor(private bits: number, private vRef: number) {}\n    quantize(vIn: number): { code: number; error: number; vQuantized: number } {\n        const levels = 1 << this.bits;\n        const step = this.vRef / levels;\n        const code = Math.round(vIn / step);\n        const clamped = Math.max(0, Math.min(levels - 1, code));\n        const vQuantized = clamped * step;\n        return { code: clamped, error: vIn - vQuantized, vQuantized };\n    }\n}\n\n// === Sigma-Delta Modulator (1st order) ===\nclass SigmaDeltaModulator {\n    private integrator = 0;\n    constructor(private bits: number) {}\n    modulate(input: number, steps: number): number[] {\n        const output: number[] = [];\n        for (let i = 0; i < steps; i++) {\n            this.integrator += input;\n            const bit = this.integrator >= 0.5 ? 1 : 0;\n            this.integrator -= bit * 0.5;\n            output.push(bit);\n        }\n        return output;\n    }\n    demodulate(bits: number[]): number {\n        return bits.reduce((s, b) => s + b, 0) / bits.length;\n    }\n}\n\n// === Pipeline ADC (2-stage) ===\nclass PipelineADC {\n    constructor(private stage1Bits: number, private stage2Bits: number, private vRef: number) {}\n    convert(vIn: number): number {\n        const flash1 = new FlashADC(this.stage1Bits, this.vRef);\n        const code1 = flash1.convert(vIn);\n        const vDac = (code1 / (1 << this.stage1Bits)) * this.vRef;\n        const residue = (vIn - vDac) * (1 << this.stage1Bits);\n        const flash2 = new FlashADC(this.stage2Bits, this.vRef);\n        const code2 = flash2.convert(Math.max(0, Math.min(this.vRef, residue)));\n        return (code1 << this.stage2Bits) | (code2 & ((1 << this.stage2Bits) - 1));\n    }\n}\n\n// === SNR / ENOB Calculator ===\nclass ADCMetrics {\n    static snr(bits: number): number { return 6.02 * bits + 1.76; }\n    static enob(snrDb: number): number { return (snrDb - 1.76) / 6.02; }\n    static dynamicRange(maxSignal: number, minSignal: number): number {\n        return 20 * Math.log10(maxSignal / minSignal);\n    }\n    static jitterSNR(fSig: number, jitterRms: number): number {\n        return 20 * Math.log10(1 / (2 * Math.PI * fSig * jitterRms));\n    }\n}\n\n// === PWM DAC ===\nclass PWMDAC {\n    constructor(private resolution: number, private pwmFreq: number, private rcTau: number) {}\n    convert(digital: number): number {\n        const duty = digital / ((1 << this.resolution) - 1);\n        const vAvg = duty * 3.3;\n        const ripple = vAvg * Math.exp(-1 / (this.pwmFreq * this.rcTau));\n        return vAvg - ripple;\n    }\n    rcCutoff(desiredAccuracy: number): number {\n        const steps = 1 << this.resolution;\n        return this.pwmFreq / (2 * Math.PI * Math.sqrt(Math.pow(1 / (1 - desiredAccuracy), 2) - 1));\n    }\n}\n\n// === Demo ===\nconst dac = new BinaryWeightedDAC(8, 5);\nconsole.log(`8-bit DAC digital=128: ${dac.convert(128).toFixed(3)}V`);\n\nconst sar = new SARADC(8, 5);\nconsole.log(`SAR ADC vIn=2.5V: ${sar.convert(2.5)}`);\nconsole.log('SAR conversion steps:');\nsar.conversionSteps(2.5).forEach(s => console.log(`  Step ${s.step}: trial=0x${s.trial.toString(16)}, dacOut=${s.dacOut.toFixed(3)}V, ${s.decision}`));\n\nconst quant = new Quantizer(8, 5);\nconsole.log(`\\nQuantize 1.23V: code=${quant.quantize(1.23).code}, error=${quant.quantize(1.23).error.toFixed(3)}`);\n\nconst sd = new SigmaDeltaModulator(1);\nconst bits = sd.modulate(0.3, 100);\nconsole.log(`Sigma-Delta demod 0.3: ${sd.demodulate(bits).toFixed(3)}`);\n\nconsole.log(`\\n12-bit ideal SNR: ${ADCMetrics.snr(12).toFixed(1)} dB`);\nconsole.log(`ENOB from 65dB SNR: ${ADCMetrics.enob(65).toFixed(2)} bits`);\nconsole.log(`Jitter SNR @10MHz/1ps: ${ADCMetrics.jitterSNR(10e6, 1e-12).toFixed(1)} dB`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// dac adc\n// boolean-circuits-sequential implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'dac adc', data: { topic: 'boolean-circuits-sequential' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// dac adc - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'digital-circuits demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'digital-logic', chapter: 'dac adc' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('digital-circuits'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data converters bridge the analog and digital worlds. This chapter covered the major DAC architectures (binary-weighted, R-2R, sigma-delta) and ADC architectures (flash, SAR, pipelined, sigma-delta) with their speed-resolution trade-offs. Sampling theory, quantisation noise, and performance metrics (SNR, ENOB, SFDR, FoM) provide the analytical framework for selecting and evaluating converters. The next chapter addresses timing analysis ? the critical discipline for ensuring that digital systems meet their performance targets."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " The Nyquist rate for a signal with 10 MHz bandwidth is:\na) 10 MHz\nb) 20 MHz\nc) 40 MHz\nd) 5 MHz"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " The ideal SNR for a 12-bit ADC is approximately:\na) 60 dB\nb) 74 dB\nc) 98 dB\nd) 50 dB"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " A flash ADC with N-bit resolution requires how many comparators?\na) N\nb) 2N\nc) 2? - 1\nd) N?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Which ADC architecture is best suited for 24-bit audio conversion?\na) Flash\nb) SAR\nc) Pipelined\nd) Sigma-Delta"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " The R-2R ladder DAC uses how many distinct resistor values?\na) 1\nb) 2\nc) N\nd) 2?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q1: b | Q2: b | Q3: c | Q4: d | Q5: b"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SAR ADC simulation:"
          }), " Implement an 8-bit SAR ADC in TypeScript. Plot the conversion process for a given analog input, showing the DAC output at each binary search step."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sigma-delta modulator:"
          }), " Implement a second-order sigma-delta modulator and compare its noise shaping with the first-order version. Show the noise transfer function."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Anti-aliasing filter design:"
          }), " Design a 5th-order Chebyshev low-pass filter with 10 kHz cutoff for a 24 kHz sampling system. Calculate the attenuation at 12 kHz and 15 kHz."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DAC linearity:"
          }), " Simulate the INL and DNL for a 6-bit binary-weighted DAC with 1% resistor tolerance. Determine whether the DAC is monotonic."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Flash ADC power:"
          }), " Estimate the power consumption of a 6-bit flash ADC operating at 1 GSPS in a 28 nm CMOS process. Assume each comparator consumes 50 ?W."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Time-interleaved ADC:"
          }), " Design a 4-channel time-interleaved ADC system using 8-bit SAR ADCs. Calculate the effective sample rate and analyse channel mismatch effects."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Digital correction:"
          }), " Implement a digital correction algorithm for a pipelined ADC that compensates for stage gain errors and comparator offsets."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Jitter analysis:"
          }), " Calculate the SNR degradation in a 12-bit ADC sampling a 10 MHz signal with 1 ps RMS clock jitter. Determine the jitter-limited ENOB."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DAC glitch energy:"
          }), " Measure the glitch energy of a binary-weighted DAC during the 0111?1000 transition (mid-scale). Propose a glitch-minimisation technique."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PWM DAC:"
          }), " Implement a PWM DAC with an RC filter. Determine the filter cutoff required for 0.1% accuracy at 8-bit resolution with a 100 kHz PWM carrier."]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);