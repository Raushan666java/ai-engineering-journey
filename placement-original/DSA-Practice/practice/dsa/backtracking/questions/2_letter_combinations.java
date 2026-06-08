package backtracking.questions;

/*
 * 2. LETTER COMBINATIONS OF A PHONE NUMBER (LeetCode 17)
 *
 * Problem Statement:
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations
 * that the number could represent. Return the answer in any order.
 *
 * A mapping of digits to letters (just like on the telephone buttons) is given below:
 * 2: abc, 3: def, 4: ghi, 5: jkl, 6: mno, 7: pqrs, 8: tuv, 9: wxyz
 *
 * Conceptual Understanding:
 * - Each digit maps to multiple letters
 * - Generate all combinations of letters
 * - Use backtracking to build combinations incrementally
 * - Base case: when current combination length equals input length
 * - Map digits to their corresponding letters
 *
 * Time Complexity: O(3^n * 4^m) where n is count of digits with 3 letters, m with 4 letters
 * Space Complexity: O(3^n * 4^m) for result storage
 */

import java.util.*;

class LetterCombinations2 {

    // Phone number mapping
    private static final String[] KEYPAD = {
        "",     // 0
        "",     // 1
        "abc",  // 2
        "def",  // 3
        "ghi",  // 4
        "jkl",  // 5
        "mno",  // 6
        "pqrs", // 7
        "tuv",  // 8
        "wxyz"  // 9
    };

    // Method 1: Basic backtracking
    public List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>();
        if (digits == null || digits.length() == 0) {
            return result;
        }

