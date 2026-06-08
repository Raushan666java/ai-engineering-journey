# DAY 4 QUICK REFERENCE - STRINGS IN JAVA

## 📌 STRING BASICS

### String Creation
```java
// 1. String literal (recommended)
String s1 = "Hello";

// 2. Using new keyword
String s2 = new String("Hello");

// 3. From character array
char[] chars = {'J', 'a', 'v', 'a'};
String s3 = new String(chars);

// 4. From byte array
byte[] bytes = {72, 101, 108, 108, 111};
String s4 = new String(bytes);

// 5. Using valueOf()
String s5 = String.valueOf(123);
String s6 = String.valueOf(true);

// 6. Using format()
String s7 = String.format("Name: %s, Age: %d", "John", 25);
```

### String Comparison
```java
String s1 = "Java";
String s2 = "Java";
String s3 = new String("Java");

// Reference comparison (❌ Don't use for content)
s1 == s2;  // true (same object in pool)
s1 == s3;  // false (different objects)

// Content comparison (✅ Use this)
s1.equals(s3);              // true
s1.equalsIgnoreCase("JAVA"); // true
s1.compareTo(s2);           // 0 (equal)
s1.compareTo("Python");     // negative (Java < Python)
```

---

## 🔤 ESSENTIAL STRING METHODS

### Character Access
```java
String s = "Hello World";

s.charAt(0);           // 'H'
s.length();            // 11
s.toCharArray();       // char[] {'H','e','l','l','o',' ','W','o','r','l','d'}
s.codePointAt(0);      // 72 (Unicode of 'H')
```

### Searching Methods
```java
String text = "Java Programming";

text.indexOf('a');          // 1 (first 'a')
text.lastIndexOf('a');      // 11 (last 'a')
text.indexOf("gram");       // 10
text.contains("Program");   // true
text.startsWith("Java");    // true
text.endsWith("ing");       // true
```

### Substring & Modification
```java
String s = "Java Programming";

s.substring(5);         // "Programming"
s.substring(0, 4);      // "Java"
s.concat(" Language");  // "Java Programming Language"
s.replace('a', 'A');    // "JAvA ProgrammingA"
s.replaceAll("\\s", ""); // "JavaProgramming"
```

### Case Conversion
```java
String s = "Hello World";

s.toUpperCase();        // "HELLO WORLD"
s.toLowerCase();        // "hello world"
```

### Trimming & Stripping
```java
String s = "  Hello World  ";

s.trim();           // "Hello World"
s.strip();          // "Hello World" (better Unicode support)
s.stripLeading();   // "Hello World  "
s.stripTrailing();  // "  Hello World"
```

### Splitting & Joining
```java
String s = "Apple,Banana,Cherry";

// Split
String[] fruits = s.split(",");  // ["Apple", "Banana", "Cherry"]

// Join
String joined = String.join(" - ", fruits);  // "Apple - Banana - Cherry"
```

### Testing Methods
```java
String s = "Hello";

s.isEmpty();            // false
s.isBlank();            // false
"".isEmpty();           // true
"   ".isBlank();        // true
s.equals("Hello");      // true
s.matches("[A-Za-z]+"); // true (regex)
```

---

## 🔧 STRINGBUILDER & STRINGBUFFER

### StringBuilder (Recommended for single-threaded)
```java
StringBuilder sb = new StringBuilder();

// Append
sb.append("Hello");
sb.append(" ").append("World");  // Method chaining

// Insert
sb.insert(5, " Java");  // "Hello Java World"

// Delete
sb.delete(5, 10);       // Remove characters at index 5-9
sb.deleteCharAt(0);     // Remove character at index 0

// Replace
sb.replace(0, 5, "Hi"); // Replace characters 0-4 with "Hi"

// Reverse
sb.reverse();           // Reverse entire string

// Convert to String
String result = sb.toString();
```

### StringBuffer (Thread-safe)
```java
StringBuffer buffer = new StringBuffer("Hello");

buffer.append(" World");   // Same methods as StringBuilder
buffer.insert(6, "Java ");
buffer.reverse();

// Same API as StringBuilder, but synchronized
```

### When to Use What?
```java
// ✅ String - Immutable, use when value won't change
String config = "database.url";

// ✅ StringBuilder - Mutable, use in loops/concatenation
StringBuilder result = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    result.append(i);  // Fast!
}

// ✅ StringBuffer - Mutable + thread-safe
StringBuffer shared = new StringBuffer();
// Use when multiple threads access same object
```

---

## 🎯 COMMON STRING PATTERNS

### 1. Reverse String
```java
// Using StringBuilder
String reversed = new StringBuilder(s).reverse().toString();

// Manual (Two Pointers)
char[] chars = s.toCharArray();
int left = 0, right = chars.length - 1;
while (left < right) {
    char temp = chars[left];
    chars[left++] = chars[right];
    chars[right--] = temp;
}
String reversed = new String(chars);
```

### 2. Check Palindrome
```java
// Two Pointers
boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s.charAt(left++) != s.charAt(right--)) {
            return false;
        }
    }
    return true;
}
```

### 3. Check Anagram
```java
// Array approach (lowercase only)
boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) return false;
    
    int[] count = new int[26];
    for (int i = 0; i < s.length(); i++) {
        count[s.charAt(i) - 'a']++;
        count[t.charAt(i) - 'a']--;
    }
    
    for (int c : count) {
        if (c != 0) return false;
    }
    return true;
}
```

