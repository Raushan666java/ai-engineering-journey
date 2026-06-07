# ☕ Java Basics - Quick Concepts & Practice

## 🎯 Quick Concepts

### **Data Types**
- **Primitive:** byte, short, int, long, float, double, char, boolean
- **Reference:** String, Arrays, Objects
- **Wrapper Classes:** Integer, Double, Character, etc.

### **Operators**
- **Arithmetic:** +, -, *, /, %
- **Relational:** ==, !=, <, >, <=, >=
- **Logical:** &&, ||, !
- **Bitwise:** &, |, ^, ~, <<, >>
- **Assignment:** =, +=, -=, *=, /=, %=

### **Control Structures**
- **Conditional:** if-else, switch-case
- **Loops:** for, while, do-while
- **Jump:** break, continue, return

### **Arrays**
- **Declaration:** `int[] arr = new int[5];`
- **Initialization:** `int[] arr = {1, 2, 3, 4, 5};`
- **Multi-dimensional:** `int[][] matrix = new int[3][3];`

---

## 🧠 Practice Questions

### **Easy Level**

#### 1. Hello World Program
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Welcome to Java Programming!");
    }
}
```

#### 2. Data Types and Variables
```java
public class DataTypesDemo {
    public static void main(String[] args) {
        // Primitive data types
        byte b = 127;
        short s = 32767;
        int i = 2147483647;
        long l = 9223372036854775807L;
        float f = 3.14f;
        double d = 3.141592653589793;
        char c = 'A';
        boolean bool = true;
        
        // Reference types
        String str = "Hello Java";
        int[] arr = {1, 2, 3, 4, 5};
        
        System.out.println("Byte: " + b);
        System.out.println("String: " + str);
        System.out.println("Array length: " + arr.length);
    }
}
```

#### 3. Operators Demo
```java
public class OperatorsDemo {
    public static void main(String[] args) {
        int a = 10, b = 5;
        
        // Arithmetic
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Modulus: " + (a % b));
        
        // Relational
        System.out.println("a > b: " + (a > b));
        System.out.println("a == b: " + (a == b));
        
        // Logical
        boolean x = true, y = false;
        System.out.println("x && y: " + (x && y));
        System.out.println("x || y: " + (x || y));
        System.out.println("!x: " + (!x));
    }
}
```

### **Medium Level**

#### 4. Control Structures
```java
public class ControlStructures {
    public static void main(String[] args) {
        // If-else ladder
        int marks = 85;
        if(marks >= 90) {
            System.out.println("Grade A");
        } else if(marks >= 80) {
            System.out.println("Grade B");
        } else if(marks >= 70) {
            System.out.println("Grade C");
        } else {
            System.out.println("Grade D");
        }
        
        // Switch case
        int day = 3;
        switch(day) {
            case 1: System.out.println("Monday"); break;
            case 2: System.out.println("Tuesday"); break;
            case 3: System.out.println("Wednesday"); break;
            default: System.out.println("Invalid day");
        }
        
        // For loop
        System.out.println("For loop:");
        for(int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // While loop
        System.out.println("While loop:");
        int j = 1;
        while(j <= 5) {
            System.out.print(j + " ");
            j++;
        }
        System.out.println();
        
        // Do-while loop
        System.out.println("Do-while loop:");
        int k = 1;
        do {
            System.out.print(k + " ");
            k++;
        } while(k <= 5);
    }
}
```

#### 5. Array Operations
```java
public class ArrayOperations {
    public static void main(String[] args) {
        // Array declaration and initialization
        int[] arr = {12, 35, 1, 10, 34, 1};
        
        // Find maximum element
        int max = findMax(arr);
        System.out.println("Maximum element: " + max);
        
        // Find second maximum
        int secondMax = findSecondMax(arr);
        System.out.println("Second maximum: " + secondMax);
        
        // Reverse array
        reverseArray(arr);
        System.out.print("Reversed array: ");
        printArray(arr);
        
        // Sort array
        sortArray(arr);
        System.out.print("Sorted array: ");
        printArray(arr);
    }
    
    public static int findMax(int[] arr) {
        int max = arr[0];
        for(int i = 1; i < arr.length; i++) {
            if(arr[i] > max) max = arr[i];
        }
        return max;
    }
    
    public static int findSecondMax(int[] arr) {
        int max = Integer.MIN_VALUE;
        int secondMax = Integer.MIN_VALUE;
        
        for(int num : arr) {
            if(num > max) {
                secondMax = max;
                max = num;
            } else if(num > secondMax && num != max) {
                secondMax = num;
            }
        }
        return secondMax;
    }
    
    public static void reverseArray(int[] arr) {
        int left = 0, right = arr.length - 1;
        while(left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++; right--;
        }
    }
    
