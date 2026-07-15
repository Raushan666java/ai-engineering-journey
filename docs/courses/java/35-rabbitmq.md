# RabbitMQ
> **Previous:** [Async and Events](34-async-events.md) | **Next:** [Kafka](36-kafka.md)

## Learning Objectives

By the end of this chapter, you will be able to:
- Understand AMQP core concepts: exchanges, queues, bindings, routing keys, and virtual hosts
- Configure Direct, Topic, Fanout, and Headers exchange types
- Create durable, exclusive, auto-delete queues with TTL, dead-letter exchange, and max-length arguments
- Use `RabbitTemplate` to send and receive messages with `Jackson2JsonMessageConverter`
- Implement `@RabbitListener` for message consumption with concurrency tuning
- Enable publisher confirms and returns for reliable messaging
- Implement retry logic with `RetryTemplate`, exponential backoff, and message recoverers
- Configure `BatchingRabbitTemplate` for batch message publishing
- Work with multiple virtual hosts, `RabbitAdmin`, and connection factory customization
- Secure connections with TLS and customize container factories

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/java/35-rabbitmq/handwritten-notes.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/java/35-rabbitmq/handwritten-notes.svg" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/java/35-rabbitmq/sticky-notes.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/java/35-rabbitmq/sticky-notes.svg" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/java/35-rabbitmq/visual-explanation.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/java/35-rabbitmq/visual-explanation.svg" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


---
## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|------------|-------------------|
| RabbitMQ → AMQP-compliant message broker | Exchange types: Direct, Topic, Fanout, Headers |
| Producer-Consumer → send and receive messages via `RabbitTemplate` | `@RabbitListener` for message consumption |
| Advanced Patterns → dead letter queues, retry, and idempotency | DLQ handles poison messages; manual ack for retry control |

---
## Chapter Roadmap

```mermaid
flowchart TD
    A[RabbitMQ] --> B[Core Concepts]
    A --> C[Producers]
    A --> D[Consumers]
    A --> E[Advanced]
    B --> B1[Exchange / Queue / Binding]
    B --> B2[AMQP protocol]
    C --> C1[RabbitTemplate]
    C --> C2[Correlation ID]
    D --> D1[@RabbitListener]
    D --> D2[Manual ack]
    E --> E1[DLQ / Retry]
    E --> E2[Idempotent consumers]
```

---
## Concept Comparison Table

| Concept | Description | Key Difference |
|---------|-------------|----------------|
| Direct Exchange | Routes by routing key exactly | `routingKey = "order.created"` |
| Topic Exchange | Routes by routing key pattern | `routingKey = "order.#"` |
| Fanout Exchange | Routes to all bound queues | No routing key filtering |
| Headers Exchange | Routes by header matching | `x-match = all/any` |

---
## Quick Reference

| Element | Purpose | Example |
|---------|---------|---------|
| `RabbitTemplate.convertAndSend()` | Sends a message | `rabbitTemplate.convertAndSend(exchange, routingKey, payload)` |
| `@RabbitListener(queues = "myQueue")` | Consumes messages | `@RabbitListener(queues = "#{queue.name}")` |
| `MessageProperties#setDeliveryMode(PERSISTENT)` | Persists message to disk | Survives broker restart |
| `RabbitAdmin.declareQueue()` | Declares queues programmatically | Used for dynamic queue setup |

---
## Cross-Application Matrix

| Domain | Application | Use Case |
|--------|-------------|----------|
| Order Processing | Direct Exchange + DLQ | Process orders; send failures to DLQ for manual retry |
| Notifications | Fanout Exchange | Broadcast alerts to all connected services |
| Routing | Topic Exchange | Route messages based on event type hierarchy |

---
## Chapter Quiz

1. What are the four exchange types in RabbitMQ? **Answer:** Direct, Topic, Fanout, Headers
2. Which annotation is used to consume messages from a RabbitMQ queue? **Answer:** `@RabbitListener`
3. What happens to a message that cannot be processed after max retries? **Answer:** It goes to the Dead Letter Queue (DLQ)

## Theory

![RabbitMQ / AMQP Architecture](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/35-rabbitmq.png)

### 1. AMQP Core Concepts


AMQP (Advanced Message Queuing Protocol) is a wire-level protocol for message-oriented middleware. RabbitMQ is the most popular AMQP broker.

**Key abstractions:**

| Concept | Description |
|---------|-------------|
| **Producer** | Publishes messages to an exchange |
| **Exchange** | Receives messages and routes them to queues based on bindings and routing keys |
| **Binding** | A rule that connects an exchange to a queue with an optional routing key |
| **Queue** | A named buffer that stores messages until consumers process them |
| **Consumer** | Subscribes to a queue and processes messages |
| **Virtual Host (vhost)** | A namespace isolation unit Ã¢â‚¬â€ exchanges, queues, and bindings are scoped to a vhost |

**Message broker vs Message queue:**

A **message queue** (e.g., ActiveMQ, SQS) stores messages in named queues; producers send directly to a queue. An AMQP **message broker** adds an exchange layer Ã¢â‚¬â€ producers never touch queues directly. The exchange determines routing, enabling complex patterns like topic-based subscriptions and fanout.

### 2. Exchange Types


#### 2.1 DirectExchange

A message goes to the queues whose `bindingKey` exactly matches the message's `routingKey`.

```java
@Bean
public DirectExchange orderExchange() {
    return new DirectExchange("order.exchange", true, false);
}

@Bean
public Queue orderPaymentQueue() {
    return QueueBuilder.durable("order.payment.queue")
        .withArgument("x-dead-letter-exchange", "order.dlx")
        .withArgument("x-message-ttl", 30000)
        .build();
}

@Bean
public Queue orderShippingQueue() {
    return new Queue("order.shipping.queue", true);
}

@Bean
public Binding paymentBinding() {
    return BindingBuilder.bind(orderPaymentQueue())
        .to(orderExchange())
        .with("payment");
}

@Bean
public Binding shippingBinding() {
    return BindingBuilder.bind(orderShippingQueue())
        .to(orderExchange())
        .with("shipping");
}
```

