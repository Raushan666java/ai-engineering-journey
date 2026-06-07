# DAY 25 - QUICK REFERENCE GUIDE
## Advanced Algorithms & Data Structures Cheat Sheet

---

## 🔥 **SEGMENT TREE**

### **Basic Template**
```java
class SegmentTree {
    long[] tree;
    int n;
    
    void build(int[] arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
        } else {
            int mid = (start + end) / 2;
            build(arr, 2*node+1, start, mid);
            build(arr, 2*node+2, mid+1, end);
            tree[node] = tree[2*node+1] + tree[2*node+2];
        }
    }
    
    long query(int node, int start, int end, int l, int r) {
        if (r < start || end < l) return 0;
        if (l <= start && end <= r) return tree[node];
        
        int mid = (start + end) / 2;
        return query(2*node+1, start, mid, l, r) +
               query(2*node+2, mid+1, end, l, r);
    }
}
```

### **With Lazy Propagation**
```java
void push(int node, int start, int end) {
    if (lazy[node] != 0) {
        tree[node] += (end - start + 1) * lazy[node];
        if (start != end) {
            lazy[2*node+1] += lazy[node];
            lazy[2*node+2] += lazy[node];
        }
        lazy[node] = 0;
    }
}

void updateRange(int node, int start, int end, int l, int r, long val) {
    push(node, start, end);
    if (start > r || end < l) return;
    
    if (start >= l && end <= r) {
        lazy[node] += val;
        push(node, start, end);
        return;
    }
    
    int mid = (start + end) / 2;
    updateRange(2*node+1, start, mid, l, r, val);
    updateRange(2*node+2, mid+1, end, l, r, val);
    
    push(2*node+1, start, mid);
    push(2*node+2, mid+1, end);
    tree[node] = tree[2*node+1] + tree[2*node+2];
}
```

**Complexity:** Build O(n), Query O(log n), Update O(log n), Space O(4n)

---

## 🌲 **FENWICK TREE (BIT)**

### **1D Fenwick Tree**
```java
class FenwickTree {
    long[] tree;
    int n;
    
    void update(int i, long delta) {
        while (i <= n) {
            tree[i] += delta;
            i += i & (-i);  // Add last set bit
        }
    }
    
    long query(int i) {
        long sum = 0;
        while (i > 0) {
            sum += tree[i];
            i -= i & (-i);  // Remove last set bit
        }
        return sum;
    }
    
    long rangeQuery(int l, int r) {
        return query(r) - query(l - 1);
    }
}
```

### **2D Fenwick Tree**
```java
void update(int x, int y, long delta) {
    for (int i = x; i <= n; i += i & (-i)) {
        for (int j = y; j <= m; j += j & (-j)) {
            tree[i][j] += delta;
        }
    }
}

long query(int x, int y) {
    long sum = 0;
    for (int i = x; i > 0; i -= i & (-i)) {
        for (int j = y; j > 0; j -= j & (-j)) {
            sum += tree[i][j];
        }
    }
    return sum;
}
```

**Complexity:** Update O(log n), Query O(log n), Space O(n)

---

## 🔍 **STRING ALGORITHMS**

### **KMP Pattern Matching**
```java
int[] computeLPS(String pattern) {
    int[] lps = new int[pattern.length()];
    int len = 0, i = 1;
    
    while (i < pattern.length()) {
        if (pattern.charAt(i) == pattern.charAt(len)) {
            lps[i++] = ++len;
        } else {
            if (len != 0) len = lps[len - 1];
            else lps[i++] = 0;
        }
    }
    return lps;
}

List<Integer> KMP(String text, String pattern) {
    int[] lps = computeLPS(pattern);
    List<Integer> matches = new ArrayList<>();
    int i = 0, j = 0;
    
    while (i < text.length()) {
        if (text.charAt(i) == pattern.charAt(j)) {
            i++; j++;
        }
        
        if (j == pattern.length()) {
            matches.add(i - j);
            j = lps[j - 1];
        } else if (i < text.length() && text.charAt(i) != pattern.charAt(j)) {
            if (j != 0) j = lps[j - 1];
            else i++;
        }
    }
    return matches;
}
```

