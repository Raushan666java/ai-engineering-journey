/**
 * Day 4: Strings & Methods - Complete Guide
 * File: string_basics.java
 * Purpose: Master fundamental string operations
 *
 * Topics Covered:
 * - String declaration and initialization
 * - Basic string operations (length, charAt, substring)
 * - String comparison methods (equals, compareTo)
 * - String search operations (indexOf, contains)
 * - String immutability and memory concepts
 */

public class string_basics {

    public static void main(String[] args) {
        System.out.println("=== STRING BASICS - DAY 4 ===\n");

        // 1. STRING DECLARATION AND INITIALIZATION
        demonstrateStringDeclaration();

        // 2. BASIC STRING OPERATIONS
        demonstrateBasicOperations();

        // 3. STRING COMPARISON METHODS
        demonstrateStringComparison();

        // 4. STRING SEARCH OPERATIONS
        demonstrateStringSearch();

        // 5. STRING IMMUTABILITY CONCEPTS
        demonstrateImmutability();

        // 6. PRACTICAL EXAMPLES
        demonstratePracticalExamples();
    }

    /**
     * Demonstrates string declaration and initialization
     */
    public static void demonstrateStringDeclaration() {
        System.out.println("1. STRING DECLARATION AND INITIALIZATION");
        System.out.println("----------------------------------------");

        // Method 1: String literals (stored in String pool)
        String str1 = "Hello World";
        String str2 = "Hello World"; // Same reference as str1

        System.out.println("Method 1 - String literals:");
        System.out.println("str1: " + str1);
        System.out.println("str2: " + str2);
        System.out.println("str1 == str2: " + (str1 == str2)); // true (same reference)
        System.out.println("str1.equals(str2): " + str1.equals(str2)); // true (same content)

        // Method 2: Using new keyword (stored in heap)
        String str3 = new String("Hello World");
        String str4 = new String("Hello World");

        System.out.println("\nMethod 2 - Using new keyword:");
        System.out.println("str3: " + str3);
        System.out.println("str4: " + str4);
        System.out.println("str3 == str4: " + (str3 == str4)); // false (different references)
        System.out.println("str3.equals(str4): " + str3.equals(str4)); // true (same content)

        // Method 3: Converting other types to String
        int number = 42;
        double pi = 3.14159;
        boolean flag = true;

        String str5 = String.valueOf(number);
        String str6 = String.valueOf(pi);
        String str7 = String.valueOf(flag);

        System.out.println("\nMethod 3 - Converting to String:");
        System.out.println("int to String: " + str5 + " (type: " + str5.getClass().getSimpleName() + ")");
        System.out.println("double to String: " + str6 + " (type: " + str6.getClass().getSimpleName() + ")");
        System.out.println("boolean to String: " + str7 + " (type: " + str7.getClass().getSimpleName() + ")");

        // Method 4: Character array to String
        char[] chars = {'J', 'a', 'v', 'a'};
        String str8 = new String(chars);

        System.out.println("\nMethod 4 - Character array to String:");
        System.out.println("char[]: " + java.util.Arrays.toString(chars));
        System.out.println("String: " + str8);

        System.out.println();
    }

    /**
     * Demonstrates basic string operations
     */
    public static void demonstrateBasicOperations() {
        System.out.println("2. BASIC STRING OPERATIONS");
        System.out.println("--------------------------");

        String text = "Hello, World! Welcome to Java Programming.";

        // Length
        System.out.println("Original string: " + text);
        System.out.println("Length: " + text.length());

        // Character access
        System.out.println("\nCharacter access:");
        System.out.println("First character: " + text.charAt(0));
        System.out.println("Last character: " + text.charAt(text.length() - 1));
        System.out.println("Character at index 7: " + text.charAt(7));

        // Substring operations
        System.out.println("\nSubstring operations:");
        System.out.println("Substring from index 7: " + text.substring(7));
        System.out.println("Substring from 7 to 13: " + text.substring(7, 13));
        System.out.println("First word: " + text.substring(0, 5));

        // Case conversion
        System.out.println("\nCase conversion:");
        System.out.println("Uppercase: " + text.toUpperCase());
        System.out.println("Lowercase: " + text.toLowerCase());

        // Trim operations
        String paddedText = "   Hello World   ";
        System.out.println("\nTrim operations:");
        System.out.println("Original: '" + paddedText + "'");
        System.out.println("Trimmed: '" + paddedText.trim() + "'");

        // Replace operations
        System.out.println("\nReplace operations:");
        System.out.println("Replace 'World' with 'Universe': " + text.replace("World", "Universe"));
        System.out.println("Replace first 'o' with 'X': " + text.replaceFirst("o", "X"));
        System.out.println("Replace all 'o' with 'X': " + text.replaceAll("o", "X"));

        System.out.println();
    }

