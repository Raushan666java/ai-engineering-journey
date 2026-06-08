/**
 * Day 2: Java Operators & Control Flow
 * File: practice_problems.java
 * Topic: Practice Problems Combining Operators & Control Flow
 * Author: Placement Preparation System
 */

import java.util.Scanner;

public class PracticeProblems {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("=== PRACTICE PROBLEMS: OPERATORS & CONTROL FLOW ===\n");

        // Basic Problems (1-10)
        System.out.println("BASIC PROBLEMS (1-10)");
        System.out.println("====================");

        problem1(scanner);
        problem2(scanner);
        problem3(scanner);
        problem4(scanner);
        problem5(scanner);
        problem6(scanner);
        problem7(scanner);
        problem8(scanner);
        problem9(scanner);
        problem10(scanner);

        // Advanced Problems (11-15)
        System.out.println("\nADVANCED PROBLEMS (11-15)");
        System.out.println("=========================");

        problem11(scanner);
        problem12(scanner);
        problem13(scanner);
        problem14(scanner);
        problem15(scanner);

        scanner.close();
        System.out.println("\n=== ALL PRACTICE PROBLEMS COMPLETED ===");
    }

    // Problem 1: Number Classification
    public static void problem1(Scanner scanner) {
        System.out.println("\nProblem 1: Number Classification");
        System.out.println("Write a program to check if a number is positive, negative, or zero.");
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();

        if (num > 0) {
            System.out.println(num + " is positive");
        } else if (num < 0) {
            System.out.println(num + " is negative");
        } else {
            System.out.println("The number is zero");
        }
    }

    // Problem 2: Even or Odd
    public static void problem2(Scanner scanner) {
        System.out.println("\nProblem 2: Even or Odd");
        System.out.println("Check if a number is even or odd using modulus operator.");
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();

        if (num % 2 == 0) {
            System.out.println(num + " is even");
        } else {
            System.out.println(num + " is odd");
        }
    }

    // Problem 3: Largest of Three Numbers
    public static void problem3(Scanner scanner) {
        System.out.println("\nProblem 3: Largest of Three Numbers");
        System.out.println("Find the largest among three numbers using nested if-else.");
        System.out.print("Enter three numbers: ");
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int c = scanner.nextInt();

        if (a >= b && a >= c) {
            System.out.println(a + " is the largest");
        } else if (b >= a && b >= c) {
            System.out.println(b + " is the largest");
        } else {
            System.out.println(c + " is the largest");
        }
    }

    // Problem 4: Vowel or Consonant
    public static void problem4(Scanner scanner) {
        System.out.println("\nProblem 4: Vowel or Consonant");
        System.out.println("Check if an entered character is a vowel or consonant.");
        System.out.print("Enter a character: ");
        char ch = scanner.next().charAt(0);
        ch = Character.toLowerCase(ch);

        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            System.out.println(ch + " is a vowel");
        } else if (ch >= 'a' && ch <= 'z') {
            System.out.println(ch + " is a consonant");
        } else {
            System.out.println("Invalid input! Please enter an alphabet.");
        }
    }

    // Problem 5: Simple Calculator
    public static void problem5(Scanner scanner) {
        System.out.println("\nProblem 5: Simple Calculator");
        System.out.println("Create a calculator that performs +, -, *, / operations.");
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();
        System.out.print("Enter operator (+, -, *, /): ");
        char operator = scanner.next().charAt(0);

        switch (operator) {
            case '+':
                System.out.println(num1 + " + " + num2 + " = " + (num1 + num2));
                break;
            case '-':
                System.out.println(num1 + " - " + num2 + " = " + (num1 - num2));
                break;
            case '*':
                System.out.println(num1 + " * " + num2 + " = " + (num1 * num2));
                break;
            case '/':
                if (num2 != 0) {
                    System.out.println(num1 + " / " + num2 + " = " + (num1 / num2));
                } else {
                    System.out.println("Error: Division by zero!");
                }
                break;
            default:
                System.out.println("Invalid operator!");
        }
    }

    // Problem 6: Leap Year Checker
    public static void problem6(Scanner scanner) {
        System.out.println("\nProblem 6: Leap Year Checker");
        System.out.println("Check if a year is a leap year.");
        System.out.print("Enter a year: ");
        int year = scanner.nextInt();

        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            System.out.println(year + " is a leap year");
        } else {
            System.out.println(year + " is not a leap year");
        }
    }

    // Problem 7: Grade Calculator
    public static void problem7(Scanner scanner) {
        System.out.println("\nProblem 7: Grade Calculator");
        System.out.println("Convert percentage to grade using switch statement.");
        System.out.print("Enter percentage: ");
        int percentage = scanner.nextInt();

        if (percentage >= 0 && percentage <= 100) {
            int gradePoint = percentage / 10;

            switch (gradePoint) {
                case 10:
                case 9:
                    System.out.println("Grade: A");
                    break;
                case 8:
                    System.out.println("Grade: B");
                    break;
                case 7:
                    System.out.println("Grade: C");
                    break;
                case 6:
                    System.out.println("Grade: D");
                    break;
                default:
                    System.out.println("Grade: F");
            }
        } else {
            System.out.println("Invalid percentage!");
        }
    }

    // Problem 8: Triangle Type Checker
    public static void problem8(Scanner scanner) {
        System.out.println("\nProblem 8: Triangle Type Checker");
        System.out.println("Determine if three sides form equilateral, isosceles, or scalene triangle.");
        System.out.print("Enter three sides: ");
        int side1 = scanner.nextInt();
        int side2 = scanner.nextInt();
        int side3 = scanner.nextInt();

        if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
            if (side1 == side2 && side2 == side3) {
                System.out.println("Equilateral triangle");
            } else if (side1 == side2 || side1 == side3 || side2 == side3) {
                System.out.println("Isosceles triangle");
            } else {
                System.out.println("Scalene triangle");
            }
        } else {
            System.out.println("Invalid triangle sides!");
        }
    }

    // Problem 9: Electricity Bill Calculator
    public static void problem9(Scanner scanner) {
        System.out.println("\nProblem 9: Electricity Bill Calculator");
        System.out.println("Calculate electricity bill based on units consumed.");
        System.out.print("Enter units consumed: ");
        int units = scanner.nextInt();
        double bill = 0;

        if (units <= 100) {
            bill = units * 1.5;
        } else if (units <= 300) {
            bill = 100 * 1.5 + (units - 100) * 2.5;
        } else {
            bill = 100 * 1.5 + 200 * 2.5 + (units - 300) * 4.0;
        }

        System.out.println("Electricity bill: $" + bill);
    }

    // Problem 10: Menu-Driven Program
    public static void problem10(Scanner scanner) {
        System.out.println("\nProblem 10: Menu-Driven Program");
        System.out.println("Create a menu with multiple options using switch.");
        System.out.println("1. Check if number is prime");
        System.out.println("2. Calculate factorial");
        System.out.println("3. Check palindrome");
        System.out.print("Enter your choice (1-3): ");
        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                System.out.print("Enter a number: ");
                int num = scanner.nextInt();
                boolean isPrime = true;
                if (num <= 1) {
                    isPrime = false;
                } else {
                    for (int i = 2; i <= Math.sqrt(num); i++) {
                        if (num % i == 0) {
                            isPrime = false;
                            break;
                        }
                    }
                }
                System.out.println(num + " is " + (isPrime ? "prime" : "not prime"));
                break;

            case 2:
                System.out.print("Enter a number: ");
                int n = scanner.nextInt();
                long factorial = 1;
                for (int i = 1; i <= n; i++) {
                    factorial *= i;
                }
                System.out.println("Factorial of " + n + " is " + factorial);
                break;

            case 3:
                System.out.print("Enter a number: ");
                int palindromeNum = scanner.nextInt();
                int original = palindromeNum;
                int reversed = 0;
                while (palindromeNum != 0) {
                    int digit = palindromeNum % 10;
                    reversed = reversed * 10 + digit;
                    palindromeNum /= 10;
                }
                System.out.println(original + " is " + (original == reversed ? "palindrome" : "not palindrome"));
                break;

            default:
                System.out.println("Invalid choice!");
        }
    }

    // Problem 11: Complex Number Classifier
    public static void problem11(Scanner scanner) {
        System.out.println("\nProblem 11: Complex Number Classifier");
        System.out.println("Classify a number as perfect square, prime, or neither.");
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();

        boolean isPerfectSquare = false;
        boolean isPrime = true;

        // Check perfect square
        int sqrt = (int) Math.sqrt(num);
        if (sqrt * sqrt == num) {
            isPerfectSquare = true;
        }

        // Check prime
        if (num <= 1) {
            isPrime = false;
        } else {
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPerfectSquare && isPrime) {
            System.out.println(num + " is both a perfect square and prime");
        } else if (isPerfectSquare) {
            System.out.println(num + " is a perfect square");
        } else if (isPrime) {
            System.out.println(num + " is prime");
        } else {
            System.out.println(num + " is neither perfect square nor prime");
        }
    }

    // Problem 12: BMI Calculator with Categories
    public static void problem12(Scanner scanner) {
        System.out.println("\nProblem 12: BMI Calculator with Categories");
        System.out.println("Calculate BMI and categorize health status.");
        System.out.print("Enter weight (kg): ");
        double weight = scanner.nextDouble();
        System.out.print("Enter height (m): ");
        double height = scanner.nextDouble();

        double bmi = weight / (height * height);
        String category;

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 25) {
            category = "Normal weight";
        } else if (bmi < 30) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        System.out.println("BMI: " + String.format("%.2f", bmi));
        System.out.println("Category: " + category);
    }

    // Problem 13: Day of Week Calculator
    public static void problem13(Scanner scanner) {
        System.out.println("\nProblem 13: Day of Week Calculator");
        System.out.println("Find day of week for given date (simplified version).");
        System.out.print("Enter day number (1-31): ");
        int day = scanner.nextInt();

        if (day >= 1 && day <= 31) {
            int dayOfWeek = day % 7;

            switch (dayOfWeek) {
                case 1:
                    System.out.println("Monday");
                    break;
                case 2:
                    System.out.println("Tuesday");
                    break;
                case 3:
                    System.out.println("Wednesday");
                    break;
                case 4:
                    System.out.println("Thursday");
                    break;
                case 5:
                    System.out.println("Friday");
                    break;
                case 6:
                    System.out.println("Saturday");
                    break;
                case 0:
                    System.out.println("Sunday");
                    break;
            }
        } else {
            System.out.println("Invalid day!");
        }
    }

    // Problem 14: Tax Calculator
    public static void problem14(Scanner scanner) {
        System.out.println("\nProblem 14: Tax Calculator");
        System.out.println("Calculate income tax based on slabs.");
        System.out.print("Enter annual income: ");
        double income = scanner.nextDouble();
        double tax = 0;

        if (income <= 250000) {
            tax = 0;
        } else if (income <= 500000) {
            tax = (income - 250000) * 0.05;
        } else if (income <= 1000000) {
            tax = 250000 * 0.05 + (income - 500000) * 0.20;
        } else {
            tax = 250000 * 0.05 + 500000 * 0.20 + (income - 1000000) * 0.30;
        }

        System.out.println("Income tax: $" + tax);
        System.out.println("Net income after tax: $" + (income - tax));
    }

    // Problem 15: Complex Menu System
    public static void problem15(Scanner scanner) {
        System.out.println("\nProblem 15: Complex Menu System");
        System.out.println("Multi-level menu system with nested switches.");
        System.out.println("Main Menu:");
        System.out.println("1. Mathematical Operations");
        System.out.println("2. String Operations");
        System.out.println("3. Array Operations");
        System.out.print("Enter your choice: ");
        int mainChoice = scanner.nextInt();

        switch (mainChoice) {
            case 1:
                System.out.println("Mathematical Operations:");
                System.out.println("1. Power calculation");
                System.out.println("2. Square root");
                System.out.println("3. Absolute value");
                System.out.print("Enter operation: ");
                int mathOp = scanner.nextInt();

                switch (mathOp) {
                    case 1:
                        System.out.print("Enter base and exponent: ");
                        double base = scanner.nextDouble();
                        double exp = scanner.nextDouble();
                        System.out.println(base + "^" + exp + " = " + Math.pow(base, exp));
                        break;
                    case 2:
                        System.out.print("Enter number: ");
                        double num = scanner.nextDouble();
                        System.out.println("Square root of " + num + " = " + Math.sqrt(num));
                        break;
                    case 3:
                        System.out.print("Enter number: ");
                        double absNum = scanner.nextDouble();
                        System.out.println("Absolute value of " + absNum + " = " + Math.abs(absNum));
                        break;
                    default:
                        System.out.println("Invalid operation!");
                }
                break;

            case 2:
                System.out.println("String Operations:");
                System.out.println("1. Length");
                System.out.println("2. Uppercase");
                System.out.println("3. Lowercase");
                System.out.print("Enter operation: ");
                int strOp = scanner.nextInt();
                scanner.nextLine(); // consume newline
                System.out.print("Enter string: ");
                String str = scanner.nextLine();

                switch (strOp) {
                    case 1:
                        System.out.println("Length: " + str.length());
                        break;
                    case 2:
                        System.out.println("Uppercase: " + str.toUpperCase());
                        break;
                    case 3:
                        System.out.println("Lowercase: " + str.toLowerCase());
                        break;
                    default:
                        System.out.println("Invalid operation!");
                }
                break;

            case 3:
                System.out.println("Array Operations:");
                System.out.println("1. Sum of elements");
                System.out.println("2. Maximum element");
                System.out.println("3. Minimum element");
                System.out.print("Enter operation: ");
                int arrOp = scanner.nextInt();
                System.out.print("Enter array size: ");
                int size = scanner.nextInt();
                int[] arr = new int[size];
                System.out.print("Enter " + size + " elements: ");
                for (int i = 0; i < size; i++) {
                    arr[i] = scanner.nextInt();
                }

                switch (arrOp) {
                    case 1:
                        int sum = 0;
                        for (int num : arr) sum += num;
                        System.out.println("Sum: " + sum);
                        break;
                    case 2:
                        int max = arr[0];
                        for (int num : arr) if (num > max) max = num;
                        System.out.println("Maximum: " + max);
                        break;
                    case 3:
                        int min = arr[0];
                        for (int num : arr) if (num < min) min = num;
                        System.out.println("Minimum: " + min);
                        break;
                    default:
                        System.out.println("Invalid operation!");
                }
                break;

            default:
                System.out.println("Invalid main menu choice!");
        }
    }
}