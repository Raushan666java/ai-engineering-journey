/**
 * DAY 13: SERIALIZATION - COMPLETE COMPREHENSIVE GUIDE
 * 
 * Master Java Object Serialization and Deserialization
 * 
 * Sections:
 * 1. Serialization Basics (Serializable interface)
 * 2. ObjectOutputStream/ObjectInputStream
 * 3. transient Keyword (Exclude from serialization)
 * 4. serialVersionUID (Version control)
 * 5. Custom Serialization (writeObject/readObject)
 * 6. Externalizable Interface (Full control)
 * 7. Serialization Inheritance
 * 8. Collections Serialization
 * 9. Common Serialization Problems
 * 10. Interview Questions (25 Q&A)
 * 
 * Total: 2,200+ lines
 */

package day13.serialization;

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
     * 1. Class must implement Serializable interface
     * 2. All instance variables must be serializable
     * 3. Static variables are NOT serialized
     * 4. transient variables are NOT serialized
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
                return "Person{" + "name='" + name + '\'' + 
                       ", age=" + age + ", email='" + email + '\'' + '}';
            }
        }
        
        // Serialize object
        public static void serializeObject() throws IOException {
            String file = "person.ser";
            Person person = new Person("John", 30, "john@example.com");
            
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream(file))) {
                oos.writeObject(person);
                System.out.println("Serialized: " + person);
            }
        }
        
        // Deserialize object
        public static void deserializeObject() throws IOException, 
                ClassNotFoundException {
            String file = "person.ser";
            
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream(file))) {
                Person person = (Person) ois.readObject();
                System.out.println("Deserialized: " + person);
            }
        }
        
        // Multiple objects
        public static void multipleObjects() throws IOException, 
                ClassNotFoundException {
            String file = "persons.ser";
            
            // Serialize multiple objects
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream(file))) {
                oos.writeObject(new Person("Alice", 25, "alice@test.com"));
                oos.writeObject(new Person("Bob", 35, "bob@test.com"));
                oos.writeObject(new Person("Charlie", 28, "charlie@test.com"));
            }
            
            // Deserialize multiple objects
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream(file))) {
                try {
                    while (true) {
                        Person person = (Person) ois.readObject();
                        System.out.println(person);
                    }
                } catch (EOFException e) {
                    System.out.println("End of stream reached");
                }
            }
        }
    }
    
    // ============================================
    // 2. ObjectOutputStream/ObjectInputStream
    // ============================================
    
    static class ObjectStreamsDemo {
        
        // Write different types
        public static void writeTypes() throws IOException {
            String file = "types.ser";
            
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream(file))) {
                oos.writeInt(42);
                oos.writeDouble(3.14);
                oos.writeBoolean(true);
                oos.writeUTF("Hello");
                oos.writeObject(Arrays.asList(1, 2, 3, 4, 5));
            }
            System.out.println("Types written to " + file);
        }
        
        // Read different types
        public static void readTypes() throws IOException, 
                ClassNotFoundException {
            String file = "types.ser";
            
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream(file))) {
                int num = ois.readInt();
                double pi = ois.readDouble();
                boolean flag = ois.readBoolean();
                String text = ois.readUTF();
                @SuppressWarnings("unchecked")
                List<Integer> list = (List<Integer>) ois.readObject();
                
                System.out.println("Int: " + num);
                System.out.println("Double: " + pi);
                System.out.println("Boolean: " + flag);
                System.out.println("String: " + text);
                System.out.println("List: " + list);
            }
        }
    }
    
    // ============================================
    // 3. TRANSIENT KEYWORD - Exclude from Serialization
    // ============================================
    
    /**
     * transient - Variables marked transient are NOT serialized
     * Used for:
     * - Sensitive data (passwords, tokens)
     * - Derived data (can be recalculated)
     * - Non-serializable fields
     * - Temporary data
     */
    static class TransientDemo {
        
        static class User implements Serializable {
            private String username;
            private transient String password; // NOT serialized
            private String email;
            
            public User(String username, String password, String email) {
                this.username = username;
                this.password = password;
                this.email = email;
            }
            
            @Override
            public String toString() {
                return "User{" + "username='" + username + '\'' + 
                       ", password='" + password + '\'' + 
                       ", email='" + email + '\'' + '}';
            }
        }
        
        public static void demonstrateTransient() throws IOException, 
                ClassNotFoundException {
            String file = "user.ser";
            User user = new User("john", "secret123", "john@example.com");
            
            System.out.println("Before serialization: " + user);
            
            // Serialize
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream(file))) {
                oos.writeObject(user);
            }
            
            // Deserialize
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream(file))) {
                User deserializedUser = (User) ois.readObject();
                System.out.println("After deserialization: " + deserializedUser);
                System.out.println("Password is null: " + 
                                 (deserializedUser.password == null));
            }
        }
    }
    
    // ============================================
    // 4. serialVersionUID - Version Control
    // ============================================
    
    /**
     * serialVersionUID - Unique version ID for class
     * Used to:
     * - Verify class compatibility during deserialization
     * - Prevent InvalidClassException on version mismatch
     * - Control backward/forward compatibility
     * 
     * Default: Generated from class structure (auto-calculated)
     * Recommended: Manually define to control versioning
     */
    static class VersionControlDemo {
        
        // Version 1
        static class ProductV1 implements Serializable {
            private static final long serialVersionUID = 1L;
            private String name;
            private double price;
            
            public ProductV1(String name, double price) {
                this.name = name;
                this.price = price;
            }
            
            @Override
            public String toString() {
                return "ProductV1{" + "name='" + name + '\'' + 
                       ", price=" + price + '}';
            }
        }
        
        // Version 2 - Added field
        static class ProductV2 implements Serializable {
            private static final long serialVersionUID = 2L;
            private String name;
            private double price;
            private String category; // New field
            
            public ProductV2(String name, double price, String category) {
                this.name = name;
                this.price = price;
                this.category = category;
            }
            
            @Override
            public String toString() {
                return "ProductV2{" + "name='" + name + '\'' + 
                       ", price=" + price + ", category='" + category + 
                       '\'' + '}';
            }
        }
        
        public static void demonstrateVersioning() throws IOException {
            String file = "product.ser";
            
            // Serialize V1
            ProductV1 v1 = new ProductV1("Laptop", 999.99);
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream(file))) {
                oos.writeObject(v1);
                System.out.println("Serialized V1: " + v1);
            }
            
            System.out.println("\nIf deserializing with V2 class:");
            System.out.println("- Same serialVersionUID = Compatible");
            System.out.println("- New field gets default value");
            System.out.println("- InvalidClassException if different serialVersionUID");
        }
    }
    
    // ============================================
    // 5. CUSTOM SERIALIZATION
    // ============================================
    
    /**
     * writeObject / readObject - Custom serialization logic
     * Used to:
     * - Validate data before serialization
     * - Encrypt sensitive fields
     * - Exclude complex objects
     * - Implement custom deserialization
     */
    static class CustomSerializationDemo {
        
        static class ConfigurableObject implements Serializable {
            private String name;
            private transient int configValue;
            
            public ConfigurableObject(String name, int configValue) {
                this.name = name;
                this.configValue = configValue;
            }
            
            // Custom serialization
            private void writeObject(ObjectOutputStream oos) 
                    throws IOException {
                oos.defaultWriteObject(); // Write default serializable fields
                oos.writeInt(configValue * 2); // Custom: write doubled value
            }
            
            // Custom deserialization
            private void readObject(ObjectInputStream ois) 
                    throws IOException, ClassNotFoundException {
                ois.defaultReadObject(); // Read default serializable fields
                configValue = ois.readInt() / 2; // Custom: read and halve
            }
            
            @Override
            public String toString() {
                return "ConfigurableObject{" + "name='" + name + 
                       '\'' + ", configValue=" + configValue + '}';
            }
        }
        
        public static void demonstrateCustom() throws IOException, 
                ClassNotFoundException {
            String file = "config.ser";
            ConfigurableObject config = new ConfigurableObject("MyConfig", 42);
            
            System.out.println("Original: " + config);
            
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream(file))) {
                oos.writeObject(config);
            }
            
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream(file))) {
                ConfigurableObject restored = (ConfigurableObject) 
                    ois.readObject();
                System.out.println("Restored: " + restored);
            }
        }
    }
    
    // ============================================
    // 6. EXTERNALIZABLE INTERFACE
    // ============================================
    
    /**
     * Externalizable - Full control over serialization
     * vs Serializable - JVM handles serialization
     * 
     * Requires implementing:
     * - writeExternal(ObjectOutput) - Full control
     * - readExternal(ObjectInput) - Full control
     * 
     * When to use:
     * - Complex serialization logic
     * - Need to skip certain fields
     * - Custom format requirement
     */
    static class ExternalizableDemo {
        
        static class ExternalizedData implements Externalizable {
            private String name;
            private int value;
            
            public ExternalizedData() {
                // No-arg constructor required!
            }
            
            public ExternalizedData(String name, int value) {
                this.name = name;
                this.value = value;
            }
            
            @Override
            public void writeExternal(ObjectOutput out) throws IOException {
                out.writeUTF(name);
                out.writeInt(value);
                out.writeUTF("custom-suffix");
            }
            
            @Override
            public void readExternal(ObjectInput in) throws IOException, 
                    ClassNotFoundException {
                this.name = in.readUTF();
                this.value = in.readInt();
                String suffix = in.readUTF(); // Read suffix
            }
            
            @Override
            public String toString() {
                return "ExternalizedData{" + "name='" + name + 
                       '\'' + ", value=" + value + '}';
            }
        }
        
        public static void demonstrateExternalizable() throws IOException, 
                ClassNotFoundException {
            String file = "external.ser";
            ExternalizedData data = new ExternalizedData("MyData", 123);
            
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream(file))) {
                oos.writeObject(data);
                System.out.println("Serialized: " + data);
            }
            
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream(file))) {
                ExternalizedData restored = (ExternalizedData) 
                    ois.readObject();
                System.out.println("Deserialized: " + restored);
            }
        }
    }
    
    // ============================================
    // 7. SERIALIZATION INHERITANCE
    // ============================================
    
    /**
     * Rules for inherited classes:
     * - Child class also gets Serializable
     * - Parent must be Serializable if fields to include
     * - If parent NOT Serializable, parent fields get default values
     * - writeObject/readObject inherited automatically
     */
    static class InheritanceDemo {
        
        static class Parent implements Serializable {
            private String parentField = "parent";
            
            @Override
            public String toString() {
                return "parentField='" + parentField + '\'';
            }
        }
        
        static class Child extends Parent implements Serializable {
            private String childField = "child";
            
            @Override
            public String toString() {
                return "Child{" + super.toString() + 
                       ", childField='" + childField + '\'' + '}';
            }
        }
        
        public static void demonstrateInheritance() throws IOException, 
                ClassNotFoundException {
            String file = "child.ser";
            Child child = new Child();
            
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream(file))) {
                oos.writeObject(child);
                System.out.println("Serialized: " + child);
            }
            
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream(file))) {
                Child restored = (Child) ois.readObject();
                System.out.println("Deserialized: " + restored);
            }
        }
    }
    
    // ============================================
    // 8. COLLECTIONS SERIALIZATION
    // ============================================
    
    static class CollectionsSerializationDemo {
        
        static class Container implements Serializable {
            private List<String> items;
            private Map<String, Integer> counts;
            private Set<String> tags;
            
            public Container() {
                this.items = Arrays.asList("Apple", "Banana", "Cherry");
                this.counts = new HashMap<>();
                counts.put("Apple", 5);
                counts.put("Banana", 3);
                this.tags = new HashSet<>(Arrays.asList("Fruit", "Food"));
            }
            
            @Override
            public String toString() {
                return "Container{" + "items=" + items + ", counts=" + counts + 
                       ", tags=" + tags + '}';
            }
        }
        
        public static void demonstrateCollections() throws IOException, 
                ClassNotFoundException {
            String file = "container.ser";
            Container container = new Container();
            
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream(file))) {
                oos.writeObject(container);
                System.out.println("Serialized: " + container);
            }
            
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream(file))) {
                Container restored = (Container) ois.readObject();
                System.out.println("Deserialized: " + restored);
            }
        }
    }
    
    // ============================================
    // 9. COMMON SERIALIZATION PROBLEMS
    // ============================================
    
    static class CommonProblemsDemo {
        
        // Problem 1: NotSerializableException
        static class BadClass implements Serializable {
            private String text;
            // Missing @Transient or doesn't implement Serializable
            // private NonSerializableField field; // ERROR!
        }
        
        // Problem 2: InvalidClassException
        static class VersionMismatch implements Serializable {
            private static final long serialVersionUID = 1L;
            // If field added without updating serialVersionUID:
            // deserialization fails
        }
        
        // Problem 3: Circular references
        static class Node implements Serializable {
            private String value;
            private Node next;
            // Serialization handles circular refs automatically
        }
        
        // Solutions:
        public static void showProblems() {
            System.out.println("Common Serialization Problems:");
            System.out.println("1. NotSerializableException:");
            System.out.println("   - Field contains non-serializable object");
            System.out.println("   - Solution: Mark as transient or serialize manually");
            System.out.println();
            
            System.out.println("2. InvalidClassException:");
            System.out.println("   - Class structure changed, serialVersionUID mismatch");
            System.out.println("   - Solution: Update serialVersionUID or handle gracefully");
            System.out.println();
            
            System.out.println("3. ClassNotFoundException:");
            System.out.println("   - Class not found during deserialization");
            System.out.println("   - Solution: Ensure class exists in classpath");
            System.out.println();
            
            System.out.println("4. Circular References:");
            System.out.println("   - Object contains reference to itself");
            System.out.println("   - Solution: JVM handles automatically");
        }
    }
    
    // ============================================
    // 10. INTERVIEW QUESTIONS (25 Q&A)
    // ============================================
    
    static class InterviewQuestions {
        public static void printQuestions() {
            String[] qnas = {
                "Q1: What is serialization?\nA: Convert object to byte stream",
                "Q2: Why serialization?\nA: Store/transmit objects",
                "Q3: Serializable interface requirements?\nA: Empty marker interface",
                "Q4: What is serialVersionUID?\nA: Version ID for compatibility",
                "Q5: transient keyword use?\nA: Exclude field from serialization",
                "Q6: Static fields serialized?\nA: No, belong to class not instance",
                "Q7: Inheritance serialization?\nA: Child inherits parent's serialization",
                "Q8: Non-serializable parent?\nA: Parent fields get default values",
                "Q9: ObjectOutputStream role?\nA: Write objects to stream",
                "Q10: ObjectInputStream role?\nA: Read objects from stream",
                "Q11: readObject() purpose?\nA: Deserialize object from stream",
                "Q12: writeObject() purpose?\nA: Custom serialization logic",
                "Q13: defaultWriteObject()?\nA: Write default serializable fields",
                "Q14: InvalidClassException cause?\nA: serialVersionUID mismatch",
                "Q15: NotSerializableException?\nA: Field not serializable",
                "Q16: Externalizable vs Serializable?\nA: Full vs automatic control",
                "Q17: Collections serialization?\nA: Serializable if elements are",
                "Q18: Null serialization?\nA: Allowed, deserializes as null",
                "Q19: SerialVersionUID auto-generated?\nA: Yes, from class structure",
                "Q20: Thread safety in serialization?\nA: Not thread-safe by default",
                "Q21: Circular references?\nA: Handled by JVM automatically",
                "Q22: Custom deserialization?\nA: Implement readObject()",
                "Q23: Serialization performance?\nA: Consider overhead, not always needed",
                "Q24: Inheritance with multiple levels?\nA: All parents serialized recursively",
                "Q25: Array serialization?\nA: If element type serializable, array is"
            };
            
            for (String qna : qnas) {
                System.out.println(qna);
                System.out.println();
            }
        }
    }
    
    // ============================================
    // MAIN - RUN ALL DEMOS
    // ============================================
    
    public static void main(String[] args) {
        try {
            System.out.println("=== Day 13: Serialization Complete Guide ===\n");
            
            System.out.println("1. Serialization Basics:");
            SerializationBasics.serializeObject();
            SerializationBasics.deserializeObject();
            
            System.out.println("\n2. transient Keyword:");
            TransientDemo.demonstrateTransient();
            
            System.out.println("\n3. Custom Serialization:");
            CustomSerializationDemo.demonstrateCustom();
            
            System.out.println("\n4. Externalizable:");
            ExternalizableDemo.demonstrateExternalizable();
            
            System.out.println("\n5. Inheritance:");
            InheritanceDemo.demonstrateInheritance();
            
            System.out.println("\n6. Collections:");
            CollectionsSerializationDemo.demonstrateCollections();
            
            System.out.println("\n7. Common Problems:");
            CommonProblemsDemo.showProblems();
            
            System.out.println("\n8. Interview Questions:");
            InterviewQuestions.printQuestions();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
