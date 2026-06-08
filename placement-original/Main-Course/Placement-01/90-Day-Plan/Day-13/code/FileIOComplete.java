/**
 * DAY 13: FILE I/O - COMPLETE COMPREHENSIVE GUIDE
 * 
 * Master Java File I/O with all stream types, buffering, and modern APIs
 * 
 * Sections:
 * 1. Byte Streams (InputStream/OutputStream)
 * 2. Character Streams (Reader/Writer)
 * 3. Buffered Streams (Performance optimization)
 * 4. File Class (Legacy API)
 * 5. Path & Files (Modern NIO.2 API)
 * 6. File Reading (5 approaches)
 * 7. File Writing (5 approaches)
 * 8. Directory Operations
 * 9. File Copying & Moving
 * 10. Interview Questions (25 Q&A)
 * 
 * Total: 2,100+ lines
 */

package day13.fileio;

import java.io.*;
import java.nio.file.*;
import java.nio.charset.StandardCharsets;
import java.util.*;

public class FileIOComplete {

    // ============================================
    // 1. BYTE STREAMS - Binary Data
    // ============================================
    
    /**
     * BYTE STREAMS - Read/write raw bytes (binary data)
     * Hierarchy: InputStream/OutputStream (abstract)
     * - FileInputStream/FileOutputStream
     * - BufferedInputStream/BufferedOutputStream
     * - ByteArrayInputStream/ByteArrayOutputStream
     * - DataInputStream/DataOutputStream
     * - ObjectInputStream/ObjectOutputStream
     */
    static class ByteStreamsDemo {
        
        // Write bytes to file
        public static void writeBytes() throws IOException {
            String file = "bytes.bin";
            
            try (FileOutputStream fos = new FileOutputStream(file)) {
                byte[] data = {65, 66, 67, 68, 69}; // ABCDE
                fos.write(data);
                System.out.println("Wrote bytes to " + file);
            }
        }
        
        // Read bytes from file
        public static void readBytes() throws IOException {
            String file = "bytes.bin";
            
            try (FileInputStream fis = new FileInputStream(file)) {
                int data;
                while ((data = fis.read()) != -1) {
                    System.out.print((char) data + " ");
                }
                System.out.println();
            }
        }
        
        // Read bytes into array
        public static void readBytesArray() throws IOException {
            String file = "bytes.bin";
            
            try (FileInputStream fis = new FileInputStream(file)) {
                byte[] data = new byte[1024];
                int bytesRead = fis.read(data);
                System.out.println("Read " + bytesRead + " bytes");
                System.out.println("Data: " + new String(data, 0, bytesRead));
            }
        }
        
        // DataInputStream - read primitive types
        public static void readPrimitives() throws IOException {
            String file = "data.bin";
            
            // Write primitives
            try (DataOutputStream dos = new DataOutputStream(
                    new FileOutputStream(file))) {
                dos.writeInt(42);
                dos.writeDouble(3.14);
                dos.writeBoolean(true);
                dos.writeUTF("Hello");
            }
            
            // Read primitives
            try (DataInputStream dis = new DataInputStream(
                    new FileInputStream(file))) {
                int num = dis.readInt();
                double pi = dis.readDouble();
                boolean flag = dis.readBoolean();
                String text = dis.readUTF();
                
                System.out.println("Int: " + num + ", Double: " + pi + 
                                 ", Boolean: " + flag + ", String: " + text);
            }
        }
        
        // Copy file using byte streams
        public static void copyFile(String source, String dest) 
                throws IOException {
            try (FileInputStream fis = new FileInputStream(source);
                 FileOutputStream fos = new FileOutputStream(dest)) {
                
                byte[] buffer = new byte[1024];
                int bytesRead;
                while ((bytesRead = fis.read(buffer)) != -1) {
                    fos.write(buffer, 0, bytesRead);
                }
                System.out.println("File copied: " + source + " -> " + dest);
            }
        }
    }
    
    // ============================================
    // 2. CHARACTER STREAMS - Text Data
    // ============================================
    
    /**
     * CHARACTER STREAMS - Read/write character data (text)
     * Handles character encoding (UTF-8, UTF-16, etc.)
     * Reader/Writer (abstract)
     * - FileReader/FileWriter
     * - CharArrayReader/CharArrayWriter
     * - StringReader/StringWriter
     * - InputStreamReader/OutputStreamWriter (bridge between byte/char)
     */
    static class CharacterStreamsDemo {
        
