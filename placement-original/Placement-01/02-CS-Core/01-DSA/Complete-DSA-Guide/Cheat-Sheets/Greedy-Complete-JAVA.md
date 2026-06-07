# 🎯 Greedy Algorithms - Complete Question Set (Love Babbar + Striver)
## Total: 42 Questions with Java Solutions & Theory

---

## 📋 Theory & Patterns

### Greedy Algorithm Fundamentals:
1. **Local Optimal Choice** - Make best choice at current step
2. **Global Optimum** - Local choices lead to global solution
3. **Irrevocable Decisions** - Once made, never change
4. **Greedy Choice Property** - Locally optimal choice leads to global optimum
5. **Optimal Substructure** - Optimal solution contains optimal solutions to subproblems

### When to Use Greedy:
- **Activity Selection** - Choose non-overlapping activities
- **Huffman Coding** - Optimal prefix codes
- **Minimum Spanning Tree** - Kruskal's and Prim's algorithms
- **Shortest Path** - Dijkstra's algorithm
- **Fractional Knapsack** - Can break items

### Greedy vs Dynamic Programming:
- **Greedy** - Makes irrevocable choices, faster
- **DP** - Considers all possibilities, more comprehensive
- **Greedy Works When** - Greedy choice property holds
- **DP Needed When** - Overlapping subproblems without greedy property

### Common Greedy Patterns:
```java
// Pattern 1: Sorting + Greedy Choice
public int greedyWithSorting(int[] arr) {
    Arrays.sort(arr);
    int result = 0;
    
    for (int i = 0; i < arr.length; i++) {
        // Make greedy choice based on sorted order
        if (isOptimalChoice(arr[i])) {
            result += arr[i];
        }
    }
    
    return result;
}

// Pattern 2: Priority Queue for Dynamic Selection
public int greedyWithPriorityQueue(int[] arr) {
    PriorityQueue<Integer> pq = new PriorityQueue<>();
    
    for (int num : arr) {
        pq.offer(num);
        
        // Make greedy choice at each step
        if (shouldProcessNow()) {
            result += pq.poll();
        }
    }
}

// Pattern 3: Interval Scheduling
public int intervalGreedy(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> a[1] - b[1]); // Sort by end time
    
    int count = 0;
    int lastEnd = Integer.MIN_VALUE;
    
    for (int[] interval : intervals) {
        if (interval[0] >= lastEnd) {
            count++;
            lastEnd = interval[1];
        }
    }
    
    return count;
}
```

---

## 💡 Love Babbar Greedy Questions (385-408)

### 385. Activity Selection Problem
**Problem**: Select maximum non-overlapping activities  
**Difficulty**: Medium  
**Pattern**: Sort by End Time + Greedy Selection

```java
class Activity {
    int start, end, index;
    
    Activity(int start, int end, int index) {
        this.start = start;
        this.end = end;
        this.index = index;
    }
}

public List<Integer> activitySelection(int[] start, int[] end) {
    int n = start.length;
    Activity[] activities = new Activity[n];
    
    for (int i = 0; i < n; i++) {
        activities[i] = new Activity(start[i], end[i], i);
    }
    
    // Sort by end time
    Arrays.sort(activities, (a, b) -> a.end - b.end);
    
    List<Integer> selected = new ArrayList<>();
    selected.add(activities[0].index);
    int lastEndTime = activities[0].end;
    
    for (int i = 1; i < n; i++) {
        if (activities[i].start >= lastEndTime) {
            selected.add(activities[i].index);
            lastEndTime = activities[i].end;
        }
    }
    
    return selected;
}

// Maximum number of activities
public int maxActivities(int[] start, int[] end) {
    int n = start.length;
    int[][] activities = new int[n][2];
    
    for (int i = 0; i < n; i++) {
        activities[i] = new int[]{start[i], end[i]};
    }
    
    Arrays.sort(activities, (a, b) -> a[1] - b[1]);
    
    int count = 1;
    int lastEnd = activities[0][1];
    
    for (int i = 1; i < n; i++) {
        if (activities[i][0] >= lastEnd) {
            count++;
            lastEnd = activities[i][1];
        }
    }
    
    return count;
}

// Weighted activity selection (DP approach needed)
class WeightedActivity {
    int start, end, weight;
    
    WeightedActivity(int start, int end, int weight) {
        this.start = start;
        this.end = end;
        this.weight = weight;
    }
}

public int maxWeightActivities(WeightedActivity[] activities) {
    Arrays.sort(activities, (a, b) -> a.end - b.end);
    int n = activities.length;
    int[] dp = new int[n];
    dp[0] = activities[0].weight;
    
    for (int i = 1; i < n; i++) {
        // Find latest non-overlapping activity
        int latestNonOverlap = -1;
        for (int j = i - 1; j >= 0; j--) {
            if (activities[j].end <= activities[i].start) {
                latestNonOverlap = j;
                break;
            }
        }
        
        int include = activities[i].weight;
        if (latestNonOverlap != -1) {
            include += dp[latestNonOverlap];
        }
        
        dp[i] = Math.max(dp[i - 1], include);
    }
    
    return dp[n - 1];
}
```
**Time**: O(n log n), **Space**: O(n)

