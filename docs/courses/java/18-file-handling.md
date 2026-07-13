> **Previous:** [OpenAPI](./17-openapi.md) | **Next:** [JDBC/JOOQ](./19-jdbc-jooq.md)

# File Upload, Download & Streaming

---

## Learning Objectives

By the end of this chapter, you will be able to:

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/java/18-file-handling/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/18-file-handling/hero.svg" alt="Chapter Banner: File Upload, Download & Streaming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/18-file-handling/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/18-file-handling/handwritten-notes.svg" alt="Handwritten Notes: File Upload, Download & Streaming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/18-file-handling/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/18-file-handling/sticky-notes.svg" alt="Sticky Notes: File Upload, Download & Streaming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/18-file-handling/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/18-file-handling/visual-explanation.svg" alt="Visual Explanation: File Upload, Download & Streaming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/18-file-handling/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/18-file-handling/architecture.svg" alt="Architecture: File Upload, Download & Streaming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/18-file-handling/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/18-file-handling/workflow.svg" alt="Workflow: File Upload, Download & Streaming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/18-file-handling/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/18-file-handling/mindmap.svg" alt="Mind Map: File Upload, Download & Streaming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/18-file-handling/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/18-file-handling/comparison.svg" alt="Comparison: File Upload, Download & Streaming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/18-file-handling/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/18-file-handling/cheatsheet.svg" alt="Cheat Sheet: File Upload, Download & Streaming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/18-file-handling/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/18-file-handling/interview-quiz.svg" alt="Quiz Card: File Upload, Download & Streaming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/18-file-handling/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/18-file-handling/social-card.svg" alt="Social Card: File Upload, Download & Streaming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


- Accept single and multiple file uploads using `MultipartFile` and `@RequestParam`
- Configure upload limits, temp directories, and encoding via `spring.servlet.multipart.*`
- Build a custom storage service that abstracts file persistence
- Serve files for download using `Resource`, `InputStreamResource`, `UrlResource`, and `ByteArrayResource`
- Set correct `Content-Type` and `Content-Disposition` headers
- Stream large files efficiently with `StreamingResponseBody`
- Implement chunked transfer encoding for progressive delivery
- Track upload progress using the temp-then-atomic-move pattern
- Validate file types by magic bytes (not just extension)
- Integrate malware scanning into the upload pipeline
- Serve static uploads with Spring's `StaticResourceHandler`
- Report meaningful errors for size violations, bad types, and virus detection

---

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| MultipartFile | Spring's interface for uploaded files | Single/multi upload via @RequestParam |
| Config Properties | spring.servlet.multipart.* settings | Limit size, encoding, temp directory |
| Streaming | StreamingResponseBody | Efficient large file transfer |
| File Validation | Magic bytes detection | Verify file type beyond extension |
| Security | Malware scanning pipeline | Check files before persistence |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Upload Configuration] --> B[MultipartFile]
    B --> C[Storage Service]
    C --> D[File Validation]
    D --> E[Malware Scanning]
    E --> F[File Download]
    F --> G[Streaming]
    G --> H[Progress Tracking]
```

> **Pro Tip:** Always validate file types by reading the first bytes (magic numbers) rather than relying on file extensions → attackers can easily rename a malicious file to appear legitimate.

## Theory

![File Upload Download & Streaming Flow](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/18-file-handling.png)

### 1. The MultipartFile Interface


Spring's `org.springframework.web.multipart.MultipartFile` represents an uploaded file received in a multipart request. It wraps the raw HTTP multipart data and provides convenience methods.

```java
public interface MultipartFile extends InputStreamSource {

    String getName();                    // Parameter name in the form
    String getOriginalFilename();        // Original file name on the client
    String getContentType();             // Content type (e.g., image/jpeg)
    boolean isEmpty();                   // True if file is empty
    long getSize();                      // File size in bytes
    byte[] getBytes() throws IOException; // Entire file content as byte[]
    InputStream getInputStream() throws IOException;  // Stream the content
    void transferTo(File dest) throws IOException;    // Save to a file
    void transferTo(Path dest) throws IOException;    // Save to a path (Spring 6+)
}
```

The underlying HTTP multipart parsing is handled by the servlet container (Tomcat, Jetty, Undertow) or by Spring's `StandardServletMultipartResolver`. Spring Boot auto-configures the resolver when it detects `spring-boot-starter-web`.

---

### 2. Single File Upload


The simplest upload endpoint accepts a `MultipartFile` bound to a `@RequestParam`.

```java
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/api/files")
public class FileUploadController {

    @PostMapping(
        value = "/upload",
        consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Map<String, Object>> uploadFile(
            @RequestParam("file") MultipartFile file) {

        if (file.isEmpty()) {
            return ResponseEntity.badRequest()
                .body(Map.of("error", "File is empty"));
        }

        String fileName = file.getOriginalFilename();
        long size = file.getSize();
        String contentType = file.getContentType();

        return ResponseEntity.ok(Map.of(
            "fileName", fileName,
            "size", size,
            "contentType", contentType,
            "message", "File uploaded successfully"
        ));
    }
}
```

### 3. Multiple File Upload


```java
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/files")
public class MultipleFileUploadController {

    @PostMapping("/upload-multiple")
    public ResponseEntity<Map<String, Object>> uploadMultiple(
            @RequestParam("files") List<MultipartFile> files) {

        List<Map<String, Object>> uploaded = new ArrayList<>();

        for (MultipartFile file : files) {
            if (file.isEmpty()) continue;

            uploaded.add(Map.of(
                "fileName", file.getOriginalFilename(),
                "size", file.getSize(),
                "contentType", file.getContentType()
            ));
        }

        return ResponseEntity.ok(Map.of(
            "uploaded", uploaded,
            "count", uploaded.size()
        ));
    }

    @PostMapping("/upload-mixed")
    public ResponseEntity<Map<String, Object>> uploadMixed(
            @RequestParam("avatar") MultipartFile avatar,
            @RequestParam("documents") List<MultipartFile> documents,
            @RequestParam("description") String description) {

        Map<String, Object> result = new HashMap<>();
        result.put("avatar", Map.of(
            "name", avatar.getOriginalFilename(),
            "size", avatar.getSize()
        ));
        result.put("documentCount", documents.size());
        result.put("description", description);

        return ResponseEntity.ok(result);
    }
}
```

### 4. Upload Configuration


All multipart properties live under the `spring.servlet.multipart.*` namespace.

```yaml
# application.yml
spring:
  servlet:
    multipart:
      enabled: true
      location: ${java.io.tmpdir}/petclinic-uploads
      max-file-size: 10MB
      max-request-size: 50MB
      file-size-threshold: 2KB
      resolve-lazily: false
```

```properties
# application.properties alternative
spring.servlet.multipart.enabled=true
spring.servlet.multipart.location=${java.io.tmpdir}/petclinic-uploads
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=50MB
spring.servlet.multipart.file-size-threshold=2KB
spring.servlet.multipart.resolve-lazily=false
```

| Property | Default | Description |
|----------|---------|-------------|
| `enabled` | `true` | Enable multipart upload support |
| `location` | temp dir | Directory for intermediate multipart files |
| `max-file-size` | `1MB` | Maximum size per file (`B`, `KB`, `MB`, `GB`) |
| `max-request-size` | `10MB` | Maximum size for the entire multipart request |
| `file-size-threshold` | `0` | Threshold after which files are written to disk |
| `resolve-lazily` | `false` | Parse multipart on access rather than eagerly |

For programmatic configuration:

```java
import jakarta.servlet.MultipartConfigElement;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.unit.DataSize;

@Configuration
public class MultipartConfig {

    @Bean
    public MultipartConfigElement multipartConfigElement() {
        MultipartConfigFactory factory = new MultipartConfigFactory();
        factory.setLocation("C:/petclinic-uploads/temp");
        factory.setMaxFileSize(DataSize.ofMegabytes(20));
        factory.setMaxRequestSize(DataSize.ofMegabytes(100));
        factory.setFileSizeThreshold(DataSize.ofKilobytes(4));
        return factory.createMultipartConfig();
    }
}
```

### 5. File Size Limit Handling


When a file exceeds `max-file-size` or `max-request-size`, Spring throws `MaxUploadSizeExceededException` or `MultipartException`. Handle them with `@ControllerAdvice`.

```java
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartException;

import java.util.Map;

@ControllerAdvice
public class FileUploadExceptionHandler {

    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public ResponseEntity<Map<String, String>> handleMaxSize(
            MaxUploadSizeExceededException e) {

        String message = String.format(
            "File exceeds maximum allowed size of %d bytes",
            e.getMaxUploadSize()
        );

        return ResponseEntity
            .status(HttpStatus.PAYLOAD_TOO_LARGE)
            .body(Map.of("error", message));
    }

    @ExceptionHandler(MultipartException.class)
    public ResponseEntity<Map<String, String>> handleMultipart(
            MultipartException e) {

        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(Map.of("error", "Invalid multipart request: " + e.getMessage()));
    }
}
```

### 6. Custom Storage Service


Abstract file operations behind an interface so you can swap implementations (local filesystem, S3, database, etc.).

```java
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.util.stream.Stream;

public interface FileStorageService {

