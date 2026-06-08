/**
 * DAY 6: CLASSES, OBJECTS & CONSTRUCTORS - PRACTICE PROBLEMS
 * 30 Comprehensive Problems with Complete Solutions
 * 
 * Topics Covered:
 * - Class creation and object basics (Problems 1-5)
 * - Constructors and initialization (Problems 6-10)
 * - Instance methods and behaviors (Problems 11-15)
 * - Object interaction (Problems 16-20)
 * - Real-world OOP modeling (Problems 21-25)
 * - Advanced OOP concepts (Problems 26-30)
 */

public class Day6PracticeProblems {
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════════════╗");
        System.out.println("║   DAY 6: CLASSES & OBJECTS - 30 PRACTICE PROBLEMS         ║");
        System.out.println("╚═══════════════════════════════════════════════════════════╝\n");
        
        // Run all problem sections
        runClassBasicsProblems();
        runConstructorProblems();
        runObjectInteractionProblems();
        runRealWorldProblems();
    }
    
    static void runClassBasicsProblems() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 1: CLASS BASICS & OBJECT CREATION (Problems 1-10)");
        System.out.println("=".repeat(70) + "\n");
        
        // Problem 1: Create a simple Person class
        System.out.println("Problem 1: Person Class");
        PersonProblem1 p1 = new PersonProblem1();
        p1.name = "Alice";
        p1.age = 25;
        p1.displayInfo();
        
        // Problem 2: Dog class with properties
        System.out.println("\nProblem 2: Dog Class");
        Dog dog = new Dog();
        dog.name = "Buddy";
        dog.breed = "Golden Retriever";
        dog.age = 3;
        dog.bark();
        dog.displayInfo();
        
        // Problem 3: Circle with area calculation
        System.out.println("\nProblem 3: Circle Class");
        Circle circle = new Circle();
        circle.radius = 5.0;
        System.out.println("Area: " + circle.calculateArea());
        System.out.println("Circumference: " + circle.calculateCircumference());
        
        // Problem 4: Counter class
        System.out.println("\nProblem 4: Counter Class");
        Counter counter = new Counter();
        counter.increment();
        counter.increment();
        counter.increment();
        System.out.println("Count: " + counter.getCount());
        counter.decrement();
        System.out.println("Count: " + counter.getCount());
        counter.reset();
        System.out.println("After reset: " + counter.getCount());
        
        // Problem 5: Temperature converter
        System.out.println("\nProblem 5: Temperature Class");
        Temperature temp = new Temperature();
        temp.celsius = 25.0;
        System.out.println("25°C = " + temp.toFahrenheit() + "°F");
        System.out.println("25°C = " + temp.toKelvin() + "K");
    }
    
    static void runConstructorProblems() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 2: CONSTRUCTORS (Problems 6-15)");
        System.out.println("=".repeat(70) + "\n");
        
        // Problem 6: Constructor with parameters
        System.out.println("Problem 6: Book with Constructor");
        BookProblem6 book = new BookProblem6("1984", "George Orwell", 328);
        book.displayInfo();
        
        // Problem 7: Constructor overloading
        System.out.println("\nProblem 7: Student with Multiple Constructors");
        StudentProblem7 s1 = new StudentProblem7("Alice");
        StudentProblem7 s2 = new StudentProblem7("Bob", 101);
        StudentProblem7 s3 = new StudentProblem7("Charlie", 102, 'A');
        s1.displayInfo();
        s2.displayInfo();
        s3.displayInfo();
        
        // Problem 8: Default values in constructor
        System.out.println("\nProblem 8: Car with Default Values");
        CarProblem8 car1 = new CarProblem8();
        CarProblem8 car2 = new CarProblem8("Toyota", "Camry");
        car1.displayInfo();
        car2.displayInfo();
        
        // Problem 9: Copy constructor
        System.out.println("\nProblem 9: Point Copy Constructor");
        PointProblem9 original = new PointProblem9(10, 20);
        PointProblem9 copy = new PointProblem9(original);
        System.out.println("Original: (" + original.x + ", " + original.y + ")");
        System.out.println("Copy: (" + copy.x + ", " + copy.y + ")");
        copy.x = 100;
        System.out.println("After modifying copy:");
        System.out.println("Original: (" + original.x + ", " + original.y + ")");
        System.out.println("Copy: (" + copy.x + ", " + copy.y + ")");
        
        // Problem 10: Constructor chaining
        System.out.println("\nProblem 10: Rectangle with Constructor Chaining");
        RectangleProblem10 r1 = new RectangleProblem10();
        RectangleProblem10 r2 = new RectangleProblem10(5);
        RectangleProblem10 r3 = new RectangleProblem10(10, 20);
        r1.displayInfo();
        r2.displayInfo();
        r3.displayInfo();
    }
    
    static void runObjectInteractionProblems() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 3: OBJECT INTERACTION (Problems 16-20)");
        System.out.println("=".repeat(70) + "\n");
        
        // Problem 16: BankAccount operations
        System.out.println("Problem 16: BankAccount Operations");
        BankAccountProblem16 account = new BankAccountProblem16("ACC001", "John Doe", 1000.0);
        account.displayInfo();
        account.deposit(500);
        account.withdraw(200);
        account.displayInfo();
        account.withdraw(2000);  // Insufficient funds
        
        // Problem 17: Multiple objects interaction
        System.out.println("\nProblem 17: Multiple Students");
        StudentProblem17 stud1 = new StudentProblem17("Alice", 85);
        StudentProblem17 stud2 = new StudentProblem17("Bob", 92);
        StudentProblem17 stud3 = new StudentProblem17("Charlie", 78);
        
        stud1.displayInfo();
        stud2.displayInfo();
        stud3.displayInfo();
        
        // Problem 18: Object comparison
        System.out.println("\nProblem 18: Employee Comparison");
        EmployeeProblem18 emp1 = new EmployeeProblem18("E001", "Alice", 75000);
        EmployeeProblem18 emp2 = new EmployeeProblem18("E002", "Bob", 80000);
        
        if (emp1.hasHigherSalaryThan(emp2)) {
            System.out.println(emp1.name + " has higher salary");
        } else {
            System.out.println(emp2.name + " has higher salary");
        }
        
        // Problem 19: Calculator class
        System.out.println("\nProblem 19: Calculator");
        CalculatorProblem19 calc = new CalculatorProblem19();
        System.out.println("5 + 3 = " + calc.add(5, 3));
        System.out.println("5 - 3 = " + calc.subtract(5, 3));
        System.out.println("5 * 3 = " + calc.multiply(5, 3));
        System.out.println("6 / 3 = " + calc.divide(6, 3));
        
        // Problem 20: Time class
        System.out.println("\nProblem 20: Time Class");
        TimeProblem20 time = new TimeProblem20(14, 30, 45);
        time.displayTime();
        time.addSeconds(30);
        time.displayTime();
        time.addMinutes(35);
        time.displayTime();
    }
    
    static void runRealWorldProblems() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 4: REAL-WORLD APPLICATIONS (Problems 21-30)");
        System.out.println("=".repeat(70) + "\n");
        
        // Problem 21: Shopping cart
        System.out.println("Problem 21: Shopping Cart");
        ShoppingCartProblem21 cart = new ShoppingCartProblem21();
        cart.addItem("Laptop", 999.99);
        cart.addItem("Mouse", 29.99);
        cart.addItem("Keyboard", 79.99);
        cart.displayCart();
        
        // Problem 22: Library Book
        System.out.println("\nProblem 22: Library Book System");
        LibraryBookProblem22 book1 = new LibraryBookProblem22("Effective Java", "Joshua Bloch");
        book1.borrowBook();
        book1.displayStatus();
        book1.returnBook();
        book1.displayStatus();
        
        // Problem 23: Product inventory
        System.out.println("\nProblem 23: Product Inventory");
        ProductProblem23 product = new ProductProblem23("PRD001", "Laptop", 50, 999.99);
        product.displayInfo();
        product.sell(5);
        product.restock(10);
        product.displayInfo();
        
        // Problem 24: Grade calculator
        System.out.println("\nProblem 24: Grade Calculator");
        GradeCalculatorProblem24 grades = new GradeCalculatorProblem24();
        grades.addGrade(85);
        grades.addGrade(90);
        grades.addGrade(78);
        grades.addGrade(92);
        System.out.println("Average: " + grades.getAverage());
        System.out.println("Highest: " + grades.getHighest());
        System.out.println("Lowest: " + grades.getLowest());
        
        // Problem 25: Date class
        System.out.println("\nProblem 25: Date Class");
        DateProblem25 date = new DateProblem25(25, 12, 2024);
        date.displayDate();
        System.out.println("Is valid: " + date.isValid());
        
        DateProblem25 invalid = new DateProblem25(32, 13, 2024);
        invalid.displayDate();
        System.out.println("Is valid: " + invalid.isValid());
        
        // Problem 26: Complex number
        System.out.println("\nProblem 26: Complex Number");
        ComplexNumberProblem26 c1 = new ComplexNumberProblem26(3, 4);
        ComplexNumberProblem26 c2 = new ComplexNumberProblem26(1, 2);
        ComplexNumberProblem26 sum = c1.add(c2);
        c1.display();
        c2.display();
        System.out.print("Sum: ");
        sum.display();
        
        // Problem 27: Fraction class
        System.out.println("\nProblem 27: Fraction");
        FractionProblem27 f1 = new FractionProblem27(1, 2);
        FractionProblem27 f2 = new FractionProblem27(1, 3);
        f1.display();
        f2.display();
        FractionProblem27 sum2 = f1.add(f2);
        System.out.print("Sum: ");
        sum2.display();
        
        // Problem 28: Matrix class
        System.out.println("\nProblem 28: Matrix (2x2)");
        MatrixProblem28 m1 = new MatrixProblem28(new int[][]{{1, 2}, {3, 4}});
        MatrixProblem28 m2 = new MatrixProblem28(new int[][]{{5, 6}, {7, 8}});
        System.out.println("Matrix 1:");
        m1.display();
        System.out.println("Matrix 2:");
        m2.display();
        System.out.println("Sum:");
        MatrixProblem28 sum3 = m1.add(m2);
        sum3.display();
        
        // Problem 29: Box volume
        System.out.println("\nProblem 29: Box with Volume");
        BoxProblem29 box = new BoxProblem29(5, 10, 8);
        box.displayInfo();
        
        // Problem 30: Distance calculator
        System.out.println("\nProblem 30: Distance between Points");
        PointProblem30 p1 = new PointProblem30(0, 0);
        PointProblem30 p2 = new PointProblem30(3, 4);
        System.out.println("Point 1: (" + p1.x + ", " + p1.y + ")");
        System.out.println("Point 2: (" + p2.x + ", " + p2.y + ")");
        System.out.println("Distance: " + p1.distanceTo(p2));
    }
}

