package recursion.questions;

/*
 * 3. GENERATE PARENTHESES (LeetCode 22)
 *
 * Problem Statement:
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 * Conceptual Understanding:
 * - Backtracking problem to generate valid parentheses
 * - Keep track of open and close parentheses used
 * - Can add open parenthesis if we have remaining pairs
 * - Can add close parenthesis only if there are more open than close
 * - Valid when open == close == n
 *
 * Time Complexity: O(4^n / √n) - Catalan number
 * Space Complexity: O(4^n / √n) for result, O(n) for recursion stack
 */

import java.util.*;

class GenerateParentheses3 {

    // Method 1: Backtracking approach
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        backtrack(result, new StringBuilder(), 0, 0, n);
        return result;
    }

    private void backtrack(List<String> result, StringBuilder current, int open, int close, int max) {
        // Base case: valid combination
        if (current.length() == max * 2) {
            result.add(current.toString());
            return;
        }

        // Add open parenthesis if possible
        if (open < max) {
            current.append('(');
            backtrack(result, current, open + 1, close, max);
            current.deleteCharAt(current.length() - 1);
        }

        // Add close parenthesis if possible
        if (close < open) {
            current.append(')');
            backtrack(result, current, open, close + 1, max);
            current.deleteCharAt(current.length() - 1);
        }
    }

    // Method 2: Alternative implementation with string concatenation
    public List<String> generateParenthesisString(int n) {
        List<String> result = new ArrayList<>();
        generate(result, "", 0, 0, n);
        return result;
    }

    private void generate(List<String> result, String current, int open, int close, int max) {
        if (current.length() == max * 2) {
            result.add(current);
            return;
        }

        if (open < max) {
            generate(result, current + "(", open + 1, close, max);
        }

        if (close < open) {
            generate(result, current + ")", open, close + 1, max);
        }
    }

    // Method 3: Using character array for efficiency
    public List<String> generateParenthesisArray(int n) {
        List<String> result = new ArrayList<>();
        char[] current = new char[n * 2];
        backtrackArray(result, current, 0, 0, 0, n);
        return result;
    }

    private void backtrackArray(List<String> result, char[] current, int pos, int open, int close, int max) {
        if (pos == max * 2) {
            result.add(new String(current));
            return;
        }

        if (open < max) {
            current[pos] = '(';
            backtrackArray(result, current, pos + 1, open + 1, close, max);
        }

        if (close < open) {
            current[pos] = ')';
            backtrackArray(result, current, pos + 1, open, close + 1, max);
        }
    }

    // Method 4: Iterative approach using stack
    public List<String> generateParenthesisIterative(int n) {
        List<String> result = new ArrayList<>();
        if (n == 0) {
            result.add("");
            return result;
        }

        for (int i = 0; i < n; i++) {
            List<String> left = generateParenthesisIterative(i);
            List<String> right = generateParenthesisIterative(n - 1 - i);

            for (String l : left) {
                for (String r : right) {
                    result.add("(" + l + ")" + r);
                }
            }
        }

        return result;
    }

    // Method 5: Catalan number approach (mathematical)
    public List<String> generateParenthesisCatalan(int n) {
        List<String> result = new ArrayList<>();
        if (n == 0) {
            result.add("");
            return result;
        }

        for (int i = 0; i < n; i++) {
            for (String left : generateParenthesisCatalan(i)) {
                for (String right : generateParenthesisCatalan(n - 1 - i)) {
                    result.add("(" + left + ")" + right);
                }
            }
        }

        return result;
    }

    // Method 6: BFS approach
    public List<String> generateParenthesisBFS(int n) {
        List<String> result = new ArrayList<>();
        if (n == 0) {
            result.add("");
            return result;
        }

        Queue<Node> queue = new LinkedList<>();
        queue.add(new Node("", 0, 0));

        while (!queue.isEmpty()) {
            Node current = queue.poll();

            if (current.open == n && current.close == n) {
                result.add(current.str);
                continue;
            }

            if (current.open < n) {
                queue.add(new Node(current.str + "(", current.open + 1, current.close));
            }

            if (current.close < current.open) {
                queue.add(new Node(current.str + ")", current.open, current.close + 1));
            }
        }

        return result;
    }

    private static class Node {
        String str;
        int open, close;

        Node(String str, int open, int close) {
            this.str = str;
            this.open = open;
            this.close = close;
        }
    }

    // Test cases
    public static void main(String[] args) {
        GenerateParentheses3 solution = new GenerateParentheses3();

        // Test Case 1: n = 1
        List<String> result1 = solution.generateParenthesis(1);
        System.out.println("n=1: " + result1); // Expected: ["()"]

        // Test Case 2: n = 2
        List<String> result2 = solution.generateParenthesis(2);
        System.out.println("n=2: " + result2); // Expected: ["(())","()()"]

        // Test Case 3: n = 3
        List<String> result3 = solution.generateParenthesis(3);
        System.out.println("n=3: " + result3);
        // Expected: ["((()))","(()())","(())()","()(())","()()()"]

        // Test Case 4: n = 0
        List<String> result0 = solution.generateParenthesis(0);
        System.out.println("n=0: " + result0); // Expected: [""]

        // Test Case 5: Compare methods for n=2
        System.out.println("String method: " + solution.generateParenthesisString(2));
        System.out.println("Array method: " + solution.generateParenthesisArray(2));
        System.out.println("Iterative method: " + solution.generateParenthesisIterative(2));
        System.out.println("Catalan method: " + solution.generateParenthesisCatalan(2));
        System.out.println("BFS method: " + solution.generateParenthesisBFS(2));
    }
}