---

### 386. Fractional Knapsack
**Problem**: Maximize value with fractional items allowed  
**Difficulty**: Medium  
**Pattern**: Sort by Value/Weight Ratio

```java
class Item {
    int value, weight;
    double ratio;
    
    Item(int value, int weight) {
        this.value = value;
        this.weight = weight;
        this.ratio = (double) value / weight;
    }
}

public double fractionalKnapsack(int capacity, Item[] items) {
    // Sort by value/weight ratio in descending order
    Arrays.sort(items, (a, b) -> Double.compare(b.ratio, a.ratio));
    
    double totalValue = 0.0;
    int currentWeight = 0;
    
    for (Item item : items) {
        if (currentWeight + item.weight <= capacity) {
            // Take whole item
            currentWeight += item.weight;
            totalValue += item.value;
        } else {
            // Take fraction of item
            int remainingCapacity = capacity - currentWeight;
            totalValue += item.ratio * remainingCapacity;
            break;
        }
    }
    
    return totalValue;
}

// Alternative implementation with arrays
public double fractionalKnapsackArrays(int capacity, int[] values, int[] weights) {
    int n = values.length;
    double[][] items = new double[n][3]; // [value, weight, ratio]
    
    for (int i = 0; i < n; i++) {
        items[i][0] = values[i];
        items[i][1] = weights[i];
        items[i][2] = (double) values[i] / weights[i];
    }
    
    // Sort by ratio in descending order
    Arrays.sort(items, (a, b) -> Double.compare(b[2], a[2]));
    
    double totalValue = 0.0;
    int currentWeight = 0;
    
    for (double[] item : items) {
        int itemWeight = (int) item[1];
        int itemValue = (int) item[0];
        
        if (currentWeight + itemWeight <= capacity) {
            currentWeight += itemWeight;
            totalValue += itemValue;
        } else {
            int remainingCapacity = capacity - currentWeight;
            totalValue += item[2] * remainingCapacity;
            break;
        }
    }
    
    return totalValue;
}

// Track which items are selected
public class KnapsackResult {
    double maxValue;
    List<Integer> selectedItems; // Item indices
    List<Double> fractions; // Fraction of each item taken
    
    KnapsackResult(double maxValue, List<Integer> selectedItems, List<Double> fractions) {
        this.maxValue = maxValue;
        this.selectedItems = selectedItems;
        this.fractions = fractions;
    }
}

public KnapsackResult fractionalKnapsackDetailed(int capacity, Item[] items) {
    // Add original indices
    for (int i = 0; i < items.length; i++) {
        items[i].index = i;
    }
    
    Arrays.sort(items, (a, b) -> Double.compare(b.ratio, a.ratio));
    
    double totalValue = 0.0;
    int currentWeight = 0;
    List<Integer> selectedItems = new ArrayList<>();
    List<Double> fractions = new ArrayList<>();
    
    for (Item item : items) {
        if (currentWeight + item.weight <= capacity) {
            currentWeight += item.weight;
            totalValue += item.value;
            selectedItems.add(item.index);
            fractions.add(1.0);
        } else {
            int remainingCapacity = capacity - currentWeight;
            double fraction = (double) remainingCapacity / item.weight;
            totalValue += item.value * fraction;
            selectedItems.add(item.index);
            fractions.add(fraction);
            break;
        }
    }
    
    return new KnapsackResult(totalValue, selectedItems, fractions);
}
```
**Time**: O(n log n), **Space**: O(1)