### 4. Count Character Frequency
```java
// Using HashMap
Map<Character, Integer> freq = new HashMap<>();
for (char c : s.toCharArray()) {
    freq.put(c, freq.getOrDefault(c, 0) + 1);
}

// Using Array (lowercase only)
int[] count = new int[26];
for (char c : s.toCharArray()) {
    count[c - 'a']++;
}
```

### 5. Remove Duplicates
```java
// Using LinkedHashSet (preserves order)
Set<Character> seen = new LinkedHashSet<>();
for (char c : s.toCharArray()) {
    seen.add(c);
}
StringBuilder sb = new StringBuilder();
for (char c : seen) {
    sb.append(c);
}
String result = sb.toString();
```

### 6. Reverse Words
```java
String[] words = s.split("\\s+");
StringBuilder reversed = new StringBuilder();
for (int i = words.length - 1; i >= 0; i--) {
    reversed.append(words[i]);
    if (i > 0) reversed.append(" ");
}
String result = reversed.toString();
```

### 7. Longest Substring Without Repeating
```java
// Sliding Window with HashMap
int lengthOfLongestSubstring(String s) {
    Map<Character, Integer> map = new HashMap<>();
    int maxLength = 0, left = 0;
    
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        if (map.containsKey(c)) {
            left = Math.max(left, map.get(c) + 1);
        }
        map.put(c, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
```

---

## ⚡ PERFORMANCE TIPS

### 1. String Concatenation
```java
// ❌ SLOW (creates n String objects)
String result = "";
for (int i = 0; i < n; i++) {
    result += i;  // Don't do this!
}

// ✅ FAST (modifies same object)
StringBuilder sb = new StringBuilder();
for (int i = 0; i < n; i++) {
    sb.append(i);
}
String result = sb.toString();
```

### 2. String Comparison
```java
// ❌ WRONG
if (s1 == s2) { }  // Compares references!

// ✅ CORRECT
if (s1.equals(s2)) { }  // Compares content
```

### 3. Empty Check
```java
// ✅ GOOD
if (s != null && !s.isEmpty()) { }

// ✅ BETTER (Java 11+)
if (s != null && !s.isBlank()) { }  // Also checks whitespace
```

---

## 🏆 LEETCODE SOLUTIONS (QUICK)

### Valid Palindrome (#125)
```java
boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
        while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
        if (Character.toLowerCase(s.charAt(left++)) != 
            Character.toLowerCase(s.charAt(right--))) {
            return false;
        }
    }
    return true;
}
```

### Valid Anagram (#242)
```java
boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) return false;
    int[] count = new int[26];
    for (int i = 0; i < s.length(); i++) {
        count[s.charAt(i) - 'a']++;
        count[t.charAt(i) - 'a']--;
    }
    for (int c : count) if (c != 0) return false;
    return true;
}
```

### Longest Substring (#3)
```java
int lengthOfLongestSubstring(String s) {
    Map<Character, Integer> map = new HashMap<>();
    int maxLen = 0, left = 0;
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        if (map.containsKey(c)) {
            left = Math.max(left, map.get(c) + 1);
        }
        map.put(c, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
```

---

## 📊 TIME COMPLEXITY CHEAT SHEET

| Operation | Time | Space |
|-----------|------|-------|
| charAt(i) | O(1) | O(1) |
| length() | O(1) | O(1) |
| equals() | O(n) | O(1) |
| compareTo() | O(n) | O(1) |
| indexOf() | O(n*m) | O(1) |
| substring() | O(n) | O(n) |
| concat() | O(n) | O(n) |
| replace() | O(n) | O(n) |
| split() | O(n) | O(n) |
| StringBuilder.append() | O(1)* | O(1)* |

*Amortized constant time

---

## 🎯 INTERVIEW MUST-KNOWS

### Key Concepts
1. ✅ String is immutable
2. ✅ String pool saves memory
3. ✅ Use equals() not ==
4. ✅ StringBuilder for concatenation
5. ✅ Two pointers for palindrome
6. ✅ Sliding window for substring
7. ✅ HashMap for frequency
8. ✅ Array[26] for lowercase

### Common Mistakes
❌ Using == instead of equals()  
❌ Not checking null/empty  
❌ String += in loops  
❌ Forgetting case sensitivity  
❌ Index out of bounds  

### Quick Wins
✅ Always clarify requirements  
✅ Discuss multiple approaches  
✅ Explain complexity  
✅ Test edge cases  
✅ Write clean code  

---

## 💡 ONE-LINERS

```java
// Reverse string
new StringBuilder(s).reverse().toString()

// Check palindrome
s.equals(new StringBuilder(s).reverse().toString())

// Remove spaces
s.replaceAll("\\s+", "")

// Count words
s.trim().split("\\s+").length

// Capitalize first letter
s.substring(0,1).toUpperCase() + s.substring(1).toLowerCase()

// Toggle case
Character.isUpperCase(c) ? Character.toLowerCase(c) : Character.toUpperCase(c)

// Join array
String.join(", ", array)

// Check anagram (sorted)
Arrays.equals(s1.toCharArray(), s2.toCharArray()) after sorting
```

---

**🎉 Keep this handy for quick reference during coding! 🎉**
