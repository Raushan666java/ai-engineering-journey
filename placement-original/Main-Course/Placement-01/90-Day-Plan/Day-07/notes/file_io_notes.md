# Day 7 Notes: File I/O & Serialization

## Stream Types
- **Byte Streams**: InputStream/OutputStream for binary data
- **Character Streams**: Reader/Writer for text data (handles encoding)
- **Buffered Streams**: BufferedReader/BufferedWriter for efficiency

## Common Classes
- FileInputStream/FileOutputStream: byte-level file access
- FileReader/FileWriter: character-level file access
- BufferedReader/BufferedWriter: buffered character I/O
- PrintWriter: formatted text output

## NIO.2 (java.nio.file)
- Path: represents file system path
- Files: utility methods (read, write, copy, delete)
- DirectoryStream: iterate directory contents

## Serialization
- Implement Serializable interface
- ObjectOutputStream.writeObject() / ObjectInputStream.readObject()
- transient keyword: exclude fields from serialization
- serialVersionUID: version control

## Best Practices
- Use try-with-resources for automatic closing
- Prefer Files utility methods over old File API
- Handle encoding explicitly (UTF-8)
- Check file existence before operations
- Use buffered streams for performance

## Common Operations
```java
// Read all lines
List<String> lines = Files.readAllLines(path);

// Write lines
Files.write(path, lines);

// Copy file
Files.copy(source, target);

// Delete file
Files.delete(path);
```
