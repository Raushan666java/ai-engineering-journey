/**
 * Day 4: Strings & Methods - Complete Guide
 * File: string_advanced.java
 * Purpose: Learn StringBuilder and advanced string operations
 *
 * Topics Covered:
 * - StringBuilder vs String performance
 * - Advanced string methods (split, join, replace)
 * - String algorithms (palindrome, anagram, compression)
 * - Regular expressions basics
 * - String manipulation techniques
 */

public class string_advanced {

    public static void main(String[] args) {
        System.out.println("=== STRING ADVANCED - DAY 4 ===\n");

        // 1. STRINGBUILDER BASICS
        demonstrateStringBuilderBasics();

        // 2. STRINGBUILDER VS STRING PERFORMANCE
        demonstratePerformanceComparison();

        // 3. ADVANCED STRING METHODS
        demonstrateAdvancedMethods();

        // 4. STRING ALGORITHMS
        demonstrateStringAlgorithms();

        // 5. REGULAR EXPRESSIONS
        demonstrateRegularExpressions();

        // 6. PRACTICAL APPLICATIONS
        demonstratePracticalApplications();
    }

    /**
     * Demonstrates StringBuilder basic operations
     */
    public static void demonstrateStringBuilderBasics() {
        System.out.println("1. STRINGBUILDER BASICS");
        System.out.println("-----------------------");

        // Creating StringBuilder objects
        StringBuilder sb1 = new StringBuilder(); // Empty, capacity 16
        StringBuilder sb2 = new StringBuilder(50); // Empty, capacity 50
        StringBuilder sb3 = new StringBuilder("Hello"); // With initial content

        System.out.println("StringBuilder creation:");
        System.out.println("sb1 (empty): '" + sb1 + "' (capacity: " + sb1.capacity() + ")");
        System.out.println("sb2 (capacity 50): '" + sb2 + "' (capacity: " + sb2.capacity() + ")");
        System.out.println("sb3 (with content): '" + sb3 + "' (capacity: " + sb3.capacity() + ")");

        // Basic operations
        StringBuilder sb = new StringBuilder("Hello");

        // append() - add to end
        sb.append(" World");
        System.out.println("\nAfter append: " + sb);

        // insert() - insert at position
        sb.insert(6, "Beautiful ");
        System.out.println("After insert: " + sb);

        // replace() - replace substring
        sb.replace(0, 5, "Hi");
        System.out.println("After replace: " + sb);

        // delete() - remove characters
        sb.delete(3, 13); // Remove "Beautiful "
        System.out.println("After delete: " + sb);

        // deleteCharAt() - remove single character
        sb.deleteCharAt(sb.length() - 1); // Remove last space
        System.out.println("After deleteCharAt: " + sb);

        // reverse() - reverse the string
        sb.reverse();
        System.out.println("After reverse: " + sb);
        sb.reverse(); // Reverse back
        System.out.println("After reverse again: " + sb);

        // length() and capacity()
        System.out.println("\nLength and capacity:");
        System.out.println("Length: " + sb.length());
        System.out.println("Capacity: " + sb.capacity());

        // setLength() - truncate or extend
        sb.setLength(5); // Truncate to first 5 characters
        System.out.println("After setLength(5): '" + sb + "'");

        // Converting to String
        String finalString = sb.toString();
        System.out.println("Converted to String: '" + finalString + "'");

        System.out.println();
    }

