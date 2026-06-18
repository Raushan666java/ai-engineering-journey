# Chapter 13: Socket Programming

## Learning Objectives

1. Explain the socket API and its relationship to the transport layer.
2. Write a TCP client-server application in C and Python.
3. Write a UDP client-server application in C and Python.
4. Compare blocking, non-blocking, and I/O multiplexing approaches.
5. Implement concurrent servers using select, poll, and epoll.

## 13.1 The Socket API

![Socket Programming and I/O Models](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch09-sockets.png)

![Socket Programming and Network APIs](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch-13-socket-programming-network-apis.png)

A socket is an abstraction for a communication endpoint. The socket API, derived from Berkeley UNIX, provides system calls for creating, connecting, sending, receiving, and closing network connections.

**Socket types:**

- `SOCK_STREAM`: reliable, connection-oriented byte stream (TCP).
- `SOCK_DGRAM`: unreliable, connectionless datagram (UDP).
- `SOCK_RAW`: direct IP access for custom protocols.

**Core functions:**

| Function | Description |
|----------|-------------|
| `socket()` | Creates a new socket |
| `bind()` | Binds socket to an address (IP + port) |
| `listen()` | Marks socket as passive (server, TCP) |
| `connect()` | Initiates connection to a remote socket |
| `accept()` | Accepts an incoming connection |
| `send()` / `sendto()` | Sends data |
| `recv()` / `recvfrom()` | Receives data |
| `close()` | Closes the socket |
| `setsockopt()` | Sets socket options |
| `select()` / `poll()` / `epoll()` | Monitors multiple sockets for events |

## 13.2 TCP Client-Server

### 13.2.1 TCP Server (C)

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>

#define PORT 8080
#define BUFFER_SIZE 1024

int main() {
    int server_fd, new_socket;
    struct sockaddr_in address;
    int opt = 1;
    int addrlen = sizeof(address);
    char buffer[BUFFER_SIZE] = {0};
    const char *hello = "Hello from server";

    // Create socket
    if ((server_fd = socket(AF_INET, SOCK_STREAM, 0)) == 0) {
        perror("socket failed");
        exit(EXIT_FAILURE);
    }

    // Set socket option to reuse address
    if (setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt))) {
        perror("setsockopt");
        exit(EXIT_FAILURE);
    }

    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(PORT);

    // Bind socket to port
    if (bind(server_fd, (struct sockaddr *)&address, sizeof(address)) < 0) {
        perror("bind failed");
        exit(EXIT_FAILURE);
    }

    // Listen for connections
    if (listen(server_fd, 3) < 0) {
        perror("listen");
        exit(EXIT_FAILURE);
    }

    printf("Server listening on port %d\n", PORT);

    // Accept incoming connection
    if ((new_socket = accept(server_fd, (struct sockaddr *)&address,
                             (socklen_t *)&addrlen)) < 0) {
        perror("accept");
        exit(EXIT_FAILURE);
    }

    // Read data from client
    read(new_socket, buffer, BUFFER_SIZE);
    printf("Received: %s\n", buffer);

    // Send response
    send(new_socket, hello, strlen(hello), 0);
    printf("Hello message sent\n");

    close(new_socket);
    close(server_fd);
    return 0;
}
```

### 13.2.2 TCP Client (C)

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>

#define PORT 8080

int main() {
    int sock = 0;
    struct sockaddr_in serv_addr;
    char *hello = "Hello from client";
    char buffer[1024] = {0};

    // Create socket
    if ((sock = socket(AF_INET, SOCK_STREAM, 0)) < 0) {
        printf("Socket creation error\n");
        return -1;
    }

    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(PORT);

    // Convert IPv4 address from text to binary
    if (inet_pton(AF_INET, "127.0.0.1", &serv_addr.sin_addr) <= 0) {
        printf("Invalid address\n");
        return -1;
    }

    // Connect to server
    if (connect(sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0) {
        printf("Connection failed\n");
        return -1;
    }

    // Send data
    send(sock, hello, strlen(hello), 0);
    printf("Hello message sent\n");

    // Receive response
    read(sock, buffer, 1024);
    printf("Received: %s\n", buffer);

    close(sock);
    return 0;
}
```

## 13.3 UDP Client-Server

### 13.3.1 UDP Server (Python)

```python
import socket

HOST = '127.0.0.1'
PORT = 8080

with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
    s.bind((HOST, PORT))
    print(f"UDP server listening on {HOST}:{PORT}")

    while True:
        data, addr = s.recvfrom(1024)
        print(f"Received from {addr}: {data.decode()}")

        response = f"Echo: {data.decode()}"
        s.sendto(response.encode(), addr)
```

### 13.3.2 UDP Client (Python)

```python
import socket

HOST = '127.0.0.1'
PORT = 8080

with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
    message = "Hello, UDP server"
    s.sendto(message.encode(), (HOST, PORT))
    print(f"Sent: {message}")

    data, addr = s.recvfrom(1024)
    print(f"Received from {addr}: {data.decode()}")
```