**Complexity:** O(n + m)

### **Manacher's Algorithm (Longest Palindrome)**
```java
String longestPalindrome(String s) {
    String t = "^#" + String.join("#", s.split("")) + "#$";
    int[] p = new int[t.length()];
    int center = 0, right = 0;
    
    for (int i = 1; i < t.length() - 1; i++) {
        int mirror = 2 * center - i;
        if (i < right) p[i] = Math.min(right - i, p[mirror]);
        
        while (t.charAt(i + p[i] + 1) == t.charAt(i - p[i] - 1)) p[i]++;
        
        if (i + p[i] > right) {
            center = i;
            right = i + p[i];
        }
    }
    
    int maxLen = 0, centerIndex = 0;
    for (int i = 0; i < p.length; i++) {
        if (p[i] > maxLen) {
            maxLen = p[i];
            centerIndex = i;
        }
    }
    
    int start = (centerIndex - maxLen) / 2;
    return s.substring(start, start + maxLen);
}
```

**Complexity:** O(n)

### **Z-Algorithm**
```java
int[] computeZ(String s) {
    int n = s.length();
    int[] z = new int[n];
    int l = 0, r = 0;
    
    for (int i = 1; i < n; i++) {
        if (i > r) {
            l = r = i;
            while (r < n && s.charAt(r - l) == s.charAt(r)) r++;
            z[i] = r - l;
            r--;
        } else {
            int k = i - l;
            if (z[k] < r - i + 1) z[i] = z[k];
            else {
                l = i;
                while (r < n && s.charAt(r - l) == s.charAt(r)) r++;
                z[i] = r - l;
                r--;
            }
        }
    }
    return z;
}
```

**Complexity:** O(n)

---

## 🌊 **GRAPH ALGORITHMS**

### **Maximum Flow (Edmond-Karp)**
```java
int maxFlow(int[][] capacity, int source, int sink) {
    int maxFlow = 0;
    int[][] flow = new int[n][n];
    int[] parent = new int[n];
    
    while (bfs(capacity, flow, source, sink, parent)) {
        int pathFlow = Integer.MAX_VALUE;
        
        for (int v = sink; v != source; v = parent[v]) {
            int u = parent[v];
            pathFlow = Math.min(pathFlow, capacity[u][v] - flow[u][v]);
        }
        
        for (int v = sink; v != source; v = parent[v]) {
            int u = parent[v];
            flow[u][v] += pathFlow;
            flow[v][u] -= pathFlow;
        }
        
        maxFlow += pathFlow;
    }
    
    return maxFlow;
}

boolean bfs(int[][] capacity, int[][] flow, int source, int sink, int[] parent) {
    boolean[] visited = new boolean[n];
    Queue<Integer> queue = new LinkedList<>();
    queue.offer(source);
    visited[source] = true;
    parent[source] = -1;
    
    while (!queue.isEmpty()) {
        int u = queue.poll();
        for (int v = 0; v < n; v++) {
            if (!visited[v] && capacity[u][v] - flow[u][v] > 0) {
                queue.offer(v);
                parent[v] = u;
                visited[v] = true;
                if (v == sink) return true;
            }
        }
    }
    return false;
}
```

**Complexity:** O(V * E²)

### **Bipartite Matching**
```java
int maxMatching(List<Integer>[] graph, int[] match) {
    int result = 0;
    boolean[] visited;
    
    for (int u = 0; u < graph.length; u++) {
        visited = new boolean[match.length];
        if (augment(graph, match, visited, u)) result++;
    }
    return result;
}

boolean augment(List<Integer>[] graph, int[] match, boolean[] visited, int u) {
    for (int v : graph[u]) {
        if (visited[v]) continue;
        visited[v] = true;
        
        if (match[v] == -1 || augment(graph, match, visited, match[v])) {
            match[v] = u;
            return true;
        }
    }
    return false;
}
```

**Complexity:** O(V * E)

