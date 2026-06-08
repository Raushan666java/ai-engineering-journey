/**
 * DESIGN PATTERN: OBSERVER (Day 8 - Interfaces & Polymorphism)
 * 
 * Demonstrates:
 * - Subject (Observable) and Observer interfaces
 * - Registering, unregistering observers
 * - Notifying observers
 * - Use case: simple event notification system
 */

import java.util.*;

public class DesignObserverPattern {
    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════════════════════════════════╗");
        System.out.println("║          DESIGN PATTERN: OBSERVER - EXAMPLE              ║");
        System.out.println("╚══════════════════════════════════════════════════════════╝\n");

        EventSource source = new EventSource();
        EventListener l1 = new ConsoleListener("L1");
        EventListener l2 = new ConsoleListener("L2");
        source.registerListener(l1);
        source.registerListener(l2);
        source.triggerEvent("Hello Observers!");
        source.unregisterListener(l1);
        source.triggerEvent("Another event");
    }
}

interface EventListener { void onEvent(String message); }
interface Observable { void registerListener(EventListener l); void unregisterListener(EventListener l); void notifyListeners(String msg); }

class EventSource implements Observable {
    private final List<EventListener> listeners = new ArrayList<>();

    public void registerListener(EventListener l) { listeners.add(l); }
    public void unregisterListener(EventListener l) { listeners.remove(l); }
    public void notifyListeners(String msg) { for (EventListener l : listeners) l.onEvent(msg); }
    public void triggerEvent(String msg) { System.out.println("EventSource triggers: " + msg); notifyListeners(msg); }
}

class ConsoleListener implements EventListener { String name; ConsoleListener(String name){ this.name = name; } public void onEvent(String message){ System.out.println("Listener " + name + " got: " + message); } }
