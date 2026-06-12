# REST API Development with Spring MVC

## Learning Objectives

After completing this chapter, you will be able to:

- Build RESTful web services using `@RestController` and understand its composition from `@Controller` + `@ResponseBody`
- Map HTTP requests to handler methods using `@RequestMapping` and its composed annotations
- Extract data from requests using `@PathVariable`, `@RequestParam`, `@RequestHeader`, `@RequestBody`, `@RequestAttribute`, and `@MatrixVariable`
- Build responses with `@ResponseStatus`, `ResponseEntity`, `ResponseStatusException`, and custom `HttpHeaders`
- Configure content negotiation strategies via `ContentNegotiationConfigurer` and `ContentNegotiationManager`
- Select appropriate HTTP methods and status codes following REST semantics
- Implement HATEOAS links using `RepresentationModel`, `EntityModel`, `CollectionModel`, `Link`, and `WebMvcLinkBuilder`
- Apply API versioning strategies including URI path, parameter, header, and content type approaches
- Configure CORS with `@CrossOrigin` and `GlobalCorsConfiguration`
- Apply REST best practices for endpoint naming, pagination, filtering, sorting, ETags, idempotency, and partial responses
- Implement pagination and sorting using Spring Data's `Pageable`, `Page`, `Sort`, and `PagedModel`

---

## 1. REST Architectural Style

### 1.1 What is REST?

REST (Representational State Transfer) is an architectural style defined by Roy Fielding in his 2000 doctoral dissertation. RESTful systems adhere to six constraints:

| Constraint | Description |
|------------|-------------|
| **Client-Server** | Separation of concerns between UI and data storage |
| **Stateless** | Each request contains all information needed to process it |
| **Cacheable** | Responses must define themselves as cacheable or not |
| **Layered System** | Intermediaries (proxies, gateways) can exist between client and server |
| **Uniform Interface** | Consistent resource identification, manipulation through representations, self-descriptive messages, and HATEOAS |
| **Code on Demand** (optional) | Servers can extend client functionality via executable code |

### 1.2 Resources and Representations

A **resource** is any concept that can be named â€” a user, an order, a product. Resources are identified by URIs. Clients interact with **representations** of resources (JSON, XML, etc.), not the resources themselves.

```
GET /api/users/42  â†’  Returns a representation of user 42
POST /api/users    â†’  Creates a new user resource
```

### 1.3 Richardson Maturity Model

The Richardson Maturity Model defines four levels of REST adoption:

| Level | Name | Description |
|-------|------|-------------|
| 0 | The Swamp of POX | Using HTTP as a tunnel (single URI, single verb) |
| 1 | Resources | Multiple URIs for different resources |
| 2 | HTTP Verbs | Using HTTP methods semantically (GET, POST, PUT, DELETE) |
| 3 | Hypermedia (HATEOAS) | Responses contain links to discover related actions |

Level 2 is the minimum for a RESTful API. Level 3 (HATEOAS) is the ideal.

---

## 2. @RestController Fundamentals

### 2.1 @Controller + @ResponseBody

Before Spring 4, REST controllers required two annotations:

```java
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@ResponseBody
@RequestMapping("/api/books")
public class OldBookController {

    private final BookRepository bookRepository;

    public OldBookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
}
```

`@Controller` marks the class as a Spring MVC controller. `@ResponseBody` tells Spring to serialize the return value directly to the HTTP response body (JSON/XML) rather than resolving a view name. Without `@ResponseBody`, Spring would look for a Thymeleaf/JSP template named after the return value.

### 2.2 @RestController â€” The Composed Annotation

Spring 4.0 introduced `@RestController`, a convenience annotation that combines `@Controller` and `@ResponseBody`:

```java
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
}
```

`@RestController` is meta-annotated with both `@Controller` and `@ResponseBody`, so every handler method automatically serializes its return value to the response body.

### 2.3 @RestController Source (Conceptual)

```java
import org.springframework.core.annotation.AliasFor;
import org.springframework.web.bind.annotation.ResponseBody;
import java.lang.annotation.*;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Controller
@ResponseBody
public @interface RestController {

    @AliasFor(annotation = Controller.class)
    String value() default "";
}
```

Key insight: `@RestController` is a **composed annotation** â€” it inherits component scanning through `@Controller` and response body semantics through `@ResponseBody`.

### 2.4 Model Class Example

All examples in this chapter use the following domain model:

```java
package com.example.restapi.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Objects;

public class Book {

    private Long id;
    private String isbn;
    private String title;
    private String author;
    private BigDecimal price;
    private LocalDateTime publishedAt;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public Book() {}

    public Book(Long id, String isbn, String title, String author, BigDecimal price) {
        this.id = id;
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.price = price;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getIsbn() { return isbn; }
    public void setIsbn(String isbn) { this.isbn = isbn; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }
    public LocalDateTime getPublishedAt() { return publishedAt; }
    public void setPublishedAt(LocalDateTime publishedAt) { this.publishedAt = publishedAt; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Book book = (Book) o;
        return Objects.equals(id, book.id);
    }

    @Override
    public int hashCode() { return Objects.hash(id); }

    @Override
    public String toString() {
        return "Book{id=" + id + ", isbn='" + isbn + "', title='" + title + "'}";
    }
}
```

### 2.5 Repository Stub (In-Memory)

```java
package com.example.restapi.repository;

import com.example.restapi.model.Book;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

@Repository
public class BookRepository {

    private final Map<Long, Book> store = new ConcurrentHashMap<>();
    private final AtomicLong idGenerator = new AtomicLong(1);

    @PostConstruct
    public void init() {
        save(new Book(null, "978-0-13-468599-1", "Effective Java", "Joshua Bloch", new BigDecimal("54.99")));
        save(new Book(null, "978-0-596-51774-8", "Java Concurrency in Practice", "Brian Goetz", new BigDecimal("49.99")));
        save(new Book(null, "978-1-617-29453-2", "Spring in Action", "Craig Walls", new BigDecimal("44.99")));
        save(new Book(null, "978-1-491-95035-7", "RESTful Web Services", "Leonard Richardson", new BigDecimal("39.99")));
    }

    public List<Book> findAll() { return List.copyOf(store.values()); }

    public Optional<Book> findById(Long id) { return Optional.ofNullable(store.get(id)); }

    public List<Book> findByAuthor(String author) {
        return store.values().stream()
            .filter(b -> b.getAuthor().toLowerCase().contains(author.toLowerCase()))
            .collect(Collectors.toList());
    }

    public Book save(Book book) {
        if (book.getId() == null) {
            book.setId(idGenerator.getAndIncrement());
            book.setCreatedAt(LocalDateTime.now());
        }
        book.setUpdatedAt(LocalDateTime.now());
        store.put(book.getId(), book);
        return book;
    }

    public Optional<Book> deleteById(Long id) {
        Book removed = store.remove(id);
        return Optional.ofNullable(removed);
    }

    public boolean existsByIsbn(String isbn) {
        return store.values().stream().anyMatch(b -> b.getIsbn().equals(isbn));
    }

    public long count() { return store.size(); }
}
```

---

## 3. @RequestMapping â€” The Foundation

### 3.1 @RequestMapping Attributes

`@RequestMapping` is the base annotation for mapping HTTP requests to handler methods. It can be applied at the class level (narrowing the base path) and at the method level (further refinement).

```java
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;

@RestController
@RequestMapping("/api/books")
public class RequestMappingController {

    private final BookRepository bookRepository;

    public RequestMappingController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Book> getAllBooks() { return bookRepository.findAll(); }

    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public Book getBookById(@PathVariable Long id) {
        return bookRepository.findById(id)
            .orElseThrow(() -> new BookNotFoundException(id));
    }

    @RequestMapping(method = RequestMethod.GET, params = "author")
    public List<Book> getBooksByAuthor(@RequestParam String author) {
        return bookRepository.findByAuthor(author);
    }

    @RequestMapping(method = RequestMethod.GET, headers = "API-Version=2")
    public List<Book> getAllBooksV2() { return bookRepository.findAll(); }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Book createBook(@RequestBody Book book) { return bookRepository.save(book); }

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_XML_VALUE)
    public List<Book> getAllBooksXml() { return bookRepository.findAll(); }

    @RequestMapping(method = RequestMethod.GET, path = {"/all", "/list"})
    public List<Book> getAllBooksAlias() { return bookRepository.findAll(); }
}
```

### 3.2 Complete Attribute Reference

| Attribute | Type | Description | Example |
|-----------|------|-------------|---------|
| `value` / `path` | `String[]` | URL path mappings | `"/users/{id}"`, `{"/a","/b"}` |
| `method` | `RequestMethod[]` | HTTP methods | `GET`, `POST`, `PUT` |
| `params` | `String[]` | Query parameter conditions | `"action=save"`, `"!admin"` |
| `headers` | `String[]` | Request header conditions | `"Accept=application/json"` |
| `consumes` | `String[]` | Media types the method accepts | `"application/json"` |
| `produces` | `String[]` | Media types the method produces | `"application/json"` |
| `name` | `String` | Handler name for debugging | `"getUserHandler"` |

### 3.3 params Attribute â€” Expressions

```java
@RequestMapping(method = RequestMethod.GET, params = "author")
@RequestMapping(method = RequestMethod.GET, params = "!author")
@RequestMapping(method = RequestMethod.GET, params = "author=tolkien")
@RequestMapping(method = RequestMethod.GET, params = "author!=tolkien")
```

### 3.4 headers Attribute â€” Expressions

```java
@RequestMapping(method = RequestMethod.GET, headers = "API-Version")
@RequestMapping(method = RequestMethod.GET, headers = "!X-Internal")
@RequestMapping(method = RequestMethod.GET, headers = "API-Version=2")
```

---

## 4. Composed @RequestMapping Annotations

### 4.1 @GetMapping

```java
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/books")
public class GetMappingController {

    private final BookRepository bookRepository;

    public GetMappingController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Book> getAllBooks() { return bookRepository.findAll(); }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id) {
        return bookRepository.findById(id)
            .orElseThrow(() -> new BookNotFoundException(id));
    }

    @GetMapping("/count")
    public long countBooks() { return bookRepository.count(); }

    @GetMapping("/by-isbn")
    public Book getBookByIsbn(@RequestParam String isbn) {
        return bookRepository.findAll().stream()
            .filter(b -> b.getIsbn().equals(isbn))
            .findFirst()
            .orElseThrow(() -> new BookNotFoundException("ISBN: " + isbn));
    }
}
```

### 4.2 @PostMapping

```java
import org.springframework.web.bind.annotation.PostMapping;

@PostMapping
@ResponseStatus(HttpStatus.CREATED)
public Book createBook(@RequestBody Book book) {
    return bookRepository.save(book);
}
```

### 4.3 @PutMapping â€” Full Update

```java
import org.springframework.web.bind.annotation.PutMapping;

@PutMapping("/{id}")
public Book updateBook(@PathVariable Long id, @RequestBody Book updated) {
    return bookRepository.findById(id)
        .map(existing -> {
            existing.setTitle(updated.getTitle());
            existing.setAuthor(updated.getAuthor());
            existing.setPrice(updated.getPrice());
            existing.setIsbn(updated.getIsbn());
            existing.setPublishedAt(updated.getPublishedAt());
            return bookRepository.save(existing);
        })
        .orElseThrow(() -> new BookNotFoundException(id));
}
```

### 4.4 @DeleteMapping

```java
import org.springframework.web.bind.annotation.DeleteMapping;

@DeleteMapping("/{id}")
@ResponseStatus(HttpStatus.NO_CONTENT)
public void deleteBook(@PathVariable Long id) {
    bookRepository.deleteById(id)
        .orElseThrow(() -> new BookNotFoundException(id));
}
```

### 4.5 @PatchMapping â€” Partial Update