    /**
     * Demonstrates string comparison methods
     */
    public static void demonstrateStringComparison() {
        System.out.println("3. STRING COMPARISON METHODS");
        System.out.println("----------------------------");

        String str1 = "Hello";
        String str2 = "Hello";
        String str3 = new String("Hello");
        String str4 = "HELLO";
        String str5 = "hello";
        String str6 = "Hello World";
        String str7 = "Hello";

        System.out.println("Test strings:");
        System.out.println("str1: '" + str1 + "'");
        System.out.println("str2: '" + str2 + "'");
        System.out.println("str3: '" + str3 + "'");
        System.out.println("str4: '" + str4 + "'");
        System.out.println("str5: '" + str5 + "'");
        System.out.println("str6: '" + str6 + "'");
        System.out.println("str7: '" + str7 + "'");

        // == operator (reference comparison)
        System.out.println("\n== operator (reference comparison):");
        System.out.println("str1 == str2: " + (str1 == str2)); // true (string pool)
        System.out.println("str1 == str3: " + (str1 == str3)); // false (different objects)
        System.out.println("str1 == str7: " + (str1 == str7)); // true (string pool)

        // equals() method (content comparison)
        System.out.println("\nequals() method (content comparison):");
        System.out.println("str1.equals(str2): " + str1.equals(str2)); // true
        System.out.println("str1.equals(str3): " + str1.equals(str3)); // true
        System.out.println("str1.equals(str4): " + str1.equals(str4)); // false (case sensitive)

        // equalsIgnoreCase() method
        System.out.println("\nequalsIgnoreCase() method:");
        System.out.println("str1.equalsIgnoreCase(str4): " + str1.equalsIgnoreCase(str4)); // true
        System.out.println("str1.equalsIgnoreCase(str5): " + str1.equalsIgnoreCase(str5)); // true

        // compareTo() method (lexicographical comparison)
        System.out.println("\ncompareTo() method (lexicographical):");
        System.out.println("str1.compareTo(str2): " + str1.compareTo(str2)); // 0 (equal)
        System.out.println("str1.compareTo(str4): " + str1.compareTo(str4)); // positive (str1 > str4)
        System.out.println("str4.compareTo(str1): " + str4.compareTo(str1)); // negative (str4 < str1)
        System.out.println("'Apple'.compareTo('Banana'): " + "Apple".compareTo("Banana")); // negative

        // compareToIgnoreCase() method
        System.out.println("\ncompareToIgnoreCase() method:");
        System.out.println("str1.compareToIgnoreCase(str4): " + str1.compareToIgnoreCase(str4)); // 0

        // isEmpty() and isBlank() (Java 11+)
        System.out.println("\nisEmpty() and isBlank():");
        String empty = "";
        String blank = "   ";
        String content = "Hello";

        System.out.println("''.isEmpty(): " + empty.isEmpty()); // true
        System.out.println("'   '.isEmpty(): " + blank.isEmpty()); // false
        System.out.println("'Hello'.isEmpty(): " + content.isEmpty()); // false

        // isBlank() checks for whitespace only
        System.out.println("''.isBlank(): " + empty.isBlank()); // true
        System.out.println("'   '.isBlank(): " + blank.isBlank()); // true
        System.out.println("'Hello'.isBlank(): " + content.isBlank()); // false

        System.out.println();
    }

    /**
     * Demonstrates string search operations
     */
    public static void demonstrateStringSearch() {
        System.out.println("4. STRING SEARCH OPERATIONS");
        System.out.println("---------------------------");

        String text = "The quick brown fox jumps over the lazy dog";

        System.out.println("Search text: " + text);

        // indexOf() methods
        System.out.println("\nindexOf() methods:");
        System.out.println("indexOf('o'): " + text.indexOf('o')); // First occurrence
        System.out.println("indexOf('o', 10): " + text.indexOf('o', 10)); // From index 10
        System.out.println("indexOf('fox'): " + text.indexOf("fox")); // Substring search
        System.out.println("indexOf('cat'): " + text.indexOf("cat")); // Not found (-1)

        // lastIndexOf() methods
        System.out.println("\nlastIndexOf() methods:");
        System.out.println("lastIndexOf('o'): " + text.lastIndexOf('o')); // Last occurrence
        System.out.println("lastIndexOf('the'): " + text.lastIndexOf("the")); // Last "the"
        System.out.println("lastIndexOf('o', 20): " + text.lastIndexOf('o', 20)); // From index 20 backwards

        // contains() method
        System.out.println("\ncontains() method:");
        System.out.println("contains('fox'): " + text.contains("fox")); // true
        System.out.println("contains('cat'): " + text.contains("cat")); // false
        System.out.println("contains('quick brown'): " + text.contains("quick brown")); // true

        // startsWith() and endsWith()
        System.out.println("\nstartsWith() and endsWith():");
        System.out.println("startsWith('The'): " + text.startsWith("The")); // true
        System.out.println("startsWith('the'): " + text.startsWith("the")); // false (case sensitive)
        System.out.println("endsWith('dog'): " + text.endsWith("dog")); // true
        System.out.println("endsWith('cat'): " + text.endsWith("cat")); // false

        // matches() method (regular expressions)
        System.out.println("\nmatches() method (regex):");
        System.out.println("matches('.*fox.*'): " + text.matches(".*fox.*")); // Contains 'fox'
        System.out.println("matches('^[A-Z].*'): " + text.matches("^[A-Z].*")); // Starts with capital
        System.out.println("matches('.*\\d.*'): " + text.matches(".*\\d.*")); // Contains digit

        System.out.println();
    }

