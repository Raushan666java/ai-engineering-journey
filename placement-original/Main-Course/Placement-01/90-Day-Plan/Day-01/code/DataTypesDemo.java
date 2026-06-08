/**
 * File: DataTypesDemo.java
 * Description: Demonstrates all primitive data types in Java
 * Day: 1 of 90
 */
public class DataTypesDemo {
    public static void main(String[] args) {
        // Integer types
        byte byteVal = 127;                      // 8-bit  (-128 to 127)
        short shortVal = 32000;                  // 16-bit (-32,768 to 32,767)
        int intVal = 2147483647;                 // 32-bit (-2^31 to 2^31-1)
        long longVal = 9223372036854775807L;     // 64-bit (add 'L' suffix)
        
        // Floating-point types
        float floatVal = 3.14f;                  // 32-bit (add 'f' suffix)
        double doubleVal = 3.141592653589793;    // 64-bit
        
        // Character and Boolean
        char charVal = 'A';                      // 16-bit Unicode character
        boolean boolVal = true;                  // true or false
        
        // Display all values
        System.out.println("=== Primitive Data Types Demo ===\n");
        System.out.println("Byte: " + byteVal);
        System.out.println("Short: " + shortVal);
        System.out.println("Int: " + intVal);
        System.out.println("Long: " + longVal);
        System.out.println("Float: " + floatVal);
        System.out.println("Double: " + doubleVal);
        System.out.println("Char: " + charVal);
        System.out.println("Boolean: " + boolVal);
        
        // Print sizes
        System.out.println("\n=== Data Type Sizes ===");
        System.out.println("byte: " + Byte.BYTES + " bytes (" + Byte.SIZE + " bits)");
        System.out.println("short: " + Short.BYTES + " bytes (" + Short.SIZE + " bits)");
        System.out.println("int: " + Integer.BYTES + " bytes (" + Integer.SIZE + " bits)");
        System.out.println("long: " + Long.BYTES + " bytes (" + Long.SIZE + " bits)");
        System.out.println("float: " + Float.BYTES + " bytes (" + Float.SIZE + " bits)");
        System.out.println("double: " + Double.BYTES + " bytes (" + Double.SIZE + " bits)");
        System.out.println("char: " + Character.BYTES + " bytes (" + Character.SIZE + " bits)");
        
        // Print ranges
        System.out.println("\n=== Data Type Ranges ===");
        System.out.println("byte: " + Byte.MIN_VALUE + " to " + Byte.MAX_VALUE);
        System.out.println("short: " + Short.MIN_VALUE + " to " + Short.MAX_VALUE);
        System.out.println("int: " + Integer.MIN_VALUE + " to " + Integer.MAX_VALUE);
        System.out.println("long: " + Long.MIN_VALUE + " to " + Long.MAX_VALUE);
        System.out.println("float: " + Float.MIN_VALUE + " to " + Float.MAX_VALUE);
        System.out.println("double: " + Double.MIN_VALUE + " to " + Double.MAX_VALUE);
        System.out.println("char: " + (int)Character.MIN_VALUE + " to " + (int)Character.MAX_VALUE);
    }
}