```java
import org.springframework.web.bind.annotation.PatchMapping;
import java.util.Map;

@PatchMapping("/{id}")
public Book partialUpdateBook(@PathVariable Long id, @RequestBody Map<String, Object> updates) {
    return bookRepository.findById(id)
        .map(existing -> {
            if (updates.containsKey("title")) existing.setTitle((String) updates.get("title"));
            if (updates.containsKey("author")) existing.setAuthor((String) updates.get("author"));
            if (updates.containsKey("price")) existing.setPrice(new BigDecimal(updates.get("price").toString()));
            if (updates.containsKey("isbn")) existing.setIsbn((String) updates.get("isbn"));
            return bookRepository.save(existing);
        })
        .orElseThrow(() -> new BookNotFoundException(id));
}
```

### 4.6 All Composed Annotations Summary

| Annotation | Equivalent to | HTTP Method |
|------------|---------------|-------------|
| `@GetMapping` | `@RequestMapping(method=GET)` | GET |
| `@PostMapping` | `@RequestMapping(method=POST)` | POST |
| `@PutMapping` | `@RequestMapping(method=PUT)` | PUT |
| `@DeleteMapping` | `@RequestMapping(method=DELETE)` | DELETE |
| `@PatchMapping` | `@RequestMapping(method=PATCH)` | PATCH |

Each composed annotation supports `value`/`path`, `params`, `headers`, `consumes`, and `produces`.

---

## 5. Request Data Extraction

### 5.1 @PathVariable â€” URI Template Variables

```java
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api")
public class PathVariableController {

    private final BookRepository bookRepository;

    public PathVariableController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/books/{id}")
    public Book getBookById(@PathVariable Long id) {
        return bookRepository.findById(id)
            .orElseThrow(() -> new BookNotFoundException(id));
    }

    @GetMapping("/authors/{authorId}/books/{bookId}")
    public Book getAuthorBook(@PathVariable Long authorId, @PathVariable Long bookId) {
        return bookRepository.findById(bookId)
            .orElseThrow(() -> new BookNotFoundException(bookId));
    }

    @GetMapping("/books/{slug}")
    public Book getBookBySlug(@PathVariable("slug") String bookSlug) {
        return bookRepository.findAll().stream()
            .filter(b -> b.getTitle().toLowerCase().replace(" ", "-").equals(bookSlug))
            .findFirst()
            .orElseThrow(() -> new BookNotFoundException("Slug: " + bookSlug));
    }

    @GetMapping("/books/{bookId}/comments/{commentId:\\d+}")
    public String getComment(@PathVariable Long bookId, @PathVariable Long commentId) {
        return "Comment " + commentId + " for book " + bookId;
    }
}
```

### 5.2 @RequestParam â€” Query Parameters

```java
import org.springframework.web.bind.annotation.RequestParam;
import java.util.Optional;

@RestController
@RequestMapping("/api/books")
public class RequestParamController {

    private final BookRepository bookRepository;

    public RequestParamController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Book> getAllBooks(@RequestParam(required = false) String author) {
        if (author != null) return bookRepository.findByAuthor(author);
        return bookRepository.findAll();
    }

    @GetMapping("/paged")
    public List<Book> getBooksPaged(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "id") String sort) {
        return bookRepository.findAll().stream()
            .skip(page * size).limit(size).collect(Collectors.toList());
    }

    @GetMapping("/search")
    public List<Book> searchBooks(
            @RequestParam String q,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) BigDecimal minPrice,
            @RequestParam(required = false) BigDecimal maxPrice) {
        return bookRepository.findAll().stream()
            .filter(b -> b.getTitle().toLowerCase().contains(q.toLowerCase()))
            .filter(b -> minPrice == null || b.getPrice().compareTo(minPrice) >= 0)
            .filter(b -> maxPrice == null || b.getPrice().compareTo(maxPrice) <= 0)
            .collect(Collectors.toList());
    }

    @GetMapping("/ids")
    public List<Book> getBooksByIds(@RequestParam List<Long> id) {
        return id.stream()
            .map(bookRepository::findById).filter(Optional::isPresent).map(Optional::get)
            .collect(Collectors.toList());
    }

    @GetMapping("/optional")
    public List<Book> getBooksOptional(@RequestParam Optional<String> author) {
        return author.map(bookRepository::findByAuthor).orElseGet(bookRepository::findAll);
    }
}
```

| Attribute | Default | Description |
|-----------|---------|-------------|
| `name` / `value` | Method parameter name | Query parameter name |
| `required` | `true` | Whether the parameter is required |
| `defaultValue` | `null` | Default value (implies `required=false`) |

### 5.3 @RequestHeader â€” HTTP Headers

```java
import org.springframework.web.bind.annotation.RequestHeader;

@RestController
@RequestMapping("/api/books")
public class RequestHeaderController {

    private final BookRepository bookRepository;

    public RequestHeaderController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Book> getAllBooks(
            @RequestHeader("Accept-Language") String acceptLanguage,
            @RequestHeader(value = "X-Request-Id", required = false) String requestId,
            @RequestHeader(value = "User-Agent", defaultValue = "Unknown") String userAgent) {
        System.out.println("Language: " + acceptLanguage);
        System.out.println("Request ID: " + requestId);
        return bookRepository.findAll();
    }

    @GetMapping("/headers")
    public Map<String, String> getAllHeaders(@RequestHeader Map<String, String> allHeaders) {
        return allHeaders;
    }

    @GetMapping("/content-length")
    public String getContentLength(@RequestHeader("Content-Length") Long contentLength) {
        return "Content length: " + contentLength + " bytes";
    }
}
```

### 5.4 @RequestBody â€” Request Body

```java
import org.springframework.web.bind.annotation.RequestBody;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/books")
public class RequestBodyController {

    private final BookRepository bookRepository;

    public RequestBodyController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Book createBook(@Valid @RequestBody Book book) { return bookRepository.save(book); }

    @PostMapping("/raw")
    public String createRawBook(@RequestBody String rawBody) {
        return "Received raw body: " + rawBody;
    }

    @PostMapping("/binary")
    public byte[] createBinaryBook(@RequestBody byte[] data) {
        return ("Processed " + data.length + " bytes").getBytes();
    }
}
```

### 5.5 @RequestAttribute â€” Request Scoped Attributes

```java
import org.springframework.web.bind.annotation.RequestAttribute;

@RestController
@RequestMapping("/api")
public class RequestAttributeController {

    @GetMapping("/profile")
    public Map<String, Object> getProfile(
            @RequestAttribute("authenticatedUser") String userId,
            @RequestAttribute(value = "requestStartTime", required = false) Long startTime) {
        Map<String, Object> profile = new HashMap<>();
        profile.put("userId", userId);
        if (startTime != null) profile.put("processingTimeMs", System.currentTimeMillis() - startTime);
        return profile;
    }
}
```

Example filter:

```java
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import java.io.IOException;

@Component
public class RequestAttributeFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        httpRequest.setAttribute("authenticatedUser", "user-42");
        httpRequest.setAttribute("requestStartTime", System.currentTimeMillis());
        chain.doFilter(request, response);
    }
}
```

### 5.6 @MatrixVariable â€” Matrix Parameters

Step 1 â€” Enable matrix variables:

```java
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.util.UrlPathHelper;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
        UrlPathHelper urlPathHelper = new UrlPathHelper();
        urlPathHelper.setRemoveSemicolonContent(false);
        configurer.setUrlPathHelper(urlPathHelper);
    }
}
```

Step 2 â€” Use @MatrixVariable:

```java
import org.springframework.web.bind.annotation.MatrixVariable;

@RestController
@RequestMapping("/api/books")
public class MatrixVariableController {

    // GET /api/books/42;q=2;format=detailed
    @GetMapping("/{id}")
    public Book getBookWithOptions(@PathVariable Long id,
            @MatrixVariable(pathVar = "id") Map<String, String> matrixVars) {
        System.out.println("Matrix vars: " + matrixVars);
        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
    }

    // GET /api/books/filter;author=Bloch;year=2018
    @GetMapping(path = "/filter")
    public List<Book> filterBooks(@MatrixVariable String author,
            @MatrixVariable(required = false) Integer year) {
        return bookRepository.findByAuthor(author);
    }

    // Multiple path segments with matrix vars
    // GET /api/books/42/reviews;stars=5;sort=date
    @GetMapping("/{id}/reviews")
    public String getReviews(@PathVariable Long id,
            @MatrixVariable(value = "stars", pathVar = "id", required = false) Integer stars,
            @MatrixVariable(value = "sort", pathVar = "reviews") String sort) {
        return "Book " + id + " reviews sort: " + sort + ", stars: " + stars;
    }
}
```

### 5.7 Parameter Type Conversion

Spring automatically converts request parameters, path variables, and headers to various types:

```java
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.Locale;

@RestController
@RequestMapping("/api")
public class ConversionController {

    @GetMapping("/convert")
    public String conversionExamples(
            @RequestParam int count,
            @RequestParam boolean active,
            @RequestParam LocalDate date,
            @RequestParam BigDecimal amount,
            @RequestParam Locale locale,
            @RequestParam UUID uuid) {
        return String.format("count=%d, active=%b, date=%s, amount=%s, locale=%s",
            count, active, date, amount, locale);
    }
}
```

Custom converter:

```java
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class StringToPhoneNumberConverter implements Converter<String, PhoneNumber> {
    @Override
    public PhoneNumber convert(String source) {
        String cleaned = source.replaceAll("[\\s\\-()]", "");
        return new PhoneNumber(cleaned.substring(0, 3), cleaned.substring(3, 6), cleaned.substring(6));
    }
}
```


## 6. Response Handling

### 6.1 @ResponseStatus

Sets the HTTP status code on successful responses:

```java
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/books")
public class ResponseStatusController {

    private final BookRepository bookRepository;

    public ResponseStatusController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Book createBook(@RequestBody Book book) { return bookRepository.save(book); }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBook(@PathVariable Long id) {
        bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
        bookRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Book updateBook(@PathVariable Long id, @RequestBody Book book) {
        return bookRepository.findById(id)
            .map(existing -> {
                existing.setTitle(book.getTitle());
                existing.setAuthor(book.getAuthor());
                existing.setPrice(book.getPrice());
                return bookRepository.save(existing);
            })
            .orElseThrow(() -> new BookNotFoundException(id));
    }
}
```

### 6.2 ResponseEntity â€” Full Control

```java
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import java.net.URI;

@RestController
@RequestMapping("/api/books")
public class ResponseEntityController {

    private final BookRepository bookRepository;

    public ResponseEntityController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        return ResponseEntity.ok(bookRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBook(@PathVariable Long id) {
        return bookRepository.findById(id)
            .map(book -> ResponseEntity.ok()
                .header("X-Book-Location", "shelf-a-42")
                .body(book))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Book> createBook(@RequestBody Book book) {
        Book saved = bookRepository.save(book);
        URI location = URI.create("/api/books/" + saved.getId());
        return ResponseEntity.created(location).body(saved);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        return bookRepository.findById(id)
            .map(book -> {
                bookRepository.deleteById(id);
                return ResponseEntity.<Void>noContent().build();
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/conditional")
    public ResponseEntity<List<Book>> getBooksIfModified() {
        List<Book> books = bookRepository.findAll();
        return ResponseEntity.ok().eTag(Integer.toHexString(books.hashCode())).body(books);
    }
}
```

| Method | Status | Use Case |
|--------|--------|----------|
| `ResponseEntity.ok(body)` | 200 | Success with body |
| `ResponseEntity.created(URI)` | 201 | Resource created |
| `ResponseEntity.accepted()` | 202 | Async accepted |
| `ResponseEntity.noContent()` | 204 | Success, no body |
| `ResponseEntity.badRequest()` | 400 | Bad request |
| `ResponseEntity.notFound()` | 404 | Resource not found |
| `ResponseEntity.status(HttpStatus)` | Custom | Any status |

