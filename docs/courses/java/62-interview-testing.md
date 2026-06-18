# Testing Interview Q&A

This chapter covers everything you need to know about testing Java and Spring Boot applications for technical interviews. From the testing pyramid and JUnit 5 features to Mockito mocking, Spring Boot testing slices, Testcontainers for integration testing, performance testing with JMH and Gatling, and code coverage with JaCoCo and Pitest â€” each question provides detailed explanations with complete, working code examples. A strong testing strategy is the hallmark of a professional software engineer. Understanding these patterns will help you build reliable, maintainable, and well-tested applications.

![Testing Interview Topics - Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/62-interview-testing.png)

### Q1: Explain the testing pyramid. What should you test at each level?

**Answer:**

The testing pyramid is a conceptual model that describes the ideal distribution of tests across different levels of granularity. The pyramid has three layers: Unit Tests (base, largest), Integration Tests (middle), and End-to-End Tests (top, smallest).

**Unit Tests** form the base of the pyramid â€” they should be the most numerous, fastest, and cheapest to write and maintain. Unit tests verify individual components in isolation, mocking all external dependencies. They test business logic, edge cases, validation rules, and calculations.

```java
@ExtendWith(MockitoExtension.class)
class OrderServiceTest {

    @Mock
    private OrderRepository orderRepository;

    @Mock
    private InventoryService inventoryService;

    @InjectMocks
    private OrderService orderService;

    @Test
    void placeOrderShouldSucceedWhenInventoryIsAvailable() {
        OrderItem item = new OrderItem("SKU-001", 2);
        when(inventoryService.isAvailable("SKU-001", 2)).thenReturn(true);
        when(orderRepository.save(any(Order.class))).thenAnswer(invocation -> {
            Order order = invocation.getArgument(0);
            order.setId(1L);
            return order;
        });

        Order result = orderService.placeOrder("customer-1", List.of(item));

        assertThat(result).isNotNull();
        assertThat(result.getId()).isEqualTo(1L);
        assertThat(result.getStatus()).isEqualTo(OrderStatus.CONFIRMED);
        verify(inventoryService).reserveInventory("SKU-001", 2);
    }

    @Test
    void placeOrderShouldThrowWhenInventoryIsUnavailable() {
        OrderItem item = new OrderItem("SKU-001", 2);
        when(inventoryService.isAvailable("SKU-001", 2)).thenReturn(false);

        assertThatThrownBy(() -> orderService.placeOrder("customer-1", List.of(item)))
            .isInstanceOf(InsufficientInventoryException.class)
            .hasMessageContaining("SKU-001");

        verify(orderRepository, never()).save(any());
    }
}
```

**Integration Tests** form the middle layer. They verify that components work together correctly â€” database access, API endpoints, message queues, and external service clients. These tests use real infrastructure where practical (real database, test containers) and mock only external services.

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class OrderControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private OrderRepository orderRepository;

    @BeforeEach
    void setUp() {
        orderRepository.deleteAll();
    }

    @Test
    void createOrderShouldPersistOrder() throws Exception {
        OrderRequest request = new OrderRequest("customer-1", List.of(
            new OrderItemRequest("SKU-001", 2)
        ));

        mockMvc.perform(post("/api/orders")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(request)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").isNumber())
            .andExpect(jsonPath("$.customerId").value("customer-1"))
            .andExpect(jsonPath("$.status").value("CONFIRMED"));

        assertThat(orderRepository.count()).isEqualTo(1);
    }
}
```

**End-to-End Tests** form the top of the pyramid â€” they are the fewest, slowest, and most expensive. E2E tests simulate real user flows across the entire system, including the frontend, backend, and external integrations.

```java
@Tag("e2e")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class OrderFullFlowE2ETest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void completeOrderFlow() {
        // 1. Authenticate
        ResponseEntity<AuthResponse> authResponse = restTemplate.postForEntity(
            "/api/auth/login",
            new LoginRequest("user@example.com", "password"),
            AuthResponse.class);
        String token = authResponse.getBody().accessToken();

        // 2. Browse products
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        ResponseEntity<Product[]> productsResponse = restTemplate.exchange(
            "/api/products", HttpMethod.GET, entity, Product[].class);
        Product product = productsResponse.getBody()[0];

        // 3. Place order
        OrderRequest orderRequest = new OrderRequest("customer-1",
            List.of(new OrderItemRequest(product.getSku(), 1)));

        ResponseEntity<Order> orderResponse = restTemplate.exchange(
            "/api/orders", HttpMethod.POST,
            new HttpEntity<>(orderRequest, headers), Order.class);

        assertThat(orderResponse.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(orderResponse.getBody().getStatus()).isEqualTo(OrderStatus.CONFIRMED);
    }
}
```

**Best practices by pyramid level:**

| Aspect | Unit | Integration | E2E |
|--------|------|-------------|-----|
| Speed | Milliseconds | Seconds | Minutes |
| Isolation | Full (all mocked) | Partial (real DB, mocked network) | None |
| Reliability | High | Medium | Low (flaky) |
| Coverage target | 70-80% | 15-20% | 5-10% |
| Debugging | Easy | Medium | Hard |
| CI frequency | Every commit | Every commit | Per release |

### Q2: What are the key JUnit 5 annotations? How do you use @Test, @ParameterizedTest, @RepeatedTest, and @TestFactory?

**Answer:**

JUnit 5 introduces several annotations beyond the basic `@Test`:

```java
class JUnit5AnnotationsTest {

    // Basic test
    @Test
    void standardTest() {
        assertThat(2 + 2).isEqualTo(4);
    }

    // Display name for reporting
    @Test
    @DisplayName("Adding two numbers should return the sum")
    @Tag("smoke")
    void testWithDisplayName() {
        Calculator calc = new Calculator();
        assertThat(calc.add(2, 3)).isEqualTo(5);
    }

    // Parameterized test with value source
    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3, 4, 5})
    @DisplayName("Positive numbers should pass validation")
    void testWithValueSource(int number) {
        assertThat(number > 0).isTrue();
    }

    // Parameterized test with CSV source
    @ParameterizedTest
    @CsvSource({
        "apple, 1",
        "banana, 2",
        "cherry, 3"
    })
    @DisplayName("Fruits should have specific positions")
    void testWithCsvSource(String fruit, int position) {
        assertThat(Fruit.valueOf(fruit.toUpperCase()).ordinal() + 1)
            .isEqualTo(position);
    }

    // Parameterized test with method source
    @ParameterizedTest
    @MethodSource("provideOrdersForCalculation")
    @DisplayName("Order total calculation")
    void testOrderTotal(Order order, BigDecimal expectedTotal) {
        assertThat(order.calculateTotal()).isEqualByComparingTo(expectedTotal);
    }

    static Stream<Arguments> provideOrdersForCalculation() {
        return Stream.of(
            Arguments.of(new Order(BigDecimal.valueOf(100), BigDecimal.valueOf(10)), BigDecimal.valueOf(110)),
            Arguments.of(new Order(BigDecimal.valueOf(200), BigDecimal.valueOf(0)), BigDecimal.valueOf(200)),
            Arguments.of(new Order(BigDecimal.valueOf(50), BigDecimal.valueOf(7.5)), BigDecimal.valueOf(57.5))
        );
    }

    // Repeated test
    @RepeatedTest(value = 10, name = "Retry {currentRepetition}/{totalRepetitions}")
    @DisplayName("Random number generation should produce positive values")
    void repeatedTest(RepetitionInfo repetitionInfo) {
        int random = new Random().nextInt(1000);
        assertThat(random).isBetween(0, 999);
        System.out.println("Repetition " + repetitionInfo.getCurrentRepetition());
    }

    // Dynamic test factory
    @TestFactory
    @DisplayName("Dynamic tests for order validation")
    Stream<DynamicNode> dynamicTestsForOrderStatus() {
        return Stream.of(
            DynamicTest.dynamicTest("Pending order should be valid",
                () -> assertThat(OrderStatus.PENDING.canTransitionTo(OrderStatus.CONFIRMED)).isTrue()),
            DynamicTest.dynamicTest("Delivered order should not transition to cancelled",
                () -> assertThat(OrderStatus.DELIVERED.canTransitionTo(OrderStatus.CANCELLED)).isFalse()),
            DynamicContainer.dynamicContainer("Status transitions", Stream.of(
                DynamicTest.dynamicTest("Confirmed to shipped",
                    () -> assertThat(OrderStatus.CONFIRMED.canTransitionTo(OrderStatus.SHIPPED)).isTrue()),
                DynamicTest.dynamicTest("Shipped to delivered",
                    () -> assertThat(OrderStatus.SHIPPED.canTransitionTo(OrderStatus.DELIVERED)).isTrue())
            ))
        );
    }

    // Timeout test
    @Test
    @Timeout(value = 100, unit = TimeUnit.MILLISECONDS)
    void fastEnough() {
        new QuickService().execute();
    }

    // Disabled test
    @Test
    @Disabled("Until we fix the caching layer â€” see JIRA-1234")
    void testDisabledUntilFix() {
        // Will be skipped
    }
}
```

**Assertions and assumptions:**

```java
@Test
void advancedAssertions() {
    // Grouped assertions â€” all are executed, failures are reported together
    Order order = new Order("cust-1", List.of(new OrderItem("SKU-1", 2)));

    assertAll("order verification",
        () -> assertThat(order.getCustomerId()).isEqualTo("cust-1"),
        () -> assertThat(order.getItems()).hasSize(1),
        () -> assertThat(order.getStatus()).isEqualTo(OrderStatus.PENDING)
    );

    // Assumptions â€” skip test if condition fails
    assumeTrue(env.isProduction(), "This test only runs in production");
    assumeFalse(env.isDevelopment());

    // AssertThrows
    assertThrows(IllegalArgumentException.class,
        () -> new Order(null, List.of()));
}
```

### Q3: How does Mockito work? Explain mock, spy, @InjectMocks, argument matchers, and verification.

**Answer:**

Mockito is a mocking framework that creates test doubles to isolate the system under test. It supports two types of test doubles:

- **Mock** â€” creates a complete fake object with no real behavior. All methods return default values (null, 0, false) unless stubbed.
- **Spy** â€” wraps a real object. By default, methods execute real behavior, but specific methods can be stubbed.

```java
@ExtendWith(MockitoExtension.class)
class MockitoExamplesTest {

    @Mock
    private OrderRepository orderRepository;

    @Mock
    private InventoryService inventoryService;

    @Spy
    @InjectMocks
    private OrderService orderService;

    @Test
    void mockVsSpy() {
        // Mock â€” default behavior
        Order mockOrder = mock(Order.class);
        when(mockOrder.getStatus()).thenReturn(OrderStatus.CONFIRMED);
        System.out.println(mockOrder.getStatus()); // CONFIRMED
        System.out.println(mockOrder.getCustomerId()); // null

        // Spy â€” real behavior by default
        Order realOrder = new Order("cust-1");
        Order spyOrder = spy(realOrder);
        when(spyOrder.getCustomerId()).thenReturn("overridden");
        System.out.println(spyOrder.getCustomerId()); // overridden
        System.out.println(spyOrder.getStatus()); // PENDING (real method)
    }

    @Test
    void argumentMatchers() {
        when(orderRepository.findById(anyLong())).thenReturn(Optional.of(new Order("cust-1")));
        when(orderRepository.findByCustomerId(eq("cust-1"))).thenReturn(List.of(new Order("cust-1")));
        when(orderRepository.save(argThat(order -> order.getCustomerId() != null)))
            .thenAnswer(invocation -> invocation.getArgument(0));

        orderService.findById(1L);
        orderService.findByCustomerId("cust-1");

        // Additional matchers
        anyString(), anyInt(), anyList(), any(Order.class);
        isNull(), isNotNull(), contains("substring"), startsWith("prefix");
        assertThat(orderRepository.findByCustomerId("cust-1")).hasSize(1);
    }

    @Test
    void verification() {
        orderService.findById(1L);
        orderService.findById(1L);

        verify(orderRepository, times(2)).findById(1L);
        verify(orderRepository, atLeast(1)).findById(anyLong());
        verify(orderRepository, atMost(5)).findById(anyLong());
        verify(orderRepository, never()).delete(any());

        verify(orderRepository, timeout(100).times(2)).findById(1L);

        // Verify no interactions with mock
        // verifyNoInteractions(inventoryService);

        // Verify no more interactions
        // verifyNoMoreInteractions(orderRepository);
    }

