#!/usr/bin/env python3
"""
Ethical Hacking Learning Progress Tracker
"""

import json
import os
import argparse
from datetime import datetime, timedelta

class EthicalHackingTracker:
    def __init__(self):
        self.progress_file = os.path.expanduser("~/.ethical_hacking_progress.json")
        self.load_progress()

    def load_progress(self):
        """Load progress from file"""
        if os.path.exists(self.progress_file):
            with open(self.progress_file, 'r') as f:
                self.progress = json.load(f)
        else:
            self.progress = self.initialize_progress()

    def initialize_progress(self):
        """Initialize default progress structure"""
        return {
            'start_date': datetime.now().isoformat(),
            'last_updated': datetime.now().isoformat(),
            'modules': {
                'networking_fundamentals': {
                    'completed': False,
                    'score': 0,
                    'topics': ['TCP/IP', 'OSI Model', 'Subnetting', 'Network Devices'],
                    'completed_topics': []
                },
                'linux_basics': {
                    'completed': False,
                    'score': 0,
                    'topics': ['Command Line', 'File System', 'Permissions', 'Processes'],
                    'completed_topics': []
                },
                'reconnaissance': {
                    'completed': False,
                    'score': 0,
                    'topics': ['Passive Recon', 'Active Recon', 'DNS Enum', 'OSINT'],
                    'completed_topics': []
                },
                'scanning': {
                    'completed': False,
                    'score': 0,
                    'topics': ['Port Scanning', 'Service Detection', 'Vulnerability Scanning', 'Network Mapping'],
                    'completed_topics': []
                },
                'web_hacking': {
                    'completed': False,
                    'score': 0,
                    'topics': ['OWASP Top 10', 'SQL Injection', 'XSS', 'CSRF'],
                    'completed_topics': []
                },
                'system_hacking': {
                    'completed': False,
                    'score': 0,
                    'topics': ['Password Attacks', 'Privilege Escalation', 'Maintaining Access', 'Covering Tracks'],
                    'completed_topics': []
                },
                'wireless_hacking': {
                    'completed': False,
                    'score': 0,
                    'topics': ['WiFi Security', 'WEP/WPA Cracking', 'Wireless Recon', 'Evil Twin'],
                    'completed_topics': []
                },
                'exploitation': {
                    'completed': False,
                    'score': 0,
                    'topics': ['Metasploit', 'Exploit Development', 'Buffer Overflow', 'Shellcode'],
                    'completed_topics': []
                },
                'post_exploitation': {
                    'completed': False,
                    'score': 0,
                    'topics': ['Data Exfiltration', 'Persistence', 'Pivoting', 'Reporting'],
                    'completed_topics': []
                },
                'reporting': {
                    'completed': False,
                    'score': 0,
                    'topics': ['Report Writing', 'Evidence Collection', 'Remediation', 'Presentation'],
                    'completed_topics': []
                }
            },
            'certifications': {
                'ceh': {
                    'studying': False,
                    'exam_date': None,
                    'passed': False,
                    'study_hours': 0
                },
                'oscp': {
                    'studying': False,
                    'exam_date': None,
                    'passed': False,
                    'study_hours': 0
                },
                'comptia_security_plus': {
                    'studying': False,
                    'exam_date': None,
                    'passed': False,
                    'study_hours': 0
                }
            },
            'practice_labs': [],
            'achievements': [],
            'tools_mastered': [],
            'challenges_completed': []
        }

    def update_module(self, module_name, completed=False, score=0, topic=None):
        """Update module progress"""
        if module_name in self.progress['modules']:
            if completed:
                self.progress['modules'][module_name]['completed'] = completed
            if score > 0:
                self.progress['modules'][module_name]['score'] = score
            if topic and topic in self.progress['modules'][module_name]['topics']:
                if topic not in self.progress['modules'][module_name]['completed_topics']:
                    self.progress['modules'][module_name]['completed_topics'].append(topic)

            self.progress['last_updated'] = datetime.now().isoformat()
            self.save_progress()

    def complete_topic(self, module_name, topic):
        """Mark a specific topic as completed"""
        if module_name in self.progress['modules']:
            if topic in self.progress['modules'][module_name]['topics']:
                if topic not in self.progress['modules'][module_name]['completed_topics']:
                    self.progress['modules'][module_name]['completed_topics'].append(topic)
                    self.progress['last_updated'] = datetime.now().isoformat()
                    self.save_progress()
                    print(f"✅ Completed topic '{topic}' in {module_name}")

    def add_lab_completion(self, lab_name, platform="local", difficulty="easy"):
        """Add completed lab"""
        lab_entry = {
            'name': lab_name,
            'platform': platform,
            'difficulty': difficulty,
            'completed_date': datetime.now().isoformat()
        }
        self.progress['practice_labs'].append(lab_entry)
        self.progress['last_updated'] = datetime.now().isoformat()
        self.save_progress()
        print(f"🎯 Completed lab: {lab_name} ({difficulty})")

    def add_challenge_completion(self, challenge_name, platform, category="general"):
        """Add completed challenge"""
        challenge_entry = {
            'name': challenge_name,
            'platform': platform,
            'category': category,
            'completed_date': datetime.now().isoformat()
        }
        self.progress['challenges_completed'].append(challenge_entry)
        self.progress['last_updated'] = datetime.now().isoformat()
        self.save_progress()
        print(f"🏆 Completed challenge: {challenge_name}")

    def add_tool_mastery(self, tool_name, category="general"):
        """Add mastered tool"""
        if tool_name not in self.progress['tools_mastered']:
            tool_entry = {
                'name': tool_name,
                'category': category,
                'mastered_date': datetime.now().isoformat()
            }
            self.progress['tools_mastered'].append(tool_entry)
            self.progress['last_updated'] = datetime.now().isoformat()
            self.save_progress()
            print(f"🔧 Mastered tool: {tool_name}")

    def update_certification(self, cert_name, studying=None, exam_date=None, passed=None, hours=0):
        """Update certification progress"""
        if cert_name in self.progress['certifications']:
            if studying is not None:
                self.progress['certifications'][cert_name]['studying'] = studying
            if exam_date:
                self.progress['certifications'][cert_name]['exam_date'] = exam_date
            if passed is not None:
                self.progress['certifications'][cert_name]['passed'] = passed
            if hours > 0:
                self.progress['certifications'][cert_name]['study_hours'] += hours

            self.progress['last_updated'] = datetime.now().isoformat()
            self.save_progress()

    def calculate_overall_progress(self):
        """Calculate overall learning progress"""
        modules = self.progress['modules']
        completed_modules = sum(1 for m in modules.values() if m['completed'])
        total_modules = len(modules)

        # Calculate topic completion
        total_topics = sum(len(m['topics']) for m in modules.values())
        completed_topics = sum(len(m['completed_topics']) for m in modules.values())

        # Calculate weighted score
        module_completion_rate = completed_modules / total_modules if total_modules > 0 else 0
        topic_completion_rate = completed_topics / total_topics if total_topics > 0 else 0

        overall_score = (module_completion_rate * 0.6) + (topic_completion_rate * 0.4)

        return {
            'module_completion': f"{completed_modules}/{total_modules}",
            'topic_completion': f"{completed_topics}/{total_topics}",
            'overall_percentage': overall_score * 100,
            'labs_completed': len(self.progress['practice_labs']),
            'challenges_completed': len(self.progress['challenges_completed']),
            'tools_mastered': len(self.progress['tools_mastered']),
            'certifications_studying': sum(1 for c in self.progress['certifications'].values() if c['studying'])
        }

    def get_recommendations(self):
        """Get learning recommendations"""
        recommendations = []

        # Check incomplete modules
        incomplete_modules = [name for name, data in self.progress['modules'].items() if not data['completed']]
        if incomplete_modules:
            recommendations.append(f"Complete these modules: {', '.join(incomplete_modules[:3])}")

        # Check topic gaps
        for module_name, module_data in self.progress['modules'].items():
            incomplete_topics = [t for t in module_data['topics'] if t not in module_data['completed_topics']]
            if incomplete_topics and len(incomplete_topics) > len(module_data['completed_topics']):
                recommendations.append(f"Focus on {module_name}: {', '.join(incomplete_topics[:2])}")

        # Check practice
        if len(self.progress['practice_labs']) < 5:
            recommendations.append("Complete more practice labs to gain hands-on experience")

        # Check certifications
        studying_certs = [name for name, data in self.progress['certifications'].items() if data['studying']]
        if not studying_certs:
            recommendations.append("Consider starting certification preparation (CEH, OSCP, etc.)")

        if not recommendations:
            recommendations.append("Great progress! Consider contributing to the community or taking advanced challenges")

        return recommendations

    def save_progress(self):
        """Save progress to file"""
        with open(self.progress_file, 'w') as f:
            json.dump(self.progress, f, indent=2)

    def print_report(self):
        """Print progress report"""
        progress = self.calculate_overall_progress()

        print("🎯 Ethical Hacking Learning Progress Report")
        print("=" * 60)
        print(f"Started: {self.progress['start_date'][:10]}")
        print(f"Last Updated: {self.progress['last_updated'][:10]}")
        print(".1f"        print(f"Labs Completed: {progress['labs_completed']}")
        print(f"Challenges Completed: {progress['challenges_completed']}")
        print(f"Tools Mastered: {progress['tools_mastered']}")
        print(f"Certifications Studying: {progress['certifications_studying']}")
        print()

        print("📚 Module Status:")
        for module, data in self.progress['modules'].items():
            status = "✅" if data['completed'] else "❌"
            topics_done = len(data['completed_topics'])
            topics_total = len(data['topics'])
            score = f" ({data['score']}%)" if data['score'] > 0 else ""
            print(f"  {status} {module.replace('_', ' ').title()} [{topics_done}/{topics_total}]{score}")

        print("\n🏆 Recent Achievements:")
        recent_labs = self.progress['practice_labs'][-3:]  # Last 3 labs
        for lab in recent_labs:
            print(f"  🎯 {lab['name']} ({lab['difficulty']}) - {lab['completed_date'][:10]}")

        print("\n🔧 Tools Mastered:")
        recent_tools = self.progress['tools_mastered'][-3:]  # Last 3 tools
        for tool in recent_tools:
            print(f"  🔧 {tool['name']} - {tool['mastered_date'][:10]}")

        recommendations = self.get_recommendations()
        print("\n🎯 Recommendations:")
        for rec in recommendations:
            print(f"  • {rec}")

    def export_report(self, filename):
        """Export detailed report to file"""
        progress = self.calculate_overall_progress()
        recommendations = self.get_recommendations()

        report = {
            'generated_at': datetime.now().isoformat(),
            'progress': progress,
            'modules': self.progress['modules'],
            'certifications': self.progress['certifications'],
            'practice_labs': self.progress['practice_labs'],
            'tools_mastered': self.progress['tools_mastered'],
            'challenges_completed': self.progress['challenges_completed'],
            'recommendations': recommendations
        }

        with open(filename, 'w') as f:
            json.dump(report, f, indent=2)

        print(f"📄 Detailed report exported to {filename}")

def main():
    parser = argparse.ArgumentParser(description="Ethical Hacking Learning Progress Tracker")
    parser.add_argument('action', choices=['report', 'complete', 'topic', 'lab', 'challenge', 'tool', 'cert', 'export'],
                       help='Action to perform')
    parser.add_argument('--module', help='Module name')
    parser.add_argument('--topic', help='Topic name')
    parser.add_argument('--lab', help='Lab name')
    parser.add_argument('--challenge', help='Challenge name')
    parser.add_argument('--tool', help='Tool name')
    parser.add_argument('--cert', help='Certification name')
    parser.add_argument('--platform', default='local', help='Platform (for labs/challenges)')
    parser.add_argument('--difficulty', default='easy', choices=['easy', 'medium', 'hard', 'expert'],
                       help='Difficulty level')
    parser.add_argument('--score', type=int, help='Score/grade for module')
    parser.add_argument('--studying', action='store_true', help='Mark certification as studying')
    parser.add_argument('--passed', action='store_true', help='Mark certification as passed')
    parser.add_argument('--hours', type=int, help='Study hours for certification')
    parser.add_argument('--output', help='Output file for export')

    args = parser.parse_args()

    tracker = EthicalHackingTracker()

    if args.action == 'report':
        tracker.print_report()

    elif args.action == 'complete' and args.module:
        completed = True
        score = args.score or 0
        tracker.update_module(args.module, completed=completed, score=score)
        print(f"✅ Marked {args.module} as completed")

    elif args.action == 'topic' and args.module and args.topic:
        tracker.complete_topic(args.module, args.topic)

    elif args.action == 'lab' and args.lab:
        tracker.add_lab_completion(args.lab, args.platform, args.difficulty)

    elif args.action == 'challenge' and args.challenge:
        tracker.add_challenge_completion(args.challenge, args.platform)

    elif args.action == 'tool' and args.tool:
        tracker.add_tool_mastery(args.tool)

    elif args.action == 'cert' and args.cert:
        tracker.update_certification(args.cert, studying=args.studying,
                                   passed=args.passed, hours=args.hours or 0)
        status = []
        if args.studying: status.append("studying")
        if args.passed: status.append("passed")
        if args.hours: status.append(f"{args.hours} hours added")
        print(f"📚 Updated {args.cert}: {', '.join(status)}")

    elif args.action == 'export':
        filename = args.output or f"ethical_hacking_progress_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        tracker.export_report(filename)

    else:
        print("Usage examples:")
        print("  python3 progress_tracker.py report")
        print("  python3 progress_tracker.py complete --module networking_fundamentals --score 85")
        print("  python3 progress_tracker.py topic --module reconnaissance --topic 'Passive Recon'")
        print("  python3 progress_tracker.py lab --lab 'Metasploitable' --platform local --difficulty medium")
        print("  python3 progress_tracker.py tool --tool nmap")
        print("  python3 progress_tracker.py cert --cert ceh --studying --hours 10")
        print("  python3 progress_tracker.py export --output my_progress.json")

if __name__ == "__main__":
    main()