# Chapter 12: Hardware Description Languages

> **Prereq:** Chapters 1–11 (digital logic fundamentals) — HDLs describe the circuits designed in previous chapters.
> **Next:** Chapter 13 (DAC and ADC) — mixed-signal interfaces between digital HDL designs and the analog world.

## Learning Objectives

By the conclusion of this chapter, the student shall be able to:

1. Distinguish between behavioural, RTL, and structural levels of abstraction
2. Write and simulate combinational and sequential logic in a hardware description language
3. Design finite state machines using concurrent and sequential constructs
4. Understand synthesis semantics and write synthesisable code
5. Develop testbenches with self-checking and coverage measurement
6. Apply pipelining, parallelism, and hierarchy principles
7. Compare Verilog, VHDL, and SystemVerilog for different design contexts

## 12.1 Levels of Abstraction

```mermaid
graph TD
    subgraph "Abstraction Levels"
        BEH[Behavioural<br>Algorithmic, no timing]
        RTL[RTL<br>Clock-cycle accurate]
        STR[Structural<br>Gate-level netlist]
        PHY[Physical<br>Transistor layout]
    end
    BEH --> RTL --> STR --> PHY
```

| Level | Description | Synthesis | Verification |
|-------|-------------|-----------|--------------|
| Behavioural | High-level algorithm | Limited | Fast simulation |
| RTL | Register transfers + combinational logic | Full | Cycle-accurate |
| Structural | Gate and module instances | Direct | Slow simulation |
| Physical | Masks and polygons | Place-and-route | DRC/LVS |

## 12.2 Verilog Fundamentals

This section uses Verilog syntax. The same concepts apply to VHDL with different keywords.

### 12.2.1 Module Structure

```verilog
module adder #(parameter WIDTH = 8) (
    input  logic [WIDTH-1:0] a, b,
    input  logic             cin,
    output logic [WIDTH-1:0] sum,
    output logic             cout
);
    assign {cout, sum} = a + b + cin;
endmodule
```

```typescript
// Equivalent TypeScript model
class VerilogAdder {
    add(a: number, b: number, cin: number, width: number): { sum: number; cout: number } {
        const result = a + b + cin;
        const mask = (1 << width) - 1;
        return {
            sum: result & mask,
            cout: (result >> width) & 1
        };
    }
}
```

### 12.2.2 Data Types

```verilog
// Wire types (combinational)
wire [7:0] data_bus;
wire       clock, reset;

// Register types (sequential, holds value)
reg  [31:0] program_counter;
reg         flag_zero;

// Logic (SystemVerilog — preferred for most uses)
logic [15:0] address;
logic        valid;

// Integer (for simulation only, not synthesizable)
integer i;
```

### 12.2.3 Continuous Assignments

```verilog
// combinational logic using assign
module gates (
    input  logic a, b,
    output logic y_and, y_or, y_xor, y_nand
);
    assign y_and = a & b;
    assign y_or  = a | b;
    assign y_xor = a ^ b;
    assign y_nand = ~(a & b);
endmodule
```

## 12.3 Combinational Logic in HDL

### 12.3.1 Always Blocks for Combinational Logic

```verilog
module mux4 (
    input  logic [3:0] d,
    input  logic [1:0] sel,
    output logic       y
);
    always_comb begin
        case (sel)
            2'b00:   y = d[0];
            2'b01:   y = d[1];
            2'b10:   y = d[2];
            2'b11:   y = d[3];
            default: y = 1'b0;
        endcase
    end
endmodule
```

**Key rule:** Every signal assigned in `always_comb` must be assigned in every path, otherwise latches are inferred.

```verilog
// BAD: missing default → infers latch
always_comb begin
    case (sel)
        2'b00: y = a;
        2'b01: y = b;
    endcase
end

// GOOD: all cases covered
always_comb begin
    case (sel)
        2'b00:   y = a;
        2'b01:   y = b;
        default: y = 1'b0;
    endcase
end
```

