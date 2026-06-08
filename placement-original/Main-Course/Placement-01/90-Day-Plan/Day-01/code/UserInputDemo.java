import java.util.Scanner;

/**
 * File: UserInputDemo.java
 * Description: Takes user input and performs calculations
 * Day: 1 of 90
 */
public class UserInputDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=== User Input Demo ===\n");
        
        // Get user information
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        System.out.print("Enter your height in meters (e.g., 1.75): ");
        double height = scanner.nextDouble();
        
        System.out.print("Are you a student? (true/false): ");
        boolean isStudent = scanner.nextBoolean();
        
        // Display information
        System.out.println("\n=== Your Information ===");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height + "m");
        System.out.println("Student: " + isStudent);
        
        // Calculations
        int currentYear = 2025;
        int birthYear = currentYear - age;
        System.out.println("\nApproximate Birth Year: " + birthYear);
        
        // Check if adult
        boolean isAdult = age >= 18;
        System.out.println("Adult: " + isAdult);
        
        // Calculate height in cm
        double heightInCm = height * 100;
        System.out.println("Height in cm: " + heightInCm + "cm");
        
        // Formatted output
        System.out.println("\n=== Formatted Summary ===");
        System.out.printf("Hello %s! You are %d years old and %.2fm tall.%n", 
                          name, age, height);
        
        if (isStudent) {
            System.out.println("Keep studying hard!");
        } else {
            System.out.println("Lifelong learning is important!");
        }
        
        scanner.close();
    }
}

/*
Sample Run:
=== User Input Demo ===

Enter your name: Raushan Kumar
Enter your age: 22
Enter your height in meters (e.g., 1.75): 1.75
Are you a student? (true/false): true

=== Your Information ===
Name: Raushan Kumar
Age: 22
Height: 1.75m
Student: true

Approximate Birth Year: 2003
Adult: true
Height in cm: 175.0cm

=== Formatted Summary ===
Hello Raushan Kumar! You are 22 years old and 1.75m tall.
Keep studying hard!
*/