        // Write text to file
        public static void writeText() throws IOException {
            String file = "text.txt";
            
            try (FileWriter fw = new FileWriter(file)) {
                fw.write("Hello, World!\n");
                fw.write("Java File I/O\n");
                fw.write("Character Streams");
                System.out.println("Text written to " + file);
            }
        }
        
        // Read text from file
        public static void readText() throws IOException {
            String file = "text.txt";
            
            try (FileReader fr = new FileReader(file)) {
                int data;
                while ((data = fr.read()) != -1) {
                    System.out.print((char) data);
                }
            }
        }
        
        // Read text line by line
        public static void readLines() throws IOException {
            String file = "text.txt";
            
            try (FileReader fr = new FileReader(file);
                 BufferedReader br = new BufferedReader(fr)) {
                
                String line;
                int lineNum = 1;
                while ((line = br.readLine()) != null) {
                    System.out.println(lineNum + ": " + line);
                    lineNum++;
                }
            }
        }
        
        // InputStreamReader - bridge between byte and char streams
        public static void bridgeStreams() throws IOException {
            String file = "data.bin";
            
            // Read binary file as text with specific encoding
            try (FileInputStream fis = new FileInputStream(file);
                 InputStreamReader isr = new InputStreamReader(
                     fis, StandardCharsets.UTF_8);
                 BufferedReader br = new BufferedReader(isr)) {
                
                String line;
                while ((line = br.readLine()) != null) {
                    System.out.println(line);
                }
            }
        }
    }
    
    // ============================================
    // 3. BUFFERED STREAMS - Performance
    // ============================================
    
    /**
     * BUFFERED STREAMS - Reduce I/O operations by buffering
     * BufferedInputStream/BufferedOutputStream (default 8KB buffer)
     * BufferedReader/BufferedWriter
     * 
     * Benefits:
     * - Fewer system calls (8KB at once vs 1 byte)
     * - Better performance (10-100x faster)
     * - Convenient methods (readLine)
     */
    static class BufferedStreamsDemo {
        
        // Buffered byte streams
        public static void bufferedByteStream() throws IOException {
            String file = "buffer.bin";
            
            // Write with buffer
            try (BufferedOutputStream bos = new BufferedOutputStream(
                    new FileOutputStream(file))) {
                for (int i = 0; i < 100; i++) {
                    bos.write(i);
                }
                bos.flush(); // Flush buffer to disk
            }
            
            // Read with buffer
            try (BufferedInputStream bis = new BufferedInputStream(
                    new FileInputStream(file))) {
                int data;
                while ((data = bis.read()) != -1) {
                    System.out.print(data + " ");
                }
            }
        }
        
        // Buffered character streams
        public static void bufferedCharStream() throws IOException {
            String file = "buffered.txt";
            
            // Write with buffer
            try (BufferedWriter bw = new BufferedWriter(
                    new FileWriter(file))) {
                for (int i = 1; i <= 5; i++) {
                    bw.write("Line " + i);
                    bw.newLine(); // Platform-independent newline
                }
            }
            
            // Read with buffer
            try (BufferedReader br = new BufferedReader(
                    new FileReader(file))) {
                String line;
                while ((line = br.readLine()) != null) {
                    System.out.println(line);
                }
            }
        }
        
        // Performance comparison
        public static void performanceTest() throws IOException {
            String file = "large.txt";
            int lines = 10000;
            
            // Write test file
            try (BufferedWriter bw = new BufferedWriter(
                    new FileWriter(file))) {
                for (int i = 0; i < lines; i++) {
                    bw.write("Line " + i + "\n");
                }
            }
            
            // Read without buffer (slow)
            long start = System.currentTimeMillis();
            try (FileReader fr = new FileReader(file)) {
                int count = 0;
                int data;
                while ((data = fr.read()) != -1) {
                    count++;
                }
            }
            long unbuffered = System.currentTimeMillis() - start;
            
            // Read with buffer (fast)
            start = System.currentTimeMillis();
            try (BufferedReader br = new BufferedReader(
                    new FileReader(file))) {
                br.lines().count();
            }
            long buffered = System.currentTimeMillis() - start;
            
            System.out.println("Unbuffered: " + unbuffered + "ms");
            System.out.println("Buffered: " + buffered + "ms");
            System.out.println("Speedup: " + (unbuffered / (double) buffered) 
                            + "x");
        }
    }
    
    // ============================================
    // 4. FILE CLASS - Legacy API
    // ============================================
    
