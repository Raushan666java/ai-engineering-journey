# Module 1: Number Systems and Codes Complete Guide
## 🔢 Foundation of Digital Electronics

### 🎯 Module Overview
- **Duration**: 2 weeks (30 hours)
- **Difficulty**: Beginner to Intermediate
- **Prerequisites**: Basic mathematics
- **Applications**: Computer arithmetic, data representation, error detection

## 📋 Learning Objectives
- Master different number systems and conversions
- Understand binary arithmetic operations
- Apply various coding schemes
- Implement error detection and correction
- Design number system converters

## 🔢 Topic 1: Number Systems Fundamentals

### 1.1 Positional Number Systems
```
General Form: N = Σ(di × r^i) where:
- N = Number value
- di = digit at position i
- r = radix (base)
- i = position index

Examples:
Decimal (Base 10): 1234₁₀ = 1×10³ + 2×10² + 3×10¹ + 4×10⁰
Binary (Base 2): 1101₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 13₁₀
Octal (Base 8): 567₈ = 5×8² + 6×8¹ + 7×8⁰ = 375₁₀
Hexadecimal (Base 16): 2AF₁₆ = 2×16² + 10×16¹ + 15×16⁰ = 687₁₀
```

### 1.2 Binary Number System
```
Binary Digits: 0, 1
Powers of 2: 2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128

Binary Counting:
0000₂ = 0₁₀    0100₂ = 4₁₀    1000₂ = 8₁₀     1100₂ = 12₁₀
0001₂ = 1₁₀    0101₂ = 5₁₀    1001₂ = 9₁₀     1101₂ = 13₁₀
0010₂ = 2₁₀    0110₂ = 6₁₀    1010₂ = 10₁₀    1110₂ = 14₁₀
0011₂ = 3₁₀    0111₂ = 7₁₀    1011₂ = 11₁₀    1111₂ = 15₁₀

Fractional Binary:
0.1₂ = 1/2 = 0.5₁₀
0.01₂ = 1/4 = 0.25₁₀
0.11₂ = 1/2 + 1/4 = 0.75₁₀
0.101₂ = 1/2 + 1/8 = 0.625₁₀
```

### 1.3 Octal Number System
```
Octal Digits: 0, 1, 2, 3, 4, 5, 6, 7
Powers of 8: 8⁰=1, 8¹=8, 8²=64, 8³=512

Binary-Octal Relationship:
Each octal digit = 3 binary digits
000₂ = 0₈    100₂ = 4₈
001₂ = 1₈    101₂ = 5₈
010₂ = 2₈    110₂ = 6₈
011₂ = 3₈    111₂ = 7₈

Example: 101110₂ = 101|110₂ = 5|6₈ = 56₈
```

### 1.4 Hexadecimal Number System
```
Hex Digits: 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
A=10, B=11, C=12, D=13, E=14, F=15

Binary-Hex Relationship:
Each hex digit = 4 binary digits
0000₂ = 0₁₆    1000₂ = 8₁₆
0001₂ = 1₁₆    1001₂ = 9₁₆
0010₂ = 2₁₆    1010₂ = A₁₆
0011₂ = 3₁₆    1011₂ = B₁₆
0100₂ = 4₁₆    1100₂ = C₁₆
0101₂ = 5₁₆    1101₂ = D₁₆
0110₂ = 6₁₆    1110₂ = E₁₆
0111₂ = 7₁₆    1111₂ = F₁₆

Example: 10111010₂ = 1011|1010₂ = B|A₁₆ = BA₁₆
```

## 🔄 Topic 2: Number System Conversions

### 2.1 Decimal to Other Bases
```
Method: Successive Division

Decimal to Binary:
25₁₀ to Binary:
25 ÷ 2 = 12 remainder 1 (LSB)
12 ÷ 2 = 6  remainder 0
6  ÷ 2 = 3  remainder 0
3  ÷ 2 = 1  remainder 1
1  ÷ 2 = 0  remainder 1 (MSB)
Result: 11001₂

Decimal to Octal:
156₁₀ to Octal:
156 ÷ 8 = 19 remainder 4 (LSD)
19  ÷ 8 = 2  remainder 3
2   ÷ 8 = 0  remainder 2 (MSD)
Result: 234₈

Decimal to Hexadecimal:
255₁₀ to Hex:
255 ÷ 16 = 15 remainder 15 (F)
15  ÷ 16 = 0  remainder 15 (F)
Result: FF₁₆
```

