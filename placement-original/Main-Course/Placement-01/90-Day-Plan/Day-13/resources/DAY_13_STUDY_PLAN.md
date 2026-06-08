# DAY 13: FILE I/O, SERIALIZATION & NIO - 9-HOUR STUDY PLAN

## 🎯 Learning Objectives

By end of Day 13, you will master:
- File I/O operations (5 read methods, 5 write methods)
- Serialization and deserialization
- NIO (buffers, channels, memory-mapped files)
- File operations with Path & Files API
- Performance optimization techniques

---

## 📅 Schedule Overview

| Time | Duration | Topic | File |
|------|----------|-------|------|
| 9:00 AM | 1h | Byte & Character Streams | FileIOComplete.java |
| 10:00 AM | 1h | Buffered I/O & Directory Ops | FileIOComplete.java |
| 11:00 AM | 1h | Path & Files API | FileIOComplete.java |
| 12:00 PM | 1h | **LUNCH BREAK** | - |
| 1:00 PM | 1h | Serialization Basics | SerializationComplete.java |
| 2:00 PM | 1h | Advanced Serialization | SerializationComplete.java |
| 3:00 PM | 30m | **BREAK** | - |
| 3:30 PM | 1.5h | NIO Buffers & Channels | NIOComplete.java |
| 5:00 PM | 1h | Memory-Mapped & Locking | NIOComplete.java |
| 6:00 PM | 1h | Practice Problems | Day13PracticeProblems.java |

**Total Learning Time**: 9 hours

---

## 🌅 Morning Session (3 hours)

### Hour 1: Byte & Character Streams (9:00 AM - 10:00 AM)
**File**: `FileIOComplete.java` (Sections 1-2)

#### Activities:
- [ ] Study ByteStreamsDemo section
- [ ] Run `writeBytes()` - write array of bytes
- [ ] Run `readBytes()` - read bytes one by one
- [ ] Run `readBytesArray()` - read into buffer
- [ ] Run `readPrimitives()` - DataInputStream/OutputStream for int, double, etc.
- [ ] Run `copyFile()` - copy using byte buffer
- [ ] Study CharacterStreamsDemo
- [ ] Run `writeText()` - FileWriter for text
- [ ] Run `readText()` - FileReader for text
- [ ] Run `readLines()` - BufferedReader for line-by-line
- [ ] Run `bridgeStreams()` - InputStreamReader bridge

#### Checkpoint ✓
- Do you understand byte vs character streams?
- Can you copy a file efficiently?
- Do you know when to use DataInputStream?
- Can you read text line by line?

---

### Hour 2: Buffered I/O & Directory (10:00 AM - 11:00 AM)
**File**: `FileIOComplete.java` (Sections 3-4)

#### Activities:
- [ ] Study BufferedStreamsDemo
- [ ] Run `bufferedByteStream()` - buffered binary I/O
- [ ] Run `bufferedCharStream()` - buffered text I/O
- [ ] Run `performanceTest()` - compare buffered vs unbuffered (100x faster!)
- [ ] Understand buffer concept (8KB default)
- [ ] Study FileClassDemo
- [ ] Run `fileMetadata()` - File.exists(), .length(), .lastModified()
- [ ] Run `createDelete()` - createNewFile(), delete()
- [ ] Run `directoryOps()` - mkdir(), listFiles(), delete()
- [ ] Note: File class is legacy, use Path/Files for modern code

#### Checkpoint ✓
- Why is buffering 100x faster than unbuffered?
- Can you list directory contents?
- Do you know File class limitations?
- When would you use FileOutputStream vs BufferedOutputStream?

---

### Hour 3: Path & Files API (11:00 AM - 12:00 PM)
**File**: `FileIOComplete.java` (Sections 5-9)

#### Activities:
- [ ] Study PathFilesDemo
- [ ] Run `pathOperations()` - getFileName, getParent, resolve, relativize
- [ ] Run `filesRead()` - readAllLines, readAllBytes, readString
- [ ] Run `filesWrite()` - writeString, write, writeAllLines
- [ ] Run `fileAttributes()` - isFile, isDirectory, size, isReadable
- [ ] Study FiveWaysToRead section
- [ ] Study FiveWaysToWrite section
- [ ] Compare memory usage (Files.readString vs readAllLines vs lines)
- [ ] Study DirectoryOpsDemo
- [ ] Run `createDirectories()` - Creates nested directories
- [ ] Run `listDirectoryContents()` - Uses Files.list()
- [ ] Run `walkTree()` - Recursive directory walk
- [ ] Run `findFiles()` - Find by pattern

