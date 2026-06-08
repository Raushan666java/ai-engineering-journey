import java.util.Scanner;

/**
 * File: SimpleCalculator.java
 * Description: Basic calculator with +, -, *, / operations
 * Day: 1 of 90
 */
public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=================================");
        System.out.println("    SIMPLE CALCULATOR");
        System.out.println("=================================");
        
        // Get first number
        System.out.print("\nEnter first number: ");
        double num1 = scanner.nextDouble();
        
        // Get operator
        System.out.print("Enter operator (+, -, *, /): ");
        char operator = scanner.next().charAt(0);
        
        // Get second number
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();
        
        // Perform calculation
        double result;
        boolean validOperation = true;
        
        System.out.println("\n=================================");
        
        if (operator == '+') {
            result = num1 + num2;
            System.out.printf("%.2f + %.2f = %.2f%n", num1, num2, result);
        } else if (operator == '-') {
            result = num1 - num2;
            System.out.printf("%.2f - %.2f = %.2f%n", num1, num2, result);
        } else if (operator == '*') {
            result = num1 * num2;
            System.out.printf("%.2f × %.2f = %.2f%n", num1, num2, result);
        } else if (operator == '/') {
            if (num2 != 0) {
                result = num1 / num2;
                System.out.printf("%.2f ÷ %.2f = %.2f%n", num1, num2, result);
            } else {
                System.out.println("❌ Error: Division by zero!");
                validOperation = false;
            }
        } else {
            System.out.println("❌ Error: Invalid operator!");
            System.out.println("Please use +, -, *, or /");
            validOperation = false;
        }
        
        System.out.println("=================================");
        
        if (validOperation) {
            System.out.println("\n✅ Calculation completed successfully!");
        }
        
        scanner.close();
    }
}

/*
Sample Run 1:
=================================
    SIMPLE CALCULATOR
=================================

Enter first number: 15.5
Enter operator (+, -, *, /): *
Enter second number: 2

=================================
15.50 × 2.00 = 31.00
=================================

✅ Calculation completed successfully!

Sample Run 2:
=================================
    SIMPLE CALCULATOR
=================================

Enter first number: 10
Enter operator (+, -, *, /): /
Enter second number: 0

=================================
❌ Error: Division by zero!
=================================
*/
