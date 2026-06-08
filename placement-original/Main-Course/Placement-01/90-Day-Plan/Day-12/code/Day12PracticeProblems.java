/**
 * DAY 12: FILE I/O, SERIALIZATION & NIO PRACTICE PROBLEMS
 * 
 * 35 Practice Problems (30 core + 5 bonus)
 * 
 * Sections:
 * 1. Basic File I/O (1-5)
 * 2. Byte & Character Streams (6-10)
 * 3. Buffered I/O (11-15)
 * 4. Serialization (16-20)
 * 5. NIO Buffers & Channels (21-25)
 * 6. Path & Files API (26-30)
 * 7. Bonus Problems (31-35)
 */

package day12.practice;

import java.io.*;
import java.nio.*;
import java.nio.channels.*;
import java.nio.file.*;
import java.nio.file.attribute.*;
import java.util.*;
import java.util.stream.*;
import java.util.zip.*;

public class Day12PracticeProblems {

    // ============================================
    // SECTION 1: BASIC FILE I/O (1-5)
    // ============================================
    
    // Problem 1: Check if file exists
    static class Problem1 {
        public static void checkFileExists(String filename) {
            File file = new File(filename);
            System.out.println("File exists: " + file.exists());
            
            // Modern way
            Path path = Paths.get(filename);
            System.out.println("Path exists: " + Files.exists(path));
        }
    }
    
    // Problem 2: Get file metadata
    static class Problem2 {
        public static void getFileMetadata(String filename) {
            File file = new File(filename);
            
            if (file.exists()) {
                System.out.println("Name: " + file.getName());
                System.out.println("Size: " + file.length() + " bytes");
                System.out.println("Last modified: " + new Date(file.lastModified()));
                System.out.println("Is directory: " + file.isDirectory());
                System.out.println("Is file: " + file.isFile());
            }
        }
    }
    
    // Problem 3: Create and delete file
    static class Problem3 {
        public static void createAndDelete() throws IOException {
            File file = new File("temp_file.txt");
            
            // Create
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            }
            
