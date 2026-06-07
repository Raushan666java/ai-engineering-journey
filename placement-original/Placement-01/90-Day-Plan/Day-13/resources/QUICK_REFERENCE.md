# DAY 13: FILE I/O, SERIALIZATION & NIO - QUICK REFERENCE

## 📖 File I/O Cheat Sheet

### Read Entire File (3 Ways)
```java
// Method 1: BufferedReader (Traditional)
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    br.lines().forEach(System.out::println);
}

// Method 2: Files.readAllLines() (All at once)
Files.readAllLines(Paths.get("file.txt")).forEach(System.out::println);

// Method 3: Files.lines() (Streaming, memory efficient)
try (var stream = Files.lines(Paths.get("file.txt"))) {
    stream.forEach(System.out::println);
}
```

### Write Entire File (3 Ways)
```java
// Method 1: BufferedWriter
try (BufferedWriter bw = new BufferedWriter(new FileWriter("out.txt"))) {
    bw.write("Hello");
    bw.newLine();
}

// Method 2: Files.write()
List<String> lines = Arrays.asList("Line 1", "Line 2");
Files.write(Paths.get("out.txt"), lines);

// Method 3: Files.writeString() (Java 11+)
Files.writeString(Paths.get("out.txt"), "Content");
```

### Copy File
```java
// Traditional I/O
Files.copy(Paths.get("src.txt"), Paths.get("dest.txt"));

// With channel (faster)
try (FileInputStream fis = new FileInputStream("src");
     FileOutputStream fos = new FileOutputStream("dest");
     FileChannel src = fis.getChannel();
     FileChannel dest = fos.getChannel()) {
    src.transferTo(0, src.size(), dest);
}
```

### Stream Hierarchy
```
InputStream/OutputStream (Binary)
├── FileInputStream/OutputStream (Files)
├── ByteArrayInputStream/OutputStream (Memory)
├── BufferedInputStream/OutputStream (Buffering)
└── DataInputStream/OutputStream (Primitives)

Reader/Writer (Character)
├── FileReader/Writer (Files)
├── CharArrayReader/Writer (Memory)
├── BufferedReader/Writer (Buffering)
└── InputStreamReader/OutputStreamWriter (Bridge)
```

---

## 💾 Serialization Cheat Sheet

### Serialize Object
```java
class Person implements Serializable {
    private String name;
    private int age;
    private transient String password; // NOT serialized
    private static final long serialVersionUID = 1L;
}

// Serialize
try (ObjectOutputStream oos = new ObjectOutputStream(
        new FileOutputStream("person.ser"))) {
    oos.writeObject(new Person("John", 30));
}

// Deserialize
try (ObjectInputStream ois = new ObjectInputStream(
        new FileInputStream("person.ser"))) {
    Person p = (Person) ois.readObject();
}
```

### Custom Serialization
```java
private void writeObject(ObjectOutputStream oos) throws IOException {
    oos.defaultWriteObject();  // Write default fields
    oos.writeInt(customData);  // Write custom
}

private void readObject(ObjectInputStream ois) 
        throws IOException, ClassNotFoundException {
    ois.defaultReadObject();   // Read default fields
    customData = ois.readInt(); // Read custom
}
```

### Serialization Rules
- ✅ Implement `Serializable` interface (marker)
- ✅ All instance variables must be serializable
- ✅ Use `serialVersionUID` for version control
- ❌ Static fields NOT serialized
- ❌ transient fields NOT serialized
- ✅ Collections (List, Map) are serializable if contents are

### serialVersionUID Management
```java
// Good: Explicit version control
class MyClass implements Serializable {
    private static final long serialVersionUID = 1L; // Increment on changes
}

// Auto-generated (risky)
// class MyClass implements Serializable {} // JVM calculates from class
```

---

## 🔌 NIO Cheat Sheet

### Buffer Operations
```java
ByteBuffer buf = ByteBuffer.allocate(64); // Heap buffer
ByteBuffer direct = ByteBuffer.allocateDirect(64); // Off-heap (faster I/O)

// Write
buf.put((byte) 'A');
buf.put(new byte[] {1, 2, 3});

// Prepare for reading
buf.flip(); // position=0, limit=old_position

// Read
while (buf.hasRemaining()) {
    System.out.print((char) buf.get());
}

// Reset
buf.rewind(); // position=0
buf.clear(); // position=0, limit=capacity
```