## 13.4 I/O Multiplexing

### 13.4.1 select()

`select()` monitors multiple file descriptors for readability, writability, or exception conditions. It is portable across UNIX systems but limited by the maximum FD_SETSIZE (typically 1024).

```c
fd_set read_fds;
struct timeval tv;
int retval;

FD_ZERO(&read_fds);
FD_SET(server_fd, &read_fds);
FD_SET(client_fd, &read_fds);

tv.tv_sec = 5;
tv.tv_usec = 0;

retval = select(FD_SETSIZE, &read_fds, NULL, NULL, &tv);

if (retval == -1) {
    perror("select()");
} else if (retval) {
    if (FD_ISSET(server_fd, &read_fds)) {
        /* New connection */
    }
    if (FD_ISSET(client_fd, &read_fds)) {
        /* Data available */
    }
} else {
    printf("Timeout\n");
}
```

### 13.4.2 poll()

`poll()` uses an array of struct pollfd instead of a fixed-size bitmask, eliminating the FD_SETSIZE limitation. It is slightly more efficient than select() for sparse descriptor sets.

```c
struct pollfd fds[MAX_CONNECTIONS];
nfds_t nfds = 0;

fds[nfds].fd = server_fd;
fds[nfds].events = POLLIN;
nfds++;

for (int i = 0; i < num_clients; i++) {
    fds[nfds].fd = client_fds[i];
    fds[nfds].events = POLLIN;
    nfds++;
}

int ret = poll(fds, nfds, timeout_ms);

if (ret > 0) {
    for (int i = 0; i < nfds; i++) {
        if (fds[i].revents & POLLIN) {
            /* Data available on fds[i].fd */
        }
    }
}
```

### 13.4.3 epoll()

`epoll()` is Linux-specific and provides the best scalability for thousands of connections. It uses an event-driven interface: the application registers descriptors with epoll_ctl(), and epoll_wait() returns only the descriptors with events.

```c
int epoll_fd = epoll_create1(0);
struct epoll_event ev, events[MAX_EVENTS];

ev.events = EPOLLIN;
ev.data.fd = server_fd;
epoll_ctl(epoll_fd, EPOLL_CTL_ADD, server_fd, &ev);

while (1) {
    int num_events = epoll_wait(epoll_fd, events, MAX_EVENTS, -1);

    for (int i = 0; i < num_events; i++) {
        if (events[i].data.fd == server_fd) {
            /* Accept new connection */
        } else {
            /* Read data from client */
        }
    }
}
```

epoll can use edge-triggered (EPOLLET) or level-triggered notifications. Edge-triggered mode delivers events only when the state changes, requiring non-blocking I/O and complete reads/writes per event.

## 13.5 Non-blocking I/O

A socket can be set to non-blocking mode: operations return immediately with EAGAIN if they would block. This enables a single thread to handle multiple connections without select/poll/epoll.

```c
// Set socket to non-blocking
int flags = fcntl(sock_fd, F_GETFL, 0);
fcntl(sock_fd, F_SETFL, flags | O_NONBLOCK);

// Now recv() returns -1 with errno EAGAIN if no data
ssize_t n = recv(sock_fd, buffer, BUFFER_SIZE, 0);
if (n == -1 && (errno == EAGAIN || errno == EWOULDBLOCK)) {
    // No data available, do other work
}
```

## 13.6 Socket Options

| Option | Level | Description |
|--------|-------|-------------|
| SO_REUSEADDR | SOL_SOCKET | Allow reuse of local address |
| SO_KEEPALIVE | SOL_SOCKET | Periodic keepalive probes |
| SO_LINGER | SOL_SOCKET | Control behavior on close with pending data |
| TCP_NODELAY | IPPROTO_TCP | Disable Nagle's algorithm |
| TCP_QUICKACK | IPPROTO_TCP | Disable delayed ACK |

## ðŸ’¡ Pro Tips

- **Always check return values**: `send()` and `recv()` may return fewer bytes than requested (short writes/reads). Loop until all bytes are transferred or an error occurs.
- **Use `SO_REUSEADDR` on servers**: This allows restarting a server immediately after a crash or shutdown without waiting for the TIME_WAIT state to expire.
- **Epoll edge-triggered is fast but tricky**: With EPOLLET, you must read/write until EAGAIN. If you stop early, you miss data and deadlock. Use non-blocking sockets and loops.
- **Nagle's algorithm can kill latency**: For interactive applications (SSH, games), set `TCP_NODELAY` to disable Nagle's buffering. For bulk transfers, keep it enabled to reduce small-packet overhead.

## One-Sentence Takeaways

