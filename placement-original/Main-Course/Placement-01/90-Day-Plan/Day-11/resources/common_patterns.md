# Common Hashing Patterns

## Pattern 1: Frequency Counting

### Description
Count occurrences of elements using HashMap.

### Template
```java
Map<T, Integer> freq = new HashMap<>();
for (T item : collection) {
    freq.put(item, freq.getOrDefault(item, 0) + 1);
}
```

### Problems
1. **Character Frequency**
2. **Word Frequency**
3. **Most Frequent Element**
4. **First Non-Repeating Character**
5. **Majority Element**

### Example: First Non-Repeating Character
```java
char firstNonRepeating(String s) {
    LinkedHashMap<Character, Integer> freq = new LinkedHashMap<>();
    
    // Count frequencies
    for (char c : s.toCharArray()) {
        freq.put(c, freq.getOrDefault(c, 0) + 1);
    }
    
    // Find first with count 1
    for (Map.Entry<Character, Integer> entry : freq.entrySet()) {
        if (entry.getValue() == 1) {
            return entry.getKey();
        }
    }
    
    return '\0';
}
```

**Time**: O(n)  
**Space**: O(k) where k = unique characters

---

## Pattern 2: Two Sum

### Description
Find pairs that sum to target using HashMap to store complements.

### Template
```java
Map<Integer, Integer> map = new HashMap<>();
for (int i = 0; i < nums.length; i++) {
    int complement = target - nums[i];
    
    if (map.containsKey(complement)) {
        return new int[]{map.get(complement), i};
    }
    
    map.put(nums[i], i);
}
```

### Problems
1. **Two Sum**
2. **Three Sum** (with two pointers)
3. **Four Sum**
4. **Two Sum II** (sorted array)
5. **Two Sum Less Than K**

### Example: Three Sum
```java
List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
    
    for (int i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        
        int left = i + 1, right = nums.length - 1;
        int target = -nums[i];
        
        while (left < right) {
            int sum = nums[left] + nums[right];
            
            if (sum == target) {
                result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                while (left < right && nums[left] == nums[left+1]) left++;
                while (left < right && nums[right] == nums[right-1]) right--;
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
}
```

**Time**: O(n²)  
**Space**: O(1) excluding output

---

## Pattern 3: Anagram Detection

### Description
Group or compare strings that are anagrams using sorted string or frequency map as key.

### Template

#### Method 1: Sorted String
```java
String getKey(String s) {
    char[] chars = s.toCharArray();
    Arrays.sort(chars);
    return new String(chars);
}
```

#### Method 2: Frequency Map
```java
String getKey(String s) {
    int[] count = new int[26];
    for (char c : s.toCharArray()) {
        count[c - 'a']++;
    }
    return Arrays.toString(count);
}
```

### Problems
1. **Valid Anagram**
2. **Group Anagrams**
3. **Find Anagrams in String**
4. **Anagram Mappings**

### Example: Group Anagrams
```java
List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    
    for (String str : strs) {
        // Create key from sorted string
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        String key = new String(chars);
        
        // Group by key
        map.computeIfAbsent(key, k -> new ArrayList<>()).add(str);
    }
    
    return new ArrayList<>(map.values());
}
```

**Time**: O(n × k log k) where k = max string length  
**Space**: O(n × k)

---

## Pattern 4: Sliding Window with Hash

### Description
Maintain character/element counts in sliding window using HashMap.

### Template
```java
Map<Character, Integer> window = new HashMap<>();
int left = 0;

for (int right = 0; right < s.length(); right++) {
    // Expand window
    char c = s.charAt(right);
    window.put(c, window.getOrDefault(c, 0) + 1);
    
    // Shrink window when condition met
    while (condition) {
        char leftChar = s.charAt(left);
        window.put(leftChar, window.get(leftChar) - 1);
        if (window.get(leftChar) == 0) {
            window.remove(leftChar);
        }
        left++;
    }
    
    // Update result
}
```

### Problems
1. **Longest Substring Without Repeating**
2. **Longest Substring with K Distinct**
3. **Minimum Window Substring**
4. **Find All Anagrams**
5. **Permutation in String**

