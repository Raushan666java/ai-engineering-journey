#!/usr/bin/env python3
"""
Automated Reconnaissance Script
Performs comprehensive information gathering
"""

import subprocess
import sys
import os
import json
from datetime import datetime
import argparse
import socket
import requests
from urllib.parse import urlparse

class ReconAutomation:
    def __init__(self, target, output_dir=None):
        self.target = target
        self.is_domain = self._is_domain(target)
        self.output_dir = output_dir or f"recon_{target.replace('.', '_')}_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        os.makedirs(self.output_dir, exist_ok=True)
        self.results = {}

    def _is_domain(self, target):
        """Check if target is a domain or IP"""
        try:
            socket.inet_aton(target)
            return False  # IP address
        except socket.error:
            return True   # Domain name

    def run_nmap(self):
        """Run comprehensive Nmap scan"""
        print("[+] Running Nmap scan...")
        try:
            if self.is_domain:
                cmd = f"nmap -sV -sC -A -p- -T4 -oA {self.output_dir}/nmap {self.target}"
            else:
                cmd = f"nmap -sV -sC -A -p- -T4 -oA {self.output_dir}/nmap {self.target}"

            result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
            self.results['nmap'] = {
                'command': cmd,
                'output': result.stdout,
                'return_code': result.returncode
            }
            print("    ✅ Nmap scan completed")
        except Exception as e:
            print(f"    ❌ Nmap scan failed: {e}")
            self.results['nmap'] = {'error': str(e)}

    def run_dns_enum(self):
        """DNS enumeration"""
        print("[+] DNS enumeration...")
        try:
            cmd = f"dnsrecon -d {self.target} -t std -c {self.output_dir}/dnsrecon.csv"
            result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
            self.results['dns_enum'] = {
                'command': cmd,
                'output': result.stdout,
                'return_code': result.returncode
            }
            print("    ✅ DNS enumeration completed")
        except Exception as e:
            print(f"    ❌ DNS enumeration failed: {e}")
            self.results['dns_enum'] = {'error': str(e)}

    def run_subdomain_enum(self):
        """Subdomain enumeration"""
        print("[+] Subdomain enumeration...")
        try:
            # Using multiple tools for comprehensive enumeration
            tools = [
                f"sublist3r -d {self.target} -o {self.output_dir}/sublist3r.txt",
                f"amass enum -d {self.target} -o {self.output_dir}/amass.txt",
                f"findomain -t {self.target} -o {self.output_dir}/findomain.txt"
            ]

            for cmd in tools:
                try:
                    result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=300)
                    tool_name = cmd.split()[0]
                    self.results[f'subdomain_{tool_name}'] = {
                        'command': cmd,
                        'output': result.stdout,
                        'return_code': result.returncode
                    }
                except subprocess.TimeoutExpired:
                    print(f"    ⚠️  {cmd.split()[0]} timed out")
                except Exception as e:
                    print(f"    ❌ {cmd.split()[0]} failed: {e}")

            print("    ✅ Subdomain enumeration completed")
        except Exception as e:
            print(f"    ❌ Subdomain enumeration failed: {e}")

    def run_web_recon(self):
        """Web application reconnaissance"""
        print("[+] Web application reconnaissance...")
        try:
            # Check if target is web-accessible
            if self.is_domain:
                url = f"http://{self.target}"
                https_url = f"https://{self.target}"
            else:
                url = f"http://{self.target}"
                https_url = f"https://{self.target}"

            # Test HTTP
            try:
                response = requests.get(url, timeout=10, allow_redirects=True)
                self.results['web_http'] = {
                    'url': url,
                    'status_code': response.status_code,
                    'headers': dict(response.headers),
                    'redirects': len(response.history)
                }
            except:
                self.results['web_http'] = {'error': 'HTTP not accessible'}

            # Test HTTPS
            try:
                response = requests.get(https_url, timeout=10, allow_redirects=True, verify=False)
                self.results['web_https'] = {
                    'url': https_url,
                    'status_code': response.status_code,
                    'headers': dict(response.headers),
                    'redirects': len(response.history)
                }
            except:
                self.results['web_https'] = {'error': 'HTTPS not accessible'}

            print("    ✅ Web reconnaissance completed")
        except Exception as e:
            print(f"    ❌ Web reconnaissance failed: {e}")

    def run_dirbusting(self):
        """Directory busting"""
        print("[+] Directory busting...")
        try:
            if self.is_domain:
                url = f"http://{self.target}"
            else:
                url = f"http://{self.target}"

            cmd = f"gobuster dir -u {url} -w /usr/share/wordlists/dirb/common.txt -o {self.output_dir}/directories.txt -t 50"
            result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=600)
            self.results['dirbusting'] = {
                'command': cmd,
                'output': result.stdout,
                'return_code': result.returncode
            }
            print("    ✅ Directory busting completed")
        except subprocess.TimeoutExpired:
            print("    ⚠️  Directory busting timed out")
        except Exception as e:
            print(f"    ❌ Directory busting failed: {e}")

    def run_shodan_search(self):
        """Shodan search for target"""
        print("[+] Shodan search...")
        try:
            # This would require Shodan API key
            # For now, just note that Shodan search is available
            self.results['shodan'] = {
                'note': 'Shodan search requires API key. Use: shodan search <target>',
                'available': True
            }
            print("    ✅ Shodan search noted (requires API key)")
        except Exception as e:
            print(f"    ❌ Shodan search failed: {e}")

    def generate_report(self):
        """Generate comprehensive recon report"""
        print("[+] Generating report...")

        report = {
            'target': self.target,
            'scan_date': datetime.now().isoformat(),
            'is_domain': self.is_domain,
            'results': self.results,
            'summary': self._generate_summary()
        }

        # Save JSON report
        with open(f"{self.output_dir}/recon_report.json", 'w') as f:
            json.dump(report, f, indent=2)

        # Generate text summary
        self._generate_text_report(report)

        print(f"[+] Recon complete. Results in {self.output_dir}")

    def _generate_summary(self):
        """Generate summary of findings"""
        summary = {
            'total_scans': len(self.results),
            'successful_scans': sum(1 for r in self.results.values() if 'error' not in r),
            'findings': {}
        }

        # Extract key findings
        if 'nmap' in self.results and 'error' not in self.results['nmap']:
            summary['findings']['ports'] = 'Nmap scan completed'

        if 'web_http' in self.results and 'error' not in self.results['web_http']:
            summary['findings']['web_server'] = f"HTTP {self.results['web_http']['status_code']}"

        if 'web_https' in self.results and 'error' not in self.results['web_https']:
            summary['findings']['ssl'] = f"HTTPS {self.results['web_https']['status_code']}"

        return summary

    def _generate_text_report(self, report):
        """Generate human-readable text report"""
        with open(f"{self.output_dir}/recon_summary.txt", 'w') as f:
            f.write("=" * 60 + "\n")
            f.write("RECONNAISSANCE REPORT\n")
            f.write("=" * 60 + "\n\n")
            f.write(f"Target: {report['target']}\n")
            f.write(f"Scan Date: {report['scan_date'][:19]}\n")
            f.write(f"Type: {'Domain' if report['is_domain'] else 'IP Address'}\n\n")

            f.write("SUMMARY\n")
            f.write("-" * 20 + "\n")
            summary = report['summary']
            f.write(f"Total Scans: {summary['total_scans']}\n")
            f.write(f"Successful: {summary['successful_scans']}\n\n")

            f.write("KEY FINDINGS\n")
            f.write("-" * 20 + "\n")
            for finding, value in summary['findings'].items():
                f.write(f"• {finding.replace('_', ' ').title()}: {value}\n")

            f.write("\nDETAILED RESULTS\n")
            f.write("-" * 20 + "\n")
            for scan_name, result in report['results'].items():
                f.write(f"\n{scan_name.upper().replace('_', ' ')}\n")
                if 'error' in result:
                    f.write(f"❌ Error: {result['error']}\n")
                elif 'status_code' in result:
                    f.write(f"✅ Status: {result['status_code']}\n")
                elif 'return_code' in result and result['return_code'] == 0:
                    f.write("✅ Completed successfully\n")
                else:
                    f.write("✅ Scan completed\n")

    def run_full_recon(self):
        """Run complete reconnaissance"""
        print(f"[+] Starting reconnaissance on {self.target}")
        print(f"[+] Results will be saved to: {self.output_dir}")

        self.run_nmap()
        if self.is_domain:
            self.run_dns_enum()
            self.run_subdomain_enum()
        self.run_web_recon()
        self.run_dirbusting()
        self.run_shodan_search()
        self.generate_report()

def main():
    parser = argparse.ArgumentParser(description="Automated Reconnaissance Tool")
    parser.add_argument("target", help="Target domain or IP address")
    parser.add_argument("-o", "--output", help="Output directory (optional)")
    parser.add_argument("--quick", action="store_true", help="Quick scan (skip intensive checks)")

    args = parser.parse_args()

    if not args.target:
        print("Usage: python3 recon_auto.py <target> [-o output_dir] [--quick]")
        sys.exit(1)

    recon = ReconAutomation(args.target, args.output)

    if args.quick:
        # Quick mode - only essential scans
        recon.run_nmap()
        recon.run_web_recon()
        recon.generate_report()
    else:
        recon.run_full_recon()

if __name__ == "__main__":
    main()