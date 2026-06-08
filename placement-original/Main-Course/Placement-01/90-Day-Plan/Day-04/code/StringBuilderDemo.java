/**
 * STRINGBUILDER & STRINGBUFFER COMPLETE GUIDE - DAY 4
 * Master Mutable String Classes
 * 
 * Topics:
 * 1. Why StringBuilder/StringBuffer?
 * 2. StringBuilder Complete Guide
 * 3. StringBuffer Complete Guide
 * 4. StringBuilder vs StringBuffer
 * 5. StringBuilder vs String
 * 6. Common Methods
 * 7. Performance Comparison
 * 8. Practical Applications
 */

public class StringBuilderDemo {
    
    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════════════════════╗");
        System.out.println("║  STRINGBUILDER & STRINGBUFFER GUIDE - DAY 4  ║");
        System.out.println("║  Mutable String Classes                      ║");
        System.out.println("╚══════════════════════════════════════════════╝\n");
        
        section1_WhyMutableStrings();
        section2_StringBuilderBasics();
        section3_StringBufferBasics();
        section4_StringBuilderVsStringBuffer();
        section5_CommonMethods();
        section6_PerformanceComparison();
        section7_PracticalApplications();
    }
    
    // ============================================
    // SECTION 1: WHY MUTABLE STRINGS?
    // ============================================
    static void section1_WhyMutableStrings() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 1: WHY MUTABLE STRINGS?");
        System.out.println("=".repeat(60));
        
        // 1.1: String immutability problem
        System.out.println("\n1.1: String Immutability Problem");
        System.out.println("String concatenation in loop:");
        System.out.println("String result = \"\";");
        System.out.println("for (int i = 0; i < 1000; i++) {");
        System.out.println("    result += i;  // Creates 1000 new String objects!");
        System.out.println("}");
        System.out.println("❌ Very inefficient! Each += creates new String object");
        
        // 1.2: StringBuilder solution
        System.out.println("\n1.2: StringBuilder Solution");
        System.out.println("StringBuilder sb = new StringBuilder();");
        System.out.println("for (int i = 0; i < 1000; i++) {");
        System.out.println("    sb.append(i);  // Modifies same object!");
        System.out.println("}");
        System.out.println("✅ Efficient! Modifies existing object");
        
        // 1.3: When to use what?
        System.out.println("\n1.3: When to Use What?");
        System.out.println("String:");
        System.out.println("  ✅ Immutable, thread-safe");
        System.out.println("  ✅ Use when string won't change");
        System.out.println("  ✅ Example: Configuration values, constants");
        
        System.out.println("\nStringBuilder:");
        System.out.println("  ✅ Mutable, NOT thread-safe");
        System.out.println("  ✅ Use in single-threaded scenarios");
        System.out.println("  ✅ Example: Building strings in loops, concatenation");
        
        System.out.println("\nStringBuffer:");
        System.out.println("  ✅ Mutable, thread-safe (synchronized)");
        System.out.println("  ✅ Use in multi-threaded scenarios");
        System.out.println("  ✅ Example: Shared string building across threads");
    }
    
    // ============================================
    // SECTION 2: STRINGBUILDER BASICS
    // ============================================
    static void section2_StringBuilderBasics() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 2: STRINGBUILDER COMPLETE GUIDE");
        System.out.println("=".repeat(60));
        
        // 2.1: Creating StringBuilder
        System.out.println("\n2.1: Creating StringBuilder");
        
        // Empty StringBuilder
        StringBuilder sb1 = new StringBuilder();
        System.out.println("Empty: capacity = " + sb1.capacity());  // Default 16
        
        // With initial capacity
        StringBuilder sb2 = new StringBuilder(50);
        System.out.println("With capacity 50: " + sb2.capacity());
        
        // With initial string
        StringBuilder sb3 = new StringBuilder("Hello");
        System.out.println("With \"Hello\": " + sb3 + ", capacity = " + sb3.capacity());
        
        // 2.2: append() method
        System.out.println("\n2.2: append() - Add to End");
        StringBuilder sb = new StringBuilder("Java");
        System.out.println("Initial: " + sb);
        
        sb.append(" Programming");
        System.out.println("After append(\" Programming\"): " + sb);
        
        sb.append(" is").append(" fun");  // Method chaining
        System.out.println("After chaining: " + sb);
        
        sb.append(2024);  // Append int
        System.out.println("After append(2024): " + sb);
        
        // 2.3: insert() method
        System.out.println("\n2.3: insert() - Insert at Position");
        StringBuilder sb4 = new StringBuilder("Java Programming");
        System.out.println("Original: " + sb4);
        
        sb4.insert(5, "Cool ");
        System.out.println("After insert(5, \"Cool \"): " + sb4);
        
        // 2.4: delete() and deleteCharAt()
        System.out.println("\n2.4: delete() and deleteCharAt()");
        StringBuilder sb5 = new StringBuilder("Hello World");
        System.out.println("Original: " + sb5);
        
        sb5.delete(5, 11);  // Delete " World"
        System.out.println("After delete(5, 11): " + sb5);
        
        sb5.append(" Java");
        sb5.deleteCharAt(sb5.length() - 1);  // Delete last character
        System.out.println("After deleteCharAt(last): " + sb5);
        
        // 2.5: reverse()
        System.out.println("\n2.5: reverse()");
        StringBuilder sb6 = new StringBuilder("Hello");
        System.out.println("Original: " + sb6);
        sb6.reverse();
        System.out.println("Reversed: " + sb6);
        
        // 2.6: replace()
        System.out.println("\n2.6: replace()");
        StringBuilder sb7 = new StringBuilder("Hello World");
        System.out.println("Original: " + sb7);
        sb7.replace(6, 11, "Java");
        System.out.println("After replace(6, 11, \"Java\"): " + sb7);
    }
    
    // ============================================
    // SECTION 3: STRINGBUFFER BASICS
    // ============================================
    static void section3_StringBufferBasics() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 3: STRINGBUFFER COMPLETE GUIDE");
        System.out.println("=".repeat(60));
        
        System.out.println("\n3.1: StringBuffer Creation & Methods");
        System.out.println("StringBuffer has same methods as StringBuilder");
        System.out.println("Key difference: StringBuffer is SYNCHRONIZED (thread-safe)");
        
        // Creating StringBuffer
        StringBuffer buffer = new StringBuffer("Hello");
        System.out.println("\nInitial: " + buffer);
        
        // append
        buffer.append(" World");
        System.out.println("After append: " + buffer);
        
        // insert
        buffer.insert(6, "Java ");
        System.out.println("After insert: " + buffer);
        
        // reverse
        StringBuffer reversed = new StringBuffer("Java");
        reversed.reverse();
        System.out.println("Reversed: " + reversed);
        
        // 3.2: Thread safety demonstration
        System.out.println("\n3.2: Thread Safety");
        System.out.println("StringBuffer methods are synchronized:");
        System.out.println("public synchronized StringBuffer append(String str)");
        System.out.println("✅ Safe for multi-threaded access");
        System.out.println("❌ Slower due to synchronization overhead");
    }
    
    // ============================================
    // SECTION 4: STRINGBUILDER VS STRINGBUFFER
    // ============================================
    static void section4_StringBuilderVsStringBuffer() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 4: STRINGBUILDER VS STRINGBUFFER");
        System.out.println("=".repeat(60));
        
        System.out.println("\n╔════════════════════╦═══════════════╦═══════════════╗");
        System.out.println("║    Feature         ║ StringBuilder ║ StringBuffer  ║");
        System.out.println("╠════════════════════╬═══════════════╬═══════════════╣");
        System.out.println("║ Thread-Safe        ║      NO       ║      YES      ║");
        System.out.println("║ Synchronized       ║      NO       ║      YES      ║");
        System.out.println("║ Performance        ║     FAST      ║    SLOWER     ║");
        System.out.println("║ Since Version      ║    Java 5     ║    Java 1     ║");
        System.out.println("║ Use in             ║  Single Thread║ Multi-Thread  ║");
        System.out.println("╚════════════════════╩═══════════════╩═══════════════╝");
        
        System.out.println("\n✅ Prefer StringBuilder in:");
        System.out.println("  - Single-threaded applications (99% of cases)");
        System.out.println("  - Local variables in methods");
        System.out.println("  - Performance-critical code");
        
        System.out.println("\n✅ Use StringBuffer when:");
        System.out.println("  - Multiple threads access same object");
        System.out.println("  - Shared mutable string across threads");
        System.out.println("  - Legacy code compatibility");
    }
    
    // ============================================
    // SECTION 5: COMMON METHODS
    // ============================================
    static void section5_CommonMethods() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 5: COMMON METHODS");
        System.out.println("=".repeat(60));
        
        StringBuilder sb = new StringBuilder("Hello World");
        
        // 5.1: length() and capacity()
        System.out.println("\n5.1: length() and capacity()");
        System.out.println("String: \"" + sb + "\"");
        System.out.println("length(): " + sb.length());  // Actual characters
        System.out.println("capacity(): " + sb.capacity());  // Buffer size
        
        // 5.2: ensureCapacity()
        System.out.println("\n5.2: ensureCapacity()");
        System.out.println("Current capacity: " + sb.capacity());
        sb.ensureCapacity(50);
        System.out.println("After ensureCapacity(50): " + sb.capacity());
        
        // 5.3: setLength()
        System.out.println("\n5.3: setLength()");
        StringBuilder sb2 = new StringBuilder("Hello World");
        System.out.println("Original: \"" + sb2 + "\" (length: " + sb2.length() + ")");
        sb2.setLength(5);
        System.out.println("After setLength(5): \"" + sb2 + "\"");
        
        // 5.4: charAt() and setCharAt()
        System.out.println("\n5.4: charAt() and setCharAt()");
        StringBuilder sb3 = new StringBuilder("Hello");
        System.out.println("Original: " + sb3);
        System.out.println("charAt(1): " + sb3.charAt(1));
        sb3.setCharAt(1, 'a');
        System.out.println("After setCharAt(1, 'a'): " + sb3);
        
        // 5.5: substring()
        System.out.println("\n5.5: substring()");
        StringBuilder sb4 = new StringBuilder("Java Programming");
        System.out.println("Original: " + sb4);
        String sub = sb4.substring(5, 16);
        System.out.println("substring(5, 16): " + sub);
        
        // 5.6: indexOf() and lastIndexOf()
        System.out.println("\n5.6: indexOf() and lastIndexOf()");
        StringBuilder sb5 = new StringBuilder("Java Programming in Java");
        System.out.println("String: " + sb5);
        System.out.println("indexOf(\"Java\"): " + sb5.indexOf("Java"));
        System.out.println("lastIndexOf(\"Java\"): " + sb5.lastIndexOf("Java"));
        
        // 5.7: toString()
        System.out.println("\n5.7: toString() - Convert to String");
        StringBuilder sb6 = new StringBuilder("Hello World");
        String str = sb6.toString();
        System.out.println("StringBuilder: " + sb6);
        System.out.println("String: " + str);
        System.out.println("Type: " + str.getClass().getSimpleName());
    }
    
    // ============================================
    // SECTION 6: PERFORMANCE COMPARISON
    // ============================================
    static void section6_PerformanceComparison() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 6: PERFORMANCE COMPARISON");
        System.out.println("=".repeat(60));
        
        int iterations = 10000;
        
        // Test 1: String concatenation
        System.out.println("\n6.1: String Concatenation (10,000 iterations)");
        long start1 = System.nanoTime();
        String result1 = "";
        for (int i = 0; i < iterations; i++) {
            result1 += "a";
        }
        long time1 = System.nanoTime() - start1;
        
        // Test 2: StringBuilder
        System.out.println("6.2: StringBuilder append");
        long start2 = System.nanoTime();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < iterations; i++) {
            sb.append("a");
        }
        String result2 = sb.toString();
        long time2 = System.nanoTime() - start2;
        
        // Test 3: StringBuffer
        System.out.println("6.3: StringBuffer append");
        long start3 = System.nanoTime();
        StringBuffer buffer = new StringBuffer();
        for (int i = 0; i < iterations; i++) {
            buffer.append("a");
        }
        String result3 = buffer.toString();
        long time3 = System.nanoTime() - start3;
        
        // Display results
        System.out.println("\n╔══════════════════╦═════════════╦══════════════╗");
        System.out.println("║     Method       ║   Time (ms) ║  Speedup     ║");
        System.out.println("╠══════════════════╬═════════════╬══════════════╣");
        System.out.printf("║ String +=        ║ %9.2f   ║   Baseline   ║%n", time1/1000000.0);
        System.out.printf("║ StringBuilder    ║ %9.2f   ║   %5.0fx      ║%n", 
                         time2/1000000.0, (double)time1/time2);
        System.out.printf("║ StringBuffer     ║ %9.2f   ║   %5.0fx      ║%n", 
                         time3/1000000.0, (double)time1/time3);
        System.out.println("╚══════════════════╩═════════════╩══════════════╝");
        
        System.out.println("\n📊 Key Findings:");
        System.out.println("1. StringBuilder is " + (time1/time2) + "x faster than String +=");
        System.out.println("2. StringBuilder is faster than StringBuffer");
        System.out.println("3. String += creates " + iterations + " objects!");
        System.out.println("4. StringBuilder/Buffer modify same object");
    }
    
    // ============================================
    // SECTION 7: PRACTICAL APPLICATIONS
    // ============================================
    static void section7_PracticalApplications() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 7: PRACTICAL APPLICATIONS");
        System.out.println("=".repeat(60));
        
        // Example 1: Build CSV string
        System.out.println("\n🔹 Example 1: Build CSV String");
        String[] data = {"John", "25", "Engineer", "New York"};
        StringBuilder csv = new StringBuilder();
        for (int i = 0; i < data.length; i++) {
            csv.append(data[i]);
            if (i < data.length - 1) {
                csv.append(",");
            }
        }
        System.out.println("CSV: " + csv.toString());
        
        // Example 2: Build HTML
        System.out.println("\n🔹 Example 2: Build HTML");
        String[] items = {"Java", "Python", "JavaScript"};
        StringBuilder html = new StringBuilder();
        html.append("<ul>\n");
        for (String item : items) {
            html.append("  <li>").append(item).append("</li>\n");
        }
        html.append("</ul>");
        System.out.println(html.toString());
        
        // Example 3: Reverse words in sentence
        System.out.println("\n🔹 Example 3: Reverse String Efficiently");
        String original = "Hello World Java";
        StringBuilder reversed = new StringBuilder(original);
        reversed.reverse();
        System.out.println("Original: " + original);
        System.out.println("Reversed: " + reversed.toString());
        
        // Example 4: Remove all spaces
        System.out.println("\n🔹 Example 4: Remove All Spaces");
        StringBuilder text = new StringBuilder("H e l l o   W o r l d");
        System.out.println("Original: \"" + text + "\"");
        for (int i = 0; i < text.length(); i++) {
            if (text.charAt(i) == ' ') {
                text.deleteCharAt(i);
                i--;  // Adjust index after deletion
            }
        }
        System.out.println("Removed spaces: \"" + text + "\"");
        
        // Example 5: Build query string
        System.out.println("\n🔹 Example 5: Build URL Query String");
        StringBuilder query = new StringBuilder("https://api.example.com/search?");
        query.append("q=").append("java programming");
        query.append("&page=").append(1);
        query.append("&limit=").append(10);
        System.out.println("Query URL: " + query.toString());
        
        // Example 6: Palindrome check using reverse
        System.out.println("\n🔹 Example 6: Check Palindrome");
        String word = "racecar";
        StringBuilder sb = new StringBuilder(word);
        boolean isPalindrome = word.equals(sb.reverse().toString());
        System.out.println("Word: " + word);
        System.out.println("Is palindrome: " + isPalindrome);
        
        System.out.println("\n🎉 STRINGBUILDER & STRINGBUFFER GUIDE COMPLETE!");
        System.out.println("\n📚 Key Takeaways:");
        System.out.println("✅ Use StringBuilder for mutable strings (99% of cases)");
        System.out.println("✅ Use StringBuffer only in multi-threaded scenarios");
        System.out.println("✅ Never use String += in loops!");
        System.out.println("✅ StringBuilder is much faster than String concatenation");
    }
}
