#!/usr/bin/env python3
"""
Cyber Security Course Progress Tracker
Tracks completion of modules, case studies, and labs
Generates progress reports and recommendations
"""

import os
import yaml
import json
from datetime import datetime
from pathlib import Path

class CyberSecurityProgressTracker:
    def __init__(self, course_path):
        self.course_path = Path(course_path)
        self.modules_path = self.course_path / "Modules"
        self.case_studies_path = self.course_path / "Case-Studies"
        self.progress_file = self.course_path / "progress.json"

    def scan_modules(self):
        """Scan all module directories and check completion status"""
        modules = {}
        if self.modules_path.exists():
            for module_dir in sorted(self.modules_path.iterdir()):
                if module_dir.is_dir():
                    module_name = module_dir.name
                    modules[module_name] = self.check_module_completion(module_dir)
        return modules

    def check_module_completion(self, module_path):
        """Check if a module has content and metadata"""
        content_files = list(module_path.glob("*.md"))
        has_content = len(content_files) > 0

        # Check for YAML front matter
        has_metadata = False
        if content_files:
            try:
                with open(content_files[0], 'r', encoding='utf-8') as f:
                    lines = f.readlines()[:10]  # Check first 10 lines
                    if any('---' in line for line in lines):
                        has_metadata = True
            except:
                pass

        return {
            'has_content': has_content,
            'has_metadata': has_metadata,
            'content_files': len(content_files),
            'last_modified': self.get_last_modified(module_path)
        }

    def scan_case_studies(self):
        """Scan case study files and extract metadata"""
        case_studies = {}
        if self.case_studies_path.exists():
            for cs_file in sorted(self.case_studies_path.glob("*.md")):
                if cs_file.name != "MASTER_CASE_STUDIES_INDEX.md":
                    case_studies[cs_file.stem] = self.extract_case_study_metadata(cs_file)
        return case_studies

    def extract_case_study_metadata(self, file_path):
        """Extract YAML metadata from case study file"""
        metadata = {
            'title': file_path.stem,
            'status': 'unknown',
            'difficulty': 'unknown',
            'impact': 'unknown',
            'module': 'unknown',
            'has_metadata': False
        }

        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

                # Check for YAML front matter
                if content.startswith('---'):
                    end_pos = content.find('---', 3)
                    if end_pos != -1:
                        yaml_content = content[3:end_pos]
                        try:
                            parsed = yaml.safe_load(yaml_content)
                            metadata.update(parsed)
                            metadata['has_metadata'] = True
                        except:
                            pass

        except Exception as e:
            print(f"Error reading {file_path}: {e}")

        return metadata

    def get_last_modified(self, path):
        """Get last modification time"""
        try:
            return datetime.fromtimestamp(path.stat().st_mtime).isoformat()
        except:
            return "unknown"

    def generate_report(self):
        """Generate comprehensive progress report"""
        modules = self.scan_modules()
        case_studies = self.scan_case_studies()

        report = {
            'generated_at': datetime.now().isoformat(),
            'course_path': str(self.course_path),
            'modules': modules,
            'case_studies': case_studies,
            'summary': self.calculate_summary(modules, case_studies)
        }

        return report

    def calculate_summary(self, modules, case_studies):
        """Calculate overall progress summary"""
        total_modules = len(modules)
        completed_modules = sum(1 for m in modules.values() if m['has_content'])

        total_case_studies = len(case_studies)
        completed_case_studies = sum(1 for cs in case_studies.values() if cs.get('status') == 'completed')

        return {
            'total_modules': total_modules,
            'completed_modules': completed_modules,
            'module_completion_rate': f"{completed_modules}/{total_modules}" if total_modules > 0 else "0/0",
            'total_case_studies': total_case_studies,
            'completed_case_studies': completed_case_studies,
            'case_study_completion_rate': f"{completed_case_studies}/{total_case_studies}" if total_case_studies > 0 else "0/0",
            'overall_completion': self.calculate_overall_completion(completed_modules, total_modules, completed_case_studies, total_case_studies)
        }

    def calculate_overall_completion(self, comp_mod, total_mod, comp_cs, total_cs):
        """Calculate weighted overall completion"""
        if total_mod == 0 and total_cs == 0:
            return "0%"

        mod_weight = 0.6  # 60% weight for modules
        cs_weight = 0.4   # 40% weight for case studies

        mod_score = (comp_mod / total_mod) if total_mod > 0 else 0
        cs_score = (comp_cs / total_cs) if total_cs > 0 else 0

        overall = (mod_score * mod_weight) + (cs_score * cs_weight)
        return f"{overall:.1%}"

    def save_progress(self, report):
        """Save progress report to JSON file"""
        with open(self.progress_file, 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2, ensure_ascii=False)

    def load_progress(self):
        """Load previous progress report"""
        if self.progress_file.exists():
            with open(self.progress_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        return None

    def generate_recommendations(self, report):
        """Generate learning recommendations based on progress"""
        recommendations = []

        summary = report['summary']

        if summary['completed_modules'] < summary['total_modules'] * 0.5:
            recommendations.append("Focus on completing core modules before advanced topics")

        if summary['completed_case_studies'] == 0:
            recommendations.append("Start with case studies to understand real-world applications")

        incomplete_modules = [name for name, data in report['modules'].items() if not data['has_content']]
        if incomplete_modules:
            recommendations.append(f"Complete these modules: {', '.join(incomplete_modules[:3])}")

        if not recommendations:
            recommendations.append("Great progress! Consider contributing new content or helping others")

        return recommendations

    def print_report(self, report):
        """Print formatted progress report"""
        print("🔐 Cyber Security Course Progress Report")
        print("=" * 50)
        print(f"Generated: {report['generated_at']}")
        print(f"Course Path: {report['course_path']}")
        print()

        summary = report['summary']
        print("📊 SUMMARY")
        print(f"Modules: {summary['module_completion_rate']}")
        print(f"Case Studies: {summary['case_study_completion_rate']}")
        print(f"Overall Completion: {summary['overall_completion']}")
        print()

        print("📚 MODULES STATUS")
        for name, data in report['modules'].items():
            status = "✅" if data['has_content'] else "❌"
            print(f"{status} {name}")
        print()

        print("📖 CASE STUDIES STATUS")
        for name, data in report['case_studies'].items():
            status = "✅" if data.get('status') == 'completed' else "❌"
            difficulty = data.get('difficulty', 'unknown')
            print(f"{status} {name} ({difficulty})")
        print()

        recommendations = self.generate_recommendations(report)
        print("🎯 RECOMMENDATIONS")
        for rec in recommendations:
            print(f"• {rec}")
        print()

def main():
    # Initialize tracker
    tracker = CyberSecurityProgressTracker("/var/www/html/Placement/Placement-01/11-Cyber-Security")

    # Generate report
    report = tracker.generate_report()

    # Save progress
    tracker.save_progress(report)

    # Print report
    tracker.print_report(report)

    print("💾 Progress saved to progress.json")
    print("🔄 Run this script regularly to track your learning progress!")

if __name__ == "__main__":
    main()