    String store(MultipartFile file);

    String store(byte[] data, String originalFileName);

    Resource loadAsResource(String fileName);

    Path load(String fileName);

    Stream<Path> loadAll();

    void delete(String fileName);

    void deleteAll();

    String getStorageLocation();
}
```

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Objects;
import java.util.UUID;
import java.util.stream.Stream;

@Service
public class FileSystemStorageService implements FileStorageService {

    private static final Logger log = LoggerFactory.getLogger(FileSystemStorageService.class);

    private final Path rootLocation;

    public FileSystemStorageService(
            @Value("${app.storage.location:uploads}") String storageLocation) {
        this.rootLocation = Paths.get(storageLocation).toAbsolutePath().normalize();
    }

    @PostConstruct
    public void init() {
        try {
            Files.createDirectories(rootLocation);
            log.info("Storage directory initialized at: {}", rootLocation);
        } catch (IOException e) {
            throw new StorageException("Could not initialize storage location", e);
        }
    }

    @Override
    public String store(MultipartFile file) {
        String originalName = Objects.requireNonNull(
            file.getOriginalFilename(), "File must have a name");

        String storedName = generateStoredName(originalName);

        try (InputStream inputStream = file.getInputStream()) {
            Path destinationPath = rootLocation.resolve(storedName).normalize();

            if (!destinationPath.startsWith(rootLocation)) {
                throw new StorageException("Cannot store file outside root location");
            }

            Files.copy(inputStream, destinationPath, StandardCopyOption.REPLACE_EXISTING);
            log.info("Stored file: {} as {}", originalName, storedName);
            return storedName;

        } catch (IOException e) {
            throw new StorageException("Failed to store file: " + originalName, e);
        }
    }

    @Override
    public String store(byte[] data, String originalFileName) {
        String storedName = generateStoredName(originalFileName);

        try {
            Path destinationPath = rootLocation.resolve(storedName).normalize();
            Files.write(destinationPath, data);
            log.info("Stored byte array as: {}", storedName);
            return storedName;
        } catch (IOException e) {
            throw new StorageException("Failed to store byte array", e);
        }
    }

    @Override
    public Path load(String fileName) {
        return rootLocation.resolve(fileName).normalize();
    }

    @Override
    public Resource loadAsResource(String fileName) {
        try {
            Path file = load(fileName);
            Resource resource = new UrlResource(file.toUri());

            if (resource.exists() && resource.isReadable()) {
                return resource;
            } else {
                throw new StorageFileNotFoundException(
                    "File not found or not readable: " + fileName);
            }
        } catch (MalformedURLException e) {
            throw new StorageFileNotFoundException(
                "File not found: " + fileName, e);
        }
    }

    @Override
    public Stream<Path> loadAll() {
        try {
            return Files.walk(rootLocation, 1)
                .filter(path -> !path.equals(rootLocation))
                .map(rootLocation::relativize);
        } catch (IOException e) {
            throw new StorageException("Failed to read stored files", e);
        }
    }

    @Override
    public void delete(String fileName) {
        try {
            Path file = load(fileName);
            Files.deleteIfExists(file);
            log.info("Deleted file: {}", fileName);
        } catch (IOException e) {
            throw new StorageException("Failed to delete file: " + fileName, e);
        }
    }

    @Override
    public void deleteAll() {
        try (Stream<Path> files = Files.walk(rootLocation, 1)) {
            files.filter(path -> !path.equals(rootLocation))
                .forEach(path -> {
                    try { Files.deleteIfExists(path); }
                    catch (IOException e) { log.warn("Could not delete: {}", path); }
                });
            log.info("All files deleted from: {}", rootLocation);
        } catch (IOException e) {
            throw new StorageException("Failed to delete all files", e);
        }
    }

    @Override
    public String getStorageLocation() {
        return rootLocation.toString();
    }

    private String generateStoredName(String originalName) {
        String extension = "";
        int dotIndex = originalName.lastIndexOf('.');
        if (dotIndex > 0) {
            extension = originalName.substring(dotIndex);
        }
        return UUID.randomUUID() + extension;
    }
}
```

```java
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class StorageException extends RuntimeException {
    public StorageException(String message) {
        super(message);
    }
    public StorageException(String message, Throwable cause) {
        super(message, cause);
    }
}
```

```java
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class StorageFileNotFoundException extends StorageException {
    public StorageFileNotFoundException(String message) {
        super(message);
    }
    public StorageFileNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
```

### 7. Upload Controller Using Storage Service


```java
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/files")
public class StorageController {

    private final FileStorageService storageService;
    private final FileValidationService validationService;

    public StorageController(FileStorageService storageService,
                             FileValidationService validationService) {
        this.storageService = storageService;
        this.validationService = validationService;
    }

    @PostMapping("/upload")
    public ResponseEntity<UploadResponse> uploadFile(
            @RequestParam("file") MultipartFile file) {

        validationService.validate(file);

        String storedName = storageService.store(file);

        String downloadUri = ServletUriComponentsBuilder
            .fromCurrentContextPath()
            .path("/api/files/download/")
            .path(storedName)
            .toUriString();

        UploadResponse response = new UploadResponse(
            storedName,
            file.getOriginalFilename(),
            file.getContentType(),
            file.getSize(),
            downloadUri
        );

        return ResponseEntity.ok(response);
    }

    @PostMapping("/upload-multiple")
    public ResponseEntity<List<UploadResponse>> uploadMultiple(
            @RequestParam("files") MultipartFile[] files) {

        List<UploadResponse> responses = Arrays.stream(files)
            .filter(f -> !f.isEmpty())
            .map(file -> {
                validationService.validate(file);
                String storedName = storageService.store(file);
                String downloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/api/files/download/")
                    .path(storedName)
                    .toUriString();
                return new UploadResponse(
                    storedName,
                    file.getOriginalFilename(),
                    file.getContentType(),
                    file.getSize(),
                    downloadUri
                );
            })
            .collect(Collectors.toList());

        return ResponseEntity.ok(responses);
    }

    @GetMapping("/download/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName) {
        Resource resource = storageService.loadAsResource(fileName);

        String contentType = determineContentType(fileName);

        return ResponseEntity.ok()
            .contentType(MediaType.parseMediaType(contentType))
            .header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + extractOriginalName(fileName) + "\"")
            .body(resource);
    }

    @GetMapping("/view/{fileName:.+}")
    public ResponseEntity<Resource> viewFile(@PathVariable String fileName) {
        Resource resource = storageService.loadAsResource(fileName);

        String contentType = determineContentType(fileName);

        return ResponseEntity.ok()
            .contentType(MediaType.parseMediaType(contentType))
            .header(HttpHeaders.CONTENT_DISPOSITION,
                "inline; filename=\"" + extractOriginalName(fileName) + "\"")
            .body(resource);
    }

    @GetMapping
    public ResponseEntity<List<String>> listFiles() {
        List<String> fileNames = storageService.loadAll()
            .map(Path::getFileName)
            .map(Path::toString)
            .toList();
        return ResponseEntity.ok(fileNames);
    }

    @DeleteMapping("/{fileName:.+}")
    public ResponseEntity<Void> deleteFile(@PathVariable String fileName) {
        storageService.delete(fileName);
        return ResponseEntity.noContent().build();
    }

    private String determineContentType(String fileName) {
        String extension = "";
        int dotIndex = fileName.lastIndexOf('.');
        if (dotIndex > 0) {
            extension = fileName.substring(dotIndex).toLowerCase();
        }
        return switch (extension) {
            case ".jpg", ".jpeg" -> "image/jpeg";
            case ".png" -> "image/png";
            case ".gif" -> "image/gif";
            case ".pdf" -> "application/pdf";
            case ".doc" -> "application/msword";
            case ".docx" ->
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            case ".xls" -> "application/vnd.ms-excel";
            case ".xlsx" ->
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
            case ".csv" -> "text/csv";
            case ".json" -> "application/json";
            case ".mp4" -> "video/mp4";
            case ".mp3" -> "audio/mpeg";
            case ".zip" -> "application/zip";
            default -> "application/octet-stream";
        };
    }

    private String extractOriginalName(String storedName) {
        return storedName;
    }
}
```

```java
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Response after a successful file upload")
public class UploadResponse {

    @Schema(description = "Stored file name (UUID-based)", example = "a1b2c3d4-photo.jpg")
    private String storedName;

    @Schema(description = "Original file name from client", example = "vacation-photo.jpg")
    private String originalName;

    @Schema(description = "MIME content type", example = "image/jpeg")
    private String contentType;

    @Schema(description = "File size in bytes", example = "1048576")
    private long size;

    @Schema(description = "URL to download the file")
    private String downloadUri;

    public UploadResponse() {}

    public UploadResponse(String storedName, String originalName,
                          String contentType, long size, String downloadUri) {
        this.storedName = storedName;
        this.originalName = originalName;
        this.contentType = contentType;
        this.size = size;
        this.downloadUri = downloadUri;
    }

    public String getStoredName() { return storedName; }
    public void setStoredName(String storedName) { this.storedName = storedName; }
    public String getOriginalName() { return originalName; }
    public void setOriginalName(String originalName) { this.originalName = originalName; }
    public String getContentType() { return contentType; }
    public void setContentType(String contentType) { this.contentType = contentType; }
    public long getSize() { return size; }
    public void setSize(long size) { this.size = size; }
    public String getDownloadUri() { return downloadUri; }
    public void setDownloadUri(String downloadUri) { this.downloadUri = downloadUri; }
}
```

### 8. Downloading Files Ã¢â‚¬â€ Resource Implementations


Spring provides several `Resource` implementations for different use cases:

```java
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/download")
public class ResourceExamplesController {

    // === UrlResource Ã¢â‚¬â€ Wraps a URL (file://, https://, classpath:) ===

    @GetMapping("/url-resource/{fileName:.+}")
    public ResponseEntity<Resource> downloadWithUrlResource(@PathVariable String fileName) {
        try {
            Path filePath = Paths.get("uploads").resolve(fileName).normalize();
            UrlResource resource = new UrlResource(filePath.toUri());

            if (!resource.exists() || !resource.isReadable()) {
                return ResponseEntity.notFound().build();
            }

            return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=\"" + fileName + "\"")
                .body(resource);

        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    // === InputStreamResource Ã¢â‚¬â€ Wraps an InputStream (best for large streams) ===

    @GetMapping("/stream-resource/{fileName:.+}")
    public ResponseEntity<Resource> downloadWithInputStreamResource(
            @PathVariable String fileName) {
        try {
            Path filePath = Paths.get("uploads").resolve(fileName).normalize();
            FileInputStream fis = new FileInputStream(filePath.toFile());
            long fileSize = Files.size(filePath);

            InputStreamResource resource = new InputStreamResource(fis);

            return ResponseEntity.ok()
                .contentLength(fileSize)
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=\"" + fileName + "\"")
                .body(resource);

        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    // === ByteArrayResource Ã¢â‚¬â€ Wraps a byte[] (best for small in-memory files) ===

    @GetMapping("/bytes/{fileName:.+}")
    public ResponseEntity<Resource> downloadWithByteArrayResource(
            @PathVariable String fileName) {
        try {
            Path filePath = Paths.get("uploads").resolve(fileName).normalize();
            byte[] fileBytes = Files.readAllBytes(filePath);

            ByteArrayResource resource = new ByteArrayResource(fileBytes);

            return ResponseEntity.ok()
                .contentLength(fileBytes.length)
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=\"" + fileName + "\"")
                .body(resource);

        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    // === Inline vs Attachment ===

    @GetMapping("/inline/{fileName:.+}")
    public ResponseEntity<Resource> viewInline(@PathVariable String fileName) {
        try {
            Path filePath = Paths.get("uploads").resolve(fileName).normalize();
            UrlResource resource = new UrlResource(filePath.toUri());

            String contentType = Files.probeContentType(filePath);
            if (contentType == null) {
                contentType = "application/octet-stream";
            }

            return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION,
                    "inline; filename=\"" + fileName + "\"")
                .body(resource);

        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/force-download/{fileName:.+}")
    public ResponseEntity<Resource> forceDownload(@PathVariable String fileName) {
        try {
            Path filePath = Paths.get("uploads").resolve(fileName).normalize();
            UrlResource resource = new UrlResource(filePath.toUri());

            return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=\"" + fileName + "\"")
                .header(HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename*=UTF-8''" + encodeUrl(fileName))
                .body(resource);

        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    private String encodeUrl(String value) {
        try {
            return java.net.URLEncoder.encode(value, "UTF-8").replace("+", "%20");
        } catch (UnsupportedEncodingException e) {
            return value;
        }
    }
}
```

### 9. Streaming Large Files Ã¢â‚¬â€ StreamingResponseBody


`StreamingResponseBody` allows writing directly to the response's `OutputStream` without buffering the entire file in memory. It is ideal for large files (100MB+, video, ISO images).

```java
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/stream")
public class StreamingController {

    // === StreamingResponseBody Ã¢â‚¬â€ Manual write to OutputStream ===

    @GetMapping("/file/{fileName:.+}")
    public ResponseEntity<StreamingResponseBody> streamFile(
            @PathVariable String fileName) {

        Path filePath = Paths.get("uploads").resolve(fileName).normalize();

        if (!Files.exists(filePath)) {
            return ResponseEntity.notFound().build();
        }

        StreamingResponseBody responseBody = outputStream -> {
            try (InputStream inputStream = new FileInputStream(filePath.toFile());
                 BufferedInputStream bis = new BufferedInputStream(inputStream, 8192);
                 BufferedOutputStream bos = new BufferedOutputStream(outputStream, 8192)) {

                byte[] buffer = new byte[8192];
                int bytesRead;
                long totalBytes = 0;

                while ((bytesRead = bis.read(buffer)) != -1) {
                    bos.write(buffer, 0, bytesRead);
                    totalBytes += bytesRead;
                    // Progress tracking can happen here (see section 11)
                }
                bos.flush();
            }
        };

        try {
            long fileSize = Files.size(filePath);
            String contentType = Files.probeContentType(filePath);
            if (contentType == null) contentType = "application/octet-stream";

            return ResponseEntity.ok()
                .contentLength(fileSize)
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=\"" + fileName + "\"")
                .body(responseBody);

        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    // === StreamingResponseBody with Chunked Transfer Encoding ===

    @GetMapping("/chunked/{fileName:.+}")
    public ResponseEntity<StreamingResponseBody> streamChunked(
            @PathVariable String fileName) {

        Path filePath = Paths.get("uploads").resolve(fileName).normalize();

        if (!Files.exists(filePath)) {
            return ResponseEntity.notFound().build();
        }

        StreamingResponseBody responseBody = outputStream -> {
            try (RandomAccessFile raf = new RandomAccessFile(filePath.toFile(), "r");
                 BufferedOutputStream bos = new BufferedOutputStream(outputStream, 16384)) {

                byte[] buffer = new byte[16384];
                int bytesRead;
                long totalSent = 0;
                long fileSize = raf.length();

                while ((bytesRead = raf.read(buffer)) != -1) {
                    bos.write(buffer, 0, bytesRead);
                    totalSent += bytesRead;

                    if (Thread.currentThread().isInterrupted()) {
                        throw new InterruptedIOException(
                            "Stream interrupted after " + totalSent + " bytes");
                    }
                }
                bos.flush();
            }
        };

        try {
            String contentType = Files.probeContentType(filePath);
            if (contentType == null) contentType = "application/octet-stream";

            return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=\"" + fileName + "\"")
                .header(HttpHeaders.TRANSFER_ENCODING, "chunked")
                .body(responseBody);

        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    // === Large video stream (partial content / range requests support) ===

    @GetMapping("/video/{fileName:.+}")
    public ResponseEntity<StreamingResponseBody> streamVideo(
            @PathVariable String fileName,
            @RequestHeader(value = "Range", required = false) String rangeHeader) {

        Path filePath = Paths.get("uploads").resolve(fileName).normalize();

        if (!Files.exists(filePath)) {
            return ResponseEntity.notFound().build();
        }

        try {
            long fileSize = Files.size(filePath);
            String contentType = Files.probeContentType(filePath);
            if (contentType == null) contentType = "application/octet-stream";

            if (rangeHeader == null) {
                StreamingResponseBody responseBody = outputStream -> {
                    try (InputStream is = Files.newInputStream(filePath);
                         BufferedOutputStream bos = new BufferedOutputStream(outputStream)) {
                        is.transferTo(bos);
                    }
                };

                return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline")
                    .header(HttpHeaders.ACCEPT_RANGES, "bytes")
                    .body(responseBody);
            }

            String[] ranges = rangeHeader.replace("bytes=", "").split("-");
            long start = Long.parseLong(ranges[0]);
            long end = ranges.length > 1 ? Long.parseLong(ranges[1]) : fileSize - 1;
            long contentLength = end - start + 1;

            StreamingResponseBody responseBody = outputStream -> {
                try (RandomAccessFile raf = new RandomAccessFile(filePath.toFile(), "r");
                     BufferedOutputStream bos = new BufferedOutputStream(outputStream)) {
                    raf.seek(start);
                    byte[] buffer = new byte[8192];
                    long remaining = contentLength;
                    int bytesRead;

                    while (remaining > 0
                           && (bytesRead = raf.read(buffer, 0, (int) Math.min(buffer.length, remaining))) != -1) {
                        bos.write(buffer, 0, bytesRead);
                        remaining -= bytesRead;
                    }
                    bos.flush();
                }
            };

            return ResponseEntity.status(206)
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline")
                .header(HttpHeaders.ACCEPT_RANGES, "bytes")
                .header(HttpHeaders.CONTENT_RANGE,
                    "bytes " + start + "-" + end + "/" + fileSize)
                .contentLength(contentLength)
                .body(responseBody);

        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
```

### 10. InputStreamResource Streaming


`InputStreamResource` is an alternative for streaming. Spring automatically uses chunked encoding when the content length is unknown.

```java
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/stream")
public class InputStreamResourceController {

    @GetMapping("/input-stream/{fileName:.+}")
    public ResponseEntity<InputStreamResource> downloadWithInputStreamResource(
            @PathVariable String fileName) {
        try {
            Path filePath = Paths.get("uploads").resolve(fileName).normalize();

            if (!Files.exists(filePath)) {
                return ResponseEntity.notFound().build();
            }

            long fileSize = Files.size(filePath);
            String contentType = Files.probeContentType(filePath);
            if (contentType == null) contentType = "application/octet-stream";

            FileInputStream fis = new FileInputStream(filePath.toFile());
            InputStreamResource resource = new InputStreamResource(fis);

            return ResponseEntity.ok()
                .contentLength(fileSize)
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=\"" + fileName + "\"")
                .body(resource);

        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/no-length/{fileName:.+}")
    public ResponseEntity<InputStreamResource> streamWithoutContentLength(
            @PathVariable String fileName) {
        try {
            Path filePath = Paths.get("uploads").resolve(fileName).normalize();

            if (!Files.exists(filePath)) {
                return ResponseEntity.notFound().build();
            }

            String contentType = Files.probeContentType(filePath);
            if (contentType == null) contentType = "application/octet-stream";

            FileInputStream fis = new FileInputStream(filePath.toFile());
            InputStreamResource resource = new InputStreamResource(fis);

            // No content-length set Ã¢â€ â€™ Spring uses chunked transfer encoding
            return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=\"" + fileName + "\"")
                .body(resource);

        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
```

### 11. Progress Tracking Ã¢â‚¬â€ Temp Then Atomic Move


For very large uploads, save to a temp file first, validate, then atomically move to the final location.

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.*;
import java.util.UUID;

@Service
public class SafeStorageService {