    /**
     * Demonstrates performance comparison between String and StringBuilder
     */
    public static void demonstratePerformanceComparison() {
        System.out.println("2. STRINGBUILDER VS STRING PERFORMANCE");
        System.out.println("--------------------------------------");

        int iterations = 10000;
        long startTime, endTime;

        // Method 1: Using String concatenation (+ operator)
        startTime = System.nanoTime();
        String stringResult = "";
        for (int i = 0; i < iterations; i++) {
            stringResult += i + ",";
        }
        endTime = System.nanoTime();
        long stringTime = endTime - startTime;

        // Method 2: Using StringBuilder
        startTime = System.nanoTime();
        StringBuilder sbResult = new StringBuilder();
        for (int i = 0; i < iterations; i++) {
            sbResult.append(i).append(",");
        }
        endTime = System.nanoTime();
        long sbTime = endTime - startTime;

        System.out.println("Performance comparison (" + iterations + " iterations):");
        System.out.println("String concatenation: " + stringTime / 1_000_000 + " ms");
        System.out.println("StringBuilder: " + sbTime / 1_000_000 + " ms");
        System.out.println("StringBuilder is " + (stringTime / sbTime) + "x faster");

        // Memory implications
        System.out.println("\nMemory implications:");
        System.out.println("String concatenation creates " + iterations + " temporary String objects");
        System.out.println("StringBuilder modifies the same object throughout");
        System.out.println("For large concatenations, always use StringBuilder");

        // When to use String vs StringBuilder
        System.out.println("\nWhen to use:");
        System.out.println("String: For immutable text, single operations, literals");
        System.out.println("StringBuilder: For multiple concatenations, loops, building strings");

        System.out.println();
    }

    /**
     * Demonstrates advanced string methods
     */
    public static void demonstrateAdvancedMethods() {
        System.out.println("3. ADVANCED STRING METHODS");
        System.out.println("--------------------------");

        String text = "The quick brown fox,jumps over the lazy dog. Hello World!";

        System.out.println("Original text: " + text);

        // split() method
        System.out.println("\nsplit() method:");
        String[] words = text.split("\\s+"); // Split by whitespace
        System.out.println("Split by whitespace: " + java.util.Arrays.toString(words));

        String[] sentences = text.split("[.!?]"); // Split by sentence endings
        System.out.println("Split by sentences: " + java.util.Arrays.toString(sentences));

        String csv = "apple,banana,orange,grape";
        String[] fruits = csv.split(",");
        System.out.println("Split CSV: " + java.util.Arrays.toString(fruits));

        // join() method (Java 8+)
        System.out.println("\njoin() method:");
        String joined = String.join("-", words);
        System.out.println("Join with dash: " + joined);

        String csvJoined = String.join(",", fruits);
        System.out.println("Join as CSV: " + csvJoined);

        // Advanced replace methods
        System.out.println("\nAdvanced replace methods:");
        String replaced = text.replaceAll("\\s+", "_"); // Replace whitespace with underscore
        System.out.println("Replace whitespace with underscore: " + replaced);

        String numbers = "The price is 100 dollars and 200 rupees";
        String masked = numbers.replaceAll("\\d+", "***"); // Mask all numbers
        System.out.println("Mask numbers: " + masked);

        // matches() with regex
        System.out.println("\nmatches() with regex:");
        String[] testStrings = {"hello", "Hello123", "12345", "hello world", "HELLO"};

        for (String str : testStrings) {
            boolean isLowercase = str.matches("[a-z]+");
            boolean hasDigits = str.matches(".*\\d.*");
            boolean isAlphanumeric = str.matches("[a-zA-Z0-9]+");

            System.out.println("'" + str + "' - lowercase: " + isLowercase +
                             ", has digits: " + hasDigits +
                             ", alphanumeric: " + isAlphanumeric);
        }

        System.out.println();
    }

    /**
     * Demonstrates string algorithms
     */
    public static void demonstrateStringAlgorithms() {
        System.out.println("4. STRING ALGORITHMS");
        System.out.println("--------------------");

        // Palindrome checking
        System.out.println("Palindrome checking:");
        String[] testPalindromes = {"radar", "level", "hello", "A man a plan a canal Panama", "12321"};

        for (String str : testPalindromes) {
            boolean isPalindrome = isPalindrome(str);
            System.out.println("'" + str + "' is palindrome: " + isPalindrome);
        }

        // Anagram detection
        System.out.println("\nAnagram detection:");
        String[][] anagramPairs = {
            {"listen", "silent"},
            {"triangle", "integral"},
            {"apple", "papel"},
            {"hello", "world"}
        };

        for (String[] pair : anagramPairs) {
            boolean areAnagrams = areAnagrams(pair[0], pair[1]);
            System.out.println("'" + pair[0] + "' and '" + pair[1] + "' are anagrams: " + areAnagrams);
        }

        // String reversal
        System.out.println("\nString reversal:");
        String[] testStrings = {"Hello World", "Java Programming", "12345"};

        for (String str : testStrings) {
            String reversed = reverseString(str);
            System.out.println("'" + str + "' -> '" + reversed + "'");
        }

        // String compression (run-length encoding)
        System.out.println("\nString compression (RLE):");
        String[] testCompression = {"aaabbbcc", "abcd", "aaaabbbbbbcccccc", "aabbcc"};

        for (String str : testCompression) {
            String compressed = compressString(str);
            System.out.println("'" + str + "' -> '" + compressed + "' (saved " +
                             (str.length() - compressed.length()) + " chars)");
        }

        // Character frequency
        System.out.println("\nCharacter frequency:");
        String text = "Hello World";
        int[] frequency = getCharacterFrequency(text);

        System.out.println("Frequency in '" + text + "':");
        for (int i = 0; i < frequency.length; i++) {
            if (frequency[i] > 0) {
                System.out.println("  '" + (char)i + "': " + frequency[i]);
            }
        }

        System.out.println();
    }