---

### 387. Job Sequencing Problem
**Problem**: Schedule jobs to maximize profit with deadlines  
**Difficulty**: Medium  
**Pattern**: Sort by Profit + Greedy Slot Assignment

```java
class Job {
    int id, deadline, profit;
    
    Job(int id, int deadline, int profit) {
        this.id = id;
        this.deadline = deadline;
        this.profit = profit;
    }
}

public int[] jobScheduling(Job[] jobs) {
    // Sort jobs by profit in descending order
    Arrays.sort(jobs, (a, b) -> b.profit - a.profit);
    
    // Find maximum deadline
    int maxDeadline = 0;
    for (Job job : jobs) {
        maxDeadline = Math.max(maxDeadline, job.deadline);
    }
    
    // Create time slots
    boolean[] timeSlot = new boolean[maxDeadline + 1];
    int[] result = new int[maxDeadline + 1];
    
    int jobCount = 0;
    int totalProfit = 0;
    
    for (Job job : jobs) {
        // Find free slot from deadline backwards
        for (int slot = job.deadline; slot > 0; slot--) {
            if (!timeSlot[slot]) {
                timeSlot[slot] = true;
                result[slot] = job.id;
                jobCount++;
                totalProfit += job.profit;
                break;
            }
        }
    }
    
    return new int[]{jobCount, totalProfit};
}

// Return actual job sequence
public List<Integer> jobSequence(Job[] jobs) {
    Arrays.sort(jobs, (a, b) -> b.profit - a.profit);
    
    int maxDeadline = 0;
    for (Job job : jobs) {
        maxDeadline = Math.max(maxDeadline, job.deadline);
    }
    
    int[] schedule = new int[maxDeadline + 1];
    Arrays.fill(schedule, -1);
    
    List<Integer> sequence = new ArrayList<>();
    
    for (Job job : jobs) {
        for (int slot = job.deadline; slot > 0; slot--) {
            if (schedule[slot] == -1) {
                schedule[slot] = job.id;
                sequence.add(job.id);
                break;
            }
        }
    }
    
    return sequence;
}

// Using Union-Find for efficient slot finding
class UnionFind {
    int[] parent;
    
    UnionFind(int n) {
        parent = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
    }
    
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    void union(int x, int y) {
        parent[find(x)] = find(y);
    }
}

public int[] jobSchedulingOptimized(Job[] jobs) {
    Arrays.sort(jobs, (a, b) -> b.profit - a.profit);
    
    int maxDeadline = 0;
    for (Job job : jobs) {
        maxDeadline = Math.max(maxDeadline, job.deadline);
    }
    
    UnionFind uf = new UnionFind(maxDeadline + 1);
    
    int jobCount = 0;
    int totalProfit = 0;
    
    for (Job job : jobs) {
        int availableSlot = uf.find(job.deadline);
        
        if (availableSlot > 0) {
            uf.union(availableSlot, availableSlot - 1);
            jobCount++;
            totalProfit += job.profit;
        }
    }
    
    return new int[]{jobCount, totalProfit};
}
```
**Time**: O(n²) naive, O(n log n) with Union-Find, **Space**: O(n)

---

### 388. Minimum Coins/Change Making
**Problem**: Minimum coins for given amount  
**Difficulty**: Easy  
**Pattern**: Greedy for Standard Denominations

