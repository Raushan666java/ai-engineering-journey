package backtracking.questions;

/*
 * 1. GENERATE PARENTHESES (LeetCode 22)
 *
 * Problem Statement:
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * Conceptual Understanding:
 * - Generate all valid parentheses combinations
 * - Each combination must be well-formed (balanced)
 * - Use backtracking to build strings incrementally
 * - Track open and close parentheses counts
 * - Can only add close parenthesis when open > close
 * - Base case: when total length reaches 2*n
 *
 * Time Complexity: O(4^n / √n) - Catalan number
 * Space Complexity: O(4^n / √n) for result storage
 */

import java.util.*;

class GenerateParentheses1 {

    // Method 1: Basic backtracking with counts
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        backtrack(result, new StringBuilder(), 0, 0, n);
        return result;
    }

    private void backtrack(List<String> result, StringBuilder current,
                          int open, int close, int n) {
        // Base case: reached maximum length
        if (current.length() == 2 * n) {
            result.add(current.toString());
            return;
        }

        // Add open parenthesis if possible
        if (open < n) {
            current.append('(');
            backtrack(result, current, open + 1, close, n);
            current.deleteCharAt(current.length() - 1);
        }

        // Add close parenthesis if possible
        if (close < open) {
            current.append(')');
            backtrack(result, current, open, close + 1, n);
            current.deleteCharAt(current.length() - 1);
        }
    }

    // Method 2: Using string concatenation (less efficient)
    public List<String> generateParenthesisConcat(int n) {
        List<String> result = new ArrayList<>();
        backtrackConcat(result, "", 0, 0, n);
        return result;
    }

    private void backtrackConcat(List<String> result, String current,
                                int open, int close, int n) {
        if (current.length() == 2 * n) {
            result.add(current);
            return;
        }

        if (open < n) {
            backtrackConcat(result, current + "(", open + 1, close, n);
        }

        if (close < open) {
            backtrackConcat(result, current + ")", open, close + 1, n);
        }
    }

    // Method 3: Iterative approach using stack
    public List<String> generateParenthesisIterative(int n) {
        List<String> result = new ArrayList<>();
        if (n == 0) {
            result.add("");
            return result;
        }

        // Use a queue for BFS
        Queue<ParenthesesState> queue = new LinkedList<>();
        queue.offer(new ParenthesesState("", 0, 0));

        while (!queue.isEmpty()) {
            ParenthesesState state = queue.poll();

            if (state.current.length() == 2 * n) {
                result.add(state.current);
                continue;
            }

            if (state.open < n) {
                queue.offer(new ParenthesesState(
                    state.current + "(", state.open + 1, state.close));
            }

            if (state.close < state.open) {
                queue.offer(new ParenthesesState(
                    state.current + ")", state.open, state.close + 1));
            }
        }

        return result;
    }

    static class ParenthesesState {
        String current;
        int open;
        int close;

        ParenthesesState(String current, int open, int close) {
            this.current = current;
            this.open = open;
            this.close = close;
        }
    }

    // Method 4: Catalan number approach (mathematical)
    public List<String> generateParenthesisCatalan(int n) {
        return generateCatalan(1, n);
    }

    private List<String> generateCatalan(int n, int max) {
        List<String> result = new ArrayList<>();

        if (n > max) return result;
        if (n == 0) {
            result.add("");
            return result;
        }

        for (int i = 0; i < n; i++) {
            List<String> left = generateCatalan(i, max);
            List<String> right = generateCatalan(n - 1 - i, max);

            for (String l : left) {
                for (String r : right) {
                    result.add("(" + l + ")" + r);
                }
            }
        }

        return result;
    }

    // Method 5: With validation function
    public List<String> generateParenthesisWithValidation(int n) {
        List<String> result = new ArrayList<>();
        backtrackWithValidation(result, new StringBuilder(), 0, 0, n);
        return result;
    }

    private void backtrackWithValidation(List<String> result, StringBuilder current,
                                       int open, int close, int n) {
        if (current.length() == 2 * n) {
            if (isValidParentheses(current.toString())) {
                result.add(current.toString());
            }
            return;
        }

        // Try adding open parenthesis
        current.append('(');
        backtrackWithValidation(result, current, open + 1, close, n);
        current.deleteCharAt(current.length() - 1);

        // Try adding close parenthesis
        current.append(')');
        backtrackWithValidation(result, current, open, close + 1, n);
        current.deleteCharAt(current.length() - 1);
    }

    private boolean isValidParentheses(String s) {
        int balance = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') balance++;
            else balance--;
            if (balance < 0) return false;
        }
        return balance == 0;
    }

    // Method 6: Generate with different bracket types
    public List<String> generateBracketCombinations(int n, char open, char close) {
        List<String> result = new ArrayList<>();
        backtrackBrackets(result, new StringBuilder(), 0, 0, n, open, close);
        return result;
    }

    private void backtrackBrackets(List<String> result, StringBuilder current,
                                 int open, int close, int n, char openChar, char closeChar) {
        if (current.length() == 2 * n) {
            result.add(current.toString());
            return;
        }

        if (open < n) {
            current.append(openChar);
            backtrackBrackets(result, current, open + 1, close, n, openChar, closeChar);
            current.deleteCharAt(current.length() - 1);
        }

        if (close < open) {
            current.append(closeChar);
            backtrackBrackets(result, current, open, close + 1, n, openChar, closeChar);
            current.deleteCharAt(current.length() - 1);
        }
    }

    // Method 7: Count total combinations without generating
    public int countParentheses(int n) {
        return catalanNumber(n);
    }

    private int catalanNumber(int n) {
        if (n <= 1) return 1;

        int[] catalan = new int[n + 1];
        catalan[0] = catalan[1] = 1;

        for (int i = 2; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                catalan[i] += catalan[j] * catalan[i - 1 - j];
            }
        }

        return catalan[n];
    }

    // Method 8: Generate with maximum depth constraint
    public List<String> generateParenthesisWithDepth(int n, int maxDepth) {
        List<String> result = new ArrayList<>();
        backtrackWithDepth(result, new StringBuilder(), 0, 0, n, 0, maxDepth);
        return result;
    }

    private void backtrackWithDepth(List<String> result, StringBuilder current,
                                  int open, int close, int n, int depth, int maxDepth) {
        if (depth > maxDepth) return;

        if (current.length() == 2 * n) {
            result.add(current.toString());
            return;
        }

        if (open < n) {
            current.append('(');
            backtrackWithDepth(result, current, open + 1, close, n, depth + 1, maxDepth);
            current.deleteCharAt(current.length() - 1);
        }

        if (close < open) {
            current.append(')');
            backtrackWithDepth(result, current, open, close + 1, n, depth + 1, maxDepth);
            current.deleteCharAt(current.length() - 1);
        }
    }

    // Method 9: Performance analysis
    public static class PerformanceStats {
        int n;
        int combinations;
        long timeMs;
        double avgLength;

        public PerformanceStats(int n, int combinations, long timeMs, double avgLength) {
            this.n = n;
            this.combinations = combinations;
            this.timeMs = timeMs;
            this.avgLength = avgLength;
        }

        @Override
        public String toString() {
            return String.format("n=%d, combinations=%d, time=%dms, avgLen=%.1f",
                               n, combinations, timeMs, avgLength);
        }
    }

    public PerformanceStats analyzePerformance(int n) {
        long startTime = System.nanoTime();
        List<String> result = generateParenthesis(n);
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;

        int totalLength = 0;
        for (String s : result) {
            totalLength += s.length();
        }
        double avgLength = result.isEmpty() ? 0 : (double) totalLength / result.size();

        return new PerformanceStats(n, result.size(), timeMs, avgLength);
    }

    // Method 10: Validate generated parentheses
    public boolean validateAllParentheses(List<String> parentheses, int n) {
        for (String p : parentheses) {
            if (!isValidParentheses(p) || p.length() != 2 * n) {
                return false;
            }
        }
        return true;
    }

    // Method 11: Get parentheses statistics
    public static class ParenthesesStats {
        int totalCombinations;
        int maxNesting;
        int totalOpen;
        int totalClose;

        public ParenthesesStats(int totalCombinations, int maxNesting,
                              int totalOpen, int totalClose) {
            this.totalCombinations = totalCombinations;
            this.maxNesting = maxNesting;
            this.totalOpen = totalOpen;
            this.totalClose = totalClose;
        }

        @Override
        public String toString() {
            return String.format("Combinations: %d, Max Nesting: %d, Total Open: %d, Total Close: %d",
                               totalCombinations, maxNesting, totalOpen, totalClose);
        }
    }

    public ParenthesesStats getParenthesesStats(int n) {
        List<String> combinations = generateParenthesis(n);
        int maxNesting = 0;
        int totalOpen = 0;
        int totalClose = 0;

        for (String combo : combinations) {
            int currentNesting = 0;
            int localMax = 0;

            for (char c : combo.toCharArray()) {
                if (c == '(') {
                    currentNesting++;
                    totalOpen++;
                    localMax = Math.max(localMax, currentNesting);
                } else {
                    currentNesting--;
                    totalClose++;
                }
            }
            maxNesting = Math.max(maxNesting, localMax);
        }

        return new ParenthesesStats(combinations.size(), maxNesting, totalOpen, totalClose);
    }

    // Method 12: Generate with custom constraints
    public List<String> generateParenthesisWithConstraints(int n, int maxConsecutive) {
        List<String> result = new ArrayList<>();
        backtrackWithConstraints(result, new StringBuilder(), 0, 0, n, 0, 0, maxConsecutive);
        return result;
    }

    private void backtrackWithConstraints(List<String> result, StringBuilder current,
                                        int open, int close, int n,
                                        int consecutiveOpen, int consecutiveClose,
                                        int maxConsecutive) {
        if (current.length() == 2 * n) {
            result.add(current.toString());
            return;
        }

        // Add open parenthesis
        if (open < n && consecutiveOpen < maxConsecutive) {
            current.append('(');
            backtrackWithConstraints(result, current, open + 1, close, n,
                                   consecutiveOpen + 1, 0, maxConsecutive);
            current.deleteCharAt(current.length() - 1);
        }

        // Add close parenthesis
        if (close < open && consecutiveClose < maxConsecutive) {
            current.append(')');
            backtrackWithConstraints(result, current, open, close + 1, n,
                                   0, consecutiveClose + 1, maxConsecutive);
            current.deleteCharAt(current.length() - 1);
        }
    }

    // Test cases
    public static void main(String[] args) {
        GenerateParentheses1 solution = new GenerateParentheses1();

        // Test Case 1: Basic generation
        System.out.println("=== Basic Generation ===");
        List<String> result1 = solution.generateParenthesis(3);
        System.out.println("n = 3: " + result1);
        System.out.println("Count: " + result1.size());
        System.out.println("Valid: " + solution.validateAllParentheses(result1, 3));

        // Test Case 2: String concatenation approach
        List<String> result2 = solution.generateParenthesisConcat(3);
        System.out.println("Concat approach: " + result2.size() + " combinations");

        // Test Case 3: Iterative approach
        List<String> result3 = solution.generateParenthesisIterative(3);
        System.out.println("Iterative approach: " + result3.size() + " combinations");

        // Test Case 4: Catalan number
        List<String> result4 = solution.generateParenthesisCatalan(3);
        System.out.println("Catalan approach: " + result4.size() + " combinations");

        // Test Case 5: Different brackets
        List<String> brackets = solution.generateBracketCombinations(2, '[', ']');
        System.out.println("Square brackets: " + brackets);

        // Test Case 6: Count combinations
        System.out.println("Catalan numbers:");
        for (int i = 0; i <= 5; i++) {
            System.out.println("C(" + i + ") = " + solution.countParentheses(i));
        }

        // Test Case 7: Performance analysis
        PerformanceStats stats = solution.analyzePerformance(4);
        System.out.println("Performance: " + stats);

        // Test Case 8: Statistics
        ParenthesesStats pStats = solution.getParenthesesStats(3);
        System.out.println("Statistics: " + pStats);

        // Test Case 9: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("n=0: " + solution.generateParenthesis(0));
        System.out.println("n=1: " + solution.generateParenthesis(1));
        System.out.println("n=2: " + solution.generateParenthesis(2));

        // Test Case 10: With constraints
        List<String> constrained = solution.generateParenthesisWithConstraints(3, 2);
        System.out.println("Max 2 consecutive: " + constrained.size() + " combinations");

        // Test Case 11: Validation
        List<String> invalid = Arrays.asList("(()", "())", "(((");
        System.out.println("Invalid examples valid? " + solution.validateAllParentheses(invalid, 3));

        // Test Case 12: Large n (performance test)
        System.out.println("n=4 combinations: " + solution.generateParenthesis(4).size());
    }
}