Messages with routing key `"payment"` go to `order.payment.queue`. Messages with `"shipping"` go to `order.shipping.queue`.

#### 2.2 TopicExchange

Routing keys use a dot-separated pattern with wildcards: `*` matches exactly one word, `#` matches zero or more words.

```java
@Bean
public TopicExchange notificationExchange() {
    return new TopicExchange("notification.topic");
}

@Bean
public Queue emailQueue() {
    return new Queue("notification.email.queue", true);
}

@Bean
public Queue smsQueue() {
    return new Queue("notification.sms.queue", true);
}

@Bean
public Queue pushQueue() {
    return new Queue("notification.push.queue", true);
}

@Bean
public Binding emailBinding() {
    return BindingBuilder.bind(emailQueue())
        .to(notificationExchange())
        .with("user.*.email");
}

@Bean
public Binding smsBinding() {
    return BindingBuilder.bind(smsQueue())
        .to(notificationExchange())
        .with("user.*.sms");
}

@Bean
public Binding pushBinding() {
    return BindingBuilder.bind(pushQueue())
        .to(notificationExchange())
        .with("user.#.push");
}

@Bean
public Binding allNotificationsBinding() {
    return BindingBuilder.bind(pushQueue())
        .to(notificationExchange())
        .with("notification.#");
}
```

| Message routing key | Routes to |
|---------------------|-----------|
| `user.create.email` | emailQueue |
| `user.update.sms` | smsQueue |
| `user.create.push` | pushQueue |
| `user.profile.update.push` | pushQueue |
| `notification.alert` | pushQueue |
| `user.delete.email` | emailQueue |

#### 2.3 FanoutExchange

Broadcasts every message to every bound queue, ignoring the routing key.

```java
@Bean
public FanoutExchange broadcastExchange() {
    return new FanoutExchange("broadcast.fanout");
}

@Bean
public Queue serviceAQueue() {
    return new Queue("broadcast.service-a.queue", false);
}

@Bean
public Queue serviceBQueue() {
    return new Queue("broadcast.service-b.queue", false);
}

@Bean
public Queue auditQueue() {
    return QueueBuilder.nonDurable("broadcast.audit.queue")
        .autoDelete()
        .build();
}

@Bean
public Binding serviceABinding() {
    return BindingBuilder.bind(serviceAQueue()).to(broadcastExchange());
}

@Bean
public Binding serviceBBinding() {
    return BindingBuilder.bind(serviceBQueue()).to(broadcastExchange());
}

@Bean
public Binding auditBinding() {
    return BindingBuilder.bind(auditQueue()).to(broadcastExchange());
}
```

Every message published to `broadcast.fanout` goes to all three queues simultaneously.

#### 2.4 HeadersExchange

Routes based on message header attributes rather than routing keys. Supports `x-match` Ã¢â‚¬â€ `all` means all headers must match, `any` means at least one header must match.

```java
@Bean
public HeadersExchange headersExchange() {
    return new HeadersExchange("config.headers");
}

@Bean
public Queue windowsQueue() {
    return new Queue("config.windows.queue", true);
}

@Bean
public Queue linuxQueue() {
    return new Queue("config.linux.queue", true);
}

@Bean
public Queue allQueue() {
    return new Queue("config.all.queue", true);
}

@Bean
public Binding windowsBinding() {
    return BindingBuilder.bind(windowsQueue())
        .to(headersExchange())
        .where("os").matches("windows")
        .and("version").matches("10");
}

@Bean
public Binding linuxBinding() {
    return BindingBuilder.bind(linuxQueue())
        .to(headersExchange())
        .whereAll("os", "arch").exist();
}

@Bean
public Binding allBinding() {
    return BindingBuilder.bind(allQueue())
        .to(headersExchange())
        .whereAny("env", "branch").exist();
}
```

### 3. Queue Configuration


Queues can be configured with various arguments for behavior control:

```java
@Configuration
public class QueueConfig {

    @Bean
    public Queue highPriorityQueue() {
        return QueueBuilder.durable("high.priority.queue")
            .withArgument("x-message-ttl", 5000)
            .withArgument("x-dead-letter-exchange", "high.dlx")
            .withArgument("x-dead-letter-routing-key", "high.dead")
            .withArgument("x-max-length", 1000)
            .withArgument("x-max-length-bytes", 10_000_000)
            .withArgument("x-max-priority", 10)
            .build();
    }

    @Bean
    public Queue lowPriorityQueue() {
        return QueueBuilder.durable("low.priority.queue")
            .withArgument("x-message-ttl", 60000)
            .withArgument("x-dead-letter-exchange", "low.dlx")
            .withArgument("x-max-length", 100)
            .withArgument("x-overflow", "reject-publish")
            .build();
    }

    @Bean
    public Queue transientQueue() {
        return QueueBuilder.nonDurable("transient.queue")
            .exclusive()
            .autoDelete()
            .build();
    }

    @Bean
    public Queue dlqQueue() {
        return QueueBuilder.durable("high.dlx.queue")
            .withArgument("x-message-ttl", 86400000)
            .build();
    }
}
```

Key queue arguments:

| Argument | Type | Purpose |
|----------|------|---------|
| `x-message-ttl` | long (ms) | Message expires after this time in the queue |
| `x-dead-letter-exchange` | string | Exchange to route dead-lettered messages to |
| `x-dead-letter-routing-key` | string | Routing key for dead-lettered messages |
| `x-max-length` | int | Maximum number of messages in the queue |
| `x-max-length-bytes` | long | Maximum total body size of the queue |
| `x-max-priority` | int | Priority queue support (0-255) |
| `x-overflow` | string | `drop-head` (default), `reject-publish` |
| `x-queue-type` | string | `classic`, `quorum`, or `stream` |

#### 3.1 Dead Letter Queues

Messages are dead-lettered when:
- They are rejected with `requeue=false` by a consumer
- The message TTL expires
- The queue length limit is exceeded

