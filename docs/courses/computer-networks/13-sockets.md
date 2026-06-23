# Chapter 13: Socket Programming â€” Complete Reference

## Learning Objectives

1. Explain the socket API and its relationship to the transport layer.
2. Write TCP client-server applications in C++ and Python.
3. Write UDP client-server applications in C++ and Python.
4. Compare blocking, non-blocking, and I/O multiplexing approaches.
5. Implement concurrent servers using select, poll, and epoll.
6. Understand Unix domain sockets, raw sockets, and socket options.
7. Analyze scalability trade-offs for the C10K problem.
8. Identify edge cases: connection refused, broken pipe, EAGAIN, address in use.

---

## 13.1 Socket API Overview

### Real-World Analogy

A socket is like a **phone outlet in a building**:

- **socket()** â†’ You install a phone jack (create the endpoint).
- **bind()** â†’ You assign a phone number to that jack (IP + port).
- **listen()** â†’ You wait for someone to call (TCP server only).
- **connect()** â†’ You dial someone's number (TCP client).
- **accept()** â†’ You pick up the call (TCP server).
- **send()/recv()** â†’ You talk / listen.
- **close()** â†’ You hang up.

The kernel is the **telephone exchange**: it routes data between endpoints, buffers when lines are busy, and notifies when a call arrives.

### What Is a Socket?

A socket is a software abstraction representing one endpoint of a two-way communication channel. The socket API (Berkeley sockets, 1983) provides system calls that allow user-space programs to send and receive data across a network.

```text
Application (user space)
        |
   [Socket FD] â€” int
        |
    Kernel
        |
    Protocol Stack (TCP/UDP/IP)
        |
    Network Interface (NIC)
```

### Socket Creation

The `socket()` system call creates an endpoint:

```c
int socket(int domain, int type, int protocol);
```

| Parameter | Values | Description |
|-----------|--------|-------------|
| `domain` | `AF_INET` (IPv4), `AF_INET6` (IPv6), `AF_UNIX` (local) | Address family |
| `type` | `SOCK_STREAM`, `SOCK_DGRAM`, `SOCK_RAW` | Socket type |
| `protocol` | `0` (default for type), `IPPROTO_TCP`, `IPPROTO_UDP` | Protocol |

### Numbered Steps â€” Socket Lifecycle

1. **Create socket**: `socket()` returns a file descriptor.
2. **Bind (server)**: `bind()` assigns address and port.
3. **Listen (TCP server)**: `listen()` marks socket as passive.
4. **Connect (TCP client)**: `connect()` initiates 3-way handshake.
5. **Accept (TCP server)**: `accept()` creates new connected socket.
6. **Data transfer**: `send()`, `recv()`, `sendto()`, `recvfrom()`.
7. **Close**: `close()` releases resources.

### Pseudocode â€” Generic Client/Server

```
=== SERVER ===
fd = socket(AF_INET, SOCK_STREAM, 0)
bind(fd, addr, len)
listen(fd, backlog)
loop:
    client_fd = accept(fd, client_addr, &addrlen)
    recv(client_fd, buf, len, 0)
    send(client_fd, response, len, 0)
    close(client_fd)

=== CLIENT ===
fd = socket(AF_INET, SOCK_STREAM, 0)
connect(fd, server_addr, addrlen)
send(fd, msg, len, 0)
recv(fd, buf, len, 0)
close(fd)
```

### Dry Run â€” Socket Creation Trace

| Step | Call | Return | Kernel State |
|------|------|--------|--------------|
| 1 | `socket(AF_INET, SOCK_STREAM, 0)` | `fd=3` | Allocates inode, protocol control block |
| 2 | `bind(3, {AF_INET, 8080, INADDR_ANY}, 16)` | `0` | Assigns port 8080, marks bound |
| 3 | `listen(3, 128)` | `0` | Marks passive, creates accept queue |
| 4 | `connect(fd, {AF_INET, 8080, 127.0.0.1}, 16)` | `0` | SYN sent, enters SYN_SENT |
| 5 | accept returns `fd=4` | `4` | Connection established, ESTABLISHED |
| 6 | `send(4, "hello", 5, 0)` | `5` | Data queued in send buffer |
| 7 | `recv(4, buf, 1024, 0)` | `5` | Data copied to user buffer |
| 8 | `close(4)` | `0` | FIN sent, socket released |

### Complexity Analysis

| Operation | Time | Space | Why? |
|-----------|------|-------|------|
| `socket()` | O(1) | O(1) | Allocates a fixed-size inode + protocol control block |
| `bind()` | O(1) | O(1) | Just writes a port + address into a kernel structure |
| `listen()` | O(1) | O(backlog) | Pre-allocates accept queue of `backlog` slots |
| `connect()` | O(1) call + O(RTT) wait | O(1) | System call returns immediately; handshake is async |
| `accept()` | O(1) | O(1) | Dequeues from pre-allocated accept queue |
| `send()` | O(1) (usually) | O(buf) | Copies to kernel buffer; may block if buffer full |
| `recv()` | O(1) (usually) | O(buf) | Copies from kernel buffer to user space |
| `close()` | O(1) | O(1) | Frees descriptor, sends FIN if connected |

### A&D Table â€” Socket API

| Advantage | Disadvantage |
|-----------|-------------|
| Universal abstraction across protocols | Low-level: error-prone, manual buffer mgmt |
| Direct kernel access â†’ minimal overhead | Complex state machine per socket |
| Cross-platform (POSIX standard) | Different APIs on Windows (Winsock) |
| Supports any protocol (TCP/UDP/ICMP/raw) | No built-in backpressure handling |
| Zero-copy options (sendfile, splice) | No built-in TLS |

### Edge Cases

| Edge Case | When It Happens | How to Handle |
|-----------|----------------|---------------|
| `socket()` returns -1 | System FD limit reached | Check `errno == EMFILE`; increase `ulimit -n` |
| `bind()` EADDRINUSE | Port already in use | Use `SO_REUSEADDR`; wait for TIME_WAIT |
| `bind()` EACCES | Binding to privileged port (< 1024) | Run as root or use CAP_NET_BIND_SERVICE |
| `listen()` EADDRINUSE | Race on simultaneous binds | Retry with backoff |
| `accept()` returns -1 | Interrupted by signal (EINTR) | Restart accept in loop |
| `send()` returns < len | Partial write (short send) | Loop until all bytes sent |
| `recv()` returns 0 | Peer closed connection | Close socket, stop reading |
| `recv()` returns -1 | EAGAIN (non-blocking, no data) | Try again later |
| `connect()` ECONNREFUSED | No process listening on port | Retry or report error |
| `connect()` ETIMEDOUT | Firewall drop or server down | Exponential backoff retry |

---

## 13.2 TCP Sockets

### Real-World Analogy: Restaurant Phone for Reservations

A TCP connection is like a **dedicated phone line between a restaurant host and a customer**:

- **Server socket** = The restaurant's main phone line.
- **bind()** = Getting the phone number published.
- **listen()** = The host waits by the phone.
- **connect()** = The customer dials the number.
- **accept()** = The host picks up and creates a conversation channel.
- **send()/recv()** = Talking back and forth.
- **close()** = Hanging up.
- **byte stream** = Everything said in order, nothing lost.
- **3-way handshake** = "Hello?" â†’ "Hi, who's this?" â†’ "It's me, let's talk."

TCP guarantees: **reliable, in-order, connection-oriented, full-duplex byte stream**.

### TCP Server Steps

```
Step 1: socket()    â†’ Create endpoint (fd=3)
Step 2: setsockopt(SO_REUSEADDR) â†’ Allow port reuse
Step 3: bind()      â†’ Assign IP + port
Step 4: listen()    â†’ Mark as passive, set backlog
Step 5: accept()    â†’ Block until client connects â†’ returns client_fd
Step 6: recv()/send() â†’ Echo loop
Step 7: close()     â†’ Close client, then server
```

### TCP Client Steps

```
Step 1: socket()    â†’ Create endpoint
Step 2: connect()   â†’ Initiate 3-way handshake
Step 3: send()/recv() â†’ Data exchange
Step 4: close()     â†’ Terminate connection
```

### Pseudocode â€” TCP Echo Server

```
function tcp_echo_server(port):
    server_fd = socket(AF_INET, SOCK_STREAM, 0)
    if server_fd < 0: error("socket")
    opt = 1
    setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt)
    addr = {AF_INET, port, INADDR_ANY}
    bind(server_fd, &addr, sizeof(addr))
    listen(server_fd, 128)
    while true:
        client_fd = accept(server_fd, &client_addr, &addrlen)
        if client_fd < 0: continue
        while true:
            n = recv(client_fd, buf, BUF_SIZE, 0)
            if n <= 0: break
            send(client_fd, buf, n, 0)
        close(client_fd)
```

### Pseudocode â€” TCP Echo Client

```
function tcp_echo_client(host, port, message):
    fd = socket(AF_INET, SOCK_STREAM, 0)
    server_addr = resolve(host, port)
    connect(fd, &server_addr, sizeof(server_addr))
    send(fd, message, len(message), 0)
    n = recv(fd, buf, BUF_SIZE, 0)
    print "Echoed:", string(buf, n)
    close(fd)
```

### Dry Run â€” TCP 3-Way Handshake

#### Connection Establishment

| Step | Client State | Client Action | Packet | Server Action | Server State |
|------|-------------|---------------|--------|---------------|-------------|
| 0 | CLOSED | `socket()` | â€” | `socket()`, `bind()`, `listen()` | LISTEN |
| 1 | SYN_SENT | `connect()` | **SYN** seq=100 | Receives SYN | SYN_RCVD |
| 2 | ESTABLISHED | Receives SYN+ACK | **SYN+ACK** seq=300 ack=101 | Sends SYN+ACK | â€” |
| 3 | â€” | Sends ACK | **ACK** seq=101 ack=301 | Receives ACK | ESTABLISHED |
| 4 | â€” | `send("hello")` | **DATA** seq=101 | `accept()` returns | â€” |
| 5 | â€” | Receives echo | **DATA** seq=301 ack=106 | `send("hello")` | â€” |

#### Connection Teardown

| Step | Client | Packet | Server |
|------|--------|--------|--------|
| 0 | `close()` | **FIN** seq=106 | Receives FIN â†’ CLOSE_WAIT |
| 1 | FIN_WAIT_1 | â€” | â€” |
| 2 | FIN_WAIT_2 | **ACK** seq=302 | Sends ACK |
| 3 | â€” | **FIN** seq=302 | Sends FIN |
| 4 | TIME_WAIT | **ACK** seq=107 | Receives ACK â†’ CLOSED |
| 5 | CLOSED (after 2*MSL) | â€” | â€” |

### C++ Implementation â€” TCP Echo Server