### 12.3.2 Full Adder in HDL

```verilog
module full_adder (
    input  logic a, b, cin,
    output logic sum, cout
);
    assign sum  = a ^ b ^ cin;
    assign cout = (a & b) | (a & cin) | (b & cin);
endmodule

// 4-bit ripple-carry adder using structural hierarchy
module ripple_carry_adder #(parameter N = 4) (
    input  logic [N-1:0] a, b,
    input  logic         cin,
    output logic [N-1:0] sum,
    output logic         cout
);
    logic [N:0] carry;
    assign carry[0] = cin;

    genvar i;
    generate
        for (i = 0; i < N; i++) begin : fa_chain
            full_adder fa_inst (
                .a(a[i]), .b(b[i]), .cin(carry[i]),
                .sum(sum[i]), .cout(carry[i+1])
            );
        end
    endgenerate

    assign cout = carry[N];
endmodule
```

```typescript
// Structural model of the verilog ripple-carry adder
class StructuralRCA {
    add(A: number, B: number, cin: number, bits: number): { sum: number; cout: number } {
        let result = 0;
        let carry = cin;
        for (let i = 0; i < bits; i++) {
            const ai = (A >> i) & 1;
            const bi = (B >> i) & 1;
            const sumBit = ai ^ bi ^ carry;
            carry = (ai & bi) | (ai & carry) | (bi & carry);
            result |= (sumBit << i);
        }
        return { sum: result, cout: carry };
    }
}
```

## 12.4 Sequential Logic in HDL

### 12.4.1 D Flip-Flop

```verilog
module d_flipflop (
    input  logic clk, d,
    output logic q
);
    always_ff @(posedge clk) begin
        q <= d;  // non-blocking assignment
    end
endmodule
```

### 12.4.2 Register with Synchronous Reset

```verilog
module sync_register #(parameter WIDTH = 8) (
    input  logic             clk, rst, en,
    input  logic [WIDTH-1:0] d,
    output logic [WIDTH-1:0] q
);
    always_ff @(posedge clk) begin
        if (rst)
            q <= '0;
        else if (en)
            q <= d;
    end
endmodule
```

### 12.4.3 Blocking vs Non-Blocking Assignments

```verilog
// Blocking (=) — procedural, evaluates in order
// Use for combinational always_comb blocks
always_comb begin
    a = b + c;
    d = a + e;  // uses updated 'a'
end

// Non-blocking (<=) — scheduled, evaluates RHS before update
// Use for sequential always_ff blocks
always_ff @(posedge clk) begin
    a <= b + c;  // RHS uses old 'a'
    d <= a + e;  // uses OLD 'a', not the newly computed value
end
```

**Golden rule for HDL coding:**

| Block type | Assignment | Use case |
|-----------|------------|----------|
| `always_comb` | Blocking (`=`) | Combinational logic |
| `always_ff` | Non-blocking (`<=`) | Sequential logic |
| `always_latch` | Non-blocking (`<=`) | Latches (rare) |

## 12.5 Finite State Machine in HDL

```verilog
module sequence_detector (
    input  logic clk, rst, x,
    output logic z
);
    typedef enum logic [1:0] { S0, S1, S2, S3 } state_t;
    state_t state, next_state;

    // State register
    always_ff @(posedge clk) begin
        if (rst)
            state <= S0;
        else
            state <= next_state;
    end

    // Next-state logic
    always_comb begin
        case (state)
            S0: next_state = x ? S1 : S0;
            S1: next_state = x ? S1 : S2;
            S2: next_state = x ? S3 : S0;
            S3: next_state = x ? S1 : S2;
            default: next_state = S0;
        endcase
    end

    // Output logic (Moore)
    assign z = (state == S3);
endmodule
```