```java
@Configuration
public class DeadLetterConfig {

    @Bean
    public DirectExchange deadLetterExchange() {
        return new DirectExchange("dlx.direct");
    }

    @Bean
    public Queue deadLetterQueue() {
        return QueueBuilder.durable("dlx.order.queue")
            .withArgument("x-message-ttl", 3600000)
            .build();
    }

    @Bean
    public Binding deadLetterBinding() {
        return BindingBuilder.bind(deadLetterQueue())
            .to(deadLetterExchange())
            .with("order.dead");
    }

    @Bean
    public Queue orderQueue() {
        return QueueBuilder.durable("order.retry.queue")
            .withArgument("x-dead-letter-exchange", "dlx.direct")
            .withArgument("x-dead-letter-routing-key", "order.dead")
            .withArgument("x-message-ttl", 30000)
            .build();
    }
}
```

### 4. Spring AMQP Configuration


#### 4.1 Basic Connection Factory

```java
@Configuration
@EnableRabbit
public class RabbitConfig {

    @Bean
    public ConnectionFactory connectionFactory() {
        CachingConnectionFactory factory = new CachingConnectionFactory();
        factory.setHost("localhost");
        factory.setPort(5672);
        factory.setUsername("guest");
        factory.setPassword("guest");
        factory.setVirtualHost("/");
        factory.setChannelCacheSize(25);
        factory.setConnectionTimeout(30000);
        factory.setRequestedHeartBeat(30);
        return factory;
    }

    @Bean
    public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate template = new RabbitTemplate(connectionFactory);
        template.setMessageConverter(jsonMessageConverter());
        template.setConfirmCallback(confirmCallback());
        template.setReturnCallback(returnCallback());
        template.setMandatory(true);
        template.setChannelTransacted(true);
        return template;
    }

    @Bean
    public Jackson2JsonMessageConverter jsonMessageConverter() {
        Jackson2JsonMessageConverter converter = new Jackson2JsonMessageConverter();
        converter.setCreateMessageIds(true);
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
        converter.setObjectMapper(mapper);
        return converter;
    }

    @Bean
    public RabbitAdmin rabbitAdmin(ConnectionFactory connectionFactory) {
        RabbitAdmin admin = new RabbitAdmin(connectionFactory);
        admin.setAutoStartup(true);
        return admin;
    }
}
```

#### 4.2 TLS Connection Factory

```java
@Bean
public ConnectionFactory tlsConnectionFactory() throws Exception {
    CachingConnectionFactory factory = new CachingConnectionFactory();
    factory.setHost("rabbitmq.example.com");
    factory.setPort(5671);

    SslContextBuilder builder = SslContextBuilder.forClient();
    builder.keyManager(
        new File("client-cert.pem"),
        new File("client-key.pem")
    );
    builder.trustManager(new File("ca-cert.pem"));

    SslContext sslContext = builder.build();
    factory.getRabbitConnectionFactory().enableHostnameVerification();

    NettyDataChannelFactory channelFactory = new NettyDataChannelFactory(
        new NettyConnectionFactoryConfigurator(factory.getRabbitConnectionFactory()) {
            @Override
            public void configure(SslContextBuilder builder) {
                builder.sslProvider(SslProvider.OPENSSL);
            }
        }.configure(sslContext)
    );

    return factory;
}
```

### 5. RabbitTemplate Ã¢â‚¬â€ Sending Messages


```java
@Service
public class OrderMessageSender {

    private static final Logger log = LoggerFactory.getLogger(OrderMessageSender.class);
    private final RabbitTemplate rabbitTemplate;

    public OrderMessageSender(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void sendOrder(Order order) {
        Message message = rabbitTemplate.getMessageConverter()
            .toMessage(order, new MessageProperties());
        rabbitTemplate.send("order.exchange", "payment", message);
        log.info("Sent order {} to exchange order.exchange", order.getId());
    }

    public void sendOrderConverted(Order order) {
        rabbitTemplate.convertAndSend("order.exchange", "payment", order);
    }

    public void sendWithPriority(Order order, int priority) {
        MessageProperties props = new MessageProperties();
        props.setPriority(priority);
        props.setExpiration("30000");
        props.setCorrelationId(order.getId().toString());
        props.setHeader("source", "order-service");
        props.setDeliveryMode(MessageDeliveryMode.PERSISTENT);
        rabbitTemplate.convertAndSend("order.exchange", "payment", order, message -> {
            message.getMessageProperties().setPriority(priority);
            return message;
        });
    }

    public Order receiveOrder() {
        return (Order) rabbitTemplate.receiveAndConvert("order.payment.queue");
    }

    public Order receiveOrderWithTimeout() {
        return (Order) rabbitTemplate.receiveAndConvert(
            "order.payment.queue", 5000);
    }

    public String sendAndReceive(Order order) {
        return (String) rabbitTemplate.convertSendAndReceive(
            "order.exchange", "payment", order);
    }
}
```

#### 5.1 Publisher Confirms

```java
@Service
public class ReliablePublisher {

    private static final Logger log = LoggerFactory.getLogger(ReliablePublisher.class);
    private final RabbitTemplate rabbitTemplate;

    public ReliablePublisher(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
        this.rabbitTemplate.setConfirmCallback((correlationData, ack, cause) -> {
            if (ack) {
                log.info("Message confirmed: {}", correlationData != null ?
                    correlationData.getId() : "null");
            } else {
                log.error("Message not confirmed: {} cause: {}",
                    correlationData != null ? correlationData.getId() : "null", cause);
            }
        });
        this.rabbitTemplate.setReturnsCallback(returned -> {
            log.warn("Message returned: replyCode={}, replyText={}, exchange={}, routingKey={}",
                returned.getReplyCode(), returned.getReplyText(),
                returned.getExchange(), returned.getRoutingKey());
        });
        this.rabbitTemplate.setMandatory(true);
    }

    public void publishWithConfirms(Order order) {
        CorrelationData correlationData = new CorrelationData(
            UUID.randomUUID().toString());
        correlationData.getFuture().addCallback(
            result -> {
                if (result.isAck()) {
                    log.info("Order {} confirmed by broker", order.getId());
                } else {
                    log.warn("Order {} nack'd by broker: {}",
                        order.getId(), result.getReason());
                }
            },
            ex -> log.error("Confirm failed for order {}", order.getId(), ex)
        );
        rabbitTemplate.convertAndSend(
            "order.exchange", "payment", order, correlationData);
    }

    public void publishWithMandatoryFlag(Order order) {
        rabbitTemplate.convertAndSend("order.exchange", "invalid.key", order);
    }

    public void publishBatch(List<Order> orders) {
        List<CorrelationData> correlationDataList = new ArrayList<>();
        for (Order order : orders) {
            CorrelationData cd = new CorrelationData(order.getId().toString());
            correlationDataList.add(cd);
            rabbitTemplate.convertAndSend(
                "order.exchange", "payment", order, cd);
        }
        for (CorrelationData cd : correlationDataList) {
            try {
                Confirm confirm = cd.getFuture().get(10, TimeUnit.SECONDS);
                log.info("Batch confirm for {}: ack={}",
                    cd.getId(), confirm.isAck());
            } catch (Exception e) {
                log.error("Batch confirm timeout for {}", cd.getId());
            }
        }
    }
}
```