### **Tarjan's SCC**
```java
void tarjanSCC(int u, List<Integer>[] graph, boolean[] onStack, 
               Stack<Integer> stack, int[] disc, int[] low, int[] time) {
    disc[u] = low[u] = ++time[0];
    stack.push(u);
    onStack[u] = true;
    
    for (int v : graph[u]) {
        if (disc[v] == -1) {
            tarjanSCC(v, graph, onStack, stack, disc, low, time);
            low[u] = Math.min(low[u], low[v]);
        } else if (onStack[v]) {
            low[u] = Math.min(low[u], disc[v]);
        }
    }
    
    if (low[u] == disc[u]) {
        while (true) {
            int v = stack.pop();
            onStack[v] = false;
            if (v == u) break;
        }
    }
}
```

**Complexity:** O(V + E)

---

## 💎 **ADVANCED DP**

### **Bitmask DP (TSP)**
```java
int tsp(int mask, int pos, int[][] dist, int[][] dp) {
    if (mask == (1 << n) - 1) return dist[pos][0];
    
    if (dp[mask][pos] != -1) return dp[mask][pos];
    
    int ans = Integer.MAX_VALUE;
    for (int city = 0; city < n; city++) {
        if ((mask & (1 << city)) == 0) {
            ans = Math.min(ans, dist[pos][city] + 
                          tsp(mask | (1 << city), city, dist, dp));
        }
    }
    
    return dp[mask][pos] = ans;
}
```

**Complexity:** O(n² * 2ⁿ), Space O(n * 2ⁿ)

### **Digit DP Template**
```java
long digitDP(String num, int pos, int sum, boolean tight, Long[][][] dp) {
    if (pos == num.length()) return sum == target ? 1 : 0;
    
    if (dp[pos][sum][tight ? 1 : 0] != null) 
        return dp[pos][sum][tight ? 1 : 0];
    
    int limit = tight ? (num.charAt(pos) - '0') : 9;
    long count = 0;
    
    for (int digit = 0; digit <= limit; digit++) {
        count += digitDP(num, pos + 1, sum + digit,
                        tight && (digit == limit), dp);
    }
    
    return dp[pos][sum][tight ? 1 : 0] = count;
}
```

### **SOS DP**
```java
long[] sosDP(long[] arr) {
    int n = arr.length;
    int logN = Integer.bitCount(n - 1) + 1;
    long[] dp = arr.clone();
    
    for (int i = 0; i < logN; i++) {
        for (int mask = 0; mask < n; mask++) {
            if ((mask & (1 << i)) != 0) {
                dp[mask] += dp[mask ^ (1 << i)];
            }
        }
    }
    
    return dp;
}
```

**Complexity:** O(n * 2ⁿ)

---

## 🎯 **COMPUTATIONAL GEOMETRY**

### **Convex Hull (Graham Scan)**
```java
List<Point> grahamScan(List<Point> points) {
    // Find bottom-most point
    Point pivot = points.stream()
        .min((a, b) -> a.y != b.y ? Double.compare(a.y, b.y) : 
                                    Double.compare(a.x, b.x))
        .get();
    
    // Sort by polar angle
    points.sort((a, b) -> {
        double angle = crossProduct(pivot, a, b);
        if (Math.abs(angle) < 1e-9) 
            return Double.compare(pivot.distTo(a), pivot.distTo(b));
        return angle > 0 ? -1 : 1;
    });
    
    // Build hull
    Stack<Point> hull = new Stack<>();
    hull.push(points.get(0));
    hull.push(points.get(1));
    
    for (int i = 2; i < points.size(); i++) {
        Point top = hull.pop();
        while (!hull.isEmpty() && 
               crossProduct(hull.peek(), top, points.get(i)) <= 0) {
            top = hull.pop();
        }
        hull.push(top);
        hull.push(points.get(i));
    }
    
    return new ArrayList<>(hull);
}

double crossProduct(Point o, Point a, Point b) {
    return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
}
```

**Complexity:** O(n log n)

---

## 🔢 **NUMBER THEORY**

