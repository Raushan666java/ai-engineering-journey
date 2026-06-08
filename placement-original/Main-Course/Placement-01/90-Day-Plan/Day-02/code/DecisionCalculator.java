/**
 * Day 2: Java Operators & Control Flow
 * File: decision_calculator.java
 * Topic: Decision Making Calculator Project
 * Author: Placement Preparation System
 */

import java.util.Scanner;

public class DecisionCalculator {

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("=== DECISION MAKING CALCULATOR ===");
        System.out.println("Welcome to the Advanced Calculator!");
        System.out.println("===================================\n");

        boolean continueCalculating = true;

        while (continueCalculating) {
            displayMainMenu();
            int choice = getValidChoice(1, 6);

            switch (choice) {
                case 1:
                    performArithmeticOperation();
                    break;
                case 2:
                    performScientificOperation();
                    break;
                case 3:
                    performConversion();
                    break;
                case 4:
                    performFinancialCalculation();
                    break;
                case 5:
                    showCalculationHistory();
                    break;
                case 6:
                    continueCalculating = false;
                    System.out.println("Thank you for using Decision Calculator!");
                    break;
            }

            if (continueCalculating) {
                System.out.print("\nDo you want to perform another calculation? (y/n): ");
                String response = scanner.next().toLowerCase();
                continueCalculating = response.equals("y") || response.equals("yes");
                System.out.println();
            }
        }

