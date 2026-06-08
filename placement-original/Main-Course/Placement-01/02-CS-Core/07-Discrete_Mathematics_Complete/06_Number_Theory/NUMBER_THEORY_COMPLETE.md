# Module 6: Number Theory Complete Guide
## 📚 Comprehensive Number Theory for Computer Science

### 🎯 Module Overview
- **Duration**: 4 weeks (60 hours)
- **Difficulty**: Intermediate to Advanced
- **Prerequisites**: Basic algebra, modular arithmetic
- **Applications**: Cryptography, algorithm analysis, coding theory

## 📋 Learning Objectives
- Master fundamental number theory concepts
- Apply number theory to cryptographic systems
- Understand prime numbers and factorization
- Implement number-theoretic algorithms
- Solve complex mathematical problems

## 🔢 Topic 1: Divisibility and Prime Numbers

### 1.1 Divisibility Theory
```
Definition: a divides b (a|b) if there exists integer k such that b = ak

Properties of Divisibility:
1. If a|b and b|c, then a|c (transitivity)
2. If a|b and a|c, then a|(bx + cy) for any integers x, y
3. If a|b and b|a, then a = ±b
4. If a|b and a > 0, b > 0, then a ≤ b

Division Algorithm:
For any integers a and b with b > 0, there exist unique integers q and r such that:
a = bq + r, where 0 ≤ r < b
- q is the quotient, r is the remainder

Examples:
- 17 = 5 × 3 + 2 (q = 3, r = 2)
- -17 = 5 × (-4) + 3 (q = -4, r = 3)
```

### 1.2 Greatest Common Divisor (GCD)
```
Definition: gcd(a, b) is the largest positive integer that divides both a and b

Properties:
- gcd(a, b) = gcd(b, a)
- gcd(a, 0) = |a|
- gcd(a, b) = gcd(a - b, b)
- gcd(a, b) = gcd(a mod b, b)

Euclidean Algorithm:
gcd(a, b) = gcd(b, a mod b) until remainder is 0

Extended Euclidean Algorithm:
Find integers x, y such that ax + by = gcd(a, b)

Example:
gcd(48, 18):
48 = 18 × 2 + 12
18 = 12 × 1 + 6
12 = 6 × 2 + 0
Therefore, gcd(48, 18) = 6

Extended: 6 = 48 × (-1) + 18 × 3
```

### 1.3 Least Common Multiple (LCM)
```
Definition: lcm(a, b) is the smallest positive integer divisible by both a and b

Relationship with GCD:
lcm(a, b) × gcd(a, b) = |a × b|

Properties:
- lcm(a, b) = lcm(b, a)
- lcm(a, 1) = |a|
- lcm(a, b) = |ab|/gcd(a, b)

For multiple numbers:
lcm(a₁, a₂, ..., aₙ) can be computed iteratively:
lcm(a₁, a₂, ..., aₙ) = lcm(lcm(a₁, a₂, ..., aₙ₋₁), aₙ)
```

### 1.4 Prime Numbers
```
Definition: A prime number p > 1 has exactly two positive divisors: 1 and p

Fundamental Theorem of Arithmetic:
Every integer n > 1 can be uniquely factored as:
n = p₁^a₁ × p₂^a₂ × ... × pₖ^aₖ
where p₁ < p₂ < ... < pₖ are primes and aᵢ > 0

Prime Testing:
- Trial Division: Test divisibility up to √n
- Sieve of Eratosthenes: Find all primes up to n
- Miller-Rabin: Probabilistic primality test
- AKS: Deterministic polynomial-time test

Prime Distribution:
- Prime Number Theorem: π(n) ≈ n/ln(n)
- There are infinitely many primes (Euclid's proof)
- Twin Prime Conjecture: Infinitely many primes p such that p+2 is also prime
```

## 🔐 Topic 2: Modular Arithmetic

### 2.1 Congruence Relations
```
Definition: a ≡ b (mod m) if m|(a - b)

Properties:
- Reflexive: a ≡ a (mod m)
- Symmetric: If a ≡ b (mod m), then b ≡ a (mod m)
- Transitive: If a ≡ b (mod m) and b ≡ c (mod m), then a ≡ c (mod m)

Arithmetic Properties:
If a ≡ b (mod m) and c ≡ d (mod m), then:
- a + c ≡ b + d (mod m)
- a - c ≡ b - d (mod m)
- ac ≡ bd (mod m)
- aⁿ ≡ bⁿ (mod m) for any positive integer n

Modular Division:
ac ≡ bc (mod m) implies a ≡ b (mod m/gcd(c,m))
```

