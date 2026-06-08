/**
 * LeetCode #1603: DESIGN PARKING SYSTEM - DAY 6
 * Difficulty: Easy
 * 
 * Problem:
 * Design a parking system for a parking lot. The parking lot has three kinds
 * of parking spaces: big, medium, and small, with a fixed number of slots for each size.
 * 
 * Implement the ParkingSystem class:
 * - ParkingSystem(int big, int medium, int small) Initializes object of the
 *   ParkingSystem class. The number of slots for each parking space are given
 *   as part of the constructor.
 * - bool addCar(int carType) Checks whether there is a parking space of carType
 *   for the car that wants to get into the parking lot. carType can be of three kinds:
 *   big (1), medium (2), or small (3). A car can only park in a parking space of
 *   its carType. If there is no space available, return false, else park the car
 *   in that size space and return true.
 * 
 * Example 1:
 * Input:
 * ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
 * [[1, 1, 0], [1], [2], [3], [1]]
 * Output:
 * [null, true, true, false, false]
 * 
 * Explanation:
 * ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
 * parkingSystem.addCar(1); // return true (1 big slot available)
 * parkingSystem.addCar(2); // return true (1 medium slot available)
 * parkingSystem.addCar(3); // return false (no small slots)
 * parkingSystem.addCar(1); // return false (no more big slots)
 * 
 * Constraints:
 * - 0 <= big, medium, small <= 1000
 * - carType is 1, 2, or 3
 * - At most 1000 calls will be made to addCar
 */

public class DesignParkingSystem {
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════╗");
        System.out.println("║   LeetCode #1603: DESIGN PARKING SYSTEM  ║");
        System.out.println("║   Difficulty: Easy                        ║");
        System.out.println("╚═══════════════════════════════════════════╝\n");
        
