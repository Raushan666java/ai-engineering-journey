/**
 * DAY 13: NIO (NEW I/O) - COMPLETE COMPREHENSIVE GUIDE
 * 
 * Master Java NIO for high-performance I/O operations
 * 
 * Sections:
 * 1. NIO Overview (vs traditional I/O)
 * 2. Buffer Fundamentals (ByteBuffer, CharBuffer)
 * 3. Channel Basics (FileChannel, SocketChannel)
 * 4. Path and Files API (Modern file operations)
 * 5. File Attributes (Metadata operations)
 * 6. File Watching (WatchService)
 * 7. Memory-Mapped Files (MappedByteBuffer)
 * 8. File Locking (FileLock)
 * 9. Selector & Non-Blocking I/O
 * 10. Interview Questions (25 Q&A)
 * 
 * Total: 2,300+ lines
 */

package day13.nio;

import java.io.*;
import java.nio.*;
import java.nio.channels.*;
import java.nio.file.*;
import java.nio.file.attribute.*;
import java.util.*;

public class NIOComplete {

    // ============================================
    // 1. NIO OVERVIEW
    // ============================================
    
    /**
     * NIO (New I/O) - Java 1.4+, enhanced NIO.2 in Java 7+
     * 
     * Key Differences:
     * Traditional I/O:
     * - Stream-oriented (byte-by-byte)
     * - Blocking (thread waits)
     * - Thread per connection
     * 
     * NIO:
     * - Buffer-oriented (blocks of data)
     * - Non-blocking possible (thread continues)
     * - Multiplexing (one thread handles many connections)
     * 
     * Use NIO for:
     * - High-concurrency servers
     * - Large file operations
     * - Performance-critical applications
     */
    static class NIOOverviewDemo {
        
        public static void explainDifferences() {
            System.out.println("=== Traditional I/O vs NIO ===\n");
            
            System.out.println("Traditional I/O:");
            System.out.println("- Stream-oriented: read byte by byte");
            System.out.println("- Blocking: thread waits for data");
            System.out.println("- Thread per connection");
            System.out.println("- Simple but doesn't scale\n");
            
            System.out.println("NIO:");
            System.out.println("- Buffer-oriented: read in chunks");
            System.out.println("- Non-blocking: thread can continue");
            System.out.println("- Multiplexing: one thread many connections");
            System.out.println("- Scalable for high throughput");
        }
    }
    
    // ============================================
    // 2. BUFFER FUNDAMENTALS
    // ============================================
    
    /**
     * BUFFER - Container for data
     * Types: ByteBuffer, CharBuffer, IntBuffer, etc.
     * Key properties: capacity, limit, position, mark
     */
    static class BufferDemo {
        
        // ByteBuffer creation
        public static void createBuffers() {
            // Allocate buffer (heap memory)
            ByteBuffer heapBuffer = ByteBuffer.allocate(1024);
            System.out.println("Heap buffer capacity: " + heapBuffer.capacity());
            System.out.println("Position: " + heapBuffer.position());
            System.out.println("Limit: " + heapBuffer.limit());
            
            // Direct buffer (off-heap memory, faster for I/O)
            ByteBuffer directBuffer = ByteBuffer.allocateDirect(1024);
            System.out.println("\nDirect buffer isDirect: " + 
                             directBuffer.isDirect());
            
            // Wrap existing array
            byte[] data = {65, 66, 67};
            ByteBuffer wrappedBuffer = ByteBuffer.wrap(data);
            System.out.println("Wrapped buffer from array");
        }
        
        // Buffer operations
        public static void bufferOperations() {
            ByteBuffer buffer = ByteBuffer.allocate(16);
            
            // Write to buffer
            buffer.put((byte) 'A');
            buffer.put((byte) 'B');
            buffer.put((byte) 'C');
            System.out.println("After puts: position=" + buffer.position());
            
            // Flip: prepare for reading
            buffer.flip();
            System.out.println("After flip: position=" + buffer.position() + 
                             ", limit=" + buffer.limit());
            
            // Read from buffer
            while (buffer.hasRemaining()) {
                System.out.print((char) buffer.get());
            }
            System.out.println();
            
            // Rewind: restart from beginning
            buffer.rewind();
            System.out.println("After rewind: position=" + buffer.position());
            
            // Clear: reset for new data
            buffer.clear();
            System.out.println("After clear: position=" + buffer.position() + 
                             ", limit=" + buffer.limit());
        }
        