    @Test
    void stubbingWithAnswers() {
        when(orderRepository.save(any())).thenAnswer(invocation -> {
            Order order = invocation.getArgument(0);
            order.setId(new Random().nextLong());
            return order;
        });

        when(orderRepository.findById(anyLong())).thenAnswer(
            invocation -> {
                Long id = invocation.getArgument(0);
                if (id == -1) return Optional.empty();
                Order order = new Order("cust-1");
                order.setId(id);
                return Optional.of(order);
            }
        );
    }

    @Test
    void exceptionThrowing() {
        when(orderRepository.findById(-1L)).thenThrow(EntityNotFoundException.class);
        when(orderRepository.save(any())).thenThrow(
            new DataIntegrityViolationException("Duplicate key"));

        assertThatThrownBy(() -> orderService.findById(-1L))
            .isInstanceOf(OrderNotFoundException.class);
    }

    @Test
    void mockingFinalMethods() {
        // Mockito 5.x mocks final methods by default
        Order mockOrder = mock(Order.class);
        when(mockOrder.finalMethod()).thenReturn("mocked final");

        // Mocking static methods (requires mockito-inline)
        try (MockedStatic<OrderUtils> utilities = mockStatic(OrderUtils.class)) {
            utilities.when(() -> OrderUtils.generateOrderNumber())
                .thenReturn("ORD-12345");

            String orderNumber = OrderUtils.generateOrderNumber();
            assertThat(orderNumber).isEqualTo("ORD-12345");
        }
    }

    @Test
    void mockingConstructors() {
        try (MockedConstruction<Order> mocked = mockConstruction(Order.class,
            (mock, context) -> {
                when(mock.getStatus()).thenReturn(OrderStatus.CONFIRMED);
            })) {

            Order order = new Order("cust-1");
            assertThat(order.getStatus()).isEqualTo(OrderStatus.CONFIRMED);
        }
    }

    @Test
    void consecutiveCalls() {
        when(inventoryService.isAvailable(anyString(), anyInt()))
            .thenReturn(true)  // First call
            .thenReturn(true)  // Second call
            .thenReturn(false); // Third call

        assertThat(inventoryService.isAvailable("SKU-1", 1)).isTrue();
        assertThat(inventoryService.isAvailable("SKU-1", 1)).isTrue();
        assertThat(inventoryService.isAvailable("SKU-1", 1)).isFalse();
    }

    @Test
    void resetMock() {
        when(orderRepository.findById(1L))
            .thenReturn(Optional.of(new Order("cust-1")));

        Order result = orderService.findById(1L);
        assertThat(result).isNotNull();

        reset(orderRepository); // Clears all stubbing

        assertThatThrownBy(() -> orderService.findById(1L))
            .isInstanceOf(IllegalStateException.class); // Mock returns null by default
    }
}
```

**@InjectMocks rules:**

1. Mockito tries constructor injection first â€” uses the largest constructor.
2. If constructor injection fails, it falls back to setter injection.
3. If setter injection fails, it falls back to field injection.
4. If Mockito cannot inject a mock, it leaves the field as null.

```java
class OrderService {
    private final OrderRepository repository;
    private final InventoryService inventory;
    private final NotificationService notification;

    // Constructor injection
    public OrderService(OrderRepository repository,
                        InventoryService inventory,
                        NotificationService notification) {
        this.repository = repository;
        this.inventory = inventory;
        this.notification = notification;
    }
}

@ExtendWith(MockitoExtension.class)
class OrderServiceInjectTest {

    @Mock
    private OrderRepository repository;

    @Mock
    private InventoryService inventory;

    @Mock
    private NotificationService notification;

    @InjectMocks
    private OrderService orderService;
    // Mockito injects all three mocks via the constructor
}
```

**BDD-style Mockito (Mockito BDD):**

```java
class BddStyleTest {

    @Mock
    private OrderRepository orderRepository;

    @InjectMocks
    private OrderService orderService;

    @Test
    void bddStyleTest() {
        // Given
        given(orderRepository.findById(1L)).willReturn(Optional.of(new Order("cust-1")));

        // When
        Order result = orderService.findById(1L);

        // Then
        assertThat(result.getCustomerId()).isEqualTo("cust-1");
        then(orderRepository).should(times(1)).findById(1L);
        then(orderRepository).shouldHaveNoMoreInteractions();
    }
}
```

### Q4: What are Spring Boot testing slices? Explain @WebMvcTest, @DataJpaTest, @JsonTest, and @RestClientTest.

**Answer:**

Spring Boot testing slices load only a subset of the application context, making tests faster and more focused. Each slice loads specific beans relevant to the layer being tested.

**@WebMvcTest** â€” Tests the web layer only. Loads controllers, filters, and MVC infrastructure but not services or repositories.

```java
@WebMvcTest(controllers = OrderController.class)
class OrderControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private OrderService orderService;

    @Test
    void getOrderShouldReturnOrder() throws Exception {
        Order order = new Order("cust-1");
        order.setId(1L);
        order.setStatus(OrderStatus.CONFIRMED);
        when(orderService.findById(1L)).thenReturn(order);

        mockMvc.perform(get("/api/orders/1")
                .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(1))
            .andExpect(jsonPath("$.customerId").value("cust-1"))
            .andExpect(jsonPath("$.status").value("CONFIRMED"));
    }

    @Test
    void createOrderShouldReturn201() throws Exception {
        OrderRequest request = new OrderRequest("cust-1", List.of(
            new OrderItemRequest("SKU-001", 2)));
        Order created = new Order("cust-1");
        created.setId(1L);
        created.setStatus(OrderStatus.PENDING);

        when(orderService.placeOrder(anyString(), anyList())).thenReturn(created);

        mockMvc.perform(post("/api/orders")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"customerId\":\"cust-1\",\"items\":[{\"sku\":\"SKU-001\",\"quantity\":2}]}"))
            .andExpect(status().isCreated())
            .andExpect(header().exists("Location"));
    }

    @Test
    void getNonExistentOrderShouldReturn404() throws Exception {
        when(orderService.findById(999L))
            .thenThrow(new OrderNotFoundException(999L));

        mockMvc.perform(get("/api/orders/999")
                .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNotFound())
            .andExpect(jsonPath("$.message").value("Order not found: 999"));
    }

    @Test
    void validationFailureShouldReturn400() throws Exception {
        String invalidOrder = "{\"customerId\":\"\",\"items\":[]}";

        mockMvc.perform(post("/api/orders")
                .contentType(MediaType.APPLICATION_JSON)
                .content(invalidOrder))
            .andExpect(status().isBadRequest())
            .andExpect(jsonPath("$.errors").isArray());
    }
}
```

**@DataJpaTest** â€” Tests JPA repositories. Loads only JPA-related beans (EntityManager, DataSource, repositories) and uses an in-memory database by default.

```java
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class OrderRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private OrderRepository orderRepository;

    @Test
    void findByCustomerIdShouldReturnOrders() {
        Order order1 = new Order("cust-1", OrderStatus.CONFIRMED);
        Order order2 = new Order("cust-1", OrderStatus.PENDING);
        Order order3 = new Order("cust-2", OrderStatus.CONFIRMED);

        entityManager.persist(order1);
        entityManager.persist(order2);
        entityManager.persist(order3);

        List<Order> result = orderRepository.findByCustomerId("cust-1");

        assertThat(result).hasSize(2);
        assertThat(result).extracting(Order::getCustomerId)
            .allMatch(id -> id.equals("cust-1"));
    }

    @Test
    void findPendingOrdersSinceShouldReturnOrdersAfterTimestamp() {
        Order order = new Order("cust-1", OrderStatus.PENDING);
        entityManager.persistAndFlush(order);

        List<Order> result = orderRepository
            .findPendingOrdersSince(Instant.now().minusSeconds(60));

        assertThat(result).isNotEmpty();
        assertThat(result.get(0).getStatus()).isEqualTo(OrderStatus.PENDING);
    }

    @Test
    void deleteOrderByIdShouldRemoveOrder() {
        Order order = new Order("cust-1", OrderStatus.PENDING);
        entityManager.persistAndFlush(order);
        Long id = order.getId();

        orderRepository.deleteById(id);

        assertThat(orderRepository.findById(id)).isEmpty();
    }

    @Test
    void customQueryMethod() {
        entityManager.persist(new Order("cust-1", OrderStatus.PENDING));
        entityManager.persist(new Order("cust-1", OrderStatus.CONFIRMED));
        entityManager.persist(new Order("cust-2", OrderStatus.SHIPPED));

        List<Order> ordersByStatus = orderRepository
            .findOrdersByStatusWithPagination(OrderStatus.PENDING, PageRequest.of(0, 10));

        assertThat(ordersByStatus).hasSize(1);
    }
}
```

**@JsonTest** â€” Tests JSON serialization and deserialization.

```java
@JsonTest
class OrderJsonTest {

    @Autowired
    private JacksonTester<Order> json;

    @Test
    void serializeOrder() throws Exception {
        Order order = new Order("cust-1");
        order.setId(1L);
        order.setStatus(OrderStatus.CONFIRMED);
        order.setItems(List.of(new OrderItem("SKU-001", 2)));

        assertThat(json.write(order)).isEqualToJson("expected-order.json");
        assertThat(json.write(order)).hasJsonPathNumberValue("$.id");
        assertThat(json.write(order)).hasJsonPathStringValue("$.customerId");
        assertThat(json.write(order)).hasJsonPathArrayValue("$.items");
    }

    @Test
    void deserializeOrder() throws Exception {
        String jsonContent = """
            {
                "customerId": "cust-1",
                "items": [
                    {"sku": "SKU-001", "quantity": 2}
                ]
            }""";

        Order order = json.parseObject(jsonContent);

        assertThat(order.getCustomerId()).isEqualTo("cust-1");
        assertThat(order.getItems()).hasSize(1);
        assertThat(order.getItems().get(0).getSku()).isEqualTo("SKU-001");
    }

    @Test
    void deserializeInvalidShouldThrow() {
        String invalidJson = """
            {
                "customerId": null,
                "items": null
            }""";

        assertThatThrownBy(() -> json.parseObject(invalidJson))
            .isInstanceOf(JsonParseException.class);
    }
}
```

**@RestClientTest** â€” Tests REST clients.

```java
@RestClientTest(OrderServiceClient.class)
class OrderServiceClientTest {

    @Autowired
    private OrderServiceClient client;

    @Autowired
    private MockRestServiceServer server;

    @Test
    void getOrderShouldReturnOrder() {
        server.expect(requestTo("/api/orders/1"))
            .andExpect(method(HttpMethod.GET))
            .andRespond(withSuccess("""
                {
                    "id": 1,
                    "customerId": "cust-1",
                    "status": "CONFIRMED"
                }
                """, MediaType.APPLICATION_JSON));

        Order order = client.getOrder(1L);

        assertThat(order.getId()).isEqualTo(1L);
        assertThat(order.getCustomerId()).isEqualTo("cust-1");
        server.verify();
    }

    @Test
    void getNonExistentShouldThrow() {
        server.expect(requestTo("/api/orders/999"))
            .andExpect(method(HttpMethod.GET))
            .andRespond(withStatus(HttpStatus.NOT_FOUND));

        assertThatThrownBy(() -> client.getOrder(999L))
            .isInstanceOf(OrderServiceException.class);
    }

    @Test
    void getServerErrorShouldRetry() {
        server.expect(requestTo("/api/orders/1"))
            .andExpect(method(HttpMethod.GET))
            .andRespond(withStatus(HttpStatus.INTERNAL_SERVER_ERROR));
        server.expect(requestTo("/api/orders/1"))
            .andExpect(method(HttpMethod.GET))
            .andRespond(withSuccess("""
                {"id": 1, "customerId": "cust-1", "status": "CONFIRMED"}
                """, MediaType.APPLICATION_JSON));

        Order order = client.getOrder(1L);
        assertThat(order).isNotNull();
        server.verify();
    }
}
```

**Comparison of testing slices:**

| Annotation | Loads | Does NOT load | Use case |
|------------|-------|---------------|----------|
| @WebMvcTest | Controllers, filters, MVC | Services, repositories | Controller logic, validation |
| @DataJpaTest | Repositories, EntityManager | Controllers, services | Repository queries, mappings |
| @JsonTest | ObjectMapper, Jackson | Controllers, services | Serialization/deserialization |
| @RestClientTest | RestTemplate, Jackson | Controllers, repositories | REST client integration |
| @DataMongoTest | Mongo repositories | Other beans | MongoDB repositories |
| @DataRedisTest | Redis repositories | Other beans | Redis repositories |

### Q5: How do you use Testcontainers in Spring Boot tests? Explain module containers, static containers, and reusable containers.

**Answer:**

Testcontainers provides lightweight, disposable instances of databases, message brokers, and other services in Docker containers for integration tests.

**Basic setup:**

```xml
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>testcontainers-bom</artifactId>
    <version>1.19.3</version>
    <type>pom</type>
    <scope>import</scope>