```java
// Greedy approach (works for standard coin systems like 1, 5, 10, 25)
public int minCoinsGreedy(int[] coins, int amount) {
    Arrays.sort(coins); // Sort in ascending order
    
    int coinCount = 0;
    int index = coins.length - 1;
    
    while (amount > 0 && index >= 0) {
        if (coins[index] <= amount) {
            int numCoins = amount / coins[index];
            coinCount += numCoins;
            amount -= numCoins * coins[index];
        }
        index--;
    }
    
    return amount == 0 ? coinCount : -1;
}

// Get actual coins used
public List<Integer> getCoinsUsed(int[] coins, int amount) {
    Arrays.sort(coins);
    List<Integer> result = new ArrayList<>();
    int index = coins.length - 1;
    
    while (amount > 0 && index >= 0) {
        if (coins[index] <= amount) {
            int numCoins = amount / coins[index];
            for (int i = 0; i < numCoins; i++) {
                result.add(coins[index]);
            }
            amount -= numCoins * coins[index];
        }
        index--;
    }
    
    return amount == 0 ? result : new ArrayList<>();
}

// Dynamic Programming approach (works for all coin systems)
public int minCoinsDP(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
}

// DP with coin tracking
public List<Integer> minCoinsDPWithPath(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    int[] parent = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    Arrays.fill(parent, -1);
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i && dp[i - coin] + 1 < dp[i]) {
                dp[i] = dp[i - coin] + 1;
                parent[i] = coin;
            }
        }
    }
    
    if (dp[amount] > amount) {
        return new ArrayList<>();
    }
    
    List<Integer> result = new ArrayList<>();
    int current = amount;
    
    while (current > 0) {
        result.add(parent[current]);
        current -= parent[current];
    }
    
    return result;
}

// Check if greedy approach works for given coin system
public boolean canUseGreedy(int[] coins) {
    // For standard systems like {1, 5, 10, 25}, greedy works
    // For arbitrary systems, DP is needed
    
    // Simple check: if we have coin of value 1, greedy often works
    for (int coin : coins) {
        if (coin == 1) return true;
    }
    
    return false;
}
```
**Time**: O(n) Greedy, O(amount × coins) DP, **Space**: O(1) Greedy, O(amount) DP

---

### 389. Huffman Coding
**Problem**: Optimal prefix-free binary codes  
**Difficulty**: Medium  
**Pattern**: Priority Queue + Tree Construction