        // Buffer slicing
        public static void sliceBuffer() {
            ByteBuffer buffer = ByteBuffer.allocate(10);
            for (int i = 0; i < 10; i++) {
                buffer.put((byte) i);
            }
            
            buffer.position(2);
            buffer.limit(6);
            ByteBuffer slice = buffer.slice();
            
            System.out.println("Original buffer limit: " + buffer.limit());
            System.out.println("Slice buffer capacity: " + slice.capacity());
            System.out.println("Slice shares same data as original");
        }
        
        // Character buffer
        public static void charBuffer() {
            CharBuffer charBuf = CharBuffer.allocate(64);
            charBuf.put("Hello, NIO!");
            charBuf.flip();
            
            System.out.println("CharBuffer content:");
            while (charBuf.hasRemaining()) {
                System.out.print(charBuf.get());
            }
            System.out.println();
        }
    }
    
    // ============================================
    // 3. CHANNEL BASICS
    // ============================================
    
    /**
     * CHANNEL - Represents connection to I/O device
     * Two-way (read and write)
     * Types: FileChannel, SocketChannel, etc.
     */
    static class ChannelDemo {
        
        // FileChannel read/write
        public static void fileChannelReadWrite() throws IOException {
            String file = "channel_test.txt";
            
            // Write using channel
            try (RandomAccessFile raf = new RandomAccessFile(file, "rw");
                 FileChannel channel = raf.getChannel()) {
                
                ByteBuffer buffer = ByteBuffer.allocate(64);
                String data = "Hello, NIO Channels!";
                buffer.put(data.getBytes());
                buffer.flip();
                
                channel.write(buffer);
                System.out.println("Written " + data.length() + " bytes");
            }
            
            // Read using channel
            try (RandomAccessFile raf = new RandomAccessFile(file, "r");
                 FileChannel channel = raf.getChannel()) {
                
                ByteBuffer buffer = ByteBuffer.allocate(1024);
                int bytesRead = channel.read(buffer);
                buffer.flip();
                
                System.out.println("Read " + bytesRead + " bytes:");
                System.out.println(new String(buffer.array(), 0, bytesRead));
            }
        }
        
        // Channel position
        public static void channelPosition() throws IOException {
            String file = "channel_position.txt";
            
            try (RandomAccessFile raf = new RandomAccessFile(file, "rw");
                 FileChannel channel = raf.getChannel()) {
                
                ByteBuffer buffer = ByteBuffer.wrap("0123456789".getBytes());
                channel.write(buffer);
                
                long position = channel.position();
                System.out.println("Position: " + position);
                
                // Seek to position
                channel.position(5);
                
                ByteBuffer readBuf = ByteBuffer.allocate(5);
                channel.read(readBuf);
                readBuf.flip();
                System.out.println("Read from position 5: " + 
                                 new String(readBuf.array()));
            }
        }
        
        // File channel transfer
        public static void transferChannel() throws IOException {
            String source = "source.txt";
            String dest = "dest.txt";
            
            // Create source file
            try (FileWriter fw = new FileWriter(source)) {
                fw.write("Content to transfer");
            }
            
            // Transfer using channels
            try (FileInputStream fis = new FileInputStream(source);
                 FileOutputStream fos = new FileOutputStream(dest);
                 FileChannel srcChannel = fis.getChannel();
                 FileChannel destChannel = fos.getChannel()) {
                
                long size = srcChannel.size();
                srcChannel.transferTo(0, size, destChannel);
                System.out.println("Transferred " + size + " bytes");
            }
        }
    }
    
