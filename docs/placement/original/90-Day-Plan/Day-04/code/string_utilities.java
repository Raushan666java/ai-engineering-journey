/**
 * Day 4: Strings & Methods - Complete Guide
 * File: string_utilities.java
 * Purpose: Comprehensive string processing utility library
 *
 * Features:
 * - String validation utilities
 * - String transformation methods
 * - String analysis tools
 * - String manipulation algorithms
 * - Regular expression utilities
 * - Encoding/decoding methods
 */

public class string_utilities {

    public static void main(String[] args) {
        System.out.println("=== STRING UTILITIES - DAY 4 ===\n");

        // Demonstrate all utility methods
        demonstrateValidationUtils();
        demonstrateTransformationUtils();
        demonstrateAnalysisUtils();
        demonstrateManipulationUtils();
        demonstrateRegexUtils();
        demonstrateEncodingUtils();
    }

    /**
     * Demonstrates string validation utilities
     */
    public static void demonstrateValidationUtils() {
        System.out.println("1. STRING VALIDATION UTILITIES");
        System.out.println("------------------------------");

        // Email validation
        String[] emails = {"user@example.com", "invalid-email", "test@domain.co.uk", "user@.com"};
        for (String email : emails) {
            System.out.println("isValidEmail('" + email + "'): " + isValidEmail(email));
        }

        // Phone validation
        String[] phones = {"123-456-7890", "1234567890", "(123) 456-7890", "123-45-6789"};
        for (String phone : phones) {
            System.out.println("isValidPhone('" + phone + "'): " + isValidPhone(phone));
        }

        // Password strength
        String[] passwords = {"password", "Password123", "Pass123!", "P@ssw0rd!"};
        for (String pwd : passwords) {
            System.out.println("getPasswordStrength('" + pwd + "'): " + getPasswordStrength(pwd));
        }

        // Other validations
        System.out.println("isPalindrome('radar'): " + isPalindrome("radar"));
        System.out.println("isNumeric('123.45'): " + isNumeric("123.45"));
        System.out.println("isAlphanumeric('Hello123'): " + isAlphanumeric("Hello123"));

        System.out.println();
    }

    /**
     * Demonstrates string transformation utilities
     */
    public static void demonstrateTransformationUtils() {
        System.out.println("2. STRING TRANSFORMATION UTILITIES");
        System.out.println("-----------------------------------");

        String text = "hello world java programming";

        System.out.println("Original: '" + text + "'");

        // Case transformations
        System.out.println("toTitleCase: '" + toTitleCase(text) + "'");
        System.out.println("camelCase: '" + toCamelCase(text) + "'");
        System.out.println("snake_case: '" + toSnakeCase(text) + "'");
        System.out.println("kebab-case: '" + toKebabCase(text) + "'");

        // Other transformations
        System.out.println("reverse: '" + reverse(text) + "'");
        System.out.println("removeDuplicates: '" + removeDuplicates(text) + "'");
        System.out.println("removeWhitespace: '" + removeWhitespace(text) + "'");

        System.out.println();
    }

    /**
     * Demonstrates string analysis utilities
     */
    public static void demonstrateAnalysisUtils() {
        System.out.println("3. STRING ANALYSIS UTILITIES");
        System.out.println("----------------------------");

        String text = "The quick brown fox jumps over the lazy dog. Hello World!";

        System.out.println("Text: '" + text + "'");

        // Basic statistics
        System.out.println("Length: " + length(text));
        System.out.println("Word count: " + wordCount(text));
        System.out.println("Character count: " + charCount(text));
        System.out.println("Sentence count: " + sentenceCount(text));

        // Content analysis
        System.out.println("Vowel count: " + vowelCount(text));
        System.out.println("Consonant count: " + consonantCount(text));
        System.out.println("Digit count: " + digitCount(text));
        System.out.println("Special char count: " + specialCharCount(text));

        // Character frequency
        System.out.println("Most frequent char: '" + mostFrequentChar(text) + "'");
        System.out.println("Unique characters: " + uniqueCharCount(text));

        System.out.println();
    }