### 2.2 Other Bases to Decimal
```
Method: Positional Multiplication

Binary to Decimal:
1101₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13₁₀

Octal to Decimal:
347₈ = 3×8² + 4×8¹ + 7×8⁰ = 192 + 32 + 7 = 231₁₀

Hex to Decimal:
2A3₁₆ = 2×16² + 10×16¹ + 3×16⁰ = 512 + 160 + 3 = 675₁₀
```

### 2.3 Direct Conversions
```
Binary ↔ Octal:
Group binary digits in sets of 3 (from right)
101110₂ = 101|110₂ = 5|6₈ = 56₈
56₈ = 5|6₈ = 101|110₂ = 101110₂

Binary ↔ Hexadecimal:
Group binary digits in sets of 4 (from right)
10111010₂ = 1011|1010₂ = B|A₁₆ = BA₁₆
BA₁₆ = B|A₁₆ = 1011|1010₂ = 10111010₂

Octal ↔ Hexadecimal:
Convert through binary intermediate
```

### 2.4 Fractional Number Conversions
```
Decimal Fraction to Binary:
0.625₁₀ to Binary:
0.625 × 2 = 1.25 → 1 (integer part)
0.25  × 2 = 0.5  → 0
0.5   × 2 = 1.0  → 1
Result: 0.101₂

Binary Fraction to Decimal:
0.1011₂ = 1×2⁻¹ + 0×2⁻² + 1×2⁻³ + 1×2⁻⁴
        = 0.5 + 0 + 0.125 + 0.0625 = 0.6875₁₀
```

## ➕ Topic 3: Binary Arithmetic

### 3.1 Binary Addition
```
Rules:
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 10 (0 with carry 1)

Examples:
  1011₂ (11₁₀)
+ 1101₂ (13₁₀)
-------
 11000₂ (24₁₀)

Carry propagation:
  1111₂
+ 0001₂
-------
 10000₂
```

### 3.2 Binary Subtraction
```
Rules:
0 - 0 = 0
1 - 0 = 1
1 - 1 = 0
0 - 1 = 1 (with borrow 1)

Examples:
  1101₂ (13₁₀)
- 1011₂ (11₁₀)
-------
  0010₂ (2₁₀)

Borrow propagation:
  1000₂
- 0001₂
-------
  0111₂
```

### 3.3 Binary Multiplication
```
Rules:
0 × 0 = 0
0 × 1 = 0
1 × 0 = 0
1 × 1 = 1

Example:
    1011₂ (11₁₀)
  × 1101₂ (13₁₀)
  -------
    1011
   0000
  1011
 1011
-------
10001111₂ (143₁₀)
```

### 3.4 Binary Division
```
Similar to decimal long division

Example: 1110₂ ÷ 11₂
    100₂ (quotient)
   ----
11)1110₂
   11
   --
   001
   000
   ---
   010
   000
   ---
   10₂ (remainder)

Result: 1110₂ ÷ 11₂ = 100₂ remainder 10₂
Verification: 4₁₀ remainder 2₁₀ = 14₁₀ ÷ 3₁₀ ✓
```

## 🔢 Topic 4: Signed Number Representation

### 4.1 Sign-Magnitude Representation
```
MSB = Sign bit (0 = positive, 1 = negative)
Remaining bits = Magnitude

8-bit examples:
+5₁₀ = 00000101₂
-5₁₀ = 10000101₂

Range for n bits: -(2^(n-1) - 1) to +(2^(n-1) - 1)
8-bit range: -127 to +127

Problems:
- Two representations for zero (00000000, 10000000)
- Complex arithmetic operations
```

### 4.2 1's Complement Representation
```
Positive numbers: Same as binary
Negative numbers: Invert all bits

8-bit examples:
+5₁₀ = 00000101₂
-5₁₀ = 11111010₂ (1's complement of 00000101)

Range for n bits: -(2^(n-1) - 1) to +(2^(n-1) - 1)
8-bit range: -127 to +127

Problems:
- Two representations for zero (00000000, 11111111)
- End-around carry in addition
```

### 4.3 2's Complement Representation
```
Positive numbers: Same as binary
Negative numbers: 2's complement = 1's complement + 1

8-bit examples:
+5₁₀ = 00000101₂
-5₁₀ = 11111011₂ (2's complement of 00000101)

Method 1: Invert and add 1
+5₁₀ = 00000101₂
1's complement = 11111010₂
Add 1 = 11111011₂ = -5₁₀

Method 2: Copy from right until first 1, then invert
00000101₂ → 11111011₂

Range for n bits: -2^(n-1) to +(2^(n-1) - 1)
8-bit range: -128 to +127

Advantages:
- Single representation for zero
- Simple arithmetic operations
- Most widely used system
```

