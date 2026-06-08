import java.util.Scanner;

/**
 * Advanced Calculator with Menu System - Day 2 Project
 * Features: All operations, input validation, error handling
 */

public class AdvancedCalculator {
    
    static Scanner scanner = new Scanner(System.in);
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════╗");
        System.out.println("║   ADVANCED CALCULATOR v2.0         ║");
        System.out.println("║   Day 2 - Control Flow Project    ║");
        System.out.println("╚════════════════════════════════════╝\n");
        
        boolean continueCalculating = true;
        
        while (continueCalculating) {
            displayMenu();
            int choice = getValidChoice();
            
            if (choice == 0) {
                System.out.println("\n👋 Thank you for using the calculator!");
                continueCalculating = false;
            } else {
                performOperation(choice);
                
                System.out.print("\nContinue? (y/n): ");
                String response = scanner.next();
                continueCalculating = response.equalsIgnoreCase("y");
            }
        }
        
        scanner.close();
    }
    
    // ========== MENU DISPLAY ==========
    static void displayMenu() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("           CALCULATOR MENU");
        System.out.println("=".repeat(40));
        System.out.println("1.  Addition (+)");
        System.out.println("2.  Subtraction (-)");
        System.out.println("3.  Multiplication (×)");
        System.out.println("4.  Division (÷)");
        System.out.println("5.  Modulus (%)");
        System.out.println("6.  Power (x^y)");
        System.out.println("7.  Square Root (√)");
        System.out.println("8.  Percentage");
        System.out.println("9.  Average of Numbers");
        System.out.println("10. Max of Two Numbers");
        System.out.println("11. Min of Two Numbers");
        System.out.println("12. Absolute Value");
        System.out.println("13. Even/Odd Check");
        System.out.println("14. Prime Number Check");
        System.out.println("15. Factorial");
        System.out.println("0.  Exit");
        System.out.println("=".repeat(40));
    }
    
    // ========== GET VALID CHOICE ==========
    static int getValidChoice() {
        int choice = -1;
        boolean valid = false;
        
        while (!valid) {
            System.out.print("\nEnter your choice (0-15): ");
            if (scanner.hasNextInt()) {
                choice = scanner.nextInt();
                if (choice >= 0 && choice <= 15) {
                    valid = true;
                } else {
                    System.out.println("❌ Invalid choice! Please enter 0-15.");
                }
            } else {
                System.out.println("❌ Invalid input! Please enter a number.");
                scanner.next(); // Clear invalid input
            }
        }
        
        return choice;
    }
    
    // ========== GET VALID NUMBER ==========
    static double getValidNumber(String prompt) {
        double number = 0;
        boolean valid = false;
        
        while (!valid) {
            System.out.print(prompt);
            if (scanner.hasNextDouble()) {
                number = scanner.nextDouble();
                valid = true;
            } else {
                System.out.println("❌ Invalid input! Please enter a number.");
                scanner.next(); // Clear invalid input
            }
        }
        
        return number;
    }
    
    // ========== PERFORM OPERATION ==========
    static void performOperation(int choice) {
        double num1, num2, result;
        
        switch (choice) {
            case 1:  // Addition
                num1 = getValidNumber("Enter first number: ");
                num2 = getValidNumber("Enter second number: ");
                result = add(num1, num2);
                System.out.printf("\n✅ %.2f + %.2f = %.2f%n", num1, num2, result);
                break;
                
            case 2:  // Subtraction
                num1 = getValidNumber("Enter first number: ");
                num2 = getValidNumber("Enter second number: ");
                result = subtract(num1, num2);
                System.out.printf("\n✅ %.2f - %.2f = %.2f%n", num1, num2, result);
                break;
                
            case 3:  // Multiplication
                num1 = getValidNumber("Enter first number: ");
                num2 = getValidNumber("Enter second number: ");
                result = multiply(num1, num2);
                System.out.printf("\n✅ %.2f × %.2f = %.2f%n", num1, num2, result);
                break;
                
            case 4:  // Division
                num1 = getValidNumber("Enter numerator: ");
                num2 = getValidNumber("Enter denominator: ");
                if (num2 != 0) {
                    result = divide(num1, num2);
                    System.out.printf("\n✅ %.2f ÷ %.2f = %.2f%n", num1, num2, result);
                } else {
                    System.out.println("\n❌ Error: Division by zero!");
                }
                break;
                
            case 5:  // Modulus
                num1 = getValidNumber("Enter first number: ");
                num2 = getValidNumber("Enter second number: ");
                if (num2 != 0) {
                    result = modulus(num1, num2);
                    System.out.printf("\n✅ %.2f %% %.2f = %.2f%n", num1, num2, result);
                } else {
                    System.out.println("\n❌ Error: Modulus by zero!");
                }
                break;
                
            case 6:  // Power
                num1 = getValidNumber("Enter base: ");
                num2 = getValidNumber("Enter exponent: ");
                result = power(num1, num2);
                System.out.printf("\n✅ %.2f ^ %.2f = %.2f%n", num1, num2, result);
                break;
                
            case 7:  // Square Root
                num1 = getValidNumber("Enter number: ");
                if (num1 >= 0) {
                    result = squareRoot(num1);
                    System.out.printf("\n✅ √%.2f = %.2f%n", num1, result);
                } else {
                    System.out.println("\n❌ Error: Cannot find square root of negative number!");
                }
                break;
                
            case 8:  // Percentage
                num1 = getValidNumber("Enter number: ");
                num2 = getValidNumber("Enter percentage: ");
                result = percentage(num1, num2);
                System.out.printf("\n✅ %.2f%% of %.2f = %.2f%n", num2, num1, result);
                break;
                
            case 9:  // Average
                num1 = getValidNumber("Enter first number: ");
                num2 = getValidNumber("Enter second number: ");
                result = average(num1, num2);
                System.out.printf("\n✅ Average of %.2f and %.2f = %.2f%n", num1, num2, result);
                break;
                
            case 10:  // Maximum
                num1 = getValidNumber("Enter first number: ");
                num2 = getValidNumber("Enter second number: ");
                result = max(num1, num2);
                System.out.printf("\n✅ Max of %.2f and %.2f = %.2f%n", num1, num2, result);
                break;
                
            case 11:  // Minimum
                num1 = getValidNumber("Enter first number: ");
                num2 = getValidNumber("Enter second number: ");
                result = min(num1, num2);
                System.out.printf("\n✅ Min of %.2f and %.2f = %.2f%n", num1, num2, result);
                break;
                
            case 12:  // Absolute Value
                num1 = getValidNumber("Enter number: ");
                result = absolute(num1);
                System.out.printf("\n✅ |%.2f| = %.2f%n", num1, result);
                break;
                
            case 13:  // Even/Odd Check
                num1 = getValidNumber("Enter integer: ");
                checkEvenOdd((int)num1);
                break;
                
            case 14:  // Prime Check
                num1 = getValidNumber("Enter positive integer: ");
                checkPrime((int)num1);
                break;
                
            case 15:  // Factorial
                num1 = getValidNumber("Enter non-negative integer: ");
                if (num1 >= 0 && num1 == (int)num1 && num1 <= 20) {
                    long fact = factorial((int)num1);
                    System.out.printf("\n✅ %d! = %d%n", (int)num1, fact);
                } else {
                    System.out.println("\n❌ Error: Enter non-negative integer ≤ 20!");
                }
                break;
                
            default:
                System.out.println("\n❌ Invalid operation!");
        }
    }
    
    // ========== ARITHMETIC OPERATIONS ==========
    
    static double add(double a, double b) {
        return a + b;
    }
    
    static double subtract(double a, double b) {
        return a - b;
    }
    
    static double multiply(double a, double b) {
        return a * b;
    }
    
    static double divide(double a, double b) {
        return a / b;
    }
    
    static double modulus(double a, double b) {
        return a % b;
    }
    
    static double power(double base, double exponent) {
        return Math.pow(base, exponent);
    }
    
    static double squareRoot(double num) {
        return Math.sqrt(num);
    }
    
    static double percentage(double number, double percent) {
        return (number * percent) / 100;
    }
    
    static double average(double a, double b) {
        return (a + b) / 2;
    }
    
    static double max(double a, double b) {
        return (a > b) ? a : b;
    }
    
    static double min(double a, double b) {
        return (a < b) ? a : b;
    }
    
    static double absolute(double num) {
        return (num < 0) ? -num : num;
    }
    
    // ========== UTILITY OPERATIONS ==========
    
    static void checkEvenOdd(int num) {
        if (num % 2 == 0) {
            System.out.println("\n✅ " + num + " is EVEN");
        } else {
            System.out.println("\n✅ " + num + " is ODD");
        }
    }
    
    static void checkPrime(int num) {
        if (num <= 1) {
            System.out.println("\n❌ " + num + " is NOT prime");
            return;
        }
        
        boolean isPrime = true;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            System.out.println("\n✅ " + num + " is PRIME");
        } else {
            System.out.println("\n❌ " + num + " is NOT prime");
        }
    }
    
    static long factorial(int n) {
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

/*
 * SAMPLE RUN:
 * 
 * ╔════════════════════════════════════╗
 * ║   ADVANCED CALCULATOR v2.0         ║
 * ║   Day 2 - Control Flow Project    ║
 * ╚════════════════════════════════════╝
 * 
 * ========================================
 *            CALCULATOR MENU
 * ========================================
 * 1.  Addition (+)
 * 2.  Subtraction (-)
 * 3.  Multiplication (×)
 * ...
 * 
 * Enter your choice (0-15): 1
 * Enter first number: 25
 * Enter second number: 17
 * 
 * ✅ 25.00 + 17.00 = 42.00
 * 
 * Continue? (y/n): y
 * 
 * [Menu repeats...]
 */