### 2.2 Modular Inverse
```
Definition: The modular inverse of a modulo m is an integer x such that:
ax ≡ 1 (mod m)

Existence: a has a modular inverse modulo m if and only if gcd(a, m) = 1

Finding Modular Inverse:
1. Extended Euclidean Algorithm
2. Fermat's Little Theorem (when m is prime): a^(m-2) ≡ a^(-1) (mod m)
3. Euler's Theorem: a^(φ(m)-1) ≡ a^(-1) (mod m) when gcd(a,m) = 1

Example:
Find 3^(-1) mod 7:
Using Extended Euclidean: 3 × 5 ≡ 1 (mod 7)
So 3^(-1) ≡ 5 (mod 7)
```

### 2.3 Chinese Remainder Theorem
```
Theorem: If m₁, m₂, ..., mₖ are pairwise coprime, then the system:
x ≡ a₁ (mod m₁)
x ≡ a₂ (mod m₂)
...
x ≡ aₖ (mod mₖ)

has a unique solution modulo M = m₁m₂...mₖ

Algorithm:
1. Compute M = m₁m₂...mₖ
2. For each i, compute Mᵢ = M/mᵢ
3. Find yᵢ such that Mᵢyᵢ ≡ 1 (mod mᵢ)
4. Solution: x ≡ Σ(aᵢMᵢyᵢ) (mod M)

Example:
x ≡ 2 (mod 3)
x ≡ 3 (mod 5)
x ≡ 2 (mod 7)

M = 105, M₁ = 35, M₂ = 21, M₃ = 15
y₁ = 2, y₂ = 1, y₃ = 1
x ≡ 2×35×2 + 3×21×1 + 2×15×1 ≡ 23 (mod 105)
```

## 🔑 Topic 3: Cryptographic Applications

### 3.1 RSA Cryptosystem
```
Key Generation:
1. Choose two large primes p and q
2. Compute n = pq
3. Compute φ(n) = (p-1)(q-1)
4. Choose e such that gcd(e, φ(n)) = 1
5. Compute d such that ed ≡ 1 (mod φ(n))
6. Public key: (n, e), Private key: (n, d)

Encryption: c ≡ m^e (mod n)
Decryption: m ≡ c^d (mod n)

Security: Based on difficulty of factoring large integers

Example (small numbers):
p = 3, q = 11, n = 33, φ(n) = 20
e = 3 (gcd(3, 20) = 1)
d = 7 (3 × 7 = 21 ≡ 1 (mod 20))

Encrypt m = 4: c = 4³ mod 33 = 64 mod 33 = 31
Decrypt c = 31: m = 31⁷ mod 33 = 4
```

### 3.2 Diffie-Hellman Key Exchange
```
Protocol:
1. Alice and Bob agree on prime p and generator g
2. Alice chooses secret a, computes A = g^a mod p
3. Bob chooses secret b, computes B = g^b mod p
4. Alice and Bob exchange A and B
5. Shared secret: K = g^(ab) mod p
   - Alice computes: K = B^a mod p
   - Bob computes: K = A^b mod p

Security: Based on discrete logarithm problem

Example:
p = 23, g = 5
Alice: a = 6, A = 5⁶ mod 23 = 8
Bob: b = 15, B = 5¹⁵ mod 23 = 19
Shared secret: K = 8¹⁵ mod 23 = 19⁶ mod 23 = 2
```

### 3.3 Digital Signatures
```
ElGamal Signature:
Key Generation:
1. Choose prime p and generator g
2. Choose private key x
3. Compute public key y = g^x mod p

Signing message m:
1. Choose random k with gcd(k, p-1) = 1
2. Compute r = g^k mod p
3. Compute s = k^(-1)(m - xr) mod (p-1)
4. Signature: (r, s)

Verification:
Check if g^m ≡ y^r × r^s (mod p)

DSA (Digital Signature Algorithm):
Similar to ElGamal but uses subgroup of order q
More efficient and standardized
```

## 🖥️ Topic 4: Programming Implementation

