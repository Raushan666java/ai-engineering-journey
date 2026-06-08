import java.util.Scanner;

/**
 * Control Flow Mastery - Day 2
 * Complete guide to if-else, switch, and nested conditions
 */

public class ControlFlowMastery {
    public static void main(String[] args) {
        System.out.println("========================================");
        System.out.println("   CONTROL FLOW STATEMENTS GUIDE");
        System.out.println("========================================\n");
        
        // 1. Simple if-else
        simpleIfElse();
        
        // 2. if-else-if ladder
        ifElseIfLadder();
        
        // 3. Nested if-else
        nestedIfElse();
        
        // 4. switch-case
        switchStatement();
        
        // 5. Complex conditions
        complexConditions();
        
        // 6. Practical examples
        practicalExamples();
    }
    
    // ========== 1. SIMPLE IF-ELSE ==========
    static void simpleIfElse() {
        System.out.println("=== 1. SIMPLE IF-ELSE ===\n");
        
        int age = 20;
        
        // Simple if
        if (age >= 18) {
            System.out.println("You are an adult (age: " + age + ")");
        }
        
        // if-else
        int number = -5;
        if (number >= 0) {
            System.out.println(number + " is positive or zero");
        } else {
            System.out.println(number + " is negative");
        }
        
        // Check even/odd
        int num = 17;
        if (num % 2 == 0) {
            System.out.println(num + " is even");
        } else {
            System.out.println(num + " is odd");
        }
        
        // Using ternary (alternative)
        String result = (num % 2 == 0) ? "even" : "odd";
        System.out.println("Using ternary: " + num + " is " + result);
        
        System.out.println("\n" + "=".repeat(40) + "\n");
    }
    
    // ========== 2. IF-ELSE-IF LADDER ==========
    static void ifElseIfLadder() {
        System.out.println("=== 2. IF-ELSE-IF LADDER ===\n");
        
        // Grade calculator
        int marks = 85;
        String grade;
        
        if (marks >= 90) {
            grade = "A+";
        } else if (marks >= 80) {
            grade = "A";
        } else if (marks >= 70) {
            grade = "B";
        } else if (marks >= 60) {
            grade = "C";
        } else if (marks >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }
        
        System.out.println("Marks: " + marks + " → Grade: " + grade);
        
        // Number classification
        int value = 0;
        if (value > 0) {
            System.out.println(value + " is positive");
        } else if (value < 0) {
            System.out.println(value + " is negative");
        } else {
            System.out.println(value + " is zero");
        }
        
        // Day of week
        int day = 3;
        String dayName;
        
        if (day == 1) {
            dayName = "Monday";
        } else if (day == 2) {
            dayName = "Tuesday";
        } else if (day == 3) {
            dayName = "Wednesday";
        } else if (day == 4) {
            dayName = "Thursday";
        } else if (day == 5) {
            dayName = "Friday";
        } else if (day == 6) {
            dayName = "Saturday";
        } else if (day == 7) {
            dayName = "Sunday";
        } else {
            dayName = "Invalid day";
        }
        
        System.out.println("Day " + day + ": " + dayName);
        System.out.println("(Better to use switch for this!)");
        
        System.out.println("\n" + "=".repeat(40) + "\n");
    }
    
    // ========== 3. NESTED IF-ELSE ==========
    static void nestedIfElse() {
        System.out.println("=== 3. NESTED IF-ELSE ===\n");
        
        // Age and citizenship check
        int age = 25;
        boolean isCitizen = true;
        
        if (age >= 18) {
            if (isCitizen) {
                System.out.println("Eligible to vote");
            } else {
                System.out.println("Not a citizen - cannot vote");
            }
        } else {
            System.out.println("Too young to vote (age: " + age + ")");
        }
        
        // Find largest of 3 numbers
        int a = 15, b = 20, c = 10;
        int largest;
        
        if (a >= b) {
            if (a >= c) {
                largest = a;
            } else {
                largest = c;
            }
        } else {
            if (b >= c) {
                largest = b;
            } else {
                largest = c;
            }
        }
        
        System.out.println("\nLargest of " + a + ", " + b + ", " + c + ": " + largest);
        
        // Login validation
        String username = "admin";
        String password = "pass123";
        
        if (username.equals("admin")) {
            if (password.equals("pass123")) {
                System.out.println("\nLogin successful!");
            } else {
                System.out.println("\nIncorrect password");
            }
        } else {
            System.out.println("\nUser not found");
        }
        
        // Grade with attendance
        int marks = 85;
        int attendance = 75;
        
        if (marks >= 60) {
            if (attendance >= 75) {
                System.out.println("\nPassed with good attendance");
            } else {
                System.out.println("\nPassed but low attendance - warning!");
            }
        } else {
            if (attendance >= 75) {
                System.out.println("\nFailed despite good attendance");
            } else {
                System.out.println("\nFailed with poor attendance");
            }
        }
        
        System.out.println("\n" + "=".repeat(40) + "\n");
    }
    