```cpp
// tcp_echo_server.cpp
#include <iostream>
#include <cstring>
#include <string>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <system_error>

constexpr int PORT = 8080;
constexpr int BUFFER_SIZE = 4096;
constexpr int BACKLOG = 128;

class TCPServer {
    int server_fd;

public:
    TCPServer() : server_fd(-1) {}

    void start() {
        server_fd = ::socket(AF_INET, SOCK_STREAM, 0);
        if (server_fd < 0)
            throw std::system_error(errno, std::generic_category(), "socket");

        int opt = 1;
        if (setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt)) < 0)
            throw std::system_error(errno, std::generic_category(), "setsockopt");

        sockaddr_in addr{};
        addr.sin_family = AF_INET;
        addr.sin_addr.s_addr = INADDR_ANY;
        addr.sin_port = htons(PORT);

        if (bind(server_fd, (struct sockaddr*)&addr, sizeof(addr)) < 0)
            throw std::system_error(errno, std::generic_category(), "bind");

        if (listen(server_fd, BACKLOG) < 0)
            throw std::system_error(errno, std::generic_category(), "listen");

        std::cout << "[TCP Server] Listening on port " << PORT << std::endl;

        while (true) {
            sockaddr_in client_addr{};
            socklen_t addrlen = sizeof(client_addr);
            int client_fd = accept(server_fd, (struct sockaddr*)&client_addr, &addrlen);
            if (client_fd < 0) {
                if (errno == EINTR) continue;
                std::cerr << "accept failed: " << strerror(errno) << std::endl;
                continue;
            }
            char client_ip[INET_ADDRSTRLEN];
            inet_ntop(AF_INET, &client_addr.sin_addr, client_ip, sizeof(client_ip));
            std::cout << "[+] Client connected: " << client_ip
                      << ":" << ntohs(client_addr.sin_port) << std::endl;

            handle_client(client_fd, client_addr);
            close(client_fd);
            std::cout << "[-] Client disconnected: " << client_ip
                      << ":" << ntohs(client_addr.sin_port) << std::endl;
        }
    }

    void handle_client(int fd, const sockaddr_in&) {
        char buf[BUFFER_SIZE];
        while (true) {
            ssize_t n = recv(fd, buf, sizeof(buf) - 1, 0);
            if (n < 0) {
                if (errno == EINTR) continue;
                if (errno == EAGAIN || errno == EWOULDBLOCK) break;
                std::cerr << "recv error: " << strerror(errno) << std::endl;
                break;
            }
            if (n == 0) {
                std::cout << "[*] Client closed connection" << std::endl;
                break;
            }
            buf[n] = '\0';
            std::cout << "[RECV] " << buf << std::endl;
            ssize_t sent = 0;
            while (sent < n) {
                ssize_t s = send(fd, buf + sent, n - sent, 0);
                if (s < 0) {
                    if (errno == EINTR) continue;
                    std::cerr << "send error: " << strerror(errno) << std::endl;
                    return;
                }
                sent += s;
            }
        }
    }

    ~TCPServer() {
        if (server_fd >= 0) close(server_fd);
    }
};

int main() {
    try {
        TCPServer server;
        server.start();
    } catch (const std::exception& e) {
        std::cerr << "Fatal: " << e.what() << std::endl;
        return 1;
    }
    return 0;
}
```

### C++ Implementation â€” TCP Echo Client

```cpp
// tcp_echo_client.cpp
#include <iostream>
#include <cstring>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>

constexpr int PORT = 8080;
constexpr int BUFFER_SIZE = 4096;

int main(int argc, char* argv[]) {
    const char* message = (argc > 1) ? argv[1] : "Hello, TCP Server!";

    int fd = socket(AF_INET, SOCK_STREAM, 0);
    if (fd < 0) {
        std::cerr << "socket: " << strerror(errno) << std::endl;
        return 1;
    }

    sockaddr_in server_addr{};
    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(PORT);
    if (inet_pton(AF_INET, "127.0.0.1", &server_addr.sin_addr) <= 0) {
        std::cerr << "inet_pton: invalid address" << std::endl;
        close(fd);
        return 1;
    }

    if (connect(fd, (struct sockaddr*)&server_addr, sizeof(server_addr)) < 0) {
        std::cerr << "connect: " << strerror(errno) << std::endl;
        close(fd);
        return 1;
    }
    std::cout << "[TCP Client] Connected to server" << std::endl;

    size_t len = strlen(message);
    ssize_t sent = 0;
    while (sent < (ssize_t)len) {
        ssize_t s = send(fd, message + sent, len - sent, 0);
        if (s < 0) {
            if (errno == EINTR) continue;
            std::cerr << "send: " << strerror(errno) << std::endl;
            close(fd);
            return 1;
        }
        sent += s;
    }
    std::cout << "[SENT] " << message << std::endl;

    char buf[BUFFER_SIZE];
    ssize_t received = 0;
    while (received < (ssize_t)len) {
        ssize_t n = recv(fd, buf + received, BUFFER_SIZE - received - 1, 0);
        if (n < 0) {
            if (errno == EINTR) continue;
            std::cerr << "recv: " << strerror(errno) << std::endl;
            close(fd);
            return 1;
        }
        if (n == 0) {
            std::cout << "[*] Server closed connection" << std::endl;
            break;
        }
        received += n;
    }
    buf[received] = '\0';
    std::cout << "[RECV] " << buf << std::endl;

    close(fd);
    return 0;
}
```

### Python Implementation â€” TCP Echo Server

```python
import socket
import sys

HOST = '0.0.0.0'
PORT = 8080
BUFFER_SIZE = 4096
BACKLOG = 128


def tcp_echo_server():
    server_fd = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        server_fd.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        server_fd.bind((HOST, PORT))
        server_fd.listen(BACKLOG)
        print(f"[TCP Server] Listening on {HOST}:{PORT}")

        while True:
            client_fd, (client_ip, client_port) = server_fd.accept()
            print(f"[+] Client connected: {client_ip}:{client_port}")
            try:
                while True:
                    data = client_fd.recv(BUFFER_SIZE)
                    if not data:
                        print(f"[*] Client {client_ip}:{client_port} closed")
                        break
                    print(f"[RECV] {data.decode(errors='replace')}")
                    client_fd.sendall(data)
            except ConnectionResetError:
                print(f"[!] Connection reset by {client_ip}:{client_port}")
            except BrokenPipeError:
                print(f"[!] Broken pipe: {client_ip}:{client_port}")
            finally:
                client_fd.close()
                print(f"[-] Client disconnected: {client_ip}:{client_port}")
    except OSError as e:
        print(f"[FATAL] {e}")
        sys.exit(1)
    finally:
        server_fd.close()


if __name__ == '__main__':
    tcp_echo_server()
```

### Python Implementation â€” TCP Echo Client

```python
import socket
import sys

HOST = '127.0.0.1'
PORT = 8080


def tcp_echo_client(message="Hello, TCP Server!"):
    fd = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        fd.connect((HOST, PORT))
        print(f"[TCP Client] Connected to {HOST}:{PORT}")

        fd.sendall(message.encode())
        print(f"[SENT] {message}")

        response = fd.recv(4096)
        print(f"[RECV] {response.decode(errors='replace')}")
    except ConnectionRefusedError:
        print("[!] Connection refused. Is the server running?")
        sys.exit(1)
    except OSError as e:
        print(f"[!] Error: {e}")
        sys.exit(1)
    finally:
        fd.close()


if __name__ == '__main__':
    msg = sys.argv[1] if len(sys.argv) > 1 else "Hello, TCP Server!"
    tcp_echo_client(msg)
```

### Complexity Analysis â€” TCP

| Operation | Time | Space | Why? |
|-----------|------|-------|------|
| `socket()` | O(1) | O(1) | Kernel allocates a fixed-size socket structure |
| `bind()` | O(1) | O(1) | Port check + assignment in kernel port table |
| `listen()` | O(1) | O(backlog) | Pre-allocates accept queue of `backlog` entries |
| `connect()` | O(1) syscall + O(RTT) wait | O(1) | SYN sent; kernel retries, user blocks |
| `accept()` | O(1) | O(1) | Dequeues completed connection; may allocate new FD |
| `send()` | O(n) copy | O(n) buffer | Copies n bytes from user â†’ kernel send buffer |
| `recv()` | O(n) copy | O(n) buffer | Copies n bytes from kernel recv buffer â†’ user |
| `close()` | O(1) | O(1) | FIN sent; socket enters TIME_WAIT |

**Why O(n) for send/recv?** Data must be copied between user space and kernel space. This copy is the dominant cost for large transfers. Zero-copy techniques (sendfile, splice, msg_zerocopy) bypass this for file transfers.

### A&D Table â€” TCP Sockets

| Advantage | Disadvantage |
|-----------|-------------|
| Reliable: all data arrives in order | Connection setup overhead (3-way handshake) |
| Automatic retransmission on loss | Head-of-line blocking |
| Flow control (sliding window) | More memory per socket (send/recv buffers) |
| Congestion control (AIMD, CUBIC) | No broadcast/multicast support |
| Connection-oriented state tracking | TIME_WAIT state ties up ports |
| Kernel buffering handles bursts | Lower throughput than UDP for lossy links |

### Edge Cases â€” TCP

| Edge Case | Cause | Symptom | Solution |
|-----------|-------|---------|----------|
| **Connection refused** | No server listening on port | `connect()` returns -1, `errno == ECONNREFUSED` (111) | Check server is running; wait and retry |
| **Broken pipe** | Write to closed connection | `send()` returns -1, `SIGPIPE` or `errno == EPIPE` (32) | Ignore SIGPIPE with `signal(SIGPIPE, SIG_IGN)`; check recv return |
| **Connection reset** | Peer crashed without FIN | `recv()` returns -1, `errno == ECONNRESET` (104) | Close socket immediately |
| **Address in use** | TIME_WAIT from previous run | `bind()` returns -1, `errno == EADDRINUSE` (98) | Set `SO_REUSEADDR` before bind |
| **Partial send** | Kernel buffer full or congestion | `send()` returns < len | Loop until all bytes sent |
| **Stale connections** | No traffic, peer dead | recv blocks forever | Set `SO_KEEPALIVE` or application-level timeout |
| **SYN flood** | Malicious client sends many SYNs | `accept()` may fail, backlog fills | Enable `tcp_syncookies` on Linux |
| **Too many open files** | Process FD limit | `socket()/accept()` returns -1, `EMFILE` (24) | Increase `ulimit -n` |

---

## 13.3 UDP Sockets

### Real-World Analogy: Post Office Mailbox

UDP is like **sending postcards through the mail**:

- **socket()** = You buy a stack of postcards.
- **bind()** = You write your return address on each.
- **sendto()** = You drop a postcard in the mailbox.
- **recvfrom()** = You check your mailbox for replies.
- **No connect/listen/accept** = No phone call, no reservation. Just send and hope.
- **No ordering** = Postcards may arrive out of order.
- **No guarantee** = Some postcards get lost.

UDP characteristics: **unreliable, connectionless, message-oriented, no ordering guarantees, no congestion control**.

### UDP Server Steps

```
Step 1: socket(AF_INET, SOCK_DGRAM, 0)
Step 2: bind(sock, addr, len)
Step 3: recvfrom(sock, buf, len, 0, &client_addr, &addrlen)
Step 4: sendto(sock, response, len, 0, &client_addr, addrlen)
Step 5: close(sock)
```

### UDP Client Steps

```
Step 1: socket(AF_INET, SOCK_DGRAM, 0)
Step 2: sendto(sock, msg, len, 0, &server_addr, addrlen)
Step 3: recvfrom(sock, buf, len, 0, &from_addr, &addrlen)
Step 4: close(sock)
```

### Pseudocode â€” UDP Echo Server

```
function udp_echo_server(port):
    fd = socket(AF_INET, SOCK_DGRAM, 0)
    addr = {AF_INET, port, INADDR_ANY}
    bind(fd, &addr, sizeof(addr))
    while true:
        n = recvfrom(fd, buf, MAX_SIZE, 0, &client_addr, &addrlen)
        if n > 0:
            sendto(fd, buf, n, 0, &client_addr, addrlen)
```

### Pseudocode â€” UDP Echo Client

```
function udp_echo_client(host, port, message):
    fd = socket(AF_INET, SOCK_DGRAM, 0)
    sendto(fd, message, len(message), 0, &server_addr, addrlen)
    n = recvfrom(fd, buf, MAX_SIZE, 0, &from_addr, &addrlen)
    print "Echoed:", string(buf, n)
    close(fd)
```

### Dry Run â€” UDP Datagram Flow

| Step | Client | Packet (src:port â†’ dst:port) | Server |
|------|--------|-----|--------|
| 0 | `socket(AF_INET, SOCK_DGRAM)` | â€” | `socket()`, `bind(0.0.0.0:8080)` |
| 1 | `sendto("ping", 127.0.0.1:8080)` | **UDP** 127.0.0.1:54321 â†’ 127.0.0.1:8080 | kernel delivers to bound socket |
| 2 | â€” | payload: "ping" | `recvfrom()` returns ("ping", (127.0.0.1, 54321)) |
| 3 | â€” | **UDP** 127.0.0.1:8080 â†’ 127.0.0.1:54321 | `sendto("ping")` |
| 4 | `recvfrom()` returns "ping" | payload: "ping" | â€” |
| 5 | Both close | â€” | â€” |

**Note**: No handshake. The server doesn't know a client exists until the first datagram arrives.

### C++ Implementation â€” UDP Echo Server

