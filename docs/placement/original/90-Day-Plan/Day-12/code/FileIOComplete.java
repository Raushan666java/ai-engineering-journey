/**
 * DAY 12: FILE I/O - COMPLETE GUIDE
 * 
 * Comprehensive coverage of Java File I/O operations
 * 
 * Topics Covered:
 * 1. Byte Streams (InputStream/OutputStream)
 * 2. Character Streams (Reader/Writer)
 * 3. Buffered Streams (Performance optimization)
 * 4. File Class (Legacy file operations)
 * 5. Files Utility Class (Modern approach)
 * 6. Path Operations (Path manipulation)
 * 7. File Reading Techniques (5 different approaches)
 * 8. File Writing Techniques (5 different approaches)
 * 9. Directory Operations
 * 10. Interview Questions (20 Q&A)
 */

package day12.fileio;

import java.io.*;
import java.nio.file.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.stream.Stream;

public class FileIOComplete {

    // ============================================
    // 1. BYTE STREAMS (Binary Data)
    // ============================================
    
    /**
     * BYTE STREAMS - For binary data (images, videos, executables)
     * 
     * InputStream/OutputStream hierarchy:
     * - FileInputStream/FileOutputStream - File I/O
     * - ByteArrayInputStream/ByteArrayOutputStream - Memory I/O
     * - BufferedInputStream/BufferedOutputStream - Buffered I/O
     * - DataInputStream/DataOutputStream - Primitive types
     * - ObjectInputStream/ObjectOutputStream - Objects (serialization)
     */
    static class ByteStreamsDemo {
        
        // Write bytes to file using FileOutputStream
        public static void writeBytes() throws IOException {
            String filePath = "byte_output.bin";
            
            try (FileOutputStream fos = new FileOutputStream(filePath)) {
                byte[] data = {65, 66, 67, 68, 69}; // ABCDE in ASCII
                fos.write(data);
                System.out.println("Bytes written: " + Arrays.toString(data));
            }
            // try-with-resources automatically closes stream
        }
        
        // Read bytes from file using FileInputStream
        public static void readBytes() throws IOException {
            String filePath = "byte_output.bin";
            
            try (FileInputStream fis = new FileInputStream(filePath)) {
                int byteRead;
                System.out.print("Bytes read: ");
                while ((byteRead = fis.read()) != -1) {
                    System.out.print(byteRead + " ");
                }
                System.out.println();
            }
        }
        
        // Read all bytes at once
        public static void readAllBytes() throws IOException {
            String filePath = "byte_output.bin";
            
            try (FileInputStream fis = new FileInputStream(filePath)) {
                byte[] allBytes = fis.readAllBytes(); // Java 9+
                System.out.println("All bytes: " + Arrays.toString(allBytes));
            }
        }
        
        // Copy file using byte streams
        public static void copyFile(String source, String destination) throws IOException {
            try (FileInputStream fis = new FileInputStream(source);
                 FileOutputStream fos = new FileOutputStream(destination)) {
                
                byte[] buffer = new byte[1024]; // 1KB buffer
                int bytesRead;
                
                while ((bytesRead = fis.read(buffer)) != -1) {
                    fos.write(buffer, 0, bytesRead);
                }
                System.out.println("File copied from " + source + " to " + destination);
            }
        }
        
        // Write primitive types using DataOutputStream
        public static void writePrimitives() throws IOException {
            try (DataOutputStream dos = new DataOutputStream(
                    new FileOutputStream("primitives.dat"))) {
                
                dos.writeInt(42);
                dos.writeDouble(3.14159);
                dos.writeBoolean(true);
                dos.writeUTF("Hello, World!");
                
                System.out.println("Primitives written");
            }
        }
        