        backtrack(result, new StringBuilder(), digits, 0);
        return result;
    }

    private void backtrack(List<String> result, StringBuilder current,
                          String digits, int index) {
        // Base case: processed all digits
        if (index == digits.length()) {
            result.add(current.toString());
            return;
        }

        // Get letters for current digit
        String letters = KEYPAD[digits.charAt(index) - '0'];
        for (char letter : letters.toCharArray()) {
            current.append(letter);
            backtrack(result, current, digits, index + 1);
            current.deleteCharAt(current.length() - 1);
        }
    }

    // Method 2: Using string concatenation
    public List<String> letterCombinationsConcat(String digits) {
        List<String> result = new ArrayList<>();
        if (digits == null || digits.length() == 0) {
            return result;
        }

        backtrackConcat(result, "", digits, 0);
        return result;
    }

    private void backtrackConcat(List<String> result, String current,
                                String digits, int index) {
        if (index == digits.length()) {
            result.add(current);
            return;
        }

        String letters = KEYPAD[digits.charAt(index) - '0'];
        for (char letter : letters.toCharArray()) {
            backtrackConcat(result, current + letter, digits, index + 1);
        }
    }

    // Method 3: Iterative approach
    public List<String> letterCombinationsIterative(String digits) {
        if (digits == null || digits.length() == 0) {
            return new ArrayList<>();
        }

        List<String> result = new ArrayList<>();
        result.add("");

        for (char digit : digits.toCharArray()) {
            String letters = KEYPAD[digit - '0'];
            List<String> newResult = new ArrayList<>();

            for (String combination : result) {
                for (char letter : letters.toCharArray()) {
                    newResult.add(combination + letter);
                }
            }

            result = newResult;
        }

        return result;
    }

    // Method 4: Using queue (BFS)
    public List<String> letterCombinationsQueue(String digits) {
        if (digits == null || digits.length() == 0) {
            return new ArrayList<>();
        }

        Queue<String> queue = new LinkedList<>();
        queue.offer("");

        for (char digit : digits.toCharArray()) {
            String letters = KEYPAD[digit - '0'];
            int size = queue.size();

            for (int i = 0; i < size; i++) {
                String current = queue.poll();

                for (char letter : letters.toCharArray()) {
                    queue.offer(current + letter);
                }
            }
        }

        return new ArrayList<>(queue);
    }

    // Method 5: Recursive with list building
    public List<String> letterCombinationsRecursive(String digits) {
        if (digits == null || digits.length() == 0) {
            return new ArrayList<>();
        }

        return combine(0, digits);
    }

    private List<String> combine(int index, String digits) {
        if (index == digits.length()) {
            List<String> result = new ArrayList<>();
            result.add("");
            return result;
        }

        List<String> combinations = new ArrayList<>();
        String letters = KEYPAD[digits.charAt(index) - '0'];
        List<String> suffixCombinations = combine(index + 1, digits);

        for (char letter : letters.toCharArray()) {
            for (String suffix : suffixCombinations) {
                combinations.add(letter + suffix);
            }
        }

        return combinations;
    }

    // Method 6: With custom mapping
    public List<String> letterCombinationsCustom(String digits, Map<Character, String> customKeypad) {
        List<String> result = new ArrayList<>();
        if (digits == null || digits.length() == 0) {
            return result;
        }

        backtrackCustom(result, new StringBuilder(), digits, 0, customKeypad);
        return result;
    }

    private void backtrackCustom(List<String> result, StringBuilder current,
                                String digits, int index, Map<Character, String> keypad) {
        if (index == digits.length()) {
            result.add(current.toString());
            return;
        }

        char digit = digits.charAt(index);
        String letters = keypad.getOrDefault(digit, "");

        for (char letter : letters.toCharArray()) {
            current.append(letter);
            backtrackCustom(result, current, digits, index + 1, keypad);
            current.deleteCharAt(current.length() - 1);
        }
    }

    // Method 7: Count combinations without generating
    public int countCombinations(String digits) {
        if (digits == null || digits.length() == 0) {
            return 0;
        }

        int count = 1;
        for (char digit : digits.toCharArray()) {
            String letters = KEYPAD[digit - '0'];
            count *= letters.length();
        }
        return count;
    }

    // Method 8: Generate with length constraint
    public List<String> letterCombinationsWithLength(String digits, int maxLength) {
        List<String> result = new ArrayList<>();
        if (digits == null || digits.length() == 0) {
            return result;
        }

        backtrackWithLength(result, new StringBuilder(), digits, 0, maxLength);
        return result;
    }

    private void backtrackWithLength(List<String> result, StringBuilder current,
                                    String digits, int index, int maxLength) {
        if (current.length() > maxLength) return;

        if (index == digits.length()) {
            if (current.length() <= maxLength) {
                result.add(current.toString());
            }
            return;
        }

        String letters = KEYPAD[digits.charAt(index) - '0'];
        for (char letter : letters.toCharArray()) {
            current.append(letter);
            backtrackWithLength(result, current, digits, index + 1, maxLength);
            current.deleteCharAt(current.length() - 1);
        }
    }

    // Method 9: Performance analysis
    public static class PerformanceStats {
        String input;
        int combinations;
        long timeMs;
        double avgLength;

        public PerformanceStats(String input, int combinations, long timeMs, double avgLength) {
            this.input = input;
            this.combinations = combinations;
            this.timeMs = timeMs;
            this.avgLength = avgLength;
        }

        @Override
        public String toString() {
            return String.format("Input: %s, Combinations: %d, Time: %dms, Avg Length: %.1f",
                               input, combinations, timeMs, avgLength);
        }
    }

    public PerformanceStats analyzePerformance(String digits) {
        long startTime = System.nanoTime();
        List<String> result = letterCombinations(digits);
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;

        int totalLength = 0;
        for (String s : result) {
            totalLength += s.length();
        }
        double avgLength = result.isEmpty() ? 0 : (double) totalLength / result.size();

        return new PerformanceStats(digits, result.size(), timeMs, avgLength);
    }

    // Method 10: Validate combinations
    public boolean validateCombinations(List<String> combinations, String digits) {
        if (combinations == null || digits == null) return false;

        int expectedLength = digits.length();
        Set<String> uniqueCombos = new HashSet<>(combinations);

        // Check length and uniqueness
        if (uniqueCombos.size() != combinations.size()) return false;

        for (String combo : combinations) {
            if (combo.length() != expectedLength) return false;

            // Check if each character is valid for its position
            for (int i = 0; i < combo.length(); i++) {
                char digit = digits.charAt(i);
                String validLetters = KEYPAD[digit - '0'];
                if (validLetters.indexOf(combo.charAt(i)) == -1) return false;
            }
        }

        return true;
    }

    // Method 11: Get combination statistics
    public static class CombinationStats {
        int totalCombinations;
        int uniqueCharacters;
        Map<Character, Integer> frequencyMap;
        double avgCombinationsPerDigit;

        public CombinationStats(int totalCombinations, int uniqueCharacters,
                              Map<Character, Integer> frequencyMap, double avgCombinationsPerDigit) {
            this.totalCombinations = totalCombinations;
            this.uniqueCharacters = uniqueCharacters;
            this.frequencyMap = frequencyMap;
            this.avgCombinationsPerDigit = avgCombinationsPerDigit;
        }

        @Override
        public String toString() {
            return String.format("Total: %d, Unique Chars: %d, Avg per digit: %.1f, Frequencies: %s",
                               totalCombinations, uniqueCharacters, avgCombinationsPerDigit, frequencyMap);
        }
    }

    public CombinationStats getCombinationStats(String digits) {
        List<String> combinations = letterCombinations(digits);
        Set<Character> uniqueChars = new HashSet<>();
        Map<Character, Integer> frequencyMap = new HashMap<>();

        for (String combo : combinations) {
            for (char c : combo.toCharArray()) {
                uniqueChars.add(c);
                frequencyMap.put(c, frequencyMap.getOrDefault(c, 0) + 1);
            }
        }

        double avgPerDigit = 0;
        for (char digit : digits.toCharArray()) {
            avgPerDigit += KEYPAD[digit - '0'].length();
        }
        avgPerDigit = digits.length() > 0 ? avgPerDigit / digits.length() : 0;

        return new CombinationStats(combinations.size(), uniqueChars.size(),
                                  frequencyMap, avgPerDigit);
    }

    // Method 12: Generate with character constraints
    public List<String> letterCombinationsWithConstraints(String digits, Set<Character> allowedChars) {
        List<String> result = new ArrayList<>();
        if (digits == null || digits.length() == 0) {
            return result;
        }

        backtrackWithConstraints(result, new StringBuilder(), digits, 0, allowedChars);
        return result;
    }

    private void backtrackWithConstraints(List<String> result, StringBuilder current,
                                        String digits, int index, Set<Character> allowedChars) {
        if (index == digits.length()) {
            result.add(current.toString());
            return;
        }

        String letters = KEYPAD[digits.charAt(index) - '0'];
        for (char letter : letters.toCharArray()) {
            if (allowedChars.contains(letter)) {
                current.append(letter);
                backtrackWithConstraints(result, current, digits, index + 1, allowedChars);
                current.deleteCharAt(current.length() - 1);
            }
        }
    }

    // Test cases
    public static void main(String[] args) {
        LetterCombinations2 solution = new LetterCombinations2();

        // Test Case 1: Basic combinations
        System.out.println("=== Basic Combinations ===");
        List<String> result1 = solution.letterCombinations("23");
        System.out.println("Digits '23': " + result1);
        System.out.println("Count: " + result1.size());
        System.out.println("Valid: " + solution.validateCombinations(result1, "23"));

        // Test Case 2: String concatenation
        List<String> result2 = solution.letterCombinationsConcat("23");
        System.out.println("Concat approach: " + result2.size() + " combinations");

        // Test Case 3: Iterative approach
        List<String> result3 = solution.letterCombinationsIterative("23");
        System.out.println("Iterative: " + result3.size() + " combinations");

        // Test Case 4: Queue approach
        List<String> result4 = solution.letterCombinationsQueue("23");
        System.out.println("Queue approach: " + result4.size() + " combinations");

        // Test Case 5: Recursive approach
        List<String> result5 = solution.letterCombinationsRecursive("23");
        System.out.println("Recursive: " + result5.size() + " combinations");

        // Test Case 6: Custom mapping
        Map<Character, String> customKeypad = new HashMap<>();
        customKeypad.put('2', "ABC");
        customKeypad.put('3', "DEF");
        List<String> custom = solution.letterCombinationsCustom("23", customKeypad);
        System.out.println("Custom keypad: " + custom);

        // Test Case 7: Count combinations
        System.out.println("Combination counts:");
        System.out.println("'2': " + solution.countCombinations("2"));
        System.out.println("'23': " + solution.countCombinations("23"));
        System.out.println("'234': " + solution.countCombinations("234"));

        // Test Case 8: Performance analysis
        PerformanceStats stats = solution.analyzePerformance("234");
        System.out.println("Performance: " + stats);

        // Test Case 9: Statistics
        CombinationStats comboStats = solution.getCombinationStats("23");
        System.out.println("Statistics: " + comboStats);

        // Test Case 10: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty: " + solution.letterCombinations(""));
        System.out.println("Single digit '2': " + solution.letterCombinations("2"));
        System.out.println("Long digits '23456789': " + solution.letterCombinations("23456789").size() + " combinations");

        // Test Case 11: With constraints
        Set<Character> vowels = new HashSet<>(Arrays.asList('a', 'e', 'i', 'o', 'u'));
        List<String> vowelOnly = solution.letterCombinationsWithConstraints("234", vowels);
        System.out.println("Vowel combinations: " + vowelOnly);

        // Test Case 12: Invalid digits
        try {
            solution.letterCombinations("123");
        } catch (Exception e) {
            System.out.println("Invalid digits handled: " + e.getMessage());
        }
    }
}