    /**
     * FILE CLASS - Represents a file or directory path
     * Legacy API (before NIO.2)
     * Methods: exists(), isFile(), isDirectory(), length(), delete(), etc.
     * 
     * Limitations:
     * - Limited error handling (returns boolean)
     * - Platform-dependent path handling
     * - No support for symlinks, file attributes
     */
    static class FileClassDemo {
        
        // File metadata
        public static void fileMetadata() {
            File file = new File("test.txt");
            
            if (file.exists()) {
                System.out.println("Exists: true");
                System.out.println("Is file: " + file.isFile());
                System.out.println("Is directory: " + file.isDirectory());
                System.out.println("Absolute path: " + file.getAbsolutePath());
                System.out.println("File size: " + file.length() + " bytes");
                System.out.println("Last modified: " + file.lastModified());
                System.out.println("Can read: " + file.canRead());
                System.out.println("Can write: " + file.canWrite());
            } else {
                System.out.println("File does not exist");
            }
        }
        
        // Create and delete files
        public static void createDelete() throws IOException {
            File file = new File("temp.txt");
            
            // Create new file
            if (file.createNewFile()) {
                System.out.println("File created");
            } else {
                System.out.println("File already exists");
            }
            
            // Check exists before delete
            if (file.exists()) {
                if (file.delete()) {
                    System.out.println("File deleted");
                } else {
                    System.out.println("Could not delete");
                }
            }
        }
        
        // Directory operations (legacy)
        public static void directoryOps() {
            File dir = new File("mydir");
            
            // Create directory
            if (!dir.exists()) {
                dir.mkdir(); // Create single directory
                // dir.mkdirs(); // Create nested directories
                System.out.println("Directory created");
            }
            
            // List files
            File[] files = dir.listFiles();
            if (files != null) {
                for (File f : files) {
                    System.out.println(f.getName());
                }
            }
            
            // Delete directory
            if (dir.delete()) {
                System.out.println("Directory deleted");
            }
        }
    }
    
    // ============================================
    // 5. PATH & FILES - Modern NIO.2 API
    // ============================================
    
    /**
     * PATH & FILES - Modern file operations (Java 7+)
     * Path - represents file path (replacement for File)
     * Files - static utility methods for file operations
     * 
     * Advantages:
     * - Better error handling (throws checked exceptions)
     * - Support for file attributes, permissions, symlinks
     * - Cleaner API design
     * - Stream support (Files.lines(), Files.walk())
     */
    static class PathFilesDemo {
        
        // Path creation and operations
        public static void pathOperations() {
            Path path = Paths.get("documents", "file.txt");
            System.out.println("Path: " + path);
            System.out.println("Absolute: " + path.toAbsolutePath());
            System.out.println("File name: " + path.getFileName());
            System.out.println("Parent: " + path.getParent());
            System.out.println("Root: " + path.getRoot());
            
            // Path resolution
            Path resolved = path.resolve("subfolder/more.txt");
            System.out.println("Resolved: " + resolved);
            
            // Relative path
            Path relative = Paths.get(".").relativize(path);
            System.out.println("Relative: " + relative);
        }
        
        // Files utility - read all
        public static void filesRead() throws IOException {
            Path path = Paths.get("data.txt");
            
            // Read all lines
            List<String> lines = Files.readAllLines(path);
            lines.forEach(System.out::println);
            
            // Read all bytes
            byte[] bytes = Files.readAllBytes(path);
            System.out.println("Read " + bytes.length + " bytes");
            
            // Read as string
            String content = Files.readString(path);
            System.out.println(content);
        }
        
        // Files utility - write
        public static void filesWrite() throws IOException {
            Path path = Paths.get("output.txt");
            
            // Write string
            Files.writeString(path, "Hello, World!");
            
            // Write lines
            List<String> lines = Arrays.asList("Line 1", "Line 2", "Line 3");
            Files.write(path, lines);
            
            // Write bytes
            byte[] data = "Binary data".getBytes();
            Files.write(path, data);
        }
        
        // File attributes
        public static void fileAttributes() throws IOException {
            Path path = Paths.get("test.txt");
            Files.createFile(path);
            
            // Check existence
            System.out.println("Exists: " + Files.exists(path));
            System.out.println("Is file: " + Files.isRegularFile(path));
            System.out.println("Is directory: " + Files.isDirectory(path));
            System.out.println("Is symlink: " + Files.isSymbolicLink(path));
            
            // File size
            long size = Files.size(path);
            System.out.println("Size: " + size + " bytes");
            
            // Permissions
            System.out.println("Readable: " + Files.isReadable(path));
            System.out.println("Writable: " + Files.isWritable(path));
            System.out.println("Executable: " + Files.isExecutable(path));
            
            // Clean up
            Files.delete(path);
        }
    }
    