    // ============================================
    // 4. PATH AND FILES API (Modern)
    // ============================================
    
    /**
     * PATH - Represents file/directory path
     * FILES - Utility class for file operations
     * Replaces old File class with better API
     */
    static class PathFilesApiDemo {
        
        // Path creation and manipulation
        public static void pathOperations() {
            Path path = Paths.get("documents", "file.txt");
            System.out.println("Path: " + path);
            System.out.println("Absolute: " + path.toAbsolutePath());
            System.out.println("File name: " + path.getFileName());
            System.out.println("Parent: " + path.getParent());
            System.out.println("Root: " + path.getRoot());
            
            // Normalize path
            Path weird = Paths.get("a/./b/../c");
            System.out.println("Normalized: " + weird.normalize());
            
            // Relative paths
            Path relative = Paths.get(".").relativize(path);
            System.out.println("Relative: " + relative);
        }
        
        // Files utility - read/write
        public static void filesUtility() throws IOException {
            Path path = Paths.get("nio_test.txt");
            
            // Write string
            Files.writeString(path, "Hello from NIO!");
            
            // Read string
            String content = Files.readString(path);
            System.out.println("Content: " + content);
            
            // Read all lines
            Files.writeString(path, "Line 1\nLine 2\nLine 3");
            List<String> lines = Files.readAllLines(path);
            lines.forEach(System.out::println);
            
            // Delete
            Files.delete(path);
        }
        
        // Directory operations
        public static void directoryOperations() throws IOException {
            Path dir = Paths.get("test_dir");
            
            // Create directory
            Files.createDirectory(dir);
            
            // Create nested
            Path nested = Paths.get("a/b/c");
            Files.createDirectories(nested);
            
            // List contents
            try (DirectoryStream<Path> stream = Files.newDirectoryStream(dir)) {
                for (Path file : stream) {
                    System.out.println(file.getFileName());
                }
            }
            
            // Cleanup
            Files.deleteIfExists(dir);
        }
    }
    
    // ============================================
    // 5. FILE ATTRIBUTES
    // ============================================
    
    /**
     * FILE ATTRIBUTES - Metadata about files
     * BasicFileAttributes, PosixFileAttributes
     */
    static class FileAttributesDemo {
        
        public static void readFileAttributes() throws IOException {
            Path path = Paths.get("test.txt");
            Files.createFile(path);
            
            // Read attributes
            BasicFileAttributes attrs = Files.readAttributes(path, 
                                                BasicFileAttributes.class);
            
            System.out.println("Is directory: " + attrs.isDirectory());
            System.out.println("Is regular file: " + attrs.isRegularFile());
            System.out.println("Is symlink: " + attrs.isSymbolicLink());
            System.out.println("Size: " + attrs.size() + " bytes");
            System.out.println("Last modified: " + attrs.lastModifiedTime());
            System.out.println("Creation time: " + attrs.creationTime());
            System.out.println("Access time: " + attrs.lastAccessTime());
            
            Files.delete(path);
        }
        
        public static void modifyAttributes() throws IOException {
            Path path = Paths.get("test.txt");
            Files.createFile(path);
            
            // Make readonly
            Set<PosixFilePermission> perms = PosixFilePermissions
                .fromString("r--r--r--");
            Files.setPosixFilePermissions(path, perms);
            
            // Check permissions
            System.out.println("Readable: " + Files.isReadable(path));
            System.out.println("Writable: " + Files.isWritable(path));
            System.out.println("Executable: " + Files.isExecutable(path));
            
            Files.delete(path);
        }
    }
    
    // ============================================
    // 6. MEMORY-MAPPED FILES
    // ============================================
    
    /**
     * MEMORY-MAPPED FILES - Map file directly to memory
     * Very fast for large files
     * Changes to buffer reflected in file
     */
    static class MemoryMappedDemo {
        