    /**
     * Demonstrates string immutability concepts
     */
    public static void demonstrateImmutability() {
        System.out.println("5. STRING IMMUTABILITY CONCEPTS");
        System.out.println("-------------------------------");

        String original = "Hello";
        System.out.println("Original string: " + original);
        System.out.println("Original hash code: " + System.identityHashCode(original));

        // Trying to modify the string
        String modified = original.concat(" World");
        System.out.println("After concat: " + modified);
        System.out.println("Modified hash code: " + System.identityHashCode(modified));
        System.out.println("Original unchanged: " + original);
        System.out.println("Original hash code unchanged: " + System.identityHashCode(original));

        // Another modification
        String upper = original.toUpperCase();
        System.out.println("After toUpperCase: " + upper);
        System.out.println("Upper hash code: " + System.identityHashCode(upper));
        System.out.println("Original still unchanged: " + original);

        // String pool demonstration
        System.out.println("\nString pool demonstration:");
        String s1 = "Java";
        String s2 = "Java";
        String s3 = new String("Java");

        System.out.println("s1 == s2: " + (s1 == s2)); // true (same reference from pool)
        System.out.println("s1 == s3: " + (s1 == s3)); // false (different objects)
        System.out.println("s1.equals(s3): " + s1.equals(s3)); // true (same content)

        // Memory implications
        System.out.println("\nMemory implications:");
        System.out.println("String literals share memory in the string pool");
        System.out.println("'new String()' always creates a new object in heap memory");
        System.out.println("Use string literals when possible for memory efficiency");

        System.out.println();
    }

    /**
     * Practical examples combining string concepts
     */
    public static void demonstratePracticalExamples() {
        System.out.println("6. PRACTICAL EXAMPLES");
        System.out.println("---------------------");

        // Example 1: Email validation (basic)
        System.out.println("Email validation:");
        String[] emails = {"user@example.com", "invalid-email", "user@", "@domain.com", "user@domain"};

        for (String email : emails) {
            boolean isValid = email.contains("@") && email.indexOf("@") > 0
                            && email.lastIndexOf(".") > email.indexOf("@") + 1
                            && email.length() - email.lastIndexOf(".") > 2;
            System.out.println("'" + email + "' is valid: " + isValid);
        }

        // Example 2: String formatting
        System.out.println("\nString formatting:");
        String name = "Alice";
        int age = 25;
        double salary = 50000.50;

        String formatted = String.format("Employee: %s, Age: %d, Salary: $%.2f", name, age, salary);
        System.out.println(formatted);

        // Example 3: Password strength checker
        System.out.println("\nPassword strength checker:");
        String[] passwords = {"password", "Password123", "Pass123!", "P@ssw0rd!"};

        for (String password : passwords) {
            int strength = 0;
            if (password.length() >= 8) strength++;
            if (password.matches(".*[A-Z].*")) strength++;
            if (password.matches(".*[a-z].*")) strength++;
            if (password.matches(".*\\d.*")) strength++;
            if (password.matches(".*[!@#$%^&*()].*")) strength++;

            String level = strength <= 2 ? "Weak" : strength <= 3 ? "Medium" : "Strong";
            System.out.println("'" + password + "' - " + level + " (" + strength + "/5)");
        }

        // Example 4: Text analysis
        System.out.println("\nText analysis:");
        String paragraph = "The quick brown fox jumps over the lazy dog. This is a test sentence.";

        System.out.println("Text: " + paragraph);
        System.out.println("Length: " + paragraph.length());
        System.out.println("Words: " + paragraph.split("\\s+").length);
        System.out.println("Sentences: " + paragraph.split("[.!?]").length);
        System.out.println("Contains 'fox': " + paragraph.contains("fox"));
        System.out.println("Starts with 'The': " + paragraph.startsWith("The"));

        System.out.println();
    }
}