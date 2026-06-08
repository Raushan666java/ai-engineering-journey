/**
 * 25 Practice Problems - Day 2
 * Master operators and control flow through hands-on practice
 */

public class Day2PracticeProblems {
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════╗");
        System.out.println("║    DAY 2 - PRACTICE PROBLEMS       ║");
        System.out.println("║    25 Problems to Master           ║");
        System.out.println("╚════════════════════════════════════╝\n");
        
        // Run all problems
        problem01();
        problem02();
        problem03();
        problem04();
        problem05();
        problem06();
        problem07();
        problem08();
        problem09();
        problem10();
        problem11();
        problem12();
        problem13();
        problem14();
        problem15();
        problem16();
        problem17();
        problem18();
        problem19();
        problem20();
        problem21();
        problem22();
        problem23();
        problem24();
        problem25();
        
        System.out.println("\n" + "=".repeat(50));
        System.out.println("🎉 ALL 25 PROBLEMS COMPLETED! 🎉");
        System.out.println("=".repeat(50));
    }
    
    // Problem 1: Find largest of three numbers
    static void problem01() {
        System.out.println("Problem 1: Find Largest of Three Numbers");
        int a = 15, b = 27, c = 19;
        int largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
        System.out.println("Numbers: " + a + ", " + b + ", " + c);
        System.out.println("Largest: " + largest);
        System.out.println();
    }
    
    // Problem 2: Check if year is leap year
    static void problem02() {
        System.out.println("Problem 2: Leap Year Checker");
        int year = 2024;
        boolean isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
        System.out.println(year + " is " + (isLeap ? "a leap year" : "not a leap year"));
        System.out.println();
    }
    
    // Problem 3: Grade calculator with percentage
    static void problem03() {
        System.out.println("Problem 3: Grade Calculator");
        int marks = 87;
        char grade;
        if (marks >= 90) grade = 'A';
        else if (marks >= 80) grade = 'B';
        else if (marks >= 70) grade = 'C';
        else if (marks >= 60) grade = 'D';
        else grade = 'F';
        System.out.println("Marks: " + marks + " → Grade: " + grade);
        System.out.println();
    }
    
    // Problem 4: Check if number is positive, negative, or zero
    static void problem04() {
        System.out.println("Problem 4: Number Classification");
        int num = -5;
        String classification = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
        System.out.println(num + " is " + classification);
        System.out.println();
    }
    
    // Problem 5: Simple interest calculator
    static void problem05() {
        System.out.println("Problem 5: Simple Interest Calculator");
        double principal = 10000, rate = 5.5, time = 2;
        double interest = (principal * rate * time) / 100;
        System.out.printf("Principal: %.2f, Rate: %.2f%%, Time: %.2f years%n", principal, rate, time);
        System.out.printf("Simple Interest: %.2f%n", interest);
        System.out.println();
    }
    
    // Problem 6: Swap two numbers using third variable
    static void problem06() {
        System.out.println("Problem 6: Swap Two Numbers (Using Temp)");
        int a = 10, b = 20;
        System.out.println("Before: a = " + a + ", b = " + b);
        int temp = a;
        a = b;
        b = temp;
        System.out.println("After:  a = " + a + ", b = " + b);
        System.out.println();
    }
    
    // Problem 7: Swap without third variable
    static void problem07() {
        System.out.println("Problem 7: Swap Two Numbers (Without Temp)");
        int a = 15, b = 25;
        System.out.println("Before: a = " + a + ", b = " + b);
        a = a + b;
        b = a - b;
        a = a - b;
        System.out.println("After:  a = " + a + ", b = " + b);
        System.out.println();
    }
    
    // Problem 8: Convert Celsius to Fahrenheit
    static void problem08() {
        System.out.println("Problem 8: Celsius to Fahrenheit");
        double celsius = 25;
        double fahrenheit = (celsius * 9/5) + 32;
        System.out.printf("%.2f°C = %.2f°F%n", celsius, fahrenheit);
        System.out.println();
    }
    
    // Problem 9: Area and perimeter of rectangle
    static void problem09() {
        System.out.println("Problem 9: Rectangle Calculator");
        double length = 10, width = 5;
        double area = length * width;
        double perimeter = 2 * (length + width);
        System.out.printf("Length: %.2f, Width: %.2f%n", length, width);
        System.out.printf("Area: %.2f, Perimeter: %.2f%n", area, perimeter);
        System.out.println();
    }
    
    // Problem 10: Check if number is divisible by both 3 and 5
    static void problem10() {
        System.out.println("Problem 10: Divisibility Check (3 and 5)");
        int num = 30;
        boolean divBy3 = (num % 3 == 0);
        boolean divBy5 = (num % 5 == 0);
        boolean divByBoth = divBy3 && divBy5;
        System.out.println(num + " is divisible by both 3 and 5: " + divByBoth);
        System.out.println();
    }
    
    // Problem 11: Day of week using switch
    static void problem11() {
        System.out.println("Problem 11: Day of Week");
        int day = 3;
        String dayName;
        switch (day) {
            case 1: dayName = "Monday"; break;
            case 2: dayName = "Tuesday"; break;
            case 3: dayName = "Wednesday"; break;
            case 4: dayName = "Thursday"; break;
            case 5: dayName = "Friday"; break;
            case 6: dayName = "Saturday"; break;
            case 7: dayName = "Sunday"; break;
            default: dayName = "Invalid";
        }
        System.out.println("Day " + day + ": " + dayName);
        System.out.println();
    }
    
    // Problem 12: Month name and days using switch
    static void problem12() {
        System.out.println("Problem 12: Month Days Counter");
        int month = 2;
        String monthName;
        int days;
        switch (month) {
            case 1: monthName = "January"; days = 31; break;
            case 2: monthName = "February"; days = 28; break;
            case 3: monthName = "March"; days = 31; break;
            case 4: monthName = "April"; days = 30; break;
            case 5: monthName = "May"; days = 31; break;
            case 6: monthName = "June"; days = 30; break;
            case 7: monthName = "July"; days = 31; break;
            case 8: monthName = "August"; days = 31; break;
            case 9: monthName = "September"; days = 30; break;
            case 10: monthName = "October"; days = 31; break;
            case 11: monthName = "November"; days = 30; break;
            case 12: monthName = "December"; days = 31; break;
            default: monthName = "Invalid"; days = 0;
        }
        System.out.println(monthName + " has " + days + " days");
        System.out.println();
    }
    
    // Problem 13: Vowel or consonant check
    static void problem13() {
        System.out.println("Problem 13: Vowel or Consonant");
        char ch = 'e';
        boolean isVowel = (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
                          ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U');
        System.out.println(ch + " is " + (isVowel ? "a vowel" : "a consonant"));
        System.out.println();
    }
    
    // Problem 14: Character type checker
    static void problem14() {
        System.out.println("Problem 14: Character Type Checker");
        char ch = '7';
        if (ch >= 'a' && ch <= 'z') {
            System.out.println(ch + " is lowercase letter");
        } else if (ch >= 'A' && ch <= 'Z') {
            System.out.println(ch + " is uppercase letter");
        } else if (ch >= '0' && ch <= '9') {
            System.out.println(ch + " is digit");
        } else {
            System.out.println(ch + " is special character");
        }
        System.out.println();
    }
    
    // Problem 15: Triangle validity checker
    static void problem15() {
        System.out.println("Problem 15: Triangle Validity");
        int a = 3, b = 4, c = 5;
        boolean isValid = (a + b > c) && (b + c > a) && (a + c > b);
        System.out.println("Sides: " + a + ", " + b + ", " + c);
        System.out.println("Forms valid triangle: " + isValid);
        System.out.println();
    }
    
    // Problem 16: Quadrant finder
    static void problem16() {
        System.out.println("Problem 16: Quadrant Finder");
        int x = 3, y = -2;
        String quadrant;
        if (x > 0 && y > 0) quadrant = "I";
        else if (x < 0 && y > 0) quadrant = "II";
        else if (x < 0 && y < 0) quadrant = "III";
        else if (x > 0 && y < 0) quadrant = "IV";
        else quadrant = "On axis";
        System.out.println("Point (" + x + ", " + y + ") is in Quadrant " + quadrant);
        System.out.println();
    }
    
    // Problem 17: Electricity bill calculator
    static void problem17() {
        System.out.println("Problem 17: Electricity Bill Calculator");
        int units = 350;
        double bill;
        if (units <= 100) {
            bill = units * 1.5;
        } else if (units <= 300) {
            bill = 100 * 1.5 + (units - 100) * 2.0;
        } else {
            bill = 100 * 1.5 + 200 * 2.0 + (units - 300) * 3.0;
        }
        System.out.printf("Units: %d, Bill: $%.2f%n", units, bill);
        System.out.println();
    }
    
    // Problem 18: Age category classifier
    static void problem18() {
        System.out.println("Problem 18: Age Category");
        int age = 25;
        String category;
        if (age < 13) category = "Child";
        else if (age < 20) category = "Teenager";
        else if (age < 60) category = "Adult";
        else category = "Senior";
        System.out.println("Age " + age + ": " + category);
        System.out.println();
    }
    
    // Problem 19: Number of days lived calculator
    static void problem19() {
        System.out.println("Problem 19: Days Lived Calculator");
        int years = 25, months = 6, days = 15;
        int totalDays = years * 365 + months * 30 + days;
        System.out.printf("%d years, %d months, %d days%n", years, months, days);
        System.out.println("Total days lived (approx): " + totalDays);
        System.out.println();
    }
    
    // Problem 20: Sum of digits
    static void problem20() {
        System.out.println("Problem 20: Sum of Digits");
        int num = 12345;
        int sum = 0, temp = num;
        while (temp > 0) {
            sum += temp % 10;
            temp /= 10;
        }
        System.out.println("Number: " + num);
        System.out.println("Sum of digits: " + sum);
        System.out.println();
    }
    
    // Problem 21: Reverse a number
    static void problem21() {
        System.out.println("Problem 21: Reverse Number");
        int num = 12345;
        int reversed = 0, temp = num;
        while (temp > 0) {
            reversed = reversed * 10 + temp % 10;
            temp /= 10;
        }
        System.out.println("Original: " + num);
        System.out.println("Reversed: " + reversed);
        System.out.println();
    }
    
    // Problem 22: Count even and odd digits
    static void problem22() {
        System.out.println("Problem 22: Count Even/Odd Digits");
        int num = 123456;
        int evenCount = 0, oddCount = 0, temp = num;
        while (temp > 0) {
            int digit = temp % 10;
            if (digit % 2 == 0) evenCount++;
            else oddCount++;
            temp /= 10;
        }
        System.out.println("Number: " + num);
        System.out.println("Even digits: " + evenCount + ", Odd digits: " + oddCount);
        System.out.println();
    }
    
    // Problem 23: Check palindrome number
    static void problem23() {
        System.out.println("Problem 23: Palindrome Checker");
        int num = 12321;
        int reversed = 0, temp = num;
        while (temp > 0) {
            reversed = reversed * 10 + temp % 10;
            temp /= 10;
        }
        boolean isPalindrome = (num == reversed);
        System.out.println(num + " is " + (isPalindrome ? "a palindrome" : "not a palindrome"));
        System.out.println();
    }
    
    // Problem 24: Armstrong number check
    static void problem24() {
        System.out.println("Problem 24: Armstrong Number Checker");
        int num = 153;  // 1³ + 5³ + 3³ = 153
        int sum = 0, temp = num;
        while (temp > 0) {
            int digit = temp % 10;
            sum += digit * digit * digit;
            temp /= 10;
        }
        boolean isArmstrong = (num == sum);
        System.out.println(num + " is " + (isArmstrong ? "an Armstrong number" : "not an Armstrong number"));
        System.out.println();
    }
    
    // Problem 25: Number to words (0-9)
    static void problem25() {
        System.out.println("Problem 25: Number to Words (0-9)");
        int digit = 7;
        String word;
        switch (digit) {
            case 0: word = "Zero"; break;
            case 1: word = "One"; break;
            case 2: word = "Two"; break;
            case 3: word = "Three"; break;
            case 4: word = "Four"; break;
            case 5: word = "Five"; break;
            case 6: word = "Six"; break;
            case 7: word = "Seven"; break;
            case 8: word = "Eight"; break;
            case 9: word = "Nine"; break;
            default: word = "Invalid";
        }
        System.out.println(digit + " in words: " + word);
        System.out.println();
    }
}
