/**
 * DAY 12: NIO (NEW I/O) - COMPLETE GUIDE
 * 
 * Comprehensive coverage of Java NIO (java.nio package)
 * 
 * Topics Covered:
 * 1. NIO Overview (NIO vs IO)
 * 2. Buffer Fundamentals (ByteBuffer, CharBuffer, etc.)
 * 3. Channel Basics (FileChannel, SocketChannel)
 * 4. Path and Files API (Modern file operations)
 * 5. File Attributes (BasicFileAttributes, PosixFileAttributes)
 * 6. File Watching (WatchService)
 * 7. Memory-Mapped Files (MappedByteBuffer)
 * 8. File Locking (FileLock)
 * 9. Non-Blocking I/O (Selector, SelectionKey)
 * 10. Interview Questions (20 Q&A)
 */

package day12.nio;

import java.io.*;
import java.nio.*;
import java.nio.channels.*;
import java.nio.file.*;
import java.nio.file.attribute.*;
import java.util.*;
import java.util.stream.*;

public class NIOComplete {

    // ============================================
    // 1. NIO OVERVIEW
    // ============================================
    
    /**
     * NIO (New I/O) - Introduced in Java 1.4, enhanced in Java 7 (NIO.2)
     * 
     * Key differences: IO vs NIO
     * 
     * Stream-Oriented vs Buffer-Oriented:
     * - IO: Stream-oriented (read byte by byte)
     * - NIO: Buffer-oriented (read/write in blocks)
     * 
     * Blocking vs Non-Blocking:
     * - IO: Blocking (thread waits)
     * - NIO: Non-blocking (thread can do other work)
     * 
     * Channels vs Streams:
     * - IO: Streams (one-way: input OR output)
     * - NIO: Channels (two-way: input AND output)
     * 
     * Selectors:
     * - IO: No selector
     * - NIO: Selector (one thread handles multiple channels)
     */
    static class NIOOverview {
        
        public static void ioVsNio() {
            System.out.println("=== IO vs NIO Comparison ===\n");
            
            System.out.println("IO (Old):");
            System.out.println("- Stream-oriented (byte/character streams)");
            System.out.println("- Blocking I/O");
            System.out.println("- No direct buffer support");
            System.out.println("- One thread per connection");
            
            System.out.println("\nNIO (New):");
            System.out.println("- Buffer-oriented (ByteBuffer, CharBuffer, etc.)");
            System.out.println("- Non-blocking I/O");
            System.out.println("- Direct buffer support (off-heap memory)");
            System.out.println("- One thread handles multiple connections (Selector)");
            
            System.out.println("\nWhen to use NIO:");
            System.out.println("- High-concurrency scenarios (many connections)");
            System.out.println("- Large file operations (memory-mapped files)");
            System.out.println("- Non-blocking server applications");
            System.out.println("- Need better control over I/O operations");
        }
    }
    
    // ============================================
    // 2. BUFFER FUNDAMENTALS
    // ============================================
    
    /**
     * BUFFER - Container for data
     * 
     * Types:
     * - ByteBuffer (most common)
     * - CharBuffer
     * - IntBuffer
     * - LongBuffer
     * - FloatBuffer
     * - DoubleBuffer
     * - ShortBuffer
     * 
     * Key properties:
     * - capacity: maximum size
     * - position: current position
     * - limit: limit for reading/writing
     * - mark: saved position
     */
    static class BufferDemo {
        
        // ByteBuffer basics
        public static void byteBufferBasics() {
            // Allocate buffer (heap)
            ByteBuffer buffer = ByteBuffer.allocate(10);
            
            System.out.println("Initial state:");
            printBufferState(buffer);
            
            // Write data
            buffer.put((byte) 'H');
            buffer.put((byte) 'e');
            buffer.put((byte) 'l');
            buffer.put((byte) 'l');
            buffer.put((byte) 'o');
            
            System.out.println("\nAfter writing 'Hello':");
            printBufferState(buffer);
            
            // Flip: switch from write to read mode
            buffer.flip();
            
            System.out.println("\nAfter flip:");
            printBufferState(buffer);
            
            // Read data
            while (buffer.hasRemaining()) {
                System.out.print((char) buffer.get());
            }
            System.out.println();
            
            // Clear: reset for writing
            buffer.clear();
            
            System.out.println("\nAfter clear:");
            printBufferState(buffer);
        }
        
