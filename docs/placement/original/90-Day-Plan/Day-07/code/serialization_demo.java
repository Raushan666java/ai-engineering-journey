/**
 * Day 7 - Serialization Demo
 * Demonstrates object serialization and deserialization
 */

import java.io.*;

public class serialization_demo {

    public static void main(String[] args) {
        System.out.println("=== SERIALIZATION DEMO - DAY 7 ===\n");

        demonstrateSerialization();
    }

    public static void demonstrateSerialization() {
        System.out.println("1. OBJECT SERIALIZATION");
        
        String filename = "person.ser";
        
        // Create and serialize object
        Person person = new Person("Alice", 25, "alice@example.com");
        person.setTemporaryData("This won't be serialized");
        
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filename))) {
            oos.writeObject(person);
            System.out.println("Serialized: " + person);
        } catch (IOException e) {
            System.out.println("Serialization failed: " + e.getMessage());
        }
        
        // Deserialize object
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filename))) {
            Person restored = (Person) ois.readObject();
            System.out.println("Deserialized: " + restored);
            System.out.println("Transient field (should be null): " + restored.getTemporaryData());
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Deserialization failed: " + e.getMessage());
        }
        
        System.out.println();
    }
}

class Person implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private String name;
    private int age;
    private String email;
    private transient String temporaryData; // Won't be serialized
    
    public Person(String name, int age, String email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    
    public void setTemporaryData(String data) {
        this.temporaryData = data;
    }
    
    public String getTemporaryData() {
        return temporaryData;
    }
    
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", email='" + email + "'}";
    }
}