    // ========== 4. SWITCH STATEMENT ==========
    static void switchStatement() {
        System.out.println("=== 4. SWITCH STATEMENT ===\n");
        
        // Basic switch with int
        int day = 3;
        String dayName;
        
        switch (day) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            case 6:
                dayName = "Saturday";
                break;
            case 7:
                dayName = "Sunday";
                break;
            default:
                dayName = "Invalid day";
        }
        
        System.out.println("Day " + day + ": " + dayName);
        
        // Switch with String (Java 7+)
        String month = "March";
        int daysInMonth;
        
        switch (month) {
            case "January":
            case "March":
            case "May":
            case "July":
            case "August":
            case "October":
            case "December":
                daysInMonth = 31;
                break;
            case "April":
            case "June":
            case "September":
            case "November":
                daysInMonth = 30;
                break;
            case "February":
                daysInMonth = 28;  // Not considering leap year
                break;
            default:
                daysInMonth = 0;
        }
        
        System.out.println(month + " has " + daysInMonth + " days");
        
        // Calculator using switch
        char operator = '+';
        int num1 = 10, num2 = 5;
        int result = 0;
        
        switch (operator) {
            case '+':
                result = num1 + num2;
                System.out.println("\n" + num1 + " + " + num2 + " = " + result);
                break;
            case '-':
                result = num1 - num2;
                System.out.println("\n" + num1 + " - " + num2 + " = " + result);
                break;
            case '*':
                result = num1 * num2;
                System.out.println("\n" + num1 + " * " + num2 + " = " + result);
                break;
            case '/':
                if (num2 != 0) {
                    result = num1 / num2;
                    System.out.println("\n" + num1 + " / " + num2 + " = " + result);
                } else {
                    System.out.println("\nError: Division by zero!");
                }
                break;
            default:
                System.out.println("\nInvalid operator!");
        }
        
        // Grade switch
        char grade = 'B';
        
        switch (grade) {
            case 'A':
                System.out.println("\nExcellent! (90-100)");
                break;
            case 'B':
                System.out.println("\nGood! (80-89)");
                break;
            case 'C':
                System.out.println("\nFair (70-79)");
                break;
            case 'D':
                System.out.println("\nPoor (60-69)");
                break;
            case 'F':
                System.out.println("\nFail (below 60)");
                break;
            default:
                System.out.println("\nInvalid grade");
        }
        
