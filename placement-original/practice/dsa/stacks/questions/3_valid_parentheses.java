package stacks.questions;

/*
 * 3. VALID PARENTHESES (LeetCode 20)
 *
 * Problem Statement:
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 *
 * Conceptual Understanding:
 * - Use stack to track opening brackets
 * - Push opening brackets onto stack
 * - When closing bracket encountered, check if it matches top of stack
 * - Stack should be empty at end for valid string
 * - Handle different types of brackets: (), {}, []
 * - Time: O(n), Space: O(n) worst case
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import java.util.Stack;
import java.util.HashMap;
import java.util.Map;

class ValidParentheses3 {

    // Method 1: Basic Stack Approach
    public boolean isValid(String s) {
        if (s == null || s.length() == 0) {
            return true;
        }

        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                // Push opening brackets
                stack.push(c);
            } else {
                // Closing bracket
                if (stack.isEmpty()) {
                    return false; // No matching opening bracket
                }

                char top = stack.pop();
                if (!isMatchingPair(top, c)) {
                    return false; // Mismatched brackets
                }
            }
        }

        // Stack should be empty for valid string
        return stack.isEmpty();
    }

    private boolean isMatchingPair(char open, char close) {
        return (open == '(' && close == ')') ||
               (open == '{' && close == '}') ||
               (open == '[' && close == ']');
    }

    // Method 2: Using HashMap for cleaner code
    public boolean isValidHashMap(String s) {
        if (s == null || s.length() == 0) {
            return true;
        }

        Stack<Character> stack = new Stack<>();
        Map<Character, Character> bracketMap = new HashMap<>();
        bracketMap.put(')', '(');
        bracketMap.put('}', '{');
        bracketMap.put(']', '[');

        for (char c : s.toCharArray()) {
            if (bracketMap.containsKey(c)) {
                // Closing bracket
                char top = stack.isEmpty() ? '#' : stack.pop();
                if (top != bracketMap.get(c)) {
                    return false;
                }
            } else {
                // Opening bracket
                stack.push(c);
            }
        }

        return stack.isEmpty();
    }

    // Method 3: Handle multiple types with single check
    public boolean isValidSingleCheck(String s) {
        if (s == null || s.length() == 0) {
            return true;
        }

        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            switch (c) {
                case '(':
                case '{':
                case '[':
                    stack.push(c);
                    break;
                case ')':
                    if (stack.isEmpty() || stack.pop() != '(') return false;
                    break;
                case '}':
                    if (stack.isEmpty() || stack.pop() != '{') return false;
                    break;
                case ']':
                    if (stack.isEmpty() || stack.pop() != '[') return false;
                    break;
                default:
                    // Invalid character
                    return false;
            }
        }

        return stack.isEmpty();
    }

    // Method 4: Check if string can be made valid by removing minimum brackets
    public int minRemovalsToMakeValid(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }

        Stack<Integer> stack = new Stack<>();
        int removals = 0;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            if (c == '(' || c == '{' || c == '[') {
                stack.push(i);
            } else if (c == ')' || c == '}' || c == ']') {
                if (!stack.isEmpty()) {
                    stack.pop();
                } else {
                    removals++; // Extra closing bracket
                }
            }
            // Ignore other characters
        }

        // Remaining opening brackets need to be removed
        removals += stack.size();

        return removals;
    }

    // Method 5: Generate valid parentheses combinations (LeetCode 22)
    public java.util.List<String> generateParenthesis(int n) {
        java.util.List<String> result = new java.util.ArrayList<>();
        backtrack(result, "", 0, 0, n);
        return result;
    }

    private void backtrack(java.util.List<String> result, String current, int open, int close, int max) {
        if (current.length() == max * 2) {
            result.add(current);
            return;
        }

        if (open < max) {
            backtrack(result, current + "(", open + 1, close, max);
        }
        if (close < open) {
            backtrack(result, current + ")", open, close + 1, max);
        }
    }

    // Method 6: Check longest valid parentheses substring (LeetCode 32)
    public int longestValidParentheses(String s) {
        if (s == null || s.length() < 2) {
            return 0;
        }

        Stack<Integer> stack = new Stack<>();
        stack.push(-1); // Base for calculating lengths
        int maxLength = 0;

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                stack.push(i);
            } else {
                stack.pop();
                if (stack.isEmpty()) {
                    stack.push(i); // Reset base
                } else {
                    maxLength = Math.max(maxLength, i - stack.peek());
                }
            }
        }

        return maxLength;
    }

    // Method 7: Validate with different bracket types and nesting
    public boolean isValidComplex(String s) {
        if (s == null || s.length() == 0) {
            return true;
        }

        Stack<Character> stack = new Stack<>();
        Map<Character, Character> pairs = new HashMap<>();
        pairs.put(')', '(');
        pairs.put('}', '{');
        pairs.put(']', '[');
        pairs.put('>', '<'); // Add angle brackets

        for (char c : s.toCharArray()) {
            if (pairs.containsValue(c)) {
                // Opening bracket
                stack.push(c);
            } else if (pairs.containsKey(c)) {
                // Closing bracket
                if (stack.isEmpty() || stack.pop() != pairs.get(c)) {
                    return false;
                }
            }
            // Ignore other characters
        }

        return stack.isEmpty();
    }

    // Method 8: Count different types of brackets
    public static class BracketStats {
        int roundBrackets = 0;  // ()
        int curlyBrackets = 0;  // {}
        int squareBrackets = 0; // []
        int angleBrackets = 0;  // <>

        @Override
        public String toString() {
            return String.format("Round: %d, Curly: %d, Square: %d, Angle: %d",
                               roundBrackets, curlyBrackets, squareBrackets, angleBrackets);
        }
    }

    public BracketStats countBrackets(String s) {
        BracketStats stats = new BracketStats();
        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            switch (c) {
                case '(':
                    stack.push(c);
                    break;
                case ')':
                    if (!stack.isEmpty() && stack.peek() == '(') {
                        stack.pop();
                        stats.roundBrackets++;
                    }
                    break;
                case '{':
                    stack.push(c);
                    break;
                case '}':
                    if (!stack.isEmpty() && stack.peek() == '{') {
                        stack.pop();
                        stats.curlyBrackets++;
                    }
                    break;
                case '[':
                    stack.push(c);
                    break;
                case ']':
                    if (!stack.isEmpty() && stack.peek() == '[') {
                        stack.pop();
                        stats.squareBrackets++;
                    }
                    break;
                case '<':
                    stack.push(c);
                    break;
                case '>':
                    if (!stack.isEmpty() && stack.peek() == '<') {
                        stack.pop();
                        stats.angleBrackets++;
                    }
                    break;
            }
        }

        return stats;
    }

    // Test cases
    public static void main(String[] args) {
        ValidParentheses3 solution = new ValidParentheses3();

        // Test Case 1: Basic valid parentheses
        System.out.println("isValid(\"()\"): " + solution.isValid("()"));           // true
        System.out.println("isValid(\"()[]{}\"): " + solution.isValid("()[]{}"));   // true
        System.out.println("isValid(\"(]\"): " + solution.isValid("(]"));           // false
        System.out.println("isValid(\"([)]\"): " + solution.isValid("([)]"));       // false
        System.out.println("isValid(\"{[]}\"): " + solution.isValid("{[]}"));       // true

        // Test Case 2: HashMap approach
        System.out.println("\nHashMap approach:");
        System.out.println("isValid(\"{{}}[]()\"): " + solution.isValidHashMap("{{}}[]()")); // true

        // Test Case 3: Single check approach
        System.out.println("\nSingle check approach:");
        System.out.println("isValid(\"[({})]\"): " + solution.isValidSingleCheck("[({})]")); // false

        // Test Case 4: Minimum removals
        System.out.println("\nMinimum removals:");
        System.out.println("minRemovals(\"())()(\"): " + solution.minRemovalsToMakeValid("())()(")); // 1
        System.out.println("minRemovals(\"(((\"): " + solution.minRemovalsToMakeValid("(((")); // 3

        // Test Case 5: Generate parentheses
        System.out.println("\nGenerate parentheses (n=3):");
        System.out.println(solution.generateParenthesis(3));

        // Test Case 6: Longest valid parentheses
        System.out.println("\nLongest valid parentheses:");
        System.out.println("longestValid(\"(())\"): " + solution.longestValidParentheses("(()")); // 2
        System.out.println("longestValid(\")()())\"): " + solution.longestValidParentheses(")()())")); // 4

        // Test Case 7: Complex validation
        System.out.println("\nComplex validation:");
        System.out.println("isValid(\"<{[()]}>\"): " + solution.isValidComplex("<{[()]}>")); // true

        // Test Case 8: Bracket statistics
        System.out.println("\nBracket statistics:");
        BracketStats stats = solution.countBrackets("({[<()>]})");
        System.out.println("Stats: " + stats);
    }
}