### 4.4 Arithmetic with Signed Numbers
```
2's Complement Addition:
  01011₂ (+11₁₀)
+ 11010₂ (-6₁₀)
-------
 100101₂
Discard carry → 00101₂ = +5₁₀ ✓

2's Complement Subtraction:
A - B = A + (-B) = A + 2's complement of B

  01011₂ (+11₁₀)
- 00110₂ (+6₁₀)
Convert to: 01011₂ + 11010₂
Result: 00101₂ = +5₁₀ ✓

Overflow Detection:
- Occurs when result exceeds representable range
- Check: Carry into sign bit ≠ Carry out of sign bit
```

## 📊 Topic 5: Binary Codes

### 5.1 Binary Coded Decimal (BCD)
```
Each decimal digit encoded in 4 bits
Only codes 0000 to 1001 are used (0-9)
Codes 1010 to 1111 are invalid

Examples:
25₁₀ = 0010 0101 (BCD)
147₁₀ = 0001 0100 0111 (BCD)

BCD Addition:
If sum > 9 or carry generated, add 6 (0110)

Example: 8 + 5 in BCD
  1000 (8)
+ 0101 (5)
------
  1101 (13, invalid BCD)
+ 0110 (add 6 for correction)
------
 10011 → 0001 0011 (13 in BCD)

Advantages:
- Easy decimal-binary conversion
- No conversion errors
- Simple display interfacing

Disadvantages:
- Inefficient storage (uses only 10 of 16 codes)
- Complex arithmetic operations
```

### 5.2 Gray Code (Reflected Binary Code)
```
Only one bit changes between consecutive numbers
Eliminates glitches in digital systems

4-bit Gray Code:
Decimal | Binary | Gray
   0    | 0000   | 0000
   1    | 0001   | 0001
   2    | 0010   | 0011
   3    | 0011   | 0010
   4    | 0100   | 0110
   5    | 0101   | 0111
   6    | 0110   | 0101
   7    | 0111   | 0100
   8    | 1000   | 1100
   9    | 1001   | 1101
  10    | 1010   | 1111
  11    | 1011   | 1110
  12    | 1100   | 1010
  13    | 1101   | 1011
  14    | 1110   | 1001
  15    | 1111   | 1000

Binary to Gray Conversion:
G₀ = B₀ (LSB)
Gᵢ = Bᵢ₊₁ ⊕ Bᵢ for i = 0 to n-2

Gray to Binary Conversion:
B₀ = G₀ (LSB)
Bᵢ = Bᵢ₋₁ ⊕ Gᵢ for i = 1 to n-1

Applications:
- Shaft encoders
- A/D converters
- Counters in asynchronous systems
```

### 5.3 ASCII Code
```
American Standard Code for Information Interchange
7-bit code (128 characters)
Extended ASCII uses 8 bits (256 characters)

Character Categories:
- Control characters: 0-31 (0x00-0x1F)
- Printable characters: 32-126 (0x20-0x7E)
- Extended characters: 128-255 (0x80-0xFF)

Common ASCII Values:
'0' = 48₁₀ = 0110000₂
'A' = 65₁₀ = 1000001₂
'a' = 97₁₀ = 1100001₂
Space = 32₁₀ = 0100000₂
CR = 13₁₀ = 0001101₂
LF = 10₁₀ = 0001010₂

Conversion Rules:
- Uppercase to lowercase: Add 32 (set bit 5)
- Lowercase to uppercase: Subtract 32 (clear bit 5)
- Digit to numeric value: Subtract 48
```

### 5.4 Excess-3 Code
```
BCD + 3 (add 0011 to each BCD digit)
Self-complementing code

Examples:
0₁₀ = 0000 (BCD) + 0011 = 0011 (Excess-3)
5₁₀ = 0101 (BCD) + 0011 = 1000 (Excess-3)
9₁₀ = 1001 (BCD) + 0011 = 1100 (Excess-3)

Self-complementing property:
9's complement of decimal = 1's complement of Excess-3

Example: 9's complement of 3 = 6
3 in Excess-3 = 0110
1's complement = 1001 = 6 in Excess-3 ✓

Applications:
- Decimal arithmetic in early computers
- Self-checking systems
```

## 🛡️ Topic 6: Error Detection and Correction

