/**
 * Day 7 - Practice Problems for File I/O
 */

import java.io.*;
import java.nio.file.*;
import java.util.*;

public class practice_problems {

    public static void main(String[] args) {
        System.out.println("=== FILE I/O PRACTICE - DAY 7 ===\n");

        problem1_countLines();
        problem2_copyFile();
        problem3_wordFrequency();
        problem4_reverseFileLines();
    }

    // Problem 1: Count lines in a file
    public static void problem1_countLines() {
        System.out.println("Problem 1: Count lines in file");
        
        Path path = Paths.get("test_buffered.txt");
        try {
            long count = Files.lines(path).count();
            System.out.println("Line count: " + count);
        } catch (IOException e) {
            System.out.println("Failed: " + e.getMessage());
        }
        
        System.out.println();
    }

    // Problem 2: Copy file using NIO
    public static void problem2_copyFile() {
        System.out.println("Problem 2: Copy file");
        
        Path source = Paths.get("test_nio.txt");
        Path target = Paths.get("test_nio_backup.txt");
        
        try {
            Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
            System.out.println("Copied " + source + " to " + target);
            Files.delete(target);
        } catch (IOException e) {
            System.out.println("Copy failed: " + e.getMessage());
        }
        
        System.out.println();
    }

    // Problem 3: Word frequency in file
    public static void problem3_wordFrequency() {
        System.out.println("Problem 3: Word frequency");
        
        Path path = Paths.get("test_buffered.txt");
        Map<String, Integer> freq = new HashMap<>();
        
        try {
            Files.lines(path).forEach(line -> {
                for (String word : line.split("\\s+")) {
                    freq.put(word, freq.getOrDefault(word, 0) + 1);
                }
            });
            System.out.println("Word frequencies: " + freq);
        } catch (IOException e) {
            System.out.println("Failed: " + e.getMessage());
        }
        
        System.out.println();
    }

    // Problem 4: Reverse lines and write to new file
    public static void problem4_reverseFileLines() {
        System.out.println("Problem 4: Reverse file lines");
        
        Path input = Paths.get("test_buffered.txt");
        Path output = Paths.get("test_reversed.txt");
        
        try {
            List<String> lines = Files.readAllLines(input);
            Collections.reverse(lines);
            Files.write(output, lines);
            System.out.println("Reversed lines written to " + output);
            System.out.println("Content: " + Files.readAllLines(output));
            Files.delete(output);
        } catch (IOException e) {
            System.out.println("Failed: " + e.getMessage());
        }
        
        System.out.println();
    }
}