- A socket is an abstraction for a communication endpoint identified by IP address and port.
- TCP servers follow socket â†’ bind â†’ listen â†’ accept sequence; TCP clients follow socket â†’ connect.
- UDP is connectionless: `sendto()` and `recvfrom()` handle addressing per message.
- `select()` works cross-platform but scales poorly beyond 1024 file descriptors.
- `epoll()` is Linux-specific, event-driven, and scales to tens of thousands of connections.
- Non-blocking I/O with EAGAIN handling enables single-threaded concurrent servers.

## Concept Comparison Table

| API | Scope | Event Model | Max FDs | Scalability |
|-----|-------|-------------|---------|-------------|
| select() | POSIX | Bitmask polling | 1024 (FD_SETSIZE) | O(n) |
| poll() | POSIX | Array of structs | Unlimited | O(n) |
| epoll (LT) | Linux | Event-driven (level) | Unlimited | O(1) |
| epoll (ET) | Linux | Event-driven (edge) | Unlimited | O(1) â€” most efficient |
| kqueue | BSD/macOS | Event-driven | Unlimited | O(1) |
| IOCP | Windows | Completion port | Unlimited | O(1) |

## Quick Reference: Socket API Functions

| Function | TCP Server | TCP Client | UDP Server | UDP Client |
|----------|-----------|------------|------------|------------|
| socket() | Yes | Yes | Yes | Yes |
| bind() | Yes | Optional | Yes | Optional |
| listen() | Yes | No | No | No |
| connect() | No | Yes | No | Optional |
| accept() | Yes | No | No | No |
| send() | On accepted socket | Yes | No | No |
| sendto() | No | No | Yes | Yes |
| recv() | On accepted socket | Yes | No | No |
| recvfrom() | No | No | Yes | Yes |
| close() | Yes | Yes | Yes | Yes |

## Cross-Application Matrix

| Pattern | Use Case | Mechanism | Libraries |
|---------|----------|-----------|-----------|
| Process-per-connection | Simple, isolated workloads | fork() per accept | libc |
| Thread-per-connection | Moderate concurrency | pthread_create | pthreads |
| Event-driven (select) | Portable, < 1000 clients | select() loop | libevent, libev |
| Event-driven (epoll) | 10k+ connections, Linux | epoll_wait() | libuv, asio |
| Async (libuv) | Cross-platform async I/O | Event loop | Node.js, uv |
| Coroutines | Async code in sync style | stackful/stackless | Boost.Asio, C++20 |

## Chapter Quiz

1. **Which function is NOT needed for a UDP server?**
   - a) socket()
   - b) bind()
   - c) listen() âœ“
   - d) recvfrom()

2. **What does `SO_REUSEADDR` allow?**
   - a) Address sharing between processes
   - b) Immediate port reuse after close âœ“
   - c) Connection reuse
   - d) Multiple connections per socket

3. **Which I/O multiplexing API scales best for 10,000 connections on Linux?**
   - a) select()
   - b) poll()
   - c) epoll() âœ“
   - d) sleep()

4. **In epoll edge-triggered mode, what error signals no more data?**
   - a) ENOMEM
   - b) EAGAIN âœ“
   - c) EBUSY
   - d) EINTR

5. **What TCP option disables Nagle's algorithm?**
   - a) TCP_QUICKACK
   - b) TCP_NODELAY âœ“
   - c) TCP_KEEPALIVE
   - d) TCP_DEFER_ACCEPT

**Answers:** 1-c, 2-b, 3-c, 4-b, 5-b

## Summary

Socket programming provides the interface between applications and the transport layer. TCP sockets provide reliable, connection-oriented communication; UDP sockets provide connectionless datagram communication. Concurrent servers can handle multiple clients through process-per-connection, thread-per-connection, or I/O multiplexing. select(), poll(), and epoll() provide event-driven I/O management, with epoll offering the best scalability for large numbers of connections.

## Exercises

### Review Questions

1. What is the purpose of the bind() function in a TCP server?
2. Why does UDP not need listen() or accept()?
3. What is the difference between select() and poll()?
4. What advantage does epoll offer over select() for high-concurrency servers?
5. What does the TCP_NODELAY socket option do?

### Application Problems

6. Write a TCP echo server in Python that handles multiple clients concurrently using threads. The server should echo each received message back to the client.
7. Write a UDP client that sends 1000 messages to a server and records the round-trip time for each. Calculate the mean, median, and 99th percentile RTT.
8. Implement a simple HTTP/1.0 server in C that parses the request line, returns a 200 OK response with a static HTML page, and closes the connection.

### Challenge Problem

9. **Build a non-blocking reverse proxy in C.** Implement a TCP reverse proxy that accepts connections on port 8080 and forwards them to a backend server on port 9000. Use epoll with edge-triggered mode and non-blocking sockets. The proxy must handle at least 10,000 concurrent connections without creating threads. Handle partial reads and writes correctly. Provide pseudocode or a complete implementation with error handling and buffer management.
