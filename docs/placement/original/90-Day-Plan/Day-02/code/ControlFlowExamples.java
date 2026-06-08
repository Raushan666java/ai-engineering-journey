/**
 * Day 2: Java Operators & Control Flow
 * File: control_flow_examples.java
 * Topic: Control Flow Statements Mastery
 * Author: Placement Preparation System
 */

import java.util.Scanner;

public class ControlFlowExamples {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("=== JAVA CONTROL FLOW MASTERY ===\n");

        // Section 1: if-else Statements
        demonstrateIfElseStatements(scanner);

        // Section 2: switch Statements
        demonstrateSwitchStatements(scanner);

        // Section 3: Nested Control Structures
        demonstrateNestedStructures(scanner);

        // Section 4: Real-world Applications
        demonstrateRealWorldApplications(scanner);

        scanner.close();
        System.out.println("\n=== CONTROL FLOW MASTERY COMPLETE ===");
    }

    /**
     * Section 1: if-else Statements
     * Covers: simple if, if-else, if-else-if ladder, nested if-else
     */
    public static void demonstrateIfElseStatements(Scanner scanner) {
        System.out.println("1. IF-ELSE STATEMENTS");
        System.out.println("=====================");

        // Simple if statement
        System.out.println("Simple if Statement:");
        int number = 10;
        if (number > 0) {
            System.out.println(number + " is positive");
        }

        // if-else statement
        System.out.println("\nif-else Statement:");
        int temperature = 25;
        if (temperature > 30) {
            System.out.println("It's hot outside!");
        } else {
            System.out.println("The temperature is comfortable.");
        }

        // if-else-if ladder
        System.out.println("\nif-else-if Ladder (Grade Calculator):");
        System.out.print("Enter your score (0-100): ");
        int score = scanner.nextInt();

        if (score >= 90) {
            System.out.println("Grade: A - Excellent!");
        } else if (score >= 80) {
            System.out.println("Grade: B - Good job!");
        } else if (score >= 70) {
            System.out.println("Grade: C - Satisfactory");
        } else if (score >= 60) {
            System.out.println("Grade: D - Needs improvement");
        } else {
            System.out.println("Grade: F - Failed");
        }

        // Nested if-else
        System.out.println("\nNested if-else (Age and License Check):");
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        System.out.print("Do you have a driver's license? (true/false): ");
        boolean hasLicense = scanner.nextBoolean();

        if (age >= 18) {
            if (hasLicense) {
                System.out.println("You can drive legally!");
            } else {
                System.out.println("You need to get a driver's license.");
            }
        } else {
            System.out.println("You are too young to drive.");
        }

        // Multiple conditions with logical operators
        System.out.println("\nMultiple Conditions (Loan Eligibility):");
        System.out.print("Enter your annual income: ");
        double income = scanner.nextDouble();
        System.out.print("Enter your credit score: ");
        int creditScore = scanner.nextInt();
        System.out.print("Are you employed? (true/false): ");
        boolean isEmployed = scanner.nextBoolean();

        if (income >= 30000 && creditScore >= 650 && isEmployed) {
            System.out.println("Congratulations! You are eligible for the loan.");
        } else {
            System.out.println("Sorry, you don't meet the loan requirements.");
            if (income < 30000) {
                System.out.println("- Income requirement not met");
            }
            if (creditScore < 650) {
                System.out.println("- Credit score requirement not met");
            }
            if (!isEmployed) {
                System.out.println("- Employment requirement not met");
            }
        }

        System.out.println();
    }

    /**
     * Section 2: switch Statements
     * Covers: basic switch, string switch, multiple cases, default case
     */
    public static void demonstrateSwitchStatements(Scanner scanner) {
        System.out.println("2. SWITCH STATEMENTS");
        System.out.println("====================");

        // Basic switch with integers
        System.out.println("Basic Switch (Day of Week):");
        System.out.print("Enter day number (1-7): ");
        int dayNumber = scanner.nextInt();

        switch (dayNumber) {
            case 1:
                System.out.println("Monday - Start of work week");
                break;
            case 2:
                System.out.println("Tuesday - Second day");
                break;
            case 3:
                System.out.println("Wednesday - Midweek");
                break;
            case 4:
                System.out.println("Thursday - Almost Friday");
                break;
            case 5:
                System.out.println("Friday - TGIF!");
                break;
            case 6:
                System.out.println("Saturday - Weekend!");
                break;
            case 7:
                System.out.println("Sunday - Rest day");
                break;
            default:
                System.out.println("Invalid day number. Please enter 1-7.");
        }

        // Switch with strings (Java 7+)
        System.out.println("\nString Switch (Browser Selection):");
        scanner.nextLine(); // Consume newline
        System.out.print("Enter browser (chrome/firefox/safari/edge): ");
        String browser = scanner.nextLine().toLowerCase();

        switch (browser) {
            case "chrome":
                System.out.println("Launching Google Chrome...");
                break;
            case "firefox":
                System.out.println("Launching Mozilla Firefox...");
                break;
            case "safari":
                System.out.println("Launching Safari...");
                break;
            case "edge":
                System.out.println("Launching Microsoft Edge...");
                break;
            default:
                System.out.println("Unsupported browser. Using default browser.");
        }

        // Switch with multiple cases (fall-through)
        System.out.println("\nMultiple Cases (Season Determination):");
        System.out.print("Enter month number (1-12): ");
        int month = scanner.nextInt();
        String season;

        switch (month) {
            case 12:
            case 1:
            case 2:
                season = "Winter";
                break;
            case 3:
            case 4:
            case 5:
                season = "Spring";
                break;
            case 6:
            case 7:
            case 8:
                season = "Summer";
                break;
            case 9:
            case 10:
            case 11:
                season = "Fall";
                break;
            default:
                season = "Invalid month";
        }
        System.out.println("Month " + month + " is in " + season);

        // Switch with calculations
        System.out.println("\nSwitch with Calculations (Simple Calculator):");
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();
        System.out.print("Enter operation (+, -, *, /): ");
        char operation = scanner.next().charAt(0);

        double result;
        switch (operation) {
            case '+':
                result = num1 + num2;
                System.out.println(num1 + " + " + num2 + " = " + result);
                break;
            case '-':
                result = num1 - num2;
                System.out.println(num1 + " - " + num2 + " = " + result);
                break;
            case '*':
                result = num1 * num2;
                System.out.println(num1 + " * " + num2 + " = " + result);
                break;
            case '/':
                if (num2 != 0) {
                    result = num1 / num2;
                    System.out.println(num1 + " / " + num2 + " = " + result);
                } else {
                    System.out.println("Error: Division by zero!");
                }
                break;
            default:
                System.out.println("Invalid operation!");
        }

        System.out.println();
    }

    /**
     * Section 3: Nested Control Structures
     * Demonstrates complex nested if-else and switch combinations
     */
    public static void demonstrateNestedStructures(Scanner scanner) {
        System.out.println("3. NESTED CONTROL STRUCTURES");
        System.out.println("============================");

        // Nested if-else with user authentication
        System.out.println("User Authentication System:");
        System.out.print("Enter username: ");
        scanner.nextLine(); // Consume newline
        String username = scanner.nextLine();
        System.out.print("Enter password: ");
        String password = scanner.nextLine();

        if (username.equals("admin")) {
            if (password.equals("admin123")) {
                System.out.println("Welcome, Administrator!");
                System.out.print("Select access level (1-3): ");
                int accessLevel = scanner.nextInt();

                switch (accessLevel) {
                    case 1:
                        System.out.println("Basic access granted");
                        break;
                    case 2:
                        System.out.println("Standard access granted");
                        break;
                    case 3:
                        System.out.println("Full access granted");
                        break;
                    default:
                        System.out.println("Invalid access level");
                }
            } else {
                System.out.println("Incorrect password for admin");
            }
        } else if (username.equals("user")) {
            if (password.equals("user123")) {
                System.out.println("Welcome, Regular User!");
                System.out.println("Basic access granted");
            } else {
                System.out.println("Incorrect password for user");
            }
        } else {
            System.out.println("Username not recognized");
        }

        // Complex decision tree
        System.out.println("\nComplex Decision Tree (Travel Eligibility):");
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        System.out.print("Do you have a passport? (true/false): ");
        boolean hasPassport = scanner.nextBoolean();
        System.out.print("Enter your budget ($): ");
        double budget = scanner.nextDouble();
        System.out.print("Are you a student? (true/false): ");
        boolean isStudent = scanner.nextBoolean();

        if (age >= 18) {
            if (hasPassport) {
                if (budget >= 1000) {
                    if (isStudent) {
                        System.out.println("You qualify for student international travel program!");
                    } else {
                        System.out.println("You can travel internationally with full fare.");
                    }
                } else if (budget >= 500) {
                    System.out.println("You can travel domestically or to nearby countries.");
                } else {
                    System.out.println("Consider local travel options.");
                }
            } else {
                System.out.println("You need a passport for international travel.");
                if (budget >= 200) {
                    System.out.println("You can apply for a passport and travel domestically.");
                } else {
                    System.out.println("Focus on local activities for now.");
                }
            }
        } else {
            System.out.println("You must be 18+ for most travel programs.");
            if (age >= 16 && hasPassport && budget >= 300) {
                System.out.println("You may qualify for supervised youth travel.");
            }
        }

        System.out.println();
    }

    /**
     * Section 4: Real-world Applications
     * Practical examples of control flow in real applications
     */
    public static void demonstrateRealWorldApplications(Scanner scanner) {
        System.out.println("4. REAL-WORLD APPLICATIONS");
        System.out.println("==========================");

        // ATM Machine Simulation
        System.out.println("ATM Machine Simulation:");
        System.out.print("Enter your PIN: ");
        int pin = scanner.nextInt();
        System.out.print("Enter withdrawal amount: ");
        double amount = scanner.nextDouble();

        if (pin == 1234) { // Correct PIN
            if (amount <= 1000) { // Daily limit
                if (amount > 0 && amount % 10 == 0) { // Valid amount
                    System.out.println("Withdrawal successful! Please collect $" + amount);
                } else {
                    System.out.println("Invalid amount. Must be positive and multiple of $10.");
                }
            } else {
                System.out.println("Amount exceeds daily withdrawal limit of $1000.");
            }
        } else {
            System.out.println("Incorrect PIN. Transaction cancelled.");
        }

        // Grade Book System
        System.out.println("\nGrade Book System:");
        System.out.print("Enter marks for 3 subjects: ");
        int sub1 = scanner.nextInt();
        int sub2 = scanner.nextInt();
        int sub3 = scanner.nextInt();

        double average = (sub1 + sub2 + sub3) / 3.0;
        String grade;
        String status;

        if (average >= 90) {
            grade = "A";
            status = "Excellent";
        } else if (average >= 80) {
            grade = "B";
            status = "Good";
        } else if (average >= 70) {
            grade = "C";
            status = "Satisfactory";
        } else if (average >= 60) {
            grade = "D";
            status = "Pass";
        } else {
            grade = "F";
            status = "Fail";
        }

        System.out.println("Average: " + String.format("%.2f", average) + "%");
        System.out.println("Grade: " + grade + " (" + status + ")");

        // Traffic Light System
        System.out.println("\nTraffic Light System:");
        System.out.print("Enter light color (red/yellow/green): ");
        scanner.nextLine(); // Consume newline
        String lightColor = scanner.nextLine().toLowerCase();

        switch (lightColor) {
            case "red":
                System.out.println("STOP! Do not proceed.");
                break;
            case "yellow":
                System.out.println("CAUTION! Prepare to stop.");
                break;
            case "green":
                System.out.println("GO! Safe to proceed.");
                break;
            default:
                System.out.println("Invalid light color!");
        }

        // E-commerce Discount Calculator
        System.out.println("\nE-commerce Discount Calculator:");
        System.out.print("Enter purchase amount: $");
        double purchaseAmount = scanner.nextDouble();
        System.out.print("Are you a premium member? (true/false): ");
        boolean isPremium = scanner.nextBoolean();
        System.out.print("Enter coupon code (SAVE10/SAVE20/NONE): ");
        String couponCode = scanner.next().toUpperCase();

        double discount = 0;

        // Base discount for purchase amount
        if (purchaseAmount >= 500) {
            discount = 10;
        } else if (purchaseAmount >= 200) {
            discount = 5;
        }

        // Additional discount for premium members
        if (isPremium) {
            discount += 5;
        }

        // Coupon discount
        switch (couponCode) {
            case "SAVE10":
                discount += 10;
                break;
            case "SAVE20":
                discount += 20;
                break;
            case "NONE":
                break;
            default:
                System.out.println("Invalid coupon code!");
        }

        // Cap discount at 50%
        if (discount > 50) {
            discount = 50;
        }

        double finalAmount = purchaseAmount * (1 - discount / 100);
        System.out.println("Original Amount: $" + purchaseAmount);
        System.out.println("Discount: " + discount + "%");
        System.out.println("Final Amount: $" + String.format("%.2f", finalAmount));
    }
}