### 4.1 Basic Number Theory Algorithms
```python
import random
from math import gcd, isqrt

class NumberTheory:
    @staticmethod
    def extended_gcd(a, b):
        """Extended Euclidean Algorithm"""
        if a == 0:
            return b, 0, 1
        
        gcd_val, x1, y1 = NumberTheory.extended_gcd(b % a, a)
        x = y1 - (b // a) * x1
        y = x1
        
        return gcd_val, x, y
    
    @staticmethod
    def mod_inverse(a, m):
        """Compute modular inverse of a modulo m"""
        gcd_val, x, _ = NumberTheory.extended_gcd(a, m)
        if gcd_val != 1:
            raise ValueError("Modular inverse does not exist")
        return (x % m + m) % m
    
    @staticmethod
    def fast_power(base, exp, mod):
        """Fast modular exponentiation"""
        result = 1
        base = base % mod
        
        while exp > 0:
            if exp % 2 == 1:
                result = (result * base) % mod
            exp = exp >> 1
            base = (base * base) % mod
        
        return result
    
    @staticmethod
    def chinese_remainder_theorem(remainders, moduli):
        """Solve system of congruences using CRT"""
        if len(remainders) != len(moduli):
            raise ValueError("Number of remainders and moduli must match")
        
        # Check if moduli are pairwise coprime
        for i in range(len(moduli)):
            for j in range(i + 1, len(moduli)):
                if gcd(moduli[i], moduli[j]) != 1:
                    raise ValueError("Moduli must be pairwise coprime")
        
        total = 0
        prod = 1
        for m in moduli:
            prod *= m
        
        for r, m in zip(remainders, moduli):
            p = prod // m
            total += r * NumberTheory.mod_inverse(p, m) * p
        
        return total % prod
    
    @staticmethod
    def sieve_of_eratosthenes(n):
        """Find all primes up to n"""
        if n < 2:
            return []
        
        is_prime = [True] * (n + 1)
        is_prime[0] = is_prime[1] = False
        
        for i in range(2, isqrt(n) + 1):
            if is_prime[i]:
                for j in range(i * i, n + 1, i):
                    is_prime[j] = False
        
        return [i for i in range(2, n + 1) if is_prime[i]]
    
    @staticmethod
    def miller_rabin(n, k=5):
        """Miller-Rabin primality test"""
        if n < 2:
            return False
        if n == 2 or n == 3:
            return True
        if n % 2 == 0:
            return False
        
        # Write n-1 as d * 2^r
        r = 0
        d = n - 1
        while d % 2 == 0:
            r += 1
            d //= 2
        
        # Perform k rounds of testing
        for _ in range(k):
            a = random.randrange(2, n - 1)
            x = NumberTheory.fast_power(a, d, n)
            
            if x == 1 or x == n - 1:
                continue
            
            for _ in range(r - 1):
                x = NumberTheory.fast_power(x, 2, n)
                if x == n - 1:
                    break
            else:
                return False
        
        return True
    
    @staticmethod
    def factorize(n):
        """Simple factorization algorithm"""
        factors = []
        d = 2
        
        while d * d <= n:
            while n % d == 0:
                factors.append(d)
                n //= d
            d += 1
        
        if n > 1:
            factors.append(n)
        
        return factors
    
    @staticmethod
    def euler_totient(n):
        """Compute Euler's totient function φ(n)"""
        result = n
        p = 2
        
        while p * p <= n:
            if n % p == 0:
                while n % p == 0:
                    n //= p
                result -= result // p
            p += 1
        
        if n > 1:
            result -= result // n
        
        return result

# Example usage
if __name__ == "__main__":
    nt = NumberTheory()
    
    # Extended GCD
    gcd_val, x, y = nt.extended_gcd(48, 18)
    print(f"gcd(48, 18) = {gcd_val}, 48×{x} + 18×{y} = {gcd_val}")
    
    # Modular inverse
    inv = nt.mod_inverse(3, 7)
    print(f"3^(-1) mod 7 = {inv}")
    
    # Chinese Remainder Theorem
    remainders = [2, 3, 2]
    moduli = [3, 5, 7]
    solution = nt.chinese_remainder_theorem(remainders, moduli)
    print(f"CRT solution: {solution}")
    
    # Prime testing
    print(f"Is 97 prime? {nt.miller_rabin(97)}")
    
    # Factorization
    factors = nt.factorize(60)
    print(f"Factors of 60: {factors}")
    
    # Euler's totient
    phi = nt.euler_totient(12)
    print(f"φ(12) = {phi}")
```