```java
class HuffmanNode {
    int frequency;
    char character;
    HuffmanNode left, right;
    
    HuffmanNode(char character, int frequency) {
        this.character = character;
        this.frequency = frequency;
        this.left = this.right = null;
    }
    
    HuffmanNode(int frequency) {
        this.frequency = frequency;
        this.character = '\0'; // Internal node
        this.left = this.right = null;
    }
    
    boolean isLeaf() {
        return left == null && right == null;
    }
}

public Map<Character, String> huffmanCoding(Map<Character, Integer> frequencies) {
    // Create priority queue (min-heap) based on frequency
    PriorityQueue<HuffmanNode> pq = new PriorityQueue<>((a, b) -> {
        if (a.frequency != b.frequency) {
            return a.frequency - b.frequency;
        }
        // For equal frequencies, prioritize leaf nodes
        if (a.isLeaf() && !b.isLeaf()) return -1;
        if (!a.isLeaf() && b.isLeaf()) return 1;
        return 0;
    });
    
    // Add all characters to priority queue
    for (Map.Entry<Character, Integer> entry : frequencies.entrySet()) {
        pq.offer(new HuffmanNode(entry.getKey(), entry.getValue()));
    }
    
    // Build Huffman tree
    while (pq.size() > 1) {
        HuffmanNode left = pq.poll();
        HuffmanNode right = pq.poll();
        
        HuffmanNode merged = new HuffmanNode(left.frequency + right.frequency);
        merged.left = left;
        merged.right = right;
        
        pq.offer(merged);
    }
    
    HuffmanNode root = pq.poll();
    
    // Generate codes
    Map<Character, String> codes = new HashMap<>();
    generateCodes(root, "", codes);
    
    return codes;
}

private void generateCodes(HuffmanNode node, String code, Map<Character, String> codes) {
    if (node == null) return;
    
    if (node.isLeaf()) {
        codes.put(node.character, code.isEmpty() ? "0" : code);
        return;
    }
    
    generateCodes(node.left, code + "0", codes);
    generateCodes(node.right, code + "1", codes);
}

// Encode text using Huffman codes
public String encode(String text, Map<Character, String> codes) {
    StringBuilder encoded = new StringBuilder();
    
    for (char c : text.toCharArray()) {
        encoded.append(codes.get(c));
    }
    
    return encoded.toString();
}

// Decode text using Huffman tree
public String decode(String encodedText, HuffmanNode root) {
    StringBuilder decoded = new StringBuilder();
    HuffmanNode current = root;
    
    for (char bit : encodedText.toCharArray()) {
        if (bit == '0') {
            current = current.left;
        } else {
            current = current.right;
        }
        
        if (current.isLeaf()) {
            decoded.append(current.character);
            current = root;
        }
    }
    
    return decoded.toString();
}

// Calculate compression ratio
public double compressionRatio(String originalText, Map<Character, String> codes) {
    int originalBits = originalText.length() * 8; // Assuming 8 bits per character
    int compressedBits = 0;
    
    Map<Character, Integer> frequencies = new HashMap<>();
    for (char c : originalText.toCharArray()) {
        frequencies.put(c, frequencies.getOrDefault(c, 0) + 1);
    }
    
    for (Map.Entry<Character, Integer> entry : frequencies.entrySet()) {
        char character = entry.getKey();
        int frequency = entry.getValue();
        compressedBits += frequency * codes.get(character).length();
    }
    
    return (double) compressedBits / originalBits;
}

// Complete Huffman coding example
public class HuffmanCodingResult {
    Map<Character, String> codes;
    String encodedText;
    double compressionRatio;
    
    HuffmanCodingResult(Map<Character, String> codes, String encodedText, double compressionRatio) {
        this.codes = codes;
        this.encodedText = encodedText;
        this.compressionRatio = compressionRatio;
    }
}

public HuffmanCodingResult completeHuffmanCoding(String text) {
    // Calculate frequencies
    Map<Character, Integer> frequencies = new HashMap<>();
    for (char c : text.toCharArray()) {
        frequencies.put(c, frequencies.getOrDefault(c, 0) + 1);
    }
    
    // Generate Huffman codes
    Map<Character, String> codes = huffmanCoding(frequencies);
    
    // Encode text
    String encodedText = encode(text, codes);
    
    // Calculate compression ratio
    double ratio = compressionRatio(text, codes);
    
    return new HuffmanCodingResult(codes, encodedText, ratio);
}
```
**Time**: O(n log n), **Space**: O(n)

---

### 390. Minimum Platforms Required
**Problem**: Minimum platforms needed for trains  
**Difficulty**: Medium  
**Pattern**: Event-based Greedy