### 6.3 ResponseEntity with Headers Builder

```java
@GetMapping("/{id}")
public ResponseEntity<Book> getBookComplete(@PathVariable Long id) {
    return bookRepository.findById(id)
        .map(book -> ResponseEntity.ok()
            .contentType(MediaType.APPLICATION_JSON)
            .header("Cache-Control", "max-age=3600")
            .header("ETag", "\"" + book.hashCode() + "\"")
            .allow(HttpMethod.GET, HttpMethod.PUT, HttpMethod.DELETE)
            .lastModified(book.getUpdatedAt().toEpochSecond(java.time.ZoneOffset.UTC) * 1000)
            .location(URI.create("/api/books/" + book.getId()))
            .body(book))
        .orElseGet(() -> ResponseEntity.notFound()
            .header("X-Error-Code", "BOOK_NOT_FOUND")
            .build());
}
```

### 6.4 HttpHeaders â€” Building Custom Headers

```java
import org.springframework.http.HttpHeaders;
import org.springframework.http.CacheControl;

@RestController
@RequestMapping("/api/books")
public class HttpHeadersController {

    private final BookRepository bookRepository;

    public HttpHeadersController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookWithHeaders(@PathVariable Long id) {
        return bookRepository.findById(id)
            .map(book -> {
                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.APPLICATION_JSON);
                headers.setCacheControl(CacheControl.maxAge(java.time.Duration.ofHours(1)).mustRevalidate());
                headers.setETag("\"" + book.hashCode() + "\"");
                headers.setLastModified(book.getUpdatedAt()
                    .toInstant(java.time.ZoneOffset.UTC).toEpochMilli());
                headers.set("X-Book-Location", "section-a-42");
                headers.setExpires(java.time.ZonedDateTime.now().plusHours(1));
                return new ResponseEntity<>(book, headers, HttpStatus.OK);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/cookie")
    public ResponseEntity<String> setCookie() {
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.SET_COOKIE,
            "session=abc123; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600");
        return ResponseEntity.ok().headers(headers).body("Cookie set");
    }

    @GetMapping("/links")
    public ResponseEntity<Void> linkHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.LINK, "<http://api.example.com/books?page=1>; rel=\"first\"");
        headers.add(HttpHeaders.LINK, "<http://api.example.com/books?page=3>; rel=\"prev\"");
        headers.add(HttpHeaders.LINK, "<http://api.example.com/books?page=5>; rel=\"next\"");
        return ResponseEntity.noContent().headers(headers).build();
    }
}
```

### 6.5 ResponseStatusException

```java
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/books")
public class ResponseStatusExceptionController {

    private final BookRepository bookRepository;

    public ResponseStatusExceptionController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Book with id " + id + " not found"));
    }

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        if (book.getIsbn() == null || book.getIsbn().isBlank())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "ISBN is required");
        if (bookRepository.existsByIsbn(book.getIsbn()))
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                "Book with ISBN " + book.getIsbn() + " already exists");
        if (book.getPrice() != null && book.getPrice().compareTo(BigDecimal.ZERO) < 0)
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY,
                "Price must be non-negative");
        return bookRepository.save(book);
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book book) {
        if (!id.equals(book.getId()))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                "Path variable id does not match request body id");
        return bookRepository.findById(id)
            .map(existing -> bookRepository.save(book))
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Book with id " + id + " not found"));
    }
}
```

### 6.6 Custom Exception + @ResponseStatus

```java
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class BookNotFoundException extends RuntimeException {
    public BookNotFoundException(Long id) { super("Book not found with id: " + id); }
    public BookNotFoundException(String message) { super(message); }
}

@ResponseStatus(HttpStatus.CONFLICT)
public class BookConflictException extends RuntimeException {
    public BookConflictException(String isbn) { super("Book with ISBN " + isbn + " already exists"); }
}

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InvalidBookException extends RuntimeException {
    public InvalidBookException(String message) { super(message); }
}
```

Usage:

```java
@RestController
@RequestMapping("/api/books")
public class CustomExceptionController {

    private final BookRepository bookRepository;

    public CustomExceptionController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookRepository.findById(id)
            .orElseThrow(() -> new BookNotFoundException(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Book createBook(@RequestBody Book book) {
        if (book.getIsbn() == null || book.getIsbn().isBlank())
            throw new InvalidBookException("ISBN is required");
        if (bookRepository.existsByIsbn(book.getIsbn()))
            throw new BookConflictException(book.getIsbn());
        return bookRepository.save(book);
    }
}
```

### 6.7 @ExceptionHandler â€” Controller-Level

```java
import org.springframework.web.bind.annotation.ExceptionHandler;

@RestController
@RequestMapping("/api/books")
public class ExceptionHandlerController {

    private final BookRepository bookRepository;

    public ExceptionHandlerController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // ... handler methods ...

    @ExceptionHandler(BookNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, Object> handleBookNotFound(BookNotFoundException ex) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("error", "Book not found");
        body.put("message", ex.getMessage());
        body.put("timestamp", java.time.Instant.now().toString());
        return body;
    }

    @ExceptionHandler(InvalidBookException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, Object> handleInvalidBook(InvalidBookException ex) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("error", "Invalid book data");
        body.put("message", ex.getMessage());
        return body;
    }
}
```

### 6.8 @ControllerAdvice â€” Global Error Handling

```java
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.bind.MethodArgumentNotValidException;

import java.time.Instant;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BookNotFoundException.class)
    public ResponseEntity<Map<String, Object>> handleBookNotFound(
            BookNotFoundException ex, WebRequest request) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("timestamp", Instant.now().toString());
        body.put("status", 404);
        body.put("error", "Not Found");
        body.put("message", ex.getMessage());
        body.put("path", request.getDescription(false));
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidation(
            MethodArgumentNotValidException ex) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("timestamp", Instant.now().toString());
        body.put("status", 400);
        body.put("error", "Validation Failed");
        Map<String, String> errors = ex.getBindingResult()
            .getFieldErrors().stream()
            .collect(Collectors.toMap(f -> f.getField(), f -> f.getDefaultMessage(), (a, b) -> a));
        body.put("fieldErrors", errors);
        return ResponseEntity.badRequest().body(body);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<Map<String, Object>> handleTypeMismatch(
            MethodArgumentTypeMismatchException ex) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("timestamp", Instant.now().toString());
        body.put("status", 400);
        body.put("error", "Type Mismatch");
        body.put("message", "Parameter '" + ex.getName()
            + "' should be of type " + ex.getRequiredType().getSimpleName());
        return ResponseEntity.badRequest().body(body);
    }

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<Map<String, Object>> handleResponseStatus(
            ResponseStatusException ex) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("timestamp", Instant.now().toString());
        body.put("status", ex.getStatusCode().value());
        body.put("error", ex.getStatusCode().toString());
        body.put("message", ex.getReason());
        return ResponseEntity.status(ex.getStatusCode()).body(body);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleAllUncaught(
            Exception ex, WebRequest request) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("timestamp", Instant.now().toString());
        body.put("status", 500);
        body.put("error", "Internal Server Error");
        body.put("message", ex.getMessage());
        body.put("path", request.getDescription(false));
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body);
    }
}
```

---

## 7. Content Negotiation

### 7.1 How Content Negotiation Works

Content negotiation determines the media type (JSON, XML, etc.) used for request/response bodies based on:

1. **Accept header** (default and most common)
2. **File extension** (e.g., `.json` or `.xml`)
3. **Query parameter** (e.g., `?format=json`)
4. **Parameter strategy** (e.g., `?mediaType=json`)

### 7.2 Default Content Negotiation

By default, Spring Boot uses the `Accept` header:

```bash
curl -H "Accept: application/json" http://localhost:8080/api/books
curl -H "Accept: application/xml" http://localhost:8080/api/books
```

### 7.3 Configuring Content Negotiation

```java
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.http.MediaType;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer
            .favorParameter(false)
            .favorPathExtension(true)
            .favorParameter(true)
            .parameterName("format")
            .ignoreAcceptHeader(false)
            .defaultContentType(MediaType.APPLICATION_JSON)
            .mediaType("json", MediaType.APPLICATION_JSON)
            .mediaType("xml", MediaType.APPLICATION_XML)
            .mediaType("yaml", new MediaType("application", "x-yaml"));
    }
}
```

### 7.4 Extension-Based Strategy

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer
            .favorPathExtension(true)
            .favorParameter(false)
            .ignoreAcceptHeader(true)
            .defaultContentType(MediaType.APPLICATION_JSON)
            .mediaType("json", MediaType.APPLICATION_JSON)
            .mediaType("xml", MediaType.APPLICATION_XML);
    }
}
```

### 7.5 Parameter-Based Strategy

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer
            .favorPathExtension(false)
            .favorParameter(true)
            .parameterName("format")
            .ignoreAcceptHeader(true)
            .defaultContentType(MediaType.APPLICATION_JSON)
            .mediaType("json", MediaType.APPLICATION_JSON)
            .mediaType("xml", MediaType.APPLICATION_XML);
    }
}
```

### 7.6 ContentNegotiationManager â€” Programmatic Use

```java
import org.springframework.web.accept.ContentNegotiationManager;
import org.springframework.http.MediaType;
import jakarta.servlet.http.HttpServletRequest;

@Service
public class ContentNegotiationService {

    private final ContentNegotiationManager contentNegotiationManager;

    public ContentNegotiationService(ContentNegotiationManager contentNegotiationManager) {
        this.contentNegotiationManager = contentNegotiationManager;
    }

    public List<MediaType> resolveMediaTypes(HttpServletRequest request) {
        try { return contentNegotiationManager.resolveMediaTypes(request); }
        catch (Exception e) { return List.of(MediaType.APPLICATION_JSON); }
    }

    public boolean isJsonRequested(HttpServletRequest request) {
        return resolveMediaTypes(request).stream()
            .anyMatch(mt -> mt.includes(MediaType.APPLICATION_JSON));
    }
}
```

### 7.7 Controller-Level Content Negotiation

```java
import org.springframework.http.MediaType;

@RestController
@RequestMapping("/api/books")
public class ControllerNegotiationController {

    private final BookRepository bookRepository;

    public ControllerNegotiationController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Book> getBooksJson() { return bookRepository.findAll(); }

    @GetMapping(produces = MediaType.APPLICATION_XML_VALUE)
    public List<Book> getBooksXml() { return bookRepository.findAll(); }

    @GetMapping(path = "/{id}", produces = {
        MediaType.APPLICATION_JSON_VALUE,
        MediaType.APPLICATION_XML_VALUE
    })
    public Book getBook(@PathVariable Long id) {
        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
    }

    @GetMapping(path = "/v2", produces = "application/vnd.example.book.v2+json")
    public List<Book> getBooksV2() { return bookRepository.findAll(); }
}
```

### 7.8 Custom ContentNegotiationStrategy

```java
import org.springframework.web.accept.ContentNegotiationStrategy;
import org.springframework.http.MediaType;
import jakarta.servlet.http.HttpServletRequest;
import java.util.List;

public class CustomHeaderNegotiationStrategy implements ContentNegotiationStrategy {

    private static final String CUSTOM_HEADER = "X-Format";

    @Override
    public List<MediaType> resolveMediaTypes(HttpServletRequest request) {
        String format = request.getHeader(CUSTOM_HEADER);
        if (format == null) return MEDIA_TYPE_ALL_LIST;

        return switch (format.toLowerCase()) {
            case "json" -> List.of(MediaType.APPLICATION_JSON);
            case "xml" -> List.of(MediaType.APPLICATION_XML);
            case "yaml" -> List.of(new MediaType("application", "x-yaml"));
            default -> List.of(MediaType.APPLICATION_JSON);
        };
    }
}
```