#### Checkpoint ✓
- Which is most memory efficient: readAllLines, readString, or lines()?
- Can you find all .java files recursively?
- Do you know difference between Path and File?
- When to use Files.walk vs Files.list?

---

## 🌞 Afternoon Session (2.5 hours)

### Hour 4: Serialization Basics (1:00 PM - 2:00 PM)
**File**: `SerializationComplete.java` (Sections 1-3)

#### Activities:
- [ ] Study SerializationBasics
- [ ] Run `serializeObject()` - Simple Person serialization
- [ ] Run `deserializeObject()` - Read Person back
- [ ] Run `multipleObjects()` - Serialize/deserialize multiple objects
- [ ] Study ObjectStreamsDemo
- [ ] Run `writeTypes()` - Write int, double, string to object stream
- [ ] Run `readTypes()` - Read mixed types back
- [ ] Study TransientDemo
- [ ] Run `demonstrateTransient()` - Password NOT serialized
- [ ] Verify password is null after deserialization
- [ ] Study VersionControlDemo
- [ ] Understand serialVersionUID purpose
- [ ] Note: serialVersionUID changed = InvalidClassException

#### Checkpoint ✓
- What fields are serialized/not serialized?
- How does transient work?
- What is serialVersionUID for?
- How to handle NotSerializableException?

---

### Hour 5: Advanced Serialization (2:00 PM - 3:00 PM)
**File**: `SerializationComplete.java` (Sections 4-9)

#### Activities:
- [ ] Study CustomSerializationDemo
- [ ] Run `demonstrateCustom()` - writeObject/readObject
- [ ] Understand custom serialization flow
- [ ] Study ExternalizableDemo
- [ ] Run `demonstrateExternalizable()` - Full control with Externalizable
- [ ] Compare Serializable vs Externalizable
- [ ] Study InheritanceDemo
- [ ] Run `demonstrateInheritance()` - Parent/child serialization
- [ ] Study CollectionsSerializationDemo
- [ ] Run `demonstrateCollections()` - Serialize List, Map, Set
- [ ] Study CommonProblemsDemo
- [ ] Run `showProblems()` - Understand common errors
- [ ] Study solutions for each problem

#### Checkpoint ✓
- When to use custom serialization (writeObject/readObject)?
- How does inheritance work with serialization?
- Can you serialize a HashMap?
- What causes InvalidClassException?

---

## 🌆 Evening Session (3 hours)

### Hour 6: NIO Buffers & Channels (3:30 PM - 5:00 PM)
**File**: `NIOComplete.java` (Sections 1-5)

#### Activities:
- [ ] Study NIOOverviewDemo
- [ ] Run `explainDifferences()` - Traditional I/O vs NIO
- [ ] Study BufferDemo
- [ ] Run `createBuffers()` - Heap vs direct buffers
- [ ] Run `bufferOperations()` - put, flip, get, rewind, clear
- [ ] Understand position/limit/capacity/mark
- [ ] Run `sliceBuffer()` - Buffer slicing
- [ ] Run `charBuffer()` - CharBuffer for text
- [ ] Study ChannelDemo
- [ ] Run `fileChannelReadWrite()` - Read/write with channel
- [ ] Run `channelPosition()` - Seek to position
- [ ] Run `transferChannel()` - transferTo (very fast!)
- [ ] Study PathFilesApiDemo
- [ ] Run `pathOperations()` - Path manipulation

#### Checkpoint ✓
- What's difference between heap and direct buffers?
- Can you explain put/flip/get sequence?
- When to use FileChannel over FileInputStream?
- Why is transferTo so fast?

---

### Hour 7: Memory-Mapped & Advanced NIO (5:00 PM - 6:00 PM)
**File**: `NIOComplete.java` (Sections 6-10)

#### Activities:
- [ ] Study FileAttributesDemo
- [ ] Run `readFileAttributes()` - Size, times, type
- [ ] Run `modifyAttributes()` - Permissions
- [ ] Study MemoryMappedDemo
- [ ] Run `memoryMappedFile()` - MappedByteBuffer for fast access
- [ ] Compare memory-mapped performance (3ms vs 10ms traditional)
- [ ] Study FileLockingDemo
- [ ] Run `exclusiveLock()` - Exclusive write lock
- [ ] Run `sharedLock()` - Shared read lock
- [ ] Run `tryLock()` - Non-blocking lock attempt
- [ ] Study FileWatchingDemo
- [ ] Understand WatchService for monitoring
- [ ] Study SelectorDemo
- [ ] Understand multiplexing with Selector