</dependency>
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>postgresql</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>junit-jupiter</artifactId>
    <scope>test</scope>
</dependency>
```

**Module containers (specific database containers):**

```java
@SpringBootTest
@Testcontainers
class OrderRepositoryContainerTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");

    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
        registry.add("spring.datasource.driver-class-name", postgres::getDriverClassName);
        registry.add("spring.jpa.hibernate.ddl-auto", () -> "create-drop");
    }

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    void shouldPersistOrderInPostgres() {
        Order order = new Order("cust-1", OrderStatus.PENDING);
        entityManager.persistAndFlush(order);

        List<Order> found = orderRepository.findByCustomerId("cust-1");
        assertThat(found).hasSize(1);
        assertThat(found.get(0).getStatus()).isEqualTo(OrderStatus.PENDING);
    }
}
```

**Multiple containers:**

```java
@SpringBootTest
@Testcontainers
class MultiContainerTest {

    private static final Network network = Network.newNetwork();

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine")
        .withNetwork(network)
        .withNetworkAliases("postgres")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");

    @Container
    static GenericContainer<?> redis = new GenericContainer<>("redis:7-alpine")
        .withNetwork(network)
        .withNetworkAliases("redis")
        .withExposedPorts(6379);

    @Container
    static KafkaContainer kafka = new KafkaContainer(
        DockerImageName.parse("confluentinc/cp-kafka:7.5.0"))
        .withNetwork(network);

    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
        registry.add("spring.redis.host", redis::getHost);
        registry.add("spring.redis.port", () -> redis.getMappedPort(6379));
        registry.add("spring.kafka.bootstrap-servers", kafka::getBootstrapServers);
    }
}
```

**Static containers (shared across test classes):**

```java
abstract class AbstractIntegrationTest {

    private static final PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");

    static {
        postgres.start();
    }

    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }
}

class OrderServiceIntegrationTest extends AbstractIntegrationTest {
    // Reuses the same PostgreSQL container
}

class PaymentServiceIntegrationTest extends AbstractIntegrationTest {
    // Reuses the same PostgreSQL container
}
```

**Reusable containers (stay running between test runs):**

```java
@Testcontainers
class ReusableContainerTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine")
        .withReuse(true)  // Container stays running
        .withLabel("reusable", "true");
}
```

Enable reuse in `~/.testcontainers.properties`:

```properties
testcontainers.reuse.enable=true
```

**Custom container with wait strategies:**

```java
@SpringBootTest
@Testcontainers
class CustomContainerTest {

    @Container
    static GenericContainer<?> customService = new GenericContainer<>("my-service:latest")
        .withExposedPorts(8080)
        .withEnv("SPRING_PROFILES_ACTIVE", "test")
        .waitingFor(Wait.forHttp("/actuator/health")
            .forStatusCode(200)
            .withStartupTimeout(Duration.ofSeconds(60)))
        .withStartupAttempts(3);

    @Test
    void shouldCallCustomService() {
        String url = String.format("http://%s:%d/api/data",
            customService.getHost(), customService.getMappedPort(8080));

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }
}
```

**Testcontainers with Flyway migrations:**

```java
@SpringBootTest
@Testcontainers
class FlywayMigrationTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");

    @DynamicPropertySource
    static void properties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
        registry.add("spring.flyway.enabled", () -> "true");
    }

    @Autowired
    private DataSource dataSource;

    @Test
    void allMigrationsShouldApply() {
        JdbcTemplate jdbc = new JdbcTemplate(dataSource);
        List<String> tables = jdbc.queryForList(
            "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'",
            String.class);

        assertThat(tables).contains("flyway_schema_history");
        assertThat(tables).contains("orders");
        assertThat(tables).contains("order_items");
    }
}
```

### Q6: How do you write integration tests in Spring Boot? How do you manage database transactions and test profiles?

**Answer:**

Integration tests in Spring Boot verify that multiple components work together. They typically involve the database, message brokers, and external service clients.

**Transaction management:**

Spring Boot integration tests run within a transaction by default. Each test rolls back when complete, preventing data leakage between tests.

```java
@SpringBootTest
@Transactional  // Each test runs in a transaction that rolls back
class OrderServiceIntegrationTest {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private InventoryRepository inventoryRepository;

    @Autowired
    private OrderService orderService;

    @Test
    void placeOrderShouldDeductInventory() {
        InventoryItem item = new InventoryItem("SKU-001", 10);
        inventoryRepository.save(item);

        OrderRequest request = new OrderRequest("cust-1",
            List.of(new OrderItemRequest("SKU-001", 3)));

        Order result = orderService.placeOrder(request);

        assertThat(result.getStatus()).isEqualTo(OrderStatus.CONFIRMED);
        InventoryItem updated = inventoryRepository.findBySku("SKU-001").get();
        assertThat(updated.getQuantity()).isEqualTo(7); // 10 - 3
    }

    @Test
    @Rollback(false)  // Keep the data for debugging
    @Tag("debug")
    void debugTransaction() {
        // Useful for debugging â€” data persists after test
    }

    @Test
    @Commit  // Same as @Rollback(false)
    void commitTransaction() {
        // Data is committed
    }
}
```

**Test profiles:**

Use `@ActiveProfiles` to activate specific configuration for tests:

```yaml
# src/test/resources/application-test.yml
spring:
  datasource:
    url: jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1
    driver-class-name: org.h2.Driver
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true
  flyway:
    enabled: false
logging:
  level:
    org.springframework.security: DEBUG
    org.hibernate.SQL: DEBUG
```

```java
@SpringBootTest
@ActiveProfiles("test")
@Testcontainers
class OrderServiceTestProfileTest {

    @Autowired
    private OrderService orderService;

    @Autowired
    private Environment env;

    @Test
    void shouldUseTestProfile() {
        assertThat(env.getActiveProfiles()).contains("test");
    }
}
```

**Custom test configuration:**

```java
@SpringBootTest
@TestPropertySource(properties = {
    "app.feature.new-checkout=true",
    "app.payment.gateway.url=http://localhost:8080/mock",
    "app.payment.gateway.api-key=test-key"
})
class FeatureToggleTest {

    @Value("${app.feature.new-checkout}")
    private boolean newCheckout;

    @Test
    void featureFlagShouldBeEnabled() {
        assertThat(newCheckout).isTrue();
    }
}
```

**Test configuration with @TestConfiguration:**

```java
@SpringBootTest
class PaymentServiceTest {

    @Autowired
    private PaymentService paymentService;

    @Test
    void shouldUseMockPaymentGateway() {
        PaymentResult result = paymentService.processPayment(
            new PaymentRequest("cust-1", BigDecimal.valueOf(100)));
        assertThat(result.isSuccess()).isTrue();
    }

    @TestConfiguration
    static class TestConfig {

        @Bean
        @Primary
        @Profile("test")
        public PaymentGateway mockPaymentGateway() {
            return new MockPaymentGateway();
        }
    }
}
```

**Full integration test with external service mocking:**

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@Transactional
@Testcontainers
class OrderFullIntegrationTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");

    @DynamicPropertySource
    static void properties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private OrderRepository orderRepository;

    @MockitoBean
    private PaymentGateway paymentGateway;

    @BeforeEach
    void setUp() {
        orderRepository.deleteAll();
        when(paymentGateway.charge(anyString(), any(BigDecimal.class)))
            .thenReturn(new PaymentResult(true, "tx-12345"));
    }

    @Test
    void fullOrderFlow() throws Exception {
        // 1. Create inventory
        InventoryItem item = new InventoryItem("SKU-001", 10);
        givenInventory(item);

        // 2. Place order
        mockMvc.perform(post("/api/orders")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                    {
                        "customerId": "cust-1",
                        "items": [{"sku": "SKU-001", "quantity": 2}]
                    }"""))
            .andExpect(status().isCreated());

        // 3. Verify database state
        assertThat(orderRepository.count()).isEqualTo(1);
        Order savedOrder = orderRepository.findAll().get(0);
        assertThat(savedOrder.getStatus()).isEqualTo(OrderStatus.CONFIRMED);
    }

    private void givenInventory(InventoryItem item) {
        // Helper to set up test data
    }
}
```

### Q7: Explain the F.I.R.S.T. principles of unit testing. How do you apply them in practice?

**Answer:**

The F.I.R.S.T. principles are a set of guidelines for writing effective unit tests:

- **F**ast â€” Tests should run quickly. Slow tests discourage frequent execution.
- **I**solated â€” Tests should not depend on each other. Each test should run independently, in any order.
- **R**epeatable â€” Tests should produce the same result every time, regardless of environment.
- **S**elf-validating â€” Tests should have a boolean outcome (pass/fail) without manual inspection.
- **T**imely â€” Tests should be written at the right time (preferably before the code).

**Fast:**

```java
// BAD: Slow test â€” hits the database
@Test
void slowOrderTest() {
    Order order = new Order();
    orderRepository.save(order);  // Database call
    Order found = orderRepository.findById(order.getId()).get();
    assertThat(found.getCustomerId()).isEqualTo("cust-1");
}

// GOOD: Fast test â€” uses mocks
@Test
void fastOrderTest() {
    when(orderRepository.findById(1L))
        .thenReturn(Optional.of(new Order("cust-1")));

    Order result = orderService.findById(1L);

    assertThat(result.getCustomerId()).isEqualTo("cust-1");
}
```

**Isolated:**

```java
// BAD: Tests depend on shared state
private static Order sharedOrder = new Order();

@Test
void test1() {
    sharedOrder.setStatus(OrderStatus.CONFIRMED);
    assertThat(sharedOrder.getStatus()).isEqualTo(OrderStatus.CONFIRMED);
}

@Test
void test2() {
    // FAILS if test1 ran first â€” sharedOrder is CONFIRMED
    assertThat(sharedOrder.getStatus()).isEqualTo(OrderStatus.PENDING);
}

// GOOD: Each test creates its own data
@Test
void isolatedTest1() {
    Order order = new Order("cust-1");
    order.setStatus(OrderStatus.CONFIRMED);
    assertThat(order.getStatus()).isEqualTo(OrderStatus.CONFIRMED);
}

@Test
void isolatedTest2() {
    Order order = new Order("cust-1");
    assertThat(order.getStatus()).isEqualTo(OrderStatus.PENDING);
}
```

**Repeatable:**

```java
// BAD: Non-repeatable â€” depends on current time
@Test
void badDateTest() {
    Order order = new Order();
    order.validateExpiration();
    assertThat(order.getStatus()).isEqualTo(OrderStatus.EXPIRED);
    // This test passes only on certain dates
}

// GOOD: Repeatable â€” controls the time
@Test
void goodDateTest() {
    Clock clock = Clock.fixed(
        Instant.parse("2025-01-15T10:00:00Z"),
        ZoneId.systemDefault());
    Order order = new Order("cust-1", clock);
    order.setExpiresAt(Instant.parse("2025-01-14T10:00:00Z"));

    order.validateExpiration();

    assertThat(order.getStatus()).isEqualTo(OrderStatus.EXPIRED);
}
```

**Self-validating:**

```java
// BAD: Requires manual inspection
@Test
void badTest() {
    Order order = orderService.findById(1L);
    System.out.println("Order status: " + order.getStatus());
    // Developer must read the output
}

// GOOD: Self-validating assertion
@Test
void goodTest() {
    Order order = orderService.findById(1L);
    assertThat(order.getStatus()).isEqualTo(OrderStatus.CONFIRMED);
}
```

**Timely:**

Write tests before (TDD) or immediately after writing production code. Tests written weeks later often miss edge cases and are harder to write because the developer has forgotten the implementation details.