```cpp
// udp_echo_server.cpp
#include <iostream>
#include <cstring>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>

constexpr int PORT = 8080;
constexpr int BUFFER_SIZE = 65507;  // Max UDP payload

int main() {
    int fd = socket(AF_INET, SOCK_DGRAM, 0);
    if (fd < 0) {
        std::cerr << "socket: " << strerror(errno) << std::endl;
        return 1;
    }

    sockaddr_in addr{};
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = INADDR_ANY;
    addr.sin_port = htons(PORT);

    if (bind(fd, (struct sockaddr*)&addr, sizeof(addr)) < 0) {
        std::cerr << "bind: " << strerror(errno) << std::endl;
        close(fd);
        return 1;
    }

    std::cout << "[UDP Server] Listening on port " << PORT << std::endl;

    char buf[BUFFER_SIZE];
    sockaddr_in client_addr{};
    socklen_t addrlen = sizeof(client_addr);

    while (true) {
        ssize_t n = recvfrom(fd, buf, sizeof(buf), 0,
                             (struct sockaddr*)&client_addr, &addrlen);
        if (n < 0) {
            if (errno == EINTR) continue;
            std::cerr << "recvfrom: " << strerror(errno) << std::endl;
            break;
        }
        buf[n] = '\0';
        std::cout << "[RECV " << n << " bytes] " << buf << std::endl;
        ssize_t sent = sendto(fd, buf, n, 0,
                              (struct sockaddr*)&client_addr, addrlen);
        if (sent < 0) {
            std::cerr << "sendto: " << strerror(errno) << std::endl;
        }
    }

    close(fd);
    return 0;
}
```

### C++ Implementation â€” UDP Echo Client

```cpp
// udp_echo_client.cpp
#include <iostream>
#include <cstring>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>

constexpr int PORT = 8080;
constexpr int BUFFER_SIZE = 4096;

int main(int argc, char* argv[]) {
    const char* message = (argc > 1) ? argv[1] : "Hello, UDP Server!";

    int fd = socket(AF_INET, SOCK_DGRAM, 0);
    if (fd < 0) {
        std::cerr << "socket: " << strerror(errno) << std::endl;
        return 1;
    }

    sockaddr_in server_addr{};
    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(PORT);
    inet_pton(AF_INET, "127.0.0.1", &server_addr.sin_addr);

    sendto(fd, message, strlen(message), 0,
           (struct sockaddr*)&server_addr, sizeof(server_addr));
    std::cout << "[SENT] " << message << std::endl;

    char buf[BUFFER_SIZE];
    sockaddr_in from_addr{};
    socklen_t fromlen = sizeof(from_addr);

    ssize_t n = recvfrom(fd, buf, sizeof(buf) - 1, 0,
                         (struct sockaddr*)&from_addr, &fromlen);
    if (n >= 0) {
        buf[n] = '\0';
        std::cout << "[RECV] " << buf << std::endl;
    } else {
        std::cerr << "recvfrom: " << strerror(errno) << std::endl;
    }

    close(fd);
    return 0;
}
```

### Python Implementation â€” UDP Echo Server

```python
import socket, sys

HOST = '0.0.0.0'
PORT = 8080
BUFFER_SIZE = 65507


def udp_echo_server():
    fd = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        fd.bind((HOST, PORT))
        print(f"[UDP Server] Listening on {HOST}:{PORT}")

        while True:
            data, (client_ip, client_port) = fd.recvfrom(BUFFER_SIZE)
            print(f"[RECV {len(data)} bytes from {client_ip}:{client_port}] "
                  f"{data.decode(errors='replace')}")
            fd.sendto(data, (client_ip, client_port))
    except OSError as e:
        print(f"[FATAL] {e}")
        sys.exit(1)
    finally:
        fd.close()


if __name__ == '__main__':
    udp_echo_server()
```

### Python Implementation â€” UDP Echo Client

```python
import socket, sys

HOST = '127.0.0.1'
PORT = 8080


def udp_echo_client(message="Hello, UDP Server!"):
    fd = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        fd.sendto(message.encode(), (HOST, PORT))
        print(f"[SENT] {message}")
        data, (host, port) = fd.recvfrom(4096)
        print(f"[RECV] {data.decode(errors='replace')}")
    except OSError as e:
        print(f"[!] {e}")
        sys.exit(1)
    finally:
        fd.close()


if __name__ == '__main__':
    msg = sys.argv[1] if len(sys.argv) > 1 else "Hello, UDP Server!"
    udp_echo_client(msg)
```

### Complexity Analysis â€” UDP

| Operation | Time | Space | Why? |
|-----------|------|-------|------|
| `socket()` | O(1) | O(1) | Lightweight allocation (no connection state) |
| `bind()` | O(1) | O(1) | Port assignment in kernel table |
| `sendto()` | O(n) copy + O(1) lookup | O(n) buffer | Copy to kernel; single IP lookup |
| `recvfrom()` | O(n) copy | O(n) buffer | Dequeue datagram; copy to user |
| `close()` | O(1) | O(1) | Drop socket, no FIN exchange |

**Why UDP is faster than TCP:** No connection state â†’ no handshake, no congestion control, no sequence numbers, no retransmission timers. `sendto()` is typically 2-5x faster than TCP `send()` in microbenchmarks.

### A&D Table â€” UDP Sockets

| Advantage | Disadvantage |
|-----------|-------------|
| Zero connection overhead | No delivery guarantee |
| No head-of-line blocking | No ordering guarantee |
| Supports broadcast and multicast | No congestion control â†’ can flood network |
| Lower latency (no handshake) | No built-in flow control |
| Smaller kernel memory footprint | Datagram boundaries: max 65507 bytes payload |
| Ideal for real-time apps (VoIP, gaming) | Application must handle loss, reordering |

### Edge Cases â€” UDP

| Edge Case | Cause | Symptom | Solution |
|-----------|-------|---------|----------|
| **Datagram loss** | Network congestion, buffer overflow | `recvfrom()` never returns that datagram | Application-level ACK + retransmit |
| **Out-of-order delivery** | Network multipathing | Datagrams arrive in wrong order | Sequence numbers + reorder buffer |
| **Duplication** | Network retransmission | Same datagram received twice | Dedup via unique IDs |
| **Buffer overflow** | Receiver too slow | `recvfrom()` drops datagrams silently | Increase socket buffer with `SO_RCVBUF` |
| **Message too large** | Datagram > path MTU | `sendto()` returns EMSGSIZE (90) | Fragment in application or use PMTUD |
| **No client bind** | Client didn't call bind | Ephemeral port auto-assigned on first sendto | Works fine; port visible in recvfrom |
| **EAGAIN (non-blocking)** | No datagram ready | `recvfrom()` returns -1, errno EAGAIN | Try again later |

---

## 13.4 Blocking vs Non-blocking Sockets

### Real-World Analogy: Restaurant Ordering Styles

- **Blocking** = You sit at the counter and stare at the chef until your food is ready. You do nothing else.
- **Non-blocking (polling)** = Every 30 seconds you ask "Is it ready?", then go back to reading. You waste checking cycles.
- **I/O Multiplexing** = You give your order number and sit down. The waiter calls your number when ready. You do other things in between.

### Detailed Comparison

| Property | Blocking | Non-blocking |
|----------|----------|--------------|
| **Behavior** | System call blocks until done | Returns immediately with -1 / EAGAIN if can't complete |
| **Threads** | 1 thread per connection required | 1 thread can manage many connections |
| **CPU Usage** | Zero while blocked (waiting in kernel) | Busy-waiting if polling in a tight loop |
| **Latency** | Minimal for single connection | Slightly higher due to repeated syscalls |
| **Complexity** | Simple linear code | Must handle partial operations |
| **Use case** | Simple clients, low concurrency | High-concurrency servers with epoll/select |

### Setting Non-blocking Mode

```c
// Set a socket to non-blocking
int flags = fcntl(sock_fd, F_GETFL, 0);
fcntl(sock_fd, F_SETFL, flags | O_NONBLOCK);

// Or use ioctl:
int on = 1;
ioctl(sock_fd, FIONBIO, &on);

// Modern: SOCK_NONBLOCK at socket creation (Linux 2.6.27+)
int fd = socket(AF_INET, SOCK_STREAM | SOCK_NONBLOCK, 0);
```

### C++ â€” Non-blocking TCP Server (Single Client, Polling)

```cpp
#include <iostream>
#include <cstring>
#include <unistd.h>
#include <fcntl.h>
#include <sys/socket.h>
#include <netinet/in.h>

constexpr int PORT = 8080;

int set_nonblocking(int fd) {
    int flags = fcntl(fd, F_GETFL, 0);
    return fcntl(fd, F_SETFL, flags | O_NONBLOCK);
}

int main() {
    int server_fd = socket(AF_INET, SOCK_STREAM, 0);
    if (server_fd < 0) { perror("socket"); return 1; }

    int opt = 1;
    setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));
    set_nonblocking(server_fd);

    sockaddr_in addr{};
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = INADDR_ANY;
    addr.sin_port = htons(PORT);
    bind(server_fd, (struct sockaddr*)&addr, sizeof(addr));
    listen(server_fd, 128);

    std::cout << "Non-blocking server on port " << PORT << std::endl;

    while (true) {
        // Non-blocking accept â€” returns -1/EAGAIN if no client
        sockaddr_in client_addr{};
        socklen_t addrlen = sizeof(client_addr);
        int client_fd = accept(server_fd, (struct sockaddr*)&client_addr, &addrlen);
        if (client_fd >= 0) {
            set_nonblocking(client_fd);
            std::cout << "Accepted connection, fd=" << client_fd << std::endl;
        } else if (errno != EAGAIN && errno != EWOULDBLOCK) {
            perror("accept");
        }

        // Poll each client (simplified: only one)
        // In production use epoll/select instead of busy-waiting
        usleep(1000);  // Avoid busy-wait â€” 1ms sleep
    }
    close(server_fd);
    return 0;
}
```

### Python â€” Non-blocking Socket Example

```python
import socket, errno, select, sys

HOST, PORT = '0.0.0.0', 8080

fd = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
fd.setblocking(False)  # Non-blocking mode
fd.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
fd.bind((HOST, PORT))
fd.listen(128)

print(f"Non-blocking server on {HOST}:{PORT}")

clients = []
while True:
    try:
        conn, addr = fd.accept()  # Non-blocking accept
        conn.setblocking(False)
        clients.append(conn)
        print(f"[+] {addr}")
    except BlockingIOError:
        pass  # No pending connection

    # Non-blocking recv on all clients
    for c in clients[:]:
        try:
            data = c.recv(4096)
            if not data:
                c.close()
                clients.remove(c)
            else:
                c.sendall(data)
        except BlockingIOError:
            pass  # No data yet
        except ConnectionResetError:
            c.close()
            clients.remove(c)
```

### Dry Run â€” Blocking vs Non-blocking recv

#### Blocking recv Trace

| Time | Thread Action | Kernel Action |
|------|--------------|---------------|
| t=0 | `recv(fd, buf, 1024, 0)` | No data in recv buffer â†’ **block thread** |
| t=5 | (blocked) | Packet arrives; kernel copies to recv buffer |
| t=5 | (woken up) | Copies data to user buf; returns n=100 |
| t=5+Îµ | User processes data | â€” |

**Total wall time = 5s. Thread was parked for 5s.**

#### Non-blocking recv Trace

| Time | Thread Action | Kernel Action |
|------|--------------|---------------|
| t=0 | `recv(fd, buf, 1024, 0)` | No data â†’ returns -1, EAGAIN |
| t=0+1Âµs | Do other work | â€” |
| t=500ms | `recv(fd, buf, 1024, 0)` | Still no data â†’ returns -1, EAGAIN |
| t=1.0s | `recv(fd, buf, 1024, 0)` | Data arrived â†’ returns n=100 |
| t=1.001s | Process data | â€” |

**Wall time = 1.001s, but thread was productive for ~1s doing other work.**

### Complexity Analysis â€” Blocking vs Non-blocking

| Aspect | Blocking | Non-blocking |
|--------|----------|--------------|
| **CPU per request** | O(1) (just wakeup) | O(1) + syscall overhead (EAGAIN returns) |
| **Memory per connection** | O(1) (kernel stack) | O(1) (user space state) |
| **Threads needed** | O(n) for n connections | O(1) (event loop) |
| **Context switches** | 2 per I/O (block + wake) | 0 if no data ready |
| **Total throughput** | Higher per-thread, lower overall | Lower per-thread, higher overall |

