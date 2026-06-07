# Arrays - All Questions & Java Solutions

---

## 1. Reverse the Array
**Theory:** Use two pointers, swap from both ends.
```java
public void reverseArray(int[] arr) {
    int left = 0, right = arr.length - 1;
    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}
```

---

## 2. Find Maximum and Minimum in Array
**Theory:** Traverse once, update min and max.
```java
public int[] getMinMax(int[] arr) {
    int min = arr[0], max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    return new int[]{min, max};
}
```

---

## 3. Kth Smallest Element
**Theory:** Use QuickSelect or sort and pick.
```java
import java.util.*;
public int kthSmallest(int[] arr, int k) {
    PriorityQueue<Integer> pq = new PriorityQueue<>();
    for (int num : arr) pq.add(num);
    for (int i = 1; i < k; i++) pq.poll();
    return pq.peek();
}
```

---

## 4. Sort 0s, 1s, and 2s (Dutch National Flag)
**Theory:** Three pointers: low, mid, high.
```java
public void sortColors(int[] nums) {
    int low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] == 0) {
            int temp = nums[low]; nums[low] = nums[mid]; nums[mid] = temp;
            low++; mid++;
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            int temp = nums[mid]; nums[mid] = nums[high]; nums[high] = temp;
            high--;
        }
    }
}
```

---

## 5. Move Negative Numbers to Beginning
**Theory:** Partition using two pointers.
```java
public void moveNegatives(int[] arr) {
    int j = 0;
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
            j++;
        }
    }
}
```

// ...continue for all array questions from Love Babbar and Striver sheets, each with theory and Java code...