#### 5.2 Custom Message Converter

```java
@Bean
public MessageConverter customMessageConverter() {
    Jackson2JsonMessageConverter converter = new Jackson2JsonMessageConverter();
    converter.setCreateMessageIds(true);
    converter.setAlwaysConvertToInferredType(true);
    converter.setClassMapper(new ClassMapper() {
        @Override
        public void fromClass(Class<?> clazz, MessageProperties properties) {
            properties.setHeader("__TypeId__", clazz.getSimpleName());
        }

        @Override
        public Class<?> toClass(MessageProperties properties) {
            String typeId = properties.getHeader("__TypeId__");
            if (typeId == null) {
                return Object.class;
            }
            return switch (typeId) {
                case "Order" -> Order.class;
                case "PaymentEvent" -> PaymentEvent.class;
                case "InventoryEvent" -> InventoryEvent.class;
                default -> Object.class;
            };
        }
    });
    return converter;
}

@Bean
public MessageConverter simpleConverter() {
    SimpleMessageConverter converter = new SimpleMessageConverter();
    converter.setAllowedListPatterns(List.of("com.example.*"));
    return converter;
}
```

### 6. @RabbitListener Ã¢â‚¬â€ Consuming Messages


```java
@Component
public class OrderMessageConsumer {

    private static final Logger log = LoggerFactory.getLogger(OrderMessageConsumer.class);

    @RabbitListener(
        queues = "order.payment.queue",
        concurrency = "3-10",
        messageConverter = "jsonMessageConverter"
    )
    public void handlePaymentOrder(Order order, Channel channel, @Header(AmqpHeaders.DELIVERY_TAG) long tag) {
        try {
            log.info("Processing payment order: {} from {}", order.getId(), order.getCustomerEmail());
            processPayment(order);
            channel.basicAck(tag, false);
        } catch (Exception e) {
            log.error("Failed to process order {}", order.getId(), e);
            channel.basicNack(tag, false, false);
        }
    }

    @RabbitListener(
        bindings = @QueueBinding(
            value = @Queue(value = "order.shipping.queue", durable = "true"),
            exchange = @Exchange(value = "order.exchange", type = ExchangeTypes.DIRECT),
            key = "shipping"
        ),
        concurrency = "5"
    )
    public void handleShippingOrder(@Payload Order order,
                                    @Headers Map<String, Object> headers) {
        log.info("Processing shipping order: {}", order.getId());
        headers.forEach((key, value) ->
            log.debug("Header: {} = {}", key, value));
    }

    @RabbitListener(queues = "order.audit.queue")
    public void handleAudit(Message message) {
        log.info("Audit message received: body={}, headers={}",
            new String(message.getBody()), message.getMessageProperties().getHeaders());
    }

    @RabbitListener(
        queues = "order.error.queue",
        containerFactory = "retryContainerFactory"
    )
    public void handleRetryOrder(Order order) {
        log.info("Processing retry order: {}", order.getId());
        processPayment(order);
    }

    private void processPayment(Order order) {
        if (order.getTotal().compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Invalid order total");
        }
    }
}
```

#### 6.1 Message Listener Adapter

```java
@Bean
public SimpleRabbitListenerContainerFactory customContainerFactory(
        ConnectionFactory connectionFactory) {
    SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
    factory.setConnectionFactory(connectionFactory);
    factory.setConcurrentConsumers(5);
    factory.setMaxConcurrentConsumers(15);
    factory.setPrefetchCount(10);
    factory.setBatchSize(5);
    factory.setAcknowledgeMode(AcknowledgeMode.MANUAL);
    factory.setDefaultRequeueRejected(false);
    factory.setMissingQueuesFatal(false);
    factory.setAdviceChain(new Advice[] {
        new RetryOperationsInterceptor()
    });
    factory.setConsumerTagStrategy(queue -> "consumer-" + queue + "-" + UUID.randomUUID());
    factory.setErrorHandler(new ConditionalRejectingErrorHandler());
    return factory;
}

@Bean
public SimpleRabbitListenerContainerFactory retryContainerFactory(
        ConnectionFactory connectionFactory) {
    SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
    factory.setConnectionFactory(connectionFactory);
    factory.setConcurrentConsumers(2);
    factory.setMaxConcurrentConsumers(4);
    factory.setPrefetchCount(5);
    factory.setAcknowledgeMode(AcknowledgeMode.AUTO);
    factory.setDefaultRequeueRejected(true);
    return factory;
}
```

### 7. Retry and Error Handling


#### 7.1 RetryTemplate with Exponential Backoff