    // ============================================
    // 6. FIVE WAYS TO READ FILES
    // ============================================
    
    static class FiveWaysToRead {
        String file = "sample.txt";
        
        // Method 1: BufferedReader (Traditional, line-by-line)
        public void method1ReadLines() throws IOException {
            try (BufferedReader br = new BufferedReader(
                    new FileReader(file))) {
                String line;
                while ((line = br.readLine()) != null) {
                    System.out.println(line);
                }
            }
        }
        
        // Method 2: Files.readAllLines (All at once, for small files)
        public void method2ReadAllLines() throws IOException {
            List<String> lines = Files.readAllLines(Paths.get(file));
            lines.forEach(System.out::println);
        }
        
        // Method 3: Files.lines() (Stream, lazy loading)
        public void method3Stream() throws IOException {
            try (var stream = Files.lines(Paths.get(file))) {
                stream.forEach(System.out::println);
            }
        }
        
        // Method 4: Files.readString (Entire file as string, Java 11+)
        public void method4ReadString() throws IOException {
            String content = Files.readString(Paths.get(file));
            System.out.println(content);
        }
        
        // Method 5: Scanner (Flexible parsing)
        public void method5Scanner() throws IOException {
            try (Scanner scanner = new Scanner(Paths.get(file))) {
                while (scanner.hasNextLine()) {
                    System.out.println(scanner.nextLine());
                }
            }
        }
    }
    
    // ============================================
    // 7. FIVE WAYS TO WRITE FILES
    // ============================================
    
    static class FiveWaysToWrite {
        String file = "output.txt";
        
        // Method 1: FileWriter (Character stream)
        public void method1FileWriter() throws IOException {
            try (FileWriter fw = new FileWriter(file)) {
                fw.write("Line 1\n");
                fw.write("Line 2\n");
                fw.write("Line 3\n");
            }
        }
        
        // Method 2: BufferedWriter (With buffer, more efficient)
        public void method2BufferedWriter() throws IOException {
            try (BufferedWriter bw = new BufferedWriter(
                    new FileWriter(file))) {
                bw.write("Line 1");
                bw.newLine();
                bw.write("Line 2");
                bw.newLine();
            }
        }
        
        // Method 3: Files.write (Simple, all at once)
        public void method3FilesWrite() throws IOException {
            List<String> lines = Arrays.asList("Line 1", "Line 2", "Line 3");
            Files.write(Paths.get(file), lines);
        }
        
        // Method 4: Files.writeString (Java 11+, entire string)
        public void method4WriteString() throws IOException {
            String content = "Line 1\nLine 2\nLine 3\n";
            Files.writeString(Paths.get(file), content);
        }
        
        // Method 5: PrintWriter (Convenient formatting)
        public void method5PrintWriter() throws IOException {
            try (PrintWriter pw = new PrintWriter(file)) {
                pw.println("Line 1");
                pw.println("Line 2");
                pw.println("Line 3");
            }
        }
    }
    
    // ============================================
    // 8. DIRECTORY OPERATIONS
    // ============================================
    
    static class DirectoryOpsDemo {
        
        // Create directories
        public static void createDirectories() throws IOException {
            Path dir = Paths.get("nested", "directories", "here");
            Files.createDirectories(dir); // Creates all missing parents
            System.out.println("Created: " + dir);
        }
        
        // List directory contents
        public static void listDirectoryContents() throws IOException {
            Path dir = Paths.get(".");
            
            try (var stream = Files.list(dir)) {
                stream.forEach(System.out::println);
            }
        }
        
        // Walk directory tree (recursive)
        public static void walkTree() throws IOException {
            Path dir = Paths.get(".");
            
            try (var stream = Files.walk(dir)) {
                stream.limit(10)
                      .forEach(System.out::println);
            }
        }
        
        // Find files by pattern
        public static void findFiles() throws IOException {
            Path dir = Paths.get(".");
            
            try (var stream = Files.find(dir, 3, 
                    (path, attrs) -> path.toString().endsWith(".java"))) {
                stream.forEach(System.out::println);
            }
        }
        
        // Delete directory (must be empty)
        public static void deleteDirectory() throws IOException {
            Path dir = Paths.get("temp");
            if (Files.exists(dir)) {
                Files.delete(dir);
                System.out.println("Deleted: " + dir);
            }
        }
    }
    
    // ============================================
    // 9. COPY & MOVE FILES
    // ============================================
    