    private static final Logger log = LoggerFactory.getLogger(SafeStorageService.class);

    private final Path uploadDir;
    private final Path tempDir;

    public SafeStorageService(
            @Value("${app.storage.upload-dir:uploads}") String uploadDir,
            @Value("${app.storage.temp-dir:uploads/temp}") String tempDir) {
        this.uploadDir = Paths.get(uploadDir).toAbsolutePath().normalize();
        this.tempDir = Paths.get(tempDir).toAbsolutePath().normalize();
    }

    @PostConstruct
    public void init() throws IOException {
        Files.createDirectories(uploadDir);
        Files.createDirectories(tempDir);
        log.info("Upload dir: {}, Temp dir: {}", uploadDir, tempDir);
    }

    public String storeWithProgress(MultipartFile file, ProgressCallback callback) {
        String originalName = file.getOriginalFilename();
        String storedName = UUID.randomUUID() + getExtension(originalName);

        Path tempFile = tempDir.resolve(storedName + ".tmp");
        Path finalFile = uploadDir.resolve(storedName);

        try (InputStream in = file.getInputStream();
             OutputStream out = Files.newOutputStream(tempFile,
                 StandardOpenOption.CREATE, StandardOpenOption.WRITE)) {

            byte[] buffer = new byte[8192];
            int bytesRead;
            long totalBytes = 0;
            long fileSize = file.getSize();

            while ((bytesRead = in.read(buffer)) != -1) {
                out.write(buffer, 0, bytesRead);
                totalBytes += bytesRead;

                if (callback != null && fileSize > 0) {
                    int percent = (int) ((totalBytes * 100) / fileSize);
                    callback.onProgress(totalBytes, fileSize, percent);
                }
            }

            out.flush();

        } catch (IOException e) {
            cleanup(tempFile);
            throw new StorageException("Failed to write temp file: " + originalName, e);
        }

        try {
            Files.move(tempFile, finalFile, StandardCopyOption.ATOMIC_MOVE);
            log.info("Atomic move succeeded: {} -> {}", tempFile, finalFile);
        } catch (AtomicMoveNotSupportedException e) {
            try {
                Files.move(tempFile, finalFile, StandardCopyOption.REPLACE_EXISTING);
                log.warn("Non-atomic move used (filesystem does not support atomic moves)");
            } catch (IOException moveEx) {
                cleanup(tempFile);
                throw new StorageException("Failed to move file: " + originalName, moveEx);
            }
        }

        return storedName;
    }