**Why use non-blocking?** Blocking requires O(n) threads for n concurrent connections. Non-blocking + I/O multiplexing requires O(1) threads. At 10,000 connections, non-blocking is the only practical approach (C10K).

### Edge Cases â€” Blocking/Non-blocking

| Edge Case | Description | Handling |
|-----------|-------------|----------|
| **EAGAIN / EWOULDBLOCK** | Non-blocking operation can't complete | Retry later; never retry in a tight loop |
| **EINTR** | Signal interrupted a blocking call | Restart the system call |
| **Short writes** | Non-blocking send sends partial data | Loop until all data sent or EAGAIN |
| **Spurious wakeup** | select/poll returns but recv returns EAGAIN | Happens on some systems; loop to handle |
| **EINPROGRESS** | Non-blocking connect in progress | Use select/poll to wait for writability |
| **EISCONN** | Non-blocking connect already connected | Connect completed between check and call |

---

## 13.5 I/O Multiplexing: select, poll, epoll, kqueue

### Real-World Analogy: The MaÃ®tre d'

You're a maÃ®tre d' at a busy restaurant with 50 tables. Each table has a call button.

- **No multiplexing (blocking)**: You stand at one table until they finish. The other 49 tables starve.
- **Busy polling (non-blocking)**: You walk to each table every 2 seconds asking "Ready to order?" Waste of steps.
- **select()**: You stand in the middle and look at ALL 50 tables' call buttons at once. Your vision is limited to 50 buttons max.
- **poll()**: Same as select, but you can look at any number of tables. Still checking all 50 every time.
- **epoll()**: The tables have a centralized display board that lights up only the tables that need you. You glance at the board and go directly to those tables.
- **epoll (edge-triggered)**: The board shows a table once â€” when it first calls. After you serve it, the light goes out until the table calls again.

### 13.5.1 select()

#### Numbered Steps

1. Initialize `fd_set` with `FD_ZERO`.
2. Add descriptors to watch with `FD_SET`.
3. Set timeout (or NULL for infinite).
4. Call `select(maxfd+1, &readfds, &writefds, &exceptfds, &timeout)`.
5. Check return: -1 error, 0 timeout, >0 ready descriptors.
6. Iterate 0..maxfd; check `FD_ISSET(fd, &readfds)`.
7. Handle I/O on ready descriptors.

#### Limitations

- FD_SETSIZE hard limit (typically 1024).
- Bitmap is re-initialized every call (kernel writes, user reads).
- O(n) scanning: must check all descriptors every time.
- Modifies the fd_set in place (must re-add every call).

#### Pseudocode

```
function select_echo_server(port):
    server_fd = socket() â†’ bind() â†’ listen()
    clients = []
    while true:
        read_fds = {server_fd} âˆª clients
        nready = select(max_fd+1, &read_fds, NULL, NULL, NULL)
        if FD_ISSET(server_fd, read_fds):
            client_fd = accept(server_fd)
            clients.append(client_fd)
        for each client_fd in clients:
            if FD_ISSET(client_fd, read_fds):
                n = recv(client_fd, buf, SIZE, 0)
                if n <= 0: close(client_fd); remove from clients
                else: send(client_fd, buf, n, 0)
```

#### Dry Run â€” select() Event Loop

| Iteration | FD Set | select Returns | Ready FDs | Action |
|-----------|--------|---------------|-----------|--------|
| 1 | {3 (server)} | 1 | {3} | accept â†’ client fd=4 |
| 2 | {3, 4} | 2 | {3, 4} | accept â†’ fd=5, recv 4 â†’ echo |
| 3 | {3, 4, 5} | 1 | {4} | recv 4 â†’ echo "hello" |
| 4 | {3, 4, 5} | 1 | {5} | recv 5 returns 0 â†’ close 5 |
| 5 | {3, 4} | 1 | {4} | recv 4 returns 0 â†’ close 4 |
| 6 | {3} | 1 | {3} | accept â†’ fd=6 |

#### C++ â€” select-based Echo Server

```cpp
#include <iostream>
#include <cstring>
#include <vector>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>

constexpr int PORT = 8080;
constexpr int MAX_CLIENTS = 1020;

int make_server() {
    int fd = socket(AF_INET, SOCK_STREAM, 0);
    int opt = 1;
    setsockopt(fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));
    sockaddr_in addr{};
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = INADDR_ANY;
    addr.sin_port = htons(PORT);
    bind(fd, (struct sockaddr*)&addr, sizeof(addr));
    listen(fd, 128);
    return fd;
}

int main() {
    int server_fd = make_server();
    std::vector<int> clients;
    std::cout << "[select] Server on port " << PORT << std::endl;

    while (true) {
        fd_set read_fds;
        FD_ZERO(&read_fds);
        FD_SET(server_fd, &read_fds);
        int max_fd = server_fd;

        for (int fd : clients) {
            FD_SET(fd, &read_fds);
            if (fd > max_fd) max_fd = fd;
        }

        int nready = select(max_fd + 1, &read_fds, nullptr, nullptr, nullptr);
        if (nready < 0) {
            if (errno == EINTR) continue;
            perror("select");
            break;
        }

        // Handle new connections
        if (FD_ISSET(server_fd, &read_fds)) {
            sockaddr_in client_addr{};
            socklen_t addrlen = sizeof(client_addr);
            int client_fd = accept(server_fd, (struct sockaddr*)&client_addr, &addrlen);
            if (client_fd >= 0) {
                clients.push_back(client_fd);
                char ip[INET_ADDRSTRLEN];
                inet_ntop(AF_INET, &client_addr.sin_addr, ip, sizeof(ip));
                std::cout << "[+] " << ip << ":" << ntohs(client_addr.sin_port) << std::endl;
            }
            if (--nready <= 0) continue;
        }

        // Handle client data
        for (auto it = clients.begin(); it != clients.end(); ) {
            int fd = *it;
            if (FD_ISSET(fd, &read_fds)) {
                char buf[4096];
                ssize_t n = recv(fd, buf, sizeof(buf) - 1, 0);
                if (n <= 0) {
                    close(fd);
                    std::cout << "[-] fd=" << fd << " disconnected" << std::endl;
                    it = clients.erase(it);
                } else {
                    buf[n] = '\0';
                    send(fd, buf, n, 0);
                    ++it;
                }
                if (--nready <= 0) break;
            } else {
                ++it;
            }
        }
    }

    for (int fd : clients) close(fd);
    close(server_fd);
    return 0;
}
```

#### Python â€” select-based Chat Server

```python
import socket
import select
import sys

HOST, PORT = '0.0.0.0', 8080

def chat_server():
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server.bind((HOST, PORT))
    server.listen(128)
    server.setblocking(False)

    inputs = [server]    # Sockets to read from
    outputs = []         # Sockets to write to
    message_queues = {}  # fd -> queue of messages

    print(f"[select chat] Server on {HOST}:{PORT}")

    while inputs:
        readable, writable, exceptional = select.select(inputs, outputs, inputs, 0.5)

        for s in readable:
            if s is server:
                conn, addr = s.accept()
                conn.setblocking(False)
                inputs.append(conn)
                message_queues[conn] = []
                print(f"[+] {addr}")
            else:
                data = s.recv(4096)
                if data:
                    msg = f"[{s.getpeername()}] {data.decode(errors='replace')}"
                    print(msg, end='')
                    # Echo back to sender
                    message_queues[s].append(data)
                    if s not in outputs:
                        outputs.append(s)
                else:
                    if s in outputs:
                        outputs.remove(s)
                    inputs.remove(s)
                    s.close()
                    del message_queues[s]

        for s in writable:
            if message_queues.get(s):
                next_msg = message_queues[s].pop(0)
                try:
                    s.sendall(next_msg)
                except OSError:
                    pass
            if not message_queues.get(s):
                outputs.remove(s)

        for s in exceptional:
            print(f"[!] Exception on {s.getpeername()}")
            inputs.remove(s)
            if s in outputs:
                outputs.remove(s)
            s.close()
            del message_queues[s]


if __name__ == '__main__':
    chat_server()
```

### 13.5.2 poll()

#### Numbered Steps

1. Allocate array of `struct pollfd` for each descriptor.
2. Set `.fd`, `.events` (POLLIN, POLLOUT, etc.).
3. Call `poll(array, nfds, timeout_ms)`.
4. Check return: >0 ready, 0 timeout, -1 error.
5. Iterate array; check `.revents` for POLLIN / POLLOUT / POLLERR / POLLHUP.

#### Key Differences from select()

- No FD_SETSIZE limit â€” uses linked-list array.
- Events and revents are separate fields (no in-place modification).
- Better for sparse descriptor sets.
- Still O(n) scanning of the entire array.

#### Pseudocode

```
function poll_echo_server(port):
    server_fd = socket() â†’ bind() â†’ listen()
    fds = [{fd: server_fd, events: POLLIN}]
    while true:
        nready = poll(fds, nfds, -1)
        for each fds[i]:
            if fds[i].revents & POLLIN:
                if fds[i].fd == server_fd:
                    client_fd = accept(server_fd)
                    fds.append({fd: client_fd, events: POLLIN})
                else:
                    n = recv(fds[i].fd, buf, SIZE, 0)
                    if n <= 0: close(fd); remove from fds
                    else: send(fds[i].fd, buf, n, 0)
```

#### Dry Run â€” poll() Event Loop

| Iteration | pollfds array size | poll Returns | revents | Action |
|-----------|-------------------|-------------|---------|--------|
| 1 | 1 (server) | 1 | server: POLLIN | accept â†’ fd=4, add to array |
| 2 | 2 (server, fd=4) | 2 | both POLLIN | accept â†’ fd=5, recv 4 â†’ echo |
| 3 | 3 (server, 4, 5) | 1 | fd=5: POLLIN | recv 5 â†’ echo |
| 4 | 3 | 1 | fd=5: POLLHUP | close 5, remove from array |
| 5 | 2 (server, 4) | 1 | fd=4: POLLIN | recv 4 â†’ echo |

#### C++ â€” poll-based Echo Server

```cpp
#include <iostream>
#include <cstring>
#include <vector>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <poll.h>

constexpr int PORT = 8080;
constexpr int MAX_EVENTS = 4096;

int make_server() {
    int fd = socket(AF_INET, SOCK_STREAM, 0);
    int opt = 1;
    setsockopt(fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));
    sockaddr_in addr{};
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = INADDR_ANY;
    addr.sin_port = htons(PORT);
    bind(fd, (struct sockaddr*)&addr, sizeof(addr));
    listen(fd, 128);
    return fd;
}

int main() {
    int server_fd = make_server();
    std::vector<pollfd> fds;
    fds.push_back({server_fd, POLLIN, 0});
    std::cout << "[poll] Server on port " << PORT << std::endl;

    while (true) {
        int nready = poll(fds.data(), fds.size(), -1);
        if (nready < 0) {
            if (errno == EINTR) continue;
            perror("poll");
            break;
        }

        // Process ready descriptors â€” careful about iterating while modifying
        for (size_t i = 0; i < fds.size() && nready > 0; i++) {
            if (!(fds[i].revents & POLLIN)) continue;
            nready--;

            if (fds[i].fd == server_fd) {
                sockaddr_in client_addr{};
                socklen_t addrlen = sizeof(client_addr);
                int client_fd = accept(server_fd, (struct sockaddr*)&client_addr, &addrlen);
                if (client_fd >= 0) {
                    fds.push_back({client_fd, POLLIN, 0});
                    std::cout << "[+] New connection, fd=" << client_fd << std::endl;
                }
            } else {
                char buf[4096];
                ssize_t n = recv(fds[i].fd, buf, sizeof(buf) - 1, 0);
                if (n <= 0) {
                    close(fds[i].fd);
                    std::cout << "[-] fd=" << fds[i].fd << " disconnected" << std::endl;
                    fds.erase(fds.begin() + i);
                    i--;  // Adjust index after erase
                } else {
                    buf[n] = '\0';
                    send(fds[i].fd, buf, n, 0);
                }
            }
        }
    }

    for (auto& pfd : fds) close(pfd.fd);
    return 0;
}
```

### 13.5.3 epoll() (Linux)

#### Numbered Steps