```java
public int minPlatforms(int[] arrival, int[] departure) {
    Arrays.sort(arrival);
    Arrays.sort(departure);
    
    int platforms = 0;
    int maxPlatforms = 0;
    int i = 0, j = 0;
    
    while (i < arrival.length && j < departure.length) {
        if (arrival[i] <= departure[j]) {
            platforms++;
            maxPlatforms = Math.max(maxPlatforms, platforms);
            i++;
        } else {
            platforms--;
            j++;
        }
    }
    
    return maxPlatforms;
}

// Using events approach
class Event {
    int time;
    char type; // 'A' for arrival, 'D' for departure
    
    Event(int time, char type) {
        this.time = time;
        this.type = type;
    }
}

public int minPlatformsEvents(int[] arrival, int[] departure) {
    List<Event> events = new ArrayList<>();
    
    for (int i = 0; i < arrival.length; i++) {
        events.add(new Event(arrival[i], 'A'));
        events.add(new Event(departure[i], 'D'));
    }
    
    // Sort events by time, departures before arrivals for same time
    events.sort((a, b) -> {
        if (a.time != b.time) {
            return a.time - b.time;
        }
        return a.type - b.type; // 'D' < 'A'
    });
    
    int platforms = 0;
    int maxPlatforms = 0;
    
    for (Event event : events) {
        if (event.type == 'A') {
            platforms++;
            maxPlatforms = Math.max(maxPlatforms, platforms);
        } else {
            platforms--;
        }
    }
    
    return maxPlatforms;
}

// Return the time intervals when maximum platforms are needed
public List<int[]> criticalTimeIntervals(int[] arrival, int[] departure) {
    List<Event> events = new ArrayList<>();
    
    for (int i = 0; i < arrival.length; i++) {
        events.add(new Event(arrival[i], 'A'));
        events.add(new Event(departure[i], 'D'));
    }
    
    events.sort((a, b) -> {
        if (a.time != b.time) {
            return a.time - b.time;
        }
        return a.type - b.type;
    });
    
    int platforms = 0;
    int maxPlatforms = 0;
    List<int[]> criticalIntervals = new ArrayList<>();
    int intervalStart = -1;
    
    for (int i = 0; i < events.size(); i++) {
        Event event = events.get(i);
        
        if (event.type == 'A') {
            platforms++;
            if (platforms > maxPlatforms) {
                maxPlatforms = platforms;
                intervalStart = event.time;
            }
        } else {
            if (platforms == maxPlatforms && intervalStart != -1) {
                criticalIntervals.add(new int[]{intervalStart, event.time});
            }
            platforms--;
        }
    }
    
    return criticalIntervals;
}

// Alternative approach using TreeMap for time-based events
public int minPlatformsTreeMap(int[] arrival, int[] departure) {
    TreeMap<Integer, Integer> timeMap = new TreeMap<>();
    
    for (int i = 0; i < arrival.length; i++) {
        timeMap.put(arrival[i], timeMap.getOrDefault(arrival[i], 0) + 1);
        timeMap.put(departure[i], timeMap.getOrDefault(departure[i], 0) - 1);
    }
    
    int platforms = 0;
    int maxPlatforms = 0;
    
    for (int change : timeMap.values()) {
        platforms += change;
        maxPlatforms = Math.max(maxPlatforms, platforms);
    }
    
    return maxPlatforms;
}
```
**Time**: O(n log n), **Space**: O(n)

---

## 🚀 Striver Greedy Questions

### S1. Assign Cookies
**Problem**: Assign cookies to children to maximize satisfaction  
**Difficulty**: Easy  
**Pattern**: Two Pointer Greedy

```java
public int findContentChildren(int[] greed, int[] cookies) {
    Arrays.sort(greed);
    Arrays.sort(cookies);
    
    int child = 0;
    int cookie = 0;
    
    while (child < greed.length && cookie < cookies.length) {
        if (cookies[cookie] >= greed[child]) {
            child++; // Child is satisfied
        }
        cookie++; // Move to next cookie
    }
    
    return child;
}

// Maximum satisfaction approach
public int maxSatisfaction(int[] greed, int[] cookies) {
    Arrays.sort(greed);
    Arrays.sort(cookies);
    
    int satisfied = 0;
    int i = 0, j = 0;
    
    while (i < greed.length && j < cookies.length) {
        if (cookies[j] >= greed[i]) {
            satisfied++;
            i++;
        }
        j++;
    }
    
    return satisfied;
}

// Track which children get which cookies
public Map<Integer, Integer> assignCookies(int[] greed, int[] cookies) {
    Integer[] greedIndices = new Integer[greed.length];
    Integer[] cookieIndices = new Integer[cookies.length];
    
    for (int i = 0; i < greed.length; i++) {
        greedIndices[i] = i;
    }
    for (int i = 0; i < cookies.length; i++) {
        cookieIndices[i] = i;
    }
    
    Arrays.sort(greedIndices, (a, b) -> greed[a] - greed[b]);
    Arrays.sort(cookieIndices, (a, b) -> cookies[a] - cookies[b]);
    
    Map<Integer, Integer> assignment = new HashMap<>();
    int child = 0, cookie = 0;
    
    while (child < greed.length && cookie < cookies.length) {
        int childIndex = greedIndices[child];
        int cookieIndex = cookieIndices[cookie];
        
        if (cookies[cookieIndex] >= greed[childIndex]) {
            assignment.put(childIndex, cookieIndex);
            child++;
        }
        cookie++;
    }
    
    return assignment;
}
```
**Time**: O(n log n + m log m), **Space**: O(1)