### 6.1 Parity Codes
```
Single Error Detection Method

Even Parity:
Total number of 1's (including parity bit) is even
Data: 1011001
Count of 1's = 4 (even)
Even parity bit = 0
Transmitted: 10110010

Odd Parity:
Total number of 1's (including parity bit) is odd
Data: 1011001
Count of 1's = 4 (even)
Odd parity bit = 1
Transmitted: 10110011

Limitations:
- Detects only odd number of errors
- Cannot detect even number of errors
- Cannot correct errors
```

### 6.2 Hamming Code
```
Single Error Correction and Double Error Detection (SECDED)

For m data bits, need r parity bits where 2^r ≥ m + r + 1

Parity bit positions: 1, 2, 4, 8, 16, ... (powers of 2)

Example: 4-bit data (1011)
Need 3 parity bits (positions 1, 2, 4)

Bit positions: 1 2 3 4 5 6 7
              P₁P₂D₁P₄D₂D₃D₄

Data placement: _ _ 1 _ 0 1 1

Parity calculations:
P₁ covers positions 1,3,5,7: P₁ = D₁⊕D₂⊕D₄ = 1⊕0⊕1 = 0
P₂ covers positions 2,3,6,7: P₂ = D₁⊕D₃⊕D₄ = 1⊕1⊕1 = 1
P₄ covers positions 4,5,6,7: P₄ = D₂⊕D₃⊕D₄ = 0⊕1⊕1 = 0

Transmitted code: 0110111

Error Detection:
Calculate syndrome S = S₄S₂S₁
If S = 000, no error
If S ≠ 000, error at position S
```

### 6.3 Cyclic Redundancy Check (CRC)
```
Polynomial-based error detection
High error detection capability

CRC Process:
1. Treat data as polynomial
2. Multiply by x^n (append n zeros)
3. Divide by generator polynomial
4. Remainder is CRC

Example: Data = 1101, Generator = 1011 (CRC-3)

Step 1: Append 3 zeros → 1101000
Step 2: Divide by 1011

    1110
   ------
1011)1101000
     1011
     ----
     1000
     1011
     ----
     0110
     0000
     ----
     1100
     1011
     ----
     111 (remainder = CRC)

Transmitted: 1101111

Common CRC Polynomials:
CRC-8: x⁸ + x² + x + 1
CRC-16: x¹⁶ + x¹⁵ + x² + 1
CRC-32: x³² + x²⁶ + x²³ + ... + x + 1
```

## 💻 Programming Implementation

### Number System Converter
```python
class NumberSystemConverter:
    def __init__(self):
        self.hex_digits = "0123456789ABCDEF"
    
    def decimal_to_binary(self, decimal):
        """Convert decimal to binary"""
        if decimal == 0:
            return "0"
        
        binary = ""
        while decimal > 0:
            binary = str(decimal % 2) + binary
            decimal //= 2
        return binary
    
    def decimal_to_octal(self, decimal):
        """Convert decimal to octal"""
        if decimal == 0:
            return "0"
        
        octal = ""
        while decimal > 0:
            octal = str(decimal % 8) + octal
            decimal //= 8
        return octal
    
    def decimal_to_hex(self, decimal):
        """Convert decimal to hexadecimal"""
        if decimal == 0:
            return "0"
        
        hex_num = ""
        while decimal > 0:
            hex_num = self.hex_digits[decimal % 16] + hex_num
            decimal //= 16
        return hex_num
    
    def binary_to_decimal(self, binary):
        """Convert binary to decimal"""
        decimal = 0
        power = 0
        
        for bit in reversed(binary):
            if bit == '1':
                decimal += 2 ** power
            power += 1
        
        return decimal
    
    def binary_to_gray(self, binary):
        """Convert binary to Gray code"""
        if not binary:
            return ""
        
        gray = binary[0]  # MSB remains same
        
        for i in range(1, len(binary)):
            # XOR current bit with previous bit
            if binary[i-1] == binary[i]:
                gray += '0'
            else:
                gray += '1'
        
        return gray
    
    def gray_to_binary(self, gray):
        """Convert Gray code to binary"""
        if not gray:
            return ""
        
        binary = gray[0]  # MSB remains same
        
        for i in range(1, len(gray)):
            # XOR previous binary bit with current gray bit
            if binary[i-1] == gray[i]:
                binary += '0'
            else:
                binary += '1'
        
        return binary

# Example usage
converter = NumberSystemConverter()

# Test conversions
decimal = 25
print(f"Decimal {decimal}:")
print(f"Binary: {converter.decimal_to_binary(decimal)}")
print(f"Octal: {converter.decimal_to_octal(decimal)}")
print(f"Hex: {converter.decimal_to_hex(decimal)}")

binary = "11001"
print(f"\nBinary {binary}:")
print(f"Decimal: {converter.binary_to_decimal(binary)}")
print(f"Gray: {converter.binary_to_gray(binary)}")
```

