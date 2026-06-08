# 📊 Arrays - Quick Concepts & Practice

## 🎯 Quick Concepts

### **Definition**
- Fixed-size, homogeneous data structure
- Contiguous memory allocation
- Zero-based indexing

### **Time Complexities**
- **Access:** O(1)
- **Search:** O(n)
- **Insert/Delete:** O(n)

### **Key Operations**
- **Traversal:** Visit each element
- **Insertion:** Add element at position
- **Deletion:** Remove element from position
- **Searching:** Linear/ Binary search
- **Sorting:** Various algorithms

### **Common Patterns**
1. **Two Pointers:** Start from both ends
2. **Sliding Window:** Fixed/variable size window
3. **Prefix Sum:** Cumulative sum array
4. **Kadane's Algorithm:** Maximum subarray sum

---

## 🧠 Practice Questions

### **Easy Level**

#### 1. Two Sum
**Problem:** Find two numbers that add up to target
```java
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for(int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if(map.containsKey(complement)) {
            return new int[]{map.get(complement), i};
        }
        map.put(nums[i], i);
    }
    return new int[]{-1, -1};
}
```

#### 2. Reverse Array
**Problem:** Reverse array in-place
```java
public void reverseArray(int[] arr) {
    int left = 0, right = arr.length - 1;
    while(left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++; right--;
    }
}
```

#### 3. Maximum Element
**Problem:** Find largest element
```java
public int findMax(int[] arr) {
    int max = arr[0];
    for(int i = 1; i < arr.length; i++) {
        if(arr[i] > max) max = arr[i];
    }
    return max;
}
```

### **Medium Level**

#### 4. Three Sum
**Problem:** Find three numbers that sum to zero
```java
public List<List<Integer>> threeSum(int[] nums) {
    Arrays.sort(nums);
    List<List<Integer>> result = new ArrayList<>();
    for(int i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i] == nums[i-1]) continue;
        int left = i + 1, right = nums.length - 1;
        while(left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            if(sum == 0) {
                result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                while(left < right && nums[left] == nums[left+1]) left++;
                while(left < right && nums[right] == nums[right-1]) right--;
                left++; right--;
            } else if(sum < 0) left++;
            else right--;
        }
    }
    return result;
}
```

#### 5. Container With Most Water
**Problem:** Find two lines that form container with most water
```java
public int maxArea(int[] height) {
    int maxArea = 0;
    int left = 0, right = height.length - 1;
    while(left < right) {
        int area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);
        if(height[left] < height[right]) left++;
        else right--;
    }
    return maxArea;
}
```

### **Hard Level**

#### 6. Trapping Rain Water
**Problem:** Calculate trapped rainwater
```java
public int trap(int[] height) {
    int n = height.length;
    int[] leftMax = new int[n];
    int[] rightMax = new int[n];
    
    // Fill left max
    leftMax[0] = height[0];
    for(int i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i-1], height[i]);
    }
    
    // Fill right max
    rightMax[n-1] = height[n-1];
    for(int i = n-2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i+1], height[i]);
    }
    
    // Calculate trapped water
    int trappedWater = 0;
    for(int i = 0; i < n; i++) {
        trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return trappedWater;
}
```

---

## 📈 Important Formulas & Techniques

### **Prefix Sum Array**
```java
int[] prefix = new int[n+1];
for(int i = 1; i <= n; i++) {
    prefix[i] = prefix[i-1] + arr[i-1];
}
// Sum from L to R: prefix[R+1] - prefix[L]
```

### **Kadane's Algorithm**
```java
public int maxSubarraySum(int[] arr) {
    int maxSoFar = arr[0];
    int maxEndingHere = arr[0];
    for(int i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}
```

### **Dutch National Flag Algorithm** (Sort 0,1,2)
```java
public void sortColors(int[] nums) {
    int low = 0, mid = 0, high = nums.length - 1;
    while(mid <= high) {
        if(nums[mid] == 0) {
            swap(nums, low, mid);
            low++; mid++;
        } else if(nums[mid] == 1) {
            mid++;
        } else {
            swap(nums, mid, high);
            high--;
        }
    }
}
```

---

## 🎯 Practice Tips

1. **Always check edge cases:**
   - Empty array
   - Single element
   - All elements same
   - Negative numbers

2. **Time & Space complexity:**
   - Brute force vs Optimized
   - In-place vs Extra space

3. **Common mistakes:**
   - Off-by-one errors
   - Integer overflow
   - Array bounds

4. **Interview tips:**
   - Explain approach first
   - Write clean code
   - Test with examples

---

## 📚 Recommended Problems
- LeetCode: 1, 11, 15, 26, 27, 31, 33, 34, 35, 39, 40, 41, 42, 45, 48, 53, 54, 55, 56, 57, 59, 62, 63, 64, 66, 73, 74, 75, 78, 79, 80, 81, 88, 90, 105, 118, 119, 121, 122, 123, 128, 152, 153, 162, 169, 189, 217, 219, 228, 238, 268, 283, 287, 289, 334, 350, 380, 384, 387, 442, 448, 485, 495, 496, 503, 532, 560, 561, 566, 581, 605, 611, 621, 622, 628, 643, 645, 661, 665, 674, 680, 682, 697, 704, 724, 747, 766, 768, 769, 775, 792, 795, 832, 840, 849, 867, 868, 881, 896, 905, 912, 922, 941, 945, 977, 989, 999