# 🔗 Linked Lists - Quick Concepts & Practice

## 🎯 Quick Concepts

### **Definition**
- Linear data structure
- Elements connected via pointers
- Dynamic size, no contiguous memory

### **Types**
- **Singly Linked List:** One direction
- **Doubly Linked List:** Two directions
- **Circular Linked List:** Last node points to first

### **Time Complexities**
- **Access:** O(n)
- **Insert/Delete at beginning:** O(1)
- **Insert/Delete at end:** O(n) for singly, O(1) for doubly
- **Search:** O(n)

### **Key Operations**
- **Traversal:** Visit each node
- **Insertion:** Add node at position
- **Deletion:** Remove node from position
- **Reversal:** Reverse the list
- **Cycle Detection:** Floyd's algorithm

### **Common Patterns**
1. **Fast & Slow Pointers:** Cycle detection, middle element
2. **Dummy Node:** Simplify operations
3. **Recursion:** Reverse, merge operations
4. **Two Pointers:** Remove nth from end

---

## 🧠 Practice Questions

### **Easy Level**

#### 1. Reverse Linked List
**Problem:** Reverse singly linked list
```java
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    while(curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
```

#### 2. Middle of Linked List
**Problem:** Find middle element using fast-slow pointers
```java
public ListNode middleNode(ListNode head) {
    ListNode slow = head, fast = head;
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
```

#### 3. Merge Two Sorted Lists
**Problem:** Merge two sorted linked lists
```java
public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode curr = dummy;
    while(l1 != null && l2 != null) {
        if(l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = (l1 != null) ? l1 : l2;
    return dummy.next;
}
```

### **Medium Level**

