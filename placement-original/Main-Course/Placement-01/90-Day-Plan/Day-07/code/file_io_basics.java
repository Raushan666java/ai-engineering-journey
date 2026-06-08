/**
 * Day 7 - File I/O Basics
 * Demonstrates byte streams, character streams, and buffered I/O
 */

import java.io.*;

public class file_io_basics {

    public static void main(String[] args) {
        System.out.println("=== FILE I/O BASICS - DAY 7 ===\n");

        demonstrateByteStreams();
        demonstrateCharacterStreams();
        demonstrateBufferedIO();
        demonstratePrintWriter();
    }

    public static void demonstrateByteStreams() {
        System.out.println("1. BYTE STREAMS (FileInputStream/FileOutputStream)");
        
        String filename = "test_bytes.dat";
        byte[] data = {65, 66, 67, 68, 69}; // ABCDE
        
        // Write
        try (FileOutputStream fos = new FileOutputStream(filename)) {
            fos.write(data);
            System.out.println("Wrote " + data.length + " bytes to " + filename);
        } catch (IOException e) {
            System.out.println("Write failed: " + e.getMessage());
        }
        
        // Read
        try (FileInputStream fis = new FileInputStream(filename)) {
            int b;
            System.out.print("Read bytes: ");
            while ((b = fis.read()) != -1) {
                System.out.print((char)b);
            }
            System.out.println();
        } catch (IOException e) {
            System.out.println("Read failed: " + e.getMessage());
        }
        
        System.out.println();
    }

    public static void demonstrateCharacterStreams() {
        System.out.println("2. CHARACTER STREAMS (FileReader/FileWriter)");
        
        String filename = "test_chars.txt";
        String text = "Hello File I/O!";
        
        // Write
        try (FileWriter fw = new FileWriter(filename)) {
            fw.write(text);
            System.out.println("Wrote text to " + filename);
        } catch (IOException e) {
            System.out.println("Write failed: " + e.getMessage());
        }
        
        // Read
        try (FileReader fr = new FileReader(filename)) {
            int c;
            System.out.print("Read text: ");
            while ((c = fr.read()) != -1) {
                System.out.print((char)c);
            }
            System.out.println();
        } catch (IOException e) {
            System.out.println("Read failed: " + e.getMessage());
        }
        
        System.out.println();
    }

    public static void demonstrateBufferedIO() {
        System.out.println("3. BUFFERED I/O (BufferedReader/BufferedWriter)");
        
        String filename = "test_buffered.txt";
        String[] lines = {"Line 1", "Line 2", "Line 3"};
        
        // Write
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(filename))) {
            for (String line : lines) {
                bw.write(line);
                bw.newLine();
            }
            System.out.println("Wrote " + lines.length + " lines to " + filename);
        } catch (IOException e) {
            System.out.println("Write failed: " + e.getMessage());
        }
        
        // Read
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            String line;
            System.out.println("Read lines:");
            while ((line = br.readLine()) != null) {
                System.out.println("  " + line);
            }
        } catch (IOException e) {
            System.out.println("Read failed: " + e.getMessage());
        }
        
        System.out.println();
    }

    public static void demonstratePrintWriter() {
        System.out.println("4. PRINTWRITER (formatted output)");
        
        String filename = "test_print.txt";
        
        try (PrintWriter pw = new PrintWriter(new FileWriter(filename))) {
            pw.println("Name: Alice");
            pw.println("Age: 25");
            pw.printf("Score: %.2f%n", 95.5);
            System.out.println("Wrote formatted data to " + filename);
        } catch (IOException e) {
            System.out.println("Write failed: " + e.getMessage());
        }
        
        System.out.println();
    }
}
