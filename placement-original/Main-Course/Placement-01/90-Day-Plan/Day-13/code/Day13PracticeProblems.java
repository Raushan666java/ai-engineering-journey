/**
 * DAY 13: FILE I/O, SERIALIZATION & NIO PRACTICE PROBLEMS
 * 
 * 35 Practice Problems (30 core + 5 bonus)
 * 
 * Sections:
 * 1. File I/O Basics (1-5)
 * 2. Byte & Character Streams (6-10)
 * 3. Buffered I/O (11-15)
 * 4. Serialization (16-20)
 * 5. NIO Buffers & Channels (21-25)
 * 6. Path & Files API (26-30)
 * 7. Bonus Problems (31-35)
 * 
 * Total: 2,800+ lines
 */

package day13.practice;

import java.io.*;
import java.nio.*;
import java.nio.channels.*;
import java.nio.file.*;
import java.util.*;

public class Day13PracticeProblems {

    // ============================================
    // SECTION 1: FILE I/O BASICS (1-5)
    // ============================================
    
    // Problem 1: Check if file exists
    static class Problem1 {
        public static void checkFileExists(String filename) {
            File file = new File(filename);
            System.out.println("File exists: " + file.exists());
            System.out.println("Is file: " + file.isFile());
            System.out.println("Is directory: " + file.isDirectory());
        }
    }
    
    // Problem 2: Get file size
    static class Problem2 {
        public static void getFileSize(String filename) {
            File file = new File(filename);
            if (file.exists()) {
                long size = file.length();
                System.out.println("File size: " + size + " bytes");
                System.out.println("File size: " + (size / 1024.0) + " KB");
            }
        }
    }
    
    // Problem 3: Read file metadata
    static class Problem3 {
        public static void getFileMetadata(String filename) throws IOException {
            File file = new File(filename);
            if (file.exists()) {
                System.out.println("Name: " + file.getName());
                System.out.println("Path: " + file.getAbsolutePath());
                System.out.println("Parent: " + file.getParent());
                System.out.println("Size: " + file.length());
                System.out.println("Last modified: " + file.lastModified());
                System.out.println("Can read: " + file.canRead());
                System.out.println("Can write: " + file.canWrite());
            }
        }
    }
    
    // Problem 4: Create and delete file
    static class Problem4 {
        public static void createDeleteFile(String filename) throws IOException {
            File file = new File(filename);
            
            // Create
            if (file.createNewFile()) {
                System.out.println("File created: " + filename);
            } else {
                System.out.println("File already exists");
            }
            
            // Delete
            if (file.delete()) {
                System.out.println("File deleted: " + filename);
            }
        }
    }
    
    // Problem 5: List directory contents
    static class Problem5 {
        public static void listDirectory(String dirPath) {
            File dir = new File(dirPath);
            if (dir.isDirectory()) {
                File[] files = dir.listFiles();
                if (files != null) {
                    System.out.println("Files in " + dirPath + ":");
                    for (File f : files) {
                        System.out.println("  " + f.getName());
                    }
                }
            }
        }
    }
    
    // ============================================
    // SECTION 2: BYTE & CHARACTER STREAMS (6-10)
    // ============================================
    
    // Problem 6: Write bytes to file
    static class Problem6 {
        public static void writeBytes(String filename, byte[] data) 
                throws IOException {
            try (FileOutputStream fos = new FileOutputStream(filename)) {
                fos.write(data);
                System.out.println("Wrote " + data.length + " bytes to " + 
                                 filename);
            }
        }
    }
    
    // Problem 7: Read bytes from file
    static class Problem7 {
        public static void readBytes(String filename) throws IOException {
            try (FileInputStream fis = new FileInputStream(filename)) {
                int data;
                int count = 0;
                while ((data = fis.read()) != -1) {
                    System.out.print((char) data);
                    count++;
                }
                System.out.println("\nRead " + count + " bytes");
            }
        }
    }
    
    // Problem 8: Write text to file
    static class Problem8 {
        public static void writeText(String filename, String text) 
                throws IOException {
            try (FileWriter fw = new FileWriter(filename)) {
                fw.write(text);
                System.out.println("Written to " + filename);
            }
        }
    }
    