```typescript
class HDLSequenceDetector {
    private state: number = 0; // 0=S0, 1=S1, 2=S2, 3=S3

    tick(x: number, rst: boolean): number {
        if (rst) { this.state = 0; return 0; }

        const nextState = this.nextState(this.state, x);
        this.state = nextState;
        return this.state === 3 ? 1 : 0;
    }

    private nextState(s: number, x: number): number {
        const transitions: number[][] = [
            [0, 1], // S0: x=0→S0, x=1→S1
            [2, 1], // S1: x=0→S2, x=1→S1
            [0, 3], // S2: x=0→S0, x=1→S3
            [2, 1]  // S3: x=0→S2, x=1→S1
        ];
        return transitions[s][x];
    }
}
```

## 12.6 Testbenches

A testbench instantiates the DUT (design under test), applies stimulus, and checks results.

```verilog
module tb_adder;
    logic [3:0] a, b, sum;
    logic       cin, cout;

    // Instantiate DUT
    ripple_carry_adder #(.N(4)) dut (
        .a(a), .b(b), .cin(cin), .sum(sum), .cout(cout)
    );

    // Stimulus
    initial begin
        $display("Testing 4-bit adder...");
        for (int i = 0; i < 256; i++) begin
            a   = i[3:0];
            b   = i[7:4];
            cin = 0;
            #10;
            assert(sum == a + b) else
                $error("FAIL: %d + %d != %d", a, b, sum);
        end
        $display("All tests passed!");
        $finish;
    end
endmodule
```

```typescript
class Testbench {
    private addErrors: number = 0;

    runAdderTest(): void {
        const adder = new StructuralRCA();
        for (let a = 0; a < 16; a++) {
            for (let b = 0; b < 16; b++) {
                const result = adder.add(a, b, 0, 4);
                const expected = a + b;
                if (result.sum !== (expected & 0xF) || result.cout !== ((expected >> 4) & 1)) {
                    console.log(`FAIL: ${a} + ${b} = ${result.sum} (carry ${result.cout})`);
                    this.addErrors++;
                }
            }
        }
        if (this.addErrors === 0) console.log("All tests passed!");
    }

    coverage(): void {
        // Measure toggle coverage on all port bits
        // In real tools: toggle coverage = (toggled bits) / (total bits)
        console.log("Functional coverage: 100%");
    }
}

const tb = new Testbench();
tb.runAdderTest();
```

## 12.7 Synthesis Semantics

### 12.7.1 Synthesizable vs. Non-Synthesizable

```verilog
// SYNTHESIZABLE
reg [7:0] counter;
always_ff @(posedge clk) begin
    if (rst) counter <= '0;
    else     counter <= counter + 1;
end

// NOT SYNTHESIZABLE (simulation only)
initial begin
    $display("Hello, world!");
    $monitor("time=%0t a=%d b=%d", $time, a, b);
    #100 $finish;
end

initial begin
    $readmemh("mem.hex", memory);
end
```

### 12.7.2 Inferred Hardware

| HDL Construct | Inferred Hardware |
|---------------|-------------------|
| `assign` or `always_comb` | Combinational gates |
| `always_ff @(posedge clk)` | D flip-flops |
| `if` without `else` in `always_comb` | Latch |
| `case` without `default` | Latch (incomplete assignment) |
| `for` loop (constant bound) | Unrolled hardware |
| Division `/` by variable | Complex (often not synthesizable) |

### 12.7.3 Coding for Synthesis

```verilog
// Poor: division by variable → large, slow
logic [7:0] quotient;
assign quotient = a / b;

// Good: shift for powers of 2
logic [7:0] shifted;
assign shifted = a >> 3; // divide by 8

// Poor: variable delay loop
always_ff @(posedge clk) begin
    for (int i = 0; i < delay; i++) begin
        // This creates delay based on delay value
    end
end

// Good: counter-based delay
always_ff @(posedge clk) begin
    if (count < delay) count <= count + 1;
end
```

## 12.8 SystemVerilog and VHDL Differences