Register it:

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer.strategies(List.of(
            new CustomHeaderNegotiationStrategy(),
            new org.springframework.web.accept.HeaderContentNegotiationStrategy()
        ));
        configurer.defaultContentType(MediaType.APPLICATION_JSON);
    }
}
```

### 7.9 Default Content Type

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer
            .defaultContentType(MediaType.APPLICATION_JSON)
            .defaultContentTypeStrategy(request -> {
                if (request.getRequestURI().endsWith("/health"))
                    return List.of(MediaType.APPLICATION_JSON);
                return List.of(MediaType.APPLICATION_JSON);
            });
    }
}
```

---

## 8. HTTP Method Semantics

### 8.1 GET â€” Safe, Idempotent, Cacheable

```java
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/books")
public class GetSemanticsController {

    private final BookRepository bookRepository;

    public GetSemanticsController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Book> getAllBooks() { return bookRepository.findAll(); }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
    }

    @GetMapping("/search")
    public List<Book> searchBooks(@RequestParam String author,
            @RequestParam(required = false) BigDecimal minPrice) {
        return bookRepository.findByAuthor(author).stream()
            .filter(b -> minPrice == null || b.getPrice().compareTo(minPrice) >= 0)
            .collect(Collectors.toList());
    }
}
```

**GET characteristics**: Safe (no state modification), Idempotent (same result every time), Cacheable (browsers/proxies cache), Request body ignored.

### 8.2 POST â€” Create, Non-Idempotent

```java
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/api/books")
public class PostSemanticsController {

    private final BookRepository bookRepository;

    public PostSemanticsController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @PostMapping
    public ResponseEntity<Book> createBook(@Valid @RequestBody Book book) {
        Book saved = bookRepository.save(book);
        return ResponseEntity.created(URI.create("/api/books/" + saved.getId())).body(saved);
    }

    @PostMapping("/calculate-discount")
    public ResponseEntity<BigDecimal> calculateDiscount(@RequestBody Map<String, Object> request) {
        BigDecimal price = new BigDecimal(request.get("price").toString());
        return ResponseEntity.ok(price.multiply(new BigDecimal("0.9")));
    }
}
```

**POST characteristics**: Not safe (modifies state), Not idempotent (repeated calls create multiple resources), Not cacheable, Returns `201 Created` with `Location` header.

### 8.3 PUT â€” Full Replacement, Idempotent

```java
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/books")
public class PutSemanticsController {

    private final BookRepository bookRepository;

    public PutSemanticsController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @PutMapping("/{id}")
    public Book fullyUpdateBook(@PathVariable Long id, @Valid @RequestBody Book book) {
        return bookRepository.findById(id)
            .map(existing -> {
                existing.setTitle(book.getTitle());
                existing.setAuthor(book.getAuthor());
                existing.setPrice(book.getPrice());
                existing.setIsbn(book.getIsbn());
                existing.setPublishedAt(book.getPublishedAt());
                return bookRepository.save(existing);
            })
            .orElseGet(() -> {
                book.setId(id);
                return bookRepository.save(book);
            });
    }

    @PutMapping("/upsert/{id}")
    public ResponseEntity<Book> upsertBook(@PathVariable Long id, @Valid @RequestBody Book book) {
        boolean exists = bookRepository.findById(id).isPresent();
        book.setId(id);
        Book saved = bookRepository.save(book);
        return exists ? ResponseEntity.ok(saved)
                      : ResponseEntity.created(URI.create("/api/books/" + id)).body(saved);
    }
}
```

**PUT characteristics**: Not safe (modifies state), Idempotent (same call N times = same result), Client specifies entire state, Optional upsert convention.

### 8.4 PATCH â€” Partial Update

```java
import org.springframework.web.bind.annotation.PatchMapping;

@RestController
@RequestMapping("/api/books")
public class PatchSemanticsController {

    private final BookRepository bookRepository;

    public PatchSemanticsController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @PatchMapping("/{id}")
    public Book partialUpdate(@PathVariable Long id, @RequestBody Map<String, Object> fields) {
        return bookRepository.findById(id)
            .map(book -> {
                fields.forEach((key, value) -> {
                    switch (key) {
                        case "title" -> book.setTitle((String) value);
                        case "author" -> book.setAuthor((String) value);
                        case "price" -> book.setPrice(new BigDecimal(value.toString()));
                        case "isbn" -> book.setIsbn((String) value);
                    }
                });
                return bookRepository.save(book);
            })
            .orElseThrow(() -> new BookNotFoundException(id));
    }
}
```

**PATCH characteristics**: Not safe (modifies state), Not necessarily idempotent, Client sends only the delta (differences), Supports JSON Patch (RFC 6902) and Merge Patch (RFC 7386) formats.

### 8.5 DELETE â€” Remove, Idempotent

```java
import org.springframework.web.bind.annotation.DeleteMapping;

@RestController
@RequestMapping("/api/books")
public class DeleteSemanticsController {

    private final BookRepository bookRepository;

    public DeleteSemanticsController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBook(@PathVariable Long id) {
        boolean existed = bookRepository.findById(id).isPresent();
        bookRepository.deleteById(id);
        if (!existed) throw new BookNotFoundException(id);
    }

    @DeleteMapping("/idempotent/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBookIdempotent(@PathVariable Long id) {
        bookRepository.deleteById(id);
    }

    @DeleteMapping("/conditional/{id}")
    public ResponseEntity<Void> conditionalDelete(
            @PathVariable Long id, @RequestHeader("If-Match") String ifMatch) {
        return bookRepository.findById(id)
            .map(book -> {
                String etag = "\"" + book.hashCode() + "\"";
                if (!etag.equals(ifMatch))
                    return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).<Void>build();
                bookRepository.deleteById(id);
                return ResponseEntity.<Void>noContent().build();
            })
            .orElse(ResponseEntity.notFound().build());
    }
}
```

**DELETE characteristics**: Not safe (removes resources), Idempotent (after first successful DELETE, resource is gone), Returns `204 No Content` or `404 Not Found`.

### 8.6 HTTP Methods Summary

| Method | Safe | Idempotent | Cacheable | Request Body | Response Body |
|--------|------|------------|-----------|--------------|---------------|
| GET | Yes | Yes | Yes | No | Resource(s) |
| POST | No | No | No | New resource | Created resource |
| PUT | No | Yes | No | Full resource | Updated resource |
| PATCH | No | No* | No | Partial delta | Updated resource |
| DELETE | No | Yes | No | No | Optional |

*PATCH idempotency depends on the patch format.

---

## 9. HTTP Status Codes

### 9.1 Complete Status Code Reference

```java
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/books")
public class StatusCodeDemoController {

    private final BookRepository bookRepository;

    public StatusCodeDemoController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/200")
    @ResponseStatus(HttpStatus.OK)
    public Book status200(@RequestParam Long id) {
        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Book status201(@RequestBody Book book) { return bookRepository.save(book); }

    @PostMapping("/async-import")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public String status202(@RequestBody List<Book> books) {
        return "Import queued with " + books.size() + " books";
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void status204(@PathVariable Long id) { bookRepository.deleteById(id); }

    @GetMapping("/old-path")
    public ResponseEntity<Void> status301() {
        return ResponseEntity.status(HttpStatus.MOVED_PERMANENTLY)
            .location(URI.create("/api/books")).build();
    }

    @GetMapping("/cached")
    public ResponseEntity<List<Book>> status304(
            @RequestHeader(value = "If-None-Match", required = false) String ifNoneMatch) {
        List<Book> books = bookRepository.findAll();
        String etag = "\"" + books.hashCode() + "\"";
        if (etag.equals(ifNoneMatch))
            return ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
        return ResponseEntity.ok().eTag(etag).body(books);
    }

    @GetMapping("/401")
    public ResponseEntity<String> status401() {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .header("WWW-Authenticate", "Bearer realm=\"api\"")
            .body("Authentication required");
    }

    @GetMapping("/403")
    public ResponseEntity<String> status403() {
        return ResponseEntity.status(HttpStatus.FORBIDDEN)
            .body("Insufficient permissions");
    }

    @PostMapping("/409")
    public Book status409(@RequestBody Book book) {
        if (bookRepository.existsByIsbn(book.getIsbn()))
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                "Book with ISBN " + book.getIsbn() + " already exists");
        return bookRepository.save(book);
    }

    @PostMapping("/422")
    public ResponseEntity<Book> status422(@RequestBody Book book) {
        if (book.getPrice() != null && book.getPrice().compareTo(BigDecimal.ZERO) < 0) {
            return ResponseEntity.unprocessableEntity().build();
        }
        return ResponseEntity.created(URI.create("/api/books/" + bookRepository.save(book).getId()))
            .body(book);
    }

    @GetMapping("/429")
    public ResponseEntity<String> status429() {
        return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
            .header("Retry-After", "60")
            .body("Rate limit exceeded");
    }

    @GetMapping("/500")
    public void status500() { throw new RuntimeException("Unexpected error"); }
}
```

### 9.2 Status Code Quick Reference

| Status | When to Use |
|--------|-------------|
| **200 OK** | Successful GET, PUT, PATCH with response body |
| **201 Created** | Successful POST that created a resource |
| **202 Accepted** | Request accepted for async processing |
| **204 No Content** | Successful DELETE or PUT/PATCH with no body |
| **301 Moved Permanently** | Resource has a new permanent URI |
| **304 Not Modified** | Conditional GET â€” cached version is fresh |
| **400 Bad Request** | Malformed syntax, missing parameters |
| **401 Unauthorized** | Missing or invalid authentication |
| **403 Forbidden** | Authenticated but lacking permissions |
| **404 Not Found** | Resource does not exist |
| **405 Method Not Allowed** | HTTP method not supported |
| **406 Not Acceptable** | Cannot produce requested media type |
| **409 Conflict** | Resource state conflict (e.g., duplicate) |
| **415 Unsupported Media Type** | Request body format not supported |
| **422 Unprocessable Entity** | Semantic validation failure |
| **429 Too Many Requests** | Rate limit exceeded |
| **500 Internal Server Error** | Unexpected server failure |
| **503 Service Unavailable** | Temporary overload or maintenance |

---

## 10. HATEOAS

### 10.1 What is HATEOAS?

HATEOAS (Hypermedia as the Engine of Application State) is Level 3 of the Richardson Maturity Model. Responses include links that tell clients what actions are available next, enabling discoverability.

### 10.2 Maven/Gradle Dependencies

```groovy
// build.gradle
implementation 'org.springframework.boot:spring-boot-starter-hateoas'
```

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-hateoas</artifactId>
</dependency>
```

### 10.3 RepresentationModel â€” The Base Class

```java
import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;

@Relation(collectionRelation = "books", itemRelation = "book")
public class BookModel extends RepresentationModel<BookModel> {
    private Long id;
    private String isbn;
    private String title;
    private String author;
    private BigDecimal price;

    public BookModel() {}

    public BookModel(Book book) {
        this.id = book.getId();
        this.isbn = book.getIsbn();
        this.title = book.getTitle();
        this.author = book.getAuthor();
        this.price = book.getPrice();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getIsbn() { return isbn; }
    public void setIsbn(String isbn) { this.isbn = isbn; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }
}
```

### 10.4 EntityModel â€” Single Resource

```java
import org.springframework.hateoas.EntityModel;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@RestController
@RequestMapping("/api/hateoas/books")
public class BookHateoasController {

    private final BookRepository bookRepository;

