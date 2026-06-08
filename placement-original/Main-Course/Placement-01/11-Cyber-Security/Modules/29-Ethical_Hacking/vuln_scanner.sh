#!/bin/bash
# Automated Vulnerability Scanner

TARGET=$1
OUTPUT_DIR="scan_$(date +%Y%m%d_%H%M%S)"

if [ -z "$TARGET" ]; then
    echo "Usage: $0 <target>"
    echo "Example: $0 example.com"
    exit 1
fi

mkdir -p $OUTPUT_DIR

echo "[+] Starting vulnerability scan on $TARGET"
echo "[+] Results will be saved to: $OUTPUT_DIR"

# Nmap vulnerability scan
echo "[+] Running Nmap vuln scan..."
nmap -sV --script vuln $TARGET -oN $OUTPUT_DIR/nmap_vuln.txt

# Nikto web scan
echo "[+] Running Nikto web scan..."
nikto -h $TARGET -o $OUTPUT_DIR/nikto.txt

# OpenVAS scan (if configured)
echo "[+] Checking OpenVAS..."
if command -v omp &> /dev/null; then
    echo "[+] Running OpenVAS scan..."
    # This requires OpenVAS to be properly configured
    # omp -u admin -w password -h localhost -p 9390 --xml $OUTPUT_DIR/openvas.xml
    echo "OpenVAS scan requires manual configuration" > $OUTPUT_DIR/openvas_note.txt
else
    echo "OpenVAS not installed or not configured" > $OUTPUT_DIR/openvas_note.txt
fi

# Nuclei scan
echo "[+] Running Nuclei scan..."
if command -v nuclei &> /dev/null; then
    nuclei -u $TARGET -o $OUTPUT_DIR/nuclei.txt
else
    echo "Nuclei not installed" > $OUTPUT_DIR/nuclei_note.txt
fi

# SQLMap scan (basic)
echo "[+] Running SQLMap test..."
if command -v sqlmap &> /dev/null; then
    # Basic SQL injection test
    sqlmap -u "http://$TARGET/?id=1" --batch --output-dir=$OUTPUT_DIR/sqlmap
else
    echo "SQLMap not installed" > $OUTPUT_DIR/sqlmap_note.txt
fi

# Generate summary report
echo "[+] Generating summary report..."
cat > $OUTPUT_DIR/scan_summary.txt << EOF
VULNERABILITY SCAN SUMMARY
==========================

Target: $TARGET
Scan Date: $(date)
Output Directory: $OUTPUT_DIR

SCAN RESULTS:
-------------

1. Nmap Vulnerability Scan:
   - File: nmap_vuln.txt
   - Command: nmap -sV --script vuln $TARGET

2. Nikto Web Scan:
   - File: nikto.txt
   - Command: nikto -h $TARGET

3. Nuclei Scan:
   - File: nuclei.txt
   - Command: nuclei -u $TARGET

4. SQLMap Test:
   - Directory: sqlmap/
   - Command: sqlmap -u "http://$TARGET/?id=1" --batch

NEXT STEPS:
-----------
1. Review scan results for high/critical vulnerabilities
2. Verify findings manually
3. Prioritize remediation based on CVSS scores
4. Generate detailed penetration test report

EOF

echo "[+] Scan complete. Results in $OUTPUT_DIR"
echo "[+] Summary: $OUTPUT_DIR/scan_summary.txt"