    public Path storeInChunks(InputStream inputStream, String extension,
                              long expectedSize, ProgressCallback callback) {
        String storedName = UUID.randomUUID() + extension;

        Path tempFile = tempDir.resolve(storedName + ".tmp");
        Path finalFile = uploadDir.resolve(storedName);

        try (BufferedOutputStream bos = new BufferedOutputStream(
                Files.newOutputStream(tempFile, StandardOpenOption.CREATE))) {

            byte[] buffer = new byte[16384];
            int bytesRead;
            long totalBytes = 0;

            while ((bytesRead = inputStream.read(buffer)) != -1) {
                bos.write(buffer, 0, bytesRead);
                totalBytes += bytesRead;

                if (callback != null && expectedSize > 0) {
                    callback.onProgress(totalBytes, expectedSize,
                        (int) ((totalBytes * 100) / expectedSize));
                }
            }
            bos.flush();

        } catch (IOException e) {
            cleanup(tempFile);
            throw new StorageException("Failed to store chunked file", e);
        }

        try {
            Files.move(tempFile, finalFile, StandardCopyOption.ATOMIC_MOVE);
        } catch (IOException e) {
            cleanup(tempFile);
            throw new StorageException("Failed to finalize chunked file", e);
        }

        return finalFile;
    }

    private void cleanup(Path path) {
        try { Files.deleteIfExists(path); } catch (IOException e) {
            log.warn("Failed to clean up temp file: {}", path);
        }
    }

    private String getExtension(String fileName) {
        int dot = fileName.lastIndexOf('.');
        return dot > 0 ? fileName.substring(dot) : "";
    }