    /**
     * Demonstrates string manipulation utilities
     */
    public static void demonstrateManipulationUtils() {
        System.out.println("4. STRING MANIPULATION UTILITIES");
        System.out.println("--------------------------------");

        String text = "programming is fun and programming is powerful";

        System.out.println("Original: '" + text + "'");

        // Substring operations
        System.out.println("extractWords: " + java.util.Arrays.toString(extractWords(text)));
        System.out.println("longestWord: '" + longestWord(text) + "'");
        System.out.println("shortestWord: '" + shortestWord(text) + "'");

        // Replacement operations
        System.out.println("replaceWord('programming', 'coding'): '" + replaceWord(text, "programming", "coding") + "'");
        System.out.println("removeWord('and'): '" + removeWord(text, "and") + "'");

        // Advanced operations
        System.out.println("compress: '" + compress(text) + "'");
        System.out.println("expandAbbreviations: '" + expandAbbreviations("Dr. Smith & Ms. Johnson") + "'");

        System.out.println();
    }

    /**
     * Demonstrates regular expression utilities
     */
    public static void demonstrateRegexUtils() {
        System.out.println("5. REGULAR EXPRESSION UTILITIES");
        System.out.println("--------------------------------");

        String text = "Contact us at support@example.com or call 123-456-7890. Visit www.example.com";

        System.out.println("Text: '" + text + "'");

        // Pattern matching
        System.out.println("Email addresses: " + java.util.Arrays.toString(extractEmails(text)));
        System.out.println("Phone numbers: " + java.util.Arrays.toString(extractPhones(text)));
        System.out.println("URLs: " + java.util.Arrays.toString(extractUrls(text)));

        // Validation with regex
        String[] testStrings = {"test123", "Test_123", "test-123", "test.123"};
        for (String str : testStrings) {
            System.out.println("isValidIdentifier('" + str + "'): " + isValidIdentifier(str));
        }

        // Replacement with regex
        System.out.println("Mask emails: '" + maskEmails(text) + "'");
        System.out.println("Mask phones: '" + maskPhones(text) + "'");

        System.out.println();
    }

    /**
     * Demonstrates encoding/decoding utilities
     */
    public static void demonstrateEncodingUtils() {
        System.out.println("6. ENCODING/DECODING UTILITIES");
        System.out.println("------------------------------");

        String text = "Hello World! 123";

        // Basic encoding
        System.out.println("Original: '" + text + "'");
        System.out.println("ROT13: '" + rot13(text) + "'");
        System.out.println("ROT13 again: '" + rot13(rot13(text)) + "'");

        // Character encoding
        System.out.println("To ASCII codes: " + java.util.Arrays.toString(toAsciiCodes(text)));
        System.out.println("From ASCII codes: '" + fromAsciiCodes(new int[]{72, 101, 108, 108, 111}) + "'");

        // Simple cipher
        String key = "SECRET";
        String encrypted = simpleCipher(text, key, true);
        String decrypted = simpleCipher(encrypted, key, false);
        System.out.println("Encrypted: '" + encrypted + "'");
        System.out.println("Decrypted: '" + decrypted + "'");

        System.out.println();
    }

    // ===== VALIDATION UTILITIES =====

    public static boolean isValidEmail(String email) {
        if (email == null || email.isEmpty()) return false;
        return email.matches("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}");
    }

    public static boolean isValidPhone(String phone) {
        if (phone == null || phone.isEmpty()) return false;
        return phone.matches("\\d{3}-\\d{3}-\\d{4}") ||
               phone.matches("\\(\\d{3}\\) \\d{3}-\\d{4}") ||
               phone.matches("\\d{10}");
    }

    public enum PasswordStrength { WEAK, MEDIUM, STRONG }

    public static PasswordStrength getPasswordStrength(String password) {
        if (password == null || password.length() < 6) return PasswordStrength.WEAK;

        int score = 0;
        if (password.matches(".*[a-z].*")) score++;
        if (password.matches(".*[A-Z].*")) score++;
        if (password.matches(".*\\d.*")) score++;
        if (password.matches(".*[!@#$%^&*()].*")) score++;

        if (score <= 2) return PasswordStrength.WEAK;
        if (score <= 3) return PasswordStrength.MEDIUM;
        return PasswordStrength.STRONG;
    }

    public static boolean isPalindrome(String str) {
        if (str == null) return false;
        String clean = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        return clean.equals(new StringBuilder(clean).reverse().toString());
    }

    public static boolean isNumeric(String str) {
        if (str == null || str.isEmpty()) return false;
        return str.matches("-?\\d+(\\.\\d+)?");
    }

    public static boolean isAlphanumeric(String str) {
        if (str == null || str.isEmpty()) return false;
        return str.matches("[a-zA-Z0-9]+");
    }