    public BookHateoasController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/{id}")
    public EntityModel<BookModel> getBook(@PathVariable Long id) {
        Book book = bookRepository.findById(id)
            .orElseThrow(() -> new BookNotFoundException(id));

        BookModel bookModel = new BookModel(book);
        bookModel.add(linkTo(methodOn(BookHateoasController.class).getBook(id)).withSelfRel());
        bookModel.add(linkTo(methodOn(BookHateoasController.class).getAllBooks()).withRel("books"));
        bookModel.add(linkTo(methodOn(BookHateoasController.class).updateBook(id, null)).withRel("update"));
        bookModel.add(linkTo(methodOn(BookHateoasController.class).deleteBook(id)).withRel("delete"));

        return EntityModel.of(bookModel);
    }

    // Placeholder methods for link building
    public List<BookModel> getAllBooks() { return List.of(); }
    public BookModel updateBook(Long id, BookModel b) { return null; }
    public void deleteBook(Long id) {}
}
```

### 10.5 CollectionModel â€” Resource Collections

```java
import org.springframework.hateoas.CollectionModel;

@GetMapping
public CollectionModel<EntityModel<BookModel>> getAllBooks() {
    List<EntityModel<BookModel>> bookModels = bookRepository.findAll().stream()
        .map(book -> {
            BookModel bookModel = new BookModel(book);
            bookModel.add(linkTo(methodOn(BookHateoasController.class)
                .getBook(book.getId())).withSelfRel());
            return EntityModel.of(bookModel);
        })
        .collect(Collectors.toList());

    return CollectionModel.of(bookModels,
        linkTo(methodOn(BookHateoasController.class).getAllBooks()).withSelfRel());
}
```

### 10.6 Link and WebMvcLinkBuilder

```java
import org.springframework.hateoas.Link;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@RestController
@RequestMapping("/api/hateoas")
public class LinkBuilderController {

    @GetMapping("/links-demo")
    public CollectionModel<BookModel> linksDemo() {
        Link selfLink = linkTo(methodOn(LinkBuilderController.class).linksDemo()).withSelfRel();
        Link booksLink = linkTo(methodOn(BookHateoasController.class).getAllBooks()).withRel("books");
        Link classLink = linkTo(BookHateoasController.class).withRel("book-controller");
        Link specificBookLink = linkTo(methodOn(BookHateoasController.class).getBook(1L)).withRel("first-book");
        Link searchLink = Link.of("/api/hateoas/books{?author,minPrice}", "search").withType("application/json");
        Link createLink = linkTo(methodOn(BookHateoasController.class).createBook(null)).withRel("create");
        Link customBase = Link.of("http://cdn.example.com/resources/books/{id}", "cdn").expand(42L);

        CollectionModel<BookModel> result = CollectionModel.empty();
        result.add(selfLink, booksLink, classLink, specificBookLink, searchLink, createLink, customBase);
        return result;
    }

    public BookModel createBook(BookModel b) { return null; }

    @GetMapping("/dynamic/{id}")
    public EntityModel<BookModel> getWithDynamicLinks(@PathVariable Long id) {
        Book book = bookRepository.findById(id)
            .orElseThrow(() -> new BookNotFoundException(id));
        BookModel bookModel = new BookModel(book);
        bookModel.add(linkTo(methodOn(LinkBuilderController.class).getWithDynamicLinks(id)).withSelfRel());
        if (canEdit(book))
            bookModel.add(linkTo(methodOn(BookHateoasController.class).updateBook(id, null))
                .withRel("edit").withType("PUT"));
        if (canDelete(book))
            bookModel.add(linkTo(methodOn(BookHateoasController.class).deleteBook(id)).withRel("delete"));
        return EntityModel.of(bookModel);
    }

    private boolean canEdit(Book book) { return true; }
    private boolean canDelete(Book book) { return book.getId() > 5; }
}
```

### 10.7 PagedModel â€” Paginated Collections

```java
import org.springframework.hateoas.PagedModel;
import org.springframework.hateoas.PagedModel.PageMetadata;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

@GetMapping("/paged")
public PagedModel<EntityModel<BookModel>> getPagedBooks(Pageable pageable) {
    List<Book> allBooks = bookRepository.findAll();
    int start = (int) pageable.getOffset();
    int end = Math.min(start + pageable.getPageSize(), allBooks.size());
    List<Book> pageContent = allBooks.subList(start, end);

    List<EntityModel<BookModel>> bookModels = pageContent.stream()
        .map(book -> {
            BookModel model = new BookModel(book);
            model.add(linkTo(methodOn(BookHateoasController.class).getBook(book.getId())).withSelfRel());
            return EntityModel.of(model);
        })
        .collect(Collectors.toList());

    Page<Book> bookPage = new PageImpl<>(pageContent, pageable, allBooks.size());
    PageMetadata metadata = new PageMetadata(
        pageable.getPageSize(), pageable.getPageNumber(),
        bookPage.getTotalElements(), bookPage.getTotalPages());

    Link selfLink = linkTo(methodOn(BookHateoasController.class).getPagedBooks(pageable)).withSelfRel();
    Link nextLink = linkTo(methodOn(BookHateoasController.class).getPagedBooks(pageable.next())).withRel("next");

    return PagedModel.of(bookModels, metadata, selfLink, nextLink);
}
```

### 10.8 RepresentationModelProcessor

```java
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class BookModelProcessor implements RepresentationModelProcessor<EntityModel<BookModel>> {

    @Override
    public EntityModel<BookModel> process(EntityModel<BookModel> model) {
        BookModel book = model.getContent();
        if (book != null) {
            model.add(linkTo(methodOn(BookHateoasController.class).getBook(book.getId())).withRel("self"));
            model.add(linkTo(methodOn(BookHateoasController.class).getAllBooks()).withRel("collection"));
        }
        return model;
    }
}
```

### 10.9 Complete HATEOAS Response Example

```json
{
  "id": 1,
  "isbn": "978-0-13-468599-1",
  "title": "Effective Java",
  "author": "Joshua Bloch",
  "price": 54.99,
  "_links": {
    "self": { "href": "http://localhost:8080/api/hateoas/books/1" },
    "books": { "href": "http://localhost:8080/api/hateoas/books" },
    "update": { "href": "http://localhost:8080/api/hateoas/books/1", "method": "PUT" },
    "delete": { "href": "http://localhost:8080/api/hateoas/books/1", "method": "DELETE" }
  }
}
```


## 11. API Versioning Strategies

### 11.1 Why API Versioning

API versioning allows you to evolve your API without breaking existing clients.

| Strategy | Example | Pros | Cons |
|----------|---------|------|------|
| URI Path | `/api/v1/books` | Simple, explicit | Violates resource identity |
| Request Parameter | `/api/books?version=1` | Simple | URL pollution, caching |
| Custom Header | `X-API-Version: 2` | Clean URLs | Not REST-idiomatic |
| Accept Header | `Accept: application/vnd.example.v2+json` | Most RESTful | Complex configuration |

### 11.2 URI Path Versioning

```java
@RestController
@RequestMapping("/api/v1/books")
public class BookControllerV1 {

    private final BookRepository bookRepository;

    public BookControllerV1(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Book> getAllBooks() { return bookRepository.findAll(); }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Book createBook(@RequestBody Book book) { return bookRepository.save(book); }
}

@RestController
@RequestMapping("/api/v2/books")
public class BookControllerV2 {

    private final BookRepository bookRepository;