### Example: Longest Substring K Distinct
```java
int lengthOfLongestSubstringKDistinct(String s, int k) {
    Map<Character, Integer> window = new HashMap<>();
    int left = 0, maxLen = 0;
    
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        window.put(c, window.getOrDefault(c, 0) + 1);
        
        // Shrink if more than k distinct
        while (window.size() > k) {
            char leftChar = s.charAt(left);
            window.put(leftChar, window.get(leftChar) - 1);
            if (window.get(leftChar) == 0) {
                window.remove(leftChar);
            }
            left++;
        }
        
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
}
```

**Time**: O(n)  
**Space**: O(k)

---

## Pattern 5: Prefix Sum with Hash

### Description
Use HashMap to store prefix sums and find subarrays with specific sum.

### Template
```java
Map<Integer, Integer> map = new HashMap<>();
map.put(0, 1);  // Base case: empty subarray
int sum = 0;
int count = 0;

for (int num : nums) {
    sum += num;
    
    // Check if (sum - k) exists
    count += map.getOrDefault(sum - k, 0);
    
    // Add current sum
    map.put(sum, map.getOrDefault(sum, 0) + 1);
}
```

### Problems
1. **Subarray Sum Equals K**
2. **Continuous Subarray Sum**
3. **Subarray with 0 Sum**
4. **Maximum Size Subarray Sum Equals K**
5. **Contiguous Array** (0s and 1s)

### Example: Subarray Sum Equals K
```java
int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> map = new HashMap<>();
    map.put(0, 1);
    
    int sum = 0, count = 0;
    
    for (int num : nums) {
        sum += num;
        count += map.getOrDefault(sum - k, 0);
        map.put(sum, map.getOrDefault(sum, 0) + 1);
    }
    
    return count;
}
```

**Why it works**:
```
If prefix_sum[j] - prefix_sum[i] = k
Then prefix_sum[i] = prefix_sum[j] - k
```

**Time**: O(n)  
**Space**: O(n)

---

## Pattern 6: Set for Uniqueness

### Description
Use HashSet to check uniqueness or remove duplicates.

### Template
```java
// Check if has duplicate
Set<T> seen = new HashSet<>();
for (T item : collection) {
    if (!seen.add(item)) {
        return true;  // Duplicate found
    }
}
return false;

// Remove duplicates
Set<T> unique = new HashSet<>(collection);
```

### Problems
1. **Contains Duplicate**
2. **Contains Duplicate II** (within k distance)
3. **Single Number**
4. **Find Duplicates**
5. **Unique Email Addresses**

### Example: Contains Nearby Duplicate
```java
boolean containsNearbyDuplicate(int[] nums, int k) {
    Map<Integer, Integer> map = new HashMap<>();
    
    for (int i = 0; i < nums.length; i++) {
        if (map.containsKey(nums[i])) {
            if (i - map.get(nums[i]) <= k) {
                return true;
            }
        }
        map.put(nums[i], i);
    }
    
    return false;
}
```

**Time**: O(n)  
**Space**: O(min(n, k))

---

## Pattern 7: Two HashMaps for Bijection

### Description
Use two HashMaps to maintain one-to-one mapping.

### Template
```java
Map<T1, T2> map1to2 = new HashMap<>();
Map<T2, T1> map2to1 = new HashMap<>();

for (int i = 0; i < n; i++) {
    T1 item1 = collection1[i];
    T2 item2 = collection2[i];
    
    // Check consistency
    if (map1to2.containsKey(item1)) {
        if (!map1to2.get(item1).equals(item2)) {
            return false;
        }
    } else {
        map1to2.put(item1, item2);
    }
    
    if (map2to1.containsKey(item2)) {
        if (!map2to1.get(item2).equals(item1)) {
            return false;
        }
    } else {
        map2to1.put(item2, item1);
    }
}
```

### Problems
1. **Isomorphic Strings**
2. **Word Pattern**
3. **Word Pattern II**

### Example: Isomorphic Strings
```java
boolean isIsomorphic(String s, String t) {
    Map<Character, Character> sToT = new HashMap<>();
    Map<Character, Character> tToS = new HashMap<>();
    
    for (int i = 0; i < s.length(); i++) {
        char c1 = s.charAt(i);
        char c2 = t.charAt(i);
        
        if (sToT.containsKey(c1)) {
            if (sToT.get(c1) != c2) return false;
        } else {
            sToT.put(c1, c2);
        }
        
        if (tToS.containsKey(c2)) {
            if (tToS.get(c2) != c1) return false;
        } else {
            tToS.put(c2, c1);
        }
    }
    
    return true;
}
```