// ============================================
// PROBLEM SOLUTIONS (1-10): CLASS BASICS
// ============================================

// Problem 1: Simple Person class
class PersonProblem1 {
    String name;
    int age;
    
    void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

// Problem 2: Dog class
class Dog {
    String name;
    String breed;
    int age;
    
    void bark() {
        System.out.println(name + " says: Woof!");
    }
    
    void displayInfo() {
        System.out.println("Dog: " + name + ", Breed: " + breed + ", Age: " + age);
    }
}

// Problem 3: Circle
class Circle {
    double radius;
    
    double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    double calculateCircumference() {
        return 2 * Math.PI * radius;
    }
}

// Problem 4: Counter
class Counter {
    private int count = 0;
    
    void increment() {
        count++;
    }
    
    void decrement() {
        count--;
    }
    
    void reset() {
        count = 0;
    }
    
    int getCount() {
        return count;
    }
}

// Problem 5: Temperature
class Temperature {
    double celsius;
    
    double toFahrenheit() {
        return (celsius * 9/5) + 32;
    }
    
    double toKelvin() {
        return celsius + 273.15;
    }
}

// ============================================
// PROBLEM SOLUTIONS (6-15): CONSTRUCTORS
// ============================================

// Problem 6: Book with constructor
class BookProblem6 {
    String title;
    String author;
    int pages;
    