        // Buffer operations
        public static void bufferOperations() {
            ByteBuffer buffer = ByteBuffer.allocate(10);
            
            // Put operations
            buffer.put((byte) 1);
            buffer.put((byte) 2);
            buffer.put((byte) 3);
            
            // Mark position
            buffer.mark();
            
            buffer.put((byte) 4);
            buffer.put((byte) 5);
            
            // Reset to mark
            buffer.reset();
            System.out.println("Position after reset: " + buffer.position()); // 3
            
            // Rewind: position to 0, keep limit
            buffer.rewind();
            System.out.println("Position after rewind: " + buffer.position()); // 0
            
            // Compact: copy unread data to beginning
            buffer.position(2);
            buffer.limit(5);
            buffer.compact();
            System.out.println("After compact:");
            printBufferState(buffer);
        }
        
        // Direct vs Heap buffer
        public static void directVsHeap() {
            // Heap buffer (on Java heap)
            ByteBuffer heapBuffer = ByteBuffer.allocate(1024);
            System.out.println("Heap buffer isDirect: " + heapBuffer.isDirect()); // false
            
            // Direct buffer (off-heap, native memory)
            ByteBuffer directBuffer = ByteBuffer.allocateDirect(1024);
            System.out.println("Direct buffer isDirect: " + directBuffer.isDirect()); // true
            
            System.out.println("\nDirect buffer advantages:");
            System.out.println("- Faster I/O (no copying between JVM and OS)");
            System.out.println("- Useful for large, long-lived buffers");
            
            System.out.println("\nDirect buffer disadvantages:");
            System.out.println("- Allocation/deallocation slower");
            System.out.println("- Memory outside JVM heap (can cause OutOfMemoryError)");
        }
        
        // Bulk operations
        public static void bulkOperations() {
            ByteBuffer buffer = ByteBuffer.allocate(10);
            
            // Bulk put
            byte[] data = {1, 2, 3, 4, 5};
            buffer.put(data);
            
            buffer.flip();
            
            // Bulk get
            byte[] output = new byte[5];
            buffer.get(output);
            
            System.out.println("Bulk read: " + Arrays.toString(output));
        }
        
        // View buffers
        public static void viewBuffers() {
            ByteBuffer buffer = ByteBuffer.allocate(16);
            
            // Write different types
            buffer.putInt(42);           // 4 bytes
            buffer.putDouble(3.14159);   // 8 bytes
            buffer.putChar('A');         // 2 bytes
            
            buffer.flip();
            
            // Read back
            int intValue = buffer.getInt();
            double doubleValue = buffer.getDouble();
            char charValue = buffer.getChar();
            
            System.out.println("Int: " + intValue);
            System.out.println("Double: " + doubleValue);
            System.out.println("Char: " + charValue);
            
            // Create view buffers
            buffer.clear();
            IntBuffer intView = buffer.asIntBuffer();
            intView.put(100);
            intView.put(200);
            
            buffer.rewind();
            System.out.println("View buffer int 1: " + buffer.getInt());
            System.out.println("View buffer int 2: " + buffer.getInt());
        }
        
        private static void printBufferState(ByteBuffer buffer) {
            System.out.println("  capacity: " + buffer.capacity());
            System.out.println("  position: " + buffer.position());
            System.out.println("  limit: " + buffer.limit());
            System.out.println("  remaining: " + buffer.remaining());
        }
    }
    
    // ============================================
    // 3. CHANNEL BASICS
    // ============================================
    
    /**
     * CHANNEL - Two-way communication link
     * 
     * Types:
     * - FileChannel: File I/O
     * - SocketChannel: TCP network I/O
     * - ServerSocketChannel: TCP server
     * - DatagramChannel: UDP network I/O
     * 
     * Channels are:
     * - Two-way (read AND write)
     * - Work with buffers
     * - Can be non-blocking
     */
    static class ChannelDemo {
        