    @FunctionalInterface
    public interface ProgressCallback {
        void onProgress(long bytesWritten, long totalBytes, int percentComplete);
    }
}
```

### 12. File Type Validation by Magic Bytes


Relying solely on file extensions is insecure. Validate the file's magic bytes (the first few bytes that identify the file format).

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Service
public class FileValidationService {

    private static final Logger log = LoggerFactory.getLogger(FileValidationService.class);

    private static final Map<String, List<byte[]>> MAGIC_BYTES = Map.of(
        "image/jpeg", List.of(new byte[]{(byte) 0xFF, (byte) 0xD8, (byte) 0xFF}),
        "image/png", List.of(new byte[]{(byte) 0x89, 0x50, 0x4E, 0x47}),
        "image/gif", List.of(new byte[]{0x47, 0x49, 0x46}),
        "image/webp", List.of(new byte[]{0x52, 0x49, 0x46, 0x46}),  // RIFF prefix
        "application/pdf", List.of(new byte[]{0x25, 0x50, 0x44, 0x46}),
        "application/zip", List.of(new byte[]{0x50, 0x4B, 0x03, 0x04}),
        "application/vnd.openxmlformats-officedocument"
            + ".wordprocessingml.document",
            List.of(new byte[]{0x50, 0x4B, 0x03, 0x04}),  // ZIP-based
        "application/vnd.openxmlformats-officedocument"
            + ".spreadsheetml.sheet",
            List.of(new byte[]{0x50, 0x4B, 0x03, 0x04}),  // ZIP-based
        "text/csv", List.of() // no reliable magic bytes; we validate by content
    );

    private static final Set<String> ALLOWED_CONTENT_TYPES = Set.of(
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "text/csv"
    );

    private static final long MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

    public void validate(MultipartFile file) {
        if (file.isEmpty()) {
            throw new FileValidationException("File is empty");
        }

        if (file.getSize() > MAX_FILE_SIZE) {
            throw new FileValidationException(
                "File size " + file.getSize() + " exceeds maximum of " + MAX_FILE_SIZE);
        }

        String contentType = file.getContentType();
        if (contentType == null || !ALLOWED_CONTENT_TYPES.contains(contentType)) {
            throw new FileValidationException(
                "Content type '" + contentType + "' is not allowed");
        }

        if (!validateMagicBytes(file)) {
            throw new FileValidationException(
                "File content does not match its declared content type");
        }

        String fileName = file.getOriginalFilename();
        if (fileName == null || fileName.isBlank()) {
            throw new FileValidationException("File name is required");
        }

        if (fileName.contains("..") || fileName.contains("/") || fileName.contains("\\")) {
            throw new FileValidationException("Invalid file name: " + fileName);
        }
    }

    private boolean validateMagicBytes(MultipartFile file) {
        String contentType = file.getContentType();
        if (contentType == null) return false;

        List<byte[]> magicSignatures = MAGIC_BYTES.get(contentType);
        if (magicSignatures == null || magicSignatures.isEmpty()) {
            return true; // no magic bytes defined for this type
        }

        byte[] fileHeader = readHeader(file, 8);
        if (fileHeader == null || fileHeader.length == 0) {
            return false;
        }

        for (byte[] signature : magicSignatures) {
            if (startsWith(fileHeader, signature)) {
                return true;
            }
        }

        log.warn("Magic byte mismatch for type {}. Declared header: {}",
            contentType, bytesToHex(fileHeader));

        return false;
    }

    private byte[] readHeader(MultipartFile file, int numBytes) {
        try (InputStream is = file.getInputStream()) {
            return is.readNBytes(numBytes);
        } catch (IOException e) {
            log.error("Failed to read file header", e);
            return null;
        }
    }

    private boolean startsWith(byte[] data, byte[] prefix) {
        if (data.length < prefix.length) return false;
        for (int i = 0; i < prefix.length; i++) {
            if (data[i] != prefix[i]) return false;
        }
        return true;
    }

    private String bytesToHex(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02X ", b));
        }
        return sb.toString().trim();
    }
}
```

```java
public class FileValidationException extends RuntimeException {
    public FileValidationException(String message) {
        super(message);
    }
    public FileValidationException(String message, Throwable cause) {
        super(message, cause);
    }
}
```

```java
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Map;

@ControllerAdvice
public class FileValidationExceptionHandler {

    @ExceptionHandler(FileValidationException.class)
    public ResponseEntity<Map<String, String>> handleValidation(
            FileValidationException e) {
        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(Map.of("error", e.getMessage()));
    }
}
```

### 13. Malware Scanning Integration


```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.concurrent.TimeUnit;

@Service
public class MalwareScannerService {

    private static final Logger log = LoggerFactory.getLogger(MalwareScannerService.class);

    private final boolean enabled;
    private final String scannerCommand;

    public MalwareScannerService(
            @Value("${app.malware-scanning.enabled:false}") boolean enabled,
            @Value("${app.malware-scanning.command:clamscan}") String scannerCommand) {
        this.enabled = enabled;
        this.scannerCommand = scannerCommand;
    }

    public ScanResult scan(MultipartFile file) {
        if (!enabled) {
            return ScanResult.clean("Scanning disabled");
        }

        Path tempFile = null;
        try {
            tempFile = Files.createTempFile("malware-scan-", ".tmp");
            file.transferTo(tempFile.toFile());

            return scanFile(tempFile);

        } catch (IOException e) {
            log.error("Malware scan failed", e);
            return ScanResult.error("Scan failed: " + e.getMessage());
        } finally {
            if (tempFile != null) {
                try { Files.deleteIfExists(tempFile); } catch (IOException e) {
                    log.warn("Failed to delete temp scan file: {}", tempFile);
                }
            }
        }
    }

    public ScanResult scan(Path filePath) {
        if (!enabled) {
            return ScanResult.clean("Scanning disabled");
        }

        if (!Files.exists(filePath)) {
            return ScanResult.error("File not found: " + filePath);
        }

        return scanFile(filePath);
    }

    private ScanResult scanFile(Path filePath) {
        try {
            ProcessBuilder pb = new ProcessBuilder(
                scannerCommand,
                "--stdout",
                "--no-summary",
                filePath.toString()
            );

            pb.redirectErrorStream(true);
            Process process = pb.start();

            boolean finished = process.waitFor(30, TimeUnit.SECONDS);
            if (!finished) {
                process.destroyForcibly();
                log.warn("Malware scan timed out for: {}", filePath);
                return ScanResult.error("Scan timed out");
            }

            int exitCode = process.exitValue();

            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(process.getInputStream()))) {
                StringBuilder output = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    output.append(line).append("\n");
                }
                String result = output.toString().trim();

                if (exitCode == 0) {
                    log.info("File clean: {}", filePath);
                    return ScanResult.clean(result);
                } else if (result.contains("FOUND")) {
                    log.warn("Malware detected in file {}: {}", filePath, result);
                    return ScanResult.infected(result);
                } else {
                    log.warn("Scanner returned exit code {}: {}", exitCode, result);
                    return ScanResult.error("Scanner error (exit " + exitCode + "): " + result);
                }
            }

        } catch (IOException | InterruptedException e) {
            log.error("Malware scan exception for: {}", filePath, e);
            return ScanResult.error("Scan exception: " + e.getMessage());
        }
    }

    public static class ScanResult {
        private final Status status;
        private final String details;

        private ScanResult(Status status, String details) {
            this.status = status;
            this.details = details;
        }

        public static ScanResult clean(String details) {
            return new ScanResult(Status.CLEAN, details);
        }

        public static ScanResult infected(String details) {
            return new ScanResult(Status.INFECTED, details);
        }

        public static ScanResult error(String details) {
            return new ScanResult(Status.ERROR, details);
        }

        public boolean isClean() { return status == Status.CLEAN; }
        public boolean isInfected() { return status == Status.INFECTED; }
        public boolean isError() { return status == Status.ERROR; }
        public Status getStatus() { return status; }
        public String getDetails() { return details; }

        public enum Status { CLEAN, INFECTED, ERROR }
    }
}
```

```java
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class SecuredFileUploadService {

    private final FileValidationService validationService;
    private final MalwareScannerService scannerService;
    private final SafeStorageService storageService;

    private static final Logger log =
        LoggerFactory.getLogger(SecuredFileUploadService.class);

    public SecuredFileUploadService(FileValidationService validationService,
                                    MalwareScannerService scannerService,
                                    SafeStorageService storageService) {
        this.validationService = validationService;
        this.scannerService = scannerService;
        this.storageService = storageService;
    }

    public UploadResult upload(MultipartFile file) {
        validationService.validate(file);

        MalwareScannerService.ScanResult scanResult = scannerService.scan(file);
        if (!scanResult.isClean()) {
            log.warn("Rejected infected file: {} ({})",
                file.getOriginalFilename(), scanResult.getDetails());
            throw new MalwareDetectedException(
                "File rejected by security scanner: " + scanResult.getDetails());
        }

        String storedName = storageService.storeWithProgress(
            file, (written, total, percent) ->
                log.debug("Upload progress: {}% ({} / {} bytes)",
                    percent, written, total)
        );

        return new UploadResult(storedName, file.getOriginalFilename(),
            file.getSize(), scanResult);
    }
}
```

```java
public class MalwareDetectedException extends RuntimeException {
    public MalwareDetectedException(String message) {
        super(message);
    }
}
```

```java
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Map;

@ControllerAdvice
public class SecurityExceptionHandler {

    @ExceptionHandler(MalwareDetectedException.class)
    public ResponseEntity<Map<String, String>> handleMalware(
            MalwareDetectedException e) {
        return ResponseEntity
            .status(HttpStatus.UNPROCESSABLE_ENTITY)
            .body(Map.of(
                "error", "File rejected by security scanner",
                "detail", e.getMessage()
            ));
    }
}
```

```java
public class UploadResult {
    private final String storedName;
    private final String originalName;
    private final long size;
    private final MalwareScannerService.ScanResult scanResult;

    public UploadResult(String storedName, String originalName,
                        long size, MalwareScannerService.ScanResult scanResult) {
        this.storedName = storedName;
        this.originalName = originalName;
        this.size = size;
        this.scanResult = scanResult;
    }

    public String getStoredName() { return storedName; }
    public String getOriginalName() { return originalName; }
    public long getSize() { return size; }
    public MalwareScannerService.ScanResult getScanResult() { return scanResult; }
}
```

### 14. File Serving with StaticResourceHandler


Spring Boot serves static resources from `classpath:/static/` (or `/public`, `/resources`, `/META-INF/resources`) by default. For uploaded files stored outside the classpath, configure a `WebMvcConfigurer` addResourceHandler.

```java
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;
import java.nio.file.Paths;

@Configuration
public class StaticResourceConfig implements WebMvcConfigurer {

    @Value("${app.storage.upload-dir:uploads}")
    private String uploadDir;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        Path uploadPath = Paths.get(uploadDir).toAbsolutePath().normalize();

        registry.addResourceHandler("/static/uploads/**")
            .addResourceLocations("file:" + uploadPath.toString() + "/")
            .setCachePeriod(3600)
            .resourceChain(true)
            .addResolver(new org.springframework.web.servlet.resource.PathResourceResolver());

        registry.addResourceHandler("/static/images/**")
            .addResourceLocations("file:" + uploadPath.toString() + "/images/")
            .setCachePeriod(604800);

        registry.addResourceHandler("/static/documents/**")
            .addResourceLocations("file:" + uploadPath.toString() + "/documents/")
            .setCachePeriod(0);

        registry.addResourceHandler("/static/avatars/**")
            .addResourceLocations("file:" + uploadPath.toString() + "/avatars/")
            .setCachePeriod(86400);
    }
}
```

With this configuration, files stored in `uploads/images/photo.jpg` are accessible at `http://localhost:8080/static/uploads/photo.jpg`.

For a more controlled approach with path traversal prevention:

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
public class FileViewController {

    private static final Logger log = LoggerFactory.getLogger(FileViewController.class);

    private final Path uploadDir;

    public FileViewController(
            @Value("${app.storage.upload-dir:uploads}") String uploadDir) {
        this.uploadDir = Paths.get(uploadDir).toAbsolutePath().normalize();
    }

