/**
 * DESIGN PATTERN: FACTORY (Day 7 - Polymorphism)
 * 
 * Demonstrates:
 * 1. Simple Factory
 * 2. Factory Method
 * 3. Abstract Factory
 * 
 * Use case: Create notification senders or vehicle objects without exposing concrete creators
 */

public class DesignFactoryPattern {
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════════════╗");
        System.out.println("║          DESIGN PATTERN: FACTORY - EXAMPLES               ║");
        System.out.println("╚═══════════════════════════════════════════════════════════╝\n");

        // Simple Factory
        NotificationSender sender = NotificationFactorySimple.create("email");
        sender.send("Hello from simple factory!");

        // Factory Method
        Creator smsCreator = new SMSCreator();
        NotificationSender sms = smsCreator.createSender();
        sms.send("Hello from factory method!");

        // Abstract Factory
        UIFactory uiFactory = new DarkModeFactory();
        Button button = uiFactory.createButton();
        button.render();

        System.out.println("\nFactory patterns demonstrate polymorphism and decoupled creation logic.");
    }
}

// ============================================
// SIMPLE FACTORY
// ============================================
interface NotificationSender { void send(String message); }
class EmailSender implements NotificationSender { public void send(String message){ System.out.println("Email: " + message); } }
class SMSSender implements NotificationSender { public void send(String message){ System.out.println("SMS: " + message); } }
class PushSender implements NotificationSender { public void send(String message){ System.out.println("Push: " + message); } }

class NotificationFactorySimple {
    public static NotificationSender create(String type) {
        switch(type.toLowerCase()) {
            case "email": return new EmailSender();
            case "sms": return new SMSSender();
            case "push": return new PushSender();
            default: throw new IllegalArgumentException("Unknown type");
        }
    }
}

// ============================================
// FACTORY METHOD
// ============================================
abstract class Creator { abstract NotificationSender createSender(); }
class EmailCreator extends Creator { @Override NotificationSender createSender(){ return new EmailSender(); } }
class SMSCreator extends Creator { @Override NotificationSender createSender(){ return new SMSSender(); } }

// ============================================
// ABSTRACT FACTORY
// ============================================
interface Button { void render(); }
class LightButton implements Button { public void render(){ System.out.println("Render Light Button"); } }
class DarkButton implements Button { public void render(){ System.out.println("Render Dark Button"); } }

interface UIFactory { Button createButton(); }
class LightModeFactory implements UIFactory { public Button createButton(){ return new LightButton(); } }
class DarkModeFactory implements UIFactory { public Button createButton(){ return new DarkButton(); } }

/**
 * Notes:
 * - Simple Factory centralizes creation, but may violate OCP (open-closed principle)
 * - Factory Method delegates creation to subclasses
 * - Abstract Factory builds families of related objects
 * 
 * All patterns demonstrate decoupling creation logic and using polymorphism
 */