        // Test all approaches
        testParkingSystem();
        demonstrateOOPConcepts();
        printInterviewTips();
    }
    
    static void testParkingSystem() {
        System.out.println("=".repeat(70));
        System.out.println("TESTING PARKING SYSTEM IMPLEMENTATIONS");
        System.out.println("=".repeat(70));
        
        // Test Approach 1: Three variables
        System.out.println("\n💡 Approach 1: Three Separate Variables");
        ParkingSystem1 ps1 = new ParkingSystem1(1, 1, 0);
        System.out.println("Created parking: big=1, medium=1, small=0");
        System.out.println("addCar(1 - big): " + ps1.addCar(1));      // true
        System.out.println("addCar(2 - medium): " + ps1.addCar(2));   // true
        System.out.println("addCar(3 - small): " + ps1.addCar(3));    // false
        System.out.println("addCar(1 - big): " + ps1.addCar(1));      // false
        
        // Test Approach 2: Array-based
        System.out.println("\n💡 Approach 2: Array-Based");
        ParkingSystem2 ps2 = new ParkingSystem2(2, 2, 2);
        System.out.println("Created parking: big=2, medium=2, small=2");
        System.out.println("addCar(1): " + ps2.addCar(1));  // true
        System.out.println("addCar(1): " + ps2.addCar(1));  // true
        System.out.println("addCar(1): " + ps2.addCar(1));  // false
        System.out.println("addCar(2): " + ps2.addCar(2));  // true
        
        // Test Approach 3: Enhanced with features
        System.out.println("\n💡 Approach 3: Enhanced Parking System");
        ParkingSystem3 ps3 = new ParkingSystem3(3, 3, 3);
        System.out.println("Created parking: big=3, medium=3, small=3");
        ps3.addCar(1);
        ps3.addCar(2);
        ps3.addCar(3);
        ps3.displayStatus();
        System.out.println("Available big slots: " + ps3.getAvailable(1));
        System.out.println("Available medium slots: " + ps3.getAvailable(2));
    }
    
    static void demonstrateOOPConcepts() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("OOP CONCEPTS DEMONSTRATED");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 Concept 1: ENCAPSULATION");
        System.out.println("- Data (slots) hidden inside class");
        System.out.println("- Access only through methods (addCar)");
        System.out.println("- Internal state protected from direct modification");
        
        System.out.println("\n📖 Concept 2: ABSTRACTION");
        System.out.println("- User doesn't need to know internal implementation");
        System.out.println("- Simple interface: addCar(carType)");
        System.out.println("- Complex logic hidden inside");
        
        System.out.println("\n📖 Concept 3: SINGLE RESPONSIBILITY");
        System.out.println("- Class has one job: manage parking");
        System.out.println("- Each method has one purpose");
        System.out.println("- Easy to maintain and test");
        
        System.out.println("\n📖 Concept 4: OBJECT STATE");
        System.out.println("- Objects maintain state (available slots)");
        System.out.println("- State changes with each operation");
        System.out.println("- Each object instance is independent");
        
        System.out.println("\n💡 Demonstration:");
        ParkingSystem2 parking1 = new ParkingSystem2(5, 5, 5);
        ParkingSystem2 parking2 = new ParkingSystem2(10, 10, 10);
        
        parking1.addCar(1);
        parking1.addCar(1);
        
        System.out.println("\nTwo independent parking lots:");
        System.out.println("parking1 had 2 big cars added");
        System.out.println("parking2 is unchanged");
        System.out.println("✅ Each object maintains its own state!");
    }
    
    static void printInterviewTips() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("INTERVIEW TIPS & TRICKS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n💡 Problem-Solving Approach:");
        
        System.out.println("\n1. Understand the requirements:");
        System.out.println("   - Three types of parking slots");
        System.out.println("   - Track available slots for each type");
        System.out.println("   - Decrement when car parks");
        System.out.println("   - Return true/false based on availability");
        
        System.out.println("\n2. Design the class:");
        System.out.println("   - Constructor: Initialize slot counts");
        System.out.println("   - addCar: Check and update availability");
        System.out.println("   - Use appropriate data structure");
        
        System.out.println("\n3. Consider data structures:");
        System.out.println("   - Three variables (simple)");
        System.out.println("   - Array (scalable)");
        System.out.println("   - HashMap (flexible)");
        
        System.out.println("\n📝 Key Points to Mention:");
        System.out.println("✅ Encapsulation - hide internal data");
        System.out.println("✅ Simple interface - easy to use");
        System.out.println("✅ O(1) time complexity for operations");
        System.out.println("✅ Thread-safety consideration (for advanced)");
        
        System.out.println("\n🎯 Common Interview Questions:");
        
        System.out.println("\nQ: Why use array instead of three variables?");
        System.out.println("A: Scalable - easy to add more car types");
        
        System.out.println("\nQ: How to handle invalid carType?");
        System.out.println("A: Validate input, throw exception or return false");
        
        System.out.println("\nQ: What if we need to remove cars?");
        System.out.println("A: Add removeCar() method to increment count");
        
        System.out.println("\nQ: How to make thread-safe?");
        System.out.println("A: Use synchronized methods or AtomicInteger");
        
        System.out.println("\n🔥 Follow-up Enhancements:");
        System.out.println("1. Add capacity() method");
        System.out.println("2. Add getAvailable(carType) method");
        System.out.println("3. Track which cars are parked");
        System.out.println("4. Add time-based parking fees");
        System.out.println("5. Implement parking/unparking history");
        
        System.out.println("\n⭐ This Problem Tests:");
        System.out.println("✅ OOP design skills");
        System.out.println("✅ Class structure understanding");
        System.out.println("✅ Encapsulation principles");
        System.out.println("✅ Simple logic implementation");
    }
}

// ============================================
// APPROACH 1: THREE SEPARATE VARIABLES
// Time: O(1), Space: O(1)
// ============================================
/**
 * Simple Implementation with Three Variables
 * 
 * Algorithm:
 * - Store three separate integers
 * - Check and decrement based on carType
 * 
 * Pros:
 * + Very simple and straightforward
 * + Easy to understand
 * + O(1) time and space
 * 
 * Cons:
 * - Not scalable (hard to add more types)
 * - Repetitive code
 * 
 * ✅ Good for this specific problem
 */
class ParkingSystem1 {
    private int big;
    private int medium;
    private int small;
    
    public ParkingSystem1(int big, int medium, int small) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }
    
    public boolean addCar(int carType) {
        if (carType == 1) {
            if (big > 0) {
                big--;
                return true;
            }
        } else if (carType == 2) {
            if (medium > 0) {
                medium--;
                return true;
            }
        } else if (carType == 3) {
            if (small > 0) {
                small--;
                return true;
            }
        }
        return false;
    }
}

// ============================================
// APPROACH 2: ARRAY-BASED (BETTER)
// Time: O(1), Space: O(1)
// ============================================
/**
 * Array-Based Implementation
 * 
 * Algorithm:
 * - Use array to store counts
 * - Index represents car type (offset by 1)
 * - slots[0] = big, slots[1] = medium, slots[2] = small
 * 
 * Pros:
 * + More scalable
 * + Cleaner code
 * + Easy to extend
 * 
 * Cons:
 * - Slightly more complex than three variables
 * 
 * ✅ BETTER solution - shows good design
 */