    BookProblem6(String title, String author, int pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    
    void displayInfo() {
        System.out.println("Book: " + title + " by " + author + " (" + pages + " pages)");
    }
}

// Problem 7: Student with constructor overloading
class StudentProblem7 {
    String name;
    int rollNumber;
    char grade;
    
    StudentProblem7(String name) {
        this(name, 0, 'F');
    }
    
    StudentProblem7(String name, int rollNumber) {
        this(name, rollNumber, 'F');
    }
    
    StudentProblem7(String name, int rollNumber, char grade) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.grade = grade;
    }
    
    void displayInfo() {
        System.out.println("Student: " + name + ", Roll: " + rollNumber + ", Grade: " + grade);
    }
}

// Problem 8: Car with default values
class CarProblem8 {
    String brand;
    String model;
    int year;
    
    CarProblem8() {
        this.brand = "Unknown";
        this.model = "Unknown";
        this.year = 2024;
    }
    
    CarProblem8(String brand, String model) {
        this.brand = brand;
        this.model = model;
        this.year = 2024;
    }
    
    void displayInfo() {
        System.out.println("Car: " + brand + " " + model + " (" + year + ")");
    }
}

// Problem 9: Point with copy constructor
class PointProblem9 {
    int x;
    int y;
    
    PointProblem9(int x, int y) {
        this.x = x;
        this.y = y;
    }
    