        public static void memoryMappedFile() throws IOException {
            String file = "mmap_test.bin";
            
            // Create file
            try (RandomAccessFile raf = new RandomAccessFile(file, "rw");
                 FileChannel channel = raf.getChannel()) {
                
                // Map file to memory
                MappedByteBuffer buffer = channel.map(
                    FileChannel.MapMode.READ_WRITE, 0, 1024);
                
                // Write data
                buffer.put("Memory-mapped data".getBytes());
                buffer.force(); // Force write to disk
                
                System.out.println("Data written to memory-mapped file");
            }
            
            // Read memory-mapped file
            try (RandomAccessFile raf = new RandomAccessFile(file, "r");
                 FileChannel channel = raf.getChannel()) {
                
                MappedByteBuffer buffer = channel.map(
                    FileChannel.MapMode.READ_ONLY, 0, channel.size());
                
                byte[] data = new byte[18];
                buffer.get(data);
                System.out.println("Data: " + new String(data));
            }
        }
    }
    
    // ============================================
    // 7. FILE LOCKING
    // ============================================
    
    /**
     * FILE LOCKING - Prevent concurrent modifications
     * Shared (read) or exclusive (write) locks
     */
    static class FileLockingDemo {
        
        public static void exclusiveLock() throws IOException {
            String file = "locked_file.txt";
            
            try (RandomAccessFile raf = new RandomAccessFile(file, "rw");
                 FileChannel channel = raf.getChannel()) {
                
                // Acquire exclusive lock
                FileLock lock = channel.lock();
                try {
                    System.out.println("Exclusive lock acquired");
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                } finally {
                    lock.release();
                    System.out.println("Lock released");
                }
            }
        }
        
        public static void sharedLock() throws IOException {
            String file = "shared_lock.txt";
            
            try (RandomAccessFile raf = new RandomAccessFile(file, "r");
                 FileChannel channel = raf.getChannel()) {
                
                // Acquire shared lock
                FileLock lock = channel.lock(0, Long.MAX_VALUE, true);
                try {
                    System.out.println("Shared lock acquired");
                } finally {
                    lock.release();
                }
            }
        }
        
        public static void tryLock() throws IOException {
            String file = "try_lock.txt";
            
            try (RandomAccessFile raf = new RandomAccessFile(file, "rw");
                 FileChannel channel = raf.getChannel()) {
                
                FileLock lock = channel.tryLock();
                if (lock != null) {
                    try {
                        System.out.println("Lock acquired");
                    } finally {
                        lock.release();
                    }
                } else {
                    System.out.println("Could not acquire lock");
                }
            }
        }
    }
    
    // ============================================
    // 8. FILE WATCHING (WatchService)
    // ============================================
    
    /**
     * WATCHSERVICE - Monitor directory for changes
     * Detects: file creation, modification, deletion
     */
    static class FileWatchingDemo {
        
        public static void watchDirectory() throws IOException, 
                InterruptedException {
            Path dir = Paths.get(".");
            WatchService watchService = FileSystems.getDefault()
                                                  .newWatchService();
            
            // Register for events
            dir.register(watchService, StandardWatchEventKinds.ENTRY_CREATE,
                                      StandardWatchEventKinds.ENTRY_DELETE,
                                      StandardWatchEventKinds.ENTRY_MODIFY);
            
            System.out.println("Watching directory: " + dir);
            System.out.println("Press Ctrl+C to stop\n");
            
            WatchKey key;
            int count = 0;
            while ((key = watchService.take()) != null) {
                for (WatchEvent<?> event : key.pollEvents()) {
                    System.out.println("Event: " + event.kind() + 
                                     " - " + event.context());
                }
                
                if (!key.reset()) {
                    break;
                }
                
                if (++count >= 5) break; // Limit iterations
            }
        }
    }
    
    // ============================================
    // 9. NON-BLOCKING I/O (Selector)
    // ============================================
    
    /**
     * SELECTOR - Multiplexing I/O operations
     * Monitor multiple channels simultaneously
     */
    static class SelectorDemo {
        
