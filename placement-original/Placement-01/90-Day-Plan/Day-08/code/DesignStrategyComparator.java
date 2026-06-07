/**
 * DESIGN: STRATEGY PATTERN + Comparator/Comparable (Day 8)
 * - Demonstrates Comparable and Comparator
 * - Strategy pattern for choosing different comparators at runtime
 */

import java.util.*;

public class DesignStrategyComparator {
    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════════════════════════════════╗");
        System.out.println("║      DESIGN: STRATEGY + Comparator/Comparable EXAMPLE     ║");
        System.out.println("╚══════════════════════════════════════════════════════════╝\n");

        List<Product> products = Arrays.asList(
            new Product("P1", 50),
            new Product("P2", 10),
            new Product("P3", 75));

        System.out.println("Original: "); products.forEach(p -> System.out.println(p));

        // Use Comparable (default ordering by price)
        List<Product> copy = new ArrayList<>(products);
        Collections.sort(copy);
        System.out.println("\nSorted by Comparable (price):"); copy.forEach(System.out::println);

        // Use Comparator (name)
        Collections.sort(copy, new ProductNameComparator());
        System.out.println("\nSorted by name (Comparator):"); copy.forEach(System.out::println);

        // Strategy: choose comparator at runtime
        Comparator<Product> strategy = new ProductPriceComparator();
        copy.sort(strategy);
        System.out.println("\nSorted by strategy (price comparator):"); copy.forEach(System.out::println);
    }
}

class Product implements Comparable<Product> {
    String id; int price; Product(String id, int price){ this.id=id; this.price=price; }
    public int compareTo(Product other){ return this.price - other.price; }
    public String toString(){ return id + ":$" + price; }
}

class ProductNameComparator implements Comparator<Product> {
    public int compare(Product a, Product b){ return a.id.compareTo(b.id); }
}

class ProductPriceComparator implements Comparator<Product> {
    public int compare(Product a, Product b){ return Integer.compare(a.price, b.price); }
}