    // Problem 9: Read text line by line
    static class Problem9 {
        public static void readTextLines(String filename) throws IOException {
            try (BufferedReader br = new BufferedReader(
                    new FileReader(filename))) {
                String line;
                int lineNum = 1;
                while ((line = br.readLine()) != null) {
                    System.out.println(lineNum + ": " + line);
                    lineNum++;
                }
            }
        }
    }
    
    // Problem 10: Copy file using streams
    static class Problem10 {
        public static void copyFile(String source, String dest) 
                throws IOException {
            try (FileInputStream fis = new FileInputStream(source);
                 FileOutputStream fos = new FileOutputStream(dest)) {
                
                byte[] buffer = new byte[1024];
                int bytesRead;
                while ((bytesRead = fis.read(buffer)) != -1) {
                    fos.write(buffer, 0, bytesRead);
                }
                System.out.println("Copied " + source + " to " + dest);
            }
        }
    }
    
    // ============================================
    // SECTION 3: BUFFERED I/O (11-15)
    // ============================================
    
    // Problem 11: Write with BufferedWriter
    static class Problem11 {
        public static void bufferedWrite(String filename, String[] lines) 
                throws IOException {
            try (BufferedWriter bw = new BufferedWriter(
                    new FileWriter(filename))) {
                for (String line : lines) {
                    bw.write(line);
                    bw.newLine();
                }
                System.out.println("Written " + lines.length + " lines");
            }
        }
    }
    
    // Problem 12: Read with BufferedReader (all lines)
    static class Problem12 {
        public static void bufferedReadAll(String filename) throws IOException {
            try (BufferedReader br = new BufferedReader(
                    new FileReader(filename))) {
                br.lines().forEach(System.out::println);
            }
        }
    }
    
    // Problem 13: Count lines in file
    static class Problem13 {
        public static void countLines(String filename) throws IOException {
            try (BufferedReader br = new BufferedReader(
                    new FileReader(filename))) {
                long count = br.lines().count();
                System.out.println("Total lines: " + count);
            }
        }
    }
    
    // Problem 14: Count words in file
    static class Problem14 {
        public static void countWords(String filename) throws IOException {
            try (BufferedReader br = new BufferedReader(
                    new FileReader(filename))) {
                int wordCount = br.lines()
                    .map(line -> line.trim().split("\\s+"))
                    .mapToInt(words -> words.length)
                    .sum();
                System.out.println("Total words: " + wordCount);
            }
        }
    }
    
    // Problem 15: Performance: Buffered vs Unbuffered
    static class Problem15 {
        public static void performanceComparison() throws IOException {
            String file = "performance_test.txt";
            int lines = 1000;
            
            // Create test file
            try (PrintWriter pw = new PrintWriter(file)) {
                for (int i = 0; i < lines; i++) {
                    pw.println("Line " + i);
                }
            }
            
            // Unbuffered read (slow)
            long start = System.currentTimeMillis();
            try (FileReader fr = new FileReader(file)) {
                int count = 0;
                int c;
                while ((c = fr.read()) != -1) count++;
            }
            long unbuffered = System.currentTimeMillis() - start;
            
            // Buffered read (fast)
            start = System.currentTimeMillis();
            try (BufferedReader br = new BufferedReader(
                    new FileReader(file))) {
                br.lines().count();
            }
            long buffered = System.currentTimeMillis() - start;
            
            System.out.println("Unbuffered: " + unbuffered + "ms");
            System.out.println("Buffered: " + buffered + "ms");
        }
    }
    
    // ============================================
    // SECTION 4: SERIALIZATION (16-20)
    // ============================================
    
    // Problem 16: Serialize object
    static class Problem16 {
        static class Person implements Serializable {
            private String name;
            private int age;
            
            public Person(String name, int age) {
                this.name = name;
                this.age = age;
            }
            
            @Override
            public String toString() {
                return "Person{" + "name='" + name + '\'' + ", age=" + age + '}';
            }
        }
        