            // Delete
            if (file.delete()) {
                System.out.println("File deleted");
            }
        }
    }
    
    // Problem 4: List files in directory
    static class Problem4 {
        public static void listFiles(String directory) {
            File dir = new File(directory);
            
            String[] files = dir.list();
            if (files != null) {
                System.out.println("Files in " + directory + ":");
                for (String filename : files) {
                    System.out.println("  " + filename);
                }
            }
        }
    }
    
    // Problem 5: Create directory structure
    static class Problem5 {
        public static void createDirectories(String path) {
            File dir = new File(path);
            
            if (dir.mkdirs()) {
                System.out.println("Directories created: " + path);
            }
        }
    }
    
    // ============================================
    // SECTION 2: BYTE & CHARACTER STREAMS (6-10)
    // ============================================
    
    // Problem 6: Copy file using streams
    static class Problem6 {
        public static void copyFile(String source, String destination) throws IOException {
            try (FileInputStream fis = new FileInputStream(source);
                 FileOutputStream fos = new FileOutputStream(destination)) {
                
                byte[] buffer = new byte[1024];
                int bytesRead;
                
                while ((bytesRead = fis.read(buffer)) != -1) {
                    fos.write(buffer, 0, bytesRead);
                }
                
                System.out.println("File copied");
            }
        }
    }
    
    // Problem 7: Read text file line by line
    static class Problem7 {
        public static void readTextFile(String filename) throws IOException {
            try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
                String line;
                int lineNumber = 1;
                
                while ((line = reader.readLine()) != null) {
                    System.out.println(lineNumber++ + ": " + line);
                }
            }
        }
    }
    
    // Problem 8: Write text to file
    static class Problem8 {
        public static void writeTextFile(String filename, List<String> lines) throws IOException {
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(filename))) {
                for (String line : lines) {
                    writer.write(line);
                    writer.newLine();
                }
                System.out.println("Text written to " + filename);
            }
        }
    }
    
    // Problem 9: Append to file
    static class Problem9 {
        public static void appendToFile(String filename, String content) throws IOException {
            try (FileWriter writer = new FileWriter(filename, true)) {
                writer.write(content + "\n");
                System.out.println("Content appended");
            }
        }
    }
    
    // Problem 10: Count lines, words, characters in file
    static class Problem10 {
        public static void countFileStats(String filename) throws IOException {
            int lines = 0, words = 0, chars = 0;
            
            try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    lines++;
                    chars += line.length();
                    words += line.split("\\s+").length;
                }
            }
            
            System.out.println("Lines: " + lines);
            System.out.println("Words: " + words);
            System.out.println("Characters: " + chars);
        }
    }
    
    // ============================================
    // SECTION 3: BUFFERED I/O (11-15)
    // ============================================
    
    // Problem 11: Read all lines into List
    static class Problem11 {
        public static List<String> readAllLines(String filename) throws IOException {
            List<String> lines = new ArrayList<>();
            
            try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    lines.add(line);
                }
            }
            
            return lines;
        }
    }
    
    // Problem 12: Write List to file
    static class Problem12 {
        public static void writeList(String filename, List<String> data) throws IOException {
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(filename))) {
                for (String item : data) {
                    writer.write(item);
                    writer.newLine();
                }
            }
        }
    }
    
    // Problem 13: Find and replace in file
    static class Problem13 {
        public static void findAndReplace(String filename, String find, String replace) 
                throws IOException {
            List<String> lines = new ArrayList<>();
            
            // Read and replace
            try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    lines.add(line.replace(find, replace));
                }
            }
            
            // Write back
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(filename))) {
                for (String line : lines) {
                    writer.write(line);
                    writer.newLine();
                }
            }
            
            System.out.println("Replaced '" + find + "' with '" + replace + "'");
        }
    }
    
    // Problem 14: Merge multiple files
    static class Problem14 {
        public static void mergeFiles(List<String> sources, String destination) throws IOException {
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(destination))) {
                for (String source : sources) {
                    try (BufferedReader reader = new BufferedReader(new FileReader(source))) {
                        String line;
                        while ((line = reader.readLine()) != null) {
                            writer.write(line);
                            writer.newLine();
                        }
                    }
                }
            }
            System.out.println("Files merged into " + destination);
        }
    }
    
    // Problem 15: Split large file
    static class Problem15 {
        public static void splitFile(String filename, int linesPerFile) throws IOException {
            try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
                int fileNumber = 1;
                int lineCount = 0;
                BufferedWriter writer = null;
                String line;
                
                while ((line = reader.readLine()) != null) {
                    if (lineCount % linesPerFile == 0) {
                        if (writer != null) {
                            writer.close();
                        }
                        writer = new BufferedWriter(
                            new FileWriter(filename + ".part" + fileNumber++));
                    }
                    
                    writer.write(line);
                    writer.newLine();
                    lineCount++;
                }
                
                if (writer != null) {
                    writer.close();
                }
                
                System.out.println("File split into " + (fileNumber - 1) + " parts");
            }
        }
    }
    
    // ============================================
    // SECTION 4: SERIALIZATION (16-20)
    // ============================================
    
    // Problem 16: Serialize and deserialize object
    static class Problem16 {
        static class Student implements Serializable {
            private static final long serialVersionUID = 1L;
            String name;
            int age;
            double gpa;
            
            public Student(String name, int age, double gpa) {
                this.name = name;
                this.age = age;
                this.gpa = gpa;
            }
            
            @Override
            public String toString() {
                return "Student{name='" + name + "', age=" + age + ", gpa=" + gpa + "}";
            }
        }
        
        public static void serializeStudent() throws IOException, ClassNotFoundException {
            Student student = new Student("Alice", 20, 3.8);
            
            // Serialize
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream("student.ser"))) {
                oos.writeObject(student);
                System.out.println("Serialized: " + student);
            }
            
            // Deserialize
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream("student.ser"))) {
                Student loaded = (Student) ois.readObject();
                System.out.println("Deserialized: " + loaded);
            }
        }
    }
    
    // Problem 17: Serialize List
    static class Problem17 {
        public static void serializeList() throws IOException, ClassNotFoundException {
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // Serialize
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream("list.ser"))) {
                oos.writeObject(numbers);
            }
            
            // Deserialize
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream("list.ser"))) {
                @SuppressWarnings("unchecked")
                List<Integer> loaded = (List<Integer>) ois.readObject();
                System.out.println("Loaded list: " + loaded);
            }
        }
    }
    
    // Problem 18: transient example
    static class Problem18 {
        static class User implements Serializable {
            private static final long serialVersionUID = 1L;
            String username;
            transient String password; // Not serialized
            int loginCount;
            
            public User(String username, String password, int loginCount) {
                this.username = username;
                this.password = password;
                this.loginCount = loginCount;
            }
            
            @Override
            public String toString() {
                return "User{username='" + username + "', password='" + password + 
                       "', loginCount=" + loginCount + "}";
            }
        }
        
        public static void demonstrateTransient() throws Exception {
            User user = new User("admin", "secret123", 5);
            System.out.println("Before: " + user);
            
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ObjectOutputStream oos = new ObjectOutputStream(baos);
            oos.writeObject(user);
            
            ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
            ObjectInputStream ois = new ObjectInputStream(bais);
            User loaded = (User) ois.readObject();
            
            System.out.println("After: " + loaded); // password = null
        }
    }
    
    // Problem 19: Deep copy using serialization
    static class Problem19 {
        static class Person implements Serializable {
            private static final long serialVersionUID = 1L;
            String name;
            int age;
            
            public Person(String name, int age) {
                this.name = name;
                this.age = age;
            }
        }
        
        @SuppressWarnings("unchecked")
        public static <T extends Serializable> T deepCopy(T object) throws Exception {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ObjectOutputStream oos = new ObjectOutputStream(baos);
            oos.writeObject(object);
            
            ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
            ObjectInputStream ois = new ObjectInputStream(bais);
            return (T) ois.readObject();
        }
    }
    
    // Problem 20: Save and load Map
    static class Problem20 {
        public static void saveLoadMap() throws Exception {
            Map<String, Integer> scores = new HashMap<>();
            scores.put("Alice", 95);
            scores.put("Bob", 87);
            scores.put("Charlie", 92);
            
            // Save
            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream("scores.ser"))) {
                oos.writeObject(scores);
            }
            
            // Load
            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream("scores.ser"))) {
                @SuppressWarnings("unchecked")
                Map<String, Integer> loaded = (Map<String, Integer>) ois.readObject();
                System.out.println("Loaded scores: " + loaded);
            }
        }
    }
    
    // ============================================
    // SECTION 5: NIO BUFFERS & CHANNELS (21-25)
    // ============================================
    
    // Problem 21: Read file using ByteBuffer
    static class Problem21 {
        public static void readWithBuffer(String filename) throws IOException {
            try (FileChannel channel = FileChannel.open(Paths.get(filename), 
                    StandardOpenOption.READ)) {
                
                ByteBuffer buffer = ByteBuffer.allocate(1024);
                int bytesRead = channel.read(buffer);
                
                buffer.flip();
                
                System.out.println("Read " + bytesRead + " bytes");
                while (buffer.hasRemaining()) {
                    System.out.print((char) buffer.get());
                }
            }
        }
    }
    
    // Problem 22: Write file using ByteBuffer
    static class Problem22 {
        public static void writeWithBuffer(String filename, String content) throws IOException {
            try (FileChannel channel = FileChannel.open(Paths.get(filename),
                    StandardOpenOption.CREATE, StandardOpenOption.WRITE)) {
                
                ByteBuffer buffer = ByteBuffer.wrap(content.getBytes());
                channel.write(buffer);
                
                System.out.println("Written via channel");
            }
        }
    }
    
    // Problem 23: Copy file using FileChannel
    static class Problem23 {
        public static void copyWithChannel(String source, String destination) throws IOException {
            try (FileChannel srcChannel = FileChannel.open(Paths.get(source),
                    StandardOpenOption.READ);
                 FileChannel destChannel = FileChannel.open(Paths.get(destination),
                    StandardOpenOption.CREATE, StandardOpenOption.WRITE)) {
                
                srcChannel.transferTo(0, srcChannel.size(), destChannel);
                System.out.println("File copied via channel");
            }
        }
    }
    
    // Problem 24: Buffer operations demo
    static class Problem24 {
        public static void bufferOperations() {
            ByteBuffer buffer = ByteBuffer.allocate(10);
            
            System.out.println("Initial - capacity: " + buffer.capacity() + 
                             ", position: " + buffer.position() + 
                             ", limit: " + buffer.limit());
            
            // Write
            buffer.put((byte) 1);
            buffer.put((byte) 2);
            buffer.put((byte) 3);
            
            System.out.println("After write - position: " + buffer.position());
            
            // Flip for reading
            buffer.flip();
            
            System.out.println("After flip - position: " + buffer.position() + 
                             ", limit: " + buffer.limit());
            
            // Read
            while (buffer.hasRemaining()) {
                System.out.print(buffer.get() + " ");
            }
            System.out.println();
            
            // Clear
            buffer.clear();
            System.out.println("After clear - position: " + buffer.position() + 
                             ", limit: " + buffer.limit());
        }
    }
    
    // Problem 25: Direct vs Heap buffer
    static class Problem25 {
        public static void directVsHeap() {
            ByteBuffer heapBuffer = ByteBuffer.allocate(1024);
            ByteBuffer directBuffer = ByteBuffer.allocateDirect(1024);
            
            System.out.println("Heap buffer isDirect: " + heapBuffer.isDirect());
            System.out.println("Direct buffer isDirect: " + directBuffer.isDirect());
        }
    }
    
    // ============================================
    // SECTION 6: PATH & FILES API (26-30)
    // ============================================
    
    // Problem 26: Read file using Files class
    static class Problem26 {
        public static void readWithFiles(String filename) throws IOException {
            // Method 1: Read all lines
            List<String> lines = Files.readAllLines(Paths.get(filename));
            System.out.println("Lines: " + lines.size());
            
            // Method 2: Read as String (Java 11+)
            String content = Files.readString(Paths.get(filename));
            System.out.println("Content length: " + content.length());
        }
    }
    
    // Problem 27: Write file using Files class
    static class Problem27 {
        public static void writeWithFiles(String filename, List<String> lines) throws IOException {
            Files.write(Paths.get(filename), lines);
            System.out.println("Written using Files.write()");
        }
    }
    
    // Problem 28: Walk directory tree
    static class Problem28 {
        public static void walkDirectory(String dir) throws IOException {
            try (Stream<Path> stream = Files.walk(Paths.get(dir), 2)) {
                stream.forEach(System.out::println);
            }
        }
    }
    
    // Problem 29: Find files by extension
    static class Problem29 {
        public static List<Path> findByExtension(String dir, String extension) throws IOException {
            try (Stream<Path> stream = Files.walk(Paths.get(dir))) {
                return stream
                    .filter(Files::isRegularFile)
                    .filter(p -> p.toString().endsWith(extension))
                    .collect(Collectors.toList());
            }
        }
    }
    
    // Problem 30: File attributes
    static class Problem30 {
        public static void showAttributes(String filename) throws IOException {
            Path path = Paths.get(filename);
            
            if (Files.exists(path)) {
                BasicFileAttributes attrs = Files.readAttributes(path, 
                    BasicFileAttributes.class);
                
                System.out.println("Size: " + attrs.size());
                System.out.println("Created: " + attrs.creationTime());
                System.out.println("Modified: " + attrs.lastModifiedTime());
                System.out.println("Is directory: " + attrs.isDirectory());
            }
        }
    }
    
    // ============================================
    // BONUS PROBLEMS (31-35)
    // ============================================
    
    // Bonus 1: Word frequency counter
    static class Bonus1 {
        public static Map<String, Integer> wordFrequency(String filename) throws IOException {
            Map<String, Integer> freq = new HashMap<>();
            
            try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    String[] words = line.toLowerCase().split("\\W+");
                    for (String word : words) {
                        if (!word.isEmpty()) {
                            freq.put(word, freq.getOrDefault(word, 0) + 1);
                        }
                    }
                }
            }
            
            return freq;
        }
    }
    
    // Bonus 2: Zip directory
    static class Bonus2 {
        public static void zipDirectory(String sourceDir, String zipFile) throws IOException {
            Path sourcePath = Paths.get(sourceDir);
            
            try (ZipOutputStream zos = new ZipOutputStream(
                    new FileOutputStream(zipFile))) {
                
                Files.walk(sourcePath)
                    .filter(path -> !Files.isDirectory(path))
                    .forEach(path -> {
                        ZipEntry entry = new ZipEntry(
                            sourcePath.relativize(path).toString());
                        try {
                            zos.putNextEntry(entry);
                            Files.copy(path, zos);
                            zos.closeEntry();
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    });
            }
            System.out.println("Zip created: " + zipFile);
        }
    }
    
    // Bonus 3: File search with content
    static class Bonus3 {
        public static List<Path> searchContent(String dir, String searchText) throws IOException {
            try (Stream<Path> stream = Files.walk(Paths.get(dir))) {
                return stream
                    .filter(Files::isRegularFile)
                    .filter(p -> {
                        try {
                            return Files.lines(p)
                                .anyMatch(line -> line.contains(searchText));
                        } catch (IOException e) {
                            return false;
                        }
                    })
                    .collect(Collectors.toList());
            }
        }
    }
    
    // Bonus 4: CSV reader
    static class Bonus4 {
        public static List<String[]> readCSV(String filename) throws IOException {
            List<String[]> records = new ArrayList<>();
            
            try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    String[] fields = line.split(",");
                    records.add(fields);
                }
            }
            
            return records;
        }
    }
    
    // Bonus 5: File watcher
    static class Bonus5 {
        public static void watchDirectory(String dir) throws IOException, InterruptedException {
            WatchService watchService = FileSystems.getDefault().newWatchService();
            Path path = Paths.get(dir);
            
            path.register(watchService,
                StandardWatchEventKinds.ENTRY_CREATE,
                StandardWatchEventKinds.ENTRY_DELETE,
                StandardWatchEventKinds.ENTRY_MODIFY);
            
            System.out.println("Watching: " + dir);
            
            WatchKey key;
            while ((key = watchService.take()) != null) {
                for (WatchEvent<?> event : key.pollEvents()) {
                    System.out.println("Event: " + event.kind() + " - " + event.context());
                }
                key.reset();
            }
        }
    }
    
    // ============================================
    // MAIN - TEST ALL PROBLEMS
    // ============================================
    
    public static void main(String[] args) {
        try {
            System.out.println("=== Day 12: File I/O Practice Problems ===\n");
            
            // Create test file
            String testFile = "test.txt";
            List<String> testData = Arrays.asList("Line 1", "Line 2", "Line 3");
            Problem12.writeList(testFile, testData);
            
            System.out.println("Problem 1:"); Problem1.checkFileExists(testFile);
            System.out.println("\nProblem 2:"); Problem2.getFileMetadata(testFile);
            System.out.println("\nProblem 7:"); Problem7.readTextFile(testFile);
            System.out.println("\nProblem 10:"); Problem10.countFileStats(testFile);
            System.out.println("\nProblem 11:"); 
            List<String> lines = Problem11.readAllLines(testFile);
            System.out.println("Read " + lines.size() + " lines");
            
            System.out.println("\nProblem 16:"); Problem16.serializeStudent();
            System.out.println("\nProblem 18:"); Problem18.demonstrateTransient();
            
            System.out.println("\nProblem 24:"); Problem24.bufferOperations();
            System.out.println("\nProblem 25:"); Problem25.directVsHeap();
            
            System.out.println("\n=== All 35+ problems available! ===");
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