    PointProblem9(PointProblem9 other) {
        this.x = other.x;
        this.y = other.y;
    }
}

// Problem 10: Rectangle with constructor chaining
class RectangleProblem10 {
    double length;
    double width;
    
    RectangleProblem10() {
        this(1, 1);
    }
    
    RectangleProblem10(double side) {
        this(side, side);
    }
    
    RectangleProblem10(double length, double width) {
        this.length = length;
        this.width = width;
    }
    
    void displayInfo() {
        System.out.println("Rectangle: " + length + " x " + width + 
                         ", Area: " + (length * width));
    }
}

// ============================================
// PROBLEM SOLUTIONS (16-20): OBJECT INTERACTION
// ============================================

// Problem 16: BankAccount operations
class BankAccountProblem16 {
    String accountNumber;
    String holderName;
    double balance;
    
    BankAccountProblem16(String accountNumber, String holderName, double balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }
    
    void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: $" + amount);
    }
    
    void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrew: $" + amount);
        } else {
            System.out.println("Insufficient funds!");
        }
    }
    
    void displayInfo() {
        System.out.println("Account: " + accountNumber + ", Balance: $" + balance);
    }
}

// Problem 17: Student with marks
class StudentProblem17 {
    String name;
    int marks;
    
    StudentProblem17(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }
    
    void displayInfo() {
        System.out.println("Student: " + name + ", Marks: " + marks + 
                         ", Grade: " + getGrade());
    }
    
    char getGrade() {
        if (marks >= 90) return 'A';
        if (marks >= 80) return 'B';
        if (marks >= 70) return 'C';
        if (marks >= 60) return 'D';
        return 'F';
    }
}

// Problem 18: Employee comparison
class EmployeeProblem18 {
    String id;
    String name;
    double salary;
    
    EmployeeProblem18(String id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    
    boolean hasHigherSalaryThan(EmployeeProblem18 other) {
        return this.salary > other.salary;
    }
}

// Problem 19: Calculator
class CalculatorProblem19 {
    int add(int a, int b) {
        return a + b;
    }
    
    int subtract(int a, int b) {
        return a - b;
    }
    
    int multiply(int a, int b) {
        return a * b;
    }
    
    double divide(int a, int b) {
        if (b == 0) {
            System.out.println("Cannot divide by zero!");
            return 0;
        }
        return (double) a / b;
    }
}

// Problem 20: Time class
class TimeProblem20 {
    int hours;
    int minutes;
    int seconds;
    
    TimeProblem20(int hours, int minutes, int seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    
    void addSeconds(int sec) {
        seconds += sec;
        normalize();
    }
    
    void addMinutes(int min) {
        minutes += min;
        normalize();
    }
    
    void normalize() {
        if (seconds >= 60) {
            minutes += seconds / 60;
            seconds %= 60;
        }
        if (minutes >= 60) {
            hours += minutes / 60;
            minutes %= 60;
        }
        if (hours >= 24) {
            hours %= 24;
        }
    }
    
    void displayTime() {
        System.out.printf("Time: %02d:%02d:%02d%n", hours, minutes, seconds);
    }
}

// ============================================
// PROBLEM SOLUTIONS (21-30): REAL-WORLD
// ============================================

// Problem 21: Shopping cart
class ShoppingCartProblem21 {
    private String[] items = new String[100];
    private double[] prices = new double[100];
    private int count = 0;
    
    void addItem(String item, double price) {
        items[count] = item;
        prices[count] = price;
        count++;
    }
    
    void displayCart() {
        double total = 0;
        System.out.println("Shopping Cart:");
        for (int i = 0; i < count; i++) {
            System.out.println((i+1) + ". " + items[i] + " - $" + prices[i]);
            total += prices[i];
        }
        System.out.println("Total: $" + total);
    }
}

// Problem 22: Library book
class LibraryBookProblem22 {
    String title;
    String author;
    boolean isAvailable;
    