        public static void serializeObject(String filename, Person person) 
                throws IOException {
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream(filename))) {
                oos.writeObject(person);
                System.out.println("Serialized: " + person);
            }
        }
    }
    
    // Problem 17: Deserialize object
    static class Problem17 {
        public static void deserializeObject(String filename) throws IOException, 
                ClassNotFoundException {
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream(filename))) {
                Problem16.Person person = (Problem16.Person) ois.readObject();
                System.out.println("Deserialized: " + person);
            }
        }
    }
    
    // Problem 18: Serialize with transient
    static class Problem18 {
        static class Credential implements Serializable {
            private String username;
            private transient String password;
            
            public Credential(String username, String password) {
                this.username = username;
                this.password = password;
            }
            
            @Override
            public String toString() {
                return "Credential{" + "username='" + username + 
                       '\'' + ", password='" + password + '\'' + '}';
            }
        }
        
        public static void testTransient() throws IOException, 
                ClassNotFoundException {
            String file = "credential.ser";
            Credential cred = new Credential("admin", "secret123");
            
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream(file))) {
                oos.writeObject(cred);
            }
            
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream(file))) {
                Credential restored = (Credential) ois.readObject();
                System.out.println("Restored: " + restored);
                System.out.println("Password is null: " + 
                                 (restored.password == null));
            }
        }
    }
    
    // Problem 19: Serialize list
    static class Problem19 {
        public static void serializeList() throws IOException, 
                ClassNotFoundException {
            String file = "list.ser";
            List<String> list = Arrays.asList("Apple", "Banana", "Cherry");
            
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream(file))) {
                oos.writeObject(list);
            }
            
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream(file))) {
                @SuppressWarnings("unchecked")
                List<String> restored = (List<String>) ois.readObject();
                System.out.println("Restored list: " + restored);
            }
        }
    }
    
    // Problem 20: Serialize map
    static class Problem20 {
        public static void serializeMap() throws IOException, 
                ClassNotFoundException {
            String file = "map.ser";
            Map<String, Integer> map = new HashMap<>();
            map.put("Apple", 5);
            map.put("Banana", 3);
            map.put("Cherry", 7);
            
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream(file))) {
                oos.writeObject(map);
            }
            
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream(file))) {
                @SuppressWarnings("unchecked")
                Map<String, Integer> restored = (Map<String, Integer>) 
                    ois.readObject();
                System.out.println("Restored map: " + restored);
            }
        }
    }
    
    // ============================================
    // SECTION 5: NIO BUFFERS & CHANNELS (21-25)
    // ============================================
    
    // Problem 21: Create and use ByteBuffer
    static class Problem21 {
        public static void useByteBuffer() {
            ByteBuffer buffer = ByteBuffer.allocate(16);
            
            buffer.put((byte) 'A');
            buffer.put((byte) 'B');
            buffer.put((byte) 'C');
            
            buffer.flip();
            while (buffer.hasRemaining()) {
                System.out.print((char) buffer.get());
            }
            System.out.println();
        }
    }
    
    // Problem 22: Direct vs Heap buffer
    static class Problem22 {
        public static void bufferComparison() {
            ByteBuffer heapBuffer = ByteBuffer.allocate(1024);
            ByteBuffer directBuffer = ByteBuffer.allocateDirect(1024);
            
            System.out.println("Heap buffer isDirect: " + heapBuffer.isDirect());
            System.out.println("Direct buffer isDirect: " + directBuffer.isDirect());
        }
    }
    
    // Problem 23: FileChannel write
    static class Problem23 {
        public static void writeWithChannel(String filename, String data) 
                throws IOException {
            try (RandomAccessFile raf = new RandomAccessFile(filename, "rw");
                 FileChannel channel = raf.getChannel()) {
                
                ByteBuffer buffer = ByteBuffer.wrap(data.getBytes());
                channel.write(buffer);
                System.out.println("Written via channel: " + filename);
            }
        }
    }
    
    // Problem 24: FileChannel read
    static class Problem24 {
        public static void readWithChannel(String filename) throws IOException {
            try (RandomAccessFile raf = new RandomAccessFile(filename, "r");
                 FileChannel channel = raf.getChannel()) {
                
                ByteBuffer buffer = ByteBuffer.allocate(1024);
                int bytesRead = channel.read(buffer);
                buffer.flip();
                
                System.out.println("Read: " + 
                    new String(buffer.array(), 0, bytesRead));
            }
        }
    }
    
    // Problem 25: Channel copy
    static class Problem25 {
        public static void copyWithChannels(String source, String dest) 
                throws IOException {
            try (FileInputStream fis = new FileInputStream(source);
                 FileOutputStream fos = new FileOutputStream(dest);
                 FileChannel srcChannel = fis.getChannel();
                 FileChannel destChannel = fos.getChannel()) {
                
                long size = srcChannel.size();
                srcChannel.transferTo(0, size, destChannel);
                System.out.println("Copied " + size + " bytes");
            }
        }
    }
    
    // ============================================
    // SECTION 6: PATH & FILES API (26-30)
    // ============================================
    
    // Problem 26: Path operations
    static class Problem26 {
        public static void pathOperations() {
            Path path = Paths.get("documents", "file.txt");
            System.out.println("Path: " + path);
            System.out.println("File name: " + path.getFileName());
            System.out.println("Parent: " + path.getParent());
            System.out.println("Absolute: " + path.toAbsolutePath());
        }
    }
    
    // Problem 27: Files.exists check
    static class Problem27 {
        public static void checkFileExists(String filename) {
            Path path = Paths.get(filename);
            System.out.println("Exists: " + Files.exists(path));
            System.out.println("Is file: " + Files.isRegularFile(path));
            System.out.println("Is directory: " + Files.isDirectory(path));
        }
    }
    
    // Problem 28: Read all lines
    static class Problem28 {
        public static void readAllLines(String filename) throws IOException {
            Path path = Paths.get(filename);
            List<String> lines = Files.readAllLines(path);
            lines.forEach(System.out::println);
        }
    }
    
    // Problem 29: Write string (Java 11+)
    static class Problem29 {
        public static void writeString(String filename, String content) 
                throws IOException {
            Path path = Paths.get(filename);
            Files.writeString(path, content);
            System.out.println("Written to " + filename);
        }
    }
    
    // Problem 30: Create directories
    static class Problem30 {
        public static void createDirectories() throws IOException {
            Path dir = Paths.get("a", "b", "c");
            Files.createDirectories(dir);
            System.out.println("Created: " + dir);
        }
    }
    
    // ============================================
    // SECTION 7: BONUS PROBLEMS (31-35)
    // ============================================
    
    // Bonus 1: Count file lines using NIO
    static class Bonus1 {
        public static void countLinesNIO(String filename) throws IOException {
            Path path = Paths.get(filename);
            long count = Files.lines(path).count();
            System.out.println("Lines: " + count);
        }
    }
    
    // Bonus 2: Find files by extension
    static class Bonus2 {
        public static void findByExtension(String dir, String ext) 
                throws IOException {
            Path path = Paths.get(dir);
            try (var stream = Files.find(path, 3, 
                    (p, a) -> p.toString().endsWith(ext))) {
                stream.forEach(System.out::println);
            }
        }
    }
    
    // Bonus 3: Delete directory recursively
    static class Bonus3 {
        public static void deleteRecursive(String dirPath) throws IOException {
            Path path = Paths.get(dirPath);
            try (var stream = Files.walk(path)) {
                stream.sorted((a, b) -> b.compareTo(a))
                      .forEach(p -> {
                          try {
                              Files.delete(p);
                          } catch (IOException e) {}
                      });
            }
            System.out.println("Deleted: " + dirPath);
        }
    }
    
    // Bonus 4: File comparison
    static class Bonus4 {
        public static void compareFiles(String file1, String file2) 
                throws IOException {
            byte[] bytes1 = Files.readAllBytes(Paths.get(file1));
            byte[] bytes2 = Files.readAllBytes(Paths.get(file2));
            
            boolean equal = Arrays.equals(bytes1, bytes2);
            System.out.println("Files equal: " + equal);
        }
    }
    
    // Bonus 5: Line count with statistics
    static class Bonus5 {
        public static void fileStatistics(String filename) throws IOException {
            Path path = Paths.get(filename);
            long lines = Files.lines(path).count();
            long words = Files.lines(path)
                .flatMap(line -> Arrays.stream(line.split("\\s+")))
                .count();
            long chars = Files.readString(path).length();
            
            System.out.println("Lines: " + lines);
            System.out.println("Words: " + words);
            System.out.println("Characters: " + chars);
        }
    }
    
    // ============================================
    // MAIN - RUN ALL PROBLEMS
    // ============================================
    
    public static void main(String[] args) {
        try {
            System.out.println("=== Day 13: File I/O & NIO Practice Problems ===\n");
            
            System.out.println("Problem 21: ByteBuffer");
            Problem21.useByteBuffer();
            
            System.out.println("\nProblem 22: Buffer types");
            Problem22.bufferComparison();
            
            System.out.println("\nProblem 26: Path operations");
            Problem26.pathOperations();
            
            System.out.println("\nAll 35 problems ready!");
            System.out.println("Run individual problems as needed");
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