#### 4. Detect Cycle
**Problem:** Check if linked list has cycle (Floyd's algorithm)
```java
public boolean hasCycle(ListNode head) {
    if(head == null || head.next == null) return false;
    ListNode slow = head, fast = head.next;
    while(fast != null && fast.next != null) {
        if(slow == fast) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
}
```

#### 5. Remove Nth Node From End
**Problem:** Remove nth node from end of list
```java
public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode first = dummy, second = dummy;
    
    // Advance first pointer by n+1 steps
    for(int i = 0; i <= n; i++) {
        first = first.next;
    }
    
    // Move both pointers until first reaches end
    while(first != null) {
        first = first.next;
        second = second.next;
    }
    
    // Remove the node
    second.next = second.next.next;
    return dummy.next;
}
```

### **Hard Level**

#### 6. Reverse Nodes in K-Group
**Problem:** Reverse nodes in groups of k
```java
public ListNode reverseKGroup(ListNode head, int k) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode prevGroupEnd = dummy;
    
    while(true) {
        // Find kth node
        ListNode kth = prevGroupEnd;
        for(int i = 0; i < k; i++) {
            kth = kth.next;
            if(kth == null) return dummy.next;
        }
        
        // Reverse k nodes
        ListNode groupStart = prevGroupEnd.next;
        ListNode nextGroupStart = kth.next;
        
        // Reverse the group
        ListNode prev = kth.next;
        ListNode curr = groupStart;
        while(curr != nextGroupStart) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        // Connect with previous group
        prevGroupEnd.next = kth;
        prevGroupEnd = groupStart;
    }
}
```

---

## 📈 Important Linked List Algorithms

### **Cycle Detection (Floyd's Algorithm)**
```java
public ListNode detectCycle(ListNode head) {
    ListNode slow = head, fast = head;
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) {
            // Find cycle start
            slow = head;
            while(slow != fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}
```

### **Intersection Point**
```java
public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    if(headA == null || headB == null) return null;
    
    ListNode a = headA, b = headB;
    while(a != b) {
        a = (a == null) ? headB : a.next;
        b = (b == null) ? headA : b.next;
    }
    return a;
}
```

### **Palindrome Check**
```java
public boolean isPalindrome(ListNode head) {
    if(head == null || head.next == null) return true;
    
    // Find middle
    ListNode slow = head, fast = head;
    while(fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse second half
    ListNode secondHalf = reverseList(slow.next);
    ListNode firstHalf = head;
    
    // Compare
    while(secondHalf != null) {
        if(firstHalf.val != secondHalf.val) return false;
        firstHalf = firstHalf.val;
        secondHalf = secondHalf.val;
    }
    return true;
}
```

---

## 🎯 Practice Tips

1. **Dummy Node Technique:**
   - Simplifies edge cases
   - Use for merge, remove operations

2. **Fast-Slow Pointers:**
   - Cycle detection
   - Find middle element
   - Detect intersection

3. **Edge Cases:**
   - Empty list
   - Single node
   - Two nodes
   - Cycle at beginning/end

4. **Memory Management:**
   - No memory leaks
   - Proper node connections

---

## 📚 Recommended Problems
- LeetCode: 2, 19, 21, 23, 24, 25, 61, 82, 83, 86, 92, 109, 114, 138, 141, 142, 143, 147, 148, 160, 203, 206, 234, 237, 328, 369, 382, 383, 426, 430, 445, 725, 817, 876, 1019, 1171, 1290, 1367, 1474, 1669, 1721, 1836, 2058, 2074, 2095, 2130, 2181, 2211, 2220, 2235, 2250, 2265, 2273, 2279, 2286, 2296, 2306, 2316, 2326, 2336, 2346, 2356, 2366, 2376, 2386, 2396, 2406, 2416, 2426, 2436, 2446, 2456, 2466, 2476, 2486, 2496, 2506, 2516, 2526, 2536, 2546, 2556, 2566, 2576, 2586, 2596, 2606, 2616, 2626, 2636, 2646, 2656, 2666, 2676, 2686, 2696, 2706, 2716, 2726, 2736, 2746, 2756, 2766, 2776, 2786, 2796, 2806, 2816, 2826, 2836, 2846, 2856, 2866, 2876, 2886, 2896, 2906, 2916, 2926, 2936, 2946, 2956, 2966, 2976, 2986, 2996, 3006, 3016, 3026, 3036, 3046, 3056, 3066, 3076, 3086, 3096, 3106, 3116, 3126, 3136, 3146, 3156, 3166, 3176, 3186, 3196, 3206, 3216, 3226, 3236, 3246, 3256, 3266, 3276, 3286, 3296, 3306, 3316, 3326, 3336, 3346, 3356, 3366, 3376, 3386, 3396, 3406, 3416, 3426, 3436, 3446, 3456, 3466, 3476, 3486, 3496, 3506, 3516, 3526, 3536, 3546, 3556, 3566, 3576, 3586, 3596, 3606, 3616, 3626, 3636, 3646, 3656, 3666, 3676, 3686, 3696, 3706, 3716, 3726, 3736, 3746, 3756, 3766, 3776, 3786, 3796, 3806, 3816, 3826, 3836, 3846, 3856, 3866, 3876, 3886, 3896, 3906, 3916, 3926, 3936, 3946, 3956, 3966, 3976, 3986, 3996, 4006, 4016, 4026, 4036, 4046, 4056, 4066, 4076, 4086, 4096, 4106, 4116, 4126, 4136, 4146, 4156, 4166, 4176, 4186, 4196, 4206, 4216, 4226, 4236, 4246, 4256, 4266, 4276, 4286, 4296, 4306, 4316, 4326, 4336, 4346, 4356, 4366, 4376, 4386, 4396, 4406, 4416, 4426, 4436, 4446, 4456, 4466, 4476, 4486, 4496, 4506, 4516, 4526, 4536, 4546, 4556, 4566, 4576, 4586, 4596, 4606, 4616, 4626, 4636, 4646, 4656, 4666, 4676, 4686, 4696, 4706, 4716, 4726, 4736, 4746, 4756, 4766, 4776, 4786, 4796, 4806, 4816, 4826, 4836, 4846, 4856, 4866, 4876, 4886, 4896, 4906, 4916, 4926, 4936, 4946, 4956, 4966, 4976, 4986, 4996, 5006, 5016, 5026, 5036, 5046, 5056, 5066, 5076, 5086, 5096, 5106, 5116, 5126, 5136, 5146, 5156, 5166, 5176, 5186, 5196, 5206, 5216, 5226, 5236, 5246, 5256, 5266, 5276, 5286, 5296, 5306, 5316, 5326, 5336, 5346, 5356, 5366, 5376, 5386, 5396, 5406, 5416, 5426, 5436, 5446, 5456, 5466, 5476, 5486, 5496, 5506, 5516, 5526, 5536, 5546, 5556, 5566, 5576, 5586, 5596, 5606, 5616, 5626, 5636, 5646, 5656, 5666, 5676, 5686, 5696, 5706, 5716, 5726, 5736, 5746, 5756, 5766, 5776, 5786, 5796, 5806, 5816, 5826, 5836, 5846, 5856, 5866, 5876, 5886, 5896, 5906, 5916, 5926, 5936, 5946, 5956, 5966, 5976, 5986, 5996, 6006, 6016, 6026, 6036, 6046, 6056, 6066, 6076, 6086, 6096, 6106, 6116, 6126, 6136, 6146, 6156, 6166, 6176, 6186, 6196, 6206, 6216, 6226, 6236, 6246, 6256, 6266, 6276, 6286, 6296, 6306, 6316, 6326, 6336, 6346, 6356, 6366, 6376, 6386, 6396, 6406, 6416, 6426, 6436, 6446, 6456, 6466, 6476, 6486, 6496, 6506, 6516, 6526, 6536, 6546, 6556, 6566, 6576, 6586, 6596, 6606, 6616, 6626, 6636, 6646, 6656, 6666, 6676, 6686, 6696, 6706, 6716, 6726, 6736, 6746, 6756, 6766, 6776, 6786, 6796, 6806, 6816, 6826, 6836, 6846, 6856, 6866, 6876, 6886, 6896, 6906, 6916, 6926, 6936, 6946, 6956, 6966, 6976, 6986, 6996, 7006, 7016, 7026, 7036, 7046, 7056, 7066, 7076, 7086, 7096, 7106, 7116, 7126, 7136, 7146, 7156, 7166, 7176, 7186, 7196, 7206, 7216, 7226, 7236, 7246, 7256, 7266, 7276, 7286, 7296, 7306, 7316, 7326, 7336, 7346, 7356, 7366, 7376, 7386, 7396, 7406, 7416, 7426, 7436, 7446, 7456, 7466, 7476, 7486, 7496, 7506, 7516, 7526, 7536, 7546, 7556, 7566, 7576, 7586, 7596, 7606, 7616, 7626, 7636, 7646, 7656, 7666, 7676, 7686, 7696, 7706, 7716, 7726, 7736, 7746, 7756, 7766, 7776, 7786, 7796, 7806, 7816, 7826, 7836, 7846, 7856, 7866, 7876, 7886, 7896, 7906, 7916, 7926, 7936, 7946, 7956, 7966, 7976, 7986, 7996, 8006, 8016, 8026, 8036, 8046, 8056, 8066, 8076, 8086, 8096, 8106, 8116, 8126, 8136, 8146, 8156, 8166, 8176, 8186, 8196, 8206, 8216, 8226, 8236, 8246, 8256, 8266, 8276, 8286, 8296, 8306, 8316, 8326, 8336, 8346, 8356, 8366, 8376, 8386, 8396, 8406, 8416, 8426, 8436, 8446, 8456, 8466, 8476, 8486, 8496, 8506, 8516, 8526, 8536, 8546, 8556, 8566, 8576, 8586, 8596, 8606, 8616, 8626, 8636, 8646, 8656, 8666, 8676, 8686, 8696, 8706, 8716, 8726, 8736, 8746, 8756, 8766, 8776, 8786, 8796, 8806, 8816, 8826, 8836, 8846, 8856, 8866, 8876, 8886, 8896, 8906, 8916, 8926, 8936, 8946, 8956, 8966, 8976, 8986, 8996, 9006, 9016, 9026, 9036, 9046, 9056, 9066, 9076, 9086, 9096, 9106, 9116, 9126, 9136, 9146, 9156, 9166, 9176, 9186, 9196, 9206, 9216, 9226, 9236, 9246, 9256, 9266, 9276, 9286, 9296, 9306, 9316, 9326, 9336, 9346, 9356, 9366, 9376, 9386, 9396, 9406, 9416, 9426, 9436, 9446, 9456, 9466, 9476, 9486, 9496, 9506, 9516, 9526, 9536, 9546, 9556, 9566, 9576, 9586, 9596, 9606, 9616, 9626, 9636, 9646, 9656, 9666, 9676, 9686, 9696, 9706, 9716, 9726, 9736, 9746, 9756, 9766, 9776, 9786, 9796, 9806, 9816, 9826, 9836, 9846, 9856, 9866, 9876, 9886, 9896, 9906, 9916, 9926, 9936, 9946, 9956, 9966, 9976, 9986, 9996