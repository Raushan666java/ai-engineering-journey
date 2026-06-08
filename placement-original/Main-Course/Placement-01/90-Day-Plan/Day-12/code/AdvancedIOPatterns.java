/**
 * DAY 12: ADVANCED I/O PATTERNS
 * 
 * Practical file I/O patterns and utilities
 * 
 * Topics:
 * 1. File Copy/Move/Delete Operations
 * 2. Directory Traversal Patterns
 * 3. File Search and Filter
 * 4. Zip/Unzip Utilities
 * 5. CSV File Processing
 * 6. Properties File Handling
 * 7. Temporary Files
 * 8. File Comparison
 */

package day12.patterns;

import java.io.*;
import java.nio.file.*;
import java.nio.file.attribute.*;
import java.util.*;
import java.util.stream.*;
import java.util.zip.*;

public class AdvancedIOPatterns {

    // ============================================
    // 1. FILE OPERATIONS
    // ============================================
    
    static class FileOperations {
        
        // Safe file copy with error handling
        public static void safeCopy(Path source, Path target) throws IOException {
            if (!Files.exists(source)) {
                throw new FileNotFoundException("Source file not found: " + source);
            }
            
            // Create parent directories if needed
            Path parent = target.getParent();
            if (parent != null && !Files.exists(parent)) {
                Files.createDirectories(parent);
            }
            
            Files.copy(source, target, 
                      StandardCopyOption.REPLACE_EXISTING,
                      StandardCopyOption.COPY_ATTRIBUTES);
            
            System.out.println("Copied: " + source + " -> " + target);
        }
        
        // Move with fallback to copy+delete
        public static void safeMove(Path source, Path target) throws IOException {
            try {
                Files.move(source, target, 
                          StandardCopyOption.REPLACE_EXISTING,
                          StandardCopyOption.ATOMIC_MOVE);
            } catch (AtomicMoveNotSupportedException e) {
                // Fallback: copy then delete
                Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
                Files.delete(source);
            }
            System.out.println("Moved: " + source + " -> " + target);
        }
        
        // Delete with retry
        public static boolean deleteWithRetry(Path path, int maxRetries) {
            for (int i = 0; i < maxRetries; i++) {
                try {
                    Files.delete(path);
                    return true;
                } catch (IOException e) {
                    if (i == maxRetries - 1) {
                        return false;
                    }
                    try {
                        Thread.sleep(100 * (i + 1));
                    } catch (InterruptedException ie) {
                        Thread.currentThread().interrupt();
                        return false;
                    }
                }
            }
            return false;
        }
    }
    
    // ============================================
    // 2. DIRECTORY TRAVERSAL
    // ============================================
    
    static class DirectoryTraversal {
        
        // Find all files with extension
        public static List<Path> findByExtension(Path dir, String extension) throws IOException {
            if (!Files.isDirectory(dir)) {
                throw new IllegalArgumentException("Not a directory: " + dir);
            }
            
            try (Stream<Path> stream = Files.walk(dir)) {
                return stream
                    .filter(Files::isRegularFile)
                    .filter(p -> p.toString().endsWith(extension))
                    .collect(Collectors.toList());
            }
        }
        
        // Calculate directory size
        public static long calculateDirectorySize(Path dir) throws IOException {
            if (!Files.isDirectory(dir)) {
                return Files.size(dir);
            }
            
            try (Stream<Path> stream = Files.walk(dir)) {
                return stream
                    .filter(Files::isRegularFile)
                    .mapToLong(p -> {
                        try {
                            return Files.size(p);
                        } catch (IOException e) {
                            return 0L;
                        }
                    })
                    .sum();
            }
        }
        
        // Count files by type
        public static Map<String, Long> countFilesByExtension(Path dir) throws IOException {
            try (Stream<Path> stream = Files.walk(dir)) {
                return stream
                    .filter(Files::isRegularFile)
                    .collect(Collectors.groupingBy(
                        p -> getExtension(p),
                        Collectors.counting()
                    ));
            }
        }
        
        private static String getExtension(Path path) {
            String name = path.getFileName().toString();
            int lastDot = name.lastIndexOf('.');
            return lastDot > 0 ? name.substring(lastDot + 1) : "no-extension";
        }
    }
    
    // ============================================
    // 3. FILE SEARCH AND FILTER
    // ============================================
    
    static class FileSearch {
        
        // Search by name pattern
        public static List<Path> searchByName(Path dir, String pattern) throws IOException {
            PathMatcher matcher = FileSystems.getDefault()
                .getPathMatcher("glob:" + pattern);
            
            try (Stream<Path> stream = Files.walk(dir)) {
                return stream
                    .filter(p -> matcher.matches(p.getFileName()))
                    .collect(Collectors.toList());
            }
        }
        