    @GetMapping("/uploads/{year}/{month}/{fileName:.+}")
    public ResponseEntity<Resource> serveFile(
            @PathVariable int year,
            @PathVariable int month,
            @PathVariable String fileName) {

        Path filePath = uploadDir
            .resolve(String.valueOf(year))
            .resolve(String.format("%02d", month))
            .resolve(fileName)
            .normalize();

        if (!filePath.startsWith(uploadDir)) {
            log.warn("Path traversal attempt: {}", filePath);
            return ResponseEntity.badRequest().build();
        }

        if (!Files.exists(filePath) || !Files.isReadable(filePath)) {
            return ResponseEntity.notFound().build();
        }

        FileSystemResource resource = new FileSystemResource(filePath.toFile());

        try {
            String contentType = Files.probeContentType(filePath);
            if (contentType == null) contentType = "application/octet-stream";

            return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .body(resource);

        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
```

### 15. Complete Upload Pipeline Ã¢â‚¬â€ End to End


```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/secure-files")
public class SecureFileController {

    private static final Logger log = LoggerFactory.getLogger(SecureFileController.class);

    private final SecuredFileUploadService uploadService;
    private final FileStorageService storageService;

    public SecureFileController(SecuredFileUploadService uploadService,
                                FileStorageService storageService) {
        this.uploadService = uploadService;
        this.storageService = storageService;
    }

    @PostMapping("/upload")
    public ResponseEntity<Map<String, Object>> upload(
            @RequestParam("file") MultipartFile file) {

        log.info("Upload request: name={}, size={}, type={}",
            file.getOriginalFilename(), file.getSize(), file.getContentType());

        UploadResult result = uploadService.upload(file);

        return ResponseEntity.ok(Map.of(
            "storedName", result.getStoredName(),
            "originalName", result.getOriginalName(),
            "size", result.getSize(),
            "scanStatus", result.getScanResult().getStatus().name(),
            "message", "File uploaded successfully"
        ));
    }

    @PostMapping("/upload-multiple")
    public ResponseEntity<Map<String, Object>> uploadMultiple(
            @RequestParam("files") List<MultipartFile> files) {

        List<Map<String, Object>> results = files.stream()
            .filter(f -> !f.isEmpty())
            .map(file -> {
                try {
                    UploadResult result = uploadService.upload(file);
                    return Map.of(
                        "originalName", result.getOriginalName(),
                        "storedName", result.getStoredName(),
                        "status", "OK"
                    );
                } catch (Exception e) {
                    return Map.of(
                        "originalName", file.getOriginalFilename(),
                        "status", "FAILED",
                        "error", e.getMessage()
                    );
                }
            })
            .toList();

        long successCount = results.stream()
            .filter(r -> "OK".equals(r.get("status"))).count();

        return ResponseEntity.ok(Map.of(
            "results", results,
            "total", results.size(),
            "successCount", successCount
        ));
    }

    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> status() {
        return ResponseEntity.ok(Map.of(
            "service", "Secure File Upload",
            "version", "1.0",
            "status", "operational"
        ));
    }
}
```

### 16. Chunked Upload (Client-Side Splitting)


For extremely large files, the client can split the file into chunks and upload them sequentially.

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.*;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/api/chunked-upload")
public class ChunkedUploadController {

    private static final Logger log =
        LoggerFactory.getLogger(ChunkedUploadController.class);
    private final Map<String, ChunkedUploadSession> sessions =
        new ConcurrentHashMap<>();

    @PostMapping("/init")
    public ResponseEntity<Map<String, Object>> initializeUpload(
            @RequestParam("fileName") String fileName,
            @RequestParam("totalSize") long totalSize,
            @RequestParam("totalChunks") int totalChunks) {

        String uploadId = UUID.randomUUID().toString();
        Path tempDir = Paths.get("uploads", "chunks", uploadId);

        try {
            Files.createDirectories(tempDir);
        } catch (IOException e) {
            return ResponseEntity.internalServerError()
                .body(Map.of("error", "Failed to initialize upload"));
        }

        sessions.put(uploadId, new ChunkedUploadSession(
            uploadId, fileName, totalSize, totalChunks, tempDir));

        log.info("Chunked upload initialized: id={}, file={}, chunks={}",
            uploadId, fileName, totalChunks);

        return ResponseEntity.ok(Map.of(
            "uploadId", uploadId,
            "totalChunks", totalChunks,
            "status", "initialized"
        ));
    }

    @PostMapping("/chunk")
    public ResponseEntity<Map<String, Object>> uploadChunk(
            @RequestParam("uploadId") String uploadId,
            @RequestParam("chunkIndex") int chunkIndex,
            @RequestParam("file") MultipartFile file) {

        ChunkedUploadSession session = sessions.get(uploadId);
        if (session == null) {
            return ResponseEntity.badRequest()
                .body(Map.of("error", "Invalid upload ID"));
        }

        Path chunkPath = session.tempDir().resolve("chunk-" + chunkIndex);

        try {
            file.transferTo(chunkPath);
            session.markReceived(chunkIndex);
            log.info("Chunk {}/{} received for upload {}", chunkIndex + 1,
                session.totalChunks(), uploadId);

            if (session.allChunksReceived()) {
                return ResponseEntity.ok(Map.of(
                    "status", "complete",
                    "uploadId", uploadId,
                    "receivedChunks", session.receivedChunks(),
                    "totalChunks", session.totalChunks()
                ));
            }

            return ResponseEntity.ok(Map.of(
                "status", "in-progress",
                "uploadId", uploadId,
                "receivedChunks", session.receivedChunks(),
                "totalChunks", session.totalChunks()
            ));

        } catch (IOException e) {
            return ResponseEntity.internalServerError()
                .body(Map.of("error", "Failed to write chunk"));
        }
    }

    @PostMapping("/complete")
    public ResponseEntity<Map<String, Object>> completeUpload(
            @RequestParam("uploadId") String uploadId) {

        ChunkedUploadSession session = sessions.get(uploadId);
        if (session == null) {
            return ResponseEntity.badRequest()
                .body(Map.of("error", "Invalid upload ID"));
        }

        if (!session.allChunksReceived()) {
            return ResponseEntity.badRequest()
                .body(Map.of("error", "Not all chunks received",
                    "received", session.receivedChunks(),
                    "total", session.totalChunks()));
        }

        String extension = "";
        int dot = session.fileName().lastIndexOf('.');
        if (dot > 0) extension = session.fileName().substring(dot);

        String finalName = UUID.randomUUID() + extension;
        Path finalPath = Paths.get("uploads", finalName);

        try (OutputStream out = Files.newOutputStream(finalPath,
                StandardOpenOption.CREATE, StandardOpenOption.WRITE)) {

            for (int i = 0; i < session.totalChunks(); i++) {
                Path chunkPath = session.tempDir().resolve("chunk-" + i);
                byte[] chunkData = Files.readAllBytes(chunkPath);
                out.write(chunkData);
                Files.deleteIfExists(chunkPath);
            }
            out.flush();

        } catch (IOException e) {
            return ResponseEntity.internalServerError()
                .body(Map.of("error", "Failed to assemble chunks"));
        }

        deleteDirectory(session.tempDir());
        sessions.remove(uploadId);

        log.info("Chunked upload complete: {} -> {}", session.fileName(), finalName);

        return ResponseEntity.ok(Map.of(
            "status", "completed",
            "fileName", finalName,
            "originalName", session.fileName(),
            "size", session.totalSize()
        ));
    }

    @GetMapping("/status/{uploadId}")
    public ResponseEntity<Map<String, Object>> getStatus(
            @PathVariable String uploadId) {

        ChunkedUploadSession session = sessions.get(uploadId);
        if (session == null) {
            return ResponseEntity.ok(Map.of("status", "not-found"));
        }

        return ResponseEntity.ok(Map.of(
            "status", "in-progress",
            "uploadId", uploadId,
            "receivedChunks", session.receivedChunks(),
            "totalChunks", session.totalChunks(),
            "fileName", session.fileName(),
            "totalSize", session.totalSize()
        ));
    }

    private void deleteDirectory(Path dir) {
        try (var files = Files.walk(dir)) {
            files.sorted(Comparator.reverseOrder())
                .forEach(path -> {
                    try { Files.deleteIfExists(path); }
                    catch (IOException e) {
                        log.warn("Failed to delete: {}", path);
                    }
                });
        } catch (IOException e) {
            log.warn("Failed to walk directory: {}", dir);
        }
    }

    private record ChunkedUploadSession(
        String uploadId,
        String fileName,
        long totalSize,
        int totalChunks,
        Path tempDir
    ) {
        private final BitSet receivedChunks = new BitSet(totalChunks);

        public void markReceived(int index) {
            receivedChunks.set(index);
        }

        public int receivedChunks() {
            return receivedChunks.cardinality();
        }

        public boolean allChunksReceived() {
            return receivedChunks.cardinality() == totalChunks;
        }
    }
}
```

### 17. Database-Backed File Storage


For small files or when you need transactional consistency, store files in a database alongside metadata.

```java
import jakarta.persistence.*;

@Entity
@Table(name = "stored_files")
public class StoredFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String storedName;

    @Column(nullable = false)
    private String originalName;

    @Column(nullable = false)
    private String contentType;

    @Column(nullable = false)
    private long size;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(name = "file_data", columnDefinition = "LONGBLOB")
    private byte[] data;

    @Column(nullable = false)
    private java.time.LocalDateTime uploadedAt;

    private String uploadedBy;

    public StoredFile() {}

    public StoredFile(String storedName, String originalName,
                      String contentType, long size, byte[] data) {
        this.storedName = storedName;
        this.originalName = originalName;
        this.contentType = contentType;
        this.size = size;
        this.data = data;
        this.uploadedAt = java.time.LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getStoredName() { return storedName; }
    public void setStoredName(String storedName) { this.storedName = storedName; }

    public String getOriginalName() { return originalName; }
    public void setOriginalName(String originalName) { this.originalName = originalName; }

    public String getContentType() { return contentType; }
    public void setContentType(String contentType) { this.contentType = contentType; }

    public long getSize() { return size; }
    public void setSize(long size) { this.size = size; }

    public byte[] getData() { return data; }
    public void setData(byte[] data) { this.data = data; }

    public java.time.LocalDateTime getUploadedAt() { return uploadedAt; }
    public void setUploadedAt(java.time.LocalDateTime uploadedAt) { this.uploadedAt = uploadedAt; }

    public String getUploadedBy() { return uploadedBy; }
    public void setUploadedBy(String uploadedBy) { this.uploadedBy = uploadedBy; }
}
```

```java
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StoredFileRepository extends JpaRepository<StoredFile, Long> {
    Optional<StoredFile> findByStoredName(String storedName);
    boolean existsByStoredName(String storedName);
    void deleteByStoredName(String storedName);
}
```

```java
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Service
@Transactional
public class DatabaseFileStorageService implements FileStorageService {

    private final StoredFileRepository repository;

    public DatabaseFileStorageService(StoredFileRepository repository) {
        this.repository = repository;
    }

    @Override
    public String store(MultipartFile file) {
        try {
            String storedName = UUID.randomUUID() + getExtension(
                file.getOriginalFilename());

            StoredFile storedFile = new StoredFile(
                storedName,
                file.getOriginalFilename(),
                file.getContentType(),
                file.getSize(),
                file.getBytes()
            );

            repository.save(storedFile);
            return storedName;

        } catch (IOException e) {
            throw new StorageException("Failed to store file in database", e);
        }
    }

    @Override
    public String store(byte[] data, String originalFileName) {
        String storedName = UUID.randomUUID() + getExtension(originalFileName);

        StoredFile storedFile = new StoredFile(
            storedName,
            originalFileName,
            "application/octet-stream",
            data.length,
            data
        );

        repository.save(storedFile);
        return storedName;
    }

    @Override
    public Resource loadAsResource(String fileName) {
        StoredFile storedFile = repository.findByStoredName(fileName)
            .orElseThrow(() -> new StorageFileNotFoundException(
                "File not found: " + fileName));

        return new ByteArrayResource(storedFile.getData());
    }

    @Override
    public Path load(String fileName) {
        throw new UnsupportedOperationException(
            "Database storage does not support file paths");
    }

    @Override
    public Stream<Path> loadAll() {
        throw new UnsupportedOperationException(
            "Database storage does not support file paths");
    }

    @Override
    public void delete(String fileName) {
        repository.deleteByStoredName(fileName);
    }

    @Override
    public void deleteAll() {
        repository.deleteAll();
    }

    @Override
    public String getStorageLocation() {
        return "database://stored_files";
    }

    private String getExtension(String fileName) {
        if (fileName == null) return "";
        int dot = fileName.lastIndexOf('.');
        return dot > 0 ? fileName.substring(dot) : "";
    }
}
```

```java
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/db-files")
public class DatabaseFileController {

    private final DatabaseFileStorageService dbStorage;

    public DatabaseFileController(DatabaseFileStorageService dbStorage) {
        this.dbStorage = dbStorage;
    }

    @GetMapping("/download/{storedName:.+}")
    public ResponseEntity<ByteArrayResource> download(@PathVariable String storedName) {
        StoredFile storedFile = dbStorage.findByStoredName(storedName);
        if (storedFile == null) {
            return ResponseEntity.notFound().build();
        }

        ByteArrayResource resource = new ByteArrayResource(storedFile.getData());

        return ResponseEntity.ok()
            .contentLength(storedFile.getSize())
            .contentType(MediaType.parseMediaType(storedFile.getContentType()))
            .header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + storedFile.getOriginalName() + "\"")
            .header("X-Uploaded-At", storedFile.getUploadedAt().toString())
            .body(resource);
    }
}
```

### 18. Application Properties Reference


```properties
# ===== Multipart/Upload Configuration =====
spring.servlet.multipart.enabled=true
spring.servlet.multipart.location=${java.io.tmpdir}/petclinic-uploads
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=50MB
spring.servlet.multipart.file-size-threshold=2KB
spring.servlet.multipart.resolve-lazily=false

# ===== Custom Storage Settings =====
app.storage.upload-dir=uploads
app.storage.temp-dir=uploads/temp
app.storage.allowed-types=image/jpeg,image/png,image/gif,image/webp,application/pdf
app.storage.max-file-size=10485760

# ===== Malware Scanning =====
app.malware-scanning.enabled=true
app.malware-scanning.command=clamscan

# ===== Server Upload Limits =====
server.tomcat.max-swallow-size=100MB
server.tomcat.max-http-form-post-size=50MB
server.max-http-request-header-size=16KB

# ===== Static Resource Serving =====
spring.web.resources.static-locations=classpath:/static/,file:uploads/
spring.web.resources.add-mappings=true

# ===== Logging =====
logging.level.com.petclinic.files=DEBUG
logging.level.org.springframework.web.multipart=DEBUG
```

```yaml
# application.yml alternative
spring:
  servlet:
    multipart:
      enabled: true
      location: ${java.io.tmpdir}/petclinic-uploads
      max-file-size: 10MB
      max-request-size: 50MB
      file-size-threshold: 2KB
  web:
    resources:
      static-locations: classpath:/static/,file:uploads/

app:
  storage:
    upload-dir: uploads
    temp-dir: uploads/temp
    allowed-types: image/jpeg,image/png,image/gif,image/webp,application/pdf
    max-file-size: 10485760
  malware-scanning:
    enabled: true
    command: clamscan

server:
  tomcat:
    max-swallow-size: 100MB
    max-http-form-post-size: 50MB
```

### 19. Testing File Operations


```java
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class FileUploadControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void uploadSingleFile() throws Exception {
        MockMultipartFile file = new MockMultipartFile(
            "file",
            "test.txt",
            MediaType.TEXT_PLAIN_VALUE,
            "Hello, World!".getBytes()
        );

        mockMvc.perform(multipart("/api/files/upload").file(file))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.fileName").value("test.txt"))
            .andExpect(jsonPath("$.size").value(13))
            .andExpect(jsonPath("$.contentType").value("text/plain"));
    }

    @Test
    void uploadEmptyFileReturnsBadRequest() throws Exception {
        MockMultipartFile emptyFile = new MockMultipartFile(
            "file", "empty.txt",
            MediaType.TEXT_PLAIN_VALUE, new byte[0]);

        mockMvc.perform(multipart("/api/files/upload").file(emptyFile))
            .andExpect(status().isBadRequest());
    }

    @Test
    void uploadMultipleFiles() throws Exception {
        MockMultipartFile file1 = new MockMultipartFile(
            "files", "a.txt", "text/plain", "content a".getBytes());
        MockMultipartFile file2 = new MockMultipartFile(
            "files", "b.txt", "text/plain", "content b".getBytes());

        mockMvc.perform(multipart("/api/files/upload-multiple")
                .file(file1).file(file2))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.count").value(2));
    }

    @Test
    void fileExceedsMaxSize() throws Exception {
        MockMultipartFile largeFile = new MockMultipartFile(
            "file", "large.bin",
            "application/octet-stream",
            new byte[20 * 1024 * 1024]);

        mockMvc.perform(multipart("/api/files/upload").file(largeFile))
            .andExpect(status().isPayloadTooLarge());
    }

    @Test
    void downloadFile() throws Exception {
        MockMultipartFile file = new MockMultipartFile(
            "file", "download-test.txt",
            "text/plain", "download me".getBytes());

        String storedName = mockMvc.perform(
                multipart("/api/files/upload").file(file))
            .andReturn()
            .getResponse()
            .getJsonPath()
            .read("$.storedName");

        mockMvc.perform(org.springframework.test.web.servlet.request
                .MockMvcRequestBuilders
                .get("/api/files/download/{name}", storedName))
            .andExpect(status().isOk())
            .andExpect(header().string("Content-Disposition",
                org.hamcrest.Matchers.containsString("attachment")))
            .andExpect(header().string("Content-Type",
                org.hamcrest.Matchers.containsString("text/plain")));
    }
}
```

```java
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.file.Path;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class FileValidationServiceTest {

    private final FileValidationService validator = new FileValidationService();

    @Test
    void validJpegPasses() {
        MultipartFile jpeg = createMockFile("photo.jpg", "image/jpeg",
            new byte[]{(byte) 0xFF, (byte) 0xD8, (byte) 0xFF, 0x00, 0x01, 0x02});
        validator.validate(jpeg);
    }

    @Test
    void validPngPasses() {
        MultipartFile png = createMockFile("image.png", "image/png",
            new byte[]{0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A});
        validator.validate(png);
    }

    @Test
    void mislabeledFileFails() {
        MultipartFile fakePdf = createMockFile("fake.pdf", "application/pdf",
            new byte[]{0x89, 0x50, 0x4E, 0x47});  // PNG magic bytes, not PDF

        assertThatThrownBy(() -> validator.validate(fakePdf))
            .isInstanceOf(FileValidationException.class)
            .hasMessageContaining("does not match");
    }

    @Test
    void disallowedContentTypeFails() {
        MultipartFile exe = createMockFile("virus.exe", "application/x-msdownload",
            new byte[]{0x4D, 0x5A});

        assertThatThrownBy(() -> validator.validate(exe))
            .isInstanceOf(FileValidationException.class)
            .hasMessageContaining("not allowed");
    }

    @Test
    void pathTraversalFileNameFails() {
        MultipartFile malicious = createMockFile(
            "../../etc/passwd", "text/plain", "evil".getBytes());

        assertThatThrownBy(() -> validator.validate(malicious))
            .isInstanceOf(FileValidationException.class)
            .hasMessageContaining("Invalid file name");
    }

    private MultipartFile createMockFile(String name, String contentType,
                                         byte[] content) {
        return new org.springframework.mock.web.MockMultipartFile(
            "file", name, contentType, content);
    }
}
```

```java
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

import java.nio.file.Files;
import java.nio.file.Path;

import static org.assertj.core.api.Assertions.assertThat;

class SafeStorageServiceTest {

    @TempDir
    Path tempDir;

    @Test
    void atomicMovePreservesContent(@TempDir Path uploadDir,
                                    @TempDir Path tempDir) throws Exception {
        SafeStorageService service = new SafeStorageService(
            uploadDir.toString(), tempDir.toString());
        service.init();

        byte[] content = "Hello, atomic world!".getBytes();
        MockMultipartFile file = new MockMultipartFile(
            "file", "hello.txt", "text/plain", content);

        String storedName = service.storeWithProgress(file, null);

        Path storedPath = uploadDir.resolve(storedName);
        assertThat(Files.exists(storedPath)).isTrue();
        assertThat(Files.readAllBytes(storedPath)).isEqualTo(content);

        // Temp directory should be clean
        assertThat(Files.list(tempDir)).isEmpty();
    }
}
```

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| MultipartFile | Spring's uploaded file representation | getName(), getBytes(), getInputStream() | File upload handling |
| Resource | Spring's resource abstraction | InputStreamResource, UrlResource, ByteArrayResource | File download serving |
| StreamingResponseBody | Streaming output for large files | Backpressure-aware, async | Large file downloads |
| StaticResourceHandler | Serve static files from configured locations | Built-in caching, resource resolution | Serving uploaded files |

## Quick Reference

| Upload Property | Default | Description |
|----------------|---------|-------------|
| spring.servlet.multipart.max-file-size | 1MB | Maximum file size per upload |
| spring.servlet.multipart.max-request-size | 10MB | Maximum multipart request size |
| spring.servlet.multipart.enabled | true | Enable multipart upload support |
| spring.servlet.multipart.location | (temp) | Directory for temporary upload files |

## Cross-Application Matrix

| File Type Strategy | Small Files | Large Files | Streaming |
|-------------------|-------------|-------------|-----------|
| Storage | Local filesystem | S3/Blob storage | Temporary |
| Download | ResponseEntity&lt;Resource&gt; | StreamingResponseBody | InputStreamResource |
| Validation | Magic bytes + extension | Magic bytes + scan | Magic bytes check |

## Chapter Quiz

1. How do you limit file upload size in Spring Boot?
   - A) @Size annotation on MultipartFile
   - B) spring.servlet.multipart.max-file-size property
   - C) @Max annotation
   - D) web.xml configuration