### FileChannel I/O
```java
// Write
try (RandomAccessFile raf = new RandomAccessFile("file.bin", "rw");
     FileChannel channel = raf.getChannel()) {
    ByteBuffer buffer = ByteBuffer.wrap(data);
    channel.write(buffer);
}

// Read
try (RandomAccessFile raf = new RandomAccessFile("file.bin", "r");
     FileChannel channel = raf.getChannel()) {
    ByteBuffer buffer = ByteBuffer.allocate(1024);
    channel.read(buffer);
    buffer.flip();
}

// Channel Transfer (fastest)
src.transferTo(0, src.size(), dest); // 10x faster than manual copy
```

### Path & Files API
```java
Path path = Paths.get("documents/file.txt");
System.out.println(path.getFileName());        // file.txt
System.out.println(path.getParent());          // documents
System.out.println(path.toAbsolutePath());     // /home/.../documents/file.txt

// Check
System.out.println(Files.exists(path));        // true/false
System.out.println(Files.isRegularFile(path)); // true/false
System.out.println(Files.isDirectory(path));   // true/false

// Metadata
System.out.println(Files.size(path));          // bytes
System.out.println(Files.isReadable(path));    // true/false
System.out.println(Files.isWritable(path));    // true/false
```

### Memory-Mapped Files (Fast)
```java
try (RandomAccessFile raf = new RandomAccessFile("large.bin", "rw");
     FileChannel channel = raf.getChannel()) {
    MappedByteBuffer buffer = channel.map(
        FileChannel.MapMode.READ_WRITE, 0, 1024);
    buffer.putInt(42);
    buffer.force(); // Write to disk
}
```

### File Locking
```java
try (RandomAccessFile raf = new RandomAccessFile("file.txt", "rw");
     FileChannel channel = raf.getChannel()) {
    
    // Exclusive lock
    FileLock lock = channel.lock();
    try {
        // Critical section
    } finally {
        lock.release();
    }
    
    // Try lock (non-blocking)
    lock = channel.tryLock();
    if (lock != null) {
        // Got lock
    } else {
        // Could not get lock
    }
}
```

### Directory Watching
```java
WatchService service = FileSystems.getDefault().newWatchService();
Paths.get(".").register(service, StandardWatchEventKinds.ENTRY_CREATE,
                                StandardWatchEventKinds.ENTRY_DELETE,
                                StandardWatchEventKinds.ENTRY_MODIFY);

WatchKey key = service.take();
for (WatchEvent<?> event : key.pollEvents()) {
    System.out.println(event.kind() + ": " + event.context());
}
```

---

## ⚡ Performance Tips

| Operation | Traditional | NIO | Speedup |
|-----------|-----------|-----|---------|
| Read 1MB file | 1000ms | 10ms | 100x |
| Copy 1MB file | 150ms | 5ms | 30x |
| Seek in file | N/A | 1ms | N/A |
| Memory-map 1MB | N/A | 3ms | N/A |

### When to Use What
- **BufferedReader**: General line-by-line reading
- **Files.lines()**: Large files, streaming
- **Files.readAllLines()**: Small files, all at once
- **FileChannel**: Binary I/O, copying, seeking
- **Memory-mapped**: Random access, large files
- **WatchService**: Directory monitoring

---

## ❌ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Forget to close streams | Use try-with-resources |
| Don't use buffers | Always buffer text I/O |
| Serialize without serialVersionUID | Add explicit serialVersionUID |
| transient keyword forgotten | Mark sensitive fields as transient |
| Not flip buffer after write | Always `buffer.flip()` before reading |
| Blocking on network I/O | Use Selector with non-blocking I/O |

---

## 📋 Quick Checklists

### Read File Checklist
- [ ] Choose appropriate method (BR, Files.lines, readString, etc)
- [ ] Use try-with-resources for auto-close
- [ ] Handle IOException
- [ ] Use correct charset if needed
- [ ] Process data efficiently

### Serialize Object Checklist
- [ ] Implement Serializable interface
- [ ] All fields must be serializable
- [ ] Add serialVersionUID
- [ ] Mark sensitive fields as transient
- [ ] Implement custom serialization if needed

### File Copy Checklist
- [ ] Source file exists
- [ ] Destination path writable
- [ ] Use FileChannel for efficiency
- [ ] Handle existing file (REPLACE_EXISTING)
- [ ] Verify copy successful

---

**Pro Tips:**
1. **Always buffer**: 8KB buffer = 100x faster than 1-byte reads
2. **Use try-with-resources**: Prevents resource leaks
3. **Prefer Path over File**: Modern, cleaner API
4. **Direct buffers faster**: For I/O-heavy operations
5. **Memory-map large files**: For random access