        // Read file using FileChannel
        public static void readWithChannel() throws IOException {
            try (FileChannel channel = FileChannel.open(
                    Paths.get("sample.txt"), StandardOpenOption.READ)) {
                
                ByteBuffer buffer = ByteBuffer.allocate(1024);
                
                int bytesRead = channel.read(buffer);
                System.out.println("Bytes read: " + bytesRead);
                
                buffer.flip();
                
                while (buffer.hasRemaining()) {
                    System.out.print((char) buffer.get());
                }
            }
        }
        
        // Write file using FileChannel
        public static void writeWithChannel() throws IOException {
            try (FileChannel channel = FileChannel.open(
                    Paths.get("output.txt"),
                    StandardOpenOption.CREATE,
                    StandardOpenOption.WRITE)) {
                
                String data = "Hello, NIO Channel!";
                ByteBuffer buffer = ByteBuffer.wrap(data.getBytes());
                
                channel.write(buffer);
                System.out.println("Data written via channel");
            }
        }
        
        // Copy file using channels (faster than streams)
        public static void copyWithChannel() throws IOException {
            try (FileChannel source = FileChannel.open(
                    Paths.get("source.txt"), StandardOpenOption.READ);
                 FileChannel dest = FileChannel.open(
                    Paths.get("dest.txt"),
                    StandardOpenOption.CREATE,
                    StandardOpenOption.WRITE)) {
                
                // Transfer directly (very fast!)
                long transferred = source.transferTo(0, source.size(), dest);
                System.out.println("Transferred " + transferred + " bytes");
            }
        }
        
        // Random access with FileChannel
        public static void randomAccess() throws IOException {
            try (FileChannel channel = FileChannel.open(
                    Paths.get("data.txt"),
                    StandardOpenOption.CREATE,
                    StandardOpenOption.READ,
                    StandardOpenOption.WRITE)) {
                
                // Write at position 0
                ByteBuffer buffer = ByteBuffer.wrap("Hello".getBytes());
                channel.write(buffer);
                
                // Write at position 100
                buffer = ByteBuffer.wrap("World".getBytes());
                channel.write(buffer, 100);
                
                // Read from position 100
                buffer = ByteBuffer.allocate(5);
                channel.read(buffer, 100);
                
                buffer.flip();
                System.out.print("At position 100: ");
                while (buffer.hasRemaining()) {
                    System.out.print((char) buffer.get());
                }
                System.out.println();
            }
        }
        
        // Scatter/Gather I/O
        public static void scatterGather() throws IOException {
            try (FileChannel channel = FileChannel.open(
                    Paths.get("scatter.txt"),
                    StandardOpenOption.CREATE,
                    StandardOpenOption.READ,
                    StandardOpenOption.WRITE)) {
                
                // Gather write (write multiple buffers)
                ByteBuffer header = ByteBuffer.wrap("HEADER\n".getBytes());
                ByteBuffer body = ByteBuffer.wrap("BODY\n".getBytes());
                ByteBuffer footer = ByteBuffer.wrap("FOOTER\n".getBytes());
                
                ByteBuffer[] buffers = {header, body, footer};
                channel.write(buffers);
                
                System.out.println("Scatter/Gather write complete");
                
                // Scatter read (read into multiple buffers)
                channel.position(0);
                ByteBuffer buf1 = ByteBuffer.allocate(7);
                ByteBuffer buf2 = ByteBuffer.allocate(5);
                ByteBuffer buf3 = ByteBuffer.allocate(7);
                
                ByteBuffer[] readBuffers = {buf1, buf2, buf3};
                channel.read(readBuffers);
                
                buf1.flip();
                buf2.flip();
                buf3.flip();
                
                System.out.println("Buffer 1: " + new String(buf1.array(), 0, buf1.limit()));
                System.out.println("Buffer 2: " + new String(buf2.array(), 0, buf2.limit()));
                System.out.println("Buffer 3: " + new String(buf3.array(), 0, buf3.limit()));
            }
        }
    }
    