```java
@Configuration
public class RetryConfig {

    @Bean
    public RetryTemplate retryTemplate() {
        RetryTemplate template = new RetryTemplate();

        ExponentialBackOffPolicy backOff = new ExponentialBackOffPolicy();
        backOff.setInitialInterval(1000);
        backOff.setMultiplier(2.0);
        backOff.setMaxInterval(30000);
        template.setBackOffPolicy(backOff);

        SimpleRetryPolicy retryPolicy = new SimpleRetryPolicy();
        retryPolicy.setMaxAttempts(3);
        template.setRetryPolicy(retryPolicy);

        return template;
    }

    @Bean
    public RetryOperationsInterceptor retryInterceptor(RetryTemplate retryTemplate) {
        return RetryInterceptorBuilder.stateless()
            .retryOperations(retryTemplate)
            .recoverer(rejectAndDontRequeueRecoverer())
            .build();
    }
}
```

#### 7.2 Message Recoverers

```java
@Service
public class MessageRecovererConfig {

    private static final Logger log = LoggerFactory.getLogger(MessageRecovererConfig.class);
    private final RabbitTemplate rabbitTemplate;

    public MessageRecovererConfig(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    @Bean
    public MessageRecoverer rejectAndDontRequeueRecoverer() {
        return new RejectAndDontRequeueRecoverer();
    }

    @Bean
    public MessageRecoverer immediateRequeueRecoverer() {
        return new ImmediateRequeueMessageRecoverer();
    }

    @Bean
    public MessageRecoverer republishMessageRecoverer() {
        RepublishMessageRecoverer recoverer = new RepublishMessageRecoverer(
            rabbitTemplate, "order.retry.exchange");
        recoverer.setErrorRoutingKey("order.retry");
        return recoverer;
    }

    @Bean
    public MessageRecoverer customRecoverer() {
        return new MessageRecoverer() {
            @Override
            public void recover(Message message, Throwable cause) {
                log.error("All retries exhausted for message: {}",
                    new String(message.getBody()), cause);

                MessageProperties props = message.getMessageProperties();
                props.setHeader("x-exception-message", cause.getMessage());
                props.setHeader("x-exception-stacktrace",
                    ExceptionUtils.getStackTrace(cause));
                props.setHeader("x-retry-count",
                    props.getHeader("x-retry-count") != null ?
                    (int) props.getHeader("x-retry-count") + 1 : 1);
                props.setDelay(60000);

                rabbitTemplate.convertAndSend(
                    "order.dlx.exchange", "order.dead", message,
                    m -> {
                        m.getMessageProperties().setDelay(60000);
                        return m;
                    }
                );
            }
        };
    }
}
```

#### 7.3 Per-Listener Retry Configuration

```java
@Configuration
public class ListenerRetryConfig {

    @Bean
    public SimpleRabbitListenerContainerFactory retryContainerFactory(
            ConnectionFactory connectionFactory, RetryTemplate retryTemplate) {
        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
        factory.setConnectionFactory(connectionFactory);
        factory.setConcurrentConsumers(3);
        factory.setMaxConcurrentConsumers(6);
        factory.setPrefetchCount(5);
        factory.setAdviceChain(new Advice[] {
            RetryInterceptorBuilder.stateless()
                .retryOperations(retryTemplate)
                .backOffOptions(2000, 3, 30000)
                .recoverer(new RepublishMessageRecoverer(
                    rabbitTemplate(connectionFactory),
                    "order.retry.exchange", "order.retry"))
                .build()
        });
        return factory;
    }

    private RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate template = new RabbitTemplate(connectionFactory);
        template.setMessageConverter(new Jackson2JsonMessageConverter());
        return template;
    }
}
```

### 8. Batch Processing


#### 8.1 BatchingRabbitTemplate

```java
@Configuration
public class BatchConfig {

    @Bean
    public BatchingRabbitTemplate batchingRabbitTemplate(
            ConnectionFactory connectionFactory) {
        BatchingStrategy strategy = new SimpleBatchingStrategy(
            50,                    // batch size
            10000,                 // batch limit (bytes)
            3000                   // timeout (ms)
        );
        BatchingRabbitTemplate template = new BatchingRabbitTemplate(
            connectionFactory, strategy);
        template.setMessageConverter(new Jackson2JsonMessageConverter());
        return template;
    }
}

@Service
public class BatchPublisher {

    private static final Logger log = LoggerFactory.getLogger(BatchPublisher.class);
    private final BatchingRabbitTemplate batchingRabbitTemplate;

    public BatchPublisher(BatchingRabbitTemplate batchingRabbitTemplate) {
        this.batchingRabbitTemplate = batchingRabbitTemplate;
    }

    public void publishMetrics(List<MetricEvent> events) {
        for (MetricEvent event : events) {
            batchingRabbitTemplate.convertAndSend(
                "metrics.exchange", "metrics.batch", event);
        }
        log.info("Queued {} metrics for batch publishing", events.size());
    }
}

@Component
public class BatchConsumer {

    private static final Logger log = LoggerFactory.getLogger(BatchConsumer.class);

    @RabbitListener(queues = "metrics.queue", containerFactory = "batchContainerFactory")
    public void handleBatch(List<MetricEvent> events) {
        log.info("Received batch of {} metrics", events.size());
        for (MetricEvent event : events) {
            log.debug("Metric: {} = {} at {}",
                event.getName(), event.getValue(), event.getTimestamp());
        }
    }
}

@Bean
public SimpleRabbitListenerContainerFactory batchContainerFactory(
        ConnectionFactory connectionFactory) {
    SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
    factory.setConnectionFactory(connectionFactory);
    factory.setBatchListener(true);
    factory.setConsumerBatchEnabled(true);
    factory.setBatchSize(50);
    factory.setReceiveTimeout(3000L);
    return factory;
}
```

### 9. Multiple Virtual Hosts


