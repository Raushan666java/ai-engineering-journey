/**
 * Day 8: OOP Practice Problems
 * 
 * Problems:
 * 1. Employee Hierarchy with inheritance
 * 2. Banking System with polymorphism
 * 3. Shape Calculator with abstraction
 * 4. Payment Processor with interfaces
 * 5. Vehicle Rental System with OOP
 * 6. Animal Sounds with polymorphism
 */

import java.util.*;

// ========== Problem 1: Employee Hierarchy ==========

class Employee1 {
    protected String name;
    protected int id;
    protected double baseSalary;
    
    public Employee1(String name, int id, double baseSalary) {
        this.name = name;
        this.id = id;
        this.baseSalary = baseSalary;
    }
    
    public double calculateSalary() {
        return baseSalary;
    }
    
    public void displayInfo() {
        System.out.println("ID: " + id + ", Name: " + name + 
                         ", Salary: $" + calculateSalary());
    }
}

class Manager extends Employee1 {
    private double bonus;
    private int teamSize;
    
    public Manager(String name, int id, double baseSalary, double bonus, int teamSize) {
        super(name, id, baseSalary);
        this.bonus = bonus;
        this.teamSize = teamSize;
    }
    
    @Override
    public double calculateSalary() {
        return baseSalary + bonus + (teamSize * 100); // $100 per team member
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Team Size: " + teamSize + ", Bonus: $" + bonus);
    }
}

class Director extends Manager {
    private double stockOptions;
    
    public Director(String name, int id, double baseSalary, double bonus, 
                   int teamSize, double stockOptions) {
        super(name, id, baseSalary, bonus, teamSize);
        this.stockOptions = stockOptions;
    }
    
    @Override
    public double calculateSalary() {
        return super.calculateSalary() + stockOptions;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Stock Options: $" + stockOptions);
    }
}

// ========== Problem 2: Banking System ==========

abstract class Account {
    protected String accountNumber;
    protected String holderName;
    protected double balance;
    
    public Account(String accountNumber, String holderName, double initialBalance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = initialBalance;
    }
    
    public abstract void deposit(double amount);
    public abstract boolean withdraw(double amount);
    public abstract double calculateInterest();
    
    public void displayBalance() {
        System.out.println("Account: " + accountNumber + ", Balance: $" + 
                         String.format("%.2f", balance));
    }
    
    public double getBalance() { return balance; }
}

class SavingsAccount extends Account {
    private double interestRate;
    private int withdrawalLimit;
    private int withdrawalCount;
    
    public SavingsAccount(String accountNumber, String holderName, 
                         double initialBalance, double interestRate) {
        super(accountNumber, holderName, initialBalance);
        this.interestRate = interestRate;
        this.withdrawalLimit = 3;
        this.withdrawalCount = 0;
    }
    
    @Override
    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited $" + amount + " to savings account");
    }
    
    @Override
    public boolean withdraw(double amount) {
        if (withdrawalCount >= withdrawalLimit) {
            System.out.println("Withdrawal limit reached!");
            return false;
        }
        if (balance >= amount) {
            balance -= amount;
            withdrawalCount++;
            System.out.println("Withdrew $" + amount + " from savings account");
            return true;
        }
        System.out.println("Insufficient balance!");
        return false;
    }
    
    @Override
    public double calculateInterest() {
        return balance * interestRate / 100;
    }
    
    public void resetWithdrawalCount() {
        withdrawalCount = 0;
    }
}

class CheckingAccount extends Account {
    private double overdraftLimit;
    
    public CheckingAccount(String accountNumber, String holderName, 
                          double initialBalance, double overdraftLimit) {
        super(accountNumber, holderName, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    
    @Override
    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited $" + amount + " to checking account");
    }
    
    @Override
    public boolean withdraw(double amount) {
        if (balance + overdraftLimit >= amount) {
            balance -= amount;
            System.out.println("Withdrew $" + amount + " from checking account");
            return true;
        }
        System.out.println("Exceeds overdraft limit!");
        return false;
    }
    
    @Override
    public double calculateInterest() {
        return 0; // No interest on checking account
    }
}

// ========== Problem 3: Shape Calculator ==========

abstract class Shape3 {
    public abstract double calculateArea();
    public abstract double calculatePerimeter();
    
    public void printDetails() {
        System.out.println(getClass().getSimpleName() + ":");
        System.out.println("  Area: " + String.format("%.2f", calculateArea()));
        System.out.println("  Perimeter: " + String.format("%.2f", calculatePerimeter()));
    }
}

class Circle3 extends Shape3 {
    private double radius;
    
    public Circle3(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
}

class Rectangle3 extends Shape3 {
    private double length, width;
    
    public Rectangle3(double length, double width) {
        this.length = length;
        this.width = width;
    }
    