    // ============================================
    // 4. PATH AND FILES API
    // ============================================
    
    /**
     * PATH - File system path (covered in FileIOComplete.java)
     * FILES - Utility class for file operations
     * 
     * Already covered in Section 5 of FileIOComplete.java
     * Here we'll show additional advanced operations
     */
    static class PathFilesAdvanced {
        
        // Walk file tree with FileVisitor
        public static void walkWithVisitor() throws IOException {
            Path start = Paths.get(".");
            
            Files.walkFileTree(start, new SimpleFileVisitor<Path>() {
                @Override
                public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) {
                    if (file.toString().endsWith(".java")) {
                        System.out.println("Java file: " + file);
                    }
                    return FileVisitResult.CONTINUE;
                }
                
                @Override
                public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) {
                    System.out.println("Entering: " + dir);
                    return FileVisitResult.CONTINUE;
                }
            });
        }
        
        // Copy directory recursively
        public static void copyDirectory(Path source, Path target) throws IOException {
            Files.walkFileTree(source, new SimpleFileVisitor<Path>() {
                @Override
                public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) 
                        throws IOException {
                    Path targetDir = target.resolve(source.relativize(dir));
                    Files.createDirectories(targetDir);
                    return FileVisitResult.CONTINUE;
                }
                
                @Override
                public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) 
                        throws IOException {
                    Path targetFile = target.resolve(source.relativize(file));
                    Files.copy(file, targetFile, StandardCopyOption.REPLACE_EXISTING);
                    return FileVisitResult.CONTINUE;
                }
            });
        }
        
        // Delete directory recursively
        public static void deleteDirectory(Path dir) throws IOException {
            if (Files.exists(dir)) {
                Files.walkFileTree(dir, new SimpleFileVisitor<Path>() {
                    @Override
                    public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) 
                            throws IOException {
                        Files.delete(file);
                        return FileVisitResult.CONTINUE;
                    }
                    
                    @Override
                    public FileVisitResult postVisitDirectory(Path dir, IOException exc) 
                            throws IOException {
                        Files.delete(dir);
                        return FileVisitResult.CONTINUE;
                    }
                });
            }
        }
        
        // Find files matching predicate
        public static void findFiles() throws IOException {
            Path start = Paths.get(".");
            
            List<Path> javaFiles = Files.find(start, 5,
                (path, attrs) -> path.toString().endsWith(".java") && attrs.size() > 1000)
                .collect(Collectors.toList());
            
            System.out.println("Large Java files:");
            javaFiles.forEach(System.out::println);
        }
    }
    
    // ============================================
    // 5. FILE ATTRIBUTES
    // ============================================
    
    /**
     * FILE ATTRIBUTES - Metadata about files
     * 
     * Types:
     * - BasicFileAttributes: Basic info (size, times, isDirectory, etc.)
     * - DosFileAttributes: DOS/Windows attributes (hidden, readonly, etc.)
     * - PosixFileAttributes: POSIX attributes (permissions, owner, group)
     */
    static class FileAttributesDemo {
        
        // Read basic file attributes
        public static void basicAttributes() throws IOException {
            Path path = Paths.get("sample.txt");
            
            if (Files.exists(path)) {
                BasicFileAttributes attrs = Files.readAttributes(
                    path, BasicFileAttributes.class);
                
                System.out.println("File attributes:");
                System.out.println("  Creation time: " + attrs.creationTime());
                System.out.println("  Last modified: " + attrs.lastModifiedTime());
                System.out.println("  Last accessed: " + attrs.lastAccessTime());
                System.out.println("  Size: " + attrs.size() + " bytes");
                System.out.println("  Is directory: " + attrs.isDirectory());
                System.out.println("  Is regular file: " + attrs.isRegularFile());
                System.out.println("  Is symbolic link: " + attrs.isSymbolicLink());
                System.out.println("  File key: " + attrs.fileKey());
            }
        }
        
        // Set file attributes
        public static void setAttributes() throws IOException {
            Path path = Paths.get("sample.txt");
            
            if (Files.exists(path)) {
                // Set last modified time
                FileTime newTime = FileTime.fromMillis(System.currentTimeMillis());
                Files.setLastModifiedTime(path, newTime);
                
                System.out.println("Last modified time updated");
            }
        }
        
        // DOS attributes (Windows)
        public static void dosAttributes() throws IOException {
            Path path = Paths.get("sample.txt");
            
            if (Files.exists(path) && System.getProperty("os.name").startsWith("Windows")) {
                DosFileAttributes attrs = Files.readAttributes(
                    path, DosFileAttributes.class);
                
                System.out.println("DOS attributes:");
                System.out.println("  Hidden: " + attrs.isHidden());
                System.out.println("  Readonly: " + attrs.isReadOnly());
                System.out.println("  System: " + attrs.isSystem());
                System.out.println("  Archive: " + attrs.isArchive());
                
                // Set hidden
                Files.setAttribute(path, "dos:hidden", true);
            }
        }
        
        // POSIX attributes (Unix/Linux)
        public static void posixAttributes() throws IOException {
            Path path = Paths.get("sample.txt");
            
            if (Files.exists(path) && FileSystems.getDefault().supportedFileAttributeViews().contains("posix")) {
                PosixFileAttributes attrs = Files.readAttributes(
                    path, PosixFileAttributes.class);
                
                System.out.println("POSIX attributes:");
                System.out.println("  Owner: " + attrs.owner());
                System.out.println("  Group: " + attrs.group());
                System.out.println("  Permissions: " + PosixFilePermissions.toString(attrs.permissions()));
                
                // Set permissions (rwxr-xr--)
                Set<PosixFilePermission> perms = PosixFilePermissions.fromString("rwxr-xr--");
                Files.setPosixFilePermissions(path, perms);
            }
        }
    }
    
    // ============================================
    // 6. FILE WATCHING (WatchService)
    // ============================================
    
    /**
     * WATCHSERVICE - Monitor directory for changes
     * 
     * Events:
     * - ENTRY_CREATE: File created
     * - ENTRY_DELETE: File deleted
     * - ENTRY_MODIFY: File modified
     * - OVERFLOW: Events lost
     */
    static class WatchServiceDemo {
        
        public static void watchDirectory() throws IOException, InterruptedException {
            Path dir = Paths.get(".");
            
            try (WatchService watchService = FileSystems.getDefault().newWatchService()) {
                
                // Register directory for all event types
                dir.register(watchService,
                    StandardWatchEventKinds.ENTRY_CREATE,
                    StandardWatchEventKinds.ENTRY_DELETE,
                    StandardWatchEventKinds.ENTRY_MODIFY);
                
                System.out.println("Watching directory: " + dir.toAbsolutePath());
                System.out.println("Press Ctrl+C to stop...\n");
                
                // Watch loop (run for demo, usually in background thread)
                for (int i = 0; i < 5; i++) { // Limit to 5 events for demo
                    WatchKey key = watchService.poll(5, java.util.concurrent.TimeUnit.SECONDS);
                    
                    if (key == null) {
                        System.out.println("No events in 5 seconds");
                        break;
                    }
                    
                    for (WatchEvent<?> event : key.pollEvents()) {
                        WatchEvent.Kind<?> kind = event.kind();
                        
                        if (kind == StandardWatchEventKinds.OVERFLOW) {
                            System.out.println("OVERFLOW: Events lost");
                            continue;
                        }
                        
                        @SuppressWarnings("unchecked")
                        WatchEvent<Path> pathEvent = (WatchEvent<Path>) event;
                        Path filename = pathEvent.context();
                        
                        System.out.println(kind.name() + ": " + filename);
                    }
                    
                    // Reset key
                    boolean valid = key.reset();
                    if (!valid) {
                        System.out.println("Key no longer valid");
                        break;
                    }
                }
            }
        }
    }
    
    // ============================================
    // 7. MEMORY-MAPPED FILES
    // ============================================
    
    /**
     * MEMORY-MAPPED FILES - Map file directly to memory
     * 
     * Advantages:
     * - Very fast (OS handles paging)
     * - Efficient for large files
     * - Multiple processes can map same file
     * 
     * Use cases:
     * - Large file processing
     * - Inter-process communication
     * - Database files
     */
    static class MemoryMappedDemo {
        
        // Write large file using memory mapping
        public static void writeMemoryMapped() throws IOException {
            try (FileChannel channel = FileChannel.open(
                    Paths.get("mapped.dat"),
                    StandardOpenOption.CREATE,
                    StandardOpenOption.READ,
                    StandardOpenOption.WRITE)) {
                
                // Map 1MB
                MappedByteBuffer buffer = channel.map(
                    FileChannel.MapMode.READ_WRITE, 0, 1024 * 1024);
                
                // Write data
                for (int i = 0; i < 1024; i++) {
                    buffer.putInt(i);
                }
                
                // Force writes to disk
                buffer.force();
                
                System.out.println("Memory-mapped write complete");
            }
        }
        
        // Read large file using memory mapping
        public static void readMemoryMapped() throws IOException {
            try (FileChannel channel = FileChannel.open(
                    Paths.get("mapped.dat"), StandardOpenOption.READ)) {
                
                MappedByteBuffer buffer = channel.map(
                    FileChannel.MapMode.READ_ONLY, 0, channel.size());
                
                // Read first 10 integers
                System.out.print("First 10 integers: ");
                for (int i = 0; i < 10; i++) {
                    System.out.print(buffer.getInt() + " ");
                }
                System.out.println();
            }
        }
        
        // Performance comparison: Normal vs Memory-mapped
        public static void performanceComparison() throws IOException {
            int dataSize = 10_000_000; // 10 million integers
            
            // Normal I/O
            long start = System.currentTimeMillis();
            try (FileChannel channel = FileChannel.open(
                    Paths.get("normal.dat"),
                    StandardOpenOption.CREATE,
                    StandardOpenOption.WRITE)) {
                
                ByteBuffer buffer = ByteBuffer.allocate(4 * 1024); // 4KB buffer
                for (int i = 0; i < dataSize; i++) {
                    if (!buffer.hasRemaining()) {
                        buffer.flip();
                        channel.write(buffer);
                        buffer.clear();
                    }
                    buffer.putInt(i);
                }
                if (buffer.position() > 0) {
                    buffer.flip();
                    channel.write(buffer);
                }
            }
            long normalTime = System.currentTimeMillis() - start;
            
            // Memory-mapped I/O
            start = System.currentTimeMillis();
            try (FileChannel channel = FileChannel.open(
                    Paths.get("mapped.dat"),
                    StandardOpenOption.CREATE,
                    StandardOpenOption.READ,
                    StandardOpenOption.WRITE)) {
                
                MappedByteBuffer buffer = channel.map(
                    FileChannel.MapMode.READ_WRITE, 0, dataSize * 4L);
                
                for (int i = 0; i < dataSize; i++) {
                    buffer.putInt(i);
                }
                buffer.force();
            }
            long mappedTime = System.currentTimeMillis() - start;
            
            System.out.println("Normal I/O: " + normalTime + "ms");
            System.out.println("Memory-mapped I/O: " + mappedTime + "ms");
            System.out.println("Speedup: " + (normalTime / (double) mappedTime) + "x");
        }
    }
    
    // ============================================
    // 8. FILE LOCKING
    // ============================================
    
    /**
     * FILE LOCKING - Prevent concurrent access
     * 
     * Types:
     * - Exclusive lock: Only one process can access
     * - Shared lock: Multiple readers allowed
     * 
     * Note: Locks are advisory on some platforms (not enforced by OS)
     */
    static class FileLockDemo {
        
        // Exclusive lock
        public static void exclusiveLock() throws IOException {
            try (FileChannel channel = FileChannel.open(
                    Paths.get("locked.txt"),
                    StandardOpenOption.CREATE,
                    StandardOpenOption.READ,
                    StandardOpenOption.WRITE)) {
                
                System.out.println("Acquiring exclusive lock...");
                FileLock lock = channel.lock(); // Blocks until acquired
                
                try {
                    System.out.println("Lock acquired: " + lock.isShared());
                    
                    // Do work
                    ByteBuffer buffer = ByteBuffer.wrap("Locked data\n".getBytes());
                    channel.write(buffer);
                    
                    Thread.sleep(5000); // Hold lock for 5 seconds
                    
                } finally {
                    lock.release();
                    System.out.println("Lock released");
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        
        // Try lock (non-blocking)
        public static void tryLock() throws IOException {
            try (FileChannel channel = FileChannel.open(
                    Paths.get("locked.txt"),
                    StandardOpenOption.CREATE,
                    StandardOpenOption.READ,
                    StandardOpenOption.WRITE)) {
                
                System.out.println("Trying to acquire lock...");
                FileLock lock = channel.tryLock();
                
                if (lock != null) {
                    try {
                        System.out.println("Lock acquired");
                        // Do work
                    } finally {
                        lock.release();
                    }
                } else {
                    System.out.println("Could not acquire lock");
                }
            }
        }
        
        // Shared lock (read-only)
        public static void sharedLock() throws IOException {
            try (FileChannel channel = FileChannel.open(
                    Paths.get("shared.txt"),
                    StandardOpenOption.CREATE,
                    StandardOpenOption.READ,
                    StandardOpenOption.WRITE)) {
                
                // Shared lock (position 0, size 100, shared=true)
                FileLock lock = channel.lock(0, 100, true);
                
                try {
                    System.out.println("Shared lock acquired: " + lock.isShared());
                    // Multiple readers can hold shared lock
                } finally {
                    lock.release();
                }
            }
        }
    }
    
    // ============================================
    // 9. NON-BLOCKING I/O (Selector)
    // ============================================
    
    /**
     * SELECTOR - Allows one thread to handle multiple channels
     * 
     * Key concepts:
     * - Selector: Monitors multiple channels
     * - SelectionKey: Represents channel registration
     * - Operations: OP_READ, OP_WRITE, OP_CONNECT, OP_ACCEPT
     * 
     * Use case: High-concurrency servers
     */
    static class NonBlockingIODemo {
        
        // Simple non-blocking echo server
        public static void echoServer() throws IOException {
            Selector selector = Selector.open();
            ServerSocketChannel serverChannel = ServerSocketChannel.open();
            
            serverChannel.bind(new java.net.InetSocketAddress(8080));
            serverChannel.configureBlocking(false); // Non-blocking!
            
            // Register with selector
            serverChannel.register(selector, SelectionKey.OP_ACCEPT);
            
            System.out.println("Echo server started on port 8080");
            
            // Event loop (run for 30 seconds for demo)
            long endTime = System.currentTimeMillis() + 30000;
            while (System.currentTimeMillis() < endTime) {
                // Wait for events (1 second timeout)
                if (selector.select(1000) == 0) {
                    continue;
                }
                
                // Process selected keys
                Set<SelectionKey> selectedKeys = selector.selectedKeys();
                Iterator<SelectionKey> iterator = selectedKeys.iterator();
                
                while (iterator.hasNext()) {
                    SelectionKey key = iterator.next();
                    iterator.remove();
                    
                    try {
                        if (key.isAcceptable()) {
                            handleAccept(key, selector);
                        } else if (key.isReadable()) {
                            handleRead(key);
                        }
                    } catch (IOException e) {
                        key.cancel();
                        try {
                            key.channel().close();
                        } catch (IOException ex) {}
                    }
                }
            }
            
            serverChannel.close();
            selector.close();
            System.out.println("Server stopped");
        }
        
        private static void handleAccept(SelectionKey key, Selector selector) throws IOException {
            ServerSocketChannel serverChannel = (ServerSocketChannel) key.channel();
            SocketChannel clientChannel = serverChannel.accept();
            
            if (clientChannel != null) {
                clientChannel.configureBlocking(false);
                clientChannel.register(selector, SelectionKey.OP_READ);
                System.out.println("Client connected: " + clientChannel.getRemoteAddress());
            }
        }
        
        private static void handleRead(SelectionKey key) throws IOException {
            SocketChannel channel = (SocketChannel) key.channel();
            ByteBuffer buffer = ByteBuffer.allocate(256);
            
            int bytesRead = channel.read(buffer);
            
            if (bytesRead == -1) {
                // Client disconnected
                System.out.println("Client disconnected");
                channel.close();
                key.cancel();
                return;
            }
            
            if (bytesRead > 0) {
                buffer.flip();
                
                // Echo back
                channel.write(buffer);
                
                System.out.println("Echoed " + bytesRead + " bytes");
            }
        }
    }
    
    // ============================================
    // 10. INTERVIEW QUESTIONS
    // ============================================
    
    static class InterviewQuestions {
        /**
         * Q1: What is NIO?
         * A: New I/O - buffer-oriented, non-blocking I/O framework
         * 
         * Q2: Difference between IO and NIO?
         * A: IO is stream-oriented/blocking, NIO is buffer-oriented/non-blocking
         * 
         * Q3: What is Buffer?
         * A: Container for data with capacity, position, limit, mark
         * 
         * Q4: What is Channel?
         * A: Two-way communication link (like stream but bidirectional)
         * 
         * Q5: What is Selector?
         * A: Allows one thread to handle multiple channels
         * 
         * Q6: What is difference between flip() and clear()?
         * A: flip() prepares for reading (limit=position, position=0),
         *    clear() prepares for writing (position=0, limit=capacity)
         * 
         * Q7: What is direct buffer?
         * A: Buffer allocated in native memory (off-heap), faster I/O
         * 
         * Q8: What is memory-mapped file?
         * A: File mapped directly to memory, very fast for large files
         * 
         * Q9: What is FileChannel?
         * A: Channel for file I/O, supports random access
         * 
         * Q10: What is transferTo()?
         * A: Efficient file copy method in FileChannel
         * 
         * Q11: What is WatchService?
         * A: Monitors directory for file changes
         * 
         * Q12: What is Path?
         * A: Interface representing file system path
         * 
         * Q13: What is Files class?
         * A: Utility class for file operations (NIO.2)
         * 
         * Q14: What is FileLock?
         * A: Lock on file to prevent concurrent access
         * 
         * Q15: What is scatter/gather I/O?
         * A: Read into multiple buffers (scatter) or write from multiple buffers (gather)
         * 
         * Q16: What is SelectionKey?
         * A: Represents channel registration with selector
         * 
         * Q17: When to use direct buffer?
         * A: Large, long-lived buffers with frequent I/O
         * 
         * Q18: What is FileVisitor?
         * A: Interface for walking file tree (visitor pattern)
         * 
         * Q19: What is MappedByteBuffer?
         * A: Buffer for memory-mapped file
         * 
         * Q20: Advantages of NIO?
         * A: Non-blocking I/O, scalability (one thread/many connections),
         *    better performance for large files, memory-mapped files
         */
    }
    
    // ============================================
    // MAIN - DEMONSTRATE ALL CONCEPTS
    // ============================================
    
    public static void main(String[] args) {
        try {
            System.out.println("=== DAY 12: NIO COMPLETE GUIDE ===\n");
            
            System.out.println("1. NIO OVERVIEW:");
            NIOOverview.ioVsNio();
            
            System.out.println("\n2. BUFFER FUNDAMENTALS:");
            BufferDemo.byteBufferBasics();
            BufferDemo.directVsHeap();
            
            System.out.println("\n3. CHANNEL BASICS:");
            ChannelDemo.writeWithChannel();
            ChannelDemo.readWithChannel();
            
            System.out.println("\n4. FILE ATTRIBUTES:");
            FileAttributesDemo.basicAttributes();
            
            System.out.println("\n5. MEMORY-MAPPED FILES:");
            MemoryMappedDemo.writeMemoryMapped();
            MemoryMappedDemo.readMemoryMapped();
            
            System.out.println("\n6. FILE LOCKING:");
            FileLockDemo.tryLock();
            
            System.out.println("\n=== All NIO concepts demonstrated! ===");
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