    LibraryBookProblem22(String title, String author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
    
    void borrowBook() {
        if (isAvailable) {
            isAvailable = false;
            System.out.println("Book borrowed: " + title);
        } else {
            System.out.println("Book not available");
        }
    }
    
    void returnBook() {
        isAvailable = true;
        System.out.println("Book returned: " + title);
    }
    
    void displayStatus() {
        System.out.println(title + " - " + (isAvailable ? "Available" : "Borrowed"));
    }
}

// Problem 23: Product inventory
class ProductProblem23 {
    String id;
    String name;
    int stock;
    double price;
    
    ProductProblem23(String id, String name, int stock, double price) {
        this.id = id;
        this.name = name;
        this.stock = stock;
        this.price = price;
    }
    
    void sell(int quantity) {
        if (stock >= quantity) {
            stock -= quantity;
            System.out.println("Sold " + quantity + " units");
        } else {
            System.out.println("Insufficient stock!");
        }
    }
    
    void restock(int quantity) {
        stock += quantity;
        System.out.println("Restocked " + quantity + " units");
    }
    
    void displayInfo() {
        System.out.println("Product: " + name + ", Stock: " + stock + ", Price: $" + price);
    }
}

// Problem 24: Grade calculator
class GradeCalculatorProblem24 {
    private int[] grades = new int[100];
    private int count = 0;
    
    void addGrade(int grade) {
        grades[count++] = grade;
    }
    
    double getAverage() {
        int sum = 0;
        for (int i = 0; i < count; i++) {
            sum += grades[i];
        }
        return (double) sum / count;
    }
    
    int getHighest() {
        int max = grades[0];
        for (int i = 1; i < count; i++) {
            if (grades[i] > max) max = grades[i];
        }
        return max;
    }
    
    int getLowest() {
        int min = grades[0];
        for (int i = 1; i < count; i++) {
            if (grades[i] < min) min = grades[i];
        }
        return min;
    }
}

// Problem 25: Date validation
class DateProblem25 {
    int day;
    int month;
    int year;
    
    DateProblem25(int day, int month, int year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    
    boolean isValid() {
        if (month < 1 || month > 12) return false;
        if (day < 1 || day > 31) return false;
        if (year < 1) return false;
        
        int[] daysInMonth = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        if (isLeapYear() && month == 2) daysInMonth[1] = 29;
        
        return day <= daysInMonth[month - 1];
    }
    
    boolean isLeapYear() {
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    }
    
    void displayDate() {
        System.out.printf("%02d/%02d/%04d%n", day, month, year);
    }
}

// Problem 26: Complex number
class ComplexNumberProblem26 {
    double real;
    double imaginary;
    
    ComplexNumberProblem26(double real, double imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    
    ComplexNumberProblem26 add(ComplexNumberProblem26 other) {
        return new ComplexNumberProblem26(this.real + other.real, 
                                         this.imaginary + other.imaginary);
    }
    
    void display() {
        System.out.println(real + " + " + imaginary + "i");
    }
}

// Problem 27: Fraction
class FractionProblem27 {
    int numerator;
    int denominator;
    
    FractionProblem27(int numerator, int denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    
    FractionProblem27 add(FractionProblem27 other) {
        int num = this.numerator * other.denominator + other.numerator * this.denominator;
        int den = this.denominator * other.denominator;
        return new FractionProblem27(num, den);
    }
    
    void display() {
        System.out.println(numerator + "/" + denominator);
    }
}

// Problem 28: Matrix 2x2
class MatrixProblem28 {
    int[][] data;
    
    MatrixProblem28(int[][] data) {
        this.data = data;
    }
    
    MatrixProblem28 add(MatrixProblem28 other) {
        int[][] result = new int[2][2];
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                result[i][j] = this.data[i][j] + other.data[i][j];
            }
        }
        return new MatrixProblem28(result);
    }
    
    void display() {
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print(data[i][j] + " ");
            }
            System.out.println();
        }
    }
}

// Problem 29: Box with volume
class BoxProblem29 {
    double length, width, height;
    
    BoxProblem29(double length, double width, double height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    
    double getVolume() {
        return length * width * height;
    }
    
    void displayInfo() {
        System.out.println("Box: " + length + "x" + width + "x" + height);
        System.out.println("Volume: " + getVolume());
    }
}

// Problem 30: Distance between points
class PointProblem30 {
    double x, y;
    
    PointProblem30(double x, double y) {
        this.x = x;
        this.y = y;
    }
    
    double distanceTo(PointProblem30 other) {
        double dx = this.x - other.x;
        double dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
