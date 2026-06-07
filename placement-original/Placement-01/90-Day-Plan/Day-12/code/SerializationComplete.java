/**
 * DAY 12: SERIALIZATION - COMPLETE GUIDE
 * 
 * Comprehensive coverage of Java Serialization
 * 
 * Topics Covered:
 * 1. Serialization Basics (Serializable interface)
 * 2. ObjectOutputStream/ObjectInputStream
 * 3. transient Keyword (Skip serialization)
 * 4. serialVersionUID (Version control)
 * 5. Custom Serialization (writeObject/readObject)
 * 6. Externalizable Interface (Full control)
 * 7. Serialization Inheritance
 * 8. Serialization Best Practices
 * 9. Common Serialization Problems
 * 10. Interview Questions (20 Q&A)
 */

package day12.serialization;

import java.io.*;
import java.util.*;

public class SerializationComplete {

    // ============================================
    // 1. SERIALIZATION BASICS
    // ============================================
    
    /**
     * SERIALIZATION - Convert object to byte stream
     * DESERIALIZATION - Convert byte stream back to object
     * 
     * Requirements:
     * - Class must implement Serializable interface
     * - All instance variables must be serializable
     * - Static variables are NOT serialized
     * - transient variables are NOT serialized
     */
    static class SerializationBasics {
        
        // Simple serializable class
        static class Person implements Serializable {
            private String name;
            private int age;
            private String email;
            
            public Person(String name, int age, String email) {
                this.name = name;
                this.age = age;
                this.email = email;
            }
            
            @Override
            public String toString() {
                return "Person{name='" + name + "', age=" + age + ", email='" + email + "'}";
            }
        }
        