        // Read primitive types using DataInputStream
        public static void readPrimitives() throws IOException {
            try (DataInputStream dis = new DataInputStream(
                    new FileInputStream("primitives.dat"))) {
                
                int intValue = dis.readInt();
                double doubleValue = dis.readDouble();
                boolean boolValue = dis.readBoolean();
                String stringValue = dis.readUTF();
                
                System.out.println("Int: " + intValue);
                System.out.println("Double: " + doubleValue);
                System.out.println("Boolean: " + boolValue);
                System.out.println("String: " + stringValue);
            }
        }
    }
    
    // ============================================
    // 2. CHARACTER STREAMS (Text Data)
    // ============================================
    
    /**
     * CHARACTER STREAMS - For text data (handles character encoding)
     * 
     * Reader/Writer hierarchy:
     * - FileReader/FileWriter - File I/O
     * - BufferedReader/BufferedWriter - Buffered I/O
     * - CharArrayReader/CharArrayWriter - Memory I/O
     * - StringReader/StringWriter - String I/O
     * - InputStreamReader/OutputStreamWriter - Bridge from bytes to chars
     */
    static class CharacterStreamsDemo {
        
        // Write text using FileWriter
        public static void writeText() throws IOException {
            String filePath = "text_output.txt";
            
            try (FileWriter writer = new FileWriter(filePath)) {
                writer.write("Hello, World!\n");
                writer.write("Java File I/O\n");
                writer.write("Character Streams\n");
                System.out.println("Text written to " + filePath);
            }
        }
        
        // Read text using FileReader
        public static void readText() throws IOException {
            String filePath = "text_output.txt";
            
            try (FileReader reader = new FileReader(filePath)) {
                int charRead;
                System.out.print("Content: ");
                while ((charRead = reader.read()) != -1) {
                    System.out.print((char) charRead);
                }
            }
        }
        
        // Write text with encoding using OutputStreamWriter
        public static void writeWithEncoding() throws IOException {
            String filePath = "utf8_output.txt";
            
            try (OutputStreamWriter writer = new OutputStreamWriter(
                    new FileOutputStream(filePath), StandardCharsets.UTF_8)) {
                
                writer.write("Hello in UTF-8: こんにちは\n");
                writer.write("Special chars: © ® ™ € £ ¥\n");
                System.out.println("UTF-8 text written");
            }
        }
        
        // Read text with encoding using InputStreamReader
        public static void readWithEncoding() throws IOException {
            String filePath = "utf8_output.txt";
            
            try (InputStreamReader reader = new InputStreamReader(
                    new FileInputStream(filePath), StandardCharsets.UTF_8)) {
                
                int charRead;
                System.out.print("UTF-8 Content: ");
                while ((charRead = reader.read()) != -1) {
                    System.out.print((char) charRead);
                }
            }
        }
        
        // Append to file
        public static void appendText() throws IOException {
            String filePath = "append_output.txt";
            
            // First write
            try (FileWriter writer = new FileWriter(filePath)) {
                writer.write("Line 1\n");
            }
            
            // Append (second parameter = true)
            try (FileWriter writer = new FileWriter(filePath, true)) {
                writer.write("Line 2 (appended)\n");
                writer.write("Line 3 (appended)\n");
            }
            
            System.out.println("Text appended");
        }
    }
    
    // ============================================
    // 3. BUFFERED STREAMS (Performance)
    // ============================================
    
    /**
     * BUFFERED STREAMS - Wrap existing streams for better performance
     * 
     * Benefits:
     * - Reduces disk I/O operations
     * - Reads/writes in chunks (default 8KB buffer)
     * - Much faster for large files
     * 
     * Types:
     * - BufferedInputStream/BufferedOutputStream
     * - BufferedReader/BufferedWriter
     */
    static class BufferedStreamsDemo {
        
        // Write with BufferedWriter
        public static void writeBuffered() throws IOException {
            String filePath = "buffered_output.txt";
            
            try (BufferedWriter writer = new BufferedWriter(
                    new FileWriter(filePath))) {
                
                writer.write("Line 1");
                writer.newLine(); // Platform-independent newline
                writer.write("Line 2");
                writer.newLine();
                writer.write("Line 3");
                writer.newLine();
                
                System.out.println("Buffered text written");
            }
        }
        