<details>
<summary>Answer&lt;/summary&gt;
**B) spring.servlet.multipart.max-file-size.** This property controls the maximum size allowed for uploaded files.
</details>

2. Which approach is best for downloading large files?
   - A) ResponseEntity&lt;byte[]&gt; 
   - B) StreamingResponseBody
   - C) FileCopyUtils
   - D) @ResponseBody

<details>
<summary>Answer&lt;/summary&gt;
**B) StreamingResponseBody.** This allows streaming the file content without loading it entirely into memory.
</details>

3. What is the most reliable way to detect file type?
   - A) File extension
   - B) Content-Type header
   - C) Magic bytes at file start
   - D) User-provided type

<details>
<summary>Answer&lt;/summary&gt;
**C) Magic bytes at file start.** Magic bytes are the first bytes of a file and reliably identify its format regardless of extension.
</details>

---

## Summary
ummary

| Concept | Key Takeaway |
|---------|-------------|
| MultipartFile | Spring interface wrapping uploaded file data; provides input stream, bytes, and transferTo |
| @RequestParam | Binds multipart request parts to controller parameters, supports List for multiple files |
| Upload Config | `spring.servlet.multipart.*` controls max sizes, temp location, threshold |
| File Size Limits | `MaxUploadSizeExceededException` handled via `@ControllerAdvice` |
| Storage Service | Abstract behind `FileStorageService` interface Ã¢â‚¬â€ swap impls (filesystem, DB, S3) |
| Download Resources | `UrlResource` (file/URL), `InputStreamResource` (stream), `ByteArrayResource` (bytes) |
| Content-Disposition | `attachment` forces download; `inline` displays in browser |
| Streaming | `StreamingResponseBody` writes to OutputStream without full buffering |
| Chunked Encoding | Used automatically when no Content-Length is set; ideal for dynamic content |
| Temp-Then-Move | Write to temp dir, validate, then atomic move to final location |
| File Type Validation | Check magic bytes (not just extension) to prevent MIME-type spoofing |
| Malware Scanning | Integrate external scanner (ClamAV); reject infected files before storage |
| StaticResourceHandler | Serve uploads directly via `file:` resource handler |
| Database Storage | Use `@Lob` byte[] with JPA for transactional file persistence |
| Chunked Uploads | Client splits large files; server reassembles on completion |