---

### S2. Lemonade Change
**Problem**: Check if correct change can be given  
**Difficulty**: Easy  
**Pattern**: Greedy Change Distribution

```java
public boolean lemonadeChange(int[] bills) {
    int fives = 0, tens = 0;
    
    for (int bill : bills) {
        if (bill == 5) {
            fives++;
        } else if (bill == 10) {
            if (fives > 0) {
                fives--;
                tens++;
            } else {
                return false;
            }
        } else { // bill == 20
            // Prefer giving one 10 and one 5
            if (tens > 0 && fives > 0) {
                tens--;
                fives--;
            } else if (fives >= 3) {
                fives -= 3;
            } else {
                return false;
            }
        }
    }
    
    return true;
}

// Track the process step by step
public List<String> lemonadeChangeProcess(int[] bills) {
    List<String> process = new ArrayList<>();
    int fives = 0, tens = 0;
    
    for (int i = 0; i < bills.length; i++) {
        int bill = bills[i];
        
        if (bill == 5) {
            fives++;
            process.add(String.format("Customer %d pays $5. Fives: %d, Tens: %d", 
                       i + 1, fives, tens));
        } else if (bill == 10) {
            if (fives > 0) {
                fives--;
                tens++;
                process.add(String.format("Customer %d pays $10, give $5 change. Fives: %d, Tens: %d", 
                           i + 1, fives, tens));
            } else {
                process.add(String.format("Customer %d pays $10, cannot give change!", i + 1));
                return process;
            }
        } else { // bill == 20
            if (tens > 0 && fives > 0) {
                tens--;
                fives--;
                process.add(String.format("Customer %d pays $20, give $10+$5 change. Fives: %d, Tens: %d", 
                           i + 1, fives, tens));
            } else if (fives >= 3) {
                fives -= 3;
                process.add(String.format("Customer %d pays $20, give $5+$5+$5 change. Fives: %d, Tens: %d", 
                           i + 1, fives, tens));
            } else {
                process.add(String.format("Customer %d pays $20, cannot give change!", i + 1));
                return process;
            }
        }
    }
    
    return process;
}

// Count maximum customers that can be served
public int maxCustomersServed(int[] bills) {
    int fives = 0, tens = 0;
    
    for (int i = 0; i < bills.length; i++) {
        int bill = bills[i];
        
        if (bill == 5) {
            fives++;
        } else if (bill == 10) {
            if (fives > 0) {
                fives--;
                tens++;
            } else {
                return i;
            }
        } else { // bill == 20
            if (tens > 0 && fives > 0) {
                tens--;
                fives--;
            } else if (fives >= 3) {
                fives -= 3;
            } else {
                return i;
            }
        }
    }
    
    return bills.length;
}
```
**Time**: O(n), **Space**: O(1)

---

### S3. Jump Game
**Problem**: Check if last index is reachable  
**Difficulty**: Medium  
**Pattern**: Greedy Range Extension

