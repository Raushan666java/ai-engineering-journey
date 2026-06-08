/**
 * STRING BASICS COMPLETE GUIDE - DAY 4
 * Master String fundamentals in Java
 * 
 * Topics Covered:
 * 1. String Creation Methods
 * 2. String Immutability
 * 3. String Pool (String Constant Pool)
 * 4. String Comparison
 * 5. String Memory Management
 * 6. Common String Mistakes
 * 7. Best Practices
 * 8. Performance Considerations
 */

public class StringBasics {
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════╗");
        System.out.println("║   STRING BASICS GUIDE - DAY 4      ║");
        System.out.println("║   Master String Fundamentals       ║");
        System.out.println("╚════════════════════════════════════╝\n");
        
        section1_StringCreation();
        section2_StringImmutability();
        section3_StringPool();
        section4_StringComparison();
        section5_StringMemory();
        section6_CommonMistakes();
        section7_BestPractices();
        section8_Performance();
    }
    
    // ============================================
    // SECTION 1: STRING CREATION METHODS
    // ============================================
    static void section1_StringCreation() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 1: STRING CREATION METHODS");
        System.out.println("=".repeat(50));
        
        // Method 1: String literal
        System.out.println("\n1.1: String Literal");
        String s1 = "Hello";
        System.out.println("String literal: " + s1);
        
        // Method 2: Using new keyword
        System.out.println("\n1.2: Using 'new' Keyword");
        String s2 = new String("Hello");
        System.out.println("Using new: " + s2);
        
        // Method 3: From character array
        System.out.println("\n1.3: From Character Array");
        char[] chars = {'J', 'a', 'v', 'a'};
        String s3 = new String(chars);
        System.out.println("From char array: " + s3);
        
        // Method 4: From byte array
        System.out.println("\n1.4: From Byte Array");
        byte[] bytes = {72, 101, 108, 108, 111};  // ASCII for "Hello"
        String s4 = new String(bytes);
        System.out.println("From byte array: " + s4);
        
        // Method 5: From StringBuffer/StringBuilder
        System.out.println("\n1.5: From StringBuilder");
        StringBuilder sb = new StringBuilder("Java");
        String s5 = sb.toString();
        System.out.println("From StringBuilder: " + s5);
        
        // Method 6: Using valueOf()
        System.out.println("\n1.6: Using valueOf()");
        String s6 = String.valueOf(123);
        String s7 = String.valueOf(true);
        String s8 = String.valueOf(3.14);
        System.out.println("From int: " + s6);
        System.out.println("From boolean: " + s7);
        System.out.println("From double: " + s8);
        
        // Method 7: Using concat()
        System.out.println("\n1.7: Using concat()");
        String s9 = "Hello".concat(" ").concat("World");
        System.out.println("Using concat: " + s9);
        
        // Method 8: Using format()
        System.out.println("\n1.8: Using format()");
        String s10 = String.format("Name: %s, Age: %d", "John", 25);
        System.out.println("Using format: " + s10);
    }
    
    // ============================================
    // SECTION 2: STRING IMMUTABILITY
    // ============================================
    static void section2_StringImmutability() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 2: STRING IMMUTABILITY");
        System.out.println("=".repeat(50));
        
        // 2.1: Demonstrating immutability
        System.out.println("\n2.1: Immutability Demo");
        String original = "Java";
        System.out.println("Original: " + original);
        
        // These methods don't modify original string
        original.concat(" Programming");
        original.toUpperCase();
        original.replace('a', 'A');
        
        System.out.println("After operations: " + original);  // Still "Java"
        System.out.println("String is IMMUTABLE!");
        
        // 2.2: Creating new strings
        System.out.println("\n2.2: Modifications Create New Strings");
        String s1 = "Hello";
        String s2 = s1.concat(" World");
        String s3 = s1.toUpperCase();
        String s4 = s1.replace('l', 'L');
        
        System.out.println("s1 (original): " + s1);
        System.out.println("s2 (concat): " + s2);
        System.out.println("s3 (uppercase): " + s3);
        System.out.println("s4 (replace): " + s4);
        
        // 2.3: Why immutability?
        System.out.println("\n2.3: Benefits of Immutability");
        System.out.println("✅ Thread Safety - Multiple threads can safely use same String");
        System.out.println("✅ Security - String values cannot be modified after creation");
        System.out.println("✅ Hashcode Caching - Calculated once and reused");
        System.out.println("✅ String Pool - Memory optimization by reusing strings");
        
        // 2.4: Demonstrating thread safety
        System.out.println("\n2.4: Thread Safety Example");
        String shared = "Shared String";
        // Multiple threads can safely read this without synchronization
        System.out.println("Thread 1: " + shared);
        System.out.println("Thread 2: " + shared);
        System.out.println("Both threads see same value - no data corruption!");
    }
    
    // ============================================
    // SECTION 3: STRING POOL
    // ============================================
    static void section3_StringPool() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 3: STRING POOL (CONSTANT POOL)");
        System.out.println("=".repeat(50));
        
        // 3.1: String pool basics
        System.out.println("\n3.1: String Pool Demonstration");
        String s1 = "Hello";  // Goes to string pool
        String s2 = "Hello";  // Reuses s1 from pool
        String s3 = new String("Hello");  // Creates new object in heap
        
        System.out.println("s1: " + s1);
        System.out.println("s2: " + s2);
        System.out.println("s3: " + s3);
        
        System.out.println("\nReference comparison (==):");
        System.out.println("s1 == s2: " + (s1 == s2));  // true (same reference)
        System.out.println("s1 == s3: " + (s1 == s3));  // false (different objects)
        
        System.out.println("\nContent comparison (equals):");
        System.out.println("s1.equals(s3): " + s1.equals(s3));  // true (same content)
        
        // 3.2: intern() method
        System.out.println("\n3.2: Using intern() Method");
        String heap1 = new String("World");
        String heap2 = new String("World");
        
        System.out.println("Before intern():");
        System.out.println("heap1 == heap2: " + (heap1 == heap2));  // false
        
        String pool1 = heap1.intern();  // Add to pool
        String pool2 = "World";  // Already in pool
        
        System.out.println("\nAfter intern():");
        System.out.println("pool1 == pool2: " + (pool1 == pool2));  // true
        
        // 3.3: String pool memory optimization
        System.out.println("\n3.3: Memory Optimization");
        String a = "Java";
        String b = "Java";
        String c = "Java";
        // Only ONE "Java" object in pool, all three references point to it
        System.out.println("Three variables, one object in memory!");
        System.out.println("a == b == c: " + (a == b && b == c));
        
        // 3.4: When strings go to pool
        System.out.println("\n3.4: String Literal vs new String()");
        String literal = "Hello";        // String pool
        String object = new String("Hello");  // Heap memory
        String interned = object.intern();    // Now in pool
        
        System.out.println("literal == interned: " + (literal == interned));  // true
        System.out.println("Both point to same object in pool!");
    }
    
    // ============================================
    // SECTION 4: STRING COMPARISON
    // ============================================
    static void section4_StringComparison() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 4: STRING COMPARISON");
        System.out.println("=".repeat(50));
        
        String s1 = "Java";
        String s2 = "Java";
        String s3 = new String("Java");
        String s4 = "java";
        
        // 4.1: == operator (reference comparison)
        System.out.println("\n4.1: Using == (Reference Comparison)");
        System.out.println("s1 == s2: " + (s1 == s2));  // true (same object)
        System.out.println("s1 == s3: " + (s1 == s3));  // false (different objects)
        System.out.println("⚠️ == compares references, not content!");
        
        // 4.2: equals() method (content comparison)
        System.out.println("\n4.2: Using equals() (Content Comparison)");
        System.out.println("s1.equals(s3): " + s1.equals(s3));  // true
        System.out.println("s1.equals(s4): " + s1.equals(s4));  // false (case-sensitive)
        System.out.println("✅ Use equals() for content comparison!");
        
        // 4.3: equalsIgnoreCase()
        System.out.println("\n4.3: Using equalsIgnoreCase()");
        System.out.println("s1.equalsIgnoreCase(s4): " + s1.equalsIgnoreCase(s4));  // true
        System.out.println("Case-insensitive comparison");
        
        // 4.4: compareTo()
        System.out.println("\n4.4: Using compareTo() (Lexicographic)");
        String a = "Apple";
        String b = "Banana";
        String c = "Apple";
        
        System.out.println("a.compareTo(b): " + a.compareTo(b));  // Negative (Apple < Banana)
        System.out.println("b.compareTo(a): " + b.compareTo(a));  // Positive (Banana > Apple)
        System.out.println("a.compareTo(c): " + a.compareTo(c));  // 0 (equal)
        
        // 4.5: compareToIgnoreCase()
        System.out.println("\n4.5: Using compareToIgnoreCase()");
        System.out.println("\"JAVA\".compareToIgnoreCase(\"java\"): " + 
                          "JAVA".compareToIgnoreCase("java"));  // 0
        
        // 4.6: startsWith() and endsWith()
        System.out.println("\n4.6: Using startsWith() and endsWith()");
        String text = "Java Programming";
        System.out.println("startsWith(\"Java\"): " + text.startsWith("Java"));
        System.out.println("endsWith(\"ing\"): " + text.endsWith("ing"));
        System.out.println("startsWith(\"Pro\", 5): " + text.startsWith("Pro", 5));
        
        // 4.7: contains()
        System.out.println("\n4.7: Using contains()");
        System.out.println("contains(\"gram\"): " + text.contains("gram"));
        System.out.println("contains(\"Python\"): " + text.contains("Python"));
    }
    
    // ============================================
    // SECTION 5: STRING MEMORY MANAGEMENT
    // ============================================
    static void section5_StringMemory() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 5: STRING MEMORY MANAGEMENT");
        System.out.println("=".repeat(50));
        
        // 5.1: String storage locations
        System.out.println("\n5.1: Where Strings are Stored");
        System.out.println("String Pool (Heap): Stores string literals");
        System.out.println("Heap: Stores String objects created with 'new'");
        
        // 5.2: Memory diagram
        System.out.println("\n5.2: Memory Layout");
        String pool = "Hello";     // String Pool
        String heap = new String("Hello");  // Heap
        
        System.out.println("┌─────────────────┐");
        System.out.println("│   String Pool   │");
        System.out.println("│   \"Hello\"       │ ← pool points here");
        System.out.println("└─────────────────┘");
        System.out.println("┌─────────────────┐");
        System.out.println("│      Heap       │");
        System.out.println("│   \"Hello\"       │ ← heap points here");
        System.out.println("└─────────────────┘");
        
        // 5.3: Garbage collection
        System.out.println("\n5.3: Garbage Collection");
        String temp = new String("Temporary");
        temp = null;  // Now eligible for GC
        System.out.println("Heap String objects are eligible for GC when no references");
        System.out.println("Pool strings are rarely garbage collected");
        
        // 5.4: Memory efficiency
        System.out.println("\n5.4: Memory Efficiency Tips");
        System.out.println("✅ Use string literals when possible");
        System.out.println("✅ Reuse strings from pool");
        System.out.println("✅ Use StringBuilder for concatenation");
        System.out.println("✅ Avoid unnecessary String objects");
    }
    
    // ============================================
    // SECTION 6: COMMON MISTAKES
    // ============================================
    static void section6_CommonMistakes() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 6: COMMON MISTAKES TO AVOID");
        System.out.println("=".repeat(50));
        
        // 6.1: Using == instead of equals()
        System.out.println("\n6.1: ❌ MISTAKE: Using == for comparison");
        String s1 = new String("Hello");
        String s2 = new String("Hello");
        if (s1 == s2) {
            System.out.println("Equal");
        } else {
            System.out.println("Not equal (different objects!)");
        }
        System.out.println("✅ CORRECT: Use equals()");
        System.out.println("s1.equals(s2): " + s1.equals(s2));
        
        // 6.2: Null pointer exceptions
        System.out.println("\n6.2: ❌ MISTAKE: Not checking for null");
        String nullable = null;
        try {
            System.out.println(nullable.length());  // NullPointerException!
        } catch (NullPointerException e) {
            System.out.println("NullPointerException caught!");
        }
        System.out.println("✅ CORRECT: Check for null first");
        if (nullable != null && !nullable.isEmpty()) {
            System.out.println(nullable.length());
        }
        
        // 6.3: Inefficient concatenation
        System.out.println("\n6.3: ❌ MISTAKE: String concatenation in loops");
        System.out.println("String result = \"\";");
        System.out.println("for (int i = 0; i < 1000; i++) {");
        System.out.println("    result += i;  // Creates 1000 String objects!");
        System.out.println("}");
        System.out.println("✅ CORRECT: Use StringBuilder");
        
        // 6.4: Index out of bounds
        System.out.println("\n6.4: ❌ MISTAKE: Not checking string length");
        String short_str = "Hi";
        try {
            char c = short_str.charAt(10);  // IndexOutOfBoundsException!
        } catch (IndexOutOfBoundsException e) {
            System.out.println("IndexOutOfBoundsException caught!");
        }
        System.out.println("✅ CORRECT: Check length first");
        if (short_str.length() > 10) {
            char c = short_str.charAt(10);
        }
    }
    
    // ============================================
    // SECTION 7: BEST PRACTICES
    // ============================================
    static void section7_BestPractices() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 7: STRING BEST PRACTICES");
        System.out.println("=".repeat(50));
        
        System.out.println("\n1. Always use equals() for content comparison");
        System.out.println("   ✅ if (s1.equals(s2))");
        System.out.println("   ❌ if (s1 == s2)");
        
        System.out.println("\n2. Check for null and empty before operations");
        System.out.println("   ✅ if (s != null && !s.isEmpty())");
        
        System.out.println("\n3. Use StringBuilder for concatenation in loops");
        System.out.println("   ✅ StringBuilder sb = new StringBuilder();");
        System.out.println("   ❌ String result = \"\"; (in loop)");
        
        System.out.println("\n4. Use String literals when possible");
        System.out.println("   ✅ String s = \"Hello\";");
        System.out.println("   ❌ String s = new String(\"Hello\");");
        
        System.out.println("\n5. Use appropriate methods for specific tasks");
        System.out.println("   ✅ s.isEmpty() instead of s.length() == 0");
        System.out.println("   ✅ s.isBlank() for whitespace check (Java 11+)");
        
        System.out.println("\n6. Be aware of case sensitivity");
        System.out.println("   Use equalsIgnoreCase() when needed");
        
        System.out.println("\n7. Validate input strings");
        System.out.println("   Check for null, empty, length, format");
        
        System.out.println("\n8. Use intern() judiciously");
        System.out.println("   Only when you need to save memory for repeated strings");
    }
    
    // ============================================
    // SECTION 8: PERFORMANCE CONSIDERATIONS
    // ============================================
    static void section8_Performance() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 8: PERFORMANCE CONSIDERATIONS");
        System.out.println("=".repeat(50));
        
        // 8.1: String vs StringBuilder performance
        System.out.println("\n8.1: Concatenation Performance Test");
        int iterations = 10000;
        
        // Using String (slow)
        long start1 = System.nanoTime();
        String result1 = "";
        for (int i = 0; i < iterations; i++) {
            result1 += "a";  // Creates new String each time
        }
        long time1 = System.nanoTime() - start1;
        
        // Using StringBuilder (fast)
        long start2 = System.nanoTime();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < iterations; i++) {
            sb.append("a");  // Modifies same object
        }
        String result2 = sb.toString();
        long time2 = System.nanoTime() - start2;
        
        System.out.println("String concatenation: " + time1/1000000.0 + " ms");
        System.out.println("StringBuilder append: " + time2/1000000.0 + " ms");
        System.out.println("StringBuilder is " + (time1/time2) + "x faster!");
        
        // 8.2: equals() vs ==
        System.out.println("\n8.2: Comparison Methods");
        System.out.println("== : Fast (compares references)");
        System.out.println("equals() : Slower (compares content character by character)");
        System.out.println("But always use equals() for correctness!");
        
        // 8.3: String interning
        System.out.println("\n8.3: When to Use intern()");
        System.out.println("✅ Use when: Many duplicate strings, memory constrained");
        System.out.println("❌ Avoid when: Strings are unique, performance critical");
        
        System.out.println("\n🎉 STRING BASICS COMPLETE!");
    }
}