        System.out.println("\n" + "=".repeat(40) + "\n");
    }
    
    // ========== 5. COMPLEX CONDITIONS ==========
    static void complexConditions() {
        System.out.println("=== 5. COMPLEX CONDITIONS ===\n");
        
        // Multiple AND conditions
        int age = 25;
        double salary = 50000;
        int experience = 3;
        
        if (age >= 21 && salary >= 30000 && experience >= 2) {
            System.out.println("Eligible for loan");
        } else {
            System.out.println("Not eligible for loan");
        }
        
        // Multiple OR conditions
        String role = "admin";
        boolean hasPermission = false;
        
        if (role.equals("admin") || role.equals("manager") || hasPermission) {
            System.out.println("Access granted");
        } else {
            System.out.println("Access denied");
        }
        
        // Combined AND and OR
        int marks = 85;
        int attendance = 80;
        boolean hasProject = true;
        
        if ((marks >= 60 && attendance >= 75) || hasProject) {
            System.out.println("Passed the course");
        } else {
            System.out.println("Failed the course");
        }
        
        // Range checking
        int score = 75;
        
        if (score >= 0 && score <= 100) {
            if (score >= 90) {
                System.out.println("Grade: A (Score: " + score + ")");
            } else if (score >= 80) {
                System.out.println("Grade: B (Score: " + score + ")");
            } else if (score >= 70) {
                System.out.println("Grade: C (Score: " + score + ")");
            } else if (score >= 60) {
                System.out.println("Grade: D (Score: " + score + ")");
            } else {
                System.out.println("Grade: F (Score: " + score + ")");
            }
        } else {
            System.out.println("Invalid score: " + score);
        }
        
        // NOT operator usage
        boolean isLoggedIn = true;
        
        if (!isLoggedIn) {
            System.out.println("Please log in first");
        } else {
            System.out.println("Welcome back!");
        }
        
        // Leap year check
        int year = 2024;
        boolean isLeapYear;
        
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            isLeapYear = true;
        } else {
            isLeapYear = false;
        }
        
        System.out.println(year + " is " + (isLeapYear ? "a leap year" : "not a leap year"));
        
        System.out.println("\n" + "=".repeat(40) + "\n");
    }
    
    // ========== 6. PRACTICAL EXAMPLES ==========
    static void practicalExamples() {
        System.out.println("=== 6. PRACTICAL EXAMPLES ===\n");
        
        // Example 1: BMI Calculator
        double weight = 70;  // kg
        double height = 1.75;  // meters
        double bmi = weight / (height * height);
        
        System.out.println("BMI Calculator:");
        System.out.printf("Weight: %.1f kg, Height: %.2f m%n", weight, height);
        System.out.printf("BMI: %.2f - ", bmi);
        
        if (bmi < 18.5) {
            System.out.println("Underweight");
        } else if (bmi < 25) {
            System.out.println("Normal weight");
        } else if (bmi < 30) {
            System.out.println("Overweight");
        } else {
            System.out.println("Obese");
        }
        
        // Example 2: Tax Calculator
        double income = 75000;
        double tax;
        
        System.out.println("\nTax Calculator:");
        System.out.println("Income: $" + income);
        
        if (income <= 10000) {
            tax = 0;
        } else if (income <= 50000) {
            tax = (income - 10000) * 0.10;
        } else if (income <= 100000) {
            tax = 4000 + (income - 50000) * 0.20;
        } else {
            tax = 14000 + (income - 100000) * 0.30;
        }
        
        System.out.printf("Tax: $%.2f%n", tax);
        System.out.printf("After-tax income: $%.2f%n", income - tax);
        
        // Example 3: Triangle Type
        int side1 = 5, side2 = 5, side3 = 5;
        
        System.out.println("\nTriangle Type:");
        System.out.println("Sides: " + side1 + ", " + side2 + ", " + side3);
        
        if (side1 == side2 && side2 == side3) {
            System.out.println("Equilateral triangle");
        } else if (side1 == side2 || side2 == side3 || side1 == side3) {
            System.out.println("Isosceles triangle");
        } else {
            System.out.println("Scalene triangle");
        }
        
        // Example 4: Password Strength
        String password = "Pass@123";
        boolean hasUpper = password.matches(".*[A-Z].*");
        boolean hasLower = password.matches(".*[a-z].*");
        boolean hasDigit = password.matches(".*\\d.*");
        boolean hasSpecial = password.matches(".*[@#$%^&+=].*");
        int length = password.length();
        
        System.out.println("\nPassword Strength Checker:");
        System.out.println("Password: " + password);
        
        int strength = 0;
        if (length >= 8) strength++;
        if (hasUpper) strength++;
        if (hasLower) strength++;
        if (hasDigit) strength++;
        if (hasSpecial) strength++;
        
        if (strength >= 4) {
            System.out.println("Strong password");
        } else if (strength >= 3) {
            System.out.println("Medium password");
        } else {
            System.out.println("Weak password");
        }
        
        // Example 5: Discount Calculator
        double purchaseAmount = 1200;
        double discount = 0;
        
        System.out.println("\nDiscount Calculator:");
        System.out.println("Purchase Amount: $" + purchaseAmount);
        
        if (purchaseAmount >= 1000) {
            discount = 0.20;  // 20%
        } else if (purchaseAmount >= 500) {
            discount = 0.10;  // 10%
        } else if (purchaseAmount >= 100) {
            discount = 0.05;  // 5%
        }
        
        double discountAmount = purchaseAmount * discount;
        double finalAmount = purchaseAmount - discountAmount;
        
        System.out.printf("Discount: %.0f%% ($%.2f)%n", discount * 100, discountAmount);
        System.out.printf("Final Amount: $%.2f%n", finalAmount);
        
        System.out.println("\n" + "=".repeat(40));
    }
}