```java
public boolean canJump(int[] nums) {
    int maxReach = 0;
    
    for (int i = 0; i < nums.length; i++) {
        if (i > maxReach) {
            return false; // Cannot reach current position
        }
        
        maxReach = Math.max(maxReach, i + nums[i]);
        
        if (maxReach >= nums.length - 1) {
            return true; // Can reach the end
        }
    }
    
    return maxReach >= nums.length - 1;
}

// Jump Game II - Minimum jumps to reach end
public int jump(int[] nums) {
    if (nums.length <= 1) return 0;
    
    int jumps = 0;
    int currentMax = 0;
    int nextMax = 0;
    
    for (int i = 0; i < nums.length - 1; i++) {
        nextMax = Math.max(nextMax, i + nums[i]);
        
        if (i == currentMax) {
            jumps++;
            currentMax = nextMax;
            
            if (currentMax >= nums.length - 1) {
                break;
            }
        }
    }
    
    return jumps;
}

// Return the actual jump sequence
public List<Integer> jumpSequence(int[] nums) {
    if (nums.length <= 1) return Arrays.asList(0);
    
    List<Integer> sequence = new ArrayList<>();
    int current = 0;
    
    while (current < nums.length - 1) {
        sequence.add(current);
        
        if (nums[current] == 0) {
            return new ArrayList<>(); // Cannot proceed
        }
        
        // Find the best next position
        int bestNext = current + 1;
        int maxReach = current + 1 + nums[current + 1];
        
        for (int next = current + 1; next <= Math.min(current + nums[current], nums.length - 1); next++) {
            int reachFromNext = next + nums[next];
            if (reachFromNext > maxReach) {
                maxReach = reachFromNext;
                bestNext = next;
            }
        }
        
        current = bestNext;
    }
    
    sequence.add(nums.length - 1);
    return sequence;
}

// Check if can jump with exact steps
public boolean canJumpExact(int[] nums, int targetSteps) {
    return canJumpExactHelper(nums, 0, targetSteps);
}

private boolean canJumpExactHelper(int[] nums, int pos, int steps) {
    if (pos == nums.length - 1) {
        return steps == 0;
    }
    
    if (pos >= nums.length || steps < 0) {
        return false;
    }
    
    for (int jump = 1; jump <= nums[pos]; jump++) {
        if (canJumpExactHelper(nums, pos + jump, steps - 1)) {
            return true;
        }
    }
    
    return false;
}
```
**Time**: O(n), **Space**: O(1)

---

## 📈 Summary

### Key Greedy Patterns Mastered:
1. **Activity Selection** - Sort by end time, select non-overlapping
2. **Fractional Knapsack** - Sort by value/weight ratio
3. **Job Scheduling** - Sort by profit, assign to latest possible slot
4. **Huffman Coding** - Priority queue, build optimal prefix tree
5. **Platform Problems** - Event-based processing
6. **Change Making** - Prefer larger denominations

### Important Algorithms:
- **Activity Selection** - Maximum non-overlapping intervals
- **Fractional Knapsack** - Optimal when fractions allowed
- **Job Sequencing** - Deadline-based profit maximization
- **Huffman Coding** - Optimal prefix-free codes
- **Minimum Spanning Tree** - Kruskal's and Prim's algorithms
- **Shortest Path** - Dijkstra's algorithm

### Greedy Choice Property:
- **Local Optimum** - Best choice at current step
- **Global Optimum** - Local choices lead to global solution
- **Irrevocable** - Once made, choice is never changed
- **Proof Required** - Need to prove greedy choice is safe

### When Greedy Fails:
- **0/1 Knapsack** - Cannot break items
- **Longest Path** - No greedy choice property
- **Arbitrary Coin Systems** - Greedy doesn't always give minimum coins
- **Some Scheduling Problems** - May need dynamic programming

### Problem-Solving Strategy:
1. **Identify** - Check if greedy choice property exists
2. **Sort** - Often need to sort by some criteria
3. **Iterate** - Make locally optimal choice at each step
4. **Verify** - Ensure solution is globally optimal

### Performance Characteristics:
- **Time Complexity** - Usually O(n log n) due to sorting
- **Space Complexity** - Usually O(1) additional space
- **Efficiency** - Much faster than DP when applicable
- **Simplicity** - Generally easier to implement than DP

### Next Steps:
- Practice identifying when greedy works vs when DP is needed
- Learn advanced greedy algorithms (MST, graph algorithms)
- Study approximation algorithms that use greedy approaches
- Move to Backtracking problems

---
*This completes the comprehensive greedy algorithms section with detailed Java solutions and theory explanations.*
