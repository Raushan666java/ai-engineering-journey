$file = "C:\xampp\htdocs\ai-engineering-journey\docs\courses\java\15-rest-api.md"

$content = @"
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
"@

Add-Content -Path $file -Value "" -Encoding utf8
Add-Content -Path $file -Value $content -Encoding utf8