        // Serialize object to file
        public static void serializeObject() throws IOException {
            Person person = new Person("John Doe", 30, "john@example.com");
            
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream("person.ser"))) {
                
                oos.writeObject(person);
                System.out.println("Serialized: " + person);
            }
        }
        
        // Deserialize object from file
        public static void deserializeObject() throws IOException, ClassNotFoundException {
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream("person.ser"))) {
                
                Person person = (Person) ois.readObject();
                System.out.println("Deserialized: " + person);
            }
        }
        
        // Serialize multiple objects
        public static void serializeMultiple() throws IOException {
            List<Person> people = Arrays.asList(
                new Person("Alice", 25, "alice@example.com"),
                new Person("Bob", 30, "bob@example.com"),
                new Person("Charlie", 35, "charlie@example.com")
            );
            
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream("people.ser"))) {
                
                oos.writeObject(people);
                System.out.println("Serialized " + people.size() + " people");
            }
        }
        
        // Deserialize multiple objects
        public static void deserializeMultiple() throws IOException, ClassNotFoundException {
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream("people.ser"))) {
                
                @SuppressWarnings("unchecked")
                List<Person> people = (List<Person>) ois.readObject();
                System.out.println("Deserialized " + people.size() + " people:");
                people.forEach(System.out::println);
            }
        }
    }
    
    // ============================================
    // 2. ObjectOutputStream/ObjectInputStream
    // ============================================
    
    /**
     * ObjectOutputStream - Writes objects to stream
     * ObjectInputStream - Reads objects from stream
     * 
     * Key methods:
     * - writeObject(obj) / readObject()
     * - writeInt(int) / readInt()
     * - writeUTF(String) / readUTF()
     * - defaultWriteObject() / defaultReadObject()
     */
    static class ObjectStreamDemo {
        
        // Write primitives and objects
        public static void writeMixed() throws IOException {
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream("mixed.ser"))) {
                
                oos.writeInt(42);
                oos.writeDouble(3.14);
                oos.writeBoolean(true);
                oos.writeUTF("Hello, Serialization!");
                oos.writeObject(new Date());
                
                System.out.println("Mixed data written");
            }
        }
        
        // Read primitives and objects
        public static void readMixed() throws IOException, ClassNotFoundException {
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream("mixed.ser"))) {
                
                int intValue = ois.readInt();
                double doubleValue = ois.readDouble();
                boolean boolValue = ois.readBoolean();
                String stringValue = ois.readUTF();
                Date dateValue = (Date) ois.readObject();
                
                System.out.println("Int: " + intValue);
                System.out.println("Double: " + doubleValue);
                System.out.println("Boolean: " + boolValue);
                System.out.println("String: " + stringValue);
                System.out.println("Date: " + dateValue);
            }
        }
        
        // Serialize to byte array (in-memory)
        public static byte[] serializeToByteArray(Object obj) throws IOException {
            try (ByteArrayOutputStream baos = new ByteArrayOutputStream();
                 ObjectOutputStream oos = new ObjectOutputStream(baos)) {
                
                oos.writeObject(obj);
                return baos.toByteArray();
            }
        }
        
        // Deserialize from byte array
        public static Object deserializeFromByteArray(byte[] bytes) 
                throws IOException, ClassNotFoundException {
            try (ByteArrayInputStream bais = new ByteArrayInputStream(bytes);
                 ObjectInputStream ois = new ObjectInputStream(bais)) {
                
                return ois.readObject();
            }
        }
    }
    
    // ============================================
    // 3. transient KEYWORD
    // ============================================
    
    /**
     * transient - Skip field during serialization
     * 
     * Use cases:
     * - Sensitive data (passwords)
     * - Derived/calculated fields
     * - Non-serializable fields
     * - Temporary data
     */
    static class TransientDemo {
        
        static class User implements Serializable {
            private String username;
            private transient String password; // NOT serialized
            private int loginCount;
            private transient boolean loggedIn; // NOT serialized
            
            public User(String username, String password) {
                this.username = username;
                this.password = password;
                this.loginCount = 0;
                this.loggedIn = false;
            }
            
            public void login() {
                loggedIn = true;
                loginCount++;
            }
            
            @Override
            public String toString() {
                return "User{username='" + username + "', password='" + password + 
                       "', loginCount=" + loginCount + ", loggedIn=" + loggedIn + "}";
            }
        }
        
        public static void demonstrateTransient() throws IOException, ClassNotFoundException {
            User user = new User("alice", "secret123");
            user.login();
            
            System.out.println("Before serialization: " + user);
            
            // Serialize
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ObjectOutputStream oos = new ObjectOutputStream(baos);
            oos.writeObject(user);
            
            // Deserialize
            ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
            ObjectInputStream ois = new ObjectInputStream(bais);
            User deserializedUser = (User) ois.readObject();
            
            System.out.println("After deserialization: " + deserializedUser);
            // password = null (transient)
            // loggedIn = false (transient, default value)
            // username and loginCount preserved
        }
        
        // Calculated field example
        static class Rectangle implements Serializable {
            private double width;
            private double height;
            private transient double area; // Calculated, don't serialize
            
            public Rectangle(double width, double height) {
                this.width = width;
                this.height = height;
                this.area = width * height;
            }
            
            private void readObject(ObjectInputStream ois) 
                    throws IOException, ClassNotFoundException {
                ois.defaultReadObject();
                // Recalculate transient field
                this.area = width * height;
            }
            
            @Override
            public String toString() {
                return "Rectangle{width=" + width + ", height=" + height + ", area=" + area + "}";
            }
        }
    }
    
    // ============================================
    // 4. serialVersionUID
    // ============================================
    
    /**
     * serialVersionUID - Version control for serialized classes
     * 
     * Purpose:
     * - Ensures serialization compatibility
     * - Prevents InvalidClassException
     * - Version control
     * 
     * Best practice: Always declare explicitly
     */
    static class SerialVersionUIDDemo {
        
        // Good practice: Explicit serialVersionUID
        static class Employee implements Serializable {
            private static final long serialVersionUID = 1L;
            
            private String name;
            private int age;
            private double salary;
            
            public Employee(String name, int age, double salary) {
                this.name = name;
                this.age = age;
                this.salary = salary;
            }
            
            @Override
            public String toString() {
                return "Employee{name='" + name + "', age=" + age + ", salary=" + salary + "}";
            }
        }
        
        // If you add fields later, update serialVersionUID
        static class EmployeeV2 implements Serializable {
            private static final long serialVersionUID = 2L; // Version 2
            
            private String name;
            private int age;
            private double salary;
            private String department; // New field
            
            public EmployeeV2(String name, int age, double salary, String department) {
                this.name = name;
                this.age = age;
                this.salary = salary;
                this.department = department;
            }
        }
        
        // Without serialVersionUID (BAD - JVM generates based on class structure)
        static class BadExample implements Serializable {
            private String data;
            // If you add/remove fields, deserialization breaks!
        }
        
        public static void demonstrateVersionUID() throws IOException {
            Employee emp = new Employee("John", 30, 50000);
            
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream("employee.ser"))) {
                oos.writeObject(emp);
                System.out.println("Serialized: " + emp);
            }
            
            // Now if you modify Employee class (add/remove fields),
            // deserialization will fail with InvalidClassException
            // UNLESS serialVersionUID matches
        }
    }
    
    // ============================================
    // 5. CUSTOM SERIALIZATION
    // ============================================
    
    /**
     * CUSTOM SERIALIZATION - Override default behavior
     * 
     * Methods:
     * - private void writeObject(ObjectOutputStream oos)
     * - private void readObject(ObjectInputStream ois)
     * 
     * Use cases:
     * - Encrypt sensitive data
     * - Validate data
     * - Handle transient fields
     * - Compress data
     */
    static class CustomSerializationDemo {
        
        static class SecureUser implements Serializable {
            private static final long serialVersionUID = 1L;
            
            private String username;
            private transient String password; // Don't serialize plaintext
            private int failedLogins;
            
            public SecureUser(String username, String password) {
                this.username = username;
                this.password = password;
                this.failedLogins = 0;
            }
            
            // Custom serialization - encrypt password
            private void writeObject(ObjectOutputStream oos) throws IOException {
                oos.defaultWriteObject(); // Serialize non-transient fields
                
                // Encrypt password before writing
                String encrypted = encrypt(password);
                oos.writeObject(encrypted);
            }
            
            // Custom deserialization - decrypt password
            private void readObject(ObjectInputStream ois) 
                    throws IOException, ClassNotFoundException {
                ois.defaultReadObject(); // Deserialize non-transient fields
                
                // Decrypt password
                String encrypted = (String) ois.readObject();
                this.password = decrypt(encrypted);
            }
            
            // Simple encryption (XOR - for demo only!)
            private String encrypt(String text) {
                StringBuilder encrypted = new StringBuilder();
                for (char c : text.toCharArray()) {
                    encrypted.append((char) (c ^ 42)); // XOR with key 42
                }
                return encrypted.toString();
            }
            
            private String decrypt(String encrypted) {
                return encrypt(encrypted); // XOR is symmetric
            }
            
            @Override
            public String toString() {
                return "SecureUser{username='" + username + "', password='" + password + 
                       "', failedLogins=" + failedLogins + "}";
            }
        }
        
        // Validation example
        static class ValidatedData implements Serializable {
            private static final long serialVersionUID = 1L;
            
            private int value;
            
            public ValidatedData(int value) {
                if (value < 0 || value > 100) {
                    throw new IllegalArgumentException("Value must be 0-100");
                }
                this.value = value;
            }
            
            private void readObject(ObjectInputStream ois) 
                    throws IOException, ClassNotFoundException {
                ois.defaultReadObject();
                
                // Validate after deserialization
                if (value < 0 || value > 100) {
                    throw new InvalidObjectException("Invalid value: " + value);
                }
            }
        }
        
        public static void demonstrateCustom() throws Exception {
            SecureUser user = new SecureUser("admin", "password123");
            System.out.println("Before: " + user);
            
            // Serialize
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ObjectOutputStream oos = new ObjectOutputStream(baos);
            oos.writeObject(user);
            
            // Deserialize
            ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
            ObjectInputStream ois = new ObjectInputStream(bais);
            SecureUser deserialized = (SecureUser) ois.readObject();
            
            System.out.println("After: " + deserialized);
            // Password was encrypted during serialization, decrypted during deserialization
        }
    }
    
    // ============================================
    // 6. EXTERNALIZABLE INTERFACE
    // ============================================
    
    /**
     * EXTERNALIZABLE - Full control over serialization
     * 
     * Differences from Serializable:
     * - Must implement writeExternal() and readExternal()
     * - No default serialization
     * - Must have no-arg constructor
     * - Better performance (no reflection)
     */
    static class ExternalizableDemo {
        
        static class Product implements Externalizable {
            private String name;
            private double price;
            private int quantity;
            
            // REQUIRED: No-arg constructor
            public Product() {
            }
            
            public Product(String name, double price, int quantity) {
                this.name = name;
                this.price = price;
                this.quantity = quantity;
            }
            
            @Override
            public void writeExternal(ObjectOutput out) throws IOException {
                // Full control - choose what to serialize
                out.writeUTF(name);
                out.writeDouble(price);
                out.writeInt(quantity);
            }
            
            @Override
            public void readExternal(ObjectInput in) throws IOException {
                // Must read in same order as written
                this.name = in.readUTF();
                this.price = in.readDouble();
                this.quantity = in.readInt();
            }
            
            @Override
            public String toString() {
                return "Product{name='" + name + "', price=" + price + ", quantity=" + quantity + "}";
            }
        }
        
        // Optimized serialization example
        static class CompressedData implements Externalizable {
            private String data;
            
            public CompressedData() {
            }
            
            public CompressedData(String data) {
                this.data = data;
            }
            
            @Override
            public void writeExternal(ObjectOutput out) throws IOException {
                // Compress data before writing
                byte[] compressed = compress(data);
                out.writeInt(compressed.length);
                out.write(compressed);
            }
            
            @Override
            public void readExternal(ObjectInput in) throws IOException {
                // Decompress data after reading
                int length = in.readInt();
                byte[] compressed = new byte[length];
                in.readFully(compressed);
                this.data = decompress(compressed);
            }
            
            private byte[] compress(String text) {
                // Simple run-length encoding (demo)
                return text.getBytes();
            }
            
            private String decompress(byte[] bytes) {
                return new String(bytes);
            }
        }
        
        public static void demonstrateExternalizable() throws Exception {
            Product product = new Product("Laptop", 999.99, 5);
            System.out.println("Before: " + product);
            
            // Serialize
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ObjectOutputStream oos = new ObjectOutputStream(baos);
            oos.writeObject(product);
            
            // Deserialize
            ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
            ObjectInputStream ois = new ObjectInputStream(bais);
            Product deserialized = (Product) ois.readObject();
            
            System.out.println("After: " + deserialized);
        }
    }
    
    // ============================================
    // 7. SERIALIZATION INHERITANCE
    // ============================================
    
    /**
     * SERIALIZATION WITH INHERITANCE
     * 
     * Rules:
     * - If parent implements Serializable, child is automatically serializable
     * - If parent doesn't implement Serializable, parent fields are NOT serialized
     *   (unless child uses custom serialization)
     * - Child must handle parent's non-serializable state
     */
    static class InheritanceDemo {
        
        // Parent implements Serializable
        static class Animal implements Serializable {
            private static final long serialVersionUID = 1L;
            protected String species;
            
            public Animal(String species) {
                this.species = species;
            }
        }
        
        // Child automatically serializable
        static class Dog extends Animal {
            private static final long serialVersionUID = 1L;
            private String breed;
            
            public Dog(String species, String breed) {
                super(species);
                this.breed = breed;
            }
            
            @Override
            public String toString() {
                return "Dog{species='" + species + "', breed='" + breed + "'}";
            }
        }
        
        // Parent does NOT implement Serializable
        static class Vehicle {
            protected String manufacturer;
            
            public Vehicle() {
                this.manufacturer = "Unknown";
            }
            
            public Vehicle(String manufacturer) {
                this.manufacturer = manufacturer;
            }
        }
        
        // Child implements Serializable
        static class Car extends Vehicle implements Serializable {
            private static final long serialVersionUID = 1L;
            private String model;
            
            public Car(String manufacturer, String model) {
                super(manufacturer);
                this.model = model;
            }
            
            // Custom serialization to handle parent's non-serializable state
            private void writeObject(ObjectOutputStream oos) throws IOException {
                oos.defaultWriteObject();
                oos.writeUTF(manufacturer); // Manually serialize parent field
            }
            
            private void readObject(ObjectInputStream ois) 
                    throws IOException, ClassNotFoundException {
                ois.defaultReadObject();
                this.manufacturer = ois.readUTF(); // Manually deserialize parent field
            }
            
            @Override
            public String toString() {
                return "Car{manufacturer='" + manufacturer + "', model='" + model + "'}";
            }
        }
        
        public static void demonstrateInheritance() throws Exception {
            // Dog example (parent serializable)
            Dog dog = new Dog("Canine", "Labrador");
            System.out.println("Before: " + dog);
            
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ObjectOutputStream oos = new ObjectOutputStream(baos);
            oos.writeObject(dog);
            
            ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
            ObjectInputStream ois = new ObjectInputStream(bais);
            Dog deserializedDog = (Dog) ois.readObject();
            
            System.out.println("After: " + deserializedDog);
            // Both species and breed serialized
            
            // Car example (parent non-serializable)
            Car car = new Car("Toyota", "Camry");
            System.out.println("\nBefore: " + car);
            
            baos = new ByteArrayOutputStream();
            oos = new ObjectOutputStream(baos);
            oos.writeObject(car);
            
            bais = new ByteArrayInputStream(baos.toByteArray());
            ois = new ObjectInputStream(bais);
            Car deserializedCar = (Car) ois.readObject();
            
            System.out.println("After: " + deserializedCar);
            // manufacturer preserved via custom serialization
        }
    }
    
    // ============================================
    // 8. SERIALIZATION BEST PRACTICES
    // ============================================
    
    static class BestPractices {
        
        // 1. Always declare serialVersionUID
        static class GoodExample implements Serializable {
            private static final long serialVersionUID = 1L;
            private String data;
        }
        
        // 2. Mark non-serializable fields as transient
        static class WithTransient implements Serializable {
            private static final long serialVersionUID = 1L;
            private String name;
            private transient Thread thread; // Thread is not serializable
            private transient Socket socket; // Socket is not serializable
        }
        
        // 3. Use defensive copying
        static class DefensiveCopy implements Serializable {
            private static final long serialVersionUID = 1L;
            private final Date date;
            
            public DefensiveCopy(Date date) {
                this.date = new Date(date.getTime()); // Copy
            }
            
            public Date getDate() {
                return new Date(date.getTime()); // Return copy
            }
        }
        
        // 4. Validate in readObject
        static class Validated implements Serializable {
            private static final long serialVersionUID = 1L;
            private int age;
            
            private void readObject(ObjectInputStream ois) 
                    throws IOException, ClassNotFoundException {
                ois.defaultReadObject();
                
                if (age < 0 || age > 150) {
                    throw new InvalidObjectException("Invalid age: " + age);
                }
            }
        }
        
        // 5. Consider using enum for type-safe constants
        enum Status implements Serializable {
            ACTIVE, INACTIVE, SUSPENDED
        }
        
        // 6. Don't serialize sensitive data (or encrypt it)
        static class Secure implements Serializable {
            private static final long serialVersionUID = 1L;
            private String username;
            private transient String password; // Don't serialize
            
            // Or use custom serialization to encrypt
        }
    }
    
    // ============================================
    // 9. COMMON SERIALIZATION PROBLEMS
    // ============================================
    
    static class CommonProblems {
        
        // Problem 1: NotSerializableException
        static class Parent {
            String name; // Parent not serializable
        }
        
        static class Child extends Parent implements Serializable {
            // This works, but parent fields not serialized
        }
        
        // Problem 2: InvalidClassException (serialVersionUID mismatch)
        // Serialized with version 1, deserialized with version 2
        
        // Problem 3: Circular references
        static class Node implements Serializable {
            private static final long serialVersionUID = 1L;
            String data;
            Node next; // Circular reference is OK
        }
        
        // Problem 4: Large object graphs (performance)
        // Solution: Use transient, custom serialization, or Externalizable
        
        // Problem 5: Singleton pattern broken
        static class BrokenSingleton implements Serializable {
            private static final long serialVersionUID = 1L;
            private static final BrokenSingleton INSTANCE = new BrokenSingleton();
            
            private BrokenSingleton() {}
            
            public static BrokenSingleton getInstance() {
                return INSTANCE;
            }
            
            // Fix: Override readResolve
            private Object readResolve() {
                return INSTANCE; // Return singleton instance
            }
        }
    }
    
    // ============================================
    // 10. INTERVIEW QUESTIONS
    // ============================================
    
    static class InterviewQuestions {
        /**
         * Q1: What is serialization?
         * A: Converting object to byte stream for storage/transmission
         * 
         * Q2: What is Serializable interface?
         * A: Marker interface (no methods) indicating class can be serialized
         * 
         * Q3: What is serialVersionUID?
         * A: Version control for serialized classes, prevents InvalidClassException
         * 
         * Q4: What is transient keyword?
         * A: Marks field to skip during serialization
         * 
         * Q5: Are static variables serialized?
         * A: No, static variables belong to class, not instance
         * 
         * Q6: What is custom serialization?
         * A: Override writeObject/readObject to control serialization
         * 
         * Q7: Difference between Serializable and Externalizable?
         * A: Serializable uses default (reflection), Externalizable gives full control
         * 
         * Q8: How to prevent serialization?
         * A: Don't implement Serializable, or throw NotSerializableException in writeObject
         * 
         * Q9: What is readResolve()?
         * A: Method to control object returned during deserialization (singleton)
         * 
         * Q10: What is writeReplace()?
         * A: Method to replace object before serialization
         * 
         * Q11: Can we serialize singleton?
         * A: Yes, but use readResolve() to return same instance
         * 
         * Q12: What happens if parent not serializable?
         * A: Parent fields not serialized (use custom serialization)
         * 
         * Q13: What is InvalidClassException?
         * A: Thrown when serialVersionUID mismatch or class incompatible
         * 
         * Q14: What is NotSerializableException?
         * A: Thrown when object doesn't implement Serializable
         * 
         * Q15: How to serialize collection?
         * A: All elements must be serializable (ArrayList, HashMap are serializable)
         * 
         * Q16: What is ObjectInputStream.defaultReadObject()?
         * A: Default deserialization for non-transient fields
         * 
         * Q17: What is ObjectOutputStream.defaultWriteObject()?
         * A: Default serialization for non-transient fields
         * 
         * Q18: Can we serialize lambda?
         * A: Yes, if lambda doesn't capture non-serializable variables
         * 
         * Q19: Best practices for serialization?
         * A: Declare serialVersionUID, use transient, validate in readObject,
         *    defensive copying, consider Externalizable for performance
         * 
         * Q20: Alternatives to Java serialization?
         * A: JSON (Jackson, Gson), XML, Protocol Buffers, Avro, MessagePack
         */
    }
    
    // ============================================
    // MAIN - DEMONSTRATE ALL CONCEPTS
    // ============================================
    
    public static void main(String[] args) {
        try {
            System.out.println("=== DAY 12: SERIALIZATION COMPLETE GUIDE ===\n");
            
            System.out.println("1. SERIALIZATION BASICS:");
            SerializationBasics.serializeObject();
            SerializationBasics.deserializeObject();
            SerializationBasics.serializeMultiple();
            SerializationBasics.deserializeMultiple();
            
            System.out.println("\n2. OBJECT STREAMS:");
            ObjectStreamDemo.writeMixed();
            ObjectStreamDemo.readMixed();
            
            System.out.println("\n3. TRANSIENT:");
            TransientDemo.demonstrateTransient();
            
            System.out.println("\n4. SERIAL VERSION UID:");
            SerialVersionUIDDemo.demonstrateVersionUID();
            
            System.out.println("\n5. CUSTOM SERIALIZATION:");
            CustomSerializationDemo.demonstrateCustom();
            
            System.out.println("\n6. EXTERNALIZABLE:");
            ExternalizableDemo.demonstrateExternalizable();
            
            System.out.println("\n7. INHERITANCE:");
            InheritanceDemo.demonstrateInheritance();
            
            System.out.println("\n=== All Serialization concepts demonstrated! ===");
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
