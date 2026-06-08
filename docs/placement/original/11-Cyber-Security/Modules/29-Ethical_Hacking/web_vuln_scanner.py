#!/usr/bin/env python3
"""
Custom Web Vulnerability Scanner
Checks for common web vulnerabilities
"""

import requests
import sys
import urllib3
import argparse
from urllib.parse import urljoin, urlparse, parse_qs, urlencode
from bs4 import BeautifulSoup
import re
import time

# Disable SSL warnings
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

class WebVulnScanner:
    def __init__(self, url, timeout=10, user_agent=None):
        self.url = url.rstrip('/')
        self.timeout = timeout
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': user_agent or 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        # Don't verify SSL by default for testing
        self.session.verify = False
        self.vulnerabilities = []

    def log_vulnerability(self, vuln_type, severity, description, url, payload=None, evidence=None):
        """Log a found vulnerability"""
        vuln = {
            'type': vuln_type,
            'severity': severity,
            'description': description,
            'url': url,
            'payload': payload,
            'evidence': evidence,
            'timestamp': time.time()
        }
        self.vulnerabilities.append(vuln)
        print(f"[!] {severity.upper()}: {description}")
        if payload:
            print(f"    Payload: {payload}")

    def check_sql_injection(self):
        """Check for SQL injection vulnerabilities"""
        print("[+] Checking for SQL injection...")

        # Common SQL injection payloads
        payloads = [
            "' OR '1'='1",
            "' OR '1'='1' --",
            "1' OR '1'='1",
            "admin' --",
            "1; DROP TABLE users--",
            "' UNION SELECT 1,2,3--",
            "1' UNION SELECT username,password FROM users--"
        ]

        # Common injection points
        injection_points = [
            {'param': 'id', 'value': '1'},
            {'param': 'user', 'value': 'admin'},
            {'param': 'search', 'value': 'test'},
            {'param': 'query', 'value': 'test'},
            {'param': 'page', 'value': '1'}
        ]

        sql_errors = [
            'sql syntax', 'mysql_fetch', 'mysql_error', 'syntax error',
            'oracle error', 'sqlite', 'postgresql', 'sql server',
            'you have an error in your sql syntax'
        ]

        for point in injection_points:
            base_url = f"{self.url}?{point['param']}={point['value']}"

            for payload in payloads:
                test_url = f"{self.url}?{point['param']}={payload}"

                try:
                    response = self.session.get(test_url, timeout=self.timeout)

                    response_text = response.text.lower()
                    for error in sql_errors:
                        if error in response_text:
                            self.log_vulnerability(
                                'SQL Injection',
                                'High',
                                f'SQL injection vulnerability found in parameter: {point["param"]}',
                                test_url,
                                payload,
                                f'SQL error detected: {error}'
                            )
                            break

                except requests.exceptions.RequestException as e:
                    continue

    def check_xss(self):
        """Check for XSS vulnerabilities"""
        print("[+] Checking for Cross-Site Scripting (XSS)...")

        payloads = [
            "<script>alert('XSS')</script>",
            "<img src=x onerror=alert('XSS')>",
            "<svg onload=alert('XSS')>",
            "javascript:alert('XSS')",
            "<iframe src=javascript:alert('XSS')>",
            "<body onload=alert('XSS')>",
            "'><script>alert('XSS')</script>",
            "\"><script>alert('XSS')</script>"
        ]

        injection_points = [
            {'param': 'search', 'value': 'test'},
            {'param': 'query', 'value': 'test'},
            {'param': 'q', 'value': 'test'},
            {'param': 'input', 'value': 'test'},
            {'param': 'comment', 'value': 'test'}
        ]

        for point in injection_points:
            base_url = f"{self.url}?{point['param']}={point['value']}"

            for payload in payloads:
                test_url = f"{self.url}?{point['param']}={payload}"

                try:
                    response = self.session.get(test_url, timeout=self.timeout)

                    # Check if payload is reflected in response
                    if payload in response.text:
                        self.log_vulnerability(
                            'Cross-Site Scripting (XSS)',
                            'High',
                            f'XSS vulnerability found in parameter: {point["param"]}',
                            test_url,
                            payload,
                            'Payload reflected in response'
                        )
                        break

                except requests.exceptions.RequestException as e:
                    continue

    def check_open_redirect(self):
        """Check for open redirect vulnerabilities"""
        print("[+] Checking for open redirect...")

        payloads = [
            "http://evil.com",
            "//evil.com",
            "https://evil.com",
            "http://127.0.0.1",
            "//127.0.0.1"
        ]

        redirect_params = [
            'redirect', 'url', 'return', 'next', 'continue', 'dest', 'destination',
            'redir', 'redirect_uri', 'redirect_url', 'return_url', 'returnTo'
        ]

        for param in redirect_params:
            for payload in payloads:
                test_url = f"{self.url}?{param}={payload}"

                try:
                    response = self.session.get(test_url, allow_redirects=False, timeout=self.timeout)

                    if response.status_code in [301, 302, 303, 307, 308]:
                        location = response.headers.get('Location', '')
                        if any(evil in location for evil in ['evil.com', '127.0.0.1']):
                            self.log_vulnerability(
                                'Open Redirect',
                                'Medium',
                                f'Open redirect vulnerability in parameter: {param}',
                                test_url,
                                payload,
                                f'Redirects to: {location}'
                            )
                            break

                except requests.exceptions.RequestException as e:
                    continue

    def check_directory_traversal(self):
        """Check for directory traversal vulnerabilities"""
        print("[+] Checking for directory traversal...")

        payloads = [
            "../../../etc/passwd",
            "..\\..\\..\\windows\\system32\\config\\sam",
            "....//....//....//etc/passwd",
            "../../../etc/shadow",
            "../../../etc/hosts",
            "../../../etc/apache2/apache2.conf"
        ]

        traversal_params = [
            'file', 'path', 'folder', 'directory', 'dir', 'include', 'require', 'load'
        ]

        indicators = [
            'root:', 'daemon:', 'bin:', 'sys:', 'sync:', 'games:', 'man:',
            '[boot loader]', 'signature=', 'default', 'multi(', 'timeout'
        ]

        for param in traversal_params:
            for payload in payloads:
                test_url = f"{self.url}?{param}={payload}"

                try:
                    response = self.session.get(test_url, timeout=self.timeout)

                    response_text = response.text.lower()
                    for indicator in indicators:
                        if indicator in response_text:
                            self.log_vulnerability(
                                'Directory Traversal',
                                'High',
                                f'Directory traversal vulnerability in parameter: {param}',
                                test_url,
                                payload,
                                f'System file content detected: {indicator}'
                            )
                            break

                except requests.exceptions.RequestException as e:
                    continue

    def check_command_injection(self):
        """Check for command injection vulnerabilities"""
        print("[+] Checking for command injection...")

        payloads = [
            "; ls -la",
            "| ls -la",
            "`ls -la`",
            "$(ls -la)",
            "; whoami",
            "| whoami",
            "; id",
            "| id"
        ]

        injection_params = [
            'cmd', 'command', 'exec', 'execute', 'run', 'system', 'shell'
        ]

        indicators = [
            'total', 'drwxr', 'root root', 'uid=', 'gid=', 'groups='
        ]

        for param in injection_params:
            for payload in payloads:
                test_url = f"{self.url}?{param}=echo+test{payload}"

                try:
                    response = self.session.get(test_url, timeout=self.timeout)

                    response_text = response.text.lower()
                    for indicator in indicators:
                        if indicator in response_text:
                            self.log_vulnerability(
                                'Command Injection',
                                'Critical',
                                f'Command injection vulnerability in parameter: {param}',
                                test_url,
                                payload,
                                f'Command execution detected: {indicator}'
                            )
                            break

                except requests.exceptions.RequestException as e:
                    continue

    def check_ssl_tls(self):
        """Check SSL/TLS configuration"""
        print("[+] Checking SSL/TLS configuration...")

        try:
            import ssl
            import socket

            hostname = urlparse(self.url).hostname
            if not hostname:
                return

            context = ssl.create_default_context()
            with socket.create_connection((hostname, 443)) as sock:
                with context.wrap_socket(sock, server_hostname=hostname) as ssock:
                    cert = ssock.getpeercert()

                    # Check certificate validity
                    import datetime
                    not_after = datetime.datetime.strptime(cert['notAfter'], '%b %d %H:%M:%S %Y %Z')
                    if not_after < datetime.datetime.now():
                        self.log_vulnerability(
                            'SSL/TLS',
                            'High',
                            'SSL certificate has expired',
                            f"https://{hostname}",
                            None,
                            f'Certificate expired: {not_after}'
                        )

                    # Check for weak cipher suites (basic check)
                    cipher = ssock.cipher()
                    if 'RC4' in cipher[0] or 'DES' in cipher[0] or '3DES' in cipher[0]:
                        self.log_vulnerability(
                            'SSL/TLS',
                            'Medium',
                            'Weak cipher suite detected',
                            f"https://{hostname}",
                            None,
                            f'Cipher: {cipher[0]}'
                        )

        except Exception as e:
            # SSL check failed - might not support HTTPS
            pass

    def check_security_headers(self):
        """Check for security headers"""
        print("[+] Checking security headers...")

        try:
            response = self.session.get(self.url, timeout=self.timeout)

            security_headers = {
                'X-Frame-Options': 'Missing X-Frame-Options header (Clickjacking protection)',
                'X-Content-Type-Options': 'Missing X-Content-Type-Options header (MIME sniffing protection)',
                'X-XSS-Protection': 'Missing X-XSS-Protection header (XSS protection)',
                'Strict-Transport-Security': 'Missing Strict-Transport-Security header (HTTPS enforcement)',
                'Content-Security-Policy': 'Missing Content-Security-Policy header (XSS protection)',
                'Referrer-Policy': 'Missing Referrer-Policy header (Referrer control)'
            }

            for header, description in security_headers.items():
                if header not in response.headers:
                    self.log_vulnerability(
                        'Security Headers',
                        'Low',
                        description,
                        self.url,
                        None,
                        f'Missing header: {header}'
                    )

        except requests.exceptions.RequestException as e:
            pass

    def crawl_website(self, max_pages=10):
        """Basic website crawler to find more pages to test"""
        print("[+] Crawling website for additional pages...")

        visited = set()
        to_visit = [self.url]
        discovered_urls = []

        while to_visit and len(discovered_urls) < max_pages:
            current_url = to_visit.pop(0)

            if current_url in visited:
                continue

            visited.add(current_url)

            try:
                response = self.session.get(current_url, timeout=self.timeout)
                if response.status_code == 200:
                    soup = BeautifulSoup(response.text, 'html.parser')

                    # Find all links
                    for link in soup.find_all('a', href=True):
                        href = link['href']
                        absolute_url = urljoin(current_url, href)

                        # Only include same domain
                        if urlparse(absolute_url).netloc == urlparse(self.url).netloc:
                            if absolute_url not in visited and absolute_url not in to_visit:
                                to_visit.append(absolute_url)
                                discovered_urls.append(absolute_url)

            except requests.exceptions.RequestException as e:
                continue

        return discovered_urls[:max_pages]

    def scan(self, comprehensive=True):
        """Run complete vulnerability scan"""
        print(f"[+] Starting web vulnerability scan on {self.url}")
        print("=" * 60)

        # Basic checks
        self.check_security_headers()
        self.check_ssl_tls()

        # Vulnerability checks
        self.check_sql_injection()
        self.check_xss()
        self.check_open_redirect()
        self.check_directory_traversal()
        self.check_command_injection()

        if comprehensive:
            # Crawl and test additional pages
            additional_pages = self.crawl_website()
            print(f"[+] Found {len(additional_pages)} additional pages to test")

            for page in additional_pages[:5]:  # Test first 5 pages
                print(f"[+] Testing additional page: {page}")
                page_scanner = WebVulnScanner(page, self.timeout, self.session.headers['User-Agent'])
                page_scanner.scan(comprehensive=False)

        print("\n" + "=" * 60)
        print("SCAN COMPLETE")
        print(f"Total vulnerabilities found: {len(self.vulnerabilities)}")

        # Summary by severity
        severity_count = {}
        for vuln in self.vulnerabilities:
            severity_count[vuln['severity']] = severity_count.get(vuln['severity'], 0) + 1

        print("\nVULNERABILITY SUMMARY:")
        for severity, count in severity_count.items():
            print(f"  {severity}: {count}")

        return self.vulnerabilities

    def generate_report(self, filename="web_scan_report.json"):
        """Generate JSON report"""
        report = {
            'target_url': self.url,
            'scan_date': time.time(),
            'total_vulnerabilities': len(self.vulnerabilities),
            'vulnerabilities': self.vulnerabilities
        }

        import json
        with open(filename, 'w') as f:
            json.dump(report, f, indent=2)

        print(f"[+] Report saved to {filename}")

def main():
    parser = argparse.ArgumentParser(description="Custom Web Vulnerability Scanner")
    parser.add_argument("url", help="Target URL to scan")
    parser.add_argument("-t", "--timeout", type=int, default=10, help="Request timeout in seconds")
    parser.add_argument("-u", "--user-agent", help="Custom User-Agent string")
    parser.add_argument("-o", "--output", help="Output report file")
    parser.add_argument("--quick", action="store_true", help="Quick scan (skip comprehensive checks)")

    args = parser.parse_args()

    if not args.url.startswith(('http://', 'https://')):
        args.url = 'http://' + args.url

    scanner = WebVulnScanner(args.url, args.timeout, args.user_agent)
    vulnerabilities = scanner.scan(comprehensive=not args.quick)

    if args.output:
        scanner.generate_report(args.output)
    else:
        scanner.generate_report()

if __name__ == "__main__":
    main()