### Binary Arithmetic Calculator
```python
class BinaryArithmetic:
    def __init__(self):
        pass
    
    def add_binary(self, bin1, bin2):
        """Add two binary numbers"""
        # Convert to integers, add, convert back
        dec1 = int(bin1, 2)
        dec2 = int(bin2, 2)
        result = dec1 + dec2
        return bin(result)[2:]  # Remove '0b' prefix
    
    def subtract_binary(self, bin1, bin2):
        """Subtract two binary numbers"""
        dec1 = int(bin1, 2)
        dec2 = int(bin2, 2)
        
        if dec1 >= dec2:
            result = dec1 - dec2
            return bin(result)[2:]
        else:
            # Handle negative result
            result = dec2 - dec1
            return "-" + bin(result)[2:]
    
    def multiply_binary(self, bin1, bin2):
        """Multiply two binary numbers"""
        dec1 = int(bin1, 2)
        dec2 = int(bin2, 2)
        result = dec1 * dec2
        return bin(result)[2:]
    
    def twos_complement(self, binary, width=8):
        """Calculate 2's complement"""
        # Pad to specified width
        binary = binary.zfill(width)
        
        # Find 1's complement
        ones_comp = ""
        for bit in binary:
            ones_comp += '1' if bit == '0' else '0'
        
        # Add 1 to get 2's complement
        decimal = int(ones_comp, 2) + 1
        twos_comp = bin(decimal)[2:].zfill(width)
        
        # Handle overflow
        if len(twos_comp) > width:
            twos_comp = twos_comp[-width:]
        
        return twos_comp
    
    def signed_addition(self, bin1, bin2, width=8):
        """Add two signed binary numbers (2's complement)"""
        # Pad to width
        bin1 = bin1.zfill(width)
        bin2 = bin2.zfill(width)
        
        # Convert to decimal (considering sign)
        dec1 = self.twos_complement_to_decimal(bin1)
        dec2 = self.twos_complement_to_decimal(bin2)
        
        result = dec1 + dec2
        
        # Check for overflow
        max_pos = 2**(width-1) - 1
        min_neg = -2**(width-1)
        
        overflow = result > max_pos or result < min_neg
        
        # Convert back to binary
        if result >= 0:
            result_bin = bin(result)[2:].zfill(width)
        else:
            # Handle negative numbers
            result_bin = self.decimal_to_twos_complement(result, width)
        
        return result_bin, overflow
    
    def twos_complement_to_decimal(self, binary):
        """Convert 2's complement binary to decimal"""
        if binary[0] == '0':
            # Positive number
            return int(binary, 2)
        else:
            # Negative number
            # Invert bits and add 1
            inverted = ""
            for bit in binary:
                inverted += '1' if bit == '0' else '0'
            
            magnitude = int(inverted, 2) + 1
            return -magnitude
    
    def decimal_to_twos_complement(self, decimal, width):
        """Convert decimal to 2's complement binary"""
        if decimal >= 0:
            return bin(decimal)[2:].zfill(width)
        else:
            # For negative numbers
            positive = abs(decimal)
            binary = bin(positive)[2:].zfill(width)
            return self.twos_complement(binary, width)

# Example usage
calc = BinaryArithmetic()

print("Binary Arithmetic Examples:")
print(f"1011 + 1101 = {calc.add_binary('1011', '1101')}")
print(f"1101 - 1011 = {calc.subtract_binary('1101', '1011')}")
print(f"1011 × 101 = {calc.multiply_binary('1011', '101')}")

print(f"\n2's complement of 00000101 = {calc.twos_complement('00000101')}")

result, overflow = calc.signed_addition('01111111', '00000001')
print(f"01111111 + 00000001 = {result}, Overflow: {overflow}")
```

## 🧪 Laboratory Experiments

### Lab 1: Number System Conversions
```
Objective: Implement and verify number system conversions

Equipment:
- Calculator
- Computer with programming environment
- Conversion tables

Procedure:
1. Manual conversion exercises
2. Program implementation
3. Verification with calculator
4. Error analysis

Exercises:
- Convert 156₁₀ to binary, octal, hex
- Convert 10110101₂ to decimal, octal, hex
- Convert 2A7₁₆ to binary, decimal, octal
- Verify all conversions using multiple methods
```