1. `epoll_create1(0)` â€” Create epoll instance, returns epoll_fd.
2. `struct epoll_event ev` â€” Set `ev.events` (EPOLLIN, EPOLLOUT, EPOLLET, etc.) and `ev.data.fd` or `ev.data.ptr`.
3. `epoll_ctl(epoll_fd, EPOLL_CTL_ADD, target_fd, &ev)` â€” Register interest.
4. `epoll_wait(epoll_fd, events, maxevents, timeout)` â€” Wait for events.
5. Iterate returned events array (only ready descriptors).
6. Handle each: new connection â†’ `accept()` + `epoll_ctl(ADD)` to add client; data â†’ `recv()`.
7. For edge-triggered: loop on recv until EAGAIN.

#### Level-Triggered vs Edge-Triggered

| Mode | Behavior | Best For |
|------|----------|----------|
| **Level-Triggered** | Event fires as long as data exists | Simplicity; default; tolerant of partial reads |
| **Edge-Triggered** | Event fires once when state changes | Efficiency; must read until EAGAIN |

#### Pseudocode

```
function epoll_echo_server(port):
    server_fd = socket() â†’ bind() â†’ listen()
    epoll_fd = epoll_create1(0)
    ev = {events: EPOLLIN, data: {fd: server_fd}}
    epoll_ctl(epoll_fd, EPOLL_CTL_ADD, server_fd, &ev)

    while true:
        nready = epoll_wait(epoll_fd, events, MAX_EVENTS, -1)
        for i = 0..nready-1:
            if events[i].data.fd == server_fd:
                while (client_fd = accept(server_fd)) >= 0:
                    set_nonblocking(client_fd)
                    ev = {events: EPOLLIN | EPOLLET, data: {fd: client_fd}}
                    epoll_ctl(epoll_fd, EPOLL_CTL_ADD, client_fd, &ev)
            else:
                while (n = recv(events[i].data.fd, buf, SIZE, 0)) > 0:
                    send(events[i].data.fd, buf, n, 0)
                if n == -1 and errno != EAGAIN:
                    close(fd)
```

#### Dry Run â€” epoll Event Loop

| Step | epoll_wait Returns | Events | Action |
|------|-------------------|--------|--------|
| 1 | 1 | fd=3 (server) | accept â†’ fd=4, epoll_ctl ADD 4 (EPOLLIN\|EPOLLET) |
| 2 | 1 | fd=4 (client data) | recv "hello", echo back |
| 3 | 2 | fd=3 (new), fd=4 (more data) | accept â†’ fd=5, recv fd=4 "world", echo |
| 4 | 1 | fd=5 (data) | recv â†’ echo |
| 5 | 0 | (timeout after 5s) | Do maintenance tasks |
| 6 | 1 | fd=4 (POLLHUP) | close fd=4, epoll_ctl DEL |

#### C++ â€” epoll Echo Server (Edge-Triggered)

```cpp
#include <iostream>
#include <cstring>
#include <unistd.h>
#include <fcntl.h>
#include <sys/socket.h>
#include <sys/epoll.h>
#include <netinet/in.h>

constexpr int PORT = 8080;
constexpr int MAX_EVENTS = 4096;
constexpr int BUFFER_SIZE = 4096;

int set_nonblocking(int fd) {
    int flags = fcntl(fd, F_GETFL, 0);
    return fcntl(fd, F_SETFL, flags | O_NONBLOCK);
}

int main() {
    int server_fd = socket(AF_INET, SOCK_STREAM, 0);
    int opt = 1;
    setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));
    set_nonblocking(server_fd);

    sockaddr_in addr{};
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = INADDR_ANY;
    addr.sin_port = htons(PORT);
    bind(server_fd, (struct sockaddr*)&addr, sizeof(addr));
    listen(server_fd, 128);

    int epoll_fd = epoll_create1(0);
    if (epoll_fd < 0) { perror("epoll_create1"); return 1; }

    epoll_event ev{};
    ev.events = EPOLLIN;
    ev.data.fd = server_fd;
    epoll_ctl(epoll_fd, EPOLL_CTL_ADD, server_fd, &ev);

    epoll_event events[MAX_EVENTS];
    std::cout << "[epoll ET] Server on port " << PORT << std::endl;

    while (true) {
        int nready = epoll_wait(epoll_fd, events, MAX_EVENTS, -1);
        if (nready < 0) {
            if (errno == EINTR) continue;
            perror("epoll_wait");
            break;
        }

        for (int i = 0; i < nready; i++) {
            if (events[i].data.fd == server_fd) {
                // Accept all pending connections (ET: loop until EAGAIN)
                while (true) {
                    sockaddr_in client_addr{};
                    socklen_t addrlen = sizeof(client_addr);
                    int client_fd = accept(server_fd, (struct sockaddr*)&client_addr, &addrlen);
                    if (client_fd < 0) {
                        if (errno == EAGAIN || errno == EWOULDBLOCK) break;
                        perror("accept");
                        break;
                    }
                    set_nonblocking(client_fd);
                    epoll_event cev{};
                    cev.events = EPOLLIN | EPOLLET;  // Edge-triggered
                    cev.data.fd = client_fd;
                    epoll_ctl(epoll_fd, EPOLL_CTL_ADD, client_fd, &cev);
                    std::cout << "[+] Connection fd=" << client_fd << std::endl;
                }
            } else {
                int client_fd = events[i].data.fd;
                char buf[BUFFER_SIZE];
                bool closed = false;

                // ET: read until EAGAIN
                while (true) {
                    ssize_t n = recv(client_fd, buf, sizeof(buf) - 1, 0);
                    if (n > 0) {
                        buf[n] = '\0';
                        ssize_t sent = 0;
                        while (sent < n) {
                            ssize_t s = send(client_fd, buf + sent, n - sent, 0);
                            if (s < 0) {
                                if (errno == EAGAIN) {
                                    // Write buffer full â€” in production, buffer remaining
                                    break;
                                }
                                closed = true;
                                break;
                            }
                            sent += s;
                        }
                        if (closed) break;
                    } else if (n == 0) {
                        closed = true;
                        break;
                    } else {
                        if (errno == EAGAIN || errno == EWOULDBLOCK) break;
                        closed = true;
                        break;
                    }
                }

                if (closed) {
                    std::cout << "[-] fd=" << client_fd << " closed" << std::endl;
                    epoll_ctl(epoll_fd, EPOLL_CTL_DEL, client_fd, nullptr);
                    close(client_fd);
                }
            }
        }
    }

    close(epoll_fd);
    close(server_fd);
    return 0;
}
```

#### Python â€” epoll Echo Server

```python
import socket
import select
import errno

HOST, PORT = '0.0.0.0', 8080


def epoll_echo_server():
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server.bind((HOST, PORT))
    server.listen(128)
    server.setblocking(False)

    epoll = select.epoll()
    epoll.register(server.fileno(), select.EPOLLIN | select.EPOLLET)

    connections = {server.fileno(): server}  # fd -> socket object
    buffers = {}  # fd -> partial data buffer
    print(f"[epoll ET] Server on {HOST}:{PORT}")

    try:
        while True:
            events = epoll.poll(timeout=-1)
            for fd, event in events:
                if fd == server.fileno():
                    # Accept all pending connections (edge-triggered)
                    while True:
                        try:
                            conn, addr = server.accept()
                            conn.setblocking(False)
                            conn_fd = conn.fileno()
                            connections[conn_fd] = conn
                            buffers[conn_fd] = b""
                            epoll.register(conn_fd, select.EPOLLIN | select.EPOLLET)
                            print(f"[+] {addr}")
                        except socket.error as e:
                            if e.errno == errno.EAGAIN or e.errno == errno.EWOULDBLOCK:
                                break
                            raise
                else:
                    # Client socket has data
                    conn = connections.get(fd)
                    if not conn:
                        continue

                    try:
                        # Read all available data (ET: loop until EAGAIN)
                        while True:
                            data = conn.recv(4096)
                            if not data:
                                raise ConnectionResetError()
                            buffers[fd] += data
                    except (socket.error, ConnectionResetError, BrokenPipeError) as e:
                        is_eagain = isinstance(e, socket.error) and (
                            e.errno == errno.EAGAIN or e.errno == errno.EWOULDBLOCK
                        )
                        if is_eagain:
                            # All data read â€” echo it back
                            if buffers[fd]:
                                try:
                                    conn.sendall(buffers[fd])
                                except OSError:
                                    pass
                                buffers[fd] = b""
                        else:
                            # Connection closed
                            epoll.unregister(fd)
                            conn.close()
                            del connections[fd]
                            buffers.pop(fd, None)
    finally:
        epoll.close()
        server.close()


if __name__ == '__main__':
    epoll_echo_server()
```

### 13.5.4 kqueue (BSD/macOS)

kqueue is the BSD equivalent of epoll. It provides a unified event notification interface.

```c
#include <sys/types.h>
#include <sys/event.h>
#include <sys/time.h>

int kq = kqueue();

struct kevent change;
EV_SET(&change, fd, EVFILT_READ, EV_ADD, 0, 0, NULL);
kevent(kq, &change, 1, NULL, 0, NULL);

struct kevent event;
while (1) {
    int n = kevent(kq, NULL, 0, &event, 1, NULL);
    if (n > 0) {
        // event.ident = fd, event.filter = EVFILT_READ
        recv(event.ident, buf, sizeof(buf), 0);
    }
}
```

kqueue vs epoll differences:
- kqueue can monitor **process, signal, filesystem events, and timers** â€” not just sockets.
- kqueue uses a change list + event list architecture.
- kevent supports EV_ONESHOT (one-shot notification, similar to EPOLLONESHOT).
- macOS kqueue has limitations with certain file types (regular files).

### Complexity Analysis â€” I/O Multiplexing

| API | Registration | Event Wait | Per-Event Delivery | Why? |
|-----|-------------|------------|-------------------|------|
| **select()** | O(n) | O(n) | O(n) scanning | Kernel copies all fd_set bits; user scans all n |
| **poll()** | O(n) | O(n) | O(n) scanning | Kernel iterates pollfd array; user scans all n |
| **epoll** | O(1) add/remove | O(1) | O(k) where k = ready | Red-black tree for registration; callback wakes only ready |
| **kqueue** | O(1) add/remove | O(1) | O(k) | Hash table + event list; per-fd filter objects |

**Why epoll is O(1) for event wait:**
- Internally, epoll uses a **red-black tree** for registered descriptors and a **ready list** (doubly linked list) for triggered events.
- When data arrives, the network driver calls the socket's callback, which adds the socket to epoll's ready list and wakes the waiting thread.
- `epoll_wait()` simply copies the ready list â€” no scanning.

### select vs poll vs epoll vs kqueue â€” Comparison

| Property | select | poll | epoll | kqueue |
|----------|--------|------|-------|--------|
| **Standard** | POSIX | POSIX | Linux (2.5.44+) | BSD / macOS |
| **Max FDs** | FD_SETSIZE (1024) | Unlimited | Unlimited | Unlimited |
| **Event delivery** | Bitmask modified in-place | Separate events/revents | Separate registration vs wait | Change list vs event list |
| **Re-registration** | Must rebuild fd_set each call | Must repopulate array each call | Epoll_ctl add once | Must re-apply EV_ADD (one-shot mitigates) |
| **O(n) scan required?** | Yes (all FDs) | Yes (all FDs) | No (only ready) | No (only ready) |
| **Level/Edge** | Level only | Level only | Both (LT default, ET with EPOLLET) | EV_CLEAR for edge-like behavior |
| **Signal handling** | Can use signalfd | Separate signalfd | signalfd | EVFILT_SIGNAL |
| **Performance @ 10k** | Degrades severely | Degrades severely | Linear scaling | Linear scaling |
| **Kernel data structure** | Bitmap array | Linked list | RB-tree + ready list | Hash table + filter objects |

### A&D Table â€” I/O Multiplexing

| API | Advantage | Disadvantage |
|-----|-----------|-------------|
| **select** | Cross-platform, simple API | FD_SETSIZE limit, O(n) scan, bitmask destruction |
| **poll** | No hard limit, separate revents | O(n) scan, no edge-triggering |
| **epoll** | O(1) ready iteration, ET/LT, millions FDs | Linux-only, slightly more complex API |
| **kqueue** | O(1), monitors non-socket events (FS, signals) | BSD/macOS only, complex API |

### Edge Cases â€” I/O Multiplexing