### Q8: What is code coverage? How do you configure JaCoCo with coverage thresholds in a Spring Boot project?

**Answer:**

Code coverage measures the percentage of code executed during automated tests. JaCoCo (Java Code Coverage) is the most popular coverage tool for Java projects. It measures several types of coverage:

- **Instruction coverage** â€” percentage of bytecode instructions executed
- **Branch coverage** â€” percentage of branches (if/else, switch) executed
- **Line coverage** â€” percentage of source lines executed
- **Method coverage** â€” percentage of methods called
- **Class coverage** â€” percentage of classes loaded

**Maven configuration with JaCoCo and coverage thresholds:**

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.jacoco</groupId>
            <artifactId>jacoco-maven-plugin</artifactId>
            <version>0.8.11</version>
            <configuration>
                <excludes>
                    <exclude>**/config/**</exclude>
                    <exclude>**/dto/**</exclude>
                    <exclude>**/entity/**</exclude>
                    <exclude>**/Application.*</exclude>
                </excludes>
            </configuration>
            <executions>
                <execution>
                    <id>pre-unit-test</id>
                    <goals>
                        <goal>prepare-agent</goal>
                    </goals>
                </execution>
                <execution>
                    <id>post-unit-test</id>
                    <phase>test</phase>
                    <goals>
                        <goal>report</goal>
                    </goals>
                </execution>
                <execution>
                    <id>check</id>
                    <goals>
                        <goal>check</goal>
                    </goals>
                    <configuration>
                        <rules>
                            <rule>
                                <element>BUNDLE</element>
                                <limits>
                                    <limit>
                                        <counter>INSTRUCTION</counter>
                                        <value>COVEREDRATIO</value>
                                        <minimum>0.80</minimum>
                                    </limit>
                                    <limit>
                                        <counter>BRANCH</counter>
                                        <value>COVEREDRATIO</value>
                                        <minimum>0.70</minimum>
                                    </limit>
                                    <limit>
                                        <counter>LINE</counter>
                                        <value>COVEREDRATIO</value>
                                        <minimum>0.80</minimum>
                                    </limit>
                                    <limit>
                                        <counter>CLASS</counter>
                                        <value>MISSEDCOUNT</value>
                                        <maximum>5</maximum>
                                    </limit>
                                </limits>
                            </rule>
                            <rule>
                                <element>PACKAGE</element>
                                <includes>
                                    <include>com.example.service</include>
                                </includes>
                                <limits>
                                    <limit>
                                        <counter>INSTRUCTION</counter>
                                        <value>COVEREDRATIO</value>
                                        <minimum>0.90</minimum>
                                    </limit>
                                </limits>
                            </rule>
                        </rules>
                    </configuration>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

**Gradle configuration:**

```groovy
plugins {
    id 'java'
    id 'jacoco'
}

jacocoTestCoverageVerification {
    violationRules {
        rule {
            element = 'BUNDLE'
            limit {
                counter = 'INSTRUCTION'
                value = 'COVEREDRATIO'
                minimum = 0.80
            }
            limit {
                counter = 'BRANCH'
                value = 'COVEREDRATIO'
                minimum = 0.70
            }
        }
        rule {
            element = 'CLASS'
            excludes = [
                'com.example.config.*',
                'com.example.dto.*',
                'com.example.Application'
            ]
            limit {
                counter = 'LINE'
                value = 'COVEREDRATIO'
                minimum = 0.85
            }
        }
    }
}

check.dependsOn jacocoTestCoverageVerification
```

**Excluding code from coverage:**

Use annotations to exclude specific code:

```java
@Generated
public class GeneratedCode {
    // Excluded from coverage via @Generated annotation
}
```

Or use JaCoCo exclusions in configuration:

```xml
<excludes>
    <exclude>**/config/**</exclude>
    <exclude>**/dto/*</exclude>
    <exclude>**/entity/*</exclude>
    <exclude>**/Application.*</exclude>
</excludes>
```

**Generating HTML reports:**

```xml
<plugin>
    <groupId>org.jacoco</groupId>
    <artifactId>jacoco-maven-plugin</artifactId>
    <executions>
        <execution>
            <id>report</id>
            <phase>verify</phase>
            <goals>
                <goal>report</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

Run with:

```bash
mvn verify
```

Reports are generated in `target/site/jacoco/index.html`.

### Q9: What is mutation testing? How do you configure Pitest in a Spring Boot project?

**Answer:**

Mutation testing evaluates the quality of your tests by introducing small changes (mutations) to your code and checking whether the tests detect them. If tests pass on mutated code, the mutation "survives," indicating that the tests are not adequately verifying the code.

Pitest is the leading mutation testing tool for Java. It applies mutation operators such as:

- Changing `>` to `>=`
- Removing method calls
- Negating conditionals
- Returning `null` instead of a value
- Changing constants

**Maven configuration:**

```xml
<plugin>
    <groupId>org.pitest</groupId>
    <artifactId>pitest-maven</artifactId>
    <version>1.15.0</version>
    <configuration>
        <targetClasses>
            <param>com.example.service.*</param>
            <param>com.example.domain.*</param>
        </targetClasses>
        <targetTests>
            <param>com.example.service.*</param>
            <param>com.example.domain.*</param>
        </targetTests>
        <excludedClasses>
            <param>com.example.config.*</param>
            <param>com.example.dto.*</param>
        </excludedClasses>
        <mutationThreshold>80</mutationThreshold>
        <timeoutConstant>3000</timeoutConstant>
        <threads>4</threads>
        <mutators>
            <mutator>CONDITIONALS_BOUNDARY</mutator>
            <mutator>INCREMENTS</mutator>
            <mutator>INVERT_NEGS</mutator>
            <mutator>MATH</mutator>
            <mutator>NEGATE_CONDITIONALS</mutator>
            <mutator>RETURN_VALS</mutator>
            <mutator>VOID_METHOD_CALLS</mutator>
        </mutators>
        <outputFormats>
            <param>HTML</param>
            <param>XML</param>
        </outputFormats>
    </configuration>
    <dependencies>
        <dependency>
            <groupId>org.pitest</groupId>
            <artifactId>pitest-junit5-plugin</artifactId>
            <version>1.2.1</version>
        </dependency>
    </dependencies>
</plugin>
```

**Gradle configuration:**

```groovy
plugins {
    id 'info.solidsoft.pitest' version '1.9.11'
}

pitest {
    targetClasses = ['com.example.service.*', 'com.example.domain.*']
    targetTests = ['com.example.service.*', 'com.example.domain.*']
    excludedClasses = ['com.example.config.*', 'com.example.dto.*']
    mutationThreshold = 80
    timeoutConstant = 3000
    threads = 4
    mutators = ['CONDITIONALS_BOUNDARY', 'INCREMENTS', 'INVERT_NEGS',
                'MATH', 'NEGATE_CONDITIONALS', 'RETURN_VALS', 'VOID_METHOD_CALLS']
    outputFormats = ['HTML', 'XML']
    junit5PluginVersion = '1.2.1'
}
```

**Running Pitest:**

```bash
mvn org.pitest:pitest-maven:mutationCoverage
```

**Example of mutation testing in action:**

Consider this method:

```java
public class DiscountCalculator {

    public BigDecimal calculateDiscount(Order order) {
        BigDecimal discount = BigDecimal.ZERO;
        if (order.getTotal().compareTo(BigDecimal.valueOf(100)) > 0) {
            discount = order.getTotal().multiply(BigDecimal.valueOf(0.10));
        }
        return discount;
    }
}
```

With these tests:

```java
class DiscountCalculatorTest {

    private final DiscountCalculator calculator = new DiscountCalculator();

    @Test
    void ordersOver100Get10PercentDiscount() {
        Order order = new Order(BigDecimal.valueOf(200));
        BigDecimal discount = calculator.calculateDiscount(order);
        assertThat(discount).isEqualByComparingTo(BigDecimal.valueOf(20));
    }

    @Test
    void ordersUnder100GetNoDiscount() {
        Order order = new Order(BigDecimal.valueOf(50));
        BigDecimal discount = calculator.calculateDiscount(order);
        assertThat(discount).isEqualByComparingTo(BigDecimal.ZERO);
    }

    @Test
    void ordersExactly100GetNoDiscount() {
        Order order = new Order(BigDecimal.valueOf(100));
        BigDecimal discount = calculator.calculateDiscount(order);
        assertThat(discount).isEqualByComparingTo(BigDecimal.ZERO);
    }
}
```

Pitest will mutate the condition `> 0` to `>= 0`. If the tests pass (they would â€” we test the boundary), the mutation survives. We need to add:

```java
@Test
void ordersOver100BoundaryTest() {
    // This test catches the mutated condition
    Order order = new Order(BigDecimal.valueOf(100));
    BigDecimal discount = calculator.calculateDiscount(order);
    assertThat(discount).isEqualByComparingTo(BigDecimal.ZERO);

    order = new Order(BigDecimal.valueOf(100.01));
    discount = calculator.calculateDiscount(order);
    assertThat(discount).isEqualByComparingTo(BigDecimal.valueOf(10.001));
}
```

**Interpreting Pitest results:**

- **Survived mutation (RED)**: Tests did not catch the change â€” need better tests.
- **Killed mutation (GREEN)**: Tests caught the change.
- **Timed out**: Mutation caused infinite loop.
- **Non-viable**: Mutation produced uncompilable code.

Pitest also generates a HTML report in `target/pit-reports/` showing exactly which mutations survived and which line of code they affected.

### Q10: How do you write parameterized and dynamic tests in JUnit 5? When would you use each?

**Answer:**

**Parameterized tests** run the same test logic with different inputs. Use them to avoid code duplication when testing multiple variations of the same behavior.

```java
class ParameterizedTestExamples {

    // @ValueSource â€” simplest, for single primitive parameters
    @ParameterizedTest
    @ValueSource(strings = {"racecar", "radar", "level", "madam"})
    void palindromesAreDetected(String candidate) {
        assertThat(PalindromeChecker.isPalindrome(candidate)).isTrue();
    }

    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3, 5, 8, 13})
    void fibonacciNumbersArePositive(int number) {
        assertThat(number).isPositive();
    }

    // @CsvSource â€” for multiple parameters
    @ParameterizedTest
    @CsvSource({
        "1, 1, 2",
        "2, 3, 5",
        "10, 20, 30",
        "100, -50, 50"
    })
    void additionWorks(int a, int b, int expected) {
        assertThat(a + b).isEqualTo(expected);
    }

    @ParameterizedTest
    @CsvSource(delimiter = '|', textBlock = """
        100  | 10  | 90
        200  | 25  | 175
        50   | 0   | 50
    """)
    void calculateNetAmount(BigDecimal gross, BigDecimal tax, BigDecimal expected) {
        BigDecimal net = gross.subtract(tax);
        assertThat(net).isEqualByComparingTo(expected);
    }

    // @CsvFileSource â€” loads from classpath CSV file
    @ParameterizedTest
    @CsvFileSource(resources = "/test-data/orders.csv", numLinesToSkip = 1)
    void orderValidation(String customerId, int itemCount, String expectedStatus) {
        Order order = new Order(customerId);
        for (int i = 0; i < itemCount; i++) {
            order.addItem(new OrderItem("SKU-" + i, 1));
        }
        ValidationResult result = orderValidator.validate(order);
        assertThat(result.getStatus().name()).isEqualTo(expectedStatus);
    }

    // @EnumSource â€” for enum parameters
    @ParameterizedTest
    @EnumSource(value = OrderStatus.class, names = {"CONFIRMED", "SHIPPED"}, mode = EnumSource.Mode.INCLUDE)
    void activeStatusesAreNotPending(OrderStatus status) {
        assertThat(status).isNotEqualTo(OrderStatus.PENDING);
    }

    @ParameterizedTest
    @EnumSource(value = OrderStatus.class, mode = EnumSource.Mode.EXCLUDE, names = {"DELETED"})
    void orderStatusHasDisplayName(OrderStatus status) {
        assertThat(status.getDisplayName()).isNotBlank();
    }

    // @MethodSource â€” most flexible, for complex types
    @ParameterizedTest
    @MethodSource("provideOrdersForDiscount")
    void discountCalculation(Order order, BigDecimal expectedDiscount) {
        BigDecimal discount = discountCalculator.calculate(order);
        assertThat(discount).isEqualByComparingTo(expectedDiscount);
    }

    static Stream<Arguments> provideOrdersForDiscount() {
        return Stream.of(
            Arguments.of(new Order(BigDecimal.valueOf(50)), BigDecimal.ZERO),
            Arguments.of(new Order(BigDecimal.valueOf(150)), BigDecimal.valueOf(15)),
            Arguments.of(new Order(BigDecimal.valueOf(300)), BigDecimal.valueOf(45)),
            Arguments.of(new Order(BigDecimal.valueOf(1000)), BigDecimal.valueOf(150))
        );
    }

    // @ArgumentsSource â€” custom ArgumentsProvider
    @ParameterizedTest
    @ArgumentsSource(OrderArgumentsProvider.class)
    void customProviderTest(Order order) {
        assertThat(order.getCustomerId()).isNotBlank();
        assertThat(order.getItems()).isNotEmpty();
    }

    static class OrderArgumentsProvider implements ArgumentsProvider {
        @Override
        public Stream<? extends Arguments> provideArguments(ExtensionContext context) {
            return Stream.of(
                Arguments.of(new Order("cust-1", List.of(new OrderItem("SKU-1", 1)))),
                Arguments.of(new Order("cust-2", List.of(new OrderItem("SKU-2", 2))))
            );
        }
    }

    // Custom display names
    @ParameterizedTest(name = "Order {0} with {1} items should be {2}")
    @CsvSource({
        "CUST-001, 1, VALID",
        "CUST-002, 10, VALID",
        ", 1, INVALID"
    })
    void descriptiveTestName(String customerId, int items, String status) {
        // Custom {index}, {arguments}, {0}, {1}, etc. in test name
    }
}
```

**Dynamic tests** are generated at runtime by a `@TestFactory` method. Unlike parameterized tests where the data varies but the structure is fixed, dynamic tests can vary both the test logic and the test structure.

```java
class DynamicTestExamples {