### 4.2 RSA Implementation
```python
class RSA:
    def __init__(self, key_size=1024):
        self.key_size = key_size
        self.public_key = None
        self.private_key = None
    
    def generate_prime(self, bits):
        """Generate a prime number with specified bit length"""
        while True:
            candidate = random.getrandbits(bits)
            candidate |= (1 << bits - 1) | 1  # Set MSB and LSB
            if NumberTheory.miller_rabin(candidate):
                return candidate
    
    def generate_keypair(self):
        """Generate RSA key pair"""
        # Generate two distinct primes
        p = self.generate_prime(self.key_size // 2)
        q = self.generate_prime(self.key_size // 2)
        while p == q:
            q = self.generate_prime(self.key_size // 2)
        
        n = p * q
        phi_n = (p - 1) * (q - 1)
        
        # Choose e
        e = 65537  # Common choice
        while gcd(e, phi_n) != 1:
            e += 2
        
        # Compute d
        d = NumberTheory.mod_inverse(e, phi_n)
        
        self.public_key = (n, e)
        self.private_key = (n, d)
        
        return self.public_key, self.private_key
    
    def encrypt(self, message, public_key):
        """Encrypt message using public key"""
        n, e = public_key
        if isinstance(message, str):
            message = int.from_bytes(message.encode(), 'big')
        
        if message >= n:
            raise ValueError("Message too large for key size")
        
        return NumberTheory.fast_power(message, e, n)
    
    def decrypt(self, ciphertext, private_key):
        """Decrypt ciphertext using private key"""
        n, d = private_key
        decrypted = NumberTheory.fast_power(ciphertext, d, n)
        
        # Convert back to string
        byte_length = (decrypted.bit_length() + 7) // 8
        return decrypted.to_bytes(byte_length, 'big').decode()
    
    def sign(self, message, private_key):
        """Sign message using private key"""
        n, d = private_key
        if isinstance(message, str):
            message = int.from_bytes(message.encode(), 'big')
        
        return NumberTheory.fast_power(message, d, n)
    
    def verify(self, message, signature, public_key):
        """Verify signature using public key"""
        n, e = public_key
        if isinstance(message, str):
            message = int.from_bytes(message.encode(), 'big')
        
        decrypted_sig = NumberTheory.fast_power(signature, e, n)
        return decrypted_sig == message

# Example usage
rsa = RSA(key_size=512)  # Small key for demo
public_key, private_key = rsa.generate_keypair()

message = "Hello, RSA!"
ciphertext = rsa.encrypt(message, public_key)
decrypted = rsa.decrypt(ciphertext, private_key)

print(f"Original: {message}")
print(f"Encrypted: {ciphertext}")
print(f"Decrypted: {decrypted}")

# Digital signature
signature = rsa.sign(message, private_key)
is_valid = rsa.verify(message, signature, public_key)
print(f"Signature valid: {is_valid}")
```

### 4.3 Diffie-Hellman Implementation
```python
class DiffieHellman:
    def __init__(self, p=None, g=None):
        if p is None or g is None:
            self.p, self.g = self.generate_parameters()
        else:
            self.p, self.g = p, g
        self.private_key = None
        self.public_key = None
    
    def generate_parameters(self):
        """Generate safe prime p and generator g"""
        # For demo, use small known safe prime
        # In practice, use much larger primes
        p = 2357  # Safe prime (2357 = 2 × 1178 + 1, where 1178 is prime)
        g = 2     # Generator
        return p, g
    
    def generate_private_key(self):
        """Generate private key"""
        self.private_key = random.randrange(2, self.p - 1)
        return self.private_key
    
    def generate_public_key(self):
        """Generate public key from private key"""
        if self.private_key is None:
            self.generate_private_key()
        
        self.public_key = NumberTheory.fast_power(self.g, self.private_key, self.p)
        return self.public_key
    
    def compute_shared_secret(self, other_public_key):
        """Compute shared secret"""
        if self.private_key is None:
            raise ValueError("Private key not generated")
        
        return NumberTheory.fast_power(other_public_key, self.private_key, self.p)

# Example usage
alice = DiffieHellman()
bob = DiffieHellman(alice.p, alice.g)  # Use same parameters

# Generate key pairs
alice_private = alice.generate_private_key()
alice_public = alice.generate_public_key()

bob_private = bob.generate_private_key()
bob_public = bob.generate_public_key()

# Compute shared secrets
alice_shared = alice.compute_shared_secret(bob_public)
bob_shared = bob.compute_shared_secret(alice_public)

print(f"Alice's shared secret: {alice_shared}")
print(f"Bob's shared secret: {bob_shared}")
print(f"Secrets match: {alice_shared == bob_shared}")
```