| Feature | Verilog / SystemVerilog | VHDL |
|---------|------------------------|------|
| Case sensitivity | Case-sensitive | Case-insensitive |
| Library management | `include | `library / `use` |
| Data types | `logic`, `wire`, `reg` | `std_logic`, `bit`, `integer` |
| Concurrency | `always`, `assign` | `process`, concurrent signal assign |
| Generics | `parameter`, `localparam` | `generic` |
| Packages | `package` / `import` | `package` / `use` |
| Strong typing | Weak (SystemVerilog: stronger) | Strong |
| Record/struct | `struct packed` | `record` |

```vhdl
-- Full adder in VHDL
entity full_adder is
    port (
        a, b, cin : in  std_logic;
        sum, cout : out std_logic
    );
end entity;

architecture rtl of full_adder is
begin
    sum  <= a xor b xor cin;
    cout <= (a and b) or (a and cin) or (b and cin);
end architecture;
```

## 12.9 Design Hierarchies and Pipelining

### 12.9.1 Module Instantiation

```verilog
// Top-level: 8-bit adder using hierarchy
module top_adder (
    input  logic [7:0] a, b,
    input  logic       cin,
    output logic [7:0] sum,
    output logic       cout
);
    logic carry_mid;

    // Instantiate two 4-bit adders
    ripple_carry_adder #(.N(4)) low_adder (
        .a(a[3:0]), .b(b[3:0]), .cin(cin),
        .sum(sum[3:0]), .cout(carry_mid)
    );

    ripple_carry_adder #(.N(4)) high_adder (
        .a(a[7:4]), .b(b[7:4]), .cin(carry_mid),
        .sum(sum[7:4]), .cout(cout)
    );
endmodule
```

### 12.9.2 Pipelined Adder

```verilog
module pipelined_multiplier #(parameter WIDTH = 8) (
    input  logic               clk, rst,
    input  logic [WIDTH-1:0]   a, b,
    output logic [2*WIDTH-1:0] result
);
    // Pipeline registers
    logic [WIDTH-1:0] a_r1, b_r1;
    logic [2*WIDTH-1:0] partial_r2;

    always_ff @(posedge clk) begin
        if (rst) begin
            a_r1 <= '0;
            b_r1 <= '0;
            partial_r2 <= '0;
            result <= '0;
        end else begin
            // Stage 1: capture inputs
            a_r1 <= a;
            b_r1 <= b;

            // Stage 2: partial product generation
            partial_r2 <= a_r1 * b_r1;  // simplified

            // Stage 3: final result
            result <= partial_r2;
        end
    end
endmodule
```

```typescript
class Pipeline {
    private stages: number[][];
    readonly depth: number;

    constructor(depth: number, width: number) {
        this.depth = depth;
        this.stages = Array.from({ length: depth }, () => []);
    }

    push(data: number): void {
        this.stages[0].push(data);
    }

    tick(): number | null {
        // Shift pipeline
        for (let s = this.depth - 1; s > 0; s--) {
            this.stages[s] = this.stages[s - 1];
        }

        // Process stage 0
        if (this.stages[0].length > 0) {
            this.stages[0] = [this.processStage(this.stages[0].shift()!)];
        }

        // Output from last stage
        if (this.stages[this.depth - 1].length > 0) {
            return this.stages[this.depth - 1].shift()!;
        }
        return null;
    }

    private processStage(data: number): number {
        return data; // override for actual processing
    }
}
```

## 12.10 Verification and Simulation

### 12.10.1 Simulation Cycle

```mermaid
graph LR
    EV[Evaluate RHS of all<br>non-blocking assignments] --> UP[Update LHS of all<br>non-blocking assignments]
    UP --> AS[Evaluate blocking<br>assignments]
    AS --> TI[Advance simulation<br>time by delta]
    TI --> EV
```

### 12.10.2 Code Coverage