    public static void sortArray(int[] arr) {
        for(int i = 0; i < arr.length - 1; i++) {
            for(int j = 0; j < arr.length - i - 1; j++) {
                if(arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
    
    public static void printArray(int[] arr) {
        for(int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
```

### **Hard Level**

#### 6. Matrix Operations
```java
public class MatrixOperations {
    public static void main(String[] args) {
        int[][] matrix1 = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        int[][] matrix2 = {
            {9, 8, 7},
            {6, 5, 4},
            {3, 2, 1}
        };
        
        System.out.println("Matrix 1:");
        printMatrix(matrix1);
        
        System.out.println("Matrix 2:");
        printMatrix(matrix2);
        
        // Matrix addition
        int[][] sum = addMatrices(matrix1, matrix2);
        System.out.println("Sum of matrices:");
        printMatrix(sum);
        
        // Matrix multiplication
        int[][] product = multiplyMatrices(matrix1, matrix2);
        System.out.println("Product of matrices:");
        printMatrix(product);
        
        // Transpose
        int[][] transpose = transposeMatrix(matrix1);
        System.out.println("Transpose of Matrix 1:");
        printMatrix(transpose);
        
        // Check if symmetric
        boolean isSymmetric = isSymmetric(matrix1);
        System.out.println("Matrix 1 is symmetric: " + isSymmetric);
    }
    
    public static int[][] addMatrices(int[][] a, int[][] b) {
        int rows = a.length;
        int cols = a[0].length;
        int[][] result = new int[rows][cols];
        
        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < cols; j++) {
                result[i][j] = a[i][j] + b[i][j];
            }
        }
        return result;
    }
    
    public static int[][] multiplyMatrices(int[][] a, int[][] b) {
        int rows1 = a.length;
        int cols1 = a[0].length;
        int cols2 = b[0].length;
        int[][] result = new int[rows1][cols2];
        
        for(int i = 0; i < rows1; i++) {
            for(int j = 0; j < cols2; j++) {
                for(int k = 0; k < cols1; k++) {
                    result[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return result;
    }
    
    public static int[][] transposeMatrix(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        int[][] transpose = new int[cols][rows];
        
        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < cols; j++) {
                transpose[j][i] = matrix[i][j];
            }
        }
        return transpose;
    }
    
    public static boolean isSymmetric(int[][] matrix) {
        int n = matrix.length;
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if(matrix[i][j] != matrix[j][i]) {
                    return false;
                }
            }
        }
        return true;
    }
    
    public static void printMatrix(int[][] matrix) {
        for(int[] row : matrix) {
            for(int num : row) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
        System.out.println();
    }
}
```

---

## 📈 Important Java Concepts

### **String Operations**
```java
public class StringOperations {
    public static void main(String[] args) {
        String str = "Hello World";
        
        // Length
        System.out.println("Length: " + str.length());
        
        // Character at index
        System.out.println("Char at 0: " + str.charAt(0));
        
        // Substring
        System.out.println("Substring(0,5): " + str.substring(0, 5));
        
        // Index of
        System.out.println("Index of 'o': " + str.indexOf('o'));
        
        // Replace
        System.out.println("Replace 'l' with 'x': " + str.replace('l', 'x'));
        
        // Split
        String[] words = str.split(" ");
        System.out.println("Words: " + Arrays.toString(words));
        
        // Uppercase/Lowercase
        System.out.println("Uppercase: " + str.toUpperCase());
        System.out.println("Lowercase: " + str.toLowerCase());
        
        // Trim
        String spaced = "  Hello World  ";
        System.out.println("Trimmed: '" + spaced.trim() + "'");
        
        // String comparison
        String s1 = "hello";
        String s2 = "HELLO";
        System.out.println("s1.equals(s2): " + s1.equals(s2));
        System.out.println("s1.equalsIgnoreCase(s2): " + s1.equalsIgnoreCase(s2));
    }
}
```

### **Input/Output Operations**
```java
import java.util.Scanner;

public class InputOutputDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Reading different data types
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        System.out.print("Enter your salary: ");
        double salary = scanner.nextDouble();
        
        System.out.print("Are you a student? (true/false): ");
        boolean isStudent = scanner.nextBoolean();
        
        // Output
        System.out.println("\n--- User Information ---");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: $" + salary);
        System.out.println("Student: " + isStudent);
        
        scanner.close();
    }
}
```

---

## 🎯 Practice Tips

1. **Data Type Selection:**
   - Choose appropriate data types for memory efficiency
   - Consider range and precision requirements

2. **Array Bounds:**
   - Always check array length before access
   - Use enhanced for loop when index not needed

3. **String Immutability:**
   - Strings are immutable in Java
   - Use StringBuilder for string manipulation

4. **Exception Handling:**
   - Handle potential exceptions (ArrayIndexOutOfBounds, etc.)
   - Use try-catch blocks appropriately

5. **Performance:**
   - Prefer primitive types over wrapper classes
   - Use StringBuilder over String concatenation in loops

---

## 📚 Recommended Practice Topics
1. **Calculator Program** - Arithmetic operations with input validation
2. **Number Pattern Printing** - Various star and number patterns
3. **Prime Number Checker** - Check if number is prime
4. **Factorial Calculator** - Using recursion and iteration
5. **Palindrome Checker** - For strings and numbers
6. **Array Sorting** - Bubble, Selection, Insertion sort
7. **Matrix Operations** - Addition, multiplication, transpose
8. **String Manipulation** - Reverse, anagram check, substring operations
9. **File I/O Operations** - Reading from and writing to files
10. **Command Line Arguments** - Processing program arguments