### **Sieve of Eratosthenes**
```java
boolean[] sieve(int n) {
    boolean[] prime = new boolean[n + 1];
    Arrays.fill(prime, true);
    prime[0] = prime[1] = false;
    
    for (int i = 2; i * i <= n; i++) {
        if (prime[i]) {
            for (int j = i * i; j <= n; j += i) {
                prime[j] = false;
            }
        }
    }
    return prime;
}
```

### **Fast Exponentiation**
```java
long modPow(long a, long b, long mod) {
    long result = 1;
    a %= mod;
    
    while (b > 0) {
        if ((b & 1) == 1) result = (result * a) % mod;
        a = (a * a) % mod;
        b >>= 1;
    }
    
    return result;
}
```

### **Extended GCD**
```java
long[] extGCD(long a, long b) {
    if (b == 0) return new long[]{a, 1, 0};
    
    long[] result = extGCD(b, a % b);
    long gcd = result[0];
    long x = result[2];
    long y = result[1] - (a / b) * result[2];
    
    return new long[]{gcd, x, y};
}

long modInverse(long a, long mod) {
    long[] result = extGCD(a, mod);
    return (result[1] % mod + mod) % mod;
}
```

---

## 🎲 **BIT MANIPULATION TRICKS**

```java
// Check if bit i is set
boolean isSet(int mask, int i) {
    return (mask & (1 << i)) != 0;
}

// Set bit i
int setBit(int mask, int i) {
    return mask | (1 << i);
}

// Clear bit i
int clearBit(int mask, int i) {
    return mask & ~(1 << i);
}

// Toggle bit i
int toggleBit(int mask, int i) {
    return mask ^ (1 << i);
}

// Count set bits
int countBits(int mask) {
    return Integer.bitCount(mask);
}

// Iterate through all subsets of mask
for (int s = mask; s > 0; s = (s - 1) & mask) {
    // Process subset s
}

// Check if power of 2
boolean isPowerOf2(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}

// Get last set bit
int lastSetBit(int n) {
    return n & (-n);
}

// Clear last set bit
int clearLastSetBit(int n) {
    return n & (n - 1);
}
```

---

## 📊 **COMPLEXITY CHEAT SHEET**

| Data Structure | Build | Update | Query | Space |
|----------------|-------|--------|-------|-------|
| Segment Tree | O(n) | O(log n) | O(log n) | O(4n) |
| Fenwick Tree | O(n log n) | O(log n) | O(log n) | O(n) |
| Trie | O(mk) | O(k) | O(k) | O(mk×σ) |
| Suffix Array | O(n log²n) | - | O(m log n) | O(n) |

| Algorithm | Time | Space |
|-----------|------|-------|
| KMP | O(n+m) | O(m) |
| Manacher | O(n) | O(n) |
| Aho-Corasick | O(n+m+z) | O(m×σ) |
| Max Flow | O(VE²) | O(V²) |
| Bipartite Matching | O(VE) | O(V) |
| Convex Hull | O(n log n) | O(n) |
| TSP (Bitmask) | O(n²×2ⁿ) | O(n×2ⁿ) |
| FFT | O(n log n) | O(n) |

---

## 🚀 **QUICK DECISION GUIDE**

### **Range Queries?**
- Static array → Prefix Sum O(n) build, O(1) query
- Point updates → Fenwick Tree O(log n)
- Range updates → Segment Tree with Lazy O(log n)
- Min/Max queries → Segment Tree or Sparse Table

### **String Matching?**
- Single pattern → KMP O(n+m)
- Multiple patterns → Aho-Corasick O(n+m+z)
- Approximate match → Edit Distance DP O(nm)
- Palindromes → Manacher O(n)

### **Graph Problem?**
- Shortest path → Dijkstra/Bellman-Ford
- All pairs → Floyd-Warshall O(V³)
- Max flow → Edmond-Karp O(VE²)
- Matching → Hungarian O(n³)
- Connectivity → DFS/BFS/Union-Find

### **DP Approach?**
- Small n (≤20) → Bitmask DP
- Range counting → Digit DP
- Tree structure → Tree DP
- Subset sums → SOS DP

---

**Pro Tip:** Bookmark this page for quick reference during contests and interviews! 📌