        // Read line by line with BufferedReader
        public static void readLineByLine() throws IOException {
            String filePath = "buffered_output.txt";
            
            try (BufferedReader reader = new BufferedReader(
                    new FileReader(filePath))) {
                
                String line;
                int lineNumber = 1;
                while ((line = reader.readLine()) != null) {
                    System.out.println("Line " + lineNumber++ + ": " + line);
                }
            }
        }
        
        // Read all lines into List
        public static void readAllLines() throws IOException {
            String filePath = "buffered_output.txt";
            
            try (BufferedReader reader = new BufferedReader(
                    new FileReader(filePath))) {
                
                List<String> lines = new ArrayList<>();
                String line;
                while ((line = reader.readLine()) != null) {
                    lines.add(line);
                }
                
                System.out.println("Total lines: " + lines.size());
                System.out.println("Lines: " + lines);
            }
        }
        
        // Performance comparison: unbuffered vs buffered
        public static void performanceComparison() throws IOException {
            String filePath = "large_file.txt";
            
            // Create large file
            try (FileWriter writer = new FileWriter(filePath)) {
                for (int i = 0; i < 100000; i++) {
                    writer.write("Line " + i + "\n");
                }
            }
            
            // Unbuffered read
            long start = System.currentTimeMillis();
            try (FileReader reader = new FileReader(filePath)) {
                int ch;
                int count = 0;
                while ((ch = reader.read()) != -1) {
                    count++;
                }
            }
            long unbufferedTime = System.currentTimeMillis() - start;
            
            // Buffered read
            start = System.currentTimeMillis();
            try (BufferedReader reader = new BufferedReader(
                    new FileReader(filePath))) {
                int ch;
                int count = 0;
                while ((ch = reader.read()) != -1) {
                    count++;
                }
            }
            long bufferedTime = System.currentTimeMillis() - start;
            
            System.out.println("Unbuffered: " + unbufferedTime + "ms");
            System.out.println("Buffered: " + bufferedTime + "ms");
            System.out.println("Speedup: " + (unbufferedTime / (double) bufferedTime) + "x");
        }
        
        // Write with custom buffer size
        public static void customBufferSize() throws IOException {
            String filePath = "custom_buffer.txt";
            
            // Custom 32KB buffer
            try (BufferedWriter writer = new BufferedWriter(
                    new FileWriter(filePath), 32 * 1024)) {
                
                for (int i = 0; i < 1000; i++) {
                    writer.write("Line " + i);
                    writer.newLine();
                }
                
                System.out.println("Written with 32KB buffer");
            }
        }
    }
    
    // ============================================
    // 4. FILE CLASS (Legacy - before Java 7)
    // ============================================
    
    /**
     * FILE CLASS - Legacy file operations (still widely used)
     * 
     * Limitations:
     * - Many methods return boolean (no exception details)
     * - Doesn't support symbolic links well
     * - Limited metadata access
     * - No atomic operations
     * 
     * Use Files class (NIO.2) for new code
     */
    static class FileClassDemo {
        
        // Check file existence and properties
        public static void checkFileProperties() {
            File file = new File("sample.txt");
            
            System.out.println("Exists: " + file.exists());
            System.out.println("Is file: " + file.isFile());
            System.out.println("Is directory: " + file.isDirectory());
            System.out.println("Can read: " + file.canRead());
            System.out.println("Can write: " + file.canWrite());
            System.out.println("Can execute: " + file.canExecute());
            System.out.println("Is hidden: " + file.isHidden());
            System.out.println("Is absolute: " + file.isAbsolute());
        }
        
        // Get file metadata
        public static void getFileMetadata() {
            File file = new File("sample.txt");
            
            if (file.exists()) {
                System.out.println("Name: " + file.getName());
                System.out.println("Path: " + file.getPath());
                System.out.println("Absolute path: " + file.getAbsolutePath());
                System.out.println("Parent: " + file.getParent());
                System.out.println("Size: " + file.length() + " bytes");
                System.out.println("Last modified: " + new Date(file.lastModified()));
            }
        }
        