**Time**: O(n)  
**Space**: O(k) where k = unique characters

---

## Pattern 8: Floyd's Cycle Detection

### Description
Detect cycles using slow and fast pointers.

### Template
```java
// Detect cycle
boolean hasCycle(ListNode head) {
    ListNode slow = head, fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            return true;
        }
    }
    
    return false;
}

// Find cycle start
ListNode detectCycle(ListNode head) {
    ListNode slow = head, fast = head;
    
    // Phase 1: Detect
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            // Phase 2: Find start
            slow = head;
            while (slow != fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    
    return null;
}
```

### Problems
1. **Linked List Cycle**
2. **Linked List Cycle II**
3. **Find Duplicate Number**
4. **Happy Number**
5. **Circular Array Loop**

### Example: Find Duplicate Number
```java
int findDuplicate(int[] nums) {
    // Treat array as linked list
    int slow = nums[0];
    int fast = nums[0];
    
    // Phase 1: Detect cycle
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    
    // Phase 2: Find duplicate (cycle start)
    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
}
```

**Time**: O(n)  
**Space**: O(1)

---

## Pattern 9: Longest Consecutive Sequence

### Description
Use HashSet to find longest sequence of consecutive numbers.

### Template
```java
Set<Integer> set = new HashSet<>();
for (int num : nums) {
    set.add(num);
}

int longest = 0;

for (int num : set) {
    // Only start from sequence beginning
    if (!set.contains(num - 1)) {
        int current = num;
        int streak = 1;
        
        while (set.contains(current + 1)) {
            current++;
            streak++;
        }
        
        longest = Math.max(longest, streak);
    }
}
```

### Problems
1. **Longest Consecutive Sequence**
2. **Binary Tree Longest Consecutive**

### Example
```java
int longestConsecutive(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int num : nums) {
        set.add(num);
    }
    
    int longest = 0;
    
    for (int num : set) {
        if (!set.contains(num - 1)) {
            int current = num;
            int streak = 1;
            
            while (set.contains(current + 1)) {
                current++;
                streak++;
            }
            
            longest = Math.max(longest, streak);
        }
    }
    
    return longest;
}
```

**Time**: O(n)  
**Space**: O(n)

---

## Pattern 10: LRU Cache

### Description
Combine HashMap and Doubly Linked List for O(1) operations.

### Template
```java
class LRUCache {
    class Node {
        int key, value;
        Node prev, next;
    }
    
    private int capacity;
    private Map<Integer, Node> map;
    private Node head, tail;
    
    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new HashMap<>();
        
        head = new Node();
        tail = new Node();
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        
        Node node = map.get(key);
        remove(node);
        add(node);
        
        return node.value;
    }
    
    public void put(int key, int value) {
        if (map.containsKey(key)) {
            remove(map.get(key));
        }
        
        Node node = new Node();
        node.key = key;
        node.value = value;
        
        add(node);
        map.put(key, node);
        
        if (map.size() > capacity) {
            Node lru = tail.prev;
            remove(lru);
            map.remove(lru.key);
        }
    }
    
    private void add(Node node) {
        Node next = head.next;
        head.next = node;
        node.prev = head;
        node.next = next;
        next.prev = node;
    }
    
    private void remove(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
}
```

**Time**: O(1) for get and put  
**Space**: O(capacity)

---

## Pattern Summary

| Pattern | Key Technique | Time | Space | Use Case |
|---------|---------------|------|-------|----------|
| Frequency Counting | HashMap count | O(n) | O(k) | Count occurrences |
| Two Sum | HashMap complement | O(n) | O(n) | Find pairs |
| Anagram | Sort/frequency key | O(nk log k) | O(nk) | Group strings |
| Sliding Window | HashMap window | O(n) | O(k) | Substring problems |
| Prefix Sum | HashMap sum | O(n) | O(n) | Subarray sum |
| Uniqueness | HashSet | O(n) | O(n) | Duplicates |
| Bijection | Two HashMaps | O(n) | O(k) | One-to-one mapping |
| Cycle Detection | Floyd's | O(n) | O(1) | Find cycles |
| Consecutive | HashSet sequence | O(n) | O(n) | Longest sequence |
| LRU Cache | HashMap + DLL | O(1) | O(n) | Cache |