| Edge Case | Description | Solution |
|-----------|-------------|----------|
| **select returns with 0 ready after FD_ISSET** | Spurious wakeup (Linux may return early) | Always re-check FD_ISSET results |
| **select EINTR** | Signal interrupted select | Loop: `while ((n = select(...)) < 0 && errno == EINTR)` |
| **poll POLLNVAL** | fd not open at poll time | Check fd validity before poll |
| **poll POLLHUP without POLLIN** | Peer closed, no more data | Close fd immediately |
| **epoll EPOLLET starvation** | Edge-triggered: miss event if don't read all | Loop recv until EAGAIN |
| **epoll EPOLLONESHOT** | One-shot: re-arm after handling | Use for multi-threaded event handling |
| **epoll race with close** | fd reused between close and epoll_ctl DEL | Use EPOLL_CTL_DEL before close |
| **epoll EPOLLRDHUP** | Peer closed (Linux 2.6.17+) | Detects shutdown without reading |

---

## 13.6 Unix Domain Sockets

### Overview

Unix domain sockets (AF_UNIX) allow IPC between processes on the **same host**. They use the **file system** as the address namespace instead of IP:port.

```text
Process A  â†â†’  [ /tmp/app.sock ]  â†â†’  Process B
          stream / datagram              |
                                    Same kernel â€” no network stack
```

### Types

| Type | Path | Behavior |
|------|------|----------|
| **Pathname** | `/tmp/mysock` | Bind to a file path; use `struct sockaddr_un` |
| **Abstract** | `@mysock` (Linux) | No filesystem entry; starts with null byte |

### Key Advantages Over TCP Loopback

1. **Faster**: No protocol stack (TCP/IP headers, checksums, routing).
2. **More secure**: Access controlled by file permissions.
3. **Lower overhead**: No 3-way handshake, no congestion control.

### C++ â€” Unix Domain Socket Echo Server

```cpp
#include <iostream>
#include <cstring>
#include <unistd.h>
#include <sys/socket.h>
#include <sys/un.h>

constexpr const char* SOCK_PATH = "/tmp/echo.sock";

int main() {
    unlink(SOCK_PATH);  // Remove any existing socket file

    int server_fd = socket(AF_UNIX, SOCK_STREAM, 0);
    if (server_fd < 0) { perror("socket"); return 1; }

    sockaddr_un addr{};
    addr.sun_family = AF_UNIX;
    strncpy(addr.sun_path, SOCK_PATH, sizeof(addr.sun_path) - 1);

    if (bind(server_fd, (struct sockaddr*)&addr, sizeof(addr)) < 0) {
        perror("bind");
        close(server_fd);
        return 1;
    }

    chmod(SOCK_PATH, 0666);  // Allow other users to connect
    listen(server_fd, 128);
    std::cout << "[Unix] Listening on " << SOCK_PATH << std::endl;

    char buf[4096];
    while (true) {
        sockaddr_un client_addr{};
        socklen_t addrlen = sizeof(client_addr);
        int client_fd = accept(server_fd, (struct sockaddr*)&client_addr, &addrlen);
        if (client_fd < 0) { perror("accept"); continue; }

        ssize_t n = recv(client_fd, buf, sizeof(buf) - 1, 0);
        if (n > 0) {
            buf[n] = '\0';
            std::cout << "Received: " << buf << std::endl;
            send(client_fd, buf, n, 0);
        }
        close(client_fd);
    }

    close(server_fd);
    unlink(SOCK_PATH);
    return 0;
}
```

### Python â€” Unix Domain Socket Client

```python
import socket
import os

SOCK_PATH = '/tmp/echo.sock'


def unix_client(message="Hello Unix!"):
    fd = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
    try:
        fd.connect(SOCK_PATH)
        fd.sendall(message.encode())
        data = fd.recv(4096)
        print(f"Received: {data.decode()}")
    except FileNotFoundError:
        print(f"[!] Socket {SOCK_PATH} not found. Is the server running?")
    except ConnectionRefusedError:
        print("[!] Connection refused")
    finally:
        fd.close()


if __name__ == '__main__':
    unix_client("Hello from Python over Unix socket!")
```

### Dry Run â€” Unix Domain Socket

| Step | Action | Kernel |
|------|--------|--------|
| 1 | `socket(AF_UNIX, SOCK_STREAM, 0)` | Creates socket inode (no NIC needed) |
| 2 | `bind("/tmp/echo.sock")` | Creates filesystem entry |
| 3 | `listen()` â†’ `accept()` | Blocks until peer connects |
| 4 | Client `connect("/tmp/echo.sock")` | Same kernel: no routing, no headers |
| 5 | Data transfer | Kernel memcpy between process buffers |
| 6 | `close()` | Removes socket inode |

**Latency benchmark**: Unix domain sockets typically complete in 5-15Âµs per round-trip vs 30-60Âµs for TCP loopback.

### Edge Cases â€” Unix Domain Sockets

| Edge Case | Cause | Solution |
|-----------|-------|----------|
| **Address already in use** | Stale socket file from crash | `unlink(SOCK_PATH)` before bind |
| **Permission denied** | File permissions restrict access | Use `chmod(SOCK_PATH, 0666)` |
| **ENOENT** | Socket file doesn't exist | Check path; create directory if needed |
| **EACCES on connect** | No write permission on socket | Fix directory/file permissions |
| **File system full** | No space for socket inode | Monitor disk space; use abstract sockets |

---

## 13.7 Raw Sockets

### Overview

Raw sockets allow direct access to the **IP layer**. Applications construct their own IP headers, transport headers, and payload. This bypasses the kernel's TCP/UDP protocol handlers.

```c
// Create raw socket for ICMP
int fd = socket(AF_INET, SOCK_RAW, IPPROTO_ICMP);

// Create raw socket for TCP (requires CAP_NET_RAW)
int fd = socket(AF_INET, SOCK_RAW, IPPROTO_TCP);

// Create raw socket for custom protocol
int fd = socket(AF_INET, SOCK_RAW, 255);  // Custom L4 protocol
```

### Numbered Steps â€” Raw Socket (Ping/ICMP)

1. Create raw socket with `IPPROTO_ICMP`.
2. Build ICMP echo request header (type=8, code=0, checksum, ID, sequence).
3. Calculate ICMP checksum.
4. `sendto()` to target IP.
5. `recvfrom()` and parse ICMP echo reply (type=0).
6. Calculate RTT from send/receive timestamps.

### Security Concerns

| Concern | Description |
|---------|-------------|
| **Root only** | Raw sockets require `CAP_NET_RAW` or root |
| **Spoofing** | Can forge source IP addresses |
| **Sniffing** | Raw sockets can capture all IP traffic on the system |
| **Resource abuse** | Can craft packets to amplify DDoS |

### C++ â€” Raw ICMP Ping (Simplified)

```cpp
#include <iostream>
#include <cstring>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/ip.h>
#include <netinet/ip_icmp.h>
#include <arpa/inet.h>
#include <chrono>

// Pseudo-header checksum
unsigned short checksum(unsigned short* buf, int len) {
    unsigned long sum = 0;
    for (; len > 1; len -= 2) sum += *buf++;
    if (len == 1) sum += *(unsigned char*)buf;
    sum = (sum >> 16) + (sum & 0xFFFF);
    sum += (sum >> 16);
    return (unsigned short)~sum;
}

int main(int argc, char* argv[]) {
    if (argc < 2) { std::cerr << "Usage: " << argv[0] << " <IP>\n"; return 1; }

    int fd = socket(AF_INET, SOCK_RAW, IPPROTO_ICMP);
    if (fd < 0) { perror("socket (need root)"); return 1; }

    sockaddr_in dest{};
    dest.sin_family = AF_INET;
    inet_pton(AF_INET, argv[1], &dest.sin_addr);

    // Build ICMP echo request
    struct icmphdr icmp{};
    icmp.type = ICMP_ECHO;
    icmp.code = 0;
    icmp.un.echo.id = getpid();
    icmp.un.echo.sequence = 1;
    icmp.checksum = checksum((unsigned short*)&icmp, sizeof(icmp));

    auto start = std::chrono::steady_clock::now();
    sendto(fd, &icmp, sizeof(icmp), 0, (struct sockaddr*)&dest, sizeof(dest));

    char buf[1024];
    sockaddr_in from{};
    socklen_t fromlen = sizeof(from);
    ssize_t n = recvfrom(fd, buf, sizeof(buf), 0, (struct sockaddr*)&from, &fromlen);
    auto end = std::chrono::steady_clock::now();

    if (n > 0) {
        auto rtt = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();
        char ip[INET_ADDRSTRLEN];
        inet_ntop(AF_INET, &from.sin_addr, ip, sizeof(ip));
        std::cout << "Reply from " << ip << " RTT=" << rtt << "ms" << std::endl;
    }

    close(fd);
    return 0;
}
```

### A&D Table â€” Raw Sockets

| Advantage | Disadvantage |
|-----------|-------------|
| Complete control over packets | Requires root / CAP_NET_RAW |
| Can implement custom protocols | No kernel assistance (checksums, retransmit) |
| Packet crafting for testing | Platform-dependent behavior |
| Access to ICMP, IGMP, all IP protocols | Easy to crash system with bad packets |

### Use Cases for Raw Sockets

- **ping** (ICMP echo request/reply)
- **traceroute** (ICMP TTL exceeded + UDP to high ports)
- **ARP spoofing detection**
- **Custom VPN/protocol implementations**
- **Network scanners** (nmap-style SYN scan)
- **Packet injection for security testing**

---

## 13.8 Socket Options

### Real-World Analogy

Socket options are like **settings on a home appliance**:

- **SO_REUSEADDR** = Setting your phone to immediately accept calls at the same number after hanging up.
- **SO_KEEPALIVE** = An automatic "Are you still there?" check for long silences.
- **TCP_NODELAY** = Sending text messages character-by-character vs. waiting for a full sentence.
- **SO_RCVBUF** = Size of your mailbox.

### setsockopt / getsockopt Signatures

```c
int setsockopt(int sockfd, int level, int optname,
               const void *optval, socklen_t optlen);

int getsockopt(int sockfd, int level, int optname,
               void *optval, socklen_t *optlen);
```

| Parameter | Description |
|-----------|-------------|
| `sockfd` | Socket file descriptor |
| `level` | Protocol level: `SOL_SOCKET`, `IPPROTO_TCP`, `IPPROTO_IP` |
| `optname` | Option identifier (see table below) |
| `optval` | Pointer to option value |
| `optlen` | Size of option value (in/out for getsockopt) |

### Complete Socket Options Table

| Option | Level | Default | Description | When to Use |
|--------|-------|---------|-------------|-------------|
| `SO_REUSEADDR` | SOL_SOCKET | Off | Allow reuse of local address even in TIME_WAIT | All TCP servers |
| `SO_REUSEPORT` | SOL_SOCKET | Off | Multiple processes can bind same port (Linux 3.9+) | Multi-worker servers (Nginx) |
| `SO_KEEPALIVE` | SOL_SOCKET | Off | Send keepalive probes when idle | Long-lived connections (SSH, DB) |
| `SO_LINGER` | SOL_SOCKET | Off (l_onoff=0) | Control close behavior with pending data | See details below |
| `SO_RCVBUF` | SOL_SOCKET | ~208KB (auto) | Size of receive buffer | High-throughput servers |
| `SO_SNDBUF` | SOL_SOCKET | ~208KB (auto) | Size of send buffer | High-throughput servers |
| `SO_RCVTIMEO` | SOL_SOCKET | Infinite | Timeout for recv operations | When you don't want blocking forever |
| `SO_SNDTIMEO` | SOL_SOCKET | Infinite | Timeout for send operations | Detect stuck connections |
| `TCP_NODELAY` | IPPROTO_TCP | Off (Nagle enabled) | Disable Nagle's algorithm | Interactive apps (SSH, HTTP API) |
| `TCP_QUICKACK` | IPPROTO_TCP | On (kernel managed) | Disable delayed ACK | Low-latency apps (Linux only) |
| `TCP_CORK` | IPPROTO_TCP | Off | Don't send partial frames; build full segment | Bulk transfer optimization |
| `TCP_DEFER_ACCEPT` | IPPROTO_TCP | Off | Don't wake accept until data arrives | Reduce context switches on accept |
| `TCP_KEEPIDLE` | IPPROTO_TCP | 7200s (2h) | Idle time before first keepalive probe | Adjust keepalive frequency |
| `TCP_KEEPINTVL` | IPPROTO_TCP | 75s | Interval between keepalive probes | Adjust keepalive frequency |
| `TCP_KEEPCNT` | IPPROTO_TCP | 9 | Max keepalive probes before declaring dead | Adjust keepalive frequency |
| `IP_TTL` | IPPROTO_IP | 64 | Time-to-live for outgoing packets | traceroute, multicast |
| `IP_MULTICAST_TTL` | IPPROTO_IP | 1 | TTL for multicast packets | Multicast apps |
| `SO_BROADCAST` | SOL_SOCKET | Off | Allow sending broadcast packets | UDP broadcast apps |
| `SO_PRIORITY` | SOL_SOCKET | 0 | Set socket priority for QoS | Traffic shaping |