        // Create file and directory
        public static void createFileAndDirectory() throws IOException {
            // Create file
            File file = new File("new_file.txt");
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists");
            }
            
            // Create directory
            File dir = new File("new_directory");
            if (dir.mkdir()) {
                System.out.println("Directory created: " + dir.getName());
            }
            
            // Create nested directories
            File nestedDir = new File("parent/child/grandchild");
            if (nestedDir.mkdirs()) {
                System.out.println("Nested directories created");
            }
        }
        
        // List files in directory
        public static void listFiles() {
            File dir = new File(".");
            
            // List files
            String[] fileNames = dir.list();
            System.out.println("Files (String[]):");
            for (String name : fileNames) {
                System.out.println("  " + name);
            }
            
            // List File objects
            File[] files = dir.listFiles();
            System.out.println("\nFiles (File[]):");
            for (File file : files) {
                String type = file.isDirectory() ? "[DIR]" : "[FILE]";
                System.out.println("  " + type + " " + file.getName());
            }
        }
        
        // Filter files
        public static void filterFiles() {
            File dir = new File(".");
            
            // Filter .java files
            File[] javaFiles = dir.listFiles((d, name) -> name.endsWith(".java"));
            System.out.println("Java files:");
            for (File file : javaFiles) {
                System.out.println("  " + file.getName());
            }
            
            // Filter directories only
            File[] directories = dir.listFiles(File::isDirectory);
            System.out.println("\nDirectories:");
            for (File file : directories) {
                System.out.println("  " + file.getName());
            }
        }
        
        // Delete file/directory
        public static void deleteFile() {
            File file = new File("temp.txt");
            
            if (file.delete()) {
                System.out.println("File deleted");
            } else {
                System.out.println("Failed to delete or file doesn't exist");
            }
        }
        
