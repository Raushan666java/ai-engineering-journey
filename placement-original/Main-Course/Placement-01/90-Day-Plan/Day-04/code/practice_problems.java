/**
 * Day 4: Strings & Methods - Complete Guide
 * File: practice_problems.java
 * Purpose: Practice problems for strings and methods
 *
 * Contains 12 progressive problems:
 * - 4 Basic problems (Strings & Methods fundamentals)
 * - 4 Intermediate problems (Combining concepts)
 * - 4 Advanced problems (Complex algorithms)
 */

public class practice_problems {

    public static void main(String[] args) {
        System.out.println("=== PRACTICE PROBLEMS - DAY 4 ===\n");

        // BASIC PROBLEMS (1-4)
        System.out.println("BASIC PROBLEMS");
        System.out.println("==============");

        // Problem 1: String Reversal
        System.out.println("Problem 1: String Reversal");
        String result1 = reverseString("Hello World");
        System.out.println("Input: 'Hello World' -> Output: '" + result1 + "'");
        System.out.println("Expected: 'dlroW olleH'");
        System.out.println("Correct: " + result1.equals("dlroW olleH"));
        System.out.println();

        // Problem 2: Count Vowels
        System.out.println("Problem 2: Count Vowels");
        int result2 = countVowels("Hello World");
        System.out.println("Input: 'Hello World' -> Output: " + result2);
        System.out.println("Expected: 3");
        System.out.println("Correct: " + (result2 == 3));
        System.out.println();

        // Problem 3: Method Overloading Calculator
        System.out.println("Problem 3: Calculator Methods");
        Calculator calc = new Calculator();
        System.out.println("add(5, 3) = " + calc.add(5, 3));
        System.out.println("add(5.5, 3.2) = " + calc.add(5.5, 3.2));
        System.out.println("multiply(4, 5) = " + calc.multiply(4, 5));
        System.out.println();

        // Problem 4: String Array Processing
        System.out.println("Problem 4: String Array Processing");
        String[] words = {"hello", "world", "java", "programming"};
        String result4 = findLongestWord(words);
        System.out.println("Input: " + java.util.Arrays.toString(words));
        System.out.println("Longest word: '" + result4 + "'");
        System.out.println("Expected: 'programming'");
        System.out.println("Correct: " + result4.equals("programming"));
        System.out.println();

        // INTERMEDIATE PROBLEMS (5-8)
        System.out.println("INTERMEDIATE PROBLEMS");
        System.out.println("====================");

        // Problem 5: Palindrome Checker
        System.out.println("Problem 5: Palindrome Checker");
        boolean result5a = isPalindrome("radar");
        boolean result5b = isPalindrome("hello");
        boolean result5c = isPalindrome("A man a plan a canal Panama");
        System.out.println("'radar' is palindrome: " + result5a + " (expected: true)");
        System.out.println("'hello' is palindrome: " + result5b + " (expected: false)");
        System.out.println("'A man a plan a canal Panama' is palindrome: " + result5c + " (expected: true)");
        System.out.println();

        // Problem 6: String Compression
        System.out.println("Problem 6: String Compression");
        String result6a = compressString("aaabbbcc");
        String result6b = compressString("abcd");
        System.out.println("'aaabbbcc' -> '" + result6a + "' (expected: 'a3b3c2')");
        System.out.println("'abcd' -> '" + result6b + "' (expected: 'abcd')");
        System.out.println();

        // Problem 7: Method with Multiple Parameters
        System.out.println("Problem 7: Grade Calculator");
        double result7 = calculateGrade(85, 90, 78, 92, 88);
        System.out.println("Grades: 85, 90, 78, 92, 88");
        System.out.println("Average: " + result7 + " (expected: 86.6)");
        System.out.println();

        // Problem 8: String Manipulation
        System.out.println("Problem 8: String Manipulation");
        String result8 = capitalizeWords("hello world java programming");
        System.out.println("Input: 'hello world java programming'");
        System.out.println("Output: '" + result8 + "'");
        System.out.println("Expected: 'Hello World Java Programming'");
        System.out.println("Correct: " + result8.equals("Hello World Java Programming"));
        System.out.println();

        // ADVANCED PROBLEMS (9-12)
        System.out.println("ADVANCED PROBLEMS");
        System.out.println("=================");

        // Problem 9: Anagram Detection
        System.out.println("Problem 9: Anagram Detection");
        boolean result9a = areAnagrams("listen", "silent");
        boolean result9b = areAnagrams("hello", "world");
        System.out.println("'listen' and 'silent' are anagrams: " + result9a + " (expected: true)");
        System.out.println("'hello' and 'world' are anagrams: " + result9b + " (expected: false)");
        System.out.println();

        // Problem 10: String Pattern Matching
        System.out.println("Problem 10: String Pattern Matching");
        boolean result10a = containsPattern("hello world", "llo");
        boolean result10b = containsPattern("programming", "ram");
        System.out.println("'hello world' contains 'llo': " + result10a + " (expected: true)");
        System.out.println("'programming' contains 'ram': " + result10b + " (expected: true)");
        System.out.println();

        // Problem 11: Complex Method with Objects
        System.out.println("Problem 11: Student Grade Processor");
        Student[] students = {
            new Student("Alice", 85, 90, 88),
            new Student("Bob", 78, 82, 79),
            new Student("Charlie", 92, 88, 95)
        };
        Student topStudent = findTopStudent(students);
        System.out.println("Top student: " + topStudent.name + " (average: " + topStudent.getAverage() + ")");
        System.out.println("Expected: Charlie (average: 91.67)");
        System.out.println();

        // Problem 12: Advanced String Processing
        System.out.println("Problem 12: Advanced String Processing");
        String result12 = processText("This is a TEST string with MIXED case and 123 numbers!");
        System.out.println("Input: 'This is a TEST string with MIXED case and 123 numbers!'");
        System.out.println("Output: '" + result12 + "'");
        System.out.println("Expected: 'this is a test string with mixed case and numbers'");
        System.out.println("Correct: " + result12.equals("this is a test string with mixed case and numbers"));
        System.out.println();
    }