    private final OrderService orderService = new OrderService();

    @TestFactory
    Collection<DynamicTest> dynamicTestsFromCollection() {
        return List.of(
            DynamicTest.dynamicTest("pending order can be confirmed",
                () -> {
                    Order order = new Order("cust-1", OrderStatus.PENDING);
                    assertThat(orderService.canTransitionTo(order, OrderStatus.CONFIRMED)).isTrue();
                }),
            DynamicTest.dynamicTest("confirmed order can be shipped",
                () -> {
                    Order order = new Order("cust-1", OrderStatus.CONFIRMED);
                    assertThat(orderService.canTransitionTo(order, OrderStatus.SHIPPED)).isTrue();
                }),
            DynamicTest.dynamicTest("delivered order cannot be cancelled",
                () -> {
                    Order order = new Order("cust-1", OrderStatus.DELIVERED);
                    assertThat(orderService.canTransitionTo(order, OrderStatus.CANCELLED)).isFalse();
                })
        );
    }

    @TestFactory
    Stream<DynamicNode> dynamicTestsFromStream() {
        return Stream.of(OrderStatus.values())
            .map(status -> DynamicContainer.dynamicContainer(
                "Status: " + status,
                Stream.of(
                    DynamicTest.dynamicTest("has display name",
                        () -> assertThat(status.getDisplayName()).isNotBlank()),
                    DynamicTest.dynamicTest("is in correct lifecycle order",
                        () -> assertThat(status.getOrder()).isPositive())
                )
            ));
    }

    @TestFactory
    Stream<DynamicNode> dynamicTestsForValidation() {
        Map<String, String> validationCases = Map.of(
            "empty customer ID should be invalid", "",
            "customer ID with special chars should be invalid", "cust@#!",
            "valid customer ID should pass", "cust-123-abc"
        );

        return validationCases.entrySet().stream()
            .map(entry -> DynamicTest.dynamicTest(entry.getKey(),
                () -> {
                    Order order = new Order(entry.getValue());
                    boolean valid = orderService.validateOrder(order);
                    boolean expectedValid = entry.getValue().matches("[a-zA-Z0-9-]+");
                    assertThat(valid).isEqualTo(expectedValid);
                }));
    }

    @TestFactory
    @DisplayName("Dynamic tests from external data source")
    Stream<DynamicNode> dynamicTestsFromFile() throws IOException {
        Path testData = Paths.get("src/test/resources/order-scenarios.csv");
        return Files.lines(testData)
            .skip(1) // Skip header
            .map(line -> {
                String[] parts = line.split(",");
                String customerId = parts[0];
                String itemSkus = parts[1];
                boolean shouldSucceed = Boolean.parseBoolean(parts[2]);

                return DynamicTest.dynamicTest(
                    "Order from " + customerId + " should " +
                    (shouldSucceed ? "succeed" : "fail"),
                    () -> {
                        List<OrderItem> items = Arrays.stream(itemSkus.split(";"))
                            .map(sku -> new OrderItem(sku, 1))
                            .toList();
                        OrderRequest request = new OrderRequest(customerId, items);
                        if (shouldSucceed) {
                            assertThatCode(() -> orderService.placeOrder(request))
                                .doesNotThrowAnyException();
                        } else {
                            assertThatThrownBy(() -> orderService.placeOrder(request))
                                .isInstanceOf(OrderValidationException.class);
                        }
                    });
            });
    }
}
```

**When to use parameterized vs dynamic tests:**

| Aspect | Parameterized Tests | Dynamic Tests |
|--------|-------------------|---------------|
| Use case | Same logic, different data | Different logic, different data |
| Structure | Fixed test logic per run | Varies per test node |
| Data | Annotations (@ValueSource, @CsvSource) | Programmatic generation |
| Test names | `name` attribute in annotation | `dynamicTest(name, executable)` |
| Nested tests | No | Yes (DynamicContainer) |
| Runtime generation | No | Yes |
| IDE support | Excellent | Good |
| Best for | Validation, calculations, mappings | State machines, file-based scenarios, API testing |

### Q11: How do you write tests for asynchronous code in Spring Boot? How do you handle @Async, CompletableFuture, and reactive types?

**Answer:**

Testing asynchronous code requires specific techniques to handle the concurrent nature of the code under test.

**Testing @Async methods:**

```java
@EnableAsync
@SpringBootTest
class AsyncServiceTest {

    @Autowired
    private AsyncService asyncService;

    @Test
    void asyncMethodReturnsImmediately() {
        // The method returns immediately, work happens in background
        CompletableFuture<String> future = asyncService.processAsync("test");
        assertThat(future).isNotNull();
    }

    @Test
    void asyncMethodCompletesSuccessfully() throws Exception {
        CompletableFuture<String> future = asyncService.processAsync("test");
        String result = future.get(5, TimeUnit.SECONDS); // Wait for completion
        assertThat(result).isEqualTo("Processed: test");
    }

    @Test
    void asyncMethodThrowsException() {
        CompletableFuture<String> future = asyncService.processAsync("error");
        assertThatThrownBy(() -> future.get(5, TimeUnit.SECONDS))
            .hasCauseInstanceOf(IllegalArgumentException.class);
    }
}
```

**Testing CompletableFuture chains:**

```java
@Test
void completableFutureChaining() throws Exception {
    CompletableFuture<String> result = CompletableFuture
        .supplyAsync(() -> fetchData("user-1"))
        .thenApplyAsync(this::transformData)
        .thenApplyAsync(this::enrichData)
        .exceptionally(ex -> "fallback");

    String finalResult = result.get(10, TimeUnit.SECONDS);
    assertThat(finalResult).contains("User");
}

@Test
void completableFutureComposition() throws Exception {
    CompletableFuture<String> service1 = asyncService.callService1();
    CompletableFuture<String> service2 = asyncService.callService2();

    CompletableFuture<String> combined = service1
        .thenCombine(service2, (r1, r2) -> r1 + " | " + r2);

    String result = combined.get(10, TimeUnit.SECONDS);
    assertThat(result).contains("Service1").contains("Service2");
}

@Test
void completableFutureAllOf() throws Exception {
    CompletableFuture<String> f1 = asyncService.callService1();
    CompletableFuture<String> f2 = asyncService.callService2();
    CompletableFuture<String> f3 = asyncService.callService3();

    CompletableFuture<Void> all = CompletableFuture.allOf(f1, f2, f3);
    all.get(10, TimeUnit.SECONDS);

    assertThat(f1.get()).isNotBlank();
    assertThat(f2.get()).isNotBlank();
    assertThat(f3.get()).isNotBlank();
}
```

**Testing reactive types (Mono/Flux):**

```java
@SpringBootTest
class ReactiveServiceTest {

    @Autowired
    private ReactiveOrderService reactiveService;

    @MockitoBean
    private OrderRepository orderRepository;

    @Test
    void monoReturnsSingleResult() {
        when(orderRepository.findById(1L))
            .thenReturn(Mono.just(new Order("cust-1")));

        Mono<Order> result = reactiveService.findById(1L);

        StepVerifier.create(result)
            .expectNextMatches(order -> order.getCustomerId().equals("cust-1"))
            .verifyComplete();
    }

    @Test
    void fluxReturnsMultipleResults() {
        when(orderRepository.findByCustomerId("cust-1"))
            .thenReturn(Flux.just(
                new Order("cust-1"), new Order("cust-1")));

        Flux<Order> result = reactiveService.findByCustomer("cust-1");

        StepVerifier.create(result)
            .expectNextCount(2)
            .verifyComplete();
    }

    @Test
    void monoHandlesError() {
        when(orderRepository.findById(-1L))
            .thenReturn(Mono.error(new OrderNotFoundException(-1L)));

        Mono<Order> result = reactiveService.findById(-1L);

        StepVerifier.create(result)
            .expectError(OrderNotFoundException.class)
            .verify();
    }

    @Test
    void fluxVerificationWithAssertions() {
        when(orderRepository.findAll())
            .thenReturn(Flux.just(
                new Order("cust-1", OrderStatus.PENDING),
                new Order("cust-2", OrderStatus.CONFIRMED)));

        Flux<Order> result = reactiveService.findAll();

        StepVerifier.create(result)
            .assertNext(order -> assertThat(order.getCustomerId()).isEqualTo("cust-1"))
            .assertNext(order -> assertThat(order.getCustomerId()).isEqualTo("cust-2"))
            .verifyComplete();
    }

    @Test
    void testReactiveController() {
        webTestClient.get().uri("/api/orders/1")
            .exchange()
            .expectStatus().isOk()
            .expectBody()
            .jsonPath("$.customerId").isEqualTo("cust-1");
    }

    @Test
    void testReactiveWithDelay() {
        when(orderRepository.findById(1L))
            .thenReturn(Mono.just(new Order("cust-1"))
                .delayElement(Duration.ofMillis(100)));

        Mono<Order> result = reactiveService.findById(1L);

        StepVerifier.create(result)
            .expectSubscription()
            .expectNoEvent(Duration.ofMillis(50))
            .thenAwait(Duration.ofMillis(100))
            .expectNextMatches(o -> o.getCustomerId().equals("cust-1"))
            .verifyComplete();
    }
}
```

**Testing scheduled tasks:**

```java
@SpringBootTest
class ScheduledTaskTest {

    @Autowired
    private ScheduledTaskService scheduledService;

    @Autowired
    private OrderRepository orderRepository;

    @Test
    @Transactional
    void scheduledTaskProcessesPendingOrders() {
        // Given
        orderRepository.save(new Order("cust-1", OrderStatus.PENDING));
        orderRepository.save(new Order("cust-2", OrderStatus.PENDING));

        // When
        scheduledService.processPendingOrders();

        // Then
        List<Order> processed = orderRepository.findByStatus(OrderStatus.PROCESSING);
        assertThat(processed).hasSize(2);
    }
}
```

**Testing asynchronous event listeners:**

```java
@SpringBootTest
class AsyncEventListenerTest {

    @Autowired
    private ApplicationEventPublisher eventPublisher;

    @Autowired
    private AsyncEventListener listener;

    @Test
    void eventIsProcessedAsynchronously() throws Exception {
        OrderCreatedEvent event = new OrderCreatedEvent("order-1", "cust-1");

        eventPublisher.publishEvent(event);

        Thread.sleep(500); // Allow async processing
        assertThat(listener.getProcessedEvents()).contains(event);
    }
}
```

### Q12: How do you write performance tests for a Spring Boot application? Describe JMH, Gatling, and k6.

**Answer:**

Performance testing evaluates how an application behaves under load. Three common tools are JMH (microbenchmarks), Gatling (load testing), and k6 (modern load testing).

**JMH (Java Microbenchmark Harness):**

JMH measures the performance of small code snippets with nanosecond precision.

```xml
<dependency>
    <groupId>org.openjdk.jmh</groupId>
    <artifactId>jmh-core</artifactId>
    <version>1.37</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.openjdk.jmh</groupId>
    <artifactId>jmh-generator-annprocess</artifactId>
    <version>1.37</version>
    <scope>test</scope>
