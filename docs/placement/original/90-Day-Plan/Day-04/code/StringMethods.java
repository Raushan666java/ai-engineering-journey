/**
 * STRING METHODS COMPREHENSIVE GUIDE - DAY 4
 * Master 30+ Essential String Methods
 * 
 * Categories:
 * 1. Character Access Methods
 * 2. Searching Methods
 * 3. Modification Methods
 * 4. Case Conversion Methods
 * 5. Trimming & Stripping Methods
 * 6. Splitting & Joining Methods
 * 7. Substring Methods
 * 8. Replacing Methods
 * 9. Testing Methods
 * 10. Conversion Methods
 */

public class StringMethods {
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════╗");
        System.out.println("║  STRING METHODS COMPLETE GUIDE - DAY 4    ║");
        System.out.println("║  30+ Essential String Methods             ║");
        System.out.println("╚═══════════════════════════════════════════╝\n");
        
        category1_CharacterAccess();
        category2_SearchingMethods();
        category3_ModificationMethods();
        category4_CaseConversion();
        category5_TrimmingMethods();
        category6_SplittingJoining();
        category7_SubstringMethods();
        category8_ReplacingMethods();
        category9_TestingMethods();
        category10_ConversionMethods();
        bonusSection_PracticalExamples();
    }
    
    // ============================================
    // CATEGORY 1: CHARACTER ACCESS METHODS
    // ============================================
    static void category1_CharacterAccess() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("CATEGORY 1: CHARACTER ACCESS METHODS");
        System.out.println("=".repeat(60));
        
        String text = "Java Programming";
        
        // 1.1 charAt(int index)
        System.out.println("\n1.1: charAt(int index)");
        System.out.println("String: \"" + text + "\"");
        System.out.println("charAt(0): " + text.charAt(0));  // J
        System.out.println("charAt(5): " + text.charAt(5));  // P
        System.out.println("charAt(last): " + text.charAt(text.length() - 1));  // g
        
        // 1.2 codePointAt(int index)
        System.out.println("\n1.2: codePointAt(int index)");
        System.out.println("codePointAt(0): " + text.codePointAt(0));  // Unicode value of 'J'
        System.out.println("Unicode of 'J' is 74");
        
        // 1.3 length()
        System.out.println("\n1.3: length()");
        System.out.println("Length of \"" + text + "\": " + text.length());
        
        // 1.4 toCharArray()
        System.out.println("\n1.4: toCharArray()");
        char[] chars = text.toCharArray();
        System.out.print("Character array: [");
        for (int i = 0; i < chars.length; i++) {
            System.out.print(chars[i]);
            if (i < chars.length - 1) System.out.print(", ");
        }
        System.out.println("]");
        
        // 1.5 getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)
        System.out.println("\n1.5: getChars()");
        char[] destination = new char[10];
        text.getChars(0, 4, destination, 0);  // Copy "Java" to destination
        System.out.print("Copied characters: ");
        for (int i = 0; i < 4; i++) {
            System.out.print(destination[i]);
        }
        System.out.println();
    }
    
    // ============================================
    // CATEGORY 2: SEARCHING METHODS
    // ============================================
    static void category2_SearchingMethods() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("CATEGORY 2: SEARCHING METHODS");
        System.out.println("=".repeat(60));
        
        String text = "Java Programming in Java";
        
        // 2.1 indexOf(char ch)
        System.out.println("\n2.1: indexOf(char ch)");
        System.out.println("String: \"" + text + "\"");
        System.out.println("indexOf('a'): " + text.indexOf('a'));  // First 'a' at index 1
        System.out.println("indexOf('P'): " + text.indexOf('P'));  // 'P' at index 5
        
        // 2.2 indexOf(String str)
        System.out.println("\n2.2: indexOf(String str)");
        System.out.println("indexOf(\"Java\"): " + text.indexOf("Java"));  // 0
        System.out.println("indexOf(\"in\"): " + text.indexOf("in"));  // 17
        
        // 2.3 indexOf(String str, int fromIndex)
        System.out.println("\n2.3: indexOf(String str, int fromIndex)");
        System.out.println("First \"Java\": " + text.indexOf("Java"));  // 0
        System.out.println("Second \"Java\" (from index 5): " + text.indexOf("Java", 5));  // 20
        
        // 2.4 lastIndexOf(char ch)
        System.out.println("\n2.4: lastIndexOf(char ch)");
        System.out.println("lastIndexOf('a'): " + text.lastIndexOf('a'));  // Last 'a'
        
        // 2.5 lastIndexOf(String str)
        System.out.println("\n2.5: lastIndexOf(String str)");
        System.out.println("lastIndexOf(\"Java\"): " + text.lastIndexOf("Java"));  // 20
        
        // 2.6 contains(CharSequence s)
        System.out.println("\n2.6: contains(CharSequence s)");
        System.out.println("contains(\"Programming\"): " + text.contains("Programming"));  // true
        System.out.println("contains(\"Python\"): " + text.contains("Python"));  // false
        
        // 2.7 startsWith(String prefix)
        System.out.println("\n2.7: startsWith(String prefix)");
        System.out.println("startsWith(\"Java\"): " + text.startsWith("Java"));  // true
        System.out.println("startsWith(\"Python\"): " + text.startsWith("Python"));  // false
        
        // 2.8 endsWith(String suffix)
        System.out.println("\n2.8: endsWith(String suffix)");
        System.out.println("endsWith(\"Java\"): " + text.endsWith("Java"));  // true
        System.out.println("endsWith(\"Python\"): " + text.endsWith("Python"));  // false
        
        // 2.9 matches(String regex)
        System.out.println("\n2.9: matches(String regex)");
        String email = "user@example.com";
        System.out.println("Email: " + email);
        System.out.println("Matches email pattern: " + 
                          email.matches("^[A-Za-z0-9+_.-]+@(.+)$"));
    }
    
    // ============================================
    // CATEGORY 3: MODIFICATION METHODS
    // ============================================
    static void category3_ModificationMethods() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("CATEGORY 3: MODIFICATION METHODS");
        System.out.println("=".repeat(60));
        
        // 3.1 concat(String str)
        System.out.println("\n3.1: concat(String str)");
        String s1 = "Hello";
        String s2 = " World";
        String result = s1.concat(s2);
        System.out.println("\"" + s1 + "\".concat(\"" + s2 + "\") = \"" + result + "\"");
        
        // 3.2 + operator
        System.out.println("\n3.2: Using + operator");
        String combined = s1 + s2;
        System.out.println("\"" + s1 + "\" + \"" + s2 + "\" = \"" + combined + "\"");
        
        // 3.3 join() - Static method (Java 8+)
        System.out.println("\n3.3: join(delimiter, elements)");
        String joined = String.join(", ", "Apple", "Banana", "Cherry");
        System.out.println("Joined with comma: " + joined);
        
        String pathJoined = String.join("/", "home", "user", "documents");
        System.out.println("Path joined: " + pathJoined);
    }
    
    // ============================================
    // CATEGORY 4: CASE CONVERSION METHODS
    // ============================================
    static void category4_CaseConversion() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("CATEGORY 4: CASE CONVERSION METHODS");
        System.out.println("=".repeat(60));
        
        String text = "Java Programming";
        
        // 4.1 toUpperCase()
        System.out.println("\n4.1: toUpperCase()");
        System.out.println("Original: \"" + text + "\"");
        System.out.println("Uppercase: \"" + text.toUpperCase() + "\"");
        
        // 4.2 toLowerCase()
        System.out.println("\n4.2: toLowerCase()");
        System.out.println("Lowercase: \"" + text.toLowerCase() + "\"");
        
        // 4.3 Case conversion with locale
        System.out.println("\n4.3: toUpperCase(Locale locale)");
        String turkish = "i";
        System.out.println("Turkish 'i' uppercase: " + turkish.toUpperCase(new java.util.Locale("tr", "TR")));
        System.out.println("English 'i' uppercase: " + turkish.toUpperCase(java.util.Locale.ENGLISH));
    }
    
    // ============================================
    // CATEGORY 5: TRIMMING & STRIPPING METHODS
    // ============================================
    static void category5_TrimmingMethods() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("CATEGORY 5: TRIMMING & STRIPPING METHODS");
        System.out.println("=".repeat(60));
        
        String text = "  Hello World  ";
        
        // 5.1 trim()
        System.out.println("\n5.1: trim()");
        System.out.println("Original: \"" + text + "\" (length: " + text.length() + ")");
        System.out.println("Trimmed: \"" + text.trim() + "\" (length: " + text.trim().length() + ")");
        
        // 5.2 strip() (Java 11+)
        System.out.println("\n5.2: strip() - Better Unicode support");
        String unicode = "\u2000 Hello \u2000";  // Unicode whitespace
        System.out.println("With strip(): \"" + unicode.strip() + "\"");
        System.out.println("strip() handles Unicode whitespace better than trim()");
        
        // 5.3 stripLeading() (Java 11+)
        System.out.println("\n5.3: stripLeading()");
        System.out.println("Original: \"" + text + "\"");
        System.out.println("Strip leading: \"" + text.stripLeading() + "\"");
        
        // 5.4 stripTrailing() (Java 11+)
        System.out.println("\n5.4: stripTrailing()");
        System.out.println("Strip trailing: \"" + text.stripTrailing() + "\"");
    }
    
    // ============================================
    // CATEGORY 6: SPLITTING & JOINING METHODS
    // ============================================
    static void category6_SplittingJoining() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("CATEGORY 6: SPLITTING & JOINING METHODS");
        System.out.println("=".repeat(60));
        
        // 6.1 split(String regex)
        System.out.println("\n6.1: split(String regex)");
        String csv = "Apple,Banana,Cherry,Date";
        System.out.println("CSV: " + csv);
        String[] fruits = csv.split(",");
        System.out.println("Split by comma:");
        for (int i = 0; i < fruits.length; i++) {
            System.out.println("  [" + i + "]: " + fruits[i]);
        }
        
        // 6.2 split with limit
        System.out.println("\n6.2: split(String regex, int limit)");
        String[] limited = csv.split(",", 2);  // Split into max 2 parts
        System.out.println("Split with limit 2:");
        for (int i = 0; i < limited.length; i++) {
            System.out.println("  [" + i + "]: " + limited[i]);
        }
        
        // 6.3 Split by multiple delimiters
        System.out.println("\n6.3: Split by multiple delimiters");
        String text = "Java,Python;JavaScript|Ruby";
        String[] languages = text.split("[,;|]");
        System.out.println("Text: " + text);
        System.out.println("Split by comma, semicolon, or pipe:");
        for (String lang : languages) {
            System.out.println("  " + lang);
        }
        
        // 6.4 String.join()
        System.out.println("\n6.4: String.join()");
        String joined = String.join(" - ", fruits);
        System.out.println("Joined with ' - ': " + joined);
    }
    
    // ============================================
    // CATEGORY 7: SUBSTRING METHODS
    // ============================================
    static void category7_SubstringMethods() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("CATEGORY 7: SUBSTRING METHODS");
        System.out.println("=".repeat(60));
        
        String text = "Java Programming";
        
        // 7.1 substring(int beginIndex)
        System.out.println("\n7.1: substring(int beginIndex)");
        System.out.println("String: \"" + text + "\"");
        System.out.println("substring(5): \"" + text.substring(5) + "\"");
        
        // 7.2 substring(int beginIndex, int endIndex)
        System.out.println("\n7.2: substring(int beginIndex, int endIndex)");
        System.out.println("substring(0, 4): \"" + text.substring(0, 4) + "\"");
        System.out.println("substring(5, 16): \"" + text.substring(5, 16) + "\"");
        
        // 7.3 subSequence(int beginIndex, int endIndex)
        System.out.println("\n7.3: subSequence(int beginIndex, int endIndex)");
        CharSequence sub = text.subSequence(5, 16);
        System.out.println("subSequence(5, 16): \"" + sub + "\"");
    }
    
    // ============================================
    // CATEGORY 8: REPLACING METHODS
    // ============================================
    static void category8_ReplacingMethods() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("CATEGORY 8: REPLACING METHODS");
        System.out.println("=".repeat(60));
        
        String text = "Java is fun. Java is powerful.";
        
        // 8.1 replace(char oldChar, char newChar)
        System.out.println("\n8.1: replace(char oldChar, char newChar)");
        System.out.println("Original: " + text);
        System.out.println("Replace 'a' with 'A': " + text.replace('a', 'A'));
        
        // 8.2 replace(CharSequence target, CharSequence replacement)
        System.out.println("\n8.2: replace(String target, String replacement)");
        System.out.println("Replace 'Java' with 'Python': " + text.replace("Java", "Python"));
        
        // 8.3 replaceAll(String regex, String replacement)
        System.out.println("\n8.3: replaceAll(String regex, String replacement)");
        String numbers = "Phone: 123-456-7890";
        System.out.println("Original: " + numbers);
        System.out.println("Remove all digits: " + numbers.replaceAll("\\d", "X"));
        
        // 8.4 replaceFirst(String regex, String replacement)
        System.out.println("\n8.4: replaceFirst(String regex, String replacement)");
        System.out.println("Original: " + text);
        System.out.println("Replace first 'Java': " + text.replaceFirst("Java", "Python"));
    }
    
    // ============================================
    // CATEGORY 9: TESTING METHODS
    // ============================================
    static void category9_TestingMethods() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("CATEGORY 9: TESTING METHODS");
        System.out.println("=".repeat(60));
        
        // 9.1 isEmpty()
        System.out.println("\n9.1: isEmpty()");
        String empty = "";
        String nonEmpty = "Hello";
        System.out.println("\"\".isEmpty(): " + empty.isEmpty());  // true
        System.out.println("\"Hello\".isEmpty(): " + nonEmpty.isEmpty());  // false
        
        // 9.2 isBlank() (Java 11+)
        System.out.println("\n9.2: isBlank() - Checks for empty or whitespace");
        String blank = "   ";
        System.out.println("\"   \".isBlank(): " + blank.isBlank());  // true
        System.out.println("\"   \".isEmpty(): " + blank.isEmpty());  // false
        System.out.println("\"Hello\".isBlank(): " + nonEmpty.isBlank());  // false
        
        // 9.3 equals(Object obj)
        System.out.println("\n9.3: equals(Object obj)");
        String s1 = "Java";
        String s2 = "Java";
        String s3 = "Python";
        System.out.println("\"Java\".equals(\"Java\"): " + s1.equals(s2));  // true
        System.out.println("\"Java\".equals(\"Python\"): " + s1.equals(s3));  // false
        
        // 9.4 equalsIgnoreCase(String another)
        System.out.println("\n9.4: equalsIgnoreCase(String another)");
        System.out.println("\"Java\".equalsIgnoreCase(\"JAVA\"): " + 
                          "Java".equalsIgnoreCase("JAVA"));  // true
        
        // 9.5 contentEquals(CharSequence cs)
        System.out.println("\n9.5: contentEquals(CharSequence cs)");
        StringBuilder sb = new StringBuilder("Java");
        System.out.println("\"Java\".contentEquals(StringBuilder): " + 
                          "Java".contentEquals(sb));  // true
        
        // 9.6 regionMatches()
        System.out.println("\n9.6: regionMatches()");
        String str1 = "Java Programming";
        String str2 = "Python Programming";
        boolean match = str1.regionMatches(5, str2, 7, 11);
        System.out.println("\"Programming\" matches in both: " + match);
    }
    
    // ============================================
    // CATEGORY 10: CONVERSION METHODS
    // ============================================
    static void category10_ConversionMethods() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("CATEGORY 10: CONVERSION METHODS");
        System.out.println("=".repeat(60));
        
        // 10.1 valueOf() - Various types
        System.out.println("\n10.1: valueOf() - Convert to String");
        String fromInt = String.valueOf(123);
        String fromDouble = String.valueOf(3.14);
        String fromBoolean = String.valueOf(true);
        String fromChar = String.valueOf('A');
        
        System.out.println("int to String: " + fromInt + " (type: String)");
        System.out.println("double to String: " + fromDouble);
        System.out.println("boolean to String: " + fromBoolean);
        System.out.println("char to String: " + fromChar);
        
        // 10.2 format() - Formatted strings
        System.out.println("\n10.2: format() - Formatted strings");
        String formatted1 = String.format("Name: %s, Age: %d", "John", 25);
        String formatted2 = String.format("Price: $%.2f", 19.99);
        String formatted3 = String.format("Percentage: %.1f%%", 85.5);
        
        System.out.println(formatted1);
        System.out.println(formatted2);
        System.out.println(formatted3);
        
        // 10.3 toString() on other objects
        System.out.println("\n10.3: toString() on objects");
        Integer num = 42;
        Double pi = 3.14159;
        Boolean flag = true;
        
        System.out.println("Integer.toString(): " + num.toString());
        System.out.println("Double.toString(): " + pi.toString());
        System.out.println("Boolean.toString(): " + flag.toString());
        
        // 10.4 Parsing strings to primitives
        System.out.println("\n10.4: Parsing strings to primitives");
        String strNum = "123";
        String strDouble = "3.14";
        String strBool = "true";
        
        int parsedInt = Integer.parseInt(strNum);
        double parsedDouble = Double.parseDouble(strDouble);
        boolean parsedBool = Boolean.parseBoolean(strBool);
        
        System.out.println("Parsed int: " + parsedInt + " (type: int)");
        System.out.println("Parsed double: " + parsedDouble + " (type: double)");
        System.out.println("Parsed boolean: " + parsedBool + " (type: boolean)");
    }
    
    // ============================================
    // BONUS: PRACTICAL EXAMPLES
    // ============================================
    static void bonusSection_PracticalExamples() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("BONUS: PRACTICAL EXAMPLES");
        System.out.println("=".repeat(60));
        
        // Example 1: Email validation
        System.out.println("\n🔹 Example 1: Email Validation");
        String email = "user@example.com";
        boolean isValidEmail = email.contains("@") && 
                              email.contains(".") &&
                              email.indexOf("@") > 0 &&
                              email.lastIndexOf(".") > email.indexOf("@");
        System.out.println("Email: " + email);
        System.out.println("Is valid: " + isValidEmail);
        
        // Example 2: Extract filename from path
        System.out.println("\n🔹 Example 2: Extract Filename");
        String path = "C:/Users/Documents/file.txt";
        String filename = path.substring(path.lastIndexOf("/") + 1);
        System.out.println("Path: " + path);
        System.out.println("Filename: " + filename);
        
        // Example 3: Count word occurrences
        System.out.println("\n🔹 Example 3: Count Word Occurrences");
        String text = "Java is fun. Java is powerful. I love Java.";
        String word = "Java";
        int count = 0;
        int index = 0;
        while ((index = text.indexOf(word, index)) != -1) {
            count++;
            index += word.length();
        }
        System.out.println("Text: " + text);
        System.out.println("\"" + word + "\" appears " + count + " times");
        
        // Example 4: Reverse words in sentence
        System.out.println("\n🔹 Example 4: Reverse Words");
        String sentence = "Hello World Java";
        String[] words = sentence.split(" ");
        StringBuilder reversed = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--) {
            reversed.append(words[i]);
            if (i > 0) reversed.append(" ");
        }
        System.out.println("Original: " + sentence);
        System.out.println("Reversed: " + reversed.toString());
        
        // Example 5: Remove extra spaces
        System.out.println("\n🔹 Example 5: Remove Extra Spaces");
        String messy = "  Hello   World   Java  ";
        String clean = messy.trim().replaceAll("\\s+", " ");
        System.out.println("Messy: \"" + messy + "\"");
        System.out.println("Clean: \"" + clean + "\"");
        
        System.out.println("\n🎉 STRING METHODS GUIDE COMPLETE!");
        System.out.println("You've mastered 30+ essential String methods!");
    }
}