    // ===== BASIC PROBLEMS =====

    /**
     * Problem 1: Reverse a string
     * Input: "Hello World"
     * Output: "dlroW olleH"
     */
    public static String reverseString(String str) {
        // TODO: Implement string reversal
        return new StringBuilder(str).reverse().toString();
    }

    /**
     * Problem 2: Count vowels in a string
     * Vowels: a, e, i, o, u (case insensitive)
     * Input: "Hello World"
     * Output: 3 (e, o, o)
     */
    public static int countVowels(String str) {
        // TODO: Count vowels
        int count = 0;
        String vowels = "aeiouAEIOU";
        for (char c : str.toCharArray()) {
            if (vowels.indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }

    /**
     * Problem 4: Find longest word in array
     * Input: ["hello", "world", "java", "programming"]
     * Output: "programming"
     */
    public static String findLongestWord(String[] words) {
        // TODO: Find longest word
        if (words.length == 0) return "";
        String longest = words[0];
        for (String word : words) {
            if (word.length() > longest.length()) {
                longest = word;
            }
        }
        return longest;
    }

    // ===== INTERMEDIATE PROBLEMS =====

    /**
     * Problem 5: Check if string is palindrome
     * Ignore case and non-alphanumeric characters
     * Input: "A man a plan a canal Panama"
     * Output: true
     */
    public static boolean isPalindrome(String str) {
        // TODO: Check palindrome
        String clean = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        return clean.equals(new StringBuilder(clean).reverse().toString());
    }

    /**
     * Problem 6: Compress string using run-length encoding
     * Input: "aaabbbcc"
     * Output: "a3b3c2"
     * If compressed string is longer, return original
     */
    public static String compressString(String str) {
        // TODO: Implement string compression
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
        return compressed.length() < str.length() ? compressed.toString() : str;
    }

    /**
     * Problem 7: Calculate average grade
     * Input: variable number of grades
     * Output: average as double
     */
    public static double calculateGrade(int... grades) {
        // TODO: Calculate average
        if (grades.length == 0) return 0;
        int sum = 0;
        for (int grade : grades) {
            sum += grade;
        }
        return (double) sum / grades.length;
    }

    /**
     * Problem 8: Capitalize first letter of each word
     * Input: "hello world java programming"
     * Output: "Hello World Java Programming"
     */
    public static String capitalizeWords(String sentence) {
        // TODO: Capitalize words
        String[] words = sentence.split("\\s+");
        StringBuilder result = new StringBuilder();
        for (String word : words) {
            if (word.length() > 0) {
                result.append(Character.toUpperCase(word.charAt(0)))
                      .append(word.substring(1).toLowerCase())
                      .append(" ");
            }
        }
        return result.toString().trim();
    }

    // ===== ADVANCED PROBLEMS =====

    /**
     * Problem 9: Check if two strings are anagrams
     * Input: "listen", "silent"
     * Output: true
     */
    public static boolean areAnagrams(String str1, String str2) {
        // TODO: Check anagrams
        str1 = str1.replaceAll("\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\s", "").toLowerCase();
        if (str1.length() != str2.length()) return false;

        int[] count = new int[256];
        for (char c : str1.toCharArray()) count[c]++;
        for (char c : str2.toCharArray()) count[c]--;

        for (int i : count) {
            if (i != 0) return false;
        }
        return true;
    }

    /**
     * Problem 10: Check if string contains pattern
     * Input: "hello world", "llo"
     * Output: true
     */
    public static boolean containsPattern(String text, String pattern) {
        // TODO: Check pattern
        return text.contains(pattern);
    }

    /**
     * Problem 12: Process text - lowercase, remove numbers, normalize spaces
     * Input: "This is a TEST string with MIXED case and 123 numbers!"
     * Output: "this is a test string with mixed case and numbers"
     */
    public static String processText(String text) {
        // TODO: Process text
        return text.toLowerCase()
                   .replaceAll("\\d", "")
                   .replaceAll("[^a-zA-Z\\s]", "")
                   .replaceAll("\\s+", " ")
                   .trim();
    }

    // ===== SUPPORTING CLASSES =====

    /**
     * Calculator class for Problem 3
     */
    static class Calculator {
        public int add(int a, int b) {
            return a + b;
        }

        public double add(double a, double b) {
            return a + b;
        }

        public int multiply(int a, int b) {
            return a * b;
        }
    }

    /**
     * Student class for Problem 11
     */
    static class Student {
        String name;
        int grade1, grade2, grade3;

        public Student(String name, int g1, int g2, int g3) {
            this.name = name;
            this.grade1 = g1;
            this.grade2 = g2;
            this.grade3 = g3;
        }

        public double getAverage() {
            return (grade1 + grade2 + grade3) / 3.0;
        }
    }

    /**
     * Problem 11: Find top student by average grade
     */
    public static Student findTopStudent(Student[] students) {
        if (students.length == 0) return null;
        Student top = students[0];
        for (Student student : students) {
            if (student.getAverage() > top.getAverage()) {
                top = student;
            }
        }
        return top;
    }
}