```java
@Configuration
public class MultiVhostConfig {

    @Bean
    public ConnectionFactory primaryConnectionFactory() {
        CachingConnectionFactory factory = new CachingConnectionFactory();
        factory.setHost("localhost");
        factory.setPort(5672);
        factory.setUsername("admin");
        factory.setPassword("admin");
        factory.setVirtualHost("/primary");
        return factory;
    }

    @Bean
    public ConnectionFactory secondaryConnectionFactory() {
        CachingConnectionFactory factory = new CachingConnectionFactory();
        factory.setHost("localhost");
        factory.setPort(5672);
        factory.setUsername("admin");
        factory.setPassword("admin");
        factory.setVirtualHost("/secondary");
        return factory;
    }

    @Bean
    public RabbitTemplate primaryTemplate(
            @Qualifier("primaryConnectionFactory") ConnectionFactory cf) {
        RabbitTemplate template = new RabbitTemplate(cf);
        template.setMessageConverter(new Jackson2JsonMessageConverter());
        return template;
    }

    @Bean
    public RabbitTemplate secondaryTemplate(
            @Qualifier("secondaryConnectionFactory") ConnectionFactory cf) {
        RabbitTemplate template = new RabbitTemplate(cf);
        template.setMessageConverter(new Jackson2JsonMessageConverter());
        return template;
    }

    @Bean
    public SimpleRabbitListenerContainerFactory primaryListenerFactory(
            @Qualifier("primaryConnectionFactory") ConnectionFactory cf) {
        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
        factory.setConnectionFactory(cf);
        factory.setConcurrentConsumers(5);
        return factory;
    }

    @Bean
    public SimpleRabbitListenerContainerFactory secondaryListenerFactory(
            @Qualifier("secondaryConnectionFactory") ConnectionFactory cf) {
        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
        factory.setConnectionFactory(cf);
        factory.setConcurrentConsumers(3);
        return factory;
    }
}

@Component
public class VhostAwareConsumer {

    @RabbitListener(
        queues = "primary.queue",
        containerFactory = "primaryListenerFactory"
    )
    public void handlePrimary(Order order) {
        System.out.println("Primary: " + order);
    }

    @RabbitListener(
        queues = "secondary.queue",
        containerFactory = "secondaryListenerFactory"
    )
    public void handleSecondary(Order order) {
        System.out.println("Secondary: " + order);
    }
}
```

### 10. RabbitAdmin Ã¢â‚¬â€ Programmatic Management


```java
@Service
public class RabbitAdminService {

    private final RabbitAdmin admin;

    public RabbitAdminService(RabbitAdmin admin) {
        this.admin = admin;
    }

    public void declareInfrastructure(String tenantId) {
        Queue queue = QueueBuilder.durable("tenant." + tenantId + ".queue")
            .withArgument("x-message-ttl", 60000)
            .build();
        admin.declareQueue(queue);

        DirectExchange exchange = new DirectExchange("tenant." + tenantId + ".exchange");
        admin.declareExchange(exchange);

        Binding binding = BindingBuilder.bind(queue)
            .to(exchange)
            .with("tenant." + tenantId);
        admin.declareBinding(binding);

        // Dead letter setup
        Queue dlq = QueueBuilder.durable("tenant." + tenantId + ".dlq").build();
        admin.declareQueue(dlq);

        DirectExchange dlx = new DirectExchange("tenant." + tenantId + ".dlx");
        admin.declareExchange(dlx);

        Binding dlqBinding = BindingBuilder.bind(dlq)
            .to(dlx)
            .with("tenant." + tenantId + ".dead");
        admin.declareBinding(dlqBinding);
    }

    public void deleteQueue(String queueName) {
        boolean deleted = admin.deleteQueue(queueName);
        if (deleted) {
            System.out.println("Deleted queue: " + queueName);
        }
    }

    public void purgeQueue(String queueName) {
        int purged = admin.purgeQueue(queueName, false);
        System.out.println("Purged " + purged + " messages from " + queueName);
    }

    public Properties getQueueProperties(String queueName) {
        Properties props = admin.getQueueProperties(queueName);
        if (props != null) {
            System.out.println("Message count: " + props.get(RabbitAdmin.QUEUE_MESSAGE_COUNT));
            System.out.println("Consumer count: " + props.get(RabbitAdmin.QUEUE_CONSUMER_COUNT));
        }
        return props;
    }
}
```

### 11. Complete Order Processing Example