    // ===== TRANSFORMATION UTILITIES =====

    public static String toTitleCase(String str) {
        if (str == null || str.isEmpty()) return str;
        String[] words = str.split("\\s+");
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

    public static String toCamelCase(String str) {
        if (str == null || str.isEmpty()) return str;
        String[] words = str.split("\\s+");
        StringBuilder result = new StringBuilder(words[0].toLowerCase());
        for (int i = 1; i < words.length; i++) {
            String word = words[i];
            if (word.length() > 0) {
                result.append(Character.toUpperCase(word.charAt(0)))
                      .append(word.substring(1).toLowerCase());
            }
        }
        return result.toString();
    }

    public static String toSnakeCase(String str) {
        if (str == null || str.isEmpty()) return str;
        return str.toLowerCase().replaceAll("\\s+", "_");
    }

    public static String toKebabCase(String str) {
        if (str == null || str.isEmpty()) return str;
        return str.toLowerCase().replaceAll("\\s+", "-");
    }

    public static String reverse(String str) {
        if (str == null) return null;
        return new StringBuilder(str).reverse().toString();
    }

    public static String removeDuplicates(String str) {
        if (str == null) return null;
        StringBuilder result = new StringBuilder();
        boolean[] seen = new boolean[256];
        for (char c : str.toCharArray()) {
            if (!seen[c]) {
                seen[c] = true;
                result.append(c);
            }
        }
        return result.toString();
    }

    public static String removeWhitespace(String str) {
        if (str == null) return null;
        return str.replaceAll("\\s+", "");
    }

    // ===== ANALYSIS UTILITIES =====

    public static int length(String str) {
        return str != null ? str.length() : 0;
    }

    public static int wordCount(String str) {
        if (str == null || str.trim().isEmpty()) return 0;
        return str.trim().split("\\s+").length;
    }

    public static int charCount(String str) {
        return str != null ? str.length() : 0;
    }

    public static int sentenceCount(String str) {
        if (str == null || str.trim().isEmpty()) return 0;
        return str.split("[.!?]+").length;
    }

    public static int vowelCount(String str) {
        if (str == null) return 0;
        int count = 0;
        String vowels = "aeiouAEIOU";
        for (char c : str.toCharArray()) {
            if (vowels.indexOf(c) != -1) count++;
        }
        return count;
    }

    public static int consonantCount(String str) {
        if (str == null) return 0;
        int count = 0;
        String consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
        for (char c : str.toCharArray()) {
            if (consonants.indexOf(c) != -1) count++;
        }
        return count;
    }

    public static int digitCount(String str) {
        if (str == null) return 0;
        int count = 0;
        for (char c : str.toCharArray()) {
            if (Character.isDigit(c)) count++;
        }
        return count;
    }

    public static int specialCharCount(String str) {
        if (str == null) return 0;
        int count = 0;
        for (char c : str.toCharArray()) {
            if (!Character.isLetterOrDigit(c) && !Character.isWhitespace(c)) count++;
        }
        return count;
    }

    public static char mostFrequentChar(String str) {
        if (str == null || str.isEmpty()) return '\0';
        int[] count = new int[256];
        for (char c : str.toCharArray()) {
            count[c]++;
        }
        char mostFrequent = '\0';
        int maxCount = 0;
        for (int i = 0; i < count.length; i++) {
            if (count[i] > maxCount) {
                maxCount = count[i];
                mostFrequent = (char) i;
            }
        }
        return mostFrequent;
    }

    public static int uniqueCharCount(String str) {
        if (str == null) return 0;
        boolean[] seen = new boolean[256];
        int count = 0;
        for (char c : str.toCharArray()) {
            if (!seen[c]) {
                seen[c] = true;
                count++;
            }
        }
        return count;
    }

    // ===== MANIPULATION UTILITIES =====

    public static String[] extractWords(String str) {
        if (str == null || str.trim().isEmpty()) return new String[0];
        return str.trim().split("\\s+");
    }

    public static String longestWord(String str) {
        if (str == null || str.trim().isEmpty()) return "";
        String[] words = str.trim().split("\\s+");
        String longest = words[0];
        for (String word : words) {
            if (word.length() > longest.length()) {
                longest = word;
            }
        }
        return longest;
    }

    public static String shortestWord(String str) {
        if (str == null || str.trim().isEmpty()) return "";
        String[] words = str.trim().split("\\s+");
        String shortest = words[0];
        for (String word : words) {
            if (word.length() < shortest.length()) {
                shortest = word;
            }
        }
        return shortest;
    }

    public static String replaceWord(String str, String oldWord, String newWord) {
        if (str == null || oldWord == null || newWord == null) return str;
        return str.replaceAll("\\b" + oldWord + "\\b", newWord);
    }

    public static String removeWord(String str, String word) {
        if (str == null || word == null) return str;
        return str.replaceAll("\\b" + word + "\\b", "").replaceAll("\\s+", " ").trim();
    }

    public static String compress(String str) {
        if (str == null) return null;
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

    public static String expandAbbreviations(String str) {
        if (str == null) return null;
        return str.replaceAll("\\bDr\\.", "Doctor")
                  .replaceAll("\\bMr\\.", "Mister")
                  .replaceAll("\\bMrs\\.", "Missus")
                  .replaceAll("\\bMs\\.", "Miss")
                  .replaceAll("\\&", "and");
    }

    // ===== REGEX UTILITIES =====

    public static String[] extractEmails(String str) {
        if (str == null) return new String[0];
        java.util.List<String> emails = new java.util.ArrayList<>();
        java.util.regex.Pattern pattern = java.util.regex.Pattern.compile("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}");
        java.util.regex.Matcher matcher = pattern.matcher(str);
        while (matcher.find()) {
            emails.add(matcher.group());
        }
        return emails.toArray(new String[0]);
    }

    public static String[] extractPhones(String str) {
        if (str == null) return new String[0];
        java.util.List<String> phones = new java.util.ArrayList<>();
        java.util.regex.Pattern pattern = java.util.regex.Pattern.compile("\\d{3}-\\d{3}-\\d{4}");
        java.util.regex.Matcher matcher = pattern.matcher(str);
        while (matcher.find()) {
            phones.add(matcher.group());
        }
        return phones.toArray(new String[0]);
    }

    public static String[] extractUrls(String str) {
        if (str == null) return new String[0];
        java.util.List<String> urls = new java.util.ArrayList<>();
        java.util.regex.Pattern pattern = java.util.regex.Pattern.compile("https?://[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}[^\\s]*");
        java.util.regex.Matcher matcher = pattern.matcher(str);
        while (matcher.find()) {
            urls.add(matcher.group());
        }
        return urls.toArray(new String[0]);
    }

    public static boolean isValidIdentifier(String str) {
        if (str == null || str.isEmpty()) return false;
        return str.matches("[a-zA-Z_$][a-zA-Z0-9_$]*");
    }

    public static String maskEmails(String str) {
        if (str == null) return null;
        return str.replaceAll("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}", "***@***.***");
    }

    public static String maskPhones(String str) {
        if (str == null) return null;
        return str.replaceAll("\\d{3}-\\d{3}-\\d{4}", "***-***-****");
    }

    // ===== ENCODING UTILITIES =====

    public static String rot13(String str) {
        if (str == null) return null;
        StringBuilder result = new StringBuilder();
        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) {
                char base = Character.isUpperCase(c) ? 'A' : 'a';
                result.append((char) (base + (c - base + 13) % 26));
            } else {
                result.append(c);
            }
        }
        return result.toString();
    }

    public static int[] toAsciiCodes(String str) {
        if (str == null) return new int[0];
        int[] codes = new int[str.length()];
        for (int i = 0; i < str.length(); i++) {
            codes[i] = (int) str.charAt(i);
        }
        return codes;
    }

    public static String fromAsciiCodes(int[] codes) {
        if (codes == null) return null;
        StringBuilder result = new StringBuilder();
        for (int code : codes) {
            result.append((char) code);
        }
        return result.toString();
    }

    public static String simpleCipher(String text, String key, boolean encrypt) {
        if (text == null || key == null || key.isEmpty()) return text;

        StringBuilder result = new StringBuilder();
        int keyIndex = 0;

        for (char c : text.toCharArray()) {
            if (Character.isLetter(c)) {
                char base = Character.isUpperCase(c) ? 'A' : 'a';
                char keyChar = key.charAt(keyIndex % key.length());
                int shift = encrypt ? (keyChar - base) : -(keyChar - base);
                result.append((char) (base + (c - base + shift + 26) % 26));
                keyIndex++;
            } else {
                result.append(c);
            }
        }
        return result.toString();
    }
}