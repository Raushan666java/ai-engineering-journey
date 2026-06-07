# 📝 Strings - Quick Concepts & Practice

## 🎯 Quick Concepts

### **Definition**
- Sequence of characters
- Immutable in Java (String class)
- Mutable in Java (StringBuilder/StringBuffer)

### **Time Complexities**
- **Access:** O(1)
- **Search:** O(n)
- **Concatenation:** O(n) for String, O(1) amortized for StringBuilder

### **Key Operations**
- **Length:** `str.length()`
- **Substring:** `str.substring(start, end)`
- **CharAt:** `str.charAt(index)`
- **IndexOf:** `str.indexOf(char/substring)`
- **Replace:** `str.replace(old, new)`

### **Common Patterns**
1. **Two Pointers:** Palindrome, Reverse
2. **Sliding Window:** Longest substring
3. **HashMap:** Anagram, Frequency count
4. **Stack:** Valid parentheses
5. **Dynamic Programming:** Edit distance, LCS

---

## 🧠 Practice Questions

### **Easy Level**

#### 1. Reverse String
**Problem:** Reverse string in-place
```java
public void reverseString(char[] s) {
    int left = 0, right = s.length - 1;
    while(left < right) {
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++; right--;
    }
}
```

#### 2. Valid Palindrome
**Problem:** Check if string is palindrome (ignoring case & non-alphanumeric)
```java
public boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while(left < right) {
        while(left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
        while(left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
        if(Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
            return false;
        }
        left++; right--;
    }
    return true;
}
```

#### 3. Valid Anagram
**Problem:** Check if two strings are anagrams
```java
public boolean isAnagram(String s, String t) {
    if(s.length() != t.length()) return false;
    int[] count = new int[26];
    for(char c : s.toCharArray()) count[c - 'a']++;
    for(char c : t.toCharArray()) count[c - 'a']--;
    for(int i : count) if(i != 0) return false;
    return true;
}
```

### **Medium Level**

#### 4. Longest Substring Without Repeating Characters
**Problem:** Find length of longest substring without repeating characters
```java
public int lengthOfLongestSubstring(String s) {
    Set<Character> set = new HashSet<>();
    int left = 0, maxLength = 0;
    for(int right = 0; right < s.length(); right++) {
        while(set.contains(s.charAt(right))) {
            set.remove(s.charAt(left));
            left++;
        }
        set.add(s.charAt(right));
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
```

#### 5. Group Anagrams
**Problem:** Group strings that are anagrams
```java
public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    for(String str : strs) {
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        String key = new String(chars);
        map.computeIfAbsent(key, k -> new ArrayList<>()).add(str);
    }
    return new ArrayList<>(map.values());
}
```

### **Hard Level**

#### 6. Minimum Window Substring
**Problem:** Find minimum window containing all characters of pattern
```java
public String minWindow(String s, String t) {
    int[] count = new int[128];
    for(char c : t.toCharArray()) count[c]++;
    
    int left = 0, right = 0, minLen = Integer.MAX_VALUE;
    int start = 0, required = t.length();
    
    while(right < s.length()) {
        if(count[s.charAt(right)] > 0) required--;
        count[s.charAt(right)]--;
        right++;
        
        while(required == 0) {
            if(right - left < minLen) {
                minLen = right - left;
                start = left;
            }
            count[s.charAt(left)]++;
            if(count[s.charAt(left)] > 0) required++;
            left++;
        }
    }
    return minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen);
}
```

---

## 📈 Important String Algorithms

### **KMP Algorithm**
```java
// Compute LPS array
public int[] computeLPS(String pattern) {
    int[] lps = new int[pattern.length()];
    int len = 0, i = 1;
    while(i < pattern.length()) {
        if(pattern.charAt(i) == pattern.charAt(len)) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if(len != 0) len = lps[len - 1];
            else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}
```

### **Rabin-Karp Algorithm**
```java
public int rabinKarp(String text, String pattern) {
    int n = text.length(), m = pattern.length();
    int prime = 101, mod = 1000000007;
    
    long patternHash = 0, textHash = 0, h = 1;
    for(int i = 0; i < m-1; i++) h = (h * prime) % mod;
    
    // Calculate initial hashes
    for(int i = 0; i < m; i++) {
        patternHash = (patternHash * prime + pattern.charAt(i)) % mod;
        textHash = (textHash * prime + text.charAt(i)) % mod;
    }
    
    for(int i = 0; i <= n - m; i++) {
        if(patternHash == textHash) {
            // Check character by character
            if(text.substring(i, i+m).equals(pattern)) return i;
        }
        if(i < n - m) {
            textHash = (textHash - text.charAt(i) * h % mod + mod) % mod;
            textHash = (textHash * prime + text.charAt(i + m)) % mod;
        }
    }
    return -1;
}
```

---

## 🎯 Practice Tips

1. **String Immutability:**
   - Use StringBuilder for modifications
   - String concatenation in loop = O(n²)

2. **Character Encoding:**
   - ASCII: 0-127
   - Extended ASCII: 0-255
   - Unicode: 0-65535

3. **Common Edge Cases:**
   - Empty strings
   - Single character
   - All same characters
   - Case sensitivity

4. **Performance:**
   - Prefer char[] over String for manipulation
   - Use StringBuilder over StringBuffer (unless thread-safe)

---

## 📚 Recommended Problems
- LeetCode: 3, 5, 6, 8, 10, 12, 13, 14, 17, 20, 22, 28, 30, 32, 38, 43, 44, 49, 58, 67, 68, 71, 72, 76, 87, 91, 93, 97, 115, 125, 126, 127, 131, 132, 137, 139, 140, 141, 151, 157, 159, 161, 165, 166, 168, 171, 187, 205, 214, 227, 242, 243, 246, 247, 249, 266, 290, 293, 299, 301, 316, 318, 320, 321, 340, 344, 345, 346, 383, 387, 388, 389, 392, 394, 395, 402, 409, 415, 416, 423, 424, 432, 434, 435, 436, 438, 440, 443, 451, 459, 468, 473, 482, 485, 490, 491, 500, 520, 522, 524, 527, 535, 537, 539, 541, 551, 553, 556, 557, 564, 567, 572, 576, 583, 591, 599, 609, 616, 624, 632, 647, 648, 657, 658, 659, 663, 670, 676, 678, 680, 686, 688, 696, 709, 712, 722, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999