### Lab 2: Binary Arithmetic Operations
```
Objective: Perform binary arithmetic and verify results

Equipment:
- Binary arithmetic worksheets
- Calculator for verification
- Computer simulation

Procedure:
1. Manual binary addition/subtraction
2. 2's complement arithmetic
3. Overflow detection
4. Computer verification

Exercises:
- Add: 11011₂ + 10110₂
- Subtract: 11001₂ - 01110₂
- Multiply: 1101₂ × 1011₂
- Signed arithmetic with overflow detection
```

### Lab 3: Code Conversion Circuits
```
Objective: Design and test code conversion circuits

Equipment:
- Logic gates (AND, OR, NOT, XOR)
- Breadboard and connecting wires
- LED indicators
- Logic probe

Procedure:
1. Design BCD to Excess-3 converter
2. Implement binary to Gray code converter
3. Test with various input combinations
4. Verify truth tables

Truth Table for BCD to Excess-3:
BCD Input | Excess-3 Output
A B C D   | W X Y Z
0 0 0 0   | 0 0 1 1
0 0 0 1   | 0 1 0 0
0 0 1 0   | 0 1 0 1
...       | ...
```

### Lab 4: Error Detection Implementation
```
Objective: Implement parity and Hamming code systems

Equipment:
- XOR gates
- Parity generator/checker ICs
- Digital trainer kit
- Oscilloscope

Procedure:
1. Build even/odd parity generator
2. Test parity checker circuit
3. Implement simple Hamming code
4. Introduce errors and verify detection

Parity Generator Circuit:
- Use XOR gates to generate parity bit
- Test with various data patterns
- Verify error detection capability
```

## 📝 Practice Problems (80+ Problems)

### Basic Conversions (1-20)
1. Convert 147₁₀ to binary
2. Convert 10110110₂ to decimal
3. Convert 345₈ to hexadecimal
4. Convert 2BC₁₆ to octal
5. Convert 0.625₁₀ to binary

### Binary Arithmetic (21-40)
21. Add: 11011₂ + 10111₂
22. Subtract: 100001₂ - 01110₂
23. Multiply: 1101₂ × 1011₂
24. Find 2's complement of 10110101₂
25. Add in 2's complement: 11110000₂ + 00010001₂

### Code Systems (41-60)
41. Convert 8749₁₀ to BCD
42. Convert 1011₂ to Gray code
43. Find ASCII code for "Hello"
44. Convert 6₁₀ to Excess-3 code
45. Perform BCD addition: 1001 + 0111

### Error Detection (61-80)
61. Generate even parity for 1011001₂
62. Design Hamming code for 1101₂
63. Calculate CRC for data 1101₂ with generator 1011₂
64. Detect error in received Hamming code
65. Find syndrome for error correction

## 🎯 Assessment and Evaluation

### Quiz Questions (20 questions)
1. What is the decimal equivalent of 10110₂?
2. How many bits are needed to represent 1000₁₀?
3. What is the 2's complement of 01101₂?
4. Which code is self-complementing?
5. What is the main advantage of Gray code?

### Programming Assignments
1. Build complete number system converter
2. Implement binary arithmetic calculator
3. Create error detection system
4. Design code conversion utilities

### Practical Exercises
1. Manual conversion practice (50 problems)
2. Circuit implementation projects
3. Error detection system design
4. Performance analysis and optimization

## 📚 Resources and References

### Textbooks
- "Digital Design" by Morris Mano
- "Digital Electronics" by Anil K. Maini
- "Computer Organization" by Carl Hamacher

### Online Resources
- [Binary Tutorial](https://www.tutorialspoint.com/computer_logical_organization/number_system_conversion.htm)
- [Number System Calculator](https://www.rapidtables.com/convert/number/)
- [Binary Arithmetic Simulator](https://www.mathsisfun.com/binary-decimal-hexadecimal-converter.html)

### Software Tools
- Windows Calculator (Programmer mode)
- Online binary converters
- Logic simulation software
- Programming environments (Python, C++)

## 🏆 Learning Outcomes
After completing this module, you will:
- Master all number system conversions
- Perform binary arithmetic operations accurately
- Understand signed number representations
- Apply various coding schemes effectively
- Implement error detection and correction
- Design number system conversion circuits
- Score 90%+ on number system problems

**Next Module**: Boolean Algebra and Logic Simplification →