```java
@SpringBootApplication
@EnableRabbit
public class RabbitOrderApplication {

    public static void main(String[] args) {
        SpringApplication.run(RabbitOrderApplication.class, args);
    }
}

@Configuration
public class OrderMessagingConfig {

    @Bean
    public DirectExchange orderExchange() {
        return new DirectExchange("order.exchange");
    }

    @Bean
    public DirectExchange orderDeadLetterExchange() {
        return new DirectExchange("order.dlx");
    }

    @Bean
    public Queue paymentQueue() {
        return QueueBuilder.durable("order.payment.queue")
            .withArgument("x-dead-letter-exchange", "order.dlx")
            .withArgument("x-dead-letter-routing-key", "payment.dead")
            .withArgument("x-message-ttl", 30000)
            .withArgument("x-max-length", 500)
            .build();
    }

    @Bean
    public Queue shippingQueue() {
        return QueueBuilder.durable("order.shipping.queue")
            .build();
    }

    @Bean
    public Queue notificationQueue() {
        return QueueBuilder.durable("order.notification.queue")
            .build();
    }

    @Bean
    public Queue deadLetterQueue() {
        return QueueBuilder.durable("order.dlq")
            .withArgument("x-message-ttl", 86400000)
            .build();
    }

    @Bean
    public Binding paymentBinding() {
        return BindingBuilder.bind(paymentQueue())
            .to(orderExchange()).with("payment");
    }

    @Bean
    public Binding shippingBinding() {
        return BindingBuilder.bind(shippingQueue())
            .to(orderExchange()).with("shipping");
    }

    @Bean
    public Binding notificationBinding() {
        return BindingBuilder.bind(notificationQueue())
            .to(orderExchange()).with("notification");
    }

    @Bean
    public Binding deadLetterBinding() {
        return BindingBuilder.bind(deadLetterQueue())
            .to(orderDeadLetterExchange()).with("payment.dead");
    }
}

@Service
public class OrderCommandService {

    private static final Logger log = LoggerFactory.getLogger(OrderCommandService.class);
    private final RabbitTemplate rabbitTemplate;

    public OrderCommandService(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void placeOrder(Order order) {
        log.info("Placing order: {}", order.getId());
        rabbitTemplate.convertAndSend("order.exchange", "payment", order);
    }

    public void shipOrder(Long orderId) {
        ShipmentEvent event = new ShipmentEvent(orderId, Instant.now());
        rabbitTemplate.convertAndSend("order.exchange", "shipping", event);
    }
}

@Component
public class PaymentConsumer {

    private static final Logger log = LoggerFactory.getLogger(PaymentConsumer.class);
    private final RabbitTemplate rabbitTemplate;

    public PaymentConsumer(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    @RabbitListener(queues = "order.payment.queue", concurrency = "5")
    public void processPayment(Order order) {
        log.info("Processing payment for order {}: {}", order.getId(), order.getTotal());
        if (order.getTotal().compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Invalid total for order " + order.getId());
        }
        rabbitTemplate.convertAndSend("order.exchange", "notification",
            new NotificationEvent(order.getCustomerEmail(), "Payment received"));
        rabbitTemplate.convertAndSend("order.exchange", "shipping", order);
    }
}

@Component
public class ShippingConsumer {

    private static final Logger log = LoggerFactory.getLogger(ShippingConsumer.class);

    @RabbitListener(queues = "order.shipping.queue")
    public void processShipping(Order order) {
        log.info("Arranging shipping for order {} to {}", order.getId(), order.getShippingAddress());
    }

    @RabbitListener(queues = "order.shipping.queue")
    public void processShipmentEvent(ShipmentEvent event) {
        log.info("Processing shipment event for order {}", event.getOrderId());
    }
}

@Component
public class NotificationConsumer {

    private static final Logger log = LoggerFactory.getLogger(NotificationConsumer.class);

    @RabbitListener(queues = "order.notification.queue")
    public void sendNotification(NotificationEvent event) {
        log.info("Sending notification to {}: {}", event.getEmail(), event.getMessage());
    }
}

@Component
public class DeadLetterConsumer {

    private static final Logger log = LoggerFactory.getLogger(DeadLetterConsumer.class);

    @RabbitListener(queues = "order.dlq")
    public void handleDeadLetter(Order order) {
        log.error("Dead letter received for order {}: {}", order.getId(), order.getTotal());
        // Alert operations team
    }
}

@Component
public class RejectingErrorHandler extends ConditionalRejectingErrorHandler {

    private static final Logger log = LoggerFactory.getLogger(RejectingErrorHandler.class);

    @Override
    public void handleError(Throwable t) {
        log.error("RabbitMQ listener error", t);
        super.handleError(t);
    }
}
```

### 12. Container Customization


```java
@Configuration
public class ContainerCustomizerConfig {

    @Bean
    public SimpleRabbitListenerContainerFactory customContainerFactory(
            ConnectionFactory connectionFactory) {
        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
        factory.setConnectionFactory(connectionFactory);
        factory.setConcurrentConsumers(4);
        factory.setMaxConcurrentConsumers(12);
        factory.setPrefetchCount(8);
        factory.setBatchSize(3);
        factory.setConsumerBatchEnabled(true);
        factory.setAcknowledgeMode(AcknowledgeMode.MANUAL);
        factory.setDefaultRequeueRejected(false);
        factory.setMissingQueuesFatal(false);
        factory.setAutoStartup(true);
        factory.setAdviceChain(new Advice[] {
            new RetryOperationsInterceptor()
        });
        factory.setErrorHandler(new ConditionalRejectingErrorHandler());
        factory.setConsumerTagStrategy(q -> "myapp-" + q);
        factory.setExclusive(false);
        factory.setAfterReceivePostProcessors(message -> {
            message.getMessageProperties().setHeader("x-received-at",
                Instant.now().toString());
            return message;
        });
        factory.setApplicationContext(new AnnotationConfigApplicationContext());
        return factory;
    }

    @Bean
    public SimpleRabbitListenerContainerFactory exclusiveContainerFactory(
            ConnectionFactory connectionFactory) {
        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
        factory.setConnectionFactory(connectionFactory);
        factory.setConcurrentConsumers(1);
        factory.setPrefetchCount(1);
        factory.setExclusive(true);
        factory.setAcknowledgeMode(AcknowledgeMode.MANUAL);
        return factory;
    }
}
```

### 13. Custom Connection Factory with Multiple Channels


```java
@Bean
public CachingConnectionFactory multiChannelFactory() {
    CachingConnectionFactory factory = new CachingConnectionFactory();
    factory.setHost("rabbitmq.internal");
    factory.setPort(5672);
    factory.setUsername("app-user");
    factory.setPassword("app-pass");
    factory.setVirtualHost("/app");
    factory.setChannelCacheSize(50);
    factory.setChannelCheckoutTimeout(5000);
    factory.setConnectionTimeout(30000);
    factory.setRequestedHeartBeat(60);
    factory.setPublisherConfirmType(CachingConnectionFactory.ConfirmType.CORRELATED);
    factory.setPublisherReturns(true);
    factory.setShutdownTimeout(30000);

    // Configure connection listeners
    factory.addConnectionListener(new ConnectionListener() {
        @Override
        public void onCreate(Connection connection) {
            log.info("RabbitMQ connection created: {}", connection);
        }

        @Override
        public void onClose(Connection connection) {
            log.warn("RabbitMQ connection closed: {}", connection);
        }

        @Override
        public void onShutDown(ShutdownSignalException signal) {
            log.error("RabbitMQ connection shutdown: {}", signal.getMessage());
        }
    });

    return factory;
}
```

### 14. Full Application Properties


```yaml
spring:
  rabbitmq:
    host: localhost
    port: 5672
    username: guest
    password: guest
    virtual-host: /
    connection-timeout: 30s
    requested-heartbeat: 30s
    listener:
      simple:
        concurrency: 5
        max-concurrency: 15
        prefetch: 10
        acknowledge-mode: manual
        default-requeue-rejected: false
        retry:
          enabled: true
          initial-interval: 2s
          multiplier: 2.0
          max-attempts: 5
          max-interval: 30s
          stateless: true
    template:
      retry:
        enabled: true
        initial-interval: 1s
        multiplier: 2.0
        max-attempts: 3
      mandatory: true
    publisher-confirm-type: correlated
    publisher-returns: true
    cache:
      channel:
        size: 50
        checkout-timeout: 5s
```

