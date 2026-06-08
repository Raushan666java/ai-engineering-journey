/**
 * Day 7 - NIO Basics (java.nio.file)
 * Demonstrates modern file operations using Files and Path
 */

import java.nio.file.*;
import java.io.IOException;
import java.util.List;
import java.util.stream.Stream;

public class nio_basics {

    public static void main(String[] args) {
        System.out.println("=== NIO BASICS - DAY 7 ===\n");

        demonstratePathOperations();
        demonstrateFileOperations();
        demonstrateDirectoryOperations();
    }

    public static void demonstratePathOperations() {
        System.out.println("1. PATH OPERATIONS");
        
        Path path = Paths.get("test_nio.txt");
        System.out.println("Path: " + path);
        System.out.println("Absolute: " + path.toAbsolutePath());
        System.out.println("File name: " + path.getFileName());
        System.out.println("Parent: " + path.getParent());
        
        System.out.println();
    }

    public static void demonstrateFileOperations() {
        System.out.println("2. FILE OPERATIONS (Files utility)");
        
        Path path = Paths.get("test_nio.txt");
        
        try {
            // Write
            List<String> lines = List.of("Line A", "Line B", "Line C");
            Files.write(path, lines);
            System.out.println("Wrote " + lines.size() + " lines");
            
            // Read
            List<String> readLines = Files.readAllLines(path);
            System.out.println("Read lines: " + readLines);
            
            // File info
            System.out.println("Exists: " + Files.exists(path));
            System.out.println("Size: " + Files.size(path) + " bytes");
            System.out.println("Readable: " + Files.isReadable(path));
            
            // Copy
            Path copy = Paths.get("test_nio_copy.txt");
            Files.copy(path, copy, StandardCopyOption.REPLACE_EXISTING);
            System.out.println("Copied to: " + copy);
            
            // Delete
            Files.delete(copy);
            System.out.println("Deleted copy");
            
        } catch (IOException e) {
            System.out.println("Operation failed: " + e.getMessage());
        }
        
        System.out.println();
    }

    public static void demonstrateDirectoryOperations() {
        System.out.println("3. DIRECTORY OPERATIONS");
        
        Path dir = Paths.get("test_dir");
        
        try {
            // Create directory
            if (!Files.exists(dir)) {
                Files.createDirectory(dir);
                System.out.println("Created directory: " + dir);
            }
            
            // Create files in directory
            Files.write(dir.resolve("file1.txt"), List.of("Content 1"));
            Files.write(dir.resolve("file2.txt"), List.of("Content 2"));
            
            // List directory
            System.out.println("Directory contents:");
            try (Stream<Path> stream = Files.list(dir)) {
                stream.forEach(p -> System.out.println("  " + p.getFileName()));
            }
            
            // Clean up
            try (Stream<Path> stream = Files.list(dir)) {
                stream.forEach(p -> {
                    try { Files.delete(p); } catch (IOException e) {}
                });
            }
            Files.delete(dir);
            System.out.println("Cleaned up directory");
            
        } catch (IOException e) {
            System.out.println("Directory operation failed: " + e.getMessage());
        }
        
        System.out.println();
    }
}