    /**
     * Demonstrates regular expressions basics
     */
    public static void demonstrateRegularExpressions() {
        System.out.println("5. REGULAR EXPRESSIONS");
        System.out.println("----------------------");

        String[] testStrings = {
            "hello123", "HELLO", "Hello World", "test@email.com",
            "123-456-7890", "abc123", "user_name", "123abc"
        };

        System.out.println("Test strings: " + java.util.Arrays.toString(testStrings));

        // Common regex patterns
        String[][] patterns = {
            {"Only lowercase", "[a-z]+"},
            {"Only uppercase", "[A-Z]+"},
            {"Only digits", "\\d+"},
            {"Alphanumeric", "[a-zA-Z0-9]+"},
            {"Email pattern", "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"},
            {"Phone number", "\\d{3}-\\d{3}-\\d{4}"},
            {"Starts with letter", "^[a-zA-Z]"},
            {"Contains number", ".*\\d.*"}
        };

        for (String[] pattern : patterns) {
            System.out.println("\n" + pattern[0] + " (" + pattern[1] + "):");
            for (String str : testStrings) {
                if (str.matches(pattern[1])) {
                    System.out.println("  ✓ '" + str + "'");
                }
            }
        }

        // Using Pattern and Matcher for more complex operations
        System.out.println("\nUsing Pattern and Matcher:");
        String text = "The price is $100 and the discount is 20% off";
        java.util.regex.Pattern numberPattern = java.util.regex.Pattern.compile("\\d+");
        java.util.regex.Matcher matcher = numberPattern.matcher(text);

        System.out.println("Finding all numbers in: " + text);
        while (matcher.find()) {
            System.out.println("  Found: '" + matcher.group() + "' at position " + matcher.start());
        }

        // Replace using regex
        String replaced = text.replaceAll("\\$\\d+", "***");
        System.out.println("After replacing prices: " + replaced);

        System.out.println();
    }

    /**
     * Practical applications combining advanced concepts
     */
    public static void demonstratePracticalApplications() {
        System.out.println("6. PRACTICAL APPLICATIONS");
        System.out.println("-------------------------");

        // Application 1: HTML tag remover
        System.out.println("HTML tag remover:");
        String html = "<p>Hello <b>World</b>! <i>This is a test</i></p>";
        String cleanText = removeHtmlTags(html);
        System.out.println("Original: " + html);
        System.out.println("Clean: " + cleanText);

        // Application 2: Password validator
        System.out.println("\nPassword validator:");
        String[] passwords = {"password", "Password123", "Pass123!", "P@ssw0rd!", "short"};

        for (String password : passwords) {
            PasswordStrength strength = validatePassword(password);
            System.out.println("'" + password + "' - " + strength);
        }

        // Application 3: Text statistics
        System.out.println("\nText statistics:");
        String article = "The quick brown fox jumps over the lazy dog. This is a sample text for analysis.";
        TextStats stats = analyzeText(article);

        System.out.println("Text: " + article);
        System.out.println("Words: " + stats.wordCount);
        System.out.println("Characters: " + stats.charCount);
        System.out.println("Sentences: " + stats.sentenceCount);
        System.out.println("Average word length: " + String.format("%.1f", stats.averageWordLength));

        // Application 4: String formatter
        System.out.println("\nString formatter:");
        String template = "Dear {name}, your order #{orderId} has been {status}.";
        String formatted = formatString(template,
            "name", "John Doe",
            "orderId", "12345",
            "status", "confirmed"
        );
        System.out.println("Template: " + template);
        System.out.println("Formatted: " + formatted);

        System.out.println();
    }