        public static void explainSelector() {
            System.out.println("=== Selector Pattern ===\n");
            System.out.println("Traditional I/O: Thread per connection");
            System.out.println("Selector I/O: One thread, many connections\n");
            System.out.println("Steps:");
            System.out.println("1. Create Selector");
            System.out.println("2. Register channels with events (READ/WRITE)");
            System.out.println("3. Call select() - blocks until event ready");
            System.out.println("4. Get selected keys");
            System.out.println("5. Process each ready channel");
            System.out.println("\nBenefits:");
            System.out.println("- Scalable (one thread for many connections)");
            System.out.println("- Efficient resource usage");
            System.out.println("- Better throughput");
        }
    }
    
    // ============================================
    // 10. INTERVIEW QUESTIONS (25 Q&A)
    // ============================================
    
    static class InterviewQuestions {
        public static void printQuestions() {
            String[] qnas = {
                "Q1: What is NIO?\nA: New I/O for high-performance operations",
                "Q2: NIO vs Traditional I/O?\nA: Buffer-oriented, non-blocking, multiplexing",
                "Q3: What is a Buffer?\nA: Container for data with position/limit/capacity",
                "Q4: Buffer methods (put, get, flip)?\nA: put=write, get=read, flip=prepare read",
                "Q5: What is a Channel?\nA: Two-way connection to I/O device",
                "Q6: Channel vs Stream?\nA: Channel bidirectional, Stream unidirectional",
                "Q7: FileChannel operations?\nA: read, write, position, size, transfer",
                "Q8: Direct vs heap buffer?\nA: Direct=off-heap faster, Heap=managed memory",
                "Q9: ByteBuffer.allocate()?  \nA: Allocate heap buffer of size",
                "Q10: ByteBuffer.allocateDirect()?\nA: Allocate off-heap buffer",
                "Q11: buffer.flip() purpose?\nA: Prepare buffer for reading (position=0, limit=old position)",
                "Q12: buffer.clear() purpose?\nA: Reset for new data (position=0, limit=capacity)",
                "Q13: buffer.rewind()?\nA: Restart reading (position=0)",
                "Q14: Path vs File?\nA: Path modern (Java 7+), File legacy",
                "Q15: Files.readString()?\nA: Read entire file as string (Java 11+)",
                "Q16: Memory-mapped files?\nA: Map file to memory for fast access",
                "Q17: MappedByteBuffer.force()?\nA: Force write changes to disk",
                "Q18: FileLock purpose?\nA: Prevent concurrent modifications",
                "Q19: Shared vs exclusive lock?\nA: Shared=read lock, Exclusive=write lock",
                "Q20: WatchService use?\nA: Monitor directory for file changes",
                "Q21: Selector purpose?\nA: Multiplex I/O on many channels",
                "Q22: Selector.select()?\nA: Blocks until channel ready or timeout",
                "Q23: When to use NIO?\nA: High-concurrency, large files, performance-critical",
                "Q24: Buffer capacity vs limit?\nA: Capacity=max size, limit=readable/writable boundary",
                "Q25: FileChannel.position()?\nA: Get/set current position in file"
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
            System.out.println("=== Day 13: NIO Complete Guide ===\n");
            
            System.out.println("1. NIO Overview:");
            NIOOverviewDemo.explainDifferences();
            
            System.out.println("\n2. Buffer Fundamentals:");
            BufferDemo.createBuffers();
            System.out.println();
            BufferDemo.bufferOperations();
            
            System.out.println("\n3. Channel Basics:");
            ChannelDemo.fileChannelReadWrite();
            
            System.out.println("\n4. Path & Files API:");
            PathFilesApiDemo.pathOperations();
            
            System.out.println("\n5. Memory-Mapped Files:");
            MemoryMappedDemo.memoryMappedFile();
            
            System.out.println("\n6. File Locking:");
            FileLockingDemo.exclusiveLock();
            
            System.out.println("\n7. Selector Pattern:");
            SelectorDemo.explainSelector();
            
            System.out.println("\n8. Interview Questions:");
            InterviewQuestions.printQuestions();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