---

## Exercises

### Exercise 1: Single File Upload

Create a `@PostMapping` endpoint that:
- Accepts a single `MultipartFile` named `avatar`
- Returns the original file name, size in KB, and content type as JSON
- Rejects empty files with a 400 status

### Exercise 2: Multiple File Upload

Create an endpoint that accepts multiple files under the parameter name `documents`. Return a list of upload summaries, each containing the file name, size, and a generated download URL. Include the total count and total size of all uploaded files in the response.

### Exercise 3: Upload Configuration

Configure your application so that:
- Maximum single file size is 5 MB
- Maximum request size is 25 MB
- Files larger than 1 KB are written to disk immediately
- The temporary directory is `./uploads/temp`

### Exercise 4: Storage Service Implementation

Implement `FileStorageService.store()` to:
- Generate a UUID-based file name preserving the original extension
- Store the file under `uploads/{yyyy}/{MM}/` (year/month subdirectories)
- Return the relative path (e.g., `2026/06/abc123.pdf`)
- Prevent path traversal attacks

### Exercise 5: File Download with Content-Disposition

Create two download endpoints:
- `/api/files/download/{name}` Ã¢â‚¬â€ forces download (attachment)
- `/api/files/preview/{name}` Ã¢â‚¬â€ displays in browser (inline) for images and PDFs
Both should set the correct `Content-Type` based on the file extension.

### Exercise 6: Large File Streaming

Implement a `StreamingResponseBody` endpoint that:
- Streams a file without loading it entirely into memory
- Reports progress via logs every 10 MB
- Handles client disconnection gracefully (detect `InterruptedIOException`)
- Supports partial content (Range header) for video files

### Exercise 7: Magic Byte Validation

Write a validation method that checks the first bytes of an uploaded file against known signatures:
- JPEG: `FF D8 FF`
- PNG: `89 50 4E 47`
- PDF: `25 50 44 46`
- ZIP/DOCX/XLSX: `50 4B 03 04`

Reject files whose content does not match their declared `Content-Type`.

### Exercise 8: Malware Scanner Integration

Create a service that:
- Writes the uploaded file to a temporary location
- Invokes an external antivirus command (e.g., `clamscan`)
- Interprets the exit code (0 = clean, 1 = infected)
- Deletes infected files and returns a 422 response
- Deletes the temp file after scanning regardless of result

### Exercise 9: Chunked Upload

Implement a three-phase chunked upload:
- `POST /api/chunked/init` Ã¢â‚¬â€ returns an upload ID
- `POST /api/chunked/part` Ã¢â‚¬â€ accepts a chunk with index + upload ID
- `POST /api/chunked/complete` Ã¢â‚¬â€ reassembles chunks and returns the final file name

Track which chunks have been received and report progress via `GET /api/chunked/{uploadId}/status`.

### Exercise 10: Static Resource Serving

Configure `WebMvcConfigurer` to:
- Serve files from `./uploads/avatars/` at `/static/avatars/**`
- Serve files from `./uploads/reports/` at `/static/reports/**`
- Set a 24-hour cache for avatars
- Disable caching for reports
- Prevent directory listing

---

*End of Chapter 18 Ã¢â‚¬â€ File Upload, Download & Streaming*
