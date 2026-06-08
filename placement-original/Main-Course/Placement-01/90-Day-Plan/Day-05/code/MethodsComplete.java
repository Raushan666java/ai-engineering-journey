/**
 * METHODS COMPLETE GUIDE - DAY 5
 * Master Java Methods & Function Concepts
 * 
 * Topics Covered:
 * 1. Method Basics & Syntax
 * 2. Method Parameters & Arguments
 * 3. Return Types & Return Statements
 * 4. Method Overloading
 * 5. Variable Arguments (Varargs)
 * 6. Pass by Value vs Pass by Reference
 * 7. Method Scope & Access
 * 8. Static vs Instance Methods
 * 9. Method Chaining
 * 10. Best Practices & Common Patterns
 */

public class MethodsComplete {
    
    // Instance variable for demonstration
    private int instanceVar = 10;
    private static int staticVar = 20;
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════╗");
        System.out.println("║   METHODS COMPLETE GUIDE - DAY 5          ║");
        System.out.println("║   Master Java Methods & Functions         ║");
        System.out.println("╚═══════════════════════════════════════════╝\n");
        
        MethodsComplete demo = new MethodsComplete();
        
        demo.section1_MethodBasics();
        demo.section2_Parameters();
        demo.section3_ReturnTypes();
        demo.section4_MethodOverloading();
        demo.section5_Varargs();
        demo.section6_PassByValue();
        demo.section7_MethodScope();
        section8_StaticMethods();  // Static method called directly
        demo.section9_MethodChaining();
        demo.section10_BestPractices();
    }
    
    // ============================================
    // SECTION 1: METHOD BASICS
    // ============================================
    void section1_MethodBasics() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 1: METHOD BASICS");
        System.out.println("=".repeat(60));
        
        // 1.1: Method structure
        System.out.println("\n1.1: Method Structure");
        System.out.println("┌─────────────────────────────────────────┐");
        System.out.println("│ accessModifier returnType methodName()  │");
        System.out.println("│ {                                       │");
        System.out.println("│     // method body                      │");
        System.out.println("│     return value; // if needed          │");
        System.out.println("│ }                                       │");
        System.out.println("└─────────────────────────────────────────┘");
        
        // 1.2: Simple method examples
        System.out.println("\n1.2: Simple Method Examples");
        
        // Method with no parameters, no return
        greet();
        
        // Method with parameters, no return
        greetUser("John");
        
        // Method with no parameters, with return
        String message = getMessage();
        System.out.println("Returned message: " + message);
        
        // Method with parameters and return
        int sum = add(5, 3);
        System.out.println("Sum of 5 + 3 = " + sum);
        
        // 1.3: Why use methods?
        System.out.println("\n1.3: Benefits of Methods");
        System.out.println("✅ Code Reusability - Write once, use many times");
        System.out.println("✅ Modularity - Break complex problems into smaller parts");
        System.out.println("✅ Maintainability - Easier to update and debug");
        System.out.println("✅ Readability - Self-documenting code");
        System.out.println("✅ Testing - Easier to test individual methods");
    }
    
    // Example methods for section 1
    void greet() {
        System.out.println("Hello, World!");
    }
    
    void greetUser(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    String getMessage() {
        return "This is a returned message";
    }
    
    int add(int a, int b) {
        return a + b;
    }
    
    // ============================================
    // SECTION 2: PARAMETERS & ARGUMENTS
    // ============================================
    void section2_Parameters() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 2: PARAMETERS & ARGUMENTS");
        System.out.println("=".repeat(60));
        
        // 2.1: Single parameter
        System.out.println("\n2.1: Single Parameter");
        printSquare(5);
        
        // 2.2: Multiple parameters
        System.out.println("\n2.2: Multiple Parameters");
        printSum(10, 20);
        printProduct(5, 4, 3);
        
        // 2.3: Different parameter types
        System.out.println("\n2.3: Different Parameter Types");
        displayInfo("Alice", 25, 75000.50);
        
        // 2.4: Array as parameter
        System.out.println("\n2.4: Array as Parameter");
        int[] numbers = {1, 2, 3, 4, 5};
        printArray(numbers);
        System.out.println("Sum of array: " + sumArray(numbers));
        
        // 2.5: Object as parameter
        System.out.println("\n2.5: Object as Parameter");
        String text = "Hello";
        printLength(text);
    }
    
    void printSquare(int num) {
        System.out.println("Square of " + num + " = " + (num * num));
    }
    
    void printSum(int a, int b) {
        System.out.println(a + " + " + b + " = " + (a + b));
    }
    
    void printProduct(int a, int b, int c) {
        System.out.println(a + " × " + b + " × " + c + " = " + (a * b * c));
    }
    
    void displayInfo(String name, int age, double salary) {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: $" + salary);
    }
    
    void printArray(int[] arr) {
        System.out.print("Array: [");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }
    
    int sumArray(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return sum;
    }
    
    void printLength(String str) {
        System.out.println("Length of \"" + str + "\" = " + str.length());
    }
    
    // ============================================
    // SECTION 3: RETURN TYPES
    // ============================================
    void section3_ReturnTypes() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 3: RETURN TYPES");
        System.out.println("=".repeat(60));
        
        // 3.1: Primitive return types
        System.out.println("\n3.1: Primitive Return Types");
        System.out.println("int: " + getInteger());
        System.out.println("double: " + getDouble());
        System.out.println("boolean: " + getBoolean());
        System.out.println("char: " + getChar());
        
        // 3.2: Object return types
        System.out.println("\n3.2: Object Return Types");
        String str = getString();
        System.out.println("String: " + str);
        
        int[] arr = getArray();
        System.out.print("Array: ");
        printArray(arr);
        
        // 3.3: Void return type
        System.out.println("\n3.3: Void Return Type (No Return)");
        displayMessage("This method returns nothing");
        
        // 3.4: Multiple return points
        System.out.println("\n3.4: Multiple Return Points");
        System.out.println("Max of 5, 10: " + getMax(5, 10));
        System.out.println("Max of 15, 8: " + getMax(15, 8));
        
        // 3.5: Early return
        System.out.println("\n3.5: Early Return Pattern");
        System.out.println("Is valid (25): " + isValidAge(25));
        System.out.println("Is valid (-5): " + isValidAge(-5));
        System.out.println("Is valid (150): " + isValidAge(150));
    }
    
    int getInteger() {
        return 42;
    }
    
    double getDouble() {
        return 3.14159;
    }
    
    boolean getBoolean() {
        return true;
    }
    
    char getChar() {
        return 'A';
    }
    
    String getString() {
        return "Hello, Java!";
    }
    
    int[] getArray() {
        return new int[]{10, 20, 30, 40, 50};
    }
    
    void displayMessage(String msg) {
        System.out.println(msg);
    }
    
    int getMax(int a, int b) {
        if (a > b) {
            return a;  // First return point
        } else {
            return b;  // Second return point
        }
        // Alternative: return (a > b) ? a : b;
    }
    
    boolean isValidAge(int age) {
        if (age < 0) {
            return false;  // Early return for invalid
        }
        if (age > 120) {
            return false;  // Early return for invalid
        }
        return true;  // Valid age
    }
    
    // ============================================
    // SECTION 4: METHOD OVERLOADING
    // ============================================
    void section4_MethodOverloading() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 4: METHOD OVERLOADING");
        System.out.println("=".repeat(60));
        
        System.out.println("\n4.1: Same Method Name, Different Parameters");
        System.out.println("Method overloading allows multiple methods with same name");
        System.out.println("but different parameter lists (number, type, or order)\n");
        
        // Different number of parameters
        System.out.println("Different number of parameters:");
        System.out.println("add(5, 3) = " + add(5, 3));
        System.out.println("add(5, 3, 2) = " + add(5, 3, 2));
        System.out.println("add(5, 3, 2, 1) = " + add(5, 3, 2, 1));
        
        // Different parameter types
        System.out.println("\nDifferent parameter types:");
        System.out.println("add(5, 3) = " + add(5, 3));
        System.out.println("add(5.5, 3.2) = " + add(5.5, 3.2));
        
        // Different order of parameters
        System.out.println("\nDifferent order of parameters:");
        display(10, "times");
        display("Count:", 10);
        
        // Area calculation overloading
        System.out.println("\n4.2: Practical Example - Area Calculation");
        System.out.println("Square area (5): " + area(5));
        System.out.println("Rectangle area (5, 10): " + area(5, 10));
        System.out.println("Circle area (7): " + area(7.0));
    }
    
    // Overloaded add methods - different number of parameters
    int add(int a, int b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {
        return a + b + c;
    }
    
    int add(int a, int b, int c, int d) {
        return a + b + c + d;
    }
    
    // Overloaded add methods - different types
    double add(double a, double b) {
        return a + b;
    }
    
    // Overloaded display methods - different order
    void display(int count, String unit) {
        System.out.println(count + " " + unit);
    }
    
    void display(String label, int value) {
        System.out.println(label + " " + value);
    }
    
    // Overloaded area methods
    int area(int side) {
        return side * side;  // Square
    }
    
    int area(int length, int width) {
        return length * width;  // Rectangle
    }
    
    double area(double radius) {
        return Math.PI * radius * radius;  // Circle
    }
    
    // ============================================
    // SECTION 5: VARIABLE ARGUMENTS (VARARGS)
    // ============================================
    void section5_Varargs() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 5: VARIABLE ARGUMENTS (VARARGS)");
        System.out.println("=".repeat(60));
        
        System.out.println("\n5.1: Varargs Syntax: type... name");
        System.out.println("Allows passing variable number of arguments\n");
        
        // Varargs with different number of arguments
        System.out.println("Sum of 1, 2: " + sum(1, 2));
        System.out.println("Sum of 1, 2, 3: " + sum(1, 2, 3));
        System.out.println("Sum of 1, 2, 3, 4, 5: " + sum(1, 2, 3, 4, 5));
        System.out.println("Sum of (no args): " + sum());
        
        // Varargs with other parameters
        System.out.println("\n5.2: Varargs with Other Parameters");
        printWithPrefix("Number:", 1, 2, 3, 4, 5);
        printWithPrefix("Value:", 10, 20);
        
        // Finding max using varargs
        System.out.println("\n5.3: Finding Maximum");
        System.out.println("Max of 5, 2, 8, 1, 9: " + max(5, 2, 8, 1, 9));
        System.out.println("Max of 100, 50: " + max(100, 50));
    }
    
    // Varargs method
    int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
    
    // Varargs with other parameters (varargs must be last)
    void printWithPrefix(String prefix, int... numbers) {
        System.out.print(prefix + " ");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
    
    int max(int... numbers) {
        if (numbers.length == 0) {
            throw new IllegalArgumentException("At least one number required");
        }
        int maximum = numbers[0];
        for (int num : numbers) {
            if (num > maximum) {
                maximum = num;
            }
        }
        return maximum;
    }
    
    // ============================================
    // SECTION 6: PASS BY VALUE
    // ============================================
    void section6_PassByValue() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 6: PASS BY VALUE vs PASS BY REFERENCE");
        System.out.println("=".repeat(60));
        
        // 6.1: Primitives are passed by value
        System.out.println("\n6.1: Primitives - Pass by Value");
        int x = 10;
        System.out.println("Before: x = " + x);
        modifyPrimitive(x);
        System.out.println("After: x = " + x);
        System.out.println("❗ Primitive value NOT changed (copy was modified)");
        
        // 6.2: Objects - reference is passed by value
        System.out.println("\n6.2: Objects - Reference Passed by Value");
        int[] arr = {1, 2, 3};
        System.out.print("Before: ");
        printArray(arr);
        modifyArray(arr);
        System.out.print("After: ");
        printArray(arr);
        System.out.println("❗ Array WAS changed (reference points to same object)");
        
        // 6.3: String special case
        System.out.println("\n6.3: String - Immutable Object");
        String str = "Hello";
        System.out.println("Before: " + str);
        modifyString(str);
        System.out.println("After: " + str);
        System.out.println("❗ String NOT changed (immutable)");
    }
    
    void modifyPrimitive(int num) {
        num = num * 2;
        System.out.println("Inside method: num = " + num);
    }
    
    void modifyArray(int[] arr) {
        arr[0] = 999;
        System.out.print("Inside method: ");
        printArray(arr);
    }
    
    void modifyString(String s) {
        s = s + " World";
        System.out.println("Inside method: " + s);
    }
    
    // ============================================
    // SECTION 7: METHOD SCOPE
    // ============================================
    void section7_MethodScope() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 7: METHOD SCOPE & VARIABLES");
        System.out.println("=".repeat(60));
        
        // 7.1: Local variables
        System.out.println("\n7.1: Local Variables");
        int localVar = 100;
        System.out.println("Local variable: " + localVar);
        System.out.println("Instance variable: " + instanceVar);
        System.out.println("Static variable: " + staticVar);
        
        // 7.2: Method parameters
        System.out.println("\n7.2: Method Parameters Scope");
        testScope(50);
        
        // 7.3: Block scope
        System.out.println("\n7.3: Block Scope");
        demonstrateBlockScope();
    }
    
    void testScope(int param) {
        System.out.println("Parameter: " + param);
        System.out.println("Instance var: " + instanceVar);
        
        int localInMethod = 200;
        System.out.println("Local in method: " + localInMethod);
    }
    
    void demonstrateBlockScope() {
        int x = 10;
        System.out.println("Outer x: " + x);
        
        {
            int y = 20;
            System.out.println("Inner block - x: " + x + ", y: " + y);
        }
        
        // y is not accessible here
        System.out.println("After block - x: " + x);
        // System.out.println(y);  // Error: cannot find symbol
    }
    
    // ============================================
    // SECTION 8: STATIC VS INSTANCE METHODS
    // ============================================
    static void section8_StaticMethods() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 8: STATIC VS INSTANCE METHODS");
        System.out.println("=".repeat(60));
        
        // 8.1: Static method
        System.out.println("\n8.1: Static Method");
        System.out.println("Can be called without object: ClassName.method()");
        staticMethod();
        
        // 8.2: Instance method requires object
        System.out.println("\n8.2: Instance Method");
        System.out.println("Requires object: object.method()");
        MethodsComplete obj = new MethodsComplete();
        obj.instanceMethod();
        
        // 8.3: Static method accessing variables
        System.out.println("\n8.3: Static Method Access");
        System.out.println("Static variable: " + staticVar);
        // System.out.println(instanceVar);  // Error: non-static variable
        System.out.println("Can access static variables only (or via object)");
    }
    
    static void staticMethod() {
        System.out.println("This is a static method");
        System.out.println("Static var: " + staticVar);
    }
    
    void instanceMethod() {
        System.out.println("This is an instance method");
        System.out.println("Instance var: " + instanceVar);
        System.out.println("Static var: " + staticVar);
    }
    
    // ============================================
    // SECTION 9: METHOD CHAINING
    // ============================================
    void section9_MethodChaining() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 9: METHOD CHAINING");
        System.out.println("=".repeat(60));
        
        System.out.println("\n9.1: Method Chaining Pattern");
        System.out.println("Return 'this' to enable chaining\n");
        
        Calculator calc = new Calculator();
        int result = calc.add(10)
                        .subtract(3)
                        .multiply(2)
                        .divide(2)
                        .getResult();
        
        System.out.println("Final result: " + result);
    }
    
    // Inner class for method chaining demonstration
    static class Calculator {
        private int value = 0;
        
        Calculator add(int num) {
            value += num;
            System.out.println("After add(" + num + "): " + value);
            return this;
        }
        
        Calculator subtract(int num) {
            value -= num;
            System.out.println("After subtract(" + num + "): " + value);
            return this;
        }
        
        Calculator multiply(int num) {
            value *= num;
            System.out.println("After multiply(" + num + "): " + value);
            return this;
        }
        
        Calculator divide(int num) {
            value /= num;
            System.out.println("After divide(" + num + "): " + value);
            return this;
        }
        
        int getResult() {
            return value;
        }
    }
    
    // ============================================
    // SECTION 10: BEST PRACTICES
    // ============================================
    void section10_BestPractices() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("SECTION 10: METHOD BEST PRACTICES");
        System.out.println("=".repeat(60));
        
        System.out.println("\n✅ DO's:");
        System.out.println("1. Use descriptive method names (calculateTotal, not calc)");
        System.out.println("2. Keep methods short (< 20 lines ideally)");
        System.out.println("3. One task per method (Single Responsibility)");
        System.out.println("4. Use proper access modifiers (public/private/protected)");
        System.out.println("5. Document complex methods with comments");
        System.out.println("6. Validate input parameters");
        System.out.println("7. Use meaningful parameter names");
        System.out.println("8. Return early for error conditions");
        
        System.out.println("\n❌ DON'Ts:");
        System.out.println("1. Don't make methods too long (> 50 lines)");
        System.out.println("2. Don't use too many parameters (> 4 parameters)");
        System.out.println("3. Don't modify input parameters unexpectedly");
        System.out.println("4. Don't use generic names (doStuff, process)");
        System.out.println("5. Don't have side effects without documenting");
        
        System.out.println("\n💡 Naming Conventions:");
        System.out.println("- Methods: camelCase (calculateTotal, getUserName)");
        System.out.println("- Action verbs: get, set, calculate, validate, is, has");
        System.out.println("- Boolean methods: is/has prefix (isEmpty, hasData)");
        
        System.out.println("\n🎉 METHODS GUIDE COMPLETE!");
    }
}