        scanner.close();
    }

    /**
     * Displays the main menu options
     */
    private static void displayMainMenu() {
        System.out.println("MAIN MENU:");
        System.out.println("1. Arithmetic Operations (+, -, *, /, %)");
        System.out.println("2. Scientific Operations (sqrt, power, log)");
        System.out.println("3. Unit Conversions");
        System.out.println("4. Financial Calculations");
        System.out.println("5. View Calculation History");
        System.out.println("6. Exit");
        System.out.print("Enter your choice (1-6): ");
    }

    /**
     * Gets a valid choice from user within specified range
     */
    private static int getValidChoice(int min, int max) {
        int choice;
        while (true) {
            try {
                choice = Integer.parseInt(scanner.next());
                if (choice >= min && choice <= max) {
                    return choice;
                } else {
                    System.out.print("Please enter a number between " + min + " and " + max + ": ");
                }
            } catch (NumberFormatException e) {
                System.out.print("Invalid input! Please enter a number: ");
            }
        }
    }

    /**
     * Gets a valid double number from user
     */
    private static double getValidDouble(String prompt) {
        double number;
        while (true) {
            try {
                System.out.print(prompt);
                number = Double.parseDouble(scanner.next());
                return number;
            } catch (NumberFormatException e) {
                System.out.println("Invalid input! Please enter a valid number.");
            }
        }
    }

    /**
     * Performs basic arithmetic operations
     */
    private static void performArithmeticOperation() {
        System.out.println("\n--- ARITHMETIC OPERATIONS ---");
        System.out.println("Available operations:");
        System.out.println("1. Addition (+)");
        System.out.println("2. Subtraction (-)");
        System.out.println("3. Multiplication (*)");
        System.out.println("4. Division (/)");
        System.out.println("5. Modulus (%)");
        System.out.print("Choose operation (1-5): ");

        int operation = getValidChoice(1, 5);
        double num1 = getValidDouble("Enter first number: ");
        double num2 = getValidDouble("Enter second number: ");

        double result;
        String operationSymbol;

        switch (operation) {
            case 1:
                result = num1 + num2;
                operationSymbol = "+";
                break;
            case 2:
                result = num1 - num2;
                operationSymbol = "-";
                break;
            case 3:
                result = num1 * num2;
                operationSymbol = "*";
                break;
            case 4:
                if (num2 == 0) {
                    System.out.println("Error: Division by zero is not allowed!");
                    return;
                }
                result = num1 / num2;
                operationSymbol = "/";
                break;
            case 5:
                if (num2 == 0) {
                    System.out.println("Error: Modulus by zero is not allowed!");
                    return;
                }
                result = num1 % num2;
                operationSymbol = "%";
                break;
            default:
                System.out.println("Invalid operation!");
                return;
        }

        System.out.println("Result: " + num1 + " " + operationSymbol + " " + num2 + " = " + result);

        // Additional analysis for division
        if (operation == 4 && num2 != 0) {
            if (result == (int) result) {
                System.out.println("Note: This is an exact division (integer result)");
            } else {
                System.out.println("Note: This division produces a decimal result");
            }
        }
    }

    /**
     * Performs scientific operations
     */
    private static void performScientificOperation() {
        System.out.println("\n--- SCIENTIFIC OPERATIONS ---");
        System.out.println("Available operations:");
        System.out.println("1. Square Root (√)");
        System.out.println("2. Power (x^y)");
        System.out.println("3. Natural Logarithm (ln)");
        System.out.println("4. Base-10 Logarithm (log10)");
        System.out.println("5. Exponential (e^x)");
        System.out.print("Choose operation (1-5): ");

        int operation = getValidChoice(1, 5);

        switch (operation) {
            case 1:
                double num = getValidDouble("Enter a non-negative number: ");
                if (num < 0) {
                    System.out.println("Error: Square root of negative number is not real!");
                    return;
                }
                double sqrtResult = Math.sqrt(num);
                System.out.println("√" + num + " = " + sqrtResult);
                break;

            case 2:
                double base = getValidDouble("Enter base: ");
                double exponent = getValidDouble("Enter exponent: ");
                double powerResult = Math.pow(base, exponent);
                System.out.println(base + "^" + exponent + " = " + powerResult);
                break;

            case 3:
                double lnNum = getValidDouble("Enter a positive number: ");
                if (lnNum <= 0) {
                    System.out.println("Error: Natural logarithm is only defined for positive numbers!");
                    return;
                }
                double lnResult = Math.log(lnNum);
                System.out.println("ln(" + lnNum + ") = " + lnResult);
                break;

            case 4:
                double log10Num = getValidDouble("Enter a positive number: ");
                if (log10Num <= 0) {
                    System.out.println("Error: Logarithm is only defined for positive numbers!");
                    return;
                }
                double log10Result = Math.log10(log10Num);
                System.out.println("log10(" + log10Num + ") = " + log10Result);
                break;

            case 5:
                double expNum = getValidDouble("Enter exponent: ");
                double expResult = Math.exp(expNum);
                System.out.println("e^" + expNum + " = " + expResult);
                break;
        }
    }

    /**
     * Performs unit conversions
     */
    private static void performConversion() {
        System.out.println("\n--- UNIT CONVERSIONS ---");
        System.out.println("Available conversions:");
        System.out.println("1. Temperature (Celsius ↔ Fahrenheit)");
        System.out.println("2. Length (Meters ↔ Feet)");
        System.out.println("3. Weight (Kilograms ↔ Pounds)");
        System.out.println("4. Currency (USD ↔ EUR) - Approximate rates");
        System.out.print("Choose conversion type (1-4): ");

        int conversionType = getValidChoice(1, 4);

        switch (conversionType) {
            case 1:
                performTemperatureConversion();
                break;
            case 2:
                performLengthConversion();
                break;
            case 3:
                performWeightConversion();
                break;
            case 4:
                performCurrencyConversion();
                break;
        }
    }

    /**
     * Temperature conversion submenu
     */
    private static void performTemperatureConversion() {
        System.out.println("\nTemperature Conversion:");
        System.out.println("1. Celsius to Fahrenheit");
        System.out.println("2. Fahrenheit to Celsius");
        System.out.print("Choose conversion: ");

        int choice = getValidChoice(1, 2);
        double temp = getValidDouble("Enter temperature: ");
        double result;

        if (choice == 1) {
            result = (temp * 9/5) + 32;
            System.out.println(temp + "°C = " + String.format("%.2f", result) + "°F");
        } else {
            result = (temp - 32) * 5/9;
            System.out.println(temp + "°F = " + String.format("%.2f", result) + "°C");
        }
    }

    /**
     * Length conversion submenu
     */
    private static void performLengthConversion() {
        System.out.println("\nLength Conversion:");
        System.out.println("1. Meters to Feet");
        System.out.println("2. Feet to Meters");
        System.out.print("Choose conversion: ");

        int choice = getValidChoice(1, 2);
        double length = getValidDouble("Enter length: ");
        double result;

        if (choice == 1) {
            result = length * 3.28084;
            System.out.println(length + " meters = " + String.format("%.2f", result) + " feet");
        } else {
            result = length / 3.28084;
            System.out.println(length + " feet = " + String.format("%.2f", result) + " meters");
        }
    }

    /**
     * Weight conversion submenu
     */
    private static void performWeightConversion() {
        System.out.println("\nWeight Conversion:");
        System.out.println("1. Kilograms to Pounds");
        System.out.println("2. Pounds to Kilograms");
        System.out.print("Choose conversion: ");

        int choice = getValidChoice(1, 2);
        double weight = getValidDouble("Enter weight: ");
        double result;

        if (choice == 1) {
            result = weight * 2.20462;
            System.out.println(weight + " kg = " + String.format("%.2f", result) + " lbs");
        } else {
            result = weight / 2.20462;
            System.out.println(weight + " lbs = " + String.format("%.2f", result) + " kg");
        }
    }

    /**
     * Currency conversion submenu
     */
    private static void performCurrencyConversion() {
        System.out.println("\nCurrency Conversion (Approximate rates):");
        System.out.println("1. USD to EUR");
        System.out.println("2. EUR to USD");
        System.out.print("Choose conversion: ");

        int choice = getValidChoice(1, 2);
        double amount = getValidDouble("Enter amount: ");
        double result;
        final double USD_TO_EUR_RATE = 0.85; // Approximate rate

        if (choice == 1) {
            result = amount * USD_TO_EUR_RATE;
            System.out.println("$" + String.format("%.2f", amount) + " USD = €" + String.format("%.2f", result) + " EUR");
        } else {
            result = amount / USD_TO_EUR_RATE;
            System.out.println("€" + String.format("%.2f", amount) + " EUR = $" + String.format("%.2f", result) + " USD");
        }
        System.out.println("Note: Exchange rates fluctuate. This is an approximation.");
    }

    /**
     * Performs financial calculations
     */
    private static void performFinancialCalculation() {
        System.out.println("\n--- FINANCIAL CALCULATIONS ---");
        System.out.println("Available calculations:");
        System.out.println("1. Simple Interest");
        System.out.println("2. Compound Interest");
        System.out.println("3. Loan EMI Calculator");
        System.out.println("4. Percentage Calculator");
        System.out.print("Choose calculation (1-4): ");

        int calculationType = getValidChoice(1, 4);

        switch (calculationType) {
            case 1:
                calculateSimpleInterest();
                break;
            case 2:
                calculateCompoundInterest();
                break;
            case 3:
                calculateLoanEMI();
                break;
            case 4:
                calculatePercentage();
                break;
        }
    }

    /**
     * Calculates simple interest
     */
    private static void calculateSimpleInterest() {
        System.out.println("\nSimple Interest Calculator:");
        double principal = getValidDouble("Enter principal amount: ");
        double rate = getValidDouble("Enter annual interest rate (%): ");
        double time = getValidDouble("Enter time period (years): ");

        double interest = (principal * rate * time) / 100;
        double totalAmount = principal + interest;

        System.out.println("Principal: $" + principal);
        System.out.println("Interest Rate: " + rate + "% per year");
        System.out.println("Time Period: " + time + " years");
        System.out.println("Simple Interest: $" + String.format("%.2f", interest));
        System.out.println("Total Amount: $" + String.format("%.2f", totalAmount));
    }

    /**
     * Calculates compound interest
     */
    private static void calculateCompoundInterest() {
        System.out.println("\nCompound Interest Calculator:");
        double principal = getValidDouble("Enter principal amount: ");
        double rate = getValidDouble("Enter annual interest rate (%): ");
        double time = getValidDouble("Enter time period (years): ");
        double compoundingFrequency = getValidDouble("Enter compounding frequency per year: ");

        double amount = principal * Math.pow(1 + (rate / 100) / compoundingFrequency, compoundingFrequency * time);
        double interest = amount - principal;

        System.out.println("Principal: $" + principal);
        System.out.println("Interest Rate: " + rate + "% per year");
        System.out.println("Time Period: " + time + " years");
        System.out.println("Compounding Frequency: " + compoundingFrequency + " times per year");
        System.out.println("Compound Interest: $" + String.format("%.2f", interest));
        System.out.println("Total Amount: $" + String.format("%.2f", amount));
    }

    /**
     * Calculates loan EMI
     */
    private static void calculateLoanEMI() {
        System.out.println("\nLoan EMI Calculator:");
        double principal = getValidDouble("Enter loan amount: ");
        double annualRate = getValidDouble("Enter annual interest rate (%): ");
        double tenureYears = getValidDouble("Enter loan tenure (years): ");

        double monthlyRate = annualRate / (12 * 100);
        double tenureMonths = tenureYears * 12;

        double emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) /
                    (Math.pow(1 + monthlyRate, tenureMonths) - 1);

        double totalAmount = emi * tenureMonths;
        double totalInterest = totalAmount - principal;

        System.out.println("Loan Amount: $" + principal);
        System.out.println("Annual Interest Rate: " + annualRate + "%");
        System.out.println("Loan Tenure: " + tenureYears + " years (" + tenureMonths + " months)");
        System.out.println("Monthly EMI: $" + String.format("%.2f", emi));
        System.out.println("Total Interest: $" + String.format("%.2f", totalInterest));
        System.out.println("Total Amount Payable: $" + String.format("%.2f", totalAmount));
    }

    /**
     * Calculates percentages
     */
    private static void calculatePercentage() {
        System.out.println("\nPercentage Calculator:");
        System.out.println("1. Find percentage of a number");
        System.out.println("2. Find what percentage one number is of another");
        System.out.println("3. Find number when percentage is known");
        System.out.print("Choose calculation type: ");

        int type = getValidChoice(1, 3);

        switch (type) {
            case 1:
                double number = getValidDouble("Enter the number: ");
                double percentage = getValidDouble("Enter the percentage: ");
                double result = (number * percentage) / 100;
                System.out.println(percentage + "% of " + number + " = " + result);
                break;

            case 2:
                double part = getValidDouble("Enter the part: ");
                double whole = getValidDouble("Enter the whole: ");
                double percent = (part / whole) * 100;
                System.out.println(part + " is " + String.format("%.2f", percent) + "% of " + whole);
                break;

            case 3:
                double knownPercent = getValidDouble("Enter the percentage: ");
                double knownResult = getValidDouble("Enter the result: ");
                double originalNumber = (knownResult * 100) / knownPercent;
                System.out.println(knownResult + " is " + knownPercent + "% of " + originalNumber);
                break;
        }
    }

    /**
     * Shows calculation history (placeholder for future enhancement)
     */
    private static void showCalculationHistory() {
        System.out.println("\n--- CALCULATION HISTORY ---");
        System.out.println("History feature coming soon!");
        System.out.println("This version doesn't store calculation history.");
        System.out.println("Consider implementing a data structure to store past calculations.");
    }
}