</dependency>
```

```java
@BenchmarkMode(Mode.AverageTime)
@OutputTimeUnit(TimeUnit.NANOSECONDS)
@State(Scope.Thread)
@Fork(value = 2, warmups = 1)
@Warmup(iterations = 5, time = 1)
@Measurement(iterations = 10, time = 1)
public class StringBenchmark {

    private String data;

    @Setup
    public void setUp() {
        data = "The quick brown fox jumps over the lazy dog";
    }

    @Benchmark
    public boolean containsWithStringMatch() {
        return data.matches(".*fox.*");
    }

    @Benchmark
    public boolean containsWithIndexOf() {
        return data.indexOf("fox") >= 0;
    }

    @Benchmark
    public boolean containsWithContains() {
        return data.contains("fox");
    }
}
```

```java
@BenchmarkMode(Mode.Throughput)
@OutputTimeUnit(TimeUnit.SECONDS)
@State(Scope.Benchmark)
@Fork(1)
public class OrderServiceBenchmark {

    @Param({"10", "100", "1000"})
    private int itemCount;

    private OrderService orderService;
    private OrderRequest request;

    @Setup
    public void setUp() {
        orderService = new OrderService();
        List<OrderItemRequest> items = new ArrayList<>();
        for (int i = 0; i < itemCount; i++) {
            items.add(new OrderItemRequest("SKU-" + i, 1));
        }
        request = new OrderRequest("cust-1", items);
    }

    @Benchmark
    public Order placeOrder(Blackhole blackhole) {
        Order order = orderService.placeOrder(request);
        blackhole.consume(order);
        return order;
    }
}
```

Run with:

```bash
mvn clean verify
java -jar target/benchmarks.jar
```

**Gatling (Load Testing):**

Gatling is a Scala-based load testing tool that generates HTML reports.

```scala
// src/gatling/scala/OrderSimulation.scala
package com.example

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class OrderSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("http://localhost:8080")
    .acceptHeader("application/json")
    .contentTypeHeader("application/json")

  val authFeeder = csv("users.csv").circular

  val scn = scenario("Order Flow")
    .feed(authFeeder)
    .exec(
      http("Login")
        .post("/api/auth/login")
        .body(StringBody("""{ "email": "${email}", "password": "${password}" }"""))
        .check(jsonPath("$.accessToken").saveAs("token"))
    )
    .exec(
      http("Create Order")
        .post("/api/orders")
        .header("Authorization", "Bearer ${token}")
        .body(StringBody("""
          {
            "customerId": "${customerId}",
            "items": [
              {"sku": "SKU-001", "quantity": 1},
              {"sku": "SKU-002", "quantity": 2}
            ]
          }
        """))
        .check(status.is(201))
        .check(jsonPath("$.id").saveAs("orderId"))
    )
    .exec(
      http("Get Order")
        .get("/api/orders/${orderId}")
        .header("Authorization", "Bearer ${token}")
        .check(status.is(200))
    )

  setUp(
    scn.inject(
      nothingFor(4.seconds),
      atOnceUsers(10),
      rampUsers(50).during(30.seconds),
      constantUsersPerSec(20).during(60.seconds),
      rampUsersPerSec(20).to(100).during(120.seconds)
    )
  ).protocols(httpProtocol)
}
```

Gatling Maven plugin:

```xml
<plugin>
    <groupId>io.gatling</groupId>
    <artifactId>gatling-maven-plugin</artifactId>
    <version>4.5.0</version>
    <configuration>
        <simulationClass>com.example.OrderSimulation</simulationClass>
    </configuration>
</plugin>
```

Run with:

```bash
mvn gatling:test
```

**k6 (Modern Load Testing):**

k6 is a JavaScript-based load testing tool:

```javascript
// k6-test.js
import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

const users = new SharedArray('users', function () {
  return JSON.parse(open('./users.json'));
});

export const options = {
  stages: [
    { duration: '5m', target: 100 },    // Ramp up
    { duration: '10m', target: 100 },    // Stay at 100
    { duration: '5m', target: 200 },     // Ramp up
    { duration: '10m', target: 200 },    // Stay at 200
    { duration: '5m', target: 0 },       // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'],  // 95% of requests under 2s
    http_req_failed: ['rate<0.01'],     // Less than 1% failure rate
    http_reqs: ['rate>100'],            // More than 100 req/s
  },
};

export default function () {
  const user = users[Math.floor(Math.random() * users.length)];

  // Login
  const loginRes = http.post('http://localhost:8080/api/auth/login', JSON.stringify({
    email: user.email,
    password: user.password,
  }), { headers: { 'Content-Type': 'application/json' } });

  check(loginRes, { 'login succeeded': (r) => r.status === 200 });
  const token = loginRes.json('accessToken');

  // Create order
  const orderPayload = {
    customerId: user.customerId,
    items: [
      { sku: 'SKU-' + Math.floor(Math.random() * 100), quantity: 1 },
    ],
  };

  const orderRes = http.post('http://localhost:8080/api/orders', JSON.stringify(orderPayload), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  check(orderRes, { 'order created': (r) => r.status === 201 });
  const orderId = orderRes.json('id');

  // Get order
  const getRes = http.get(`http://localhost:8080/api/orders/${orderId}`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });

  check(getRes, { 'order retrieved': (r) => r.status === 200 });

  sleep(1);
}
```

Run with:

```bash
k6 run k6-test.js
```

**Which tool to use:**

| Tool | Use Case | Language | Metrics | Reports |
|------|----------|----------|---------|---------|
| JMH | Microbenchmarks (methods, algorithms) | Java | ns, Î¼s, operations/s | Console, HTML |
| Gatling | Load/Stress tests | Scala/Script | Latency, throughput, percentiles | HTML (detailed) |
| k6 | Load/Smoke/Stress tests | JavaScript | Latency, throughput, thresholds | Cloud, JSON, HTML |
| Locust | Load tests (Python ecosystem) | Python | RPS, response time, users | Web UI |

### Q13: What is TDD? How do you apply it in a Spring Boot project? Show the red-green-refactor cycle.

**Answer:**

Test-Driven Development (TDD) is a software development approach where tests are written before production code. The cycle is Red-Green-Refactor:

1. **Red**: Write a failing test that describes the desired behavior.
2. **Green**: Write the minimum code to make the test pass.
3. **Refactor**: Improve the code while keeping all tests passing.

**TDD example: Building an order discount calculator**

Step 1 â€” Red (write failing test):

```java
class DiscountCalculatorTest {

    @Test
    void ordersOver100Get10PercentDiscount() {
        DiscountCalculator calculator = new DiscountCalculator();
        Order order = new Order(BigDecimal.valueOf(200));
        BigDecimal discount = calculator.calculate(order);
        assertThat(discount).isEqualByComparingTo(BigDecimal.valueOf(20));
    }
}
```

Test fails â€” `DiscountCalculator` does not exist yet.

Step 2 â€” Green (write minimal code):

```java
public class DiscountCalculator {
    public BigDecimal calculate(Order order) {
        return BigDecimal.ZERO; // Minimum to compile
    }
}
```

Update to make the test pass:

```java
public class DiscountCalculator {
    public BigDecimal calculate(Order order) {
        return order.getTotal().multiply(BigDecimal.valueOf(0.10));
    }
}
```

Step 3 â€” Refactor:

```java
public class DiscountCalculator {
    private static final BigDecimal THRESHOLD = BigDecimal.valueOf(100);
    private static final BigDecimal RATE = BigDecimal.valueOf(0.10);
    private static final BigDecimal ZERO = BigDecimal.ZERO;

    public BigDecimal calculate(Order order) {
        if (order.getTotal().compareTo(THRESHOLD) > 0) {
            return order.getTotal().multiply(RATE);
        }
        return ZERO;
    }
}
```

Add another test (Red):

```java
@Test
void ordersUnder100GetNoDiscount() {
    DiscountCalculator calculator = new DiscountCalculator();
    Order order = new Order(BigDecimal.valueOf(50));
    BigDecimal discount = calculator.calculate(order);
    assertThat(discount).isEqualByComparingTo(BigDecimal.ZERO);
}
```

The code already handles this case (Green). Continue with more tests:

```java
@Test
void ordersExactly100GetNoDiscount() {
    DiscountCalculator calculator = new DiscountCalculator();
    Order order = new Order(BigDecimal.valueOf(100));
    BigDecimal discount = calculator.calculate(order);
    assertThat(discount).isEqualByComparingTo(BigDecimal.ZERO);
}
```

**TDD in a Spring Boot service:**

Step 1 â€” Red:

```java
@ExtendWith(MockitoExtension.class)
class OrderServiceTest {

    @Mock
    private OrderRepository orderRepository;

    @Mock
    private InventoryService inventoryService;

    @InjectMocks
    private OrderService orderService;

    @Test
    void placeOrderShouldReserveInventory() {
        OrderRequest request = new OrderRequest("cust-1",
            List.of(new OrderItemRequest("SKU-001", 2)));
        when(inventoryService.isAvailable("SKU-001", 2)).thenReturn(true);

        orderService.placeOrder(request);

        verify(inventoryService).reserveInventory("SKU-001", 2);
    }
}
```

Step 2 â€” Green:

```java
@Service
public class OrderService {

    public Order placeOrder(OrderRequest request) {
        for (OrderItemRequest item : request.items()) {
            inventoryService.reserveInventory(item.sku(), item.quantity());
        }
        return null;
    }
}
```

Step 3 â€” Refactor:

```java
@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final InventoryService inventoryService;

    public OrderService(OrderRepository orderRepository,
                         InventoryService inventoryService) {
        this.orderRepository = orderRepository;
        this.inventoryService = inventoryService;
    }

    public Order placeOrder(OrderRequest request) {
        validateInventory(request);
        Order order = buildOrder(request);
        return orderRepository.save(order);
    }

    private void validateInventory(OrderRequest request) {
        for (OrderItemRequest item : request.items()) {
            if (!inventoryService.isAvailable(item.sku(), item.quantity())) {
                throw new InsufficientInventoryException(item.sku());
            }
            inventoryService.reserveInventory(item.sku(), item.quantity());
        }
    }

    private Order buildOrder(OrderRequest request) {
        Order order = new Order(request.customerId());
        for (OrderItemRequest item : request.items()) {
            order.addItem(new OrderItem(item.sku(), item.quantity()));
        }
        return order;
    }
}
```

**TDD benefits:**
- Forces you to think about the API before implementation.
- Ensures test coverage from the start.
- Encourages modular, testable design.
- Provides immediate feedback on changes.
- Serves as living documentation.

### Q14: What is BDD? How does it differ from TDD? Explain Given-When-Then with Cucumber and JUnit 5.

**Answer:**

BDD (Behavior-Driven Development) extends TDD by expressing tests in a language understandable by non-technical stakeholders. While TDD focuses on "does the code work correctly?", BDD asks "does the system behave as expected?" The key difference is BDD's use of natural language scenarios.

**Given-When-Then format:**

```
Scenario: Customer places an order with sufficient inventory
  Given customer "cust-1" is authenticated
  And product "SKU-001" has 10 units in stock
  When the customer places an order with 2 units of "SKU-001"
  Then the order status should be "CONFIRMED"
  And the inventory for "SKU-001" should be 8 units
```

**Cucumber with Spring Boot:**

First, add dependencies:

```xml
<dependency>
    <groupId>io.cucumber</groupId>
    <artifactId>cucumber-spring</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>io.cucumber</groupId>
    <artifactId>cucumber-junit-platform-engine</artifactId>
    <scope>test</scope>