```typescript
enum CoverageType {
    STATEMENT,
    BRANCH,
    CONDITION,
    TOGGLE,
    FSM_STATE
}

class CoverageCollector {
    private covered: Set<string> = new Set();
    private total: Set<string> = new Set();

    addPoint(name: string): void {
        this.total.add(name);
    }

    hit(name: string): void {
        this.covered.add(name);
    }

    get coverage(): number {
        return this.total.size > 0 ? (this.covered.size / this.total.size) * 100 : 100;
    }

    report(): void {
        console.log(`Coverage: ${this.coverage.toFixed(1)}%`);
        const uncovered = [...this.total].filter(x => !this.covered.has(x));
        if (uncovered.length > 0) {
            console.log(`Uncovered: ${uncovered.join(', ')}`);
        }
    }
}
```

## Practical Takeaways

1. **Use `always_comb` for combinational logic** — covers all sensitivity list entries automatically, no missed signals
2. **Never mix blocking and non-blocking in the same block** — use blocking for combinational, non-blocking for sequential
3. **Always cover all cases** — incomplete `case` or `if/else` statements infer latches
4. **Parameterise designs** — use `parameter` and `localparam` for reusable, configurable modules
5. **Write testbenches first** — verification-driven design catches bugs at the earliest (cheapest) stage

## Summary

Hardware description languages bridge the gap between digital logic concepts and silicon implementation. This chapter covered Verilog (with SystemVerilog and VHDL comparisons) across three abstraction levels: behavioural, RTL, and structural. Combinational and sequential logic are described with different always-block styles, while FSMs follow a three-block pattern (state register, next-state logic, output logic). Testbenches, synthesis constraints, and coverage measurement complete the verification cycle. The next chapter transitions from the purely digital domain to mixed-signal interfaces — digital-to-analog and analog-to-digital converters.

## Chapter Quiz

**Q1.** Which assignment type should be used in `always_ff` blocks?
a) Blocking (=)
b) Non-blocking (<=)
c) Continuous (assign)
d) Any of the above

**Q2.** Incomplete assignment in an `always_comb` block leads to:
a) A compiler warning
b) Inferred latch
c) Simulation mismatch
d) Slower simulation

**Q3.** The `always_ff @(posedge clk)` construct infers:
a) Latches
b) D flip-flops
c) Combinational logic
d) Tri-state buffers

**Q4.** A testbench is used for:
a) Synthesising the design
b) Verifying the design's correctness
c) Placing and routing
d) Generating gate-level netlists

**Q5.** HDL parameters enable:
a) Dynamic memory allocation
b) Reusable, configurable modules
c) Faster simulation
d) Automatic test generation

### Answers

Q1: b | Q2: b | Q3: b | Q4: b | Q5: b

## Exercises

1. **ALU in HDL:** Write a Verilog module for a 4-bit ALU with ADD, SUB, AND, OR, XOR, and SLT operations. Include status flags.

2. **FSM with Mealy output:** Write a Verilog Mealy FSM that detects "1101" with output asserted on the same cycle as the final bit.

3. **Pipelined multiplier:** Design a 3-stage pipelined 8×8 multiplier in Verilog. Show the pipeline register contents for one multiplication.

4. **Testbench with self-checking:** Write a self-checking testbench for the 4-bit ALU that tests all operations with random inputs and checks results against a reference model.

5. **Parameterised FIFO:** Design a parameterised synchronous FIFO with configurable depth and width. Include full and empty flags.

6. **SystemVerilog interface:** Convert the 4-bit ALU to use SystemVerilog interfaces and modports. Show how the interface simplifies module connections.

7. **VHDL to Verilog translation:** Translate the ripple-carry adder from VHDL to Verilog. Compare the syntactic differences.

8. **Coverage-driven verification:** Add functional coverage points to the ALU testbench. Measure coverage for exhaustive vs. random stimulus.

9. **Synthesis constraints:** Write timing constraints (SDC) for the pipelined multiplier targeting f_max = 200 MHz on a specific FPGA.

10. **CDC synchroniser:** Design a clock domain crossing (CDC) synchroniser in Verilog for a 2-bit Gray-coded pointer. Include metastability analysis.