        // Search by content
        public static List<Path> searchByContent(Path dir, String searchText) throws IOException {
            try (Stream<Path> stream = Files.walk(dir)) {
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
        
        // Find large files
        public static List<Path> findLargeFiles(Path dir, long minSize) throws IOException {
            try (Stream<Path> stream = Files.walk(dir)) {
                return stream
                    .filter(Files::isRegularFile)
                    .filter(p -> {
                        try {
                            return Files.size(p) >= minSize;
                        } catch (IOException e) {
                            return false;
                        }
                    })
                    .collect(Collectors.toList());
            }
        }
        
        // Find recently modified files
        public static List<Path> findRecentFiles(Path dir, long daysAgo) throws IOException {
            long cutoff = System.currentTimeMillis() - (daysAgo * 24 * 60 * 60 * 1000);
            
            try (Stream<Path> stream = Files.walk(dir)) {
                return stream
                    .filter(Files::isRegularFile)
                    .filter(p -> {
                        try {
                            return Files.getLastModifiedTime(p).toMillis() >= cutoff;
                        } catch (IOException e) {
                            return false;
                        }
                    })
                    .collect(Collectors.toList());
            }
        }
    }
    
    // ============================================
    // 4. ZIP UTILITIES
    // ============================================
    
    static class ZipUtilities {
        
        // Zip directory
        public static void zipDirectory(Path sourceDir, Path zipFile) throws IOException {
            try (ZipOutputStream zos = new ZipOutputStream(
                    Files.newOutputStream(zipFile))) {
                
                Files.walk(sourceDir)
                    .filter(path -> !Files.isDirectory(path))
                    .forEach(path -> {
                        ZipEntry zipEntry = new ZipEntry(
                            sourceDir.relativize(path).toString());
                        try {
                            zos.putNextEntry(zipEntry);
                            Files.copy(path, zos);
                            zos.closeEntry();
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    });
            }
            System.out.println("Created zip: " + zipFile);
        }
        
        // Unzip file
        public static void unzip(Path zipFile, Path targetDir) throws IOException {
            try (ZipInputStream zis = new ZipInputStream(
                    Files.newInputStream(zipFile))) {
                
                ZipEntry entry;
                while ((entry = zis.getNextEntry()) != null) {
                    Path targetPath = targetDir.resolve(entry.getName());
                    
                    if (entry.isDirectory()) {
                        Files.createDirectories(targetPath);
                    } else {
                        Files.createDirectories(targetPath.getParent());
                        Files.copy(zis, targetPath, StandardCopyOption.REPLACE_EXISTING);
                    }
                    
                    zis.closeEntry();
                }
            }
            System.out.println("Extracted to: " + targetDir);
        }
        
        // List zip contents
        public static void listZipContents(Path zipFile) throws IOException {
            try (ZipFile zip = new ZipFile(zipFile.toFile())) {
                Enumeration<? extends ZipEntry> entries = zip.entries();
                
                System.out.println("Zip contents:");
                while (entries.hasMoreElements()) {
                    ZipEntry entry = entries.nextElement();
                    String type = entry.isDirectory() ? "[DIR]" : "[FILE]";
                    System.out.printf("  %s %10d %s%n", 
                        type, entry.getSize(), entry.getName());
                }
            }
        }
    }
    
    // ============================================
    // 5. CSV FILE PROCESSING
    // ============================================
    
    static class CSVProcessor {
        
        // Read CSV file
        public static List<String[]> readCSV(Path file, String delimiter) throws IOException {
            List<String[]> records = new ArrayList<>();
            
            try (BufferedReader reader = Files.newBufferedReader(file)) {
                String line;
                while ((line = reader.readLine()) != null) {
                    String[] fields = line.split(delimiter);
                    records.add(fields);
                }
            }
            
            return records;
        }
        
        // Write CSV file
        public static void writeCSV(Path file, List<String[]> records, String delimiter) 
                throws IOException {
            try (BufferedWriter writer = Files.newBufferedWriter(file)) {
                for (String[] record : records) {
                    writer.write(String.join(delimiter, record));
                    writer.newLine();
                }
            }
        }
        
        // Read CSV with headers
        public static List<Map<String, String>> readCSVWithHeaders(Path file) throws IOException {
            List<Map<String, String>> records = new ArrayList<>();
            
            try (BufferedReader reader = Files.newBufferedReader(file)) {
                String headerLine = reader.readLine();
                if (headerLine == null) return records;
                
                String[] headers = headerLine.split(",");
                
                String line;
                while ((line = reader.readLine()) != null) {
                    String[] values = line.split(",");
                    Map<String, String> record = new HashMap<>();
                    
                    for (int i = 0; i < headers.length && i < values.length; i++) {
                        record.put(headers[i].trim(), values[i].trim());
                    }
                    records.add(record);
                }
            }
            
            return records;
        }
    }
    
    // ============================================
    // 6. PROPERTIES FILE HANDLING
    // ============================================
    
    static class PropertiesHandler {
        
        // Load properties from file
        public static Properties loadProperties(Path file) throws IOException {
            Properties props = new Properties();
            
            try (InputStream input = Files.newInputStream(file)) {
                props.load(input);
            }
            
            return props;
        }
        
        // Save properties to file
        public static void saveProperties(Path file, Properties props, String comments) 
                throws IOException {
            try (OutputStream output = Files.newOutputStream(file)) {
                props.store(output, comments);
            }
        }
        
        // Update property
        public static void updateProperty(Path file, String key, String value) 
                throws IOException {
            Properties props = loadProperties(file);
            props.setProperty(key, value);
            saveProperties(file, props, "Updated: " + new Date());
        }
    }
    
    // ============================================
    // 7. TEMPORARY FILES
    // ============================================
    
    static class TemporaryFiles {
        
        // Create temporary file
        public static Path createTempFile(String prefix, String suffix) throws IOException {
            Path tempFile = Files.createTempFile(prefix, suffix);
            System.out.println("Created temp file: " + tempFile);
            return tempFile;
        }
        
        // Create temporary directory
        public static Path createTempDirectory(String prefix) throws IOException {
            Path tempDir = Files.createTempDirectory(prefix);
            System.out.println("Created temp directory: " + tempDir);
            return tempDir;
        }
        
        // Auto-delete temporary file
        public static void useTempFileWithAutoDelete() throws IOException {
            Path tempFile = Files.createTempFile("temp", ".txt");
            
            // Register for deletion on JVM exit
            tempFile.toFile().deleteOnExit();
            
            // Use the file
            Files.writeString(tempFile, "Temporary data");
            
            System.out.println("Temp file will be deleted on exit: " + tempFile);
        }
    }
    
    // ============================================
    // 8. FILE COMPARISON
    // ============================================
    
    static class FileComparison {
        
        // Compare files byte by byte
        public static boolean filesEqual(Path file1, Path file2) throws IOException {
            if (Files.size(file1) != Files.size(file2)) {
                return false;
            }
            
            try (InputStream is1 = Files.newInputStream(file1);
                 InputStream is2 = Files.newInputStream(file2)) {
                
                int byte1, byte2;
                while ((byte1 = is1.read()) != -1) {
                    byte2 = is2.read();
                    if (byte1 != byte2) {
                        return false;
                    }
                }
            }
            
            return true;
        }
        
        // Compare text files line by line
        public static List<String> getDifferences(Path file1, Path file2) throws IOException {
            List<String> lines1 = Files.readAllLines(file1);
            List<String> lines2 = Files.readAllLines(file2);
            List<String> differences = new ArrayList<>();
            
            int maxLines = Math.max(lines1.size(), lines2.size());
            
            for (int i = 0; i < maxLines; i++) {
                String line1 = i < lines1.size() ? lines1.get(i) : "";
                String line2 = i < lines2.size() ? lines2.get(i) : "";
                
                if (!line1.equals(line2)) {
                    differences.add("Line " + (i + 1) + ":");
                    differences.add("  File1: " + line1);
                    differences.add("  File2: " + line2);
                }
            }
            
            return differences;
        }
        
        // Calculate file checksum
        public static String calculateChecksum(Path file) throws IOException {
            try (InputStream is = Files.newInputStream(file)) {
                java.security.MessageDigest md = java.security.MessageDigest.getInstance("MD5");
                byte[] buffer = new byte[8192];
                int bytesRead;
                
                while ((bytesRead = is.read(buffer)) != -1) {
                    md.update(buffer, 0, bytesRead);
                }
                
                byte[] digest = md.digest();
                StringBuilder sb = new StringBuilder();
                for (byte b : digest) {
                    sb.append(String.format("%02x", b));
                }
                return sb.toString();
            } catch (java.security.NoSuchAlgorithmException e) {
                throw new IOException("MD5 algorithm not available", e);
            }
        }
    }
    
    // ============================================
    // MAIN - DEMONSTRATE PATTERNS
    // ============================================
    
    public static void main(String[] args) {
        try {
            System.out.println("=== ADVANCED I/O PATTERNS ===\n");
            
            // Create test directory
            Path testDir = Paths.get("test_io");
            Files.createDirectories(testDir);
            
            // 1. File operations
            Path source = testDir.resolve("source.txt");
            Path target = testDir.resolve("target.txt");
            Files.writeString(source, "Test content");
            FileOperations.safeCopy(source, target);
            
            // 2. Directory traversal
            List<Path> txtFiles = DirectoryTraversal.findByExtension(Paths.get("."), ".txt");
            System.out.println("\n.txt files found: " + txtFiles.size());
            
            // 3. CSV processing
            Path csvFile = testDir.resolve("data.csv");
            List<String[]> csvData = Arrays.asList(
                new String[]{"Name", "Age", "City"},
                new String[]{"Alice", "25", "NYC"},
                new String[]{"Bob", "30", "LA"}
            );
            CSVProcessor.writeCSV(csvFile, csvData, ",");
            List<String[]> readData = CSVProcessor.readCSV(csvFile, ",");
            System.out.println("\nCSV rows read: " + readData.size());
            
            // 4. Properties
            Path propsFile = testDir.resolve("config.properties");
            Properties props = new Properties();
            props.setProperty("app.name", "MyApp");
            props.setProperty("app.version", "1.0");
            PropertiesHandler.saveProperties(propsFile, props, "Application config");
            System.out.println("\nProperties saved");
            
            // 5. Temporary files
            TemporaryFiles.useTempFileWithAutoDelete();
            
            System.out.println("\n=== All patterns demonstrated! ===");
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
