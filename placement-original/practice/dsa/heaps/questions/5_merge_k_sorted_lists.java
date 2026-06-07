package heaps.questions;

/*
 * 5. MERGE K SORTED LISTS (LeetCode 23)
 *
 * Problem Statement:
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 * Conceptual Understanding:
 * - Merge multiple sorted linked lists into one sorted list
 * - Multiple approaches: divide and conquer, priority queue, sequential merge
 * - Heap approach: use min-heap to always pick smallest current element
 * - Divide and conquer: recursively merge pairs of lists
 * - Key insight: priority queue maintains order across all lists
 * - Handle empty lists and null nodes properly
 *
 * Time Complexity: O(n log k) heap, O(n log k) divide-conquer, O(n*k) brute force
 * Space Complexity: O(k) heap, O(log k) recursion stack
 */

import java.util.*;

class MergeKSortedLists5 {

    // Definition for singly-linked list
    static class ListNode {
        int val;
        ListNode next;

        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }

    // Method 1: Using Priority Queue (Min Heap)
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }

        // Min heap to store the smallest node from each list
        PriorityQueue<ListNode> minHeap = new PriorityQueue<>(
            (a, b) -> Integer.compare(a.val, b.val)
        );

        // Add the head of each non-empty list to the heap
        for (ListNode list : lists) {
            if (list != null) {
                minHeap.offer(list);
            }
        }

        // Dummy head for the result list
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        // While there are nodes in the heap
        while (!minHeap.isEmpty()) {
            // Get the smallest node
            ListNode smallest = minHeap.poll();

            // Add it to the result
            current.next = smallest;
            current = current.next;

            // If the list has more nodes, add the next node to heap
            if (smallest.next != null) {
                minHeap.offer(smallest.next);
            }
        }

        return dummy.next;
    }

    // Method 2: Divide and Conquer Approach
    public ListNode mergeKListsDivideConquer(ListNode[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }

        return mergeKListsHelper(lists, 0, lists.length - 1);
    }

    private ListNode mergeKListsHelper(ListNode[] lists, int start, int end) {
        if (start == end) {
            return lists[start];
        }

        if (start > end) {
            return null;
        }

        int mid = start + (end - start) / 2;

        ListNode left = mergeKListsHelper(lists, start, mid);
        ListNode right = mergeKListsHelper(lists, mid + 1, end);

        return mergeTwoLists(left, right);
    }

    // Helper method to merge two sorted lists
    private ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;

        if (l1.val <= l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }

    // Method 3: Iterative Divide and Conquer
    public ListNode mergeKListsIterative(ListNode[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }

        int n = lists.length;
        while (n > 1) {
            int k = (n + 1) / 2; // Number of pairs to merge

            for (int i = 0; i < n / 2; i++) {
                lists[i] = mergeTwoLists(lists[i], lists[i + k]);
            }

            n = k; // Reduce the number of lists
        }

        return lists[0];
    }

    // Method 4: Sequential Merge (pairwise)
    public ListNode mergeKListsSequential(ListNode[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }

        ListNode result = null;

        for (ListNode list : lists) {
            result = mergeTwoLists(result, list);
        }

        return result;
    }

    // Method 5: Using ArrayList and Sorting (inefficient but simple)
    public ListNode mergeKListsWithSort(ListNode[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }

        List<Integer> allValues = new ArrayList<>();

        // Collect all values
        for (ListNode list : lists) {
            ListNode current = list;
            while (current != null) {
                allValues.add(current.val);
                current = current.next;
            }
        }

        // Sort all values
        Collections.sort(allValues);

        // Create new linked list
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        for (int val : allValues) {
            current.next = new ListNode(val);
            current = current.next;
        }

        return dummy.next;
    }

    // Method 6: Custom Priority Queue with Index
    public ListNode mergeKListsWithIndex(ListNode[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }

        // Custom class to store node and its list index
        class NodeWithIndex {
            ListNode node;
            int listIndex;

            NodeWithIndex(ListNode node, int listIndex) {
                this.node = node;
                this.listIndex = listIndex;
            }
        }

        PriorityQueue<NodeWithIndex> minHeap = new PriorityQueue<>(
            (a, b) -> Integer.compare(a.node.val, b.node.val)
        );

        // Add first node from each list
        for (int i = 0; i < lists.length; i++) {
            if (lists[i] != null) {
                minHeap.offer(new NodeWithIndex(lists[i], i));
            }
        }

        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        while (!minHeap.isEmpty()) {
            NodeWithIndex smallest = minHeap.poll();
            current.next = smallest.node;
            current = current.next;

            // Add next node from the same list
            if (smallest.node.next != null) {
                minHeap.offer(new NodeWithIndex(smallest.node.next, smallest.listIndex));
            }
        }

        return dummy.next;
    }

    // Method 7: Merge K Lists with Early Termination
    public ListNode mergeKListsEarlyTermination(ListNode[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }

        PriorityQueue<ListNode> minHeap = new PriorityQueue<>(
            (a, b) -> Integer.compare(a.val, b.val)
        );

        // Count non-empty lists
        int nonEmptyCount = 0;
        for (ListNode list : lists) {
            if (list != null) {
                minHeap.offer(list);
                nonEmptyCount++;
            }
        }

        if (nonEmptyCount == 0) {
            return null;
        }

        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        while (!minHeap.isEmpty()) {
            ListNode smallest = minHeap.poll();
            current.next = smallest;
            current = current.next;

            if (smallest.next != null) {
                minHeap.offer(smallest.next);
            }
        }

        return dummy.next;
    }

    // Method 8: Recursive Merge with Memoization (educational)
    public ListNode mergeKListsMemo(ListNode[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }

        // Use a map to cache merged results (for educational purposes)
        Map<String, ListNode> memo = new HashMap<>();
        return mergeKListsMemoHelper(lists, 0, lists.length - 1, memo);
    }

    private ListNode mergeKListsMemoHelper(ListNode[] lists, int start, int end, Map<String, ListNode> memo) {
        String key = start + "," + end;
        if (memo.containsKey(key)) {
            return memo.get(key);
        }

        if (start == end) {
            ListNode result = lists[start];
            memo.put(key, result);
            return result;
        }

        if (start > end) {
            memo.put(key, null);
            return null;
        }

        int mid = start + (end - start) / 2;

        ListNode left = mergeKListsMemoHelper(lists, start, mid, memo);
        ListNode right = mergeKListsMemoHelper(lists, mid + 1, end, memo);

        ListNode result = mergeTwoLists(left, right);
        memo.put(key, result);
        return result;
    }

    // Method 9: Convert to Array and Sort
    public ListNode mergeKListsArraySort(ListNode[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }

        List<ListNode> allNodes = new ArrayList<>();

        // Collect all nodes
        for (ListNode list : lists) {
            ListNode current = list;
            while (current != null) {
                allNodes.add(current);
                current = current.next;
            }
        }

        if (allNodes.isEmpty()) {
            return null;
        }

        // Sort nodes by value
        allNodes.sort(Comparator.comparingInt(a -> a.val));

        // Reconnect the nodes
        for (int i = 0; i < allNodes.size() - 1; i++) {
            allNodes.get(i).next = allNodes.get(i + 1);
        }
        allNodes.get(allNodes.size() - 1).next = null;

        return allNodes.get(0);
    }

    // Method 10: Performance Optimized Version
    public ListNode mergeKListsOptimized(ListNode[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }

        // Filter out null lists first
        List<ListNode> nonNullLists = new ArrayList<>();
        for (ListNode list : lists) {
            if (list != null) {
                nonNullLists.add(list);
            }
        }

        if (nonNullLists.isEmpty()) {
            return null;
        }

        // If only one list, return it
        if (nonNullLists.size() == 1) {
            return nonNullLists.get(0);
        }

        PriorityQueue<ListNode> minHeap = new PriorityQueue<>(
            nonNullLists.size(),
            (a, b) -> Integer.compare(a.val, b.val)
        );

        // Add heads to heap
        for (ListNode list : nonNullLists) {
            minHeap.offer(list);
        }

        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        while (!minHeap.isEmpty()) {
            ListNode smallest = minHeap.poll();
            current.next = smallest;
            current = current.next;

            if (smallest.next != null) {
                minHeap.offer(smallest.next);
            }
        }

        return dummy.next;
    }

    // Method 11: Count total nodes
    public int countTotalNodes(ListNode[] lists) {
        int count = 0;
        for (ListNode list : lists) {
            ListNode current = list;
            while (current != null) {
                count++;
                current = current.next;
            }
        }
        return count;
    }

    // Method 12: Validate merged list
    public boolean isSorted(ListNode head) {
        if (head == null || head.next == null) {
            return true;
        }

        ListNode current = head;
        while (current.next != null) {
            if (current.val > current.next.val) {
                return false;
            }
            current = current.next;
        }

        return true;
    }

    // Helper methods for testing
    private static ListNode createList(int[] arr) {
        if (arr == null || arr.length == 0) {
            return null;
        }

        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        for (int val : arr) {
            current.next = new ListNode(val);
            current = current.next;
        }

        return dummy.next;
    }

    private static String listToString(ListNode head) {
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        ListNode current = head;
        while (current != null) {
            sb.append(current.val);
            if (current.next != null) {
                sb.append(" -> ");
            }
            current = current.next;
        }
        sb.append("]");
        return sb.toString();
    }

    // Test cases
    public static void main(String[] args) {
        MergeKSortedLists5 solution = new MergeKSortedLists5();

        // Create test lists
        ListNode[] lists = new ListNode[]{
            createList(new int[]{1, 4, 5}),
            createList(new int[]{1, 3, 4}),
            createList(new int[]{2, 6})
        };

        System.out.println("Input lists:");
        for (int i = 0; i < lists.length; i++) {
            System.out.println("List " + (i + 1) + ": " + listToString(lists[i]));
        }

        // Test Case 1: Priority Queue approach
        ListNode result1 = solution.mergeKLists(Arrays.copyOf(lists, lists.length));
        System.out.println("Merged (Priority Queue): " + listToString(result1));
        System.out.println("Is sorted: " + solution.isSorted(result1));

        // Test Case 2: Divide and Conquer
        ListNode result2 = solution.mergeKListsDivideConquer(Arrays.copyOf(lists, lists.length));
        System.out.println("Merged (Divide & Conquer): " + listToString(result2));
        System.out.println("Is sorted: " + solution.isSorted(result2));

        // Test Case 3: Iterative Divide and Conquer
        ListNode result3 = solution.mergeKListsIterative(Arrays.copyOf(lists, lists.length));
        System.out.println("Merged (Iterative D&C): " + listToString(result3));
        System.out.println("Is sorted: " + solution.isSorted(result3));

        // Test Case 4: Sequential merge
        ListNode result4 = solution.mergeKListsSequential(Arrays.copyOf(lists, lists.length));
        System.out.println("Merged (Sequential): " + listToString(result4));
        System.out.println("Is sorted: " + solution.isSorted(result4));

        // Test Case 5: Array sort approach
        ListNode result5 = solution.mergeKListsWithSort(Arrays.copyOf(lists, lists.length));
        System.out.println("Merged (Array Sort): " + listToString(result5));
        System.out.println("Is sorted: " + solution.isSorted(result5));

        // Test Case 6: With index tracking
        ListNode result6 = solution.mergeKListsWithIndex(Arrays.copyOf(lists, lists.length));
        System.out.println("Merged (With Index): " + listToString(result6));
        System.out.println("Is sorted: " + solution.isSorted(result6));

        // Test Case 7: Performance comparison
        System.out.println("\nPerformance comparison:");
        long startTime, endTime;

        // Priority Queue
        ListNode[] testLists1 = Arrays.copyOf(lists, lists.length);
        startTime = System.nanoTime();
        solution.mergeKLists(testLists1);
        endTime = System.nanoTime();
        System.out.println("Priority Queue: " + (endTime - startTime) / 1000000 + " ms");

        // Divide and Conquer
        ListNode[] testLists2 = Arrays.copyOf(lists, lists.length);
        startTime = System.nanoTime();
        solution.mergeKListsDivideConquer(testLists2);
        endTime = System.nanoTime();
        System.out.println("Divide & Conquer: " + (endTime - startTime) / 1000000 + " ms");

        // Test Case 8: Edge cases
        System.out.println("\nEdge cases:");

        // Empty array
        ListNode[] empty = new ListNode[0];
        ListNode emptyResult = solution.mergeKLists(empty);
        System.out.println("Empty array: " + (emptyResult == null ? "null" : listToString(emptyResult)));

        // Single list
        ListNode[] single = new ListNode[]{createList(new int[]{1, 2, 3})};
        ListNode singleResult = solution.mergeKLists(single);
        System.out.println("Single list: " + listToString(singleResult));

        // Lists with nulls
        ListNode[] withNulls = new ListNode[]{
            createList(new int[]{1, 3}),
            null,
            createList(new int[]{2, 4})
        };
        ListNode nullResult = solution.mergeKLists(withNulls);
        System.out.println("With nulls: " + listToString(nullResult));

        // All null lists
        ListNode[] allNull = new ListNode[]{null, null, null};
        ListNode allNullResult = solution.mergeKLists(allNull);
        System.out.println("All null: " + (allNullResult == null ? "null" : listToString(allNullResult)));

        // Test Case 9: Large lists
        ListNode[] largeLists = new ListNode[10];
        for (int i = 0; i < 10; i++) {
            int[] arr = new int[100];
            for (int j = 0; j < 100; j++) {
                arr[j] = i * 100 + j;
            }
            largeLists[i] = createList(arr);
        }

        startTime = System.nanoTime();
        ListNode largeResult = solution.mergeKLists(largeLists);
        endTime = System.nanoTime();
        System.out.println("Large lists (1000 nodes): " + (endTime - startTime) / 1000000 + " ms");
        System.out.println("Total nodes: " + solution.countTotalNodes(largeLists));
        System.out.println("Is sorted: " + solution.isSorted(largeResult));
    }
}