## 📝 Practice Problems (200+ Problems)

### Basic Number Theory (1-75)
1. Find gcd(252, 198) using the Euclidean algorithm.
2. Express gcd(252, 198) as a linear combination of 252 and 198.
3. Find all solutions to 3x ≡ 7 (mod 11).
4. Determine if 561 is prime using trial division.
5. Find the prime factorization of 1001.

### Modular Arithmetic (76-125)
26. Solve the system: x ≡ 2 (mod 3), x ≡ 3 (mod 5), x ≡ 1 (mod 7).
27. Find 3^100 mod 7 using Fermat's Little Theorem.
28. Compute 2^340 mod 341.
29. Find the multiplicative order of 3 modulo 7.
30. Solve x^2 ≡ 1 (mod 15).

### Cryptography Applications (126-175)
51. Generate RSA keys with p = 11, q = 13.
52. Encrypt the message "HELLO" using RSA with n = 143, e = 7.
53. Perform Diffie-Hellman key exchange with p = 23, g = 5.
54. Verify an ElGamal signature.
55. Break RSA with small primes by factoring n.

### Advanced Problems (176-200)
76. Prove that if p is prime and p|ab, then p|a or p|b.
77. Show that there are infinitely many primes of the form 4k + 3.
78. Prove Fermat's Little Theorem using group theory.
79. Implement Pollard's rho algorithm for factorization.
80. Analyze the security of RSA with small public exponent.

## 🧪 Programming Labs

### Lab 1: Prime Number Generator
```python
class PrimeGenerator:
    def __init__(self):
        self.primes_cache = {}
    
    def generate_primes_up_to(self, n):
        """Generate all primes up to n using optimized sieve"""
        if n in self.primes_cache:
            return self.primes_cache[n]
        
        # Segmented sieve for large n
        primes = self.segmented_sieve(n)
        self.primes_cache[n] = primes
        return primes
    
    def segmented_sieve(self, n):
        """Segmented sieve of Eratosthenes"""
        limit = isqrt(n)
        base_primes = NumberTheory.sieve_of_eratosthenes(limit)
        
        primes = base_primes.copy()
        segment_size = max(limit, 32768)
        
        for low in range(limit + 1, n + 1, segment_size):
            high = min(low + segment_size - 1, n)
            segment = [True] * (high - low + 1)
            
            for prime in base_primes:
                start = max(prime * prime, (low + prime - 1) // prime * prime)
                for j in range(start, high + 1, prime):
                    segment[j - low] = False
            
            for i in range(len(segment)):
                if segment[i]:
                    primes.append(low + i)
        
        return primes
    
    def next_prime(self, n):
        """Find next prime after n"""
        candidate = n + 1
        while not NumberTheory.miller_rabin(candidate):
            candidate += 1
        return candidate
    
    def prime_gaps(self, start, end):
        """Analyze gaps between consecutive primes"""
        primes = [p for p in self.generate_primes_up_to(end) if p >= start]
        gaps = [primes[i+1] - primes[i] for i in range(len(primes)-1)]
        return gaps
```

### Lab 2: Cryptographic Protocol Simulator
```python
class CryptoProtocolSimulator:
    def __init__(self):
        self.participants = {}
        self.messages = []
    
    def add_participant(self, name, crypto_system):
        """Add a participant with their crypto system"""
        self.participants[name] = crypto_system
    
    def simulate_rsa_communication(self, sender, receiver, message):
        """Simulate RSA encrypted communication"""
        sender_system = self.participants[sender]
        receiver_system = self.participants[receiver]
        
        # Encrypt with receiver's public key
        ciphertext = sender_system.encrypt(message, receiver_system.public_key)
        
        # Decrypt with receiver's private key
        decrypted = receiver_system.decrypt(ciphertext, receiver_system.private_key)
        
        self.messages.append({
            'sender': sender,
            'receiver': receiver,
            'original': message,
            'ciphertext': ciphertext,
            'decrypted': decrypted
        })
        
        return decrypted
    
    def simulate_key_exchange(self, participant1, participant2):
        """Simulate Diffie-Hellman key exchange"""
        dh1 = self.participants[participant1]
        dh2 = self.participants[participant2]
        
        # Exchange public keys
        shared1 = dh1.compute_shared_secret(dh2.public_key)
        shared2 = dh2.compute_shared_secret(dh1.public_key)
        
        return shared1 == shared2, shared1
    
    def analyze_security(self, key_size):
        """Analyze security based on key size"""
        # Estimate time to break using current technology
        operations = 2 ** (key_size / 2)  # Simplified estimate
        
        # Assume 10^12 operations per second
        seconds = operations / (10 ** 12)
        years = seconds / (365 * 24 * 3600)
        
        return {
            'key_size': key_size,
            'operations': operations,
            'years_to_break': years
        }
```