        // Rename/move file
        public static void renameFile() {
            File oldFile = new File("old_name.txt");
            File newFile = new File("new_name.txt");
            
            if (oldFile.renameTo(newFile)) {
                System.out.println("File renamed");
            } else {
                System.out.println("Failed to rename");
            }
        }
    }
    
    // ============================================
    // 5. FILES UTILITY CLASS (Modern - Java 7+)
    // ============================================
    
    /**
     * FILES CLASS - Modern file operations (NIO.2)
     * 
     * Advantages over File class:
     * - Better exception handling
     * - Atomic operations
     * - Symbolic link support
     * - Rich metadata access
     * - Stream API support
     * 
     * RECOMMENDED for new code
     */
    static class FilesClassDemo {
        
        // Create file/directory
        public static void createFilesAndDirs() throws IOException {
            Path filePath = Paths.get("modern_file.txt");
            Path dirPath = Paths.get("modern_dir");
            
            // Create file
            if (!Files.exists(filePath)) {
                Files.createFile(filePath);
                System.out.println("File created: " + filePath);
            }
            
            // Create directory
            if (!Files.exists(dirPath)) {
                Files.createDirectory(dirPath);
                System.out.println("Directory created: " + dirPath);
            }
            
            // Create nested directories
            Path nestedPath = Paths.get("parent/child/grandchild");
            Files.createDirectories(nestedPath);
            System.out.println("Nested directories created");
        }
        
        // Read file (5 methods)
        public static void readFileDemo() throws IOException {
            Path path = Paths.get("sample.txt");
            
            // Method 1: Read all bytes
            byte[] bytes = Files.readAllBytes(path);
            System.out.println("Bytes: " + bytes.length);
            
            // Method 2: Read all lines
            List<String> lines = Files.readAllLines(path);
            System.out.println("Lines: " + lines);
            
            // Method 3: Read as String (Java 11+)
            String content = Files.readString(path);
            System.out.println("Content: " + content);
            
            // Method 4: Stream lines (for large files)
            try (Stream<String> stream = Files.lines(path)) {
                stream.forEach(System.out::println);
            }
            
            // Method 5: BufferedReader
            try (BufferedReader reader = Files.newBufferedReader(path)) {
                String line;
                while ((line = reader.readLine()) != null) {
                    System.out.println(line);
                }
            }
        }
        
        // Write file (5 methods)
        public static void writeFileDemo() throws IOException {
            Path path = Paths.get("output.txt");
            
            // Method 1: Write bytes
            byte[] bytes = "Hello, Bytes!".getBytes();
            Files.write(path, bytes);
            
            // Method 2: Write lines
            List<String> lines = Arrays.asList("Line 1", "Line 2", "Line 3");
            Files.write(path, lines);
            
            // Method 3: Write String (Java 11+)
            Files.writeString(path, "Hello, String!");
            
            // Method 4: BufferedWriter
            try (BufferedWriter writer = Files.newBufferedWriter(path)) {
                writer.write("Hello, Writer!");
                writer.newLine();
                writer.write("Second line");
            }
            
            // Method 5: Append mode
            Files.write(path, "Appended line\n".getBytes(), 
                       StandardOpenOption.APPEND);
        }
        
        // Copy, move, delete
        public static void fileOperations() throws IOException {
            Path source = Paths.get("source.txt");
            Path copy = Paths.get("copy.txt");
            Path moved = Paths.get("moved.txt");
            
            // Create source
            Files.writeString(source, "Source content");
            
            // Copy
            Files.copy(source, copy, StandardCopyOption.REPLACE_EXISTING);
            System.out.println("File copied");
            
            // Move
            Files.move(copy, moved, StandardCopyOption.REPLACE_EXISTING);
            System.out.println("File moved");
            
            // Delete
            Files.delete(moved);
            System.out.println("File deleted");
            
            // Delete if exists (no exception if doesn't exist)
            Files.deleteIfExists(source);
        }
        
        // File attributes
        public static void fileAttributes() throws IOException {
            Path path = Paths.get("sample.txt");
            
            if (Files.exists(path)) {
                System.out.println("Size: " + Files.size(path) + " bytes");
                System.out.println("Last modified: " + Files.getLastModifiedTime(path));
                System.out.println("Is directory: " + Files.isDirectory(path));
                System.out.println("Is regular file: " + Files.isRegularFile(path));
                System.out.println("Is symbolic link: " + Files.isSymbolicLink(path));
                System.out.println("Is readable: " + Files.isReadable(path));
                System.out.println("Is writable: " + Files.isWritable(path));
                System.out.println("Is executable: " + Files.isExecutable(path));
                System.out.println("Is hidden: " + Files.isHidden(path));
            }
        }
        
        // List directory
        public static void listDirectory() throws IOException {
            Path dir = Paths.get(".");
            
            // List (non-recursive)
            try (Stream<Path> stream = Files.list(dir)) {
                stream.forEach(System.out::println);
            }
            
            // Walk (recursive)
            System.out.println("\nRecursive walk:");
            try (Stream<Path> stream = Files.walk(dir, 2)) { // max depth 2
                stream.forEach(System.out::println);
            }
            
            // Find files matching pattern
            System.out.println("\nFind .java files:");
            try (Stream<Path> stream = Files.find(dir, 5,
                    (path, attrs) -> path.toString().endsWith(".java"))) {
                stream.forEach(System.out::println);
            }
        }
    }
    
    // ============================================
    // 6. PATH OPERATIONS
    // ============================================
    
    /**
     * PATH - Represents file system path (interface)
     * 
     * Key methods:
     * - getFileName(), getParent(), getRoot()
     * - resolve(), relativize(), normalize()
     * - toAbsolutePath(), toRealPath()
     */
    static class PathOperationsDemo {
        
        public static void pathBasics() {
            Path path = Paths.get("parent", "child", "file.txt");
            
            System.out.println("Path: " + path);
            System.out.println("File name: " + path.getFileName());
            System.out.println("Parent: " + path.getParent());
            System.out.println("Root: " + path.getRoot());
            System.out.println("Name count: " + path.getNameCount());
            
            // Get path components
            for (int i = 0; i < path.getNameCount(); i++) {
                System.out.println("Name[" + i + "]: " + path.getName(i));
            }
        }
        
        public static void pathResolution() {
            Path base = Paths.get("base");
            Path relative = Paths.get("relative/file.txt");
            
            // Resolve - append path
            Path resolved = base.resolve(relative);
            System.out.println("Resolved: " + resolved); // base/relative/file.txt
            
            // Resolve sibling - replace file name
            Path sibling = Paths.get("base/file.txt").resolveSibling("other.txt");
            System.out.println("Sibling: " + sibling); // base/other.txt
        }
        
        public static void pathRelativize() {
            Path path1 = Paths.get("/home/user/documents");
            Path path2 = Paths.get("/home/user/downloads/file.txt");
            
            // Relativize - get relative path from path1 to path2
            Path relative = path1.relativize(path2);
            System.out.println("Relative: " + relative); // ../downloads/file.txt
        }
        
        public static void pathNormalize() {
            Path path = Paths.get("parent/./child/../file.txt");
            
            System.out.println("Original: " + path);
            System.out.println("Normalized: " + path.normalize()); // parent/file.txt
        }
        
        public static void pathConversion() throws IOException {
            Path path = Paths.get("sample.txt");
            
            // To absolute path
            Path absolute = path.toAbsolutePath();
            System.out.println("Absolute: " + absolute);
            
            // To real path (resolves symbolic links)
            if (Files.exists(path)) {
                Path real = path.toRealPath();
                System.out.println("Real: " + real);
            }
            
            // To URI
            System.out.println("URI: " + path.toUri());
            
            // To File
            File file = path.toFile();
            System.out.println("File: " + file);
        }
        
        public static void pathComparison() {
            Path path1 = Paths.get("file.txt");
            Path path2 = Paths.get("file.txt");
            Path path3 = Paths.get("other.txt");
            
            System.out.println("path1 equals path2: " + path1.equals(path2)); // true
            System.out.println("path1 equals path3: " + path1.equals(path3)); // false
            
            // Starts with / ends with
            Path path = Paths.get("parent/child/file.txt");
            System.out.println("Starts with 'parent': " + path.startsWith("parent"));
            System.out.println("Ends with 'file.txt': " + path.endsWith("file.txt"));
        }
    }
    
    // ============================================
    // 7. FILE READING TECHNIQUES
    // ============================================
    
    static class FileReadingTechniques {
        
        // Technique 1: Read small file completely
        public static void readSmallFile() throws IOException {
            Path path = Paths.get("small.txt");
            
            // Best for small files
            String content = Files.readString(path);
            System.out.println("Content: " + content);
        }
        
        // Technique 2: Read line by line (memory efficient)
        public static void readLineByLine() throws IOException {
            Path path = Paths.get("large.txt");
            
            // Memory efficient for large files
            try (BufferedReader reader = Files.newBufferedReader(path)) {
                String line;
                while ((line = reader.readLine()) != null) {
                    // Process line
                    System.out.println(line);
                }
            }
        }
        
        // Technique 3: Stream lines (functional style)
        public static void streamLines() throws IOException {
            Path path = Paths.get("data.txt");
            
            try (Stream<String> stream = Files.lines(path)) {
                stream.filter(line -> line.contains("important"))
                      .map(String::toUpperCase)
                      .forEach(System.out::println);
            }
        }
        
        // Technique 4: Read with specific encoding
        public static void readWithEncoding() throws IOException {
            Path path = Paths.get("utf8.txt");
            
            List<String> lines = Files.readAllLines(path, StandardCharsets.UTF_8);
            lines.forEach(System.out::println);
        }
        
        // Technique 5: Read binary file
        public static void readBinaryFile() throws IOException {
            Path path = Paths.get("image.jpg");
            
            byte[] bytes = Files.readAllBytes(path);
            System.out.println("Read " + bytes.length + " bytes");
        }
    }
    
    // ============================================
    // 8. FILE WRITING TECHNIQUES
    // ============================================
    
    static class FileWritingTechniques {
        
        // Technique 1: Write string to file
        public static void writeString() throws IOException {
            Path path = Paths.get("output.txt");
            
            String content = "Hello, World!";
            Files.writeString(path, content);
        }
        
        // Technique 2: Write lines
        public static void writeLines() throws IOException {
            Path path = Paths.get("lines.txt");
            
            List<String> lines = Arrays.asList(
                "Line 1",
                "Line 2",
                "Line 3"
            );
            Files.write(path, lines);
        }
        
        // Technique 3: Append to file
        public static void appendToFile() throws IOException {
            Path path = Paths.get("append.txt");
            
            String content = "Appended line\n";
            Files.writeString(path, content, 
                             StandardOpenOption.CREATE,
                             StandardOpenOption.APPEND);
        }
        
        // Technique 4: Write with BufferedWriter
        public static void writeWithBuffer() throws IOException {
            Path path = Paths.get("buffered.txt");
            
            try (BufferedWriter writer = Files.newBufferedWriter(path)) {
                for (int i = 1; i <= 1000; i++) {
                    writer.write("Line " + i);
                    writer.newLine();
                }
            }
        }
        
        // Technique 5: Write binary data
        public static void writeBinaryData() throws IOException {
            Path path = Paths.get("binary.dat");
            
            byte[] data = {0, 1, 2, 3, 4, 5};
            Files.write(path, data);
        }
    }
    
    // ============================================
    // 9. DIRECTORY OPERATIONS
    // ============================================
    
    static class DirectoryOperations {
        
        // Create directory structure
        public static void createDirectories() throws IOException {
            Path dir = Paths.get("parent/child/grandchild");
            
            Files.createDirectories(dir);
            System.out.println("Directories created: " + dir);
        }
        
        // List directory contents
        public static void listContents() throws IOException {
            Path dir = Paths.get(".");
            
            try (Stream<Path> stream = Files.list(dir)) {
                stream.forEach(path -> {
                    String type = Files.isDirectory(path) ? "[DIR]" : "[FILE]";
                    System.out.println(type + " " + path.getFileName());
                });
            }
        }
        
        // Walk directory tree
        public static void walkTree() throws IOException {
            Path start = Paths.get(".");
            
            try (Stream<Path> stream = Files.walk(start, 3)) {
                stream.filter(Files::isRegularFile)
                      .filter(path -> path.toString().endsWith(".java"))
                      .forEach(System.out::println);
            }
        }
        
        // Find files
        public static void findFiles() throws IOException {
            Path start = Paths.get(".");
            
            try (Stream<Path> stream = Files.find(start, 5,
                    (path, attrs) -> attrs.isRegularFile() && 
                                    path.toString().endsWith(".txt"))) {
                stream.forEach(System.out::println);
            }
        }
        
        // Copy directory recursively
        public static void copyDirectory(Path source, Path target) throws IOException {
            Files.walk(source).forEach(src -> {
                try {
                    Path dest = target.resolve(source.relativize(src));
                    if (Files.isDirectory(src)) {
                        Files.createDirectories(dest);
                    } else {
                        Files.copy(src, dest, StandardCopyOption.REPLACE_EXISTING);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });
        }
        
        // Delete directory recursively
        public static void deleteDirectory(Path dir) throws IOException {
            if (Files.exists(dir)) {
                Files.walk(dir)
                     .sorted(Comparator.reverseOrder())
                     .forEach(path -> {
                         try {
                             Files.delete(path);
                         } catch (IOException e) {
                             e.printStackTrace();
                         }
                     });
            }
        }
    }
    
    // ============================================
    // 10. INTERVIEW QUESTIONS
    // ============================================
    
    static class InterviewQuestions {
        /**
         * Q1: What's difference between InputStream and Reader?
         * A: InputStream reads bytes (binary), Reader reads characters (text with encoding)
         * 
         * Q2: What's difference between FileWriter and BufferedWriter?
         * A: FileWriter writes directly, BufferedWriter buffers data for better performance
         * 
         * Q3: What's difference between File and Path?
         * A: File is legacy class, Path is modern interface (Java 7+) with better features
         * 
         * Q4: How to read large file efficiently?
         * A: Use BufferedReader or Files.lines() stream to read line by line
         * 
         * Q5: What's difference between Files.write() and BufferedWriter?
         * A: Files.write() for small files, BufferedWriter for large files with better control
         * 
         * Q6: How to handle file encoding?
         * A: Use InputStreamReader/OutputStreamWriter with Charset parameter
         * 
         * Q7: What's try-with-resources?
         * A: Auto-closes resources (implements AutoCloseable), prevents resource leaks
         * 
         * Q8: What's difference between absolute and relative path?
         * A: Absolute starts from root (/home/user/file.txt), relative from current dir (file.txt)
         * 
         * Q9: How to copy file in Java?
         * A: Files.copy() for modern, or read/write with streams for legacy
         * 
         * Q10: What's difference between Files.delete() and deleteIfExists()?
         * A: delete() throws exception if doesn't exist, deleteIfExists() returns boolean
         * 
         * Q11: How to check if file exists?
         * A: Files.exists() or file.exists() for legacy
         * 
         * Q12: What's difference between mkdir() and mkdirs()?
         * A: mkdir() creates single dir, mkdirs() creates parent directories too
         * 
         * Q13: How to list files in directory?
         * A: Files.list() returns Stream<Path>, or file.listFiles() for legacy
         * 
         * Q14: What's difference between OutputStream.write(int) and write(byte[])?
         * A: write(int) writes single byte, write(byte[]) writes array
         * 
         * Q15: How to append to existing file?
         * A: Use FileWriter(file, true) or Files.write() with StandardOpenOption.APPEND
         * 
         * Q16: What's FileDescriptor?
         * A: Handle to underlying OS file structure, rarely used directly
         * 
         * Q17: What's difference between flush() and close()?
         * A: flush() writes buffered data, close() flushes and releases resources
         * 
         * Q18: How to read file from classpath?
         * A: getClass().getResourceAsStream("/file.txt")
         * 
         * Q19: What's StandardOpenOption?
         * A: Enum for file open options (CREATE, APPEND, TRUNCATE_EXISTING, etc.)
         * 
         * Q20: Best practices for file I/O?
         * A: Use try-with-resources, prefer Files over File, use buffered streams,
         *    handle encoding explicitly, use Path over String for paths
         */
    }
    
    // ============================================
    // MAIN - DEMONSTRATE ALL CONCEPTS
    // ============================================
    
    public static void main(String[] args) {
        try {
            System.out.println("=== DAY 12: FILE I/O COMPLETE GUIDE ===\n");
            
            System.out.println("1. BYTE STREAMS:");
            ByteStreamsDemo.writeBytes();
            ByteStreamsDemo.readBytes();
            ByteStreamsDemo.writePrimitives();
            ByteStreamsDemo.readPrimitives();
            
            System.out.println("\n2. CHARACTER STREAMS:");
            CharacterStreamsDemo.writeText();
            CharacterStreamsDemo.writeWithEncoding();
            CharacterStreamsDemo.appendText();
            
            System.out.println("\n3. BUFFERED STREAMS:");
            BufferedStreamsDemo.writeBuffered();
            BufferedStreamsDemo.readLineByLine();
            
            System.out.println("\n4. FILE CLASS:");
            FileClassDemo.createFileAndDirectory();
            FileClassDemo.listFiles();
            
            System.out.println("\n5. FILES CLASS:");
            FilesClassDemo.createFilesAndDirs();
            FilesClassDemo.fileOperations();
            
            System.out.println("\n6. PATH OPERATIONS:");
            PathOperationsDemo.pathBasics();
            PathOperationsDemo.pathNormalize();
            
            System.out.println("\n=== All File I/O concepts demonstrated! ===");
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