</dependency>
```

Feature file (`src/test/resources/features/order.feature`):

```gherkin
Feature: Order Management
  As a customer
  I want to place orders
  So that I can purchase products

  Background:
    Given customer "cust-1" has a valid account
    And the inventory system is available

  Scenario: Place order with sufficient stock
    Given product "SKU-001" has 10 units in stock
    When customer "cust-1" places an order with:
      | sku     | quantity |
      | SKU-001 | 2        |
    Then the order should be created successfully
    And the order status should be "CONFIRMED"
    And the inventory for "SKU-001" should be 8 units

  Scenario: Place order with insufficient stock
    Given product "SKU-001" has 0 units in stock
    When customer "cust-1" places an order with:
      | sku     | quantity |
      | SKU-001 | 2        |
    Then the order should be rejected
    And the error message should contain "insufficient inventory"

  Scenario: Cancel a confirmed order
    Given customer "cust-1" has an existing order "ORD-001"
    And the order "ORD-001" status is "CONFIRMED"
    When customer "cust-1" cancels order "ORD-001"
    Then the order "ORD-001" status should be "CANCELLED"
    And the inventory should be restored
```

Step definitions (`src/test/java/com/example/bdd/OrderStepDefinitions.java`):

```java
package com.example.bdd;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;
import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;

@CucumberContextConfiguration
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class OrderStepDefinitions {

    @LocalServerPort
    private int port;

    @Autowired
    private RestTemplate restTemplate;

    private String accessToken;
    private ResponseEntity<String> lastResponse;
    private final Map<String, Integer> inventory = new HashMap<>();
    private final Map<String, String> orderStatuses = new HashMap<>();

    @Given("customer {string} has a valid account")
    public void customerHasAccount(String customerId) {
        // Setup or authenticate
        LoginRequest loginRequest = new LoginRequest(customerId + "@example.com", "password");
        ResponseEntity<AuthResponse> response = restTemplate.postForEntity(
            "http://localhost:" + port + "/api/auth/login",
            loginRequest, AuthResponse.class);
        accessToken = response.getBody().accessToken();
        assertThat(accessToken).isNotBlank();
    }

    @Given("product {string} has {int} units in stock")
    public void productHasStock(String sku, int quantity) {
        inventory.put(sku, quantity);
        // If there is an API to set inventory, call it here
    }

    @When("customer {string} places an order with:")
    public void customerPlacesOrder(String customerId, List<Map<String, String>> items) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> orderRequest = new HashMap<>();
        orderRequest.put("customerId", customerId);
        orderRequest.put("items", items.stream().map(item -> Map.of(
            "sku", item.get("sku"),
            "quantity", Integer.parseInt(item.get("quantity"))
        )).toList());

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(orderRequest, headers);
        lastResponse = restTemplate.exchange(
            "http://localhost:" + port + "/api/orders",
            HttpMethod.POST, request, String.class);
    }

    @Then("the order should be created successfully")
    public void orderShouldBeCreated() {
        assertThat(lastResponse.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }

    @Then("the order status should be {string}")
    public void orderStatusShouldBe(String expectedStatus) {
        // Parse JSON response and check status
        assertThat(lastResponse.getBody()).contains(expectedStatus);
    }

    @Then("the inventory for {string} should be {int} units")
    public void inventoryShouldBe(String sku, int expectedQuantity) {
        // Check inventory via API
        ResponseEntity<InventoryResponse> response = restTemplate.exchange(
            "http://localhost:" + port + "/api/inventory/" + sku,
            HttpMethod.GET, new HttpEntity<>(null), InventoryResponse.class);
        assertThat(response.getBody().quantity()).isEqualTo(expectedQuantity);
    }

    @Then("the order should be rejected")
    public void orderShouldBeRejected() {
        assertThat(lastResponse.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }

    @Then("the error message should contain {string}")
    public void errorMessageShouldContain(String message) {
        assertThat(lastResponse.getBody()).contains(message);
    }
}
```

Cucumber runner configuration:

```java
import org.junit.platform.suite.api.IncludeEngines;
import org.junit.platform.suite.api.SelectClasspathResource;
import org.junit.platform.suite.api.Suite;

@Suite
@IncludeEngines("cucumber")
@SelectClasspathResource("features")
@ConfigurationParameter(key = GLUE_PROPERTY_NAME, value = "com.example.bdd")
@ConfigurationParameter(key = PLUGIN_PROPERTY_NAME, value = "pretty, html:target/cucumber/report.html")
public class CucumberRunnerTest {
}
```

**BDD vs TDD comparison:**

| Aspect | TDD | BDD |
|--------|-----|-----|
| Focus | Unit level, code correctness | System level, business behavior |
| Language | Programming language (Java) | Natural language (Gherkin) |
| Audience | Developers | Developers + Business + QA |
| Granularity | Methods, classes | Features, scenarios |
| Tool | JUnit + Mockito | Cucumber, JBehave |
| When | During development | Before development (ATDD) |

### Q15: How do you test database migrations with Flyway or Liquibase in Spring Boot?

**Answer:**

Testing database migrations ensures that your schema changes apply correctly, roll forward cleanly, and can be reproduced in different environments.

**Testing Flyway migrations:**

```java
@SpringBootTest
@Testcontainers
class FlywayMigrationTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test")
        .withInitScript("init-schema.sql");

    @DynamicPropertySource
    static void properties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
        registry.add("spring.flyway.enabled", () -> "true");
        registry.add("spring.flyway.baseline-on-migrate", () -> "true");
    }

    @Autowired
    private DataSource dataSource;

    @Autowired
    private Flyway flyway;

    @Test
    void allMigrationsApplied() {
        FlywayMigrationSummary[] migrations = flyway.info().all();
        assertThat(migrations).isNotEmpty();
        assertThat(migrations).allMatch(m -> m.getState() == State.SUCCESS);
    }

    @Test
    void expectedTablesExist() {
        JdbcTemplate jdbc = new JdbcTemplate(dataSource);

        List<String> tables = jdbc.queryForList(
            "SELECT table_name FROM information_schema.tables " +
            "WHERE table_schema = 'public' ORDER BY table_name",
            String.class);

        assertThat(tables).contains(
            "orders", "order_items", "products", "inventory",
            "customers", "flyway_schema_history"
        );
    }

    @Test
    void expectedColumnsExist() {
        JdbcTemplate jdbc = new JdbcTemplate(dataSource);

        List<String> orderColumns = jdbc.queryForList(
            "SELECT column_name FROM information_schema.columns " +
            "WHERE table_name = 'orders' ORDER BY ordinal_position",
            String.class);

        assertThat(orderColumns).containsExactly(
            "id", "customer_id", "status", "total",
            "created_at", "updated_at"
        );
    }

    @Test
    void foreignKeysAreDefined() {
        JdbcTemplate jdbc = new JdbcTemplate(dataSource);

        List<String> foreignKeys = jdbc.queryForList(
            "SELECT conname FROM pg_constraint " +
            "WHERE contype = 'f' ORDER BY conname",
            String.class);

        assertThat(foreignKeys).contains(
            "fk_order_items_order",
            "fk_order_items_product"
        );
    }

    @Test
    void indexesAreCreated() {
        JdbcTemplate jdbc = new JdbcTemplate(dataSource);

        List<String> indexes = jdbc.queryForList(
            "SELECT indexname FROM pg_indexes " +
            "WHERE tablename IN ('orders', 'order_items') " +
            "ORDER BY indexname",
            String.class);

        assertThat(indexes).contains(
            "idx_orders_customer_id",
            "idx_orders_status",
            "idx_order_items_order_id"
        );
    }
}
```

**Testing Flyway rollback (undo):**

```java
@SpringBootTest
@Testcontainers
class FlywayRollbackTest {

    private static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine");

    @Test
    void migrationCanRollback() {
        // Apply all migrations
        Flyway flyway = Flyway.configure()
            .dataSource(postgres.getJdbcUrl(), postgres.getUsername(), postgres.getPassword())
            .load();
        flyway.migrate();

        // Undo the last migration
        flyway.undo();

        // Verify the schema is rolled back
        JdbcTemplate jdbc = new JdbcTemplate(
            DataSourceBuilder.create()
                .url(postgres.getJdbcUrl())
                .username(postgres.getUsername())
                .password(postgres.getPassword())
                .build());

        List<String> columns = jdbc.queryForList(
            "SELECT column_name FROM information_schema.columns " +
            "WHERE table_name = 'orders'", String.class);

        // Column added in the last migration should no longer exist
        assertThat(columns).doesNotContain("new_column_name");
    }
}
```

**Testing Liquibase changesets:**

```java
@SpringBootTest
@Testcontainers
class LiquibaseMigrationTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine");

    @DynamicPropertySource
    static void properties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
        registry.add("spring.liquibase.enabled", () -> "true");
    }

    @Autowired
    private DataSource dataSource;

    @Test
    void allChangeSetsApplied() {
        JdbcTemplate jdbc = new JdbcTemplate(dataSource);

        List<Map<String, Object>> changesets = jdbc.queryForList(
            "SELECT id, author, filename, orderexecuted, tag " +
            "FROM databasechangelog ORDER BY orderexecuted");

        assertThat(changesets).isNotEmpty();
        for (Map<String, Object> cs : changesets) {
            assertThat(cs.get("id")).isNotNull();
        }
    }

    @Test
    void noFailedMigrations() {
        JdbcTemplate jdbc = new JdbcTemplate(dataSource);

        Integer failedCount = jdbc.queryForObject(
            "SELECT COUNT(*) FROM databasechangelog WHERE deployment_id IS NULL",
            Integer.class);

        assertThat(failedCount).isZero();
    }

    @Test
    void verifyCompleteSchema() {
        Liquibase liquibase = LiquibaseFactory.getInstance().createLiquibase(dataSource);
        liquibase.validate(); // Throws if validation fails
    }
}
```

### Q16: What are best practices for test naming conventions? How do you structure test classes?

**Answer:**

Test naming and structure directly impact maintainability. Good test names serve as documentation â€” they describe what the system does in what scenario.

**Method naming conventions:**

```java
// Convention 1: MethodName_StateUnderTest_ExpectedBehavior
@Test
void findById_WhenOrderExists_ReturnsOrder() { }
@Test
void findById_WhenOrderNotExists_ThrowsException() { }
@Test
void calculateDiscount_WhenOrderOverThreshold_AppliesRate() { }

// Convention 2: should_ExpectedBehavior_When_StateUnderTest (BDD style)
@Test
void should_ReturnOrder_When_OrderExists() { }
@Test
void should_ThrowException_When_OrderNotFound() { }
@Test
void should_ApplyDiscount_When_OrderExceedsThreshold() { }

// Convention 3: Given_StateUnderTest_When_Action_Then_ExpectedBehavior
@Test
void given_OrderExists_When_FindById_Then_ReturnOrder() { }
@Test
void given_OrderNotExists_When_FindById_Then_ThrowNotFound() { }
```

**Class structure patterns:**

```java
class OrderServiceTest {

    // 1. Class-level constants
    private static final String DEFAULT_CUSTOMER_ID = "cust-1";
    private static final String DEFAULT_SKU = "SKU-001";
    private static final int DEFAULT_QUANTITY = 1;

    // 2. Mocks and injects
    @Mock
    private OrderRepository orderRepository;

    @Mock
    private InventoryService inventoryService;

    @InjectMocks
    private OrderService orderService;

    // 3. Shared test data
    private Order defaultOrder;
    private OrderRequest defaultRequest;

    // 4. Setup methods
    @BeforeEach
    void setUp() {
        defaultOrder = new Order(DEFAULT_CUSTOMER_ID);
        defaultOrder.setId(1L);
        defaultRequest = new OrderRequest(DEFAULT_CUSTOMER_ID,
            List.of(new OrderItemRequest(DEFAULT_SKU, DEFAULT_QUANTITY)));
    }

    // 5. Test groups via nested classes
    @Nested
    class PlaceOrder {

        @Test
        void shouldCreateOrderWhenInventoryAvailable() { }

        @Test
        void shouldThrowExceptionWhenInventoryUnavailable() { }

        @Test
        void shouldReserveInventoryOnSuccess() { }

        @Test
        void shouldNotSaveOrderOnFailure() { }

        @Nested
        class Validation {

            @Test
            void shouldRejectEmptyCustomerId() { }

            @Test
            void shouldRejectEmptyItems() { }

            @Test
            void shouldRejectNegativeQuantity() { }
        }
    }

    @Nested
    class CancelOrder {

        @Test
        void shouldCancelPendingOrder() { }

        @Test
        void shouldThrowWhenOrderAlreadyShipped() { }

        @Test
        void shouldRestoreInventory() { }
    }