### Lab 3: Number Theory Visualizer
```python
import matplotlib.pyplot as plt
import numpy as np

class NumberTheoryVisualizer:
    def plot_prime_distribution(self, n):
        """Plot prime distribution and compare with approximations"""
        primes = NumberTheory.sieve_of_eratosthenes(n)
        x = list(range(2, n + 1))
        
        # Count primes up to each x
        prime_count = []
        prime_set = set(primes)
        count = 0
        
        for i in x:
            if i in prime_set:
                count += 1
            prime_count.append(count)
        
        # Approximations
        li_approx = [i / np.log(i) if i > 1 else 0 for i in x]
        
        plt.figure(figsize=(12, 8))
        plt.plot(x, prime_count, label='π(x) - Actual', linewidth=2)
        plt.plot(x, li_approx, label='x/ln(x) - Approximation', linestyle='--')
        plt.xlabel('x')
        plt.ylabel('Number of primes ≤ x')
        plt.title('Prime Number Distribution')
        plt.legend()
        plt.grid(True)
        plt.show()
    
    def plot_euler_totient(self, n):
        """Plot Euler's totient function"""
        x = list(range(1, n + 1))
        phi_values = [NumberTheory.euler_totient(i) for i in x]
        
        plt.figure(figsize=(12, 6))
        plt.plot(x, phi_values, 'b-', linewidth=1)
        plt.xlabel('n')
        plt.ylabel('φ(n)')
        plt.title("Euler's Totient Function")
        plt.grid(True)
        plt.show()
    
    def plot_modular_arithmetic(self, a, m):
        """Visualize modular arithmetic patterns"""
        x = list(range(0, 2 * m))
        y = [(a * i) % m for i in x]
        
        plt.figure(figsize=(10, 6))
        plt.scatter(x, y, alpha=0.7)
        plt.xlabel('i')
        plt.ylabel(f'({a} × i) mod {m}')
        plt.title(f'Modular Arithmetic Pattern: {a}x mod {m}')
        plt.grid(True)
        plt.show()
```

## 🎯 Assessment and Evaluation

### Quiz Questions (35 questions)
1. What is the time complexity of the Euclidean algorithm?
2. State and prove Fermat's Little Theorem.
3. Explain why RSA decryption works mathematically.
4. What is the discrete logarithm problem?
5. How does the Chinese Remainder Theorem help in RSA optimization?

### Programming Assignments
1. Implement a complete number theory library
2. Build an RSA cryptosystem with key generation
3. Create a prime number analysis tool
4. Develop a cryptographic protocol simulator

### Major Project: Secure Communication System
Build a complete secure communication system that includes:
- RSA key generation and management
- Message encryption/decryption
- Digital signatures
- Key exchange protocols
- Security analysis tools

## 📚 Resources and References

### Textbooks
- "Elementary Number Theory" by David Burton
- "A Course in Number Theory and Cryptography" by Neal Koblitz
- "Introduction to Modern Cryptography" by Jonathan Katz and Yehuda Lindell

### Online Resources
- [Number Theory Web](http://www.numbertheory.org/)
- [Wolfram MathWorld - Number Theory](https://mathworld.wolfram.com/NumberTheory.html)
- [NIST Cryptographic Standards](https://csrc.nist.gov/)

### Cryptography Tools
- OpenSSL library
- Crypto++ library
- Python cryptography library

## 🏆 Learning Outcomes
After completing this module, you will:
- Master fundamental number theory concepts
- Understand and implement cryptographic algorithms
- Apply number theory to security problems
- Analyze the mathematical foundations of cryptography
- Implement efficient number-theoretic algorithms
- Score 95%+ on number theory and cryptography problems
- Be prepared for advanced cryptography and security courses

**Next Module**: Algorithms and Complexity →