    public BookControllerV2(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<BookV2> getAllBooks() {
        return bookRepository.findAll().stream().map(BookV2::new).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public BookV2 getBook(@PathVariable Long id) {
        return bookRepository.findById(id)
            .map(BookV2::new)
            .orElseThrow(() -> new BookNotFoundException(id));
    }
}

public class BookV2 {
    private Long id;
    private String isbn;
    private String title;
    private String author;
    private BigDecimal price;
    private String description;
    private List<String> tags;

    public BookV2() {}

    public BookV2(Book book) {
        this.id = book.getId();
        this.isbn = book.getIsbn();
        this.title = book.getTitle();
        this.author = book.getAuthor();
        this.price = book.getPrice();
        this.description = "";
        this.tags = List.of();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getIsbn() { return isbn; }
    public void setIsbn(String isbn) { this.isbn = isbn; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }
    public String getDescription() { return description; }
    public void setDescription(String d) { this.description = d; }
    public List<String> getTags() { return tags; }
    public void setTags(List<String> t) { this.tags = t; }
}
```

### 11.3 Request Parameter Versioning

```java
@RestController
@RequestMapping("/api/books")
public class BookParamVersionController {

    private final BookRepository bookRepository;

    public BookParamVersionController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<?> getAllBooks(@RequestParam(defaultValue = "1") String version) {
        return switch (version) {
            case "1" -> bookRepository.findAll();
            case "2" -> bookRepository.findAll().stream().map(BookV2::new).collect(Collectors.toList());
            default -> throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unsupported version: " + version);
        };
    }
}
```

### 11.4 Custom Header Versioning

```java
@RestController
@RequestMapping("/api/books")
public class BookHeaderVersionController {

    private final BookRepository bookRepository;

    public BookHeaderVersionController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public ResponseEntity<?> getAllBooks(@RequestHeader("X-API-Version") String apiVersion) {
        return switch (apiVersion) {
            case "1" -> ResponseEntity.ok(bookRepository.findAll());
            case "2" -> ResponseEntity.ok(
                bookRepository.findAll().stream().map(BookV2::new).collect(Collectors.toList()));
            default -> ResponseEntity.badRequest().body("Unsupported API version: " + apiVersion);
        };
    }
}
```

### 11.5 Accept Header (Media Type) Versioning

```java
@RestController
@RequestMapping("/api/books")
public class BookAcceptVersionController {

    private final BookRepository bookRepository;

    public BookAcceptVersionController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping(produces = "application/vnd.example.books.v1+json")
    public List<Book> getAllBooksV1() { return bookRepository.findAll(); }

    @GetMapping(produces = "application/vnd.example.books.v2+json")
    public List<BookV2> getAllBooksV2() {
        return bookRepository.findAll().stream().map(BookV2::new).collect(Collectors.toList());
    }

    @GetMapping(path = "/{id}", produces = "application/vnd.example.book.v1+json")
    public Book getBookV1(@PathVariable Long id) {
        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
    }

    @GetMapping(path = "/{id}", produces = "application/vnd.example.book.v2+json")
    public BookV2 getBookV2(@PathVariable Long id) {
        return bookRepository.findById(id).map(BookV2::new)
            .orElseThrow(() -> new BookNotFoundException(id));
    }
}
```

### 11.6 Versioning Strategy Decision Guide

```
Q: Is backwards compatibility critical?
  Yes â†’ Use Accept header or custom header
  No  â†’ Use URI path (simplest)

Q: Is the API public/external?
  Yes â†’ Accept header versioning (most RESTful)
  No  â†’ URI path or parameter (simpler)

Q: Do clients cache responses aggressively?
  Yes â†’ URI path (different URLs = different cache keys)
  No  â†’ Any strategy works
```

---

## 12. CORS (Cross-Origin Resource Sharing)

### 12.1 What is CORS?

CORS is a security mechanism that allows browsers to make cross-origin HTTP requests. A web page from `http://localhost:3000` cannot by default make AJAX requests to `http://api.example.com` without the server's permission.

### 12.2 @CrossOrigin â€” Controller-Level CORS

```java
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Book> getAllBooks() { return bookRepository.findAll(); }

    @GetMapping("/{id}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://myapp.example.com"},
                 allowedHeaders = "*")
    public Book getBook(@PathVariable Long id) {
        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
    }

    @PostMapping
    @CrossOrigin(origins = "https://admin.example.com",
                 methods = {RequestMethod.POST, RequestMethod.OPTIONS},
                 allowedHeaders = {"Content-Type", "Authorization"},
                 exposedHeaders = {"X-Request-Id", "Location"},
                 allowCredentials = "true",
                 maxAge = 3600)
    @ResponseStatus(HttpStatus.CREATED)
    public Book createBook(@RequestBody Book book) { return bookRepository.save(book); }

    @GetMapping("/dev")
    @CrossOrigin(origins = "*")
    public List<Book> getAllBooksDev() { return bookRepository.findAll(); }
}
```

### 12.3 @CrossOrigin Attributes

| Attribute | Type | Description | Default |
|-----------|------|-------------|---------|
| `origins` | `String[]` | Allowed origins | `*` |
| `methods` | `RequestMethod[]` | Allowed HTTP methods | Method's methods |
| `allowedHeaders` | `String[]` | Allowed request headers | `*` |
| `exposedHeaders` | `String[]` | Headers exposed to browser | `[]` |
| `allowCredentials` | `String` | Whether to allow credentials | `""` (not set) |
| `maxAge` | `long` | Max age of preflight cache | `-1` (no cache) |

### 12.4 GlobalCorsConfiguration

```java
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration(proxyBeanMethods = false)
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins("http://localhost:3000", "https://myapp.example.com", "https://admin.example.com")
            .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS")
            .allowedHeaders("Content-Type", "Authorization", "X-Request-Id", "X-API-Version")
            .exposedHeaders("X-Request-Id", "Location", "X-RateLimit-Remaining", "X-RateLimit-Reset")
            .allowCredentials(true)
            .maxAge(3600);

        registry.addMapping("/api/public/**")
            .allowedOrigins("*")
            .allowedMethods("GET")
            .allowedHeaders("*")
            .maxAge(1800);

        registry.addMapping("/api/admin/**")
            .allowedOrigins("https://admin.example.com")
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("Content-Type", "Authorization")
            .allowCredentials(true)
            .maxAge(300);
    }
}
```

### 12.5 CORS with Properties

```properties
# application.properties
spring.web.cors.allowed-origins=http://localhost:3000,https://myapp.example.com
spring.web.cors.allowed-methods=GET,POST,PUT,DELETE,PATCH
spring.web.cors.allowed-headers=Content-Type,Authorization
spring.web.cors.exposed-headers=X-Request-Id,Location
spring.web.cors.allow-credentials=true
spring.web.cors.max-age=3600
```

### 12.6 CORS Error Diagnostics

```
Error: No 'Access-Control-Allow-Origin' header
  Solution: Configure @CrossOrigin or GlobalCorsConfiguration

Error: Preflight request doesn't pass access control check
  Solution: Ensure OPTIONS requests are handled (Spring does this by default)

Error: Cannot set 'Access-Control-Allow-Origin' more than once
  Solution: Don't duplicate CORS config (controller + global = conflict)

Error: Credentials header cannot be '*'
  Solution: When allowCredentials=true, specify exact origins, not '*'
```

---

## 13. REST Best Practices

### 13.1 Naming Conventions

```java
// NO â€” verbs in URLs
@GetMapping("/getAllBooks")
@PostMapping("/createBook")
@DeleteMapping("/removeBookById")

// YES â€” nouns, plural resources
@GetMapping("/api/books")
@PostMapping("/api/books")
@DeleteMapping("/api/books/{id}")

// NO â€” inconsistent naming
/api/get-book
/api/Book
/api/booksList

// YES â€” consistent, lowercase, kebab-case
/api/books
/api/book-reviews
/api/published-authors
```

### 13.2 Resource Hierarchy

```java
@RestController
@RequestMapping("/api")
public class HierarchicalController {

    @GetMapping("/books")
    public List<Book> getBooks() { return List.of(); }

    @GetMapping("/books/{bookId}")
    public Book getBook(@PathVariable Long bookId) { return null; }

    @GetMapping("/books/{bookId}/reviews")
    public List<Review> getReviews(@PathVariable Long bookId) { return List.of(); }

    @GetMapping("/books/{bookId}/reviews/{reviewId}")
    public Review getReview(@PathVariable Long bookId, @PathVariable Long reviewId) { return null; }

    @GetMapping("/books/{bookId}/reviews/{reviewId}/comments")
    public List<Comment> getComments(@PathVariable Long reviewId) { return List.of(); }
}
```

### 13.3 Pagination

```java
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageImpl;

@RestController
@RequestMapping("/api/books")
public class PaginationController {

    private final BookRepository bookRepository;

    public PaginationController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public Page<Book> getBooks(Pageable pageable) {
        List<Book> allBooks = bookRepository.findAll();
        int start = (int) pageable.getOffset();
        int end = Math.min(start + pageable.getPageSize(), allBooks.size());
        List<Book> pageContent = allBooks.subList(start, end);
        return new PageImpl<>(pageContent, pageable, allBooks.size());
    }

    @GetMapping("/manual")
    public Map<String, Object> getBooksManual(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        List<Book> allBooks = bookRepository.findAll();
        int total = allBooks.size();
        int totalPages = (int) Math.ceil((double) total / size);
        int start = page * size;
        int end = Math.min(start + size, total);
        List<Book> content = allBooks.subList(start, end);

        Map<String, Object> response = new LinkedHashMap<>();
        response.put("content", content);
        response.put("page", page);
        response.put("size", size);
        response.put("totalElements", total);
        response.put("totalPages", totalPages);
        response.put("first", page == 0);
        response.put("last", page >= totalPages - 1);
        return response;
    }

    @GetMapping("/cursor")
    public Map<String, Object> getBooksCursor(
            @RequestParam(required = false) Long after,
            @RequestParam(defaultValue = "20") int limit) {
        List<Book> allBooks = bookRepository.findAll();
        int startIndex = 0;
        if (after != null) {
            for (int i = 0; i < allBooks.size(); i++) {
                if (allBooks.get(i).getId().equals(after)) { startIndex = i + 1; break; }
            }
        }
        int endIndex = Math.min(startIndex + limit, allBooks.size());
        List<Book> pageContent = allBooks.subList(startIndex, endIndex);
        Long nextCursor = endIndex < allBooks.size() ? allBooks.get(endIndex - 1).getId() : null;

        Map<String, Object> response = new LinkedHashMap<>();
        response.put("content", pageContent);
        response.put("nextCursor", nextCursor);
        response.put("hasMore", nextCursor != null);
        response.put("limit", limit);
        return response;
    }
}
```

### 13.4 Filtering

```java
@RestController
@RequestMapping("/api/books")
public class FilteringController {

    private final BookRepository bookRepository;

    public FilteringController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Book> getBooks(
            @RequestParam(required = false) String author,
            @RequestParam(required = false) BigDecimal minPrice,
            @RequestParam(required = false) BigDecimal maxPrice,
            @RequestParam(required = false) String title) {
        return bookRepository.findAll().stream()
            .filter(b -> author == null || b.getAuthor().toLowerCase().contains(author.toLowerCase()))
            .filter(b -> minPrice == null || b.getPrice().compareTo(minPrice) >= 0)
            .filter(b -> maxPrice == null || b.getPrice().compareTo(maxPrice) <= 0)
            .filter(b -> title == null || b.getTitle().toLowerCase().contains(title.toLowerCase()))
            .collect(Collectors.toList());
    }

    @GetMapping("/filter")
    public List<Book> getBooksWithFilter(BookFilter filter) {
        return bookRepository.findAll().stream()
            .filter(filter::matches)
            .collect(Collectors.toList());
    }
}

public class BookFilter {
    private String author;
    private BigDecimal minPrice;
    private BigDecimal maxPrice;
    private String title;

    public boolean matches(Book book) {
        boolean matchAuthor = author == null || book.getAuthor().toLowerCase().contains(author.toLowerCase());
        boolean matchMinPrice = minPrice == null || book.getPrice().compareTo(minPrice) >= 0;
        boolean matchMaxPrice = maxPrice == null || book.getPrice().compareTo(maxPrice) <= 0;
        boolean matchTitle = title == null || book.getTitle().toLowerCase().contains(title.toLowerCase());
        return matchAuthor && matchMinPrice && matchMaxPrice && matchTitle;
    }

    public String getAuthor() { return author; }
    public void setAuthor(String a) { this.author = a; }
    public BigDecimal getMinPrice() { return minPrice; }
    public void setMinPrice(BigDecimal p) { this.minPrice = p; }
    public BigDecimal getMaxPrice() { return maxPrice; }
    public void setMaxPrice(BigDecimal p) { this.maxPrice = p; }
    public String getTitle() { return title; }
    public void setTitle(String t) { this.title = t; }
}
```

### 13.5 Sorting

```java
import org.springframework.data.domain.Sort;

@RestController
@RequestMapping("/api/books")
public class SortingController {

    private final BookRepository bookRepository;

    public SortingController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/sorted")
    public List<Book> getBooksSorted(
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDirection) {
        Comparator<Book> comparator = switch (sortBy) {
            case "title" -> Comparator.comparing(Book::getTitle);
            case "author" -> Comparator.comparing(Book::getAuthor);
            case "price" -> Comparator.comparing(Book::getPrice);
            default -> Comparator.comparing(Book::getId);
        };
        if ("desc".equalsIgnoreCase(sortDirection)) comparator = comparator.reversed();
        return bookRepository.findAll().stream().sorted(comparator).collect(Collectors.toList());
    }

    @GetMapping("/sort-multi")
    public List<Book> getBooksMultiSort(@RequestParam(required = false) String sort) {
        if (sort == null) return bookRepository.findAll();
        String[] parts = sort.split(",");
        String field = parts[0];
        boolean asc = parts.length < 2 || "asc".equalsIgnoreCase(parts[1]);
        Comparator<Book> comparator = switch (field) {
            case "title" -> Comparator.comparing(Book::getTitle);
            case "author" -> Comparator.comparing(Book::getAuthor);
            case "price" -> Comparator.comparing(Book::getPrice);
            default -> Comparator.comparing(Book::getId);
        };
        if (!asc) comparator = comparator.reversed();
        final Comparator<Book> finalComparator = comparator;
        return bookRepository.findAll().stream().sorted(finalComparator).collect(Collectors.toList());
    }
}
```

### 13.6 Partial Responses (Field Selection)

```java
@RestController
@RequestMapping("/api/books")
public class PartialResponseController {

    private final BookRepository bookRepository;

    public PartialResponseController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/{id}")
    public Map<String, Object> getBookPartial(@PathVariable Long id,
            @RequestParam(required = false) String fields) {
        Book book = bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
        Map<String, Object> response = new LinkedHashMap<>();

        if (fields == null || fields.isBlank()) {
            response.put("id", book.getId());
            response.put("isbn", book.getIsbn());
            response.put("title", book.getTitle());
            response.put("author", book.getAuthor());
            response.put("price", book.getPrice());
        } else {
            Set<String> requestedFields = Set.of(fields.split(","));
            if (requestedFields.contains("id")) response.put("id", book.getId());
            if (requestedFields.contains("isbn")) response.put("isbn", book.getIsbn());
            if (requestedFields.contains("title")) response.put("title", book.getTitle());
            if (requestedFields.contains("author")) response.put("author", book.getAuthor());
            if (requestedFields.contains("price")) response.put("price", book.getPrice());
        }
        return response;
    }

    @GetMapping("/json-view/{id}")
    @JsonView(Views.Summary.class)
    public Book getBookSummary(@PathVariable Long id) {
        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
    }

    @GetMapping("/json-view/{id}/details")
    @JsonView(Views.Detailed.class)
    public Book getBookDetailed(@PathVariable Long id) {
        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
    }
}

public class Views {
    public static class Summary {}
    public static class Detailed extends Summary {}
}
```

### 13.7 ETags for Conditional Requests

```java
import org.springframework.web.context.request.WebRequest;

@RestController
@RequestMapping("/api/books")
public class ETagController {

    private final BookRepository bookRepository;

    public ETagController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookWithETag(@PathVariable Long id, WebRequest webRequest) {
        return bookRepository.findById(id)
            .map(book -> {
                String etag = "\"" + Integer.toHexString(book.hashCode()) + "\"";
                if (webRequest.checkNotModified(etag))
                    return ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
                return ResponseEntity.ok().eTag(etag)
                    .cacheControl(org.springframework.http.CacheControl.maxAge(java.time.Duration.ofHours(1)))
                    .body(book);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooksETag(WebRequest webRequest) {
        List<Book> books = bookRepository.findAll();
        String etag = "\"" + Integer.toHexString(books.hashCode()) + "\"";
        if (webRequest.checkNotModified(etag))
            return ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
        return ResponseEntity.ok().eTag(etag).body(books);
    }

    @GetMapping("/weak")
    public ResponseEntity<List<Book>> getAllBooksWeakETag() {
        List<Book> books = bookRepository.findAll();
        String etag = "W/\"" + books.size() + "-" + books.stream().mapToLong(Book::getId).sum() + "\"";
        return ResponseEntity.ok().eTag(etag).body(books);
    }
}
```

### 13.8 Idempotency Key Support

```java
@RestController
@RequestMapping("/api/books")
public class IdempotencyController {

    private final Map<String, Book> idempotencyStore = new ConcurrentHashMap<>();
    private final BookRepository bookRepository;

    public IdempotencyController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @PostMapping
    public ResponseEntity<Book> createBook(
            @RequestBody Book book,
            @RequestHeader("Idempotency-Key") String idempotencyKey) {
        Book existing = idempotencyStore.get(idempotencyKey);
        if (existing != null)
            return ResponseEntity.ok().header("X-Idempotent-Replay", "true").body(existing);

        Book saved = bookRepository.save(book);
        idempotencyStore.put(idempotencyKey, saved);
        return ResponseEntity.created(URI.create("/api/books/" + saved.getId())).body(saved);
    }
}
```

### 13.9 Bulk Operations

```java
@RestController
@RequestMapping("/api/books")
public class BulkController {

    private final BookRepository bookRepository;

    public BulkController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @PostMapping("/bulk")
    public ResponseEntity<List<Book>> createBooks(@RequestBody List<Book> books) {
        List<Book> saved = books.stream().map(bookRepository::save).collect(Collectors.toList());
        return ResponseEntity.created(URI.create("/api/books/bulk")).body(saved);
    }

    @GetMapping("/batch")
    public List<Book> getBooksByIds(@RequestParam List<Long> ids) {
        return ids.stream()
            .map(bookRepository::findById).filter(Optional::isPresent).map(Optional::get)
            .collect(Collectors.toList());
    }

    @DeleteMapping("/bulk")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBooks(@RequestBody List<Long> ids) { ids.forEach(bookRepository::deleteById); }
}
```

---

## 14. Pagination & Sorting with Pageable

### 14.1 Pageable and Page Basics

Spring Data provides `Pageable` and `Page` for standard pagination:

```java
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

@RestController
@RequestMapping("/api/books")
public class PageableController {

    private final BookRepository bookRepository;

    public PageableController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public Page<Book> getBooks(Pageable pageable) {
        List<Book> allBooks = bookRepository.findAll();
        int pageSize = pageable.getPageSize();
        int currentPage = pageable.getPageNumber();
        int startItem = currentPage * pageSize;

        List<Book> list;
        if (allBooks.size() < startItem) list = List.of();
        else {
            int toIndex = Math.min(startItem + pageSize, allBooks.size());
            list = allBooks.subList(startItem, toIndex);
        }

        if (pageable.getSort().isSorted()) {
            Comparator<Book> comparator = buildComparator(pageable.getSort());
            list = list.stream().sorted(comparator).collect(Collectors.toList());
        }

        return new PageImpl<>(list, pageable, allBooks.size());
    }

    private Comparator<Book> buildComparator(Sort sort) {
        List<Comparator<Book>> comparators = new ArrayList<>();
        sort.forEach(order -> {
            Comparator<Book> comp = switch (order.getProperty()) {
                case "title" -> Comparator.comparing(Book::getTitle);
                case "author" -> Comparator.comparing(Book::getAuthor);
                case "price" -> Comparator.comparing(Book::getPrice);
                case "id" -> Comparator.comparing(Book::getId);
                default -> Comparator.comparing(Book::getId);
            };
            if (order.isDescending()) comp = comp.reversed();
            comparators.add(comp);
        });
        return comparators.stream().reduce(Comparator::thenComparing).orElse((a, b) -> 0);
    }

    @GetMapping("/page-info")
    public Map<String, Object> getPageInfo(Pageable pageable) {
        Map<String, Object> info = new LinkedHashMap<>();
        info.put("page", pageable.getPageNumber());
        info.put("size", pageable.getPageSize());
        info.put("offset", pageable.getOffset());
        info.put("sort", pageable.getSort().toString());
        info.put("isPaged", pageable.isPaged());
        info.put("isUnpaged", pageable.isUnpaged());
        return info;
    }
}
```

### 14.2 @PageableDefault

```java
import org.springframework.data.web.PageableDefault;

@RestController
@RequestMapping("/api/books")
public class PageableDefaultController {

    private final BookRepository bookRepository;

    public PageableDefaultController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public Page<Book> getBooks(
            @PageableDefault(page = 0, size = 20, sort = "id", direction = Sort.Direction.ASC)
            Pageable pageable) {
        List<Book> allBooks = bookRepository.findAll();
        int start = (int) pageable.getOffset();
        int end = Math.min(start + pageable.getPageSize(), allBooks.size());
        List<Book> pageContent = allBooks.subList(start, end);
        return new PageImpl<>(pageContent, pageable, allBooks.size());
    }

    @GetMapping("/small")
    public Page<Book> getBooksSmall(@PageableDefault(size = 5) Pageable pageable) {
        return getBooks(pageable);
    }
}
```

### 14.3 Sort Parameter

```java
import org.springframework.data.domain.Sort;

@RestController
@RequestMapping("/api/books")
public class SortController {

    private final BookRepository bookRepository;

    public SortController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Book> getBooks(Sort sort) {
        List<Book> allBooks = bookRepository.findAll();
        if (!sort.isSorted()) return allBooks;

        Comparator<Book> comparator = null;
        for (Sort.Order order : sort) {
            Comparator<Book> fieldComp = switch (order.getProperty()) {
                case "title" -> Comparator.comparing(Book::getTitle);
                case "author" -> Comparator.comparing(Book::getAuthor);
                case "price" -> Comparator.comparing(Book::getPrice);
                case "id" -> Comparator.comparing(Book::getId);
                default -> Comparator.comparing(Book::getId);
            };
            if (order.isDescending()) fieldComp = fieldComp.reversed();
            comparator = comparator != null ? comparator.thenComparing(fieldComp) : fieldComp;
        }

        final Comparator<Book> finalComparator = comparator;
        return finalComparator != null
            ? allBooks.stream().sorted(finalComparator).collect(Collectors.toList())
            : allBooks;
    }

    @GetMapping("/sort-demo")
    public Map<String, Object> sortDemo(@RequestParam(defaultValue = "id,asc") String[] sort) {
        List<Sort.Order> orders = new ArrayList<>();
        for (String s : sort) {
            String[] parts = s.split(",");
            String property = parts[0];
            Sort.Direction direction = parts.length > 1
                ? Sort.Direction.fromString(parts[1])
                : Sort.Direction.ASC;
            orders.add(new Sort.Order(direction, property));
        }
        Sort sortObj = Sort.by(orders);

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("sort", sortObj.toString());
        return result;
    }
}
```

### 14.4 Custom Pagination Response

```java
@RestController
@RequestMapping("/api/books")
public class CustomPaginationController {

    private final BookRepository bookRepository;

    public CustomPaginationController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/custom")
    public PaginatedResponse<Book> getBooksCustom(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDir) {

        List<Book> allBooks = bookRepository.findAll();
        Comparator<Book> comparator = switch (sortBy) {
            case "title" -> Comparator.comparing(Book::getTitle);
            case "author" -> Comparator.comparing(Book::getAuthor);
            case "price" -> Comparator.comparing(Book::getPrice);
            default -> Comparator.comparing(Book::getId);
        };
        if ("desc".equalsIgnoreCase(sortDir)) comparator = comparator.reversed();

        List<Book> sorted = allBooks.stream().sorted(comparator).collect(Collectors.toList());
        int total = sorted.size();
        int totalPages = (int) Math.ceil((double) total / size);
        int start = page * size;
        int end = Math.min(start + size, total);
        List<Book> content = start < total ? sorted.subList(start, end) : List.of();

        return new PaginatedResponse<>(content, page, size, total, totalPages,
            page == 0, page >= totalPages - 1);
    }
}

class PaginatedResponse<T> {
    private final List<T> content;
    private final int page;
    private final int size;
    private final long totalElements;
    private final int totalPages;
    private final boolean first;
    private final boolean last;

    public PaginatedResponse(List<T> content, int page, int size, long totalElements,
                              int totalPages, boolean first, boolean last) {
        this.content = content;
        this.page = page;
        this.size = size;
        this.totalElements = totalElements;
        this.totalPages = totalPages;
        this.first = first;
        this.last = last;
    }

    public List<T> getContent() { return content; }
    public int getPage() { return page; }
    public int getSize() { return size; }
    public long getTotalElements() { return totalElements; }
    public int getTotalPages() { return totalPages; }
    public boolean isFirst() { return first; }
    public boolean isLast() { return last; }
}
```

---

## 15. Complete REST Controller Example

A production-style REST controller incorporating all patterns:

```java
package com.example.restapi.controller;

import com.example.restapi.exception.BookNotFoundException;
import com.example.restapi.model.Book;
import com.example.restapi.repository.BookRepository;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.PagedModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import java.math.BigDecimal;
import java.net.URI;
import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/books")
public class CompleteBookController {

    private final BookRepository bookRepository;

    public CompleteBookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // GET /api/books â€” List all books (paginated)
    @GetMapping
    public ResponseEntity<PagedModel<EntityModel<Book>>> getAllBooks(
            @PageableDefault(page = 0, size = 20, sort = "id", direction = Sort.Direction.ASC)
            Pageable pageable, WebRequest webRequest) {

        List<Book> allBooks = bookRepository.findAll();
        int start = (int) pageable.getOffset();
        int end = Math.min(start + pageable.getPageSize(), allBooks.size());
        List<Book> pageContent = allBooks.subList(start, end);

        List<EntityModel<Book>> bookModels = pageContent.stream()
            .map(book -> EntityModel.of(book,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(CompleteBookController.class)
                    .getBook(book.getId(), webRequest)).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(CompleteBookController.class)
                    .getAllBooks(pageable, webRequest)).withRel("collection")))
            .collect(Collectors.toList());

        long totalElements = allBooks.size();
        PagedModel.PageMetadata metadata = new PagedModel.PageMetadata(
            pageable.getPageSize(), pageable.getPageNumber(), totalElements);

        PagedModel<EntityModel<Book>> pagedModel = PagedModel.of(bookModels, metadata);
        if (!pageable.isUnpaged()) {
            pagedModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(
                CompleteBookController.class).getAllBooks(pageable, webRequest)).withSelfRel());
            if (pageable.getPageNumber() > 0) {
                Pageable prev = pageable.previousOrFirst();
                pagedModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(
                    CompleteBookController.class).getAllBooks(prev, webRequest)).withRel("prev"));
            }
            Pageable next = pageable.next();
            if (start + pageable.getPageSize() < totalElements) {
                pagedModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(
                    CompleteBookController.class).getAllBooks(next, webRequest)).withRel("next"));
            }
        }

        return ResponseEntity.ok().body(pagedModel);
    }

    // GET /api/books/{id} â€” Get a single book
    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<Book>> getBook(@PathVariable Long id, WebRequest webRequest) {
        return bookRepository.findById(id)
            .map(book -> {
                String etag = "\"" + Integer.toHexString(book.hashCode()) + "\"";
                if (webRequest.checkNotModified(etag))
                    return ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();

                EntityModel<Book> entityModel = EntityModel.of(book);
                entityModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(
                    CompleteBookController.class).getBook(id, webRequest)).withSelfRel());
                entityModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(
                    CompleteBookController.class).getAllBooks(Pageable.unpaged(), webRequest))
                    .withRel("books"));

                return ResponseEntity.ok().eTag(etag)
                    .lastModified(book.getUpdatedAt().toInstant(java.time.ZoneOffset.UTC).toEpochMilli())
                    .body(entityModel);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    // POST /api/books â€” Create a new book
    @PostMapping
    public ResponseEntity<EntityModel<Book>> createBook(@Valid @RequestBody Book book) {
        if (bookRepository.existsByIsbn(book.getIsbn())) {
            ProblemDetail problem = ProblemDetail.forStatusAndDetail(
                HttpStatus.CONFLICT, "Book with ISBN " + book.getIsbn() + " already exists");
            problem.setTitle("Duplicate Resource");
            problem.setProperty("isbn", book.getIsbn());
            return ResponseEntity.status(HttpStatus.CONFLICT)
                .contentType(MediaType.APPLICATION_PROBLEM_JSON).build();
        }
        if (book.getPrice() != null && book.getPrice().compareTo(BigDecimal.ZERO) < 0) {
            ProblemDetail problem = ProblemDetail.forStatusAndDetail(
                HttpStatus.UNPROCESSABLE_ENTITY, "Price must be non-negative");
            return ResponseEntity.unprocessableEntity()
                .contentType(MediaType.APPLICATION_PROBLEM_JSON).build();
        }

        Book saved = bookRepository.save(book);
        EntityModel<Book> entityModel = EntityModel.of(saved);
        entityModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(
            CompleteBookController.class).getBook(saved.getId(), null)).withSelfRel());
        entityModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(
            CompleteBookController.class).getAllBooks(Pageable.unpaged(), null)).withRel("books"));

        return ResponseEntity.created(URI.create("/api/books/" + saved.getId())).body(entityModel);
    }

    // PUT /api/books/{id} â€” Full replacement
    @PutMapping("/{id}")
    public ResponseEntity<EntityModel<Book>> updateBook(@PathVariable Long id,
                                                         @Valid @RequestBody Book book) {
        return bookRepository.findById(id)
            .map(existing -> {
                existing.setTitle(book.getTitle());
                existing.setAuthor(book.getAuthor());
                existing.setPrice(book.getPrice());
                existing.setIsbn(book.getIsbn());
                existing.setPublishedAt(book.getPublishedAt());
                Book saved = bookRepository.save(existing);

                EntityModel<Book> entityModel = EntityModel.of(saved);
                entityModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(
                    CompleteBookController.class).getBook(id, null)).withSelfRel());
                return ResponseEntity.ok(entityModel);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    // PATCH /api/books/{id} â€” Partial update
    @PatchMapping("/{id}")
    public ResponseEntity<EntityModel<Book>> partialUpdateBook(@PathVariable Long id,
                                                                @RequestBody Map<String, Object> updates) {
        return bookRepository.findById(id)
            .map(book -> {
                updates.forEach((key, value) -> {
                    switch (key) {
                        case "title" -> book.setTitle((String) value);
                        case "author" -> book.setAuthor((String) value);
                        case "price" -> book.setPrice(value instanceof Number
                            ? BigDecimal.valueOf(((Number) value).doubleValue())
                            : new BigDecimal(value.toString()));
                        case "isbn" -> book.setIsbn((String) value);
                    }
                });
                Book saved = bookRepository.save(book);
                EntityModel<Book> entityModel = EntityModel.of(saved);
                entityModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(
                    CompleteBookController.class).getBook(id, null)).withSelfRel());
                return ResponseEntity.ok(entityModel);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    // DELETE /api/books/{id} â€” Delete a book
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        return bookRepository.findById(id)
            .map(book -> {
                bookRepository.deleteById(id);
                return ResponseEntity.noContent()
                    .header("X-Deleted-At", Instant.now().toString()).build();
            })
            .orElse(ResponseEntity.notFound().build());
    }

    // GET /api/books/search â€” Search with filters
    @GetMapping("/search")
    public ResponseEntity<List<Book>> searchBooks(
            @RequestParam(required = false) String author,
            @RequestParam(required = false) String title,
            @RequestParam(required = false) BigDecimal minPrice,
            @RequestParam(required = false) BigDecimal maxPrice,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDir) {

        List<Book> results = bookRepository.findAll().stream()
            .filter(b -> author == null || b.getAuthor().toLowerCase().contains(author.toLowerCase()))
            .filter(b -> title == null || b.getTitle().toLowerCase().contains(title.toLowerCase()))
            .filter(b -> minPrice == null || b.getPrice().compareTo(minPrice) >= 0)
            .filter(b -> maxPrice == null || b.getPrice().compareTo(maxPrice) <= 0)
            .sorted(getComparator(sortBy, sortDir))
            .collect(Collectors.toList());
        return ResponseEntity.ok(results);
    }

    @GetMapping("/count")
    public ResponseEntity<Map<String, Long>> countBooks() {
        return ResponseEntity.ok(Map.of("count", bookRepository.count()));
    }

    private Comparator<Book> getComparator(String sortBy, String sortDir) {
        Comparator<Book> comparator = switch (sortBy) {
            case "title" -> Comparator.comparing(Book::getTitle);
            case "author" -> Comparator.comparing(Book::getAuthor);
            case "price" -> Comparator.comparing(Book::getPrice);
            default -> Comparator.comparing(Book::getId);
        };
        return "desc".equalsIgnoreCase(sortDir) ? comparator.reversed() : comparator;
    }
}
```

---

## Summary

This chapter covered REST API development with Spring MVC, beginning with the `@RestController` annotation and its composition from `@Controller` and `@ResponseBody`. You learned how `@RequestMapping` maps HTTP requests to handler methods using attributes like `method`, `path`, `params`, `headers`, `consumes`, and `produces`, along with its composed annotations `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`, and `@PatchMapping`.

For request handling, we explored `@PathVariable` for URI template variables, `@RequestParam` for query parameters, `@RequestHeader` for HTTP headers, `@RequestBody` for deserializing request bodies, `@RequestAttribute` for request-scoped attributes, and `@MatrixVariable` for matrix parameters in URI segments.

Response handling included `@ResponseStatus` for setting HTTP status codes, `ResponseEntity` for full control over status, headers, and body, `ResponseStatusException` for programmatic error responses, and `HttpHeaders` for building custom response headers.

Content negotiation was covered through `ContentNegotiationConfigurer`, supporting multiple strategies including Accept header, file extension, query parameter, and custom parameter approaches.

We examined HTTP method semantics â€” the safety of GET, the non-idempotent creation nature of POST, the full-replacement idempotency of PUT, the partial update semantics of PATCH, and the removal idempotency of DELETE. We then mapped these methods to appropriate HTTP status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity, and 500 Internal Server Error.

HATEOAS was introduced as Level 3 of the Richardson Maturity Model, using `RepresentationModel`, `EntityModel`, `CollectionModel`, `Link`, and `WebMvcLinkBuilder` to create self-descriptive responses with discoverable navigation links.

API versioning strategies included URI path versioning, request parameter versioning, custom header versioning, and Accept header (media type) versioning, each with different trade-offs between simplicity, RESTfulness, and cache compatibility.

CORS configuration was covered at both the controller level with `@CrossOrigin` and the global level with `GlobalCorsConfiguration`, allowing fine-grained control over origins, methods, headers, credentials, and preflight caching.

REST best practices were demonstrated for noun-based naming conventions, resource hierarchies, pagination (offset-based and cursor-based), filtering, sorting, partial responses via field selection, ETags for conditional requests, idempotency keys, and bulk operations.

Finally, Spring Data's `Pageable`, `Page`, `Sort`, and `PagedModel` were used to implement standard pagination and sorting, with `@PageableDefault` setting sensible defaults and custom pagination DTOs providing flexible response formats.

---

## Exercises

### Exercise 1: Basic REST Controller

Create a `@RestController` for managing `Author` resources with the following endpoints:

- `GET /api/authors` â€” List all authors
- `GET /api/authors/{id}` â€” Get a single author
- `POST /api/authors` â€” Create a new author
- `PUT /api/authors/{id}` â€” Update an author
- `DELETE /api/authors/{id}` â€” Delete an author

Use appropriate `@ResponseStatus` and `ResponseEntity` return types. Return 201 for creation, 204 for deletion, and 404 when not found.

### Exercise 2: Request Parameter Handling

Extend the books API to support:

- Filtering by author, publication year, and minimum rating
- Pagination with configurable page size (default 20)
- Sorting by title, author, or price in ascending or descending order

Use `@RequestParam` with appropriate `required` and `defaultValue` attributes.

### Exercise 3: Error Handling

Implement a `@RestControllerAdvice` that handles:

- `BookNotFoundException` â†’ 404 with a structured error response
- `MethodArgumentNotValidException` â†’ 400 with field-level validation errors
- `HttpMessageNotReadableException` â†’ 400 with descriptive parsing error
- Any unhandled `Exception` â†’ 500 with a generic error response

Include timestamp, status, error, message, and path fields.

### Exercise 4: HATEOAS

Add HATEOAS links to the books API:

- Each single book response should include `self`, `collection`, `update`, and `delete` links
- The collection response should include `self`, `first`, `next`, `prev` (when applicable)
- Link relations should use standard IANA names where possible

### Exercise 5: Content Negotiation

Configure the books API to support:

- JSON (default) via the `Accept` header
- XML when the client sends `Accept: application/xml`
- A custom format via the `?format=yaml` query parameter

Implement using `ContentNegotiationConfigurer` in a `@Configuration` class.

### Exercise 6: CORS Configuration

Your books API needs to support a frontend running on `http://localhost:4200`. Configure CORS to:

- Allow requests from `http://localhost:4200` and `https://books.example.com`
- Allow GET, POST, PUT, DELETE, and PATCH methods
- Allow the `Authorization` and `Content-Type` headers
- Expose the `X-Total-Count` header for pagination
- Cache preflight responses for 1 hour

### Exercise 7: API Versioning

Implement two versions of the books API:

- **v1**: Returns `{ id, title, author, price }`
- **v2**: Returns `{ id, title, author, price, description, tags }`

Implement using URI path versioning (`/api/v1/books` and `/api/v2/books`).

### Exercise 8: Pagination with Spring Data

Using `Pageable` and `@PageableDefault`:

- Create an endpoint that accepts pagination parameters
- Return a `Page<Book>` with proper `PageMetadata`
- Support sorting by multiple fields: `?sort=author,asc&sort=title,desc`
- Add navigation links (first, prev, next, last) to the response

### Exercise 9: Complete REST Service

Build a complete REST service for **Customer** management:

- Customer model: id, name, email, phone, createdAt, updatedAt
- Full CRUD with proper HTTP methods and status codes
- Input validation using Jakarta Bean Validation annotations
- Global error handling via `@RestControllerAdvice`
- Pagination, sorting, and filtering support
- HATEOAS links on all responses
- Custom exception classes for not-found and conflict scenarios
- Idempotency key support on the create endpoint

### Exercise 10: Status Code Analysis

For each of the following scenarios, determine the appropriate HTTP status code and explain your reasoning:

1. A client sends a GET request for a user that does not exist
2. A client sends a POST request that creates a duplicate resource
3. A client sends a DELETE request for a resource that was already deleted
4. A client sends a PUT request with a mismatched resource ID in the URL and body
5. A client sends a request without the required `Authorization` header
6. A client sends a PATCH request with an invalid field name
7. A client sends a valid request but the server encounters a database connection error
8. A client sends a GET request with an invalid parameter type (string instead of integer)