### 15. Testing RabbitMQ


```java
@SpringBootTest
@EnableRabbit
class RabbitTemplateTest {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private RabbitAdmin rabbitAdmin;

    @BeforeEach
    void setUp() {
        Queue testQueue = QueueBuilder.durable("test.queue").build();
        DirectExchange testExchange = new DirectExchange("test.exchange");
        rabbitAdmin.declareQueue(testQueue);
        rabbitAdmin.declareExchange(testExchange);
        rabbitAdmin.declareBinding(
            BindingBuilder.bind(testQueue).to(testExchange).with("test"));
    }

    @AfterEach
    void tearDown() {
        rabbitAdmin.deleteQueue("test.queue");
        rabbitAdmin.deleteExchange("test.exchange");
    }

    @Test
    void testSendAndReceive() {
        Order order = new Order(1L, "test@test.com", BigDecimal.valueOf(100));
        rabbitTemplate.convertAndSend("test.exchange", "test", order);

        Order received = (Order) rabbitTemplate.receiveAndConvert("test.queue", 3000);
        assertThat(received.getId()).isEqualTo(order.getId());
        assertThat(received.getCustomerEmail()).isEqualTo(order.getCustomerEmail());
    }

    @Test
    void testConvertSendAndReceive() {
        Order order = new Order(2L, "reply@test.com", BigDecimal.valueOf(200));
        rabbitTemplate.convertSendAndReceive("test.exchange", "test", order);
    }
}

@SpringBootTest
@EnableRabbit
class RabbitListenerTest {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Test
    void testListenerReceivesMessage() {
        Order order = new Order(3L, "listener@test.com", BigDecimal.valueOf(300));
        rabbitTemplate.convertAndSend("test.exchange", "test", order);
        // Verify side effects (log output, database state, etc.)
    }
}
```

> [!TIP]
> Always use `CorrelationId` message property for end-to-end tracing → it helps track messages across producer, broker, and consumer.

> [!WARNING]
> Idempotent consumers are essential → messages can be redelivered after consumer failure or connection loss.

> [!NOTE]
> Configure a DLQ with a TTL-based retry queue for handling transient failures → the message returns to the original queue after TTL expires.

## Summary

RabbitMQ implements the AMQP 0-9-1 protocol, providing a robust message broker with four exchange types, durable and transient queues, and flexible routing through bindings. Key takeaways:

- **Exchanges** are the routing backbone Ã¢â‚¬â€ Direct for exact match, Topic for wildcard patterns, Fanout for broadcast, and Headers for attribute-based routing.
- **Queues** support rich configuration including TTL, dead-letter exchanges, max length, and priority.
- **Spring AMQP's `RabbitTemplate`** provides `convertAndSend`, `receiveAndConvert`, and `convertSendAndReceive` for both synchronous and asynchronous messaging. Always configure a `Jackson2JsonMessageConverter` for structured data.
- **`@RabbitListener`** consumes messages with per-listener concurrency tuning, container factory customization, and manual/auto acknowledgments.
- **Publisher confirms and returns** ensure reliable delivery. Always set `mandatory=true` and register `ConfirmCallback` and `ReturnCallback`.
- **Retry and error handling** uses `RetryTemplate` with exponential backoff, and `MessageRecoverer` implementations for final disposition Ã¢â‚¬â€ `RepublishMessageRecoverer` is production-preferred for routing failures to a retry/dead-letter queue.
- **`BatchingRabbitTemplate`** aggregates messages for high-throughput scenarios.
- **`RabbitAdmin`** enables programmatic management of exchanges, queues, and bindings for dynamic multi-tenant setups.

## Exercises

### Exercise 1: Direct Exchange Setup
Configure a `DirectExchange` named `"task.exchange"` with three queues: `critical.queue`, `normal.queue`, `low.queue`. Bind them with routing keys `"critical"`, `"normal"`, `"low"`.

### Exercise 2: Topic Exchange Pattern
Create a `TopicExchange` for a logging system. Bind queues to patterns: `"error.*"` for error logs, `"*.critical"` for critical logs across all services, `"app.#"` for all app logs.

### Exercise 3: RabbitTemplate Send and Receive
Use `RabbitTemplate.convertAndSend` to send a `Task` object to a queue, and `receiveAndConvert` to poll for it. Configure `Jackson2JsonMessageConverter`.

### Exercise 4: @RabbitListener with Manual Ack
Create a `@RabbitListener` that processes messages with manual acknowledgment. Use `channel.basicAck` on success and `channel.basicNack` on failure.

### Exercise 5: Dead Letter Queue
Configure a queue with `x-dead-letter-exchange` pointing to a DLX. Create a consumer on the DLQ that logs dead-lettered messages.

### Exercise 6: Publisher Confirms
Implement a reliable publisher that sets up `ConfirmCallback` and `ReturnCallback`. Verify ack/nack behavior by publishing to valid and invalid routing keys.

### Exercise 7: Retry with Exponential Backoff
Configure `RetryTemplate` with 1000ms initial interval, 3.0 multiplier, 30s max. Use `RepublishMessageRecoverer` to send failed messages to a retry exchange.

### Exercise 8: BatchingRabbitTemplate
Configure a `BatchingRabbitTemplate` with batch size 20, byte limit 10000, and 5-second timeout. Publish 50 small messages and verify batch behavior.

### Exercise 9: Multi-Vhost Setup
Configure two `ConnectionFactory` beans for vhosts `/app-a` and `/app-b`. Create separate `RabbitTemplate` beans and `@RabbitListener` container factories.

### Exercise 10: Complete Order Pipeline
Build a full order processing pipeline: `order.exchange` (direct), queues for payment Ã¢â€ â€™ inventory Ã¢â€ â€™ shipping Ã¢â€ â€™ notification, with a DLQ for failed messages and publisher confirms.