    @Nested
    class CalculateTotal {

        @Test
        void shouldSumItemPrices() { }

        @Test
        void shouldIncludeTax() { }

        @Test
        void shouldApplyDiscount() { }

        @ParameterizedTest
        @CsvSource({"50, 0", "100, 0", "101, 10.10"})
        void shouldApplyDiscountThresholds(BigDecimal total, BigDecimal expectedDiscount) { }
    }
}
```

### Q17: How do you test exception handling and error scenarios in Spring Boot?

**Answer:**

Testing exception handling covers both business logic exceptions and the HTTP error responses returned by controllers.

**Testing service layer exceptions:**

```java
@ExtendWith(MockitoExtension.class)
class OrderServiceExceptionTest {

    @Mock
    private OrderRepository orderRepository;

    @Mock
    private InventoryService inventoryService;

    @InjectMocks
    private OrderService orderService;

    @Test
    void placeOrderThrowsWhenInventoryUnavailable() {
        when(inventoryService.isAvailable(anyString(), anyInt())).thenReturn(false);

        assertThatThrownBy(() -> orderService.placeOrder(
                new OrderRequest("cust-1",
                    List.of(new OrderItemRequest("SKU-001", 1)))))
            .isInstanceOf(InsufficientInventoryException.class)
            .hasMessageContaining("SKU-001");
    }

    @Test
    void placeOrderThrowsWhenOrderRepositoryFails() {
        when(inventoryService.isAvailable(anyString(), anyInt())).thenReturn(true);
        when(orderRepository.save(any())).thenThrow(
            new DataIntegrityViolationException("Duplicate key"));

        assertThatThrownBy(() -> orderService.placeOrder(
                new OrderRequest("cust-1",
                    List.of(new OrderItemRequest("SKU-001", 1)))))
            .isInstanceOf(DataIntegrityViolationException.class);
    }

    @Test
    void cancelOrderThrowsWhenAlreadyShipped() {
        Order shippedOrder = new Order("cust-1", OrderStatus.SHIPPED);
        when(orderRepository.findById(1L)).thenReturn(Optional.of(shippedOrder));

        assertThatThrownBy(() -> orderService.cancelOrder(1L))
            .isInstanceOf(IllegalStateException.class)
            .hasMessageContaining("cannot be cancelled");
    }

    @Test
    void cancelOrderThrowsWhenOrderNotFound() {
        when(orderRepository.findById(999L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> orderService.cancelOrder(999L))
            .isInstanceOf(OrderNotFoundException.class)
            .hasMessageContaining("999");
    }
}
```

**Testing controller exception handling:**

```java
@WebMvcTest(OrderController.class)
class OrderControllerExceptionTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private OrderService orderService;

    @Test
    void missingRequestBodyReturns400() throws Exception {
        mockMvc.perform(post("/api/orders")
                .contentType(MediaType.APPLICATION_JSON)
                .content(""))  // Empty body
            .andExpect(status().isBadRequest());
    }

    @Test
    void invalidInputReturnsValidationErrors() throws Exception {
        mockMvc.perform(post("/api/orders")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                    {
                        "customerId": "",
                        "items": []
                    }"""))
            .andExpect(status().isBadRequest())
            .andExpect(jsonPath("$.errors").isArray())
            .andExpect(jsonPath("$.errors[0].field").exists());
    }

    @Test
    void orderNotFoundReturns404() throws Exception {
        when(orderService.findById(999L))
            .thenThrow(new OrderNotFoundException(999L));

        mockMvc.perform(get("/api/orders/999"))
            .andExpect(status().isNotFound())
            .andExpect(jsonPath("$.error").value("Order Not Found"));
    }
}
```

**Testing global exception handler:**

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(OrderNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleOrderNotFound(OrderNotFoundException ex) {
        return new ErrorResponse("Order Not Found", ex.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleValidation(MethodArgumentNotValidException ex) {
        List<FieldError> fieldErrors = ex.getBindingResult().getFieldErrors().stream()
            .map(fe -> new FieldError(fe.getField(), fe.getDefaultMessage()))
            .toList();
        return new ErrorResponse("Validation Failed", fieldErrors);
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleGeneric(Exception ex) {
        return new ErrorResponse("Internal Server Error", "An unexpected error occurred");
    }
}

@WebMvcTest(OrderController.class)
@Import(GlobalExceptionHandler.class)
class GlobalExceptionHandlerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private OrderService orderService;

    @Test
    void genericExceptionReturns500() throws Exception {
        when(orderService.findById(1L)).thenThrow(new RuntimeException("DB connection failed"));

        mockMvc.perform(get("/api/orders/1"))
            .andExpect(status().isInternalServerError())
            .andExpect(jsonPath("$.error").value("Internal Server Error"));
    }
}
```

### Q18: How do you test file upload and download in Spring Boot?

**Answer:**

**Testing file upload:**

```java
@WebMvcTest(DocumentController.class)
class FileUploadTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private DocumentService documentService;

    @Test
    void uploadFileSuccessfully() throws Exception {
        MockMultipartFile file = new MockMultipartFile(
            "file",
            "test.pdf",
            MediaType.APPLICATION_PDF_VALUE,
            "PDF content".getBytes()
        );

        when(documentService.store(any(), anyString()))
            .thenReturn(new Document("doc-1", "test.pdf"));

        mockMvc.perform(multipart("/api/documents")
                .file(file)
                .param("description", "Test document"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.fileName").value("test.pdf"));
    }

    @Test
    void uploadEmptyFileReturns400() throws Exception {
        MockMultipartFile emptyFile = new MockMultipartFile(
            "file", "", MediaType.APPLICATION_PDF_VALUE, new byte[0]);

        mockMvc.perform(multipart("/api/documents")
                .file(emptyFile))
            .andExpect(status().isBadRequest());
    }

    @Test
    void uploadFileExceedingMaxSizeReturns413() throws Exception {
        byte[] largeContent = new byte[10_000_001];
        new Random().nextBytes(largeContent);
        MockMultipartFile largeFile = new MockMultipartFile(
            "file", "large.pdf", MediaType.APPLICATION_PDF_VALUE, largeContent);

        mockMvc.perform(multipart("/api/documents")
                .file(largeFile))
            .andExpect(status().isPayloadTooLarge());
    }
}
```

**Testing file download:**

```java
@WebMvcTest(DocumentController.class)
class FileDownloadTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private DocumentService documentService;

    @Test
    void downloadFileSuccessfully() throws Exception {
        Document document = new Document("doc-1", "test.pdf");
        document.setContentType("application/pdf");
        document.setData("PDF content".getBytes());

        when(documentService.load("doc-1")).thenReturn(document);

        mockMvc.perform(get("/api/documents/{id}", "doc-1"))
            .andExpect(status().isOk())
            .andExpect(header().string("Content-Type", "application/pdf"))
            .andExpect(header().string("Content-Disposition",
                "attachment; filename=\"test.pdf\""))
            .andExpect(content().bytes("PDF content".getBytes()));
    }

    @Test
    void downloadNonExistentFileReturns404() throws Exception {
        when(documentService.load("doc-999"))
            .thenThrow(new DocumentNotFoundException("doc-999"));

        mockMvc.perform(get("/api/documents/{id}", "doc-999"))
            .andExpect(status().isNotFound());
    }
}
```

### Q19: How do you test security configurations in Spring Boot? How do you test @PreAuthorize annotations?

**Answer:**

**Testing security at the controller level:**

```java
@WebMvcTest(OrderController.class)
@Import(SecurityConfig.class)
class SecurityTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private OrderService orderService;

    @Test
    void unauthenticatedRequestsReturn401() throws Exception {
        mockMvc.perform(get("/api/orders"))
            .andExpect(status().isUnauthorized());
    }

    @Test
    void authenticatedUserCanAccess() throws Exception {
        mockMvc.perform(get("/api/orders")
                .with(user("user@example.com").roles("USER")))
            .andExpect(status().isOk());
    }

    @Test
    void adminOnlyEndpointRejectsUser() throws Exception {
        mockMvc.perform(get("/api/admin/config")
                .with(user("user@example.com").roles("USER")))
            .andExpect(status().isForbidden());
    }

    @Test
    void adminOnlyEndpointAcceptsAdmin() throws Exception {
        mockMvc.perform(get("/api/admin/config")
                .with(user("admin@example.com").roles("ADMIN")))
            .andExpect(status().isOk());
    }
}
```

**Testing @PreAuthorize with method security:**

```java
@SpringBootTest
@AutoConfigureMockMvc
class MethodSecurityTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private DocumentService documentService;

    @Test
    void userCanAccessTheirOwnDocument() throws Exception {
        Document document = new Document("owner@example.com", "My Document");
        document.setId(1L);
        when(documentService.findById(1L)).thenReturn(document);

        mockMvc.perform(get("/api/documents/1")
                .with(user("owner@example.com").roles("USER")))
            .andExpect(status().isOk());
    }

    @Test
    void userCannotAccessOtherUserDocument() throws Exception {
        Document document = new Document("other@example.com", "Other's Document");
        document.setId(1L);
        when(documentService.findById(1L)).thenReturn(document);

        mockMvc.perform(get("/api/documents/1")
                .with(user("owner@example.com").roles("USER")))
            .andExpect(status().isForbidden());
    }

    @Test
    void adminCanAccessAnyDocument() throws Exception {
        Document document = new Document("anyone@example.com", "Any Document");
        document.setId(1L);
        when(documentService.findById(1L)).thenReturn(document);

        mockMvc.perform(get("/api/documents/1")
                .with(user("admin@example.com").roles("ADMIN")))
            .andExpect(status().isOk());
    }
}
```

**Testing CSRF protection:**

```java
@WebMvcTest(OrderController.class)
class CsrfTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private OrderService orderService;

    @Test
    void postWithoutCsrfTokenReturns403() throws Exception {
        mockMvc.perform(post("/api/orders")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{}")
                .with(user("user@example.com")))
            .andExpect(status().isForbidden());
    }

    @Test
    void postWithCsrfTokenSucceeds() throws Exception {
        mockMvc.perform(post("/api/orders")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{}")
                .with(user("user@example.com"))
                .with(csrf()))
            .andExpect(status().isOk());
    }
}
```

### Q20: How do you test scheduled tasks in Spring Boot? How do you verify @Scheduled behavior?

**Answer:**

**Testing scheduled tasks directly:**

```java
@SpringBootTest
@EnableScheduling
class ScheduledTaskTest {

    @Autowired
    private OrderCleanupTask cleanupTask;

    @Autowired
    private OrderRepository orderRepository;

    @BeforeEach
    void setUp() {
        orderRepository.deleteAll();
    }

    @Test
    @Transactional
    void cleanupRemovesExpiredOrders() {
        Order expiredOrder = new Order("cust-1", OrderStatus.PENDING);
        expiredOrder.setCreatedAt(Instant.now().minus(90, ChronoUnit.DAYS));
        orderRepository.save(expiredOrder);

        cleanupTask.cleanupExpiredOrders();

        List<Order> remaining = orderRepository.findAll();
        assertThat(remaining).isEmpty();
    }

    @Test
    @Transactional
    void cleanupDoesNotRemoveRecentOrders() {
        Order recentOrder = new Order("cust-1", OrderStatus.PENDING);
        recentOrder.setCreatedAt(Instant.now().minus(10, ChronoUnit.DAYS));
        orderRepository.save(recentOrder);

        cleanupTask.cleanupExpiredOrders();

        assertThat(orderRepository.findById(recentOrder.getId())).isPresent();
    }
}
```

**Testing scheduled task with time manipulation:**

```java
@SpringBootTest
@EnableScheduling
class ScheduledTaskTimingTest {

    @Autowired
    private OrderCleanupTask cleanupTask;

    @MockitoBean
    private OrderRepository orderRepository;

    @Test
    void cleanupRunsOnSchedule() throws Exception {
        // Use Awaitility to verify the task runs asynchronously
        await().atMost(10, TimeUnit.SECONDS)
            .untilAsserted(() ->
                verify(orderRepository, atLeast(1)).deleteByStatusAndCreatedAtBefore(
                    eq(OrderStatus.PENDING), any(Instant.class)));
    }
}
```

This concludes the Testing Interview Q&A chapter. Each question covered a critical aspect of modern Java and Spring Boot testing, from unit testing fundamentals to advanced performance and mutation testing.