    // ===== UTILITY METHODS =====

    /**
     * Check if string is palindrome
     */
    public static boolean isPalindrome(String str) {
        // Remove non-alphanumeric and convert to lowercase
        String clean = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

        // Check palindrome
        int left = 0, right = clean.length() - 1;
        while (left < right) {
            if (clean.charAt(left) != clean.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    /**
     * Check if two strings are anagrams
     */
    public static boolean areAnagrams(String str1, String str2) {
        // Remove whitespace and convert to lowercase
        str1 = str1.replaceAll("\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\s", "").toLowerCase();

        if (str1.length() != str2.length()) {
            return false;
        }

        // Count character frequencies
        int[] count = new int[256];
        for (char c : str1.toCharArray()) {
            count[c]++;
        }
        for (char c : str2.toCharArray()) {
            count[c]--;
        }

        for (int i : count) {
            if (i != 0) {
                return false;
            }
        }
        return true;
    }

    /**
     * Reverse a string
     */
    public static String reverseString(String str) {
        return new StringBuilder(str).reverse().toString();
    }

    /**
     * Compress string using run-length encoding
     */
    public static String compressString(String str) {
        StringBuilder compressed = new StringBuilder();

        for (int i = 0; i < str.length(); i++) {
            int count = 1;
            while (i + 1 < str.length() && str.charAt(i) == str.charAt(i + 1)) {
                count++;
                i++;
            }
            compressed.append(str.charAt(i));
            if (count > 1) {
                compressed.append(count);
            }
        }

        return compressed.toString();
    }

    /**
     * Get character frequency array
     */
    public static int[] getCharacterFrequency(String str) {
        int[] frequency = new int[256];
        for (char c : str.toCharArray()) {
            frequency[c]++;
        }
        return frequency;
    }

    /**
     * Remove HTML tags from string
     */
    public static String removeHtmlTags(String html) {
        return html.replaceAll("<[^>]*>", "");
    }

    /**
     * Password strength enumeration
     */
    enum PasswordStrength {
        WEAK, MEDIUM, STRONG
    }

    /**
     * Validate password strength
     */
    public static PasswordStrength validatePassword(String password) {
        if (password.length() < 6) return PasswordStrength.WEAK;

        int score = 0;
        if (password.matches(".*[a-z].*")) score++;
        if (password.matches(".*[A-Z].*")) score++;
        if (password.matches(".*\\d.*")) score++;
        if (password.matches(".*[!@#$%^&*()].*")) score++;

        if (score <= 2) return PasswordStrength.WEAK;
        if (score <= 3) return PasswordStrength.MEDIUM;
        return PasswordStrength.STRONG;
    }

    /**
     * Text statistics class
     */
    static class TextStats {
        int wordCount;
        int charCount;
        int sentenceCount;
        double averageWordLength;

        TextStats(int wordCount, int charCount, int sentenceCount, double averageWordLength) {
            this.wordCount = wordCount;
            this.charCount = charCount;
            this.sentenceCount = sentenceCount;
            this.averageWordLength = averageWordLength;
        }
    }

    /**
     * Analyze text statistics
     */
    public static TextStats analyzeText(String text) {
        String[] words = text.split("\\s+");
        String[] sentences = text.split("[.!?]");

        int wordCount = words.length;
        int charCount = text.length();
        int sentenceCount = sentences.length;
        double averageWordLength = (double) charCount / wordCount;

        return new TextStats(wordCount, charCount, sentenceCount, averageWordLength);
    }

    /**
     * Simple string formatter with placeholders
     */
    public static String formatString(String template, String... replacements) {
        String result = template;
        for (int i = 0; i < replacements.length; i += 2) {
            String placeholder = "{" + replacements[i] + "}";
            String value = replacements[i + 1];
            result = result.replace(placeholder, value);
        }
        return result;
    }
}