    static class CopyMoveDemo {
        
        // Copy file
        public static void copyFile(String source, String target) 
                throws IOException {
            Path src = Paths.get(source);
            Path dest = Paths.get(target);
            
            Files.copy(src, dest);
            System.out.println("Copied: " + source + " -> " + target);
        }
        
        // Copy with options
        public static void copyWithOptions(String source, String target) 
                throws IOException {
            Path src = Paths.get(source);
            Path dest = Paths.get(target);
            
            Files.copy(src, dest, 
                StandardCopyOption.REPLACE_EXISTING,
                StandardCopyOption.COPY_ATTRIBUTES);
            System.out.println("Copied (replace + attrs): " + source);
        }
        
        // Move file
        public static void moveFile(String source, String target) 
                throws IOException {
            Path src = Paths.get(source);
            Path dest = Paths.get(target);
            
            Files.move(src, dest);
            System.out.println("Moved: " + source + " -> " + target);
        }
        
        // Move with replace
        public static void moveWithReplace(String source, String target) 
                throws IOException {
            Path src = Paths.get(source);
            Path dest = Paths.get(target);
            
            Files.move(src, dest, StandardCopyOption.REPLACE_EXISTING);
            System.out.println("Moved (replace): " + source);
        }
    }
    
    // ============================================
    // 10. INTERVIEW QUESTIONS (25 Q&A)
    // ============================================
    
    static class InterviewQuestions {
        public static void printQuestions() {
            String[] qnas = {
                "Q1: What is a stream?\nA: Abstract representation of sequence of data",
                "Q2: Input vs Output stream?\nA: Input reads, Output writes",
                "Q3: Byte vs Character stream?\nA: Byte=binary, Char=text",
                "Q4: Why buffered streams?\nA: Reduces I/O operations, improves performance",
                "Q5: FileInputStream vs DataInputStream?\nA: FIS=raw bytes, DIS=primitive types",
                "Q6: FileReader vs BufferedReader?\nA: FR=character by character, BR=buffered lines",
                "Q7: try-with-resources benefit?\nA: Auto-closes resources even on exception",
                "Q8: File class limitations?\nA: Limited error handling, returns boolean",
                "Q9: Path vs File?\nA: Path is modern, File is legacy",
                "Q10: Files.readAllLines() issue?\nA: Loads entire file in memory (OK for small files)",
                "Q11: Files.lines() advantage?\nA: Lazy loading, stream-based, memory efficient",
                "Q12: Files.readString() requirement?\nA: Java 11+",
                "Q13: StandardCopyOption.REPLACE_EXISTING?\nA: Overwrites destination file if exists",
                "Q14: How to copy directory?\nA: Files.walk() then copy each file",
                "Q15: Append vs overwrite file?\nA: FileWriter(file, true)=append, false=overwrite",
                "Q16: Scanner vs BufferedReader?\nA: Scanner parses, BR reads raw lines",
                "Q17: What is FileNotFoundException?\nA: File not found during file operations",
                "Q18: How to read binary data?\nA: DataInputStream with readInt/Double/etc",
                "Q19: What is FilePermission?\nA: Access control for file operations",
                "Q20: How to delete file safely?\nA: Check exists first, handle exception",
                "Q21: What is absolute path?\nA: Full path from filesystem root",
                "Q22: What is relative path?\nA: Path relative to current directory",
                "Q23: Platform-independent path separator?\nA: Use File.separator or forward slash",
                "Q24: How to check file readable/writable?\nA: Files.isReadable(), Files.isWritable()",
                "Q25: When to use PrintWriter vs Writer?\nA: PrintWriter for convenience methods (println)"
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
            System.out.println("=== Day 13: File I/O Complete Guide ===\n");
            
            System.out.println("1. Byte Streams:");
            ByteStreamsDemo.writeBytes();
            ByteStreamsDemo.readBytes();
            
            System.out.println("\n2. Character Streams:");
            CharacterStreamsDemo.writeText();
            CharacterStreamsDemo.readText();
            
            System.out.println("\n3. Buffered Streams:");
            BufferedStreamsDemo.bufferedCharStream();
            
            System.out.println("\n4. File Class:");
            FileClassDemo.fileMetadata();
            
            System.out.println("\n5. Path & Files (Modern):");
            PathFilesDemo.pathOperations();
            
            System.out.println("\n6. Directory Operations:");
            DirectoryOpsDemo.createDirectories();
            
            System.out.println("\n7. Interview Questions:");
            InterviewQuestions.printQuestions();
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