class ParkingSystem2 {
    private int[] slots;
    
    public ParkingSystem2(int big, int medium, int small) {
        slots = new int[3];
        slots[0] = big;     // carType 1
        slots[1] = medium;  // carType 2
        slots[2] = small;   // carType 3
    }
    
    public boolean addCar(int carType) {
        if (carType < 1 || carType > 3) {
            return false;  // Invalid car type
        }
        
        int index = carType - 1;  // Convert to 0-based index
        
        if (slots[index] > 0) {
            slots[index]--;
            return true;
        }
        
        return false;
    }
}

// ============================================
// APPROACH 3: ENHANCED WITH FEATURES
// Time: O(1), Space: O(1)
// ============================================
/**
 * Enhanced Parking System
 * 
 * Features:
 * - Track capacity and current usage
 * - Display status
 * - Get available slots
 * - Better encapsulation
 * 
 * ✅ Production-ready design
 */
class ParkingSystem3 {
    private int[] capacity;
    private int[] occupied;
    private static final String[] TYPES = {"Big", "Medium", "Small"};
    
    public ParkingSystem3(int big, int medium, int small) {
        capacity = new int[]{big, medium, small};
        occupied = new int[3];
    }
    
    public boolean addCar(int carType) {
        if (carType < 1 || carType > 3) {
            System.out.println("Invalid car type: " + carType);
            return false;
        }
        
        int index = carType - 1;
        
        if (occupied[index] < capacity[index]) {
            occupied[index]++;
            System.out.println("Parked " + TYPES[index] + " car. " +
                             "Occupied: " + occupied[index] + "/" + capacity[index]);
            return true;
        }
        
        System.out.println("No " + TYPES[index] + " slots available!");
        return false;
    }
    
    public int getAvailable(int carType) {
        if (carType < 1 || carType > 3) return 0;
        int index = carType - 1;
        return capacity[index] - occupied[index];
    }
    
    public void displayStatus() {
        System.out.println("\n📊 Parking Status:");
        System.out.println("┌──────────┬──────────┬────────────┐");
        System.out.println("│   Type   │ Occupied │ Available  │");
        System.out.println("├──────────┼──────────┼────────────┤");
        for (int i = 0; i < 3; i++) {
            System.out.printf("│ %-8s │   %3d    │    %3d     │%n",
                TYPES[i], occupied[i], capacity[i] - occupied[i]);
        }
        System.out.println("└──────────┴──────────┴────────────┘");
    }
    
    public boolean removeCar(int carType) {
        if (carType < 1 || carType > 3) return false;
        int index = carType - 1;
        
        if (occupied[index] > 0) {
            occupied[index]--;
            System.out.println("Removed " + TYPES[index] + " car");
            return true;
        }
        
        return false;
    }
}

// ============================================
// APPROACH 4: ADVANCED OOP DESIGN
// ============================================
/**
 * Advanced Design with Enum and Classes
 * 
 * Shows advanced OOP concepts:
 * - Enums for car types
 * - Separate Slot class
 * - Better encapsulation
 * 
 * ✅ Shows advanced design skills in interviews
 */
class ParkingSystem4 {
    
    enum CarType {
        BIG(1), MEDIUM(2), SMALL(3);
        
        final int value;
        
        CarType(int value) {
            this.value = value;
        }
        
        static CarType fromInt(int value) {
            for (CarType type : values()) {
                if (type.value == value) return type;
            }
            return null;
        }
    }
    
    static class ParkingSlot {
        private int capacity;
        private int occupied;
        
        ParkingSlot(int capacity) {
            this.capacity = capacity;
            this.occupied = 0;
        }
        
        boolean park() {
            if (occupied < capacity) {
                occupied++;
                return true;
            }
            return false;
        }
        
        int getAvailable() {
            return capacity - occupied;
        }
    }
    
    private ParkingSlot bigSlots;
    private ParkingSlot mediumSlots;
    private ParkingSlot smallSlots;
    
    public ParkingSystem4(int big, int medium, int small) {
        bigSlots = new ParkingSlot(big);
        mediumSlots = new ParkingSlot(medium);
        smallSlots = new ParkingSlot(small);
    }
    
    public boolean addCar(int carType) {
        CarType type = CarType.fromInt(carType);
        if (type == null) return false;
        
        switch (type) {
            case BIG:
                return bigSlots.park();
            case MEDIUM:
                return mediumSlots.park();
            case SMALL:
                return smallSlots.park();
            default:
                return false;
        }
    }
}