#### Checkpoint ✓
- When to use memory-mapped files?
- How does file locking prevent conflicts?
- How to monitor directory changes?
- What is Selector pattern good for?

---

### Hour 8: Practice Problems (6:00 PM - 7:00 PM)
**File**: `Day13PracticeProblems.java`

#### Activities:
- [ ] Section 1: File I/O Basics (Problems 1-5)
  - [ ] Check file exists
  - [ ] Get file size
  - [ ] Read file metadata
  - [ ] Create and delete file
  - [ ] List directory
- [ ] Section 2: Byte & Character Streams (Problems 6-10)
  - [ ] Write bytes
  - [ ] Read bytes
  - [ ] Write text
  - [ ] Read text lines
  - [ ] Copy file
- [ ] Section 3: Buffered I/O (Problems 11-15)
  - [ ] BufferedWriter write
  - [ ] BufferedReader read
  - [ ] Count lines
  - [ ] Count words
  - [ ] Performance comparison
- [ ] Section 4: Serialization (Problems 16-20)
  - [ ] Serialize object
  - [ ] Deserialize object
  - [ ] Transient keyword
  - [ ] Serialize list
  - [ ] Serialize map
- [ ] Section 5: NIO (Problems 21-25)
  - [ ] ByteBuffer operations
  - [ ] Buffer types
  - [ ] Channel write
  - [ ] Channel read
  - [ ] Channel copy
- [ ] Section 6: Path & Files (Problems 26-30)
  - [ ] Path operations
  - [ ] Files.exists
  - [ ] Read all lines
  - [ ] Write string
  - [ ] Create directories
- [ ] Bonus: Try 2-3 bonus problems (31-35)

#### Checkpoint ✓
- Can you solve all 30 core problems?
- Do you understand when to use each method?
- Can you explain performance differences?

---

## 📋 End-of-Day Checklist

### Knowledge Check
- [ ] I understand byte vs character streams
- [ ] I can use BufferedReader/Writer efficiently
- [ ] I know 5 ways to read files
- [ ] I know 5 ways to write files
- [ ] I understand serialization requirements
- [ ] I know what transient does
- [ ] I understand serialVersionUID purpose
- [ ] I can create ByteBuffer and use put/flip/get
- [ ] I understand direct vs heap buffers
- [ ] I can use FileChannel for copying
- [ ] I know Path & Files API
- [ ] I understand performance implications
- [ ] I solved 20+ practice problems

### Code Review
- [ ] Ran all code examples successfully
- [ ] Understood output of each demo
- [ ] Completed 25+ practice problems
- [ ] Reviewed all 75 interview questions

### Skills Mastery Level
**Beginner** (0-40%):
- Can read and write files
- Understands basic streams
- Knows Serializable interface

**Intermediate** (41-70%):
- Uses BufferedReader/Writer
- Understands try-with-resources
- Uses modern Path/Files API
- Handles serialization
- Uses FileChannel

**Advanced** (71-100%):
- Chooses optimal read/write method
- Implements custom serialization
- Uses memory-mapped files
- Understands performance trade-offs
- Knows when to use NIO

**Target**: 80%+ (Advanced Level)

---

## 🎯 Success Metrics

✅ **Completed if:**
- All checkpoints passed ✓
- 85%+ of practice problems solved
- Can explain 3+ read/write approaches
- Understand serialization inheritance
- Know when to use each I/O method
- Ready for Day 14

---

## 🔄 Spaced Repetition Schedule

- **Day 14** (Tomorrow): Review stream types
- **Day 16** (+2 days): Review serialization
- **Day 20** (+1 week): Review NIO and performance
- **Day 27** (+2 weeks): Complete practice problems again
- **Day 44** (+1 month): Full Day 13 review

---

## 💡 Tips for Success

1. **Run Code**: Execute every example and modify it
2. **Benchmark**: Compare buffered vs unbuffered performance
3. **Experiment**: Try different buffer sizes (8KB vs 1MB)
4. **Debug**: Use breakpoints to trace serialization
5. **Compare**: Try all 5 read/write methods on same file
6. **Measure**: Profile file operations for performance
7. **Practice**: Implement custom serialization

---

**🚀 Master file I/O and unlock efficient data handling!**