### SO_LINGER Behavior

| l_onoff | l_linger | close() Behavior |
|---------|----------|-----------------|
| 0 | (ignored) | Default: close returns immediately, kernel tries to deliver pending data |
| Non-zero | 0 | **Hard abort**: RST sent, data discarded, no TIME_WAIT |
| Non-zero | >0 | **Graceful timeout**: close blocks up to `l_linger` seconds for data delivery, then RST |

```c
struct linger l;
l.l_onoff = 1;   // Enable linger
l.l_linger = 10; // Wait 10 seconds for pending data to be sent
setsockopt(fd, SOL_SOCKET, SO_LINGER, &l, sizeof(l));
```

### C++ â€” Socket Options Utility

```cpp
#include <iostream>
#include <cstring>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/tcp.h>

class SocketConfig {
public:
    static void set_reuseaddr(int fd, bool enable = true) {
        int opt = enable ? 1 : 0;
        setsockopt(fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));
    }

    static void set_reuseport(int fd, bool enable = true) {
        int opt = enable ? 1 : 0;
        setsockopt(fd, SOL_SOCKET, SO_REUSEPORT, &opt, sizeof(opt));
    }

    static void set_tcp_nodelay(int fd, bool enable = true) {
        int opt = enable ? 1 : 0;
        setsockopt(fd, IPPROTO_TCP, TCP_NODELAY, &opt, sizeof(opt));
    }

    static void set_keepalive(int fd, int idle_sec = 60,
                              int interval_sec = 10, int count = 5) {
        int opt = 1;
        setsockopt(fd, SOL_SOCKET, SO_KEEPALIVE, &opt, sizeof(opt));
        setsockopt(fd, IPPROTO_TCP, TCP_KEEPIDLE, &idle_sec, sizeof(idle_sec));
        setsockopt(fd, IPPROTO_TCP, TCP_KEEPINTVL, &interval_sec, sizeof(interval_sec));
        setsockopt(fd, IPPROTO_TCP, TCP_KEEPCNT, &count, sizeof(count));
    }

    static void set_recv_buffer(int fd, int size_bytes) {
        setsockopt(fd, SOL_SOCKET, SO_RCVBUF, &size_bytes, sizeof(size_bytes));
    }

    static bool get_tcp_info(int fd) {
        int rcvbuf = 0, sndbuf = 0;
        socklen_t len = sizeof(rcvbuf);
        getsockopt(fd, SOL_SOCKET, SO_RCVBUF, &rcvbuf, &len);
        getsockopt(fd, SOL_SOCKET, SO_SNDBUF, &sndbuf, &len);
        std::cout << "RCV: " << rcvbuf/2 << " bytes, SND: " << sndbuf/2 << " bytes" << std::endl;
        return true;
    }
};
```

### Edge Cases â€” Socket Options

| Edge Case | Description |
|-----------|-------------|
| **SO_REUSEADDR on client** | Usually not needed; may cause unexpected behavior |
| **SO_REUSEPORT security** | Multiple processes binding same port â€” ensure trust boundary |
| **TCP_NODELAY + small writes** | Can increase overhead (more packets sent) â€” use Nagle for bulk |
| **SO_RCVBUF doubling** | Kernel internally doubles the requested value (for overhead) |
| **SO_SNDBUF too large** | Wastes memory; no benefit beyond BDP (Bandwidth-Delay Product) |
| **KEEPALIVE not guaranteed** | Keepalive probes can be lost; it's a "dead connection" hint, not guarantee |
| **getsockopt on closed socket** | Returns EBADF |

---

## 13.9 Comparison Tables

### TCP vs UDP Sockets

| Property | TCP (SOCK_STREAM) | UDP (SOCK_DGRAM) |
|----------|------------------|------------------|
| **Connection** | Connection-oriented (handshake needed) | Connectionless (send and pray) |
| **Reliability** | Reliable: ACKs, retransmission, sequence numbers | Unreliable: no ACKs, no retransmission |
| **Ordering** | In-order delivery guaranteed | Out-of-order possible |
| **Data boundary** | Byte stream (no message boundaries) | Message-oriented (preserves datagram boundaries) |
| **Flow control** | Sliding window (prevents receiver overflow) | None (may overflow receiver) |
| **Congestion control** | AIMD, CUBIC, BBR (adapts to network) | None (will saturate link) |
| **Headers overhead** | 20 bytes (TCP) + 20 bytes (IP) = 40 bytes | 8 bytes (UDP) + 20 bytes (IP) = 28 bytes |
| **Handshake** | 3-way handshake (1 RTT before data) | None (0 RTT) |
| **State in kernel** | Significant: send/recv buffers, timers, seq numbers | Minimal: just the socket |
| **Max payload** | No limit (streamed) | 65507 bytes (65KB - UDP header - IP header) |
| **Broadcast/Multicast** | No | Yes |
| **Use cases** | HTTP, HTTPS, SSH, FTP, SMTP, WebSocket | DNS, DHCP, VoIP, Video streaming, Gaming, QUIC |
| **Socket API** | socket/bind/listen/accept/connect/recv/send | socket/bind/sendto/recvfrom |
| **Performance** | Lower throughput (congestion control overhead) | Higher throughput, lower latency |
| **Firewall behavior** | Easy to track state | Connectionless, harder to filter |

### Blocking vs Non-blocking Comparison

| Aspect | Blocking | Non-blocking |
|--------|----------|--------------|
| **Threads needed for N connections** | N threads | 1 thread (with multiplexing) |
| **CPU while waiting** | 0% (thread parked) | Near 0% (with multiplexing) or high (busy poll) |
| **Code complexity** | Simple, sequential | Complex, state-machine per connection |
| **Per-request latency** | Lower (immediate wakeup) | Slightly higher (system call + epoll overhead) |
| **read/write semantics** | Returns when complete | Returns partial; must check EAGAIN |
| **Memory overhead** | ~8MB per thread (stack) | ~1KB per connection (state struct) |
| **accept behavior** | Blocks until client arrives | Returns -1/EAGAIN if no client |
| **connect behavior** | Blocks until handshake done | Returns -1/EINPROGRESS; check with poll |
| **Suitable for** | Low concurrency (< 100), simple servers | High concurrency (10k+), event-driven servers |

### Stream vs Datagram vs Raw Sockets

| Property | SOCK_STREAM | SOCK_DGRAM | SOCK_RAW |
|----------|-------------|------------|----------|
| **Protocol** | TCP (typically) | UDP (typically) | ICMP, custom, or any IP protocol |
| **Data model** | Byte stream (no boundaries) | Messages (preserves boundaries) | Raw packets (application builds headers) |
| **Reliability** | Automatic (kernel) | None | None |
| **Header construction** | Kernel handles all headers | Kernel handles IP + UDP headers | Application builds everything |
| **Privileges** | None required | None required | Root / CAP_NET_RAW required |
| **Use cases** | HTTP, SSH, databases | DNS, media streaming | ping, traceroute, packet crafting |
| **Kernel assistance** | Full (routing, congestion, retransmit) | Partial (IP routing only) | Minimal (IP routing only) |
| **Performance** | Moderate | Fast | Depends on implementation |

### I/O Multiplexing Comparison

| Metric | select | poll | epoll | kqueue |
|--------|--------|------|-------|--------|
| **Platform** | POSIX (all) | POSIX (all) | Linux (2.5.44+) | BSD, macOS |
| **Complexity** | Simple | Simple | Moderate | Complex |
| **Max FDs** | 1024 (hard limit) | No limit (soft) | No limit | No limit |
| **Scan cost** | O(n) â€” check all FDs | O(n) â€” check all FDs | O(k) â€” only ready events | O(k) â€” only ready events |
| **Re-init cost** | High (rebuild bitmask) | Medium (rebuild array) | None (registered once) | None (registered once) |
| **Edge-triggered** | No | No | Yes (EPOLLET) | Yes (EV_CLEAR) |
| **Non-socket events** | No | No | signalfd, eventfd, timerfd | Files, signals, processes, timers |
| **Thread safety** | Poor | Poor | Good (wakeup via EFD) | Good |

---

## 13.10 Interview Corner

### Q1: epoll vs select â€” what's the fundamental difference?

**Answer**: select uses O(n) bitmap scanning â€” every call iterates all n file descriptors to find which are ready. epoll uses O(1) event notification â€” descriptors are registered once, and when events occur, they're added to an internal ready list. epoll_wait copies only k ready events (k << n).

```
select:  register + wait + scan(n)   â†’ O(n) per iteration
epoll:   register once                â†’ O(1) per iteration
         wait + copy(k)               â†’ O(k) per iteration

At n=10,000:
  select scans 10,000 bits â†’ 10,000 checks
  epoll checks 10 ready events â†’ 10 checks

Speedup: ~1000x
```

### Q2: What is the C10K problem?

**Answer**: The C10K problem (10,000 concurrent clients) was identified by Dan Kegel in 1999. The issue is that traditional thread-per-connection or process-per-connection servers can't handle 10,000 clients because:

- Each thread consumes ~8MB of stack â†’ 10,000 threads = 80GB RAM.
- Context switching 10,000 threads causes massive overhead.
- select() is limited to 1024 FDs.

**Solution**: Event-driven architecture with epoll/kqueue + non-blocking I/O + small state per connection (~1KB). Modern servers (Nginx, HAProxy, Redis) handle 100k-1M concurrent connections.

```
Thread-per-connection:  10,000 clients Ã— 8MB stack = 80GB  âœ—
Event-driven epoll:     10,000 clients Ã— 1KB state = 10MB  âœ“
```

### Q3: TIME_WAIT and SO_REUSEADDR

**Why does TIME_WAIT exist?**

TIME_WAIT (2 * MSL â‰ˆ 60 seconds) prevents two problems:
1. **Delayed segments**: A packet from a closed connection arriving at a new connection with the same IP:port.
2. **Reliable FIN**: The final ACK might be lost; the server retransmits FIN, and TIME_WAIT ensures the client can ACK again.

**Why SO_REUSEADDR?**

Without SO_REUSEADDR, if a server crashes and restarts within TIME_WAIT, bind() fails with EADDRINUSE. SO_REUSEADDR allows the new process to bind the same port immediately.

```c
int opt = 1;
setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));
// Now bind() succeeds even if previous instance is in TIME_WAIT
bind(server_fd, ...);  // Won't fail with EADDRINUSE
```

**Caution**: SO_REUSEADDR on a **client** socket can cause unexpected behavior â€” multiple clients may bind the same ephemeral port.

### Q4: What is Nagle's algorithm?

**Answer**: Nagle's algorithm (RFC 896, 1984) delays small TCP writes to coalesce them into larger segments. It holds data until:

- The outstanding ACK arrives, OR
- The buffer accumulates MSS (Maximum Segment Size) bytes of data.

```
Without Nagle (TCP_NODELAY = 1):
  send("H") â†’ send("e") â†’ send("l") â†’ send("l") â†’ send("o")
  5 packets, 5 headers, huge overhead

With Nagle (default):
  send("H") â†’ [wait for ACK] â†’ send("ello")
  2 packets, much more efficient
```

**When to disable Nagle**:
- Interactive applications (SSH, telnet, online games)
- HTTP API servers with small request bodies
- Real-time applications (VoIP, videoconferencing)

**When to keep Nagle**:
- Bulk file transfers
- Streaming large responses
- Any application where latency isn't critical

### Q5: What happens when you write to a closed connection?

**Answer**: Two scenarios:

1. **Server closed gracefully**: TCP FIN received. First write succeeds (data buffered), second write causes SIGPIPE (or EPIPE if SIGPIPE is ignored).

2. **Server crashed (no FIN)**: Write succeeds until the send buffer fills up. Eventually TCP retransmissions fail, RST is sent, and subsequent reads/writes get ECONNRESET.

```c
signal(SIGPIPE, SIG_IGN);  // Prevent SIGPIPE from killing the process
// Now send() returns -1 with errno = EPIPE
```

### Q6: What is the difference between EAGAIN and EWOULDBLOCK?

**Answer**: On most modern systems, they are the same value (11 on Linux). The POSIX standard allows them to be distinct, but in practice they are identical. Always check for both:

```c
if (errno == EAGAIN || errno == EWOULDBLOCK) {
    // Would block; try again later
}
```

### Q7: How does the kernel implement epoll internally?

**Answer**: epoll uses two key data structures:

1. **Red-Black Tree** â€” Stores all registered file descriptors (for O(log n) add/remove/modify).
2. **Ready List** (doubly linked list) â€” Contains only descriptors with pending events.

```
epoll_ctl(ADD, fd) â†’ Insert into RB-tree
Data arrives on fd â†’ Callback: add fd to ready list, wake epoll_wait
epoll_wait()       â†’ Copy ready list to user space, return count
```

The callback mechanism makes it O(1): only descriptors with events are examined.

---

## 13.11 Applications in Real Systems

### Nginx (epoll, kqueue, event ports)

Nginx is the premier example of event-driven architecture:

- Uses **epoll** on Linux, **kqueue** on BSD/macOS, **event ports** on Solaris.
- Each worker process runs a **single-threaded event loop** handling thousands of connections.
- No threads per connection â€” state machines for each HTTP request.
- Achieves **500k+ concurrent connections** on a single server.

```
Nginx Architecture:
                    Master Process (config, signals)
                     /    |     |     \
              Worker1  Worker2  ...  WorkerN
                |         |              |
             epoll     epoll          epoll
             (10k)     (10k)          (10k)
```

### Node.js (libuv)

Node.js uses **libuv**, a cross-platform async I/O library:

- **Linux**: epoll (level-triggered)
- **macOS**: kqueue
- **Windows**: IOCP (I/O Completion Ports)
- All JavaScript runs on a **single thread** with an event loop.
- I/O operations are delegated to the **thread pool** (4 threads by default) or the kernel.

```
Node.js Event Loop:
                   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                   â”‚   timers        â”‚ â† setTimeout, setInterval
                   â”‚   pending cb    â”‚ â† I/O callbacks
                   â”‚   idle/prepare  â”‚ â† internal
            â”€â”€â”€â”€â”€â”€ â”‚   poll          â”‚ â† epoll_wait / kqueue / IOCP
           â”‚       â”‚   check         â”‚ â† setImmediate
           â”‚       â”‚   close cb      â”‚ â† close events
           â”‚       â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
           â”‚               â”‚
           â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ (loop forever)
```

### HAProxy (epoll, kqueue, splice)

HAProxy is a high-performance TCP/HTTP proxy:

- Uses **epoll** with edge-triggered mode for maximum performance.
- Supports **splice()** for zero-copy data forwarding (avoids user-space copy).
- Connection pooling reduces overhead.
- Can handle **100k-1M concurrent connections** on commodity hardware.

```
HAProxy Data Path:
Client â†’ epoll_wait â†’ recv(client) â†’ splice â†’ send(server)
Server â†’ epoll_wait â†’ recv(server) â†’ splice â†’ send(client)

Zero-copy: data never touches user space on the proxy.
```

### Redis (epoll/kqueue + single-threaded event loop)

Redis uses a **single-threaded event loop** with epoll/kqueue:

- All commands execute on one thread â€” no locking overhead.
- Non-blocking I/O for all network operations.
- Event loop handles thousands of client connections.
- 100k+ QPS on a single core.

```
Redis Event Loop:
while (1) {
    aeApiPoll(tvlp);        // epoll_wait â€” collect ready events
    processFileEvents();     // Read/write client data
    processTimeEvents();     // Timers: expire keys, BLPOP timeout
}
```

### Apache vs Nginx â€” Architecture Comparison

| Aspect | Apache (prefork) | Apache (worker) | Nginx |
|--------|-----------------|-----------------|-------|
| **Model** | Process-per-connection | Thread-per-connection | Event-driven |
| **I/O** | Blocking | Blocking | Non-blocking + epoll |
| **Memory per conn** | ~8MB (process) | ~1MB (thread) | ~1KB (state) |
| **Max concurrent** | ~200 | ~5,000 | 500,000+ |
| **Modules** | Loaded per process | Loaded per thread | Loaded per worker |
| **Keep-alive** | One process held | One thread held | One state (~1KB) held |

### libevent / libev / libuv â€” Library Comparison

| Library | Platform | Mechanism | Used By |
|---------|----------|-----------|---------|
| **libevent** | Cross-platform | select/poll/epoll/kqueue/IOCP | Memcached, Tor, tmux |
| **libev** | Cross-platform | select/poll/epoll/kqueue/port | GNU gettext, some embedded |
| **libuv** | Cross-platform | epoll/kqueue/IOCP | Node.js, Julia, Luvit |

---

## Pro Tips

- **Always ignore SIGPIPE**: `signal(SIGPIPE, SIG_IGN);` Prevents your server from dying when writing to a closed socket.
- **Use SO_REUSEADDR on all TCP servers**: Allows immediate restart without waiting for TIME_WAIT.
- **Epoll edge-triggered + non-blocking = power**: But you MUST loop on recv/send until EAGAIN. Otherwise you miss data and deadlock.
- **Nagle kills interactive latency**: Set TCP_NODELAY for HTTP APIs, SSH, games. Keep it for bulk transfers.
- **Buffer management matters**: For high-throughput, pre-allocate buffers per connection to avoid malloc overhead in the hot path.
- **Partial reads are the rule, not the exception**: Always loop on recv/send.
- **Use SOCK_NONBLOCK at creation**: `socket(AF_INET, SOCK_STREAM | SOCK_NONBLOCK | SOCK_CLOEXEC, 0)` to avoid races.
- **Don't use select() in new code**: It's limited, slow, and obsolete. Use epoll or poll (but poll also scans O(n)).
- **Unix domain sockets for local IPC**: 3-10x faster than TCP loopback.
- **epoll_wait can be woken with eventfd**: Use `eventfd()` to inject work into the event loop from other threads.

---

## Quick Reference: Socket State Machine

```
TCP Server:
CLOSED â†’ socket() â†’ bind() â†’ listen() â†’ LISTEN â†’ accept() â†’ ESTABLISHED
                                                              â†“
                                                        recv/send loop
                                                              â†“
                                                        close() â†’ TIME_WAIT â†’ CLOSED

TCP Client:
CLOSED â†’ socket() â†’ connect() â†’ SYN_SENT â†’ ESTABLISHED â†’ recv/send loop â†’ FIN_WAIT
                                                                           â†“
                                                                     TIME_WAIT â†’ CLOSED
```

---

## Chapter Quiz

1. **Which is NOT a valid socket type?**
   - a) SOCK_STREAM
   - b) SOCK_DGRAM
   - c) SOCK_RAW
   - d) SOCK_BUFFER  âœ“

2. **What does epoll_wait return when there are no events and timeout is -1?**
   - a) 0 immediately
   - b) -1 with EAGAIN
   - c) Blocks until at least one event  âœ“
   - d) Returns -1 with ETIMEDOUT

3. **Which socket option allows immediate port reuse after a crash?**
   - a) SO_KEEPALIVE
   - b) SO_REUSEADDR  âœ“
   - c) TCP_NODELAY
   - d) SO_LINGER

4. **What error indicates a non-blocking socket would block?**
   - a) EINTR
   - b) EAGAIN / EWOULDBLOCK  âœ“
   - c) EPIPE
   - d) ECONNRESET

5. **Which I/O multiplexing API is NOT O(n) scanning?**
   - a) select()
   - b) poll()
   - c) epoll()  âœ“
   - d) All are O(n)

6. **What is the maximum payload for a single UDP datagram?**
   - a) 1024 bytes
   - b) 65535 bytes
   - c) 65507 bytes  âœ“
   - d) Unlimited

7. **What does SO_KEEPALIVE do?**
   - a) Prevents socket from being closed
   - b) Sends periodic probe packets to check peer liveness  âœ“
   - c) Keeps the socket alive after process exit
   - d) Retains the socket in the kernel forever

8. **In epoll edge-triggered mode, when must you stop reading?**
   - a) When recv returns 0
   - b) When recv returns -1 with EAGAIN  âœ“
   - c) When the response is complete
   - d) After reading exactly 1024 bytes

9. **Why does select() scale poorly beyond 1024 connections?**
   - a) The kernel runs out of memory
   - b) FD_SETSIZE hard limit; O(n) bitmap scanning  âœ“
   - c) Network stack can't handle more
   - d) The CPU overheats

10. **Which real system uses libuv for its event loop?**
    - a) Nginx
    - b) Apache
    - c) Node.js  âœ“
    - d) HAProxy

**Answers:** 1-d, 2-c, 3-b, 4-b, 5-c, 6-c, 7-b, 8-b, 9-b, 10-c

---

## Summary

Socket programming provides the interface between applications and the transport layer. TCP sockets (SOCK_STREAM) offer reliable, connection-oriented byte streams following the socket â†’ bind â†’ listen â†’ accept (server) and socket â†’ connect (client) pattern. UDP sockets (SOCK_DGRAM) provide connectionless datagram communication using sendto/recvfrom.

For concurrent servers, I/O multiplexing with select, poll, or epoll enables a single thread to manage thousands of connections. epoll (Linux) and kqueue (BSD) scale to millions of connections with O(1) event notification â€” essential for solving the C10K problem.

Socket options like SO_REUSEADDR, TCP_NODELAY, and SO_KEEPALIVE tune behavior for specific workloads. Raw sockets give complete control over packet construction (ICMP ping, packet crafting). Unix domain sockets provide fast local IPC.

Real-world systems like Nginx, Node.js (libuv), HAProxy, and Redis all use event-driven architectures with epoll/kqueue to achieve massive concurrency on modest hardware.

---

## Exercises

### Review Questions

1. Draw the complete TCP socket lifecycle state diagram for both server and client.
2. What is the difference between edge-triggered and level-triggered epoll? Give a real scenario where each is preferable.
3. Why does UDP have lower latency than TCP? List three specific protocol differences.
4. What is the C10K problem and how did epoll help solve it?
5. Explain TIME_WAIT: why it exists, its duration, and how SO_REUSEADDR works around it.

### Application Problems

6. Implement a **select-based TCP chat room** in Python. A message sent by any client should be broadcast to all other connected clients. Handle client disconnection gracefully.

7. Write a **C++ program** that measures and compares the throughput of TCP vs Unix domain sockets. Create a simple echo server for each, send 100MB of data in 1KB chunks, and report the total time.

8. Implement an **epoll-based TCP echo server** in C++ with the following features:
   - Edge-triggered mode
   - Non-blocking sockets
   - Per-connection read buffer (handle partial reads across epoll iterations)
   - Graceful shutdown on SIGINT
   - Logging of each connection's total bytes processed

### Challenge Problem

9. **Build a minimal HTTP reverse proxy in C++ using epoll.** 

Requirements:
- Listen on port 8080, forward requests to a backend (e.g., localhost:9000).
- Handle at least 10,000 concurrent connections.
- Support both HTTP/1.0 and HTTP/1.1 (including keep-alive).
- Use edge-triggered epoll for both client and backend sockets.
- Maintain read/write buffers per connection pair.
- Handle partial reads and writes correctly: if send() returns EAGAIN, buffer remaining data and register for EPOLLOUT.
- Log request method, path, and response status code.
- Graceful shutdown: drain pending writes before closing.

**Hints:**
- Use `struct buffered_connection { int client_fd; int backend_fd; std::string rbuf; std::string wbuf; bool headers_done; };`
- Track which direction has pending data.
- For EPOLLOUT: only add the event when there's data to write; remove it when buffer empties.
- Consider using `sendfile()` or `splice()` for zero-copy file serving (bonus feature).