    @Override
    public double calculateArea() {
        return length * width;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
}

class Triangle3 extends Shape3 {
    private double a, b, c;
    
    public Triangle3(double a, double b, double c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    
    @Override
    public double calculateArea() {
        double s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
    
    @Override
    public double calculatePerimeter() {
        return a + b + c;
    }
}

// ========== Problem 4: Payment Processor ==========

interface PaymentMethod {
    boolean processPayment(double amount);
    String getPaymentType();
}

interface Refundable {
    boolean refund(double amount);
}

class CreditCardPayment implements PaymentMethod, Refundable {
    private String cardNumber;
    private double limit;
    private double used;
    
    public CreditCardPayment(String cardNumber, double limit) {
        this.cardNumber = cardNumber;
        this.limit = limit;
        this.used = 0;
    }
    
    @Override
    public boolean processPayment(double amount) {
        if (used + amount <= limit) {
            used += amount;
            System.out.println("Credit card payment of $" + amount + " processed");
            return true;
        }
        System.out.println("Credit limit exceeded!");
        return false;
    }
    
    @Override
    public boolean refund(double amount) {
        used -= amount;
        System.out.println("Refunded $" + amount + " to credit card");
        return true;
    }
    
    @Override
    public String getPaymentType() {
        return "Credit Card";
    }
}

class DebitCardPayment implements PaymentMethod, Refundable {
    private String accountNumber;
    private double balance;
    
    public DebitCardPayment(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    
    @Override
    public boolean processPayment(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Debit card payment of $" + amount + " processed");
            return true;
        }
        System.out.println("Insufficient funds!");
        return false;
    }
    
    @Override
    public boolean refund(double amount) {
        balance += amount;
        System.out.println("Refunded $" + amount + " to debit card");
        return true;
    }
    
    @Override
    public String getPaymentType() {
        return "Debit Card";
    }
}

class CashPayment implements PaymentMethod {
    @Override
    public boolean processPayment(double amount) {
        System.out.println("Cash payment of $" + amount + " received");
        return true;
    }
    
    @Override
    public String getPaymentType() {
        return "Cash";
    }
}

// ========== Problem 5: Vehicle Rental System ==========

abstract class RentalVehicle {
    protected String vehicleId;
    protected String model;
    protected double dailyRate;
    protected boolean isRented;
    
    public RentalVehicle(String vehicleId, String model, double dailyRate) {
        this.vehicleId = vehicleId;
        this.model = model;
        this.dailyRate = dailyRate;
        this.isRented = false;
    }
    
    public abstract double calculateRentalCost(int days);
    
    public boolean rent() {
        if (!isRented) {
            isRented = true;
            System.out.println(model + " rented successfully");
            return true;
        }
        System.out.println(model + " is already rented");
        return false;
    }
    
    public void returnVehicle() {
        isRented = false;
        System.out.println(model + " returned successfully");
    }
}

class CarRental extends RentalVehicle {
    private boolean hasInsurance;
    
    public CarRental(String vehicleId, String model, double dailyRate, boolean hasInsurance) {
        super(vehicleId, model, dailyRate);
        this.hasInsurance = hasInsurance;
    }
    
    @Override
    public double calculateRentalCost(int days) {
        double cost = dailyRate * days;
        if (hasInsurance) {
            cost += 10 * days; // $10 per day for insurance
        }
        return cost;
    }
}

class BikeRental extends RentalVehicle {
    private String bikeType; // Mountain, Road, Hybrid
    
    public BikeRental(String vehicleId, String model, double dailyRate, String bikeType) {
        super(vehicleId, model, dailyRate);
        this.bikeType = bikeType;
    }
    
    @Override
    public double calculateRentalCost(int days) {
        double cost = dailyRate * days;
        if (days > 7) {
            cost *= 0.9; // 10% discount for weekly rentals
        }
        return cost;
    }
}

// ========== Problem 6: Animal Sounds ==========

abstract class Animal6 {
    protected String name;
    protected String species;
    
    public Animal6(String name, String species) {
        this.name = name;
        this.species = species;
    }
    
    public abstract void makeSound();
    public abstract void move();
    
    public void eat() {
        System.out.println(name + " is eating");
    }
}

class Dog6 extends Animal6 {
    public Dog6(String name) {
        super(name, "Dog");
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Woof! Woof!");
    }
    
    @Override
    public void move() {
        System.out.println(name + " runs quickly");
    }
}

class Cat6 extends Animal6 {
    public Cat6(String name) {
        super(name, "Cat");
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Meow!");
    }
    
    @Override
    public void move() {
        System.out.println(name + " walks gracefully");
    }
}

class Cow extends Animal6 {
    public Cow(String name) {
        super(name, "Cow");
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Moo!");
    }
    
    @Override
    public void move() {
        System.out.println(name + " walks slowly");
    }
}

// ========== Main Class ==========

public class practice_problems {
    public static void main(String[] args) {
        System.out.println("=== OOP Practice Problems ===\n");
        
        // Problem 1: Employee Hierarchy
        System.out.println("Problem 1: Employee Hierarchy");
        System.out.println("------------------------------");
        Employee1 emp = new Employee1("John", 101, 50000);
        Manager mgr = new Manager("Alice", 102, 70000, 10000, 5);
        Director dir = new Director("Bob", 103, 100000, 20000, 15, 50000);
        
        emp.displayInfo();
        System.out.println();
        mgr.displayInfo();
        System.out.println();
        dir.displayInfo();
        System.out.println();
        
        // Problem 2: Banking System
        System.out.println("Problem 2: Banking System");
        System.out.println("-------------------------");
        SavingsAccount savings = new SavingsAccount("SA001", "Alice", 5000, 4.5);
        CheckingAccount checking = new CheckingAccount("CA001", "Bob", 2000, 500);
        
        savings.deposit(1000);
        savings.withdraw(500);
        savings.displayBalance();
        System.out.println("Interest: $" + String.format("%.2f", savings.calculateInterest()));
        
        checking.deposit(500);
        checking.withdraw(2800); // Using overdraft
        checking.displayBalance();
        System.out.println();
        
        // Problem 3: Shape Calculator
        System.out.println("Problem 3: Shape Calculator");
        System.out.println("---------------------------");
        Shape3[] shapes = {
            new Circle3(5),
            new Rectangle3(4, 6),
            new Triangle3(3, 4, 5)
        };
        
        for (Shape3 shape : shapes) {
            shape.printDetails();
        }
        System.out.println();
        
        // Problem 4: Payment Processor
        System.out.println("Problem 4: Payment Processor");
        System.out.println("----------------------------");
        PaymentMethod[] payments = {
            new CreditCardPayment("1234-5678-9012", 5000),
            new DebitCardPayment("ACC123456", 3000),
            new CashPayment()
        };
        
        for (PaymentMethod payment : payments) {
            System.out.println("Processing " + payment.getPaymentType());
            payment.processPayment(500);
        }
        
        // Test refund
        Refundable refundable = (Refundable) payments[0];
        refundable.refund(100);
        System.out.println();
        
        // Problem 5: Vehicle Rental System
        System.out.println("Problem 5: Vehicle Rental System");
        System.out.println("---------------------------------");
        CarRental car = new CarRental("CAR001", "Toyota Camry", 50, true);
        BikeRental bike = new BikeRental("BIKE001", "Mountain Bike", 20, "Mountain");
        
        car.rent();
        System.out.println("3-day car rental cost: $" + car.calculateRentalCost(3));
        car.returnVehicle();
        
        bike.rent();
        System.out.println("10-day bike rental cost: $" + bike.calculateRentalCost(10));
        bike.returnVehicle();
        System.out.println();
        
        // Problem 6: Animal Sounds
        System.out.println("Problem 6: Animal Sounds");
        System.out.println("------------------------");
        Animal6[] animals = {
            new Dog6("Buddy"),
            new Cat6("Whiskers"),
            new Cow("Bessie")
        };
        
        for (Animal6 animal : animals) {
            animal.makeSound();
            animal.move();
            animal.eat();
            System.out.println();
        }
        
        System.out.println("=== All Problems Complete ===");
    }
}

/**
 * Practice Problems Summary:
 * 
 * Problem 1: Employee Hierarchy
 * - Demonstrates inheritance (Employee → Manager → Director)
 * - Method overriding (calculateSalary, displayInfo)
 * - Constructor chaining with super()
 * 
 * Problem 2: Banking System
 * - Abstract class Account with concrete implementations
 * - Polymorphism (SavingsAccount, CheckingAccount)
 * - Business logic in overridden methods
 * 
 * Problem 3: Shape Calculator
 * - Abstract Shape class
 * - Polymorphic array of shapes
 * - Template method (printDetails)
 * 
 * Problem 4: Payment Processor
 * - Multiple interface implementation
 * - PaymentMethod and Refundable interfaces
 * - Polymorphic payment processing
 * 
 * Problem 5: Vehicle Rental System
 * - Abstract RentalVehicle class
 * - Different rental cost calculations
 * - State management (isRented)
 * 
 * Problem 6: Animal Sounds
 * - Classic polymorphism example
 * - Abstract methods (makeSound, move)
 * - Concrete method (eat) inherited by all
 * 
 * Key OOP Concepts Applied:
 * ✓ Inheritance
 * ✓ Polymorphism
 * ✓ Abstraction
 * ✓ Encapsulation
 * ✓ Method Overriding
 * ✓ Abstract Classes
 * ✓ Interfaces
 * ✓ Multiple Interface Implementation
 * ✓ Constructor Chaining
 * ✓ Access Modifiers
 */
